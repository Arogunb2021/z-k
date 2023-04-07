(window.webpackJsonp = window.webpackJsonp || []).push([
    [76], {
        1111: function(t, r, e) {
            "use strict";
            (function(t) {
                e.d(r, "a", (function() {
                    return X
                }));
                var n = e(38),
                    o = e.n(n),
                    f = e(18),
                    h = e.n(f);
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;

                function d(t, r, e) {
                    return e = {
                        path: r,
                        exports: {},
                        require: function(path, base) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == base && e.path)
                        }
                    }, t(e, e.exports), e.exports
                }
                var l = c;

                function c(t, r) {
                    if (!t) throw new Error(r || "Assertion failed")
                }
                c.equal = function(t, r, e) {
                    if (t != r) throw new Error(e || "Assertion failed: " + t + " != " + r)
                };
                var m = d((function(t, r) {
                        var e = r;

                        function n(t) {
                            return 1 === t.length ? "0" + t : t
                        }

                        function o(t) {
                            for (var r = "", i = 0; i < t.length; i++) r += n(t[i].toString(16));
                            return r
                        }
                        e.toArray = function(t, r) {
                            if (Array.isArray(t)) return t.slice();
                            if (!t) return [];
                            var e = [];
                            if ("string" != typeof t) {
                                for (var i = 0; i < t.length; i++) e[i] = 0 | t[i];
                                return e
                            }
                            if ("hex" === r) {
                                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                                for (i = 0; i < t.length; i += 2) e.push(parseInt(t[i] + t[i + 1], 16))
                            } else
                                for (i = 0; i < t.length; i++) {
                                    var n = t.charCodeAt(i),
                                        o = n >> 8,
                                        f = 255 & n;
                                    o ? e.push(o, f) : e.push(f)
                                }
                            return e
                        }, e.zero2 = n, e.toHex = o, e.encode = function(t, r) {
                            return "hex" === r ? o(t) : t
                        }
                    })),
                    v = d((function(t, r) {
                        var e = r;
                        e.assert = l, e.toArray = m.toArray, e.zero2 = m.zero2, e.toHex = m.toHex, e.encode = m.encode, e.getNAF = function(t, r, e) {
                            var n = new Array(Math.max(t.bitLength(), e) + 1);
                            n.fill(0);
                            for (var o = 1 << r + 1, f = t.clone(), i = 0; i < n.length; i++) {
                                var h, d = f.andln(o - 1);
                                f.isOdd() ? (h = d > (o >> 1) - 1 ? (o >> 1) - d : d, f.isubn(h)) : h = 0, n[i] = h, f.iushrn(1)
                            }
                            return n
                        }, e.getJSF = function(t, r) {
                            var e = [
                                [],
                                []
                            ];
                            t = t.clone(), r = r.clone();
                            for (var n, o = 0, f = 0; t.cmpn(-o) > 0 || r.cmpn(-f) > 0;) {
                                var h, d, l = t.andln(3) + o & 3,
                                    c = r.andln(3) + f & 3;
                                3 === l && (l = -1), 3 === c && (c = -1), h = 0 == (1 & l) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== c ? l : -l, e[0].push(h), d = 0 == (1 & c) ? 0 : 3 !== (n = r.andln(7) + f & 7) && 5 !== n || 2 !== l ? c : -c, e[1].push(d), 2 * o === h + 1 && (o = 1 - o), 2 * f === d + 1 && (f = 1 - f), t.iushrn(1), r.iushrn(1)
                            }
                            return e
                        }, e.cachedProperty = function(t, r, e) {
                            var n = "_" + r;
                            t.prototype[r] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = e.call(this)
                            }
                        }, e.parseBytes = function(t) {
                            return "string" == typeof t ? e.toArray(t, "hex") : t
                        }, e.intFromLE = function(t) {
                            return new o.a(t, "hex", "le")
                        }
                    })),
                    y = v.getNAF,
                    M = v.getJSF,
                    w = v.assert;

                function _(t, r) {
                    this.type = t, this.p = new o.a(r.p, 16), this.red = r.prime ? o.a.red(r.prime) : o.a.mont(this.p), this.zero = new o.a(0).toRed(this.red), this.one = new o.a(1).toRed(this.red), this.two = new o.a(2).toRed(this.red), this.n = r.n && new o.a(r.n, 16), this.g = r.g && this.pointFromJSON(r.g, r.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var e = this.n && this.p.div(this.n);
                    !e || e.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var base = _;

                function A(t, r) {
                    this.curve = t, this.type = r, this.precomputed = null
                }
                _.prototype.point = function() {
                    throw new Error("Not implemented")
                }, _.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, _.prototype._fixedNafMul = function(p, t) {
                    w(p.precomputed);
                    var r = p._getDoubles(),
                        e = y(t, 1, this._bitLength),
                        n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
                    n /= 3;
                    var o, f, h = [];
                    for (o = 0; o < e.length; o += r.step) {
                        f = 0;
                        for (var d = o + r.step - 1; d >= o; d--) f = (f << 1) + e[d];
                        h.push(f)
                    }
                    for (var a = this.jpoint(null, null, null), b = this.jpoint(null, null, null), i = n; i > 0; i--) {
                        for (o = 0; o < h.length; o++)(f = h[o]) === i ? b = b.mixedAdd(r.points[o]) : f === -i && (b = b.mixedAdd(r.points[o].neg()));
                        a = a.add(b)
                    }
                    return a.toP()
                }, _.prototype._wnafMul = function(p, t) {
                    var r = 4,
                        e = p._getNAFPoints(r);
                    r = e.wnd;
                    for (var n = e.points, o = y(t, r, this._bitLength), f = this.jpoint(null, null, null), i = o.length - 1; i >= 0; i--) {
                        for (var h = 0; i >= 0 && 0 === o[i]; i--) h++;
                        if (i >= 0 && h++, f = f.dblp(h), i < 0) break;
                        var d = o[i];
                        w(0 !== d), f = "affine" === p.type ? d > 0 ? f.mixedAdd(n[d - 1 >> 1]) : f.mixedAdd(n[-d - 1 >> 1].neg()) : d > 0 ? f.add(n[d - 1 >> 1]) : f.add(n[-d - 1 >> 1].neg())
                    }
                    return "affine" === p.type ? f.toP() : f
                }, _.prototype._wnafMulAdd = function(t, r, e, n, o) {
                    var i, f, p, h = this._wnafT1,
                        d = this._wnafT2,
                        l = this._wnafT3,
                        c = 0;
                    for (i = 0; i < n; i++) {
                        var m = (p = r[i])._getNAFPoints(t);
                        h[i] = m.wnd, d[i] = m.points
                    }
                    for (i = n - 1; i >= 1; i -= 2) {
                        var a = i - 1,
                            b = i;
                        if (1 === h[a] && 1 === h[b]) {
                            var v = [r[a], null, null, r[b]];
                            0 === r[a].y.cmp(r[b].y) ? (v[1] = r[a].add(r[b]), v[2] = r[a].toJ().mixedAdd(r[b].neg())) : 0 === r[a].y.cmp(r[b].y.redNeg()) ? (v[1] = r[a].toJ().mixedAdd(r[b]), v[2] = r[a].add(r[b].neg())) : (v[1] = r[a].toJ().mixedAdd(r[b]), v[2] = r[a].toJ().mixedAdd(r[b].neg()));
                            var w = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                _ = M(e[a], e[b]);
                            for (c = Math.max(_[0].length, c), l[a] = new Array(c), l[b] = new Array(c), f = 0; f < c; f++) {
                                var A = 0 | _[0][f],
                                    E = 0 | _[1][f];
                                l[a][f] = w[3 * (A + 1) + (E + 1)], l[b][f] = 0, d[a] = v
                            }
                        } else l[a] = y(e[a], h[a], this._bitLength), l[b] = y(e[b], h[b], this._bitLength), c = Math.max(l[a].length, c), c = Math.max(l[b].length, c)
                    }
                    var S = this.jpoint(null, null, null),
                        I = this._wnafT4;
                    for (i = c; i >= 0; i--) {
                        for (var R = 0; i >= 0;) {
                            var N = !0;
                            for (f = 0; f < n; f++) I[f] = 0 | l[f][i], 0 !== I[f] && (N = !1);
                            if (!N) break;
                            R++, i--
                        }
                        if (i >= 0 && R++, S = S.dblp(R), i < 0) break;
                        for (f = 0; f < n; f++) {
                            var x = I[f];
                            0 !== x && (x > 0 ? p = d[f][x - 1 >> 1] : x < 0 && (p = d[f][-x - 1 >> 1].neg()), S = "affine" === p.type ? S.mixedAdd(p) : S.add(p))
                        }
                    }
                    for (i = 0; i < n; i++) d[i] = null;
                    return o ? S : S.toP()
                }, _.BasePoint = A, A.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, A.prototype.validate = function() {
                    return this.curve.validate(this)
                }, _.prototype.decodePoint = function(t, r) {
                    t = v.toArray(t, r);
                    var e = this.p.byteLength();
                    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * e) return 6 === t[0] ? w(t[t.length - 1] % 2 == 0) : 7 === t[0] && w(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
                    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e) return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
                    throw new Error("Unknown point format")
                }, A.prototype.encodeCompressed = function(t) {
                    return this.encode(t, !0)
                }, A.prototype._encode = function(t) {
                    var r = this.curve.p.byteLength(),
                        e = this.getX().toArray("be", r);
                    return t ? [this.getY().isEven() ? 2 : 3].concat(e) : [4].concat(e, this.getY().toArray("be", r))
                }, A.prototype.encode = function(t, r) {
                    return v.encode(this._encode(r), t)
                }, A.prototype.precompute = function(t) {
                    if (this.precomputed) return this;
                    var r = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this
                }, A.prototype._hasDoubles = function(t) {
                    if (!this.precomputed) return !1;
                    var r = this.precomputed.doubles;
                    return !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
                }, A.prototype._getDoubles = function(t, r) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var e = [this], n = this, i = 0; i < r; i += t) {
                        for (var o = 0; o < t; o++) n = n.dbl();
                        e.push(n)
                    }
                    return {
                        step: t,
                        points: e
                    }
                }, A.prototype._getNAFPoints = function(t) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var r = [this], e = (1 << t) - 1, n = 1 === e ? null : this.dbl(), i = 1; i < e; i++) r[i] = r[i - 1].add(n);
                    return {
                        wnd: t,
                        points: r
                    }
                }, A.prototype._getBeta = function() {
                    return null
                }, A.prototype.dblp = function(t) {
                    for (var r = this, i = 0; i < t; i++) r = r.dbl();
                    return r
                };
                var E = d((function(t) {
                        "function" == typeof Object.create ? t.exports = function(t, r) {
                            r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, r) {
                            if (r) {
                                t.super_ = r;
                                var e = function() {};
                                e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                            }
                        }
                    })),
                    S = v.assert;

                function I(t) {
                    base.call(this, "short", t), this.a = new o.a(t.a, 16).toRed(this.red), this.b = new o.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                E(I, base);
                var R = I;

                function N(t, r, e, n) {
                    base.BasePoint.call(this, t, "affine"), null === r && null === e ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new o.a(r, 16), this.y = new o.a(e, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function x(t, r, e, n) {
                    base.BasePoint.call(this, t, "jacobian"), null === r && null === e && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new o.a(0)) : (this.x = new o.a(r, 16), this.y = new o.a(e, 16), this.z = new o.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                I.prototype._getEndomorphism = function(t) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var r, e;
                        if (t.beta) r = new o.a(t.beta, 16).toRed(this.red);
                        else {
                            var n = this._getEndoRoots(this.p);
                            r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                        }
                        if (t.lambda) e = new o.a(t.lambda, 16);
                        else {
                            var f = this._getEndoRoots(this.n);
                            0 === this.g.mul(f[0]).x.cmp(this.g.x.redMul(r)) ? e = f[0] : (e = f[1], S(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))))
                        }
                        return {
                            beta: r,
                            lambda: e,
                            basis: t.basis ? t.basis.map((function(t) {
                                return {
                                    a: new o.a(t.a, 16),
                                    b: new o.a(t.b, 16)
                                }
                            })) : this._getEndoBasis(e)
                        }
                    }
                }, I.prototype._getEndoRoots = function(t) {
                    var r = t === this.p ? this.red : o.a.mont(t),
                        e = new o.a(2).toRed(r).redInvm(),
                        n = e.redNeg(),
                        s = new o.a(3).toRed(r).redNeg().redSqrt().redMul(e);
                    return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()]
                }, I.prototype._getEndoBasis = function(t) {
                    for (var r, e, n, f, h, d, l, c, m, v = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = t, y = this.n.clone(), M = new o.a(1), w = new o.a(0), _ = new o.a(0), A = new o.a(1), i = 0; 0 !== u.cmpn(0);) {
                        var q = y.div(u);
                        c = y.sub(q.mul(u)), m = _.sub(q.mul(M));
                        var E = A.sub(q.mul(w));
                        if (!n && c.cmp(v) < 0) r = l.neg(), e = M, n = c.neg(), f = m;
                        else if (n && 2 == ++i) break;
                        l = c, y = u, u = c, _ = M, M = m, A = w, w = E
                    }
                    h = c.neg(), d = m;
                    var S = n.sqr().add(f.sqr());
                    return h.sqr().add(d.sqr()).cmp(S) >= 0 && (h = r, d = e), n.negative && (n = n.neg(), f = f.neg()), h.negative && (h = h.neg(), d = d.neg()), [{
                        a: n,
                        b: f
                    }, {
                        a: h,
                        b: d
                    }]
                }, I.prototype._endoSplit = function(t) {
                    var r = this.endo.basis,
                        e = r[0],
                        n = r[1],
                        o = n.b.mul(t).divRound(this.n),
                        f = e.b.neg().mul(t).divRound(this.n),
                        h = o.mul(e.a),
                        d = f.mul(n.a),
                        l = o.mul(e.b),
                        c = f.mul(n.b);
                    return {
                        k1: t.sub(h).sub(d),
                        k2: l.add(c).neg()
                    }
                }, I.prototype.pointFromX = function(t, r) {
                    (t = new o.a(t, 16)).red || (t = t.toRed(this.red));
                    var e = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                        n = e.redSqrt();
                    if (0 !== n.redSqr().redSub(e).cmp(this.zero)) throw new Error("invalid point");
                    var f = n.fromRed().isOdd();
                    return (r && !f || !r && f) && (n = n.redNeg()), this.point(t, n)
                }, I.prototype.validate = function(t) {
                    if (t.inf) return !0;
                    var r = t.x,
                        e = t.y,
                        n = this.a.redMul(r),
                        o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
                    return 0 === e.redSqr().redISub(o).cmpn(0)
                }, I.prototype._endoWnafMulAdd = function(t, r, e) {
                    for (var n = this._endoWnafT1, o = this._endoWnafT2, i = 0; i < t.length; i++) {
                        var f = this._endoSplit(r[i]),
                            p = t[i],
                            h = p._getBeta();
                        f.k1.negative && (f.k1.ineg(), p = p.neg(!0)), f.k2.negative && (f.k2.ineg(), h = h.neg(!0)), n[2 * i] = p, n[2 * i + 1] = h, o[2 * i] = f.k1, o[2 * i + 1] = f.k2
                    }
                    for (var d = this._wnafMulAdd(1, n, o, 2 * i, e), l = 0; l < 2 * i; l++) n[l] = null, o[l] = null;
                    return d
                }, E(N, base.BasePoint), I.prototype.point = function(t, r, e) {
                    return new N(this, t, r, e)
                }, I.prototype.pointFromJSON = function(t, r) {
                    return N.fromJSON(this, t, r)
                }, N.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var pre = this.precomputed;
                        if (pre && pre.beta) return pre.beta;
                        var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (pre) {
                            var r = this.curve,
                                e = function(p) {
                                    return r.point(p.x.redMul(r.endo.beta), p.y)
                                };
                            pre.beta = t, t.precomputed = {
                                beta: null,
                                naf: pre.naf && {
                                    wnd: pre.naf.wnd,
                                    points: pre.naf.points.map(e)
                                },
                                doubles: pre.doubles && {
                                    step: pre.doubles.step,
                                    points: pre.doubles.points.map(e)
                                }
                            }
                        }
                        return t
                    }
                }, N.prototype.toJSON = function() {
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
                }, N.fromJSON = function(t, r, e) {
                    "string" == typeof r && (r = JSON.parse(r));
                    var n = t.point(r[0], r[1], e);
                    if (!r[2]) return n;

                    function o(r) {
                        return t.point(r[0], r[1], e)
                    }
                    var pre = r[2];
                    return n.precomputed = {
                        beta: null,
                        doubles: pre.doubles && {
                            step: pre.doubles.step,
                            points: [n].concat(pre.doubles.points.map(o))
                        },
                        naf: pre.naf && {
                            wnd: pre.naf.wnd,
                            points: [n].concat(pre.naf.points.map(o))
                        }
                    }, n
                }, N.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, N.prototype.isInfinity = function() {
                    return this.inf
                }, N.prototype.add = function(p) {
                    if (this.inf) return p;
                    if (p.inf) return this;
                    if (this.eq(p)) return this.dbl();
                    if (this.neg().eq(p)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(p.x)) return this.curve.point(null, null);
                    var t = this.y.redSub(p.y);
                    0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(p.x).redInvm()));
                    var r = t.redSqr().redISub(this.x).redISub(p.x),
                        e = t.redMul(this.x.redSub(r)).redISub(this.y);
                    return this.curve.point(r, e)
                }, N.prototype.dbl = function() {
                    if (this.inf) return this;
                    var t = this.y.redAdd(this.y);
                    if (0 === t.cmpn(0)) return this.curve.point(null, null);
                    var a = this.curve.a,
                        r = this.x.redSqr(),
                        e = t.redInvm(),
                        n = r.redAdd(r).redIAdd(r).redIAdd(a).redMul(e),
                        o = n.redSqr().redISub(this.x.redAdd(this.x)),
                        f = n.redMul(this.x.redSub(o)).redISub(this.y);
                    return this.curve.point(o, f)
                }, N.prototype.getX = function() {
                    return this.x.fromRed()
                }, N.prototype.getY = function() {
                    return this.y.fromRed()
                }, N.prototype.mul = function(t) {
                    return t = new o.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
                }, N.prototype.mulAdd = function(t, r, e) {
                    var n = [this, r],
                        o = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2)
                }, N.prototype.jmulAdd = function(t, r, e) {
                    var n = [this, r],
                        o = [t, e];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, !0) : this.curve._wnafMulAdd(1, n, o, 2, !0)
                }, N.prototype.eq = function(p) {
                    return this === p || this.inf === p.inf && (this.inf || 0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))
                }, N.prototype.neg = function(t) {
                    if (this.inf) return this;
                    var r = this.curve.point(this.x, this.y.redNeg());
                    if (t && this.precomputed) {
                        var pre = this.precomputed,
                            e = function(p) {
                                return p.neg()
                            };
                        r.precomputed = {
                            naf: pre.naf && {
                                wnd: pre.naf.wnd,
                                points: pre.naf.points.map(e)
                            },
                            doubles: pre.doubles && {
                                step: pre.doubles.step,
                                points: pre.doubles.points.map(e)
                            }
                        }
                    }
                    return r
                }, N.prototype.toJ = function() {
                    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                }, E(x, base.BasePoint), I.prototype.jpoint = function(t, r, e) {
                    return new x(this, t, r, e)
                }, x.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var t = this.z.redInvm(),
                        r = t.redSqr(),
                        e = this.x.redMul(r),
                        n = this.y.redMul(r).redMul(t);
                    return this.curve.point(e, n)
                }, x.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, x.prototype.add = function(p) {
                    if (this.isInfinity()) return p;
                    if (p.isInfinity()) return this;
                    var t = p.z.redSqr(),
                        r = this.z.redSqr(),
                        e = this.x.redMul(t),
                        n = p.x.redMul(r),
                        o = this.y.redMul(t.redMul(p.z)),
                        f = p.y.redMul(r.redMul(this.z)),
                        h = e.redSub(n),
                        d = o.redSub(f);
                    if (0 === h.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = h.redSqr(),
                        h3 = h2.redMul(h),
                        l = e.redMul(h2),
                        c = d.redSqr().redIAdd(h3).redISub(l).redISub(l),
                        m = d.redMul(l.redISub(c)).redISub(o.redMul(h3)),
                        v = this.z.redMul(p.z).redMul(h);
                    return this.curve.jpoint(c, m, v)
                }, x.prototype.mixedAdd = function(p) {
                    if (this.isInfinity()) return p.toJ();
                    if (p.isInfinity()) return this;
                    var t = this.z.redSqr(),
                        r = this.x,
                        e = p.x.redMul(t),
                        n = this.y,
                        o = p.y.redMul(t).redMul(this.z),
                        f = r.redSub(e),
                        h = n.redSub(o);
                    if (0 === f.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = f.redSqr(),
                        h3 = h2.redMul(f),
                        d = r.redMul(h2),
                        l = h.redSqr().redIAdd(h3).redISub(d).redISub(d),
                        c = h.redMul(d.redISub(l)).redISub(n.redMul(h3)),
                        m = this.z.redMul(f);
                    return this.curve.jpoint(l, c, m)
                }, x.prototype.dblp = function(t) {
                    if (0 === t) return this;
                    if (this.isInfinity()) return this;
                    if (!t) return this.dbl();
                    var i;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var r = this;
                        for (i = 0; i < t; i++) r = r.dbl();
                        return r
                    }
                    var a = this.curve.a,
                        e = this.curve.tinv,
                        n = this.x,
                        o = this.y,
                        f = this.z,
                        h = f.redSqr().redSqr(),
                        d = o.redAdd(o);
                    for (i = 0; i < t; i++) {
                        var l = n.redSqr(),
                            c = d.redSqr(),
                            m = c.redSqr(),
                            v = l.redAdd(l).redIAdd(l).redIAdd(a.redMul(h)),
                            y = n.redMul(c),
                            M = v.redSqr().redISub(y.redAdd(y)),
                            w = y.redISub(M),
                            _ = v.redMul(w);
                        _ = _.redIAdd(_).redISub(m);
                        var A = d.redMul(f);
                        i + 1 < t && (h = h.redMul(m)), n = M, f = A, d = _
                    }
                    return this.curve.jpoint(n, d.redMul(e), f)
                }, x.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, x.prototype._zeroDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            o = this.y.redSqr(),
                            f = o.redSqr(),
                            s = this.x.redAdd(o).redSqr().redISub(n).redISub(f);
                        s = s.redIAdd(s);
                        var h = n.redAdd(n).redIAdd(n),
                            d = h.redSqr().redISub(s).redISub(s),
                            l = f.redIAdd(f);
                        l = (l = l.redIAdd(l)).redIAdd(l), t = d, r = h.redMul(s.redISub(d)).redISub(l), e = this.y.redAdd(this.y)
                    } else {
                        var a = this.x.redSqr(),
                            b = this.y.redSqr(),
                            c = b.redSqr(),
                            m = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
                        m = m.redIAdd(m);
                        var v = a.redAdd(a).redIAdd(a),
                            y = v.redSqr(),
                            M = c.redIAdd(c);
                        M = (M = M.redIAdd(M)).redIAdd(M), t = y.redISub(m).redISub(m), r = v.redMul(m.redISub(t)).redISub(M), e = (e = this.y.redMul(this.z)).redIAdd(e)
                    }
                    return this.curve.jpoint(t, r, e)
                }, x.prototype._threeDbl = function() {
                    var t, r, e;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            o = this.y.redSqr(),
                            f = o.redSqr(),
                            s = this.x.redAdd(o).redSqr().redISub(n).redISub(f);
                        s = s.redIAdd(s);
                        var h = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            d = h.redSqr().redISub(s).redISub(s);
                        t = d;
                        var l = f.redIAdd(f);
                        l = (l = l.redIAdd(l)).redIAdd(l), r = h.redMul(s.redISub(d)).redISub(l), e = this.y.redAdd(this.y)
                    } else {
                        var c = this.z.redSqr(),
                            m = this.y.redSqr(),
                            v = this.x.redMul(m),
                            y = this.x.redSub(c).redMul(this.x.redAdd(c));
                        y = y.redAdd(y).redIAdd(y);
                        var M = v.redIAdd(v),
                            w = (M = M.redIAdd(M)).redAdd(M);
                        t = y.redSqr().redISub(w), e = this.y.redAdd(this.z).redSqr().redISub(m).redISub(c);
                        var _ = m.redSqr();
                        _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_), r = y.redMul(M.redISub(t)).redISub(_)
                    }
                    return this.curve.jpoint(t, r, e)
                }, x.prototype._dbl = function() {
                    var a = this.curve.a,
                        t = this.x,
                        r = this.y,
                        e = this.z,
                        n = e.redSqr().redSqr(),
                        o = t.redSqr(),
                        f = r.redSqr(),
                        h = o.redAdd(o).redIAdd(o).redIAdd(a.redMul(n)),
                        d = t.redAdd(t),
                        l = (d = d.redIAdd(d)).redMul(f),
                        c = h.redSqr().redISub(l.redAdd(l)),
                        m = l.redISub(c),
                        v = f.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var y = h.redMul(m).redISub(v),
                        M = r.redAdd(r).redMul(e);
                    return this.curve.jpoint(c, y, M)
                }, x.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var t = this.x.redSqr(),
                        r = this.y.redSqr(),
                        e = this.z.redSqr(),
                        n = r.redSqr(),
                        o = t.redAdd(t).redIAdd(t),
                        f = o.redSqr(),
                        h = this.x.redAdd(r).redSqr().redISub(t).redISub(n),
                        d = (h = (h = (h = h.redIAdd(h)).redAdd(h).redIAdd(h)).redISub(f)).redSqr(),
                        l = n.redIAdd(n);
                    l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                    var u = o.redIAdd(h).redSqr().redISub(f).redISub(d).redISub(l),
                        c = r.redMul(u);
                    c = (c = c.redIAdd(c)).redIAdd(c);
                    var m = this.x.redMul(d).redISub(c);
                    m = (m = m.redIAdd(m)).redIAdd(m);
                    var v = this.y.redMul(u.redMul(l.redISub(u)).redISub(h.redMul(d)));
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var y = this.z.redAdd(h).redSqr().redISub(e).redISub(d);
                    return this.curve.jpoint(m, v, y)
                }, x.prototype.mul = function(t, r) {
                    return t = new o.a(t, r), this.curve._wnafMul(this, t)
                }, x.prototype.eq = function(p) {
                    if ("affine" === p.type) return this.eq(p.toJ());
                    if (this === p) return !0;
                    var t = this.z.redSqr(),
                        r = p.z.redSqr();
                    if (0 !== this.x.redMul(r).redISub(p.x.redMul(t)).cmpn(0)) return !1;
                    var e = t.redMul(this.z),
                        n = r.redMul(p.z);
                    return 0 === this.y.redMul(n).redISub(p.y.redMul(e)).cmpn(0)
                }, x.prototype.eqXToP = function(t) {
                    var r = this.z.redSqr(),
                        e = t.toRed(this.curve.red).redMul(r);
                    if (0 === this.x.cmp(e)) return !0;
                    for (var n = t.clone(), o = this.curve.redN.redMul(r);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (e.redIAdd(o), 0 === this.x.cmp(e)) return !0
                    }
                }, x.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, x.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var O = d((function(t, r) {
                        var e = r;
                        e.base = base, e.short = R, e.mont = null, e.edwards = null
                    })),
                    P = d((function(t, r) {
                        var pre, e = r,
                            n = v.assert;

                        function o(t) {
                            "short" === t.type ? this.curve = new O.short(t) : "edwards" === t.type ? this.curve = new O.edwards(t) : this.curve = new O.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function f(t, r) {
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var n = new o(r);
                                    return Object.defineProperty(e, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: n
                                    }), n
                                }
                            })
                        }
                        e.PresetCurve = o, f("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: h.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), f("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: h.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), f("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: h.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), f("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: h.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), f("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: h.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), f("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: h.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), f("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: h.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            pre = null.crash()
                        } catch (t) {
                            pre = void 0
                        }
                        f("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: h.a.sha256,
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

                function k(t) {
                    if (!(this instanceof k)) return new k(t);
                    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var r = m.toArray(t.entropy, t.entropyEnc || "hex"),
                        e = m.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = m.toArray(t.pers, t.persEnc || "hex");
                    l(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(r, e, n)
                }
                var T = k;
                k.prototype._init = function(t, r, e) {
                    var n = t.concat(r).concat(e);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, k.prototype._hmac = function() {
                    return new h.a.hmac(this.hash, this.K)
                }, k.prototype._update = function(t) {
                    var r = this._hmac().update(this.V).update([0]);
                    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
                }, k.prototype.reseed = function(t, r, e, n) {
                    "string" != typeof r && (n = e, e = r, r = null), t = m.toArray(t, r), e = m.toArray(e, n), l(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(e || [])), this._reseed = 1
                }, k.prototype.generate = function(t, r, e, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" != typeof r && (n = e, e = r, r = null), e && (e = m.toArray(e, n || "hex"), this._update(e));
                    for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
                    var f = o.slice(0, t);
                    return this._update(e), this._reseed++, m.encode(f, r)
                };
                var U = v.assert;

                function j(t, r) {
                    this.ec = t, this.priv = null, this.pub = null, r.priv && this._importPrivate(r.priv, r.privEnc), r.pub && this._importPublic(r.pub, r.pubEnc)
                }
                var L = j;
                j.fromPublic = function(t, r, e) {
                    return r instanceof j ? r : new j(t, {
                        pub: r,
                        pubEnc: e
                    })
                }, j.fromPrivate = function(t, r, e) {
                    return r instanceof j ? r : new j(t, {
                        priv: r,
                        privEnc: e
                    })
                }, j.prototype.validate = function() {
                    var t = this.getPublic();
                    return t.isInfinity() ? {
                        result: !1,
                        reason: "Invalid public key"
                    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "Public key * N != O"
                    } : {
                        result: !1,
                        reason: "Public key is not a point"
                    }
                }, j.prototype.getPublic = function(t, r) {
                    return "string" == typeof t && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub
                }, j.prototype.getPrivate = function(t) {
                    return "hex" === t ? this.priv.toString(16, 2) : this.priv
                }, j.prototype._importPrivate = function(t, r) {
                    this.priv = new o.a(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, j.prototype._importPublic = function(t, r) {
                    if (t.x || t.y) return "mont" === this.ec.curve.type ? U(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || U(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                    this.pub = this.ec.curve.decodePoint(t, r)
                }, j.prototype.derive = function(t) {
                    return t.validate() || U(t.validate(), "public point not validated"), t.mul(this.priv).getX()
                }, j.prototype.sign = function(t, r, e) {
                    return this.ec.sign(t, this, r, e)
                }, j.prototype.verify = function(t, r) {
                    return this.ec.verify(t, r, this)
                }, j.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var F = v.assert;

                function z(t, r) {
                    if (t instanceof z) return t;
                    this._importDER(t, r) || (F(t.r && t.s, "Signature without r or s"), this.r = new o.a(t.r, 16), this.s = new o.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
                }
                var C = z;

                function D() {
                    this.place = 0
                }

                function B(t, p) {
                    var r = t[p.place++];
                    if (!(128 & r)) return r;
                    var e = 15 & r;
                    if (0 === e || e > 4) return !1;
                    for (var n = 0, i = 0, o = p.place; i < e; i++, o++) n <<= 8, n |= t[o], n >>>= 0;
                    return !(n <= 127) && (p.place = o, n)
                }

                function K(t) {
                    for (var i = 0, r = t.length - 1; !t[i] && !(128 & t[i + 1]) && i < r;) i++;
                    return 0 === i ? t : t.slice(i)
                }

                function V(t, r) {
                    if (r < 128) t.push(r);
                    else {
                        var e = 1 + (Math.log(r) / Math.LN2 >>> 3);
                        for (t.push(128 | e); --e;) t.push(r >>> (e << 3) & 255);
                        t.push(r)
                    }
                }
                z.prototype._importDER = function(data, t) {
                    data = v.toArray(data, t);
                    var p = new D;
                    if (48 !== data[p.place++]) return !1;
                    var r = B(data, p);
                    if (!1 === r) return !1;
                    if (r + p.place !== data.length) return !1;
                    if (2 !== data[p.place++]) return !1;
                    var e = B(data, p);
                    if (!1 === e) return !1;
                    var n = data.slice(p.place, e + p.place);
                    if (p.place += e, 2 !== data[p.place++]) return !1;
                    var f = B(data, p);
                    if (!1 === f) return !1;
                    if (data.length !== f + p.place) return !1;
                    var s = data.slice(p.place, f + p.place);
                    if (0 === n[0]) {
                        if (!(128 & n[1])) return !1;
                        n = n.slice(1)
                    }
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    return this.r = new o.a(n), this.s = new o.a(s), this.recoveryParam = null, !0
                }, z.prototype.toDER = function(t) {
                    var r = this.r.toArray(),
                        s = this.s.toArray();
                    for (128 & r[0] && (r = [0].concat(r)), 128 & s[0] && (s = [0].concat(s)), r = K(r), s = K(s); !(s[0] || 128 & s[1]);) s = s.slice(1);
                    var e = [2];
                    V(e, r.length), (e = e.concat(r)).push(2), V(e, s.length);
                    var n = e.concat(s),
                        o = [48];
                    return V(o, n.length), o = o.concat(n), v.encode(o, t)
                };
                var G = function() {
                        throw new Error("unsupported")
                    },
                    J = v.assert;

                function Z(t) {
                    if (!(this instanceof Z)) return new Z(t);
                    "string" == typeof t && (J(Object.prototype.hasOwnProperty.call(P, t), "Unknown curve " + t), t = P[t]), t instanceof P.PresetCurve && (t = {
                        curve: t
                    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
                }
                var W = Z;
                Z.prototype.keyPair = function(t) {
                    return new L(this, t)
                }, Z.prototype.keyFromPrivate = function(t, r) {
                    return L.fromPrivate(this, t, r)
                }, Z.prototype.keyFromPublic = function(t, r) {
                    return L.fromPublic(this, t, r)
                }, Z.prototype.genKeyPair = function(t) {
                    t || (t = {});
                    for (var r = new T({
                            hash: this.hash,
                            pers: t.pers,
                            persEnc: t.persEnc || "utf8",
                            entropy: t.entropy || G(this.hash.hmacStrength),
                            entropyEnc: t.entropy && t.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), e = this.n.byteLength(), n = this.n.sub(new o.a(2));;) {
                        var f = new o.a(r.generate(e));
                        if (!(f.cmp(n) > 0)) return f.iaddn(1), this.keyFromPrivate(f)
                    }
                }, Z.prototype._truncateToN = function(t, r) {
                    var e = 8 * t.byteLength() - this.n.bitLength();
                    return e > 0 && (t = t.ushrn(e)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
                }, Z.prototype.sign = function(t, r, e, n) {
                    "object" == typeof e && (n = e, e = null), n || (n = {}), r = this.keyFromPrivate(r, e), t = this._truncateToN(new o.a(t, 16));
                    for (var f = this.n.byteLength(), h = r.getPrivate().toArray("be", f), d = t.toArray("be", f), l = new T({
                            hash: this.hash,
                            entropy: h,
                            nonce: d,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), c = this.n.sub(new o.a(1)), m = 0;; m++) {
                        var v = n.k ? n.k(m) : new o.a(l.generate(this.n.byteLength()));
                        if (!((v = this._truncateToN(v, !0)).cmpn(1) <= 0 || v.cmp(c) >= 0)) {
                            var y = this.g.mul(v);
                            if (!y.isInfinity()) {
                                var M = y.getX(),
                                    w = M.umod(this.n);
                                if (0 !== w.cmpn(0)) {
                                    var s = v.invm(this.n).mul(w.mul(r.getPrivate()).iadd(t));
                                    if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                                        var _ = (y.getY().isOdd() ? 1 : 0) | (0 !== M.cmp(w) ? 2 : 0);
                                        return n.canonical && s.cmp(this.nh) > 0 && (s = this.n.sub(s), _ ^= 1), new C({
                                            r: w,
                                            s: s,
                                            recoveryParam: _
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, Z.prototype.verify = function(t, r, e, n) {
                    t = this._truncateToN(new o.a(t, 16)), e = this.keyFromPublic(e, n);
                    var f = (r = new C(r, "hex")).r,
                        s = r.s;
                    if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var p, h = s.invm(this.n),
                        d = h.mul(t).umod(this.n),
                        l = h.mul(f).umod(this.n);
                    return this.curve._maxwellTrick ? !(p = this.g.jmulAdd(d, e.getPublic(), l)).isInfinity() && p.eqXToP(f) : !(p = this.g.mulAdd(d, e.getPublic(), l)).isInfinity() && 0 === p.getX().umod(this.n).cmp(f)
                }, Z.prototype.recoverPubKey = function(t, r, e, n) {
                    J((3 & e) === e, "The recovery param is more than two bits"), r = new C(r, n);
                    var f = this.n,
                        h = new o.a(t),
                        d = r.r,
                        s = r.s,
                        l = 1 & e,
                        c = e >> 1;
                    if (d.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c) throw new Error("Unable to find sencond key candinate");
                    d = c ? this.curve.pointFromX(d.add(this.curve.n), l) : this.curve.pointFromX(d, l);
                    var m = r.r.invm(f),
                        v = f.sub(h).mul(m).umod(f),
                        y = s.mul(m).umod(f);
                    return this.g.mulAdd(v, d, y)
                }, Z.prototype.getKeyRecoveryParam = function(t, r, e, n) {
                    if (null !== (r = new C(r, n)).recoveryParam) return r.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var o;
                        try {
                            o = this.recoverPubKey(t, r, i)
                        } catch (t) {
                            continue
                        }
                        if (o.eq(e)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var X = d((function(t, r) {
                    var e = r;
                    e.version = "6.5.4", e.utils = v, e.rand = function() {
                        throw new Error("unsupported")
                    }, e.curve = O, e.curves = P, e.ec = W, e.eddsa = null
                })).ec
            }).call(this, e(36))
        },
        227: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return c
            })), e.d(r, "a", (function() {
                return y
            }));
            var n = e(20),
                o = e(74);
            const f = new o.a("rlp/5.7.0");

            function h(t) {
                const r = [];
                for (; t;) r.unshift(255 & t), t >>= 8;
                return r
            }

            function d(data, t, r) {
                let e = 0;
                for (let i = 0; i < r; i++) e = 256 * e + data[t + i];
                return e
            }

            function l(object) {
                if (Array.isArray(object)) {
                    let t = [];
                    if (object.forEach((function(r) {
                            t = t.concat(l(r))
                        })), t.length <= 55) return t.unshift(192 + t.length), t;
                    const r = h(t.length);
                    return r.unshift(247 + r.length), r.concat(t)
                }
                Object(n.h)(object) || f.throwArgumentError("RLP object must be BytesLike", "object", object);
                const data = Array.prototype.slice.call(Object(n.a)(object));
                if (1 === data.length && data[0] <= 127) return data;
                if (data.length <= 55) return data.unshift(128 + data.length), data;
                const t = h(data.length);
                return t.unshift(183 + t.length), t.concat(data)
            }

            function c(object) {
                return Object(n.f)(l(object))
            }

            function m(data, t, r, e) {
                const n = [];
                for (; r < t + 1 + e;) {
                    const h = v(data, r);
                    n.push(h.result), (r += h.consumed) > t + 1 + e && f.throwError("child data too short", o.a.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + e,
                    result: n
                }
            }

            function v(data, t) {
                if (0 === data.length && f.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {}), data[t] >= 248) {
                    const r = data[t] - 247;
                    t + 1 + r > data.length && f.throwError("data short segment too short", o.a.errors.BUFFER_OVERRUN, {});
                    const e = d(data, t + 1, r);
                    return t + 1 + r + e > data.length && f.throwError("data long segment too short", o.a.errors.BUFFER_OVERRUN, {}), m(data, t, t + 1 + r, r + e)
                }
                if (data[t] >= 192) {
                    const r = data[t] - 192;
                    return t + 1 + r > data.length && f.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {}), m(data, t, t + 1, r)
                }
                if (data[t] >= 184) {
                    const r = data[t] - 183;
                    t + 1 + r > data.length && f.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
                    const e = d(data, t + 1, r);
                    t + 1 + r + e > data.length && f.throwError("data array too short", o.a.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r + e,
                        result: Object(n.f)(data.slice(t + 1 + r, t + 1 + r + e))
                    }
                }
                if (data[t] >= 128) {
                    const r = data[t] - 128;
                    t + 1 + r > data.length && f.throwError("data too short", o.a.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + r,
                        result: Object(n.f)(data.slice(t + 1, t + 1 + r))
                    }
                }
                return {
                    consumed: 1,
                    result: Object(n.f)(data[t])
                }
            }

            function y(data) {
                const t = Object(n.a)(data),
                    r = v(t, 0);
                return r.consumed !== t.length && f.throwArgumentError("invalid rlp data", "data", data), r.result
            }
        },
        252: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return f
            })), e.d(r, "a", (function() {
                return h
            }));
            var n = e(74);
            const o = new n.a("properties/5.7.0");

            function f(object, t, r) {
                Object.defineProperty(object, t, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function h(object, t) {
                object && "object" == typeof object || o.throwArgumentError("invalid object", "object", object), Object.keys(object).forEach((r => {
                    t[r] || o.throwArgumentError("invalid object key - " + r, "transaction:" + r, object)
                }))
            }
        },
        292: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return h
            }));
            var n = e(79),
                o = e.n(n),
                f = e(20);

            function h(data) {
                return "0x" + o.a.keccak_256(Object(f.a)(data))
            }
        },
        38: function(t, r, e) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function o(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function f(t, base, r) {
                        if (f.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (r = base, base = 10), this._init(t || 0, base || 10, r || "be"))
                    }
                    var h;
                    "object" == typeof t ? t.exports = f : r.BN = f, f.BN = f, f.wordSize = 26;
                    try {
                        h = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(1508).Buffer
                    } catch (t) {}

                    function d(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function l(t, r, e) {
                        var n = d(t, e);
                        return e - 1 >= r && (n |= d(t, e - 1) << 4), n
                    }

                    function c(t, r, e, o) {
                        for (var f = 0, b = 0, h = Math.min(t.length, e), i = r; i < h; i++) {
                            var d = t.charCodeAt(i) - 48;
                            f *= o, b = d >= 49 ? d - 49 + 10 : d >= 17 ? d - 17 + 10 : d, n(d >= 0 && b < o, "Invalid character"), f += b
                        }
                        return f
                    }

                    function m(t, r) {
                        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
                    }
                    if (f.isBN = function(t) {
                            return t instanceof f || null !== t && "object" == typeof t && t.constructor.wordSize === f.wordSize && Array.isArray(t.words)
                        }, f.max = function(t, r) {
                            return t.cmp(r) > 0 ? t : r
                        }, f.min = function(t, r) {
                            return t.cmp(r) < 0 ? t : r
                        }, f.prototype._init = function(t, base, r) {
                            if ("number" == typeof t) return this._initNumber(t, base, r);
                            if ("object" == typeof t) return this._initArray(t, base, r);
                            "hex" === base && (base = 16), n(base === (0 | base) && base >= 2 && base <= 36);
                            var e = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (e++, this.negative = 1), e < t.length && (16 === base ? this._parseHex(t, e, r) : (this._parseBase(t, base, e), "le" === r && this._initArray(this.toArray(), base, r)))
                        }, f.prototype._initNumber = function(t, base, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), base, r)
                        }, f.prototype._initArray = function(t, base, r) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var e, o, f = 0;
                            if ("be" === r)
                                for (i = t.length - 1, e = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[e] |= o << f & 67108863, this.words[e + 1] = o >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, e++);
                            else if ("le" === r)
                                for (i = 0, e = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[e] |= o << f & 67108863, this.words[e + 1] = o >>> 26 - f & 67108863, (f += 24) >= 26 && (f -= 26, e++);
                            return this._strip()
                        }, f.prototype._parseHex = function(t, r, e) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, o = 0,
                                f = 0;
                            if ("be" === e)
                                for (i = t.length - 1; i >= r; i -= 2) n = l(t, r, i) << o, this.words[f] |= 67108863 & n, o >= 18 ? (o -= 18, f += 1, this.words[f] |= n >>> 26) : o += 8;
                            else
                                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = l(t, r, i) << o, this.words[f] |= 67108863 & n, o >= 18 ? (o -= 18, f += 1, this.words[f] |= n >>> 26) : o += 8;
                            this._strip()
                        }, f.prototype._parseBase = function(t, base, r) {
                            this.words = [0], this.length = 1;
                            for (var e = 0, n = 1; n <= 67108863; n *= base) e++;
                            e--, n = n / base | 0;
                            for (var o = t.length - r, f = o % e, h = Math.min(o, o - f) + r, d = 0, i = r; i < h; i += e) d = c(t, i, i + e, base), this.imuln(n), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
                            if (0 !== f) {
                                var l = 1;
                                for (d = c(t, i, t.length, base), i = 0; i < f; i++) l *= base;
                                this.imuln(l), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
                            }
                            this._strip()
                        }, f.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, f.prototype._move = function(t) {
                            m(t, this)
                        }, f.prototype.clone = function() {
                            var t = new f(null);
                            return this.copy(t), t
                        }, f.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, f.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, f.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        f.prototype[Symbol.for("nodejs.util.inspect.custom")] = v
                    } catch (t) {
                        f.prototype.inspect = v
                    } else f.prototype.inspect = v;

                    function v() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var y = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        M = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        w = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    f.prototype.toString = function(base, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            r = "";
                            for (var e = 0, o = 0, i = 0; i < this.length; i++) {
                                var f = this.words[i],
                                    h = (16777215 & (f << e | o)).toString(16);
                                o = f >>> 24 - e & 16777215, (e += 2) >= 26 && (e -= 26, i--), r = 0 !== o || i !== this.length - 1 ? y[6 - h.length] + h + r : h + r
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var d = M[base],
                                l = w[base];
                            r = "";
                            var c = this.clone();
                            for (c.negative = 0; !c.isZero();) {
                                var m = c.modrn(l).toString(base);
                                r = (c = c.idivn(l)).isZero() ? m + r : y[d - m.length] + m + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, f.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, f.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, h && (f.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(h, t, r)
                    }), f.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function _(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | r.words[0],
                            o = a * b,
                            f = 67108863 & o,
                            h = o / 67108864 | 0;
                        e.words[0] = f;
                        for (var d = 1; d < n; d++) {
                            for (var l = h >>> 26, c = 67108863 & h, m = Math.min(d, r.length - 1), v = Math.max(0, d - t.length + 1); v <= m; v++) {
                                var i = d - v | 0;
                                l += (o = (a = 0 | t.words[i]) * (b = 0 | r.words[v]) + c) / 67108864 | 0, c = 67108863 & o
                            }
                            e.words[d] = 0 | c, h = 0 | l
                        }
                        return 0 !== h ? e.words[d] = 0 | h : e.length--, e._strip()
                    }
                    f.prototype.toArrayLike = function(t, r, e) {
                        this._strip();
                        var o = this.byteLength(),
                            f = e || Math.max(1, o);
                        n(o <= f, "byte array longer than desired length"), n(f > 0, "Requested array length <= 0");
                        var h = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, f);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](h, o), h
                    }, f.prototype._toArrayLikeLE = function(t, r) {
                        for (var e = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var f = this.words[i] << o | n;
                            t[e++] = 255 & f, e < t.length && (t[e++] = f >> 8 & 255), e < t.length && (t[e++] = f >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = f >> 24 & 255), n = 0, o = 0) : (n = f >>> 24, o += 2)
                        }
                        if (e < t.length)
                            for (t[e++] = n; e < t.length;) t[e++] = 0
                    }, f.prototype._toArrayLikeBE = function(t, r) {
                        for (var e = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var f = this.words[i] << o | n;
                            t[e--] = 255 & f, e >= 0 && (t[e--] = f >> 8 & 255), e >= 0 && (t[e--] = f >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = f >> 24 & 255), n = 0, o = 0) : (n = f >>> 24, o += 2)
                        }
                        if (e >= 0)
                            for (t[e--] = n; e >= 0;) t[e--] = 0
                    }, Math.clz32 ? f.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : f.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, f.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
                    }, f.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, f.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var b = this._zeroBits(this.words[i]);
                            if (t += b, 26 !== b) break
                        }
                        return t
                    }, f.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, f.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, f.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, f.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, f.prototype.neg = function() {
                        return this.clone().ineg()
                    }, f.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, f.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this._strip()
                    }, f.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, f.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, f.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, f.prototype.iuand = function(t) {
                        var b;
                        b = this.length > t.length ? t : this;
                        for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = b.length, this._strip()
                    }, f.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, f.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, f.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, f.prototype.iuxor = function(t) {
                        var a, b;
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var i = 0; i < b.length; i++) this.words[i] = a.words[i] ^ b.words[i];
                        if (this !== a)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = a.length, this._strip()
                    }, f.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, f.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, f.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, f.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this._strip()
                    }, f.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, f.prototype.setn = function(t, r) {
                        n("number" == typeof t && t >= 0);
                        var e = t / 26 | 0,
                            o = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << o : this.words[e] & ~(1 << o), this._strip()
                    }, f.prototype.iadd = function(t) {
                        var r, a, b;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var e = 0, i = 0; i < b.length; i++) r = (0 | a.words[i]) + (0 | b.words[i]) + e, this.words[i] = 67108863 & r, e = r >>> 26;
                        for (; 0 !== e && i < a.length; i++) r = (0 | a.words[i]) + e, this.words[i] = 67108863 & r, e = r >>> 26;
                        if (this.length = a.length, 0 !== e) this.words[this.length] = e, this.length++;
                        else if (a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this
                    }, f.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, f.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var a, b, e = this.cmp(t);
                        if (0 === e) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        e > 0 ? (a = this, b = t) : (a = t, b = this);
                        for (var n = 0, i = 0; i < b.length; i++) n = (r = (0 | a.words[i]) - (0 | b.words[i]) + n) >> 26, this.words[i] = 67108863 & r;
                        for (; 0 !== n && i < a.length; i++) n = (r = (0 | a.words[i]) + n) >> 26, this.words[i] = 67108863 & r;
                        if (0 === n && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this._strip()
                    }, f.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var A = function(t, r, e) {
                        var n, o, f, a = t.words,
                            b = r.words,
                            h = e.words,
                            d = 0,
                            l = 0 | a[0],
                            c = 8191 & l,
                            m = l >>> 13,
                            v = 0 | a[1],
                            y = 8191 & v,
                            M = v >>> 13,
                            w = 0 | a[2],
                            _ = 8191 & w,
                            A = w >>> 13,
                            E = 0 | a[3],
                            S = 8191 & E,
                            I = E >>> 13,
                            R = 0 | a[4],
                            N = 8191 & R,
                            x = R >>> 13,
                            O = 0 | a[5],
                            P = 8191 & O,
                            k = O >>> 13,
                            T = 0 | a[6],
                            U = 8191 & T,
                            j = T >>> 13,
                            L = 0 | a[7],
                            F = 8191 & L,
                            z = L >>> 13,
                            C = 0 | a[8],
                            D = 8191 & C,
                            B = C >>> 13,
                            K = 0 | a[9],
                            V = 8191 & K,
                            G = K >>> 13,
                            J = 0 | b[0],
                            Z = 8191 & J,
                            W = J >>> 13,
                            X = 0 | b[1],
                            H = 8191 & X,
                            Y = X >>> 13,
                            $ = 0 | b[2],
                            Q = 8191 & $,
                            tt = $ >>> 13,
                            et = 0 | b[3],
                            it = 8191 & et,
                            nt = et >>> 13,
                            ot = 0 | b[4],
                            ft = 8191 & ot,
                            st = ot >>> 13,
                            ht = 0 | b[5],
                            ut = 8191 & ht,
                            at = ht >>> 13,
                            lt = 0 | b[6],
                            ct = 8191 & lt,
                            pt = lt >>> 13,
                            mt = 0 | b[7],
                            vt = 8191 & mt,
                            gt = mt >>> 13,
                            yt = 0 | b[8],
                            bt = 8191 & yt,
                            Mt = yt >>> 13,
                            wt = 0 | b[9],
                            _t = 8191 & wt,
                            At = wt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19;
                        var Et = (d + (n = Math.imul(c, Z)) | 0) + ((8191 & (o = (o = Math.imul(c, W)) + Math.imul(m, Z) | 0)) << 13) | 0;
                        d = ((f = Math.imul(m, W)) + (o >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(y, Z), o = (o = Math.imul(y, W)) + Math.imul(M, Z) | 0, f = Math.imul(M, W);
                        var St = (d + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, Y) | 0) + Math.imul(m, H) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, Y) | 0) + (o >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(_, Z), o = (o = Math.imul(_, W)) + Math.imul(A, Z) | 0, f = Math.imul(A, W), n = n + Math.imul(y, H) | 0, o = (o = o + Math.imul(y, Y) | 0) + Math.imul(M, H) | 0, f = f + Math.imul(M, Y) | 0;
                        var It = (d + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, tt) | 0) + Math.imul(m, Q) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, tt) | 0) + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(S, Z), o = (o = Math.imul(S, W)) + Math.imul(I, Z) | 0, f = Math.imul(I, W), n = n + Math.imul(_, H) | 0, o = (o = o + Math.imul(_, Y) | 0) + Math.imul(A, H) | 0, f = f + Math.imul(A, Y) | 0, n = n + Math.imul(y, Q) | 0, o = (o = o + Math.imul(y, tt) | 0) + Math.imul(M, Q) | 0, f = f + Math.imul(M, tt) | 0;
                        var Rt = (d + (n = n + Math.imul(c, it) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, nt) | 0) + Math.imul(m, it) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, nt) | 0) + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(N, Z), o = (o = Math.imul(N, W)) + Math.imul(x, Z) | 0, f = Math.imul(x, W), n = n + Math.imul(S, H) | 0, o = (o = o + Math.imul(S, Y) | 0) + Math.imul(I, H) | 0, f = f + Math.imul(I, Y) | 0, n = n + Math.imul(_, Q) | 0, o = (o = o + Math.imul(_, tt) | 0) + Math.imul(A, Q) | 0, f = f + Math.imul(A, tt) | 0, n = n + Math.imul(y, it) | 0, o = (o = o + Math.imul(y, nt) | 0) + Math.imul(M, it) | 0, f = f + Math.imul(M, nt) | 0;
                        var Nt = (d + (n = n + Math.imul(c, ft) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, st) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, st) | 0) + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(P, Z), o = (o = Math.imul(P, W)) + Math.imul(k, Z) | 0, f = Math.imul(k, W), n = n + Math.imul(N, H) | 0, o = (o = o + Math.imul(N, Y) | 0) + Math.imul(x, H) | 0, f = f + Math.imul(x, Y) | 0, n = n + Math.imul(S, Q) | 0, o = (o = o + Math.imul(S, tt) | 0) + Math.imul(I, Q) | 0, f = f + Math.imul(I, tt) | 0, n = n + Math.imul(_, it) | 0, o = (o = o + Math.imul(_, nt) | 0) + Math.imul(A, it) | 0, f = f + Math.imul(A, nt) | 0, n = n + Math.imul(y, ft) | 0, o = (o = o + Math.imul(y, st) | 0) + Math.imul(M, ft) | 0, f = f + Math.imul(M, st) | 0;
                        var xt = (d + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, at) | 0) + Math.imul(m, ut) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, at) | 0) + (o >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(U, Z), o = (o = Math.imul(U, W)) + Math.imul(j, Z) | 0, f = Math.imul(j, W), n = n + Math.imul(P, H) | 0, o = (o = o + Math.imul(P, Y) | 0) + Math.imul(k, H) | 0, f = f + Math.imul(k, Y) | 0, n = n + Math.imul(N, Q) | 0, o = (o = o + Math.imul(N, tt) | 0) + Math.imul(x, Q) | 0, f = f + Math.imul(x, tt) | 0, n = n + Math.imul(S, it) | 0, o = (o = o + Math.imul(S, nt) | 0) + Math.imul(I, it) | 0, f = f + Math.imul(I, nt) | 0, n = n + Math.imul(_, ft) | 0, o = (o = o + Math.imul(_, st) | 0) + Math.imul(A, ft) | 0, f = f + Math.imul(A, st) | 0, n = n + Math.imul(y, ut) | 0, o = (o = o + Math.imul(y, at) | 0) + Math.imul(M, ut) | 0, f = f + Math.imul(M, at) | 0;
                        var Ot = (d + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, pt) | 0) + Math.imul(m, ct) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, pt) | 0) + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(F, Z), o = (o = Math.imul(F, W)) + Math.imul(z, Z) | 0, f = Math.imul(z, W), n = n + Math.imul(U, H) | 0, o = (o = o + Math.imul(U, Y) | 0) + Math.imul(j, H) | 0, f = f + Math.imul(j, Y) | 0, n = n + Math.imul(P, Q) | 0, o = (o = o + Math.imul(P, tt) | 0) + Math.imul(k, Q) | 0, f = f + Math.imul(k, tt) | 0, n = n + Math.imul(N, it) | 0, o = (o = o + Math.imul(N, nt) | 0) + Math.imul(x, it) | 0, f = f + Math.imul(x, nt) | 0, n = n + Math.imul(S, ft) | 0, o = (o = o + Math.imul(S, st) | 0) + Math.imul(I, ft) | 0, f = f + Math.imul(I, st) | 0, n = n + Math.imul(_, ut) | 0, o = (o = o + Math.imul(_, at) | 0) + Math.imul(A, ut) | 0, f = f + Math.imul(A, at) | 0, n = n + Math.imul(y, ct) | 0, o = (o = o + Math.imul(y, pt) | 0) + Math.imul(M, ct) | 0, f = f + Math.imul(M, pt) | 0;
                        var Pt = (d + (n = n + Math.imul(c, vt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, gt) | 0) + Math.imul(m, vt) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, gt) | 0) + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(D, Z), o = (o = Math.imul(D, W)) + Math.imul(B, Z) | 0, f = Math.imul(B, W), n = n + Math.imul(F, H) | 0, o = (o = o + Math.imul(F, Y) | 0) + Math.imul(z, H) | 0, f = f + Math.imul(z, Y) | 0, n = n + Math.imul(U, Q) | 0, o = (o = o + Math.imul(U, tt) | 0) + Math.imul(j, Q) | 0, f = f + Math.imul(j, tt) | 0, n = n + Math.imul(P, it) | 0, o = (o = o + Math.imul(P, nt) | 0) + Math.imul(k, it) | 0, f = f + Math.imul(k, nt) | 0, n = n + Math.imul(N, ft) | 0, o = (o = o + Math.imul(N, st) | 0) + Math.imul(x, ft) | 0, f = f + Math.imul(x, st) | 0, n = n + Math.imul(S, ut) | 0, o = (o = o + Math.imul(S, at) | 0) + Math.imul(I, ut) | 0, f = f + Math.imul(I, at) | 0, n = n + Math.imul(_, ct) | 0, o = (o = o + Math.imul(_, pt) | 0) + Math.imul(A, ct) | 0, f = f + Math.imul(A, pt) | 0, n = n + Math.imul(y, vt) | 0, o = (o = o + Math.imul(y, gt) | 0) + Math.imul(M, vt) | 0, f = f + Math.imul(M, gt) | 0;
                        var kt = (d + (n = n + Math.imul(c, bt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, Mt) | 0) + Math.imul(m, bt) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, Mt) | 0) + (o >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(V, Z), o = (o = Math.imul(V, W)) + Math.imul(G, Z) | 0, f = Math.imul(G, W), n = n + Math.imul(D, H) | 0, o = (o = o + Math.imul(D, Y) | 0) + Math.imul(B, H) | 0, f = f + Math.imul(B, Y) | 0, n = n + Math.imul(F, Q) | 0, o = (o = o + Math.imul(F, tt) | 0) + Math.imul(z, Q) | 0, f = f + Math.imul(z, tt) | 0, n = n + Math.imul(U, it) | 0, o = (o = o + Math.imul(U, nt) | 0) + Math.imul(j, it) | 0, f = f + Math.imul(j, nt) | 0, n = n + Math.imul(P, ft) | 0, o = (o = o + Math.imul(P, st) | 0) + Math.imul(k, ft) | 0, f = f + Math.imul(k, st) | 0, n = n + Math.imul(N, ut) | 0, o = (o = o + Math.imul(N, at) | 0) + Math.imul(x, ut) | 0, f = f + Math.imul(x, at) | 0, n = n + Math.imul(S, ct) | 0, o = (o = o + Math.imul(S, pt) | 0) + Math.imul(I, ct) | 0, f = f + Math.imul(I, pt) | 0, n = n + Math.imul(_, vt) | 0, o = (o = o + Math.imul(_, gt) | 0) + Math.imul(A, vt) | 0, f = f + Math.imul(A, gt) | 0, n = n + Math.imul(y, bt) | 0, o = (o = o + Math.imul(y, Mt) | 0) + Math.imul(M, bt) | 0, f = f + Math.imul(M, Mt) | 0;
                        var qt = (d + (n = n + Math.imul(c, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(c, At) | 0) + Math.imul(m, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(m, At) | 0) + (o >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(V, H), o = (o = Math.imul(V, Y)) + Math.imul(G, H) | 0, f = Math.imul(G, Y), n = n + Math.imul(D, Q) | 0, o = (o = o + Math.imul(D, tt) | 0) + Math.imul(B, Q) | 0, f = f + Math.imul(B, tt) | 0, n = n + Math.imul(F, it) | 0, o = (o = o + Math.imul(F, nt) | 0) + Math.imul(z, it) | 0, f = f + Math.imul(z, nt) | 0, n = n + Math.imul(U, ft) | 0, o = (o = o + Math.imul(U, st) | 0) + Math.imul(j, ft) | 0, f = f + Math.imul(j, st) | 0, n = n + Math.imul(P, ut) | 0, o = (o = o + Math.imul(P, at) | 0) + Math.imul(k, ut) | 0, f = f + Math.imul(k, at) | 0, n = n + Math.imul(N, ct) | 0, o = (o = o + Math.imul(N, pt) | 0) + Math.imul(x, ct) | 0, f = f + Math.imul(x, pt) | 0, n = n + Math.imul(S, vt) | 0, o = (o = o + Math.imul(S, gt) | 0) + Math.imul(I, vt) | 0, f = f + Math.imul(I, gt) | 0, n = n + Math.imul(_, bt) | 0, o = (o = o + Math.imul(_, Mt) | 0) + Math.imul(A, bt) | 0, f = f + Math.imul(A, Mt) | 0;
                        var Tt = (d + (n = n + Math.imul(y, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(y, At) | 0) + Math.imul(M, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(M, At) | 0) + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(V, Q), o = (o = Math.imul(V, tt)) + Math.imul(G, Q) | 0, f = Math.imul(G, tt), n = n + Math.imul(D, it) | 0, o = (o = o + Math.imul(D, nt) | 0) + Math.imul(B, it) | 0, f = f + Math.imul(B, nt) | 0, n = n + Math.imul(F, ft) | 0, o = (o = o + Math.imul(F, st) | 0) + Math.imul(z, ft) | 0, f = f + Math.imul(z, st) | 0, n = n + Math.imul(U, ut) | 0, o = (o = o + Math.imul(U, at) | 0) + Math.imul(j, ut) | 0, f = f + Math.imul(j, at) | 0, n = n + Math.imul(P, ct) | 0, o = (o = o + Math.imul(P, pt) | 0) + Math.imul(k, ct) | 0, f = f + Math.imul(k, pt) | 0, n = n + Math.imul(N, vt) | 0, o = (o = o + Math.imul(N, gt) | 0) + Math.imul(x, vt) | 0, f = f + Math.imul(x, gt) | 0, n = n + Math.imul(S, bt) | 0, o = (o = o + Math.imul(S, Mt) | 0) + Math.imul(I, bt) | 0, f = f + Math.imul(I, Mt) | 0;
                        var Ut = (d + (n = n + Math.imul(_, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(_, At) | 0) + Math.imul(A, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(A, At) | 0) + (o >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(V, it), o = (o = Math.imul(V, nt)) + Math.imul(G, it) | 0, f = Math.imul(G, nt), n = n + Math.imul(D, ft) | 0, o = (o = o + Math.imul(D, st) | 0) + Math.imul(B, ft) | 0, f = f + Math.imul(B, st) | 0, n = n + Math.imul(F, ut) | 0, o = (o = o + Math.imul(F, at) | 0) + Math.imul(z, ut) | 0, f = f + Math.imul(z, at) | 0, n = n + Math.imul(U, ct) | 0, o = (o = o + Math.imul(U, pt) | 0) + Math.imul(j, ct) | 0, f = f + Math.imul(j, pt) | 0, n = n + Math.imul(P, vt) | 0, o = (o = o + Math.imul(P, gt) | 0) + Math.imul(k, vt) | 0, f = f + Math.imul(k, gt) | 0, n = n + Math.imul(N, bt) | 0, o = (o = o + Math.imul(N, Mt) | 0) + Math.imul(x, bt) | 0, f = f + Math.imul(x, Mt) | 0;
                        var jt = (d + (n = n + Math.imul(S, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(S, At) | 0) + Math.imul(I, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(I, At) | 0) + (o >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(V, ft), o = (o = Math.imul(V, st)) + Math.imul(G, ft) | 0, f = Math.imul(G, st), n = n + Math.imul(D, ut) | 0, o = (o = o + Math.imul(D, at) | 0) + Math.imul(B, ut) | 0, f = f + Math.imul(B, at) | 0, n = n + Math.imul(F, ct) | 0, o = (o = o + Math.imul(F, pt) | 0) + Math.imul(z, ct) | 0, f = f + Math.imul(z, pt) | 0, n = n + Math.imul(U, vt) | 0, o = (o = o + Math.imul(U, gt) | 0) + Math.imul(j, vt) | 0, f = f + Math.imul(j, gt) | 0, n = n + Math.imul(P, bt) | 0, o = (o = o + Math.imul(P, Mt) | 0) + Math.imul(k, bt) | 0, f = f + Math.imul(k, Mt) | 0;
                        var Lt = (d + (n = n + Math.imul(N, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(N, At) | 0) + Math.imul(x, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(x, At) | 0) + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(V, ut), o = (o = Math.imul(V, at)) + Math.imul(G, ut) | 0, f = Math.imul(G, at), n = n + Math.imul(D, ct) | 0, o = (o = o + Math.imul(D, pt) | 0) + Math.imul(B, ct) | 0, f = f + Math.imul(B, pt) | 0, n = n + Math.imul(F, vt) | 0, o = (o = o + Math.imul(F, gt) | 0) + Math.imul(z, vt) | 0, f = f + Math.imul(z, gt) | 0, n = n + Math.imul(U, bt) | 0, o = (o = o + Math.imul(U, Mt) | 0) + Math.imul(j, bt) | 0, f = f + Math.imul(j, Mt) | 0;
                        var Ft = (d + (n = n + Math.imul(P, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(P, At) | 0) + Math.imul(k, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(k, At) | 0) + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, n = Math.imul(V, ct), o = (o = Math.imul(V, pt)) + Math.imul(G, ct) | 0, f = Math.imul(G, pt), n = n + Math.imul(D, vt) | 0, o = (o = o + Math.imul(D, gt) | 0) + Math.imul(B, vt) | 0, f = f + Math.imul(B, gt) | 0, n = n + Math.imul(F, bt) | 0, o = (o = o + Math.imul(F, Mt) | 0) + Math.imul(z, bt) | 0, f = f + Math.imul(z, Mt) | 0;
                        var zt = (d + (n = n + Math.imul(U, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(U, At) | 0) + Math.imul(j, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(j, At) | 0) + (o >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, n = Math.imul(V, vt), o = (o = Math.imul(V, gt)) + Math.imul(G, vt) | 0, f = Math.imul(G, gt), n = n + Math.imul(D, bt) | 0, o = (o = o + Math.imul(D, Mt) | 0) + Math.imul(B, bt) | 0, f = f + Math.imul(B, Mt) | 0;
                        var Ct = (d + (n = n + Math.imul(F, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(F, At) | 0) + Math.imul(z, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(z, At) | 0) + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, n = Math.imul(V, bt), o = (o = Math.imul(V, Mt)) + Math.imul(G, bt) | 0, f = Math.imul(G, Mt);
                        var Dt = (d + (n = n + Math.imul(D, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(D, At) | 0) + Math.imul(B, _t) | 0)) << 13) | 0;
                        d = ((f = f + Math.imul(B, At) | 0) + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863;
                        var Bt = (d + (n = Math.imul(V, _t)) | 0) + ((8191 & (o = (o = Math.imul(V, At)) + Math.imul(G, _t) | 0)) << 13) | 0;
                        return d = ((f = Math.imul(G, At)) + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, h[0] = Et, h[1] = St, h[2] = It, h[3] = Rt, h[4] = Nt, h[5] = xt, h[6] = Ot, h[7] = Pt, h[8] = kt, h[9] = qt, h[10] = Tt, h[11] = Ut, h[12] = jt, h[13] = Lt, h[14] = Ft, h[15] = zt, h[16] = Ct, h[17] = Dt, h[18] = Bt, 0 !== d && (h[19] = d, e.length++), e
                    };

                    function E(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, o = 0, f = 0; f < e.length - 1; f++) {
                            var h = o;
                            o = 0;
                            for (var d = 67108863 & n, l = Math.min(f, r.length - 1), c = Math.max(0, f - t.length + 1); c <= l; c++) {
                                var i = f - c,
                                    m = (0 | t.words[i]) * (0 | r.words[c]),
                                    v = 67108863 & m;
                                d = 67108863 & (v = v + d | 0), o += (h = (h = h + (m / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, h &= 67108863
                            }
                            e.words[f] = d, n = h, h = o
                        }
                        return 0 !== n ? e.words[f] = n : e.length--, e._strip()
                    }

                    function S(t, r, e) {
                        return E(t, r, e)
                    }

                    function I(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (A = _), f.prototype.mulTo = function(t, r) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? A(this, t, r) : e < 63 ? _(this, t, r) : e < 1024 ? E(this, t, r) : S(this, t, r)
                    }, I.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = f.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, e, t);
                        return r
                    }, I.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, I.prototype.permute = function(t, r, e, n, o, f) {
                        for (var i = 0; i < f; i++) n[i] = r[t[i]], o[i] = e[t[i]]
                    }, I.prototype.transform = function(t, r, e, n, o, f) {
                        this.permute(f, t, r, e, n, o);
                        for (var s = 1; s < o; s <<= 1)
                            for (var h = s << 1, d = Math.cos(2 * Math.PI / h), l = Math.sin(2 * Math.PI / h), p = 0; p < o; p += h)
                                for (var c = d, m = l, v = 0; v < s; v++) {
                                    var y = e[p + v],
                                        M = n[p + v],
                                        w = e[p + v + s],
                                        _ = n[p + v + s],
                                        A = c * w - m * _;
                                    _ = c * _ + m * w, w = A, e[p + v] = y + w, n[p + v] = M + _, e[p + v + s] = y - w, n[p + v + s] = M - _, v !== h && (A = d * c - l * m, m = d * m + l * c, c = A)
                                }
                    }, I.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, I.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var i = 0; i < e / 2; i++) {
                                var n = t[i];
                                t[i] = t[e - i - 1], t[e - i - 1] = n, n = r[i], r[i] = -r[e - i - 1], r[e - i - 1] = -n
                            }
                    }, I.prototype.normalize13b = function(t, r) {
                        for (var e = 0, i = 0; i < r / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + e;
                            t[i] = 67108863 & n, e = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, I.prototype.convert13b = function(t, r, e, o) {
                        for (var f = 0, i = 0; i < r; i++) f += 0 | t[i], e[2 * i] = 8191 & f, f >>>= 13, e[2 * i + 1] = 8191 & f, f >>>= 13;
                        for (i = 2 * r; i < o; ++i) e[i] = 0;
                        n(0 === f), n(0 == (-8192 & f))
                    }, I.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, I.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            o = this.makeRBT(n),
                            f = this.stub(n),
                            h = new Array(n),
                            d = new Array(n),
                            l = new Array(n),
                            c = new Array(n),
                            m = new Array(n),
                            v = new Array(n),
                            y = e.words;
                        y.length = n, this.convert13b(t.words, t.length, h, n), this.convert13b(r.words, r.length, c, n), this.transform(h, f, d, l, n, o), this.transform(c, f, m, v, n, o);
                        for (var i = 0; i < n; i++) {
                            var M = d[i] * m[i] - l[i] * v[i];
                            l[i] = d[i] * v[i] + l[i] * m[i], d[i] = M
                        }
                        return this.conjugate(d, l, n), this.transform(d, l, y, f, n, o), this.conjugate(y, f, n), this.normalize13b(y, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e._strip()
                    }, f.prototype.mul = function(t) {
                        var r = new f(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, f.prototype.mulf = function(t) {
                        var r = new f(null);
                        return r.words = new Array(this.length + t.length), S(this, t, r)
                    }, f.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, f.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var e = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t,
                                f = (67108863 & o) + (67108863 & e);
                            e >>= 26, e += o / 67108864 | 0, e += f >>> 26, this.words[i] = 67108863 & f
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), r ? this.ineg() : this
                    }, f.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, f.prototype.sqr = function() {
                        return this.mul(this)
                    }, f.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, f.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                                var n = e / 26 | 0,
                                    o = e % 26;
                                r[e] = t.words[n] >>> o & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new f(1);
                        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
                        if (++i < r.length)
                            for (var q = e.sqr(); i < r.length; i++, q = q.sqr()) 0 !== r[i] && (e = e.mul(q));
                        return e
                    }, f.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            s = (t - r) / 26,
                            e = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var f = this.words[i] & e,
                                    h = (0 | this.words[i]) - f << r;
                                this.words[i] = h | o, o = f >>> 26 - r
                            }
                            o && (this.words[i] = o, this.length++)
                        }
                        if (0 !== s) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                            for (i = 0; i < s; i++) this.words[i] = 0;
                            this.length += s
                        }
                        return this._strip()
                    }, f.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, f.prototype.iushrn = function(t, r, e) {
                        var o;
                        n("number" == typeof t && t >= 0), o = r ? (r - r % 26) / 26 : 0;
                        var f = t % 26,
                            s = Math.min((t - f) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> f << f,
                            h = e;
                        if (o -= s, o = Math.max(0, o), h) {
                            for (var i = 0; i < s; i++) h.words[i] = this.words[i];
                            h.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var d = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== d || i >= o); i--) {
                            var l = 0 | this.words[i];
                            this.words[i] = d << 26 - f | l >>> f, d = l & mask
                        }
                        return h && 0 !== d && (h.words[h.length++] = d), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, f.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, f.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, f.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, f.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, f.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, f.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, f.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== r && s++, this.length = Math.min(s, this.length), 0 !== r) {
                            var mask = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= mask
                        }
                        return this._strip()
                    }, f.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, f.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, f.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, f.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this._strip()
                    }, f.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, f.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, f.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, f.prototype.abs = function() {
                        return this.clone().iabs()
                    }, f.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, f = t.length + e;
                        this._expand(f);
                        var h = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + h;
                            var d = (0 | t.words[i]) * r;
                            h = ((o -= 67108863 & d) >> 26) - (d / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) h = (o = (0 | this.words[i + e]) + h) >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === h) return this._strip();
                        for (n(-1 === h), h = 0, i = 0; i < this.length; i++) h = (o = -(0 | this.words[i]) + h) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, f.prototype._wordDiv = function(t, r) {
                        var e = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            n = 0 | b.words[b.length - 1];
                        0 !== (e = 26 - this._countBits(n)) && (b = b.ushln(e), a.iushln(e), n = 0 | b.words[b.length - 1]);
                        var q, o = a.length - b.length;
                        if ("mod" !== r) {
                            (q = new f(null)).length = o + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var h = a.clone()._ishlnsubmul(b, 1, o);
                        0 === h.negative && (a = h, q && (q.words[o] = 1));
                        for (var d = o - 1; d >= 0; d--) {
                            var l = 67108864 * (0 | a.words[b.length + d]) + (0 | a.words[b.length + d - 1]);
                            for (l = Math.min(l / n | 0, 67108863), a._ishlnsubmul(b, l, d); 0 !== a.negative;) l--, a.negative = 0, a._ishlnsubmul(b, 1, d), a.isZero() || (a.negative ^= 1);
                            q && (q.words[d] = l)
                        }
                        return q && q._strip(), a._strip(), "div" !== r && 0 !== e && a.iushrn(e), {
                            div: q || null,
                            mod: a
                        }
                    }, f.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new f(0),
                            mod: new f(0)
                        } : 0 !== this.negative && 0 === t.negative ? (h = this.neg().divmod(t, r), "mod" !== r && (div = h.div.neg()), "div" !== r && (o = h.mod.neg(), e && 0 !== o.negative && o.iadd(t)), {
                            div: div,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (h = this.divmod(t.neg(), r), "mod" !== r && (div = h.div.neg()), {
                            div: div,
                            mod: h.mod
                        }) : 0 != (this.negative & t.negative) ? (h = this.neg().divmod(t.neg(), r), "div" !== r && (o = h.mod.neg(), e && 0 !== o.negative && o.isub(t)), {
                            div: h.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new f(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new f(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new f(this.modrn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var div, o, h
                    }, f.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, f.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, f.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, f.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            o = t.andln(1),
                            f = e.cmp(n);
                        return f < 0 || 1 === o && 0 === f ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, f.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var p = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (p * e + (0 | this.words[i])) % t;
                        return r ? -e : e
                    }, f.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, f.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * e;
                            this.words[i] = o / t | 0, e = o % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, f.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, f.prototype.egcd = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var t = this,
                            r = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var e = new f(1), o = new f(0), h = new f(0), d = new f(1), g = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++g;
                        for (var l = r.clone(), c = t.clone(); !t.isZero();) {
                            for (var i = 0, m = 1; 0 == (t.words[0] & m) && i < 26; ++i, m <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(e.isOdd() || o.isOdd()) && (e.iadd(l), o.isub(c)), e.iushrn(1), o.iushrn(1);
                            for (var v = 0, y = 1; 0 == (r.words[0] & y) && v < 26; ++v, y <<= 1);
                            if (v > 0)
                                for (r.iushrn(v); v-- > 0;)(h.isOdd() || d.isOdd()) && (h.iadd(l), d.isub(c)), h.iushrn(1), d.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), e.isub(h), o.isub(d)) : (r.isub(t), h.isub(e), d.isub(o))
                        }
                        return {
                            a: h,
                            b: d,
                            gcd: r.iushln(g)
                        }
                    }, f.prototype._invmp = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, r = new f(1), e = new f(0), o = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, h = 1; 0 == (a.words[0] & h) && i < 26; ++i, h <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) r.isOdd() && r.iadd(o), r.iushrn(1);
                            for (var d = 0, l = 1; 0 == (b.words[0] & l) && d < 26; ++d, l <<= 1);
                            if (d > 0)
                                for (b.iushrn(d); d-- > 0;) e.isOdd() && e.iadd(o), e.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), r.isub(e)) : (b.isub(a), e.isub(r))
                        }
                        return (t = 0 === a.cmpn(1) ? r : e).cmpn(0) < 0 && t.iadd(p), t
                    }, f.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var a = this.clone(),
                            b = t.clone();
                        a.negative = 0, b.negative = 0;
                        for (var r = 0; a.isEven() && b.isEven(); r++) a.iushrn(1), b.iushrn(1);
                        for (;;) {
                            for (; a.isEven();) a.iushrn(1);
                            for (; b.isEven();) b.iushrn(1);
                            var e = a.cmp(b);
                            if (e < 0) {
                                var n = a;
                                a = b, b = n
                            } else if (0 === e || 0 === b.cmpn(1)) break;
                            a.isub(b)
                        }
                        return b.iushln(r)
                    }, f.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, f.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, f.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, f.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, f.prototype.bincn = function(t) {
                        n("number" == typeof t);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var e = q, i = s; 0 !== e && i < this.length; i++) {
                            var o = 0 | this.words[i];
                            e = (o += e) >>> 26, o &= 67108863, this.words[i] = o
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), this
                    }, f.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, f.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this._strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
                            var o = 0 | this.words[0];
                            r = o === t ? 0 : o < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, f.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, f.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var a = 0 | this.words[i],
                                b = 0 | t.words[i];
                            if (a !== b) {
                                a < b ? r = -1 : a > b && (r = 1);
                                break
                            }
                        }
                        return r
                    }, f.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, f.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, f.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, f.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, f.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, f.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, f.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, f.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, f.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, f.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, f.red = function(t) {
                        return new T(t)
                    }, f.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, f.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, f.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, f.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, f.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, f.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, f.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, f.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, f.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, f.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, f.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, f.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, f.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, f.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, f.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, f.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, f.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var R = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function N(t, p) {
                        this.name = t, this.p = new f(p, 16), this.n = this.p.bitLength(), this.k = new f(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function x() {
                        N.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function O() {
                        N.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function P() {
                        N.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function k() {
                        N.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function T(t) {
                        if ("string" == typeof t) {
                            var r = f._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function U(t) {
                        T.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new f(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    N.prototype._tmp = function() {
                        var t = new f(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, N.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, N.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, N.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, o(x, N), x.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var e = 0 | input.words[i];
                            input.words[i - 10] = (e & mask) << 4 | r >>> 22, r = e
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, x.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 0 | t.words[i];
                            r += 977 * e, t.words[i] = 67108863 & r, r = 64 * e + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, o(O, N), o(P, N), o(k, N), k.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 19 * (0 | t.words[i]) + r,
                                n = 67108863 & e;
                            e >>>= 26, t.words[i] = n, r = e
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, f._prime = function(t) {
                        if (R[t]) return R[t];
                        var r;
                        if ("k256" === t) r = new x;
                        else if ("p224" === t) r = new O;
                        else if ("p192" === t) r = new P;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new k
                        }
                        return R[t] = r, r
                    }, T.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, T.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, T.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (m(a, a.umod(this.m)._forceRed(this)), a)
                    }, T.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, T.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, T.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, T.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, T.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, T.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, T.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, T.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, T.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, T.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, T.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new f(1)).iushrn(2);
                            return this.pow(a, r)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        n(!q.isZero());
                        var e = new f(1).toRed(this),
                            o = e.redNeg(),
                            h = this.m.subn(1).iushrn(1),
                            d = this.m.bitLength();
                        for (d = new f(2 * d * d).toRed(this); 0 !== this.pow(d, h).cmp(o);) d.redIAdd(o);
                        for (var l = this.pow(d, q), c = this.pow(a, q.addn(1).iushrn(1)), m = this.pow(a, q), v = s; 0 !== m.cmp(e);) {
                            for (var y = m, i = 0; 0 !== y.cmp(e); i++) y = y.redSqr();
                            n(i < v);
                            var b = this.pow(l, new f(1).iushln(v - i - 1));
                            c = c.redMul(b), l = b.redSqr(), m = m.redMul(l), v = i
                        }
                        return c
                    }, T.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, T.prototype.pow = function(a, t) {
                        if (t.isZero()) return new f(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var r = new Array(16);
                        r[0] = new f(1).toRed(this), r[1] = a;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], a);
                        var e = r[0],
                            n = 0,
                            o = 0,
                            h = t.bitLength() % 26;
                        for (0 === h && (h = 26), i = t.length - 1; i >= 0; i--) {
                            for (var d = t.words[i], l = h - 1; l >= 0; l--) {
                                var c = d >> l & 1;
                                e !== r[0] && (e = this.sqr(e)), 0 !== c || 0 !== n ? (n <<= 1, n |= c, (4 === ++o || 0 === i && 0 === l) && (e = this.mul(e, r[n]), o = 0, n = 0)) : o = 0
                            }
                            h = 26
                        }
                        return e
                    }, T.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, T.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, f.mont = function(t) {
                        return new U(t)
                    }, o(U, T), U.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, U.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, U.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, U.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new f(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, U.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(82)(t))
        },
        639: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return m
            })), e.d(r, "a", (function() {
                return v
            }));
            var n = e(1111),
                o = e(20),
                f = e(252);
            const h = new(e(74).a)("signing-key/5.7.0");
            let d = null;

            function l() {
                return d || (d = new n.a("secp256k1")), d
            }
            class c {
                constructor(t) {
                    Object(f.b)(this, "curve", "secp256k1"), Object(f.b)(this, "privateKey", Object(o.f)(t)), 32 !== Object(o.c)(this.privateKey) && h.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    const r = l().keyFromPrivate(Object(o.a)(this.privateKey));
                    Object(f.b)(this, "publicKey", "0x" + r.getPublic(!1, "hex")), Object(f.b)(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), Object(f.b)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const r = l().keyFromPublic(Object(o.a)(this.publicKey)),
                        e = l().keyFromPublic(Object(o.a)(t));
                    return "0x" + r.pub.add(e.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const r = l().keyFromPrivate(Object(o.a)(this.privateKey)),
                        e = Object(o.a)(t);
                    32 !== e.length && h.throwArgumentError("bad digest length", "digest", t);
                    const n = r.sign(e, {
                        canonical: !0
                    });
                    return Object(o.j)({
                        recoveryParam: n.recoveryParam,
                        r: Object(o.e)("0x" + n.r.toString(16), 32),
                        s: Object(o.e)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const r = l().keyFromPrivate(Object(o.a)(this.privateKey)),
                        e = l().keyFromPublic(Object(o.a)(v(t)));
                    return Object(o.e)("0x" + r.derive(e.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function m(t, r) {
                const e = Object(o.j)(r),
                    n = {
                        r: Object(o.a)(e.r),
                        s: Object(o.a)(e.s)
                    };
                return "0x" + l().recoverPubKey(Object(o.a)(t), n, e.recoveryParam).encode("hex", !1)
            }

            function v(t, r) {
                const e = Object(o.a)(t);
                if (32 === e.length) {
                    const t = new c(e);
                    return r ? "0x" + l().keyFromPrivate(e).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === e.length ? r ? Object(o.f)(e) : "0x" + l().keyFromPublic(e).getPublic(!1, "hex") : 65 === e.length ? r ? "0x" + l().keyFromPublic(e).getPublic(!0, "hex") : Object(o.f)(e) : h.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        74: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return y
            }));
            let n = !1,
                o = !1;
            const f = {
                debug: 1,
                default: 2,
                info: 2,
                warning: 3,
                error: 4,
                off: 5
            };
            let h = f.default,
                d = null;
            const l = function() {
                try {
                    const t = [];
                    if (["NFD", "NFC", "NFKD", "NFKC"].forEach((form => {
                            try {
                                if ("test" !== "test".normalize(form)) throw new Error("bad normalize")
                            } catch (r) {
                                t.push(form)
                            }
                        })), t.length) throw new Error("missing " + t.join(", "));
                    if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                } catch (t) {
                    return t.message
                }
                return null
            }();
            var c, m;
            ! function(t) {
                t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
            }(c || (c = {})),
            function(t) {
                t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
            }(m || (m = {}));
            const v = "0123456789abcdef";
            class y {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, r) {
                    const e = t.toLowerCase();
                    null == f[e] && this.throwArgumentError("invalid log level name", "logLevel", t), h > f[e] || console.log.apply(console, r)
                }
                debug(...t) {
                    this._log(y.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(y.levels.INFO, t)
                }
                warn(...t) {
                    this._log(y.levels.WARNING, t)
                }
                makeError(t, code, r) {
                    if (o) return this.makeError("censored error", code, {});
                    code || (code = y.errors.UNKNOWN_ERROR), r || (r = {});
                    const e = [];
                    Object.keys(r).forEach((t => {
                        const n = r[t];
                        try {
                            if (n instanceof Uint8Array) {
                                let r = "";
                                for (let i = 0; i < n.length; i++) r += v[n[i] >> 4], r += v[15 & n[i]];
                                e.push(t + "=Uint8Array(0x" + r + ")")
                            } else e.push(t + "=" + JSON.stringify(n))
                        } catch (n) {
                            e.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    })), e.push(`code=${code}`), e.push(`version=${this.version}`);
                    const n = t;
                    let f = "";
                    switch (code) {
                        case m.NUMERIC_FAULT:
                            {
                                f = "NUMERIC_FAULT";
                                const r = t;
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
                    f && (t += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"), e.length && (t += " (" + e.join(", ") + ")");
                    const h = new Error(t);
                    return h.reason = n, h.code = code, Object.keys(r).forEach((function(t) {
                        h[t] = r[t]
                    })), h
                }
                throwError(t, code, r) {
                    throw this.makeError(t, code, r)
                }
                throwArgumentError(t, r, e) {
                    return this.throwError(t, y.errors.INVALID_ARGUMENT, {
                        argument: r,
                        value: e
                    })
                }
                assert(t, r, code, e) {
                    t || this.throwError(r, code, e)
                }
                assertArgument(t, r, e, n) {
                    t || this.throwArgumentError(r, e, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", y.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: l
                    })
                }
                checkSafeUint53(t, r) {
                    "number" == typeof t && (null == r && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, y.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(r, y.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, r, e) {
                    e = e ? ": " + e : "", t < r && this.throwError("missing argument" + e, y.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    }), t > r && this.throwError("too many arguments" + e, y.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: r
                    })
                }
                checkNew(t, r) {
                    t !== Object && null != t || this.throwError("missing new", y.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                checkAbstract(t, r) {
                    t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", y.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : t !== Object && null != t || this.throwError("missing new", y.errors.MISSING_NEW, {
                        name: r.name
                    })
                }
                static globalLogger() {
                    return d || (d = new y("logger/5.7.0")), d
                }
                static setCensorship(t, r) {
                    if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", y.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), n) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", y.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!t, n = !!r
                }
                static setLogLevel(t) {
                    const r = f[t.toLowerCase()];
                    null != r ? h = r : y.globalLogger().warn("invalid log level - " + t)
                }
                static from(t) {
                    return new y(t)
                }
            }
            y.errors = m, y.levels = c
        }
    }
]);