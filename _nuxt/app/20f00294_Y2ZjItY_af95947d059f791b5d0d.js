(window.webpackJsonp = window.webpackJsonp || []).push([
    [49], {
        13: function(t, r, n) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function h(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function e(t, r) {
                        t.super_ = r;
                        var n = function() {};
                        n.prototype = r.prototype, t.prototype = new n, t.prototype.constructor = t
                    }

                    function o(t, base, r) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (r = base, base = 10), this._init(t || 0, base || 10, r || "be"))
                    }
                    var l;
                    "object" == typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : n(1317).Buffer
                    } catch (t) {}

                    function m(t, r) {
                        var n = t.charCodeAt(r);
                        return n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : n - 48 & 15
                    }

                    function f(t, r, n) {
                        var h = m(t, n);
                        return n - 1 >= r && (h |= m(t, n - 1) << 4), h
                    }

                    function d(t, r, n, h) {
                        for (var e = 0, o = Math.min(t.length, n), i = r; i < o; i++) {
                            var l = t.charCodeAt(i) - 48;
                            e *= h, e += l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l
                        }
                        return e
                    }
                    o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, r) {
                        return t.cmp(r) > 0 ? t : r
                    }, o.min = function(t, r) {
                        return t.cmp(r) < 0 ? t : r
                    }, o.prototype._init = function(t, base, r) {
                        if ("number" == typeof t) return this._initNumber(t, base, r);
                        if ("object" == typeof t) return this._initArray(t, base, r);
                        "hex" === base && (base = 16), h(base === (0 | base) && base >= 2 && base <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === base ? this._parseHex(t, n, r) : (this._parseBase(t, base, n), "le" === r && this._initArray(this.toArray(), base, r)))
                    }, o.prototype._initNumber = function(t, base, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (h(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), base, r)
                    }, o.prototype._initArray = function(t, base, r) {
                        if (h("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, e, o = 0;
                        if ("be" === r)
                            for (i = t.length - 1, n = 0; i >= 0; i -= 3) e = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[n] |= e << o & 67108863, this.words[n + 1] = e >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                        else if ("le" === r)
                            for (i = 0, n = 0; i < t.length; i += 3) e = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[n] |= e << o & 67108863, this.words[n + 1] = e >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                        return this.strip()
                    }, o.prototype._parseHex = function(t, r, n) {
                        this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var h, e = 0,
                            o = 0;
                        if ("be" === n)
                            for (i = t.length - 1; i >= r; i -= 2) h = f(t, r, i) << e, this.words[o] |= 67108863 & h, e >= 18 ? (e -= 18, o += 1, this.words[o] |= h >>> 26) : e += 8;
                        else
                            for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) h = f(t, r, i) << e, this.words[o] |= 67108863 & h, e >= 18 ? (e -= 18, o += 1, this.words[o] |= h >>> 26) : e += 8;
                        this.strip()
                    }, o.prototype._parseBase = function(t, base, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, h = 1; h <= 67108863; h *= base) n++;
                        n--, h = h / base | 0;
                        for (var e = t.length - r, o = e % n, l = Math.min(e, e - o) + r, m = 0, i = r; i < l; i += n) m = d(t, i, i + n, base), this.imuln(h), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                        if (0 !== o) {
                            var f = 1;
                            for (m = d(t, i, t.length, base), i = 0; i < o; i++) f *= base;
                            this.imuln(f), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                        }
                        this.strip()
                    }, o.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, o.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        v = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        c = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function w(t, r, n) {
                        n.negative = r.negative ^ t.negative;
                        var h = t.length + r.length | 0;
                        n.length = h, h = h - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | r.words[0],
                            e = a * b,
                            o = 67108863 & e,
                            l = e / 67108864 | 0;
                        n.words[0] = o;
                        for (var m = 1; m < h; m++) {
                            for (var f = l >>> 26, d = 67108863 & l, M = Math.min(m, r.length - 1), v = Math.max(0, m - t.length + 1); v <= M; v++) {
                                var i = m - v | 0;
                                f += (e = (a = 0 | t.words[i]) * (b = 0 | r.words[v]) + d) / 67108864 | 0, d = 67108863 & e
                            }
                            n.words[m] = 0 | d, l = 0 | f
                        }
                        return 0 !== l ? n.words[m] = 0 | l : n.length--, n.strip()
                    }
                    o.prototype.toString = function(base, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            r = "";
                            for (var n = 0, e = 0, i = 0; i < this.length; i++) {
                                var o = this.words[i],
                                    l = (16777215 & (o << n | e)).toString(16);
                                r = 0 !== (e = o >>> 24 - n & 16777215) || i !== this.length - 1 ? M[6 - l.length] + l + r : l + r, (n += 2) >= 26 && (n -= 26, i--)
                            }
                            for (0 !== e && (r = e.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var m = v[base],
                                f = c[base];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var w = d.modn(f).toString(base);
                                r = (d = d.idivn(f)).isZero() ? w + r : M[m - w.length] + w + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        h(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && h(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16)
                    }, o.prototype.toBuffer = function(t, r) {
                        return h(void 0 !== l), this.toArrayLike(l, t, r)
                    }, o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    }, o.prototype.toArrayLike = function(t, r, n) {
                        var e = this.byteLength(),
                            o = n || Math.max(1, e);
                        h(e <= o, "byte array longer than desired length"), h(o > 0, "Requested array length <= 0"), this.strip();
                        var b, i, l = "le" === r,
                            m = new t(o),
                            q = this.clone();
                        if (l) {
                            for (i = 0; !q.isZero(); i++) b = q.andln(255), q.iushrn(8), m[i] = b;
                            for (; i < o; i++) m[i] = 0
                        } else {
                            for (i = 0; i < o - e; i++) m[i] = 0;
                            for (i = 0; !q.isZero(); i++) b = q.andln(255), q.iushrn(8), m[o - i - 1] = b
                        }
                        return m
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            n = 0;
                        return r >= 4096 && (n += 13, r >>>= 13), r >= 64 && (n += 7, r >>>= 7), r >= 8 && (n += 4, r >>>= 4), r >= 2 && (n += 2, r >>>= 2), n + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            n = 0;
                        return 0 == (8191 & r) && (n += 13, r >>>= 13), 0 == (127 & r) && (n += 7, r >>>= 7), 0 == (15 & r) && (n += 4, r >>>= 4), 0 == (3 & r) && (n += 2, r >>>= 2), 0 == (1 & r) && n++, n
                    }, o.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
                    }, o.prototype.zeroBits = function() {
                        if (this.isZero()) return 0;
                        for (var t = 0, i = 0; i < this.length; i++) {
                            var b = this._zeroBits(this.words[i]);
                            if (t += b, 26 !== b) break
                        }
                        return t
                    }, o.prototype.byteLength = function() {
                        return Math.ceil(this.bitLength() / 8)
                    }, o.prototype.toTwos = function(t) {
                        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                    }, o.prototype.fromTwos = function(t) {
                        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                    }, o.prototype.isNeg = function() {
                        return 0 !== this.negative
                    }, o.prototype.neg = function() {
                        return this.clone().ineg()
                    }, o.prototype.ineg = function() {
                        return this.isZero() || (this.negative ^= 1), this
                    }, o.prototype.iuor = function(t) {
                        for (; this.length < t.length;) this.words[this.length++] = 0;
                        for (var i = 0; i < t.length; i++) this.words[i] = this.words[i] | t.words[i];
                        return this.strip()
                    }, o.prototype.ior = function(t) {
                        return h(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var b;
                        b = this.length > t.length ? t : this;
                        for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = b.length, this.strip()
                    }, o.prototype.iand = function(t) {
                        return h(0 == (this.negative | t.negative)), this.iuand(t)
                    }, o.prototype.and = function(t) {
                        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                    }, o.prototype.uand = function(t) {
                        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                    }, o.prototype.iuxor = function(t) {
                        var a, b;
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var i = 0; i < b.length; i++) this.words[i] = a.words[i] ^ b.words[i];
                        if (this !== a)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = a.length, this.strip()
                    }, o.prototype.ixor = function(t) {
                        return h(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        h("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            n = t % 26;
                        this._expand(r), n > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        h("number" == typeof t && t >= 0);
                        var n = t / 26 | 0,
                            e = t % 26;
                        return this._expand(n + 1), this.words[n] = r ? this.words[n] | 1 << e : this.words[n] & ~(1 << e), this.strip()
                    }, o.prototype.iadd = function(t) {
                        var r, a, b;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var n = 0, i = 0; i < b.length; i++) r = (0 | a.words[i]) + (0 | b.words[i]) + n, this.words[i] = 67108863 & r, n = r >>> 26;
                        for (; 0 !== n && i < a.length; i++) r = (0 | a.words[i]) + n, this.words[i] = 67108863 & r, n = r >>> 26;
                        if (this.length = a.length, 0 !== n) this.words[this.length] = n, this.length++;
                        else if (a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this
                    }, o.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, o.prototype.isub = function(t) {
                        if (0 !== t.negative) {
                            t.negative = 0;
                            var r = this.iadd(t);
                            return t.negative = 1, r._normSign()
                        }
                        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                        var a, b, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (a = this, b = t) : (a = t, b = this);
                        for (var h = 0, i = 0; i < b.length; i++) h = (r = (0 | a.words[i]) - (0 | b.words[i]) + h) >> 26, this.words[i] = 67108863 & r;
                        for (; 0 !== h && i < a.length; i++) h = (r = (0 | a.words[i]) + h) >> 26, this.words[i] = 67108863 & r;
                        if (0 === h && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this.strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var y = function(t, r, n) {
                        var h, e, o, a = t.words,
                            b = r.words,
                            l = n.words,
                            m = 0,
                            f = 0 | a[0],
                            d = 8191 & f,
                            M = f >>> 13,
                            v = 0 | a[1],
                            c = 8191 & v,
                            w = v >>> 13,
                            y = 0 | a[2],
                            _ = 8191 & y,
                            k = y >>> 13,
                            A = 0 | a[3],
                            x = 8191 & A,
                            S = A >>> 13,
                            Z = 0 | a[4],
                            B = 8191 & Z,
                            R = Z >>> 13,
                            N = 0 | a[5],
                            L = 8191 & N,
                            I = N >>> 13,
                            z = 0 | a[6],
                            T = 8191 & z,
                            E = z >>> 13,
                            O = 0 | a[7],
                            j = 8191 & O,
                            K = O >>> 13,
                            P = 0 | a[8],
                            F = 8191 & P,
                            J = P >>> 13,
                            C = 0 | a[9],
                            D = 8191 & C,
                            H = C >>> 13,
                            U = 0 | b[0],
                            G = 8191 & U,
                            Q = U >>> 13,
                            V = 0 | b[1],
                            W = 8191 & V,
                            X = V >>> 13,
                            Y = 0 | b[2],
                            $ = 8191 & Y,
                            tt = Y >>> 13,
                            it = 0 | b[3],
                            nt = 8191 & it,
                            ht = it >>> 13,
                            et = 0 | b[4],
                            ot = 8191 & et,
                            st = et >>> 13,
                            ut = 0 | b[5],
                            at = 8191 & ut,
                            lt = ut >>> 13,
                            mt = 0 | b[6],
                            ft = 8191 & mt,
                            pt = mt >>> 13,
                            Mt = 0 | b[7],
                            vt = 8191 & Mt,
                            gt = Mt >>> 13,
                            ct = 0 | b[8],
                            wt = 8191 & ct,
                            yt = ct >>> 13,
                            bt = 0 | b[9],
                            _t = 8191 & bt,
                            kt = bt >>> 13;
                        n.negative = t.negative ^ r.negative, n.length = 19;
                        var At = (m + (h = Math.imul(d, G)) | 0) + ((8191 & (e = (e = Math.imul(d, Q)) + Math.imul(M, G) | 0)) << 13) | 0;
                        m = ((o = Math.imul(M, Q)) + (e >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, h = Math.imul(c, G), e = (e = Math.imul(c, Q)) + Math.imul(w, G) | 0, o = Math.imul(w, Q);
                        var xt = (m + (h = h + Math.imul(d, W) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, X) | 0) + Math.imul(M, W) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, X) | 0) + (e >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, h = Math.imul(_, G), e = (e = Math.imul(_, Q)) + Math.imul(k, G) | 0, o = Math.imul(k, Q), h = h + Math.imul(c, W) | 0, e = (e = e + Math.imul(c, X) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, X) | 0;
                        var St = (m + (h = h + Math.imul(d, $) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, tt) | 0) + Math.imul(M, $) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, tt) | 0) + (e >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, h = Math.imul(x, G), e = (e = Math.imul(x, Q)) + Math.imul(S, G) | 0, o = Math.imul(S, Q), h = h + Math.imul(_, W) | 0, e = (e = e + Math.imul(_, X) | 0) + Math.imul(k, W) | 0, o = o + Math.imul(k, X) | 0, h = h + Math.imul(c, $) | 0, e = (e = e + Math.imul(c, tt) | 0) + Math.imul(w, $) | 0, o = o + Math.imul(w, tt) | 0;
                        var Zt = (m + (h = h + Math.imul(d, nt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, ht) | 0) + Math.imul(M, nt) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, ht) | 0) + (e >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, h = Math.imul(B, G), e = (e = Math.imul(B, Q)) + Math.imul(R, G) | 0, o = Math.imul(R, Q), h = h + Math.imul(x, W) | 0, e = (e = e + Math.imul(x, X) | 0) + Math.imul(S, W) | 0, o = o + Math.imul(S, X) | 0, h = h + Math.imul(_, $) | 0, e = (e = e + Math.imul(_, tt) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, tt) | 0, h = h + Math.imul(c, nt) | 0, e = (e = e + Math.imul(c, ht) | 0) + Math.imul(w, nt) | 0, o = o + Math.imul(w, ht) | 0;
                        var Bt = (m + (h = h + Math.imul(d, ot) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, st) | 0) + Math.imul(M, ot) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, st) | 0) + (e >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, h = Math.imul(L, G), e = (e = Math.imul(L, Q)) + Math.imul(I, G) | 0, o = Math.imul(I, Q), h = h + Math.imul(B, W) | 0, e = (e = e + Math.imul(B, X) | 0) + Math.imul(R, W) | 0, o = o + Math.imul(R, X) | 0, h = h + Math.imul(x, $) | 0, e = (e = e + Math.imul(x, tt) | 0) + Math.imul(S, $) | 0, o = o + Math.imul(S, tt) | 0, h = h + Math.imul(_, nt) | 0, e = (e = e + Math.imul(_, ht) | 0) + Math.imul(k, nt) | 0, o = o + Math.imul(k, ht) | 0, h = h + Math.imul(c, ot) | 0, e = (e = e + Math.imul(c, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0;
                        var Rt = (m + (h = h + Math.imul(d, at) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, lt) | 0) + Math.imul(M, at) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, lt) | 0) + (e >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, h = Math.imul(T, G), e = (e = Math.imul(T, Q)) + Math.imul(E, G) | 0, o = Math.imul(E, Q), h = h + Math.imul(L, W) | 0, e = (e = e + Math.imul(L, X) | 0) + Math.imul(I, W) | 0, o = o + Math.imul(I, X) | 0, h = h + Math.imul(B, $) | 0, e = (e = e + Math.imul(B, tt) | 0) + Math.imul(R, $) | 0, o = o + Math.imul(R, tt) | 0, h = h + Math.imul(x, nt) | 0, e = (e = e + Math.imul(x, ht) | 0) + Math.imul(S, nt) | 0, o = o + Math.imul(S, ht) | 0, h = h + Math.imul(_, ot) | 0, e = (e = e + Math.imul(_, st) | 0) + Math.imul(k, ot) | 0, o = o + Math.imul(k, st) | 0, h = h + Math.imul(c, at) | 0, e = (e = e + Math.imul(c, lt) | 0) + Math.imul(w, at) | 0, o = o + Math.imul(w, lt) | 0;
                        var qt = (m + (h = h + Math.imul(d, ft) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, pt) | 0) + Math.imul(M, ft) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, pt) | 0) + (e >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, h = Math.imul(j, G), e = (e = Math.imul(j, Q)) + Math.imul(K, G) | 0, o = Math.imul(K, Q), h = h + Math.imul(T, W) | 0, e = (e = e + Math.imul(T, X) | 0) + Math.imul(E, W) | 0, o = o + Math.imul(E, X) | 0, h = h + Math.imul(L, $) | 0, e = (e = e + Math.imul(L, tt) | 0) + Math.imul(I, $) | 0, o = o + Math.imul(I, tt) | 0, h = h + Math.imul(B, nt) | 0, e = (e = e + Math.imul(B, ht) | 0) + Math.imul(R, nt) | 0, o = o + Math.imul(R, ht) | 0, h = h + Math.imul(x, ot) | 0, e = (e = e + Math.imul(x, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, h = h + Math.imul(_, at) | 0, e = (e = e + Math.imul(_, lt) | 0) + Math.imul(k, at) | 0, o = o + Math.imul(k, lt) | 0, h = h + Math.imul(c, ft) | 0, e = (e = e + Math.imul(c, pt) | 0) + Math.imul(w, ft) | 0, o = o + Math.imul(w, pt) | 0;
                        var Nt = (m + (h = h + Math.imul(d, vt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, gt) | 0) + Math.imul(M, vt) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, gt) | 0) + (e >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, h = Math.imul(F, G), e = (e = Math.imul(F, Q)) + Math.imul(J, G) | 0, o = Math.imul(J, Q), h = h + Math.imul(j, W) | 0, e = (e = e + Math.imul(j, X) | 0) + Math.imul(K, W) | 0, o = o + Math.imul(K, X) | 0, h = h + Math.imul(T, $) | 0, e = (e = e + Math.imul(T, tt) | 0) + Math.imul(E, $) | 0, o = o + Math.imul(E, tt) | 0, h = h + Math.imul(L, nt) | 0, e = (e = e + Math.imul(L, ht) | 0) + Math.imul(I, nt) | 0, o = o + Math.imul(I, ht) | 0, h = h + Math.imul(B, ot) | 0, e = (e = e + Math.imul(B, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, h = h + Math.imul(x, at) | 0, e = (e = e + Math.imul(x, lt) | 0) + Math.imul(S, at) | 0, o = o + Math.imul(S, lt) | 0, h = h + Math.imul(_, ft) | 0, e = (e = e + Math.imul(_, pt) | 0) + Math.imul(k, ft) | 0, o = o + Math.imul(k, pt) | 0, h = h + Math.imul(c, vt) | 0, e = (e = e + Math.imul(c, gt) | 0) + Math.imul(w, vt) | 0, o = o + Math.imul(w, gt) | 0;
                        var Lt = (m + (h = h + Math.imul(d, wt) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, yt) | 0) + Math.imul(M, wt) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, yt) | 0) + (e >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, h = Math.imul(D, G), e = (e = Math.imul(D, Q)) + Math.imul(H, G) | 0, o = Math.imul(H, Q), h = h + Math.imul(F, W) | 0, e = (e = e + Math.imul(F, X) | 0) + Math.imul(J, W) | 0, o = o + Math.imul(J, X) | 0, h = h + Math.imul(j, $) | 0, e = (e = e + Math.imul(j, tt) | 0) + Math.imul(K, $) | 0, o = o + Math.imul(K, tt) | 0, h = h + Math.imul(T, nt) | 0, e = (e = e + Math.imul(T, ht) | 0) + Math.imul(E, nt) | 0, o = o + Math.imul(E, ht) | 0, h = h + Math.imul(L, ot) | 0, e = (e = e + Math.imul(L, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, h = h + Math.imul(B, at) | 0, e = (e = e + Math.imul(B, lt) | 0) + Math.imul(R, at) | 0, o = o + Math.imul(R, lt) | 0, h = h + Math.imul(x, ft) | 0, e = (e = e + Math.imul(x, pt) | 0) + Math.imul(S, ft) | 0, o = o + Math.imul(S, pt) | 0, h = h + Math.imul(_, vt) | 0, e = (e = e + Math.imul(_, gt) | 0) + Math.imul(k, vt) | 0, o = o + Math.imul(k, gt) | 0, h = h + Math.imul(c, wt) | 0, e = (e = e + Math.imul(c, yt) | 0) + Math.imul(w, wt) | 0, o = o + Math.imul(w, yt) | 0;
                        var It = (m + (h = h + Math.imul(d, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(d, kt) | 0) + Math.imul(M, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(M, kt) | 0) + (e >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, h = Math.imul(D, W), e = (e = Math.imul(D, X)) + Math.imul(H, W) | 0, o = Math.imul(H, X), h = h + Math.imul(F, $) | 0, e = (e = e + Math.imul(F, tt) | 0) + Math.imul(J, $) | 0, o = o + Math.imul(J, tt) | 0, h = h + Math.imul(j, nt) | 0, e = (e = e + Math.imul(j, ht) | 0) + Math.imul(K, nt) | 0, o = o + Math.imul(K, ht) | 0, h = h + Math.imul(T, ot) | 0, e = (e = e + Math.imul(T, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, h = h + Math.imul(L, at) | 0, e = (e = e + Math.imul(L, lt) | 0) + Math.imul(I, at) | 0, o = o + Math.imul(I, lt) | 0, h = h + Math.imul(B, ft) | 0, e = (e = e + Math.imul(B, pt) | 0) + Math.imul(R, ft) | 0, o = o + Math.imul(R, pt) | 0, h = h + Math.imul(x, vt) | 0, e = (e = e + Math.imul(x, gt) | 0) + Math.imul(S, vt) | 0, o = o + Math.imul(S, gt) | 0, h = h + Math.imul(_, wt) | 0, e = (e = e + Math.imul(_, yt) | 0) + Math.imul(k, wt) | 0, o = o + Math.imul(k, yt) | 0;
                        var zt = (m + (h = h + Math.imul(c, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(c, kt) | 0) + Math.imul(w, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(w, kt) | 0) + (e >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, h = Math.imul(D, $), e = (e = Math.imul(D, tt)) + Math.imul(H, $) | 0, o = Math.imul(H, tt), h = h + Math.imul(F, nt) | 0, e = (e = e + Math.imul(F, ht) | 0) + Math.imul(J, nt) | 0, o = o + Math.imul(J, ht) | 0, h = h + Math.imul(j, ot) | 0, e = (e = e + Math.imul(j, st) | 0) + Math.imul(K, ot) | 0, o = o + Math.imul(K, st) | 0, h = h + Math.imul(T, at) | 0, e = (e = e + Math.imul(T, lt) | 0) + Math.imul(E, at) | 0, o = o + Math.imul(E, lt) | 0, h = h + Math.imul(L, ft) | 0, e = (e = e + Math.imul(L, pt) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, pt) | 0, h = h + Math.imul(B, vt) | 0, e = (e = e + Math.imul(B, gt) | 0) + Math.imul(R, vt) | 0, o = o + Math.imul(R, gt) | 0, h = h + Math.imul(x, wt) | 0, e = (e = e + Math.imul(x, yt) | 0) + Math.imul(S, wt) | 0, o = o + Math.imul(S, yt) | 0;
                        var Tt = (m + (h = h + Math.imul(_, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(_, kt) | 0) + Math.imul(k, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(k, kt) | 0) + (e >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, h = Math.imul(D, nt), e = (e = Math.imul(D, ht)) + Math.imul(H, nt) | 0, o = Math.imul(H, ht), h = h + Math.imul(F, ot) | 0, e = (e = e + Math.imul(F, st) | 0) + Math.imul(J, ot) | 0, o = o + Math.imul(J, st) | 0, h = h + Math.imul(j, at) | 0, e = (e = e + Math.imul(j, lt) | 0) + Math.imul(K, at) | 0, o = o + Math.imul(K, lt) | 0, h = h + Math.imul(T, ft) | 0, e = (e = e + Math.imul(T, pt) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, pt) | 0, h = h + Math.imul(L, vt) | 0, e = (e = e + Math.imul(L, gt) | 0) + Math.imul(I, vt) | 0, o = o + Math.imul(I, gt) | 0, h = h + Math.imul(B, wt) | 0, e = (e = e + Math.imul(B, yt) | 0) + Math.imul(R, wt) | 0, o = o + Math.imul(R, yt) | 0;
                        var Et = (m + (h = h + Math.imul(x, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(x, kt) | 0) + Math.imul(S, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(S, kt) | 0) + (e >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, h = Math.imul(D, ot), e = (e = Math.imul(D, st)) + Math.imul(H, ot) | 0, o = Math.imul(H, st), h = h + Math.imul(F, at) | 0, e = (e = e + Math.imul(F, lt) | 0) + Math.imul(J, at) | 0, o = o + Math.imul(J, lt) | 0, h = h + Math.imul(j, ft) | 0, e = (e = e + Math.imul(j, pt) | 0) + Math.imul(K, ft) | 0, o = o + Math.imul(K, pt) | 0, h = h + Math.imul(T, vt) | 0, e = (e = e + Math.imul(T, gt) | 0) + Math.imul(E, vt) | 0, o = o + Math.imul(E, gt) | 0, h = h + Math.imul(L, wt) | 0, e = (e = e + Math.imul(L, yt) | 0) + Math.imul(I, wt) | 0, o = o + Math.imul(I, yt) | 0;
                        var Ot = (m + (h = h + Math.imul(B, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(B, kt) | 0) + Math.imul(R, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(R, kt) | 0) + (e >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, h = Math.imul(D, at), e = (e = Math.imul(D, lt)) + Math.imul(H, at) | 0, o = Math.imul(H, lt), h = h + Math.imul(F, ft) | 0, e = (e = e + Math.imul(F, pt) | 0) + Math.imul(J, ft) | 0, o = o + Math.imul(J, pt) | 0, h = h + Math.imul(j, vt) | 0, e = (e = e + Math.imul(j, gt) | 0) + Math.imul(K, vt) | 0, o = o + Math.imul(K, gt) | 0, h = h + Math.imul(T, wt) | 0, e = (e = e + Math.imul(T, yt) | 0) + Math.imul(E, wt) | 0, o = o + Math.imul(E, yt) | 0;
                        var jt = (m + (h = h + Math.imul(L, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(L, kt) | 0) + Math.imul(I, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(I, kt) | 0) + (e >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, h = Math.imul(D, ft), e = (e = Math.imul(D, pt)) + Math.imul(H, ft) | 0, o = Math.imul(H, pt), h = h + Math.imul(F, vt) | 0, e = (e = e + Math.imul(F, gt) | 0) + Math.imul(J, vt) | 0, o = o + Math.imul(J, gt) | 0, h = h + Math.imul(j, wt) | 0, e = (e = e + Math.imul(j, yt) | 0) + Math.imul(K, wt) | 0, o = o + Math.imul(K, yt) | 0;
                        var Kt = (m + (h = h + Math.imul(T, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(T, kt) | 0) + Math.imul(E, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(E, kt) | 0) + (e >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, h = Math.imul(D, vt), e = (e = Math.imul(D, gt)) + Math.imul(H, vt) | 0, o = Math.imul(H, gt), h = h + Math.imul(F, wt) | 0, e = (e = e + Math.imul(F, yt) | 0) + Math.imul(J, wt) | 0, o = o + Math.imul(J, yt) | 0;
                        var Pt = (m + (h = h + Math.imul(j, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(j, kt) | 0) + Math.imul(K, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(K, kt) | 0) + (e >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, h = Math.imul(D, wt), e = (e = Math.imul(D, yt)) + Math.imul(H, wt) | 0, o = Math.imul(H, yt);
                        var Ft = (m + (h = h + Math.imul(F, _t) | 0) | 0) + ((8191 & (e = (e = e + Math.imul(F, kt) | 0) + Math.imul(J, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(J, kt) | 0) + (e >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863;
                        var Jt = (m + (h = Math.imul(D, _t)) | 0) + ((8191 & (e = (e = Math.imul(D, kt)) + Math.imul(H, _t) | 0)) << 13) | 0;
                        return m = ((o = Math.imul(H, kt)) + (e >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, l[0] = At, l[1] = xt, l[2] = St, l[3] = Zt, l[4] = Bt, l[5] = Rt, l[6] = qt, l[7] = Nt, l[8] = Lt, l[9] = It, l[10] = zt, l[11] = Tt, l[12] = Et, l[13] = Ot, l[14] = jt, l[15] = Kt, l[16] = Pt, l[17] = Ft, l[18] = Jt, 0 !== m && (l[19] = m, n.length++), n
                    };

                    function _(t, r, n) {
                        return (new k).mulp(t, r, n)
                    }

                    function k(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (y = w), o.prototype.mulTo = function(t, r) {
                        var n, h = this.length + t.length;
                        return n = 10 === this.length && 10 === t.length ? y(this, t, r) : h < 63 ? w(this, t, r) : h < 1024 ? function(t, r, n) {
                            n.negative = r.negative ^ t.negative, n.length = t.length + r.length;
                            for (var h = 0, e = 0, o = 0; o < n.length - 1; o++) {
                                var l = e;
                                e = 0;
                                for (var m = 67108863 & h, f = Math.min(o, r.length - 1), d = Math.max(0, o - t.length + 1); d <= f; d++) {
                                    var i = o - d,
                                        M = (0 | t.words[i]) * (0 | r.words[d]),
                                        v = 67108863 & M;
                                    m = 67108863 & (v = v + m | 0), e += (l = (l = l + (M / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, l &= 67108863
                                }
                                n.words[o] = m, h = l, l = e
                            }
                            return 0 !== h ? n.words[o] = h : n.length--, n.strip()
                        }(this, t, r) : _(this, t, r), n
                    }, k.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), n = o.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, n, t);
                        return r
                    }, k.prototype.revBin = function(t, r, n) {
                        if (0 === t || t === n - 1) return t;
                        for (var h = 0, i = 0; i < r; i++) h |= (1 & t) << r - i - 1, t >>= 1;
                        return h
                    }, k.prototype.permute = function(t, r, n, h, e, o) {
                        for (var i = 0; i < o; i++) h[i] = r[t[i]], e[i] = n[t[i]]
                    }, k.prototype.transform = function(t, r, n, h, e, o) {
                        this.permute(o, t, r, n, h, e);
                        for (var s = 1; s < e; s <<= 1)
                            for (var l = s << 1, m = Math.cos(2 * Math.PI / l), f = Math.sin(2 * Math.PI / l), p = 0; p < e; p += l)
                                for (var d = m, M = f, v = 0; v < s; v++) {
                                    var c = n[p + v],
                                        w = h[p + v],
                                        y = n[p + v + s],
                                        _ = h[p + v + s],
                                        k = d * y - M * _;
                                    _ = d * _ + M * y, y = k, n[p + v] = c + y, h[p + v] = w + _, n[p + v + s] = c - y, h[p + v + s] = w - _, v !== l && (k = m * d - f * M, M = m * M + f * d, d = k)
                                }
                    }, k.prototype.guessLen13b = function(t, r) {
                        var n = 1 | Math.max(r, t),
                            h = 1 & n,
                            i = 0;
                        for (n = n / 2 | 0; n; n >>>= 1) i++;
                        return 1 << i + 1 + h
                    }, k.prototype.conjugate = function(t, r, n) {
                        if (!(n <= 1))
                            for (var i = 0; i < n / 2; i++) {
                                var h = t[i];
                                t[i] = t[n - i - 1], t[n - i - 1] = h, h = r[i], r[i] = -r[n - i - 1], r[n - i - 1] = -h
                            }
                    }, k.prototype.normalize13b = function(t, r) {
                        for (var n = 0, i = 0; i < r / 2; i++) {
                            var h = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + n;
                            t[i] = 67108863 & h, n = h < 67108864 ? 0 : h / 67108864 | 0
                        }
                        return t
                    }, k.prototype.convert13b = function(t, r, n, e) {
                        for (var o = 0, i = 0; i < r; i++) o += 0 | t[i], n[2 * i] = 8191 & o, o >>>= 13, n[2 * i + 1] = 8191 & o, o >>>= 13;
                        for (i = 2 * r; i < e; ++i) n[i] = 0;
                        h(0 === o), h(0 == (-8192 & o))
                    }, k.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, k.prototype.mulp = function(t, r, n) {
                        var h = 2 * this.guessLen13b(t.length, r.length),
                            e = this.makeRBT(h),
                            o = this.stub(h),
                            l = new Array(h),
                            m = new Array(h),
                            f = new Array(h),
                            d = new Array(h),
                            M = new Array(h),
                            v = new Array(h),
                            c = n.words;
                        c.length = h, this.convert13b(t.words, t.length, l, h), this.convert13b(r.words, r.length, d, h), this.transform(l, o, m, f, h, e), this.transform(d, o, M, v, h, e);
                        for (var i = 0; i < h; i++) {
                            var w = m[i] * M[i] - f[i] * v[i];
                            f[i] = m[i] * v[i] + f[i] * M[i], m[i] = w
                        }
                        return this.conjugate(m, f, h), this.transform(m, f, c, o, h, e), this.conjugate(c, o, h), this.normalize13b(c, h), n.negative = t.negative ^ r.negative, n.length = t.length + r.length, n.strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), _(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        h("number" == typeof t), h(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var n = (0 | this.words[i]) * t,
                                e = (67108863 & n) + (67108863 & r);
                            r >>= 26, r += n / 67108864 | 0, r += e >>> 26, this.words[i] = 67108863 & e
                        }
                        return 0 !== r && (this.words[i] = r, this.length++), this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), n = 0; n < r.length; n++) {
                                var h = n / 26 | 0,
                                    e = n % 26;
                                r[n] = (t.words[h] & 1 << e) >>> e
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var n = this, i = 0; i < r.length && 0 === r[i]; i++, n = n.sqr());
                        if (++i < r.length)
                            for (var q = n.sqr(); i < r.length; i++, q = q.sqr()) 0 !== r[i] && (n = n.mul(q));
                        return n
                    }, o.prototype.iushln = function(t) {
                        h("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            s = (t - r) / 26,
                            n = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var e = 0;
                            for (i = 0; i < this.length; i++) {
                                var o = this.words[i] & n,
                                    l = (0 | this.words[i]) - o << r;
                                this.words[i] = l | e, e = o >>> 26 - r
                            }
                            e && (this.words[i] = e, this.length++)
                        }
                        if (0 !== s) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                            for (i = 0; i < s; i++) this.words[i] = 0;
                            this.length += s
                        }
                        return this.strip()
                    }, o.prototype.ishln = function(t) {
                        return h(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, n) {
                        var e;
                        h("number" == typeof t && t >= 0), e = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> o << o,
                            l = n;
                        if (e -= s, e = Math.max(0, e), l) {
                            for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                            l.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var m = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== m || i >= e); i--) {
                            var f = 0 | this.words[i];
                            this.words[i] = m << 26 - o | f >>> o, m = f & mask
                        }
                        return l && 0 !== m && (l.words[l.length++] = m), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, o.prototype.ishrn = function(t, r, n) {
                        return h(0 === this.negative), this.iushrn(t, r, n)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        h("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, o.prototype.imaskn = function(t) {
                        h("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26;
                        if (h(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== r && s++, this.length = Math.min(s, this.length), 0 !== r) {
                            var mask = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= mask
                        }
                        return this.strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return h("number" == typeof t), h(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (h("number" == typeof t), h(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this.strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, n) {
                        var i, e, o = t.length + n;
                        this._expand(o);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            e = (0 | this.words[i + n]) + l;
                            var m = (0 | t.words[i]) * r;
                            l = ((e -= 67108863 & m) >> 26) - (m / 67108864 | 0), this.words[i + n] = 67108863 & e
                        }
                        for (; i < this.length - n; i++) l = (e = (0 | this.words[i + n]) + l) >> 26, this.words[i + n] = 67108863 & e;
                        if (0 === l) return this.strip();
                        for (h(-1 === l), l = 0, i = 0; i < this.length; i++) l = (e = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & e;
                        return this.negative = 1, this.strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var n = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            h = 0 | b.words[b.length - 1];
                        0 !== (n = 26 - this._countBits(h)) && (b = b.ushln(n), a.iushln(n), h = 0 | b.words[b.length - 1]);
                        var q, e = a.length - b.length;
                        if ("mod" !== r) {
                            (q = new o(null)).length = e + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, e);
                        0 === l.negative && (a = l, q && (q.words[e] = 1));
                        for (var m = e - 1; m >= 0; m--) {
                            var f = 67108864 * (0 | a.words[b.length + m]) + (0 | a.words[b.length + m - 1]);
                            for (f = Math.min(f / h | 0, 67108863), a._ishlnsubmul(b, f, m); 0 !== a.negative;) f--, a.negative = 0, a._ishlnsubmul(b, 1, m), a.isZero() || (a.negative ^= 1);
                            q && (q.words[m] = f)
                        }
                        return q && q.strip(), a.strip(), "div" !== r && 0 !== n && a.iushrn(n), {
                            div: q || null,
                            mod: a
                        }
                    }, o.prototype.divmod = function(t, r, n) {
                        return h(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, r), "mod" !== r && (div = l.div.neg()), "div" !== r && (e = l.mod.neg(), n && 0 !== e.negative && e.iadd(t)), {
                            div: div,
                            mod: e
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), r), "mod" !== r && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), r), "div" !== r && (e = l.mod.neg(), n && 0 !== e.negative && e.isub(t)), {
                            div: l.div,
                            mod: e
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var div, e, l
                    }, o.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, o.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, o.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, o.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var n = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            h = t.ushrn(1),
                            e = t.andln(1),
                            o = n.cmp(h);
                        return o < 0 || 1 === e && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modn = function(t) {
                        h(t <= 67108863);
                        for (var p = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (p * r + (0 | this.words[i])) % t;
                        return r
                    }, o.prototype.idivn = function(t) {
                        h(t <= 67108863);
                        for (var r = 0, i = this.length - 1; i >= 0; i--) {
                            var n = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = n / t | 0, r = n % t
                        }
                        return this.strip()
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(p) {
                        h(0 === p.negative), h(!p.isZero());
                        var t = this,
                            r = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var n = new o(1), e = new o(0), l = new o(0), m = new o(1), g = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++g;
                        for (var f = r.clone(), d = t.clone(); !t.isZero();) {
                            for (var i = 0, M = 1; 0 == (t.words[0] & M) && i < 26; ++i, M <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(n.isOdd() || e.isOdd()) && (n.iadd(f), e.isub(d)), n.iushrn(1), e.iushrn(1);
                            for (var v = 0, c = 1; 0 == (r.words[0] & c) && v < 26; ++v, c <<= 1);
                            if (v > 0)
                                for (r.iushrn(v); v-- > 0;)(l.isOdd() || m.isOdd()) && (l.iadd(f), m.isub(d)), l.iushrn(1), m.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), n.isub(l), e.isub(m)) : (r.isub(t), l.isub(n), m.isub(e))
                        }
                        return {
                            a: l,
                            b: m,
                            gcd: r.iushln(g)
                        }
                    }, o.prototype._invmp = function(p) {
                        h(0 === p.negative), h(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, r = new o(1), n = new o(0), e = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) r.isOdd() && r.iadd(e), r.iushrn(1);
                            for (var m = 0, f = 1; 0 == (b.words[0] & f) && m < 26; ++m, f <<= 1);
                            if (m > 0)
                                for (b.iushrn(m); m-- > 0;) n.isOdd() && n.iadd(e), n.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), r.isub(n)) : (b.isub(a), n.isub(r))
                        }
                        return (t = 0 === a.cmpn(1) ? r : n).cmpn(0) < 0 && t.iadd(p), t
                    }, o.prototype.gcd = function(t) {
                        if (this.isZero()) return t.abs();
                        if (t.isZero()) return this.abs();
                        var a = this.clone(),
                            b = t.clone();
                        a.negative = 0, b.negative = 0;
                        for (var r = 0; a.isEven() && b.isEven(); r++) a.iushrn(1), b.iushrn(1);
                        for (;;) {
                            for (; a.isEven();) a.iushrn(1);
                            for (; b.isEven();) b.iushrn(1);
                            var n = a.cmp(b);
                            if (n < 0) {
                                var h = a;
                                a = b, b = h
                            } else if (0 === n || 0 === b.cmpn(1)) break;
                            a.isub(b)
                        }
                        return b.iushln(r)
                    }, o.prototype.invm = function(t) {
                        return this.egcd(t).a.umod(t)
                    }, o.prototype.isEven = function() {
                        return 0 == (1 & this.words[0])
                    }, o.prototype.isOdd = function() {
                        return 1 == (1 & this.words[0])
                    }, o.prototype.andln = function(t) {
                        return this.words[0] & t
                    }, o.prototype.bincn = function(t) {
                        h("number" == typeof t);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var n = q, i = s; 0 !== n && i < this.length; i++) {
                            var e = 0 | this.words[i];
                            n = (e += n) >>> 26, e &= 67108863, this.words[i] = e
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, n = t < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this.strip(), this.length > 1) r = 1;
                        else {
                            n && (t = -t), h(t <= 67108863, "Number is too big");
                            var e = 0 | this.words[0];
                            r = e === t ? 0 : e < t ? -1 : 1
                        }
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, o.prototype.ucmp = function(t) {
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
                    }, o.prototype.gtn = function(t) {
                        return 1 === this.cmpn(t)
                    }, o.prototype.gt = function(t) {
                        return 1 === this.cmp(t)
                    }, o.prototype.gten = function(t) {
                        return this.cmpn(t) >= 0
                    }, o.prototype.gte = function(t) {
                        return this.cmp(t) >= 0
                    }, o.prototype.ltn = function(t) {
                        return -1 === this.cmpn(t)
                    }, o.prototype.lt = function(t) {
                        return -1 === this.cmp(t)
                    }, o.prototype.lten = function(t) {
                        return this.cmpn(t) <= 0
                    }, o.prototype.lte = function(t) {
                        return this.cmp(t) <= 0
                    }, o.prototype.eqn = function(t) {
                        return 0 === this.cmpn(t)
                    }, o.prototype.eq = function(t) {
                        return 0 === this.cmp(t)
                    }, o.red = function(t) {
                        return new N(t)
                    }, o.prototype.toRed = function(t) {
                        return h(!this.red, "Already a number in reduction context"), h(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return h(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return h(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return h(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return h(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return h(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return h(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return h(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return h(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return h(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return h(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return h(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return h(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return h(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return h(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return h(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var A = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function x(t, p) {
                        this.name = t, this.p = new o(p, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function S() {
                        x.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function Z() {
                        x.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function B() {
                        x.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function R() {
                        x.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function N(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else h(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function L(t) {
                        N.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    x.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, x.prototype.ireduce = function(t) {
                        var r, n = t;
                        do {
                            this.split(n, this.tmp), r = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var h = r < this.n ? -1 : n.ucmp(this.p);
                        return 0 === h ? (n.words[0] = 0, n.length = 1) : h > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n
                    }, x.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, x.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, e(S, x), S.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var n = 0 | input.words[i];
                            input.words[i - 10] = (n & mask) << 4 | r >>> 22, r = n
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, S.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 0 | t.words[i];
                            r += 977 * n, t.words[i] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, e(Z, x), e(B, x), e(R, x), R.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 19 * (0 | t.words[i]) + r,
                                h = 67108863 & n;
                            n >>>= 26, t.words[i] = h, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (A[t]) return A[t];
                        var r;
                        if ("k256" === t) r = new S;
                        else if ("p224" === t) r = new Z;
                        else if ("p192" === t) r = new B;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new R
                        }
                        return A[t] = r, r
                    }, N.prototype._verify1 = function(a) {
                        h(0 === a.negative, "red works only with positives"), h(a.red, "red works only with red numbers")
                    }, N.prototype._verify2 = function(a, b) {
                        h(0 == (a.negative | b.negative), "red works only with positives"), h(a.red && a.red === b.red, "red works only with red numbers")
                    }, N.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : a.umod(this.m)._forceRed(this)
                    }, N.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, N.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, N.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, N.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, N.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, N.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, N.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, N.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, N.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, N.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, N.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (h(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(a, r)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        h(!q.isZero());
                        var n = new o(1).toRed(this),
                            e = n.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            m = this.m.bitLength();
                        for (m = new o(2 * m * m).toRed(this); 0 !== this.pow(m, l).cmp(e);) m.redIAdd(e);
                        for (var f = this.pow(m, q), d = this.pow(a, q.addn(1).iushrn(1)), M = this.pow(a, q), v = s; 0 !== M.cmp(n);) {
                            for (var c = M, i = 0; 0 !== c.cmp(n); i++) c = c.redSqr();
                            h(i < v);
                            var b = this.pow(f, new o(1).iushln(v - i - 1));
                            d = d.redMul(b), f = b.redSqr(), M = M.redMul(f), v = i
                        }
                        return d
                    }, N.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, N.prototype.pow = function(a, t) {
                        if (t.isZero()) return new o(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = a;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], a);
                        var n = r[0],
                            h = 0,
                            e = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var m = t.words[i], f = l - 1; f >= 0; f--) {
                                var d = m >> f & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== d || 0 !== h ? (h <<= 1, h |= d, (4 === ++e || 0 === i && 0 === f) && (n = this.mul(n, r[h]), e = 0, h = 0)) : e = 0
                            }
                            l = 26
                        }
                        return n
                    }, N.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, N.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new L(t)
                    }, e(L, N), L.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, L.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, L.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, L.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new o(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, L.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, n(82)(t))
        }
    }
]);