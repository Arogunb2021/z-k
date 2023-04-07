(window.webpackJsonp = window.webpackJsonp || []).push([
    [135], {
        1078: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return y
            }));
            var n = e(79),
                o = e.n(n);
            let c = !1,
                E = !1;
            const l = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let f = l.default,
                h = null;
            const N = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var R, m;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(R || (R = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(m || (m = {}));
            const I = "0123456789abcdef";
            class O {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == l[e] && this.throwArgumentError("invalid log level name", "logLevel", r), f > l[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(O.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(O.levels.INFO, r)
                }
                warn(...r) {
                    this._log(O.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (E) return this.makeError("censored error", code, {});
                    code || (code = O.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += I[n[i] >> 4], t += I[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let o = "";
                    switch (code) {
                        case m.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        o += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        o += "-unbound-result"
                                }
                                break
                            }
                        case m.CALL_EXCEPTION:
                        case m.INSUFFICIENT_FUNDS:
                        case m.MISSING_NEW:
                        case m.NONCE_EXPIRED:
                        case m.REPLACEMENT_UNDERPRICED:
                        case m.TRANSACTION_REPLACED:
                        case m.UNPREDICTABLE_GAS_LIMIT:
                            o = code
                    }
                    o && (r += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const c = new Error(r);
                    return c.reason = n, c.code = code, Object.keys(t).forEach((function(r) {
                        c[r] = t[r]
                    })), c
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, O.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), N && this.throwError("platform missing String.prototype.normalize", O.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: N
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, O.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, O.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, O.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, O.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", O.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", O.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", O.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return h || (h = new O("logger/5.7.0")), h
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", O.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), c) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", O.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    E = !!r, c = !!t
                }
                static setLogLevel(r) {
                    const t = l[r.toLowerCase()];
                    null != t ? f = t : O.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new O(r)
                }
            }
            O.errors = m, O.levels = R;
            const A = new O("bytes/5.7.0");

            function d(r) {
                return !!r.toHexString
            }

            function U(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return U(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function _(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function T(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!_(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!_(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function w(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    A.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), U(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), d(r) && (r = r.toHexString()), C(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : A.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < e.length; i += 2) n.push(parseInt(e.substring(i, i + 2), 16));
                    return U(new Uint8Array(n))
                }
                return T(r) ? U(new Uint8Array(r)) : A.throwArgumentError("invalid arrayify value", "value", r)
            }

            function C(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }

            function y(data) {
                return "0x" + o.a.keccak_256(w(data))
            }
        },
        147: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return E
            }));
            var n = e(79),
                o = e.n(n),
                c = e(69);

            function E(data) {
                return "0x" + o.a.keccak_256(Object(c.a)(data))
            }
        },
        1774: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return E
            }));
            var n = e(69),
                o = e(147),
                c = e(204);

            function E(r) {
                return "string" == typeof r && (r = Object(c.c)(r)), Object(o.a)(Object(n.b)([Object(c.c)("Ethereum Signed Message:\n"), Object(c.c)(String(r.length)), r]))
            }
        },
        1779: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return Xr
            }));
            let n = !1,
                o = !1;
            const c = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = c.default,
                l = null;
            const f = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var h, N;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(h || (h = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(N || (N = {}));
            const R = "0123456789abcdef";
            class m {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == c[e] && this.throwArgumentError("invalid log level name", "logLevel", r), E > c[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(m.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(m.levels.INFO, r)
                }
                warn(...r) {
                    this._log(m.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = m.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += R[n[i] >> 4], t += R[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let c = "";
                    switch (code) {
                        case N.NUMERIC_FAULT:
                            {
                                c = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        c += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        c += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        c += "-unbound-result"
                                }
                                break
                            }
                        case N.CALL_EXCEPTION:
                        case N.INSUFFICIENT_FUNDS:
                        case N.MISSING_NEW:
                        case N.NONCE_EXPIRED:
                        case N.REPLACEMENT_UNDERPRICED:
                        case N.TRANSACTION_REPLACED:
                        case N.UNPREDICTABLE_GAS_LIMIT:
                            c = code
                    }
                    c && (r += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(t).forEach((function(r) {
                        E[r] = t[r]
                    })), E
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, m.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return l || (l = new m("logger/5.6.0")), l
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = c[r.toLowerCase()];
                    null != t ? E = t : m.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new m(r)
                }
            }
            m.errors = N, m.levels = h;
            const I = new m("bytes/5.6.1");

            function O(r) {
                return !!r.toHexString
            }

            function A(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return A(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function d(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function U(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!d(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!d(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function _(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    I.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), A(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), O(r) && (r = r.toHexString()), T(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : I.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < e.length; i += 2) n.push(parseInt(e.substring(i, i + 2), 16));
                    return A(new Uint8Array(n))
                }
                return U(r) ? A(new Uint8Array(r)) : I.throwArgumentError("invalid arrayify value", "value", r)
            }

            function T(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            var w = e(13),
                C = e.n(w);
            let y = !1,
                S = !1;
            const P = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let v = P.default,
                D = null;
            const F = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var L, M;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(L || (L = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(M || (M = {}));
            const G = "0123456789abcdef";
            class B {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == P[e] && this.throwArgumentError("invalid log level name", "logLevel", r), v > P[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(B.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(B.levels.INFO, r)
                }
                warn(...r) {
                    this._log(B.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (S) return this.makeError("censored error", code, {});
                    code || (code = B.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += G[n[i] >> 4], t += G[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let o = "";
                    switch (code) {
                        case M.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        o += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        o += "-unbound-result"
                                }
                                break
                            }
                        case M.CALL_EXCEPTION:
                        case M.INSUFFICIENT_FUNDS:
                        case M.MISSING_NEW:
                        case M.NONCE_EXPIRED:
                        case M.REPLACEMENT_UNDERPRICED:
                        case M.TRANSACTION_REPLACED:
                        case M.UNPREDICTABLE_GAS_LIMIT:
                            o = code
                    }
                    o && (r += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const c = new Error(r);
                    return c.reason = n, c.code = code, Object.keys(t).forEach((function(r) {
                        c[r] = t[r]
                    })), c
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, B.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), F && this.throwError("platform missing String.prototype.normalize", B.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: F
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, B.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, B.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, B.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, B.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", B.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", B.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", B.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return D || (D = new B("logger/5.6.0")), D
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", B.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), y) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", B.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    S = !!r, y = !!t
                }
                static setLogLevel(r) {
                    const t = P[r.toLowerCase()];
                    null != t ? v = t : B.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new B(r)
                }
            }
            B.errors = M, B.levels = L;
            const x = new B("bytes/5.6.1");

            function k(r) {
                return !!r.toHexString
            }

            function j(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function W(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!j(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!j(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function X(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            const z = "0123456789abcdef";

            function V(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    x.checkSafeUint53(r, "invalid hexlify value");
                    let t = "";
                    for (; r;) t = z[15 & r] + t, r = Math.floor(r / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), k(r)) return r.toHexString();
                if (X(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : x.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (W(r)) {
                    let t = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let e = r[i];
                        t += z[(240 & e) >> 4] + z[15 & e]
                    }
                    return t
                }
                return x.throwArgumentError("invalid hexlify value", "value", r)
            }
            var K = C.a.BN;
            const $ = new B("bignumber/5.6.0"),
                J = {},
                H = 9007199254740991;
            let Z = !1;
            class Q {
                constructor(r, t) {
                    $.checkNew(new.target, Q), r !== J && $.throwError("cannot call constructor directly; use BigNumber.from", B.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(r) {
                    return rr(er(this).fromTwos(r))
                }
                toTwos(r) {
                    return rr(er(this).toTwos(r))
                }
                abs() {
                    return "-" === this._hex[0] ? Q.from(this._hex.substring(1)) : this
                }
                add(r) {
                    return rr(er(this).add(er(r)))
                }
                sub(r) {
                    return rr(er(this).sub(er(r)))
                }
                div(r) {
                    return Q.from(r).isZero() && nr("division-by-zero", "div"), rr(er(this).div(er(r)))
                }
                mul(r) {
                    return rr(er(this).mul(er(r)))
                }
                mod(r) {
                    const t = er(r);
                    return t.isNeg() && nr("division-by-zero", "mod"), rr(er(this).umod(t))
                }
                pow(r) {
                    const t = er(r);
                    return t.isNeg() && nr("negative-power", "pow"), rr(er(this).pow(t))
                }
                and(r) {
                    const t = er(r);
                    return (this.isNegative() || t.isNeg()) && nr("unbound-bitwise-result", "and"), rr(er(this).and(t))
                }
                or(r) {
                    const t = er(r);
                    return (this.isNegative() || t.isNeg()) && nr("unbound-bitwise-result", "or"), rr(er(this).or(t))
                }
                xor(r) {
                    const t = er(r);
                    return (this.isNegative() || t.isNeg()) && nr("unbound-bitwise-result", "xor"), rr(er(this).xor(t))
                }
                mask(r) {
                    return (this.isNegative() || r < 0) && nr("negative-width", "mask"), rr(er(this).maskn(r))
                }
                shl(r) {
                    return (this.isNegative() || r < 0) && nr("negative-width", "shl"), rr(er(this).shln(r))
                }
                shr(r) {
                    return (this.isNegative() || r < 0) && nr("negative-width", "shr"), rr(er(this).shrn(r))
                }
                eq(r) {
                    return er(this).eq(er(r))
                }
                lt(r) {
                    return er(this).lt(er(r))
                }
                lte(r) {
                    return er(this).lte(er(r))
                }
                gt(r) {
                    return er(this).gt(er(r))
                }
                gte(r) {
                    return er(this).gte(er(r))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return er(this).isZero()
                }
                toNumber() {
                    try {
                        return er(this).toNumber()
                    } catch (r) {
                        nr("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (r) {}
                    return $.throwError("this platform does not support BigInt", B.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? Z || (Z = !0, $.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? $.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", B.errors.UNEXPECTED_ARGUMENT, {}) : $.throwError("BigNumber.toString does not accept parameters", B.errors.UNEXPECTED_ARGUMENT, {})), er(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(r) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(r) {
                    if (r instanceof Q) return r;
                    if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new Q(J, Y(r)) : r.match(/^-?[0-9]+$/) ? new Q(J, Y(new K(r))) : $.throwArgumentError("invalid BigNumber string", "value", r);
                    if ("number" == typeof r) return r % 1 && nr("underflow", "BigNumber.from", r), (r >= H || r <= -H) && nr("overflow", "BigNumber.from", r), Q.from(String(r));
                    const t = r;
                    if ("bigint" == typeof t) return Q.from(t.toString());
                    if (W(t)) return Q.from(V(t));
                    if (t)
                        if (t.toHexString) {
                            const r = t.toHexString();
                            if ("string" == typeof r) return Q.from(r)
                        } else {
                            let r = t._hex;
                            if (null == r && "BigNumber" === t.type && (r = t.hex), "string" == typeof r && (X(r) || "-" === r[0] && X(r.substring(1)))) return Q.from(r)
                        }
                    return $.throwArgumentError("invalid BigNumber value", "value", r)
                }
                static isBigNumber(r) {
                    return !(!r || !r._isBigNumber)
                }
            }

            function Y(r) {
                if ("string" != typeof r) return Y(r.toString(16));
                if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && $.throwArgumentError("invalid hex", "value", r), "0x00" === (r = Y(r)) ? r : "-" + r;
                if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
                for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
                return r
            }

            function rr(r) {
                return Q.from(Y(r))
            }

            function er(r) {
                const t = Q.from(r).toHexString();
                return "-" === t[0] ? new K("-" + t.substring(3), 16) : new K(t.substring(2), 16)
            }

            function nr(r, t, e) {
                const n = {
                    fault: r,
                    operation: t
                };
                return null != e && (n.value = e), $.throwError(r, B.errors.NUMERIC_FAULT, n)
            }
            var or = e(79),
                sr = e.n(or);

            function ir(data) {
                return "0x" + sr.a.keccak_256(_(data))
            }
            new m("rlp/5.6.0");
            const ar = new m("address/5.6.0");

            function cr(address) {
                T(address, 20) || ar.throwArgumentError("invalid address", "address", address);
                const r = (address = address.toLowerCase()).substring(2).split(""),
                    t = new Uint8Array(40);
                for (let i = 0; i < 40; i++) t[i] = r[i].charCodeAt(0);
                const e = _(ir(t));
                for (let i = 0; i < 40; i += 2) e[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & e[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const ur = {};
            for (let i = 0; i < 10; i++) ur[String(i)] = String(i);
            for (let i = 0; i < 26; i++) ur[String.fromCharCode(65 + i)] = String(10 + i);
            const Er = Math.floor((lr = 9007199254740991, Math.log10 ? Math.log10(lr) : Math.log(lr) / Math.LN10));
            var lr;

            function fr(address) {
                let r = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((r => ur[r])).join("");
                for (; r.length >= Er;) {
                    let t = r.substring(0, Er);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let t = String(98 - parseInt(r, 10) % 97);
                for (; t.length < 2;) t = "0" + t;
                return t
            }

            function Nr(address) {
                let r = null;
                if ("string" != typeof address && ar.throwArgumentError("invalid address", "address", address), address.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== address.substring(0, 2) && (address = "0x" + address), r = cr(address), address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== address && ar.throwArgumentError("bad address checksum", "address", address);
                else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (address.substring(2, 4) !== fr(address) && ar.throwArgumentError("bad icap checksum", "address", address), t = address.substring(4), r = new K(t, 36).toString(16); r.length < 40;) r = "0" + r;
                    r = cr("0x" + r)
                } else ar.throwArgumentError("invalid address", "address", address);
                var t;
                return r
            }
            var gr = e(69),
                Rr = e(147),
                mr = e(197);
            const Ir = new mr.a("properties/5.7.0");

            function pr(object, r, t) {
                Object.defineProperty(object, r, {
                    enumerable: !0,
                    value: t,
                    writable: !1
                })
            }

            function Or(object) {
                const r = {};
                for (const t in object) r[t] = object[t];
                return r
            }
            const Ar = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function dr(object) {
                if (null == object || Ar[typeof object]) return !0;
                if (Array.isArray(object) || "object" == typeof object) {
                    if (!Object.isFrozen(object)) return !1;
                    const r = Object.keys(object);
                    for (let i = 0; i < r.length; i++) {
                        let t = null;
                        try {
                            t = object[r[i]]
                        } catch (r) {
                            continue
                        }
                        if (!dr(t)) return !1
                    }
                    return !0
                }
                return Ir.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function Ur(object) {
                if (dr(object)) return object;
                if (Array.isArray(object)) return Object.freeze(object.map((r => _r(r))));
                if ("object" == typeof object) {
                    const r = {};
                    for (const t in object) {
                        const e = object[t];
                        void 0 !== e && pr(r, t, _r(e))
                    }
                    return r
                }
                return Ir.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function _r(object) {
                return Ur(object)
            }
            var Tr = e(497),
                wr = e(623),
                Cr = function(r, t, e, n) {
                    return new(e || (e = Promise))((function(o, c) {
                        function E(r) {
                            try {
                                f(n.next(r))
                            } catch (r) {
                                c(r)
                            }
                        }

                        function l(r) {
                            try {
                                f(n.throw(r))
                            } catch (r) {
                                c(r)
                            }
                        }

                        function f(r) {
                            var t;
                            r.done ? o(r.value) : (t = r.value, t instanceof e ? t : new e((function(r) {
                                r(t)
                            }))).then(E, l)
                        }
                        f((n = n.apply(r, t || [])).next())
                    }))
                };
            const yr = new mr.a(Tr.a),
                Sr = new Uint8Array(32);
            Sr.fill(0);
            const Pr = Q.from(-1),
                vr = Q.from(0),
                Dr = Q.from(1),
                Fr = Q.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const Lr = Object(gr.d)(Dr.toHexString(), 32),
                Mr = Object(gr.d)(vr.toHexString(), 32),
                Gr = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                Br = ["name", "version", "chainId", "verifyingContract", "salt"];

            function xr(r) {
                return function(t) {
                    return "string" != typeof t && yr.throwArgumentError(`invalid domain value for ${JSON.stringify(r)}`, `domain.${r}`, t), t
                }
            }
            const kr = {
                name: xr("name"),
                version: xr("version"),
                chainId: function(r) {
                    try {
                        return Q.from(r).toString()
                    } catch (r) {}
                    return yr.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", r)
                },
                verifyingContract: function(r) {
                    try {
                        return Nr(r).toLowerCase()
                    } catch (r) {}
                    return yr.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", r)
                },
                salt: function(r) {
                    try {
                        const t = Object(gr.a)(r);
                        if (32 !== t.length) throw new Error("bad length");
                        return Object(gr.e)(t)
                    } catch (r) {}
                    return yr.throwArgumentError('invalid domain value "salt"', "domain.salt", r)
                }
            };

            function jr(r) {
                {
                    const t = r.match(/^(u?)int(\d*)$/);
                    if (t) {
                        const e = "" === t[1],
                            n = parseInt(t[2] || "256");
                        (n % 8 != 0 || n > 256 || t[2] && t[2] !== String(n)) && yr.throwArgumentError("invalid numeric width", "type", r);
                        const o = Fr.mask(e ? n - 1 : n),
                            c = e ? o.add(Dr).mul(Pr) : vr;
                        return function(t) {
                            const e = Q.from(t);
                            return (e.lt(c) || e.gt(o)) && yr.throwArgumentError(`value out-of-bounds for ${r}`, "value", t), Object(gr.d)(e.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    const t = r.match(/^bytes(\d+)$/);
                    if (t) {
                        const e = parseInt(t[1]);
                        return (0 === e || e > 32 || t[1] !== String(e)) && yr.throwArgumentError("invalid bytes width", "type", r),
                            function(t) {
                                return Object(gr.a)(t).length !== e && yr.throwArgumentError(`invalid length for ${r}`, "value", t),
                                    function(r) {
                                        const t = Object(gr.a)(r),
                                            e = t.length % 32;
                                        return e ? Object(gr.c)([t, Sr.slice(e)]) : Object(gr.e)(t)
                                    }(t)
                            }
                    }
                }
                switch (r) {
                    case "address":
                        return function(r) {
                            return Object(gr.d)(Nr(r), 32)
                        };
                    case "bool":
                        return function(r) {
                            return r ? Lr : Mr
                        };
                    case "bytes":
                        return function(r) {
                            return Object(Rr.a)(r)
                        };
                    case "string":
                        return function(r) {
                            return Object(wr.a)(r)
                        }
                }
                return null
            }

            function Wr(r, t) {
                return `${r}(${t.map((({name:r,type:t})=>t+" "+r)).join(",")})`
            }
            class Xr {
                constructor(r) {
                    pr(this, "types", Object.freeze(_r(r))), pr(this, "_encoderCache", {}), pr(this, "_types", {});
                    const t = {},
                        e = {},
                        n = {};
                    Object.keys(r).forEach((r => {
                        t[r] = {}, e[r] = [], n[r] = {}
                    }));
                    for (const n in r) {
                        const o = {};
                        r[n].forEach((c => {
                            o[c.name] && yr.throwArgumentError(`duplicate variable name ${JSON.stringify(c.name)} in ${JSON.stringify(n)}`, "types", r), o[c.name] = !0;
                            const E = c.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            E === n && yr.throwArgumentError(`circular type reference to ${JSON.stringify(E)}`, "types", r);
                            jr(E) || (e[E] || yr.throwArgumentError(`unknown type ${JSON.stringify(E)}`, "types", r), e[E].push(n), t[n][E] = !0)
                        }))
                    }
                    const o = Object.keys(e).filter((r => 0 === e[r].length));
                    0 === o.length ? yr.throwArgumentError("missing primary type", "types", r) : o.length > 1 && yr.throwArgumentError(`ambiguous primary types or unused types: ${o.map((r=>JSON.stringify(r))).join(", ")}`, "types", r), pr(this, "primaryType", o[0]),
                        function o(c, E) {
                            E[c] && yr.throwArgumentError(`circular type reference to ${JSON.stringify(c)}`, "types", r), E[c] = !0, Object.keys(t[c]).forEach((r => {
                                e[r] && (o(r, E), Object.keys(E).forEach((t => {
                                    n[t][r] = !0
                                })))
                            })), delete E[c]
                        }(this.primaryType, {});
                    for (const t in n) {
                        const e = Object.keys(n[t]);
                        e.sort(), this._types[t] = Wr(t, r[t]) + e.map((t => Wr(t, r[t]))).join("")
                    }
                }
                getEncoder(r) {
                    let t = this._encoderCache[r];
                    return t || (t = this._encoderCache[r] = this._getEncoder(r)), t
                }
                _getEncoder(r) {
                    {
                        const t = jr(r);
                        if (t) return t
                    }
                    const t = r.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (t) {
                        const r = t[1],
                            e = this.getEncoder(r),
                            n = parseInt(t[3]);
                        return t => {
                            n >= 0 && t.length !== n && yr.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
                            let o = t.map(e);
                            return this._types[r] && (o = o.map(Rr.a)), Object(Rr.a)(Object(gr.c)(o))
                        }
                    }
                    const e = this.types[r];
                    if (e) {
                        const t = Object(wr.a)(this._types[r]);
                        return r => {
                            const n = e.map((({
                                name: t,
                                type: e
                            }) => {
                                const n = this.getEncoder(e)(r[t]);
                                return this._types[e] ? Object(Rr.a)(n) : n
                            }));
                            return n.unshift(t), Object(gr.c)(n)
                        }
                    }
                    return yr.throwArgumentError(`unknown type: ${r}`, "type", r)
                }
                encodeType(r) {
                    const t = this._types[r];
                    return t || yr.throwArgumentError(`unknown type: ${JSON.stringify(r)}`, "name", r), t
                }
                encodeData(r, t) {
                    return this.getEncoder(r)(t)
                }
                hashStruct(r, t) {
                    return Object(Rr.a)(this.encodeData(r, t))
                }
                encode(r) {
                    return this.encodeData(this.primaryType, r)
                }
                hash(r) {
                    return this.hashStruct(this.primaryType, r)
                }
                _visit(r, t, e) {
                    if (jr(r)) return e(r, t);
                    const n = r.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        const r = n[1],
                            o = parseInt(n[3]);
                        return o >= 0 && t.length !== o && yr.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map((t => this._visit(r, t, e)))
                    }
                    const o = this.types[r];
                    return o ? o.reduce(((r, {
                        name: n,
                        type: o
                    }) => (r[n] = this._visit(o, t[n], e), r)), {}) : yr.throwArgumentError(`unknown type: ${r}`, "type", r)
                }
                visit(r, t) {
                    return this._visit(this.primaryType, r, t)
                }
                static from(r) {
                    return new Xr(r)
                }
                static getPrimaryType(r) {
                    return Xr.from(r).primaryType
                }
                static hashStruct(r, t, e) {
                    return Xr.from(t).hashStruct(r, e)
                }
                static hashDomain(r) {
                    const t = [];
                    for (const e in r) {
                        const n = Gr[e];
                        n || yr.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(e)}`, "domain", r), t.push({
                            name: e,
                            type: n
                        })
                    }
                    return t.sort(((a, b) => Br.indexOf(a.name) - Br.indexOf(b.name))), Xr.hashStruct("EIP712Domain", {
                        EIP712Domain: t
                    }, r)
                }
                static encode(r, t, e) {
                    return Object(gr.c)(["0x1901", Xr.hashDomain(r), Xr.from(t).hash(e)])
                }
                static hash(r, t, e) {
                    return Object(Rr.a)(Xr.encode(r, t, e))
                }
                static resolveNames(r, t, e, n) {
                    return Cr(this, void 0, void 0, (function*() {
                        r = Or(r);
                        const o = {};
                        r.verifyingContract && !Object(gr.f)(r.verifyingContract, 20) && (o[r.verifyingContract] = "0x");
                        const c = Xr.from(t);
                        c.visit(e, ((r, t) => ("address" !== r || Object(gr.f)(t, 20) || (o[t] = "0x"), t)));
                        for (const r in o) o[r] = yield n(r);
                        return r.verifyingContract && o[r.verifyingContract] && (r.verifyingContract = o[r.verifyingContract]), e = c.visit(e, ((r, t) => "address" === r && o[t] ? o[t] : t)), {
                            domain: r,
                            value: e
                        }
                    }))
                }
                static getPayload(r, t, e) {
                    Xr.hashDomain(r);
                    const n = {},
                        o = [];
                    Br.forEach((t => {
                        const e = r[t];
                        null != e && (n[t] = kr[t](e), o.push({
                            name: t,
                            type: Gr[t]
                        }))
                    }));
                    const c = Xr.from(t),
                        E = Or(t);
                    return E.EIP712Domain ? yr.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : E.EIP712Domain = o, c.encode(e), {
                        types: E,
                        domain: n,
                        primaryType: c.primaryType,
                        message: c.visit(e, ((r, t) => {
                            if (r.match(/^bytes(\d*)/)) return Object(gr.e)(Object(gr.a)(t));
                            if (r.match(/^u?int/)) return Q.from(t).toString();
                            switch (r) {
                                case "address":
                                    return t.toLowerCase();
                                case "bool":
                                    return !!t;
                                case "string":
                                    return "string" != typeof t && yr.throwArgumentError("invalid string", "value", t), t
                            }
                            return yr.throwArgumentError("unsupported type", "type", r)
                        }))
                    }
                }
            }
        },
        1784: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return y
            })), e.d(t, "b", (function() {
                return S
            }));
            var n = e(69),
                o = e(204);

            function c(data, r) {
                r || (r = function(r) {
                    return [parseInt(r, 16)]
                });
                let t = 0,
                    e = {};
                return data.split(",").forEach((n => {
                    let o = n.split(":");
                    t += parseInt(o[0], 16), e[t] = r(o[1])
                })), e
            }

            function E(data) {
                let r = 0;
                return data.split(",").map((t => {
                    let e = t.split("-");
                    1 === e.length ? e[1] = "0" : "" === e[1] && (e[1] = "1");
                    let n = r + parseInt(e[0], 16);
                    return r = parseInt(e[1], 16), {
                        l: n,
                        h: r
                    }
                }))
            }

            function l(r, t) {
                let e = 0;
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if (e += n.l, r >= e && r <= e + n.h && (r - e) % (n.d || 1) == 0) {
                        if (n.e && -1 !== n.e.indexOf(r - e)) continue;
                        return n
                    }
                }
                return null
            }
            const f = E("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
                h = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((r => parseInt(r, 16))),
                N = [{
                    h: 25,
                    s: 32,
                    l: 65
                }, {
                    h: 30,
                    s: 32,
                    e: [23],
                    l: 127
                }, {
                    h: 54,
                    s: 1,
                    e: [48],
                    l: 64,
                    d: 2
                }, {
                    h: 14,
                    s: 1,
                    l: 57,
                    d: 2
                }, {
                    h: 44,
                    s: 1,
                    l: 17,
                    d: 2
                }, {
                    h: 10,
                    s: 1,
                    e: [2, 6, 8],
                    l: 61,
                    d: 2
                }, {
                    h: 16,
                    s: 1,
                    l: 68,
                    d: 2
                }, {
                    h: 84,
                    s: 1,
                    e: [18, 24, 66],
                    l: 19,
                    d: 2
                }, {
                    h: 26,
                    s: 32,
                    e: [17],
                    l: 435
                }, {
                    h: 22,
                    s: 1,
                    l: 71,
                    d: 2
                }, {
                    h: 15,
                    s: 80,
                    l: 40
                }, {
                    h: 31,
                    s: 32,
                    l: 16
                }, {
                    h: 32,
                    s: 1,
                    l: 80,
                    d: 2
                }, {
                    h: 52,
                    s: 1,
                    l: 42,
                    d: 2
                }, {
                    h: 12,
                    s: 1,
                    l: 55,
                    d: 2
                }, {
                    h: 40,
                    s: 1,
                    e: [38],
                    l: 15,
                    d: 2
                }, {
                    h: 14,
                    s: 1,
                    l: 48,
                    d: 2
                }, {
                    h: 37,
                    s: 48,
                    l: 49
                }, {
                    h: 148,
                    s: 1,
                    l: 6351,
                    d: 2
                }, {
                    h: 88,
                    s: 1,
                    l: 160,
                    d: 2
                }, {
                    h: 15,
                    s: 16,
                    l: 704
                }, {
                    h: 25,
                    s: 26,
                    l: 854
                }, {
                    h: 25,
                    s: 32,
                    l: 55915
                }, {
                    h: 37,
                    s: 40,
                    l: 1247
                }, {
                    h: 25,
                    s: -119711,
                    l: 53248
                }, {
                    h: 25,
                    s: -119763,
                    l: 52
                }, {
                    h: 25,
                    s: -119815,
                    l: 52
                }, {
                    h: 25,
                    s: -119867,
                    e: [1, 4, 5, 7, 8, 11, 12, 17],
                    l: 52
                }, {
                    h: 25,
                    s: -119919,
                    l: 52
                }, {
                    h: 24,
                    s: -119971,
                    e: [2, 7, 8, 17],
                    l: 52
                }, {
                    h: 24,
                    s: -120023,
                    e: [2, 7, 13, 15, 16, 17],
                    l: 52
                }, {
                    h: 25,
                    s: -120075,
                    l: 52
                }, {
                    h: 25,
                    s: -120127,
                    l: 52
                }, {
                    h: 25,
                    s: -120179,
                    l: 52
                }, {
                    h: 25,
                    s: -120231,
                    l: 52
                }, {
                    h: 25,
                    s: -120283,
                    l: 52
                }, {
                    h: 25,
                    s: -120335,
                    l: 52
                }, {
                    h: 24,
                    s: -119543,
                    e: [17],
                    l: 56
                }, {
                    h: 24,
                    s: -119601,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119659,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119717,
                    e: [17],
                    l: 58
                }, {
                    h: 24,
                    s: -119775,
                    e: [17],
                    l: 58
                }],
                R = c("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
                m = c("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
                I = c("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(data) {
                    if (data.length % 4 != 0) throw new Error("bad data");
                    let r = [];
                    for (let i = 0; i < data.length; i += 4) r.push(parseInt(data.substring(i, i + 4), 16));
                    return r
                })),
                O = E("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

            function A(r) {
                if (r.match(/^[a-z0-9-]*$/i) && r.length <= 59) return r.toLowerCase();
                let t = Object(o.d)(r);
                var e;
                e = t.map((code => {
                    if (h.indexOf(code) >= 0) return [];
                    if (code >= 65024 && code <= 65039) return [];
                    let r = function(r) {
                        let t = l(r, N);
                        if (t) return [r + t.s];
                        let e = R[r];
                        if (e) return e;
                        let n = m[r];
                        return n ? [r + n[0]] : I[r] || null
                    }(code);
                    return r || [code]
                })), t = e.reduce(((r, t) => (t.forEach((t => {
                    r.push(t)
                })), r)), []), t = Object(o.d)(Object(o.b)(t), o.a.NFKC), t.forEach((code => {
                    if (l(code, O)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
                })), t.forEach((code => {
                    if (l(code, f)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
                }));
                let n = Object(o.b)(t);
                if ("-" === n.substring(0, 1) || "--" === n.substring(2, 4) || "-" === n.substring(n.length - 1)) throw new Error("invalid hyphen");
                return n
            }
            var d = e(147),
                U = e(197),
                _ = e(497);
            const T = new U.a(_.a),
                w = new Uint8Array(32);
            w.fill(0);
            const C = new RegExp("^((.*)\\.)?([^.]+)$");

            function y(r) {
                try {
                    const t = r.split(".");
                    for (let i = 0; i < t.length; i++)
                        if (0 === A(t[i]).length) throw new Error("empty");
                    return !0
                } catch (r) {}
                return !1
            }

            function S(r) {
                "string" != typeof r && T.throwArgumentError("invalid ENS name; not a string", "name", r);
                let t = r,
                    e = w;
                for (; t.length;) {
                    const c = t.match(C);
                    null != c && "" !== c[2] || T.throwArgumentError("invalid ENS address; missing component", "name", r);
                    const label = Object(o.c)(A(c[3]));
                    e = Object(d.a)(Object(n.b)([e, Object(d.a)(label)])), t = c[2] || ""
                }
                return Object(n.e)(e)
            }
        },
        197: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return m
            }));
            let n = !1,
                o = !1;
            const c = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = c.default,
                l = null;
            const f = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var h, N;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(h || (h = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(N || (N = {}));
            const R = "0123456789abcdef";
            class m {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == c[e] && this.throwArgumentError("invalid log level name", "logLevel", r), E > c[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(m.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(m.levels.INFO, r)
                }
                warn(...r) {
                    this._log(m.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = m.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += R[n[i] >> 4], t += R[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let c = "";
                    switch (code) {
                        case N.NUMERIC_FAULT:
                            {
                                c = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        c += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        c += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        c += "-unbound-result"
                                }
                                break
                            }
                        case N.CALL_EXCEPTION:
                        case N.INSUFFICIENT_FUNDS:
                        case N.MISSING_NEW:
                        case N.NONCE_EXPIRED:
                        case N.REPLACEMENT_UNDERPRICED:
                        case N.TRANSACTION_REPLACED:
                        case N.UNPREDICTABLE_GAS_LIMIT:
                            c = code
                    }
                    c && (r += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(t).forEach((function(r) {
                        E[r] = t[r]
                    })), E
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, m.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return l || (l = new m("logger/5.7.0")), l
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = c[r.toLowerCase()];
                    null != t ? E = t : m.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new m(r)
                }
            }
            m.errors = N, m.levels = h
        },
        204: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return c
            })), e.d(t, "c", (function() {
                return N
            })), e.d(t, "b", (function() {
                return R
            })), e.d(t, "d", (function() {
                return m
            }));
            var n = e(69);
            const o = new(e(197).a)("strings/5.7.0");
            var c, E;

            function l(r, t, e, output, n) {
                if (r === E.BAD_PREFIX || r === E.UNEXPECTED_CONTINUE) {
                    let i = 0;
                    for (let r = t + 1; r < e.length && e[r] >> 6 == 2; r++) i++;
                    return i
                }
                return r === E.OVERRUN ? e.length - t - 1 : 0
            }! function(r) {
                r.current = "", r.NFC = "NFC", r.NFD = "NFD", r.NFKC = "NFKC", r.NFKD = "NFKD"
            }(c || (c = {})),
            function(r) {
                r.UNEXPECTED_CONTINUE = "unexpected continuation byte", r.BAD_PREFIX = "bad codepoint prefix", r.OVERRUN = "string overrun", r.MISSING_CONTINUE = "missing continuation byte", r.OUT_OF_RANGE = "out of UTF-8 range", r.UTF16_SURROGATE = "UTF-16 surrogate", r.OVERLONG = "overlong representation"
            }(E || (E = {}));
            const f = Object.freeze({
                error: function(r, t, e, output, n) {
                    return o.throwArgumentError(`invalid codepoint at offset ${t}; ${r}`, "bytes", e)
                },
                ignore: l,
                replace: function(r, t, e, output, n) {
                    return r === E.OVERLONG ? (output.push(n), 0) : (output.push(65533), l(r, t, e))
                }
            });

            function h(r, t) {
                null == t && (t = f.error), r = Object(n.a)(r);
                const e = [];
                let i = 0;
                for (; i < r.length;) {
                    const n = r[i++];
                    if (n >> 7 == 0) {
                        e.push(n);
                        continue
                    }
                    let o = null,
                        c = null;
                    if (192 == (224 & n)) o = 1, c = 127;
                    else if (224 == (240 & n)) o = 2, c = 2047;
                    else {
                        if (240 != (248 & n)) {
                            i += t(128 == (192 & n) ? E.UNEXPECTED_CONTINUE : E.BAD_PREFIX, i - 1, r, e);
                            continue
                        }
                        o = 3, c = 65535
                    }
                    if (i - 1 + o >= r.length) {
                        i += t(E.OVERRUN, i - 1, r, e);
                        continue
                    }
                    let l = n & (1 << 8 - o - 1) - 1;
                    for (let n = 0; n < o; n++) {
                        let n = r[i];
                        if (128 != (192 & n)) {
                            i += t(E.MISSING_CONTINUE, i, r, e), l = null;
                            break
                        }
                        l = l << 6 | 63 & n, i++
                    }
                    null !== l && (l > 1114111 ? i += t(E.OUT_OF_RANGE, i - 1 - o, r, e, l) : l >= 55296 && l <= 57343 ? i += t(E.UTF16_SURROGATE, i - 1 - o, r, e, l) : l <= c ? i += t(E.OVERLONG, i - 1 - o, r, e, l) : e.push(l))
                }
                return e
            }

            function N(r, form = c.current) {
                form != c.current && (o.checkNormalize(), r = r.normalize(form));
                let t = [];
                for (let i = 0; i < r.length; i++) {
                    const e = r.charCodeAt(i);
                    if (e < 128) t.push(e);
                    else if (e < 2048) t.push(e >> 6 | 192), t.push(63 & e | 128);
                    else if (55296 == (64512 & e)) {
                        i++;
                        const n = r.charCodeAt(i);
                        if (i >= r.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
                        const o = 65536 + ((1023 & e) << 10) + (1023 & n);
                        t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)
                    } else t.push(e >> 12 | 224), t.push(e >> 6 & 63 | 128), t.push(63 & e | 128)
                }
                return Object(n.a)(t)
            }

            function R(r) {
                return r.map((r => r <= 65535 ? String.fromCharCode(r) : (r -= 65536, String.fromCharCode(55296 + (r >> 10 & 1023), 56320 + (1023 & r))))).join("")
            }

            function m(r, form = c.current) {
                return h(N(r, form))
            }
        },
        276: function(r, t, e) {
            "use strict";
            e.d(t, "c", (function() {
                return A
            })), e.d(t, "d", (function() {
                return d
            })), e.d(t, "e", (function() {
                return U
            })), e.d(t, "a", (function() {
                return _
            })), e.d(t, "f", (function() {
                return T
            })), e.d(t, "b", (function() {
                return S
            }));
            let n = !1,
                o = !1;
            const c = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = c.default,
                l = null;
            const f = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var h, N;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(h || (h = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(N || (N = {}));
            const R = "0123456789abcdef";
            class m {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == c[e] && this.throwArgumentError("invalid log level name", "logLevel", r), E > c[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(m.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(m.levels.INFO, r)
                }
                warn(...r) {
                    this._log(m.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = m.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += R[n[i] >> 4], t += R[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let c = "";
                    switch (code) {
                        case N.NUMERIC_FAULT:
                            {
                                c = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        c += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        c += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        c += "-unbound-result"
                                }
                                break
                            }
                        case N.CALL_EXCEPTION:
                        case N.INSUFFICIENT_FUNDS:
                        case N.MISSING_NEW:
                        case N.NONCE_EXPIRED:
                        case N.REPLACEMENT_UNDERPRICED:
                        case N.TRANSACTION_REPLACED:
                        case N.UNPREDICTABLE_GAS_LIMIT:
                            c = code
                    }
                    c && (r += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(t).forEach((function(r) {
                        E[r] = t[r]
                    })), E
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, m.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return l || (l = new m("logger/5.7.0")), l
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = c[r.toLowerCase()];
                    null != t ? E = t : m.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new m(r)
                }
            }
            m.errors = N, m.levels = h;
            var I = function(r, t, e, n) {
                return new(e || (e = Promise))((function(o, c) {
                    function E(r) {
                        try {
                            f(n.next(r))
                        } catch (r) {
                            c(r)
                        }
                    }

                    function l(r) {
                        try {
                            f(n.throw(r))
                        } catch (r) {
                            c(r)
                        }
                    }

                    function f(r) {
                        var t;
                        r.done ? o(r.value) : (t = r.value, t instanceof e ? t : new e((function(r) {
                            r(t)
                        }))).then(E, l)
                    }
                    f((n = n.apply(r, t || [])).next())
                }))
            };
            const O = new m("properties/5.5.0");

            function A(object, r, t) {
                Object.defineProperty(object, r, {
                    enumerable: !0,
                    value: t,
                    writable: !1
                })
            }

            function d(r, t) {
                for (let i = 0; i < 32; i++) {
                    if (r[t]) return r[t];
                    if (!r.prototype || "object" != typeof r.prototype) break;
                    r = Object.getPrototypeOf(r.prototype).constructor
                }
                return null
            }

            function U(object) {
                return I(this, void 0, void 0, (function*() {
                    const r = Object.keys(object).map((r => {
                        const t = object[r];
                        return Promise.resolve(t).then((t => ({
                            key: r,
                            value: t
                        })))
                    }));
                    return (yield Promise.all(r)).reduce(((r, t) => (r[t.key] = t.value, r)), {})
                }))
            }

            function _(object, r) {
                object && "object" == typeof object || O.throwArgumentError("invalid object", "object", object), Object.keys(object).forEach((t => {
                    r[t] || O.throwArgumentError("invalid object key - " + t, "transaction:" + t, object)
                }))
            }

            function T(object) {
                const r = {};
                for (const t in object) r[t] = object[t];
                return r
            }
            const w = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function C(object) {
                if (null == object || w[typeof object]) return !0;
                if (Array.isArray(object) || "object" == typeof object) {
                    if (!Object.isFrozen(object)) return !1;
                    const r = Object.keys(object);
                    for (let i = 0; i < r.length; i++) {
                        let t = null;
                        try {
                            t = object[r[i]]
                        } catch (r) {
                            continue
                        }
                        if (!C(t)) return !1
                    }
                    return !0
                }
                return O.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function y(object) {
                if (C(object)) return object;
                if (Array.isArray(object)) return Object.freeze(object.map((r => S(r))));
                if ("object" == typeof object) {
                    const r = {};
                    for (const t in object) {
                        const e = object[t];
                        void 0 !== e && A(r, t, S(e))
                    }
                    return r
                }
                return O.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function S(object) {
                return y(object)
            }
        },
        377: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return m
            }));
            let n = !1,
                o = !1;
            const c = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = c.default,
                l = null;
            const f = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (t) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var h, N;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(h || (h = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(N || (N = {}));
            const R = "0123456789abcdef";
            class m {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == c[e] && this.throwArgumentError("invalid log level name", "logLevel", r), E > c[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(m.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(m.levels.INFO, r)
                }
                warn(...r) {
                    this._log(m.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = m.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += R[n[i] >> 4], t += R[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    e.length && (r += " (" + e.join(", ") + ")");
                    const c = new Error(r);
                    return c.reason = n, c.code = code, Object.keys(t).forEach((function(r) {
                        c[r] = t[r]
                    })), c
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, m.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: e
                    })
                }
                assert(r, t, code, e) {
                    r || this.throwError(t, code, e)
                }
                assertArgument(r, t, e, n) {
                    r || this.throwArgumentError(t, e, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", m.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, m.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, m.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, m.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", m.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", m.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return l || (l = new m("logger/5.5.0")), l
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", m.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = c[r.toLowerCase()];
                    null != t ? E = t : m.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new m(r)
                }
            }
            m.errors = N, m.levels = h
        },
        497: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return n
            }));
            const n = "hash/5.5.0"
        },
        623: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return c
            }));
            var n = e(147),
                o = e(204);

            function c(text) {
                return Object(n.a)(Object(o.c)(text))
            }
        },
        69: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return f
            })), e.d(t, "b", (function() {
                return h
            })), e.d(t, "f", (function() {
                return N
            })), e.d(t, "e", (function() {
                return m
            })), e.d(t, "c", (function() {
                return I
            })), e.d(t, "d", (function() {
                return O
            }));
            const n = new(e(197).a)("bytes/5.7.0");

            function o(r) {
                return !!r.toHexString
            }

            function c(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return c(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function E(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function l(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!E(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!E(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function f(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    n.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), c(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r) && (r = r.toHexString()), N(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", r));
                    const o = [];
                    for (let i = 0; i < e.length; i += 2) o.push(parseInt(e.substring(i, i + 2), 16));
                    return c(new Uint8Array(o))
                }
                return l(r) ? c(new Uint8Array(r)) : n.throwArgumentError("invalid arrayify value", "value", r)
            }

            function h(r) {
                const t = r.map((r => f(r))),
                    e = t.reduce(((r, t) => r + t.length), 0),
                    n = new Uint8Array(e);
                return t.reduce(((r, object) => (n.set(object, r), r + object.length)), 0), c(n)
            }

            function N(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            const R = "0123456789abcdef";

            function m(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    n.checkSafeUint53(r, "invalid hexlify value");
                    let t = "";
                    for (; r;) t = R[15 & r] + t, r = Math.floor(r / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r)) return r.toHexString();
                if (N(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (l(r)) {
                    let t = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let e = r[i];
                        t += R[(240 & e) >> 4] + R[15 & e]
                    }
                    return t
                }
                return n.throwArgumentError("invalid hexlify value", "value", r)
            }

            function I(r) {
                let t = "0x";
                return r.forEach((r => {
                    t += m(r).substring(2)
                })), t
            }

            function O(r, t) {
                for ("string" != typeof r ? r = m(r) : N(r) || n.throwArgumentError("invalid hex string", "value", r), r.length > 2 * t + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * t + 2;) r = "0x0" + r.substring(2);
                return r
            }
        }
    }
]);