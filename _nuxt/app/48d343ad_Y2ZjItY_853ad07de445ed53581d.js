(window.webpackJsonp = window.webpackJsonp || []).push([
    [63], {
        275: function(r, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return Ar
            })), e.d(t, "c", (function() {
                return Pr
            })), e.d(t, "e", (function() {
                return yr
            })), e.d(t, "b", (function() {
                return Lr
            })), e.d(t, "f", (function() {
                return Fr
            })), e.d(t, "d", (function() {
                return Gr
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
            let l = c.default,
                h = null;
            const E = function() {
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
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(f || (f = {}));
            const m = "0123456789abcdef";
            class d {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == c[e] && this.throwArgumentError("invalid log level name", "logLevel", r), l > c[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(d.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(d.levels.INFO, r)
                }
                warn(...r) {
                    this._log(d.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = d.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += m[n[i] >> 4], t += m[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let c = "";
                    switch (code) {
                        case f.NUMERIC_FAULT:
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
                        case f.CALL_EXCEPTION:
                        case f.INSUFFICIENT_FUNDS:
                        case f.MISSING_NEW:
                        case f.NONCE_EXPIRED:
                        case f.REPLACEMENT_UNDERPRICED:
                        case f.TRANSACTION_REPLACED:
                        case f.UNPREDICTABLE_GAS_LIMIT:
                            c = code
                    }
                    c && (r += " [ See: https://links.ethers.org/v5-errors-" + c + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const l = new Error(r);
                    return l.reason = n, l.code = code, Object.keys(t).forEach((function(r) {
                        l[r] = t[r]
                    })), l
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, d.errors.INVALID_ARGUMENT, {
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
                    null == r && (r = "platform missing String.prototype.normalize"), E && this.throwError("platform missing String.prototype.normalize", d.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: E
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, d.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, d.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, d.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, d.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", d.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", d.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return h || (h = new d("logger/5.6.0")), h
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", d.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", d.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = c[r.toLowerCase()];
                    null != t ? l = t : d.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new d(r)
                }
            }
            d.errors = f, d.levels = N;
            const R = new d("bytes/5.6.1");

            function I(r) {
                return !!r.toHexString
            }

            function O(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return O(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function w(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function A(r) {
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

            function U(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    R.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), O(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), I(r) && (r = r.toHexString()), T(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : R.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < e.length; i += 2) n.push(parseInt(e.substring(i, i + 2), 16));
                    return O(new Uint8Array(n))
                }
                return A(r) ? O(new Uint8Array(r)) : R.throwArgumentError("invalid arrayify value", "value", r)
            }

            function T(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            var _ = e(13),
                v = e.n(_);
            let P = !1,
                y = !1;
            const S = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let C = S.default,
                L = null;
            const x = function() {
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
            var M, D;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(M || (M = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(D || (D = {}));
            const F = "0123456789abcdef";
            class j {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == S[e] && this.throwArgumentError("invalid log level name", "logLevel", r), C > S[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(j.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(j.levels.INFO, r)
                }
                warn(...r) {
                    this._log(j.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (y) return this.makeError("censored error", code, {});
                    code || (code = j.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += F[n[i] >> 4], t += F[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let o = "";
                    switch (code) {
                        case D.NUMERIC_FAULT:
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
                        case D.CALL_EXCEPTION:
                        case D.INSUFFICIENT_FUNDS:
                        case D.MISSING_NEW:
                        case D.NONCE_EXPIRED:
                        case D.REPLACEMENT_UNDERPRICED:
                        case D.TRANSACTION_REPLACED:
                        case D.UNPREDICTABLE_GAS_LIMIT:
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
                    return this.throwError(r, j.errors.INVALID_ARGUMENT, {
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
                    null == r && (r = "platform missing String.prototype.normalize"), x && this.throwError("platform missing String.prototype.normalize", j.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: x
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, j.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, j.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, j.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, j.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", j.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", j.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", j.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return L || (L = new j("logger/5.6.0")), L
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", j.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), P) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", j.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    y = !!r, P = !!t
                }
                static setLogLevel(r) {
                    const t = S[r.toLowerCase()];
                    null != t ? C = t : j.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new j(r)
                }
            }
            j.errors = D, j.levels = M;
            const G = new j("bytes/5.6.1");

            function k(r) {
                return !!r.toHexString
            }

            function B(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function W(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!B(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!B(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function z(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            const X = "0123456789abcdef";

            function K(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    G.checkSafeUint53(r, "invalid hexlify value");
                    let t = "";
                    for (; r;) t = X[15 & r] + t, r = Math.floor(r / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), k(r)) return r.toHexString();
                if (z(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : G.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (W(r)) {
                    let t = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let e = r[i];
                        t += X[(240 & e) >> 4] + X[15 & e]
                    }
                    return t
                }
                return G.throwArgumentError("invalid hexlify value", "value", r)
            }
            var $ = v.a.BN;
            const V = new j("bignumber/5.6.0"),
                H = {},
                J = 9007199254740991;
            let Z = !1;
            class Q {
                constructor(r, t) {
                    V.checkNew(new.target, Q), r !== H && V.throwError("cannot call constructor directly; use BigNumber.from", j.errors.UNSUPPORTED_OPERATION, {
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
                    return V.throwError("this platform does not support BigInt", j.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? Z || (Z = !0, V.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? V.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", j.errors.UNEXPECTED_ARGUMENT, {}) : V.throwError("BigNumber.toString does not accept parameters", j.errors.UNEXPECTED_ARGUMENT, {})), er(this).toString(10)
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
                    if ("string" == typeof r) return r.match(/^-?0x[0-9a-f]+$/i) ? new Q(H, Y(r)) : r.match(/^-?[0-9]+$/) ? new Q(H, Y(new $(r))) : V.throwArgumentError("invalid BigNumber string", "value", r);
                    if ("number" == typeof r) return r % 1 && nr("underflow", "BigNumber.from", r), (r >= J || r <= -J) && nr("overflow", "BigNumber.from", r), Q.from(String(r));
                    const t = r;
                    if ("bigint" == typeof t) return Q.from(t.toString());
                    if (W(t)) return Q.from(K(t));
                    if (t)
                        if (t.toHexString) {
                            const r = t.toHexString();
                            if ("string" == typeof r) return Q.from(r)
                        } else {
                            let r = t._hex;
                            if (null == r && "BigNumber" === t.type && (r = t.hex), "string" == typeof r && (z(r) || "-" === r[0] && z(r.substring(1)))) return Q.from(r)
                        }
                    return V.throwArgumentError("invalid BigNumber value", "value", r)
                }
                static isBigNumber(r) {
                    return !(!r || !r._isBigNumber)
                }
            }

            function Y(r) {
                if ("string" != typeof r) return Y(r.toString(16));
                if ("-" === r[0]) return "-" === (r = r.substring(1))[0] && V.throwArgumentError("invalid hex", "value", r), "0x00" === (r = Y(r)) ? r : "-" + r;
                if ("0x" !== r.substring(0, 2) && (r = "0x" + r), "0x" === r) return "0x00";
                for (r.length % 2 && (r = "0x0" + r.substring(2)); r.length > 4 && "0x00" === r.substring(0, 4);) r = "0x" + r.substring(4);
                return r
            }

            function rr(r) {
                return Q.from(Y(r))
            }

            function er(r) {
                const t = Q.from(r).toHexString();
                return "-" === t[0] ? new $("-" + t.substring(3), 16) : new $(t.substring(2), 16)
            }

            function nr(r, t, e) {
                const n = {
                    fault: r,
                    operation: t
                };
                return null != e && (n.value = e), V.throwError(r, j.errors.NUMERIC_FAULT, n)
            }
            var or = e(79),
                sr = e.n(or);

            function ir(data) {
                return "0x" + sr.a.keccak_256(U(data))
            }
            new d("rlp/5.6.0");
            const ar = new d("address/5.6.0");

            function cr(address) {
                T(address, 20) || ar.throwArgumentError("invalid address", "address", address);
                const r = (address = address.toLowerCase()).substring(2).split(""),
                    t = new Uint8Array(40);
                for (let i = 0; i < 40; i++) t[i] = r[i].charCodeAt(0);
                const e = U(ir(t));
                for (let i = 0; i < 40; i += 2) e[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & e[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const ur = {};
            for (let i = 0; i < 10; i++) ur[String(i)] = String(i);
            for (let i = 0; i < 26; i++) ur[String.fromCharCode(65 + i)] = String(10 + i);
            const lr = Math.floor((gr = 9007199254740991, Math.log10 ? Math.log10(gr) : Math.log(gr) / Math.LN10));
            var gr;

            function Er(address) {
                let r = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((r => ur[r])).join("");
                for (; r.length >= lr;) {
                    let t = r.substring(0, lr);
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
                    for (address.substring(2, 4) !== Er(address) && ar.throwArgumentError("bad icap checksum", "address", address), t = address.substring(4), r = new $(t, 36).toString(16); r.length < 40;) r = "0" + r;
                    r = cr("0x" + r)
                } else ar.throwArgumentError("invalid address", "address", address);
                var t;
                return r
            }
            var fr = e(20),
                mr = e(1782),
                pr = e(292),
                dr = e(252),
                Rr = e(227),
                Ir = e(639),
                Or = e(74);
            const wr = new Or.a("transactions/5.5.0");
            var Ar;

            function Ur(r) {
                return "0x" === r ? null : Nr(r)
            }

            function Tr(r) {
                return "0x" === r ? mr.a : Q.from(r)
            }! function(r) {
                r[r.legacy = 0] = "legacy", r[r.eip2930 = 1] = "eip2930", r[r.eip1559 = 2] = "eip1559"
            }(Ar || (Ar = {}));
            const _r = [{
                    name: "nonce",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasPrice",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasLimit",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "to",
                    length: 20
                }, {
                    name: "value",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "data"
                }],
                vr = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function Pr(r) {
                const t = Object(Ir.a)(r);
                return Nr(Object(fr.d)(Object(pr.a)(Object(fr.d)(t, 1)), 12))
            }

            function yr(r, t) {
                return Pr(Object(Ir.b)(Object(fr.a)(r), t))
            }

            function Sr(r, t) {
                const e = Object(fr.k)(Q.from(r).toHexString());
                return e.length > 32 && wr.throwArgumentError("invalid length for " + t, "transaction:" + t, r), e
            }

            function Cr(r, t) {
                return {
                    address: Nr(r),
                    storageKeys: (t || []).map(((t, e) => (32 !== Object(fr.c)(t) && wr.throwArgumentError("invalid access list storageKey", `accessList[${r}:${e}]`, t), t.toLowerCase())))
                }
            }

            function Lr(r) {
                if (Array.isArray(r)) return r.map(((r, t) => Array.isArray(r) ? (r.length > 2 && wr.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, r), Cr(r[0], r[1])) : Cr(r.address, r.storageKeys)));
                const t = Object.keys(r).map((t => {
                    const e = r[t].reduce(((r, t) => (r[t] = !0, r)), {});
                    return Cr(t, Object.keys(e).sort())
                }));
                return t.sort(((a, b) => a.address.localeCompare(b.address))), t
            }

            function xr(r) {
                return Lr(r).map((r => [r.address, r.storageKeys]))
            }

            function Mr(r, t) {
                if (null != r.gasPrice) {
                    const t = Q.from(r.gasPrice),
                        e = Q.from(r.maxFeePerGas || 0);
                    t.eq(e) || wr.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: t,
                        maxFeePerGas: e
                    })
                }
                const e = [Sr(r.chainId || 0, "chainId"), Sr(r.nonce || 0, "nonce"), Sr(r.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Sr(r.maxFeePerGas || 0, "maxFeePerGas"), Sr(r.gasLimit || 0, "gasLimit"), null != r.to ? Nr(r.to) : "0x", Sr(r.value || 0, "value"), r.data || "0x", xr(r.accessList || [])];
                if (t) {
                    const r = Object(fr.j)(t);
                    e.push(Sr(r.recoveryParam, "recoveryParam")), e.push(Object(fr.k)(r.r)), e.push(Object(fr.k)(r.s))
                }
                return Object(fr.b)(["0x02", Rr.b(e)])
            }

            function Dr(r, t) {
                const e = [Sr(r.chainId || 0, "chainId"), Sr(r.nonce || 0, "nonce"), Sr(r.gasPrice || 0, "gasPrice"), Sr(r.gasLimit || 0, "gasLimit"), null != r.to ? Nr(r.to) : "0x", Sr(r.value || 0, "value"), r.data || "0x", xr(r.accessList || [])];
                if (t) {
                    const r = Object(fr.j)(t);
                    e.push(Sr(r.recoveryParam, "recoveryParam")), e.push(Object(fr.k)(r.r)), e.push(Object(fr.k)(r.s))
                }
                return Object(fr.b)(["0x01", Rr.b(e)])
            }

            function Fr(r, t) {
                if (null == r.type || 0 === r.type) return null != r.accessList && wr.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", r),
                    function(r, t) {
                        Object(dr.a)(r, vr);
                        const e = [];
                        _r.forEach((function(t) {
                            let n = r[t.name] || [];
                            const o = {};
                            t.numeric && (o.hexPad = "left"), n = Object(fr.a)(Object(fr.f)(n, o)), t.length && n.length !== t.length && n.length > 0 && wr.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = Object(fr.k)(n), n.length > t.maxLength && wr.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n)), e.push(Object(fr.f)(n))
                        }));
                        let n = 0;
                        if (null != r.chainId ? (n = r.chainId, "number" != typeof n && wr.throwArgumentError("invalid transaction.chainId", "transaction", r)) : t && !Object(fr.h)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (e.push(Object(fr.f)(n)), e.push("0x"), e.push("0x")), !t) return Rr.b(e);
                        const o = Object(fr.j)(t);
                        let c = 27 + o.recoveryParam;
                        return 0 !== n ? (e.pop(), e.pop(), e.pop(), c += 2 * n + 8, o.v > 28 && o.v !== c && wr.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : o.v !== c && wr.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), e.push(Object(fr.f)(c)), e.push(Object(fr.k)(Object(fr.a)(o.r))), e.push(Object(fr.k)(Object(fr.a)(o.s))), Rr.b(e)
                    }(r, t);
                switch (r.type) {
                    case 1:
                        return Dr(r, t);
                    case 2:
                        return Mr(r, t)
                }
                return wr.throwError(`unsupported transaction type: ${r.type}`, Or.a.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: r.type
                })
            }

            function jr(r, t, e) {
                try {
                    const e = Tr(t[0]).toNumber();
                    if (0 !== e && 1 !== e) throw new Error("bad recid");
                    r.v = e
                } catch (r) {
                    wr.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
                }
                r.r = Object(fr.e)(t[1], 32), r.s = Object(fr.e)(t[2], 32);
                try {
                    const t = Object(pr.a)(e(r));
                    r.from = yr(t, {
                        r: r.r,
                        s: r.s,
                        recoveryParam: r.v
                    })
                } catch (r) {
                    console.log(r)
                }
            }

            function Gr(r) {
                const t = Object(fr.a)(r);
                if (t[0] > 127) return function(r) {
                    const t = Rr.a(r);
                    9 !== t.length && 6 !== t.length && wr.throwArgumentError("invalid raw transaction", "rawTransaction", r);
                    const e = {
                        nonce: Tr(t[0]).toNumber(),
                        gasPrice: Tr(t[1]),
                        gasLimit: Tr(t[2]),
                        to: Ur(t[3]),
                        value: Tr(t[4]),
                        data: t[5],
                        chainId: 0
                    };
                    if (6 === t.length) return e;
                    try {
                        e.v = Q.from(t[6]).toNumber()
                    } catch (r) {
                        return console.log(r), e
                    }
                    if (e.r = Object(fr.e)(t[7], 32), e.s = Object(fr.e)(t[8], 32), Q.from(e.r).isZero() && Q.from(e.s).isZero()) e.chainId = e.v, e.v = 0;
                    else {
                        e.chainId = Math.floor((e.v - 35) / 2), e.chainId < 0 && (e.chainId = 0);
                        let n = e.v - 27;
                        const o = t.slice(0, 6);
                        0 !== e.chainId && (o.push(Object(fr.f)(e.chainId)), o.push("0x"), o.push("0x"), n -= 2 * e.chainId + 8);
                        const c = Object(pr.a)(Rr.b(o));
                        try {
                            e.from = yr(c, {
                                r: Object(fr.f)(e.r),
                                s: Object(fr.f)(e.s),
                                recoveryParam: n
                            })
                        } catch (r) {
                            console.log(r)
                        }
                        e.hash = Object(pr.a)(r)
                    }
                    return e.type = null, e
                }(t);
                switch (t[0]) {
                    case 1:
                        return function(r) {
                            const t = Rr.a(r.slice(1));
                            8 !== t.length && 11 !== t.length && wr.throwArgumentError("invalid component count for transaction type: 1", "payload", Object(fr.f)(r));
                            const e = {
                                type: 1,
                                chainId: Tr(t[0]).toNumber(),
                                nonce: Tr(t[1]).toNumber(),
                                gasPrice: Tr(t[2]),
                                gasLimit: Tr(t[3]),
                                to: Ur(t[4]),
                                value: Tr(t[5]),
                                data: t[6],
                                accessList: Lr(t[7])
                            };
                            return 8 === t.length || (e.hash = Object(pr.a)(r), jr(e, t.slice(8), Dr)), e
                        }(t);
                    case 2:
                        return function(r) {
                            const t = Rr.a(r.slice(1));
                            9 !== t.length && 12 !== t.length && wr.throwArgumentError("invalid component count for transaction type: 2", "payload", Object(fr.f)(r));
                            const e = Tr(t[2]),
                                n = Tr(t[3]),
                                o = {
                                    type: 2,
                                    chainId: Tr(t[0]).toNumber(),
                                    nonce: Tr(t[1]).toNumber(),
                                    maxPriorityFeePerGas: e,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: Tr(t[4]),
                                    to: Ur(t[5]),
                                    value: Tr(t[6]),
                                    data: t[7],
                                    accessList: Lr(t[8])
                                };
                            return 9 === t.length || (o.hash = Object(pr.a)(r), jr(o, t.slice(9), Mr)), o
                        }(t)
                }
                return wr.throwError(`unsupported transaction type: ${t[0]}`, Or.a.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: t[0]
                })
            }
        }
    }
]);