requirejs(['NoJQuery'], function(NoJQuery) {
    var $$ = NoJQuery;

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


    //FIND
    function onFindClick(evt) {
        var result = $$('li').find('a');
        console.log(result.elmts[0]);
    };
    $$('#btn-find').on('click', onFindClick);

    //ADD CLASS
    function onAddClassClick(evt) {
        $$('.list').find('a').addClass('colored');
    };

    function onResetAddClassClick(evt) {
        $$('.list').find('a').removeClass('colored');
    };
    $$('#btn-addclass').on('click', onAddClassClick);
    $$('#btn-reset-addclass').on('click', onResetAddClassClick);

    //REMOVE CLASS
    function onRemoveClassClick(evt) {
        $$('.list-remove').find('li').removeClass('colored');
    };

    function onResetRemoveClassClick(evt) {
        $$('.list-remove').find('li:first-child').addClass('colored');
    };
    $$('#btn-removeclass').on('click', onRemoveClassClick);
    $$('#btn-reset-removeclass').on('click', onResetRemoveClassClick);

    //HAS CLASS
    function onHasClassClick(evt) {
        var result = $$('.list-hasclass').find('li').hasClass('colored');
        console.log(result);
    };
    $$('#btn-hasclass').on('click', onHasClassClick);

    //CONTAINS
    function onContainsClick(evt) {
        var result = $$('.list-contains').contains('.colored');
        console.log(result);
    };
    $$('#btn-contains').on('click', onContainsClick);

    //EMPTY
    function onEmptyClick(evt) {
        $$('.list-empty').find('a').empty();
    };

    function onResetEmptyClick(evt) {
        $$('.list-empty').find('a').text('link');
    };
    $$('#btn-empty').on('click', onEmptyClick);
    $$('#btn-reset-empty').on('click', onResetEmptyClick);

    //EMPTY
    function onEmptyClick(evt) {
        $$('.list-empty').find('a').empty();
    };

    function onResetEmptyClick(evt) {
        $$('.list-empty').find('a').text('link');
    };
    $$('#btn-empty').on('click', onEmptyClick);
    $$('#btn-reset-empty').on('click', onResetEmptyClick);

    //TEXT
    function onTextClick(evt) {
        $$('.list-text').find('a').text('Hello');
    };

    function onResetTextClick(evt) {
        $$('.list-text').find('a').text('link');
    };
    $$('#btn-text').on('click', onTextClick);
    $$('#btn-reset-text').on('click', onResetTextClick);

    //HTML
    function onHtmlClick(evt) {
        $$('.list-html').find('li').each(function(elmt, index) {
            $$(elmt).html('<a href="/" class="html-content"> Link - ' + index + '</a>');
        });
    };

    function onResetHtmlClick(evt) {
        $$('.list-html').find('li').each(function(elmt, index) {
            $$(elmt).find('.html-content').remove();
            $$(elmt).text('li');
        });
    };
    $$('#btn-html').on('click', onHtmlClick);
    $$('#btn-reset-html').on('click', onResetHtmlClick);

    //GET ATTR
    function onGetAttrClick(evt) {
        var result = $$('.list-getattr').getAttr('class');
        console.log(result);
    };
    $$('#btn-getattr').on('click', onGetAttrClick);

    //SET ATTR
    function onSetAttrClick(evt) {
        $$('.list-setattr').setAttr('readonly', 1);
        console.log($$('.list-setattr').getAttr('readonly'));
    };

    function onResetSetAttrClick(evt) {
        var result = $$('.list-setattr').removeAttr('readonly');
        console.log($$('.list-setattr').getAttr('readonly'));
    };
    $$('#btn-setattr').on('click', onSetAttrClick);
    $$('#btn-reset-setattr').on('click', onResetSetAttrClick);

    //REMOVE ELMT
    function onRemoveElmtClick(evt) {
        $$('.list-removeelmt').find('li').remove();
    };

    function onResetRemoveElmtClick(evt) {
        $$('.list-removeelmt').html('<li>li</li><li>li</li><li>li</li>');
    };
    $$('#btn-removeelmt').on('click', onRemoveElmtClick);
    $$('#btn-reset-removeelmt').on('click', onResetRemoveElmtClick);

    
    // next();
    // prev();
    // append();
    // prepend();
    // addListener();
    // removeListener();
});
