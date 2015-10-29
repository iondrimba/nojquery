requirejs(['NoJQuery'], function(NoJQuery) {
    var $$ = NoJQuery;

    function findElements() {
        var elmts = $$('li').find('div').find('a');
        elmts.each(function(elmt, index){
            console.log(elmt, index);
        });

        elmts = $$('li');
        elmts.each(function(elmt, index){
            console.log(elmt, index);
        });

    };

    function click(evt) {
        console.log('click', evt.target.id);
    };

    function clickContains() {
        var result = $$.find('.lista-contains').contains('#first-li');
        console.log(result);
        result = $$.find('.lista-contains').contains('.second-li');
        console.log(result);
        result = $$.find('.lista-contains').contains('.second');
        console.log(result);
    };

    function addListenerClick() {
        console.log('Listener click added');
    };

    function removeListenerClick() {
        console.log('Listener click removed');
        $$.find('#btn-addlistener').off('click', addListenerClick);
    };

    function addClass() {
        return $$.find('li').addClass('colored-background');
    };

    function removeClass() {
        return $$.find('li').addClass('colored-background').removeClass('colored-background');
    };

    function hasClass() {
        var bool = $$.find('li').addClass('colored-background').hasClass('colored-background');
        console.log('hasClass', bool);
    };

    function addClick() {
        $$.find('button').on('click', click);
    };

    function removeClick() {
        $$.find('#btn-contains').on('click', clickContains);
    };

    function contains() {
        $$.find('button').off('click', click);
    };

    function addListener() {
        $$.find('#btn-addlistener').on('click', addListenerClick);
    };

    function removeListener() {
        $$.find('#btn-removelistener').on('click', removeListenerClick);
    };

    function onEach(elmt, index) {
        $$.cast(elmt).addClass('colored-background');
    };

    function each() {
        $$.find('button').each(onEach);
        console.log('----');
        $$.find('li').each(onEach);
    };

    function empty() {
        $$.find('li').empty();
    };

    function onEachTextContent(elmt, index) {
        $$.cast(elmt).text('text' + index);
    };

    function onEachHtmlContent(elmt, index) {
        $$.cast(elmt).html('<div> DIV -' + index + '</div>');
    };

    function textContent() {
        $$.find('li').each(onEachTextContent);
    };

    function htmlContent() {
        $$.find('li').each(onEachHtmlContent);
    };

    function getAttr() {
        var result = $$.find('#btn-addlistener').getAttr('id');
        console.log(result);
    };

    function setAttr() {
        var result = $$.find('button').setAttr('state', 'aaaaa').setAttr('readonly', '1');
        console.log(result.elmts);
    };

    function removeElmts() {
        var result = $$.find('li').find('div');
        console.log(result);
    };

    findElements();
    //addClass();
    // hasClass();
    // removeClass();
    // addClick();
    // //removeClick();
    // contains();
    // addListener();
    // removeListener();
    // each();
    // empty();
    // textContent();
    // htmlContent();
    // getAttr();
    // setAttr();
    // removeElmts();
});