import {inject, customAttribute} from 'aurelia-framework';
import {componentHandler} from 'google/material-design-lite';
import {MaterialSelectfield} from './mdl-selectfield-constructor';

componentHandler.register({
    constructor: MaterialSelectfield,
    classAsString: 'MaterialSelectfield',
    cssClass: 'mdl-js-selectfield',
    widget: true
});


@inject(Element)
@customAttribute('mdl-selectfield')
export class MdlSelectfieldCustomAttribute {
    constructor(element) {
        this.element = element;
    }

    attached() {
        this.upgradeElement(this.element);
        this.element.addEventListener('change', () => {
            this.upgradeElement(this.element);
        });
    }

    upgradeElement(element){
        element.setAttribute("class", 'mdl-selectfield mdl-js-selectfield ' + element.getAttribute('class'));

        componentHandler.upgradeElement(element, 'MaterialSelectfield');

        this.manageRipple(element);
    }

    manageRipple(element){
        let classes = element.getAttribute('class');

        if(/mdl-js-ripple-effect/g.test(classes))
            componentHandler.upgradeElement(element, "MaterialRipple");
    }
}
