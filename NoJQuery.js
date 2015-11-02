define([], function() {
    'use strict';
    // var NoJQuery = {
    //     this.elmts: [],
    //     ajax: {
    //         getJson: function ajaxGet(url, onSuccess, onError) {
    //             var request = new XMLHttpRequest(),
    //                 dataSuccess,
    //                 dataError;

    //             request.open('GET', url, true);

    //             request.onload = function onload(evt) {
    //                 var options = {};
    //                 options.evt = evt;
    //                 options.request = request;
    //                 options.onSuccess = onSuccess;
    //                 options.onError = onError;
    //                 options.dataSuccess = dataSuccess;
    //                 options.dataError = dataError;

    //                 NoJQuery.ajax.jsonRequestOnLoad(options);
    //             };
    //             request.onerror = function onerror() {
    //                 onError();
    //             };
    //             request.send();
    //         },
    //         postJson: function ajaxPost(url, data, onSuccess, onError) {
    //             var request = new XMLHttpRequest(),
    //                 dataSuccess,
    //                 dataError;

    //             request.open('POST', url, true);
    //             request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    //             request.onload = function onload(evt) {
    //                 var options = {};
    //                 options.evt = evt;
    //                 options.request = request;
    //                 options.onSuccess = onSuccess;
    //                 options.onError = onError;
    //                 options.dataSuccess = dataSuccess;
    //                 options.dataError = dataError;

    //                 NoJQuery.ajax.jsonRequestOnLoad(options);
    //             };
    //             request.onerror = function onerror() {
    //                 onError();
    //             };
    //             request.send(data);
    //         },
    //         get: function ajaxGet(url, onSuccess, onError) {
    //             var request = new XMLHttpRequest(),
    //                 dataSuccess,
    //                 dataError;

    //             request.open('GET', url, true);

    //             request.onload = function onload(evt) {
    //                 var options = {};
    //                 options.evt = evt;
    //                 options.request = request;
    //                 options.onSuccess = onSuccess;
    //                 options.onError = onError;
    //                 options.dataSuccess = dataSuccess;
    //                 options.dataError = dataError;

    //                 NoJQuery.ajax.requestOnLoad(options);
    //             };
    //             request.onerror = function onerror() {
    //                 onError();
    //             };
    //             request.send();
    //         },
    //         onLoad: function(options, returnData) {
    //             if (options.request.status >= 200 && options.request.status < 400) {
    //                 options.dataSuccess = returnData;
    //                 options.onSuccess(options.dataSuccess);
    //             } else {
    //                 options.dataError = {
    //                     message: options.evt.currentTarget.responseURL + ' - ' + options.evt.currentTarget.statusText,
    //                     statusText: options.evt.currentTarget.statusText,
    //                     responseURL: options.evt.currentTarget.responseURL,
    //                     status: options.evt.currentTarget.status
    //                 };
    //                 options.onError();
    //             }
    //         },
    //         jsonRequestOnLoad: function(options) {
    //             NoJQuery.ajax.onLoad(options, JSON.parse(options.request.responseText));
    //         },
    //         requestOnLoad: function(options) {
    //             NoJQuery.ajax.onLoad(options, options.request.responseText);
    //         }
    //     },

    // };

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

            this.length = this.elmts.length;

            return this;
        }.bind(this);
    };

    NoJQuery.prototype.find = function(selector) {
        var total = 0,
            nodes = [],
            i = 0;

        this.previousElmt = this.elmts;
        this.elmts = [];
        this.currentSelector += ' ' + selector;
        nodes = document.querySelectorAll(this.currentSelector);
        total = nodes.length;

        for (i; i < total; i++) {
            this.elmts[i] = nodes[i];
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

        for (i; i < total; i++) {
            if (this.elmts[i].classList) {
                this.elmts[i].classList.add(className);
            } else {
                this.elmts[i].className += ' ' + className;
            }
        }

        return this;
    };
    NoJQuery.prototype.hasClass = function(className) {
        var result = false,
            total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            if (this.elmts[i].classList) {
                result = this.elmts[i].classList.contains(className);
            } else {
                result = new RegExp('(^| )' + className + '( |$)', 'gi').test(this.elmts[i].className);
            }
        }

        return result;
    };
    NoJQuery.prototype.removeClass = function(className) {
        var total = this.elmts.length,
            i = 0;
        for (i; i < total; i++) {
            if (this.elmts[i].classList) {
                this.elmts[i].classList.remove(className);
            } else {
                this.elmts[i].className = this.elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        return this;
    };
    NoJQuery.prototype.contains = function(selector) {
        var result = {},
            total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            result = this.elmts[i].querySelector(selector);
            if (result) {
                break;
            }
        }
        return result;
    };
    NoJQuery.prototype.empty = function() {
        var total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            this.elmts[i].innerHTML = '';
        }

        return this;
    };
    NoJQuery.prototype.text = function(string) {
        var total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            this.elmts[i].textContent = string;
        }
        return this;
    };
    NoJQuery.prototype.html = function(string) {
        var total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            this.elmts[i].innerHTML = string;
        }
        return this;
    };
    NoJQuery.prototype.getAttr = function(attr) {
        var total = 1,
            i = 0,
            result = '';

        for (i; i < total; i++) {
            result = this.elmts[i].getAttribute(attr);
        }
        return result;
    };
    NoJQuery.prototype.setAttr = function(attr, val) {
        var total = this.elmts.length,
            i = 0;

        for (i; i < total; i++) {
            this.elmts[i].setAttribute(attr, val);
        }
        return this;
    };
    NoJQuery.prototype.remove = function(elmt) {
        var total = this.elmts.length,
            i = 0,
            elmt = {},
            removed = [];

        for (i; i < total; i++) {
            elmt = this.elmts[i];
            elmt.parentNode.removeChild(elmt);
            removed[i] = elmt;
        }
        return removed;
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
        for (i; i < total; i++) {
            this.elmts[i].addEventListener(eventName, eventHandler, false);
        }

        return this;
    };
    NoJQuery.prototype.off = function(eventName, eventHandler) {
        var total = this.elmts.length,
            i = 0;
        for (i; i < total; i++) {
            this.elmts[i].removeEventListener(eventName, eventHandler, false);
        }

        return this;
    };

    return new NoJQuery();
});
