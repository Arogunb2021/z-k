(window.webpackJsonp = window.webpackJsonp || []).push([
    [129], {
        1106: function(e, r, t) {
            "use strict";
            (function(e) {
                t.d(r, "a", (function() {
                    return H
                }));
                var n = t(13),
                    f = t.n(n),
                    o = t(18),
                    d = t.n(o);
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

                function h(e, r, t) {
                    return t = {
                        path: r,
                        exports: {},
                        require: function(path, base) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == base && t.path)
                        }
                    }, e(t, t.exports), t.exports
                }
                var c = l;

                function l(e, r) {
                    if (!e) throw new Error(r || "Assertion failed")
                }
                l.equal = function(e, r, t) {
                    if (e != r) throw new Error(t || "Assertion failed: " + e + " != " + r)
                };
                var v = h((function(e, r) {
                        var t = r;

                        function n(e) {
                            return 1 === e.length ? "0" + e : e
                        }

                        function f(e) {
                            for (var r = "", i = 0; i < e.length; i++) r += n(e[i].toString(16));
                            return r
                        }
                        t.toArray = function(e, r) {
                            if (Array.isArray(e)) return e.slice();
                            if (!e) return [];
                            var t = [];
                            if ("string" != typeof e) {
                                for (var i = 0; i < e.length; i++) t[i] = 0 | e[i];
                                return t
                            }
                            if ("hex" === r) {
                                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                                for (i = 0; i < e.length; i += 2) t.push(parseInt(e[i] + e[i + 1], 16))
                            } else
                                for (i = 0; i < e.length; i++) {
                                    var n = e.charCodeAt(i),
                                        f = n >> 8,
                                        o = 255 & n;
                                    f ? t.push(f, o) : t.push(o)
                                }
                            return t
                        }, t.zero2 = n, t.toHex = f, t.encode = function(e, r) {
                            return "hex" === r ? f(e) : e
                        }
                    })),
                    y = h((function(e, r) {
                        var t = r;
                        t.assert = c, t.toArray = v.toArray, t.zero2 = v.zero2, t.toHex = v.toHex, t.encode = v.encode, t.getNAF = function(e, r, t) {
                            var n = new Array(Math.max(e.bitLength(), t) + 1);
                            n.fill(0);
                            for (var f = 1 << r + 1, o = e.clone(), i = 0; i < n.length; i++) {
                                var d, h = o.andln(f - 1);
                                o.isOdd() ? (d = h > (f >> 1) - 1 ? (f >> 1) - h : h, o.isubn(d)) : d = 0, n[i] = d, o.iushrn(1)
                            }
                            return n
                        }, t.getJSF = function(e, r) {
                            var t = [
                                [],
                                []
                            ];
                            e = e.clone(), r = r.clone();
                            for (var n, f = 0, o = 0; e.cmpn(-f) > 0 || r.cmpn(-o) > 0;) {
                                var d, h, c = e.andln(3) + f & 3,
                                    l = r.andln(3) + o & 3;
                                3 === c && (c = -1), 3 === l && (l = -1), d = 0 == (1 & c) ? 0 : 3 !== (n = e.andln(7) + f & 7) && 5 !== n || 2 !== l ? c : -c, t[0].push(d), h = 0 == (1 & l) ? 0 : 3 !== (n = r.andln(7) + o & 7) && 5 !== n || 2 !== c ? l : -l, t[1].push(h), 2 * f === d + 1 && (f = 1 - f), 2 * o === h + 1 && (o = 1 - o), e.iushrn(1), r.iushrn(1)
                            }
                            return t
                        }, t.cachedProperty = function(e, r, t) {
                            var n = "_" + r;
                            e.prototype[r] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = t.call(this)
                            }
                        }, t.parseBytes = function(e) {
                            return "string" == typeof e ? t.toArray(e, "hex") : e
                        }, t.intFromLE = function(e) {
                            return new f.a(e, "hex", "le")
                        }
                    })),
                    m = y.getNAF,
                    E = y.getJSF,
                    A = y.assert;

                function I(e, r) {
                    this.type = e, this.p = new f.a(r.p, 16), this.red = r.prime ? f.a.red(r.prime) : f.a.mont(this.p), this.zero = new f.a(0).toRed(this.red), this.one = new f.a(1).toRed(this.red), this.two = new f.a(2).toRed(this.red), this.n = r.n && new f.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var t = this.n && this.p.div(this.n);
                    !t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var base = I;

                function w(e, r) {
                    this.curve = e, this.type = r, this.precomputed = null
                }
                I.prototype.point = function() {
                    throw new Error("Not implemented")
                }, I.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, I.prototype._fixedNafMul = function(p, e) {
                    A(p.precomputed);
                    var r = p._getDoubles(),
                        t = m(e, 1, this._bitLength),
                        n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                    n /= 3;
                    var f, o, d = [];
                    for (f = 0; f < t.length; f += r.step) {
                        o = 0;
                        for (var h = f + r.step - 1; h >= f; h--) o = (o << 1) + t[h];
                        d.push(o)
                    }
                    for (var a = this.jpoint(null, null, null), b = this.jpoint(null, null, null), i = n; i > 0; i--) {
                        for (f = 0; f < d.length; f++)(o = d[f]) === i ? b = b.mixedAdd(r.points[f]) : o === -i && (b = b.mixedAdd(r.points[f].neg()));
                        a = a.add(b)
                    }
                    return a.toP()
                }, I.prototype._wnafMul = function(p, e) {
                    var r = 4,
                        t = p._getNAFPoints(r);
                    r = t.wnd;
                    for (var n = t.points, f = m(e, r, this._bitLength), o = this.jpoint(null, null, null), i = f.length - 1; i >= 0; i--) {
                        for (var d = 0; i >= 0 && 0 === f[i]; i--) d++;
                        if (i >= 0 && d++, o = o.dblp(d), i < 0) break;
                        var h = f[i];
                        A(0 !== h), o = "affine" === p.type ? h > 0 ? o.mixedAdd(n[h - 1 >> 1]) : o.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? o.add(n[h - 1 >> 1]) : o.add(n[-h - 1 >> 1].neg())
                    }
                    return "affine" === p.type ? o.toP() : o
                }, I.prototype._wnafMulAdd = function(e, r, t, n, f) {
                    var i, o, p, d = this._wnafT1,
                        h = this._wnafT2,
                        c = this._wnafT3,
                        l = 0;
                    for (i = 0; i < n; i++) {
                        var v = (p = r[i])._getNAFPoints(e);
                        d[i] = v.wnd, h[i] = v.points
                    }
                    for (i = n - 1; i >= 1; i -= 2) {
                        var a = i - 1,
                            b = i;
                        if (1 === d[a] && 1 === d[b]) {
                            var y = [r[a], null, null, r[b]];
                            0 === r[a].y.cmp(r[b].y) ? (y[1] = r[a].add(r[b]), y[2] = r[a].toJ().mixedAdd(r[b].neg())) : 0 === r[a].y.cmp(r[b].y.redNeg()) ? (y[1] = r[a].toJ().mixedAdd(r[b]), y[2] = r[a].add(r[b].neg())) : (y[1] = r[a].toJ().mixedAdd(r[b]), y[2] = r[a].toJ().mixedAdd(r[b].neg()));
                            var A = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                I = E(t[a], t[b]);
                            for (l = Math.max(I[0].length, l), c[a] = new Array(l), c[b] = new Array(l), o = 0; o < l; o++) {
                                var w = 0 | I[0][o],
                                    N = 0 | I[1][o];
                                c[a][o] = A[3 * (w + 1) + (N + 1)], c[b][o] = 0, h[a] = y
                            }
                        } else c[a] = m(t[a], d[a], this._bitLength), c[b] = m(t[b], d[b], this._bitLength), l = Math.max(c[a].length, l), l = Math.max(c[b].length, l)
                    }
                    var S = this.jpoint(null, null, null),
                        _ = this._wnafT4;
                    for (i = l; i >= 0; i--) {
                        for (var R = 0; i >= 0;) {
                            var P = !0;
                            for (o = 0; o < n; o++) _[o] = 0 | c[o][i], 0 !== _[o] && (P = !1);
                            if (!P) break;
                            R++, i--
                        }
                        if (i >= 0 && R++, S = S.dblp(R), i < 0) break;
                        for (o = 0; o < n; o++) {
                            var x = _[o];
                            0 !== x && (x > 0 ? p = h[o][x - 1 >> 1] : x < 0 && (p = h[o][-x - 1 >> 1].neg()), S = "affine" === p.type ? S.mixedAdd(p) : S.add(p))
                        }
                    }
                    for (i = 0; i < n; i++) h[i] = null;
                    return f ? S : S.toP()
                }, I.BasePoint = w, w.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, w.prototype.validate = function() {
                    return this.curve.validate(this)
                }, I.prototype.decodePoint = function(e, r) {
                    e = y.toArray(e, r);
                    var t = this.p.byteLength();
                    if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * t) return 6 === e[0] ? A(e[e.length - 1] % 2 == 0) : 7 === e[0] && A(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t));
                    if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t) return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
                    throw new Error("Unknown point format")
                }, w.prototype.encodeCompressed = function(e) {
                    return this.encode(e, !0)
                }, w.prototype._encode = function(e) {
                    var r = this.curve.p.byteLength(),
                        t = this.getX().toArray("be", r);
                    return e ? [this.getY().isEven() ? 2 : 3].concat(t) : [4].concat(t, this.getY().toArray("be", r))
                }, w.prototype.encode = function(e, r) {
                    return y.encode(this._encode(r), e)
                }, w.prototype.precompute = function(e) {
                    if (this.precomputed) return this;
                    var r = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, e), r.beta = this._getBeta(), this.precomputed = r, this
                }, w.prototype._hasDoubles = function(e) {
                    if (!this.precomputed) return !1;
                    var r = this.precomputed.doubles;
                    return !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
                }, w.prototype._getDoubles = function(e, r) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var t = [this], n = this, i = 0; i < r; i += e) {
                        for (var f = 0; f < e; f++) n = n.dbl();
                        t.push(n)
                    }
                    return {
                        step: e,
                        points: t
                    }
                }, w.prototype._getNAFPoints = function(e) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var r = [this], t = (1 << e) - 1, n = 1 === t ? null : this.dbl(), i = 1; i < t; i++) r[i] = r[i - 1].add(n);
                    return {
                        wnd: e,
                        points: r
                    }
                }, w.prototype._getBeta = function() {
                    return null
                }, w.prototype.dblp = function(e) {
                    for (var r = this, i = 0; i < e; i++) r = r.dbl();
                    return r
                };
                var N = h((function(e) {
                        "function" == typeof Object.create ? e.exports = function(e, r) {
                            r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : e.exports = function(e, r) {
                            if (r) {
                                e.super_ = r;
                                var t = function() {};
                                t.prototype = r.prototype, e.prototype = new t, e.prototype.constructor = e
                            }
                        }
                    })),
                    S = y.assert;

                function _(e) {
                    base.call(this, "short", e), this.a = new f.a(e.a, 16).toRed(this.red), this.b = new f.a(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                N(_, base);
                var R = _;

                function P(e, r, t, n) {
                    base.BasePoint.call(this, e, "affine"), null === r && null === t ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new f.a(r, 16), this.y = new f.a(t, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function x(e, r, t, n) {
                    base.BasePoint.call(this, e, "jacobian"), null === r && null === t && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new f.a(0)) : (this.x = new f.a(r, 16), this.y = new f.a(t, 16), this.z = new f.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                _.prototype._getEndomorphism = function(e) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var r, t;
                        if (e.beta) r = new f.a(e.beta, 16).toRed(this.red);
                        else {
                            var n = this._getEndoRoots(this.p);
                            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                        }
                        if (e.lambda) t = new f.a(e.lambda, 16);
                        else {
                            var o = this._getEndoRoots(this.n);
                            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(r)) ? t = o[0] : (t = o[1], S(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))))
                        }
                        return {
                            beta: r,
                            lambda: t,
                            basis: e.basis ? e.basis.map((function(e) {
                                return {
                                    a: new f.a(e.a, 16),
                                    b: new f.a(e.b, 16)
                                }
                            })) : this._getEndoBasis(t)
                        }
                    }
                }, _.prototype._getEndoRoots = function(e) {
                    var r = e === this.p ? this.red : f.a.mont(e),
                        t = new f.a(2).toRed(r).redInvm(),
                        n = t.redNeg(),
                        s = new f.a(3).toRed(r).redNeg().redSqrt().redMul(t);
                    return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()]
                }, _.prototype._getEndoBasis = function(e) {
                    for (var r, t, n, o, d, h, c, l, v, y = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, m = this.n.clone(), E = new f.a(1), A = new f.a(0), I = new f.a(0), w = new f.a(1), i = 0; 0 !== u.cmpn(0);) {
                        var q = m.div(u);
                        l = m.sub(q.mul(u)), v = I.sub(q.mul(E));
                        var N = w.sub(q.mul(A));
                        if (!n && l.cmp(y) < 0) r = c.neg(), t = E, n = l.neg(), o = v;
                        else if (n && 2 == ++i) break;
                        c = l, m = u, u = l, I = E, E = v, w = A, A = N
                    }
                    d = l.neg(), h = v;
                    var S = n.sqr().add(o.sqr());
                    return d.sqr().add(h.sqr()).cmp(S) >= 0 && (d = r, h = t), n.negative && (n = n.neg(), o = o.neg()), d.negative && (d = d.neg(), h = h.neg()), [{
                        a: n,
                        b: o
                    }, {
                        a: d,
                        b: h
                    }]
                }, _.prototype._endoSplit = function(e) {
                    var r = this.endo.basis,
                        t = r[0],
                        n = r[1],
                        f = n.b.mul(e).divRound(this.n),
                        o = t.b.neg().mul(e).divRound(this.n),
                        d = f.mul(t.a),
                        h = o.mul(n.a),
                        c = f.mul(t.b),
                        l = o.mul(n.b);
                    return {
                        k1: e.sub(d).sub(h),
                        k2: c.add(l).neg()
                    }
                }, _.prototype.pointFromX = function(e, r) {
                    (e = new f.a(e, 16)).red || (e = e.toRed(this.red));
                    var t = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                        n = t.redSqrt();
                    if (0 !== n.redSqr().redSub(t).cmp(this.zero)) throw new Error("invalid point");
                    var o = n.fromRed().isOdd();
                    return (r && !o || !r && o) && (n = n.redNeg()), this.point(e, n)
                }, _.prototype.validate = function(e) {
                    if (e.inf) return !0;
                    var r = e.x,
                        t = e.y,
                        n = this.a.redMul(r),
                        f = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
                    return 0 === t.redSqr().redISub(f).cmpn(0)
                }, _.prototype._endoWnafMulAdd = function(e, r, t) {
                    for (var n = this._endoWnafT1, f = this._endoWnafT2, i = 0; i < e.length; i++) {
                        var o = this._endoSplit(r[i]),
                            p = e[i],
                            d = p._getBeta();
                        o.k1.negative && (o.k1.ineg(), p = p.neg(!0)), o.k2.negative && (o.k2.ineg(), d = d.neg(!0)), n[2 * i] = p, n[2 * i + 1] = d, f[2 * i] = o.k1, f[2 * i + 1] = o.k2
                    }
                    for (var h = this._wnafMulAdd(1, n, f, 2 * i, t), c = 0; c < 2 * i; c++) n[c] = null, f[c] = null;
                    return h
                }, N(P, base.BasePoint), _.prototype.point = function(e, r, t) {
                    return new P(this, e, r, t)
                }, _.prototype.pointFromJSON = function(e, r) {
                    return P.fromJSON(this, e, r)
                }, P.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var pre = this.precomputed;
                        if (pre && pre.beta) return pre.beta;
                        var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (pre) {
                            var r = this.curve,
                                t = function(p) {
                                    return r.point(p.x.redMul(r.endo.beta), p.y)
                                };
                            pre.beta = e, e.precomputed = {
                                beta: null,
                                naf: pre.naf && {
                                    wnd: pre.naf.wnd,
                                    points: pre.naf.points.map(t)
                                },
                                doubles: pre.doubles && {
                                    step: pre.doubles.step,
                                    points: pre.doubles.points.map(t)
                                }
                            }
                        }
                        return e
                    }
                }, P.prototype.toJSON = function() {
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
                }, P.fromJSON = function(e, r, t) {
                    "string" == typeof r && (r = JSON.parse(r));
                    var n = e.point(r[0], r[1], t);
                    if (!r[2]) return n;

                    function f(r) {
                        return e.point(r[0], r[1], t)
                    }
                    var pre = r[2];
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
                }, P.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, P.prototype.isInfinity = function() {
                    return this.inf
                }, P.prototype.add = function(p) {
                    if (this.inf) return p;
                    if (p.inf) return this;
                    if (this.eq(p)) return this.dbl();
                    if (this.neg().eq(p)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(p.x)) return this.curve.point(null, null);
                    var e = this.y.redSub(p.y);
                    0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(p.x).redInvm()));
                    var r = e.redSqr().redISub(this.x).redISub(p.x),
                        t = e.redMul(this.x.redSub(r)).redISub(this.y);
                    return this.curve.point(r, t)
                }, P.prototype.dbl = function() {
                    if (this.inf) return this;
                    var e = this.y.redAdd(this.y);
                    if (0 === e.cmpn(0)) return this.curve.point(null, null);
                    var a = this.curve.a,
                        r = this.x.redSqr(),
                        t = e.redInvm(),
                        n = r.redAdd(r).redIAdd(r).redIAdd(a).redMul(t),
                        f = n.redSqr().redISub(this.x.redAdd(this.x)),
                        o = n.redMul(this.x.redSub(f)).redISub(this.y);
                    return this.curve.point(f, o)
                }, P.prototype.getX = function() {
                    return this.x.fromRed()
                }, P.prototype.getY = function() {
                    return this.y.fromRed()
                }, P.prototype.mul = function(e) {
                    return e = new f.a(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
                }, P.prototype.mulAdd = function(e, r, t) {
                    var n = [this, r],
                        f = [e, t];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f) : this.curve._wnafMulAdd(1, n, f, 2)
                }, P.prototype.jmulAdd = function(e, r, t) {
                    var n = [this, r],
                        f = [e, t];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f, !0) : this.curve._wnafMulAdd(1, n, f, 2, !0)
                }, P.prototype.eq = function(p) {
                    return this === p || this.inf === p.inf && (this.inf || 0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))
                }, P.prototype.neg = function(e) {
                    if (this.inf) return this;
                    var r = this.curve.point(this.x, this.y.redNeg());
                    if (e && this.precomputed) {
                        var pre = this.precomputed,
                            t = function(p) {
                                return p.neg()
                            };
                        r.precomputed = {
                            naf: pre.naf && {
                                wnd: pre.naf.wnd,
                                points: pre.naf.points.map(t)
                            },
                            doubles: pre.doubles && {
                                step: pre.doubles.step,
                                points: pre.doubles.points.map(t)
                            }
                        }
                    }
                    return r
                }, P.prototype.toJ = function() {
                    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                }, N(x, base.BasePoint), _.prototype.jpoint = function(e, r, t) {
                    return new x(this, e, r, t)
                }, x.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var e = this.z.redInvm(),
                        r = e.redSqr(),
                        t = this.x.redMul(r),
                        n = this.y.redMul(r).redMul(e);
                    return this.curve.point(t, n)
                }, x.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, x.prototype.add = function(p) {
                    if (this.isInfinity()) return p;
                    if (p.isInfinity()) return this;
                    var e = p.z.redSqr(),
                        r = this.z.redSqr(),
                        t = this.x.redMul(e),
                        n = p.x.redMul(r),
                        f = this.y.redMul(e.redMul(p.z)),
                        o = p.y.redMul(r.redMul(this.z)),
                        d = t.redSub(n),
                        h = f.redSub(o);
                    if (0 === d.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = d.redSqr(),
                        h3 = h2.redMul(d),
                        c = t.redMul(h2),
                        l = h.redSqr().redIAdd(h3).redISub(c).redISub(c),
                        v = h.redMul(c.redISub(l)).redISub(f.redMul(h3)),
                        y = this.z.redMul(p.z).redMul(d);
                    return this.curve.jpoint(l, v, y)
                }, x.prototype.mixedAdd = function(p) {
                    if (this.isInfinity()) return p.toJ();
                    if (p.isInfinity()) return this;
                    var e = this.z.redSqr(),
                        r = this.x,
                        t = p.x.redMul(e),
                        n = this.y,
                        f = p.y.redMul(e).redMul(this.z),
                        o = r.redSub(t),
                        d = n.redSub(f);
                    if (0 === o.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = o.redSqr(),
                        h3 = h2.redMul(o),
                        h = r.redMul(h2),
                        c = d.redSqr().redIAdd(h3).redISub(h).redISub(h),
                        l = d.redMul(h.redISub(c)).redISub(n.redMul(h3)),
                        v = this.z.redMul(o);
                    return this.curve.jpoint(c, l, v)
                }, x.prototype.dblp = function(e) {
                    if (0 === e) return this;
                    if (this.isInfinity()) return this;
                    if (!e) return this.dbl();
                    var i;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var r = this;
                        for (i = 0; i < e; i++) r = r.dbl();
                        return r
                    }
                    var a = this.curve.a,
                        t = this.curve.tinv,
                        n = this.x,
                        f = this.y,
                        o = this.z,
                        d = o.redSqr().redSqr(),
                        h = f.redAdd(f);
                    for (i = 0; i < e; i++) {
                        var c = n.redSqr(),
                            l = h.redSqr(),
                            v = l.redSqr(),
                            y = c.redAdd(c).redIAdd(c).redIAdd(a.redMul(d)),
                            m = n.redMul(l),
                            E = y.redSqr().redISub(m.redAdd(m)),
                            A = m.redISub(E),
                            I = y.redMul(A);
                        I = I.redIAdd(I).redISub(v);
                        var w = h.redMul(o);
                        i + 1 < e && (d = d.redMul(v)), n = E, o = w, h = I
                    }
                    return this.curve.jpoint(n, h.redMul(t), o)
                }, x.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, x.prototype._zeroDbl = function() {
                    var e, r, t;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            o = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var d = n.redAdd(n).redIAdd(n),
                            h = d.redSqr().redISub(s).redISub(s),
                            c = o.redIAdd(o);
                        c = (c = c.redIAdd(c)).redIAdd(c), e = h, r = d.redMul(s.redISub(h)).redISub(c), t = this.y.redAdd(this.y)
                    } else {
                        var a = this.x.redSqr(),
                            b = this.y.redSqr(),
                            l = b.redSqr(),
                            v = this.x.redAdd(b).redSqr().redISub(a).redISub(l);
                        v = v.redIAdd(v);
                        var y = a.redAdd(a).redIAdd(a),
                            m = y.redSqr(),
                            E = l.redIAdd(l);
                        E = (E = E.redIAdd(E)).redIAdd(E), e = m.redISub(v).redISub(v), r = y.redMul(v.redISub(e)).redISub(E), t = (t = this.y.redMul(this.z)).redIAdd(t)
                    }
                    return this.curve.jpoint(e, r, t)
                }, x.prototype._threeDbl = function() {
                    var e, r, t;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            o = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(o);
                        s = s.redIAdd(s);
                        var d = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            h = d.redSqr().redISub(s).redISub(s);
                        e = h;
                        var c = o.redIAdd(o);
                        c = (c = c.redIAdd(c)).redIAdd(c), r = d.redMul(s.redISub(h)).redISub(c), t = this.y.redAdd(this.y)
                    } else {
                        var l = this.z.redSqr(),
                            v = this.y.redSqr(),
                            y = this.x.redMul(v),
                            m = this.x.redSub(l).redMul(this.x.redAdd(l));
                        m = m.redAdd(m).redIAdd(m);
                        var E = y.redIAdd(y),
                            A = (E = E.redIAdd(E)).redAdd(E);
                        e = m.redSqr().redISub(A), t = this.y.redAdd(this.z).redSqr().redISub(v).redISub(l);
                        var I = v.redSqr();
                        I = (I = (I = I.redIAdd(I)).redIAdd(I)).redIAdd(I), r = m.redMul(E.redISub(e)).redISub(I)
                    }
                    return this.curve.jpoint(e, r, t)
                }, x.prototype._dbl = function() {
                    var a = this.curve.a,
                        e = this.x,
                        r = this.y,
                        t = this.z,
                        n = t.redSqr().redSqr(),
                        f = e.redSqr(),
                        o = r.redSqr(),
                        d = f.redAdd(f).redIAdd(f).redIAdd(a.redMul(n)),
                        h = e.redAdd(e),
                        c = (h = h.redIAdd(h)).redMul(o),
                        l = d.redSqr().redISub(c.redAdd(c)),
                        v = c.redISub(l),
                        y = o.redSqr();
                    y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y);
                    var m = d.redMul(v).redISub(y),
                        E = r.redAdd(r).redMul(t);
                    return this.curve.jpoint(l, m, E)
                }, x.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var e = this.x.redSqr(),
                        r = this.y.redSqr(),
                        t = this.z.redSqr(),
                        n = r.redSqr(),
                        f = e.redAdd(e).redIAdd(e),
                        o = f.redSqr(),
                        d = this.x.redAdd(r).redSqr().redISub(e).redISub(n),
                        h = (d = (d = (d = d.redIAdd(d)).redAdd(d).redIAdd(d)).redISub(o)).redSqr(),
                        c = n.redIAdd(n);
                    c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
                    var u = f.redIAdd(d).redSqr().redISub(o).redISub(h).redISub(c),
                        l = r.redMul(u);
                    l = (l = l.redIAdd(l)).redIAdd(l);
                    var v = this.x.redMul(h).redISub(l);
                    v = (v = v.redIAdd(v)).redIAdd(v);
                    var y = this.y.redMul(u.redMul(c.redISub(u)).redISub(d.redMul(h)));
                    y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y);
                    var m = this.z.redAdd(d).redSqr().redISub(t).redISub(h);
                    return this.curve.jpoint(v, y, m)
                }, x.prototype.mul = function(e, r) {
                    return e = new f.a(e, r), this.curve._wnafMul(this, e)
                }, x.prototype.eq = function(p) {
                    if ("affine" === p.type) return this.eq(p.toJ());
                    if (this === p) return !0;
                    var e = this.z.redSqr(),
                        r = p.z.redSqr();
                    if (0 !== this.x.redMul(r).redISub(p.x.redMul(e)).cmpn(0)) return !1;
                    var t = e.redMul(this.z),
                        n = r.redMul(p.z);
                    return 0 === this.y.redMul(n).redISub(p.y.redMul(t)).cmpn(0)
                }, x.prototype.eqXToP = function(e) {
                    var r = this.z.redSqr(),
                        t = e.toRed(this.curve.red).redMul(r);
                    if (0 === this.x.cmp(t)) return !0;
                    for (var n = e.clone(), f = this.curve.redN.redMul(r);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (t.redIAdd(f), 0 === this.x.cmp(t)) return !0
                    }
                }, x.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, x.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var M = h((function(e, r) {
                        var t = r;
                        t.base = base, t.short = R, t.mont = null, t.edwards = null
                    })),
                    T = h((function(e, r) {
                        var pre, t = r,
                            n = y.assert;

                        function f(e) {
                            "short" === e.type ? this.curve = new M.short(e) : "edwards" === e.type ? this.curve = new M.edwards(e) : this.curve = new M.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function o(e, r) {
                            Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var n = new f(r);
                                    return Object.defineProperty(t, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: n
                                    }), n
                                }
                            })
                        }
                        t.PresetCurve = f, o("p192", {
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

                function O(e) {
                    if (!(this instanceof O)) return new O(e);
                    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var r = v.toArray(e.entropy, e.entropyEnc || "hex"),
                        t = v.toArray(e.nonce, e.nonceEnc || "hex"),
                        n = v.toArray(e.pers, e.persEnc || "hex");
                    c(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, t, n)
                }
                var U = O;
                O.prototype._init = function(e, r, t) {
                    var n = e.concat(r).concat(t);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, O.prototype._hmac = function() {
                    return new d.a.hmac(this.hash, this.K)
                }, O.prototype._update = function(e) {
                    var r = this._hmac().update(this.V).update([0]);
                    e && (r = r.update(e)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
                }, O.prototype.reseed = function(e, r, t, n) {
                    "string" != typeof r && (n = t, t = r, r = null), e = v.toArray(e, r), t = v.toArray(t, n), c(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(t || [])), this._reseed = 1
                }, O.prototype.generate = function(e, r, t, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" != typeof r && (n = t, t = r, r = null), t && (t = v.toArray(t, n || "hex"), this._update(t));
                    for (var f = []; f.length < e;) this.V = this._hmac().update(this.V).digest(), f = f.concat(this.V);
                    var o = f.slice(0, e);
                    return this._update(t), this._reseed++, v.encode(o, r)
                };
                var C = y.assert;

                function L(e, r) {
                    this.ec = e, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
                }
                var D = L;
                L.fromPublic = function(e, r, t) {
                    return r instanceof L ? r : new L(e, {
                        pub: r,
                        pubEnc: t
                    })
                }, L.fromPrivate = function(e, r, t) {
                    return r instanceof L ? r : new L(e, {
                        priv: r,
                        privEnc: t
                    })
                }, L.prototype.validate = function() {
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
                }, L.prototype.getPublic = function(e, r) {
                    return "string" == typeof e && (r = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, e) : this.pub
                }, L.prototype.getPrivate = function(e) {
                    return "hex" === e ? this.priv.toString(16, 2) : this.priv
                }, L.prototype._importPrivate = function(e, r) {
                    this.priv = new f.a(e, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, L.prototype._importPublic = function(e, r) {
                    if (e.x || e.y) return "mont" === this.ec.curve.type ? C(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || C(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                    this.pub = this.ec.curve.decodePoint(e, r)
                }, L.prototype.derive = function(e) {
                    return e.validate() || C(e.validate(), "public point not validated"), e.mul(this.priv).getX()
                }, L.prototype.sign = function(e, r, t) {
                    return this.ec.sign(e, this, r, t)
                }, L.prototype.verify = function(e, r) {
                    return this.ec.verify(e, r, this)
                }, L.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var F = y.assert;

                function k(e, r) {
                    if (e instanceof k) return e;
                    this._importDER(e, r) || (F(e.r && e.s, "Signature without r or s"), this.r = new f.a(e.r, 16), this.s = new f.a(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
                }
                var z = k;

                function G() {
                    this.place = 0
                }

                function j(e, p) {
                    var r = e[p.place++];
                    if (!(128 & r)) return r;
                    var t = 15 & r;
                    if (0 === t || t > 4) return !1;
                    for (var n = 0, i = 0, f = p.place; i < t; i++, f++) n <<= 8, n |= e[f], n >>>= 0;
                    return !(n <= 127) && (p.place = f, n)
                }

                function K(e) {
                    for (var i = 0, r = e.length - 1; !e[i] && !(128 & e[i + 1]) && i < r;) i++;
                    return 0 === i ? e : e.slice(i)
                }

                function W(e, r) {
                    if (r < 128) e.push(r);
                    else {
                        var t = 1 + (Math.log(r) / Math.LN2 >>> 3);
                        for (e.push(128 | t); --t;) e.push(r >>> (t << 3) & 255);
                        e.push(r)
                    }
                }
                k.prototype._importDER = function(data, e) {
                    data = y.toArray(data, e);
                    var p = new G;
                    if (48 !== data[p.place++]) return !1;
                    var r = j(data, p);
                    if (!1 === r) return !1;
                    if (r + p.place !== data.length) return !1;
                    if (2 !== data[p.place++]) return !1;
                    var t = j(data, p);
                    if (!1 === t) return !1;
                    var n = data.slice(p.place, t + p.place);
                    if (p.place += t, 2 !== data[p.place++]) return !1;
                    var o = j(data, p);
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
                }, k.prototype.toDER = function(e) {
                    var r = this.r.toArray(),
                        s = this.s.toArray();
                    for (128 & r[0] && (r = [0].concat(r)), 128 & s[0] && (s = [0].concat(s)), r = K(r), s = K(s); !(s[0] || 128 & s[1]);) s = s.slice(1);
                    var t = [2];
                    W(t, r.length), (t = t.concat(r)).push(2), W(t, s.length);
                    var n = t.concat(s),
                        f = [48];
                    return W(f, n.length), f = f.concat(n), y.encode(f, e)
                };
                var J = function() {
                        throw new Error("unsupported")
                    },
                    X = y.assert;

                function B(e) {
                    if (!(this instanceof B)) return new B(e);
                    "string" == typeof e && (X(Object.prototype.hasOwnProperty.call(T, e), "Unknown curve " + e), e = T[e]), e instanceof T.PresetCurve && (e = {
                        curve: e
                    }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
                }
                var V = B;
                B.prototype.keyPair = function(e) {
                    return new D(this, e)
                }, B.prototype.keyFromPrivate = function(e, r) {
                    return D.fromPrivate(this, e, r)
                }, B.prototype.keyFromPublic = function(e, r) {
                    return D.fromPublic(this, e, r)
                }, B.prototype.genKeyPair = function(e) {
                    e || (e = {});
                    for (var r = new U({
                            hash: this.hash,
                            pers: e.pers,
                            persEnc: e.persEnc || "utf8",
                            entropy: e.entropy || J(this.hash.hmacStrength),
                            entropyEnc: e.entropy && e.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), t = this.n.byteLength(), n = this.n.sub(new f.a(2));;) {
                        var o = new f.a(r.generate(t));
                        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                    }
                }, B.prototype._truncateToN = function(e, r) {
                    var t = 8 * e.byteLength() - this.n.bitLength();
                    return t > 0 && (e = e.ushrn(t)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
                }, B.prototype.sign = function(e, r, t, n) {
                    "object" == typeof t && (n = t, t = null), n || (n = {}), r = this.keyFromPrivate(r, t), e = this._truncateToN(new f.a(e, 16));
                    for (var o = this.n.byteLength(), d = r.getPrivate().toArray("be", o), h = e.toArray("be", o), c = new U({
                            hash: this.hash,
                            entropy: d,
                            nonce: h,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), l = this.n.sub(new f.a(1)), v = 0;; v++) {
                        var y = n.k ? n.k(v) : new f.a(c.generate(this.n.byteLength()));
                        if (!((y = this._truncateToN(y, !0)).cmpn(1) <= 0 || y.cmp(l) >= 0)) {
                            var m = this.g.mul(y);
                            if (!m.isInfinity()) {
                                var E = m.getX(),
                                    A = E.umod(this.n);
                                if (0 !== A.cmpn(0)) {
                                    var s = y.invm(this.n).mul(A.mul(r.getPrivate()).iadd(e));
                                    if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                                        var I = (m.getY().isOdd() ? 1 : 0) | (0 !== E.cmp(A) ? 2 : 0);
                                        return n.canonical && s.cmp(this.nh) > 0 && (s = this.n.sub(s), I ^= 1), new z({
                                            r: A,
                                            s: s,
                                            recoveryParam: I
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, B.prototype.verify = function(e, r, t, n) {
                    e = this._truncateToN(new f.a(e, 16)), t = this.keyFromPublic(t, n);
                    var o = (r = new z(r, "hex")).r,
                        s = r.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var p, d = s.invm(this.n),
                        h = d.mul(e).umod(this.n),
                        c = d.mul(o).umod(this.n);
                    return this.curve._maxwellTrick ? !(p = this.g.jmulAdd(h, t.getPublic(), c)).isInfinity() && p.eqXToP(o) : !(p = this.g.mulAdd(h, t.getPublic(), c)).isInfinity() && 0 === p.getX().umod(this.n).cmp(o)
                }, B.prototype.recoverPubKey = function(e, r, t, n) {
                    X((3 & t) === t, "The recovery param is more than two bits"), r = new z(r, n);
                    var o = this.n,
                        d = new f.a(e),
                        h = r.r,
                        s = r.s,
                        c = 1 & t,
                        l = t >> 1;
                    if (h.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
                    h = l ? this.curve.pointFromX(h.add(this.curve.n), c) : this.curve.pointFromX(h, c);
                    var v = r.r.invm(o),
                        y = o.sub(d).mul(v).umod(o),
                        m = s.mul(v).umod(o);
                    return this.g.mulAdd(y, h, m)
                }, B.prototype.getKeyRecoveryParam = function(e, r, t, n) {
                    if (null !== (r = new z(r, n)).recoveryParam) return r.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var f;
                        try {
                            f = this.recoverPubKey(e, r, i)
                        } catch (e) {
                            continue
                        }
                        if (f.eq(t)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var H = h((function(e, r) {
                    var t = r;
                    t.version = "6.5.4", t.utils = y, t.rand = function() {
                        throw new Error("unsupported")
                    }, t.curve = M, t.curves = T, t.ec = V, t.eddsa = null
                })).ec
            }).call(this, t(36))
        },
        1107: function(e, r, t) {
            "use strict";
            var n;
            t.d(r, "a", (function() {
                    return n
                })),
                function(e) {
                    e.sha256 = "sha256", e.sha512 = "sha512"
                }(n || (n = {}))
        },
        1780: function(e, r, t) {
            "use strict";
            t.d(r, "b", (function() {
                return T
            })), t.d(r, "c", (function() {
                return O
            })), t.d(r, "d", (function() {
                return U
            })), t.d(r, "a", (function() {
                return C
            }));
            var n = t(18),
                f = t.n(n);
            let o = !1,
                d = !1;
            const h = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let c = h.default,
                l = null;
            const v = function() {
                try {
                    const e = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (r) {
                                e.push(form)
                            }
                        })), e.length) throw new Error("missing " + e.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (e) {
                    return e.message
                }
                return null
            }();
            var y, m;
            ! function(e) {
                e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
            }(y || (y = {})),
            function(e) {
                e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED"
            }(m || (m = {}));
            const E = "0123456789abcdef";
            class A {
                constructor(e) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: e,
                        writable: !1
                    })
                }
                _log(e, r) {
                    const t = e.toLowerCase();
                    null == h[t] && this.throwArgumentError("invalid log level name", "logLevel", e), c > h[t] || console.log.apply(console, r)
                }
                debug(...e) {
                    this._log(A.levels.DEBUG, e)
                }
                info(...e) {
                    this._log(A.levels.INFO, e)
                }
                warn(...e) {
                    this._log(A.levels.WARNING, e)
                }
                makeError(e, code, r) {
                    if (d) return this.makeError("censored error", code, {});
                    code || (code = A.errors.UNKNOWN_ERROR), r || (r = {});
                    const t = [];
                    Object.keys(r).forEach((e => {
                        const n = r[e];
                        try {
                            if (n instanceof Uint8Array) {
                                let r = "";
                                for (let i = 0; i < n.length; i++) r += E[n[i] >> 4], r += E[15 & n[i]];
                                t.push(e + "=Uint8Array(0x" + r + ")")
                            } else t.push(e + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(e + "=" + JSON.stringify(r[e].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = e;
                    let f = "";
                    switch (code) {
                        case m.NUMERIC_FAULT:
                            {
                                f = "NUMERIC_FAULT";
                                const r = e;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        f += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        f += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        f += "-unbound-result"
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
                            f = code
                    }
                    f && (e += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"), t.length && (e += " (" + t.join(", ") + ")");
                    const o = new Error(e);
                    return o.reason = n, o.code = code, Object.keys(r).forEach((function(e) {
                        o[e] = r[e]
                    })), o
                }
                throwError(e, code, r) {
                    throw this.makeError(e, code, r)
                }
                throwArgumentError(e, r, t) {
                    return this.throwError(e, A.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: t
                    })
                }
                assert(e, r, code, t) {
                    e || this.throwError(r, code, t)
                }
                assertArgument(e, r, t, n) {
                    e || this.throwArgumentError(r, t, n)
                }
                checkNormalize(e) {
                    null == e && (e = "platform missing String.prototype.normalize"), v && this.throwError("platform missing String.prototype.normalize", A.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: v
                    })
                }
                checkSafeUint53(e, r) {
                    "number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, A.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: e
                    }), e % 1 && this.throwError(r, A.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: e
                    }))
                }
                checkArgumentCount(e, r, t) {
                    t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, A.errors.MISSING_ARGUMENT, {
                        count: e,
                        expectedCount: r
                    }), e > r && this.throwError("too many arguments" + t, A.errors.UNEXPECTED_ARGUMENT, {
                        count: e,
                        expectedCount: r
                    })
                }
                checkNew(e, r) {
                    e !== Object && null != e || this.throwError("missing new", A.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(e, r) {
                    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", A.errors.UNSUPPORTED_OPERATION, {
                        name: e.name,
                        operation: "new"
                    }) : e !== Object && null != e || this.throwError("missing new", A.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return l || (l = new A("logger/5.7.0")), l
                }
                static setCensorship(e, r) {
                    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", A.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), o) {
                        if (!e) return;
                        this.globalLogger().throwError("error censorship permanent", A.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    d = !!e, o = !!r
                }
                static setLogLevel(e) {
                    const r = h[e.toLowerCase()];
                    null != r ? c = r : A.globalLogger().warn("invalid log level - " + e)
                }
                static from(e) {
                    return new A(e)
                }
            }
            A.errors = m, A.levels = y;
            const I = new A("bytes/5.7.0");

            function w(e) {
                return !!e.toHexString
            }

            function N(e) {
                return e.slice || (e.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return N(new Uint8Array(Array.prototype.slice.apply(e, r)))
                }), e
            }

            function S(e) {
                return "number" == typeof e && e == e && e % 1 == 0
            }

            function _(e) {
                if (null == e) return !1;
                if (e.constructor === Uint8Array) return !0;
                if ("string" == typeof e) return !1;
                if (!S(e.length) || e.length < 0) return !1;
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (!S(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function R(e, r) {
                if (r || (r = {}), "number" == typeof e) {
                    I.checkSafeUint53(e, "invalid arrayify value");
                    const r = [];
                    for (; e;) r.unshift(255 & e), e = parseInt(String(e / 256));
                    return 0 === r.length && r.push(0), N(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), w(e) && (e = e.toHexString()), P(e)) {
                    let t = e.substring(2);
                    t.length % 2 && ("left" === r.hexPad ? t = "0" + t : "right" === r.hexPad ? t += "0" : I.throwArgumentError("hex data is odd-length", "value", e));
                    const n = [];
                    for (let i = 0; i < t.length; i += 2) n.push(parseInt(t.substring(i, i + 2), 16));
                    return N(new Uint8Array(n))
                }
                return _(e) ? N(new Uint8Array(e)) : I.throwArgumentError("invalid arrayify value", "value", e)
            }

            function P(e, r) {
                return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
            }
            var x = t(1107);
            const M = new A("sha2/5.5.0");

            function T(data) {
                return "0x" + f.a.ripemd160().update(R(data)).digest("hex")
            }

            function O(data) {
                return "0x" + f.a.sha256().update(R(data)).digest("hex")
            }

            function U(data) {
                return "0x" + f.a.sha512().update(R(data)).digest("hex")
            }

            function C(e, r, data) {
                return x.a[e] || M.throwError("unsupported algorithm " + e, A.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: e
                }), "0x" + f.a.hmac(f.a[e], R(r)).update(R(data)).digest("hex")
            }
        },
        447: function(e, r, t) {
            "use strict";
            t.d(r, "a", (function() {
                return D
            })), t.d(r, "c", (function() {
                return F
            })), t.d(r, "b", (function() {
                return k
            }));
            var n = t(1106);
            let f = !1,
                o = !1;
            const d = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let h = d.default,
                c = null;
            const l = function() {
                try {
                    const e = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (r) {
                                e.push(form)
                            }
                        })), e.length) throw new Error("missing " + e.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (e) {
                    return e.message
                }
                return null
            }();
            var v, y;
            ! function(e) {
                e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
            }(v || (v = {})),
            function(e) {
                e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED"
            }(y || (y = {}));
            const m = "0123456789abcdef";
            class E {
                constructor(e) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: e,
                        writable: !1
                    })
                }
                _log(e, r) {
                    const t = e.toLowerCase();
                    null == d[t] && this.throwArgumentError("invalid log level name", "logLevel", e), h > d[t] || console.log.apply(console, r)
                }
                debug(...e) {
                    this._log(E.levels.DEBUG, e)
                }
                info(...e) {
                    this._log(E.levels.INFO, e)
                }
                warn(...e) {
                    this._log(E.levels.WARNING, e)
                }
                makeError(e, code, r) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = E.errors.UNKNOWN_ERROR), r || (r = {});
                    const t = [];
                    Object.keys(r).forEach((e => {
                        const n = r[e];
                        try {
                            if (n instanceof Uint8Array) {
                                let r = "";
                                for (let i = 0; i < n.length; i++) r += m[n[i] >> 4], r += m[15 & n[i]];
                                t.push(e + "=Uint8Array(0x" + r + ")")
                            } else t.push(e + "=" + JSON.stringify(n))
                        } catch (n) {
                            t.push(e + "=" + JSON.stringify(r[e].toString()))
                        }
                    })), t.push(`code=${code}`), t.push(`version=${this.version}`);
                    const n = e;
                    let f = "";
                    switch (code) {
                        case y.NUMERIC_FAULT:
                            {
                                f = "NUMERIC_FAULT";
                                const r = e;
                                switch (r) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        f += "-" + r;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        f += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        f += "-unbound-result"
                                }
                                break
                            }
                        case y.CALL_EXCEPTION:
                        case y.INSUFFICIENT_FUNDS:
                        case y.MISSING_NEW:
                        case y.NONCE_EXPIRED:
                        case y.REPLACEMENT_UNDERPRICED:
                        case y.TRANSACTION_REPLACED:
                        case y.UNPREDICTABLE_GAS_LIMIT:
                            f = code
                    }
                    f && (e += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"), t.length && (e += " (" + t.join(", ") + ")");
                    const d = new Error(e);
                    return d.reason = n, d.code = code, Object.keys(r).forEach((function(e) {
                        d[e] = r[e]
                    })), d
                }
                throwError(e, code, r) {
                    throw this.makeError(e, code, r)
                }
                throwArgumentError(e, r, t) {
                    return this.throwError(e, E.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: t
                    })
                }
                assert(e, r, code, t) {
                    e || this.throwError(r, code, t)
                }
                assertArgument(e, r, t, n) {
                    e || this.throwArgumentError(r, t, n)
                }
                checkNormalize(e) {
                    null == e && (e = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", E.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: l
                    })
                }
                checkSafeUint53(e, r) {
                    "number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, E.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: e
                    }), e % 1 && this.throwError(r, E.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: e
                    }))
                }
                checkArgumentCount(e, r, t) {
                    t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, E.errors.MISSING_ARGUMENT, {
                        count: e,
                        expectedCount: r
                    }), e > r && this.throwError("too many arguments" + t, E.errors.UNEXPECTED_ARGUMENT, {
                        count: e,
                        expectedCount: r
                    })
                }
                checkNew(e, r) {
                    e !== Object && null != e || this.throwError("missing new", E.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(e, r) {
                    e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", E.errors.UNSUPPORTED_OPERATION, {
                        name: e.name,
                        operation: "new"
                    }) : e !== Object && null != e || this.throwError("missing new", E.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return c || (c = new E("logger/5.7.0")), c
                }
                static setCensorship(e, r) {
                    if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", E.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), f) {
                        if (!e) return;
                        this.globalLogger().throwError("error censorship permanent", E.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!e, f = !!r
                }
                static setLogLevel(e) {
                    const r = d[e.toLowerCase()];
                    null != r ? h = r : E.globalLogger().warn("invalid log level - " + e)
                }
                static from(e) {
                    return new E(e)
                }
            }
            E.errors = y, E.levels = v;
            const A = new E("bytes/5.7.0");

            function I(e) {
                return !!e.toHexString
            }

            function w(e) {
                return e.slice || (e.slice = function() {
                    const r = Array.prototype.slice.call(arguments);
                    return w(new Uint8Array(Array.prototype.slice.apply(e, r)))
                }), e
            }

            function N(e) {
                return "number" == typeof e && e == e && e % 1 == 0
            }

            function S(e) {
                if (null == e) return !1;
                if (e.constructor === Uint8Array) return !0;
                if ("string" == typeof e) return !1;
                if (!N(e.length) || e.length < 0) return !1;
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (!N(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function _(e, r) {
                if (r || (r = {}), "number" == typeof e) {
                    A.checkSafeUint53(e, "invalid arrayify value");
                    const r = [];
                    for (; e;) r.unshift(255 & e), e = parseInt(String(e / 256));
                    return 0 === r.length && r.push(0), w(new Uint8Array(r))
                }
                if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), I(e) && (e = e.toHexString()), R(e)) {
                    let t = e.substring(2);
                    t.length % 2 && ("left" === r.hexPad ? t = "0" + t : "right" === r.hexPad ? t += "0" : A.throwArgumentError("hex data is odd-length", "value", e));
                    const n = [];
                    for (let i = 0; i < t.length; i += 2) n.push(parseInt(t.substring(i, i + 2), 16));
                    return w(new Uint8Array(n))
                }
                return S(e) ? w(new Uint8Array(e)) : A.throwArgumentError("invalid arrayify value", "value", e)
            }

            function R(e, r) {
                return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
            }
            const P = "0123456789abcdef";

            function x(e, r) {
                if (r || (r = {}), "number" == typeof e) {
                    A.checkSafeUint53(e, "invalid hexlify value");
                    let r = "";
                    for (; e;) r = P[15 & e] + r, e = Math.floor(e / 16);
                    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00"
                }
                if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
                if (r.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), I(e)) return e.toHexString();
                if (R(e)) return e.length % 2 && ("left" === r.hexPad ? e = "0x0" + e.substring(2) : "right" === r.hexPad ? e += "0" : A.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
                if (S(e)) {
                    let r = "0x";
                    for (let i = 0; i < e.length; i++) {
                        let t = e[i];
                        r += P[(240 & t) >> 4] + P[15 & t]
                    }
                    return r
                }
                return A.throwArgumentError("invalid hexlify value", "value", e)
            }

            function M(e, r) {
                for ("string" != typeof e ? e = x(e) : R(e) || A.throwArgumentError("invalid hex string", "value", e), e.length > 2 * r + 2 && A.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * r + 2;) e = "0x0" + e.substring(2);
                return e
            }

            function T(e) {
                const r = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (R(t = e) && !(t.length % 2) || S(t)) {
                    let t = _(e);
                    64 === t.length ? (r.v = 27 + (t[32] >> 7), t[32] &= 127, r.r = x(t.slice(0, 32)), r.s = x(t.slice(32, 64))) : 65 === t.length ? (r.r = x(t.slice(0, 32)), r.s = x(t.slice(32, 64)), r.v = t[64]) : A.throwArgumentError("invalid signature string", "signature", e), r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : A.throwArgumentError("signature invalid v byte", "signature", e)), r.recoveryParam = 1 - r.v % 2, r.recoveryParam && (t[32] |= 128), r._vs = x(t.slice(32, 64))
                } else {
                    if (r.r = e.r, r.s = e.s, r.v = e.v, r.recoveryParam = e.recoveryParam, r._vs = e._vs, null != r._vs) {
                        const t = function(e, r) {
                            (e = _(e)).length > r && A.throwArgumentError("value out of range", "value", arguments[0]);
                            const t = new Uint8Array(r);
                            return t.set(e, r - e.length), w(t)
                        }(_(r._vs), 32);
                        r._vs = x(t);
                        const n = t[0] >= 128 ? 1 : 0;
                        null == r.recoveryParam ? r.recoveryParam = n : r.recoveryParam !== n && A.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), t[0] &= 127;
                        const s = x(t);
                        null == r.s ? r.s = s : r.s !== s && A.throwArgumentError("signature v mismatch _vs", "signature", e)
                    }
                    if (null == r.recoveryParam) null == r.v ? A.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                    else if (null == r.v) r.v = 27 + r.recoveryParam;
                    else {
                        const t = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                        r.recoveryParam !== t && A.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
                    }
                    null != r.r && R(r.r) ? r.r = M(r.r, 32) : A.throwArgumentError("signature missing or invalid r", "signature", e), null != r.s && R(r.s) ? r.s = M(r.s, 32) : A.throwArgumentError("signature missing or invalid s", "signature", e);
                    const t = _(r.s);
                    t[0] >= 128 && A.throwArgumentError("signature s out of range", "signature", e), r.recoveryParam && (t[0] |= 128);
                    const n = x(t);
                    r._vs && (R(r._vs) || A.throwArgumentError("signature invalid _vs", "signature", e), r._vs = M(r._vs, 32)), null == r._vs ? r._vs = n : r._vs !== n && A.throwArgumentError("signature _vs mismatch v and s", "signature", e)
                }
                var t;
                return r.yParityAndS = r._vs, r.compact = r.r + r.yParityAndS.substring(2), r
            }
            new E("properties/5.7.0");

            function O(object, e, r) {
                Object.defineProperty(object, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }
            const U = new E("signing-key/5.5.0");
            let C = null;

            function L() {
                return C || (C = new n.a("secp256k1")), C
            }
            class D {
                constructor(e) {
                    O(this, "curve", "secp256k1"), O(this, "privateKey", x(e));
                    const r = L().keyFromPrivate(_(this.privateKey));
                    O(this, "publicKey", "0x" + r.getPublic(!1, "hex")), O(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), O(this, "_isSigningKey", !0)
                }
                _addPoint(e) {
                    const r = L().keyFromPublic(_(this.publicKey)),
                        t = L().keyFromPublic(_(e));
                    return "0x" + r.pub.add(t.pub).encodeCompressed("hex")
                }
                signDigest(e) {
                    const r = L().keyFromPrivate(_(this.privateKey)),
                        t = _(e);
                    32 !== t.length && U.throwArgumentError("bad digest length", "digest", e);
                    const n = r.sign(t, {
                        canonical: !0
                    });
                    return T({
                        recoveryParam: n.recoveryParam,
                        r: M("0x" + n.r.toString(16), 32),
                        s: M("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(e) {
                    const r = L().keyFromPrivate(_(this.privateKey)),
                        t = L().keyFromPublic(_(k(e)));
                    return M("0x" + r.derive(t.getPublic()).toString(16), 32)
                }
                static isSigningKey(e) {
                    return !(!e || !e._isSigningKey)
                }
            }

            function F(e, r) {
                const t = T(r),
                    n = {
                        r: _(t.r),
                        s: _(t.s)
                    };
                return "0x" + L().recoverPubKey(_(e), n, t.recoveryParam).encode("hex", !1)
            }

            function k(e, r) {
                const t = _(e);
                if (32 === t.length) {
                    const e = new D(t);
                    return r ? "0x" + L().keyFromPrivate(t).getPublic(!0, "hex") : e.publicKey
                }
                return 33 === t.length ? r ? x(t) : "0x" + L().keyFromPublic(t).getPublic(!1, "hex") : 65 === t.length ? r ? "0x" + L().keyFromPublic(t).getPublic(!0, "hex") : x(t) : U.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        }
    }
]);