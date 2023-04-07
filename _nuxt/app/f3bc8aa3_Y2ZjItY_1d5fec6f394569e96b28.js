(window.webpackJsonp = window.webpackJsonp || []).push([
    [132], {
        502: function(e, t, r) {
            "use strict";
            var o, n = {
                DEBUG: !1,
                LIB_VERSION: "2.45.0"
            };
            if ("undefined" == typeof window) {
                var c = {
                    hostname: ""
                };
                o = {
                    navigator: {
                        userAgent: ""
                    },
                    document: {
                        location: c,
                        referrer: ""
                    },
                    screen: {
                        width: 0,
                        height: 0
                    },
                    location: c
                }
            } else o = window;
            var _, h, text, l, f, d, m, y, v, k, x, w = Array.prototype,
                S = Function.prototype,
                E = Object.prototype,
                O = w.slice,
                I = E.toString,
                D = E.hasOwnProperty,
                A = o.console,
                T = o.navigator,
                $ = o.document,
                B = o.opera,
                U = o.screen,
                C = T.userAgent,
                j = S.bind,
                N = w.forEach,
                M = w.indexOf,
                P = w.map,
                F = Array.isArray,
                R = {},
                z = {
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                L = {
                    log: function() {
                        if (n.DEBUG && !z.isUndefined(A) && A) try {
                            A.log.apply(A, arguments)
                        } catch (e) {
                            z.each(arguments, (function(e) {
                                A.log(e)
                            }))
                        }
                    },
                    warn: function() {
                        if (n.DEBUG && !z.isUndefined(A) && A) {
                            var e = ["Mixpanel warning:"].concat(z.toArray(arguments));
                            try {
                                A.warn.apply(A, e)
                            } catch (t) {
                                z.each(e, (function(e) {
                                    A.warn(e)
                                }))
                            }
                        }
                    },
                    error: function() {
                        if (n.DEBUG && !z.isUndefined(A) && A) {
                            var e = ["Mixpanel error:"].concat(z.toArray(arguments));
                            try {
                                A.error.apply(A, e)
                            } catch (t) {
                                z.each(e, (function(e) {
                                    A.error(e)
                                }))
                            }
                        }
                    },
                    critical: function() {
                        if (!z.isUndefined(A) && A) {
                            var e = ["Mixpanel error:"].concat(z.toArray(arguments));
                            try {
                                A.error.apply(A, e)
                            } catch (t) {
                                z.each(e, (function(e) {
                                    A.error(e)
                                }))
                            }
                        }
                    }
                },
                J = function(e, t) {
                    return function() {
                        return arguments[0] = "[" + t + "] " + arguments[0], e.apply(L, arguments)
                    }
                },
                Q = function(e) {
                    return {
                        log: J(L.log, e),
                        error: J(L.error, e),
                        critical: J(L.critical, e)
                    }
                };
            z.bind = function(e, t) {
                var r, o;
                if (j && e.bind === j) return j.apply(e, O.call(arguments, 1));
                if (!z.isFunction(e)) throw new TypeError;
                return r = O.call(arguments, 2), o = function() {
                    if (!(this instanceof o)) return e.apply(t, r.concat(O.call(arguments)));
                    var n = {};
                    n.prototype = e.prototype;
                    var c = new n;
                    n.prototype = null;
                    var _ = e.apply(c, r.concat(O.call(arguments)));
                    return Object(_) === _ ? _ : c
                }, o
            }, z.each = function(e, t, r) {
                if (null != e)
                    if (N && e.forEach === N) e.forEach(t, r);
                    else if (e.length === +e.length) {
                    for (var i = 0, o = e.length; i < o; i++)
                        if (i in e && t.call(r, e[i], i, e) === R) return
                } else
                    for (var n in e)
                        if (D.call(e, n) && t.call(r, e[n], n, e) === R) return
            }, z.extend = function(e) {
                return z.each(O.call(arguments, 1), (function(source) {
                    for (var t in source) void 0 !== source[t] && (e[t] = source[t])
                })), e
            }, z.isArray = F || function(e) {
                return "[object Array]" === I.call(e)
            }, z.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (e) {
                    return !1
                }
            }, z.isArguments = function(e) {
                return !(!e || !D.call(e, "callee"))
            }, z.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : z.isArray(e) || z.isArguments(e) ? O.call(e) : z.values(e) : []
            }, z.map = function(e, t, r) {
                if (P && e.map === P) return e.map(t, r);
                var o = [];
                return z.each(e, (function(e) {
                    o.push(t.call(r, e))
                })), o
            }, z.keys = function(e) {
                var t = [];
                return null === e || z.each(e, (function(e, r) {
                    t[t.length] = r
                })), t
            }, z.values = function(e) {
                var t = [];
                return null === e || z.each(e, (function(e) {
                    t[t.length] = e
                })), t
            }, z.include = function(e, t) {
                var r = !1;
                return null === e ? r : M && e.indexOf === M ? -1 != e.indexOf(t) : (z.each(e, (function(e) {
                    if (r || (r = e === t)) return R
                })), r)
            }, z.includes = function(e, t) {
                return -1 !== e.indexOf(t)
            }, z.inherit = function(e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, z.isObject = function(e) {
                return e === Object(e) && !z.isArray(e)
            }, z.isEmptyObject = function(e) {
                if (z.isObject(e)) {
                    for (var t in e)
                        if (D.call(e, t)) return !1;
                    return !0
                }
                return !1
            }, z.isUndefined = function(e) {
                return void 0 === e
            }, z.isString = function(e) {
                return "[object String]" == I.call(e)
            }, z.isDate = function(e) {
                return "[object Date]" == I.call(e)
            }, z.isNumber = function(e) {
                return "[object Number]" == I.call(e)
            }, z.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }, z.encodeDates = function(e) {
                return z.each(e, (function(t, r) {
                    z.isDate(t) ? e[r] = z.formatDate(t) : z.isObject(t) && (e[r] = z.encodeDates(t))
                })), e
            }, z.timestamp = function() {
                return Date.now = Date.now || function() {
                    return +new Date
                }, Date.now()
            }, z.formatDate = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
            }, z.strip_empty_properties = function(p) {
                var e = {};
                return z.each(p, (function(t, r) {
                    z.isString(t) && t.length > 0 && (e[r] = t)
                })), e
            }, z.truncate = function(e, t) {
                var r;
                return "string" == typeof e ? r = e.slice(0, t) : z.isArray(e) ? (r = [], z.each(e, (function(e) {
                    r.push(z.truncate(e, t))
                }))) : z.isObject(e) ? (r = {}, z.each(e, (function(e, o) {
                    r[o] = z.truncate(e, t)
                }))) : r = e, r
            }, z.JSONEncode = function(e) {
                var t = function(e) {
                        var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                            meta = {
                                "\b": "\\b",
                                "\t": "\\t",
                                "\n": "\\n",
                                "\f": "\\f",
                                "\r": "\\r",
                                '"': '\\"',
                                "\\": "\\\\"
                            };
                        return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, (function(a) {
                            var e = meta[a];
                            return "string" == typeof e ? e : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        })) + '"' : '"' + e + '"'
                    },
                    r = function(e, o) {
                        var n = "",
                            i = 0,
                            c = "",
                            _ = "",
                            h = 0,
                            l = n,
                            f = [],
                            d = o[e];
                        switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)), typeof d) {
                            case "string":
                                return t(d);
                            case "number":
                                return isFinite(d) ? String(d) : "null";
                            case "boolean":
                            case "null":
                                return String(d);
                            case "object":
                                if (!d) return "null";
                                if (n += "    ", f = [], "[object Array]" === I.apply(d)) {
                                    for (h = d.length, i = 0; i < h; i += 1) f[i] = r(i, d) || "null";
                                    return _ = 0 === f.length ? "[]" : n ? "[\n" + n + f.join(",\n" + n) + "\n" + l + "]" : "[" + f.join(",") + "]", n = l, _
                                }
                                for (c in d) D.call(d, c) && (_ = r(c, d)) && f.push(t(c) + (n ? ": " : ":") + _);
                                return _ = 0 === f.length ? "{}" : n ? "{" + f.join(",") + l + "}" : "{" + f.join(",") + "}", n = l, _
                        }
                    };
                return r("", {
                    "": e
                })
            }, z.JSONDecode = (f = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            }, d = function(e) {
                var t = new SyntaxError(e);
                throw t.at = _, t.text = text, t
            }, m = function(e) {
                return e && e !== h && d("Expected '" + e + "' instead of '" + h + "'"), h = text.charAt(_), _ += 1, h
            }, y = function() {
                var e, t = "";
                for ("-" === h && (t = "-", m("-")); h >= "0" && h <= "9";) t += h, m();
                if ("." === h)
                    for (t += "."; m() && h >= "0" && h <= "9";) t += h;
                if ("e" === h || "E" === h)
                    for (t += h, m(), "-" !== h && "+" !== h || (t += h, m()); h >= "0" && h <= "9";) t += h, m();
                if (e = +t, isFinite(e)) return e;
                d("Bad number")
            }, v = function() {
                var e, i, t, r = "";
                if ('"' === h)
                    for (; m();) {
                        if ('"' === h) return m(), r;
                        if ("\\" === h)
                            if (m(), "u" === h) {
                                for (t = 0, i = 0; i < 4 && (e = parseInt(m(), 16), isFinite(e)); i += 1) t = 16 * t + e;
                                r += String.fromCharCode(t)
                            } else {
                                if ("string" != typeof f[h]) break;
                                r += f[h]
                            }
                        else r += h
                    }
                d("Bad string")
            }, k = function() {
                for (; h && h <= " ";) m()
            }, l = function() {
                switch (k(), h) {
                    case "{":
                        return function() {
                            var e, object = {};
                            if ("{" === h) {
                                if (m("{"), k(), "}" === h) return m("}"), object;
                                for (; h;) {
                                    if (e = v(), k(), m(":"), Object.hasOwnProperty.call(object, e) && d('Duplicate key "' + e + '"'), object[e] = l(), k(), "}" === h) return m("}"), object;
                                    m(","), k()
                                }
                            }
                            d("Bad object")
                        }();
                    case "[":
                        return function() {
                            var e = [];
                            if ("[" === h) {
                                if (m("["), k(), "]" === h) return m("]"), e;
                                for (; h;) {
                                    if (e.push(l()), k(), "]" === h) return m("]"), e;
                                    m(","), k()
                                }
                            }
                            d("Bad array")
                        }();
                    case '"':
                        return v();
                    case "-":
                        return y();
                    default:
                        return h >= "0" && h <= "9" ? y() : function() {
                            switch (h) {
                                case "t":
                                    return m("t"), m("r"), m("u"), m("e"), !0;
                                case "f":
                                    return m("f"), m("a"), m("l"), m("s"), m("e"), !1;
                                case "n":
                                    return m("n"), m("u"), m("l"), m("l"), null
                            }
                            d('Unexpected "' + h + '"')
                        }()
                }
            }, function(source) {
                var e;
                return text = source, _ = 0, h = " ", e = l(), k(), h && d("Syntax error"), e
            }), z.base64Encode = function(data) {
                var h1, h2, h3, h4, e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    i = 0,
                    r = 0,
                    o = "",
                    n = [];
                if (!data) return data;
                data = z.utf8Encode(data);
                do {
                    h1 = (e = data.charCodeAt(i++) << 16 | data.charCodeAt(i++) << 8 | data.charCodeAt(i++)) >> 18 & 63, h2 = e >> 12 & 63, h3 = e >> 6 & 63, h4 = 63 & e, n[r++] = t.charAt(h1) + t.charAt(h2) + t.charAt(h3) + t.charAt(h4)
                } while (i < data.length);
                switch (o = n.join(""), data.length % 3) {
                    case 1:
                        o = o.slice(0, -2) + "==";
                        break;
                    case 2:
                        o = o.slice(0, -1) + "="
                }
                return o
            }, z.utf8Encode = function(e) {
                var t, r, o, n, c = "";
                for (t = r = 0, o = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, n = 0; n < o; n++) {
                    var _ = e.charCodeAt(n),
                        h = null;
                    _ < 128 ? r++ : h = _ > 127 && _ < 2048 ? String.fromCharCode(_ >> 6 | 192, 63 & _ | 128) : String.fromCharCode(_ >> 12 | 224, _ >> 6 & 63 | 128, 63 & _ | 128), null !== h && (r > t && (c += e.substring(t, r)), c += h, t = r = n + 1)
                }
                return r > t && (c += e.substring(t, e.length)), c
            }, z.UUID = (x = function() {
                for (var e = 1 * new Date, i = 0; e == 1 * new Date;) i++;
                return e.toString(16) + i.toString(16)
            }, function() {
                var e = (U.height * U.width).toString(16);
                return x() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                    var i, e, t = C,
                        r = [],
                        o = 0;

                    function n(e, t) {
                        var o, n = 0;
                        for (o = 0; o < t.length; o++) n |= r[o] << 8 * o;
                        return e ^ n
                    }
                    for (i = 0; i < t.length; i++) e = t.charCodeAt(i), r.unshift(255 & e), r.length >= 4 && (o = n(o, r), r = []);
                    return r.length > 0 && (o = n(o, r)), o.toString(16)
                }() + "-" + e + "-" + x()
            });
            var H = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
            z.isBlockedUA = function(e) {
                var i;
                for (e = e.toLowerCase(), i = 0; i < H.length; i++)
                    if (-1 !== e.indexOf(H[i])) return !0;
                return !1
            }, z.HTTPBuildQuery = function(e, t) {
                var r, o, n = [];
                return z.isUndefined(t) && (t = "&"), z.each(e, (function(e, t) {
                    r = encodeURIComponent(e.toString()), o = encodeURIComponent(t), n[n.length] = o + "=" + r
                })), n.join(t)
            }, z.getQueryParam = function(e, param) {
                param = param.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + param + "=([^&#]*)").exec(e);
                if (null === t || t && "string" != typeof t[1] && t[1].length) return "";
                var r = t[1];
                try {
                    r = decodeURIComponent(r)
                } catch (e) {
                    L.error("Skipping decoding for malformed query param: " + r)
                }
                return r.replace(/\+/g, " ")
            }, z.cookie = {
                get: function(e) {
                    for (var t = e + "=", r = $.cookie.split(";"), i = 0; i < r.length; i++) {
                        for (var o = r[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                },
                parse: function(e) {
                    var t;
                    try {
                        t = z.JSONDecode(z.cookie.get(e)) || {}
                    } catch (e) {}
                    return t
                },
                set_seconds: function(e, t, r, o, n, c, _) {
                    var h = "",
                        l = "",
                        f = "";
                    if (_) h = "; domain=" + _;
                    else if (o) {
                        var d = Z($.location.hostname);
                        h = d ? "; domain=." + d : ""
                    }
                    if (r) {
                        var m = new Date;
                        m.setTime(m.getTime() + 1e3 * r), l = "; expires=" + m.toGMTString()
                    }
                    c && (n = !0, f = "; SameSite=None"), n && (f += "; secure"), $.cookie = e + "=" + encodeURIComponent(t) + l + "; path=/" + h + f
                },
                set: function(e, t, r, o, n, c, _) {
                    var h = "",
                        l = "",
                        f = "";
                    if (_) h = "; domain=" + _;
                    else if (o) {
                        var d = Z($.location.hostname);
                        h = d ? "; domain=." + d : ""
                    }
                    if (r) {
                        var m = new Date;
                        m.setTime(m.getTime() + 24 * r * 60 * 60 * 1e3), l = "; expires=" + m.toGMTString()
                    }
                    c && (n = !0, f = "; SameSite=None"), n && (f += "; secure");
                    var y = e + "=" + encodeURIComponent(t) + l + "; path=/" + h + f;
                    return $.cookie = y, y
                },
                remove: function(e, t, r) {
                    z.cookie.set(e, "", -1, t, !1, !1, r)
                }
            };
            var K = null,
                G = function(e, t) {
                    if (null !== K && !t) return K;
                    var r = !0;
                    try {
                        e = e || window.localStorage;
                        var o = "__mplss_" + W(8);
                        e.setItem(o, "xyz"), "xyz" !== e.getItem(o) && (r = !1), e.removeItem(o)
                    } catch (e) {
                        r = !1
                    }
                    return K = r, r
                };
            z.localStorage = {
                is_supported: function(e) {
                    var t = G(null, e);
                    return t || L.error("localStorage unsupported; falling back to cookie store"), t
                },
                error: function(e) {
                    L.error("localStorage error: " + e)
                },
                get: function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (e) {
                        z.localStorage.error(e)
                    }
                    return null
                },
                parse: function(e) {
                    try {
                        return z.JSONDecode(z.localStorage.get(e)) || {}
                    } catch (e) {}
                    return null
                },
                set: function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (e) {
                        z.localStorage.error(e)
                    }
                },
                remove: function(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        z.localStorage.error(e)
                    }
                }
            }, z.register_event = function() {
                function e(t) {
                    return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                }
                return e.preventDefault = function() {
                        this.returnValue = !1
                    }, e.stopPropagation = function() {
                        this.cancelBubble = !0
                    },
                    function(element, t, r, o, n) {
                        if (element)
                            if (element.addEventListener && !o) element.addEventListener(t, r, !!n);
                            else {
                                var c = "on" + t,
                                    _ = element[c];
                                element[c] = function(element, t, r) {
                                    return function(o) {
                                        if (o = o || e(window.event)) {
                                            var n, c, _ = !0;
                                            return z.isFunction(r) && (n = r(o)), c = t.call(element, o), !1 !== n && !1 !== c || (_ = !1), _
                                        }
                                    }
                                }(element, r, _)
                            }
                        else L.error("No valid element provided to register_event")
                    }
            }();
            var V = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
            z.dom_query = function() {
                function e(e) {
                    return e.all ? e.all : e.getElementsByTagName("*")
                }
                var t = /[\t\r\n]/g;

                function r(e, r) {
                    var o = " " + r + " ";
                    return (" " + e.className + " ").replace(t, " ").indexOf(o) >= 0
                }

                function o(t) {
                    if (!$.getElementsByTagName) return [];
                    var o, n, c, _, h, i, l, f, d, m, y = t.split(" "),
                        v = [$];
                    for (i = 0; i < y.length; i++)
                        if ((o = y[i].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                            c = (n = o.split("#"))[0];
                            var k = n[1],
                                element = $.getElementById(k);
                            if (!element || c && element.nodeName.toLowerCase() != c) return [];
                            v = [element]
                        } else if (o.indexOf(".") > -1) {
                        c = (n = o.split("."))[0];
                        var x = n[1];
                        for (c || (c = "*"), _ = [], h = 0, l = 0; l < v.length; l++)
                            for (d = "*" == c ? e(v[l]) : v[l].getElementsByTagName(c), f = 0; f < d.length; f++) _[h++] = d[f];
                        for (v = [], m = 0, l = 0; l < _.length; l++) _[l].className && z.isString(_[l].className) && r(_[l], x) && (v[m++] = _[l])
                    } else {
                        var w = o.match(V);
                        if (w) {
                            c = w[1];
                            var S, E = w[2],
                                O = w[3],
                                I = w[4];
                            for (c || (c = "*"), _ = [], h = 0, l = 0; l < v.length; l++)
                                for (d = "*" == c ? e(v[l]) : v[l].getElementsByTagName(c), f = 0; f < d.length; f++) _[h++] = d[f];
                            switch (v = [], m = 0, O) {
                                case "=":
                                    S = function(e) {
                                        return e.getAttribute(E) == I
                                    };
                                    break;
                                case "~":
                                    S = function(e) {
                                        return e.getAttribute(E).match(new RegExp("\\b" + I + "\\b"))
                                    };
                                    break;
                                case "|":
                                    S = function(e) {
                                        return e.getAttribute(E).match(new RegExp("^" + I + "-?"))
                                    };
                                    break;
                                case "^":
                                    S = function(e) {
                                        return 0 === e.getAttribute(E).indexOf(I)
                                    };
                                    break;
                                case "$":
                                    S = function(e) {
                                        return e.getAttribute(E).lastIndexOf(I) == e.getAttribute(E).length - I.length
                                    };
                                    break;
                                case "*":
                                    S = function(e) {
                                        return e.getAttribute(E).indexOf(I) > -1
                                    };
                                    break;
                                default:
                                    S = function(e) {
                                        return e.getAttribute(E)
                                    }
                            }
                            for (v = [], m = 0, l = 0; l < _.length; l++) S(_[l]) && (v[m++] = _[l])
                        } else {
                            for (c = o, _ = [], h = 0, l = 0; l < v.length; l++)
                                for (d = v[l].getElementsByTagName(c), f = 0; f < d.length; f++) _[h++] = d[f];
                            v = _
                        }
                    }
                    return v
                }
                return function(e) {
                    return z.isElement(e) ? [e] : z.isObject(e) && !z.isUndefined(e.length) ? e : o.call(this, e)
                }
            }(), z.info = {
                campaignParams: function() {
                    var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                        t = "",
                        r = {};
                    return z.each(e, (function(e) {
                        (t = z.getQueryParam($.URL, e)).length && (r[e] = t)
                    })), r
                },
                searchEngine: function(e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                },
                searchInfo: function(e) {
                    var t = z.info.searchEngine(e),
                        param = "yahoo" != t ? "q" : "p",
                        r = {};
                    if (null !== t) {
                        r.$search_engine = t;
                        var o = z.getQueryParam(e, param);
                        o.length && (r.mp_keyword = o)
                    }
                    return r
                },
                browser: function(e, t, r) {
                    return t = t || "", r || z.includes(e, " OPR/") ? z.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : z.includes(e, "IEMobile") || z.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : z.includes(e, "SamsungBrowser/") ? "Samsung Internet" : z.includes(e, "Edge") || z.includes(e, "Edg/") ? "Microsoft Edge" : z.includes(e, "FBIOS") ? "Facebook Mobile" : z.includes(e, "Chrome") ? "Chrome" : z.includes(e, "CriOS") ? "Chrome iOS" : z.includes(e, "UCWEB") || z.includes(e, "UCBrowser") ? "UC Browser" : z.includes(e, "FxiOS") ? "Firefox iOS" : z.includes(t, "Apple") ? z.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : z.includes(e, "Android") ? "Android Mobile" : z.includes(e, "Konqueror") ? "Konqueror" : z.includes(e, "Firefox") ? "Firefox" : z.includes(e, "MSIE") || z.includes(e, "Trident/") ? "Internet Explorer" : z.includes(e, "Gecko") ? "Mozilla" : ""
                },
                browserVersion: function(e, t, r) {
                    var o = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    }[z.info.browser(e, t, r)];
                    if (void 0 === o) return null;
                    var n = e.match(o);
                    return n ? parseFloat(n[n.length - 2]) : null
                },
                os: function() {
                    var a = C;
                    return /Windows/i.test(a) ? /Phone/.test(a) || /WPDesktop/.test(a) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(a) ? "iOS" : /Android/.test(a) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : /Mac/i.test(a) ? "Mac OS X" : /Linux/.test(a) ? "Linux" : /CrOS/.test(a) ? "Chrome OS" : ""
                },
                device: function(e) {
                    return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
                },
                referringDomain: function(e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                properties: function() {
                    return z.extend(z.strip_empty_properties({
                        $os: z.info.os(),
                        $browser: z.info.browser(C, T.vendor, B),
                        $referrer: $.referrer,
                        $referring_domain: z.info.referringDomain($.referrer),
                        $device: z.info.device(C)
                    }), {
                        $current_url: o.location.href,
                        $browser_version: z.info.browserVersion(C, T.vendor, B),
                        $screen_height: U.height,
                        $screen_width: U.width,
                        mp_lib: "web",
                        $lib_version: n.LIB_VERSION,
                        $insert_id: W(),
                        time: z.timestamp() / 1e3
                    })
                },
                people_properties: function() {
                    return z.extend(z.strip_empty_properties({
                        $os: z.info.os(),
                        $browser: z.info.browser(C, T.vendor, B)
                    }), {
                        $browser_version: z.info.browserVersion(C, T.vendor, B)
                    })
                },
                pageviewInfo: function(e) {
                    return z.strip_empty_properties({
                        mp_page: e,
                        mp_referrer: $.referrer,
                        mp_browser: z.info.browser(C, T.vendor, B),
                        mp_platform: z.info.os()
                    })
                }
            };
            var W = function(e) {
                    var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                    return e ? t.substring(0, e) : t
                },
                X = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
                Y = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                Z = function(e) {
                    var t = Y,
                        r = e.split("."),
                        o = r[r.length - 1];
                    (o.length > 4 || "com" === o || "org" === o) && (t = X);
                    var n = e.match(t);
                    return n ? n[0] : ""
                },
                ee = null,
                te = null;
            "undefined" != typeof JSON && (ee = JSON.stringify, te = JSON.parse), ee = ee || z.JSONEncode, te = te || z.JSONDecode, z.toArray = z.toArray, z.isObject = z.isObject, z.JSONEncode = z.JSONEncode, z.JSONDecode = z.JSONDecode, z.isBlockedUA = z.isBlockedUA, z.isEmptyObject = z.isEmptyObject, z.info = z.info, z.info.device = z.info.device, z.info.browser = z.info.browser, z.info.browserVersion = z.info.browserVersion, z.info.properties = z.info.properties;
            var re = function() {};
            re.prototype.create_properties = function() {}, re.prototype.event_handler = function() {}, re.prototype.after_track_handler = function() {}, re.prototype.init = function(e) {
                return this.mp = e, this
            }, re.prototype.track = function(e, t, r, o) {
                var n = this,
                    c = z.dom_query(e);
                if (0 !== c.length) return z.each(c, (function(element) {
                    z.register_event(element, this.override_event, (function(e) {
                        var c = {},
                            _ = n.create_properties(r, this),
                            h = n.mp.get_config("track_links_timeout");
                        n.event_handler(e, this, c), window.setTimeout(n.track_callback(o, _, c, !0), h), n.mp.track(t, _, n.track_callback(o, _, c))
                    }))
                }), this), !0;
                L.error("The DOM query (" + e + ") returned 0 elements")
            }, re.prototype.track_callback = function(e, t, r, o) {
                o = o || !1;
                var n = this;
                return function() {
                    r.callback_fired || (r.callback_fired = !0, e && !1 === e(o, t) || n.after_track_handler(t, r, o))
                }
            }, re.prototype.create_properties = function(e, element) {
                return "function" == typeof e ? e(element) : z.extend({}, e)
            };
            var ie = function() {
                this.override_event = "click"
            };
            z.inherit(ie, re), ie.prototype.create_properties = function(e, element) {
                var t = ie.superclass.create_properties.apply(this, arguments);
                return element.href && (t.url = element.href), t
            }, ie.prototype.event_handler = function(e, element, t) {
                t.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === element.target, t.href = element.href, t.new_tab || e.preventDefault()
            }, ie.prototype.after_track_handler = function(e, t) {
                t.new_tab || setTimeout((function() {
                    window.location = t.href
                }), 0)
            };
            var oe = function() {
                this.override_event = "submit"
            };
            z.inherit(oe, re), oe.prototype.event_handler = function(e, element, t) {
                t.element = element, e.preventDefault()
            }, oe.prototype.after_track_handler = function(e, t) {
                setTimeout((function() {
                    t.element.submit()
                }), 0)
            };
            var ne = Q("lock"),
                se = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3
                };
            se.prototype.withLock = function(e, t, r) {
                r || "function" == typeof t || (r = t, t = null);
                var i = r || (new Date).getTime() + "|" + Math.random(),
                    o = (new Date).getTime(),
                    n = this.storageKey,
                    c = this.pollIntervalMS,
                    _ = this.timeoutMS,
                    h = this.storage,
                    l = n + ":X",
                    f = n + ":Y",
                    d = n + ":Z",
                    m = function(e) {
                        t && t(e)
                    },
                    y = function(e) {
                        if ((new Date).getTime() - o > _) return ne.error("Timeout waiting for mutex on " + n + "; clearing lock. [" + i + "]"), h.removeItem(d), h.removeItem(f), void x();
                        setTimeout((function() {
                            try {
                                e()
                            } catch (e) {
                                m(e)
                            }
                        }), c * (Math.random() + .1))
                    },
                    v = function(e, t) {
                        e() ? t() : y((function() {
                            v(e, t)
                        }))
                    },
                    k = function() {
                        var e = h.getItem(f);
                        if (e && e !== i) return !1;
                        if (h.setItem(f, i), h.getItem(f) === i) return !0;
                        if (!G(h, !0)) throw new Error("localStorage support dropped while acquiring lock");
                        return !1
                    },
                    x = function() {
                        h.setItem(l, i), v(k, (function() {
                            h.getItem(l) !== i ? y((function() {
                                h.getItem(f) === i ? v((function() {
                                    return !h.getItem(d)
                                }), w) : x()
                            })) : w()
                        }))
                    },
                    w = function() {
                        h.setItem(d, "1");
                        try {
                            e()
                        } finally {
                            h.removeItem(d), h.getItem(f) === i && h.removeItem(f), h.getItem(l) === i && h.removeItem(l)
                        }
                    };
                try {
                    if (!G(h, !0)) throw new Error("localStorage support check failed");
                    x()
                } catch (e) {
                    m(e)
                }
            };
            var ae = Q("batch"),
                ce = function(e, t) {
                    t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || z.bind(ae.error, ae), this.lock = new se(e, {
                        storage: this.storage
                    }), this.pid = t.pid || null, this.memQueue = []
                };
            ce.prototype.enqueue = function(e, t, r) {
                var o = {
                    id: W(),
                    flushAfter: (new Date).getTime() + 2 * t,
                    payload: e
                };
                this.lock.withLock(z.bind((function() {
                    var t;
                    try {
                        var n = this.readFromStorage();
                        n.push(o), (t = this.saveToStorage(n)) && this.memQueue.push(o)
                    } catch (r) {
                        this.reportError("Error enqueueing item", e), t = !1
                    }
                    r && r(t)
                }), this), z.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), r && r(!1)
                }), this), this.pid)
            }, ce.prototype.fillBatch = function(e) {
                var t = this.memQueue.slice(0, e);
                if (t.length < e) {
                    var r = this.readFromStorage();
                    if (r.length) {
                        var o = {};
                        z.each(t, (function(e) {
                            o[e.id] = !0
                        }));
                        for (var i = 0; i < r.length; i++) {
                            var n = r[i];
                            if ((new Date).getTime() > n.flushAfter && !o[n.id] && (n.orphaned = !0, t.push(n), t.length >= e)) break
                        }
                    }
                }
                return t
            };
            var pe = function(e, t) {
                var r = [];
                return z.each(e, (function(e) {
                    e.id && !t[e.id] && r.push(e)
                })), r
            };
            ce.prototype.removeItemsByID = function(e, t) {
                var r = {};
                z.each(e, (function(e) {
                    r[e] = !0
                })), this.memQueue = pe(this.memQueue, r);
                var o = z.bind((function() {
                    var t;
                    try {
                        var o = this.readFromStorage();
                        if (o = pe(o, r), t = this.saveToStorage(o)) {
                            o = this.readFromStorage();
                            for (var i = 0; i < o.length; i++) {
                                var n = o[i];
                                if (n.id && r[n.id]) return this.reportError("Item not removed from storage"), !1
                            }
                        }
                    } catch (r) {
                        this.reportError("Error removing items", e), t = !1
                    }
                    return t
                }), this);
                this.lock.withLock((function() {
                    var e = o();
                    t && t(e)
                }), z.bind((function(e) {
                    var r = !1;
                    if (this.reportError("Error acquiring storage lock", e), !G(this.storage, !0) && !(r = o())) try {
                        this.storage.removeItem(this.storageKey)
                    } catch (e) {
                        this.reportError("Error clearing queue", e)
                    }
                    t && t(r)
                }), this), this.pid)
            };
            var ue = function(e, t) {
                var r = [];
                return z.each(e, (function(e) {
                    var o = e.id;
                    if (o in t) {
                        var n = t[o];
                        null !== n && (e.payload = n, r.push(e))
                    } else r.push(e)
                })), r
            };
            ce.prototype.updatePayloads = function(e, t) {
                this.memQueue = ue(this.memQueue, e), this.lock.withLock(z.bind((function() {
                    var r;
                    try {
                        var o = this.readFromStorage();
                        o = ue(o, e), r = this.saveToStorage(o)
                    } catch (t) {
                        this.reportError("Error updating items", e), r = !1
                    }
                    t && t(r)
                }), this), z.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e), t && t(!1)
                }), this), this.pid)
            }, ce.prototype.readFromStorage = function() {
                var e;
                try {
                    (e = this.storage.getItem(this.storageKey)) && (e = te(e), z.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null))
                } catch (t) {
                    this.reportError("Error retrieving queue", t), e = null
                }
                return e || []
            }, ce.prototype.saveToStorage = function(e) {
                try {
                    return this.storage.setItem(this.storageKey, ee(e)), !0
                } catch (e) {
                    return this.reportError("Error saving queue", e), !1
                }
            }, ce.prototype.clear = function() {
                this.memQueue = [], this.storage.removeItem(this.storageKey)
            };
            var _e = Q("batch"),
                he = function(e, t) {
                    this.errorReporter = t.errorReporter, this.queue = new ce(e, {
                        errorReporter: z.bind(this.reportError, this),
                        storage: t.storage
                    }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
                };
            he.prototype.enqueue = function(e, t) {
                this.queue.enqueue(e, this.flushInterval, t)
            }, he.prototype.start = function() {
                this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
            }, he.prototype.stop = function() {
                this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
            }, he.prototype.clear = function() {
                this.queue.clear()
            }, he.prototype.resetBatchSize = function() {
                this.batchSize = this.libConfig.batch_size
            }, he.prototype.resetFlush = function() {
                this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
            }, he.prototype.scheduleFlush = function(e) {
                this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(z.bind(this.flush, this), this.flushInterval))
            }, he.prototype.flush = function(e) {
                try {
                    if (this.requestInProgress) return void _e.log("Flush: Request already in progress");
                    e = e || {};
                    var t = this.libConfig.batch_request_timeout_ms,
                        r = (new Date).getTime(),
                        o = this.batchSize,
                        n = this.queue.fillBatch(o),
                        c = [],
                        _ = {};
                    if (z.each(n, (function(e) {
                            var t = e.payload;
                            this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)), t && c.push(t), _[e.id] = t
                        }), this), c.length < 1) return void this.resetFlush();
                    this.requestInProgress = !0;
                    var h = z.bind((function(c) {
                            this.requestInProgress = !1;
                            try {
                                var h = !1;
                                if (e.unloading) this.queue.updatePayloads(_);
                                else if (z.isObject(c) && "timeout" === c.error && (new Date).getTime() - r >= t) this.reportError("Network timeout; retrying"), this.flush();
                                else if (z.isObject(c) && c.xhr_req && (c.xhr_req.status >= 500 || 429 === c.xhr_req.status || "timeout" === c.error)) {
                                    var l = 2 * this.flushInterval,
                                        f = c.xhr_req.responseHeaders;
                                    if (f) {
                                        var d = f["Retry-After"];
                                        d && (l = 1e3 * parseInt(d, 10) || l)
                                    }
                                    l = Math.min(6e5, l), this.reportError("Error; retry in " + l + " ms"), this.scheduleFlush(l)
                                } else if (z.isObject(c) && c.xhr_req && 413 === c.xhr_req.status)
                                    if (n.length > 1) {
                                        var m = Math.max(1, Math.floor(o / 2));
                                        this.batchSize = Math.min(this.batchSize, m, n.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                                    } else this.reportError("Single-event request too large; dropping", n), this.resetBatchSize(), h = !0;
                                else h = !0;
                                h && this.queue.removeItemsByID(z.map(n, (function(e) {
                                    return e.id
                                })), z.bind((function(e) {
                                    e ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                                }), this))
                            } catch (e) {
                                this.reportError("Error handling API response", e), this.resetFlush()
                            }
                        }), this),
                        l = {
                            method: "POST",
                            verbose: !0,
                            ignore_json_errors: !0,
                            timeout_ms: t
                        };
                    e.unloading && (l.transport = "sendBeacon"), _e.log("MIXPANEL REQUEST:", c), this.sendRequest(c, l, h)
                } catch (e) {
                    this.reportError("Error flushing request queue", e), this.resetFlush()
                }
            }, he.prototype.reportError = function(e, t) {
                if (_e.error.apply(_e.error, arguments), this.errorReporter) try {
                    t instanceof Error || (t = new Error(e)), this.errorReporter(e, t)
                } catch (t) {
                    _e.error(t)
                }
            };

            function le(e, t) {
                qe(!0, e, t)
            }

            function fe(e, t) {
                qe(!1, e, t)
            }

            function de(e, t) {
                return "1" === we(e, t)
            }

            function ge(e, t) {
                if (function(e) {
                        if (e && e.ignoreDnt) return !1;
                        var t = e && e.window || o,
                            nav = t.navigator || {},
                            r = !1;
                        return z.each([nav.doNotTrack, nav.msDoNotTrack, t.doNotTrack], (function(e) {
                            z.includes([!0, 1, "1", "yes"], e) && (r = !0)
                        })), r
                    }(t)) return L.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
                var r = "0" === we(e, t);
                return r && L.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
            }

            function me(e) {
                return Se(e, (function(e) {
                    return this.get_config(e)
                }))
            }

            function ye(e) {
                return Se(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function ve(e) {
                return Se(e, (function(e) {
                    return this._get_config(e)
                }))
            }

            function be(e, t) {
                ke(t = t || {}).remove(xe(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
            }

            function ke(e) {
                return "localStorage" === (e = e || {}).persistenceType ? z.localStorage : z.cookie
            }

            function xe(e, t) {
                return ((t = t || {}).persistencePrefix || "__mp_opt_in_out_") + e
            }

            function we(e, t) {
                return ke(t).get(xe(e, t))
            }

            function qe(e, t, r) {
                z.isString(t) && t.length ? (ke(r = r || {}).set(xe(t, r), e ? 1 : 0, z.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
                    send_immediately: !0
                })) : L.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
            }

            function Se(e, t) {
                return function() {
                    var r = !1;
                    try {
                        var o = t.call(this, "token"),
                            n = t.call(this, "ignore_dnt"),
                            c = t.call(this, "opt_out_tracking_persistence_type"),
                            _ = t.call(this, "opt_out_tracking_cookie_prefix"),
                            h = t.call(this, "window");
                        o && (r = ge(o, {
                            ignoreDnt: n,
                            persistenceType: c,
                            persistencePrefix: _,
                            window: h
                        }))
                    } catch (e) {
                        L.error("Unexpected error when checking tracking opt-out status: " + e)
                    }
                    if (!r) return e.apply(this, arguments);
                    var l = arguments[arguments.length - 1];
                    "function" == typeof l && l(0)
                }
            }
            var Ee = "$set",
                Oe = "$set_once",
                Ie = "$unset",
                De = "$add",
                Ae = "$append",
                Te = "$union",
                $e = "$remove",
                Be = {
                    set_action: function(e, t) {
                        var data = {},
                            r = {};
                        return z.isObject(e) ? z.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (r[t] = e)
                        }), this) : r[e] = t, data.$set = r, data
                    },
                    unset_action: function(e) {
                        var data = {},
                            t = [];
                        return z.isArray(e) || (e = [e]), z.each(e, (function(e) {
                            this._is_reserved_property(e) || t.push(e)
                        }), this), data.$unset = t, data
                    },
                    set_once_action: function(e, t) {
                        var data = {},
                            r = {};
                        return z.isObject(e) ? z.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (r[t] = e)
                        }), this) : r[e] = t, data.$set_once = r, data
                    },
                    union_action: function(e, t) {
                        var data = {},
                            r = {};
                        return z.isObject(e) ? z.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (r[t] = z.isArray(e) ? e : [e])
                        }), this) : r[e] = z.isArray(t) ? t : [t], data.$union = r, data
                    },
                    append_action: function(e, t) {
                        var data = {},
                            r = {};
                        return z.isObject(e) ? z.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (r[t] = e)
                        }), this) : r[e] = t, data.$append = r, data
                    },
                    remove_action: function(e, t) {
                        var data = {},
                            r = {};
                        return z.isObject(e) ? z.each(e, (function(e, t) {
                            this._is_reserved_property(t) || (r[t] = e)
                        }), this) : r[e] = t, data.$remove = r, data
                    },
                    delete_action: function() {
                        var data = {
                            $delete: ""
                        };
                        return data
                    }
                },
                Ue = function() {};
            z.extend(Ue.prototype, Be), Ue.prototype._init = function(e, t, r) {
                this._mixpanel = e, this._group_key = t, this._group_id = r
            }, Ue.prototype.set = ve((function(e, t, r) {
                var data = this.set_action(e, t);
                return z.isObject(e) && (r = t), this._send_request(data, r)
            })), Ue.prototype.set_once = ve((function(e, t, r) {
                var data = this.set_once_action(e, t);
                return z.isObject(e) && (r = t), this._send_request(data, r)
            })), Ue.prototype.unset = ve((function(e, t) {
                var data = this.unset_action(e);
                return this._send_request(data, t)
            })), Ue.prototype.union = ve((function(e, t, r) {
                z.isObject(e) && (r = t);
                var data = this.union_action(e, t);
                return this._send_request(data, r)
            })), Ue.prototype.delete = ve((function(e) {
                var data = this.delete_action();
                return this._send_request(data, e)
            })), Ue.prototype.remove = ve((function(e, t, r) {
                var data = this.remove_action(e, t);
                return this._send_request(data, r)
            })), Ue.prototype._send_request = function(data, e) {
                data.$group_key = this._group_key, data.$group_id = this._group_id, data.$token = this._get_config("token");
                var t = z.encodeDates(data);
                return this._mixpanel._track_or_batch({
                    type: "groups",
                    data: t,
                    endpoint: this._get_config("api_host") + "/groups/",
                    batcher: this._mixpanel.request_batchers.groups
                }, e)
            }, Ue.prototype._is_reserved_property = function(e) {
                return "$group_key" === e || "$group_id" === e
            }, Ue.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, Ue.prototype.toString = function() {
                return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
            }, Ue.prototype.remove = Ue.prototype.remove, Ue.prototype.set = Ue.prototype.set, Ue.prototype.set_once = Ue.prototype.set_once, Ue.prototype.union = Ue.prototype.union, Ue.prototype.unset = Ue.prototype.unset, Ue.prototype.toString = Ue.prototype.toString;
            var Ce = function() {};
            z.extend(Ce.prototype, Be), Ce.prototype._init = function(e) {
                this._mixpanel = e
            }, Ce.prototype.set = ye((function(e, t, r) {
                var data = this.set_action(e, t);
                return z.isObject(e) && (r = t), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), data.$set = z.extend({}, z.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), data.$set), this._send_request(data, r)
            })), Ce.prototype.set_once = ye((function(e, t, r) {
                var data = this.set_once_action(e, t);
                return z.isObject(e) && (r = t), this._send_request(data, r)
            })), Ce.prototype.unset = ye((function(e, t) {
                var data = this.unset_action(e);
                return this._send_request(data, t)
            })), Ce.prototype.increment = ye((function(e, t, r) {
                var data = {},
                    o = {};
                return z.isObject(e) ? (z.each(e, (function(e, t) {
                    if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e))) return void L.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                        o[t] = e
                    }
                }), this), r = t) : (z.isUndefined(t) && (t = 1), o[e] = t), data.$add = o, this._send_request(data, r)
            })), Ce.prototype.append = ye((function(e, t, r) {
                z.isObject(e) && (r = t);
                var data = this.append_action(e, t);
                return this._send_request(data, r)
            })), Ce.prototype.remove = ye((function(e, t, r) {
                z.isObject(e) && (r = t);
                var data = this.remove_action(e, t);
                return this._send_request(data, r)
            })), Ce.prototype.union = ye((function(e, t, r) {
                z.isObject(e) && (r = t);
                var data = this.union_action(e, t);
                return this._send_request(data, r)
            })), Ce.prototype.track_charge = ye((function(e, t, r) {
                if (z.isNumber(e) || (e = parseFloat(e), !isNaN(e))) return this.append("$transactions", z.extend({
                    $amount: e
                }, t), r);
                L.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
            })), Ce.prototype.clear_charges = function(e) {
                return this.set("$transactions", [], e)
            }, Ce.prototype.delete_user = function() {
                if (this._identify_called()) {
                    var data = {
                        $delete: this._mixpanel.get_distinct_id()
                    };
                    return this._send_request(data)
                }
                L.error("mixpanel.people.delete_user() requires you to call identify() first")
            }, Ce.prototype.toString = function() {
                return this._mixpanel.toString() + ".people"
            }, Ce.prototype._send_request = function(data, e) {
                data.$token = this._get_config("token"), data.$distinct_id = this._mixpanel.get_distinct_id();
                var t = this._mixpanel.get_property("$device_id"),
                    r = this._mixpanel.get_property("$user_id"),
                    o = this._mixpanel.get_property("$had_persisted_distinct_id");
                t && (data.$device_id = t), r && (data.$user_id = r), o && (data.$had_persisted_distinct_id = o);
                var n = z.encodeDates(data);
                return this._identify_called() ? this._mixpanel._track_or_batch({
                    type: "people",
                    data: n,
                    endpoint: this._get_config("api_host") + "/engage/",
                    batcher: this._mixpanel.request_batchers.people
                }, e) : (this._enqueue(data), z.isUndefined(e) || (this._get_config("verbose") ? e({
                    status: -1,
                    error: null
                }) : e(-1)), z.truncate(n, 255))
            }, Ce.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }, Ce.prototype._identify_called = function() {
                return !0 === this._mixpanel._flags.identify_called
            }, Ce.prototype._enqueue = function(data) {
                Ee in data ? this._mixpanel.persistence._add_to_people_queue(Ee, data) : Oe in data ? this._mixpanel.persistence._add_to_people_queue(Oe, data) : Ie in data ? this._mixpanel.persistence._add_to_people_queue(Ie, data) : De in data ? this._mixpanel.persistence._add_to_people_queue(De, data) : Ae in data ? this._mixpanel.persistence._add_to_people_queue(Ae, data) : $e in data ? this._mixpanel.persistence._add_to_people_queue($e, data) : Te in data ? this._mixpanel.persistence._add_to_people_queue(Te, data) : L.error("Invalid call to _enqueue():", data)
            }, Ce.prototype._flush_one_queue = function(e, t, r, o) {
                var n = this,
                    c = z.extend({}, this._mixpanel.persistence._get_queue(e)),
                    _ = c;
                z.isUndefined(c) || !z.isObject(c) || z.isEmptyObject(c) || (n._mixpanel.persistence._pop_from_people_queue(e, c), o && (_ = o(c)), t.call(n, _, (function(t, data) {
                    0 === t && n._mixpanel.persistence._add_to_people_queue(e, c), z.isUndefined(r) || r(t, data)
                })))
            }, Ce.prototype._flush = function(e, t, r, o, n, c, _) {
                var h = this,
                    l = this._mixpanel.persistence._get_queue(Ae),
                    f = this._mixpanel.persistence._get_queue($e);
                if (this._flush_one_queue(Ee, this.set, e), this._flush_one_queue(Oe, this.set_once, o), this._flush_one_queue(Ie, this.unset, c, (function(e) {
                        return z.keys(e)
                    })), this._flush_one_queue(De, this.increment, t), this._flush_one_queue(Te, this.union, n), !z.isUndefined(l) && z.isArray(l) && l.length) {
                    for (var d, m = function(e, data) {
                            0 === e && h._mixpanel.persistence._add_to_people_queue(Ae, d), z.isUndefined(r) || r(e, data)
                        }, i = l.length - 1; i >= 0; i--) d = l.pop(), z.isEmptyObject(d) || h.append(d, m);
                    h._mixpanel.persistence.save()
                }
                if (!z.isUndefined(f) && z.isArray(f) && f.length) {
                    for (var y, v = function(e, data) {
                            0 === e && h._mixpanel.persistence._add_to_people_queue($e, y), z.isUndefined(_) || _(e, data)
                        }, k = f.length - 1; k >= 0; k--) y = f.pop(), z.isEmptyObject(y) || h.remove(y, v);
                    h._mixpanel.persistence.save()
                }
            }, Ce.prototype._is_reserved_property = function(e) {
                return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
            }, Ce.prototype.set = Ce.prototype.set, Ce.prototype.set_once = Ce.prototype.set_once, Ce.prototype.unset = Ce.prototype.unset, Ce.prototype.increment = Ce.prototype.increment, Ce.prototype.append = Ce.prototype.append, Ce.prototype.remove = Ce.prototype.remove, Ce.prototype.union = Ce.prototype.union, Ce.prototype.track_charge = Ce.prototype.track_charge, Ce.prototype.clear_charges = Ce.prototype.clear_charges, Ce.prototype.delete_user = Ce.prototype.delete_user, Ce.prototype.toString = Ce.prototype.toString;
            var je, Ne, Me = "__mps",
                Pe = "__mpso",
                Fe = "__mpus",
                Re = "__mpa",
                ze = "__mpap",
                Le = "__mpr",
                Je = "__mpu",
                Qe = "$people_distinct_id",
                He = "__alias",
                Ke = "__timers",
                Ge = [Me, Pe, Fe, Re, ze, Le, Je, Qe, He, Ke],
                Ve = function(e) {
                    this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                    var t = e.persistence;
                    "cookie" !== t && "localStorage" !== t && (L.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), "localStorage" === t && z.localStorage.is_supported() ? this.storage = z.localStorage : this.storage = z.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save()
                };
            Ve.prototype.properties = function() {
                var p = {};
                return z.each(this.props, (function(e, t) {
                    z.include(Ge, t) || (p[t] = e)
                })), p
            }, Ve.prototype.load = function() {
                if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = z.extend({}, e))
                }
            }, Ve.prototype.upgrade = function(e) {
                var t, r, o = e.upgrade;
                o && (t = "mp_super_properties", "string" == typeof o && (t = o), r = this.storage.parse(t), this.storage.remove(t), this.storage.remove(t, !0), r && (this.props = z.extend(this.props, r.all, r.events))), e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name, (r = this.storage.parse(t)) && (this.storage.remove(t), this.storage.remove(t, !0), this.register_once(r))), this.storage === z.localStorage && (r = z.cookie.parse(this.name), z.cookie.remove(this.name), z.cookie.remove(this.name, !0), r && this.register_once(r))
            }, Ve.prototype.save = function() {
                this.disabled || this.storage.set(this.name, z.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
            }, Ve.prototype.remove = function() {
                this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
            }, Ve.prototype.clear = function() {
                this.remove(), this.props = {}
            }, Ve.prototype.register_once = function(e, t, r) {
                return !!z.isObject(e) && (void 0 === t && (t = "None"), this.expire_days = void 0 === r ? this.default_expiry : r, z.each(e, (function(e, r) {
                    this.props.hasOwnProperty(r) && this.props[r] !== t || (this.props[r] = e)
                }), this), this.save(), !0)
            }, Ve.prototype.register = function(e, t) {
                return !!z.isObject(e) && (this.expire_days = void 0 === t ? this.default_expiry : t, z.extend(this.props, e), this.save(), !0)
            }, Ve.prototype.unregister = function(e) {
                e in this.props && (delete this.props[e], this.save())
            }, Ve.prototype.update_campaign_params = function() {
                this.campaign_params_saved || (this.register_once(z.info.campaignParams()), this.campaign_params_saved = !0)
            }, Ve.prototype.update_search_keyword = function(e) {
                this.register(z.info.searchInfo(e))
            }, Ve.prototype.update_referrer_info = function(e) {
                this.register_once({
                    $initial_referrer: e || "$direct",
                    $initial_referring_domain: z.info.referringDomain(e) || "$direct"
                }, "")
            }, Ve.prototype.get_referrer_info = function() {
                return z.strip_empty_properties({
                    $initial_referrer: this.props.$initial_referrer,
                    $initial_referring_domain: this.props.$initial_referring_domain
                })
            }, Ve.prototype.safe_merge = function(e) {
                return z.each(this.props, (function(t, r) {
                    r in e || (e[r] = t)
                })), e
            }, Ve.prototype.update_config = function(e) {
                this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
            }, Ve.prototype.set_disabled = function(e) {
                this.disabled = e, this.disabled ? this.remove() : this.save()
            }, Ve.prototype.set_cookie_domain = function(e) {
                e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save())
            }, Ve.prototype.set_cross_site = function(e) {
                e !== this.cross_site && (this.cross_site = e, this.remove(), this.save())
            }, Ve.prototype.set_cross_subdomain = function(e) {
                e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
            }, Ve.prototype.get_cross_subdomain = function() {
                return this.cross_subdomain
            }, Ve.prototype.set_secure = function(e) {
                e !== this.secure && (this.secure = !!e, this.remove(), this.save())
            }, Ve.prototype._add_to_people_queue = function(e, data) {
                var t = this._get_queue_key(e),
                    r = data[e],
                    o = this._get_or_create_queue(Ee),
                    n = this._get_or_create_queue(Oe),
                    c = this._get_or_create_queue(Ie),
                    _ = this._get_or_create_queue(De),
                    h = this._get_or_create_queue(Te),
                    l = this._get_or_create_queue($e, []),
                    f = this._get_or_create_queue(Ae, []);
                t === Me ? (z.extend(o, r), this._pop_from_people_queue(De, r), this._pop_from_people_queue(Te, r), this._pop_from_people_queue(Ie, r)) : t === Pe ? (z.each(r, (function(e, t) {
                    t in n || (n[t] = e)
                })), this._pop_from_people_queue(Ie, r)) : t === Fe ? z.each(r, (function(e) {
                    z.each([o, n, _, h], (function(t) {
                        e in t && delete t[e]
                    })), z.each(f, (function(t) {
                        e in t && delete t[e]
                    })), c[e] = !0
                })) : t === Re ? (z.each(r, (function(e, t) {
                    t in o ? o[t] += e : (t in _ || (_[t] = 0), _[t] += e)
                }), this), this._pop_from_people_queue(Ie, r)) : t === Je ? (z.each(r, (function(e, t) {
                    z.isArray(e) && (t in h || (h[t] = []), h[t] = h[t].concat(e))
                })), this._pop_from_people_queue(Ie, r)) : t === Le ? (l.push(r), this._pop_from_people_queue(Ae, r)) : t === ze && (f.push(r), this._pop_from_people_queue(Ie, r)), L.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), L.log(data), this.save()
            }, Ve.prototype._pop_from_people_queue = function(e, data) {
                var q = this._get_queue(e);
                z.isUndefined(q) || (z.each(data, (function(t, r) {
                    e === Ae || e === $e ? z.each(q, (function(e) {
                        e[r] === t && delete e[r]
                    })) : delete q[r]
                }), this), this.save())
            }, Ve.prototype._get_queue_key = function(e) {
                return e === Ee ? Me : e === Oe ? Pe : e === Ie ? Fe : e === De ? Re : e === Ae ? ze : e === $e ? Le : e === Te ? Je : void L.error("Invalid queue:", e)
            }, Ve.prototype._get_queue = function(e) {
                return this.props[this._get_queue_key(e)]
            }, Ve.prototype._get_or_create_queue = function(e, t) {
                var r = this._get_queue_key(e);
                return t = z.isUndefined(t) ? {} : t, this.props[r] || (this.props[r] = t)
            }, Ve.prototype.set_event_timer = function(e, t) {
                var r = this.props.__timers || {};
                r[e] = t, this.props.__timers = r, this.save()
            }, Ve.prototype.remove_event_timer = function(e) {
                var t = (this.props.__timers || {})[e];
                return z.isUndefined(t) || (delete this.props.__timers[e], this.save()), t
            };
            var We = function(e) {
                    return e
                },
                Xe = function() {},
                Ye = "mixpanel",
                Ze = "base64",
                et = o.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                tt = !et && -1 === C.indexOf("MSIE") && -1 === C.indexOf("Mozilla"),
                it = null;
            T.sendBeacon && (it = function() {
                return T.sendBeacon.apply(T, arguments)
            });
            var ot = {
                    api_host: "https://api-js.mixpanel.com",
                    api_method: "POST",
                    api_transport: "XHR",
                    api_payload_format: Ze,
                    app_host: "https://mixpanel.com",
                    cdn: "https://cdn.mxpnl.com",
                    cross_site_cookie: !1,
                    cross_subdomain_cookie: !0,
                    error_reporter: Xe,
                    persistence: "cookie",
                    persistence_name: "",
                    cookie_domain: "",
                    cookie_name: "",
                    loaded: Xe,
                    store_google: !0,
                    save_referrer: !0,
                    test: !1,
                    verbose: !1,
                    img: !1,
                    debug: !1,
                    track_links_timeout: 300,
                    cookie_expiration: 365,
                    upgrade: !1,
                    disable_persistence: !1,
                    disable_cookie: !1,
                    secure_cookie: !1,
                    ip: !0,
                    opt_out_tracking_by_default: !1,
                    opt_out_persistence_by_default: !1,
                    opt_out_tracking_persistence_type: "localStorage",
                    opt_out_tracking_cookie_prefix: null,
                    property_blacklist: [],
                    xhr_headers: {},
                    ignore_dnt: !1,
                    batch_requests: !0,
                    batch_size: 50,
                    batch_flush_interval_ms: 5e3,
                    batch_request_timeout_ms: 9e4,
                    batch_autostart: !0,
                    hooks: {}
                },
                nt = !1,
                st = function() {},
                at = function(e, t, r) {
                    var o, c = r === Ye ? Ne : Ne[r];
                    if (c && 0 === je) o = c;
                    else {
                        if (c && !z.isArray(c)) return void L.error("You have already initialized " + r);
                        o = new st
                    }
                    return o._cached_groups = {}, o._init(e, t, r), o.people = new Ce, o.people._init(o), n.DEBUG = n.DEBUG || o.get_config("debug"), !z.isUndefined(c) && z.isArray(c) && (o._execute_array.call(o.people, c.people), o._execute_array(c)), o
                };
            st.prototype.init = function(e, t, r) {
                if (z.isUndefined(r)) this.report_error("You must name your new library: init(token, config, name)");
                else {
                    if (r !== Ye) {
                        var o = at(e, t, r);
                        return Ne[r] = o, o._loaded(), o
                    }
                    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
                }
            }, st.prototype._init = function(e, t, r) {
                t = t || {}, this.__loaded = !0, this.config = {};
                var n = {};
                "api_payload_format" in t || (t.api_host || ot.api_host).match(/\.mixpanel\.com$/) && (n.api_payload_format = "json");
                if (this.set_config(z.extend({}, ot, n, t, {
                        name: r,
                        token: e,
                        callback_fn: (r === Ye ? r : "mixpanel." + r) + "._jsc"
                    })), this._jsc = Xe, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                        disable_all_events: !1,
                        identify_called: !1
                    }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests)
                    if (z.localStorage.is_supported(!0) && et) {
                        if (this.init_batchers(), it && o.addEventListener) {
                            var c = z.bind((function() {
                                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                    unloading: !0
                                })
                            }), this);
                            o.addEventListener("pagehide", (function(e) {
                                e.persisted && c()
                            })), o.addEventListener("visibilitychange", (function() {
                                "hidden" === $.visibilityState && c()
                            }))
                        }
                    } else this._batch_requests = !1, L.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
                this.persistence = this.cookie = new Ve(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
                var _ = z.UUID();
                this.get_distinct_id() || this.register_once({
                    distinct_id: _,
                    $device_id: _
                }, "")
            }, st.prototype._loaded = function() {
                this.get_config("loaded")(this), this._set_default_superprops()
            }, st.prototype._set_default_superprops = function() {
                this.persistence.update_search_keyword($.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info($.referrer)
            }, st.prototype._dom_loaded = function() {
                z.each(this.__dom_loaded_queue, (function(e) {
                    this._track_dom.apply(this, e)
                }), this), this.has_opted_out_tracking() || z.each(this.__request_queue, (function(e) {
                    this._send_request.apply(this, e)
                }), this), delete this.__dom_loaded_queue, delete this.__request_queue
            }, st.prototype._track_dom = function(e, t) {
                if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
                if (!nt) return this.__dom_loaded_queue.push([e, t]), !1;
                var dt = (new e).init(this);
                return dt.track.apply(dt, t)
            }, st.prototype._prepare_callback = function(e, data) {
                if (z.isUndefined(e)) return null;
                if (et) {
                    return function(t) {
                        e(t, data)
                    }
                }
                var t = this._jsc,
                    r = "" + Math.floor(1e8 * Math.random()),
                    o = this.get_config("callback_fn") + "[" + r + "]";
                return t[r] = function(o) {
                    delete t[r], e(o, data)
                }, o
            }, st.prototype._send_request = function(e, data, t, r) {
                var o = !0;
                if (tt) return this.__request_queue.push(arguments), o;
                var n = {
                        method: this.get_config("api_method"),
                        transport: this.get_config("api_transport"),
                        verbose: this.get_config("verbose")
                    },
                    c = null;
                r || !z.isFunction(t) && "string" != typeof t || (r = t, t = null), t = z.extend(n, t || {}), et || (t.method = "GET");
                var _ = "POST" === t.method,
                    h = it && _ && "sendbeacon" === t.transport.toLowerCase(),
                    l = t.verbose;
                data.verbose && (l = !0), this.get_config("test") && (data.test = 1), l && (data.verbose = 1), this.get_config("img") && (data.img = 1), et || (r ? data.callback = r : (l || this.get_config("test")) && (data.callback = "(function(){})")), data.ip = this.get_config("ip") ? 1 : 0, data._ = (new Date).getTime().toString(), _ && (c = "data=" + encodeURIComponent(data.data), delete data.data), e += "?" + z.HTTPBuildQuery(data);
                var f = this;
                if ("img" in data) {
                    var img = $.createElement("img");
                    img.src = e, $.body.appendChild(img)
                } else if (h) {
                    try {
                        o = it(e, c)
                    } catch (e) {
                        f.report_error(e), o = !1
                    }
                    try {
                        r && r(o ? 1 : 0)
                    } catch (e) {
                        f.report_error(e)
                    }
                } else if (et) try {
                    var d = new XMLHttpRequest;
                    d.open(t.method, e, !0);
                    var m = this.get_config("xhr_headers");
                    if (_ && (m["Content-Type"] = "application/x-www-form-urlencoded"), z.each(m, (function(e, t) {
                            d.setRequestHeader(t, e)
                        })), t.timeout_ms && void 0 !== d.timeout) {
                        d.timeout = t.timeout_ms;
                        var y = (new Date).getTime()
                    }
                    d.withCredentials = !0, d.onreadystatechange = function() {
                        var e;
                        if (4 === d.readyState)
                            if (200 === d.status) {
                                if (r)
                                    if (l) {
                                        var o;
                                        try {
                                            o = z.JSONDecode(d.responseText)
                                        } catch (e) {
                                            if (f.report_error(e), !t.ignore_json_errors) return;
                                            o = d.responseText
                                        }
                                        r(o)
                                    } else r(Number(d.responseText))
                            } else e = d.timeout && !d.status && (new Date).getTime() - y >= d.timeout ? "timeout" : "Bad HTTP status: " + d.status + " " + d.statusText, f.report_error(e), r && r(l ? {
                                status: 0,
                                error: e,
                                xhr_req: d
                            } : 0)
                    }, d.send(c)
                } catch (e) {
                    f.report_error(e), o = !1
                } else {
                    var script = $.createElement("script");
                    script.type = "text/javascript", script.async = !0, script.defer = !0, script.src = e;
                    var s = $.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(script, s)
                }
                return o
            }, st.prototype._execute_array = function(e) {
                var t, r = [],
                    o = [],
                    n = [];
                z.each(e, (function(e) {
                    e && (t = e[0], z.isArray(t) ? n.push(e) : "function" == typeof e ? e.call(this) : z.isArray(e) && "alias" === t ? r.push(e) : z.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? n.push(e) : o.push(e))
                }), this);
                var c = function(e, t) {
                    z.each(e, (function(e) {
                        if (z.isArray(e[0])) {
                            var r = t;
                            z.each(e, (function(e) {
                                r = r[e[0]].apply(r, e.slice(1))
                            }))
                        } else this[e[0]].apply(this, e.slice(1))
                    }), t)
                };
                c(r, this), c(o, this), c(n, this)
            }, st.prototype.are_batchers_initialized = function() {
                return !!this.request_batchers.events
            }, st.prototype.init_batchers = function() {
                var e = this.get_config("token");
                if (!this.are_batchers_initialized()) {
                    var t = z.bind((function(t) {
                        return new he("__mpq_" + e + t.queue_suffix, {
                            libConfig: this.config,
                            sendRequestFunc: z.bind((function(data, e, r) {
                                this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(data), e, this._prepare_callback(r, data))
                            }), this),
                            beforeSendHook: z.bind((function(e) {
                                return this._run_hook("before_send_" + t.type, e)
                            }), this),
                            errorReporter: this.get_config("error_reporter"),
                            stopAllBatchingFunc: z.bind(this.stop_batch_senders, this)
                        })
                    }), this);
                    this.request_batchers = {
                        events: t({
                            type: "events",
                            endpoint: "/track/",
                            queue_suffix: "_ev"
                        }),
                        people: t({
                            type: "people",
                            endpoint: "/engage/",
                            queue_suffix: "_pp"
                        }),
                        groups: t({
                            type: "groups",
                            endpoint: "/groups/",
                            queue_suffix: "_gr"
                        })
                    }
                }
                this.get_config("batch_autostart") && this.start_batch_senders()
            }, st.prototype.start_batch_senders = function() {
                this.are_batchers_initialized() && (this._batch_requests = !0, z.each(this.request_batchers, (function(e) {
                    e.start()
                })))
            }, st.prototype.stop_batch_senders = function() {
                this._batch_requests = !1, z.each(this.request_batchers, (function(e) {
                    e.stop(), e.clear()
                }))
            }, st.prototype.push = function(e) {
                this._execute_array([e])
            }, st.prototype.disable = function(e) {
                void 0 === e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
            }, st.prototype._encode_data_for_request = function(data) {
                var e = z.JSONEncode(data);
                return this.get_config("api_payload_format") === Ze && (e = z.base64Encode(e)), {
                    data: e
                }
            }, st.prototype._track_or_batch = function(e, t) {
                var r = z.truncate(e.data, 255),
                    o = e.endpoint,
                    n = e.batcher,
                    c = e.should_send_immediately,
                    _ = e.send_request_options || {};
                t = t || Xe;
                var h = !0,
                    l = z.bind((function() {
                        return _.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)), r ? (L.log("MIXPANEL REQUEST:"), L.log(r), this._send_request(o, this._encode_data_for_request(r), _, this._prepare_callback(t, r))) : null
                    }), this);
                return this._batch_requests && !c ? n.enqueue(r, (function(e) {
                    e ? t(1, r) : l()
                })) : h = l(), h && r
            }, st.prototype.track = me((function(e, t, r, o) {
                o || "function" != typeof r || (o = r, r = null);
                var n = (r = r || {}).transport;
                n && (r.transport = n);
                var c = r.send_immediately;
                if ("function" != typeof o && (o = Xe), z.isUndefined(e)) this.report_error("No event name provided to mixpanel.track");
                else {
                    if (!this._event_is_disabled(e)) {
                        (t = t || {}).token = this.get_config("token");
                        var _ = this.persistence.remove_event_timer(e);
                        if (!z.isUndefined(_)) {
                            var h = (new Date).getTime() - _;
                            t.$duration = parseFloat((h / 1e3).toFixed(3))
                        }
                        this._set_default_superprops(), t = z.extend({}, z.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
                        var l = this.get_config("property_blacklist");
                        z.isArray(l) ? z.each(l, (function(e) {
                            delete t[e]
                        })) : this.report_error("Invalid value for property_blacklist config: " + l);
                        var data = {
                            event: e,
                            properties: t
                        };
                        return this._track_or_batch({
                            type: "events",
                            data: data,
                            endpoint: this.get_config("api_host") + "/track/",
                            batcher: this.request_batchers.events,
                            should_send_immediately: c,
                            send_request_options: r
                        }, o)
                    }
                    o(0)
                }
            })), st.prototype.set_group = me((function(e, t, r) {
                z.isArray(t) || (t = [t]);
                var o = {};
                return o[e] = t, this.register(o), this.people.set(e, t, r)
            })), st.prototype.add_group = me((function(e, t, r) {
                var o = this.get_property(e);
                if (void 0 === o) {
                    var n = {};
                    n[e] = [t], this.register(n)
                } else -1 === o.indexOf(t) && (o.push(t), this.register(n));
                return this.people.union(e, t, r)
            })), st.prototype.remove_group = me((function(e, t, r) {
                var o = this.get_property(e);
                if (void 0 !== o) {
                    var n = o.indexOf(t);
                    n > -1 && (o.splice(n, 1), this.register({
                        group_key: o
                    })), 0 === o.length && this.unregister(e)
                }
                return this.people.remove(e, t, r)
            })), st.prototype.track_with_groups = me((function(e, t, r, o) {
                var n = z.extend({}, t || {});
                return z.each(r, (function(e, t) {
                    null != e && (n[t] = e)
                })), this.track(e, n, o)
            })), st.prototype._create_map_key = function(e, t) {
                return e + "_" + JSON.stringify(t)
            }, st.prototype._remove_group_from_cache = function(e, t) {
                delete this._cached_groups[this._create_map_key(e, t)]
            }, st.prototype.get_group = function(e, t) {
                var r = this._create_map_key(e, t),
                    o = this._cached_groups[r];
                return void 0 !== o && o._group_key === e && o._group_id === t || ((o = new Ue)._init(this, e, t), this._cached_groups[r] = o), o
            }, st.prototype.track_pageview = function(e) {
                z.isUndefined(e) && (e = $.location.href), this.track("mp_page_view", z.info.pageviewInfo(e))
            }, st.prototype.track_links = function() {
                return this._track_dom.call(this, ie, arguments)
            }, st.prototype.track_forms = function() {
                return this._track_dom.call(this, oe, arguments)
            }, st.prototype.time_event = function(e) {
                z.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
            };
            var ct = {
                    persistent: !0
                },
                pt = function(e) {
                    var t;
                    return t = z.isObject(e) ? e : z.isUndefined(e) ? {} : {
                        days: e
                    }, z.extend({}, ct, t)
                };
            st.prototype.register = function(e, t) {
                var r = pt(t);
                r.persistent ? this.persistence.register(e, r.days) : z.extend(this.unpersisted_superprops, e)
            }, st.prototype.register_once = function(e, t, r) {
                var o = pt(r);
                o.persistent ? this.persistence.register_once(e, t, o.days) : (void 0 === t && (t = "None"), z.each(e, (function(e, r) {
                    this.unpersisted_superprops.hasOwnProperty(r) && this.unpersisted_superprops[r] !== t || (this.unpersisted_superprops[r] = e)
                }), this))
            }, st.prototype.unregister = function(e, t) {
                (t = pt(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
            }, st.prototype._register_single = function(e, t) {
                var r = {};
                r[e] = t, this.register(r)
            }, st.prototype.identify = function(e, t, r, o, n, c, _, h) {
                var l = this.get_distinct_id();
                if (this.register({
                        $user_id: e
                    }), !this.get_property("$device_id")) {
                    var f = l;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: f
                    }, "")
                }
                e !== l && e !== this.get_property(He) && (this.unregister(He), this.register({
                    distinct_id: e
                })), this._flags.identify_called = !0, this.people._flush(t, r, o, n, c, _, h), e !== l && this.track("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: l
                }, {
                    skip_hooks: !0
                })
            }, st.prototype.reset = function() {
                this.persistence.clear(), this._flags.identify_called = !1;
                var e = z.UUID();
                this.register_once({
                    distinct_id: e,
                    $device_id: e
                }, "")
            }, st.prototype.get_distinct_id = function() {
                return this.get_property("distinct_id")
            }, st.prototype.alias = function(e, t) {
                if (e === this.get_property(Qe)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
                var r = this;
                return z.isUndefined(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(He, e), this.track("$create_alias", {
                    alias: e,
                    distinct_id: t
                }, {
                    skip_hooks: !0
                }, (function() {
                    r.identify(e)
                }))) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)
            }, st.prototype.name_tag = function(e) {
                this._register_single("mp_name_tag", e)
            }, st.prototype.set_config = function(e) {
                z.isObject(e) && (z.extend(this.config, e), e.batch_size && z.each(this.request_batchers, (function(e) {
                    e.resetBatchSize()
                })), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), n.DEBUG = n.DEBUG || this.get_config("debug"))
            }, st.prototype.get_config = function(e) {
                return this.config[e]
            }, st.prototype._run_hook = function(e) {
                var t = (this.config.hooks[e] || We).apply(this, O.call(arguments, 1));
                return void 0 === t && (this.report_error(e + " hook did not return a value"), t = null), t
            }, st.prototype.get_property = function(e) {
                return this.persistence.props[e]
            }, st.prototype.toString = function() {
                var e = this.get_config("name");
                return e !== Ye && (e = "mixpanel." + e), e
            }, st.prototype._event_is_disabled = function(e) {
                return z.isBlockedUA(C) || this._flags.disable_all_events || z.include(this.__disabled_events, e)
            }, st.prototype._gdpr_init = function() {
                "localStorage" === this.get_config("opt_out_tracking_persistence_type") && z.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                    persistence_type: "cookie"
                }) && this.opt_in_tracking({
                    enable_persistence: !1
                }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                    persistence_type: "cookie"
                }) && this.opt_out_tracking({
                    clear_persistence: !1
                }), this.clear_opt_in_out_tracking({
                    persistence_type: "cookie",
                    enable_persistence: !1
                })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                    clear_persistence: !0
                }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !z.cookie.get("mp_optout") || (z.cookie.remove("mp_optout"), this.opt_out_tracking({
                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                }))
            }, st.prototype._gdpr_update_persistence = function(e) {
                var t;
                if (e && e.clear_persistence) t = !0;
                else {
                    if (!e || !e.enable_persistence) return;
                    t = !1
                }
                this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t), t && z.each(this.request_batchers, (function(e) {
                    e.clear()
                }))
            }, st.prototype._gdpr_call_func = function(e, t) {
                return t = z.extend({
                    track: z.bind(this.track, this),
                    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                    cookie_expiration: this.get_config("cookie_expiration"),
                    cross_site_cookie: this.get_config("cross_site_cookie"),
                    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                    cookie_domain: this.get_config("cookie_domain"),
                    secure_cookie: this.get_config("secure_cookie"),
                    ignore_dnt: this.get_config("ignore_dnt")
                }, t), z.localStorage.is_supported() || (t.persistence_type = "cookie"), e(this.get_config("token"), {
                    track: t.track,
                    trackEventName: t.track_event_name,
                    trackProperties: t.track_properties,
                    persistenceType: t.persistence_type,
                    persistencePrefix: t.cookie_prefix,
                    cookieDomain: t.cookie_domain,
                    cookieExpiration: t.cookie_expiration,
                    crossSiteCookie: t.cross_site_cookie,
                    crossSubdomainCookie: t.cross_subdomain_cookie,
                    secureCookie: t.secure_cookie,
                    ignoreDnt: t.ignore_dnt
                })
            }, st.prototype.opt_in_tracking = function(e) {
                e = z.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(le, e), this._gdpr_update_persistence(e)
            }, st.prototype.opt_out_tracking = function(e) {
                (e = z.extend({
                    clear_persistence: !0,
                    delete_user: !0
                }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(fe, e), this._gdpr_update_persistence(e)
            }, st.prototype.has_opted_in_tracking = function(e) {
                return this._gdpr_call_func(de, e)
            }, st.prototype.has_opted_out_tracking = function(e) {
                return this._gdpr_call_func(ge, e)
            }, st.prototype.clear_opt_in_out_tracking = function(e) {
                e = z.extend({
                    enable_persistence: !0
                }, e), this._gdpr_call_func(be, e), this._gdpr_update_persistence(e)
            }, st.prototype.report_error = function(e, t) {
                L.error.apply(L.error, arguments);
                try {
                    t || e instanceof Error || (e = new Error(e)), this.get_config("error_reporter")(e, t)
                } catch (t) {
                    L.error(t)
                }
            }, st.prototype.init = st.prototype.init, st.prototype.reset = st.prototype.reset, st.prototype.disable = st.prototype.disable, st.prototype.time_event = st.prototype.time_event, st.prototype.track = st.prototype.track, st.prototype.track_links = st.prototype.track_links, st.prototype.track_forms = st.prototype.track_forms, st.prototype.track_pageview = st.prototype.track_pageview, st.prototype.register = st.prototype.register, st.prototype.register_once = st.prototype.register_once, st.prototype.unregister = st.prototype.unregister, st.prototype.identify = st.prototype.identify, st.prototype.alias = st.prototype.alias, st.prototype.name_tag = st.prototype.name_tag, st.prototype.set_config = st.prototype.set_config, st.prototype.get_config = st.prototype.get_config, st.prototype.get_property = st.prototype.get_property, st.prototype.get_distinct_id = st.prototype.get_distinct_id, st.prototype.toString = st.prototype.toString, st.prototype.opt_out_tracking = st.prototype.opt_out_tracking, st.prototype.opt_in_tracking = st.prototype.opt_in_tracking, st.prototype.has_opted_out_tracking = st.prototype.has_opted_out_tracking, st.prototype.has_opted_in_tracking = st.prototype.has_opted_in_tracking, st.prototype.clear_opt_in_out_tracking = st.prototype.clear_opt_in_out_tracking, st.prototype.get_group = st.prototype.get_group, st.prototype.set_group = st.prototype.set_group, st.prototype.add_group = st.prototype.add_group, st.prototype.remove_group = st.prototype.remove_group, st.prototype.track_with_groups = st.prototype.track_with_groups, st.prototype.start_batch_senders = st.prototype.start_batch_senders, st.prototype.stop_batch_senders = st.prototype.stop_batch_senders, Ve.prototype.properties = Ve.prototype.properties, Ve.prototype.update_search_keyword = Ve.prototype.update_search_keyword, Ve.prototype.update_referrer_info = Ve.prototype.update_referrer_info, Ve.prototype.get_cross_subdomain = Ve.prototype.get_cross_subdomain, Ve.prototype.clear = Ve.prototype.clear;
            var ut = {},
                _t = function() {
                    Ne.init = function(e, t, r) {
                        if (r) return Ne[r] || (Ne[r] = ut[r] = at(e, t, r), Ne[r]._loaded()), Ne[r];
                        var n = Ne;
                        ut.mixpanel ? n = ut.mixpanel : e && ((n = at(e, t, Ye))._loaded(), ut.mixpanel = n), Ne = n, 1 === je && (o.mixpanel = Ne), z.each(ut, (function(e, t) {
                            t !== Ye && (Ne[t] = e)
                        })), Ne._ = z
                    }
                };
            var ht = (je = 0, Ne = new st, _t(), Ne.init(), function() {
                function e() {
                    e.done || (e.done = !0, nt = !0, tt = !1, z.each(ut, (function(e) {
                        e._dom_loaded()
                    })))
                }
                if ($.addEventListener) "complete" === $.readyState ? e() : $.addEventListener("DOMContentLoaded", e, !1);
                else if ($.attachEvent) {
                    $.attachEvent("onreadystatechange", e);
                    var t = !1;
                    try {
                        t = null === o.frameElement
                    } catch (e) {}
                    $.documentElement.doScroll && t && function t() {
                        try {
                            $.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(t, 1)
                        }
                        e()
                    }()
                }
                z.register_event(o, "load", e, !0)
            }(), Ne);
            e.exports = ht
        }
    }
]);