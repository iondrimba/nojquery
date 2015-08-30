define([], function () {
    'use strict';    
    var NoJQuery = {
        ajax: {
            getJson: function ajaxGet(url, onSuccess, onError) {
                var request = new XMLHttpRequest(),
                    dataSuccess,
                    dataError;

                request.open('GET', url, true);

                request.onload = function onload(evt) {
                    var options = {};
                    options.evt = evt;
                    options.request = request;
                    options.onSuccess = onSuccess;
                    options.onError = onError;
                    options.dataSuccess = dataSuccess;
                    options.dataError = dataError;

                    NoJQuery.ajax.jsonRequestOnLoad(options);
                };
                request.onerror = function onerror() {
                    onError();
                };
                request.send();
            },
            postJson: function ajaxPost(url, data, onSuccess, onError) {
                var request = new XMLHttpRequest(),
                    dataSuccess,
                    dataError;

                request.open('POST', url, true);
                request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                request.onload = function onload(evt) {
                    var options = {};
                    options.evt = evt;
                    options.request = request;
                    options.onSuccess = onSuccess;
                    options.onError = onError;
                    options.dataSuccess = dataSuccess;
                    options.dataError = dataError;

                    NoJQuery.ajax.jsonRequestOnLoad(options);
                };
                request.onerror = function onerror() {
                    onError();
                };
                request.send(data);
            },
            get: function ajaxGet(url, onSuccess, onError) {
                var request = new XMLHttpRequest(),
                    dataSuccess,
                    dataError;

                request.open('GET', url, true);

                request.onload = function onload(evt) {
                    var options = {};
                    options.evt = evt;
                    options.request = request;
                    options.onSuccess = onSuccess;
                    options.onError = onError;
                    options.dataSuccess = dataSuccess;
                    options.dataError = dataError;

                    NoJQuery.ajax.requestOnLoad(options);
                };
                request.onerror = function onerror() {
                    onError();
                };
                request.send();
            },
            onLoad: function (options, returnData) {
                if (options.request.status >= 200 && options.request.status < 400) {
                    options.dataSuccess = returnData;
                    options.onSuccess(options.dataSuccess);
                } else {
                    options.dataError = { message: options.evt.currentTarget.responseURL + ' - ' + options.evt.currentTarget.statusText, statusText: options.evt.currentTarget.statusText, responseURL: options.evt.currentTarget.responseURL, status: options.evt.currentTarget.status };
                    options.onError();
                }
            },
            jsonRequestOnLoad: function (options) {
                NoJQuery.ajax.onLoad(options, JSON.parse(options.request.responseText));
            },
            requestOnLoad: function (options) {
                NoJQuery.ajax.onLoad(options, options.request.responseText);
            }
        },
        select: function (selector) {
            var elmts = document.querySelectorAll(selector);

            if (elmts.length === 0) {
                throw "No element(s) found for '" + selector + "'";
            }
            return elmts;
        },
        find: function (selector) {
            var elmts = document.querySelectorAll(selector),
                count = 0;

            count = elmts.length;

            return count;
        },
        closestParent: function (child, className) {
            if (!child || child === document) {
                return null;
            }
            if (child.classList.contains(className)) {
                return child;
            } else {
                return NoJQuery.closestParent(child.parentNode, className);
            }
        },
        on: function (el, eventName, eventHandler) {
            el.addEventListener(eventName, eventHandler);
        },
        off: function (el, eventName, eventHandler) {
            el.removeEventListener(eventName, eventHandler);
        },
        addClass: function (elmts, className, dontRedraw) {
            for (var i = 0; i < elmts.length; i++) {
                if (!dontRedraw) {
                    this.redraw(elmts[i]);
                }                
                if (elmts[i].classList) {
                    elmts[i].classList.add(className);                    
                } else {
                    elmts[i].className += ' ' + className;
                }
            }
        },
        hasClass: function (elmt, className) {
            var result = false;
            if (elmt.classList) {
                result = elmt.classList.contains(className);
            } else {
                result = new RegExp('(^| )' + className + '( |$)', 'gi').test(elmt.className);
            }

            return result;
        },
        removeClass: function (elmts, className) {
            for (var i = 0; i < elmts.length; i++) {
                if (elmts[i].classList) {
                    elmts[i].classList.remove(className);
                } else {
                    elmts[i].className = elmts[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        },
        redraw: function(elmt) {
            elmt.offsetHeight;
        },
        containsSelector: function (elmt, selector) {
            var result = elmt.querySelector(selector) !== null;
            return result;
        },
        each: function (selector, eachFunc) {
            var elmts = document.querySelectorAll(selector);
            Array.prototype.forEach.call(elmts, function (el, i) {
                eachFunc(el, i);
            });
        },
        empty: function (elmt) {
            elmt.innerHTML = '';
        },
        getAttr: function (elmt, attr) {
            var result = elmt.getAttribute(attr);
            return result;
        },
        setAttr: function (elmt, attr, val) {
            elmt.setAttribute(attr, val);
        },
        remove: function (elmt) {
            elmt.parentNode.removeChild(NoJQuery.elmt);
        },
        prev: function (elmt) {
            var prevElmt = elmt.previousElementSibling;
            return prevElmt;
        },
        next: function (elmt) {
            var nextElmt = elmt.nextElementSibling;
            return nextElmt;
        },
        proxy: function (fn, context) {
            fn.bind(context);
        },
        html: function (elmt, string) {
            elmt.innerHTML = string;
        },
        text: function (elmt, string) {
            elmt.textContent = string;
        },
        append: function (elmt, el) {
            elmt.appendChild(el);
        },
        prepend: function (elmt, el) {
            var parent = elmt;
            parent.insertBefore(el, parent.firstChild);
        },
        parseHtml: function (str) {
            var tmp = document.implementation.createHTMLDocument();
            tmp.body.innerHTML = str;
            return tmp.body.children;
        }
    };

    return NoJQuery;
});