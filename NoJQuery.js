define([], function() {
    'use strict';
    // var NoJQuery = {
    //     elmts: [],
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
    //     closestParent: function(child, className) {
    //         if (!child || child === document) {
    //             return null;
    //         }
    //         if (child.classList.contains(className)) {
    //             return child;
    //         } else {
    //             return NoJQuery.closestParent(child.parentNode, className);
    //         }
    //     },
    //     on: function(eventName, eventHandler) {
    //         var total = this.elmts.length,
    //             i = 0;
    //         for (i; i < total; i++) {
    //             this.elmts[i].addEventListener(eventName, eventHandler, false);
    //         }

    //         return this;
    //     },
    //     off: function(eventName, eventHandler) {
    //         var total = this.elmts.length,
    //             i = 0;
    //         for (i; i < total; i++) {
    //             this.elmts[i].removeEventListener(eventName, eventHandler, false);
    //         }

    //         return this;
    //     },
    //     redraw: function(elmt) {
    //         elmt.offsetHeight;
    //     },
    //     prev: function(elmt) {
    //         var prevElmt = elmt.previousElementSibling;
    //         return prevElmt;
    //     },
    //     next: function(elmt) {
    //         var nextElmt = elmt.nextElementSibling;
    //         return nextElmt;
    //     },
    //     proxy: function(fn, context) {
    //         fn.bind(context);
    //     },

    //     append: function(elmt, el) {
    //         elmt.appendChild(el);
    //     },
    //     prepend: function(elmt, el) {
    //         var parent = elmt;
    //         parent.insertBefore(el, parent.firstChild);
    //     },
    //     parseHtml: function(str) {
    //         var tmp = document.implementation.createHTMLDocument();
    //         tmp.body.innerHTML = str;
    //         return tmp.body.children;
    //     },
    //     cast: function(node) {
    //         this.elmts = [];
    //         this.elmts.push(node);

    //         return this;
    //     }
    // };

    var NoJQuery = function() {
        var elmts = [],
            self = NoJQuery,
            currentSelector = '';

        self.find = function(selector) {
            var total = 0,
                nodes = [],
                i = 0;

            elmts = [];
            currentSelector += ' ' + selector;
            nodes = document.querySelectorAll(currentSelector);
            total = nodes.length;

            for (i; i < total; i++) {
                elmts[i] = nodes[i];
            }
            return self;
        };
        self.each = function(callback) {
            Array.prototype.forEach.call(elmts, function(el, i) {
                callback(el, i);
            });
        };
        self.addClass = function(className) {
            var total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                if (elmts[i].classList) {
                    elmts[i].classList.add(className);
                } else {
                    elmts[i].className += ' ' + className;
                }
            }

            return self;
        };
        self.hasClass = function(className) {
            var result = false,
                total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                if (elmts[i].classList) {
                    result = elmts[i].classList.contains(className);
                } else {
                    result = new RegExp('(^| )' + className + '( |$)', 'gi').test(elmts[i].className);
                }
            }

            return result;
        };
        self.removeClass = function(className) {
            var total = elmts.length,
                i = 0;
            for (i; i < total; i++) {
                if (elmts[i].classList) {
                    elmts[i].classList.remove(className);
                } else {
                    elmts[i].className = elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }

            return self;
        };
        self.contains = function(selector) {
            var result = {},
                total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                result = elmts[i].querySelector(selector);
                if (result) {
                    break;
                }
            }
            return result;
        };
        self.empty = function() {
            var total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                elmts[i].innerHTML = '';
            }

            return self;
        };
        self.text = function(string) {
            var total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                elmts[i].textContent = string;
            }
            return self;
        };
        self.html = function(string) {
            var total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                elmts[i].innerHTML = string;
            }
            return self;
        };
        self.getAttr = function(attr) {
            var total = 1,
                i = 0,
                result = '';

            for (i; i < total; i++) {
                result = elmts[i].getAttribute(attr);
            }
            return result;
        };
        self.setAttr = function(attr, val) {
            var total = elmts.length,
                i = 0;

            for (i; i < total; i++) {
                elmts[i].setAttribute(attr, val);
            }
            return self;
        };
        self.remove = function(elmt) {
            var total = elmts.length,
                i = 0,
                elmt = {},
                removed = [];

            for (i; i < total; i++) {
                elmt = elmts[i];
                elmt.parentNode.removeChild(elmt);
                removed[i] = elmt;
            }
            return removed;
        };
        self.prev = function(elmt) {
            var total = elmts.length,
                i = 0,
                nextElemt;

            try {
                for (i; i < total; i++) {
                    elmts[i] = elmts[i].previousElementSibling;
                }
            } catch (ex) {
                console.warn('prev::', ex.message);
            }
            return self;
        };
        self.next = function() {
            var total = elmts.length,
                i = 0,
                nextElemt;

            try {
                for (i; i < total; i++) {
                    elmts[i] = elmts[i].nextElementSibling;
                }
            } catch (ex) {
                console.warn('next::', ex.message);
            }
            return self;
        };

        self.append = function(el) {
            var total = elmts.length,
                i = 0;
            try {
                for (i; i < total; i++) {
                    if (isString(el)) {
                        self.html(el);
                    } else {
                        elmts[i].appendChild(el);
                    }

                }
            } catch (ex) {
                console.warn('append::', ex.message);
            }
            return self;

        };


        self.prepend = function(el) {
            var total = elmts.length,
                i = 0,
                innerEmlt = el,
                parent;

            try {
                for (i; i < total; i++) {
                    parent = elmts[i].parentNode;
                    if (isString(el)) {
                        innerEmlt = parseHTML(el);
                    }
                    parent.insertBefore(innerEmlt, parent.firstChild);
                }
            } catch (ex) {
                console.warn('prepend::', ex.message);
            }
            return self;
        };

        function parseHTML(html) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return t.content.cloneNode(true);
        }

        function isString(selector) {
            var result = (typeof selector === 'string');
            return result;
        };

        return function(selector) {
            if (currentSelector) {
                currentSelector = '';
            }
            if (isString(selector)) {
                self.find(selector);
            } else {
                elmts.push(selector);
            }

            return self;
        };
    };

    return NoJQuery();
});
