(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], function () {
            return root.NoJQuery = factory();
        });
    } else {
        // Global Variables
        root.NoJQuery = factory();
    }
} (this, function () {
    'use strict';

    function parseHTML(html) {
        var template,
            content,
            nodes;

        function supportsTemplate() {
            return 'content' in document.createElement('template');
        }

        if (supportsTemplate()) {
            template = document.createElement('template');
            content = template.content;
            template.innerHTML = html;
            nodes = content.cloneNode(true);
        } else {
            var docfrag = document.createDocumentFragment();

            template = document.createElement('nojquery');
            template.innerHTML = html;

            var total = template.childNodes.length;
            for (var i = 0; i < total; i++) {
                docfrag.appendChild(template.childNodes[i].cloneNode(true));
            }

            content = docfrag;
            nodes = content.cloneNode(true);
        }

        return nodes;
    }

    function isString(obj) {
        var result = typeof obj === 'string';
        return result;
    }

    function NoJQuery() {

        return function (selector) {
            this.elmts = [];
            this.length = 0;
            this.currentSelector = '';
            this.previousElmt;

            if (isString(selector)) {
                this.find(selector);
            } else {
                if (selector.parentNode.classList.length) {
                    this.currentSelector += ' .' + selector.parentNode.classList[0];
                }

                if (selector.classList.length) {
                    this.currentSelector += ' ' + selector.classList[0];
                }
                this.elmts.push(selector);
            }
            this.length = this.elmts.length;


            var clone = {};
            clone.elmts = this.elmts;
            clone.length = this.length;
            clone.currentSelector = this.currentSelector;
            clone.previousElmt = this.previousElmt;
            clone['__proto__'] = NoJQuery.prototype;

            return clone;
        }.bind(this);
    }

    NoJQuery.prototype.find = function (selector) {
        var total = 0,
            nodes = [],
            i = 0;

        try {
            this.currentSelector += ' ' + selector;
            nodes = document.querySelectorAll(this.currentSelector);
            total = nodes.length;
            if (total) {
                this.previousElmt = this.elmts.slice();
                this.elmts = [];
                this.length = total;
            } else {
                this.previousElmt = [];
                this.length = 0;
            }

            for (i; i < total; i++) {
                this.elmts[i] = nodes[i];
            }
        } catch (err) {
            throw new Error('find:: ' + err.message);
        }

        return this;
    };
    NoJQuery.prototype.each = function (callback) {
        Array.prototype.forEach.call(this.elmts, function (el, i) {
            el['index'] = i;
            callback(el, i);
        });
    };
    NoJQuery.prototype.addClass = function (className) {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                if (this.elmts[i].classList && this.elmts[i].classList.contains) {
                    this.elmts[i].classList.add(className);
                } else {
                    this.elmts[i].className += ' ' + className;
                }
            }
        } catch (err) {
            throw new Error('addClass:: ' + err.message);
        }

        return this;
    };
    NoJQuery.prototype.hasClass = function (className) {
        var result = false,
            total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                if (this.elmts[i].classList && this.elmts[i].classList.contains) {
                    result = this.elmts[i].classList.contains(className);
                } else {
                    result = new RegExp('(^| )' + className + '( |$)', 'gi').test(this.elmts[i].className);
                }
            }
        } catch (err) {
            throw new Error('hasClass:: ' + err.message);
        }

        return result;
    };
    NoJQuery.prototype.removeClass = function (className) {
        var total = 0,
            i = 0;
        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                if (this.elmts[i].classList && this.elmts[i].classList.remove) {
                    this.elmts[i].classList.remove(className);
                } else {
                    this.elmts[i].className = this.elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }

        } catch (err) {
            throw new Error('removeClass:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.contains = function (selector) {
        var result = {},
            total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                result = this.elmts[i].querySelector(selector);
                if (result) {
                    this.length = 1;
                    break;
                }
            }
        } catch (err) {
            throw new Error('contains:: ' + err.message);
        }
        return result;
    };
    NoJQuery.prototype.empty = function () {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                this.elmts[i].innerHTML = '';
            }
        } catch (err) {
            throw new Error('empty:: ' + err.message);
        }

        return this;
    };
    NoJQuery.prototype.text = function (string) {
        var total = 0,
            i = 0,
            result = '';

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                if (string && string.length > 0) {
                    this.elmts[i].textContent = string;
                } else {
                    result += this.elmts[i].textContent;
                }

            }
        } catch (err) {
            throw new Error('text:: ' + err.message);
        }

        if (!string) {
            return result;
        }

        return this;
    };
    NoJQuery.prototype.html = function (string) {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                this.elmts[i].innerHTML = string;
            }
        } catch (err) {
            throw new Error('html:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.getAttr = function (attr) {
        var total = 0,
            i = 0,
            result = '';

        try {
            total = 1;
            for (i; i < total; i++) {
                result = this.elmts[i].getAttribute(attr);
            }
        } catch (err) {
            throw new Error('getAttr:: ' + err.message);
        }
        return result;
    };
    NoJQuery.prototype.setAttr = function (attr, val) {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                this.elmts[i].setAttribute(attr, val);
            }
        } catch (err) {
            throw new Error('setAttr:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.remove = function () {
        var total = 0,
            i = 0,
            el = {},
            removed = [];

        try {
            total = this.length;
            for (i; i < total; i++) {
                el = this.elmts[i];
                el.parentNode.removeChild(el);
                removed[i] = el;
            }
        } catch (err) {
            throw new Error('remove:: ' + err.message);
        }

        this.previousElmt = [];
        this.length = 0;

        return removed;
    };
    NoJQuery.prototype.removeAttr = function (attr) {
        var total = 0,
            i = 0,
            elmt = {};

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                elmt = this.elmts[i];
                elmt.removeAttribute(attr);
            }
        } catch (err) {
            throw new Error('removeAttr:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.prev = function () {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                this.elmts[i] = this.elmts[i].previousElementSibling;
            }
        } catch (err) {
            throw new Error('prev:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.next = function () {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {
                this.elmts[i] = this.elmts[i].nextElementSibling;
            }
        } catch (err) {
            throw new Error('next:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.append = function (el) {
        var total = 0,
            i = 0,
            node,
            textNode;

        try {
            total = this.elmts.length;
            textNode = isString(el);

            if (textNode === false) {
                node = el.elmts[0];
            }
            if (textNode) {
                node = parseHTML(el);
            }

            if (total === 0) {
                this.elmts[this.elmts.length - 1].appendChild(node);
            }

            for (i; i < total; i++) {
                this.elmts[i].appendChild(node);
            }
        } catch (err) {
            throw new Error('append:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.prepend = function (el) {
        var total = 0,
            i = 0,
            node,
            textNode,
            parent;

        try {
            total = this.previousElmt.length;
            textNode = isString(el);

            if (textNode === false) {
                node = el.elmts[0];
            }
            for (i; i < total; i++) {
                if (textNode) {
                    parent = this.elmts[i].parentNode || this.elmts[i].parent;
                    node = parseHTML(el);
                    parent.insertBefore(node, parent.firstChild);
                } else {
                    parent = this.previousElmt[i].firstChild.parentNode || this.previousElmt[i].firstChild.parent;
                    parent.insertBefore(node, this.previousElmt[i].firstChild);
                    node = el.elmts[0].cloneNode(true);
                }

            }
        } catch (err) {
            throw new Error('prepend:: ' + err.message);
        }
        return this;
    };
    NoJQuery.prototype.on = function (eventName, eventHandler) {
        var total = 0,
            i = 0;

        try {
            total = this.elmts.length;
            for (i; i < total; i++) {

                this.elmts[i][eventName] = eventHandler;
                this.elmts[i].addEventListener(eventName, this.elmts[i][eventName], false);
            }
        } catch (err) {
            throw new Error('on:: ' + err.message);
        }

        return this;
    };
    NoJQuery.prototype.off = function (eventName) {
        var total = 0,
            i = 0;
        try {
            total = this.elmts.length;
            i = 0;
            for (i; i < total; i++) {
                this.elmts[i].removeEventListener(eventName, this.elmts[i][eventName], false);
                this.elmts[i][eventName] = null;
            }
        } catch (err) {
            throw new Error('off:: ' + err.message);
        }

        return this;
    };
    return new NoJQuery();
}));
