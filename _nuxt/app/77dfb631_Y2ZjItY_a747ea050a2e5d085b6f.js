(window.webpackJsonp = window.webpackJsonp || []).push([
    [82], {
        1035: function(r, t, e) {
            "use strict";
            e.r(t), e.d(t, "encode", (function() {
                return L
            })), e.d(t, "decode", (function() {
                return G
            }));
            let n = !1,
                o = !1;
            const E = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let l = E.default,
                c = null;
            const h = function() {
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
            var N, f;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(N || (N = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(f || (f = {}));
            const R = "0123456789abcdef";
            class I {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == E[e] && this.throwArgumentError("invalid log level name", "logLevel", r), l > E[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(I.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(I.levels.INFO, r)
                }
                warn(...r) {
                    this._log(I.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = I.errors.UNKNOWN_ERROR), t || (t = {});
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
                    let E = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
                            {
                                E = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        E += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        E += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        E += "-unbound-result"
                                }
                                break
                            }
                        case f.CALL_EXCEPTION:
                        case f.INSUFFICIENT_FUNDS:
                        case f.MISSING_NEW:
                        case f.NONCE_EXPIRED:
                        case f.REPLACEMENT_UNDERPRICED:
                        case f.TRANSACTION_REPLACED:
                        case f.UNPREDICTABLE_GAS_LIMIT:
                            E = code
                    }
                    E && (r += " [ See: https://links.ethers.org/v5-errors-" + E + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const l = new Error(r);
                    return l.reason = n, l.code = code, Object.keys(t).forEach((function(r) {
                        l[r] = t[r]
                    })), l
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, I.errors.INVALID_ARGUMENT, {
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
                    null == r && (r = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", I.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, I.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, I.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", I.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return c || (c = new I("logger/5.7.0")), c
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = E[r.toLowerCase()];
                    null != t ? l = t : I.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new I(r)
                }
            }
            I.errors = f, I.levels = N;
            const U = new I("bytes/5.7.0");

            function A(r) {
                return !!r.toHexString
            }

            function _(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return _(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function O(r) {
                return d(r) && !(r.length % 2) || T(r)
            }

            function w(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function T(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!w(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!w(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function m(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    U.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), _(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r) && (r = r.toHexString()), d(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : U.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < e.length; i += 2) n.push(parseInt(e.substring(i, i + 2), 16));
                    return _(new Uint8Array(n))
                }
                return T(r) ? _(new Uint8Array(r)) : U.throwArgumentError("invalid arrayify value", "value", r)
            }

            function d(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            const C = "0123456789abcdef";

            function S(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    U.checkSafeUint53(r, "invalid hexlify value");
                    let t = "";
                    for (; r;) t = C[15 & r] + t, r = Math.floor(r / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r)) return r.toHexString();
                if (d(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : U.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (T(r)) {
                    let t = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let e = r[i];
                        t += C[(240 & e) >> 4] + C[15 & e]
                    }
                    return t
                }
                return U.throwArgumentError("invalid hexlify value", "value", r)
            }
            const y = new I("rlp/5.5.0");

            function P(r) {
                const t = [];
                for (; r;) t.unshift(255 & r), r >>= 8;
                return t
            }

            function D(data, r, t) {
                let e = 0;
                for (let i = 0; i < t; i++) e = 256 * e + data[r + i];
                return e
            }

            function F(object) {
                if (Array.isArray(object)) {
                    let r = [];
                    if (object.forEach((function(t) {
                            r = r.concat(F(t))
                        })), r.length <= 55) return r.unshift(192 + r.length), r;
                    const t = P(r.length);
                    return t.unshift(247 + t.length), t.concat(r)
                }
                O(object) || y.throwArgumentError("RLP object must be BytesLike", "object", object);
                const data = Array.prototype.slice.call(m(object));
                if (1 === data.length && data[0] <= 127) return data;
                if (data.length <= 55) return data.unshift(128 + data.length), data;
                const r = P(data.length);
                return r.unshift(183 + r.length), r.concat(data)
            }

            function L(object) {
                return S(F(object))
            }

            function M(data, r, t, e) {
                const n = [];
                for (; t < r + 1 + e;) {
                    const o = v(data, t);
                    n.push(o.result), (t += o.consumed) > r + 1 + e && y.throwError("child data too short", I.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + e,
                    result: n
                }
            }

            function v(data, r) {
                if (0 === data.length && y.throwError("data too short", I.errors.BUFFER_OVERRUN, {}), data[r] >= 248) {
                    const t = data[r] - 247;
                    r + 1 + t > data.length && y.throwError("data short segment too short", I.errors.BUFFER_OVERRUN, {});
                    const e = D(data, r + 1, t);
                    return r + 1 + t + e > data.length && y.throwError("data long segment too short", I.errors.BUFFER_OVERRUN, {}), M(data, r, r + 1 + t, t + e)
                }
                if (data[r] >= 192) {
                    const t = data[r] - 192;
                    return r + 1 + t > data.length && y.throwError("data array too short", I.errors.BUFFER_OVERRUN, {}), M(data, r, r + 1, t)
                }
                if (data[r] >= 184) {
                    const t = data[r] - 183;
                    r + 1 + t > data.length && y.throwError("data array too short", I.errors.BUFFER_OVERRUN, {});
                    const e = D(data, r + 1, t);
                    r + 1 + t + e > data.length && y.throwError("data array too short", I.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + t + e,
                        result: S(data.slice(r + 1 + t, r + 1 + t + e))
                    }
                }
                if (data[r] >= 128) {
                    const t = data[r] - 128;
                    r + 1 + t > data.length && y.throwError("data too short", I.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + t,
                        result: S(data.slice(r + 1, r + 1 + t))
                    }
                }
                return {
                    consumed: 1,
                    result: S(data[r])
                }
            }

            function G(data) {
                const r = m(data),
                    t = v(r, 0);
                return t.consumed !== r.length && y.throwArgumentError("invalid rlp data", "data", data), t.result
            }
        },
        1108: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return n
            }));
            const n = "random/5.5.1"
        },
        1151: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return h
            }));
            const n = new(e(401).a)("bytes/5.7.0");

            function o(r) {
                return !!r.toHexString
            }

            function E(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return E(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function l(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function c(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!l(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!l(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function h(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    n.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), E(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), o(r) && (r = r.toHexString()), N(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", r));
                    const o = [];
                    for (let i = 0; i < e.length; i += 2) o.push(parseInt(e.substring(i, i + 2), 16));
                    return E(new Uint8Array(o))
                }
                return c(r) ? E(new Uint8Array(r)) : n.throwArgumentError("invalid arrayify value", "value", r)
            }

            function N(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
        },
        1775: function(r, t, e) {
            "use strict";
            (function(r) {
                e.d(t, "a", (function() {
                    return N
                }));
                var n = e(1151),
                    o = e(401),
                    E = e(1108);
                const l = new o.a(E.a);
                const c = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== r) return r;
                    throw new Error("unable to locate global object")
                }();
                let h = c.crypto || c.msCrypto;

                function N(r) {
                    (r <= 0 || r > 1024 || r % 1 || r != r) && l.throwArgumentError("invalid length", "length", r);
                    const t = new Uint8Array(r);
                    return h.getRandomValues(t), Object(n.a)(t)
                }
                h && h.getRandomValues || (l.warn("WARNING: Missing strong random number source"), h = {
                    getRandomValues: function(r) {
                        return l.throwError("no secure random source avaialble", o.a.errors.UNSUPPORTED_OPERATION, {
                            operation: "crypto.getRandomValues"
                        })
                    }
                })
            }).call(this, e(36))
        },
        1776: function(r, t, e) {
            "use strict";

            function n(r) {
                for (let i = (r = r.slice()).length - 1; i > 0; i--) {
                    const t = Math.floor(Math.random() * (i + 1)),
                        e = r[i];
                    r[i] = r[t], r[t] = e
                }
                return r
            }
            e.d(t, "a", (function() {
                return n
            }))
        },
        401: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return I
            }));
            let n = !1,
                o = !1;
            const E = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let l = E.default,
                c = null;
            const h = function() {
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
            var N, f;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(N || (N = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(f || (f = {}));
            const R = "0123456789abcdef";
            class I {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == E[e] && this.throwArgumentError("invalid log level name", "logLevel", r), l > E[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(I.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(I.levels.INFO, r)
                }
                warn(...r) {
                    this._log(I.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = I.errors.UNKNOWN_ERROR), t || (t = {});
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
                    let E = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
                            {
                                E = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        E += "-" + t;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        E += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        E += "-unbound-result"
                                }
                                break
                            }
                        case f.CALL_EXCEPTION:
                        case f.INSUFFICIENT_FUNDS:
                        case f.MISSING_NEW:
                        case f.NONCE_EXPIRED:
                        case f.REPLACEMENT_UNDERPRICED:
                        case f.TRANSACTION_REPLACED:
                        case f.UNPREDICTABLE_GAS_LIMIT:
                            E = code
                    }
                    E && (r += " [ See: https://links.ethers.org/v5-errors-" + E + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const l = new Error(r);
                    return l.reason = n, l.code = code, Object.keys(t).forEach((function(r) {
                        l[r] = t[r]
                    })), l
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, I.errors.INVALID_ARGUMENT, {
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
                    null == r && (r = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", I.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, I.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, I.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", I.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return c || (c = new I("logger/5.7.0")), c
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = E[r.toLowerCase()];
                    null != t ? l = t : I.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new I(r)
                }
            }
            I.errors = f, I.levels = N
        }
    }
]);