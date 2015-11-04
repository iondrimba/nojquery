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