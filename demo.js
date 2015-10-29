requirejs(['NoJQuery'], function(NoJQuery) {
    var $$ = NoJQuery;
    console.log('loaded', $$);

    function findElements() {
        var elmts = $$.find('li');
        console.log(elmts);
        return $$.find('li');
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

    function onEachText(elmt, index) {
        $$.cast(elmt).text('text' + index);
    };

    function textContent() {
        $$.find('li').each(onEachText);
    };

    findElements();
    addClass();
    hasClass();
    removeClass();
    addClick();
    //removeClick();
    contains();
    addListener();
    removeListener();
    each();
    empty();
    textContent();

});