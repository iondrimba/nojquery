(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], function() {
            return (root.NoJQuery = factory());
        });
    } else {
        // Global Variables
        root.NoJQuery = factory(root.b);
    }
}(this, function() {
    'use strict';

    function parseHTML(html) {
        var t = document.createElement('template'),
            content,
            nodes;

        t.innerHTML = html;
        content = t.content || t.firstChild;
        nodes = content.cloneNode(true);

        return nodes;
    }

    function isString(selector) {
        var result = (typeof selector === 'string');
        return result;
    };

    function NoJQuery() {
        this.elmts = [];
        this.length = 0;
        this.currentSelector = '';
        this.previousElmt;

        return function(selector) {
            if (this.currentSelector) {
                this.currentSelector = '';
            }
            if (isString(selector)) {
                this.find(selector);
            } else {
                this.elmts.push(selector);
            }

            this.length = this.previousElmt.length;

            return this;
        }.bind(this);
    };

    NoJQuery.prototype.find = function(selector) {
        var total = 0,
            nodes = [],
            i = 0;

        try {
            this.previousElmt = this.elmts;
            this.elmts = [];
            this.currentSelector += ' ' + selector;
            nodes = document.querySelectorAll(this.currentSelector);
            total = nodes.length;

            for (i; i < total; i++) {
                this.elmts[i] = nodes[i];
            }
        } catch (err) {
            console.error('find::', err);
        }

        return this;
    };
    NoJQuery.prototype.each = function(callback) {
        Array.prototype.forEach.call(this.elmts, function(el, i) {
            callback(el, i);
        });
    };
    NoJQuery.prototype.addClass = function(className) {
        var total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                if (this.elmts[i].classList) {
                    this.elmts[i].classList.add(className);
                } else {
                    this.elmts[i].className += ' ' + className;
                }
            }
        } catch (err) {
            console.error('addClass::', err);
        }

        return this;
    };
    NoJQuery.prototype.hasClass = function(className) {
        var result = false,
            total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                if (this.elmts[i].classList) {
                    result = this.elmts[i].classList.contains(className);
                } else {
                    result = new RegExp('(^| )' + className + '( |$)', 'gi').test(this.elmts[i].className);
                }
            }
        } catch (err) {
            console.error('hasClass::', err);
        }

        return result;
    };
    NoJQuery.prototype.removeClass = function(className) {
        var total = this.elmts.length,
            i = 0;
        try {
            for (i; i < total; i++) {
                if (this.elmts[i].classList) {
                    this.elmts[i].classList.remove(className);
                } else {
                    this.elmts[i].className = this.elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }

        } catch (err) {
            console.error('removeClass::', err);
        }
        return this;
    };
    NoJQuery.prototype.contains = function(selector) {
        var result = {},
            total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                result = this.elmts[i].querySelector(selector);
                if (result) {
                    break;
                }
            }
        } catch (err) {
            console.error('contains::', err);
        }
        return result;
    };
    NoJQuery.prototype.empty = function() {
        var total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                this.elmts[i].innerHTML = '';
            }
        } catch (err) {
            console.error('empty::', err);
        }

        return this;
    };
    NoJQuery.prototype.text = function(string) {
        var total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                this.elmts[i].textContent = string;
            }
        } catch (err) {
            console.error('text::', err);
        }
        return this;
    };
    NoJQuery.prototype.html = function(string) {
        var total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                this.elmts[i].innerHTML = string;
            }
        } catch (err) {
            console.log('html::', err);
        }
        return this;
    };
    NoJQuery.prototype.getAttr = function(attr) {
        var total = 1,
            i = 0,
            result = '';

        try {
            for (i; i < total; i++) {
                result = this.elmts[i].getAttribute(attr);
            }
        } catch (err) {
            console.log('getAttr::', err);
        }
        return result;
    };
    NoJQuery.prototype.setAttr = function(attr, val) {
        var total = this.elmts.length,
            i = 0;

        try {
            for (i; i < total; i++) {
                this.elmts[i].setAttribute(attr, val);
            }
        } catch (err) {
            console.log('setAttr', err);
        }
        return this;
    };
    NoJQuery.prototype.remove = function(elmt) {
        var total = this.elmts.length,
            i = 0,
            elmt = {},
            removed = [];

        try {
            for (i; i < total; i++) {
                elmt = this.elmts[i];
                elmt.parentNode.removeChild(elmt);
                removed[i] = elmt;
            }
        } catch (err) {
            console.log('remove::', err);
        }
        return removed;
    };

    NoJQuery.prototype.removeAttr = function(attr) {
        var total = this.elmts.length,
            i = 0,
            elmt = {};

        try {
            for (i; i < total; i++) {
                elmt = this.elmts[i];
                elmt.removeAttribute(attr);
            }
        } catch (err) {
            console.log('removeAttr::', err);
        }
        return this;
    };
    NoJQuery.prototype.prev = function(elmt) {
        var total = this.elmts.length,
            i = 0,
            nextElemt;

        try {
            for (i; i < total; i++) {
                this.elmts[i] = this.elmts[i].previousElementSibling;
            }
        } catch (err) {
            console.error('prev::', err);
        }
        return this;
    };
    NoJQuery.prototype.next = function() {
        var total = this.elmts.length,
            i = 0,
            nextElemt;

        try {
            for (i; i < total; i++) {
                this.elmts[i] = this.elmts[i].nextElementSibling;
            }
        } catch (err) {
            console.error('next::', err);
        }
        return this;
    };

    NoJQuery.prototype.append = function(el) {
        var total = this.previousElmt.length,
            i = 0,
            node,
            textNode = isString(el);

        if (textNode === false) {
            node = el.elmts[0];
        }

        try {
            for (i; i < total; i++) {
                if (textNode) {
                    this.html(el);
                } else {
                    this.previousElmt[i].appendChild(node);
                    node = el.elmts[0].cloneNode(true);

                }
            }
        } catch (err) {
            console.error('append::', err);
        }
        return this;

    };

    NoJQuery.prototype.prepend = function(el) {
        var total = this.previousElmt.length,
            i = 0,
            node,
            textNode = isString(el),
            parent;

        if (textNode === false) {
            node = el.elmts[0];
        }

        try {
            for (i; i < total; i++) {
                if (textNode) {
                    parent = this.elmts[i].parentNode || this.elmts[i].parent;
                    node = parseHTML(el);
                    parent.insertBefore(node, parent.firstChild);
                } else {
                    parent = this.previousElmt[i].parentNode || this.previousElmt[i].parent;
                    parent.insertBefore(node, parent.firstChild);
                    node = el.elmts[0].cloneNode(true);
                }

            }
        } catch (err) {
            console.error('prepend::', err);
        }
        return this;
    };

    NoJQuery.prototype.on = function(eventName, eventHandler) {
        var total = this.elmts.length,
            i = 0;
        try {
            for (i; i < total; i++) {
                this.elmts[i].addEventListener(eventName, eventHandler, false);
            }
        } catch (err) {
            console.log('on::', err);
        }

        return this;
    };
    NoJQuery.prototype.off = function(eventName, eventHandler) {
        var total = this.elmts.length,
            i = 0;
        try {
            for (i; i < total; i++) {
                this.elmts[i].removeEventListener(eventName, eventHandler, false);
            }
        } catch (err) {
            console.log('off::', err);
        }

        return this;
    };
    return new NoJQuery();
}));
