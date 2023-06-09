/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [113], {
        151: function(e, r, t) {
            var n = t(33),
                o = n.Buffer;

            function c(e, r) {
                for (var t in e) r[t] = e[t]
            }

            function l(e, r, t) {
                return o(e, r, t)
            }
            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = n : (c(n, r), r.Buffer = l), l.prototype = Object.create(o.prototype), c(o, l), l.from = function(e, r, t) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return o(e, r, t)
            }, l.alloc = function(e, r, t) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var n = o(e);
                return void 0 !== r ? "string" == typeof t ? n.fill(r, t) : n.fill(r) : n.fill(0), n
            }, l.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return o(e)
            }, l.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        },
        1581: function(e, r) {
            const t = "Impossible case. Please create issue.",
                n = "The tweak was out of range or the resulted private key is invalid",
                o = "The tweak was out of range or equal to zero",
                c = "Unknow error on context randomization",
                l = "Private Key is invalid",
                f = "Public Key could not be parsed",
                w = "Public Key serialization error",
                y = "The sum of the public keys is not valid",
                h = "Signature could not be parsed",
                d = "The nonce generation function failed, or the private key was invalid",
                m = "Public key could not be recover",
                v = "Scalar was invalid (zero or overflow)";

            function k(e, r) {
                if (!e) throw new Error(r)
            }

            function E(e, r, t) {
                if (k(r instanceof Uint8Array, `Expected ${e} to be an Uint8Array`), void 0 !== t)
                    if (Array.isArray(t)) {
                        const n = `Expected ${e} to be an Uint8Array with length [${t.join(", ")}]`;
                        k(t.includes(r.length), n)
                    } else {
                        const n = `Expected ${e} to be an Uint8Array with length ${t}`;
                        k(r.length === t, n)
                    }
            }

            function A(e) {
                k("Boolean" === x(e), "Expected compressed to be a Boolean")
            }

            function K(output = (e => new Uint8Array(e)), e) {
                return "function" == typeof output && (output = output(e)), E("output", output, e), output
            }

            function x(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }
            e.exports = e => ({
                contextRandomize(r) {
                    if (k(null === r || r instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== r && E("seed", r, 32), 1 === e.contextRandomize(r)) throw new Error(c)
                },
                privateKeyVerify: r => (E("private key", r, 32), 0 === e.privateKeyVerify(r)),
                privateKeyNegate(r) {
                    switch (E("private key", r, 32), e.privateKeyNegate(r)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(t)
                    }
                },
                privateKeyTweakAdd(r, t) {
                    switch (E("private key", r, 32), E("tweak", t, 32), e.privateKeyTweakAdd(r, t)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(n)
                    }
                },
                privateKeyTweakMul(r, t) {
                    switch (E("private key", r, 32), E("tweak", t, 32), e.privateKeyTweakMul(r, t)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(o)
                    }
                },
                publicKeyVerify: r => (E("public key", r, [33, 65]), 0 === e.publicKeyVerify(r)),
                publicKeyCreate(r, t = !0, output) {
                    switch (E("private key", r, 32), A(t), output = K(output, t ? 33 : 65), e.publicKeyCreate(output, r)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(w)
                    }
                },
                publicKeyConvert(r, t = !0, output) {
                    switch (E("public key", r, [33, 65]), A(t), output = K(output, t ? 33 : 65), e.publicKeyConvert(output, r)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(w)
                    }
                },
                publicKeyNegate(r, n = !0, output) {
                    switch (E("public key", r, [33, 65]), A(n), output = K(output, n ? 33 : 65), e.publicKeyNegate(output, r)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(t);
                        case 3:
                            throw new Error(w)
                    }
                },
                publicKeyCombine(r, t = !0, output) {
                    k(Array.isArray(r), "Expected public keys to be an Array"), k(r.length > 0, "Expected public keys array will have more than zero items");
                    for (const e of r) E("public key", e, [33, 65]);
                    switch (A(t), output = K(output, t ? 33 : 65), e.publicKeyCombine(output, r)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(y);
                        case 3:
                            throw new Error(w)
                    }
                },
                publicKeyTweakAdd(r, t, o = !0, output) {
                    switch (E("public key", r, [33, 65]), E("tweak", t, 32), A(o), output = K(output, o ? 33 : 65), e.publicKeyTweakAdd(output, r, t)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(n)
                    }
                },
                publicKeyTweakMul(r, t, n = !0, output) {
                    switch (E("public key", r, [33, 65]), E("tweak", t, 32), A(n), output = K(output, n ? 33 : 65), e.publicKeyTweakMul(output, r, t)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(o)
                    }
                },
                signatureNormalize(r) {
                    switch (E("signature", r, 64), e.signatureNormalize(r)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(h)
                    }
                },
                signatureExport(r, output) {
                    E("signature", r, 64);
                    const n = {
                        output: output = K(output, 72),
                        outputlen: 72
                    };
                    switch (e.signatureExport(n, r)) {
                        case 0:
                            return output.slice(0, n.outputlen);
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(t)
                    }
                },
                signatureImport(r, output) {
                    switch (E("signature", r), output = K(output, 64), e.signatureImport(output, r)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(t)
                    }
                },
                ecdsaSign(r, n, o = {}, output) {
                    E("message", r, 32), E("private key", n, 32), k("Object" === x(o), "Expected options to be an Object"), void 0 !== o.data && E("options.data", o.data), void 0 !== o.noncefn && k("Function" === x(o.noncefn), "Expected options.noncefn to be a Function");
                    const c = {
                        signature: output = K(output, 64),
                        recid: null
                    };
                    switch (e.ecdsaSign(c, r, n, o.data, o.noncefn)) {
                        case 0:
                            return c;
                        case 1:
                            throw new Error(d);
                        case 2:
                            throw new Error(t)
                    }
                },
                ecdsaVerify(r, t, n) {
                    switch (E("signature", r, 64), E("message", t, 32), E("public key", n, [33, 65]), e.ecdsaVerify(r, t, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(f)
                    }
                },
                ecdsaRecover(r, n, o, c = !0, output) {
                    switch (E("signature", r, 64), k("Number" === x(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), E("message", o, 32), A(c), output = K(output, c ? 33 : 65), e.ecdsaRecover(output, r, n, o)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(m);
                        case 3:
                            throw new Error(t)
                    }
                },
                ecdh(r, t, n = {}, output) {
                    switch (E("public key", r, [33, 65]), E("private key", t, 32), k("Object" === x(n), "Expected options to be an Object"), void 0 !== n.data && E("options.data", n.data), void 0 !== n.hashfn ? (k("Function" === x(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && E("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && E("options.ybuf", n.ybuf, 32), E("output", output)) : output = K(output, 32), e.ecdh(output, r, t, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return output;
                        case 1:
                            throw new Error(f);
                        case 2:
                            throw new Error(v)
                    }
                }
            })
        },
        1582: function(e, r, t) {
            const n = new(0, t(407).ec)("secp256k1"),
                o = n.curve,
                c = o.n.constructor;

            function l(e) {
                const r = e[0];
                switch (r) {
                    case 2:
                    case 3:
                        return 33 !== e.length ? null : function(e, r) {
                            let t = new c(r);
                            if (t.cmp(o.p) >= 0) return null;
                            t = t.toRed(o.red);
                            let l = t.redSqr().redIMul(t).redIAdd(o.b).redSqrt();
                            return 3 === e !== l.isOdd() && (l = l.redNeg()), n.keyPair({
                                pub: {
                                    x: t,
                                    y: l
                                }
                            })
                        }(r, e.subarray(1, 33));
                    case 4:
                    case 6:
                    case 7:
                        return 65 !== e.length ? null : function(e, r, t) {
                            let l = new c(r),
                                f = new c(t);
                            if (l.cmp(o.p) >= 0 || f.cmp(o.p) >= 0) return null;
                            if (l = l.toRed(o.red), f = f.toRed(o.red), (6 === e || 7 === e) && f.isOdd() !== (7 === e)) return null;
                            const w = l.redSqr().redIMul(l);
                            return f.redSqr().redISub(w.redIAdd(o.b)).isZero() ? n.keyPair({
                                pub: {
                                    x: l,
                                    y: f
                                }
                            }) : null
                        }(r, e.subarray(1, 33), e.subarray(33, 65));
                    default:
                        return null
                }
            }

            function f(output, e) {
                const r = e.encode(null, 33 === output.length);
                for (let i = 0; i < output.length; ++i) output[i] = r[i]
            }
            e.exports = {
                contextRandomize: () => 0,
                privateKeyVerify(e) {
                    const r = new c(e);
                    return r.cmp(o.n) < 0 && !r.isZero() ? 0 : 1
                },
                privateKeyNegate(e) {
                    const r = new c(e),
                        t = o.n.sub(r).umod(o.n).toArrayLike(Uint8Array, "be", 32);
                    return e.set(t), 0
                },
                privateKeyTweakAdd(e, r) {
                    const t = new c(r);
                    if (t.cmp(o.n) >= 0) return 1;
                    if (t.iadd(new c(e)), t.cmp(o.n) >= 0 && t.isub(o.n), t.isZero()) return 1;
                    const n = t.toArrayLike(Uint8Array, "be", 32);
                    return e.set(n), 0
                },
                privateKeyTweakMul(e, r) {
                    let t = new c(r);
                    if (t.cmp(o.n) >= 0 || t.isZero()) return 1;
                    t.imul(new c(e)), t.cmp(o.n) >= 0 && (t = t.umod(o.n));
                    const n = t.toArrayLike(Uint8Array, "be", 32);
                    return e.set(n), 0
                },
                publicKeyVerify: e => null === l(e) ? 1 : 0,
                publicKeyCreate(output, e) {
                    const r = new c(e);
                    if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
                    return f(output, n.keyFromPrivate(e).getPublic()), 0
                },
                publicKeyConvert(output, e) {
                    const r = l(e);
                    if (null === r) return 1;
                    return f(output, r.getPublic()), 0
                },
                publicKeyNegate(output, e) {
                    const r = l(e);
                    if (null === r) return 1;
                    const t = r.getPublic();
                    return t.y = t.y.redNeg(), f(output, t), 0
                },
                publicKeyCombine(output, e) {
                    const r = new Array(e.length);
                    for (let i = 0; i < e.length; ++i)
                        if (r[i] = l(e[i]), null === r[i]) return 1;
                    let t = r[0].getPublic();
                    for (let i = 1; i < r.length; ++i) t = t.add(r[i].pub);
                    return t.isInfinity() ? 2 : (f(output, t), 0)
                },
                publicKeyTweakAdd(output, e, r) {
                    const t = l(e);
                    if (null === t) return 1;
                    if ((r = new c(r)).cmp(o.n) >= 0) return 2;
                    const n = t.getPublic().add(o.g.mul(r));
                    return n.isInfinity() ? 2 : (f(output, n), 0)
                },
                publicKeyTweakMul(output, e, r) {
                    const t = l(e);
                    if (null === t) return 1;
                    if ((r = new c(r)).cmp(o.n) >= 0 || r.isZero()) return 2;
                    return f(output, t.getPublic().mul(r)), 0
                },
                signatureNormalize(e) {
                    const r = new c(e.subarray(0, 32)),
                        s = new c(e.subarray(32, 64));
                    return r.cmp(o.n) >= 0 || s.cmp(o.n) >= 0 ? 1 : (1 === s.cmp(n.nh) && e.set(o.n.sub(s).toArrayLike(Uint8Array, "be", 32), 32), 0)
                },
                signatureExport(e, r) {
                    const t = r.subarray(0, 32),
                        n = r.subarray(32, 64);
                    if (new c(t).cmp(o.n) >= 0) return 1;
                    if (new c(n).cmp(o.n) >= 0) return 1;
                    const {
                        output: output
                    } = e;
                    let l = output.subarray(4, 37);
                    l[0] = 0, l.set(t, 1);
                    let f = 33,
                        w = 0;
                    for (; f > 1 && 0 === l[w] && !(128 & l[w + 1]); --f, ++w);
                    if (l = l.subarray(w), 128 & l[0]) return 1;
                    if (f > 1 && 0 === l[0] && !(128 & l[1])) return 1;
                    let s = output.subarray(39, 72);
                    s[0] = 0, s.set(n, 1);
                    let y = 33,
                        h = 0;
                    for (; y > 1 && 0 === s[h] && !(128 & s[h + 1]); --y, ++h);
                    return s = s.subarray(h), 128 & s[0] || y > 1 && 0 === s[0] && !(128 & s[1]) ? 1 : (e.outputlen = 6 + f + y, output[0] = 48, output[1] = e.outputlen - 2, output[2] = 2, output[3] = l.length, output.set(l, 4), output[4 + f] = 2, output[5 + f] = s.length, output.set(s, 6 + f), 0)
                },
                signatureImport(output, e) {
                    if (e.length < 8) return 1;
                    if (e.length > 72) return 1;
                    if (48 !== e[0]) return 1;
                    if (e[1] !== e.length - 2) return 1;
                    if (2 !== e[2]) return 1;
                    const r = e[3];
                    if (0 === r) return 1;
                    if (5 + r >= e.length) return 1;
                    if (2 !== e[4 + r]) return 1;
                    const t = e[5 + r];
                    if (0 === t) return 1;
                    if (6 + r + t !== e.length) return 1;
                    if (128 & e[4]) return 1;
                    if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
                    if (128 & e[r + 6]) return 1;
                    if (t > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
                    let n = e.subarray(4, 4 + r);
                    if (33 === n.length && 0 === n[0] && (n = n.subarray(1)), n.length > 32) return 1;
                    let l = e.subarray(6 + r);
                    if (33 === l.length && 0 === l[0] && (l = l.slice(1)), l.length > 32) throw new Error("S length is too long");
                    let f = new c(n);
                    f.cmp(o.n) >= 0 && (f = new c(0));
                    let s = new c(e.subarray(6 + r));
                    return s.cmp(o.n) >= 0 && (s = new c(0)), output.set(f.toArrayLike(Uint8Array, "be", 32), 0), output.set(s.toArrayLike(Uint8Array, "be", 32), 32), 0
                },
                ecdsaSign(e, r, t, data, l) {
                    if (l) {
                        const e = l;
                        l = n => {
                            const o = e(r, t, null, data, n);
                            if (!(o instanceof Uint8Array && 32 === o.length)) throw new Error("This is the way");
                            return new c(o)
                        }
                    }
                    const f = new c(t);
                    if (f.cmp(o.n) >= 0 || f.isZero()) return 1;
                    let w;
                    try {
                        w = n.sign(r, t, {
                            canonical: !0,
                            k: l,
                            pers: data
                        })
                    } catch (e) {
                        return 1
                    }
                    return e.signature.set(w.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(w.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = w.recoveryParam, 0
                },
                ecdsaVerify(e, r, t) {
                    const f = {
                            r: e.subarray(0, 32),
                            s: e.subarray(32, 64)
                        },
                        w = new c(f.r),
                        y = new c(f.s);
                    if (w.cmp(o.n) >= 0 || y.cmp(o.n) >= 0) return 1;
                    if (1 === y.cmp(n.nh) || w.isZero() || y.isZero()) return 3;
                    const h = l(t);
                    if (null === h) return 2;
                    const d = h.getPublic();
                    return n.verify(r, f, d) ? 0 : 3
                },
                ecdsaRecover(output, e, r, t) {
                    const l = {
                            r: e.slice(0, 32),
                            s: e.slice(32, 64)
                        },
                        w = new c(l.r),
                        y = new c(l.s);
                    if (w.cmp(o.n) >= 0 || y.cmp(o.n) >= 0) return 1;
                    if (w.isZero() || y.isZero()) return 2;
                    let h;
                    try {
                        h = n.recoverPubKey(t, l, r)
                    } catch (e) {
                        return 2
                    }
                    return f(output, h), 0
                },
                ecdh(output, e, r, data, t, f, w) {
                    const y = l(e);
                    if (null === y) return 1;
                    const h = new c(r);
                    if (h.cmp(o.n) >= 0 || h.isZero()) return 2;
                    const d = y.getPublic().mul(h);
                    if (void 0 === t) {
                        const data = d.encode(null, !0),
                            e = n.hash().update(data).digest();
                        for (let i = 0; i < 32; ++i) output[i] = e[i]
                    } else {
                        f || (f = new Uint8Array(32));
                        const e = d.getX().toArray("be", 32);
                        for (let i = 0; i < 32; ++i) f[i] = e[i];
                        w || (w = new Uint8Array(32));
                        const r = d.getY().toArray("be", 32);
                        for (let i = 0; i < 32; ++i) w[i] = r[i];
                        const n = t(f, w, data);
                        if (!(n instanceof Uint8Array && n.length === output.length)) return 2;
                        output.set(n)
                    }
                    return 0
                }
            }
        },
        1608: function(e, r, t) {
            const n = t(259),
                o = t(177);
            var c = "object" == typeof Reflect ? Reflect : null,
                l = c && "function" == typeof c.apply ? c.apply : function(e, r, t) {
                    return Function.prototype.apply.call(e, r, t)
                };

            function f() {
                o.call(this)
            }

            function w(e, r, t) {
                try {
                    l(e, r, t)
                } catch (e) {
                    setTimeout((() => {
                        throw e
                    }))
                }
            }

            function y(e, r) {
                for (var t = new Array(r), i = 0; i < r; ++i) t[i] = e[i];
                return t
            }
            e.exports = f, n.inherits(f, o), f.prototype.emit = function(e) {
                for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
                var t = "error" === e,
                    n = this._events;
                if (void 0 !== n) t = t && void 0 === n.error;
                else if (!t) return !1;
                if (t) {
                    var o;
                    if (r.length > 0 && (o = r[0]), o instanceof Error) throw o;
                    var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw c.context = o, c
                }
                var l = n[e];
                if (void 0 === l) return !1;
                if ("function" == typeof l) w(l, this, r);
                else {
                    var f = l.length,
                        h = y(l, f);
                    for (i = 0; i < f; ++i) w(h[i], this, r)
                }
                return !0
            }
        },
        1677: function(e, r, t) {
            (function(r) {
                ! function(t) {
                    "use strict";
                    var n = function(e) {
                        setTimeout(e, 0)
                    };
                    void 0 !== r && r && "function" == typeof r.nextTick && (n = r.nextTick), e.exports = function(e) {
                        var r = {
                            capacity: e || 1,
                            current: 0,
                            queue: [],
                            firstHere: !1,
                            take: function() {
                                if (!1 === r.firstHere) {
                                    r.current++, r.firstHere = !0;
                                    var e = 1
                                } else e = 0;
                                var t = {
                                    n: 1
                                };
                                "function" == typeof arguments[0] ? t.task = arguments[0] : t.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? t.task = arguments[1] : t.n = arguments[1]);
                                var n = t.task;
                                if (t.task = function() {
                                        n(r.leave)
                                    }, r.current + t.n - e > r.capacity) return 1 === e && (r.current--, r.firstHere = !1), r.queue.push(t);
                                r.current += t.n - e, t.task(r.leave), 1 === e && (r.firstHere = !1)
                            },
                            leave: function(e) {
                                if (e = e || 1, r.current -= e, r.queue.length) {
                                    var t = r.queue[0];
                                    t.n + r.current > r.capacity || (r.queue.shift(), r.current += t.n, n(t.task))
                                } else if (r.current < 0) throw new Error("leave called too many times.")
                            },
                            available: function(e) {
                                return e = e || 1, r.current + e <= r.capacity
                            }
                        };
                        return r
                    }
                }()
            }).call(this, t(67))
        },
        251: function(e, r, t) {
            "use strict";
            (function(r) {
                ! function(t) {
                    const n = 2147483647;

                    function o(e) {
                        const r = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
                        let t = 1779033703,
                            h1 = 3144134277,
                            h2 = 1013904242,
                            h3 = 2773480762,
                            h4 = 1359893119,
                            h5 = 2600822924,
                            h6 = 528734635,
                            n = 1541459225;
                        const o = new Uint32Array(64);

                        function c(p) {
                            let e = 0,
                                c = p.length;
                            for (; c >= 64;) {
                                let u, i, l, f, w, a = t,
                                    b = h1,
                                    y = h2,
                                    h = h3,
                                    d = h4,
                                    m = h5,
                                    g = h6,
                                    v = n;
                                for (i = 0; i < 16; i++) l = e + 4 * i, o[i] = (255 & p[l]) << 24 | (255 & p[l + 1]) << 16 | (255 & p[l + 2]) << 8 | 255 & p[l + 3];
                                for (i = 16; i < 64; i++) u = o[i - 2], f = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10, u = o[i - 15], w = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3, o[i] = (f + o[i - 7] | 0) + (w + o[i - 16] | 0) | 0;
                                for (i = 0; i < 64; i++) f = (((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & m ^ ~d & g) | 0) + (v + (r[i] + o[i] | 0) | 0) | 0, w = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & b ^ a & y ^ b & y) | 0, v = g, g = m, m = d, d = h + f | 0, h = y, y = b, b = a, a = f + w | 0;
                                t = t + a | 0, h1 = h1 + b | 0, h2 = h2 + y | 0, h3 = h3 + h | 0, h4 = h4 + d | 0, h5 = h5 + m | 0, h6 = h6 + g | 0, n = n + v | 0, e += 64, c -= 64
                            }
                        }
                        c(e);
                        let i, l = e.length % 64,
                            f = e.length / 536870912 | 0,
                            w = e.length << 3,
                            y = l < 56 ? 56 : 120,
                            p = e.slice(e.length - l, e.length);
                        for (p.push(128), i = l + 1; i < y; i++) p.push(0);
                        return p.push(f >>> 24 & 255), p.push(f >>> 16 & 255), p.push(f >>> 8 & 255), p.push(f >>> 0 & 255), p.push(w >>> 24 & 255), p.push(w >>> 16 & 255), p.push(w >>> 8 & 255), p.push(w >>> 0 & 255), c(p), [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, t >>> 0 & 255, h1 >>> 24 & 255, h1 >>> 16 & 255, h1 >>> 8 & 255, h1 >>> 0 & 255, h2 >>> 24 & 255, h2 >>> 16 & 255, h2 >>> 8 & 255, h2 >>> 0 & 255, h3 >>> 24 & 255, h3 >>> 16 & 255, h3 >>> 8 & 255, h3 >>> 0 & 255, h4 >>> 24 & 255, h4 >>> 16 & 255, h4 >>> 8 & 255, h4 >>> 0 & 255, h5 >>> 24 & 255, h5 >>> 16 & 255, h5 >>> 8 & 255, h5 >>> 0 & 255, h6 >>> 24 & 255, h6 >>> 16 & 255, h6 >>> 8 & 255, h6 >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255]
                    }

                    function c(e, r, t) {
                        e = e.length <= 64 ? e : o(e);
                        const n = 64 + r.length + 4,
                            c = new Array(n),
                            l = new Array(64);
                        let i, f = [];
                        for (i = 0; i < 64; i++) c[i] = 54;
                        for (i = 0; i < e.length; i++) c[i] ^= e[i];
                        for (i = 0; i < r.length; i++) c[64 + i] = r[i];
                        for (i = n - 4; i < n; i++) c[i] = 0;
                        for (i = 0; i < 64; i++) l[i] = 92;
                        for (i = 0; i < e.length; i++) l[i] ^= e[i];

                        function w() {
                            for (let i = n - 1; i >= n - 4; i--) {
                                if (c[i]++, c[i] <= 255) return;
                                c[i] = 0
                            }
                        }
                        for (; t >= 32;) w(), f = f.concat(o(l.concat(o(c)))), t -= 32;
                        return t > 0 && (w(), f = f.concat(o(l.concat(o(c))).slice(0, t))), f
                    }

                    function l(e, r, t, n, o) {
                        let i;
                        for (h(e, 16 * (2 * t - 1), o, 0, 16), i = 0; i < 2 * t; i++) y(e, 16 * i, o, 16), w(o, n), h(o, 0, e, r + 16 * i, 16);
                        for (i = 0; i < t; i++) h(e, r + 2 * i * 16, e, 16 * i, 16);
                        for (i = 0; i < t; i++) h(e, r + 16 * (2 * i + 1), e, 16 * (i + t), 16)
                    }

                    function f(a, b) {
                        return a << b | a >>> 32 - b
                    }

                    function w(e, r) {
                        h(e, 0, r, 0, 16);
                        for (let i = 8; i > 0; i -= 2) r[4] ^= f(r[0] + r[12], 7), r[8] ^= f(r[4] + r[0], 9), r[12] ^= f(r[8] + r[4], 13), r[0] ^= f(r[12] + r[8], 18), r[9] ^= f(r[5] + r[1], 7), r[13] ^= f(r[9] + r[5], 9), r[1] ^= f(r[13] + r[9], 13), r[5] ^= f(r[1] + r[13], 18), r[14] ^= f(r[10] + r[6], 7), r[2] ^= f(r[14] + r[10], 9), r[6] ^= f(r[2] + r[14], 13), r[10] ^= f(r[6] + r[2], 18), r[3] ^= f(r[15] + r[11], 7), r[7] ^= f(r[3] + r[15], 9), r[11] ^= f(r[7] + r[3], 13), r[15] ^= f(r[11] + r[7], 18), r[1] ^= f(r[0] + r[3], 7), r[2] ^= f(r[1] + r[0], 9), r[3] ^= f(r[2] + r[1], 13), r[0] ^= f(r[3] + r[2], 18), r[6] ^= f(r[5] + r[4], 7), r[7] ^= f(r[6] + r[5], 9), r[4] ^= f(r[7] + r[6], 13), r[5] ^= f(r[4] + r[7], 18), r[11] ^= f(r[10] + r[9], 7), r[8] ^= f(r[11] + r[10], 9), r[9] ^= f(r[8] + r[11], 13), r[10] ^= f(r[9] + r[8], 18), r[12] ^= f(r[15] + r[14], 7), r[13] ^= f(r[12] + r[15], 9), r[14] ^= f(r[13] + r[12], 13), r[15] ^= f(r[14] + r[13], 18);
                        for (let i = 0; i < 16; ++i) e[i] += r[i]
                    }

                    function y(e, r, t, n) {
                        for (let i = 0; i < n; i++) t[i] ^= e[r + i]
                    }

                    function h(e, r, t, n, o) {
                        for (; o--;) t[n++] = e[r++]
                    }

                    function d(e) {
                        if (!e || "number" != typeof e.length) return !1;
                        for (let i = 0; i < e.length; i++) {
                            const r = e[i];
                            if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1
                        }
                        return !0
                    }

                    function m(e, r) {
                        if ("number" != typeof e || e % 1) throw new Error("invalid " + r);
                        return e
                    }

                    function v(e, t, o, f, p, w, v) {
                        if (o = m(o, "N"), f = m(f, "r"), p = m(p, "p"), w = m(w, "dkLen"), 0 === o || 0 != (o & o - 1)) throw new Error("N must be power of 2");
                        if (o > n / 128 / f) throw new Error("N too large");
                        if (f > n / 128 / p) throw new Error("r too large");
                        if (!d(e)) throw new Error("password must be an array or buffer");
                        if (e = Array.prototype.slice.call(e), !d(t)) throw new Error("salt must be an array or buffer");
                        t = Array.prototype.slice.call(t);
                        let b = c(e, t, 128 * p * f);
                        const k = new Uint32Array(32 * p * f);
                        for (let i = 0; i < k.length; i++) {
                            const e = 4 * i;
                            k[i] = (255 & b[e + 3]) << 24 | (255 & b[e + 2]) << 16 | (255 & b[e + 1]) << 8 | (255 & b[e + 0]) << 0
                        }
                        const E = new Uint32Array(64 * f),
                            A = new Uint32Array(32 * f * o),
                            K = 32 * f,
                            x = new Uint32Array(16),
                            U = new Uint32Array(16),
                            T = p * o * 2;
                        let P, N, S = 0,
                            I = null,
                            Z = !1,
                            z = 0,
                            R = 0;
                        const C = v ? parseInt(1e3 / f) : 4294967295,
                            L = void 0 !== r ? r : setTimeout,
                            V = function() {
                                if (Z) return v(new Error("cancelled"), S / T);
                                let r;
                                switch (z) {
                                    case 0:
                                        N = 32 * R * f, h(k, N, E, 0, K), z = 1, P = 0;
                                    case 1:
                                        r = o - P, r > C && (r = C);
                                        for (let i = 0; i < r; i++) h(E, 0, A, (P + i) * K, K), l(E, K, f, x, U);
                                        if (P += r, S += r, v) {
                                            const e = parseInt(1e3 * S / T);
                                            if (e !== I) {
                                                if (Z = v(null, S / T), Z) break;
                                                I = e
                                            }
                                        }
                                        if (P < o) break;
                                        P = 0, z = 2;
                                    case 2:
                                        r = o - P, r > C && (r = C);
                                        for (let i = 0; i < r; i++) {
                                            const e = E[16 * (2 * f - 1)] & o - 1;
                                            y(A, e * K, E, K), l(E, K, f, x, U)
                                        }
                                        if (P += r, S += r, v) {
                                            const e = parseInt(1e3 * S / T);
                                            if (e !== I) {
                                                if (Z = v(null, S / T), Z) break;
                                                I = e
                                            }
                                        }
                                        if (P < o) break;
                                        if (h(E, 0, k, N, K), R++, R < p) {
                                            z = 0;
                                            break
                                        }
                                        b = [];
                                        for (let i = 0; i < k.length; i++) b.push(k[i] >> 0 & 255), b.push(k[i] >> 8 & 255), b.push(k[i] >> 16 & 255), b.push(k[i] >> 24 & 255);
                                        const t = c(e, b, w);
                                        return v && v(null, 1, t), t
                                }
                                v && L(V)
                            };
                        if (!v)
                            for (;;) {
                                const e = V();
                                if (null != e) return e
                            }
                        V()
                    }
                    const k = {
                        scrypt: function(e, r, t, n, p, o, c) {
                            return new Promise((function(l, f) {
                                let w = 0;
                                c && c(0), v(e, r, t, n, p, o, (function(e, progress, r) {
                                    if (e) f(e);
                                    else if (r) c && 1 !== w && c(1), l(new Uint8Array(r));
                                    else if (c && progress !== w) return w = progress, c(progress)
                                }))
                            }))
                        },
                        syncScrypt: function(e, r, t, n, p, o) {
                            return new Uint8Array(v(e, r, t, n, p, o))
                        }
                    };
                    e.exports = k
                }()
            }).call(this, t(551).setImmediate)
        },
        655: function(e, r, t) {
            e.exports = t(1581)(t(1582))
        }
    }
]);