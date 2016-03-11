# NoJQuery 
Used for personal projects/simple apps with little DOM interactions.

[![Travis build status](https://travis-ci.org/iondrimba/nojquery.svg?branch=master)](https://travis-ci.org/iondrimba/nojquery) [![Coverage Status](https://coveralls.io/repos/iondrimba/nojquery/badge.svg?branch=master&service=github)](https://coveralls.io/github/iondrimba/nojquery?branch=master)

### [Live Demo]

Minified version: 6kb

Gziped version: 2kb

### Implementation :
UMD ready. It can be loaded via AMD, CommonJs and as global namespace.

#### AMD
```js
define(['nojquery'], function(NoJQuery){
    var $$ = NoJQuery;
});
```
#### CommonJS
```js
var $$ = require('nojquery');
```
#### Global namespace
```js
var $$ = window.NoJQuery;
```

#### API

##### find :
#
```js
var result = $$('selector').find('child-element');
console.log(result.elmts[0]);
```
##### addClass :
#
```js
$$('selector').addClass('some-class');
```
##### hasClass :
#
```js
var bool = $$('selector').hasClass('some-class');
console.log(bool);
```
##### removeClass :
#
```js
$$('selector').removeClass('some-class');
```
##### contains :
#
```js
var result = $$('selector').contains('some-selector');
console.log(result);
```
##### empty :
#
```js
$$('selector').empty();
```
##### text :
#
```js
$$('selector').text('Hello');
```
##### html :
#
```js
$$('selector').html('<a href="/" > Link </a>');
```
##### getAttr :
#
```js
var result = $$('selector').getAttr('attrName');
console.log(result);
```
##### setAttr :
#
```js
$$('selector').setAttr('readonly', 1);
```
##### removeAttr :
#
```js
$$('selector').removeAttr('readonly');
```
##### remove :
#
```js
$$('selector').remove();
```
##### next :
#
```js
var result = $$('selector').next();
console.log(result.elmts[0]);
```
##### prev :
#
```js
var result = $$('selector').prev();
console.log(result.elmts[0]);
```

##### append :
#
```js
$$('selector').append('<div>Hello</div>');
$$('selector').append($$('selector-elmt'));
```
##### prepend :
#
```js
$$('selector').prepend('<div>Hello</div>');
$$('selector').prepend($$('selector-elmt'));
```

##### on :
#
```js
function onButtonClick(evt) {
    console.log('click', evt.currentTarget);
};
$$('selector').on('click', onButtonClick);
```
##### off :
#
```js
$$('selector').off('click', onButtonClick);
```
[npm-url]: https://www.npmjs.com/package/nojquery
[Live Demo]: http://iondrimba.github.io/nojquery/
