(window.webpackJsonp = window.webpackJsonp || []).push([
    [54], {
        1084: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var p in e) t.hasOwnProperty(p) || (t[p] = e[p])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const o = r(713);

            function f(e, canvas) {
                var t, r, n, f, l;
                const c = o.parseOptions(e || {});
                let h = o.createImageData(c.size),
                    d = Math.sqrt(h.length);
                canvas.width = canvas.height = c.size * c.scale;
                let v = canvas.getContext("2d");
                null === (t = v) || void 0 === t || (t.fillStyle = c.bgcolor), null === (r = v) || void 0 === r || r.fillRect(0, 0, canvas.width, canvas.height), null === (n = v) || void 0 === n || (n.fillStyle = c.color);
                for (let i = 0; i < h.length; i++)
                    if (h[i]) {
                        let e = Math.floor(i / d),
                            t = i % d;
                        null === (f = v) || void 0 === f || (f.fillStyle = 1 === h[i] ? c.color : c.spotcolor), null === (l = v) || void 0 === l || l.fillRect(t * c.scale, e * c.scale, c.scale, c.scale)
                    }
                return canvas
            }

            function l(e) {
                let canvas = document.createElement("canvas");
                return f(e, canvas), canvas
            }
            t.render = f, t.create = l, n(r(713)), n(r(714)), t.default = {
                create: l,
                render: f
            }
        },
        1286: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randArr = new Array(4), t.seedRandomness = function(e) {
                let i;
                for (i = 0; i < t.randArr.length; i++) t.randArr[i] = 0;
                for (i = 0; i < e.length; i++) t.randArr[i % 4] = (t.randArr[i % 4] << 5) - t.randArr[i % 4] + e.charCodeAt(i)
            }, t.random = function() {
                let e = t.randArr[0] ^ t.randArr[0] << 11;
                return t.randArr[0] = t.randArr[1], t.randArr[1] = t.randArr[2], t.randArr[2] = t.randArr[3], t.randArr[3] = t.randArr[3] ^ t.randArr[3] >> 19 ^ e ^ e >> 8, (t.randArr[3] >>> 0) / (1 << 31 >>> 0)
            }
        },
        1397: function(e, t, r) {
            e.exports = r(1398)
        },
        1398: function(e, t, r) {
            ! function() {
                var r = Array.prototype.forEach,
                    n = Object.prototype.hasOwnProperty,
                    o = Array.prototype.slice,
                    f = 0;
                var l, c = {
                    keys: Object.keys || function(e) {
                        if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("keys() called on a non-object");
                        var t, r = [];
                        for (t in e) e.hasOwnProperty(t) && (r[r.length] = t);
                        return r
                    },
                    uniqueId: function(e) {
                        var t = ++f + "";
                        return e ? e + t : t
                    },
                    has: function(e, t) {
                        return n.call(e, t)
                    },
                    each: function(e, t, n) {
                        if (null != e)
                            if (r && e.forEach === r) e.forEach(t, n);
                            else if (e.length === +e.length)
                            for (var i = 0, o = e.length; i < o; i++) t.call(n, e[i], i, e);
                        else
                            for (var f in e) this.has(e, f) && t.call(n, e[f], f, e)
                    },
                    once: function(e) {
                        var t, r = !1;
                        return function() {
                            return r || (r = !0, t = e.apply(this, arguments), e = null), t
                        }
                    }
                };
                l = {
                    on: function(e, t, r) {
                        return d(this, "on", e, [t, r]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                            callback: t,
                            context: r,
                            ctx: r || this
                        }), this) : this
                    },
                    once: function(e, t, r) {
                        if (!d(this, "once", e, [t, r]) || !t) return this;
                        var n = this,
                            o = c.once((function() {
                                n.off(e, o), t.apply(this, arguments)
                            }));
                        return o._callback = t, this.on(e, o, r)
                    },
                    off: function(e, t, r) {
                        var n, o, f, l, i, h, v, y;
                        if (!this._events || !d(this, "off", e, [t, r])) return this;
                        if (!e && !t && !r) return this._events = {}, this;
                        for (i = 0, h = (l = e ? [e] : c.keys(this._events)).length; i < h; i++)
                            if (e = l[i], f = this._events[e]) {
                                if (this._events[e] = n = [], t || r)
                                    for (v = 0, y = f.length; v < y; v++) o = f[v], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && n.push(o);
                                n.length || delete this._events[e]
                            }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = o.call(arguments, 1);
                        if (!d(this, "trigger", e, t)) return this;
                        var r = this._events[e],
                            n = this._events.all;
                        return r && v(r, t), n && v(n, arguments), this
                    },
                    stopListening: function(e, t, r) {
                        var n = this._listeners;
                        if (!n) return this;
                        var o = !t && !r;
                        for (var f in "object" == typeof t && (r = this), e && ((n = {})[e._listenerId] = e), n) n[f].off(t, r, this), o && delete this._listeners[f];
                        return this
                    }
                };
                var h = /\s+/,
                    d = function(e, t, r, n) {
                        if (!r) return !0;
                        if ("object" == typeof r) {
                            for (var o in r) e[t].apply(e, [o, r[o]].concat(n));
                            return !1
                        }
                        if (h.test(r)) {
                            for (var f = r.split(h), i = 0, l = f.length; i < l; i++) e[t].apply(e, [f[i]].concat(n));
                            return !1
                        }
                        return !0
                    },
                    v = function(e, t) {
                        var r, i = -1,
                            n = e.length,
                            o = t[0],
                            f = t[1],
                            l = t[2];
                        switch (t.length) {
                            case 0:
                                for (; ++i < n;)(r = e[i]).callback.call(r.ctx);
                                return;
                            case 1:
                                for (; ++i < n;)(r = e[i]).callback.call(r.ctx, o);
                                return;
                            case 2:
                                for (; ++i < n;)(r = e[i]).callback.call(r.ctx, o, f);
                                return;
                            case 3:
                                for (; ++i < n;)(r = e[i]).callback.call(r.ctx, o, f, l);
                                return;
                            default:
                                for (; ++i < n;)(r = e[i]).callback.apply(r.ctx, t)
                        }
                    };
                c.each({
                    listenTo: "on",
                    listenToOnce: "once"
                }, (function(e, t) {
                    l[t] = function(t, r, n) {
                        return (this._listeners || (this._listeners = {}))[t._listenerId || (t._listenerId = c.uniqueId("l"))] = t, "object" == typeof r && (n = this), t[e](r, n, this), this
                    }
                })), l.bind = l.on, l.unbind = l.off, l.mixin = function(e) {
                    return c.each(["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"], (function(t) {
                        e[t] = this[t]
                    }), this), e
                }, e.exports && (t = e.exports = l), t.BackboneEvents = l
            }()
        },
        1399: function(e, t, r) {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    r = t[0],
                    n = t[1];
                return 3 * (r + n) / 4 - n
            }, t.toByteArray = function(e) {
                var t, i, r = c(e),
                    n = r[0],
                    l = r[1],
                    h = new f(function(e, t, r) {
                        return 3 * (t + r) / 4 - r
                    }(0, n, l)),
                    d = 0,
                    v = l > 0 ? n - 4 : n;
                for (i = 0; i < v; i += 4) t = o[e.charCodeAt(i)] << 18 | o[e.charCodeAt(i + 1)] << 12 | o[e.charCodeAt(i + 2)] << 6 | o[e.charCodeAt(i + 3)], h[d++] = t >> 16 & 255, h[d++] = t >> 8 & 255, h[d++] = 255 & t;
                2 === l && (t = o[e.charCodeAt(i)] << 2 | o[e.charCodeAt(i + 1)] >> 4, h[d++] = 255 & t);
                1 === l && (t = o[e.charCodeAt(i)] << 10 | o[e.charCodeAt(i + 1)] << 4 | o[e.charCodeAt(i + 2)] >> 2, h[d++] = t >> 8 & 255, h[d++] = 255 & t);
                return h
            }, t.fromByteArray = function(e) {
                for (var t, r = e.length, o = r % 3, f = [], l = 16383, i = 0, c = r - o; i < c; i += l) f.push(h(e, i, i + l > c ? c : i + l));
                1 === o ? (t = e[r - 1], f.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], f.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                return f.join("")
            };
            for (var n = [], o = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, l = code.length; i < l; ++i) n[i] = code[i], o[code.charCodeAt(i)] = i;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function h(e, t, r) {
                for (var o, f, output = [], i = t; i < r; i += 3) o = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), output.push(n[(f = o) >> 18 & 63] + n[f >> 12 & 63] + n[f >> 6 & 63] + n[63 & f]);
                return output.join("")
            }
            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        },
        1609: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = f(r(1610)),
                o = f(r(1636));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = (0, n.default)(o.default), e.exports = t.default
        },
        1610: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function(t, r, f) {
                    return e(n.default, t, (0, o.default)(r), f)
                }
            };
            var n = f(r(881)),
                o = f(r(274));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r, f) {
                (0, n.default)(t)(e, (0, o.default)(r), f)
            };
            var n = f(r(888)),
                o = f(r(274));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1615: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                if ((0, n.default)(e)) return function(e) {
                    var i = -1,
                        t = e.length;
                    return function() {
                        return ++i < t ? {
                            value: e[i],
                            key: i
                        } : null
                    }
                }(e);
                var t = (0, o.default)(e);
                return t ? function(e) {
                    var i = -1;
                    return function() {
                        var t = e.next();
                        return t.done ? null : (i++, {
                            value: t.value,
                            key: i
                        })
                    }
                }(t) : (r = e, l = (0, f.default)(r), i = -1, c = l.length, function e() {
                    var t = l[++i];
                    return "__proto__" === t ? e() : i < c ? {
                        value: r[t],
                        key: t
                    } : null
                });
                var r, l, i, c
            };
            var n = l(r(443)),
                o = l(r(1616)),
                f = l(r(1617));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1616: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return n && e[n] && e[n]()
            };
            var n = "function" == typeof Symbol && Symbol.iterator;
            e.exports = t.default
        },
        1633: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, o.default)((function(t, r) {
                    var o;
                    try {
                        o = e.apply(this, t)
                    } catch (e) {
                        return r(e)
                    }(0, n.default)(o) && "function" == typeof o.then ? o.then((function(e) {
                        c(r, null, e)
                    }), (function(e) {
                        c(r, e.message ? e : new Error(e))
                    })) : r(null, o)
                }))
            };
            var n = l(r(885)),
                o = l(r(1634)),
                f = l(r(1635));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t, r) {
                try {
                    e(t, r)
                } catch (e) {
                    (0, f.default)(h, e)
                }
            }

            function h(e) {
                throw e
            }
            e.exports = t.default
        },
        1634: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function() {
                    var t = (0, f.default)(arguments),
                        r = t.pop();
                    e.call(this, t, r)
                }
            };
            var n, o = r(444),
                f = (n = o) && n.__esModule ? n : {
                    default: n
                };
            e.exports = t.default
        },
        1635: function(e, t, r) {
            "use strict";
            (function(e, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = v, t.wrap = y;
                var o, f = r(444),
                    l = (o = f) && o.__esModule ? o : {
                        default: o
                    };
                var c, h = t.hasSetImmediate = "function" == typeof e && e,
                    d = t.hasNextTick = "object" == typeof n && "function" == typeof n.nextTick;

                function v(e) {
                    setTimeout(e, 0)
                }

                function y(e) {
                    return function(t) {
                        var r = (0, l.default)(arguments, 1);
                        e((function() {
                            t.apply(null, r)
                        }))
                    }
                }
                c = h ? e : d ? n.nextTick : v, t.default = y(c)
            }).call(this, r(551).setImmediate, r(67))
        },
        1636: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r, f) {
                f = f || n.default, t = t || [];
                var l = [],
                    c = 0,
                    h = (0, o.default)(r);
                e(t, (function(e, t, r) {
                    var n = c++;
                    h(e, (function(e, t) {
                        l[n] = t, r(e)
                    }))
                }), (function(e) {
                    f(e, l)
                }))
            };
            var n = f(r(367)),
                o = f(r(274));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1637: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = f(r(1638)),
                o = f(r(890));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = (0, o.default)(n.default, 1), e.exports = t.default
        },
        1638: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r, l) {
                (0, n.default)(t)(e, (0, o.default)((0, f.default)(r)), l)
            };
            var n = l(r(888)),
                o = l(r(1639)),
                f = l(r(274));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1639: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function(t, r, n) {
                    return e(t, n)
                }
            }, e.exports = t.default
        },
        1664: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (t = (0, f.default)(t || o.default), !(0, n.default)(e)) return t(new Error("First argument to waterfall must be an array of functions"));
                if (!e.length) return t();
                var r = 0;

                function d(t) {
                    var n = (0, h.default)(e[r++]);
                    t.push((0, c.default)(v)), n.apply(null, t)
                }

                function v(n) {
                    if (n || r === e.length) return t.apply(null, arguments);
                    d((0, l.default)(arguments, 1))
                }
                d([])
            };
            var n = d(r(889)),
                o = d(r(367)),
                f = d(r(584)),
                l = d(r(444)),
                c = d(r(586)),
                h = d(r(274));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1665: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                (0, o.default)(n.default, e, t)
            };
            var n = f(r(881)),
                o = f(r(1666));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1666: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r) {
                r = r || n.default;
                var c = (0, o.default)(t) ? [] : {};
                e(t, (function(e, t, r) {
                    (0, l.default)(e)((function(e, n) {
                        arguments.length > 2 && (n = (0, f.default)(arguments, 1)), c[t] = n, r(e)
                    }))
                }), (function(e) {
                    r(e, c)
                }))
            };
            var n = c(r(367)),
                o = c(r(443)),
                f = c(r(444)),
                l = c(r(274));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        1693: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "Mutex", (function() {
                return f
            })), r.d(t, "Semaphore", (function() {
                return o
            })), r.d(t, "withTimeout", (function() {
                return l
            }));
            var n = r(14),
                o = function() {
                    function e(e) {
                        if (this._maxConcurrency = e, this._queue = [], e <= 0) throw new Error("semaphore must be initialized to a positive value");
                        this._value = e
                    }
                    return e.prototype.acquire = function() {
                        var e = this,
                            t = this.isLocked(),
                            r = new Promise((function(t) {
                                return e._queue.push(t)
                            }));
                        return t || this._dispatch(), r
                    }, e.prototype.runExclusive = function(e) {
                        return Object(n.e)(this, void 0, void 0, (function() {
                            var t, r, o;
                            return Object(n.g)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        t = n.sent(), r = t[0], o = t[1], n.label = 2;
                                    case 2:
                                        return n.trys.push([2, , 4, 5]), [4, e(r)];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return o(), [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.isLocked = function() {
                        return this._value <= 0
                    }, e.prototype.release = function() {
                        if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var e = this._currentReleaser;
                            this._currentReleaser = void 0, e()
                        }
                    }, e.prototype._dispatch = function() {
                        var e = this,
                            t = this._queue.shift();
                        if (t) {
                            var r = !1;
                            this._currentReleaser = function() {
                                r || (r = !0, e._value++, e._dispatch())
                            }, t([this._value--, this._currentReleaser])
                        }
                    }, e
                }(),
                f = function() {
                    function e() {
                        this._semaphore = new o(1)
                    }
                    return e.prototype.acquire = function() {
                        return Object(n.e)(this, void 0, void 0, (function() {
                            var e;
                            return Object(n.g)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire()];
                                    case 1:
                                        return e = t.sent(), [2, e[1]]
                                }
                            }))
                        }))
                    }, e.prototype.runExclusive = function(e) {
                        return this._semaphore.runExclusive((function() {
                            return e()
                        }))
                    }, e.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, e.prototype.release = function() {
                        this._semaphore.release()
                    }, e
                }();

            function l(e, t, r) {
                var o = this;
                return void 0 === r && (r = new Error("timeout")), {
                    acquire: function() {
                        return new Promise((function(f, l) {
                            return Object(n.e)(o, void 0, void 0, (function() {
                                var o, c;
                                return Object(n.g)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return o = !1, setTimeout((function() {
                                                o = !0, l(r)
                                            }), t), [4, e.acquire()];
                                        case 1:
                                            return c = n.sent(), o ? (Array.isArray(c) ? c[1] : c)() : f(c), [2]
                                    }
                                }))
                            }))
                        }))
                    },
                    runExclusive: function(e) {
                        return Object(n.e)(this, void 0, void 0, (function() {
                            var t, r;
                            return Object(n.g)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = function() {}, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, , 7, 8]), [4, this.acquire()];
                                    case 2:
                                        return r = n.sent(), Array.isArray(r) ? (t = r[1], [4, e(r[0])]) : [3, 4];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return t = r, [4, e()];
                                    case 5:
                                        return [2, n.sent()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return t(), [7];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    },
                    release: function() {
                        e.release()
                    },
                    isLocked: function() {
                        return e.isLocked()
                    }
                }
            }
        },
        240: function(e, t, r) {
            var n;
            ! function(o) {
                "use strict";
                var f, l = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    c = Math.ceil,
                    h = Math.floor,
                    d = "[BigNumber Error] ",
                    v = d + "Number primitive has more than 15 significant digits: ",
                    y = 1e14,
                    _ = 14,
                    w = 9007199254740991,
                    m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    A = 1e7,
                    O = 1e9;

                function E(e) {
                    var i = 0 | e;
                    return e > 0 || e === i ? i : i - 1
                }

                function x(a) {
                    for (var s, e, i = 1, t = a.length, r = a[0] + ""; i < t;) {
                        for (s = a[i++] + "", e = _ - s.length; e--; s = "0" + s);
                        r += s
                    }
                    for (t = r.length; 48 === r.charCodeAt(--t););
                    return r.slice(0, t + 1 || 1)
                }

                function M(e, t) {
                    var a, b, r = e.c,
                        n = t.c,
                        i = e.s,
                        o = t.s,
                        f = e.e,
                        l = t.e;
                    if (!i || !o) return null;
                    if (a = r && !r[0], b = n && !n[0], a || b) return a ? b ? 0 : -o : i;
                    if (i != o) return i;
                    if (a = i < 0, b = f == l, !r || !n) return b ? 0 : !r ^ a ? 1 : -1;
                    if (!b) return f > l ^ a ? 1 : -1;
                    for (o = (f = r.length) < (l = n.length) ? f : l, i = 0; i < o; i++)
                        if (r[i] != n[i]) return r[i] > n[i] ^ a ? 1 : -1;
                    return f == l ? 0 : f > l ^ a ? 1 : -1
                }

                function N(e, t, r, n) {
                    if (e < t || e > r || e !== h(e)) throw Error(d + (n || "Argument") + ("number" == typeof e ? e < t || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function j(e) {
                    var t = e.c.length - 1;
                    return E(e.e / _) == t && e.c[t] % 2 != 0
                }

                function P(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function k(e, t, r) {
                    var n, o;
                    if (t < 0) {
                        for (o = r + "."; ++t; o += r);
                        e = o + e
                    } else if (++t > (n = e.length)) {
                        for (o = r, t -= n; --t; o += r);
                        e += o
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }
                f = function e(t) {
                    var div, r, n, o, f, C, S, L, T, I, R = Y.prototype = {
                            constructor: Y,
                            toString: null,
                            valueOf: null
                        },
                        U = new Y(1),
                        D = 20,
                        B = 4,
                        F = -7,
                        G = 21,
                        z = -1e7,
                        $ = 1e7,
                        W = !1,
                        H = 1,
                        V = 0,
                        J = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: " ",
                            suffix: ""
                        },
                        Z = "0123456789abcdefghijklmnopqrstuvwxyz",
                        X = !0;

                    function Y(e, b) {
                        var t, o, f, c, i, d, y, m, A = this;
                        if (!(A instanceof Y)) return new Y(e, b);
                        if (null == b) {
                            if (e && !0 === e._isBigNumber) return A.s = e.s, void(!e.c || e.e > $ ? A.c = A.e = null : e.e < z ? A.c = [A.e = 0] : (A.e = e.e, A.c = e.c.slice()));
                            if ((d = "number" == typeof e) && 0 * e == 0) {
                                if (A.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (c = 0, i = e; i >= 10; i /= 10, c++);
                                    return void(c > $ ? A.c = A.e = null : (A.e = c, A.c = [e]))
                                }
                                m = String(e)
                            } else {
                                if (!l.test(m = String(e))) return n(A, m, d);
                                A.s = 45 == m.charCodeAt(0) ? (m = m.slice(1), -1) : 1
                            }(c = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (i = m.search(/e/i)) > 0 ? (c < 0 && (c = i), c += +m.slice(i + 1), m = m.substring(0, i)) : c < 0 && (c = m.length)
                        } else {
                            if (N(b, 2, Z.length, "Base"), 10 == b && X) return te(A = new Y(e), D + A.e + 1, B);
                            if (m = String(e), d = "number" == typeof e) {
                                if (0 * e != 0) return n(A, m, d, b);
                                if (A.s = 1 / e < 0 ? (m = m.slice(1), -1) : 1, Y.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(v + e)
                            } else A.s = 45 === m.charCodeAt(0) ? (m = m.slice(1), -1) : 1;
                            for (t = Z.slice(0, b), c = i = 0, y = m.length; i < y; i++)
                                if (t.indexOf(o = m.charAt(i)) < 0) {
                                    if ("." == o) {
                                        if (i > c) {
                                            c = y;
                                            continue
                                        }
                                    } else if (!f && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                                        f = !0, i = -1, c = 0;
                                        continue
                                    }
                                    return n(A, String(e), d, b)
                                }
                            d = !1, (c = (m = r(m, b, 10, A.s)).indexOf(".")) > -1 ? m = m.replace(".", "") : c = m.length
                        }
                        for (i = 0; 48 === m.charCodeAt(i); i++);
                        for (y = m.length; 48 === m.charCodeAt(--y););
                        if (m = m.slice(i, ++y)) {
                            if (y -= i, d && Y.DEBUG && y > 15 && (e > w || e !== h(e))) throw Error(v + A.s * e);
                            if ((c = c - i - 1) > $) A.c = A.e = null;
                            else if (c < z) A.c = [A.e = 0];
                            else {
                                if (A.e = c, A.c = [], i = (c + 1) % _, c < 0 && (i += _), i < y) {
                                    for (i && A.c.push(+m.slice(0, i)), y -= _; i < y;) A.c.push(+m.slice(i, i += _));
                                    i = _ - (m = m.slice(i)).length
                                } else i -= y;
                                for (; i--; m += "0");
                                A.c.push(+m)
                            }
                        } else A.c = [A.e = 0]
                    }

                    function K(e, i, t, r) {
                        var n, o, f, l, c;
                        if (null == t ? t = B : N(t, 0, 8), !e.c) return e.toString();
                        if (n = e.c[0], f = e.e, null == i) c = x(e.c), c = 1 == r || 2 == r && (f <= F || f >= G) ? P(c, f) : k(c, f, "0");
                        else if (o = (e = te(new Y(e), i, t)).e, l = (c = x(e.c)).length, 1 == r || 2 == r && (i <= o || o <= F)) {
                            for (; l < i; c += "0", l++);
                            c = P(c, o)
                        } else if (i -= f, c = k(c, o, "0"), o + 1 > l) {
                            if (--i > 0)
                                for (c += "."; i--; c += "0");
                        } else if ((i += o - l) > 0)
                            for (o + 1 == l && (c += "."); i--; c += "0");
                        return e.s < 0 && n ? "-" + c : c
                    }

                    function Q(e, t) {
                        for (var r, i = 1, n = new Y(e[0]); i < e.length; i++) {
                            if (!(r = new Y(e[i])).s) {
                                n = r;
                                break
                            }
                            t.call(n, r) && (n = r)
                        }
                        return n
                    }

                    function ee(e, t, r) {
                        for (var i = 1, n = t.length; !t[--n]; t.pop());
                        for (n = t[0]; n >= 10; n /= 10, i++);
                        return (r = i + r * _ - 1) > $ ? e.c = e.e = null : r < z ? e.c = [e.e = 0] : (e.e = r, e.c = t), e
                    }

                    function te(e, t, r, n) {
                        var o, i, f, l, d, v, w, A = e.c,
                            O = m;
                        if (A) {
                            e: {
                                for (o = 1, l = A[0]; l >= 10; l /= 10, o++);
                                if ((i = t - o) < 0) i += _,
                                f = t,
                                w = (d = A[v = 0]) / O[o - f - 1] % 10 | 0;
                                else if ((v = c((i + 1) / _)) >= A.length) {
                                    if (!n) break e;
                                    for (; A.length <= v; A.push(0));
                                    d = w = 0, o = 1, f = (i %= _) - _ + 1
                                } else {
                                    for (d = l = A[v], o = 1; l >= 10; l /= 10, o++);
                                    w = (f = (i %= _) - _ + o) < 0 ? 0 : d / O[o - f - 1] % 10 | 0
                                }
                                if (n = n || t < 0 || null != A[v + 1] || (f < 0 ? d : d % O[o - f - 1]), n = r < 4 ? (w || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == r || n || 6 == r && (i > 0 ? f > 0 ? d / O[o - f] : 0 : A[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !A[0]) return A.length = 0, n ? (t -= e.e + 1, A[0] = O[(_ - t % _) % _], e.e = -t || 0) : A[0] = e.e = 0, e;
                                if (0 == i ? (A.length = v, l = 1, v--) : (A.length = v + 1, l = O[_ - i], A[v] = f > 0 ? h(d / O[o - f] % O[f]) * l : 0), n)
                                    for (;;) {
                                        if (0 == v) {
                                            for (i = 1, f = A[0]; f >= 10; f /= 10, i++);
                                            for (f = A[0] += l, l = 1; f >= 10; f /= 10, l++);
                                            i != l && (e.e++, A[0] == y && (A[0] = 1));
                                            break
                                        }
                                        if (A[v] += l, A[v] != y) break;
                                        A[v--] = 0, l = 1
                                    }
                                for (i = A.length; 0 === A[--i]; A.pop());
                            }
                            e.e > $ ? e.c = e.e = null : e.e < z && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function re(e) {
                        var t, r = e.e;
                        return null === r ? e.toString() : (t = x(e.c), t = r <= F || r >= G ? P(t, r) : k(t, r, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return Y.clone = e, Y.ROUND_UP = 0, Y.ROUND_DOWN = 1, Y.ROUND_CEIL = 2, Y.ROUND_FLOOR = 3, Y.ROUND_HALF_UP = 4, Y.ROUND_HALF_DOWN = 5, Y.ROUND_HALF_EVEN = 6, Y.ROUND_HALF_CEIL = 7, Y.ROUND_HALF_FLOOR = 8, Y.EUCLID = 9, Y.config = Y.set = function(e) {
                        var p, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(d + "Object expected: " + e);
                            if (e.hasOwnProperty(p = "DECIMAL_PLACES") && (N(t = e[p], 0, O, p), D = t), e.hasOwnProperty(p = "ROUNDING_MODE") && (N(t = e[p], 0, 8, p), B = t), e.hasOwnProperty(p = "EXPONENTIAL_AT") && ((t = e[p]) && t.pop ? (N(t[0], -O, 0, p), N(t[1], 0, O, p), F = t[0], G = t[1]) : (N(t, -O, O, p), F = -(G = t < 0 ? -t : t))), e.hasOwnProperty(p = "RANGE"))
                                if ((t = e[p]) && t.pop) N(t[0], -O, -1, p), N(t[1], 1, O, p), z = t[0], $ = t[1];
                                else {
                                    if (N(t, -O, O, p), !t) throw Error(d + p + " cannot be zero: " + t);
                                    z = -($ = t < 0 ? -t : t)
                                }
                            if (e.hasOwnProperty(p = "CRYPTO")) {
                                if ((t = e[p]) !== !!t) throw Error(d + p + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw W = !t, Error(d + "crypto unavailable");
                                    W = t
                                } else W = t
                            }
                            if (e.hasOwnProperty(p = "MODULO_MODE") && (N(t = e[p], 0, 9, p), H = t), e.hasOwnProperty(p = "POW_PRECISION") && (N(t = e[p], 0, O, p), V = t), e.hasOwnProperty(p = "FORMAT")) {
                                if ("object" != typeof(t = e[p])) throw Error(d + p + " not an object: " + t);
                                J = t
                            }
                            if (e.hasOwnProperty(p = "ALPHABET")) {
                                if ("string" != typeof(t = e[p]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(d + p + " invalid: " + t);
                                X = "0123456789" == t.slice(0, 10), Z = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: D,
                            ROUNDING_MODE: B,
                            EXPONENTIAL_AT: [F, G],
                            RANGE: [z, $],
                            CRYPTO: W,
                            MODULO_MODE: H,
                            POW_PRECISION: V,
                            FORMAT: J,
                            ALPHABET: Z
                        }
                    }, Y.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!Y.DEBUG) return !0;
                        var i, t, r = e.c,
                            n = e.e,
                            s = e.s;
                        e: if ("[object Array]" == {}.toString.call(r)) {
                            if ((1 === s || -1 === s) && n >= -O && n <= O && n === h(n)) {
                                if (0 === r[0]) {
                                    if (0 === n && 1 === r.length) return !0;
                                    break e
                                }
                                if ((i = (n + 1) % _) < 1 && (i += _), String(r[0]).length == i) {
                                    for (i = 0; i < r.length; i++)
                                        if ((t = r[i]) < 0 || t >= y || t !== h(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else
                        if (null === r && null === n && (null === s || 1 === s || -1 === s)) return !0;
                        throw Error(d + "Invalid BigNumber: " + e)
                    }, Y.maximum = Y.max = function() {
                        return Q(arguments, R.lt)
                    }, Y.minimum = Y.min = function() {
                        return Q(arguments, R.gt)
                    }, Y.random = (o = 9007199254740992, f = Math.random() * o & 2097151 ? function() {
                        return h(Math.random() * o)
                    } : function() {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function(e) {
                        var a, b, t, r, n, i = 0,
                            o = [],
                            l = new Y(U);
                        if (null == e ? e = D : N(e, 0, O), r = c(e / _), W)
                            if (crypto.getRandomValues) {
                                for (a = crypto.getRandomValues(new Uint32Array(r *= 2)); i < r;)(n = 131072 * a[i] + (a[i + 1] >>> 11)) >= 9e15 ? (b = crypto.getRandomValues(new Uint32Array(2)), a[i] = b[0], a[i + 1] = b[1]) : (o.push(n % 1e14), i += 2);
                                i = r / 2
                            } else {
                                if (!crypto.randomBytes) throw W = !1, Error(d + "crypto unavailable");
                                for (a = crypto.randomBytes(r *= 7); i < r;)(n = 281474976710656 * (31 & a[i]) + 1099511627776 * a[i + 1] + 4294967296 * a[i + 2] + 16777216 * a[i + 3] + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6]) >= 9e15 ? crypto.randomBytes(7).copy(a, i) : (o.push(n % 1e14), i += 7);
                                i = r / 7
                            }
                        if (!W)
                            for (; i < r;)(n = f()) < 9e15 && (o[i++] = n % 1e14);
                        for (r = o[--i], e %= _, r && e && (n = m[_ - e], o[i] = h(r / n) * n); 0 === o[i]; o.pop(), i--);
                        if (i < 0) o = [t = 0];
                        else {
                            for (t = -1; 0 === o[0]; o.splice(0, 1), t -= _);
                            for (i = 1, n = o[0]; n >= 10; n /= 10, i++);
                            i < _ && (t -= _ - i)
                        }
                        return l.e = t, l.c = o, l
                    }), Y.sum = function() {
                        for (var i = 1, e = arguments, t = new Y(e[0]); i < e.length;) t = t.plus(e[i++]);
                        return t
                    }, r = function() {
                        var e = "0123456789";

                        function t(e, t, r, n) {
                            for (var o, f, l = [0], i = 0, c = e.length; i < c;) {
                                for (f = l.length; f--; l[f] *= t);
                                for (l[0] += n.indexOf(e.charAt(i++)), o = 0; o < l.length; o++) l[o] > r - 1 && (null == l[o + 1] && (l[o + 1] = 0), l[o + 1] += l[o] / r | 0, l[o] %= r)
                            }
                            return l.reverse()
                        }
                        return function(r, n, o, f, l) {
                            var c, h, d, v, y, _, w, m, i = r.indexOf("."),
                                A = D,
                                O = B;
                            for (i >= 0 && (v = V, V = 0, r = r.replace(".", ""), _ = (m = new Y(n)).pow(r.length - i), V = v, m.c = t(k(x(_.c), _.e, "0"), 10, o, e), m.e = m.c.length), d = v = (w = t(r, n, o, l ? (c = Z, e) : (c = e, Z))).length; 0 == w[--v]; w.pop());
                            if (!w[0]) return c.charAt(0);
                            if (i < 0 ? --d : (_.c = w, _.e = d, _.s = f, w = (_ = div(_, m, A, O, o)).c, y = _.r, d = _.e), i = w[h = d + A + 1], v = o / 2, y = y || h < 0 || null != w[h + 1], y = O < 4 ? (null != i || y) && (0 == O || O == (_.s < 0 ? 3 : 2)) : i > v || i == v && (4 == O || y || 6 == O && 1 & w[h - 1] || O == (_.s < 0 ? 8 : 7)), h < 1 || !w[0]) r = y ? k(c.charAt(1), -A, c.charAt(0)) : c.charAt(0);
                            else {
                                if (w.length = h, y)
                                    for (--o; ++w[--h] > o;) w[h] = 0, h || (++d, w = [1].concat(w));
                                for (v = w.length; !w[--v];);
                                for (i = 0, r = ""; i <= v; r += c.charAt(w[i++]));
                                r = k(r, d, c.charAt(0))
                            }
                            return r
                        }
                    }(), div = function() {
                        function e(e, t, base) {
                            var r, n, o, f, l = 0,
                                i = e.length,
                                c = t % A,
                                h = t / A | 0;
                            for (e = e.slice(); i--;) l = ((n = c * (o = e[i] % A) + (r = h * o + (f = e[i] / A | 0) * c) % A * A + l) / base | 0) + (r / A | 0) + h * f, e[i] = n % base;
                            return l && (e = [l].concat(e)), e
                        }

                        function t(a, b, e, t) {
                            var i, r;
                            if (e != t) r = e > t ? 1 : -1;
                            else
                                for (i = r = 0; i < e; i++)
                                    if (a[i] != b[i]) {
                                        r = a[i] > b[i] ? 1 : -1;
                                        break
                                    } return r
                        }

                        function r(a, b, e, base) {
                            for (var i = 0; e--;) a[e] -= i, i = a[e] < b[e] ? 1 : 0, a[e] = i * base + a[e] - b[e];
                            for (; !a[0] && a.length > 1; a.splice(0, 1));
                        }
                        return function(n, o, f, l, base) {
                            var c, d, i, v, w, m, A, q, O, x, M, N, j, P, k, C, S, s = n.s == o.s ? 1 : -1,
                                L = n.c,
                                T = o.c;
                            if (!(L && L[0] && T && T[0])) return new Y(n.s && o.s && (L ? !T || L[0] != T[0] : T) ? L && 0 == L[0] || !T ? 0 * s : s / 0 : NaN);
                            for (O = (q = new Y(s)).c = [], s = f + (d = n.e - o.e) + 1, base || (base = y, d = E(n.e / _) - E(o.e / _), s = s / _ | 0), i = 0; T[i] == (L[i] || 0); i++);
                            if (T[i] > (L[i] || 0) && d--, s < 0) O.push(1), v = !0;
                            else {
                                for (P = L.length, C = T.length, i = 0, s += 2, (w = h(base / (T[0] + 1))) > 1 && (T = e(T, w, base), L = e(L, w, base), C = T.length, P = L.length), j = C, M = (x = L.slice(0, C)).length; M < C; x[M++] = 0);
                                S = T.slice(), S = [0].concat(S), k = T[0], T[1] >= base / 2 && k++;
                                do {
                                    if (w = 0, (c = t(T, x, C, M)) < 0) {
                                        if (N = x[0], C != M && (N = N * base + (x[1] || 0)), (w = h(N / k)) > 1)
                                            for (w >= base && (w = base - 1), A = (m = e(T, w, base)).length, M = x.length; 1 == t(m, x, A, M);) w--, r(m, C < A ? S : T, A, base), A = m.length, c = 1;
                                        else 0 == w && (c = w = 1), A = (m = T.slice()).length;
                                        if (A < M && (m = [0].concat(m)), r(x, m, M, base), M = x.length, -1 == c)
                                            for (; t(T, x, C, M) < 1;) w++, r(x, C < M ? S : T, M, base), M = x.length
                                    } else 0 === c && (w++, x = [0]);
                                    O[i++] = w, x[0] ? x[M++] = L[j] || 0 : (x = [L[j]], M = 1)
                                } while ((j++ < P || null != x[0]) && s--);
                                v = null != x[0], O[0] || O.splice(0, 1)
                            }
                            if (base == y) {
                                for (i = 1, s = O[0]; s >= 10; s /= 10, i++);
                                te(q, f + (q.e = i + d * _ - 1) + 1, l, v)
                            } else q.e = d, q.r = +v;
                            return q
                        }
                    }(), C = /^(-?)0([xbo])(?=\w[\w.]*$)/i, S = /^([^.]+)\.$/, L = /^\.([^.]+)$/, T = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, n = function(e, t, r, b) {
                        var base, s = r ? t : t.replace(I, "");
                        if (T.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                        else {
                            if (!r && (s = s.replace(C, (function(e, t, r) {
                                    return base = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, b && b != base ? e : t
                                })), b && (base = b, s = s.replace(S, "$1").replace(L, "0.$1")), t != s)) return new Y(s, base);
                            if (Y.DEBUG) throw Error(d + "Not a" + (b ? " base " + b : "") + " number: " + t);
                            e.s = null
                        }
                        e.c = e.e = null
                    }, R.absoluteValue = R.abs = function() {
                        var e = new Y(this);
                        return e.s < 0 && (e.s = 1), e
                    }, R.comparedTo = function(e, b) {
                        return M(this, new Y(e, b))
                    }, R.decimalPlaces = R.dp = function(e, t) {
                        var r, n, o, f = this;
                        if (null != e) return N(e, 0, O), null == t ? t = B : N(t, 0, 8), te(new Y(f), e + f.e + 1, t);
                        if (!(r = f.c)) return null;
                        if (n = ((o = r.length - 1) - E(this.e / _)) * _, o = r[o])
                            for (; o % 10 == 0; o /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, R.dividedBy = R.div = function(e, b) {
                        return div(this, new Y(e, b), D, B)
                    }, R.dividedToIntegerBy = R.idiv = function(e, b) {
                        return div(this, new Y(e, b), 0, 1)
                    }, R.exponentiatedBy = R.pow = function(e, t) {
                        var r, n, i, o, f, l, v, y, w = this;
                        if ((e = new Y(e)).c && !e.isInteger()) throw Error(d + "Exponent not an integer: " + re(e));
                        if (null != t && (t = new Y(t)), f = e.e > 14, !w.c || !w.c[0] || 1 == w.c[0] && !w.e && 1 == w.c.length || !e.c || !e.c[0]) return y = new Y(Math.pow(+re(w), f ? 2 - j(e) : +re(e))), t ? y.mod(t) : y;
                        if (l = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new Y(NaN);
                            (n = !l && w.isInteger() && t.isInteger()) && (w = w.mod(t))
                        } else {
                            if (e.e > 9 && (w.e > 0 || w.e < -1 || (0 == w.e ? w.c[0] > 1 || f && w.c[1] >= 24e7 : w.c[0] < 8e13 || f && w.c[0] <= 9999975e7))) return o = w.s < 0 && j(e) ? -0 : 0, w.e > -1 && (o = 1 / o), new Y(l ? 1 / o : o);
                            V && (o = c(V / _ + 2))
                        }
                        for (f ? (r = new Y(.5), l && (e.s = 1), v = j(e)) : v = (i = Math.abs(+re(e))) % 2, y = new Y(U);;) {
                            if (v) {
                                if (!(y = y.times(w)).c) break;
                                o ? y.c.length > o && (y.c.length = o) : n && (y = y.mod(t))
                            }
                            if (i) {
                                if (0 === (i = h(i / 2))) break;
                                v = i % 2
                            } else if (te(e = e.times(r), e.e + 1, 1), e.e > 14) v = j(e);
                            else {
                                if (0 === (i = +re(e))) break;
                                v = i % 2
                            }
                            w = w.times(w), o ? w.c && w.c.length > o && (w.c.length = o) : n && (w = w.mod(t))
                        }
                        return n ? y : (l && (y = U.div(y)), t ? y.mod(t) : o ? te(y, V, B, undefined) : y)
                    }, R.integerValue = function(e) {
                        var t = new Y(this);
                        return null == e ? e = B : N(e, 0, 8), te(t, t.e + 1, e)
                    }, R.isEqualTo = R.eq = function(e, b) {
                        return 0 === M(this, new Y(e, b))
                    }, R.isFinite = function() {
                        return !!this.c
                    }, R.isGreaterThan = R.gt = function(e, b) {
                        return M(this, new Y(e, b)) > 0
                    }, R.isGreaterThanOrEqualTo = R.gte = function(e, b) {
                        return 1 === (b = M(this, new Y(e, b))) || 0 === b
                    }, R.isInteger = function() {
                        return !!this.c && E(this.e / _) > this.c.length - 2
                    }, R.isLessThan = R.lt = function(e, b) {
                        return M(this, new Y(e, b)) < 0
                    }, R.isLessThanOrEqualTo = R.lte = function(e, b) {
                        return -1 === (b = M(this, new Y(e, b))) || 0 === b
                    }, R.isNaN = function() {
                        return !this.s
                    }, R.isNegative = function() {
                        return this.s < 0
                    }, R.isPositive = function() {
                        return this.s > 0
                    }, R.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, R.minus = function(e, b) {
                        var i, t, r, n, o = this,
                            a = o.s;
                        if (b = (e = new Y(e, b)).s, !a || !b) return new Y(NaN);
                        if (a != b) return e.s = -b, o.plus(e);
                        var f = o.e / _,
                            l = e.e / _,
                            c = o.c,
                            h = e.c;
                        if (!f || !l) {
                            if (!c || !h) return c ? (e.s = -b, e) : new Y(h ? o : NaN);
                            if (!c[0] || !h[0]) return h[0] ? (e.s = -b, e) : new Y(c[0] ? o : 3 == B ? -0 : 0)
                        }
                        if (f = E(f), l = E(l), c = c.slice(), a = f - l) {
                            for ((n = a < 0) ? (a = -a, r = c) : (l = f, r = h), r.reverse(), b = a; b--; r.push(0));
                            r.reverse()
                        } else
                            for (t = (n = (a = c.length) < (b = h.length)) ? a : b, a = b = 0; b < t; b++)
                                if (c[b] != h[b]) {
                                    n = c[b] < h[b];
                                    break
                                } if (n && (r = c, c = h, h = r, e.s = -e.s), (b = (t = h.length) - (i = c.length)) > 0)
                            for (; b--; c[i++] = 0);
                        for (b = y - 1; t > a;) {
                            if (c[--t] < h[t]) {
                                for (i = t; i && !c[--i]; c[i] = b);
                                --c[i], c[t] += y
                            }
                            c[t] -= h[t]
                        }
                        for (; 0 == c[0]; c.splice(0, 1), --l);
                        return c[0] ? ee(e, c, l) : (e.s = 3 == B ? -1 : 1, e.c = [e.e = 0], e)
                    }, R.modulo = R.mod = function(e, b) {
                        var q, s, t = this;
                        return e = new Y(e, b), !t.c || !e.s || e.c && !e.c[0] ? new Y(NaN) : !e.c || t.c && !t.c[0] ? new Y(t) : (9 == H ? (s = e.s, e.s = 1, q = div(t, e, 0, 3), e.s = s, q.s *= s) : q = div(t, e, 0, H), (e = t.minus(q.times(e))).c[0] || 1 != H || (e.s = t.s), e)
                    }, R.multipliedBy = R.times = function(e, b) {
                        var t, r, i, n, o, f, l, c, h, d, v, w, m, base, O, x = this,
                            M = x.c,
                            N = (e = new Y(e, b)).c;
                        if (!(M && N && M[0] && N[0])) return !x.s || !e.s || M && !M[0] && !N || N && !N[0] && !M ? e.c = e.e = e.s = null : (e.s *= x.s, M && N ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (r = E(x.e / _) + E(e.e / _), e.s *= x.s, (l = M.length) < (d = N.length) && (m = M, M = N, N = m, i = l, l = d, d = i), i = l + d, m = []; i--; m.push(0));
                        for (base = y, O = A, i = d; --i >= 0;) {
                            for (t = 0, v = N[i] % O, w = N[i] / O | 0, n = i + (o = l); n > i;) t = ((c = v * (c = M[--o] % O) + (f = w * c + (h = M[o] / O | 0) * v) % O * O + m[n] + t) / base | 0) + (f / O | 0) + w * h, m[n--] = c % base;
                            m[n] = t
                        }
                        return t ? ++r : m.splice(0, 1), ee(e, m, r)
                    }, R.negated = function() {
                        var e = new Y(this);
                        return e.s = -e.s || null, e
                    }, R.plus = function(e, b) {
                        var t, r = this,
                            a = r.s;
                        if (b = (e = new Y(e, b)).s, !a || !b) return new Y(NaN);
                        if (a != b) return e.s = -b, r.minus(e);
                        var n = r.e / _,
                            o = e.e / _,
                            f = r.c,
                            l = e.c;
                        if (!n || !o) {
                            if (!f || !l) return new Y(a / 0);
                            if (!f[0] || !l[0]) return l[0] ? e : new Y(f[0] ? r : 0 * a)
                        }
                        if (n = E(n), o = E(o), f = f.slice(), a = n - o) {
                            for (a > 0 ? (o = n, t = l) : (a = -a, t = f), t.reverse(); a--; t.push(0));
                            t.reverse()
                        }
                        for ((a = f.length) - (b = l.length) < 0 && (t = l, l = f, f = t, b = a), a = 0; b;) a = (f[--b] = f[b] + l[b] + a) / y | 0, f[b] = y === f[b] ? 0 : f[b] % y;
                        return a && (f = [a].concat(f), ++o), ee(e, f, o)
                    }, R.precision = R.sd = function(e, t) {
                        var r, n, o, f = this;
                        if (null != e && e !== !!e) return N(e, 1, O), null == t ? t = B : N(t, 0, 8), te(new Y(f), e, t);
                        if (!(r = f.c)) return null;
                        if (n = (o = r.length - 1) * _ + 1, o = r[o]) {
                            for (; o % 10 == 0; o /= 10, n--);
                            for (o = r[0]; o >= 10; o /= 10, n++);
                        }
                        return e && f.e + 1 > n && (n = f.e + 1), n
                    }, R.shiftedBy = function(e) {
                        return N(e, -9007199254740991, w), this.times("1e" + e)
                    }, R.squareRoot = R.sqrt = function() {
                        var e, t, r, n, o, f = this,
                            l = f.c,
                            s = f.s,
                            c = f.e,
                            h = D + 4,
                            d = new Y("0.5");
                        if (1 !== s || !l || !l[0]) return new Y(!s || s < 0 && (!l || l[0]) ? NaN : l ? f : 1 / 0);
                        if (0 == (s = Math.sqrt(+re(f))) || s == 1 / 0 ? (((t = x(l)).length + c) % 2 == 0 && (t += "0"), s = Math.sqrt(+t), c = E((c + 1) / 2) - (c < 0 || c % 2), r = new Y(t = s == 1 / 0 ? "5e" + c : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : r = new Y(s + ""), r.c[0])
                            for ((s = (c = r.e) + h) < 3 && (s = 0);;)
                                if (o = r, r = d.times(o.plus(div(f, o, h, 1))), x(o.c).slice(0, s) === (t = x(r.c)).slice(0, s)) {
                                    if (r.e < c && --s, "9999" != (t = t.slice(s - 3, s + 1)) && (n || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (te(r, r.e + D + 2, 1), e = !r.times(r).eq(f));
                                        break
                                    }
                                    if (!n && (te(o, o.e + D + 2, 0), o.times(o).eq(f))) {
                                        r = o;
                                        break
                                    }
                                    h += 4, s += 4, n = 1
                                }
                        return te(r, r.e + D + 1, B, e)
                    }, R.toExponential = function(e, t) {
                        return null != e && (N(e, 0, O), e++), K(this, e, t, 1)
                    }, R.toFixed = function(e, t) {
                        return null != e && (N(e, 0, O), e = e + this.e + 1), K(this, e, t)
                    }, R.toFormat = function(e, t, r) {
                        var n, o = this;
                        if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = J;
                        else if ("object" != typeof r) throw Error(d + "Argument not an object: " + r);
                        if (n = o.toFixed(e, t), o.c) {
                            var i, f = n.split("."),
                                l = +r.groupSize,
                                c = +r.secondaryGroupSize,
                                h = r.groupSeparator || "",
                                v = f[0],
                                y = f[1],
                                _ = o.s < 0,
                                w = _ ? v.slice(1) : v,
                                m = w.length;
                            if (c && (i = l, l = c, c = i, m -= i), l > 0 && m > 0) {
                                for (i = m % l || l, v = w.substr(0, i); i < m; i += l) v += h + w.substr(i, l);
                                c > 0 && (v += h + w.slice(i)), _ && (v = "-" + v)
                            }
                            n = y ? v + (r.decimalSeparator || "") + ((c = +r.fractionGroupSize) ? y.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : y) : v
                        }
                        return (r.prefix || "") + n + (r.suffix || "")
                    }, R.toFraction = function(e) {
                        var t, r, n, o, f, l, c, h, v, q, y, s, w = this,
                            A = w.c;
                        if (null != e && (!(c = new Y(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(U))) throw Error(d + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + re(c));
                        if (!A) return new Y(w);
                        for (t = new Y(U), v = r = new Y(U), n = h = new Y(U), s = x(A), f = t.e = s.length - w.e - 1, t.c[0] = m[(l = f % _) < 0 ? _ + l : l], e = !e || c.comparedTo(t) > 0 ? f > 0 ? t : v : c, l = $, $ = 1 / 0, c = new Y(s), h.c[0] = 0; q = div(c, t, 0, 1), 1 != (o = r.plus(q.times(n))).comparedTo(e);) r = n, n = o, v = h.plus(q.times(o = v)), h = o, t = c.minus(q.times(o = t)), c = o;
                        return o = div(e.minus(r), n, 0, 1), h = h.plus(o.times(v)), r = r.plus(o.times(n)), h.s = v.s = w.s, y = div(v, n, f *= 2, B).minus(w).abs().comparedTo(div(h, r, f, B).minus(w).abs()) < 1 ? [v, n] : [h, r], $ = l, y
                    }, R.toNumber = function() {
                        return +re(this)
                    }, R.toPrecision = function(e, t) {
                        return null != e && N(e, 1, O), K(this, e, t, 2)
                    }, R.toString = function(b) {
                        var e, t = this,
                            s = t.s,
                            n = t.e;
                        return null === n ? s ? (e = "Infinity", s < 0 && (e = "-" + e)) : e = "NaN" : (null == b ? e = n <= F || n >= G ? P(x(t.c), n) : k(x(t.c), n, "0") : 10 === b && X ? e = k(x((t = te(new Y(t), D + n + 1, B)).c), t.e, "0") : (N(b, 2, Z.length, "Base"), e = r(k(x(t.c), n, "0"), 10, b, s, !0)), s < 0 && t.c[0] && (e = "-" + e)), e
                    }, R.valueOf = R.toJSON = function() {
                        return re(this)
                    }, R._isBigNumber = !0, null != t && Y.set(t), Y
                }(), f.default = f.BigNumber = f, void 0 === (n = function() {
                    return f
                }.call(t, r, t, e)) || (e.exports = n)
            }()
        },
        274: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isAsync = void 0;
            var n, o = r(1633),
                f = (n = o) && n.__esModule ? n : {
                    default: n
                };
            var l = "function" == typeof Symbol;

            function c(e) {
                return l && "AsyncFunction" === e[Symbol.toStringTag]
            }
            t.default = function(e) {
                return c(e) ? (0, f.default)(e) : e
            }, t.isAsync = c
        },
        306: function(e, t, r) {
            "use strict";
            for (var n = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", o = {}, f = 0; f < n.length; f++) {
                var l = n.charAt(f);
                if (void 0 !== o[l]) throw new TypeError(l + " is ambiguous");
                o[l] = f
            }

            function c(pre) {
                var b = pre >> 25;
                return (33554431 & pre) << 5 ^ 996825010 & -(b >> 0 & 1) ^ 642813549 & -(b >> 1 & 1) ^ 513874426 & -(b >> 2 & 1) ^ 1027748829 & -(b >> 3 & 1) ^ 705979059 & -(b >> 4 & 1)
            }

            function h(e) {
                for (var t = 1, i = 0; i < e.length; ++i) {
                    var r = e.charCodeAt(i);
                    if (r < 33 || r > 126) return "Invalid prefix (" + e + ")";
                    t = c(t) ^ r >> 5
                }
                for (t = c(t), i = 0; i < e.length; ++i) {
                    var n = e.charCodeAt(i);
                    t = c(t) ^ 31 & n
                }
                return t
            }

            function d(e, t) {
                if (t = t || 90, e.length < 8) return e + " too short";
                if (e.length > t) return "Exceeds length limit";
                var r = e.toLowerCase(),
                    n = e.toUpperCase();
                if (e !== r && e !== n) return "Mixed-case string " + e;
                var f = (e = r).lastIndexOf("1");
                if (-1 === f) return "No separator character for " + e;
                if (0 === f) return "Missing prefix for " + e;
                var l = e.slice(0, f),
                    d = e.slice(f + 1);
                if (d.length < 6) return "Data too short";
                var v = h(l);
                if ("string" == typeof v) return v;
                for (var y = [], i = 0; i < d.length; ++i) {
                    var _ = d.charAt(i),
                        w = o[_];
                    if (void 0 === w) return "Unknown character " + _;
                    v = c(v) ^ w, i + 6 >= d.length || y.push(w)
                }
                return 1 !== v ? "Invalid checksum for " + e : {
                    prefix: l,
                    words: y
                }
            }

            function v(data, e, t, r) {
                for (var n = 0, o = 0, f = (1 << t) - 1, l = [], i = 0; i < data.length; ++i)
                    for (n = n << e | data[i], o += e; o >= t;) o -= t, l.push(n >> o & f);
                if (r) o > 0 && l.push(n << t - o & f);
                else {
                    if (o >= e) return "Excess padding";
                    if (n << t - o & f) return "Non-zero padding"
                }
                return l
            }
            e.exports = {
                decodeUnsafe: function() {
                    var e = d.apply(null, arguments);
                    if ("object" == typeof e) return e
                },
                decode: function(e) {
                    var t = d.apply(null, arguments);
                    if ("object" == typeof t) return t;
                    throw new Error(t)
                },
                encode: function(e, t, r) {
                    if (r = r || 90, e.length + 7 + t.length > r) throw new TypeError("Exceeds length limit");
                    var o = h(e = e.toLowerCase());
                    if ("string" == typeof o) throw new Error(o);
                    for (var f = e + "1", i = 0; i < t.length; ++i) {
                        var l = t[i];
                        if (l >> 5 != 0) throw new Error("Non 5-bit word");
                        o = c(o) ^ l, f += n.charAt(l)
                    }
                    for (i = 0; i < 6; ++i) o = c(o);
                    for (o ^= 1, i = 0; i < 6; ++i) {
                        f += n.charAt(o >> 5 * (5 - i) & 31)
                    }
                    return f
                },
                toWordsUnsafe: function(e) {
                    var t = v(e, 8, 5, !0);
                    if (Array.isArray(t)) return t
                },
                toWords: function(e) {
                    var t = v(e, 8, 5, !0);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                },
                fromWordsUnsafe: function(e) {
                    var t = v(e, 5, 8, !1);
                    if (Array.isArray(t)) return t
                },
                fromWords: function(e) {
                    var t = v(e, 5, 8, !1);
                    if (Array.isArray(t)) return t;
                    throw new Error(t)
                }
            }
        },
        444: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                t |= 0;
                for (var r = Math.max(e.length - t, 0), n = Array(r), o = 0; o < r; o++) n[o] = e[t + o];
                return n
            }, e.exports = t.default
        },
        584: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function() {
                    if (null !== e) {
                        var t = e;
                        e = null, t.apply(this, arguments)
                    }
                }
            }, e.exports = t.default
        },
        586: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function() {
                    if (null === e) throw new Error("Callback was already called.");
                    var t = e;
                    e = null, t.apply(this, arguments)
                }
            }, e.exports = t.default
        },
        713: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(1286),
                o = r(714);

            function f() {
                return "hsl(" + Math.floor(360 * n.random()) + "," + (60 * n.random() + 40 + "%") + "," + (25 * (n.random() + n.random() + n.random() + n.random()) + "%") + ")"
            }
            t.createColor = f, t.createImageData = function(e) {
                let t = e,
                    r = e,
                    o = Math.ceil(t / 2),
                    f = t - o,
                    data = [];
                for (let e = 0; e < r; e++) {
                    let e = [];
                    for (let t = 0; t < o; t++) e[t] = Math.floor(2.3 * n.random());
                    let t = e.slice(0, f);
                    t.reverse(), e = e.concat(t);
                    for (let i = 0; i < e.length; i++) data.push(e[i])
                }
                return data
            }, t.parseOptions = function(e) {
                const t = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
                return n.seedRandomness(t), {
                    seed: t,
                    size: e.size || o.DEFAULT_SIZE,
                    scale: e.scale || o.DEFAULT_SCALE,
                    color: e.color || f(),
                    bgcolor: e.bgcolor || f(),
                    spotcolor: e.spotcolor || f()
                }
            }
        },
        714: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DEFAULT_SIZE = 8, t.DEFAULT_SCALE = 4
        },
        881: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r) {
                ((0, n.default)(e) ? _ : w)(e, (0, v.default)(t), r)
            };
            var n = y(r(443)),
                o = y(r(887)),
                f = y(r(1614)),
                l = y(r(890)),
                c = y(r(367)),
                h = y(r(584)),
                d = y(r(586)),
                v = y(r(274));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _(e, t, r) {
                r = (0, h.default)(r || c.default);
                var n = 0,
                    f = 0,
                    l = e.length;

                function v(e, t) {
                    e ? r(e) : ++f !== l && t !== o.default || r(null)
                }
                for (0 === l && r(null); n < l; n++) t(e[n], n, (0, d.default)(v))
            }
            var w = (0, l.default)(f.default, 1 / 0);
            e.exports = t.default
        },
        887: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {}, e.exports = t.default
        },
        888: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return function(t, r, h) {
                    if (h = (0, o.default)(h || n.default), e <= 0 || !t) return h(null);
                    var d = (0, f.default)(t),
                        v = !1,
                        y = 0,
                        _ = !1;

                    function w(e, t) {
                        if (y -= 1, e) v = !0, h(e);
                        else {
                            if (t === c.default || v && y <= 0) return v = !0, h(null);
                            _ || m()
                        }
                    }

                    function m() {
                        for (_ = !0; y < e && !v;) {
                            var t = d();
                            if (null === t) return v = !0, void(y <= 0 && h(null));
                            y += 1, r(t.value, t.key, (0, l.default)(w))
                        }
                        _ = !1
                    }
                    m()
                }
            };
            var n = h(r(367)),
                o = h(r(584)),
                f = h(r(1615)),
                l = h(r(586)),
                c = h(r(887));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            e.exports = t.default
        },
        890: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return function(r, n, o) {
                    return e(r, t, n, o)
                }
            }, e.exports = t.default
        }
    }
]);