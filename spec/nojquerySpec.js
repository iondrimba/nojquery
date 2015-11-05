function setUpHTMLFixture() {
    loadFixtures('../../../index.html');
};

describe('.find() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('should find a link and return a length of 1', function() {
        var $$ = NoJQuery;

        var result = $$('.list-find').find('li').find('a');
        expect(result.elmts.length).toEqual(1);
    });
});

describe('.addClass() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list - should have a class colored', function() {
        var $$ = NoJQuery;

        $$('.list').addClass('colored');
        var result = $$('.list').hasClass('colored');
        expect(result).toEqual(true);
    });
});

describe('.removeClass() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('li - should not have a class colored', function() {
        var $$ = NoJQuery;

        $$('.list-remove').find('li').removeClass('colored');
        var result = $('.list-remove').find('li').hasClass('colored');
        expect(result).toEqual(false);
    });
});

describe('.hasClass() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-hasclass li  - should have a class colored', function() {
        var $$ = NoJQuery;
        var result = $$('.list-hasclass').find('li').hasClass('colored');
        expect(result).toEqual(true);
    });
});

describe('.contains() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-contains - should contain an elemt with a class colored', function() {
        var $$ = NoJQuery;
        var result = $$('.list-contains').contains('.colored');
        expect(result).not.toBeNull();
    });
});

describe('.empty() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-empty a - should have an empty value', function() {
        var $$ = NoJQuery;
        $$('.list-empty').find('a').empty();
        var result = $$('.list-empty').find('a').text();
        expect(result).toEqual('');
    });
});

describe('.text() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-text  a - should have a text value of Hello', function() {
        var $$ = NoJQuery;
        $$('.list-text').find('a').text('Hello');
        var result = $$('.list-text').find('a').text();
        expect(result).toEqual('Hello');
    });
});

describe('.html() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-html - should have 3 links', function() {
        var $$ = NoJQuery;
        $$('.list-html').find('li').each(function(elmt, index) {
            $$(elmt).html('<a href="/" class="html-content"> Link - ' + index + '</a>');
        });
        var result = $$('.list-html').find('a').elmts.length;
        expect(result).toEqual(3);
    });
});

describe('.getAttr() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-getattr - should have an attribute iduser with value of 89', function() {
        var $$ = NoJQuery;
        $$('.list-getattr').setAttr('iduser', 89);
        var result = $$('.list-getattr').getAttr('iduser');
        expect(result).toEqual('89');
    });
});

describe('.setAttr() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-setattr - should have an attribute readonly with value of 1', function() {
        var $$ = NoJQuery;
        $$('.list-setattr').setAttr('readonly', 1);
        var result = $$('.list-setattr').getAttr('readonly');
        expect(result).toEqual('1');
    });
});

describe('.remove() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-removeelmt - should not have any li element', function() {
        var $$ = NoJQuery;
        $$('.list-removeelmt').find('li').remove();
        var result = $$('.list-removeelmt').find('li').elmts.length;
        expect(result).toEqual(0);
    });
});