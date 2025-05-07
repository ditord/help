// window._storeEmbed_variables = { iframeURL: 'http://localhost:3000/' };
window._storeEmbed_variables = { iframeURL: 'https://ada-embed-for-cyberhub.web.app/' };

function checkAda() {
  initialization();
}

checkAda();

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
  // toggler event
  htmlElement.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('_ada-friendly-embed_').style.display = 'block';
    setTimeout(function() {
      // document.getElementById('_ada-friendly-embed_').contentWindow.postMessage('_ada-friendly-embed_true', '*');
      document.getElementById('_ada-friendly-embed_').contentWindow.postMessage('menu', '*');
    }, 100);
  };

  // listener for iframe
  window.addEventListener('message', function(e) {
    if (e?.data && isValidJSON(e.data)) {
      const data = JSON.parse(e.data);
      switch (data.type) {
        case 'close':
          document.getElementById('_ada-friendly-embed_').style.display = 'none';
          return;
        case 'function':
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
      left: 30px;
      bottom: 30px;
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
      background: linear-gradient(90deg, #006be6, #0260dd, #0555d4, #0749cb, #093ec2) !important;
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

  var iframeWrapper = document.createElement("div");
  
  var iframe = `<iframe
    id="_ada-friendly-embed_"
    allowTransparency="true"
    frameborder="0"
    src='${iframeURL}'
  />`;

  iframeWrapper.innerHTML = iframe
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
