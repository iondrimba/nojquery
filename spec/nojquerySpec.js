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

    it('.list should have a class colored', function() {
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

    it('li should not have a class colored', function() {
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

    it('.list-hasclass li should have a class colored', function() {
        var $$ = NoJQuery;
        var result = $$('.list-hasclass').find('li').hasClass('colored');
        expect(result).toEqual(true);
    });
});

describe('.contains() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-contains should contain an elemt with a class colored', function() {
        var $$ = NoJQuery;
        var result = $$('.list-contains').contains('.colored'),
            contained = $$(result).find('.colored');
        expect(contained.length).toEqual(1);
    });
});

describe('.empty() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-empty a should empty value', function() {
        var $$ = NoJQuery;
        $$('.list-empty').find('a').empty();
        var result = $$('.list-empty').find('a').text();
        expect(result).toEqual('');
    });
});