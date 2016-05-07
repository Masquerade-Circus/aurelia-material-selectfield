# Aurelia Material Selectfield

Aurelia Custom SelectField for [Material Design Lite](http://www.getmdl.io). 

This is just the select component and is thinked as a companion of [Aurelia Material](https://github.com/redpelicans/aurelia-material).

## The problem

> Material Design Lite has been designed for static html sites. To use it on dynamic ones, we have to register explictly new DOM elements (see MDL)

Also, [Material Design Lite](http://www.getmdl.io) doesn't have a selectfield component and therefore neither [Aurelia Material](https://github.com/redpelicans/aurelia-material). So this plugin tried to solve this. 

It is the [Mdl-Selectfield](https://github.com/mebibou/mdl-selectfield) component amended as plugin for [Aurelia framework](http://aurelia.io/). See the Mebibou [Demo](http://codepen.io/mebibou/pen/pjEjOv)

## Code
This plugin add the `CustomAttribute` mdl-selectfield. This CustomAttribute is in charge of the registration of all the select fields with this attribute.

So you need to write your select element like this:
```html
<div mdl-selectfield class="mdl-selectfield--floating-label">
  <select class="mdl-selectfield__select" id="professsion" name="professsion">
    <option value=""></option>
    <option value="option1">option 1</option>
    <option value="option2">option 2</option>
    <option value="option3">option 3</option>
    <option value="option4">option 4</option>
    <option value="option5">option 5</option>
  </select>
  <label class="mdl-selectfield__label" for="professsion">Profession</label>
</div>
```

## Install

1. In your project install the plugin via `jspm` with following command

  ```
    $ jspm install github:Masquerade-Circus/aurelia-material-selectfield
  ```

2. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

  ```html
  <body aurelia-app="main">
  ...
  ```
  
3. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        // Install the plugin
        .plugin('Masquerade-Circus/aurelia-material-selectfield');
  
    aurelia.start().then(a => a.setRoot());
  }
  ```
  
4. Include material-selectfield css in your `index.html`
  
  ```html
    <link rel="stylesheet" href="jspm_packages/github/Masquerade-Circus/aurelia-material-selectfield@master/mdl-selectfield.css">
  ```
  
5. Use the selectfield component as explained.
