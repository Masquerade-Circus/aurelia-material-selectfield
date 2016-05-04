'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MaterialSelectfield = (function () {
    // None for now

    /**
     * Class constructor for Select field MDL component.
     * Implements custom MDL component design pattern not defined yet.
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

    function MaterialSelectfield(element) {
        _classCallCheck(this, MaterialSelectfield);

        this.CssClasses_ = {
            LABEL: 'mdl-selectield__label',
            SELECT: 'mdl-selectfield__select',
            IS_DIRTY: 'is-dirty',
            IS_FOCUSED: 'is-focused',
            IS_DISABLED: 'is-disabled',
            IS_INVALID: 'is-invalid',
            IS_UPGRADED: 'is-upgraded'
        };
        this.Constant_ = {};

        this.element_ = element;
        // Initialize instance.
        this.init();

        window['MaterialSelectfield'] = this;
    }

    /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */

    _createClass(MaterialSelectfield, [{
        key: 'onFocus_',
        value: function onFocus_(event) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
        }

        /**
         * Handle lost focus.
         *
         * @param {Event} event The event that fired.
         * @private
         */
    }, {
        key: 'onBlur_',
        value: function onBlur_(event) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
        }

        /**
         * Handle reset event from outside.
         *
         * @param {Event} event The event that fired.
         * @private
         */
    }, {
        key: 'onReset_',
        value: function onReset_(event) {
            this.updateClasses_();
        }

        /**
         * Handle class updates.
         *
         * @private
         */
    }, {
        key: 'updateClasses_',
        value: function updateClasses_() {
            this.checkDisabled();
            this.checkValidity();
            this.checkDirty();
        }

        // Public methods.

        /**
         * Check the disabled state and update field accordingly.
         *
         * @public
         */
    }, {
        key: 'checkDisabled',
        value: function checkDisabled() {
            if (this.select_.disabled) {
                this.element_.classList.add(this.CssClasses_.IS_DISABLED);
            } else {
                this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
            }
        }

        /**
         * Check the validity state and update field accordingly.
         *
         * @public
         */
    }, {
        key: 'checkValidity',
        value: function checkValidity() {
            if (this.select_.validity.valid) {
                this.element_.classList.remove(this.CssClasses_.IS_INVALID);
            } else {
                this.element_.classList.add(this.CssClasses_.IS_INVALID);
            }
        }

        /**
         * Check the dirty state and update field accordingly.
         *
         * @public
         */
    }, {
        key: 'checkDirty',
        value: function checkDirty() {
            if (this.select_.value && this.select_.value.length > 0) {
                this.element_.classList.add(this.CssClasses_.IS_DIRTY);
            } else {
                this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
            }
        }

        /**
         * Enable select field.
         *
         * @public
         */
    }, {
        key: 'disable',
        value: function disable() {
            this.select_.disabled = true;
            this.updateClasses_();
        }

        /**
         * Enable select field.
         *
         * @public
         */
    }, {
        key: 'enable',
        value: function enable() {
            this.select_.disabled = false;
            this.updateClasses_();
        }

        /**
         * Update select field value.
         *
         * @param {string} value The value to which to set the control (optional).
         * @public
         */
    }, {
        key: 'change',
        value: function change(value) {
            if (value) {
                this.select_.value = value;
            }
            this.updateClasses_();
        }

        /**
         * Initialize element.
         */
    }, {
        key: 'init',
        value: function init() {
            if (this.element_) {
                this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
                this.select_ = this.element_.querySelector('.' + this.CssClasses_.SELECT);

                if (this.select_) {
                    this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
                    this.boundFocusHandler = this.onFocus_.bind(this);
                    this.boundBlurHandler = this.onBlur_.bind(this);
                    this.boundResetHandler = this.onReset_.bind(this);
                    this.select_.addEventListener('change', this.boundUpdateClassesHandler);
                    this.select_.addEventListener('focus', this.boundFocusHandler);
                    this.select_.addEventListener('blur', this.boundBlurHandler);
                    this.select_.addEventListener('reset', this.boundResetHandler);

                    this.updateClasses_();
                    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
                }
            }
        }

        /**
         * Downgrade the component
         *
         * @private
         */
    }, {
        key: 'mdlDowngrade_',
        value: function mdlDowngrade_() {
            this.select_.removeEventListener('change', this.boundUpdateClassesHandler);
            this.select_.removeEventListener('focus', this.boundFocusHandler);
            this.select_.removeEventListener('blur', this.boundBlurHandler);
            this.select_.removeEventListener('reset', this.boundResetHandler);
        }
    }]);

    return MaterialSelectfield;
})();

exports.MaterialSelectfield = MaterialSelectfield;
//# sourceMappingURL=mdl-selectfield-constructor.js.map
