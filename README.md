# NoJQuery 
Used for personal projects/simple apps with little DOM interactions.

Minified version: 6kb

### Future improvements:
1. Cleaner and more intuitive API [ok]
2. Test for each method 
3. Documentation

### Implementation :
It can be loaded with via AMD, CommonJs and as global namespace.

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