window._ = require('lodash');
try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap/dist/js/bootstrap.min');
} catch (e) {}

require('slick-carousel/slick/slick');
// require('select2/dist/js/select2');
// window.WOW = require('wowjs/dist/wow');
// require('jquery-directional-hover/src/jquery.directional-hover');
// require('mmenu-js/src/mmenu');
// require('sticky-sidebar/src/jquery.sticky-sidebar');

// window.ParsleyConfig = {
//     excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], input.exclude_validation',
//     trigger: 'change',
//     errorsWrapper: '<div class="parsley-errors-list"></div>',
//     errorTemplate: '<span></span>',
//     errorClass: 'is-invalid',
//     successClass: 'is-valid',
//     errorsContainer: function (ParsleyField) {
//         var element = ParsleyField.$element;
//         if (element.is(':file')){
//             return element.parents('.upload-btn-wrapper');
//         }
//         return element.closest('.form-control');
//     },
//     classHandler: function (ParsleyField) {
//         var element = ParsleyField.$element;
//         if( element.is(':checkbox') || element.is(':radio') || element.parent().is('label') || $(element).is('[data-md-selectize]') ) {
//             return element.closest('.form-control');
//         } else if (element.is(':file')) {
//             return element.parents('.upload-btn-wrapper');
//         }
//     }
// };
// require('parsleyjs/dist/parsley');
