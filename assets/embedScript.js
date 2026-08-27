// window._storeEmbed_variables = { iframeURL: 'http://localhost:3000/' };
window._storeEmbed_variables = { iframeURL: 'https://ada-embed-for-cyberhub.web.app/' };

function getEmbedOrigin() {
  var url = (window._storeEmbed_variables || {}).iframeURL;
  try {
    return new URL(url, window.location.href).origin;
  } catch (e) {
    return null;
  }
}

function checkAda() {
  setTimeout(() => {
    initialization();
  }, )
}

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState !== 'loading')
        fn();
    });
  }
}

function isValidJSON(data) {
    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
}

function initEmbed(htmlElement) {
  var embedOrigin = getEmbedOrigin();

  // toggler event
  htmlElement.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var frame = document.getElementById('_ada-friendly-embed_');
    if (!frame) return;
    frame.style.display = 'block';
    setTimeout(function() {
      if (!frame.contentWindow || !embedOrigin) return;
      frame.contentWindow.postMessage('menu', embedOrigin);
    }, 100);
  };

  // listener for iframe
  window.addEventListener('message', function(e) {
    var frame = document.getElementById('_ada-friendly-embed_');

    // Only the embed iframe may talk to us. Both checks matter: the origin
    // check rejects other sites, the source check rejects other frames that
    // happen to be loaded from the same origin.
    if (!embedOrigin || e.origin !== embedOrigin) return;
    if (!frame || e.source !== frame.contentWindow) return;

    if (e?.data && isValidJSON(e.data)) {
      const data = JSON.parse(e.data);
      switch (data.type) {
        case 'close':
          frame.style.display = 'none';
          return;
        case 'function':
          // The embed applies host-page accessibility settings (contrast, text
          // size, spacing) by shipping serialized functions across the frame
          // boundary. Gated on the origin/source checks above.
          const receivedFunction = new Function('return ' + data.action)();
          receivedFunction();
          return;
        default:
          return;
      }
    }
  });
}

function initialization() {
  // css initialization
  const style = document.createElement('style');
  style.id = '_ada-friendly-embed-style_';
  style.innerHTML = `
    #_ada-friendly-embed-button-wrapper_ {
      display: none;
      position: fixed;
      z-index: 99999999999;
      left: 16px;
      bottom: 16px;
    }
    #_ada-friendly-embed_ {
      display: none;
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: transparent;
      top: 0px;
      left: 0px;
      z-index: 100000;
      border: none;
    }
    ._ada-friendly-embed-button_ {
      background: rgb(6, 98, 162) !important;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      cursor: pointer;
      font-family: 'Helvetica';
      z-index: 100000;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ._ada-friendly-embed-button-inner_ {
      font-size: 20px;
      color: white;
    }
    #_ada-friendly-embed-tooltip_ {
      display: none;
      opacity: 0;
      white-space: nowrap;
      position: absolute !important;
      box-sizing: border-box !important;
      border: solid 2px #fff !important;
      background: #34394d !important;
      color: #fff !important;
      font-weight: 600 !important;
      font-size: 17px !important;
      border-radius: 10px;
      text-align: left !important;
      padding: 13px 18px;
      box-shadow: 0 0 15px rgba(66, 73, 96, .4);
      height: auto !important;
      z-index: 2147483647;
      transform: translate(-50%);
    }
  `;
  document.body.appendChild(style);

  // iframe initialization
  var { iframeURL } = window._storeEmbed_variables || {};

  // Built via DOM APIs rather than innerHTML so the URL can never break out of
  // the src attribute, and rejected unless it resolves to an http(s) origin.
  var embedOrigin = getEmbedOrigin();
  if (!embedOrigin || !/^https?:$/.test(new URL(iframeURL, window.location.href).protocol)) {
    return;
  }

  var iframeWrapper = document.createElement("div");

  var iframe = document.createElement("iframe");
  iframe.id = '_ada-friendly-embed_';
  iframe.setAttribute('allowTransparency', 'true');
  iframe.setAttribute('frameborder', '0');
  iframe.src = iframeURL;

  iframeWrapper.appendChild(iframe);
  document.body.appendChild(iframeWrapper);

  var toggler = document.createElement("div");
  toggler.setAttribute('ada-ignore', 'true');
  toggler.id = `_ada-friendly-embed-button-wrapper_`;
  toggler.innerHTML = `
    <div class="_ada-friendly-embed-button_">
    </div>
  `;
  document.body.appendChild(toggler);
  initEmbed(toggler);
}

ready(checkAda);
