'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _googleMaterialDesignLite = require('google/material-design-lite');

var _mdlSelectfieldConstructor = require('./mdl-selectfield-constructor');

_googleMaterialDesignLite.componentHandler.register({
    constructor: _mdlSelectfieldConstructor.MaterialSelectfield,
    classAsString: 'MaterialSelectfield',
    cssClass: 'mdl-js-selectfield',
    widget: true
});

var MdlSelectfieldCustomAttribute = (function () {
    function MdlSelectfieldCustomAttribute(element) {
        _classCallCheck(this, _MdlSelectfieldCustomAttribute);

        this.element = element;
    }

    _createClass(MdlSelectfieldCustomAttribute, [{
        key: 'attached',
        value: function attached() {
            var _this = this;

            this.upgradeElement(this.element);
            this.element.addEventListener('change', function () {
                _this.upgradeElement(_this.element);
            });
        }
    }, {
        key: 'upgradeElement',
        value: function upgradeElement(element) {
            element.setAttribute("class", 'mdl-selectfield mdl-js-selectfield ' + element.getAttribute('class'));

            _googleMaterialDesignLite.componentHandler.upgradeElement(element, 'MaterialSelectfield');

            this.manageRipple(element);
        }
    }, {
        key: 'manageRipple',
        value: function manageRipple(element) {
            var classes = element.getAttribute('class');

            if (/mdl-js-ripple-effect/g.test(classes)) _googleMaterialDesignLite.componentHandler.upgradeElement(element, "MaterialRipple");
        }
    }]);

    var _MdlSelectfieldCustomAttribute = MdlSelectfieldCustomAttribute;
    MdlSelectfieldCustomAttribute = (0, _aureliaFramework.customAttribute)('mdl-selectfield')(MdlSelectfieldCustomAttribute) || MdlSelectfieldCustomAttribute;
    MdlSelectfieldCustomAttribute = (0, _aureliaFramework.inject)(Element)(MdlSelectfieldCustomAttribute) || MdlSelectfieldCustomAttribute;
    return MdlSelectfieldCustomAttribute;
})();

exports.MdlSelectfieldCustomAttribute = MdlSelectfieldCustomAttribute;
//# sourceMappingURL=mdl-selectfield.js.map
