(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        1306: function(e, f, d) {
            "use strict";
            e.exports = function(input) {
                for (var e = [], f = input.length, d = 0; d < f; d++) {
                    var t = input.charCodeAt(d);
                    if (t >= 55296 && t <= 56319 && f > d + 1) {
                        var c = input.charCodeAt(d + 1);
                        c >= 56320 && c <= 57343 && (t = 1024 * (t - 55296) + c - 56320 + 65536, d += 1)
                    }
                    t < 128 ? e.push(t) : t < 2048 ? (e.push(t >> 6 | 192), e.push(63 & t | 128)) : t < 55296 || t >= 57344 && t < 65536 ? (e.push(t >> 12 | 224), e.push(t >> 6 & 63 | 128), e.push(63 & t | 128)) : t >= 65536 && t <= 1114111 ? (e.push(t >> 18 | 240), e.push(t >> 12 & 63 | 128), e.push(t >> 6 & 63 | 128), e.push(63 & t | 128)) : e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        1481: function(e) {
            e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
        },
        1483: function(e, f, d) {
            "use strict";
            var t = d(170),
                c = d(13),
                r = d(52),
                n = d(439),
                o = t.assert;

            function h(e) {
                n.call(this, "short", e), this.a = new c(e.a, 16).toRed(this.red), this.b = new c(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
            }

            function l(e, f, d, t) {
                n.BasePoint.call(this, e, "affine"), null === f && null === d ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new c(f, 16), this.y = new c(d, 16), t && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function v(e, f, d, t) {
                n.BasePoint.call(this, e, "jacobian"), null === f && null === d && null === t ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new c(0)) : (this.x = new c(f, 16), this.y = new c(d, 16), this.z = new c(t, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            r(h, n), e.exports = h, h.prototype._getEndomorphism = function(e) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    var f, d;
                    if (e.beta) f = new c(e.beta, 16).toRed(this.red);
                    else {
                        var t = this._getEndoRoots(this.p);
                        f = (f = t[0].cmp(t[1]) < 0 ? t[0] : t[1]).toRed(this.red)
                    }
                    if (e.lambda) d = new c(e.lambda, 16);
                    else {
                        var r = this._getEndoRoots(this.n);
                        0 === this.g.mul(r[0]).x.cmp(this.g.x.redMul(f)) ? d = r[0] : (d = r[1], o(0 === this.g.mul(d).x.cmp(this.g.x.redMul(f))))
                    }
                    return {
                        beta: f,
                        lambda: d,
                        basis: e.basis ? e.basis.map((function(e) {
                            return {
                                a: new c(e.a, 16),
                                b: new c(e.b, 16)
                            }
                        })) : this._getEndoBasis(d)
                    }
                }
            }, h.prototype._getEndoRoots = function(e) {
                var f = e === this.p ? this.red : c.mont(e),
                    d = new c(2).toRed(f).redInvm(),
                    t = d.redNeg(),
                    s = new c(3).toRed(f).redNeg().redSqrt().redMul(d);
                return [t.redAdd(s).fromRed(), t.redSub(s).fromRed()]
            }, h.prototype._getEndoBasis = function(e) {
                for (var f, d, t, r, n, o, h, l, v, y = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, m = this.n.clone(), S = new c(1), w = new c(0), A = new c(0), x = new c(1), i = 0; 0 !== u.cmpn(0);) {
                    var q = m.div(u);
                    l = m.sub(q.mul(u)), v = A.sub(q.mul(S));
                    var I = x.sub(q.mul(w));
                    if (!t && l.cmp(y) < 0) f = h.neg(), d = S, t = l.neg(), r = v;
                    else if (t && 2 == ++i) break;
                    h = l, m = u, u = l, A = S, S = v, x = w, w = I
                }
                n = l.neg(), o = v;
                var M = t.sqr().add(r.sqr());
                return n.sqr().add(o.sqr()).cmp(M) >= 0 && (n = f, o = d), t.negative && (t = t.neg(), r = r.neg()), n.negative && (n = n.neg(), o = o.neg()), [{
                    a: t,
                    b: r
                }, {
                    a: n,
                    b: o
                }]
            }, h.prototype._endoSplit = function(e) {
                var f = this.endo.basis,
                    d = f[0],
                    t = f[1],
                    c = t.b.mul(e).divRound(this.n),
                    r = d.b.neg().mul(e).divRound(this.n),
                    n = c.mul(d.a),
                    o = r.mul(t.a),
                    h = c.mul(d.b),
                    l = r.mul(t.b);
                return {
                    k1: e.sub(n).sub(o),
                    k2: h.add(l).neg()
                }
            }, h.prototype.pointFromX = function(e, f) {
                (e = new c(e, 16)).red || (e = e.toRed(this.red));
                var d = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                    t = d.redSqrt();
                if (0 !== t.redSqr().redSub(d).cmp(this.zero)) throw new Error("invalid point");
                var r = t.fromRed().isOdd();
                return (f && !r || !f && r) && (t = t.redNeg()), this.point(e, t)
            }, h.prototype.validate = function(e) {
                if (e.inf) return !0;
                var f = e.x,
                    d = e.y,
                    t = this.a.redMul(f),
                    c = f.redSqr().redMul(f).redIAdd(t).redIAdd(this.b);
                return 0 === d.redSqr().redISub(c).cmpn(0)
            }, h.prototype._endoWnafMulAdd = function(e, f, d) {
                for (var t = this._endoWnafT1, c = this._endoWnafT2, i = 0; i < e.length; i++) {
                    var r = this._endoSplit(f[i]),
                        p = e[i],
                        n = p._getBeta();
                    r.k1.negative && (r.k1.ineg(), p = p.neg(!0)), r.k2.negative && (r.k2.ineg(), n = n.neg(!0)), t[2 * i] = p, t[2 * i + 1] = n, c[2 * i] = r.k1, c[2 * i + 1] = r.k2
                }
                for (var o = this._wnafMulAdd(1, t, c, 2 * i, d), h = 0; h < 2 * i; h++) t[h] = null, c[h] = null;
                return o
            }, r(l, n.BasePoint), h.prototype.point = function(e, f, d) {
                return new l(this, e, f, d)
            }, h.prototype.pointFromJSON = function(e, f) {
                return l.fromJSON(this, e, f)
            }, l.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var pre = this.precomputed;
                    if (pre && pre.beta) return pre.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (pre) {
                        var f = this.curve,
                            d = function(p) {
                                return f.point(p.x.redMul(f.endo.beta), p.y)
                            };
                        pre.beta = e, e.precomputed = {
                            beta: null,
                            naf: pre.naf && {
                                wnd: pre.naf.wnd,
                                points: pre.naf.points.map(d)
                            },
                            doubles: pre.doubles && {
                                step: pre.doubles.step,
                                points: pre.doubles.points.map(d)
                            }
                        }
                    }
                    return e
                }
            }, l.prototype.toJSON = function() {
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
            }, l.fromJSON = function(e, f, d) {
                "string" == typeof f && (f = JSON.parse(f));
                var t = e.point(f[0], f[1], d);
                if (!f[2]) return t;

                function c(f) {
                    return e.point(f[0], f[1], d)
                }
                var pre = f[2];
                return t.precomputed = {
                    beta: null,
                    doubles: pre.doubles && {
                        step: pre.doubles.step,
                        points: [t].concat(pre.doubles.points.map(c))
                    },
                    naf: pre.naf && {
                        wnd: pre.naf.wnd,
                        points: [t].concat(pre.naf.points.map(c))
                    }
                }, t
            }, l.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, l.prototype.isInfinity = function() {
                return this.inf
            }, l.prototype.add = function(p) {
                if (this.inf) return p;
                if (p.inf) return this;
                if (this.eq(p)) return this.dbl();
                if (this.neg().eq(p)) return this.curve.point(null, null);
                if (0 === this.x.cmp(p.x)) return this.curve.point(null, null);
                var e = this.y.redSub(p.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(p.x).redInvm()));
                var f = e.redSqr().redISub(this.x).redISub(p.x),
                    d = e.redMul(this.x.redSub(f)).redISub(this.y);
                return this.curve.point(f, d)
            }, l.prototype.dbl = function() {
                if (this.inf) return this;
                var e = this.y.redAdd(this.y);
                if (0 === e.cmpn(0)) return this.curve.point(null, null);
                var a = this.curve.a,
                    f = this.x.redSqr(),
                    d = e.redInvm(),
                    t = f.redAdd(f).redIAdd(f).redIAdd(a).redMul(d),
                    c = t.redSqr().redISub(this.x.redAdd(this.x)),
                    r = t.redMul(this.x.redSub(c)).redISub(this.y);
                return this.curve.point(c, r)
            }, l.prototype.getX = function() {
                return this.x.fromRed()
            }, l.prototype.getY = function() {
                return this.y.fromRed()
            }, l.prototype.mul = function(e) {
                return e = new c(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
            }, l.prototype.mulAdd = function(e, f, d) {
                var t = [this, f],
                    c = [e, d];
                return this.curve.endo ? this.curve._endoWnafMulAdd(t, c) : this.curve._wnafMulAdd(1, t, c, 2)
            }, l.prototype.jmulAdd = function(e, f, d) {
                var t = [this, f],
                    c = [e, d];
                return this.curve.endo ? this.curve._endoWnafMulAdd(t, c, !0) : this.curve._wnafMulAdd(1, t, c, 2, !0)
            }, l.prototype.eq = function(p) {
                return this === p || this.inf === p.inf && (this.inf || 0 === this.x.cmp(p.x) && 0 === this.y.cmp(p.y))
            }, l.prototype.neg = function(e) {
                if (this.inf) return this;
                var f = this.curve.point(this.x, this.y.redNeg());
                if (e && this.precomputed) {
                    var pre = this.precomputed,
                        d = function(p) {
                            return p.neg()
                        };
                    f.precomputed = {
                        naf: pre.naf && {
                            wnd: pre.naf.wnd,
                            points: pre.naf.points.map(d)
                        },
                        doubles: pre.doubles && {
                            step: pre.doubles.step,
                            points: pre.doubles.points.map(d)
                        }
                    }
                }
                return f
            }, l.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, r(v, n.BasePoint), h.prototype.jpoint = function(e, f, d) {
                return new v(this, e, f, d)
            }, v.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var e = this.z.redInvm(),
                    f = e.redSqr(),
                    d = this.x.redMul(f),
                    t = this.y.redMul(f).redMul(e);
                return this.curve.point(d, t)
            }, v.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, v.prototype.add = function(p) {
                if (this.isInfinity()) return p;
                if (p.isInfinity()) return this;
                var e = p.z.redSqr(),
                    f = this.z.redSqr(),
                    d = this.x.redMul(e),
                    t = p.x.redMul(f),
                    c = this.y.redMul(e.redMul(p.z)),
                    r = p.y.redMul(f.redMul(this.z)),
                    n = d.redSub(t),
                    o = c.redSub(r);
                if (0 === n.cmpn(0)) return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h2 = n.redSqr(),
                    h3 = h2.redMul(n),
                    h = d.redMul(h2),
                    l = o.redSqr().redIAdd(h3).redISub(h).redISub(h),
                    v = o.redMul(h.redISub(l)).redISub(c.redMul(h3)),
                    y = this.z.redMul(p.z).redMul(n);
                return this.curve.jpoint(l, v, y)
            }, v.prototype.mixedAdd = function(p) {
                if (this.isInfinity()) return p.toJ();
                if (p.isInfinity()) return this;
                var e = this.z.redSqr(),
                    f = this.x,
                    d = p.x.redMul(e),
                    t = this.y,
                    c = p.y.redMul(e).redMul(this.z),
                    r = f.redSub(d),
                    n = t.redSub(c);
                if (0 === r.cmpn(0)) return 0 !== n.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var h2 = r.redSqr(),
                    h3 = h2.redMul(r),
                    o = f.redMul(h2),
                    h = n.redSqr().redIAdd(h3).redISub(o).redISub(o),
                    l = n.redMul(o.redISub(h)).redISub(t.redMul(h3)),
                    v = this.z.redMul(r);
                return this.curve.jpoint(h, l, v)
            }, v.prototype.dblp = function(e) {
                if (0 === e) return this;
                if (this.isInfinity()) return this;
                if (!e) return this.dbl();
                var i;
                if (this.curve.zeroA || this.curve.threeA) {
                    var f = this;
                    for (i = 0; i < e; i++) f = f.dbl();
                    return f
                }
                var a = this.curve.a,
                    d = this.curve.tinv,
                    t = this.x,
                    c = this.y,
                    r = this.z,
                    n = r.redSqr().redSqr(),
                    o = c.redAdd(c);
                for (i = 0; i < e; i++) {
                    var h = t.redSqr(),
                        l = o.redSqr(),
                        v = l.redSqr(),
                        y = h.redAdd(h).redIAdd(h).redIAdd(a.redMul(n)),
                        m = t.redMul(l),
                        S = y.redSqr().redISub(m.redAdd(m)),
                        w = m.redISub(S),
                        A = y.redMul(w);
                    A = A.redIAdd(A).redISub(v);
                    var x = o.redMul(r);
                    i + 1 < e && (n = n.redMul(v)), t = S, r = x, o = A
                }
                return this.curve.jpoint(t, o.redMul(d), r)
            }, v.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, v.prototype._zeroDbl = function() {
                var e, f, d;
                if (this.zOne) {
                    var t = this.x.redSqr(),
                        c = this.y.redSqr(),
                        r = c.redSqr(),
                        s = this.x.redAdd(c).redSqr().redISub(t).redISub(r);
                    s = s.redIAdd(s);
                    var n = t.redAdd(t).redIAdd(t),
                        o = n.redSqr().redISub(s).redISub(s),
                        h = r.redIAdd(r);
                    h = (h = h.redIAdd(h)).redIAdd(h), e = o, f = n.redMul(s.redISub(o)).redISub(h), d = this.y.redAdd(this.y)
                } else {
                    var a = this.x.redSqr(),
                        b = this.y.redSqr(),
                        l = b.redSqr(),
                        v = this.x.redAdd(b).redSqr().redISub(a).redISub(l);
                    v = v.redIAdd(v);
                    var y = a.redAdd(a).redIAdd(a),
                        m = y.redSqr(),
                        S = l.redIAdd(l);
                    S = (S = S.redIAdd(S)).redIAdd(S), e = m.redISub(v).redISub(v), f = y.redMul(v.redISub(e)).redISub(S), d = (d = this.y.redMul(this.z)).redIAdd(d)
                }
                return this.curve.jpoint(e, f, d)
            }, v.prototype._threeDbl = function() {
                var e, f, d;
                if (this.zOne) {
                    var t = this.x.redSqr(),
                        c = this.y.redSqr(),
                        r = c.redSqr(),
                        s = this.x.redAdd(c).redSqr().redISub(t).redISub(r);
                    s = s.redIAdd(s);
                    var n = t.redAdd(t).redIAdd(t).redIAdd(this.curve.a),
                        o = n.redSqr().redISub(s).redISub(s);
                    e = o;
                    var h = r.redIAdd(r);
                    h = (h = h.redIAdd(h)).redIAdd(h), f = n.redMul(s.redISub(o)).redISub(h), d = this.y.redAdd(this.y)
                } else {
                    var l = this.z.redSqr(),
                        v = this.y.redSqr(),
                        y = this.x.redMul(v),
                        m = this.x.redSub(l).redMul(this.x.redAdd(l));
                    m = m.redAdd(m).redIAdd(m);
                    var S = y.redIAdd(y),
                        w = (S = S.redIAdd(S)).redAdd(S);
                    e = m.redSqr().redISub(w), d = this.y.redAdd(this.z).redSqr().redISub(v).redISub(l);
                    var A = v.redSqr();
                    A = (A = (A = A.redIAdd(A)).redIAdd(A)).redIAdd(A), f = m.redMul(S.redISub(e)).redISub(A)
                }
                return this.curve.jpoint(e, f, d)
            }, v.prototype._dbl = function() {
                var a = this.curve.a,
                    e = this.x,
                    f = this.y,
                    d = this.z,
                    t = d.redSqr().redSqr(),
                    c = e.redSqr(),
                    r = f.redSqr(),
                    n = c.redAdd(c).redIAdd(c).redIAdd(a.redMul(t)),
                    o = e.redAdd(e),
                    h = (o = o.redIAdd(o)).redMul(r),
                    l = n.redSqr().redISub(h.redAdd(h)),
                    v = h.redISub(l),
                    y = r.redSqr();
                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y);
                var m = n.redMul(v).redISub(y),
                    S = f.redAdd(f).redMul(d);
                return this.curve.jpoint(l, m, S)
            }, v.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var e = this.x.redSqr(),
                    f = this.y.redSqr(),
                    d = this.z.redSqr(),
                    t = f.redSqr(),
                    c = e.redAdd(e).redIAdd(e),
                    r = c.redSqr(),
                    n = this.x.redAdd(f).redSqr().redISub(e).redISub(t),
                    o = (n = (n = (n = n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(r)).redSqr(),
                    h = t.redIAdd(t);
                h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
                var u = c.redIAdd(n).redSqr().redISub(r).redISub(o).redISub(h),
                    l = f.redMul(u);
                l = (l = l.redIAdd(l)).redIAdd(l);
                var v = this.x.redMul(o).redISub(l);
                v = (v = v.redIAdd(v)).redIAdd(v);
                var y = this.y.redMul(u.redMul(h.redISub(u)).redISub(n.redMul(o)));
                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y);
                var m = this.z.redAdd(n).redSqr().redISub(d).redISub(o);
                return this.curve.jpoint(v, y, m)
            }, v.prototype.mul = function(e, f) {
                return e = new c(e, f), this.curve._wnafMul(this, e)
            }, v.prototype.eq = function(p) {
                if ("affine" === p.type) return this.eq(p.toJ());
                if (this === p) return !0;
                var e = this.z.redSqr(),
                    f = p.z.redSqr();
                if (0 !== this.x.redMul(f).redISub(p.x.redMul(e)).cmpn(0)) return !1;
                var d = e.redMul(this.z),
                    t = f.redMul(p.z);
                return 0 === this.y.redMul(t).redISub(p.y.redMul(d)).cmpn(0)
            }, v.prototype.eqXToP = function(e) {
                var f = this.z.redSqr(),
                    d = e.toRed(this.curve.red).redMul(f);
                if (0 === this.x.cmp(d)) return !0;
                for (var t = e.clone(), c = this.curve.redN.redMul(f);;) {
                    if (t.iadd(this.curve.n), t.cmp(this.curve.p) >= 0) return !1;
                    if (d.redIAdd(c), 0 === this.x.cmp(d)) return !0
                }
            }, v.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, v.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }
        },
        1484: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(52),
                r = d(439),
                n = d(170);

            function o(e) {
                r.call(this, "mont", e), this.a = new t(e.a, 16).toRed(this.red), this.b = new t(e.b, 16).toRed(this.red), this.i4 = new t(4).toRed(this.red).redInvm(), this.two = new t(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
            }

            function h(e, f, d) {
                r.BasePoint.call(this, e, "projective"), null === f && null === d ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new t(f, 16), this.z = new t(d, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
            }
            c(o, r), e.exports = o, o.prototype.validate = function(e) {
                var f = e.normalize().x,
                    d = f.redSqr(),
                    t = d.redMul(f).redAdd(d.redMul(this.a)).redAdd(f);
                return 0 === t.redSqrt().redSqr().cmp(t)
            }, c(h, r.BasePoint), o.prototype.decodePoint = function(e, f) {
                return this.point(n.toArray(e, f), 1)
            }, o.prototype.point = function(e, f) {
                return new h(this, e, f)
            }, o.prototype.pointFromJSON = function(e) {
                return h.fromJSON(this, e)
            }, h.prototype.precompute = function() {}, h.prototype._encode = function() {
                return this.getX().toArray("be", this.curve.p.byteLength())
            }, h.fromJSON = function(e, f) {
                return new h(e, f[0], f[1] || e.one)
            }, h.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, h.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            }, h.prototype.dbl = function() {
                var e = this.x.redAdd(this.z).redSqr(),
                    f = this.x.redSub(this.z).redSqr(),
                    d = e.redSub(f),
                    t = e.redMul(f),
                    c = d.redMul(f.redAdd(this.curve.a24.redMul(d)));
                return this.curve.point(t, c)
            }, h.prototype.add = function() {
                throw new Error("Not supported on Montgomery curve")
            }, h.prototype.diffAdd = function(p, e) {
                var a = this.x.redAdd(this.z),
                    b = this.x.redSub(this.z),
                    f = p.x.redAdd(p.z),
                    d = p.x.redSub(p.z).redMul(a),
                    t = f.redMul(b),
                    c = e.z.redMul(d.redAdd(t).redSqr()),
                    r = e.x.redMul(d.redISub(t).redSqr());
                return this.curve.point(c, r)
            }, h.prototype.mul = function(e) {
                for (var f = e.clone(), a = this, b = this.curve.point(null, null), d = []; 0 !== f.cmpn(0); f.iushrn(1)) d.push(f.andln(1));
                for (var i = d.length - 1; i >= 0; i--) 0 === d[i] ? (a = a.diffAdd(b, this), b = b.dbl()) : (b = a.diffAdd(b, this), a = a.dbl());
                return b
            }, h.prototype.mulAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, h.prototype.jumlAdd = function() {
                throw new Error("Not supported on Montgomery curve")
            }, h.prototype.eq = function(e) {
                return 0 === this.getX().cmp(e.getX())
            }, h.prototype.normalize = function() {
                return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
            }, h.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }
        },
        1485: function(e, f, d) {
            "use strict";
            var t = d(170),
                c = d(13),
                r = d(52),
                n = d(439),
                o = t.assert;

            function h(e) {
                this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, n.call(this, "edwards", e), this.a = new c(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new c(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new c(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
            }

            function l(e, f, d, t, r) {
                n.BasePoint.call(this, e, "projective"), null === f && null === d && null === t ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new c(f, 16), this.y = new c(d, 16), this.z = t ? new c(t, 16) : this.curve.one, this.t = r && new c(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
            }
            r(h, n), e.exports = h, h.prototype._mulA = function(e) {
                return this.mOneA ? e.redNeg() : this.a.redMul(e)
            }, h.prototype._mulC = function(e) {
                return this.oneC ? e : this.c.redMul(e)
            }, h.prototype.jpoint = function(e, f, d, t) {
                return this.point(e, f, d, t)
            }, h.prototype.pointFromX = function(e, f) {
                (e = new c(e, 16)).red || (e = e.toRed(this.red));
                var d = e.redSqr(),
                    t = this.c2.redSub(this.a.redMul(d)),
                    r = this.one.redSub(this.c2.redMul(this.d).redMul(d)),
                    n = t.redMul(r.redInvm()),
                    o = n.redSqrt();
                if (0 !== o.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
                var h = o.fromRed().isOdd();
                return (f && !h || !f && h) && (o = o.redNeg()), this.point(e, o)
            }, h.prototype.pointFromY = function(e, f) {
                (e = new c(e, 16)).red || (e = e.toRed(this.red));
                var d = e.redSqr(),
                    t = d.redSub(this.c2),
                    r = d.redMul(this.d).redMul(this.c2).redSub(this.a),
                    n = t.redMul(r.redInvm());
                if (0 === n.cmp(this.zero)) {
                    if (f) throw new Error("invalid point");
                    return this.point(this.zero, e)
                }
                var o = n.redSqrt();
                if (0 !== o.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
                return o.fromRed().isOdd() !== f && (o = o.redNeg()), this.point(o, e)
            }, h.prototype.validate = function(e) {
                if (e.isInfinity()) return !0;
                e.normalize();
                var f = e.x.redSqr(),
                    d = e.y.redSqr(),
                    t = f.redMul(this.a).redAdd(d),
                    c = this.c2.redMul(this.one.redAdd(this.d.redMul(f).redMul(d)));
                return 0 === t.cmp(c)
            }, r(l, n.BasePoint), h.prototype.pointFromJSON = function(e) {
                return l.fromJSON(this, e)
            }, h.prototype.point = function(e, f, d, t) {
                return new l(this, e, f, d, t)
            }, l.fromJSON = function(e, f) {
                return new l(e, f[0], f[1], f[2])
            }, l.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
            }, l.prototype.isInfinity = function() {
                return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
            }, l.prototype._extDbl = function() {
                var a = this.x.redSqr(),
                    b = this.y.redSqr(),
                    e = this.z.redSqr();
                e = e.redIAdd(e);
                var f = this.curve._mulA(a),
                    d = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b),
                    g = f.redAdd(b),
                    t = g.redSub(e),
                    c = f.redSub(b),
                    r = d.redMul(t),
                    n = g.redMul(c),
                    o = d.redMul(c),
                    h = t.redMul(g);
                return this.curve.point(r, n, h, o)
            }, l.prototype._projDbl = function() {
                var e, f, d, t, c, r, b = this.x.redAdd(this.y).redSqr(),
                    n = this.x.redSqr(),
                    o = this.y.redSqr();
                if (this.curve.twisted) {
                    var h = (t = this.curve._mulA(n)).redAdd(o);
                    this.zOne ? (e = b.redSub(n).redSub(o).redMul(h.redSub(this.curve.two)), f = h.redMul(t.redSub(o)), d = h.redSqr().redSub(h).redSub(h)) : (c = this.z.redSqr(), r = h.redSub(c).redISub(c), e = b.redSub(n).redISub(o).redMul(r), f = h.redMul(t.redSub(o)), d = h.redMul(r))
                } else t = n.redAdd(o), c = this.curve._mulC(this.z).redSqr(), r = t.redSub(c).redSub(c), e = this.curve._mulC(b.redISub(t)).redMul(r), f = this.curve._mulC(t).redMul(n.redISub(o)), d = t.redMul(r);
                return this.curve.point(e, f, d)
            }, l.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
            }, l.prototype._extAdd = function(p) {
                var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x)),
                    b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)),
                    e = this.t.redMul(this.curve.dd).redMul(p.t),
                    f = this.z.redMul(p.z.redAdd(p.z)),
                    d = b.redSub(a),
                    t = f.redSub(e),
                    g = f.redAdd(e),
                    c = b.redAdd(a),
                    r = d.redMul(t),
                    n = g.redMul(c),
                    o = d.redMul(c),
                    h = t.redMul(g);
                return this.curve.point(r, n, h, o)
            }, l.prototype._projAdd = function(p) {
                var e, f, a = this.z.redMul(p.z),
                    b = a.redSqr(),
                    d = this.x.redMul(p.x),
                    t = this.y.redMul(p.y),
                    c = this.curve.d.redMul(d).redMul(t),
                    r = b.redSub(c),
                    g = b.redAdd(c),
                    n = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(d).redISub(t),
                    o = a.redMul(r).redMul(n);
                return this.curve.twisted ? (e = a.redMul(g).redMul(t.redSub(this.curve._mulA(d))), f = r.redMul(g)) : (e = a.redMul(g).redMul(t.redSub(d)), f = this.curve._mulC(r).redMul(g)), this.curve.point(o, e, f)
            }, l.prototype.add = function(p) {
                return this.isInfinity() ? p : p.isInfinity() ? this : this.curve.extended ? this._extAdd(p) : this._projAdd(p)
            }, l.prototype.mul = function(e) {
                return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
            }, l.prototype.mulAdd = function(e, p, f) {
                return this.curve._wnafMulAdd(1, [this, p], [e, f], 2, !1)
            }, l.prototype.jmulAdd = function(e, p, f) {
                return this.curve._wnafMulAdd(1, [this, p], [e, f], 2, !0)
            }, l.prototype.normalize = function() {
                if (this.zOne) return this;
                var e = this.z.redInvm();
                return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
            }, l.prototype.neg = function() {
                return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
            }, l.prototype.getX = function() {
                return this.normalize(), this.x.fromRed()
            }, l.prototype.getY = function() {
                return this.normalize(), this.y.fromRed()
            }, l.prototype.eq = function(e) {
                return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
            }, l.prototype.eqXToP = function(e) {
                var f = e.toRed(this.curve.red).redMul(this.z);
                if (0 === this.x.cmp(f)) return !0;
                for (var d = e.clone(), t = this.curve.redN.redMul(this.z);;) {
                    if (d.iadd(this.curve.n), d.cmp(this.curve.p) >= 0) return !1;
                    if (f.redIAdd(t), 0 === this.x.cmp(f)) return !0
                }
            }, l.prototype.toP = l.prototype.normalize, l.prototype.mixedAdd = l.prototype.add
        },
        1486: function(e, f) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                        ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                        ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                        ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                        ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                        ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                        ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                        ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                        ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                        ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                        ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                        ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                        ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                        ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                        ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                        ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                        ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                        ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                        ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                        ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                        ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                        ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                        ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                        ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                        ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                        ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                        ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                        ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                        ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                        ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                        ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                        ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                        ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                        ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                        ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                        ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                        ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                        ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                        ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                        ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                        ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                        ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                        ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                        ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                        ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                        ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                        ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                        ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                        ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                        ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                        ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                        ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                        ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                        ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                        ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                        ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                        ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                        ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                        ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                        ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                        ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                        ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                        ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                        ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                        ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                        ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                        ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                        ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                        ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                        ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                        ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                        ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                        ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                        ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                        ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                        ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                        ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                        ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                        ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                        ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                        ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                        ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                        ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                        ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                        ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                        ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                        ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                        ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                        ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                        ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                        ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                        ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                        ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                        ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                        ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                        ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                        ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                        ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                        ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                        ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                        ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                        ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                        ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                        ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                        ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                        ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                        ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                        ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                        ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                        ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                        ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                        ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                        ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                        ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                        ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                        ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                        ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                        ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                        ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                        ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                        ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                        ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                        ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                        ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                        ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                        ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                        ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                        ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                        ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                        ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                        ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                        ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                        ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                        ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                        ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                        ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                        ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                        ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                        ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                        ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                        ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                        ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                        ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                        ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                        ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                        ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                        ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                        ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                        ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                        ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                        ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                        ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                        ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                        ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                        ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                        ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                        ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                        ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                        ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                        ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                        ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                        ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                        ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                        ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                        ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                        ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                        ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                        ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                        ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                        ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                        ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                        ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                        ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                        ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                        ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                        ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                        ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                        ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                        ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                        ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                        ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                        ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                        ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                        ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                        ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                        ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                        ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                        ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                        ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                        ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                        ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                    ]
                }
            }
        },
        1487: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(1488),
                r = d(170),
                n = d(574),
                o = d(664),
                h = r.assert,
                l = d(1489),
                v = d(1490);

            function y(e) {
                if (!(this instanceof y)) return new y(e);
                "string" == typeof e && (h(Object.prototype.hasOwnProperty.call(n, e), "Unknown curve " + e), e = n[e]), e instanceof n.PresetCurve && (e = {
                    curve: e
                }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
            }
            e.exports = y, y.prototype.keyPair = function(e) {
                return new l(this, e)
            }, y.prototype.keyFromPrivate = function(e, f) {
                return l.fromPrivate(this, e, f)
            }, y.prototype.keyFromPublic = function(e, f) {
                return l.fromPublic(this, e, f)
            }, y.prototype.genKeyPair = function(e) {
                e || (e = {});
                for (var f = new c({
                        hash: this.hash,
                        pers: e.pers,
                        persEnc: e.persEnc || "utf8",
                        entropy: e.entropy || o(this.hash.hmacStrength),
                        entropyEnc: e.entropy && e.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), d = this.n.byteLength(), r = this.n.sub(new t(2));;) {
                    var n = new t(f.generate(d));
                    if (!(n.cmp(r) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
                }
            }, y.prototype._truncateToN = function(e, f) {
                var d = 8 * e.byteLength() - this.n.bitLength();
                return d > 0 && (e = e.ushrn(d)), !f && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            }, y.prototype.sign = function(e, f, d, r) {
                "object" == typeof d && (r = d, d = null), r || (r = {}), f = this.keyFromPrivate(f, d), e = this._truncateToN(new t(e, 16));
                for (var n = this.n.byteLength(), o = f.getPrivate().toArray("be", n), h = e.toArray("be", n), l = new c({
                        hash: this.hash,
                        entropy: o,
                        nonce: h,
                        pers: r.pers,
                        persEnc: r.persEnc || "utf8"
                    }), y = this.n.sub(new t(1)), m = 0;; m++) {
                    var S = r.k ? r.k(m) : new t(l.generate(this.n.byteLength()));
                    if (!((S = this._truncateToN(S, !0)).cmpn(1) <= 0 || S.cmp(y) >= 0)) {
                        var w = this.g.mul(S);
                        if (!w.isInfinity()) {
                            var A = w.getX(),
                                x = A.umod(this.n);
                            if (0 !== x.cmpn(0)) {
                                var s = S.invm(this.n).mul(x.mul(f.getPrivate()).iadd(e));
                                if (0 !== (s = s.umod(this.n)).cmpn(0)) {
                                    var I = (w.getY().isOdd() ? 1 : 0) | (0 !== A.cmp(x) ? 2 : 0);
                                    return r.canonical && s.cmp(this.nh) > 0 && (s = this.n.sub(s), I ^= 1), new v({
                                        r: x,
                                        s: s,
                                        recoveryParam: I
                                    })
                                }
                            }
                        }
                    }
                }
            }, y.prototype.verify = function(e, f, d, c) {
                e = this._truncateToN(new t(e, 16)), d = this.keyFromPublic(d, c);
                var r = (f = new v(f, "hex")).r,
                    s = f.s;
                if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return !1;
                if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                var p, n = s.invm(this.n),
                    o = n.mul(e).umod(this.n),
                    h = n.mul(r).umod(this.n);
                return this.curve._maxwellTrick ? !(p = this.g.jmulAdd(o, d.getPublic(), h)).isInfinity() && p.eqXToP(r) : !(p = this.g.mulAdd(o, d.getPublic(), h)).isInfinity() && 0 === p.getX().umod(this.n).cmp(r)
            }, y.prototype.recoverPubKey = function(e, f, d, c) {
                h((3 & d) === d, "The recovery param is more than two bits"), f = new v(f, c);
                var r = this.n,
                    n = new t(e),
                    o = f.r,
                    s = f.s,
                    l = 1 & d,
                    y = d >> 1;
                if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && y) throw new Error("Unable to find sencond key candinate");
                o = y ? this.curve.pointFromX(o.add(this.curve.n), l) : this.curve.pointFromX(o, l);
                var m = f.r.invm(r),
                    S = r.sub(n).mul(m).umod(r),
                    w = s.mul(m).umod(r);
                return this.g.mulAdd(S, o, w)
            }, y.prototype.getKeyRecoveryParam = function(e, f, d, t) {
                if (null !== (f = new v(f, t)).recoveryParam) return f.recoveryParam;
                for (var i = 0; i < 4; i++) {
                    var c;
                    try {
                        c = this.recoverPubKey(e, f, i)
                    } catch (e) {
                        continue
                    }
                    if (c.eq(d)) return i
                }
                throw new Error("Unable to find valid recovery factor")
            }
        },
        1489: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(170).assert;

            function r(e, f) {
                this.ec = e, this.priv = null, this.pub = null, f.priv && this._importPrivate(f.priv, f.privEnc), f.pub && this._importPublic(f.pub, f.pubEnc)
            }
            e.exports = r, r.fromPublic = function(e, f, d) {
                return f instanceof r ? f : new r(e, {
                    pub: f,
                    pubEnc: d
                })
            }, r.fromPrivate = function(e, f, d) {
                return f instanceof r ? f : new r(e, {
                    priv: f,
                    privEnc: d
                })
            }, r.prototype.validate = function() {
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
            }, r.prototype.getPublic = function(e, f) {
                return "string" == typeof e && (f = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), f ? this.pub.encode(f, e) : this.pub
            }, r.prototype.getPrivate = function(e) {
                return "hex" === e ? this.priv.toString(16, 2) : this.priv
            }, r.prototype._importPrivate = function(e, f) {
                this.priv = new t(e, f || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, r.prototype._importPublic = function(e, f) {
                if (e.x || e.y) return "mont" === this.ec.curve.type ? c(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || c(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
                this.pub = this.ec.curve.decodePoint(e, f)
            }, r.prototype.derive = function(e) {
                return e.validate() || c(e.validate(), "public point not validated"), e.mul(this.priv).getX()
            }, r.prototype.sign = function(e, f, d) {
                return this.ec.sign(e, this, f, d)
            }, r.prototype.verify = function(e, f) {
                return this.ec.verify(e, f, this)
            }, r.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            }
        },
        1490: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(170),
                r = c.assert;

            function n(e, f) {
                if (e instanceof n) return e;
                this._importDER(e, f) || (r(e.r && e.s, "Signature without r or s"), this.r = new t(e.r, 16), this.s = new t(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
            }

            function o() {
                this.place = 0
            }

            function h(e, p) {
                var f = e[p.place++];
                if (!(128 & f)) return f;
                var d = 15 & f;
                if (0 === d || d > 4) return !1;
                for (var t = 0, i = 0, c = p.place; i < d; i++, c++) t <<= 8, t |= e[c], t >>>= 0;
                return !(t <= 127) && (p.place = c, t)
            }

            function l(e) {
                for (var i = 0, f = e.length - 1; !e[i] && !(128 & e[i + 1]) && i < f;) i++;
                return 0 === i ? e : e.slice(i)
            }

            function v(e, f) {
                if (f < 128) e.push(f);
                else {
                    var d = 1 + (Math.log(f) / Math.LN2 >>> 3);
                    for (e.push(128 | d); --d;) e.push(f >>> (d << 3) & 255);
                    e.push(f)
                }
            }
            e.exports = n, n.prototype._importDER = function(data, e) {
                data = c.toArray(data, e);
                var p = new o;
                if (48 !== data[p.place++]) return !1;
                var f = h(data, p);
                if (!1 === f) return !1;
                if (f + p.place !== data.length) return !1;
                if (2 !== data[p.place++]) return !1;
                var d = h(data, p);
                if (!1 === d) return !1;
                var r = data.slice(p.place, d + p.place);
                if (p.place += d, 2 !== data[p.place++]) return !1;
                var n = h(data, p);
                if (!1 === n) return !1;
                if (data.length !== n + p.place) return !1;
                var s = data.slice(p.place, n + p.place);
                if (0 === r[0]) {
                    if (!(128 & r[1])) return !1;
                    r = r.slice(1)
                }
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                return this.r = new t(r), this.s = new t(s), this.recoveryParam = null, !0
            }, n.prototype.toDER = function(e) {
                var f = this.r.toArray(),
                    s = this.s.toArray();
                for (128 & f[0] && (f = [0].concat(f)), 128 & s[0] && (s = [0].concat(s)), f = l(f), s = l(s); !(s[0] || 128 & s[1]);) s = s.slice(1);
                var d = [2];
                v(d, f.length), (d = d.concat(f)).push(2), v(d, s.length);
                var t = d.concat(s),
                    r = [48];
                return v(r, t.length), r = r.concat(t), c.encode(r, e)
            }
        },
        1491: function(e, f, d) {
            "use strict";
            var t = d(18),
                c = d(574),
                r = d(170),
                n = r.assert,
                o = r.parseBytes,
                h = d(1492),
                l = d(1493);

            function v(e) {
                if (n("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof v)) return new v(e);
                e = c[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = t.sha512
            }
            e.exports = v, v.prototype.sign = function(e, f) {
                e = o(e);
                var d = this.keyFromSecret(f),
                    t = this.hashInt(d.messagePrefix(), e),
                    c = this.g.mul(t),
                    r = this.encodePoint(c),
                    n = this.hashInt(r, d.pubBytes(), e).mul(d.priv()),
                    h = t.add(n).umod(this.curve.n);
                return this.makeSignature({
                    R: c,
                    S: h,
                    Rencoded: r
                })
            }, v.prototype.verify = function(e, f, d) {
                e = o(e), f = this.makeSignature(f);
                var t = this.keyFromPublic(d),
                    c = this.hashInt(f.Rencoded(), t.pubBytes(), e),
                    r = this.g.mul(f.S());
                return f.R().add(t.pub().mul(c)).eq(r)
            }, v.prototype.hashInt = function() {
                for (var e = this.hash(), i = 0; i < arguments.length; i++) e.update(arguments[i]);
                return r.intFromLE(e.digest()).umod(this.curve.n)
            }, v.prototype.keyFromPublic = function(e) {
                return h.fromPublic(this, e)
            }, v.prototype.keyFromSecret = function(e) {
                return h.fromSecret(this, e)
            }, v.prototype.makeSignature = function(e) {
                return e instanceof l ? e : new l(this, e)
            }, v.prototype.encodePoint = function(e) {
                var f = e.getY().toArray("le", this.encodingLength);
                return f[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, f
            }, v.prototype.decodePoint = function(e) {
                var f = (e = r.parseBytes(e)).length - 1,
                    d = e.slice(0, f).concat(-129 & e[f]),
                    t = 0 != (128 & e[f]),
                    c = r.intFromLE(d);
                return this.curve.pointFromY(c, t)
            }, v.prototype.encodeInt = function(e) {
                return e.toArray("le", this.encodingLength)
            }, v.prototype.decodeInt = function(e) {
                return r.intFromLE(e)
            }, v.prototype.isPoint = function(e) {
                return e instanceof this.pointClass
            }
        },
        1492: function(e, f, d) {
            "use strict";
            var t = d(170),
                c = t.assert,
                r = t.parseBytes,
                n = t.cachedProperty;

            function o(e, f) {
                this.eddsa = e, this._secret = r(f.secret), e.isPoint(f.pub) ? this._pub = f.pub : this._pubBytes = r(f.pub)
            }
            o.fromPublic = function(e, f) {
                return f instanceof o ? f : new o(e, {
                    pub: f
                })
            }, o.fromSecret = function(e, f) {
                return f instanceof o ? f : new o(e, {
                    secret: f
                })
            }, o.prototype.secret = function() {
                return this._secret
            }, n(o, "pubBytes", (function() {
                return this.eddsa.encodePoint(this.pub())
            })), n(o, "pub", (function() {
                return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
            })), n(o, "privBytes", (function() {
                var e = this.eddsa,
                    f = this.hash(),
                    d = e.encodingLength - 1,
                    a = f.slice(0, e.encodingLength);
                return a[0] &= 248, a[d] &= 127, a[d] |= 64, a
            })), n(o, "priv", (function() {
                return this.eddsa.decodeInt(this.privBytes())
            })), n(o, "hash", (function() {
                return this.eddsa.hash().update(this.secret()).digest()
            })), n(o, "messagePrefix", (function() {
                return this.hash().slice(this.eddsa.encodingLength)
            })), o.prototype.sign = function(e) {
                return c(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
            }, o.prototype.verify = function(e, f) {
                return this.eddsa.verify(e, f, this)
            }, o.prototype.getSecret = function(e) {
                return c(this._secret, "KeyPair is public only"), t.encode(this.secret(), e)
            }, o.prototype.getPublic = function(e) {
                return t.encode(this.pubBytes(), e)
            }, e.exports = o
        },
        1493: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(170),
                r = c.assert,
                n = c.cachedProperty,
                o = c.parseBytes;

            function h(e, f) {
                this.eddsa = e, "object" != typeof f && (f = o(f)), Array.isArray(f) && (f = {
                    R: f.slice(0, e.encodingLength),
                    S: f.slice(e.encodingLength)
                }), r(f.R && f.S, "Signature without R or S"), e.isPoint(f.R) && (this._R = f.R), f.S instanceof t && (this._S = f.S), this._Rencoded = Array.isArray(f.R) ? f.R : f.Rencoded, this._Sencoded = Array.isArray(f.S) ? f.S : f.Sencoded
            }
            n(h, "S", (function() {
                return this.eddsa.decodeInt(this.Sencoded())
            })), n(h, "R", (function() {
                return this.eddsa.decodePoint(this.Rencoded())
            })), n(h, "Rencoded", (function() {
                return this.eddsa.encodePoint(this.R())
            })), n(h, "Sencoded", (function() {
                return this.eddsa.encodeInt(this.S())
            })), h.prototype.toBytes = function() {
                return this.Rencoded().concat(this.Sencoded())
            }, h.prototype.toHex = function() {
                return c.encode(this.toBytes(), "hex").toUpperCase()
            }, e.exports = h
        },
        1520: function(e, f, d) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                c = new RegExp(t, "gi"),
                r = new RegExp("(" + t + ")+", "gi");

            function n(e, f) {
                try {
                    return decodeURIComponent(e.join(""))
                } catch (e) {}
                if (1 === e.length) return e;
                f = f || 1;
                var d = e.slice(0, f),
                    t = e.slice(f);
                return Array.prototype.concat.call([], n(d), n(t))
            }

            function o(input) {
                try {
                    return decodeURIComponent(input)
                } catch (f) {
                    for (var e = input.match(c), i = 1; i < e.length; i++) e = (input = n(e, i).join("")).match(c);
                    return input
                }
            }
            e.exports = function(e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (f) {
                    return function(input) {
                        for (var e = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, f = r.exec(input); f;) {
                            try {
                                e[f[0]] = decodeURIComponent(f[0])
                            } catch (t) {
                                var d = o(f[0]);
                                d !== f[0] && (e[f[0]] = d)
                            }
                            f = r.exec(input)
                        }
                        e["%C2"] = "�";
                        for (var t = Object.keys(e), i = 0; i < t.length; i++) {
                            var c = t[i];
                            input = input.replace(new RegExp(c, "g"), e[c])
                        }
                        return input
                    }(e)
                }
            }
        },
        170: function(e, f, d) {
            "use strict";
            var t = f,
                c = d(13),
                r = d(257),
                n = d(826);
            t.assert = r, t.toArray = n.toArray, t.zero2 = n.zero2, t.toHex = n.toHex, t.encode = n.encode, t.getNAF = function(e, f, d) {
                var t = new Array(Math.max(e.bitLength(), d) + 1);
                t.fill(0);
                for (var c = 1 << f + 1, r = e.clone(), i = 0; i < t.length; i++) {
                    var n, o = r.andln(c - 1);
                    r.isOdd() ? (n = o > (c >> 1) - 1 ? (c >> 1) - o : o, r.isubn(n)) : n = 0, t[i] = n, r.iushrn(1)
                }
                return t
            }, t.getJSF = function(e, f) {
                var d = [
                    [],
                    []
                ];
                e = e.clone(), f = f.clone();
                for (var t, c = 0, r = 0; e.cmpn(-c) > 0 || f.cmpn(-r) > 0;) {
                    var n, o, h = e.andln(3) + c & 3,
                        l = f.andln(3) + r & 3;
                    3 === h && (h = -1), 3 === l && (l = -1), n = 0 == (1 & h) ? 0 : 3 !== (t = e.andln(7) + c & 7) && 5 !== t || 2 !== l ? h : -h, d[0].push(n), o = 0 == (1 & l) ? 0 : 3 !== (t = f.andln(7) + r & 7) && 5 !== t || 2 !== h ? l : -l, d[1].push(o), 2 * c === n + 1 && (c = 1 - c), 2 * r === o + 1 && (r = 1 - r), e.iushrn(1), f.iushrn(1)
                }
                return d
            }, t.cachedProperty = function(e, f, d) {
                var t = "_" + f;
                e.prototype[f] = function() {
                    return void 0 !== this[t] ? this[t] : this[t] = d.call(this)
                }
            }, t.parseBytes = function(e) {
                return "string" == typeof e ? t.toArray(e, "hex") : e
            }, t.intFromLE = function(e) {
                return new c(e, "hex", "le")
            }
        },
        407: function(e, f, d) {
            "use strict";
            var t = f;
            t.version = d(1481).version, t.utils = d(170), t.rand = d(664), t.curve = d(827), t.curves = d(574), t.ec = d(1487), t.eddsa = d(1491)
        },
        439: function(e, f, d) {
            "use strict";
            var t = d(13),
                c = d(170),
                r = c.getNAF,
                n = c.getJSF,
                o = c.assert;

            function h(e, f) {
                this.type = e, this.p = new t(f.p, 16), this.red = f.prime ? t.red(f.prime) : t.mont(this.p), this.zero = new t(0).toRed(this.red), this.one = new t(1).toRed(this.red), this.two = new t(2).toRed(this.red), this.n = f.n && new t(f.n, 16), this.g = f.g && this.pointFromJSON(f.g, f.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
                var d = this.n && this.p.div(this.n);
                !d || d.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function l(e, f) {
                this.curve = e, this.type = f, this.precomputed = null
            }
            e.exports = h, h.prototype.point = function() {
                throw new Error("Not implemented")
            }, h.prototype.validate = function() {
                throw new Error("Not implemented")
            }, h.prototype._fixedNafMul = function(p, e) {
                o(p.precomputed);
                var f = p._getDoubles(),
                    d = r(e, 1, this._bitLength),
                    t = (1 << f.step + 1) - (f.step % 2 == 0 ? 2 : 1);
                t /= 3;
                var c, n, h = [];
                for (c = 0; c < d.length; c += f.step) {
                    n = 0;
                    for (var l = c + f.step - 1; l >= c; l--) n = (n << 1) + d[l];
                    h.push(n)
                }
                for (var a = this.jpoint(null, null, null), b = this.jpoint(null, null, null), i = t; i > 0; i--) {
                    for (c = 0; c < h.length; c++)(n = h[c]) === i ? b = b.mixedAdd(f.points[c]) : n === -i && (b = b.mixedAdd(f.points[c].neg()));
                    a = a.add(b)
                }
                return a.toP()
            }, h.prototype._wnafMul = function(p, e) {
                var f = 4,
                    d = p._getNAFPoints(f);
                f = d.wnd;
                for (var t = d.points, c = r(e, f, this._bitLength), n = this.jpoint(null, null, null), i = c.length - 1; i >= 0; i--) {
                    for (var h = 0; i >= 0 && 0 === c[i]; i--) h++;
                    if (i >= 0 && h++, n = n.dblp(h), i < 0) break;
                    var l = c[i];
                    o(0 !== l), n = "affine" === p.type ? l > 0 ? n.mixedAdd(t[l - 1 >> 1]) : n.mixedAdd(t[-l - 1 >> 1].neg()) : l > 0 ? n.add(t[l - 1 >> 1]) : n.add(t[-l - 1 >> 1].neg())
                }
                return "affine" === p.type ? n.toP() : n
            }, h.prototype._wnafMulAdd = function(e, f, d, t, c) {
                var i, o, p, h = this._wnafT1,
                    l = this._wnafT2,
                    v = this._wnafT3,
                    y = 0;
                for (i = 0; i < t; i++) {
                    var m = (p = f[i])._getNAFPoints(e);
                    h[i] = m.wnd, l[i] = m.points
                }
                for (i = t - 1; i >= 1; i -= 2) {
                    var a = i - 1,
                        b = i;
                    if (1 === h[a] && 1 === h[b]) {
                        var S = [f[a], null, null, f[b]];
                        0 === f[a].y.cmp(f[b].y) ? (S[1] = f[a].add(f[b]), S[2] = f[a].toJ().mixedAdd(f[b].neg())) : 0 === f[a].y.cmp(f[b].y.redNeg()) ? (S[1] = f[a].toJ().mixedAdd(f[b]), S[2] = f[a].add(f[b].neg())) : (S[1] = f[a].toJ().mixedAdd(f[b]), S[2] = f[a].toJ().mixedAdd(f[b].neg()));
                        var w = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                            A = n(d[a], d[b]);
                        for (y = Math.max(A[0].length, y), v[a] = new Array(y), v[b] = new Array(y), o = 0; o < y; o++) {
                            var x = 0 | A[0][o],
                                I = 0 | A[1][o];
                            v[a][o] = w[3 * (x + 1) + (I + 1)], v[b][o] = 0, l[a] = S
                        }
                    } else v[a] = r(d[a], h[a], this._bitLength), v[b] = r(d[b], h[b], this._bitLength), y = Math.max(v[a].length, y), y = Math.max(v[b].length, y)
                }
                var M = this.jpoint(null, null, null),
                    _ = this._wnafT4;
                for (i = y; i >= 0; i--) {
                    for (var P = 0; i >= 0;) {
                        var z = !0;
                        for (o = 0; o < t; o++) _[o] = 0 | v[o][i], 0 !== _[o] && (z = !1);
                        if (!z) break;
                        P++, i--
                    }
                    if (i >= 0 && P++, M = M.dblp(P), i < 0) break;
                    for (o = 0; o < t; o++) {
                        var R = _[o];
                        0 !== R && (R > 0 ? p = l[o][R - 1 >> 1] : R < 0 && (p = l[o][-R - 1 >> 1].neg()), M = "affine" === p.type ? M.mixedAdd(p) : M.add(p))
                    }
                }
                for (i = 0; i < t; i++) l[i] = null;
                return c ? M : M.toP()
            }, h.BasePoint = l, l.prototype.eq = function() {
                throw new Error("Not implemented")
            }, l.prototype.validate = function() {
                return this.curve.validate(this)
            }, h.prototype.decodePoint = function(e, f) {
                e = c.toArray(e, f);
                var d = this.p.byteLength();
                if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * d) return 6 === e[0] ? o(e[e.length - 1] % 2 == 0) : 7 === e[0] && o(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + d), e.slice(1 + d, 1 + 2 * d));
                if ((2 === e[0] || 3 === e[0]) && e.length - 1 === d) return this.pointFromX(e.slice(1, 1 + d), 3 === e[0]);
                throw new Error("Unknown point format")
            }, l.prototype.encodeCompressed = function(e) {
                return this.encode(e, !0)
            }, l.prototype._encode = function(e) {
                var f = this.curve.p.byteLength(),
                    d = this.getX().toArray("be", f);
                return e ? [this.getY().isEven() ? 2 : 3].concat(d) : [4].concat(d, this.getY().toArray("be", f))
            }, l.prototype.encode = function(e, f) {
                return c.encode(this._encode(f), e)
            }, l.prototype.precompute = function(e) {
                if (this.precomputed) return this;
                var f = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return f.naf = this._getNAFPoints(8), f.doubles = this._getDoubles(4, e), f.beta = this._getBeta(), this.precomputed = f, this
            }, l.prototype._hasDoubles = function(e) {
                if (!this.precomputed) return !1;
                var f = this.precomputed.doubles;
                return !!f && f.points.length >= Math.ceil((e.bitLength() + 1) / f.step)
            }, l.prototype._getDoubles = function(e, f) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var d = [this], t = this, i = 0; i < f; i += e) {
                    for (var c = 0; c < e; c++) t = t.dbl();
                    d.push(t)
                }
                return {
                    step: e,
                    points: d
                }
            }, l.prototype._getNAFPoints = function(e) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var f = [this], d = (1 << e) - 1, t = 1 === d ? null : this.dbl(), i = 1; i < d; i++) f[i] = f[i - 1].add(t);
                return {
                    wnd: e,
                    points: f
                }
            }, l.prototype._getBeta = function() {
                return null
            }, l.prototype.dblp = function(e) {
                for (var f = this, i = 0; i < e; i++) f = f.dbl();
                return f
            }
        },
        476: function(e, f, d) {
            "use strict";
            var t = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && ! function(e) {
                    var f = Object.prototype.toString.call(e);
                    return "[object RegExp]" === f || "[object Date]" === f || function(e) {
                        return e.$$typeof === c
                    }(e)
                }(e)
            };
            var c = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(e, f) {
                return !1 !== f.clone && f.isMergeableObject(e) ? v((d = e, Array.isArray(d) ? [] : {}), e, f) : e;
                var d
            }

            function n(e, source, f) {
                return e.concat(source).map((function(element) {
                    return r(element, f)
                }))
            }

            function o(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(symbol) {
                        return e.propertyIsEnumerable(symbol)
                    })) : []
                }(e))
            }

            function h(object, e) {
                try {
                    return e in object
                } catch (e) {
                    return !1
                }
            }

            function l(e, source, f) {
                var d = {};
                return f.isMergeableObject(e) && o(e).forEach((function(t) {
                    d[t] = r(e[t], f)
                })), o(source).forEach((function(t) {
                    (function(e, f) {
                        return h(e, f) && !(Object.hasOwnProperty.call(e, f) && Object.propertyIsEnumerable.call(e, f))
                    })(e, t) || (h(e, t) && f.isMergeableObject(source[t]) ? d[t] = function(e, f) {
                        if (!f.customMerge) return v;
                        var d = f.customMerge(e);
                        return "function" == typeof d ? d : v
                    }(t, f)(e[t], source[t], f) : d[t] = r(source[t], f))
                })), d
            }

            function v(e, source, f) {
                (f = f || {}).arrayMerge = f.arrayMerge || n, f.isMergeableObject = f.isMergeableObject || t, f.cloneUnlessOtherwiseSpecified = r;
                var d = Array.isArray(source);
                return d === Array.isArray(e) ? d ? f.arrayMerge(e, source, f) : l(e, source, f) : r(source, f)
            }
            v.all = function(e, f) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, d) {
                    return v(e, d, f)
                }), {})
            };
            var y = v;
            e.exports = y
        },
        574: function(e, f, d) {
            "use strict";
            var pre, t = f,
                c = d(18),
                r = d(827),
                n = d(170).assert;

            function o(e) {
                "short" === e.type ? this.curve = new r.short(e) : "edwards" === e.type ? this.curve = new r.edwards(e) : this.curve = new r.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function h(e, f) {
                Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var d = new o(f);
                        return Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: d
                        }), d
                    }
                })
            }
            t.PresetCurve = o, h("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: c.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), h("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: c.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), h("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: c.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), h("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: c.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), h("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: c.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), h("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: c.sha256,
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
                hash: c.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                pre = d(1486)
            } catch (e) {
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
                hash: c.sha256,
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
        },
        662: function(e, f, d) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, s, f) {
                    var d = {},
                        c = {};
                    c[s] = 0;
                    var r, u, n, o, h, l, v, y = t.PriorityQueue.make();
                    for (y.push(s, 0); !y.empty();)
                        for (n in u = (r = y.pop()).value, o = r.cost, h = e[u] || {}) h.hasOwnProperty(n) && (l = o + h[n], v = c[n], (void 0 === c[n] || v > l) && (c[n] = l, y.push(n, l), d[n] = u));
                    if (void 0 !== f && void 0 === c[f]) {
                        var m = ["Could not find a path from ", s, " to ", f, "."].join("");
                        throw new Error(m)
                    }
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, f) {
                    for (var d = [], u = f; u;) d.push(u), e[u], u = e[u];
                    return d.reverse(), d
                },
                find_path: function(e, s, f) {
                    var d = t.single_source_shortest_paths(e, s, f);
                    return t.extract_shortest_path_from_predecessor_list(d, f)
                },
                PriorityQueue: {
                    make: function(e) {
                        var f, d = t.PriorityQueue,
                            c = {};
                        for (f in e = e || {}, d) d.hasOwnProperty(f) && (c[f] = d[f]);
                        return c.queue = [], c.sorter = e.sorter || d.default_sorter, c
                    },
                    default_sorter: function(a, b) {
                        return a.cost - b.cost
                    },
                    push: function(e, f) {
                        var d = {
                            value: e,
                            cost: f
                        };
                        this.queue.push(d), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        666: function(e, f, d) {
            "use strict";
            (function(e) {
                d.d(f, "a", (function() {
                    return m
                }));
                var t = function() {
                        for (var s = 0, i = 0, e = arguments.length; i < e; i++) s += arguments[i].length;
                        var f = Array(s),
                            d = 0;
                        for (i = 0; i < e; i++)
                            for (var a = arguments[i], t = 0, c = a.length; t < c; t++, d++) f[d] = a[t];
                        return f
                    },
                    c = function(e, f, d) {
                        this.name = e, this.version = f, this.os = d, this.type = "browser"
                    },
                    r = function(f) {
                        this.version = f, this.type = "node", this.name = "node", this.os = e.platform
                    },
                    n = function(e, f, d, t) {
                        this.name = e, this.version = f, this.os = d, this.bot = t, this.type = "bot-device"
                    },
                    o = function() {
                        this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                    },
                    h = function() {
                        this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                    },
                    l = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                    v = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FBAV\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ],
                    y = [
                        ["iOS", /iP(hone|od|ad)/],
                        ["Android OS", /Android/],
                        ["BlackBerry OS", /BlackBerry|BB10/],
                        ["Windows Mobile", /IEMobile/],
                        ["Amazon OS", /Kindle/],
                        ["Windows 3.11", /Win16/],
                        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                        ["Windows 98", /(Windows 98)|(Win98)/],
                        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                        ["Windows Server 2003", /(Windows NT 5.2)/],
                        ["Windows Vista", /(Windows NT 6.0)/],
                        ["Windows 7", /(Windows NT 6.1)/],
                        ["Windows 8", /(Windows NT 6.2)/],
                        ["Windows 8.1", /(Windows NT 6.3)/],
                        ["Windows 10", /(Windows NT 10.0)/],
                        ["Windows ME", /Windows ME/],
                        ["Open BSD", /OpenBSD/],
                        ["Sun OS", /SunOS/],
                        ["Chrome OS", /CrOS/],
                        ["Linux", /(Linux)|(X11)/],
                        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                        ["QNX", /QNX/],
                        ["BeOS", /BeOS/],
                        ["OS/2", /OS\/2/]
                    ];

                function m(f) {
                    return f ? w(f) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new h : "undefined" != typeof navigator ? w(navigator.userAgent) : void 0 !== e && e.version ? new r(e.version.slice(1)) : null
                }

                function S(e) {
                    return "" !== e && v.reduce((function(f, d) {
                        var t = d[0],
                            c = d[1];
                        if (f) return f;
                        var r = c.exec(e);
                        return !!r && [t, r]
                    }), !1)
                }

                function w(e) {
                    var f = S(e);
                    if (!f) return null;
                    var d = f[0],
                        r = f[1];
                    if ("searchbot" === d) return new o;
                    var h = r[1] && r[1].split(/[._]/).slice(0, 3);
                    h ? h.length < 3 && (h = t(h, function(e) {
                        for (var output = [], f = 0; f < e; f++) output.push("0");
                        return output
                    }(3 - h.length))) : h = [];
                    var v = h.join("."),
                        m = function(e) {
                            for (var f = 0, d = y.length; f < d; f++) {
                                var t = y[f],
                                    c = t[0];
                                if (t[1].exec(e)) return c
                            }
                            return null
                        }(e),
                        w = l.exec(e);
                    return w && w[1] ? new n(d, v, m, w[1]) : new c(d, v, m)
                }
            }).call(this, d(67))
        },
        818: function(e, f, d) {
            "use strict";
            var t = d(1441),
                c = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                r = Object.prototype.toString,
                n = Array.prototype.concat,
                o = Object.defineProperty,
                h = o && function() {
                    var e = {};
                    try {
                        for (var f in o(e, "x", {
                                enumerable: !1,
                                value: e
                            }), e) return !1;
                        return e.x === e
                    } catch (e) {
                        return !1
                    }
                }(),
                l = function(object, e, f, d) {
                    var t;
                    (!(e in object) || "function" == typeof(t = d) && "[object Function]" === r.call(t) && d()) && (h ? o(object, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: f,
                        writable: !0
                    }) : object[e] = f)
                },
                v = function(object, map) {
                    var e = arguments.length > 2 ? arguments[2] : {},
                        f = t(map);
                    c && (f = n.call(f, Object.getOwnPropertySymbols(map)));
                    for (var i = 0; i < f.length; i += 1) l(object, f[i], map[f[i]], e[f[i]])
                };
            v.supportsDescriptors = !!h, e.exports = v
        },
        827: function(e, f, d) {
            "use strict";
            var t = f;
            t.base = d(439), t.short = d(1483), t.mont = d(1484), t.edwards = d(1485)
        }
    }
]);