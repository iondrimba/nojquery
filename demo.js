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
        $$.find('button').off('click', click);
    };

    findElements();
    addClass();
    hasClass();
    removeClass();
    addClick();
    removeClick();
});