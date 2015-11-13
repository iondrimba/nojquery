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

describe('.find() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('should throw find exception', function() {
        var $$ = NoJQuery;

        expect(function() {
            $$('.list-find').find('=');
        }).toThrow();
    });
});

describe('fluid sintax Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('should find a .child-link from .list-child', function() {
        var $$ = NoJQuery;

        var result = $$('.list-fluid').find('.list-fluid-child').find('li').find('a');
        expect($$(result.elmts[0]).hasClass('child-link')).toEqual(true);
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

describe('.addClass() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list - should throw an addClass exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            $$('.list').addClass($$);
        }).toThrow();
    });
});

describe('.addClass() simulate no classList Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list - should have a class colored', function() {
        var $$ = NoJQuery;

        $$('.list').elmts[0].classList.contains = undefined;
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

describe('.removeClass() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('li - should should throw a removeClass exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            $$('.list-remove').find('li').removeClass($$)
        }).toThrow();
    });
});

describe('.removeClass() without classList.remove Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('li - should not have a class colored', function() {
        var $$ = NoJQuery;
        $$('.list-remove').find('li').elmts[0].classList.remove = undefined;
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

describe('.hasClass() without classList.contains Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list - should have a class colored', function() {
        var $$ = NoJQuery;
        $$('.list').elmts[0].classList.contains = undefined;
        $$('.list').addClass('colored');
        var result = $$('.list').hasClass('colored');
        expect(result).toEqual(true);
    });
});

describe('.hasClass() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list - should throw an exception hasClass', function() {
        var $$ = NoJQuery;
        expect(function() {
            $$('.list').hasClass($$);
        }).toThrow();
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

describe('.contains() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-contains - should should throw a contains exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            $$('.list-contains').contains($$);
        }).toThrow();
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

describe('.empty() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-empty a - should have an empty value', function() {
        var $$ = NoJQuery;
        expect(function() {
            var a = $$('.list-empty').find('a');
            a.elmts = undefined;
            a.empty();
        }).toThrow();
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

describe('.text() exception Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-text should throw a text exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var a = $$('.list-text').find('a');
            a.elmts = undefined;
            a.text($$);
        }).toThrow();
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

describe('.html() exception Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-html - should throw a html exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var li = $$('.list-html').find('li:first-child');
            li.elmts = undefined;
            li.html($$);
        }).toThrow();
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

describe('.getAttr() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });
    it('.list-getattr - should throw an getAttr exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var getAttr = $$('.list-getattr');
            getAttr.elmts = undefined;
            getAttr.getAttr(3);
        }).toThrow();
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

describe('.setAttr() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-setattr - should throw an exception setAttr', function() {
        var $$ = NoJQuery;
        expect(function() {
            var elmt = $$('.list-setattr');
            elmt.elmts = undefined;
            elmt.setAttr('readonly', 1);
        }).toThrow();
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

describe('.removeAttr() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-setattr - should a readonly exception', function() {
        var $$ = NoJQuery;
        $$('.list-setattr').setAttr('readonly', 1);
        expect(function() {
            var el = $$('.list-setattr');
            el.elmts = undefined;
            el.removeAttr('readonly');
        }).toThrow();
    });
});

describe('.remove() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-removeelmt - should not have any li element', function() {
        var $$ = NoJQuery;
        $$('.list-removeelmt').find('li').remove();
        var result = $$('.list-removeelmt').find('li').length;
        expect(result).toEqual(0);
    });
});

describe('.remove() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-removeelmt - should throw remove() exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var el = $$('.list-removeelmt').find('li');
            el.elmts = undefined;
            el.remove();
        }).toThrow();
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

describe('.next() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-next - should throw a next() exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var el = $$('.list-next').find('.btn-one')
            el.elmts = undefined;
            el.next();
        }).toThrow();
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

describe('.prev() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-prev - should throw exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var el = $$('.list-prev').find('.btn-two');
            el.elmts = undefined;
            el.prev();
        }).toThrow();
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

describe('.append() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-append - should throw exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var el = $$('.list-append').find('li');
            el.elmts = undefined;
            el.append('<div>Hello</div><div>Hello</div><div>Hello</div>');
        }).toThrow();
    });
});

describe('.append() Node Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-append - should have 1 link as children', function() {
        var $$ = NoJQuery;
        $$('.list-append').append($$('.link-append'));
        var result = $$('.list-append').find('.link-append'),
            link = $$('.list-append').find('.link-append');
        expect(result.elmts[0]).toEqual(link.elmts[0]);
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

describe('.prepend() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-prepend - should throw an exception', function() {
        var $$ = NoJQuery;
        expect(function() {
            var el = $$('.list-prepend').find('li').find('span');
            el.elmts = undefined;
            el.prepend('<div>Hello</div><div>Hello</div><div>Hello</div>');
        }).toThrow();
    });
});

describe('.prepend() Node Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-prepend - should have a link before a span', function() {
        var $$ = NoJQuery;
        $$('.list-prepend').find('li').find('span').prepend($$('.link-prepend'));
        var result = $$('.list-prepend').find('span').prev(),
            div = $$('.list-prepend').find('a');
        expect(result.elmts[0]).toEqual(div.elmts[0]);
    });
});

describe('.on() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-addlistener - should have a listener for click', function() {
        var $$ = NoJQuery;

        function onButtonClick() {};

        $$('.list-addlistener').find('button').on('click', onButtonClick);
        var result = $$('.list-addlistener').find('button').elmts[0]['click'];
        expect(result).toEqual(onButtonClick);
    });
});

describe('.on() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-addlistener - should should throw an exception', function() {
        var $$ = NoJQuery;

        function onButtonClick() {};

        expect(function() {
            var el = $$('.list-addlistener').find('button');
            el.elmts = undefined;
            el.on('click', onButtonClick);
        }).toThrow();
    });
});

describe('.off() Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-addlistener - should not have a listener for click', function() {
        var $$ = NoJQuery;

        function onButtonClick() {};

        $$('.list-addlistener').find('button').on('click', onButtonClick);
        $$('.list-addlistener').find('button').off('click', onButtonClick);
        var result = $$('.list-addlistener').find('button').elmts[0]['click'];
        expect(result).toBeNull();
    });
});


describe('.off() exception Test', function() {

    beforeEach(function() {
        setUpHTMLFixture();
    });

    it('.list-addlistener - should not have a listener for click', function() {
        var $$ = NoJQuery;

        function onButtonClick() {};

        $$('.list-addlistener').find('button').on('click', onButtonClick);
        expect(function() {
            var el = $$('.list-addlistener').find('button');
            el.elmts = undefined;
            el.off('click', onButtonClick);
        }).toThrow();
    });
});