export class MaterialSelectfield {
    CssClasses_ = {
        LABEL: 'mdl-selectield__label',
        SELECT: 'mdl-selectfield__select',
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded'
    };

    Constant_ = {
        // None for now
    };

    /**
     * Class constructor for Select field MDL component.
     * Implements custom MDL component design pattern not defined yet.
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */
    constructor(element) {

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
    onFocus_(event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    }

    /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    onBlur_(event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    }

    /**
     * Handle reset event from outside.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    onReset_(event) {
        this.updateClasses_();
    }

    /**
     * Handle class updates.
     *
     * @private
     */
    updateClasses_() {
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
    checkDisabled() {
        if(this.select_.disabled) {
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
    checkValidity() {
        if(this.select_.validity.valid) {
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
    checkDirty() {
        if(this.select_.value && this.select_.value.length > 0) {
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
    disable() {
        this.select_.disabled = true;
        this.updateClasses_();
    }

    /**
     * Enable select field.
     *
     * @public
     */
    enable() {
        this.select_.disabled = false;
        this.updateClasses_();
    }

    /**
     * Update select field value.
     *
     * @param {string} value The value to which to set the control (optional).
     * @public
     */
    change(value) {
        if(value) {
            this.select_.value = value;
        }
        this.updateClasses_();
    }

    /**
     * Initialize element.
     */
    init() {
        if(this.element_) {
            this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
            this.select_ = this.element_.querySelector('.' + this.CssClasses_.SELECT);

            if(this.select_) {
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
    mdlDowngrade_() {
        this.select_.removeEventListener('change', this.boundUpdateClassesHandler);
        this.select_.removeEventListener('focus', this.boundFocusHandler);
        this.select_.removeEventListener('blur', this.boundBlurHandler);
        this.select_.removeEventListener('reset', this.boundResetHandler);
    }
}
