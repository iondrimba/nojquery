requirejs(['NoJQuery'], function(NoJQuery) {
    var $$ = NoJQuery;

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
    };
     function prepend() {
        $$('li').prepend('<div>prepend hello</div>');
    };


    // function click(evt) {
    //     console.log('click', evt.target.id);
    // };

    // function clickContains() {
    //     var result = $$.find('.lista-contains').contains('#first-li');
    //     console.log(result);
    //     result = $$.find('.lista-contains').contains('.second-li');
    //     console.log(result);
    //     result = $$.find('.lista-contains').contains('.second');
    //     console.log(result);
    // };

    // function addListenerClick() {
    //     console.log('Listener click added');
    // };

    // function removeListenerClick() {
    //     console.log('Listener click removed');
    //     $$.find('#btn-addlistener').off('click', addListenerClick);
    // };

    // function addClick() {
    //     $$.find('button').on('click', click);
    // };

    // function removeClick() {
    //     $$.find('#btn-contains').on('click', clickContains);
    // };

    // function addListener() {
    //     $$.find('#btn-addlistener').on('click', addListenerClick);
    // };

    // function removeListener() {
    //     $$.find('#btn-removelistener').on('click', removeListenerClick);
    // };

    // function onEach(elmt, index) {
    //     $$.cast(elmt).addClass('colored-background');
    // };

    // function each() {
    //     $$.find('button').each(onEach);
    //     console.log('----');
    //     $$.find('li').each(onEach);
    // };
    // function onEachTextContent(elmt, index) {
    //     $$.cast(elmt).text('text' + index);
    // };    
    // function getAttr() {
    //     var result = $$.find('#btn-addlistener').getAttr('id');
    //     console.log(result);
    // };
    // function setAttr() {
    //     var result = $$.find('button').setAttr('state', 'aaaaa').setAttr('readonly', '1');
    //     console.log(result.elmts);
    // };


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
    // addClick();
    // removeClick();    
    // addListener();
    // removeListener();
    // each();        


});
