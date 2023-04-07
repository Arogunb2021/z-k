(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        1087: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return $
                }));
                var n = r(13),
                    f = r.n(n),
                    o = r(18),
                    d = r.n(o);
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

                function c(e, t, r) {
                    return r = {
                        path: t,
                        exports: {},
                        require: function(path, base) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == base && r.path)
                        }
                    }, e(r, r.exports), r.exports
                }
                var h = l;

                function l(e, t) {
                    if (!e) throw new Error(t || "Assertion failed")
                }
                l.equal = function(e, t, r) {
                    if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
                };
                var y = c((function(e, t) {
                        var r = t;

                        function n(e) {
                            return 1 === e.length ? "0" + e : e
                        }

                        function f(e) {
                            for (var t = "", i = 0; i < e.length; i++) t += n(e[i].toString(16));
                            return t
                        }
                        r.toArray = function(e, t) {
                            if (Array.isArray(e)) return e.slice();
                            if (!e) return [];
                            var r = [];
                            if ("string" != typeof e) {
                                for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
                                return r
                            }
                            if ("hex" === t) {
                                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                                for (i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                            } else
                                for (i = 0; i < e.length; i++) {
                                    var n = e.charCodeAt(i),
                                        f = n >> 8,
                                        o = 255 & n;
                                    f ? r.push(f, o) : r.push(o)
                                }
                            return r
                        }, r.zero2 = n, r.toHex = f, r.encode = function(e, t) {
                            return "hex" === t ? f(e) : e
                        }
                    })),
                    v = c((function(e, t) {
                        var r = t;
                        r.assert = h, r.toArray = y.toArray, r.zero2 = y.zero2, r.toHex = y.toHex, r.encode = y.encode, r.getNAF = function(e, t, r) {
                            var n = new Array(Math.max(e.bitLength(), r) + 1);
                            n.fill(0);
                            for (var f = 1 << t + 1, o = e.clone(), i = 0; i < n.length; i++) {
                                var d, c = o.andln(f - 1);
                                o.isOdd() ? (d = c > (f >> 1) - 1 ? (f >> 1) - c : c, o.isubn(d)) : d = 0, n[i] = d, o.iushrn(1)
                            }
                            return n
                        }, r.getJSF = function(e, t) {
                            var r = [
                                [],
                                []
                            ];
                            e = e.clone(), t = t.clone();
                            for (var n, f = 0, o = 0; e.cmpn(-f) > 0 || t.cmpn(-o) > 0;) {
                                var d, c, h = e.andln(3) + f & 3,
                                    l = t.andln(3) + o & 3;
                                3 === h && (h = -1), 3 === l && (l = -1), d = 0 == (1 & h) ? 0 : 3 !== (n = e.andln(7) + f & 7) && 5 !== n || 2 !== l ? h : -h, r[0].push(d), c = 0 == (1 & l) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== h ? l : -l, r[1].push(c), 2 * f === d + 1 && (f = 1 - f), 2 * o === c + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1)
                            }
                            return r
                        }, r.cachedProperty = function(e, t, r) {
                            var n = "_" + t;
                            e.prototype[t] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                            }
                        }, r.parseBytes = function(e) {
                            return "string" == typeof e ? r.toArray(e, "hex") : e
                        }, r.intFromLE = function(e) {
                            return new f.a(e, "hex", "le")
                        }
                    })),
                    m = v.getNAF,
                    w = v.getJSF,
                    A = v.assert;

                function x(e, t) {
                    this.type = e, this.p = new f.a(t.p, 16), this.red = t.prime ? f.a.red(t.prime) : f.a.mont(this.p), this.zero = new f.a(0).toRed(this.red), this.one = new f.a(1).toRed(this.red), this.two = new f.a(2).toRed(this.red), this.n = t.n && new f.a(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var r = this.n && this.p.div(this.n);
                    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var base = x;

                function I(e, t) {
                    this.curve = e, this.type = t, this.precomputed = null
                }
                x.prototype.point = function() {
                    throw new Error("Not implemented")
                }, x.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, x.prototype._fixedNafMul = function(p, e) {
                    A(p.precomputed);
                    var t = p._getDoubles(),
                        r = m(e, 1, this._bitLength),
                        n = (1 << t.step + 1) - (t.step % 2 == 0 ? 2 : 1);
                    n /= 3;
                    var f, o, d = [];
                    for (f = 0; f < r.length; f += t.step) {
                        o = 0;
                        for (var c = f + t.step - 1; c >= f; c--) o = (o << 1) + r[c];
                        d.push(o)
                    }
                    for (var a = this.jpoint(null, null, null), b = this.jpoint(null, null, null), i = n; i > 0; i--) {
                        for (f = 0; f < d.length; f++)(o = d[f]) === i ? b = b.mixedAdd(t.points[f]) : o === -i && (b = b.mixedAdd(t.points[f].neg()));
                        a = a.add(b)
                    }
                    return a.toP()
                }, x.prototype._wnafMul = function(p, e) {
                    var t = 4,
                        r = p._getNAFPoints(t);
                    t = r.wnd;
                    for (var n = r.points, f = m(e, t, this._bitLength), o = this.jpoint(null, null, null), i = f.length - 1; i >= 0; i--) {
                        for (var d = 0; i >= 0 && 0 === f[i]; i--) d++;
                        if (i >= 0 && d++, o = o.dblp(d), i < 0) break;
                        var c = f[i];
                        A(0 !== c), o = "affine" === p.type ? c > 0 ? o.mixedAdd(n[c - 1 >> 1]) : o.mixedAdd(n[-c - 1 >> 1].neg()) : c > 0 ? o.add(n[c - 1 >> 1]) : o.add(n[-c - 1 >> 1].neg())
                    }
                    return "affine" === p.type ? o.toP() : o
                }, x.prototype._wnafMulAdd = function(e, t, r, n, f) {
                    var i, o, p, d = this._wnafT1,
                        c = this._wnafT2,
                        h = this._wnafT3,
                        l = 0;
                    for (i = 0; i < n; i++) {
                        var y = (p = t[i])._getNAFPoints(e);
                        d[i] = y.wnd, c[i] = y.points
                    }
                    for (i = n - 1; i >= 1; i -= 2) {
                        var a = i - 1,
                            b = i;
                        if (1 === d[a] && 1 === d[b]) {
                            var v = [t[a], null, null, t[b]];
                            0 === t[a].y.cmp(t[b].y) ? (v[1] = t[a].add(t[b]), v[2] = t[a].toJ().mixedAdd(t[b].neg())) : 0 === t[a].y.cmp(t[b].y.redNeg()) ? (v[1] = t[a].toJ().mixedAdd(t[b]), v[2] = t[a].add(t[b].neg())) : (v[1] = t[a].toJ().mixedAdd(t[b]), v[2] = t[a].toJ().mixedAdd(t[b].neg()));
                            var A = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                x = w(r[a], r[b]);
                            for (l = Math.max(x[0].length, l), h[a] = new Array(l), h[b] = new Array(l), o = 0; o < l; o++) {
                                var I = 0 | x[0][o],
                                    S = 0 | x[1][o];
                                h[a][o] = A[3 * (I + 1) + (S + 1)], h[b][o] = 0, c[a] = v
                            }
                        } else h[a] = m(r[a], d[a], this._bitLength), h[b] = m(r[b], d[b], this._bitLength), l = Math.max(h[a].length, l), l = Math.max(h[b].length, l)
                    }
                    var O = this.jpoint(null, null, null),
                        E = this._wnafT4;
                    for (i = l; i >= 0; i--) {
                        for (var P = 0; i >= 0;) {
                            var j = !0;
                            for (o = 0; o < n; o++) E[o] = 0 | h[o][i], 0 !== E[o] && (j = !1);
                            if (!j) break;
                            P++, i--
                        }
                        if (i >= 0 && P++, O = O.dblp(P), i < 0) break;
                        for (o = 0; o < n; o++) {
                            var _ = E[o];
                            0 !== _ && (_ > 0 ? p = c[o][_ - 1 >> 1] : _ < 0 && (p = c[o][-_ - 1 >> 1].neg()), O = "affine" === p.type ? O.mixedAdd(p) : O.add(p))
                        }
                    }
                    for (i = 0; i < n; i++) c[i] = null;
                    return f ? O : O.toP()
                }, x.BasePoint = I, I.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, I.prototype.validate = function() {
                    return this.curve.validate(this)
                }, x.prototype.decodePoint = function(e, t) {
                    e = v.toArray(e, t);
                    var r = this.p.byteLength();
                    if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? A(e[e.length - 1] % 2 == 0) : 7 === e[0] && A(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                    if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                    throw new Error("Unknown point format")
                }, I.prototype.encodeCompressed = function(e) {
                    return this.encode(e, !0)
                }, I.prototype._encode = function(e) {
                    var t = this.curve.p.byteLength(),
                        r = this.getX().toArray("be", t);
                    return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
                }, I.prototype.encode = function(e, t) {
                    return v.encode(this._encode(t), e)
                }, I.prototype.precompute = function(e) {
                    if (this.precomputed) return this;
                    var t = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
                }, I.prototype._hasDoubles = function(e) {
                    if (!this.precomputed) return !1;
                    var t = this.precomputed.doubles;
                    return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
                }, I.prototype._getDoubles = function(e, t) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var r = [this], n = this, i = 0; i < t; i += e) {
                        for (var f = 0; f < e; f++) n = n.dbl();
                        r.push(n)
                    }
                    return {
                        step: e,
                        points: r
                    }
                }, I.prototype._getNAFPoints = function(e) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
                    return {
                        wnd: e,
                        points: t
                    }
                }, I.prototype._getBeta = function() {
                    return null
                }, I.prototype.dblp = function(e) {
                    for (var t = this, i = 0; i < e; i++) t = t.dbl();
                    return t
                };
                var S = c((function(e) {
                        "function" == typeof Object.create ? e.exports = function(e, t) {
                            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : e.exports = function(e, t) {
                            if (t) {
                                e.super_ = t;
                                var r = function() {};
                                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                            }
                        }
                    })),
                    O = v.assert;

                function E(e) {
                    base.call(this, "short", e), this.a = new f.a(e.a, 16).toRed(this.red), this.b = new f.a(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                S(E, base);
                var P = E;

                function j(e, t, r, n) {
                    base.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new f.a(t, 16), this.y = new f.a(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function _(e, t, r, n) {
                    base.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new f.a(0)) : (this.x = new f.a(t, 16), this.y = new f.a(r, 16), this.z = new f.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                E.prototype._getEndomorphism = function(e) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var t, r;
                        if (e.beta) t = new f.a(e.beta, 16).toRed(this.red);
                        else {
                            var n = this._getEndoRoots(this.p);
                            t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                        }
                        if (e.lambda) r = new f.a(e.lambda, 16);
                        else {
                            var o = this._getEndoRoots(this.n);
                            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], O(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                        }
                        return {
                            beta: t,
                            lambda: r,
                            basis: e.basis ? e.basis.map((function(e) {
                                return {
                                    a: new f.a(e.a, 16),
                                    b: new f.a(e.b, 16)
                                }
                            })) : this._getEndoBasis(r)
                        }
                    }
                }, E.prototype._getEndoRoots = function(e) {
                    var t = e === this.p ? this.red : f.a.mont(e),
                        r = new f.a(2).toRed(t).redInvm(),
                        n = r.redNeg(),
                        s = new f.a(3).toRed(t).redNeg().redSqrt().redMul(r);
                    return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()]
                }, E.prototype._getEndoBasis = function(e) {
                    for (var t, r, n, o, d, c, h, l, y, v = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, m = this.n.clone(), w = new f.a(1), A = new f.a(0), x = new f.a(0), I = new f.a(1), i = 0; 0 !== u.cmpn(0);) {
                        var q = m.div(u);
                        l = m.sub(q.mul(u)), y = x.sub(q.mul(w));
                        var S = I.sub(q.mul(A));
                        if (!n && l.cmp(v) < 0) t = h.neg(), r = w, n = l.neg(), o = y;
                        else if (n && 2 == ++i) break;
                        h = l, m = u, u = l, x = w, w = y, I = A, A = S
                    }
                    d = l.neg(), c = y;
                    var O = n.sqr().add(o.sqr());
                    return d.sqr().add(c.sqr()).cmp(O) >= 0 && (d = t, c = r), n.negative && (n = n.neg(), o = o.neg()), d.negative && (d = d.neg(), c = c.neg()), [{
                        a: n,
                        b: o
                    }, {
                        a: d,
                        b: c
                    }]
                }, E.prototype._endoSplit = function(e) {
                    var t = this.endo.basis,
                        r = t[0],
                        n = t[1],
                        f = n.b.mul(e).divRound(this.n),
                        o = r.b.neg().mul(e).divRound(this.n),
                        d = f.mul(r.a),
                        c = o.mul(n.a),
                        h = f.mul(r.b),
                        l = o.mul(n.b);
                    return {
                        k1: e.sub(d).sub(c),
                        k2: h.add(l).neg()
                    }
                }, E.prototype.pointFromX = function(e, t) {
                    (e = new f.a(e, 16)).red || (e = e.toRed(this.red));
                    var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                        n = r.redSqrt();
                    if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                    var o = n.fromRed().isOdd();
                    return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
                }, E.prototype.validate = function(e) {
                    if (e.inf) return !0;
                    var t = e.x,
                        r = e.y,
                        n = this.a.redMul(t),
                        f = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
                    return 0 === r.redSqr().redISub(f).cmpn(0)
                }, E.prototype._endoWnafMulAdd = function(e, t, r) {
                    for (var n = this._endoWnafT1, f = this._endoWnafT2, i = 0; i < e.length; i++) {
                        var o = this._endoSplit(t[i]),
                            p = e[i],
                            d = p._getBeta();
                        o.k1.negative && (o.k1.ineg(), p = p.neg(!0)), o.k2.negative && (o.k2.ineg(), d = d.neg(!0)), n[2 * i] = p, n[2 * i + 1] = d, f[2 * i] = o.k1, f[2 * i + 1] = o.k2
                    }
                    for (var c = this._wnafMulAdd(1, n, f, 2 * i, r), h = 0; h < 2 * i; h++) n[h] = null, f[h] = null;
                    return c
                }, S(j, base.BasePoint), E.prototype.point = function(e, t, r) {
                    return new j(this, e, t, r)
                }, E.prototype.pointFromJSON = function(e, t) {
                    return j.fromJSON(this, e, t)
                }, j.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var pre = this.precomputed;
                        if (pre && pre.beta) return pre.beta;
                        var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (pre) {
                            var t = this.curve,
                                r = function(p) {
                                    return t.point(p.x.redMul(t.endo.beta), p.y)
                                };
                            pre.beta = e, e.precomputed = {
                                beta: null,
                                naf: pre.naf && {
                                    wnd: pre.naf.wnd,
                                    points: pre.naf.points.map(r)
                                },
                                doubles: pre.doubles && {
                                    step: pre.doubles.step,
                                    points: pre.doubles.points.map(r)
                                }
                            }
                        }
                        return e
                    }
                }, j.prototype.toJSON = function() {
                    return this.precomputed ? [this.x, this.y, this.precomputed && {
                        doubles: this.precomputed.doubles && {
                            step: this.precomputed.doubles.step,
                            points: this.precomputed.doubles.points.slice(1)
                        },
                        naf: this.precomputed.naf && {
                            wnd: this.precomputed.naf.wnd,
                            points: this.precomputed.naf.points.slice(1)
                        }
                    }] : [this.x, this.y]
                }, j.fromJSON = function(e, t, r) {
                    "string" == typeof t && (t = JSON.parse(t));
                    var n = e.point(t[0], t[1], r);
                    if (!t[2]) return n;

                    function f(t) {
                        return e.point(t[0], t[1], r)
                    }
                    var pre = t[2];
                    return n.precomputed = {
                        beta: null,
                        doubles: pre.doubles && {
                            step: pre.doubles.step,
                            points: [n].concat(pre.doubles.points.map(f))
                        },
                        naf: pre.naf && {
                            wnd: pre.naf.wnd,
                            points: [n].concat(pre.naf.points.map(f))
                        }
                    }, n
                }, j.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, j.prototype.isInfinity = function() {
                    return this.inf
                }, j.prototype.add = function(p) {
                    if (this.inf) return p;
                    if (p.inf) return this;
                    if (this.eq(p)) return this.dbl();
                    if (this.neg().eq(p)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(p.x)) return this.curve.point(null, null);
                    var e = this.y.redSub(p.y);
                    0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(p.x).redInvm()));
                    var t = e.redSqr().redISub(this.x).redISub(p.x),
                        r = e.redMul(this.x.redSub(t)).redISub(this.y);
                    return this.curve.point(t, r)
                }, j.prototype.dbl = function() {
                    if (this.inf) return this;
                    var e = this.y.redAdd(this.y);
                    if (0 === e.cmpn(0)) return this.curve.point(null, null);
                    var a = this.curve.a,
                        t = this.x.redSqr(),
                        r = e.redInvm(),
                        n = t.redAdd(t).redIAdd(t).redIAdd(a).redMul(r),
                        f = n.redSqr().redISub(this.x.redAdd(this.x)),
                        o = n.redMul(this.x.redSub(f)).redISub(this.y);
                    return this.curve.point(f, o)
                }, j.prototype.getX = function() {
                    return this.x.fromRed()
                }, j.prototype.getY = function() {
                    return this.y.fromRed()
                }, j.prototype.mul = function(e) {
                    return e = new f.a(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
                }, j.prototype.mulAdd = function(e, t, r) {
                    var n = [this, t],
                        f = [e, r];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f) : this.curve._wnafMulAdd(1, n, f, 2)
                }, j.prototype.jmulAdd = function(e, t, r) {
                    var n = [this, t],
                        f = [e, r];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f, !0) : this.curve._wnafMulAdd(1, n, f, 2, !0)
                }, j.prototype.eq = function(p) {
                    return this === p || this.inf === p.inf && (this.inf || 0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))
                }, j.prototype.neg = function(e) {
                    if (this.inf) return this;
                    var t = this.curve.point(this.x, this.y.redNeg());
                    if (e && this.precomputed) {
                        var pre = this.precomputed,
                            r = function(p) {
                                return p.neg()
                            };
                        t.precomputed = {
                            naf: pre.naf && {
                                wnd: pre.naf.wnd,
                                points: pre.naf.points.map(r)
                            },
                            doubles: pre.doubles && {
                                step: pre.doubles.step,
                                points: pre.doubles.points.map(r)
                            }
                        }
                    }
                    return t
                }, j.prototype.toJ = function() {
                    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                }, S(_, base.BasePoint), E.prototype.jpoint = function(e, t, r) {
                    return new _(this, e, t, r)
                }, _.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var e = this.z.redInvm(),
                        t = e.redSqr(),
                        r = this.x.redMul(t),
                        n = this.y.redMul(t).redMul(e);
                    return this.curve.point(r, n)
                }, _.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, _.prototype.add = function(p) {
                    if (this.isInfinity()) return p;
                    if (p.isInfinity()) return this;
                    var e = p.z.redSqr(),
                        t = this.z.redSqr(),
                        r = this.x.redMul(e),
                        n = p.x.redMul(t),
                        f = this.y.redMul(e.redMul(p.z)),
                        o = p.y.redMul(t.redMul(this.z)),
                        d = r.redSub(n),
                        c = f.redSub(o);
                    if (0 === d.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = d.redSqr(),
                        h3 = h2.redMul(d),
                        h = r.redMul(h2),
                        l = c.redSqr().redIAdd(h3).redISub(h).redISub(h),
                        y = c.redMul(h.redISub(l)).redISub(f.redMul(h3)),
                        v = this.z.redMul(p.z).redMul(d);
                    return this.curve.jpoint(l, y, v)
                }, _.prototype.mixedAdd = function(p) {
                    if (this.isInfinity()) return p.toJ();
                    if (p.isInfinity()) return this;
                    var e = this.z.redSqr(),
                        t = this.x,
                        r = p.x.redMul(e),
                        n = this.y,
                        f = p.y.redMul(e).redMul(this.z),
                        o = t.redSub(r),
                        d = n.redSub(f);
                    if (0 === o.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = o.redSqr(),
                        h3 = h2.redMul(o),
                        c = t.redMul(h2),
                        h = d.redSqr().redIAdd(h3).redISub(c).redISub(c),
                        l = d.redMul(c.redISub(h)).redISub(n.redMul(h3)),
                        y = this.z.redMul(o);
                    return this.curve.jpoint(h, l, y)
                }, _.prototype.dblp = function(e) {
                    if (0 === e) return this;
                    if (this.isInfinity()) return this;
                    if (!e) return this.dbl();
                    var i;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var t = this;
                        for (i = 0; i < e; i++) t = t.dbl();
                        return t
                    }
                    var a = this.curve.a,
                        r = this.curve.tinv,
                        n = this.x,
                        f = this.y,
                        o = this.z,
                        d = o.redSqr().redSqr(),
                        c = f.redAdd(f);
                    for (i = 0; i < e; i++) {
                        var h = n.redSqr(),
                            l = c.redSqr(),
                            y = l.redSqr(),
                            v = h.redAdd(h).redIAdd(h).redIAdd(a.redMul(d)),
                            m = n.redMul(l),
                            w = v.redSqr().redISub(m.redAdd(m)),
                            A = m.redISub(w),
                            x = v.redMul(A);
                        x = x.redIAdd(x).redISub(y);
                        var I = c.redMul(o);
                        i + 1 < e && (d = d.redMul(y)), n = w, o = I, c = x
                    }
                    return this.curve.jpoint(n, c.redMul(r), o)
                }, _.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, _.prototype._zeroDbl = function() {
                    var e, t, r;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            o = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var d = n.redAdd(n).redIAdd(n),
                            c = d.redSqr().redISub(s).redISub(s),
                            h = o.redIAdd(o);
                        h = (h = h.redIAdd(h)).redIAdd(h), e = c, t = d.redMul(s.redISub(c)).redISub(h), r = this.y.redAdd(this.y)
                    } else {
                        var a = this.x.redSqr(),
                            b = this.y.redSqr(),
                            l = b.redSqr(),
                            y = this.x.redAdd(b).redSqr().redISub(a).redISub(l);
                        y = y.redIAdd(y);
                        var v = a.redAdd(a).redIAdd(a),
                            m = v.redSqr(),
                            w = l.redIAdd(l);
                        w = (w = w.redIAdd(w)).redIAdd(w), e = m.redISub(y).redISub(y), t = v.redMul(y.redISub(e)).redISub(w), r = (r = this.y.redMul(this.z)).redIAdd(r)
                    }
                    return this.curve.jpoint(e, t, r)
                }, _.prototype._threeDbl = function() {
                    var e, t, r;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            o = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var d = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            c = d.redSqr().redISub(s).redISub(s);
                        e = c;
                        var h = o.redIAdd(o);
                        h = (h = h.redIAdd(h)).redIAdd(h), t = d.redMul(s.redISub(c)).redISub(h), r = this.y.redAdd(this.y)
                    } else {
                        var l = this.z.redSqr(),
                            y = this.y.redSqr(),
                            v = this.x.redMul(y),
                            m = this.x.redSub(l).redMul(this.x.redAdd(l));
                        m = m.redAdd(m).redIAdd(m);
                        var w = v.redIAdd(v),
                            A = (w = w.redIAdd(w)).redAdd(w);
                        e = m.redSqr().redISub(A), r = this.y.redAdd(this.z).redSqr().redISub(y).redISub(l);
                        var x = y.redSqr();
                        x = (x = (x = x.redIAdd(x)).redIAdd(x)).redIAdd(x), t = m.redMul(w.redISub(e)).redISub(x)
                    }
                    return this.curve.jpoint(e, t, r)
                }, _.prototype._dbl = function() {
                    var a = this.curve.a,
                        e = this.x,
                        t = this.y,
                        r = this.z,
                        n = r.redSqr().redSqr(),
                        f = e.redSqr(),
                        o = t.redSqr(),
                        d = f.redAdd(f).redIAdd(f).redIAdd(a.redMul(n)),
                        c = e.redAdd(e),
                        h = (c = c.redIAdd(c)).redMul(o),
                        l = d.redSqr().redISub(h.redAdd(h)),
                        y = h.redISub(l),
                        v = o.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var m = d.redMul(y).redISub(v),
                        w = t.redAdd(t).redMul(r);
                    return this.curve.jpoint(l, m, w)
                }, _.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = this.z.redSqr(),
                        n = t.redSqr(),
                        f = e.redAdd(e).redIAdd(e),
                        o = f.redSqr(),
                        d = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                        c = (d = (d = (d = d.redIAdd(d)).redAdd(d).redIAdd(d)).redISub(o)).redSqr(),
                        h = n.redIAdd(n);
                    h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                    var u = f.redIAdd(d).redSqr().redISub(o).redISub(c).redISub(h),
                        l = t.redMul(u);
                    l = (l = l.redIAdd(l)).redIAdd(l);
                    var y = this.x.redMul(c).redISub(l);
                    y = (y = y.redIAdd(y)).redIAdd(y);
                    var v = this.y.redMul(u.redMul(h.redISub(u)).redISub(d.redMul(c)));
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var m = this.z.redAdd(d).redSqr().redISub(r).redISub(c);
                    return this.curve.jpoint(y, v, m)
                }, _.prototype.mul = function(e, t) {
                    return e = new f.a(e, t), this.curve._wnafMul(this, e)
                }, _.prototype.eq = function(p) {
                    if ("affine" === p.type) return this.eq(p.toJ());
                    if (this === p) return !0;
                    var e = this.z.redSqr(),
                        t = p.z.redSqr();
                    if (0 !== this.x.redMul(t).redISub(p.x.redMul(e)).cmpn(0)) return !1;
                    var r = e.redMul(this.z),
                        n = t.redMul(p.z);
                    return 0 === this.y.redMul(n).redISub(p.y.redMul(r)).cmpn(0)
                }, _.prototype.eqXToP = function(e) {
                    var t = this.z.redSqr(),
                        r = e.toRed(this.curve.red).redMul(t);
                    if (0 === this.x.cmp(r)) return !0;
                    for (var n = e.clone(), f = this.curve.redN.redMul(t);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (r.redIAdd(f), 0 === this.x.cmp(r)) return !0
                    }
                }, _.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, _.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var B = c((function(e, t) {
                        var r = t;
                        r.base = base, r.short = P, r.mont = null, r.edwards = null
                    })),
                    F = c((function(e, t) {
                        var pre, r = t,
                            n = v.assert;

                        function f(e) {
                            "short" === e.type ? this.curve = new B.short(e) : "edwards" === e.type ? this.curve = new B.edwards(e) : this.curve = new B.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function o(e, t) {
                            Object.defineProperty(r, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var n = new f(t);
                                    return Object.defineProperty(r, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: n
                                    }), n
                                }
                            })
                        }
                        r.PresetCurve = f, o("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: d.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), o("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: d.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), o("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: d.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), o("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: d.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), o("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: d.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), o("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: d.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), o("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: d.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            pre = null.crash()
                        } catch (e) {
                            pre = void 0
                        }
                        o("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: d.a.sha256,
                            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                            basis: [{
                                a: "3086d221a7d46bcde86c90e49284eb15",
                                b: "-e4437ed6010e88286f547fa90abfe4c3"
                            }, {
                                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                                b: "3086d221a7d46bcde86c90e49284eb15"
                            }],
                            gRed: !1,
                            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", pre]
                        })
                    }));

                function M(e) {
                    if (!(this instanceof M)) return new M(e);
                    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var t = y.toArray(e.entropy, e.entropyEnc || "hex"),
                        r = y.toArray(e.nonce, e.nonceEnc || "hex"),
                        n = y.toArray(e.pers, e.persEnc || "hex");
                    h(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
                }
                var N = M;
                M.prototype._init = function(e, t, r) {
                    var n = e.concat(t).concat(r);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, M.prototype._hmac = function() {
                    return new d.a.hmac(this.hash, this.K)
                }, M.prototype._update = function(e) {
                    var t = this._hmac().update(this.V).update([0]);
                    e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
                }, M.prototype.reseed = function(e, t, r, n) {
                    "string" != typeof t && (n = r, r = t, t = null), e = y.toArray(e, t), r = y.toArray(r, n), h(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
                }, M.prototype.generate = function(e, t, r, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" != typeof t && (n = r, r = t, t = null), r && (r = y.toArray(r, n || "hex"), this._update(r));
                    for (var f = []; f.length < e;) this.V = this._hmac().update(this.V).digest(), f = f.concat(this.V);
                    var o = f.slice(0, e);
                    return this._update(r), this._reseed++, y.encode(o, t)
                };
                var R = v.assert;

                function k(e, t) {
                    this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
                }
                var C = k;
                k.fromPublic = function(e, t, r) {
                    return t instanceof k ? t : new k(e, {
                        pub: t,
                        pubEnc: r
                    })
                }, k.fromPrivate = function(e, t, r) {
                    return t instanceof k ? t : new k(e, {
                        priv: t,
                        privEnc: r
                    })
                }, k.prototype.validate = function() {
                    var e = this.getPublic();
                    return e.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
                }, k.prototype.getPublic = function(e, t) {
                    return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
                }, k.prototype.getPrivate = function(e) {
                    return "hex" === e ? this.priv.toString(16, 2) : this.priv
                }, k.prototype._importPrivate = function(e, t) {
                    this.priv = new f.a(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, k.prototype._importPublic = function(e, t) {
                    if (e.x || e.y) return "mont" === this.ec.curve.type ? R(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || R(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                    this.pub = this.ec.curve.decodePoint(e, t)
                }, k.prototype.derive = function(e) {
                    return e.validate() || R(e.validate(), "public point not validated"), e.mul(this.priv).getX()
                }, k.prototype.sign = function(e, t, r) {
                    return this.ec.sign(e, this, t, r)
                }, k.prototype.verify = function(e, t) {
                    return this.ec.verify(e, t, this)
                }, k.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var L = v.assert;

                function z(e, t) {
                    if (e instanceof z) return e;
                    this._importDER(e, t) || (L(e.r && e.s, "Signature without r or s"), this.r = new f.a(e.r, 16), this.s = new f.a(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
                }
                var T = z;

                function D() {
                    this.place = 0
                }

                function U(e, p) {
                    var t = e[p.place++];
                    if (!(128 & t)) return t;
                    var r = 15 & t;
                    if (0 === r || r > 4) return !1;
                    for (var n = 0, i = 0, f = p.place; i < r; i++, f++) n <<= 8, n |= e[f], n >>>= 0;
                    return !(n <= 127) && (p.place = f, n)
                }

                function K(e) {
                    for (var i = 0, t = e.length - 1; !e[i] && !(128 & e[i + 1]) && i < t;) i++;
                    return 0 === i ? e : e.slice(i)
                }

                function G(e, t) {
                    if (t < 128) e.push(t);
                    else {
                        var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                        for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                        e.push(t)
                    }
                }
                z.prototype._importDER = function(data, e) {
                    data = v.toArray(data, e);
                    var p = new D;
                    if (48 !== data[p.place++]) return !1;
                    var t = U(data, p);
                    if (!1 === t) return !1;
                    if (t + p.place !== data.length) return !1;
                    if (2 !== data[p.place++]) return !1;
                    var r = U(data, p);
                    if (!1 === r) return !1;
                    var n = data.slice(p.place, r + p.place);
                    if (p.place += r, 2 !== data[p.place++]) return !1;
                    var o = U(data, p);
                    if (!1 === o) return !1;
                    if (data.length !== o + p.place) return !1;
                    var s = data.slice(p.place, o + p.place);
                    if (0 === n[0]) {
                        if (!(128 & n[1])) return !1;
                        n = n.slice(1)
                    }
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    return this.r = new f.a(n), this.s = new f.a(s), this.recoveryParam = null, !0
                }, z.prototype.toDER = function(e) {
                    var t = this.r.toArray(),
                        s = this.s.toArray();
                    for (128 & t[0] && (t = [0].concat(t)), 128 & s[0] && (s = [0].concat(s)), t = K(t), s = K(s); !(s[0] || 128 & s[1]);) s = s.slice(1);
                    var r = [2];
                    G(r, t.length), (r = r.concat(t)).push(2), G(r, s.length);
                    var n = r.concat(s),
                        f = [48];
                    return G(f, n.length), f = f.concat(n), v.encode(f, e)
                };
                var J = function() {
                        throw new Error("unsupported")
                    },
                    V = v.assert;

                function X(e) {
                    if (!(this instanceof X)) return new X(e);
                    "string" == typeof e && (V(Object.prototype.hasOwnProperty.call(F, e), "Unknown curve " + e), e = F[e]), e instanceof F.PresetCurve && (e = {
                        curve: e
                    }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
                }
                var Z = X;
                X.prototype.keyPair = function(e) {
                    return new C(this, e)
                }, X.prototype.keyFromPrivate = function(e, t) {
                    return C.fromPrivate(this, e, t)
                }, X.prototype.keyFromPublic = function(e, t) {
                    return C.fromPublic(this, e, t)
                }, X.prototype.genKeyPair = function(e) {
                    e || (e = {});
                    for (var t = new N({
                            hash: this.hash,
                            pers: e.pers,
                            persEnc: e.persEnc || "utf8",
                            entropy: e.entropy || J(this.hash.hmacStrength),
                            entropyEnc: e.entropy && e.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), r = this.n.byteLength(), n = this.n.sub(new f.a(2));;) {
                        var o = new f.a(t.generate(r));
                        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                    }
                }, X.prototype._truncateToN = function(e, t) {
                    var r = 8 * e.byteLength() - this.n.bitLength();
                    return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
                }, X.prototype.sign = function(e, t, r, n) {
                    "object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new f.a(e, 16));
                    for (var o = this.n.byteLength(), d = t.getPrivate().toArray("be", o), c = e.toArray("be", o), h = new N({
                            hash: this.hash,
                            entropy: d,
                            nonce: c,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), l = this.n.sub(new f.a(1)), y = 0;; y++) {
                        var v = n.k ? n.k(y) : new f.a(h.generate(this.n.byteLength()));
                        if (!((v = this._truncateToN(v, !0)).cmpn(1) <= 0 || v.cmp(l) >= 0)) {
                            var m = this.g.mul(v);
                            if (!m.isInfinity()) {
                                var w = m.getX(),
                                    A = w.umod(this.n);
                                if (0 !== A.cmpn(0)) {
                                    var s = v.invm(this.n).mul(A.mul(t.getPrivate()).iadd(e));
                                    if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                                        var x = (m.getY().isOdd() ? 1 : 0) | (0 !== w.cmp(A) ? 2 : 0);
                                        return n.canonical && s.cmp(this.nh) > 0 && (s = this.n.sub(s), x ^= 1), new T({
                                            r: A,
                                            s: s,
                                            recoveryParam: x
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, X.prototype.verify = function(e, t, r, n) {
                    e = this._truncateToN(new f.a(e, 16)), r = this.keyFromPublic(r, n);
                    var o = (t = new T(t, "hex")).r,
                        s = t.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var p, d = s.invm(this.n),
                        c = d.mul(e).umod(this.n),
                        h = d.mul(o).umod(this.n);
                    return this.curve._maxwellTrick ? !(p = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && p.eqXToP(o) : !(p = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === p.getX().umod(this.n).cmp(o)
                }, X.prototype.recoverPubKey = function(e, t, r, n) {
                    V((3 & r) === r, "The recovery param is more than two bits"), t = new T(t, n);
                    var o = this.n,
                        d = new f.a(e),
                        c = t.r,
                        s = t.s,
                        h = 1 & r,
                        l = r >> 1;
                    if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                    c = l ? this.curve.pointFromX(c.add(this.curve.n), h) : this.curve.pointFromX(c, h);
                    var y = t.r.invm(o),
                        v = o.sub(d).mul(y).umod(o),
                        m = s.mul(y).umod(o);
                    return this.g.mulAdd(v, c, m)
                }, X.prototype.getKeyRecoveryParam = function(e, t, r, n) {
                    if (null !== (t = new T(t, n)).recoveryParam) return t.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var f;
                        try {
                            f = this.recoverPubKey(e, t, i)
                        } catch (e) {
                            continue
                        }
                        if (f.eq(r)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var $ = c((function(e, t) {
                    var r = t;
                    r.version = "6.5.4", r.utils = v, r.rand = function() {
                        throw new Error("unsupported")
                    }, r.curve = B, r.curves = F, r.ec = Z, r.eddsa = null
                })).ec
            }).call(this, r(36))
        },
        135: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(559);
            r.d(t, "formatBytes32String", (function() {
                return n.a
            })), r.d(t, "parseBytes32String", (function() {
                return n.b
            }));
            var f = r(385);
            r.d(t, "nameprep", (function() {
                return f.a
            }));
            var o = r(60);
            r.d(t, "_toEscapedUtf8String", (function() {
                return o.d
            })), r.d(t, "toUtf8Bytes", (function() {
                return o.f
            })), r.d(t, "toUtf8CodePoints", (function() {
                return o.g
            })), r.d(t, "toUtf8String", (function() {
                return o.h
            })), r.d(t, "Utf8ErrorFuncs", (function() {
                return o.b
            })), r.d(t, "Utf8ErrorReason", (function() {
                return o.c
            })), r.d(t, "UnicodeNormalizationForm", (function() {
                return o.a
            }))
        },
        137: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "SigningKey", (function() {
                return l
            })), r.d(t, "recoverPublicKey", (function() {
                return y
            })), r.d(t, "computePublicKey", (function() {
                return v
            }));
            var n = r(1087),
                f = r(0),
                o = r(5);
            const d = new(r(7).Logger)("signing-key/5.6.0");
            let c = null;

            function h() {
                return c || (c = new n.a("secp256k1")), c
            }
            class l {
                constructor(e) {
                    Object(o.defineReadOnly)(this, "curve", "secp256k1"), Object(o.defineReadOnly)(this, "privateKey", Object(f.hexlify)(e));
                    const t = h().keyFromPrivate(Object(f.arrayify)(this.privateKey));
                    Object(o.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), Object(o.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), Object(o.defineReadOnly)(this, "_isSigningKey", !0)
                }
                _addPoint(e) {
                    const t = h().keyFromPublic(Object(f.arrayify)(this.publicKey)),
                        r = h().keyFromPublic(Object(f.arrayify)(e));
                    return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(e) {
                    const t = h().keyFromPrivate(Object(f.arrayify)(this.privateKey)),
                        r = Object(f.arrayify)(e);
                    32 !== r.length && d.throwArgumentError("bad digest length", "digest", e);
                    const n = t.sign(r, {
                        canonical: !0
                    });
                    return Object(f.splitSignature)({
                        recoveryParam: n.recoveryParam,
                        r: Object(f.hexZeroPad)("0x" + n.r.toString(16), 32),
                        s: Object(f.hexZeroPad)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(e) {
                    const t = h().keyFromPrivate(Object(f.arrayify)(this.privateKey)),
                        r = h().keyFromPublic(Object(f.arrayify)(v(e)));
                    return Object(f.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(e) {
                    return !(!e || !e._isSigningKey)
                }
            }

            function y(e, t) {
                const r = Object(f.splitSignature)(t),
                    n = {
                        r: Object(f.arrayify)(r.r),
                        s: Object(f.arrayify)(r.s)
                    };
                return "0x" + h().recoverPubKey(Object(f.arrayify)(e), n, r.recoveryParam).encode("hex", !1)
            }

            function v(e, t) {
                const r = Object(f.arrayify)(e);
                if (32 === r.length) {
                    const e = new l(r);
                    return t ? "0x" + h().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
                }
                return 33 === r.length ? t ? Object(f.hexlify)(r) : "0x" + h().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + h().keyFromPublic(r).getPublic(!0, "hex") : Object(f.hexlify)(r) : d.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        213: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return l
            })), r.d(t, "c", (function() {
                return y
            })), r.d(t, "d", (function() {
                return v
            })), r.d(t, "a", (function() {
                return m
            }));
            var n = r(18),
                f = r.n(n),
                o = r(0),
                d = r(456),
                c = r(7);
            const h = new c.Logger("sha2/5.6.0");

            function l(data) {
                return "0x" + f.a.ripemd160().update(Object(o.arrayify)(data)).digest("hex")
            }

            function y(data) {
                return "0x" + f.a.sha256().update(Object(o.arrayify)(data)).digest("hex")
            }

            function v(data) {
                return "0x" + f.a.sha512().update(Object(o.arrayify)(data)).digest("hex")
            }

            function m(e, t, data) {
                return d.a[e] || h.throwError("unsupported algorithm " + e, c.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: e
                }), "0x" + f.a.hmac(f.a[e], Object(o.arrayify)(t)).update(Object(o.arrayify)(data)).digest("hex")
            }
        },
        234: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(213);
            r.d(t, "computeHmac", (function() {
                return n.a
            })), r.d(t, "ripemd160", (function() {
                return n.b
            })), r.d(t, "sha256", (function() {
                return n.c
            })), r.d(t, "sha512", (function() {
                return n.d
            }));
            var f = r(456);
            r.d(t, "SupportedAlgorithm", (function() {
                return f.a
            }))
        },
        277: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "commify", (function() {
                return d
            })), r.d(t, "formatUnits", (function() {
                return c
            })), r.d(t, "parseUnits", (function() {
                return h
            })), r.d(t, "formatEther", (function() {
                return l
            })), r.d(t, "parseEther", (function() {
                return y
            }));
            var n = r(1324);
            const f = new(r(7).Logger)("units/5.6.0"),
                o = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

            function d(e) {
                const t = String(e).split(".");
                (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && f.throwArgumentError("invalid value", "value", e);
                let r = t[0],
                    n = "";
                for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
                    "0" === r.substring(0, 1);) r = r.substring(1);
                "" === r && (r = "0");
                let o = "";
                for (2 === t.length && (o = "." + (t[1] || "0")); o.length > 2 && "0" === o[o.length - 1];) o = o.substring(0, o.length - 1);
                const d = [];
                for (; r.length;) {
                    if (r.length <= 3) {
                        d.unshift(r);
                        break
                    } {
                        const e = r.length - 3;
                        d.unshift(r.substring(e)), r = r.substring(0, e)
                    }
                }
                return n + d.join(",") + o
            }

            function c(e, t) {
                if ("string" == typeof t) {
                    const e = o.indexOf(t); - 1 !== e && (t = 3 * e)
                }
                return Object(n.b)(e, null != t ? t : 18)
            }

            function h(e, t) {
                if ("string" != typeof e && f.throwArgumentError("value must be a string", "value", e), "string" == typeof t) {
                    const e = o.indexOf(t); - 1 !== e && (t = 3 * e)
                }
                return Object(n.c)(e, null != t ? t : 18)
            }

            function l(e) {
                return c(e, 18)
            }

            function y(e) {
                return h(e, 18)
            }
        },
        372: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "pack", (function() {
                return A
            })), r.d(t, "keccak256", (function() {
                return x
            })), r.d(t, "sha256", (function() {
                return I
            }));
            var n = r(16),
                f = r(0),
                o = r(48),
                d = r(213),
                c = r(60),
                h = r(7);
            const l = new RegExp("^bytes([0-9]+)$"),
                y = new RegExp("^(u?int)([0-9]*)$"),
                v = new RegExp("^(.*)\\[([0-9]*)\\]$"),
                m = new h.Logger("solidity/5.6.0");

            function w(e, t, r) {
                switch (e) {
                    case "address":
                        return r ? Object(f.zeroPad)(t, 32) : Object(f.arrayify)(t);
                    case "string":
                        return Object(c.f)(t);
                    case "bytes":
                        return Object(f.arrayify)(t);
                    case "bool":
                        return t = t ? "0x01" : "0x00", r ? Object(f.zeroPad)(t, 32) : Object(f.arrayify)(t)
                }
                let o = e.match(y);
                if (o) {
                    let d = parseInt(o[2] || "256");
                    return (o[2] && String(d) !== o[2] || d % 8 != 0 || 0 === d || d > 256) && m.throwArgumentError("invalid number type", "type", e), r && (d = 256), t = n.a.from(t).toTwos(d), Object(f.zeroPad)(t, d / 8)
                }
                if (o = e.match(l), o) {
                    const n = parseInt(o[1]);
                    return (String(n) !== o[1] || 0 === n || n > 32) && m.throwArgumentError("invalid bytes type", "type", e), Object(f.arrayify)(t).byteLength !== n && m.throwArgumentError(`invalid value for ${e}`, "value", t), r ? Object(f.arrayify)((t + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : t
                }
                if (o = e.match(v), o && Array.isArray(t)) {
                    const r = o[1];
                    parseInt(o[2] || String(t.length)) != t.length && m.throwArgumentError(`invalid array length for ${e}`, "value", t);
                    const n = [];
                    return t.forEach((function(e) {
                        n.push(w(r, e, !0))
                    })), Object(f.concat)(n)
                }
                return m.throwArgumentError("invalid type", "type", e)
            }

            function A(e, t) {
                e.length != t.length && m.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
                const r = [];
                return e.forEach((function(e, n) {
                    r.push(w(e, t[n]))
                })), Object(f.hexlify)(Object(f.concat)(r))
            }

            function x(e, t) {
                return Object(o.keccak256)(A(e, t))
            }

            function I(e, t) {
                return Object(d.c)(A(e, t))
            }
        },
        385: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return A
            }));
            var n = r(60);

            function f(data, e) {
                e || (e = function(e) {
                    return [parseInt(e, 16)]
                });
                let t = 0,
                    r = {};
                return data.split(",").forEach((n => {
                    let f = n.split(":");
                    t += parseInt(f[0], 16), r[t] = e(f[1])
                })), r
            }

            function o(data) {
                let e = 0;
                return data.split(",").map((t => {
                    let r = t.split("-");
                    1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1");
                    let n = e + parseInt(r[0], 16);
                    return e = parseInt(r[1], 16), {
                        l: n,
                        h: e
                    }
                }))
            }

            function d(e, t) {
                let r = 0;
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if (r += n.l, e >= r && e <= r + n.h && (e - r) % (n.d || 1) == 0) {
                        if (n.e && -1 !== n.e.indexOf(e - r)) continue;
                        return n
                    }
                }
                return null
            }
            const c = o("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
                h = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e => parseInt(e, 16))),
                l = [{
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
                y = f("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
                v = f("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
                m = f("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(data) {
                    if (data.length % 4 != 0) throw new Error("bad data");
                    let e = [];
                    for (let i = 0; i < data.length; i += 4) e.push(parseInt(data.substring(i, i + 4), 16));
                    return e
                })),
                w = o("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

            function A(e) {
                if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
                let t = Object(n.g)(e);
                var r;
                r = t.map((code => {
                    if (h.indexOf(code) >= 0) return [];
                    if (code >= 65024 && code <= 65039) return [];
                    let e = function(e) {
                        let t = d(e, l);
                        if (t) return [e + t.s];
                        let r = y[e];
                        if (r) return r;
                        let n = v[e];
                        return n ? [e + n[0]] : m[e] || null
                    }(code);
                    return e || [code]
                })), t = r.reduce(((e, t) => (t.forEach((t => {
                    e.push(t)
                })), e)), []), t = Object(n.g)(Object(n.e)(t), n.a.NFKC), t.forEach((code => {
                    if (d(code, w)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
                })), t.forEach((code => {
                    if (d(code, c)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
                }));
                let f = Object(n.e)(t);
                if ("-" === f.substring(0, 1) || "--" === f.substring(2, 4) || "-" === f.substring(f.length - 1)) throw new Error("invalid hyphen");
                if (f.length > 63) throw new Error("too long");
                return f
            }
        },
        456: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", (function() {
                    return n
                })),
                function(e) {
                    e.sha256 = "sha256", e.sha512 = "sha512"
                }(n || (n = {}))
        },
        559: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return d
            })), r.d(t, "b", (function() {
                return c
            }));
            var n = r(483),
                f = r(0),
                o = r(60);

            function d(text) {
                const e = Object(o.f)(text);
                if (e.length > 31) throw new Error("bytes32 string must be less than 32 bytes");
                return Object(f.hexlify)(Object(f.concat)([e, n.a]).slice(0, 32))
            }

            function c(e) {
                const data = Object(f.arrayify)(e);
                if (32 !== data.length) throw new Error("invalid bytes32 - not 32 bytes long");
                if (0 !== data[31]) throw new Error("invalid bytes32 string - no null terminator");
                let t = 31;
                for (; 0 === data[t - 1];) t--;
                return Object(o.h)(data.slice(0, t))
            }
        },
        59: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "TransactionTypes", (function() {
                return w
            })), r.d(t, "computeAddress", (function() {
                return O
            })), r.d(t, "recoverAddress", (function() {
                return E
            })), r.d(t, "accessListify", (function() {
                return _
            })), r.d(t, "serialize", (function() {
                return N
            })), r.d(t, "parse", (function() {
                return k
            }));
            var n = r(34),
                f = r(16),
                o = r(0),
                d = r(207),
                c = r(48),
                h = r(5),
                l = r(174),
                y = r(137),
                v = r(7);
            const m = new v.Logger("transactions/5.6.0");
            var w;

            function A(e) {
                return "0x" === e ? null : Object(n.getAddress)(e)
            }

            function x(e) {
                return "0x" === e ? d.h : f.a.from(e)
            }! function(e) {
                e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559"
            }(w || (w = {}));
            const I = [{
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
                S = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function O(e) {
                const t = Object(y.computePublicKey)(e);
                return Object(n.getAddress)(Object(o.hexDataSlice)(Object(c.keccak256)(Object(o.hexDataSlice)(t, 1)), 12))
            }

            function E(e, t) {
                return O(Object(y.recoverPublicKey)(Object(o.arrayify)(e), t))
            }

            function P(e, t) {
                const r = Object(o.stripZeros)(f.a.from(e).toHexString());
                return r.length > 32 && m.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
            }

            function j(e, t) {
                return {
                    address: Object(n.getAddress)(e),
                    storageKeys: (t || []).map(((t, r) => (32 !== Object(o.hexDataLength)(t) && m.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t), t.toLowerCase())))
                }
            }

            function _(e) {
                if (Array.isArray(e)) return e.map(((e, t) => Array.isArray(e) ? (e.length > 2 && m.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), j(e[0], e[1])) : j(e.address, e.storageKeys)));
                const t = Object.keys(e).map((t => {
                    const r = e[t].reduce(((e, t) => (e[t] = !0, e)), {});
                    return j(t, Object.keys(r).sort())
                }));
                return t.sort(((a, b) => a.address.localeCompare(b.address))), t
            }

            function B(e) {
                return _(e).map((e => [e.address, e.storageKeys]))
            }

            function F(e, t) {
                if (null != e.gasPrice) {
                    const t = f.a.from(e.gasPrice),
                        r = f.a.from(e.maxFeePerGas || 0);
                    t.eq(r) || m.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: t,
                        maxFeePerGas: r
                    })
                }
                const r = [P(e.chainId || 0, "chainId"), P(e.nonce || 0, "nonce"), P(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), P(e.maxFeePerGas || 0, "maxFeePerGas"), P(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(n.getAddress)(e.to) : "0x", P(e.value || 0, "value"), e.data || "0x", B(e.accessList || [])];
                if (t) {
                    const e = Object(o.splitSignature)(t);
                    r.push(P(e.recoveryParam, "recoveryParam")), r.push(Object(o.stripZeros)(e.r)), r.push(Object(o.stripZeros)(e.s))
                }
                return Object(o.hexConcat)(["0x02", l.encode(r)])
            }

            function M(e, t) {
                const r = [P(e.chainId || 0, "chainId"), P(e.nonce || 0, "nonce"), P(e.gasPrice || 0, "gasPrice"), P(e.gasLimit || 0, "gasLimit"), null != e.to ? Object(n.getAddress)(e.to) : "0x", P(e.value || 0, "value"), e.data || "0x", B(e.accessList || [])];
                if (t) {
                    const e = Object(o.splitSignature)(t);
                    r.push(P(e.recoveryParam, "recoveryParam")), r.push(Object(o.stripZeros)(e.r)), r.push(Object(o.stripZeros)(e.s))
                }
                return Object(o.hexConcat)(["0x01", l.encode(r)])
            }

            function N(e, t) {
                if (null == e.type || 0 === e.type) return null != e.accessList && m.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                    function(e, t) {
                        Object(h.checkProperties)(e, S);
                        const r = [];
                        I.forEach((function(t) {
                            let n = e[t.name] || [];
                            const f = {};
                            t.numeric && (f.hexPad = "left"), n = Object(o.arrayify)(Object(o.hexlify)(n, f)), t.length && n.length !== t.length && n.length > 0 && m.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = Object(o.stripZeros)(n), n.length > t.maxLength && m.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n)), r.push(Object(o.hexlify)(n))
                        }));
                        let n = 0;
                        if (null != e.chainId ? (n = e.chainId, "number" != typeof n && m.throwArgumentError("invalid transaction.chainId", "transaction", e)) : t && !Object(o.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (r.push(Object(o.hexlify)(n)), r.push("0x"), r.push("0x")), !t) return l.encode(r);
                        const f = Object(o.splitSignature)(t);
                        let d = 27 + f.recoveryParam;
                        return 0 !== n ? (r.pop(), r.pop(), r.pop(), d += 2 * n + 8, f.v > 28 && f.v !== d && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : f.v !== d && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), r.push(Object(o.hexlify)(d)), r.push(Object(o.stripZeros)(Object(o.arrayify)(f.r))), r.push(Object(o.stripZeros)(Object(o.arrayify)(f.s))), l.encode(r)
                    }(e, t);
                switch (e.type) {
                    case 1:
                        return M(e, t);
                    case 2:
                        return F(e, t)
                }
                return m.throwError(`unsupported transaction type: ${e.type}`, v.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: e.type
                })
            }

            function R(e, t, r) {
                try {
                    const r = x(t[0]).toNumber();
                    if (0 !== r && 1 !== r) throw new Error("bad recid");
                    e.v = r
                } catch (e) {
                    m.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
                }
                e.r = Object(o.hexZeroPad)(t[1], 32), e.s = Object(o.hexZeroPad)(t[2], 32);
                try {
                    const t = Object(c.keccak256)(r(e));
                    e.from = E(t, {
                        r: e.r,
                        s: e.s,
                        recoveryParam: e.v
                    })
                } catch (e) {
                    console.log(e)
                }
            }

            function k(e) {
                const t = Object(o.arrayify)(e);
                if (t[0] > 127) return function(e) {
                    const t = l.decode(e);
                    9 !== t.length && 6 !== t.length && m.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                    const r = {
                        nonce: x(t[0]).toNumber(),
                        gasPrice: x(t[1]),
                        gasLimit: x(t[2]),
                        to: A(t[3]),
                        value: x(t[4]),
                        data: t[5],
                        chainId: 0
                    };
                    if (6 === t.length) return r;
                    try {
                        r.v = f.a.from(t[6]).toNumber()
                    } catch (e) {
                        return console.log(e), r
                    }
                    if (r.r = Object(o.hexZeroPad)(t[7], 32), r.s = Object(o.hexZeroPad)(t[8], 32), f.a.from(r.r).isZero() && f.a.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27;
                        const f = t.slice(0, 6);
                        0 !== r.chainId && (f.push(Object(o.hexlify)(r.chainId)), f.push("0x"), f.push("0x"), n -= 2 * r.chainId + 8);
                        const d = Object(c.keccak256)(l.encode(f));
                        try {
                            r.from = E(d, {
                                r: Object(o.hexlify)(r.r),
                                s: Object(o.hexlify)(r.s),
                                recoveryParam: n
                            })
                        } catch (e) {
                            console.log(e)
                        }
                        r.hash = Object(c.keccak256)(e)
                    }
                    return r.type = null, r
                }(t);
                switch (t[0]) {
                    case 1:
                        return function(e) {
                            const t = l.decode(e.slice(1));
                            8 !== t.length && 11 !== t.length && m.throwArgumentError("invalid component count for transaction type: 1", "payload", Object(o.hexlify)(e));
                            const r = {
                                type: 1,
                                chainId: x(t[0]).toNumber(),
                                nonce: x(t[1]).toNumber(),
                                gasPrice: x(t[2]),
                                gasLimit: x(t[3]),
                                to: A(t[4]),
                                value: x(t[5]),
                                data: t[6],
                                accessList: _(t[7])
                            };
                            return 8 === t.length || (r.hash = Object(c.keccak256)(e), R(r, t.slice(8), M)), r
                        }(t);
                    case 2:
                        return function(e) {
                            const t = l.decode(e.slice(1));
                            9 !== t.length && 12 !== t.length && m.throwArgumentError("invalid component count for transaction type: 2", "payload", Object(o.hexlify)(e));
                            const r = x(t[2]),
                                n = x(t[3]),
                                f = {
                                    type: 2,
                                    chainId: x(t[0]).toNumber(),
                                    nonce: x(t[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: x(t[4]),
                                    to: A(t[5]),
                                    value: x(t[6]),
                                    data: t[7],
                                    accessList: _(t[8])
                                };
                            return 9 === t.length || (f.hash = Object(c.keccak256)(e), R(f, t.slice(9), F)), f
                        }(t)
                }
                return m.throwError(`unsupported transaction type: ${t[0]}`, v.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: t[0]
                })
            }
        },
        60: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            })), r.d(t, "c", (function() {
                return d
            })), r.d(t, "b", (function() {
                return h
            })), r.d(t, "f", (function() {
                return y
            })), r.d(t, "d", (function() {
                return m
            })), r.d(t, "e", (function() {
                return w
            })), r.d(t, "h", (function() {
                return A
            })), r.d(t, "g", (function() {
                return x
            }));
            var n = r(0);
            const f = new(r(7).Logger)("strings/5.6.0");
            var o, d;

            function c(e, t, r, output, n) {
                if (e === d.BAD_PREFIX || e === d.UNEXPECTED_CONTINUE) {
                    let i = 0;
                    for (let e = t + 1; e < r.length && r[e] >> 6 == 2; e++) i++;
                    return i
                }
                return e === d.OVERRUN ? r.length - t - 1 : 0
            }! function(e) {
                e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD"
            }(o || (o = {})),
            function(e) {
                e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation"
            }(d || (d = {}));
            const h = Object.freeze({
                error: function(e, t, r, output, n) {
                    return f.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
                },
                ignore: c,
                replace: function(e, t, r, output, n) {
                    return e === d.OVERLONG ? (output.push(n), 0) : (output.push(65533), c(e, t, r))
                }
            });

            function l(e, t) {
                null == t && (t = h.error), e = Object(n.arrayify)(e);
                const r = [];
                let i = 0;
                for (; i < e.length;) {
                    const n = e[i++];
                    if (n >> 7 == 0) {
                        r.push(n);
                        continue
                    }
                    let f = null,
                        o = null;
                    if (192 == (224 & n)) f = 1, o = 127;
                    else if (224 == (240 & n)) f = 2, o = 2047;
                    else {
                        if (240 != (248 & n)) {
                            i += t(128 == (192 & n) ? d.UNEXPECTED_CONTINUE : d.BAD_PREFIX, i - 1, e, r);
                            continue
                        }
                        f = 3, o = 65535
                    }
                    if (i - 1 + f >= e.length) {
                        i += t(d.OVERRUN, i - 1, e, r);
                        continue
                    }
                    let c = n & (1 << 8 - f - 1) - 1;
                    for (let n = 0; n < f; n++) {
                        let n = e[i];
                        if (128 != (192 & n)) {
                            i += t(d.MISSING_CONTINUE, i, e, r), c = null;
                            break
                        }
                        c = c << 6 | 63 & n, i++
                    }
                    null !== c && (c > 1114111 ? i += t(d.OUT_OF_RANGE, i - 1 - f, e, r, c) : c >= 55296 && c <= 57343 ? i += t(d.UTF16_SURROGATE, i - 1 - f, e, r, c) : c <= o ? i += t(d.OVERLONG, i - 1 - f, e, r, c) : r.push(c))
                }
                return r
            }

            function y(e, form = o.current) {
                form != o.current && (f.checkNormalize(), e = e.normalize(form));
                let t = [];
                for (let i = 0; i < e.length; i++) {
                    const r = e.charCodeAt(i);
                    if (r < 128) t.push(r);
                    else if (r < 2048) t.push(r >> 6 | 192), t.push(63 & r | 128);
                    else if (55296 == (64512 & r)) {
                        i++;
                        const n = e.charCodeAt(i);
                        if (i >= e.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
                        const f = 65536 + ((1023 & r) << 10) + (1023 & n);
                        t.push(f >> 18 | 240), t.push(f >> 12 & 63 | 128), t.push(f >> 6 & 63 | 128), t.push(63 & f | 128)
                    } else t.push(r >> 12 | 224), t.push(r >> 6 & 63 | 128), t.push(63 & r | 128)
                }
                return Object(n.arrayify)(t)
            }

            function v(e) {
                const t = "0000" + e.toString(16);
                return "\\u" + t.substring(t.length - 4)
            }

            function m(e, t) {
                return '"' + l(e, t).map((e => {
                    if (e < 256) {
                        switch (e) {
                            case 8:
                                return "\\b";
                            case 9:
                                return "\\t";
                            case 10:
                                return "\\n";
                            case 13:
                                return "\\r";
                            case 34:
                                return '\\"';
                            case 92:
                                return "\\\\"
                        }
                        if (e >= 32 && e < 127) return String.fromCharCode(e)
                    }
                    return e <= 65535 ? v(e) : v(55296 + ((e -= 65536) >> 10 & 1023)) + v(56320 + (1023 & e))
                })).join("") + '"'
            }

            function w(e) {
                return e.map((e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e))))).join("")
            }

            function A(e, t) {
                return w(l(e, t))
            }

            function x(e, form = o.current) {
                return l(y(e, form))
            }
        }
    }
]);