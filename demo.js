requirejs(['nojquery'], function(NoJQuery) {
    var $$ = NoJQuery;

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
        var result = $$('.list-contains').contains('.colored1');
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

        console.log($$('.list-html').find('a'));
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
        console.log($$('.list-removeelmt').find('li').elmts.length);
    };

    function onResetRemoveElmtClick(evt) {
        $$('.list-removeelmt').html('<li>li</li><li>li</li><li>li</li>');
    };
    $$('#btn-removeelmt').on('click', onRemoveElmtClick);
    $$('#btn-reset-removeelmt').on('click', onResetRemoveElmtClick);

    //NEXT
    function onNextClick(evt) {
        var result = $$('.list-next').find('.btn-one').next(),
            nextElmt = $$(result.elmts[0]);
        console.log(nextElmt.elmts[0], $$('.list-next').find('.btn-two').elmts[0]);
    };

    $$('#btn-next').on('click', onNextClick);

    //PREV
    function onPrevClick(evt) {
        var result = $$('.list-next').find('.btn-two').prev();
        console.log(result.elmts[0]);
    };

    $$('#btn-prev').on('click', onPrevClick);

    //APPEND
    function onAppendClick(evt) {
        $$('.list-append').find('li').append('<div>Hello</div><div>Hello</div><div>Hello</div>');
        var result = $$('.list-append').find('li').find('div');
        console.log(result);
    };

    function onResetAppendClick(evt) {
        $$('.list-append').find('li').find('div').remove();
        $$('.list-append').find('li').append('<span>li</span>');
    };

    $$('#btn-append').on('click', onAppendClick);
    $$('#btn-reset-append').on('click', onResetAppendClick);

    //PREPEND
    function onPrependClick(evt) {
        $$('.list-prepend').find('li').find('span').prepend('<div>Hello</div><div>Hello</div><div>Hello</div>');
        var result = $$('.list-prepend').find('span').prev();
        console.log(result);
    };

    function onResetPrependClick(evt) {
        $$('.list-prepend').find('li').find('div').remove();
    };

    $$('#btn-prepend').on('click', onPrependClick);
    $$('#btn-reset-prepend').on('click', onResetPrependClick);

    //ADD /REMOVE LISTNER
    function onButtonClick(evt) {
        console.log('click', evt.currentTarget);
    };

    function onAddListenerClick(evt) {
        $$('.list-addlistener').find('button').on('click', onButtonClick);
        //console.log($$('.list-addlistener').find('button').elmts[0].dispatchEvent('click'));
    };

    function onRemoveListenerClick(evt) {
        $$('.list-addlistener').find('button').off('click', onButtonClick);
    };
    $$('#btn-addlistener').on('click', onAddListenerClick);
    $$('#btn-removelistener').on('click', onRemoveListenerClick);
});