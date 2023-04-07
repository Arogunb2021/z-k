(window.webpackJsonp = window.webpackJsonp || []).push([
    [64], {
        1034: function(r, e, t) {
            "use strict";
            t.d(e, "a", (function() {
                return C
            }));
            let n = !1,
                o = !1;
            const l = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = l.default,
                c = null;
            const h = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (e) {
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
                _log(r, e) {
                    const t = r.toLowerCase();
                    null == l[t] && this.throwArgumentError("invalid log level name", "logLevel", r), E > l[t] || console.log.apply(console, e)
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
                makeError(r, code, e) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = I.errors.UNKNOWN_ERROR), e || (e = {});
                    const t = [];
                    Object.keys(e).forEach((r => {
                        const n = e[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let e = "";
                                for (let i = 0; i < n.length; i++) e += R[n[i] >> 4], e += R[15 & n[i]];
                                t.push(r + "=Uint8Array(0x" + e + ")")
                            } else t.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(r + "=" + JSON.stringify(e[r].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = r;
                    let l = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
                            {
                                l = "NUMERIC_FAULT";
                                const e = r;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        l += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        l += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        l += "-unbound-result"
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
                            l = code
                    }
                    l && (r += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"), t.length && (r += " (" + t.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(e).forEach((function(r) {
                        E[r] = e[r]
                    })), E
                }
                throwError(r, code, e) {
                    throw this.makeError(r, code, e)
                }
                throwArgumentError(r, e, t) {
                    return this.throwError(r, I.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: t
                    })
                }
                assert(r, e, code, t) {
                    r || this.throwError(e, code, t)
                }
                assertArgument(r, e, t, n) {
                    r || this.throwArgumentError(e, t, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", I.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(r, e) {
                    "number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, e, t) {
                    t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, I.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    }), r > e && this.throwError("too many arguments" + t, I.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    })
                }
                checkNew(r, e) {
                    r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(r, e) {
                    r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", I.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return c || (c = new I("logger/5.7.0")), c
                }
                static setCensorship(r, e) {
                    if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!e
                }
                static setLogLevel(r) {
                    const e = l[r.toLowerCase()];
                    null != e ? E = e : I.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new I(r)
                }
            }
            I.errors = f, I.levels = N;
            const m = new I("bytes/5.7.0");

            function A(r) {
                return !!r.toHexString
            }

            function _(r) {
                return r.slice || (r.slice = function() {
                    const e = Array.prototype.slice.call(arguments);
                    return _(new Uint8Array(Array.prototype.slice.apply(r, e)))
                }), r
            }

            function U(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function T(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!U(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const e = r[i];
                    if (!U(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function w(r, e) {
                if (e || (e = {}), "number" == typeof r) {
                    m.checkSafeUint53(r, "invalid arrayify value");
                    const e = [];
                    for (; r;) e.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === e.length && e.push(0), _(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r) && (r = r.toHexString()), O(r)) {
                    let t = r.substring(2);
                    t.length % 2 && ("left" === e.hexPad ? t = "0" + t : "right" === e.hexPad ? t += "0" : m.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < t.length; i += 2) n.push(parseInt(t.substring(i, i + 2), 16));
                    return _(new Uint8Array(n))
                }
                return T(r) ? _(new Uint8Array(r)) : m.throwArgumentError("invalid arrayify value", "value", r)
            }

            function O(r, e) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
            }
            new I("properties/5.7.0");

            function v(object, r, e) {
                Object.defineProperty(object, r, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }
            class S {
                constructor(r) {
                    v(this, "alphabet", r), v(this, "base", r.length), v(this, "_alphabetMap", {}), v(this, "_leader", r.charAt(0));
                    for (let i = 0; i < r.length; i++) this._alphabetMap[r.charAt(i)] = i
                }
                encode(r) {
                    let source = w(r);
                    if (0 === source.length) return "";
                    let e = [0];
                    for (let i = 0; i < source.length; ++i) {
                        let r = source[i];
                        for (let t = 0; t < e.length; ++t) r += e[t] << 8, e[t] = r % this.base, r = r / this.base | 0;
                        for (; r > 0;) e.push(r % this.base), r = r / this.base | 0
                    }
                    let t = "";
                    for (let r = 0; 0 === source[r] && r < source.length - 1; ++r) t += this._leader;
                    for (let q = e.length - 1; q >= 0; --q) t += this.alphabet[e[q]];
                    return t
                }
                decode(r) {
                    if ("string" != typeof r) throw new TypeError("Expected String");
                    let e = [];
                    if (0 === r.length) return new Uint8Array(e);
                    e.push(0);
                    for (let i = 0; i < r.length; i++) {
                        let t = this._alphabetMap[r[i]];
                        if (void 0 === t) throw new Error("Non-base" + this.base + " character");
                        let n = t;
                        for (let r = 0; r < e.length; ++r) n += e[r] * this.base, e[r] = 255 & n, n >>= 8;
                        for (; n > 0;) e.push(255 & n), n >>= 8
                    }
                    for (let t = 0; r[t] === this._leader && t < r.length - 1; ++t) e.push(0);
                    return w(new Uint8Array(e.reverse()))
                }
            }
            new S("abcdefghijklmnopqrstuvwxyz234567");
            const C = new S("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        1036: function(r, e, t) {
            "use strict";
            t.r(e), t.d(e, "decode", (function() {
                return v
            })), t.d(e, "encode", (function() {
                return S
            }));
            let n = !1,
                o = !1;
            const l = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = l.default,
                c = null;
            const h = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (e) {
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
                _log(r, e) {
                    const t = r.toLowerCase();
                    null == l[t] && this.throwArgumentError("invalid log level name", "logLevel", r), E > l[t] || console.log.apply(console, e)
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
                makeError(r, code, e) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = I.errors.UNKNOWN_ERROR), e || (e = {});
                    const t = [];
                    Object.keys(e).forEach((r => {
                        const n = e[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let e = "";
                                for (let i = 0; i < n.length; i++) e += R[n[i] >> 4], e += R[15 & n[i]];
                                t.push(r + "=Uint8Array(0x" + e + ")")
                            } else t.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(r + "=" + JSON.stringify(e[r].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = r;
                    let l = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
                            {
                                l = "NUMERIC_FAULT";
                                const e = r;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        l += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        l += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        l += "-unbound-result"
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
                            l = code
                    }
                    l && (r += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"), t.length && (r += " (" + t.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(e).forEach((function(r) {
                        E[r] = e[r]
                    })), E
                }
                throwError(r, code, e) {
                    throw this.makeError(r, code, e)
                }
                throwArgumentError(r, e, t) {
                    return this.throwError(r, I.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: t
                    })
                }
                assert(r, e, code, t) {
                    r || this.throwError(e, code, t)
                }
                assertArgument(r, e, t, n) {
                    r || this.throwArgumentError(e, t, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", I.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(r, e) {
                    "number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, e, t) {
                    t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, I.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    }), r > e && this.throwError("too many arguments" + t, I.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    })
                }
                checkNew(r, e) {
                    r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(r, e) {
                    r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", I.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return c || (c = new I("logger/5.7.0")), c
                }
                static setCensorship(r, e) {
                    if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!e
                }
                static setLogLevel(r) {
                    const e = l[r.toLowerCase()];
                    null != e ? E = e : I.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new I(r)
                }
            }
            I.errors = f, I.levels = N;
            const m = new I("bytes/5.7.0");

            function A(r) {
                return !!r.toHexString
            }

            function _(r) {
                return r.slice || (r.slice = function() {
                    const e = Array.prototype.slice.call(arguments);
                    return _(new Uint8Array(Array.prototype.slice.apply(r, e)))
                }), r
            }

            function U(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function T(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!U(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const e = r[i];
                    if (!U(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function w(r, e) {
                if (e || (e = {}), "number" == typeof r) {
                    m.checkSafeUint53(r, "invalid arrayify value");
                    const e = [];
                    for (; r;) e.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === e.length && e.push(0), _(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r) && (r = r.toHexString()), O(r)) {
                    let t = r.substring(2);
                    t.length % 2 && ("left" === e.hexPad ? t = "0" + t : "right" === e.hexPad ? t += "0" : m.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < t.length; i += 2) n.push(parseInt(t.substring(i, i + 2), 16));
                    return _(new Uint8Array(n))
                }
                return T(r) ? _(new Uint8Array(r)) : m.throwArgumentError("invalid arrayify value", "value", r)
            }

            function O(r, e) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
            }

            function v(r) {
                r = atob(r);
                const data = [];
                for (let i = 0; i < r.length; i++) data.push(r.charCodeAt(i));
                return w(data)
            }

            function S(data) {
                data = w(data);
                let r = "";
                for (let i = 0; i < data.length; i++) r += String.fromCharCode(data[i]);
                return btoa(r)
            }
        },
        119: function(r, e, t) {
            "use strict";
            t.d(e, "k", (function() {
                return U
            })), t.d(e, "j", (function() {
                return w
            })), t.d(e, "a", (function() {
                return O
            })), t.d(e, "b", (function() {
                return v
            })), t.d(e, "o", (function() {
                return S
            })), t.d(e, "p", (function() {
                return C
            })), t.d(e, "l", (function() {
                return P
            })), t.d(e, "i", (function() {
                return y
            })), t.d(e, "d", (function() {
                return D
            })), t.d(e, "e", (function() {
                return L
            })), t.d(e, "c", (function() {
                return M
            })), t.d(e, "g", (function() {
                return F
            })), t.d(e, "f", (function() {
                return x
            })), t.d(e, "h", (function() {
                return G
            })), t.d(e, "n", (function() {
                return k
            })), t.d(e, "m", (function() {
                return W
            }));
            let n = !1,
                o = !1;
            const l = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let E = l.default,
                c = null;
            const h = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (e) {
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
                _log(r, e) {
                    const t = r.toLowerCase();
                    null == l[t] && this.throwArgumentError("invalid log level name", "logLevel", r), E > l[t] || console.log.apply(console, e)
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
                makeError(r, code, e) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = I.errors.UNKNOWN_ERROR), e || (e = {});
                    const t = [];
                    Object.keys(e).forEach((r => {
                        const n = e[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let e = "";
                                for (let i = 0; i < n.length; i++) e += R[n[i] >> 4], e += R[15 & n[i]];
                                t.push(r + "=Uint8Array(0x" + e + ")")
                            } else t.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(r + "=" + JSON.stringify(e[r].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = r;
                    let l = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
                            {
                                l = "NUMERIC_FAULT";
                                const e = r;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        l += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        l += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        l += "-unbound-result"
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
                            l = code
                    }
                    l && (r += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"), t.length && (r += " (" + t.join(", ") + ")");
                    const E = new Error(r);
                    return E.reason = n, E.code = code, Object.keys(e).forEach((function(r) {
                        E[r] = e[r]
                    })), E
                }
                throwError(r, code, e) {
                    throw this.makeError(r, code, e)
                }
                throwArgumentError(r, e, t) {
                    return this.throwError(r, I.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: t
                    })
                }
                assert(r, e, code, t) {
                    r || this.throwError(e, code, t)
                }
                assertArgument(r, e, t, n) {
                    r || this.throwArgumentError(e, t, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), h && this.throwError("platform missing String.prototype.normalize", I.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
                checkSafeUint53(r, e) {
                    "number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(e, I.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, e, t) {
                    t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, I.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    }), r > e && this.throwError("too many arguments" + t, I.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    })
                }
                checkNew(r, e) {
                    r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(r, e) {
                    r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", I.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", I.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return c || (c = new I("logger/5.7.0")), c
                }
                static setCensorship(r, e) {
                    if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", I.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!e
                }
                static setLogLevel(r) {
                    const e = l[r.toLowerCase()];
                    null != e ? E = e : I.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new I(r)
                }
            }
            I.errors = f, I.levels = N;
            const m = new I("bytes/5.5.0");

            function A(r) {
                return !!r.toHexString
            }

            function _(r) {
                return r.slice || (r.slice = function() {
                    const e = Array.prototype.slice.call(arguments);
                    return _(new Uint8Array(Array.prototype.slice.apply(r, e)))
                }), r
            }

            function U(r) {
                return P(r) && !(r.length % 2) || w(r)
            }

            function T(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function w(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!T(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const e = r[i];
                    if (!T(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function O(r, e) {
                if (e || (e = {}), "number" == typeof r) {
                    m.checkSafeUint53(r, "invalid arrayify value");
                    const e = [];
                    for (; r;) e.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === e.length && e.push(0), _(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r) && (r = r.toHexString()), P(r)) {
                    let t = r.substring(2);
                    t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : m.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < t.length; i += 2) n.push(parseInt(t.substring(i, i + 2), 16));
                    return _(new Uint8Array(n))
                }
                return w(r) ? _(new Uint8Array(r)) : m.throwArgumentError("invalid arrayify value", "value", r)
            }

            function v(r) {
                const e = r.map((r => O(r))),
                    t = e.reduce(((r, e) => r + e.length), 0),
                    n = new Uint8Array(t);
                return e.reduce(((r, object) => (n.set(object, r), r + object.length)), 0), _(n)
            }

            function S(r) {
                let e = O(r);
                if (0 === e.length) return e;
                let t = 0;
                for (; t < e.length && 0 === e[t];) t++;
                return t && (e = e.slice(t)), e
            }

            function C(r, e) {
                (r = O(r)).length > e && m.throwArgumentError("value out of range", "value", arguments[0]);
                const t = new Uint8Array(e);
                return t.set(r, e - r.length), _(t)
            }

            function P(r, e) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
            }
            const d = "0123456789abcdef";

            function y(r, e) {
                if (e || (e = {}), "number" == typeof r) {
                    m.checkSafeUint53(r, "invalid hexlify value");
                    let e = "";
                    for (; r;) e = d[15 & r] + e, r = Math.floor(r / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), A(r)) return r.toHexString();
                if (P(r)) return r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : m.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (w(r)) {
                    let e = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let t = r[i];
                        e += d[(240 & t) >> 4] + d[15 & t]
                    }
                    return e
                }
                return m.throwArgumentError("invalid hexlify value", "value", r)
            }

            function D(data) {
                if ("string" != typeof data) data = y(data);
                else if (!P(data) || data.length % 2) return null;
                return (data.length - 2) / 2
            }

            function L(data, r, e) {
                return "string" != typeof data ? data = y(data) : (!P(data) || data.length % 2) && m.throwArgumentError("invalid hexData", "value", data), r = 2 + 2 * r, null != e ? "0x" + data.substring(r, 2 + 2 * e) : "0x" + data.substring(r)
            }

            function M(r) {
                let e = "0x";
                return r.forEach((r => {
                    e += y(r).substring(2)
                })), e
            }

            function F(r) {
                const e = x(y(r, {
                    hexPad: "left"
                }));
                return "0x" === e ? "0x0" : e
            }

            function x(r) {
                "string" != typeof r && (r = y(r)), P(r) || m.throwArgumentError("invalid hex string", "value", r), r = r.substring(2);
                let e = 0;
                for (; e < r.length && "0" === r[e];) e++;
                return "0x" + r.substring(e)
            }

            function G(r, e) {
                for ("string" != typeof r ? r = y(r) : P(r) || m.throwArgumentError("invalid hex string", "value", r), r.length > 2 * e + 2 && m.throwArgumentError("value out of range", "value", arguments[1]); r.length < 2 * e + 2;) r = "0x0" + r.substring(2);
                return r
            }

            function k(r) {
                const e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0
                };
                if (U(r)) {
                    const t = O(r);
                    65 !== t.length && m.throwArgumentError("invalid signature string; must be 65 bytes", "signature", r), e.r = y(t.slice(0, 32)), e.s = y(t.slice(32, 64)), e.v = t[64], e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : m.throwArgumentError("signature invalid v byte", "signature", r)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (t[32] |= 128), e._vs = y(t.slice(32, 64))
                } else {
                    if (e.r = r.r, e.s = r.s, e.v = r.v, e.recoveryParam = r.recoveryParam, e._vs = r._vs, null != e._vs) {
                        const t = C(O(e._vs), 32);
                        e._vs = y(t);
                        const n = t[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = n : e.recoveryParam !== n && m.throwArgumentError("signature recoveryParam mismatch _vs", "signature", r), t[0] &= 127;
                        const s = y(t);
                        null == e.s ? e.s = s : e.s !== s && m.throwArgumentError("signature v mismatch _vs", "signature", r)
                    }
                    if (null == e.recoveryParam) null == e.v ? m.throwArgumentError("signature missing v and recoveryParam", "signature", r) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        const t = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== t && m.throwArgumentError("signature recoveryParam mismatch v", "signature", r)
                    }
                    null != e.r && P(e.r) ? e.r = G(e.r, 32) : m.throwArgumentError("signature missing or invalid r", "signature", r), null != e.s && P(e.s) ? e.s = G(e.s, 32) : m.throwArgumentError("signature missing or invalid s", "signature", r);
                    const t = O(e.s);
                    t[0] >= 128 && m.throwArgumentError("signature s out of range", "signature", r), e.recoveryParam && (t[0] |= 128);
                    const n = y(t);
                    e._vs && (P(e._vs) || m.throwArgumentError("signature invalid _vs", "signature", r), e._vs = G(e._vs, 32)), null == e._vs ? e._vs = n : e._vs !== n && m.throwArgumentError("signature _vs mismatch v and s", "signature", r)
                }
                return e
            }

            function W(r) {
                return y(v([(r = k(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        1702: function(r, e, t) {
            "use strict";
            t.d(e, "a", (function() {
                return L
            }));
            var n = t(13),
                o = t.n(n);
            let l = !1,
                E = !1;
            const c = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let h = c.default,
                N = null;
            const f = function() {
                try {
                    const r = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (e) {
                                r.push(form)
                            }
                        })), r.length) throw new Error("missing " + r.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (r) {
                    return r.message
                }
                return null
            }();
            var R, I;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(R || (R = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", r.ACTION_REJECTED = "ACTION_REJECTED"
            }(I || (I = {}));
            const m = "0123456789abcdef";
            class A {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, e) {
                    const t = r.toLowerCase();
                    null == c[t] && this.throwArgumentError("invalid log level name", "logLevel", r), h > c[t] || console.log.apply(console, e)
                }
                debug(...r) {
                    this._log(A.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(A.levels.INFO, r)
                }
                warn(...r) {
                    this._log(A.levels.WARNING, r)
                }
                makeError(r, code, e) {
                    if (E) return this.makeError("censored error", code, {});
                    code || (code = A.errors.UNKNOWN_ERROR), e || (e = {});
                    const t = [];
                    Object.keys(e).forEach((r => {
                        const n = e[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let e = "";
                                for (let i = 0; i < n.length; i++) e += m[n[i] >> 4], e += m[15 & n[i]];
                                t.push(r + "=Uint8Array(0x" + e + ")")
                            } else t.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(r + "=" + JSON.stringify(e[r].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = r;
                    let o = "";
                    switch (code) {
                        case I.NUMERIC_FAULT:
                            {
                                o = "NUMERIC_FAULT";
                                const e = r;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        o += "-" + e;
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
                        case I.CALL_EXCEPTION:
                        case I.INSUFFICIENT_FUNDS:
                        case I.MISSING_NEW:
                        case I.NONCE_EXPIRED:
                        case I.REPLACEMENT_UNDERPRICED:
                        case I.TRANSACTION_REPLACED:
                        case I.UNPREDICTABLE_GAS_LIMIT:
                            o = code
                    }
                    o && (r += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), t.length && (r += " (" + t.join(", ") + ")");
                    const l = new Error(r);
                    return l.reason = n, l.code = code, Object.keys(e).forEach((function(r) {
                        l[r] = e[r]
                    })), l
                }
                throwError(r, code, e) {
                    throw this.makeError(r, code, e)
                }
                throwArgumentError(r, e, t) {
                    return this.throwError(r, A.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: t
                    })
                }
                assert(r, e, code, t) {
                    r || this.throwError(e, code, t)
                }
                assertArgument(r, e, t, n) {
                    r || this.throwArgumentError(e, t, n)
                }
                checkNormalize(r) {
                    null == r && (r = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", A.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: f
                    })
                }
                checkSafeUint53(r, e) {
                    "number" == typeof r && (null == e && (e = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(e, A.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(e, A.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, e, t) {
                    t = t ? ": " + t : "", r < e && this.throwError("missing argument" + t, A.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    }), r > e && this.throwError("too many arguments" + t, A.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: e
                    })
                }
                checkNew(r, e) {
                    r !== Object && null != r || this.throwError("missing new", A.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(r, e) {
                    r === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", A.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", A.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return N || (N = new A("logger/5.7.0")), N
                }
                static setCensorship(r, e) {
                    if (!r && e && this.globalLogger().throwError("cannot permanently disable censorship", A.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), l) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", A.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    E = !!r, l = !!e
                }
                static setLogLevel(r) {
                    const e = c[r.toLowerCase()];
                    null != e ? h = e : A.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new A(r)
                }
            }
            A.errors = I, A.levels = R;
            const _ = new A("bytes/5.7.0");

            function U(r) {
                return !!r.toHexString
            }

            function T(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function w(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!T(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const e = r[i];
                    if (!T(e) || e < 0 || e >= 256) return !1
                }
                return !0
            }

            function O(r, e) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!e || r.length === 2 + 2 * e)
            }
            const v = "0123456789abcdef";

            function S(r, e) {
                if (e || (e = {}), "number" == typeof r) {
                    _.checkSafeUint53(r, "invalid hexlify value");
                    let e = "";
                    for (; r;) e = v[15 & r] + e, r = Math.floor(r / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (e.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), U(r)) return r.toHexString();
                if (O(r)) return r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : _.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (w(r)) {
                    let e = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let t = r[i];
                        e += v[(240 & t) >> 4] + v[15 & t]
                    }
                    return e
                }
                return _.throwArgumentError("invalid hexlify value", "value", r)
            }
            var C = o.a.BN;
            const P = new A("bignumber/5.5.0"),
                d = {},
                y = 9007199254740991;
            let D = !1;
            class L {
                constructor(r, e) {
                    P.checkNew(new.target, L), r !== d && P.throwError("cannot call constructor directly; use BigNumber.from", A.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(r) {
                    return F(x(this).fromTwos(r))
                }
                toTwos(r) {
                    return F(x(this).toTwos(r))
                }
                abs() {
                    return "-" === this._hex[0] ? L.from(this._hex.substring(1)) : this
                }
                add(r) {
                    return F(x(this).add(x(r)))
                }
                sub(r) {
                    return F(x(this).sub(x(r)))
                }
                div(r) {
                    return L.from(r).isZero() && G("division by zero", "div"), F(x(this).div(x(r)))
                }
                mul(r) {
                    return F(x(this).mul(x(r)))
                }
                mod(r) {
                    const e = x(r);
                    return e.isNeg() && G("cannot modulo negative values", "mod"), F(x(this).umod(e))
                }
                pow(r) {
                    const e = x(r);
                    return e.isNeg() && G("cannot raise to negative values", "pow"), F(x(this).pow(e))
                }
                and(r) {
                    const e = x(r);
                    return (this.isNegative() || e.isNeg()) && G("cannot 'and' negative values", "and"), F(x(this).and(e))
                }
                or(r) {
                    const e = x(r);
                    return (this.isNegative() || e.isNeg()) && G("cannot 'or' negative values", "or"), F(x(this).or(e))
                }
                xor(r) {
                    const e = x(r);
                    return (this.isNegative() || e.isNeg()) && G("cannot 'xor' negative values", "xor"), F(x(this).xor(e))
                }
                mask(r) {
                    return (this.isNegative() || r < 0) && G("cannot mask negative values", "mask"), F(x(this).maskn(r))
                }
                shl(r) {
                    return (this.isNegative() || r < 0) && G("cannot shift negative values", "shl"), F(x(this).shln(r))
                }
                shr(r) {
                    return (this.isNegative() || r < 0) && G("cannot shift negative values", "shr"), F(x(this).shrn(r))
                }
                eq(r) {
                    return x(this).eq(x(r))
                }
                lt(r) {
                    return x(this).lt(x(r))
                }
                lte(r) {
                    return x(this).lte(x(r))
                }
                gt(r) {
                    return x(this).gt(x(r))
                }
                gte(r) {
                    return x(this).gte(x(r))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return x(this).isZero()
                }
                toNumber() {
                    try {
                        return x(this).toNumber()
                    } catch (r) {
                        G("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (r) {}
                    return P.throwError("this platform does not support BigInt", A.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? D || (D = !0, P.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? P.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", A.errors.UNEXPECTED_ARGUMENT, {}) : P.throwError("BigNumber.toString does not accept parameters", A.errors.UNEXPECTED_ARGUMENT, {})), x(this).toString(10)
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
                    if (r instanceof L) return r;
                    if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new L(d, M(r)) : r.match(/^-?[0-9]+$/) ? new L(d, M(new C(r))) : P.throwArgumentError("invalid BigNumber string", "value", r);
                    if ("number" == typeof r) return r % 1 && G("underflow", "BigNumber.from", r), (r >= y || r <= -y) && G("overflow", "BigNumber.from", r), L.from(String(r));
                    const e = r;
                    if ("bigint" == typeof e) return L.from(e.toString());
                    if (w(e)) return L.from(S(e));
                    if (e)
                        if (e.toHexString) {
                            const r = e.toHexString();
                            if ("string" == typeof r) return L.from(r)
                        } else {
                            let r = e._hex;
                            if (null == r && "BigNumber" === e.type && (r = e.hex), "string" == typeof r && (O(r) || "-" === r[0] && O(r.substring(1)))) return L.from(r)
                        }
                    return P.throwArgumentError("invalid BigNumber value", "value", r)
                }
                static isBigNumber(r) {
                    return !(!r || !r._isBigNumber)
                }
            }

            function M(r) {
                if ("string" != typeof r) return M(r.toString(16));
                if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && P.throwArgumentError("invalid hex", "value", r), "0x00" === (r = M(r)) ? r : "-" + r;
                if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
                for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
                return r
            }

            function F(r) {
                return L.from(M(r))
            }

            function x(r) {
                const e = L.from(r).toHexString();
                return "-" === e[0] ? new C("-" + e.substring(3), 16) : new C(e.substring(2), 16)
            }

            function G(r, e, t) {
                const n = {
                    fault: r,
                    operation: e
                };
                return null != t && (n.value = t), P.throwError(r, A.errors.NUMERIC_FAULT, n)
            }
        }
    }
]);