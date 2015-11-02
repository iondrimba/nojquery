requirejs(['NoJQuery'], function(NoJQuery) {
    var $$ = NoJQuery;
console.log('hello');
    function findElements() {
        var elmts = $$('li').find('div').find('a');
        elmts.each(function(elmt, index) {
            console.log(elmt, index);
        });

        elmts = $$('li');
        elmts.each(function(elmt, index) {
            //console.log(elmt, index);
        });
    };

    function addClass() {
        return $$('li').addClass('colored-background');
    };

    function hasClass() {
        var bool = $$('li').hasClass('colored-background');
        console.log('hasClass', bool);
    };

    function removeClass() {
        return $$('li').removeClass('colored-background');
    };

    function contains() {
        var result = $$('li').contains('a');
        console.log(result);
    };

    function empty() {
        $$('li').find('a').empty();
    };

    function textContent() {
        $$('li').find('a').text('Link A');
    };

    function htmlContent() {
        $$('li').each(onEachHtmlContent);
    };

    function onEachHtmlContent(elmt, index) {
        $$(elmt).html('<div> DIV -' + index + '</div>');
    };

    function getAttr() {
        var result = $$('#btn-addlistener').getAttr('id');
        console.log(result);
    };

    function setAttr() {
        var result = $$('button').setAttr('state', 'aaaaa').setAttr('readonly', '1');
    };

    function removeElmts() {
        var result = $$('li').find('div').remove();
        console.log(result);
    };

    function next() {
        var result = $$('#btn-addlistener').next().remove();
    };

    function prev() {
        $$('#btn-removeclass').prev().remove();
    };

    function append() {
        $$('li').append('<div>hello append</div>');        
        $$('li').append($$('#btn-one'));
    };

    function prepend() {
        $$('li').find('div').prepend('<div>prepend hello</div>');
        $$('li').find('div:first-child').prepend($$('#btn-two'));
    };

    function onButtonClick(evt) {
        console.log('click', evt.currentTarget);
    };

    function addListener() {
        $$('button').on('click', onButtonClick);
    };

    function removeListener() {
        $$('button').off('click', onButtonClick);
    };

    findElements(); 
    addClass();
    hasClass();
    removeClass();
    contains();
    empty();
    textContent();
    htmlContent();
    getAttr();
    setAttr();
    removeElmts();
    next();
    prev();
    append();
    prepend();
    addListener();
    removeListener();
});
