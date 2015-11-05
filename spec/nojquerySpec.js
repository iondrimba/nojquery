function setUpHTMLFixture() {
    loadFixtures('index.html');
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
