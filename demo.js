requirejs(['nojquery'], function(NoJQuery) {
    var $$ = NoJQuery;

    //FIND
    function onFindClick() {
        var result = $$('li').find('a');
        console.log(result.elmts[0]);
    }
    $$('#btn-find').on('click', onFindClick);

    //FIND FLUID
    function onFindFluidClick() {
        var result = $$('.list-fluid').find('li').find('li').find('li').find('li').find('a');
        console.log(result.elmts[0]);
    }
    $$('#btn-find-fluid').on('click', onFindFluidClick);

    //ADD CLASS
    function onAddClassClick() {
        $$('.list').find('a').addClass('colored');
    }

    function onResetAddClassClick() {
        $$('.list').find('a').removeClass('colored');
    }
    var btnAddClass = $$('#btn-addclass'),
        btnResetClass = $$('#btn-reset-addclass');

    btnAddClass.on('click', onAddClassClick);
    btnResetClass.on('click', onResetAddClassClick);

    //REMOVE CLASS
    function onRemoveClassClick() {
        $$('.list-remove').find('li').removeClass('colored');
    }

    function onResetRemoveClassClick() {
        $$('.list-remove').find('li:first-child').addClass('colored');
    }
    $$('#btn-removeclass').on('click', onRemoveClassClick);
    $$('#btn-reset-removeclass').on('click', onResetRemoveClassClick);

    //HAS CLASS
    function onHasClassClick() {
        var result = $$('.list-hasclass').find('li').hasClass('colored');
        console.log(result);
    }
    $$('#btn-hasclass').on('click', onHasClassClick);

    //CONTAINS
    function onContainsClick() {
        var result = $$('.list-contains').contains('.colored');
        console.log(result);
    }
    $$('#btn-contains').on('click', onContainsClick);

    //EMPTY
    function onEmptyClick() {
        $$('.list-empty').find('li').empty();
    }

    function onResetEmptyClick() {
        $$('.list-empty').find('li').append('li<div>div<a href="/">link</a></div>');
    }
    $$('#btn-empty').on('click', onEmptyClick);
    $$('#btn-reset-empty').on('click', onResetEmptyClick);

    //TEXT
    function onTextClick() {
        $$('.list-text').find('a').text('Hello');
    }

    function onResetTextClick() {
        $$('.list-text').find('a').text('link');
    }
    $$('#btn-text').on('click', onTextClick);
    $$('#btn-reset-text').on('click', onResetTextClick);

    //HTML
    function onHtmlClick() {
        $$('.list-html').find('li').each(function(elmt, index) {
            $$(elmt).html('<a href="/" class="html-content"> Link - ' + index + '</a>');
        });
    }

    function onResetHtmlClick() {
        $$('.list-html').find('li').find('a').remove();
        $$('.list-html').find('li').text('li');
    }
    $$('#btn-html').on('click', onHtmlClick);
    $$('#btn-reset-html').on('click', onResetHtmlClick);

    //GET ATTR
    function onGetAttrClick() {
        var result = $$('.list-getattr').getAttr(9);
        console.log('onGetAttrClick', result);
    }
    $$('#btn-getattr').on('click', onGetAttrClick);

    //SET ATTR
    function onSetAttrClick() {
        $$('.list-setattr').setAttr('readonly', 1);
        console.log($$('.list-setattr').getAttr('readonly'));
    }

    function onResetSetAttrClick() {
        $$('.list-setattr').removeAttr('readonly');
        console.log($$('.list-setattr').getAttr('readonly'));
    }
    $$('#btn-setattr').on('click', onSetAttrClick);
    $$('#btn-reset-setattr').on('click', onResetSetAttrClick);

    //REMOVE ELMT
    function onRemoveElmtClick() {
        //$$('.list-removeelmt').find('li').remove();
        $$('.list-removeelmt').find('li').remove();
        var result = $$('.list-removeelmt').find('li');
        console.log(result);
    }

    function onResetRemoveElmtClick() {
        $$('.list-removeelmt').html('<li>li</li><li>li</li><li>li</li>');
    }
    $$('#btn-removeelmt').on('click', onRemoveElmtClick);
    $$('#btn-reset-removeelmt').on('click', onResetRemoveElmtClick);

    //NEXT
    function onNextClick() {
        var result = $$('.list-next').find('.btn-one').next(),
            nextElmt = $$(result.elmts[0]);
        console.log(nextElmt.elmts[0]);
    }

    $$('#btn-next').on('click', onNextClick);

    //PREV
    function onPrevClick() {
        var result = $$('.list-next').find('.btn-two').prev();
        console.log(result.elmts[0]);
    }

    $$('#btn-prev').on('click', onPrevClick);

    //APPEND
    function onAppendClick() {
        $$('.list-append').find('li').append('<div>Hello</div><div>Hello</div><div>Hello</div>');
        $$('.list-append').find('div');
    }

    function onResetAppendClick() {
       $$('.list-append').find('li').find('div').length;
        console.log($$('.list-append').find('li').find('div'));
        $$('.list-append').find('li').find('div').remove();
    }

    $$('#btn-append').on('click', onAppendClick);
    $$('#btn-reset-append').on('click', onResetAppendClick);

    // //PREPEND
    function onPrependClick() {
        $$('.list-prepend').find('li').find('span').prepend('<div>Hello</div><div>Hello</div><div>Hello</div>');
    }

    function onResetPrependClick() {
        $$('.list-prepend').find('li').find('div').remove();
    }

    $$('#btn-prepend').on('click', onPrependClick);
    $$('#btn-reset-prepend').on('click', onResetPrependClick);

    //ADD /REMOVE LISTNER
    function onButtonClick() {
        alert('click');
    }

    function onAddListenerClick() {
        $$('.list-addlistener').find('button').on('click', onButtonClick);
        //console.log($$('.list-addlistener').find('button').elmts[0].dispatchEvent('click'));
    }

    function onRemoveListenerClick() {
        $$('.list-addlistener').find('button').off('click', onButtonClick);
    }
    $$('#btn-addlistener').on('click', onAddListenerClick);
    $$('#btn-removelistener').on('click', onRemoveListenerClick);
});