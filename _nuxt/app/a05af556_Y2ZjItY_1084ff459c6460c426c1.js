(window.webpackJsonp = window.webpackJsonp || []).push([
    [98], {
        1094: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            var r = n(228),
                o = n(289),
                c = n(76),
                f = function() {
                    function t(t) {
                        this.errors = 0, this.sid = Object(r.f)(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                        var e = Object(o.b)();
                        this.timestamp = e, this.started = e, t && this.update(t)
                    }
                    return t.prototype.update = function(t) {
                        if (void 0 === t && (t = {}), t.user && (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address), this.did || t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Object(o.b)(), t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration), t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(r.f)()), void 0 !== t.init && (this.init = t.init), !this.did && t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), this.ignoreDuration) this.duration = void 0;
                        else if ("number" == typeof t.duration) this.duration = t.duration;
                        else {
                            var e = this.timestamp - this.started;
                            this.duration = e >= 0 ? e : 0
                        }
                        t.release && (this.release = t.release), t.environment && (this.environment = t.environment), !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress), !this.userAgent && t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                    }, t.prototype.close = function(t) {
                        t ? this.update({
                            status: t
                        }) : "ok" === this.status ? this.update({
                            status: "exited"
                        }) : this.update()
                    }, t.prototype.toJSON = function() {
                        return Object(c.c)({
                            sid: "" + this.sid,
                            init: this.init,
                            started: new Date(1e3 * this.started).toISOString(),
                            timestamp: new Date(1e3 * this.timestamp).toISOString(),
                            status: this.status,
                            errors: this.errors,
                            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                            duration: this.duration,
                            attrs: {
                                release: this.release,
                                environment: this.environment,
                                ip_address: this.ipAddress,
                                user_agent: this.userAgent
                            }
                        })
                    }, t
                }()
        },
        126: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return v
            })), n.d(e, "d", (function() {
                return O
            })), n.d(e, "b", (function() {
                return m
            })), n.d(e, "c", (function() {
                return j
            }));
            var r = n(27),
                o = n(228),
                time = n(289),
                c = n(53),
                f = n(62),
                h = n(386),
                _ = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
                d = n(338),
                l = n(1094),
                v = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new d.a), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = e, t && this.bindClient(t)
                    }
                    return t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = d.a.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }, t.prototype.popScope = function() {
                        return !(this.getStack().length <= 1) && !!this.getStack().pop()
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = e && e.event_id ? e.event_id : Object(o.f)(),
                            c = e;
                        if (!e) {
                            var f = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                f = t
                            }
                            c = {
                                originalException: t,
                                syntheticException: f
                            }
                        }
                        return this._invokeClient("captureException", t, Object(r.a)(Object(r.a)({}, c), {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var c = this._lastEventId = n && n.event_id ? n.event_id : Object(o.f)(),
                            f = n;
                        if (!n) {
                            var h = void 0;
                            try {
                                throw new Error(t)
                            } catch (t) {
                                h = t
                            }
                            f = {
                                originalException: t,
                                syntheticException: h
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, Object(r.a)(Object(r.a)({}, f), {
                            event_id: c
                        })), c
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = e && e.event_id ? e.event_id : Object(o.f)();
                        return "transaction" !== t.type && (this._lastEventId = n), this._invokeClient("captureEvent", t, Object(r.a)(Object(r.a)({}, e), {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop(),
                            o = n.scope,
                            f = n.client;
                        if (o && f) {
                            var h = f.getOptions && f.getOptions() || {},
                                _ = h.beforeBreadcrumb,
                                d = void 0 === _ ? null : _,
                                l = h.maxBreadcrumbs,
                                v = void 0 === l ? 100 : l;
                            if (!(v <= 0)) {
                                var y = Object(time.a)(),
                                    O = Object(r.a)({
                                        timestamp: y
                                    }, t),
                                    m = d ? Object(c.b)((function() {
                                        return d(O, e)
                                    })) : O;
                                null !== m && o.addBreadcrumb(m, v)
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getScope();
                        e && e.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getScope();
                        e && e.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getScope();
                        e && e.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getScope();
                        n && n.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getScope();
                        n && n.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getScope();
                        n && n.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        n && r && t(n)
                    }, t.prototype.run = function(t) {
                        var e = O(this);
                        try {
                            t(this)
                        } finally {
                            O(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (e) {
                            return _ && c.c.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t) {
                        return this._callExtensionMethod("startSpan", t)
                    }, t.prototype.startTransaction = function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype.captureSession = function(t) {
                        if (void 0 === t && (t = !1), t) return this.endSession();
                        this._sendSessionUpdate()
                    }, t.prototype.endSession = function() {
                        var t = this.getStackTop(),
                            e = t && t.scope,
                            n = e && e.getSession();
                        n && n.close(), this._sendSessionUpdate(), e && e.setSession()
                    }, t.prototype.startSession = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            o = e.client,
                            c = o && o.getOptions() || {},
                            h = c.release,
                            _ = c.environment,
                            d = (Object(f.a)().navigator || {}).userAgent,
                            v = new l.a(Object(r.a)(Object(r.a)(Object(r.a)({
                                release: h,
                                environment: _
                            }, n && {
                                user: n.getUser()
                            }), d && {
                                userAgent: d
                            }), t));
                        if (n) {
                            var y = n.getSession && n.getSession();
                            y && "ok" === y.status && y.update({
                                status: "exited"
                            }), this.endSession(), n.setSession(v)
                        }
                        return v
                    }, t.prototype._sendSessionUpdate = function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client;
                        if (e) {
                            var r = e.getSession && e.getSession();
                            r && n && n.captureSession && n.captureSession(r)
                        }
                    }, t.prototype._invokeClient = function(t) {
                        for (var e, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                        var c = this.getStackTop(),
                            f = c.scope,
                            h = c.client;
                        h && h[t] && (e = h)[t].apply(e, Object(r.b)(n, [f]))
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = y(),
                            o = r.__SENTRY__;
                        if (o && o.extensions && "function" == typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                        _ && c.c.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function y() {
                var t = Object(f.a)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function O(t) {
                var e = y(),
                    n = j(e);
                return x(e, t), n
            }

            function m() {
                var t = y();
                return S(t) && !j(t).isOlderThan(4) || x(t, new v), Object(h.b)() ? function(t) {
                    try {
                        var e = y().__SENTRY__,
                            n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                        if (!n) return j(t);
                        if (!S(n) || j(n).isOlderThan(4)) {
                            var r = j(t).getStackTop();
                            x(n, new v(r.client, d.a.clone(r.scope)))
                        }
                        return j(n)
                    } catch (e) {
                        return j(t)
                    }
                }(t) : j(t)
            }

            function S(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function j(t) {
                return Object(f.b)("hub", (function() {
                    return new v
                }), t)
            }

            function x(t, e) {
                return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
            }
        },
        130: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return _
            })), n.d(e, "d", (function() {
                return d
            })), n.d(e, "b", (function() {
                return l
            })), n.d(e, "e", (function() {
                return v
            })), n.d(e, "a", (function() {
                return y
            })), n.d(e, "f", (function() {
                return O
            })), n.d(e, "h", (function() {
                return m
            })), n.d(e, "j", (function() {
                return S
            })), n.d(e, "g", (function() {
                return j
            })), n.d(e, "i", (function() {
                return x
            })), n.d(e, "k", (function() {
                return E
            })), n.d(e, "m", (function() {
                return k
            })), n.d(e, "l", (function() {
                return T
            }));
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var s, i = 1, e = arguments.length; i < e; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t
                }, r.apply(this, arguments)
            };

            function o(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    c = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) c.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function c() {
                for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(o(arguments[i]));
                return t
            }
            var f = n(126);

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = Object(f.b)();
                if (r && r[t]) return r[t].apply(r, c(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }

            function _(t, e) {
                return h("captureException", t, {
                    captureContext: e,
                    originalException: t,
                    syntheticException: new Error("Sentry syntheticException")
                })
            }

            function d(t, e) {
                var n = new Error(t);
                return h("captureMessage", t, "string" == typeof e ? e : void 0, r({
                    originalException: t,
                    syntheticException: n
                }, "string" != typeof e ? {
                    captureContext: e
                } : void 0))
            }

            function l(t) {
                return h("captureEvent", t)
            }

            function v(t) {
                h("configureScope", t)
            }

            function y(t) {
                h("addBreadcrumb", t)
            }

            function O(t, e) {
                h("setContext", t, e)
            }

            function m(t) {
                h("setExtras", t)
            }

            function S(t) {
                h("setTags", t)
            }

            function j(t, e) {
                h("setExtra", t, e)
            }

            function x(t, e) {
                h("setTag", t, e)
            }

            function E(t) {
                h("setUser", t)
            }

            function k(t) {
                h("withScope", t)
            }

            function T(t, e) {
                return h("startTransaction", r({}, t), e)
            }
        },
        1766: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var r = n(53),
                o = n(201),
                c = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var c = n().getIntegration(t);
                            if (c) {
                                try {
                                    if (function(t, e) {
                                            if (!e) return !1;
                                            if (function(t, e) {
                                                    var n = t.message,
                                                        r = e.message;
                                                    if (!n && !r) return !1;
                                                    if (n && !r || !n && r) return !1;
                                                    if (n !== r) return !1;
                                                    if (!h(t, e)) return !1;
                                                    if (!f(t, e)) return !1;
                                                    return !0
                                                }(t, e)) return !0;
                                            if (function(t, e) {
                                                    var n = _(e),
                                                        r = _(t);
                                                    if (!n || !r) return !1;
                                                    if (n.type !== r.type || n.value !== r.value) return !1;
                                                    if (!h(t, e)) return !1;
                                                    if (!f(t, e)) return !1;
                                                    return !0
                                                }(t, e)) return !0;
                                            return !1
                                        }(e, c._previousEvent)) return o.a && r.c.warn("Event dropped due to being a duplicate of previously captured event."), null
                                } catch (t) {
                                    return c._previousEvent = e
                                }
                                return c._previousEvent = e
                            }
                            return e
                        }))
                    }, t.id = "Dedupe", t
                }();

            function f(t, e) {
                var n = d(t),
                    r = d(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var i = 0; i < r.length; i++) {
                    var o = r[i],
                        c = n[i];
                    if (o.filename !== c.filename || o.lineno !== c.lineno || o.colno !== c.colno || o.function !== c.function) return !1
                }
                return !0
            }

            function h(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }

            function _(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }

            function d(t) {
                var e = t.exception;
                if (e) try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                } else if (t.stacktrace) return t.stacktrace.frames
            }
        },
        1767: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            var r = n(70),
                o = n(47),
                c = n(1152),
                f = n(53),
                h = n(201),
                _ = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(r.a)({
                            depth: 3
                        }, e)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e, r) {
                            var o = n().getIntegration(t);
                            return o ? o.enhanceEventWithErrorData(e, r) : e
                        }))
                    }, t.prototype.enhanceEventWithErrorData = function(t, e) {
                        var n;
                        if (!e || !e.originalException || !Object(o.d)(e.originalException)) return t;
                        var f = e.originalException.name || e.originalException.constructor.name,
                            h = this._extractErrorData(e.originalException);
                        if (h) {
                            var _ = Object(r.a)({}, t.contexts),
                                d = Object(c.a)(h, this._options.depth);
                            return Object(o.i)(d) && (_ = Object(r.a)(Object(r.a)({}, t.contexts), ((n = {})[f] = Object(r.a)({}, d), n))), Object(r.a)(Object(r.a)({}, t), {
                                contexts: _
                            })
                        }
                        return t
                    }, t.prototype._extractErrorData = function(t) {
                        var e, n, c, _;
                        try {
                            var d = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                l = {};
                            try {
                                for (var v = Object(r.c)(Object.keys(t)), y = v.next(); !y.done; y = v.next()) {
                                    var O = y.value;
                                    if (-1 === d.indexOf(O)) {
                                        var m = t[O];
                                        l[O] = Object(o.d)(m) ? m.toString() : m
                                    }
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    y && !y.done && (n = v.return) && n.call(v)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            if ("function" == typeof t.toJSON) {
                                var S = t.toJSON();
                                try {
                                    for (var j = Object(r.c)(Object.keys(S)), x = j.next(); !x.done; x = j.next()) {
                                        m = S[O = x.value];
                                        l[O] = Object(o.d)(m) ? m.toString() : m
                                    }
                                } catch (t) {
                                    c = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        x && !x.done && (_ = j.return) && _.call(j)
                                    } finally {
                                        if (c) throw c.error
                                    }
                                }
                            }
                            return l
                        } catch (t) {
                            h.a && f.c.error("Unable to extract extra data from the Error object:", t)
                        }
                        return null
                    }, t.id = "ExtraErrorData", t
                }()
        },
        1768: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            var r = n(70),
                o = n(288),
                c = n(62),
                f = function() {
                    function t(e) {
                        void 0 === e && (e = {
                            types: ["crash", "deprecation", "intervention"]
                        }), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function(t, e) {
                        Object(o.f)() && (this._getCurrentHub = e, new(Object(c.a)().ReportingObserver)(this.handler.bind(this), {
                            buffered: !0,
                            types: this._options.types
                        }).observe())
                    }, t.prototype.handler = function(e) {
                        var n, o, c = this._getCurrentHub && this._getCurrentHub();
                        if (c && c.getIntegration(t)) {
                            var f = function(t) {
                                c.withScope((function(e) {
                                    e.setExtra("url", t.url);
                                    var label = "ReportingObserver [" + t.type + "]",
                                        details = "No details available";
                                    if (t.body) {
                                        var body, n = {};
                                        for (var r in t.body) n[r] = t.body[r];
                                        if (e.setExtra("body", n), "crash" === t.type) details = [(body = t.body).crashId || "", body.reason || ""].join(" ").trim() || details;
                                        else details = (body = t.body).message || details
                                    }
                                    c.captureMessage(label + ": " + details)
                                }))
                            };
                            try {
                                for (var h = Object(r.c)(e), _ = h.next(); !_.done; _ = h.next()) {
                                    f(_.value)
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    _ && !_.done && (o = h.return) && o.call(h)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    }, t.id = "ReportingObserver", t
                }()
        },
        1769: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var r = n(70),
                o = n(640),
                c = function() {
                    function t(e) {
                        var n = this;
                        void 0 === e && (e = {}), this.name = t.id, this._prefix = "app:///", this._iteratee = function(t) {
                            if (!t.filename) return t;
                            var e = /^[A-Z]:\\/.test(t.filename),
                                r = /^\//.test(t.filename);
                            if (e || r) {
                                var c = e ? t.filename.replace(/^[A-Z]:/, "").replace(/\\/g, "/") : t.filename,
                                    base = n._root ? Object(o.b)(n._root, c) : Object(o.a)(c);
                                t.filename = "" + n._prefix + base
                            }
                            return t
                        }, e.root && (this._root = e.root), e.prefix && (this._prefix = e.prefix), e.iteratee && (this._iteratee = e.iteratee)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        var e = t;
                        return t.exception && Array.isArray(t.exception.values) && (e = this._processExceptionsEvent(e)), t.stacktrace && (e = this._processStacktraceEvent(e)), e
                    }, t.prototype._processExceptionsEvent = function(t) {
                        var e = this;
                        try {
                            return Object(r.a)(Object(r.a)({}, t), {
                                exception: Object(r.a)(Object(r.a)({}, t.exception), {
                                    values: t.exception.values.map((function(t) {
                                        return Object(r.a)(Object(r.a)({}, t), {
                                            stacktrace: e._processStacktrace(t.stacktrace)
                                        })
                                    }))
                                })
                            })
                        } catch (e) {
                            return t
                        }
                    }, t.prototype._processStacktraceEvent = function(t) {
                        try {
                            return Object(r.a)(Object(r.a)({}, t), {
                                stacktrace: this._processStacktrace(t.stacktrace)
                            })
                        } catch (e) {
                            return t
                        }
                    }, t.prototype._processStacktrace = function(t) {
                        var e = this;
                        return Object(r.a)(Object(r.a)({}, t), {
                            frames: t && t.frames && t.frames.map((function(t) {
                                return e._iteratee(t)
                            }))
                        })
                    }, t.id = "RewriteFrames", t
                }()
        },
        1770: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return j
            }));
            var r = n(70),
                o = n(289),
                c = n(53),
                f = n(62),
                h = n(640),
                _ = n(201),
                d = {
                    id: "Tracing"
                },
                l = {
                    id: "BrowserTracing"
                },
                v = "ui.vue",
                y = {
                    activate: ["activated", "deactivated"],
                    create: ["beforeCreate", "created"],
                    destroy: ["beforeDestroy", "destroyed"],
                    mount: ["beforeMount", "mounted"],
                    update: ["beforeUpdate", "updated"]
                },
                O = /(?:^|[-_/])(\w)/g,
                m = "root",
                S = "anonymous component",
                j = function() {
                    function t(e) {
                        var n = this;
                        this.name = t.id, this._componentsCache = {}, this._applyTracingHooks = function(t, e) {
                            if (!t.$options.$_sentryPerfHook) {
                                t.$options.$_sentryPerfHook = !0;
                                var f = n._getComponentName(t),
                                    h = f === m,
                                    l = {},
                                    O = function(r) {
                                        var c = Object(o.c)();
                                        n._rootSpan ? n._finishRootSpan(c, e) : t.$once("hook:" + r, (function() {
                                            var t = e().getIntegration(d);
                                            if (t) {
                                                n._tracingActivity = t.constructor.pushActivity("Vue Application Render");
                                                var r = t.constructor.getTransaction();
                                                r && (n._rootSpan = r.startChild({
                                                    description: "Application Render",
                                                    op: v
                                                }))
                                            } else {
                                                var o = function(t) {
                                                    if (t && t.getScope) {
                                                        var e = t.getScope();
                                                        if (e) return e.getTransaction()
                                                    }
                                                    return
                                                }(e());
                                                o && (n._rootSpan = o.startChild({
                                                    description: "Application Render",
                                                    op: v
                                                }))
                                            }
                                        }))
                                    },
                                    S = function(r, c) {
                                        var h = Array.isArray(n._options.tracingOptions.trackComponents) ? n._options.tracingOptions.trackComponents.indexOf(f) > -1 : n._options.tracingOptions.trackComponents;
                                        if (n._rootSpan && h) {
                                            var _ = Object(o.c)(),
                                                span = l[c];
                                            span ? (span.finish(), n._finishRootSpan(_, e)) : t.$once("hook:" + r, (function() {
                                                n._rootSpan && (l[c] = n._rootSpan.startChild({
                                                    description: "Vue <" + f + ">",
                                                    op: "ui.vue." + c
                                                }))
                                            }))
                                        }
                                    };
                                n._options.tracingOptions.hooks.forEach((function(e) {
                                    var o = y[e];
                                    o ? o.forEach((function(o) {
                                        var c = h ? O.bind(n, o) : S.bind(n, o, e),
                                            f = t.$options[o];
                                        Array.isArray(f) ? t.$options[o] = Object(r.b)([c], f) : t.$options[o] = "function" == typeof f ? [c, f] : [c]
                                    })) : _.a && c.c.warn("Unknown hook: " + e)
                                }))
                            }
                        }, _.a && c.c.log("You are still using the Vue.js integration, consider moving to @sentry/vue"), this._options = Object(r.a)(Object(r.a)({
                            Vue: Object(f.a)().Vue,
                            attachProps: !0,
                            logErrors: !1,
                            tracing: !1
                        }, e), {
                            tracingOptions: Object(r.a)({
                                hooks: ["mount", "update"],
                                timeout: 2e3,
                                trackComponents: !1
                            }, e.tracingOptions)
                        })
                    }
                    return t.prototype.setupOnce = function(t, e) {
                        this._options.Vue ? (this._attachErrorHandler(e), this._options.tracing && this._startTracing(e)) : _.a && c.c.error("Vue integration is missing a Vue instance")
                    }, t.prototype._getComponentName = function(t) {
                        if (!t) return S;
                        if (t.$root === t) return m;
                        if (!t.$options) return S;
                        if (t.$options.name) return t.$options.name;
                        if (t.$options._componentTag) return t.$options._componentTag;
                        if (t.$options.__file) {
                            var e = t.$options.__file.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/"),
                                n = Object(h.a)(e, ".vue");
                            return this._componentsCache[n] || (this._componentsCache[n] = n.replace(O, (function(t, e) {
                                return e ? e.toUpperCase() : ""
                            })))
                        }
                        return S
                    }, t.prototype._finishRootSpan = function(t, e) {
                        var n = this;
                        this._rootSpanTimer && clearTimeout(this._rootSpanTimer), this._rootSpanTimer = setTimeout((function() {
                            if (n._tracingActivity) {
                                var r = e().getIntegration(d);
                                r && r.constructor.popActivity(n._tracingActivity)
                            }
                            n._rootSpan && n._rootSpan.finish(t)
                        }), this._options.tracingOptions.timeout)
                    }, t.prototype._startTracing = function(t) {
                        var e = this._applyTracingHooks;
                        this._options.Vue.mixin({
                            beforeCreate: function() {
                                t().getIntegration(d) || t().getIntegration(l) ? e(this, t) : _.a && c.c.error("Vue integration has tracing enabled, but Tracing integration is not configured")
                            }
                        })
                    }, t.prototype._attachErrorHandler = function(e) {
                        var n = this,
                            r = this._options.Vue.config.errorHandler;
                        this._options.Vue.config.errorHandler = function(o, f, h) {
                            var d = {};
                            if (f) try {
                                d.componentName = n._getComponentName(f), n._options.attachProps && (d.propsData = f.$options.propsData)
                            } catch (t) {
                                _.a && c.c.warn("Unable to extract metadata from Vue component.")
                            }
                            h && (d.lifecycleHook = h), e().getIntegration(t) && setTimeout((function() {
                                e().withScope((function(t) {
                                    t.setContext("vue", d), e().captureException(o)
                                }))
                            })), "function" == typeof r && r.call(n._options.Vue, o, f, h), n._options.logErrors && (n._options.Vue.util && n._options.Vue.util.warn("Error in " + h + ': "' + (o && o.toString()) + '"', f), console.error(o))
                        }
                    }, t.id = "Vue", t
                }()
        },
        201: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        },
        27: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return c
            }));
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var s, i = 1, e = arguments.length; i < e; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t
                }, r.apply(this, arguments)
            };

            function o(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    c = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) c.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function c() {
                for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(o(arguments[i]));
                return t
            }
        },
        338: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            })), n.d(e, "b", (function() {
                return l
            }));
            var r = n(27),
                o = n(47),
                c = n(289),
                f = n(141),
                h = n(62),
                _ = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                    }
                    return t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = Object(r.b)(e._breadcrumbs), n._tags = Object(r.a)({}, e._tags), n._extra = Object(r.a)({}, e._extra), n._contexts = Object(r.a)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = Object(r.b)(e._eventProcessors), n._requestSession = e._requestSession), n
                    }, t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._session && this._session.update({
                            user: t
                        }), this._notifyScopeListeners(), this
                    }, t.prototype.getUser = function() {
                        return this._user
                    }, t.prototype.getRequestSession = function() {
                        return this._requestSession
                    }, t.prototype.setRequestSession = function(t) {
                        return this._requestSession = t, this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = Object(r.a)(Object(r.a)({}, this._tags), t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = Object(r.a)(Object(r.a)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = Object(r.a)(Object(r.a)({}, this._extra), t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = Object(r.a)(Object(r.a)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransactionName = function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this.setTransactionName(t)
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return null === e ? delete this._contexts[t] : this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(span) {
                        return this._span = span, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.prototype.getTransaction = function() {
                        var span = this.getSpan();
                        return span && span.transaction
                    }, t.prototype.setSession = function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }, t.prototype.getSession = function() {
                        return this._session
                    }, t.prototype.update = function(e) {
                        if (!e) return this;
                        if ("function" == typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = Object(r.a)(Object(r.a)({}, this._tags), e._tags), this._extra = Object(r.a)(Object(r.a)({}, this._extra), e._extra), this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : Object(o.i)(e) && (e = e, this._tags = Object(r.a)(Object(r.a)({}, this._tags), e.tags), this._extra = Object(r.a)(Object(r.a)({}, this._extra), e.extra), this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = "number" == typeof e ? Math.min(e, 100) : 100;
                        if (n <= 0) return this;
                        var o = Object(r.a)({
                            timestamp: Object(c.a)()
                        }, t);
                        return this._breadcrumbs = Object(r.b)(this._breadcrumbs, [o]).slice(-n), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype.applyToEvent = function(t, e) {
                        if (this._extra && Object.keys(this._extra).length && (t.extra = Object(r.a)(Object(r.a)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = Object(r.a)(Object(r.a)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = Object(r.a)(Object(r.a)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(r.a)(Object(r.a)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = Object(r.a)({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var n = this._span.transaction && this._span.transaction.name;
                            n && (t.tags = Object(r.a)({
                                transaction: n
                            }, t.tags))
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = Object(r.b)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(Object(r.b)(d(), this._eventProcessors), t, e)
                    }, t.prototype.setSDKProcessingMetadata = function(t) {
                        return this._sdkProcessingMetadata = Object(r.a)(Object(r.a)({}, this._sdkProcessingMetadata), t), this
                    }, t.prototype._notifyEventProcessors = function(t, e, n, c) {
                        var h = this;
                        return void 0 === c && (c = 0), new f.a((function(f, _) {
                            var d = t[c];
                            if (null === e || "function" != typeof d) f(e);
                            else {
                                var l = d(Object(r.a)({}, e), n);
                                Object(o.n)(l) ? l.then((function(e) {
                                    return h._notifyEventProcessors(t, e, n, c + 1).then(f)
                                })).then(null, _) : h._notifyEventProcessors(t, l, n, c + 1).then(f).then(null, _)
                            }
                        }))
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t
                }();

            function d() {
                return Object(h.b)("globalEventProcessors", (function() {
                    return []
                }))
            }

            function l(t) {
                d().push(t)
            }
        },
        70: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "c", (function() {
                return o
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = function() {
                return r = Object.assign || function(t) {
                    for (var s, i = 1, e = arguments.length; i < e; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t
                }, r.apply(this, arguments)
            };

            function o(t) {
                var s = "function" == typeof Symbol && Symbol.iterator,
                    e = s && t[s],
                    i = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function c(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    c = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) c.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function f() {
                for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(c(arguments[i]));
                return t
            }
        }
    }
]);