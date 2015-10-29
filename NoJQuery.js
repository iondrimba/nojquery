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
    //     select: function(selector) {
    //         return this.find(selector);
    //     },
    //     find: function(selector) {
    //         var elmts = [],
    //             total = 0,
    //             i = 0;


    //         elmts = document.querySelectorAll(selector);
    //         total = elmts.length;

    //         for (i; i < total; i++) {
    //             this.elmts[i] = elmts[i];
    //         }
    //         return this;
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
    //     addClass: function(className) {
    //         var total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             if (this.elmts[i].classList) {
    //                 this.elmts[i].classList.add(className);
    //             } else {
    //                 this.elmts[i].className += ' ' + className;
    //             }
    //         }

    //         return this;
    //     },
    //     hasClass: function(className) {
    //         var result = false,
    //             total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             if (this.elmts[i].classList) {
    //                 result = this.elmts[i].classList.contains(className);
    //             } else {
    //                 result = new RegExp('(^| )' + className + '( |$)', 'gi').test(this.elmts[i].className);
    //             }
    //         }

    //         return result;
    //     },
    //     removeClass: function(className) {
    //         var total = this.elmts.length,
    //             i = 0;
    //         for (i; i < total; i++) {
    //             if (this.elmts[i].classList) {
    //                 this.elmts[i].classList.remove(className);
    //             } else {
    //                 this.elmts[i].className = this.elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    //             }
    //         }

    //         return this;
    //     },
    //     redraw: function(elmt) {
    //         elmt.offsetHeight;
    //     },
    //     contains: function(selector) {
    //         var result = {},
    //             total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             result = this.elmts[i].querySelector(selector);
    //         }
    //         return result;
    //     },
    //     each: function(callback) {
    //         Array.prototype.forEach.call(this.elmts, function(el, i) {
    //             callback(el, i);
    //         });
    //     },
    //     empty: function() {
    //         var total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             this.elmts[i].innerHTML = '';
    //         }

    //         return this;
    //     },
    //     html: function(string) {
    //         var total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             this.elmts[i].innerHTML = string;
    //         }

    //         return this;
    //     },
    //     text: function(string) {
    //         var total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             this.elmts[i].textContent = string;
    //         }

    //         return this;
    //     },
    //     getAttr: function(attr) {
    //         var total = 1,
    //             i = 0,
    //             result = '';

    //         for (i; i < total; i++) {
    //             result = this.elmts[i].getAttribute(attr);
    //         }
    //         return result;
    //     },
    //     setAttr: function(attr, val) {
    //         var total = this.elmts.length,
    //             i = 0;

    //         for (i; i < total; i++) {
    //             this.elmts[i].setAttribute(attr, val);
    //         }
    //         return this;
    //     },
    //     remove: function(elmt) {
    //         var total = this.elmts.length,
    //             i = 0,
    //             elmt = {},
    //             removed = [];

    //         for (i; i < total; i++) {
    //             elmt = this.elmts[i];
    //             elmt.parentNode.removeChild(elmt);
    //             removed[i] = elmt;
    //         }
    //         return removed;

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

        return function(selector) {
            if (currentSelector) {
                currentSelector = '';
            }
            if (typeof selector === 'string') {
                self.find(selector);
            }

            return self;
        };
    };

    return NoJQuery();
});