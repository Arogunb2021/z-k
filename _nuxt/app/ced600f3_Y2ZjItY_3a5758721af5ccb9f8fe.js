(window.webpackJsonp = window.webpackJsonp || []).push([
    [116], {
        1105: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return W
                }));
                var n = r(37),
                    f = r.n(n),
                    h = r(18),
                    o = r.n(h);
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;

                function d(t, e, r) {
                    return r = {
                        path: e,
                        exports: {},
                        require: function(path, base) {
                            return function() {
                                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                            }(null == base && r.path)
                        }
                    }, t(r, r.exports), r.exports
                }
                var l = c;

                function c(t, e) {
                    if (!t) throw new Error(e || "Assertion failed")
                }
                c.equal = function(t, e, r) {
                    if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
                };
                var m = d((function(t, e) {
                        var r = e;

                        function n(t) {
                            return 1 === t.length ? "0" + t : t
                        }

                        function f(t) {
                            for (var e = "", i = 0; i < t.length; i++) e += n(t[i].toString(16));
                            return e
                        }
                        r.toArray = function(t, e) {
                            if (Array.isArray(t)) return t.slice();
                            if (!t) return [];
                            var r = [];
                            if ("string" != typeof t) {
                                for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                                return r
                            }
                            if ("hex" === e) {
                                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                                for (i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                            } else
                                for (i = 0; i < t.length; i++) {
                                    var n = t.charCodeAt(i),
                                        f = n >> 8,
                                        h = 255 & n;
                                    f ? r.push(f, h) : r.push(h)
                                }
                            return r
                        }, r.zero2 = n, r.toHex = f, r.encode = function(t, e) {
                            return "hex" === e ? f(t) : t
                        }
                    })),
                    v = d((function(t, e) {
                        var r = e;
                        r.assert = l, r.toArray = m.toArray, r.zero2 = m.zero2, r.toHex = m.toHex, r.encode = m.encode, r.getNAF = function(t, e, r) {
                            var n = new Array(Math.max(t.bitLength(), r) + 1);
                            n.fill(0);
                            for (var f = 1 << e + 1, h = t.clone(), i = 0; i < n.length; i++) {
                                var o, d = h.andln(f - 1);
                                h.isOdd() ? (o = d > (f >> 1) - 1 ? (f >> 1) - d : d, h.isubn(o)) : o = 0, n[i] = o, h.iushrn(1)
                            }
                            return n
                        }, r.getJSF = function(t, e) {
                            var r = [
                                [],
                                []
                            ];
                            t = t.clone(), e = e.clone();
                            for (var n, f = 0, h = 0; t.cmpn(-f) > 0 || e.cmpn(-h) > 0;) {
                                var o, d, l = t.andln(3) + f & 3,
                                    c = e.andln(3) + h & 3;
                                3 === l && (l = -1), 3 === c && (c = -1), o = 0 == (1 & l) ? 0 : 3 !== (n = t.andln(7) + f & 7) && 5 !== n || 2 !== c ? l : -l, r[0].push(o), d = 0 == (1 & c) ? 0 : 3 !== (n = e.andln(7) + h & 7) && 5 !== n || 2 !== l ? c : -c, r[1].push(d), 2 * f === o + 1 && (f = 1 - f), 2 * h === d + 1 && (h = 1 - h), t.iushrn(1), e.iushrn(1)
                            }
                            return r
                        }, r.cachedProperty = function(t, e, r) {
                            var n = "_" + e;
                            t.prototype[e] = function() {
                                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                            }
                        }, r.parseBytes = function(t) {
                            return "string" == typeof t ? r.toArray(t, "hex") : t
                        }, r.intFromLE = function(t) {
                            return new f.a(t, "hex", "le")
                        }
                    })),
                    y = v.getNAF,
                    M = v.getJSF,
                    w = v.assert;

                function _(t, e) {
                    this.type = t, this.p = new f.a(e.p, 16), this.red = e.prime ? f.a.red(e.prime) : f.a.mont(this.p), this.zero = new f.a(0).toRed(this.red), this.one = new f.a(1).toRed(this.red), this.two = new f.a(2).toRed(this.red), this.n = e.n && new f.a(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                    var r = this.n && this.p.div(this.n);
                    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
                }
                var base = _;

                function A(t, e) {
                    this.curve = t, this.type = e, this.precomputed = null
                }
                _.prototype.point = function() {
                    throw new Error("Not implemented")
                }, _.prototype.validate = function() {
                    throw new Error("Not implemented")
                }, _.prototype._fixedNafMul = function(p, t) {
                    w(p.precomputed);
                    var e = p._getDoubles(),
                        r = y(t, 1, this._bitLength),
                        n = (1 << e.step + 1) - (e.step % 2 == 0 ? 2 : 1);
                    n /= 3;
                    var f, h, o = [];
                    for (f = 0; f < r.length; f += e.step) {
                        h = 0;
                        for (var d = f + e.step - 1; d >= f; d--) h = (h << 1) + r[d];
                        o.push(h)
                    }
                    for (var a = this.jpoint(null, null, null), b = this.jpoint(null, null, null), i = n; i > 0; i--) {
                        for (f = 0; f < o.length; f++)(h = o[f]) === i ? b = b.mixedAdd(e.points[f]) : h === -i && (b = b.mixedAdd(e.points[f].neg()));
                        a = a.add(b)
                    }
                    return a.toP()
                }, _.prototype._wnafMul = function(p, t) {
                    var e = 4,
                        r = p._getNAFPoints(e);
                    e = r.wnd;
                    for (var n = r.points, f = y(t, e, this._bitLength), h = this.jpoint(null, null, null), i = f.length - 1; i >= 0; i--) {
                        for (var o = 0; i >= 0 && 0 === f[i]; i--) o++;
                        if (i >= 0 && o++, h = h.dblp(o), i < 0) break;
                        var d = f[i];
                        w(0 !== d), h = "affine" === p.type ? d > 0 ? h.mixedAdd(n[d - 1 >> 1]) : h.mixedAdd(n[-d - 1 >> 1].neg()) : d > 0 ? h.add(n[d - 1 >> 1]) : h.add(n[-d - 1 >> 1].neg())
                    }
                    return "affine" === p.type ? h.toP() : h
                }, _.prototype._wnafMulAdd = function(t, e, r, n, f) {
                    var i, h, p, o = this._wnafT1,
                        d = this._wnafT2,
                        l = this._wnafT3,
                        c = 0;
                    for (i = 0; i < n; i++) {
                        var m = (p = e[i])._getNAFPoints(t);
                        o[i] = m.wnd, d[i] = m.points
                    }
                    for (i = n - 1; i >= 1; i -= 2) {
                        var a = i - 1,
                            b = i;
                        if (1 === o[a] && 1 === o[b]) {
                            var v = [e[a], null, null, e[b]];
                            0 === e[a].y.cmp(e[b].y) ? (v[1] = e[a].add(e[b]), v[2] = e[a].toJ().mixedAdd(e[b].neg())) : 0 === e[a].y.cmp(e[b].y.redNeg()) ? (v[1] = e[a].toJ().mixedAdd(e[b]), v[2] = e[a].add(e[b].neg())) : (v[1] = e[a].toJ().mixedAdd(e[b]), v[2] = e[a].toJ().mixedAdd(e[b].neg()));
                            var w = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                _ = M(r[a], r[b]);
                            for (c = Math.max(_[0].length, c), l[a] = new Array(c), l[b] = new Array(c), h = 0; h < c; h++) {
                                var A = 0 | _[0][h],
                                    S = 0 | _[1][h];
                                l[a][h] = w[3 * (A + 1) + (S + 1)], l[b][h] = 0, d[a] = v
                            }
                        } else l[a] = y(r[a], o[a], this._bitLength), l[b] = y(r[b], o[b], this._bitLength), c = Math.max(l[a].length, c), c = Math.max(l[b].length, c)
                    }
                    var I = this.jpoint(null, null, null),
                        x = this._wnafT4;
                    for (i = c; i >= 0; i--) {
                        for (var E = 0; i >= 0;) {
                            var R = !0;
                            for (h = 0; h < n; h++) x[h] = 0 | l[h][i], 0 !== x[h] && (R = !1);
                            if (!R) break;
                            E++, i--
                        }
                        if (i >= 0 && E++, I = I.dblp(E), i < 0) break;
                        for (h = 0; h < n; h++) {
                            var k = x[h];
                            0 !== k && (k > 0 ? p = d[h][k - 1 >> 1] : k < 0 && (p = d[h][-k - 1 >> 1].neg()), I = "affine" === p.type ? I.mixedAdd(p) : I.add(p))
                        }
                    }
                    for (i = 0; i < n; i++) d[i] = null;
                    return f ? I : I.toP()
                }, _.BasePoint = A, A.prototype.eq = function() {
                    throw new Error("Not implemented")
                }, A.prototype.validate = function() {
                    return this.curve.validate(this)
                }, _.prototype.decodePoint = function(t, e) {
                    t = v.toArray(t, e);
                    var r = this.p.byteLength();
                    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? w(t[t.length - 1] % 2 == 0) : 7 === t[0] && w(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                    throw new Error("Unknown point format")
                }, A.prototype.encodeCompressed = function(t) {
                    return this.encode(t, !0)
                }, A.prototype._encode = function(t) {
                    var e = this.curve.p.byteLength(),
                        r = this.getX().toArray("be", e);
                    return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
                }, A.prototype.encode = function(t, e) {
                    return v.encode(this._encode(e), t)
                }, A.prototype.precompute = function(t) {
                    if (this.precomputed) return this;
                    var e = {
                        doubles: null,
                        naf: null,
                        beta: null
                    };
                    return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
                }, A.prototype._hasDoubles = function(t) {
                    if (!this.precomputed) return !1;
                    var e = this.precomputed.doubles;
                    return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
                }, A.prototype._getDoubles = function(t, e) {
                    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                    for (var r = [this], n = this, i = 0; i < e; i += t) {
                        for (var f = 0; f < t; f++) n = n.dbl();
                        r.push(n)
                    }
                    return {
                        step: t,
                        points: r
                    }
                }, A.prototype._getNAFPoints = function(t) {
                    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                    for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                    return {
                        wnd: t,
                        points: e
                    }
                }, A.prototype._getBeta = function() {
                    return null
                }, A.prototype.dblp = function(t) {
                    for (var e = this, i = 0; i < t; i++) e = e.dbl();
                    return e
                };
                var S = d((function(t) {
                        "function" == typeof Object.create ? t.exports = function(t, e) {
                            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : t.exports = function(t, e) {
                            if (e) {
                                t.super_ = e;
                                var r = function() {};
                                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                            }
                        }
                    })),
                    I = v.assert;

                function x(t) {
                    base.call(this, "short", t), this.a = new f.a(t.a, 16).toRed(this.red), this.b = new f.a(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
                }
                S(x, base);
                var E = x;

                function R(t, e, r, n) {
                    base.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new f.a(e, 16), this.y = new f.a(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
                }

                function k(t, e, r, n) {
                    base.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new f.a(0)) : (this.x = new f.a(e, 16), this.y = new f.a(r, 16), this.z = new f.a(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
                }
                x.prototype._getEndomorphism = function(t) {
                    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                        var e, r;
                        if (t.beta) e = new f.a(t.beta, 16).toRed(this.red);
                        else {
                            var n = this._getEndoRoots(this.p);
                            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                        }
                        if (t.lambda) r = new f.a(t.lambda, 16);
                        else {
                            var h = this._getEndoRoots(this.n);
                            0 === this.g.mul(h[0]).x.cmp(this.g.x.redMul(e)) ? r = h[0] : (r = h[1], I(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                        }
                        return {
                            beta: e,
                            lambda: r,
                            basis: t.basis ? t.basis.map((function(t) {
                                return {
                                    a: new f.a(t.a, 16),
                                    b: new f.a(t.b, 16)
                                }
                            })) : this._getEndoBasis(r)
                        }
                    }
                }, x.prototype._getEndoRoots = function(t) {
                    var e = t === this.p ? this.red : f.a.mont(t),
                        r = new f.a(2).toRed(e).redInvm(),
                        n = r.redNeg(),
                        s = new f.a(3).toRed(e).redNeg().redSqrt().redMul(r);
                    return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()]
                }, x.prototype._getEndoBasis = function(t) {
                    for (var e, r, n, h, o, d, l, c, m, v = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = t, y = this.n.clone(), M = new f.a(1), w = new f.a(0), _ = new f.a(0), A = new f.a(1), i = 0; 0 !== u.cmpn(0);) {
                        var q = y.div(u);
                        c = y.sub(q.mul(u)), m = _.sub(q.mul(M));
                        var S = A.sub(q.mul(w));
                        if (!n && c.cmp(v) < 0) e = l.neg(), r = M, n = c.neg(), h = m;
                        else if (n && 2 == ++i) break;
                        l = c, y = u, u = c, _ = M, M = m, A = w, w = S
                    }
                    o = c.neg(), d = m;
                    var I = n.sqr().add(h.sqr());
                    return o.sqr().add(d.sqr()).cmp(I) >= 0 && (o = e, d = r), n.negative && (n = n.neg(), h = h.neg()), o.negative && (o = o.neg(), d = d.neg()), [{
                        a: n,
                        b: h
                    }, {
                        a: o,
                        b: d
                    }]
                }, x.prototype._endoSplit = function(t) {
                    var e = this.endo.basis,
                        r = e[0],
                        n = e[1],
                        f = n.b.mul(t).divRound(this.n),
                        h = r.b.neg().mul(t).divRound(this.n),
                        o = f.mul(r.a),
                        d = h.mul(n.a),
                        l = f.mul(r.b),
                        c = h.mul(n.b);
                    return {
                        k1: t.sub(o).sub(d),
                        k2: l.add(c).neg()
                    }
                }, x.prototype.pointFromX = function(t, e) {
                    (t = new f.a(t, 16)).red || (t = t.toRed(this.red));
                    var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                        n = r.redSqrt();
                    if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                    var h = n.fromRed().isOdd();
                    return (e && !h || !e && h) && (n = n.redNeg()), this.point(t, n)
                }, x.prototype.validate = function(t) {
                    if (t.inf) return !0;
                    var e = t.x,
                        r = t.y,
                        n = this.a.redMul(e),
                        f = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                    return 0 === r.redSqr().redISub(f).cmpn(0)
                }, x.prototype._endoWnafMulAdd = function(t, e, r) {
                    for (var n = this._endoWnafT1, f = this._endoWnafT2, i = 0; i < t.length; i++) {
                        var h = this._endoSplit(e[i]),
                            p = t[i],
                            o = p._getBeta();
                        h.k1.negative && (h.k1.ineg(), p = p.neg(!0)), h.k2.negative && (h.k2.ineg(), o = o.neg(!0)), n[2 * i] = p, n[2 * i + 1] = o, f[2 * i] = h.k1, f[2 * i + 1] = h.k2
                    }
                    for (var d = this._wnafMulAdd(1, n, f, 2 * i, r), l = 0; l < 2 * i; l++) n[l] = null, f[l] = null;
                    return d
                }, S(R, base.BasePoint), x.prototype.point = function(t, e, r) {
                    return new R(this, t, e, r)
                }, x.prototype.pointFromJSON = function(t, e) {
                    return R.fromJSON(this, t, e)
                }, R.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var pre = this.precomputed;
                        if (pre && pre.beta) return pre.beta;
                        var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                        if (pre) {
                            var e = this.curve,
                                r = function(p) {
                                    return e.point(p.x.redMul(e.endo.beta), p.y)
                                };
                            pre.beta = t, t.precomputed = {
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
                        return t
                    }
                }, R.prototype.toJSON = function() {
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
                }, R.fromJSON = function(t, e, r) {
                    "string" == typeof e && (e = JSON.parse(e));
                    var n = t.point(e[0], e[1], r);
                    if (!e[2]) return n;

                    function f(e) {
                        return t.point(e[0], e[1], r)
                    }
                    var pre = e[2];
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
                }, R.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
                }, R.prototype.isInfinity = function() {
                    return this.inf
                }, R.prototype.add = function(p) {
                    if (this.inf) return p;
                    if (p.inf) return this;
                    if (this.eq(p)) return this.dbl();
                    if (this.neg().eq(p)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(p.x)) return this.curve.point(null, null);
                    var t = this.y.redSub(p.y);
                    0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(p.x).redInvm()));
                    var e = t.redSqr().redISub(this.x).redISub(p.x),
                        r = t.redMul(this.x.redSub(e)).redISub(this.y);
                    return this.curve.point(e, r)
                }, R.prototype.dbl = function() {
                    if (this.inf) return this;
                    var t = this.y.redAdd(this.y);
                    if (0 === t.cmpn(0)) return this.curve.point(null, null);
                    var a = this.curve.a,
                        e = this.x.redSqr(),
                        r = t.redInvm(),
                        n = e.redAdd(e).redIAdd(e).redIAdd(a).redMul(r),
                        f = n.redSqr().redISub(this.x.redAdd(this.x)),
                        h = n.redMul(this.x.redSub(f)).redISub(this.y);
                    return this.curve.point(f, h)
                }, R.prototype.getX = function() {
                    return this.x.fromRed()
                }, R.prototype.getY = function() {
                    return this.y.fromRed()
                }, R.prototype.mul = function(t) {
                    return t = new f.a(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
                }, R.prototype.mulAdd = function(t, e, r) {
                    var n = [this, e],
                        f = [t, r];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f) : this.curve._wnafMulAdd(1, n, f, 2)
                }, R.prototype.jmulAdd = function(t, e, r) {
                    var n = [this, e],
                        f = [t, r];
                    return this.curve.endo ? this.curve._endoWnafMulAdd(n, f, !0) : this.curve._wnafMulAdd(1, n, f, 2, !0)
                }, R.prototype.eq = function(p) {
                    return this === p || this.inf === p.inf && (this.inf || 0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))
                }, R.prototype.neg = function(t) {
                    if (this.inf) return this;
                    var e = this.curve.point(this.x, this.y.redNeg());
                    if (t && this.precomputed) {
                        var pre = this.precomputed,
                            r = function(p) {
                                return p.neg()
                            };
                        e.precomputed = {
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
                }, R.prototype.toJ = function() {
                    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
                }, S(k, base.BasePoint), x.prototype.jpoint = function(t, e, r) {
                    return new k(this, t, e, r)
                }, k.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var t = this.z.redInvm(),
                        e = t.redSqr(),
                        r = this.x.redMul(e),
                        n = this.y.redMul(e).redMul(t);
                    return this.curve.point(r, n)
                }, k.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
                }, k.prototype.add = function(p) {
                    if (this.isInfinity()) return p;
                    if (p.isInfinity()) return this;
                    var t = p.z.redSqr(),
                        e = this.z.redSqr(),
                        r = this.x.redMul(t),
                        n = p.x.redMul(e),
                        f = this.y.redMul(t.redMul(p.z)),
                        h = p.y.redMul(e.redMul(this.z)),
                        o = r.redSub(n),
                        d = f.redSub(h);
                    if (0 === o.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = o.redSqr(),
                        h3 = h2.redMul(o),
                        l = r.redMul(h2),
                        c = d.redSqr().redIAdd(h3).redISub(l).redISub(l),
                        m = d.redMul(l.redISub(c)).redISub(f.redMul(h3)),
                        v = this.z.redMul(p.z).redMul(o);
                    return this.curve.jpoint(c, m, v)
                }, k.prototype.mixedAdd = function(p) {
                    if (this.isInfinity()) return p.toJ();
                    if (p.isInfinity()) return this;
                    var t = this.z.redSqr(),
                        e = this.x,
                        r = p.x.redMul(t),
                        n = this.y,
                        f = p.y.redMul(t).redMul(this.z),
                        h = e.redSub(r),
                        o = n.redSub(f);
                    if (0 === h.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                    var h2 = h.redSqr(),
                        h3 = h2.redMul(h),
                        d = e.redMul(h2),
                        l = o.redSqr().redIAdd(h3).redISub(d).redISub(d),
                        c = o.redMul(d.redISub(l)).redISub(n.redMul(h3)),
                        m = this.z.redMul(h);
                    return this.curve.jpoint(l, c, m)
                }, k.prototype.dblp = function(t) {
                    if (0 === t) return this;
                    if (this.isInfinity()) return this;
                    if (!t) return this.dbl();
                    var i;
                    if (this.curve.zeroA || this.curve.threeA) {
                        var e = this;
                        for (i = 0; i < t; i++) e = e.dbl();
                        return e
                    }
                    var a = this.curve.a,
                        r = this.curve.tinv,
                        n = this.x,
                        f = this.y,
                        h = this.z,
                        o = h.redSqr().redSqr(),
                        d = f.redAdd(f);
                    for (i = 0; i < t; i++) {
                        var l = n.redSqr(),
                            c = d.redSqr(),
                            m = c.redSqr(),
                            v = l.redAdd(l).redIAdd(l).redIAdd(a.redMul(o)),
                            y = n.redMul(c),
                            M = v.redSqr().redISub(y.redAdd(y)),
                            w = y.redISub(M),
                            _ = v.redMul(w);
                        _ = _.redIAdd(_).redISub(m);
                        var A = d.redMul(h);
                        i + 1 < t && (o = o.redMul(m)), n = M, h = A, d = _
                    }
                    return this.curve.jpoint(n, d.redMul(r), h)
                }, k.prototype.dbl = function() {
                    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
                }, k.prototype._zeroDbl = function() {
                    var t, e, r;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            h = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(h);
                        s = s.redIAdd(s);
                        var o = n.redAdd(n).redIAdd(n),
                            d = o.redSqr().redISub(s).redISub(s),
                            l = h.redIAdd(h);
                        l = (l = l.redIAdd(l)).redIAdd(l), t = d, e = o.redMul(s.redISub(d)).redISub(l), r = this.y.redAdd(this.y)
                    } else {
                        var a = this.x.redSqr(),
                            b = this.y.redSqr(),
                            c = b.redSqr(),
                            m = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
                        m = m.redIAdd(m);
                        var v = a.redAdd(a).redIAdd(a),
                            y = v.redSqr(),
                            M = c.redIAdd(c);
                        M = (M = M.redIAdd(M)).redIAdd(M), t = y.redISub(m).redISub(m), e = v.redMul(m.redISub(t)).redISub(M), r = (r = this.y.redMul(this.z)).redIAdd(r)
                    }
                    return this.curve.jpoint(t, e, r)
                }, k.prototype._threeDbl = function() {
                    var t, e, r;
                    if (this.zOne) {
                        var n = this.x.redSqr(),
                            f = this.y.redSqr(),
                            h = f.redSqr(),
                            s = this.x.redAdd(f).redSqr().redISub(n).redISub(h);
                        s = s.redIAdd(s);
                        var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                            d = o.redSqr().redISub(s).redISub(s);
                        t = d;
                        var l = h.redIAdd(h);
                        l = (l = l.redIAdd(l)).redIAdd(l), e = o.redMul(s.redISub(d)).redISub(l), r = this.y.redAdd(this.y)
                    } else {
                        var c = this.z.redSqr(),
                            m = this.y.redSqr(),
                            v = this.x.redMul(m),
                            y = this.x.redSub(c).redMul(this.x.redAdd(c));
                        y = y.redAdd(y).redIAdd(y);
                        var M = v.redIAdd(v),
                            w = (M = M.redIAdd(M)).redAdd(M);
                        t = y.redSqr().redISub(w), r = this.y.redAdd(this.z).redSqr().redISub(m).redISub(c);
                        var _ = m.redSqr();
                        _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_), e = y.redMul(M.redISub(t)).redISub(_)
                    }
                    return this.curve.jpoint(t, e, r)
                }, k.prototype._dbl = function() {
                    var a = this.curve.a,
                        t = this.x,
                        e = this.y,
                        r = this.z,
                        n = r.redSqr().redSqr(),
                        f = t.redSqr(),
                        h = e.redSqr(),
                        o = f.redAdd(f).redIAdd(f).redIAdd(a.redMul(n)),
                        d = t.redAdd(t),
                        l = (d = d.redIAdd(d)).redMul(h),
                        c = o.redSqr().redISub(l.redAdd(l)),
                        m = l.redISub(c),
                        v = h.redSqr();
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var y = o.redMul(m).redISub(v),
                        M = e.redAdd(e).redMul(r);
                    return this.curve.jpoint(c, y, M)
                }, k.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var t = this.x.redSqr(),
                        e = this.y.redSqr(),
                        r = this.z.redSqr(),
                        n = e.redSqr(),
                        f = t.redAdd(t).redIAdd(t),
                        h = f.redSqr(),
                        o = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                        d = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(h)).redSqr(),
                        l = n.redIAdd(n);
                    l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
                    var u = f.redIAdd(o).redSqr().redISub(h).redISub(d).redISub(l),
                        c = e.redMul(u);
                    c = (c = c.redIAdd(c)).redIAdd(c);
                    var m = this.x.redMul(d).redISub(c);
                    m = (m = m.redIAdd(m)).redIAdd(m);
                    var v = this.y.redMul(u.redMul(l.redISub(u)).redISub(o.redMul(d)));
                    v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v);
                    var y = this.z.redAdd(o).redSqr().redISub(r).redISub(d);
                    return this.curve.jpoint(m, v, y)
                }, k.prototype.mul = function(t, e) {
                    return t = new f.a(t, e), this.curve._wnafMul(this, t)
                }, k.prototype.eq = function(p) {
                    if ("affine" === p.type) return this.eq(p.toJ());
                    if (this === p) return !0;
                    var t = this.z.redSqr(),
                        e = p.z.redSqr();
                    if (0 !== this.x.redMul(e).redISub(p.x.redMul(t)).cmpn(0)) return !1;
                    var r = t.redMul(this.z),
                        n = e.redMul(p.z);
                    return 0 === this.y.redMul(n).redISub(p.y.redMul(r)).cmpn(0)
                }, k.prototype.eqXToP = function(t) {
                    var e = this.z.redSqr(),
                        r = t.toRed(this.curve.red).redMul(e);
                    if (0 === this.x.cmp(r)) return !0;
                    for (var n = t.clone(), f = this.curve.redN.redMul(e);;) {
                        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                        if (r.redIAdd(f), 0 === this.x.cmp(r)) return !0
                    }
                }, k.prototype.inspect = function() {
                    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
                }, k.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0)
                };
                var P = d((function(t, e) {
                        var r = e;
                        r.base = base, r.short = E, r.mont = null, r.edwards = null
                    })),
                    N = d((function(t, e) {
                        var pre, r = e,
                            n = v.assert;

                        function f(t) {
                            "short" === t.type ? this.curve = new P.short(t) : "edwards" === t.type ? this.curve = new P.edwards(t) : this.curve = new P.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                        }

                        function h(t, e) {
                            Object.defineProperty(r, t, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var n = new f(e);
                                    return Object.defineProperty(r, t, {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: n
                                    }), n
                                }
                            })
                        }
                        r.PresetCurve = f, h("p192", {
                            type: "short",
                            prime: "p192",
                            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                            hash: o.a.sha256,
                            gRed: !1,
                            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                        }), h("p224", {
                            type: "short",
                            prime: "p224",
                            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                            hash: o.a.sha256,
                            gRed: !1,
                            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                        }), h("p256", {
                            type: "short",
                            prime: null,
                            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                            hash: o.a.sha256,
                            gRed: !1,
                            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                        }), h("p384", {
                            type: "short",
                            prime: null,
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                            hash: o.a.sha384,
                            gRed: !1,
                            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                        }), h("p521", {
                            type: "short",
                            prime: null,
                            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                            hash: o.a.sha512,
                            gRed: !1,
                            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                        }), h("curve25519", {
                            type: "mont",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "76d06",
                            b: "1",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: o.a.sha256,
                            gRed: !1,
                            g: ["9"]
                        }), h("ed25519", {
                            type: "edwards",
                            prime: "p25519",
                            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                            a: "-1",
                            c: "1",
                            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                            hash: o.a.sha256,
                            gRed: !1,
                            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                        });
                        try {
                            pre = null.crash()
                        } catch (t) {
                            pre = void 0
                        }
                        h("secp256k1", {
                            type: "short",
                            prime: "k256",
                            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                            a: "0",
                            b: "7",
                            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                            h: "1",
                            hash: o.a.sha256,
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

                function O(t) {
                    if (!(this instanceof O)) return new O(t);
                    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                    var e = m.toArray(t.entropy, t.entropyEnc || "hex"),
                        r = m.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = m.toArray(t.pers, t.persEnc || "hex");
                    l(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
                }
                var j = O;
                O.prototype._init = function(t, e, r) {
                    var n = t.concat(e).concat(r);
                    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
                    for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
                }, O.prototype._hmac = function() {
                    return new o.a.hmac(this.hash, this.K)
                }, O.prototype._update = function(t) {
                    var e = this._hmac().update(this.V).update([0]);
                    t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
                }, O.prototype.reseed = function(t, e, r, n) {
                    "string" != typeof e && (n = r, r = e, e = null), t = m.toArray(t, e), r = m.toArray(r, n), l(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
                }, O.prototype.generate = function(t, e, r, n) {
                    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                    "string" != typeof e && (n = r, r = e, e = null), r && (r = m.toArray(r, n || "hex"), this._update(r));
                    for (var f = []; f.length < t;) this.V = this._hmac().update(this.V).digest(), f = f.concat(this.V);
                    var h = f.slice(0, t);
                    return this._update(r), this._reseed++, m.encode(h, e)
                };
                var z = v.assert;

                function T(t, e) {
                    this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
                }
                var F = T;
                T.fromPublic = function(t, e, r) {
                    return e instanceof T ? e : new T(t, {
                        pub: e,
                        pubEnc: r
                    })
                }, T.fromPrivate = function(t, e, r) {
                    return e instanceof T ? e : new T(t, {
                        priv: e,
                        privEnc: r
                    })
                }, T.prototype.validate = function() {
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
                }, T.prototype.getPublic = function(t, e) {
                    return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
                }, T.prototype.getPrivate = function(t) {
                    return "hex" === t ? this.priv.toString(16, 2) : this.priv
                }, T.prototype._importPrivate = function(t, e) {
                    this.priv = new f.a(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
                }, T.prototype._importPublic = function(t, e) {
                    if (t.x || t.y) return "mont" === this.ec.curve.type ? z(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || z(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
                    this.pub = this.ec.curve.decodePoint(t, e)
                }, T.prototype.derive = function(t) {
                    return t.validate() || z(t.validate(), "public point not validated"), t.mul(this.priv).getX()
                }, T.prototype.sign = function(t, e, r) {
                    return this.ec.sign(t, this, e, r)
                }, T.prototype.verify = function(t, e) {
                    return this.ec.verify(t, e, this)
                }, T.prototype.inspect = function() {
                    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
                };
                var L = v.assert;

                function B(t, e) {
                    if (t instanceof B) return t;
                    this._importDER(t, e) || (L(t.r && t.s, "Signature without r or s"), this.r = new f.a(t.r, 16), this.s = new f.a(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
                }
                var K = B;

                function C() {
                    this.place = 0
                }

                function D(t, p) {
                    var e = t[p.place++];
                    if (!(128 & e)) return e;
                    var r = 15 & e;
                    if (0 === r || r > 4) return !1;
                    for (var n = 0, i = 0, f = p.place; i < r; i++, f++) n <<= 8, n |= t[f], n >>>= 0;
                    return !(n <= 127) && (p.place = f, n)
                }

                function U(t) {
                    for (var i = 0, e = t.length - 1; !t[i] && !(128 & t[i + 1]) && i < e;) i++;
                    return 0 === i ? t : t.slice(i)
                }

                function Z(t, e) {
                    if (e < 128) t.push(e);
                    else {
                        var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                        for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                        t.push(e)
                    }
                }
                B.prototype._importDER = function(data, t) {
                    data = v.toArray(data, t);
                    var p = new C;
                    if (48 !== data[p.place++]) return !1;
                    var e = D(data, p);
                    if (!1 === e) return !1;
                    if (e + p.place !== data.length) return !1;
                    if (2 !== data[p.place++]) return !1;
                    var r = D(data, p);
                    if (!1 === r) return !1;
                    var n = data.slice(p.place, r + p.place);
                    if (p.place += r, 2 !== data[p.place++]) return !1;
                    var h = D(data, p);
                    if (!1 === h) return !1;
                    if (data.length !== h + p.place) return !1;
                    var s = data.slice(p.place, h + p.place);
                    if (0 === n[0]) {
                        if (!(128 & n[1])) return !1;
                        n = n.slice(1)
                    }
                    if (0 === s[0]) {
                        if (!(128 & s[1])) return !1;
                        s = s.slice(1)
                    }
                    return this.r = new f.a(n), this.s = new f.a(s), this.recoveryParam = null, !0
                }, B.prototype.toDER = function(t) {
                    var e = this.r.toArray(),
                        s = this.s.toArray();
                    for (128 & e[0] && (e = [0].concat(e)), 128 & s[0] && (s = [0].concat(s)), e = U(e), s = U(s); !(s[0] || 128 & s[1]);) s = s.slice(1);
                    var r = [2];
                    Z(r, e.length), (r = r.concat(e)).push(2), Z(r, s.length);
                    var n = r.concat(s),
                        f = [48];
                    return Z(f, n.length), f = f.concat(n), v.encode(f, t)
                };
                var J = function() {
                        throw new Error("unsupported")
                    },
                    V = v.assert;

                function X(t) {
                    if (!(this instanceof X)) return new X(t);
                    "string" == typeof t && (V(Object.prototype.hasOwnProperty.call(N, t), "Unknown curve " + t), t = N[t]), t instanceof N.PresetCurve && (t = {
                        curve: t
                    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
                }
                var G = X;
                X.prototype.keyPair = function(t) {
                    return new F(this, t)
                }, X.prototype.keyFromPrivate = function(t, e) {
                    return F.fromPrivate(this, t, e)
                }, X.prototype.keyFromPublic = function(t, e) {
                    return F.fromPublic(this, t, e)
                }, X.prototype.genKeyPair = function(t) {
                    t || (t = {});
                    for (var e = new j({
                            hash: this.hash,
                            pers: t.pers,
                            persEnc: t.persEnc || "utf8",
                            entropy: t.entropy || J(this.hash.hmacStrength),
                            entropyEnc: t.entropy && t.entropyEnc || "utf8",
                            nonce: this.n.toArray()
                        }), r = this.n.byteLength(), n = this.n.sub(new f.a(2));;) {
                        var h = new f.a(e.generate(r));
                        if (!(h.cmp(n) > 0)) return h.iaddn(1), this.keyFromPrivate(h)
                    }
                }, X.prototype._truncateToN = function(t, e) {
                    var r = 8 * t.byteLength() - this.n.bitLength();
                    return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
                }, X.prototype.sign = function(t, e, r, n) {
                    "object" == typeof r && (n = r, r = null), n || (n = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new f.a(t, 16));
                    for (var h = this.n.byteLength(), o = e.getPrivate().toArray("be", h), d = t.toArray("be", h), l = new j({
                            hash: this.hash,
                            entropy: o,
                            nonce: d,
                            pers: n.pers,
                            persEnc: n.persEnc || "utf8"
                        }), c = this.n.sub(new f.a(1)), m = 0;; m++) {
                        var v = n.k ? n.k(m) : new f.a(l.generate(this.n.byteLength()));
                        if (!((v = this._truncateToN(v, !0)).cmpn(1) <= 0 || v.cmp(c) >= 0)) {
                            var y = this.g.mul(v);
                            if (!y.isInfinity()) {
                                var M = y.getX(),
                                    w = M.umod(this.n);
                                if (0 !== w.cmpn(0)) {
                                    var s = v.invm(this.n).mul(w.mul(e.getPrivate()).iadd(t));
                                    if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                                        var _ = (y.getY().isOdd() ? 1 : 0) | (0 !== M.cmp(w) ? 2 : 0);
                                        return n.canonical && s.cmp(this.nh) > 0 && (s = this.n.sub(s), _ ^= 1), new K({
                                            r: w,
                                            s: s,
                                            recoveryParam: _
                                        })
                                    }
                                }
                            }
                        }
                    }
                }, X.prototype.verify = function(t, e, r, n) {
                    t = this._truncateToN(new f.a(t, 16)), r = this.keyFromPublic(r, n);
                    var h = (e = new K(e, "hex")).r,
                        s = e.s;
                    if (h.cmpn(1) < 0 || h.cmp(this.n) >= 0) return !1;
                    if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                    var p, o = s.invm(this.n),
                        d = o.mul(t).umod(this.n),
                        l = o.mul(h).umod(this.n);
                    return this.curve._maxwellTrick ? !(p = this.g.jmulAdd(d, r.getPublic(), l)).isInfinity() && p.eqXToP(h) : !(p = this.g.mulAdd(d, r.getPublic(), l)).isInfinity() && 0 === p.getX().umod(this.n).cmp(h)
                }, X.prototype.recoverPubKey = function(t, e, r, n) {
                    V((3 & r) === r, "The recovery param is more than two bits"), e = new K(e, n);
                    var h = this.n,
                        o = new f.a(t),
                        d = e.r,
                        s = e.s,
                        l = 1 & r,
                        c = r >> 1;
                    if (d.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c) throw new Error("Unable to find sencond key candinate");
                    d = c ? this.curve.pointFromX(d.add(this.curve.n), l) : this.curve.pointFromX(d, l);
                    var m = e.r.invm(h),
                        v = h.sub(o).mul(m).umod(h),
                        y = s.mul(m).umod(h);
                    return this.g.mulAdd(v, d, y)
                }, X.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                    if (null !== (e = new K(e, n)).recoveryParam) return e.recoveryParam;
                    for (var i = 0; i < 4; i++) {
                        var f;
                        try {
                            f = this.recoverPubKey(t, e, i)
                        } catch (t) {
                            continue
                        }
                        if (f.eq(r)) return i
                    }
                    throw new Error("Unable to find valid recovery factor")
                };
                var W = d((function(t, e) {
                    var r = e;
                    r.version = "6.5.4", r.utils = v, r.rand = function() {
                        throw new Error("unsupported")
                    }, r.curve = P, r.curves = N, r.ec = G, r.eddsa = null
                })).ec
            }).call(this, r(36))
        },
        294: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return h
            })), r.d(e, "b", (function() {
                return m
            })), r.d(e, "d", (function() {
                return v
            })), r.d(e, "c", (function() {
                return y
            }));
            var n = r(3);
            const f = new(r(1).Logger)("strings/5.7.0");
            var h, o;

            function d(t, e, r, output, n) {
                if (t === o.BAD_PREFIX || t === o.UNEXPECTED_CONTINUE) {
                    let i = 0;
                    for (let t = e + 1; t < r.length && r[t] >> 6 == 2; t++) i++;
                    return i
                }
                return t === o.OVERRUN ? r.length - e - 1 : 0
            }! function(t) {
                t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
            }(h || (h = {})),
            function(t) {
                t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
            }(o || (o = {}));
            const l = Object.freeze({
                error: function(t, e, r, output, n) {
                    return f.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: d,
                replace: function(t, e, r, output, n) {
                    return t === o.OVERLONG ? (output.push(n), 0) : (output.push(65533), d(t, e, r))
                }
            });

            function c(t, e) {
                null == e && (e = l.error), t = Object(n.a)(t);
                const r = [];
                let i = 0;
                for (; i < t.length;) {
                    const n = t[i++];
                    if (n >> 7 == 0) {
                        r.push(n);
                        continue
                    }
                    let f = null,
                        h = null;
                    if (192 == (224 & n)) f = 1, h = 127;
                    else if (224 == (240 & n)) f = 2, h = 2047;
                    else {
                        if (240 != (248 & n)) {
                            i += e(128 == (192 & n) ? o.UNEXPECTED_CONTINUE : o.BAD_PREFIX, i - 1, t, r);
                            continue
                        }
                        f = 3, h = 65535
                    }
                    if (i - 1 + f >= t.length) {
                        i += e(o.OVERRUN, i - 1, t, r);
                        continue
                    }
                    let d = n & (1 << 8 - f - 1) - 1;
                    for (let n = 0; n < f; n++) {
                        let n = t[i];
                        if (128 != (192 & n)) {
                            i += e(o.MISSING_CONTINUE, i, t, r), d = null;
                            break
                        }
                        d = d << 6 | 63 & n, i++
                    }
                    null !== d && (d > 1114111 ? i += e(o.OUT_OF_RANGE, i - 1 - f, t, r, d) : d >= 55296 && d <= 57343 ? i += e(o.UTF16_SURROGATE, i - 1 - f, t, r, d) : d <= h ? i += e(o.OVERLONG, i - 1 - f, t, r, d) : r.push(d))
                }
                return r
            }

            function m(t, form = h.current) {
                form != h.current && (f.checkNormalize(), t = t.normalize(form));
                let e = [];
                for (let i = 0; i < t.length; i++) {
                    const r = t.charCodeAt(i);
                    if (r < 128) e.push(r);
                    else if (r < 2048) e.push(r >> 6 | 192), e.push(63 & r | 128);
                    else if (55296 == (64512 & r)) {
                        i++;
                        const n = t.charCodeAt(i);
                        if (i >= t.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
                        const f = 65536 + ((1023 & r) << 10) + (1023 & n);
                        e.push(f >> 18 | 240), e.push(f >> 12 & 63 | 128), e.push(f >> 6 & 63 | 128), e.push(63 & f | 128)
                    } else e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128), e.push(63 & r | 128)
                }
                return Object(n.a)(e)
            }

            function v(t, e) {
                return c(t, e).map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("")
            }

            function y(t, form = h.current) {
                return c(m(t, form))
            }
        },
        336: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return c
            })), r.d(e, "c", (function() {
                return m
            })), r.d(e, "b", (function() {
                return v
            }));
            var n = r(1105),
                f = r(3),
                h = r(9);
            const o = new(r(1).Logger)("signing-key/5.7.0");
            let d = null;

            function l() {
                return d || (d = new n.a("secp256k1")), d
            }
            class c {
                constructor(t) {
                    Object(h.d)(this, "curve", "secp256k1"), Object(h.d)(this, "privateKey", Object(f.h)(t)), 32 !== Object(f.d)(this.privateKey) && o.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    const e = l().keyFromPrivate(Object(f.a)(this.privateKey));
                    Object(h.d)(this, "publicKey", "0x" + e.getPublic(!1, "hex")), Object(h.d)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), Object(h.d)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    const e = l().keyFromPublic(Object(f.a)(this.publicKey)),
                        r = l().keyFromPublic(Object(f.a)(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    const e = l().keyFromPrivate(Object(f.a)(this.privateKey)),
                        r = Object(f.a)(t);
                    32 !== r.length && o.throwArgumentError("bad digest length", "digest", t);
                    const n = e.sign(r, {
                        canonical: !0
                    });
                    return Object(f.l)({
                        recoveryParam: n.recoveryParam,
                        r: Object(f.g)("0x" + n.r.toString(16), 32),
                        s: Object(f.g)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    const e = l().keyFromPrivate(Object(f.a)(this.privateKey)),
                        r = l().keyFromPublic(Object(f.a)(v(t)));
                    return Object(f.g)("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !(!t || !t._isSigningKey)
                }
            }

            function m(t, e) {
                const r = Object(f.l)(e),
                    n = {
                        r: Object(f.a)(r.r),
                        s: Object(f.a)(r.s)
                    };
                return "0x" + l().recoverPubKey(Object(f.a)(t), n, r.recoveryParam).encode("hex", !1)
            }

            function v(t, e) {
                const r = Object(f.a)(t);
                if (32 === r.length) {
                    const t = new c(r);
                    return e ? "0x" + l().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? Object(f.h)(r) : "0x" + l().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + l().keyFromPublic(r).getPublic(!0, "hex") : Object(f.h)(r) : o.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        37: function(t, e, r) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function f(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, base, e) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (e = base, base = 10), this._init(t || 0, base || 10, e || "be"))
                    }
                    var o;
                    "object" == typeof t ? t.exports = h : e.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        o = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(1506).Buffer
                    } catch (t) {}

                    function d(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function l(t, e, r) {
                        var n = d(t, r);
                        return r - 1 >= e && (n |= d(t, r - 1) << 4), n
                    }

                    function c(t, e, r, f) {
                        for (var h = 0, b = 0, o = Math.min(t.length, r), i = e; i < o; i++) {
                            var d = t.charCodeAt(i) - 48;
                            h *= f, b = d >= 49 ? d - 49 + 10 : d >= 17 ? d - 17 + 10 : d, n(d >= 0 && b < f, "Invalid character"), h += b
                        }
                        return h
                    }

                    function m(t, e) {
                        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                    }
                    if (h.isBN = function(t) {
                            return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                        }, h.max = function(t, e) {
                            return t.cmp(e) > 0 ? t : e
                        }, h.min = function(t, e) {
                            return t.cmp(e) < 0 ? t : e
                        }, h.prototype._init = function(t, base, e) {
                            if ("number" == typeof t) return this._initNumber(t, base, e);
                            if ("object" == typeof t) return this._initArray(t, base, e);
                            "hex" === base && (base = 16), n(base === (0 | base) && base >= 2 && base <= 36);
                            var r = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (r++, this.negative = 1), r < t.length && (16 === base ? this._parseHex(t, r, e) : (this._parseBase(t, base, r), "le" === e && this._initArray(this.toArray(), base, e)))
                        }, h.prototype._initNumber = function(t, base, e) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), base, e)
                        }, h.prototype._initArray = function(t, base, e) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var r, f, h = 0;
                            if ("be" === e)
                                for (i = t.length - 1, r = 0; i >= 0; i -= 3) f = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[r] |= f << h & 67108863, this.words[r + 1] = f >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, r++);
                            else if ("le" === e)
                                for (i = 0, r = 0; i < t.length; i += 3) f = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[r] |= f << h & 67108863, this.words[r + 1] = f >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, r++);
                            return this._strip()
                        }, h.prototype._parseHex = function(t, e, r) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, f = 0,
                                h = 0;
                            if ("be" === r)
                                for (i = t.length - 1; i >= e; i -= 2) n = l(t, e, i) << f, this.words[h] |= 67108863 & n, f >= 18 ? (f -= 18, h += 1, this.words[h] |= n >>> 26) : f += 8;
                            else
                                for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = l(t, e, i) << f, this.words[h] |= 67108863 & n, f >= 18 ? (f -= 18, h += 1, this.words[h] |= n >>> 26) : f += 8;
                            this._strip()
                        }, h.prototype._parseBase = function(t, base, e) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, n = 1; n <= 67108863; n *= base) r++;
                            r--, n = n / base | 0;
                            for (var f = t.length - e, h = f % r, o = Math.min(f, f - h) + e, d = 0, i = e; i < o; i += r) d = c(t, i, i + r, base), this.imuln(n), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
                            if (0 !== h) {
                                var l = 1;
                                for (d = c(t, i, t.length, base), i = 0; i < h; i++) l *= base;
                                this.imuln(l), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
                            }
                            this._strip()
                        }, h.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, h.prototype._move = function(t) {
                            m(t, this)
                        }, h.prototype.clone = function() {
                            var t = new h(null);
                            return this.copy(t), t
                        }, h.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, h.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, h.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        h.prototype[Symbol.for("nodejs.util.inspect.custom")] = v
                    } catch (t) {
                        h.prototype.inspect = v
                    } else h.prototype.inspect = v;

                    function v() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var y = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        M = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        w = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    h.prototype.toString = function(base, t) {
                        var e;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            e = "";
                            for (var r = 0, f = 0, i = 0; i < this.length; i++) {
                                var h = this.words[i],
                                    o = (16777215 & (h << r | f)).toString(16);
                                f = h >>> 24 - r & 16777215, (r += 2) >= 26 && (r -= 26, i--), e = 0 !== f || i !== this.length - 1 ? y[6 - o.length] + o + e : o + e
                            }
                            for (0 !== f && (e = f.toString(16) + e); e.length % t != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var d = M[base],
                                l = w[base];
                            e = "";
                            var c = this.clone();
                            for (c.negative = 0; !c.isZero();) {
                                var m = c.modrn(l).toString(base);
                                e = (c = c.idivn(l)).isZero() ? m + e : y[d - m.length] + m + e
                            }
                            for (this.isZero() && (e = "0" + e); e.length % t != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, o && (h.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(o, t, e)
                    }), h.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function _(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | e.words[0],
                            f = a * b,
                            h = 67108863 & f,
                            o = f / 67108864 | 0;
                        r.words[0] = h;
                        for (var d = 1; d < n; d++) {
                            for (var l = o >>> 26, c = 67108863 & o, m = Math.min(d, e.length - 1), v = Math.max(0, d - t.length + 1); v <= m; v++) {
                                var i = d - v | 0;
                                l += (f = (a = 0 | t.words[i]) * (b = 0 | e.words[v]) + c) / 67108864 | 0, c = 67108863 & f
                            }
                            r.words[d] = 0 | c, o = 0 | l
                        }
                        return 0 !== o ? r.words[d] = 0 | o : r.length--, r._strip()
                    }
                    h.prototype.toArrayLike = function(t, e, r) {
                        this._strip();
                        var f = this.byteLength(),
                            h = r || Math.max(1, f);
                        n(f <= h, "byte array longer than desired length"), n(h > 0, "Requested array length <= 0");
                        var o = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, h);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, f), o
                    }, h.prototype._toArrayLikeLE = function(t, e) {
                        for (var r = 0, n = 0, i = 0, f = 0; i < this.length; i++) {
                            var h = this.words[i] << f | n;
                            t[r++] = 255 & h, r < t.length && (t[r++] = h >> 8 & 255), r < t.length && (t[r++] = h >> 16 & 255), 6 === f ? (r < t.length && (t[r++] = h >> 24 & 255), n = 0, f = 0) : (n = h >>> 24, f += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = n; r < t.length;) t[r++] = 0
                    }, h.prototype._toArrayLikeBE = function(t, e) {
                        for (var r = t.length - 1, n = 0, i = 0, f = 0; i < this.length; i++) {
                            var h = this.words[i] << f | n;
                            t[r--] = 255 & h, r >= 0 && (t[r--] = h >> 8 & 255), r >= 0 && (t[r--] = h >> 16 & 255), 6 === f ? (r >= 0 && (t[r--] = h >> 24 & 255), n = 0, f = 0) : (n = h >>> 24, f += 2)
                        }
                        if (r >= 0)
                            for (t[r--] = n; r >= 0;) t[r--] = 0
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var e = t,
                            r = 0;
                        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            r = 0;
                        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            e = this._countBits(t);
                        return 26 * (this.length - 1) + e
                    }, h.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var b = this._zeroBits(this.words[i]);
                            if (t += b, 26 !== b) break
                        }
                        return t
                    }, h.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, h.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, h.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, h.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, h.prototype.neg = function() {
                        return this.clone().ineg()
                    }, h.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, h.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this._strip()
                    }, h.prototype.ior = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var b;
                        b = this.length > t.length ? t : this;
                        for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = b.length, this._strip()
                    }, h.prototype.iand = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
                    }, h.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, h.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, h.prototype.iuxor = function(t) {
                        var a, b;
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var i = 0; i < b.length; i++) this.words[i] = a.words[i] ^ b.words[i];
                        if (this !== a)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = a.length, this._strip()
                    }, h.prototype.ixor = function(t) {
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            r = t % 26;
                        this._expand(e), r > 0 && e--;
                        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, e) {
                        n("number" == typeof t && t >= 0);
                        var r = t / 26 | 0,
                            f = t % 26;
                        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << f : this.words[r] & ~(1 << f), this._strip()
                    }, h.prototype.iadd = function(t) {
                        var e, a, b;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var r = 0, i = 0; i < b.length; i++) e = (0 | a.words[i]) + (0 | b.words[i]) + r, this.words[i] = 67108863 & e, r = e >>> 26;
                        for (; 0 !== r && i < a.length; i++) e = (0 | a.words[i]) + r, this.words[i] = 67108863 & e, r = e >>> 26;
                        if (this.length = a.length, 0 !== r) this.words[this.length] = r, this.length++;
                        else if (a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this
                    }, h.prototype.add = function(t) {
                        var e;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var e = this.iadd(t);
                            return t.negative = 1, e._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var a, b, r = this.cmp(t);
                        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        r > 0 ? (a = this, b = t) : (a = t, b = this);
                        for (var n = 0, i = 0; i < b.length; i++) n = (e = (0 | a.words[i]) - (0 | b.words[i]) + n) >> 26, this.words[i] = 67108863 & e;
                        for (; 0 !== n && i < a.length; i++) n = (e = (0 | a.words[i]) + n) >> 26, this.words[i] = 67108863 & e;
                        if (0 === n && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this._strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var A = function(t, e, r) {
                        var n, f, h, a = t.words,
                            b = e.words,
                            o = r.words,
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
                            S = 0 | a[3],
                            I = 8191 & S,
                            x = S >>> 13,
                            E = 0 | a[4],
                            R = 8191 & E,
                            k = E >>> 13,
                            P = 0 | a[5],
                            N = 8191 & P,
                            O = P >>> 13,
                            j = 0 | a[6],
                            z = 8191 & j,
                            T = j >>> 13,
                            F = 0 | a[7],
                            L = 8191 & F,
                            B = F >>> 13,
                            K = 0 | a[8],
                            C = 8191 & K,
                            D = K >>> 13,
                            U = 0 | a[9],
                            Z = 8191 & U,
                            J = U >>> 13,
                            V = 0 | b[0],
                            X = 8191 & V,
                            G = V >>> 13,
                            W = 0 | b[1],
                            H = 8191 & W,
                            Y = W >>> 13,
                            $ = 0 | b[2],
                            Q = 8191 & $,
                            tt = $ >>> 13,
                            et = 0 | b[3],
                            it = 8191 & et,
                            nt = et >>> 13,
                            ft = 0 | b[4],
                            ht = 8191 & ft,
                            ot = ft >>> 13,
                            st = 0 | b[5],
                            ut = 8191 & st,
                            at = st >>> 13,
                            lt = 0 | b[6],
                            pt = 8191 & lt,
                            ct = lt >>> 13,
                            mt = 0 | b[7],
                            vt = 8191 & mt,
                            gt = mt >>> 13,
                            yt = 0 | b[8],
                            bt = 8191 & yt,
                            Mt = yt >>> 13,
                            wt = 0 | b[9],
                            _t = 8191 & wt,
                            At = wt >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var St = (d + (n = Math.imul(c, X)) | 0) + ((8191 & (f = (f = Math.imul(c, G)) + Math.imul(m, X) | 0)) << 13) | 0;
                        d = ((h = Math.imul(m, G)) + (f >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(y, X), f = (f = Math.imul(y, G)) + Math.imul(M, X) | 0, h = Math.imul(M, G);
                        var It = (d + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, Y) | 0) + Math.imul(m, H) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, Y) | 0) + (f >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(_, X), f = (f = Math.imul(_, G)) + Math.imul(A, X) | 0, h = Math.imul(A, G), n = n + Math.imul(y, H) | 0, f = (f = f + Math.imul(y, Y) | 0) + Math.imul(M, H) | 0, h = h + Math.imul(M, Y) | 0;
                        var xt = (d + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, tt) | 0) + Math.imul(m, Q) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, tt) | 0) + (f >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(I, X), f = (f = Math.imul(I, G)) + Math.imul(x, X) | 0, h = Math.imul(x, G), n = n + Math.imul(_, H) | 0, f = (f = f + Math.imul(_, Y) | 0) + Math.imul(A, H) | 0, h = h + Math.imul(A, Y) | 0, n = n + Math.imul(y, Q) | 0, f = (f = f + Math.imul(y, tt) | 0) + Math.imul(M, Q) | 0, h = h + Math.imul(M, tt) | 0;
                        var qt = (d + (n = n + Math.imul(c, it) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, nt) | 0) + Math.imul(m, it) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, nt) | 0) + (f >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(R, X), f = (f = Math.imul(R, G)) + Math.imul(k, X) | 0, h = Math.imul(k, G), n = n + Math.imul(I, H) | 0, f = (f = f + Math.imul(I, Y) | 0) + Math.imul(x, H) | 0, h = h + Math.imul(x, Y) | 0, n = n + Math.imul(_, Q) | 0, f = (f = f + Math.imul(_, tt) | 0) + Math.imul(A, Q) | 0, h = h + Math.imul(A, tt) | 0, n = n + Math.imul(y, it) | 0, f = (f = f + Math.imul(y, nt) | 0) + Math.imul(M, it) | 0, h = h + Math.imul(M, nt) | 0;
                        var Et = (d + (n = n + Math.imul(c, ht) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, ot) | 0) + Math.imul(m, ht) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, ot) | 0) + (f >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(N, X), f = (f = Math.imul(N, G)) + Math.imul(O, X) | 0, h = Math.imul(O, G), n = n + Math.imul(R, H) | 0, f = (f = f + Math.imul(R, Y) | 0) + Math.imul(k, H) | 0, h = h + Math.imul(k, Y) | 0, n = n + Math.imul(I, Q) | 0, f = (f = f + Math.imul(I, tt) | 0) + Math.imul(x, Q) | 0, h = h + Math.imul(x, tt) | 0, n = n + Math.imul(_, it) | 0, f = (f = f + Math.imul(_, nt) | 0) + Math.imul(A, it) | 0, h = h + Math.imul(A, nt) | 0, n = n + Math.imul(y, ht) | 0, f = (f = f + Math.imul(y, ot) | 0) + Math.imul(M, ht) | 0, h = h + Math.imul(M, ot) | 0;
                        var Rt = (d + (n = n + Math.imul(c, ut) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, at) | 0) + Math.imul(m, ut) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, at) | 0) + (f >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(z, X), f = (f = Math.imul(z, G)) + Math.imul(T, X) | 0, h = Math.imul(T, G), n = n + Math.imul(N, H) | 0, f = (f = f + Math.imul(N, Y) | 0) + Math.imul(O, H) | 0, h = h + Math.imul(O, Y) | 0, n = n + Math.imul(R, Q) | 0, f = (f = f + Math.imul(R, tt) | 0) + Math.imul(k, Q) | 0, h = h + Math.imul(k, tt) | 0, n = n + Math.imul(I, it) | 0, f = (f = f + Math.imul(I, nt) | 0) + Math.imul(x, it) | 0, h = h + Math.imul(x, nt) | 0, n = n + Math.imul(_, ht) | 0, f = (f = f + Math.imul(_, ot) | 0) + Math.imul(A, ht) | 0, h = h + Math.imul(A, ot) | 0, n = n + Math.imul(y, ut) | 0, f = (f = f + Math.imul(y, at) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, at) | 0;
                        var kt = (d + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, ct) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, ct) | 0) + (f >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(L, X), f = (f = Math.imul(L, G)) + Math.imul(B, X) | 0, h = Math.imul(B, G), n = n + Math.imul(z, H) | 0, f = (f = f + Math.imul(z, Y) | 0) + Math.imul(T, H) | 0, h = h + Math.imul(T, Y) | 0, n = n + Math.imul(N, Q) | 0, f = (f = f + Math.imul(N, tt) | 0) + Math.imul(O, Q) | 0, h = h + Math.imul(O, tt) | 0, n = n + Math.imul(R, it) | 0, f = (f = f + Math.imul(R, nt) | 0) + Math.imul(k, it) | 0, h = h + Math.imul(k, nt) | 0, n = n + Math.imul(I, ht) | 0, f = (f = f + Math.imul(I, ot) | 0) + Math.imul(x, ht) | 0, h = h + Math.imul(x, ot) | 0, n = n + Math.imul(_, ut) | 0, f = (f = f + Math.imul(_, at) | 0) + Math.imul(A, ut) | 0, h = h + Math.imul(A, at) | 0, n = n + Math.imul(y, pt) | 0, f = (f = f + Math.imul(y, ct) | 0) + Math.imul(M, pt) | 0, h = h + Math.imul(M, ct) | 0;
                        var Pt = (d + (n = n + Math.imul(c, vt) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, gt) | 0) + Math.imul(m, vt) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, gt) | 0) + (f >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(C, X), f = (f = Math.imul(C, G)) + Math.imul(D, X) | 0, h = Math.imul(D, G), n = n + Math.imul(L, H) | 0, f = (f = f + Math.imul(L, Y) | 0) + Math.imul(B, H) | 0, h = h + Math.imul(B, Y) | 0, n = n + Math.imul(z, Q) | 0, f = (f = f + Math.imul(z, tt) | 0) + Math.imul(T, Q) | 0, h = h + Math.imul(T, tt) | 0, n = n + Math.imul(N, it) | 0, f = (f = f + Math.imul(N, nt) | 0) + Math.imul(O, it) | 0, h = h + Math.imul(O, nt) | 0, n = n + Math.imul(R, ht) | 0, f = (f = f + Math.imul(R, ot) | 0) + Math.imul(k, ht) | 0, h = h + Math.imul(k, ot) | 0, n = n + Math.imul(I, ut) | 0, f = (f = f + Math.imul(I, at) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, at) | 0, n = n + Math.imul(_, pt) | 0, f = (f = f + Math.imul(_, ct) | 0) + Math.imul(A, pt) | 0, h = h + Math.imul(A, ct) | 0, n = n + Math.imul(y, vt) | 0, f = (f = f + Math.imul(y, gt) | 0) + Math.imul(M, vt) | 0, h = h + Math.imul(M, gt) | 0;
                        var Nt = (d + (n = n + Math.imul(c, bt) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, Mt) | 0) + Math.imul(m, bt) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, Mt) | 0) + (f >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(Z, X), f = (f = Math.imul(Z, G)) + Math.imul(J, X) | 0, h = Math.imul(J, G), n = n + Math.imul(C, H) | 0, f = (f = f + Math.imul(C, Y) | 0) + Math.imul(D, H) | 0, h = h + Math.imul(D, Y) | 0, n = n + Math.imul(L, Q) | 0, f = (f = f + Math.imul(L, tt) | 0) + Math.imul(B, Q) | 0, h = h + Math.imul(B, tt) | 0, n = n + Math.imul(z, it) | 0, f = (f = f + Math.imul(z, nt) | 0) + Math.imul(T, it) | 0, h = h + Math.imul(T, nt) | 0, n = n + Math.imul(N, ht) | 0, f = (f = f + Math.imul(N, ot) | 0) + Math.imul(O, ht) | 0, h = h + Math.imul(O, ot) | 0, n = n + Math.imul(R, ut) | 0, f = (f = f + Math.imul(R, at) | 0) + Math.imul(k, ut) | 0, h = h + Math.imul(k, at) | 0, n = n + Math.imul(I, pt) | 0, f = (f = f + Math.imul(I, ct) | 0) + Math.imul(x, pt) | 0, h = h + Math.imul(x, ct) | 0, n = n + Math.imul(_, vt) | 0, f = (f = f + Math.imul(_, gt) | 0) + Math.imul(A, vt) | 0, h = h + Math.imul(A, gt) | 0, n = n + Math.imul(y, bt) | 0, f = (f = f + Math.imul(y, Mt) | 0) + Math.imul(M, bt) | 0, h = h + Math.imul(M, Mt) | 0;
                        var Ot = (d + (n = n + Math.imul(c, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(c, At) | 0) + Math.imul(m, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(m, At) | 0) + (f >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(Z, H), f = (f = Math.imul(Z, Y)) + Math.imul(J, H) | 0, h = Math.imul(J, Y), n = n + Math.imul(C, Q) | 0, f = (f = f + Math.imul(C, tt) | 0) + Math.imul(D, Q) | 0, h = h + Math.imul(D, tt) | 0, n = n + Math.imul(L, it) | 0, f = (f = f + Math.imul(L, nt) | 0) + Math.imul(B, it) | 0, h = h + Math.imul(B, nt) | 0, n = n + Math.imul(z, ht) | 0, f = (f = f + Math.imul(z, ot) | 0) + Math.imul(T, ht) | 0, h = h + Math.imul(T, ot) | 0, n = n + Math.imul(N, ut) | 0, f = (f = f + Math.imul(N, at) | 0) + Math.imul(O, ut) | 0, h = h + Math.imul(O, at) | 0, n = n + Math.imul(R, pt) | 0, f = (f = f + Math.imul(R, ct) | 0) + Math.imul(k, pt) | 0, h = h + Math.imul(k, ct) | 0, n = n + Math.imul(I, vt) | 0, f = (f = f + Math.imul(I, gt) | 0) + Math.imul(x, vt) | 0, h = h + Math.imul(x, gt) | 0, n = n + Math.imul(_, bt) | 0, f = (f = f + Math.imul(_, Mt) | 0) + Math.imul(A, bt) | 0, h = h + Math.imul(A, Mt) | 0;
                        var jt = (d + (n = n + Math.imul(y, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(y, At) | 0) + Math.imul(M, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(M, At) | 0) + (f >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(Z, Q), f = (f = Math.imul(Z, tt)) + Math.imul(J, Q) | 0, h = Math.imul(J, tt), n = n + Math.imul(C, it) | 0, f = (f = f + Math.imul(C, nt) | 0) + Math.imul(D, it) | 0, h = h + Math.imul(D, nt) | 0, n = n + Math.imul(L, ht) | 0, f = (f = f + Math.imul(L, ot) | 0) + Math.imul(B, ht) | 0, h = h + Math.imul(B, ot) | 0, n = n + Math.imul(z, ut) | 0, f = (f = f + Math.imul(z, at) | 0) + Math.imul(T, ut) | 0, h = h + Math.imul(T, at) | 0, n = n + Math.imul(N, pt) | 0, f = (f = f + Math.imul(N, ct) | 0) + Math.imul(O, pt) | 0, h = h + Math.imul(O, ct) | 0, n = n + Math.imul(R, vt) | 0, f = (f = f + Math.imul(R, gt) | 0) + Math.imul(k, vt) | 0, h = h + Math.imul(k, gt) | 0, n = n + Math.imul(I, bt) | 0, f = (f = f + Math.imul(I, Mt) | 0) + Math.imul(x, bt) | 0, h = h + Math.imul(x, Mt) | 0;
                        var zt = (d + (n = n + Math.imul(_, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(_, At) | 0) + Math.imul(A, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(A, At) | 0) + (f >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, n = Math.imul(Z, it), f = (f = Math.imul(Z, nt)) + Math.imul(J, it) | 0, h = Math.imul(J, nt), n = n + Math.imul(C, ht) | 0, f = (f = f + Math.imul(C, ot) | 0) + Math.imul(D, ht) | 0, h = h + Math.imul(D, ot) | 0, n = n + Math.imul(L, ut) | 0, f = (f = f + Math.imul(L, at) | 0) + Math.imul(B, ut) | 0, h = h + Math.imul(B, at) | 0, n = n + Math.imul(z, pt) | 0, f = (f = f + Math.imul(z, ct) | 0) + Math.imul(T, pt) | 0, h = h + Math.imul(T, ct) | 0, n = n + Math.imul(N, vt) | 0, f = (f = f + Math.imul(N, gt) | 0) + Math.imul(O, vt) | 0, h = h + Math.imul(O, gt) | 0, n = n + Math.imul(R, bt) | 0, f = (f = f + Math.imul(R, Mt) | 0) + Math.imul(k, bt) | 0, h = h + Math.imul(k, Mt) | 0;
                        var Tt = (d + (n = n + Math.imul(I, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(I, At) | 0) + Math.imul(x, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(x, At) | 0) + (f >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(Z, ht), f = (f = Math.imul(Z, ot)) + Math.imul(J, ht) | 0, h = Math.imul(J, ot), n = n + Math.imul(C, ut) | 0, f = (f = f + Math.imul(C, at) | 0) + Math.imul(D, ut) | 0, h = h + Math.imul(D, at) | 0, n = n + Math.imul(L, pt) | 0, f = (f = f + Math.imul(L, ct) | 0) + Math.imul(B, pt) | 0, h = h + Math.imul(B, ct) | 0, n = n + Math.imul(z, vt) | 0, f = (f = f + Math.imul(z, gt) | 0) + Math.imul(T, vt) | 0, h = h + Math.imul(T, gt) | 0, n = n + Math.imul(N, bt) | 0, f = (f = f + Math.imul(N, Mt) | 0) + Math.imul(O, bt) | 0, h = h + Math.imul(O, Mt) | 0;
                        var Ft = (d + (n = n + Math.imul(R, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(R, At) | 0) + Math.imul(k, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(k, At) | 0) + (f >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, n = Math.imul(Z, ut), f = (f = Math.imul(Z, at)) + Math.imul(J, ut) | 0, h = Math.imul(J, at), n = n + Math.imul(C, pt) | 0, f = (f = f + Math.imul(C, ct) | 0) + Math.imul(D, pt) | 0, h = h + Math.imul(D, ct) | 0, n = n + Math.imul(L, vt) | 0, f = (f = f + Math.imul(L, gt) | 0) + Math.imul(B, vt) | 0, h = h + Math.imul(B, gt) | 0, n = n + Math.imul(z, bt) | 0, f = (f = f + Math.imul(z, Mt) | 0) + Math.imul(T, bt) | 0, h = h + Math.imul(T, Mt) | 0;
                        var Lt = (d + (n = n + Math.imul(N, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(N, At) | 0) + Math.imul(O, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(O, At) | 0) + (f >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(Z, pt), f = (f = Math.imul(Z, ct)) + Math.imul(J, pt) | 0, h = Math.imul(J, ct), n = n + Math.imul(C, vt) | 0, f = (f = f + Math.imul(C, gt) | 0) + Math.imul(D, vt) | 0, h = h + Math.imul(D, gt) | 0, n = n + Math.imul(L, bt) | 0, f = (f = f + Math.imul(L, Mt) | 0) + Math.imul(B, bt) | 0, h = h + Math.imul(B, Mt) | 0;
                        var Bt = (d + (n = n + Math.imul(z, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(z, At) | 0) + Math.imul(T, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(T, At) | 0) + (f >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(Z, vt), f = (f = Math.imul(Z, gt)) + Math.imul(J, vt) | 0, h = Math.imul(J, gt), n = n + Math.imul(C, bt) | 0, f = (f = f + Math.imul(C, Mt) | 0) + Math.imul(D, bt) | 0, h = h + Math.imul(D, Mt) | 0;
                        var Kt = (d + (n = n + Math.imul(L, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(L, At) | 0) + Math.imul(B, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(B, At) | 0) + (f >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, n = Math.imul(Z, bt), f = (f = Math.imul(Z, Mt)) + Math.imul(J, bt) | 0, h = Math.imul(J, Mt);
                        var Ct = (d + (n = n + Math.imul(C, _t) | 0) | 0) + ((8191 & (f = (f = f + Math.imul(C, At) | 0) + Math.imul(D, _t) | 0)) << 13) | 0;
                        d = ((h = h + Math.imul(D, At) | 0) + (f >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863;
                        var Dt = (d + (n = Math.imul(Z, _t)) | 0) + ((8191 & (f = (f = Math.imul(Z, At)) + Math.imul(J, _t) | 0)) << 13) | 0;
                        return d = ((h = Math.imul(J, At)) + (f >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, o[0] = St, o[1] = It, o[2] = xt, o[3] = qt, o[4] = Et, o[5] = Rt, o[6] = kt, o[7] = Pt, o[8] = Nt, o[9] = Ot, o[10] = jt, o[11] = zt, o[12] = Tt, o[13] = Ft, o[14] = Lt, o[15] = Bt, o[16] = Kt, o[17] = Ct, o[18] = Dt, 0 !== d && (o[19] = d, r.length++), r
                    };

                    function S(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, f = 0, h = 0; h < r.length - 1; h++) {
                            var o = f;
                            f = 0;
                            for (var d = 67108863 & n, l = Math.min(h, e.length - 1), c = Math.max(0, h - t.length + 1); c <= l; c++) {
                                var i = h - c,
                                    m = (0 | t.words[i]) * (0 | e.words[c]),
                                    v = 67108863 & m;
                                d = 67108863 & (v = v + d | 0), f += (o = (o = o + (m / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, o &= 67108863
                            }
                            r.words[h] = d, n = o, o = f
                        }
                        return 0 !== n ? r.words[h] = n : r.length--, r._strip()
                    }

                    function I(t, e, r) {
                        return S(t, e, r)
                    }

                    function x(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (A = _), h.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? A(this, t, e) : r < 63 ? _(this, t, e) : r < 1024 ? S(this, t, e) : I(this, t, e)
                    }, x.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), r = h.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                        return e
                    }, x.prototype.revBin = function(t, e, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                        return n
                    }, x.prototype.permute = function(t, e, r, n, f, h) {
                        for (var i = 0; i < h; i++) n[i] = e[t[i]], f[i] = r[t[i]]
                    }, x.prototype.transform = function(t, e, r, n, f, h) {
                        this.permute(h, t, e, r, n, f);
                        for (var s = 1; s < f; s <<= 1)
                            for (var o = s << 1, d = Math.cos(2 * Math.PI / o), l = Math.sin(2 * Math.PI / o), p = 0; p < f; p += o)
                                for (var c = d, m = l, v = 0; v < s; v++) {
                                    var y = r[p + v],
                                        M = n[p + v],
                                        w = r[p + v + s],
                                        _ = n[p + v + s],
                                        A = c * w - m * _;
                                    _ = c * _ + m * w, w = A, r[p + v] = y + w, n[p + v] = M + _, r[p + v + s] = y - w, n[p + v + s] = M - _, v !== o && (A = d * c - l * m, m = d * m + l * c, c = A)
                                }
                    }, x.prototype.guessLen13b = function(t, e) {
                        var r = 1 | Math.max(e, t),
                            n = 1 & r,
                            i = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, x.prototype.conjugate = function(t, e, r) {
                        if (!(r <= 1))
                            for (var i = 0; i < r / 2; i++) {
                                var n = t[i];
                                t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                            }
                    }, x.prototype.normalize13b = function(t, e) {
                        for (var r = 0, i = 0; i < e / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                            t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, x.prototype.convert13b = function(t, e, r, f) {
                        for (var h = 0, i = 0; i < e; i++) h += 0 | t[i], r[2 * i] = 8191 & h, h >>>= 13, r[2 * i + 1] = 8191 & h, h >>>= 13;
                        for (i = 2 * e; i < f; ++i) r[i] = 0;
                        n(0 === h), n(0 == (-8192 & h))
                    }, x.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, x.prototype.mulp = function(t, e, r) {
                        var n = 2 * this.guessLen13b(t.length, e.length),
                            f = this.makeRBT(n),
                            h = this.stub(n),
                            o = new Array(n),
                            d = new Array(n),
                            l = new Array(n),
                            c = new Array(n),
                            m = new Array(n),
                            v = new Array(n),
                            y = r.words;
                        y.length = n, this.convert13b(t.words, t.length, o, n), this.convert13b(e.words, e.length, c, n), this.transform(o, h, d, l, n, f), this.transform(c, h, m, v, n, f);
                        for (var i = 0; i < n; i++) {
                            var M = d[i] * m[i] - l[i] * v[i];
                            l[i] = d[i] * v[i] + l[i] * m[i], d[i] = M
                        }
                        return this.conjugate(d, l, n), this.transform(d, l, y, h, n, f), this.conjugate(y, h, n), this.normalize13b(y, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                    }, h.prototype.mul = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, h.prototype.mulf = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), I(this, t, e)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var f = (0 | this.words[i]) * t,
                                h = (67108863 & f) + (67108863 & r);
                            r >>= 26, r += f / 67108864 | 0, r += h >>> 26, this.words[i] = 67108863 & h
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), e ? this.ineg() : this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                var n = r / 26 | 0,
                                    f = r % 26;
                                e[r] = t.words[n] >>> f & 1
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new h(1);
                        for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                        if (++i < e.length)
                            for (var q = r.sqr(); i < e.length; i++, q = q.sqr()) 0 !== e[i] && (r = r.mul(q));
                        return r
                    }, h.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i, e = t % 26,
                            s = (t - e) / 26,
                            r = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var f = 0;
                            for (i = 0; i < this.length; i++) {
                                var h = this.words[i] & r,
                                    o = (0 | this.words[i]) - h << e;
                                this.words[i] = o | f, f = h >>> 26 - e
                            }
                            f && (this.words[i] = f, this.length++)
                        }
                        if (0 !== s) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                            for (i = 0; i < s; i++) this.words[i] = 0;
                            this.length += s
                        }
                        return this._strip()
                    }, h.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, e, r) {
                        var f;
                        n("number" == typeof t && t >= 0), f = e ? (e - e % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> h << h,
                            o = r;
                        if (f -= s, f = Math.max(0, f), o) {
                            for (var i = 0; i < s; i++) o.words[i] = this.words[i];
                            o.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var d = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== d || i >= f); i--) {
                            var l = 0 | this.words[i];
                            this.words[i] = d << 26 - h | l >>> h, d = l & mask
                        }
                        return o && 0 !== d && (o.words[o.length++] = d), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, h.prototype.ishrn = function(t, e, r) {
                        return n(0 === this.negative), this.iushrn(t, e, r)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26,
                            s = (t - e) / 26,
                            q = 1 << e;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, h.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var e = t % 26,
                            s = (t - e) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== e && s++, this.length = Math.min(s, this.length), 0 !== e) {
                            var mask = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= mask
                        }
                        return this._strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this._strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, e, r) {
                        var i, f, h = t.length + r;
                        this._expand(h);
                        var o = 0;
                        for (i = 0; i < t.length; i++) {
                            f = (0 | this.words[i + r]) + o;
                            var d = (0 | t.words[i]) * e;
                            o = ((f -= 67108863 & d) >> 26) - (d / 67108864 | 0), this.words[i + r] = 67108863 & f
                        }
                        for (; i < this.length - r; i++) o = (f = (0 | this.words[i + r]) + o) >> 26, this.words[i + r] = 67108863 & f;
                        if (0 === o) return this._strip();
                        for (n(-1 === o), o = 0, i = 0; i < this.length; i++) o = (f = -(0 | this.words[i]) + o) >> 26, this.words[i] = 67108863 & f;
                        return this.negative = 1, this._strip()
                    }, h.prototype._wordDiv = function(t, e) {
                        var r = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            n = 0 | b.words[b.length - 1];
                        0 !== (r = 26 - this._countBits(n)) && (b = b.ushln(r), a.iushln(r), n = 0 | b.words[b.length - 1]);
                        var q, f = a.length - b.length;
                        if ("mod" !== e) {
                            (q = new h(null)).length = f + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var o = a.clone()._ishlnsubmul(b, 1, f);
                        0 === o.negative && (a = o, q && (q.words[f] = 1));
                        for (var d = f - 1; d >= 0; d--) {
                            var l = 67108864 * (0 | a.words[b.length + d]) + (0 | a.words[b.length + d - 1]);
                            for (l = Math.min(l / n | 0, 67108863), a._ishlnsubmul(b, l, d); 0 !== a.negative;) l--, a.negative = 0, a._ishlnsubmul(b, 1, d), a.isZero() || (a.negative ^= 1);
                            q && (q.words[d] = l)
                        }
                        return q && q._strip(), a._strip(), "div" !== e && 0 !== r && a.iushrn(r), {
                            div: q || null,
                            mod: a
                        }
                    }, h.prototype.divmod = function(t, e, r) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (o = this.neg().divmod(t, e), "mod" !== e && (div = o.div.neg()), "div" !== e && (f = o.mod.neg(), r && 0 !== f.negative && f.iadd(t)), {
                            div: div,
                            mod: f
                        }) : 0 === this.negative && 0 !== t.negative ? (o = this.divmod(t.neg(), e), "mod" !== e && (div = o.div.neg()), {
                            div: div,
                            mod: o.mod
                        }) : 0 != (this.negative & t.negative) ? (o = this.neg().divmod(t.neg(), e), "div" !== e && (f = o.mod.neg(), r && 0 !== f.negative && f.isub(t)), {
                            div: o.div,
                            mod: f
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === e ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === e ? {
                            div: null,
                            mod: new h(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modrn(t.words[0]))
                        } : this._wordDiv(t, e);
                        var div, f, o
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var e = this.divmod(t);
                        if (e.mod.isZero()) return e.div;
                        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            n = t.ushrn(1),
                            f = t.andln(1),
                            h = r.cmp(n);
                        return h < 0 || 1 === f && 0 === h ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, h.prototype.modrn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var p = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (p * r + (0 | this.words[i])) % t;
                        return e ? -r : r
                    }, h.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, h.prototype.idivn = function(t) {
                        var e = t < 0;
                        e && (t = -t), n(t <= 67108863);
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var f = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = f / t | 0, r = f % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var t = this,
                            e = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var r = new h(1), f = new h(0), o = new h(0), d = new h(1), g = 0; t.isEven() && e.isEven();) t.iushrn(1), e.iushrn(1), ++g;
                        for (var l = e.clone(), c = t.clone(); !t.isZero();) {
                            for (var i = 0, m = 1; 0 == (t.words[0] & m) && i < 26; ++i, m <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(r.isOdd() || f.isOdd()) && (r.iadd(l), f.isub(c)), r.iushrn(1), f.iushrn(1);
                            for (var v = 0, y = 1; 0 == (e.words[0] & y) && v < 26; ++v, y <<= 1);
                            if (v > 0)
                                for (e.iushrn(v); v-- > 0;)(o.isOdd() || d.isOdd()) && (o.iadd(l), d.isub(c)), o.iushrn(1), d.iushrn(1);
                            t.cmp(e) >= 0 ? (t.isub(e), r.isub(o), f.isub(d)) : (e.isub(t), o.isub(r), d.isub(f))
                        }
                        return {
                            a: o,
                            b: d,
                            gcd: e.iushln(g)
                        }
                    }, h.prototype._invmp = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, e = new h(1), r = new h(0), f = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, o = 1; 0 == (a.words[0] & o) && i < 26; ++i, o <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) e.isOdd() && e.iadd(f), e.iushrn(1);
                            for (var d = 0, l = 1; 0 == (b.words[0] & l) && d < 26; ++d, l <<= 1);
                            if (d > 0)
                                for (b.iushrn(d); d-- > 0;) r.isOdd() && r.iadd(f), r.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), e.isub(r)) : (b.isub(a), r.isub(e))
                        }
                        return (t = 0 === a.cmpn(1) ? e : r).cmpn(0) < 0 && t.iadd(p), t
                    }, h.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var a = this.clone(),
                            b = t.clone();
                        a.negative = 0, b.negative = 0;
                        for (var e = 0; a.isEven() && b.isEven(); e++) a.iushrn(1), b.iushrn(1);
                        for (;;) {
                            for (; a.isEven();) a.iushrn(1);
                            for (; b.isEven();) b.iushrn(1);
                            var r = a.cmp(b);
                            if (r < 0) {
                                var n = a;
                                a = b, b = n
                            } else if (0 === r || 0 === b.cmpn(1)) break;
                            a.isub(b)
                        }
                        return b.iushln(e)
                    }, h.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, h.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, h.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, h.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, h.prototype.bincn = function(t) {
                        n("number" == typeof t);
                        var e = t % 26,
                            s = (t - e) / 26,
                            q = 1 << e;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var r = q, i = s; 0 !== r && i < this.length; i++) {
                            var f = 0 | this.words[i];
                            r = (f += r) >>> 26, f &= 67108863, this.words[i] = f
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var e, r = t < 0;
                        if (0 !== this.negative && !r) return -1;
                        if (0 === this.negative && r) return 1;
                        if (this._strip(), this.length > 1) e = 1;
                        else {
                            r && (t = -t), n(t <= 67108863, "Number is too big");
                            var f = 0 | this.words[0];
                            e = f === t ? 0 : f < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -e : e
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var e = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -e : e
                    }, h.prototype.ucmp = function(t) {
                        if (this.length > t.length) return 1;
                        if (this.length < t.length) return -1;
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var a = 0 | this.words[i],
                                b = 0 | t.words[i];
                            if (a !== b) {
                                a < b ? e = -1 : a > b && (e = 1);
                                break
                            }
                        }
                        return e
                    }, h.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, h.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, h.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, h.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, h.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, h.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, h.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, h.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, h.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, h.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, h.red = function(t) {
                        return new j(t)
                    }, h.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var E = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function R(t, p) {
                        this.name = t, this.p = new h(p, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function k() {
                        R.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function P() {
                        R.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function N() {
                        R.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function O() {
                        R.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function j(t) {
                        if ("string" == typeof t) {
                            var e = h._prime(t);
                            this.m = e.p, this.prime = e
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function z(t) {
                        j.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    R.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, R.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, R.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, R.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, f(k, R), k.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var e = input.words[9];
                        for (output.words[output.length++] = e & mask, i = 10; i < input.length; i++) {
                            var r = 0 | input.words[i];
                            input.words[i - 10] = (r & mask) << 4 | e >>> 22, e = r
                        }
                        e >>>= 22, input.words[i - 10] = e, 0 === e && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, k.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 0 | t.words[i];
                            e += 977 * r, t.words[i] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, f(P, R), f(N, R), f(O, R), O.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 19 * (0 | t.words[i]) + e,
                                n = 67108863 & r;
                            r >>>= 26, t.words[i] = n, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, h._prime = function(t) {
                        if (E[t]) return E[t];
                        var e;
                        if ("k256" === t) e = new k;
                        else if ("p224" === t) e = new P;
                        else if ("p192" === t) e = new N;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new O
                        }
                        return E[t] = e, e
                    }, j.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, j.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, j.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (m(a, a.umod(this.m)._forceRed(this)), a)
                    }, j.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, j.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, j.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, j.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, j.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, j.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, j.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, j.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, j.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, j.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, j.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var e = this.m.add(new h(1)).iushrn(2);
                            return this.pow(a, e)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        n(!q.isZero());
                        var r = new h(1).toRed(this),
                            f = r.redNeg(),
                            o = this.m.subn(1).iushrn(1),
                            d = this.m.bitLength();
                        for (d = new h(2 * d * d).toRed(this); 0 !== this.pow(d, o).cmp(f);) d.redIAdd(f);
                        for (var l = this.pow(d, q), c = this.pow(a, q.addn(1).iushrn(1)), m = this.pow(a, q), v = s; 0 !== m.cmp(r);) {
                            for (var y = m, i = 0; 0 !== y.cmp(r); i++) y = y.redSqr();
                            n(i < v);
                            var b = this.pow(l, new h(1).iushln(v - i - 1));
                            c = c.redMul(b), l = b.redSqr(), m = m.redMul(l), v = i
                        }
                        return c
                    }, j.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, j.prototype.pow = function(a, t) {
                        if (t.isZero()) return new h(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var e = new Array(16);
                        e[0] = new h(1).toRed(this), e[1] = a;
                        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], a);
                        var r = e[0],
                            n = 0,
                            f = 0,
                            o = t.bitLength() % 26;
                        for (0 === o && (o = 26), i = t.length - 1; i >= 0; i--) {
                            for (var d = t.words[i], l = o - 1; l >= 0; l--) {
                                var c = d >> l & 1;
                                r !== e[0] && (r = this.sqr(r)), 0 !== c || 0 !== n ? (n <<= 1, n |= c, (4 === ++f || 0 === i && 0 === l) && (r = this.mul(r, e[n]), f = 0, n = 0)) : f = 0
                            }
                            o = 26
                        }
                        return r
                    }, j.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, j.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, h.mont = function(t) {
                        return new z(t)
                    }, f(z, j), z.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, z.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, z.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            r = u;
                        return u.cmp(this.m) >= 0 ? r = u.isub(this.m) : u.cmpn(0) < 0 && (r = u.iadd(this.m)), r._forceRed(this)
                    }, z.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new h(0)._forceRed(this);
                        var t = a.mul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            r = u;
                        return u.cmp(this.m) >= 0 ? r = u.isub(this.m) : u.cmpn(0) < 0 && (r = u.iadd(this.m)), r._forceRed(this)
                    }, z.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(82)(t))
        }
    }
]);