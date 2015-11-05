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

describe('.removeAttr() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-setattr - should not have an attribute readonly', function() {
        var $$ = NoJQuery;
        $$('.list-setattr').setAttr('readonly', 1);
        $$('.list-setattr').removeAttr('readonly');
        var result = $$('.list-setattr').getAttr('readonly');
        expect(result).toBeNull();
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

describe('.next() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-next - next element should be .btn-two', function() {
        var $$ = NoJQuery;
        var result = $$('.list-next').find('.btn-one').next(),
            nextElmt = $$(result.elmts[0]);
        expect(nextElmt.elmts[0]).toEqual($$('.list-next').find('.btn-two').elmts[0]);
    });
});

describe('.prev() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-prev - prev element should be btn-one', function() {
        var $$ = NoJQuery;
        var result = $$('.list-prev').find('.btn-two').prev(),
            prevElmt = $$(result.elmts[0]);
        expect(prevElmt.elmts[0]).toEqual($$('.list-prev').find('.btn-one').elmts[0]);
    });
});

describe('.append() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-append - should have 3 divs as children', function() {
        var $$ = NoJQuery;
        $$('.list-append').find('li').append('<div>Hello</div><div>Hello</div><div>Hello</div>');
        var result = $$('.list-append').find('li').find('div');
        expect(result.elmts.length).toEqual(3);
    });
});

describe('.prepend() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-prepend - should have a div before a span', function() {
        var $$ = NoJQuery;
        $$('.list-prepend').find('li').find('span').prepend('<div>Hello</div><div>Hello</div><div>Hello</div>');
        var result = $$('.list-prepend').find('span').prev(),
            div = $$('.list-prepend').find('div');
        expect(result.elmts[0]).toEqual(div.elmts[0]);
    });
});