(window.webpackJsonp = window.webpackJsonp || []).push([
    [62], {
        34: function(r, t, e) {
            "use strict";
            e.r(t), e.d(t, "getAddress", (function() {
                return H
            })), e.d(t, "isAddress", (function() {
                return J
            })), e.d(t, "getIcapAddress", (function() {
                return $
            })), e.d(t, "getContractAddress", (function() {
                return Z
            })), e.d(t, "getCreate2Address", (function() {
                return Q
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
            let c = l.default,
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
            var f, N;
            ! function(r) {
                r.DEBUG = "DEBUG", r.INFO = "INFO", r.WARNING = "WARNING", r.ERROR = "ERROR", r.OFF = "OFF"
            }(f || (f = {})),
            function(r) {
                r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", r.NETWORK_ERROR = "NETWORK_ERROR", r.SERVER_ERROR = "SERVER_ERROR", r.TIMEOUT = "TIMEOUT", r.BUFFER_OVERRUN = "BUFFER_OVERRUN", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.MISSING_NEW = "MISSING_NEW", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
            }(N || (N = {}));
            const A = "0123456789abcdef";
            class R {
                constructor(r) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    })
                }
                _log(r, t) {
                    const e = r.toLowerCase();
                    null == l[e] && this.throwArgumentError("invalid log level name", "logLevel", r), c > l[e] || console.log.apply(console, t)
                }
                debug(...r) {
                    this._log(R.levels.DEBUG, r)
                }
                info(...r) {
                    this._log(R.levels.INFO, r)
                }
                warn(...r) {
                    this._log(R.levels.WARNING, r)
                }
                makeError(r, code, t) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = R.errors.UNKNOWN_ERROR), t || (t = {});
                    const e = [];
                    Object.keys(t).forEach((r => {
                        const n = t[r];
                        try {
                            if (n instanceof Uint8Array) {
                                let t = "";
                                for (let i = 0; i < n.length; i++) t += A[n[i] >> 4], t += A[15 & n[i]];
                                e.push(r + "=Uint8Array(0x" + t + ")")
                            } else e.push(r + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(r + "=" + JSON.stringify(t[r].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = r;
                    let l = "";
                    switch (code) {
                        case N.NUMERIC_FAULT:
                            {
                                l = "NUMERIC_FAULT";
                                const t = r;
                                switch (t) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        l += "-" + t;
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
                        case N.CALL_EXCEPTION:
                        case N.INSUFFICIENT_FUNDS:
                        case N.MISSING_NEW:
                        case N.NONCE_EXPIRED:
                        case N.REPLACEMENT_UNDERPRICED:
                        case N.TRANSACTION_REPLACED:
                        case N.UNPREDICTABLE_GAS_LIMIT:
                            l = code
                    }
                    l && (r += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"), e.length && (r += " (" + e.join(", ") + ")");
                    const c = new Error(r);
                    return c.reason = n, c.code = code, Object.keys(t).forEach((function(r) {
                        c[r] = t[r]
                    })), c
                }
                throwError(r, code, t) {
                    throw this.makeError(r, code, t)
                }
                throwArgumentError(r, t, e) {
                    return this.throwError(r, R.errors.INVALID_ARGUMENT, {
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
                    null == r && (r = "platform missing String.prototype.normalize"), E && this.throwError("platform missing String.prototype.normalize", R.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: E
                    })
                }
                checkSafeUint53(r, t) {
                    "number" == typeof r && (null == t && (t = "value not safe"), (r < 0 || r >= 9007199254740991) && this.throwError(t, R.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }), r % 1 && this.throwError(t, R.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
                checkArgumentCount(r, t, e) {
                    e = e ? ": " + e : "", r < t && this.throwError("missing argument" + e, R.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }), r > t && this.throwError("too many arguments" + e, R.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
                checkNew(r, t) {
                    r !== Object && null != r || this.throwError("missing new", R.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                checkAbstract(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", R.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", R.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
                static globalLogger() {
                    return h || (h = new R("logger/5.6.0")), h
                }
                static setCensorship(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", R.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!r) return;
                        this.globalLogger().throwError("error censorship permanent", R.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r, n = !!t
                }
                static setLogLevel(r) {
                    const t = l[r.toLowerCase()];
                    null != t ? c = t : R.globalLogger().warn("invalid log level - " + r)
                }
                static from(r) {
                    return new R(r)
                }
            }
            R.errors = N, R.levels = f;
            const d = new R("bytes/5.6.1");

            function I(r) {
                return !!r.toHexString
            }

            function m(r) {
                return r.slice || (r.slice = function() {
                    const t = Array.prototype.slice.call(arguments);
                    return m(new Uint8Array(Array.prototype.slice.apply(r, t)))
                }), r
            }

            function w(r) {
                return S(r) && !(r.length % 2) || C(r)
            }

            function U(r) {
                return "number" == typeof r && r == r && r % 1 == 0
            }

            function C(r) {
                if (null == r) return !1;
                if (r.constructor === Uint8Array) return !0;
                if ("string" == typeof r) return !1;
                if (!U(r.length) || r.length < 0) return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = r[i];
                    if (!U(t) || t < 0 || t >= 256) return !1
                }
                return !0
            }

            function _(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    d.checkSafeUint53(r, "invalid arrayify value");
                    const t = [];
                    for (; r;) t.unshift(255 & r), r = parseInt(String(r / 256));
                    return 0 === t.length && t.push(0), m(new Uint8Array(t))
                }
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), I(r) && (r = r.toHexString()), S(r)) {
                    let e = r.substring(2);
                    e.length % 2 && ("left" === t.hexPad ? e = "0" + e : "right" === t.hexPad ? e += "0" : d.throwArgumentError("hex data is odd-length", "value", r));
                    const n = [];
                    for (let i = 0; i < e.length; i += 2) n.push(parseInt(e.substring(i, i + 2), 16));
                    return m(new Uint8Array(n))
                }
                return C(r) ? m(new Uint8Array(r)) : d.throwArgumentError("invalid arrayify value", "value", r)
            }

            function O(r) {
                const t = r.map((r => _(r))),
                    e = t.reduce(((r, t) => r + t.length), 0),
                    n = new Uint8Array(e);
                return t.reduce(((r, object) => (n.set(object, r), r + object.length)), 0), m(n)
            }

            function S(r, t) {
                return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
            }
            const T = "0123456789abcdef";

            function y(r, t) {
                if (t || (t = {}), "number" == typeof r) {
                    d.checkSafeUint53(r, "invalid hexlify value");
                    let t = "";
                    for (; r;) t = T[15 & r] + t, r = Math.floor(r / 16);
                    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
                }
                if ("bigint" == typeof r) return (r = r.toString(16)).length % 2 ? "0x0" + r : "0x" + r;
                if (t.allowMissingPrefix && "string" == typeof r && "0x" !== r.substring(0, 2) && (r = "0x" + r), I(r)) return r.toHexString();
                if (S(r)) return r.length % 2 && ("left" === t.hexPad ? r = "0x0" + r.substring(2) : "right" === t.hexPad ? r += "0" : d.throwArgumentError("hex data is odd-length", "value", r)), r.toLowerCase();
                if (C(r)) {
                    let t = "0x";
                    for (let i = 0; i < r.length; i++) {
                        let e = r[i];
                        t += T[(240 & e) >> 4] + T[15 & e]
                    }
                    return t
                }
                return d.throwArgumentError("invalid hexlify value", "value", r)
            }

            function P(data) {
                if ("string" != typeof data) data = y(data);
                else if (!S(data) || data.length % 2) return null;
                return (data.length - 2) / 2
            }

            function v(data, r, t) {
                return "string" != typeof data ? data = y(data) : (!S(data) || data.length % 2) && d.throwArgumentError("invalid hexData", "value", data), r = 2 + 2 * r, null != t ? "0x" + data.substring(r, 2 + 2 * t) : "0x" + data.substring(r)
            }
            var L = e(16),
                M = e(79),
                D = e.n(M);

            function x(data) {
                return "0x" + D.a.keccak_256(_(data))
            }
            const F = new R("rlp/5.6.0");

            function k(r) {
                const t = [];
                for (; r;) t.unshift(255 & r), r >>= 8;
                return t
            }

            function G(object) {
                if (Array.isArray(object)) {
                    let r = [];
                    if (object.forEach((function(t) {
                            r = r.concat(G(t))
                        })), r.length <= 55) return r.unshift(192 + r.length), r;
                    const t = k(r.length);
                    return t.unshift(247 + t.length), t.concat(r)
                }
                w(object) || F.throwArgumentError("RLP object must be BytesLike", "object", object);
                const data = Array.prototype.slice.call(_(object));
                if (1 === data.length && data[0] <= 127) return data;
                if (data.length <= 55) return data.unshift(128 + data.length), data;
                const r = k(data.length);
                return r.unshift(183 + r.length), r.concat(data)
            }

            function j(object) {
                return y(G(object))
            }
            const W = new R("address/5.6.0");

            function X(address) {
                S(address, 20) || W.throwArgumentError("invalid address", "address", address);
                const r = (address = address.toLowerCase()).substring(2).split(""),
                    t = new Uint8Array(40);
                for (let i = 0; i < 40; i++) t[i] = r[i].charCodeAt(0);
                const e = _(x(t));
                for (let i = 0; i < 40; i += 2) e[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()), (15 & e[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase());
                return "0x" + r.join("")
            }
            const z = {};
            for (let i = 0; i < 10; i++) z[String(i)] = String(i);
            for (let i = 0; i < 26; i++) z[String.fromCharCode(65 + i)] = String(10 + i);
            const B = Math.floor((K = 9007199254740991, Math.log10 ? Math.log10(K) : Math.log(K) / Math.LN10));
            var K;

            function V(address) {
                let r = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((r => z[r])).join("");
                for (; r.length >= B;) {
                    let t = r.substring(0, B);
                    r = parseInt(t, 10) % 97 + r.substring(t.length)
                }
                let t = String(98 - parseInt(r, 10) % 97);
                for (; t.length < 2;) t = "0" + t;
                return t
            }

            function H(address) {
                let r = null;
                if ("string" != typeof address && W.throwArgumentError("invalid address", "address", address), address.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== address.substring(0, 2) && (address = "0x" + address), r = X(address), address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== address && W.throwArgumentError("bad address checksum", "address", address);
                else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (address.substring(2, 4) !== V(address) && W.throwArgumentError("bad icap checksum", "address", address), r = Object(L.c)(address.substring(4)); r.length < 40;) r = "0" + r;
                    r = X("0x" + r)
                } else W.throwArgumentError("invalid address", "address", address);
                return r
            }

            function J(address) {
                try {
                    return H(address), !0
                } catch (r) {}
                return !1
            }

            function $(address) {
                let r = Object(L.b)(H(address).substring(2)).toUpperCase();
                for (; r.length < 30;) r = "0" + r;
                return "XE" + V("XE00" + r) + r
            }

            function Z(r) {
                let t = null;
                try {
                    t = H(r.from)
                } catch (t) {
                    W.throwArgumentError("missing from address", "transaction", r)
                }
                return H(v(x(j([t, function(r) {
                    let t = _(r);
                    if (0 === t.length) return t;
                    let e = 0;
                    for (; e < t.length && 0 === t[e];) e++;
                    return e && (t = t.slice(e)), t
                }(_(L.a.from(r.nonce).toHexString()))])), 12))
            }

            function Q(r, t, e) {
                return 32 !== P(t) && W.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== P(e) && W.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", e), H(v(x(O(["0xff", H(r), t, e])), 12))
            }
        }
    }
]);