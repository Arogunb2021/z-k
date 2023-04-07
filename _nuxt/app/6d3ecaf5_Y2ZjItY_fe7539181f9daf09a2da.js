(window.webpackJsonp = window.webpackJsonp || []).push([
    [78], {
        1099: function(t, r, n) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function e(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function h(t, r) {
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
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : n(1496).Buffer
                    } catch (t) {}

                    function m(t, r) {
                        var n = t.charCodeAt(r);
                        return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void e(!1, "Invalid character in " + t)
                    }

                    function f(t, r, n) {
                        var e = m(t, n);
                        return n - 1 >= r && (e |= m(t, n - 1) << 4), e
                    }

                    function d(t, r, n, h) {
                        for (var o = 0, b = 0, l = Math.min(t.length, n), i = r; i < l; i++) {
                            var m = t.charCodeAt(i) - 48;
                            o *= h, b = m >= 49 ? m - 49 + 10 : m >= 17 ? m - 17 + 10 : m, e(m >= 0 && b < h, "Invalid character"), o += b
                        }
                        return o
                    }

                    function c(t, r) {
                        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
                    }
                    if (o.isBN = function(t) {
                            return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                        }, o.max = function(t, r) {
                            return t.cmp(r) > 0 ? t : r
                        }, o.min = function(t, r) {
                            return t.cmp(r) < 0 ? t : r
                        }, o.prototype._init = function(t, base, r) {
                            if ("number" == typeof t) return this._initNumber(t, base, r);
                            if ("object" == typeof t) return this._initArray(t, base, r);
                            "hex" === base && (base = 16), e(base === (0 | base) && base >= 2 && base <= 36);
                            var n = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === base ? this._parseHex(t, n, r) : (this._parseBase(t, base, n), "le" === r && this._initArray(this.toArray(), base, r)))
                        }, o.prototype._initNumber = function(t, base, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (e(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), base, r)
                        }, o.prototype._initArray = function(t, base, r) {
                            if (e("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, h, o = 0;
                            if ("be" === r)
                                for (i = t.length - 1, n = 0; i >= 0; i -= 3) h = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[n] |= h << o & 67108863, this.words[n + 1] = h >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                            else if ("le" === r)
                                for (i = 0, n = 0; i < t.length; i += 3) h = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[n] |= h << o & 67108863, this.words[n + 1] = h >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, n++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, r, n) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var e, h = 0,
                                o = 0;
                            if ("be" === n)
                                for (i = t.length - 1; i >= r; i -= 2) e = f(t, r, i) << h, this.words[o] |= 67108863 & e, h >= 18 ? (h -= 18, o += 1, this.words[o] |= e >>> 26) : h += 8;
                            else
                                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) e = f(t, r, i) << h, this.words[o] |= 67108863 & e, h >= 18 ? (h -= 18, o += 1, this.words[o] |= e >>> 26) : h += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, base, r) {
                            this.words = [0], this.length = 1;
                            for (var n = 0, e = 1; e <= 67108863; e *= base) n++;
                            n--, e = e / base | 0;
                            for (var h = t.length - r, o = h % n, l = Math.min(h, h - o) + r, m = 0, i = r; i < l; i += n) m = d(t, i, i + n, base), this.imuln(e), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                            if (0 !== o) {
                                var f = 1;
                                for (m = d(t, i, t.length, base), i = 0; i < o; i++) f *= base;
                                this.imuln(f), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            c(t, this)
                        }, o.prototype.clone = function() {
                            var t = new o(null);
                            return this.copy(t), t
                        }, o.prototype._expand = function(t) {
                            for (; this.length < t;) this.words[this.length++] = 0;
                            return this
                        }, o.prototype._strip = function() {
                            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                            return this._normSign()
                        }, o.prototype._normSign = function() {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                        }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = M
                    } catch (t) {
                        o.prototype.inspect = M
                    } else o.prototype.inspect = M;

                    function M() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        w = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        y = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(base, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            r = "";
                            for (var n = 0, h = 0, i = 0; i < this.length; i++) {
                                var o = this.words[i],
                                    l = (16777215 & (o << n | h)).toString(16);
                                h = o >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, i--), r = 0 !== h || i !== this.length - 1 ? v[6 - l.length] + l + r : l + r
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var m = w[base],
                                f = y[base];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var c = d.modrn(f).toString(base);
                                r = (d = d.idivn(f)).isZero() ? c + r : v[m - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        e(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, l && (o.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(l, t, r)
                    }), o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function _(t, r, n) {
                        n.negative = r.negative ^ t.negative;
                        var e = t.length + r.length | 0;
                        n.length = e, e = e - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | r.words[0],
                            h = a * b,
                            o = 67108863 & h,
                            l = h / 67108864 | 0;
                        n.words[0] = o;
                        for (var m = 1; m < e; m++) {
                            for (var f = l >>> 26, d = 67108863 & l, c = Math.min(m, r.length - 1), M = Math.max(0, m - t.length + 1); M <= c; M++) {
                                var i = m - M | 0;
                                f += (h = (a = 0 | t.words[i]) * (b = 0 | r.words[M]) + d) / 67108864 | 0, d = 67108863 & h
                            }
                            n.words[m] = 0 | d, l = 0 | f
                        }
                        return 0 !== l ? n.words[m] = 0 | l : n.length--, n._strip()
                    }
                    o.prototype.toArrayLike = function(t, r, n) {
                        this._strip();
                        var h = this.byteLength(),
                            o = n || Math.max(1, h);
                        e(h <= o, "byte array longer than desired length"), e(o > 0, "Requested array length <= 0");
                        var l = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](l, h), l
                    }, o.prototype._toArrayLikeLE = function(t, r) {
                        for (var n = 0, e = 0, i = 0, h = 0; i < this.length; i++) {
                            var o = this.words[i] << h | e;
                            t[n++] = 255 & o, n < t.length && (t[n++] = o >> 8 & 255), n < t.length && (t[n++] = o >> 16 & 255), 6 === h ? (n < t.length && (t[n++] = o >> 24 & 255), e = 0, h = 0) : (e = o >>> 24, h += 2)
                        }
                        if (n < t.length)
                            for (t[n++] = e; n < t.length;) t[n++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, r) {
                        for (var n = t.length - 1, e = 0, i = 0, h = 0; i < this.length; i++) {
                            var o = this.words[i] << h | e;
                            t[n--] = 255 & o, n >= 0 && (t[n--] = o >> 8 & 255), n >= 0 && (t[n--] = o >> 16 & 255), 6 === h ? (n >= 0 && (t[n--] = o >> 24 & 255), e = 0, h = 0) : (e = o >>> 24, h += 2)
                        }
                        if (n >= 0)
                            for (t[n--] = e; n >= 0;) t[n--] = 0
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
                        return this._strip()
                    }, o.prototype.ior = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuor(t)
                    }, o.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, o.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, o.prototype.iuand = function(t) {
                        var b;
                        b = this.length > t.length ? t : this;
                        for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = b.length, this._strip()
                    }, o.prototype.iand = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuand(t)
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
                        return this.length = a.length, this._strip()
                    }, o.prototype.ixor = function(t) {
                        return e(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            n = t % 26;
                        this._expand(r), n > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        e("number" == typeof t && t >= 0);
                        var n = t / 26 | 0,
                            h = t % 26;
                        return this._expand(n + 1), this.words[n] = r ? this.words[n] | 1 << h : this.words[n] & ~(1 << h), this._strip()
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
                        for (var e = 0, i = 0; i < b.length; i++) e = (r = (0 | a.words[i]) - (0 | b.words[i]) + e) >> 26, this.words[i] = 67108863 & r;
                        for (; 0 !== e && i < a.length; i++) e = (r = (0 | a.words[i]) + e) >> 26, this.words[i] = 67108863 & r;
                        if (0 === e && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var x = function(t, r, n) {
                        var e, h, o, a = t.words,
                            b = r.words,
                            l = n.words,
                            m = 0,
                            f = 0 | a[0],
                            d = 8191 & f,
                            c = f >>> 13,
                            M = 0 | a[1],
                            v = 8191 & M,
                            w = M >>> 13,
                            y = 0 | a[2],
                            _ = 8191 & y,
                            x = y >>> 13,
                            A = 0 | a[3],
                            S = 8191 & A,
                            N = A >>> 13,
                            k = 0 | a[4],
                            B = 8191 & k,
                            E = k >>> 13,
                            R = 0 | a[5],
                            L = 8191 & R,
                            Z = R >>> 13,
                            O = 0 | a[6],
                            T = 8191 & O,
                            I = O >>> 13,
                            j = 0 | a[7],
                            U = 8191 & j,
                            z = j >>> 13,
                            C = 0 | a[8],
                            P = 8191 & C,
                            H = C >>> 13,
                            F = 0 | a[9],
                            D = 8191 & F,
                            J = F >>> 13,
                            K = 0 | b[0],
                            $ = 8191 & K,
                            X = K >>> 13,
                            G = 0 | b[1],
                            Q = 8191 & G,
                            V = G >>> 13,
                            W = 0 | b[2],
                            Y = 8191 & W,
                            tt = W >>> 13,
                            it = 0 | b[3],
                            nt = 8191 & it,
                            et = it >>> 13,
                            ht = 0 | b[4],
                            ot = 8191 & ht,
                            st = ht >>> 13,
                            ut = 0 | b[5],
                            at = 8191 & ut,
                            lt = ut >>> 13,
                            mt = 0 | b[6],
                            ft = 8191 & mt,
                            pt = mt >>> 13,
                            gt = 0 | b[7],
                            ct = 8191 & gt,
                            Mt = gt >>> 13,
                            vt = 0 | b[8],
                            wt = 8191 & vt,
                            yt = vt >>> 13,
                            bt = 0 | b[9],
                            _t = 8191 & bt,
                            xt = bt >>> 13;
                        n.negative = t.negative ^ r.negative, n.length = 19;
                        var At = (m + (e = Math.imul(d, $)) | 0) + ((8191 & (h = (h = Math.imul(d, X)) + Math.imul(c, $) | 0)) << 13) | 0;
                        m = ((o = Math.imul(c, X)) + (h >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, e = Math.imul(v, $), h = (h = Math.imul(v, X)) + Math.imul(w, $) | 0, o = Math.imul(w, X);
                        var St = (m + (e = e + Math.imul(d, Q) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, V) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, V) | 0) + (h >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, e = Math.imul(_, $), h = (h = Math.imul(_, X)) + Math.imul(x, $) | 0, o = Math.imul(x, X), e = e + Math.imul(v, Q) | 0, h = (h = h + Math.imul(v, V) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, V) | 0;
                        var Nt = (m + (e = e + Math.imul(d, Y) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, tt) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, tt) | 0) + (h >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, e = Math.imul(S, $), h = (h = Math.imul(S, X)) + Math.imul(N, $) | 0, o = Math.imul(N, X), e = e + Math.imul(_, Q) | 0, h = (h = h + Math.imul(_, V) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, V) | 0, e = e + Math.imul(v, Y) | 0, h = (h = h + Math.imul(v, tt) | 0) + Math.imul(w, Y) | 0, o = o + Math.imul(w, tt) | 0;
                        var kt = (m + (e = e + Math.imul(d, nt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, et) | 0) + Math.imul(c, nt) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, et) | 0) + (h >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, e = Math.imul(B, $), h = (h = Math.imul(B, X)) + Math.imul(E, $) | 0, o = Math.imul(E, X), e = e + Math.imul(S, Q) | 0, h = (h = h + Math.imul(S, V) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, V) | 0, e = e + Math.imul(_, Y) | 0, h = (h = h + Math.imul(_, tt) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, tt) | 0, e = e + Math.imul(v, nt) | 0, h = (h = h + Math.imul(v, et) | 0) + Math.imul(w, nt) | 0, o = o + Math.imul(w, et) | 0;
                        var Bt = (m + (e = e + Math.imul(d, ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, st) | 0) + (h >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, e = Math.imul(L, $), h = (h = Math.imul(L, X)) + Math.imul(Z, $) | 0, o = Math.imul(Z, X), e = e + Math.imul(B, Q) | 0, h = (h = h + Math.imul(B, V) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, V) | 0, e = e + Math.imul(S, Y) | 0, h = (h = h + Math.imul(S, tt) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, tt) | 0, e = e + Math.imul(_, nt) | 0, h = (h = h + Math.imul(_, et) | 0) + Math.imul(x, nt) | 0, o = o + Math.imul(x, et) | 0, e = e + Math.imul(v, ot) | 0, h = (h = h + Math.imul(v, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0;
                        var Et = (m + (e = e + Math.imul(d, at) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, lt) | 0) + Math.imul(c, at) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, lt) | 0) + (h >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, e = Math.imul(T, $), h = (h = Math.imul(T, X)) + Math.imul(I, $) | 0, o = Math.imul(I, X), e = e + Math.imul(L, Q) | 0, h = (h = h + Math.imul(L, V) | 0) + Math.imul(Z, Q) | 0, o = o + Math.imul(Z, V) | 0, e = e + Math.imul(B, Y) | 0, h = (h = h + Math.imul(B, tt) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, tt) | 0, e = e + Math.imul(S, nt) | 0, h = (h = h + Math.imul(S, et) | 0) + Math.imul(N, nt) | 0, o = o + Math.imul(N, et) | 0, e = e + Math.imul(_, ot) | 0, h = (h = h + Math.imul(_, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, e = e + Math.imul(v, at) | 0, h = (h = h + Math.imul(v, lt) | 0) + Math.imul(w, at) | 0, o = o + Math.imul(w, lt) | 0;
                        var Rt = (m + (e = e + Math.imul(d, ft) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, pt) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, pt) | 0) + (h >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, e = Math.imul(U, $), h = (h = Math.imul(U, X)) + Math.imul(z, $) | 0, o = Math.imul(z, X), e = e + Math.imul(T, Q) | 0, h = (h = h + Math.imul(T, V) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, V) | 0, e = e + Math.imul(L, Y) | 0, h = (h = h + Math.imul(L, tt) | 0) + Math.imul(Z, Y) | 0, o = o + Math.imul(Z, tt) | 0, e = e + Math.imul(B, nt) | 0, h = (h = h + Math.imul(B, et) | 0) + Math.imul(E, nt) | 0, o = o + Math.imul(E, et) | 0, e = e + Math.imul(S, ot) | 0, h = (h = h + Math.imul(S, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, e = e + Math.imul(_, at) | 0, h = (h = h + Math.imul(_, lt) | 0) + Math.imul(x, at) | 0, o = o + Math.imul(x, lt) | 0, e = e + Math.imul(v, ft) | 0, h = (h = h + Math.imul(v, pt) | 0) + Math.imul(w, ft) | 0, o = o + Math.imul(w, pt) | 0;
                        var Lt = (m + (e = e + Math.imul(d, ct) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, Mt) | 0) + Math.imul(c, ct) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, Mt) | 0) + (h >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, e = Math.imul(P, $), h = (h = Math.imul(P, X)) + Math.imul(H, $) | 0, o = Math.imul(H, X), e = e + Math.imul(U, Q) | 0, h = (h = h + Math.imul(U, V) | 0) + Math.imul(z, Q) | 0, o = o + Math.imul(z, V) | 0, e = e + Math.imul(T, Y) | 0, h = (h = h + Math.imul(T, tt) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, tt) | 0, e = e + Math.imul(L, nt) | 0, h = (h = h + Math.imul(L, et) | 0) + Math.imul(Z, nt) | 0, o = o + Math.imul(Z, et) | 0, e = e + Math.imul(B, ot) | 0, h = (h = h + Math.imul(B, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, e = e + Math.imul(S, at) | 0, h = (h = h + Math.imul(S, lt) | 0) + Math.imul(N, at) | 0, o = o + Math.imul(N, lt) | 0, e = e + Math.imul(_, ft) | 0, h = (h = h + Math.imul(_, pt) | 0) + Math.imul(x, ft) | 0, o = o + Math.imul(x, pt) | 0, e = e + Math.imul(v, ct) | 0, h = (h = h + Math.imul(v, Mt) | 0) + Math.imul(w, ct) | 0, o = o + Math.imul(w, Mt) | 0;
                        var Zt = (m + (e = e + Math.imul(d, wt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, yt) | 0) + Math.imul(c, wt) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, yt) | 0) + (h >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, e = Math.imul(D, $), h = (h = Math.imul(D, X)) + Math.imul(J, $) | 0, o = Math.imul(J, X), e = e + Math.imul(P, Q) | 0, h = (h = h + Math.imul(P, V) | 0) + Math.imul(H, Q) | 0, o = o + Math.imul(H, V) | 0, e = e + Math.imul(U, Y) | 0, h = (h = h + Math.imul(U, tt) | 0) + Math.imul(z, Y) | 0, o = o + Math.imul(z, tt) | 0, e = e + Math.imul(T, nt) | 0, h = (h = h + Math.imul(T, et) | 0) + Math.imul(I, nt) | 0, o = o + Math.imul(I, et) | 0, e = e + Math.imul(L, ot) | 0, h = (h = h + Math.imul(L, st) | 0) + Math.imul(Z, ot) | 0, o = o + Math.imul(Z, st) | 0, e = e + Math.imul(B, at) | 0, h = (h = h + Math.imul(B, lt) | 0) + Math.imul(E, at) | 0, o = o + Math.imul(E, lt) | 0, e = e + Math.imul(S, ft) | 0, h = (h = h + Math.imul(S, pt) | 0) + Math.imul(N, ft) | 0, o = o + Math.imul(N, pt) | 0, e = e + Math.imul(_, ct) | 0, h = (h = h + Math.imul(_, Mt) | 0) + Math.imul(x, ct) | 0, o = o + Math.imul(x, Mt) | 0, e = e + Math.imul(v, wt) | 0, h = (h = h + Math.imul(v, yt) | 0) + Math.imul(w, wt) | 0, o = o + Math.imul(w, yt) | 0;
                        var qt = (m + (e = e + Math.imul(d, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, xt) | 0) + Math.imul(c, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(c, xt) | 0) + (h >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, e = Math.imul(D, Q), h = (h = Math.imul(D, V)) + Math.imul(J, Q) | 0, o = Math.imul(J, V), e = e + Math.imul(P, Y) | 0, h = (h = h + Math.imul(P, tt) | 0) + Math.imul(H, Y) | 0, o = o + Math.imul(H, tt) | 0, e = e + Math.imul(U, nt) | 0, h = (h = h + Math.imul(U, et) | 0) + Math.imul(z, nt) | 0, o = o + Math.imul(z, et) | 0, e = e + Math.imul(T, ot) | 0, h = (h = h + Math.imul(T, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, e = e + Math.imul(L, at) | 0, h = (h = h + Math.imul(L, lt) | 0) + Math.imul(Z, at) | 0, o = o + Math.imul(Z, lt) | 0, e = e + Math.imul(B, ft) | 0, h = (h = h + Math.imul(B, pt) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, pt) | 0, e = e + Math.imul(S, ct) | 0, h = (h = h + Math.imul(S, Mt) | 0) + Math.imul(N, ct) | 0, o = o + Math.imul(N, Mt) | 0, e = e + Math.imul(_, wt) | 0, h = (h = h + Math.imul(_, yt) | 0) + Math.imul(x, wt) | 0, o = o + Math.imul(x, yt) | 0;
                        var Ot = (m + (e = e + Math.imul(v, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(v, xt) | 0) + Math.imul(w, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(w, xt) | 0) + (h >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, e = Math.imul(D, Y), h = (h = Math.imul(D, tt)) + Math.imul(J, Y) | 0, o = Math.imul(J, tt), e = e + Math.imul(P, nt) | 0, h = (h = h + Math.imul(P, et) | 0) + Math.imul(H, nt) | 0, o = o + Math.imul(H, et) | 0, e = e + Math.imul(U, ot) | 0, h = (h = h + Math.imul(U, st) | 0) + Math.imul(z, ot) | 0, o = o + Math.imul(z, st) | 0, e = e + Math.imul(T, at) | 0, h = (h = h + Math.imul(T, lt) | 0) + Math.imul(I, at) | 0, o = o + Math.imul(I, lt) | 0, e = e + Math.imul(L, ft) | 0, h = (h = h + Math.imul(L, pt) | 0) + Math.imul(Z, ft) | 0, o = o + Math.imul(Z, pt) | 0, e = e + Math.imul(B, ct) | 0, h = (h = h + Math.imul(B, Mt) | 0) + Math.imul(E, ct) | 0, o = o + Math.imul(E, Mt) | 0, e = e + Math.imul(S, wt) | 0, h = (h = h + Math.imul(S, yt) | 0) + Math.imul(N, wt) | 0, o = o + Math.imul(N, yt) | 0;
                        var Tt = (m + (e = e + Math.imul(_, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(_, xt) | 0) + Math.imul(x, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(x, xt) | 0) + (h >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, e = Math.imul(D, nt), h = (h = Math.imul(D, et)) + Math.imul(J, nt) | 0, o = Math.imul(J, et), e = e + Math.imul(P, ot) | 0, h = (h = h + Math.imul(P, st) | 0) + Math.imul(H, ot) | 0, o = o + Math.imul(H, st) | 0, e = e + Math.imul(U, at) | 0, h = (h = h + Math.imul(U, lt) | 0) + Math.imul(z, at) | 0, o = o + Math.imul(z, lt) | 0, e = e + Math.imul(T, ft) | 0, h = (h = h + Math.imul(T, pt) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, pt) | 0, e = e + Math.imul(L, ct) | 0, h = (h = h + Math.imul(L, Mt) | 0) + Math.imul(Z, ct) | 0, o = o + Math.imul(Z, Mt) | 0, e = e + Math.imul(B, wt) | 0, h = (h = h + Math.imul(B, yt) | 0) + Math.imul(E, wt) | 0, o = o + Math.imul(E, yt) | 0;
                        var It = (m + (e = e + Math.imul(S, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(S, xt) | 0) + Math.imul(N, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(N, xt) | 0) + (h >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, e = Math.imul(D, ot), h = (h = Math.imul(D, st)) + Math.imul(J, ot) | 0, o = Math.imul(J, st), e = e + Math.imul(P, at) | 0, h = (h = h + Math.imul(P, lt) | 0) + Math.imul(H, at) | 0, o = o + Math.imul(H, lt) | 0, e = e + Math.imul(U, ft) | 0, h = (h = h + Math.imul(U, pt) | 0) + Math.imul(z, ft) | 0, o = o + Math.imul(z, pt) | 0, e = e + Math.imul(T, ct) | 0, h = (h = h + Math.imul(T, Mt) | 0) + Math.imul(I, ct) | 0, o = o + Math.imul(I, Mt) | 0, e = e + Math.imul(L, wt) | 0, h = (h = h + Math.imul(L, yt) | 0) + Math.imul(Z, wt) | 0, o = o + Math.imul(Z, yt) | 0;
                        var jt = (m + (e = e + Math.imul(B, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(B, xt) | 0) + Math.imul(E, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(E, xt) | 0) + (h >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, e = Math.imul(D, at), h = (h = Math.imul(D, lt)) + Math.imul(J, at) | 0, o = Math.imul(J, lt), e = e + Math.imul(P, ft) | 0, h = (h = h + Math.imul(P, pt) | 0) + Math.imul(H, ft) | 0, o = o + Math.imul(H, pt) | 0, e = e + Math.imul(U, ct) | 0, h = (h = h + Math.imul(U, Mt) | 0) + Math.imul(z, ct) | 0, o = o + Math.imul(z, Mt) | 0, e = e + Math.imul(T, wt) | 0, h = (h = h + Math.imul(T, yt) | 0) + Math.imul(I, wt) | 0, o = o + Math.imul(I, yt) | 0;
                        var Ut = (m + (e = e + Math.imul(L, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(L, xt) | 0) + Math.imul(Z, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(Z, xt) | 0) + (h >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, e = Math.imul(D, ft), h = (h = Math.imul(D, pt)) + Math.imul(J, ft) | 0, o = Math.imul(J, pt), e = e + Math.imul(P, ct) | 0, h = (h = h + Math.imul(P, Mt) | 0) + Math.imul(H, ct) | 0, o = o + Math.imul(H, Mt) | 0, e = e + Math.imul(U, wt) | 0, h = (h = h + Math.imul(U, yt) | 0) + Math.imul(z, wt) | 0, o = o + Math.imul(z, yt) | 0;
                        var zt = (m + (e = e + Math.imul(T, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(T, xt) | 0) + Math.imul(I, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(I, xt) | 0) + (h >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, e = Math.imul(D, ct), h = (h = Math.imul(D, Mt)) + Math.imul(J, ct) | 0, o = Math.imul(J, Mt), e = e + Math.imul(P, wt) | 0, h = (h = h + Math.imul(P, yt) | 0) + Math.imul(H, wt) | 0, o = o + Math.imul(H, yt) | 0;
                        var Ct = (m + (e = e + Math.imul(U, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(U, xt) | 0) + Math.imul(z, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(z, xt) | 0) + (h >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, e = Math.imul(D, wt), h = (h = Math.imul(D, yt)) + Math.imul(J, wt) | 0, o = Math.imul(J, yt);
                        var Pt = (m + (e = e + Math.imul(P, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(P, xt) | 0) + Math.imul(H, _t) | 0)) << 13) | 0;
                        m = ((o = o + Math.imul(H, xt) | 0) + (h >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
                        var Ht = (m + (e = Math.imul(D, _t)) | 0) + ((8191 & (h = (h = Math.imul(D, xt)) + Math.imul(J, _t) | 0)) << 13) | 0;
                        return m = ((o = Math.imul(J, xt)) + (h >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863, l[0] = At, l[1] = St, l[2] = Nt, l[3] = kt, l[4] = Bt, l[5] = Et, l[6] = Rt, l[7] = Lt, l[8] = Zt, l[9] = qt, l[10] = Ot, l[11] = Tt, l[12] = It, l[13] = jt, l[14] = Ut, l[15] = zt, l[16] = Ct, l[17] = Pt, l[18] = Ht, 0 !== m && (l[19] = m, n.length++), n
                    };

                    function A(t, r, n) {
                        n.negative = r.negative ^ t.negative, n.length = t.length + r.length;
                        for (var e = 0, h = 0, o = 0; o < n.length - 1; o++) {
                            var l = h;
                            h = 0;
                            for (var m = 67108863 & e, f = Math.min(o, r.length - 1), d = Math.max(0, o - t.length + 1); d <= f; d++) {
                                var i = o - d,
                                    c = (0 | t.words[i]) * (0 | r.words[d]),
                                    M = 67108863 & c;
                                m = 67108863 & (M = M + m | 0), h += (l = (l = l + (c / 67108864 | 0) | 0) + (M >>> 26) | 0) >>> 26, l &= 67108863
                            }
                            n.words[o] = m, e = l, l = h
                        }
                        return 0 !== e ? n.words[o] = e : n.length--, n._strip()
                    }

                    function S(t, r, n) {
                        return A(t, r, n)
                    }

                    function N(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (x = _), o.prototype.mulTo = function(t, r) {
                        var n = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? x(this, t, r) : n < 63 ? _(this, t, r) : n < 1024 ? A(this, t, r) : S(this, t, r)
                    }, N.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), n = o.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, n, t);
                        return r
                    }, N.prototype.revBin = function(t, r, n) {
                        if (0 === t || t === n - 1) return t;
                        for (var e = 0, i = 0; i < r; i++) e |= (1 & t) << r - i - 1, t >>= 1;
                        return e
                    }, N.prototype.permute = function(t, r, n, e, h, o) {
                        for (var i = 0; i < o; i++) e[i] = r[t[i]], h[i] = n[t[i]]
                    }, N.prototype.transform = function(t, r, n, e, h, o) {
                        this.permute(o, t, r, n, e, h);
                        for (var s = 1; s < h; s <<= 1)
                            for (var l = s << 1, m = Math.cos(2 * Math.PI / l), f = Math.sin(2 * Math.PI / l), p = 0; p < h; p += l)
                                for (var d = m, c = f, M = 0; M < s; M++) {
                                    var v = n[p + M],
                                        w = e[p + M],
                                        y = n[p + M + s],
                                        _ = e[p + M + s],
                                        x = d * y - c * _;
                                    _ = d * _ + c * y, y = x, n[p + M] = v + y, e[p + M] = w + _, n[p + M + s] = v - y, e[p + M + s] = w - _, M !== l && (x = m * d - f * c, c = m * c + f * d, d = x)
                                }
                    }, N.prototype.guessLen13b = function(t, r) {
                        var n = 1 | Math.max(r, t),
                            e = 1 & n,
                            i = 0;
                        for (n = n / 2 | 0; n; n >>>= 1) i++;
                        return 1 << i + 1 + e
                    }, N.prototype.conjugate = function(t, r, n) {
                        if (!(n <= 1))
                            for (var i = 0; i < n / 2; i++) {
                                var e = t[i];
                                t[i] = t[n - i - 1], t[n - i - 1] = e, e = r[i], r[i] = -r[n - i - 1], r[n - i - 1] = -e
                            }
                    }, N.prototype.normalize13b = function(t, r) {
                        for (var n = 0, i = 0; i < r / 2; i++) {
                            var e = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + n;
                            t[i] = 67108863 & e, n = e < 67108864 ? 0 : e / 67108864 | 0
                        }
                        return t
                    }, N.prototype.convert13b = function(t, r, n, h) {
                        for (var o = 0, i = 0; i < r; i++) o += 0 | t[i], n[2 * i] = 8191 & o, o >>>= 13, n[2 * i + 1] = 8191 & o, o >>>= 13;
                        for (i = 2 * r; i < h; ++i) n[i] = 0;
                        e(0 === o), e(0 == (-8192 & o))
                    }, N.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, N.prototype.mulp = function(t, r, n) {
                        var e = 2 * this.guessLen13b(t.length, r.length),
                            h = this.makeRBT(e),
                            o = this.stub(e),
                            l = new Array(e),
                            m = new Array(e),
                            f = new Array(e),
                            d = new Array(e),
                            c = new Array(e),
                            M = new Array(e),
                            v = n.words;
                        v.length = e, this.convert13b(t.words, t.length, l, e), this.convert13b(r.words, r.length, d, e), this.transform(l, o, m, f, e, h), this.transform(d, o, c, M, e, h);
                        for (var i = 0; i < e; i++) {
                            var w = m[i] * c[i] - f[i] * M[i];
                            f[i] = m[i] * M[i] + f[i] * c[i], m[i] = w
                        }
                        return this.conjugate(m, f, e), this.transform(m, f, v, o, e, h), this.conjugate(v, o, e), this.normalize13b(v, e), n.negative = t.negative ^ r.negative, n.length = t.length + r.length, n._strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), S(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), e("number" == typeof t), e(t < 67108864);
                        for (var n = 0, i = 0; i < this.length; i++) {
                            var h = (0 | this.words[i]) * t,
                                o = (67108863 & h) + (67108863 & n);
                            n >>= 26, n += h / 67108864 | 0, n += o >>> 26, this.words[i] = 67108863 & o
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), r ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), n = 0; n < r.length; n++) {
                                var e = n / 26 | 0,
                                    h = n % 26;
                                r[n] = t.words[e] >>> h & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var n = this, i = 0; i < r.length && 0 === r[i]; i++, n = n.sqr());
                        if (++i < r.length)
                            for (var q = n.sqr(); i < r.length; i++, q = q.sqr()) 0 !== r[i] && (n = n.mul(q));
                        return n
                    }, o.prototype.iushln = function(t) {
                        e("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            s = (t - r) / 26,
                            n = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var h = 0;
                            for (i = 0; i < this.length; i++) {
                                var o = this.words[i] & n,
                                    l = (0 | this.words[i]) - o << r;
                                this.words[i] = l | h, h = o >>> 26 - r
                            }
                            h && (this.words[i] = h, this.length++)
                        }
                        if (0 !== s) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                            for (i = 0; i < s; i++) this.words[i] = 0;
                            this.length += s
                        }
                        return this._strip()
                    }, o.prototype.ishln = function(t) {
                        return e(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, n) {
                        var h;
                        e("number" == typeof t && t >= 0), h = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> o << o,
                            l = n;
                        if (h -= s, h = Math.max(0, h), l) {
                            for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                            l.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var m = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== m || i >= h); i--) {
                            var f = 0 | this.words[i];
                            this.words[i] = m << 26 - o | f >>> o, m = f & mask
                        }
                        return l && 0 !== m && (l.words[l.length++] = m), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, r, n) {
                        return e(0 === this.negative), this.iushrn(t, r, n)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, o.prototype.imaskn = function(t) {
                        e("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26;
                        if (e(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== r && s++, this.length = Math.min(s, this.length), 0 !== r) {
                            var mask = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= mask
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return e("number" == typeof t), e(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (e("number" == typeof t), e(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this._strip()
                    }, o.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, o.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, o.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, o.prototype.abs = function() {
                        return this.clone().iabs()
                    }, o.prototype._ishlnsubmul = function(t, r, n) {
                        var i, h, o = t.length + n;
                        this._expand(o);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            h = (0 | this.words[i + n]) + l;
                            var m = (0 | t.words[i]) * r;
                            l = ((h -= 67108863 & m) >> 26) - (m / 67108864 | 0), this.words[i + n] = 67108863 & h
                        }
                        for (; i < this.length - n; i++) l = (h = (0 | this.words[i + n]) + l) >> 26, this.words[i + n] = 67108863 & h;
                        if (0 === l) return this._strip();
                        for (e(-1 === l), l = 0, i = 0; i < this.length; i++) l = (h = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & h;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var n = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            e = 0 | b.words[b.length - 1];
                        0 !== (n = 26 - this._countBits(e)) && (b = b.ushln(n), a.iushln(n), e = 0 | b.words[b.length - 1]);
                        var q, h = a.length - b.length;
                        if ("mod" !== r) {
                            (q = new o(null)).length = h + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, h);
                        0 === l.negative && (a = l, q && (q.words[h] = 1));
                        for (var m = h - 1; m >= 0; m--) {
                            var f = 67108864 * (0 | a.words[b.length + m]) + (0 | a.words[b.length + m - 1]);
                            for (f = Math.min(f / e | 0, 67108863), a._ishlnsubmul(b, f, m); 0 !== a.negative;) f--, a.negative = 0, a._ishlnsubmul(b, 1, m), a.isZero() || (a.negative ^= 1);
                            q && (q.words[m] = f)
                        }
                        return q && q._strip(), a._strip(), "div" !== r && 0 !== n && a.iushrn(n), {
                            div: q || null,
                            mod: a
                        }
                    }, o.prototype.divmod = function(t, r, n) {
                        return e(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, r), "mod" !== r && (div = l.div.neg()), "div" !== r && (h = l.mod.neg(), n && 0 !== h.negative && h.iadd(t)), {
                            div: div,
                            mod: h
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), r), "mod" !== r && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), r), "div" !== r && (h = l.mod.neg(), n && 0 !== h.negative && h.isub(t)), {
                            div: l.div,
                            mod: h
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new o(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new o(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new o(this.modrn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var div, h, l
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
                            e = t.ushrn(1),
                            h = t.andln(1),
                            o = n.cmp(e);
                        return o < 0 || 1 === h && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), e(t <= 67108863);
                        for (var p = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (p * n + (0 | this.words[i])) % t;
                        return r ? -n : n
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), e(t <= 67108863);
                        for (var n = 0, i = this.length - 1; i >= 0; i--) {
                            var h = (0 | this.words[i]) + 67108864 * n;
                            this.words[i] = h / t | 0, n = h % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(p) {
                        e(0 === p.negative), e(!p.isZero());
                        var t = this,
                            r = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var n = new o(1), h = new o(0), l = new o(0), m = new o(1), g = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++g;
                        for (var f = r.clone(), d = t.clone(); !t.isZero();) {
                            for (var i = 0, c = 1; 0 == (t.words[0] & c) && i < 26; ++i, c <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(n.isOdd() || h.isOdd()) && (n.iadd(f), h.isub(d)), n.iushrn(1), h.iushrn(1);
                            for (var M = 0, v = 1; 0 == (r.words[0] & v) && M < 26; ++M, v <<= 1);
                            if (M > 0)
                                for (r.iushrn(M); M-- > 0;)(l.isOdd() || m.isOdd()) && (l.iadd(f), m.isub(d)), l.iushrn(1), m.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), n.isub(l), h.isub(m)) : (r.isub(t), l.isub(n), m.isub(h))
                        }
                        return {
                            a: l,
                            b: m,
                            gcd: r.iushln(g)
                        }
                    }, o.prototype._invmp = function(p) {
                        e(0 === p.negative), e(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, r = new o(1), n = new o(0), h = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) r.isOdd() && r.iadd(h), r.iushrn(1);
                            for (var m = 0, f = 1; 0 == (b.words[0] & f) && m < 26; ++m, f <<= 1);
                            if (m > 0)
                                for (b.iushrn(m); m-- > 0;) n.isOdd() && n.iadd(h), n.iushrn(1);
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
                                var e = a;
                                a = b, b = e
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
                        e("number" == typeof t);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var n = q, i = s; 0 !== n && i < this.length; i++) {
                            var h = 0 | this.words[i];
                            n = (h += n) >>> 26, h &= 67108863, this.words[i] = h
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, n = t < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this._strip(), this.length > 1) r = 1;
                        else {
                            n && (t = -t), e(t <= 67108863, "Number is too big");
                            var h = 0 | this.words[0];
                            r = h === t ? 0 : h < t ? -1 : 1
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
                        return new O(t)
                    }, o.prototype.toRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), e(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return e(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return e(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return e(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return e(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return e(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return e(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var k = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function B(t, p) {
                        this.name = t, this.p = new o(p, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function E() {
                        B.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function R() {
                        B.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function L() {
                        B.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function Z() {
                        B.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function O(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else e(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function T(t) {
                        O.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    B.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, B.prototype.ireduce = function(t) {
                        var r, n = t;
                        do {
                            this.split(n, this.tmp), r = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var e = r < this.n ? -1 : n.ucmp(this.p);
                        return 0 === e ? (n.words[0] = 0, n.length = 1) : e > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n
                    }, B.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, B.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, h(E, B), E.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var n = 0 | input.words[i];
                            input.words[i - 10] = (n & mask) << 4 | r >>> 22, r = n
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, E.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 0 | t.words[i];
                            r += 977 * n, t.words[i] = 67108863 & r, r = 64 * n + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, h(R, B), h(L, B), h(Z, B), Z.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var n = 19 * (0 | t.words[i]) + r,
                                e = 67108863 & n;
                            n >>>= 26, t.words[i] = e, r = n
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (k[t]) return k[t];
                        var r;
                        if ("k256" === t) r = new E;
                        else if ("p224" === t) r = new R;
                        else if ("p192" === t) r = new L;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new Z
                        }
                        return k[t] = r, r
                    }, O.prototype._verify1 = function(a) {
                        e(0 === a.negative, "red works only with positives"), e(a.red, "red works only with red numbers")
                    }, O.prototype._verify2 = function(a, b) {
                        e(0 == (a.negative | b.negative), "red works only with positives"), e(a.red && a.red === b.red, "red works only with red numbers")
                    }, O.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (c(a, a.umod(this.m)._forceRed(this)), a)
                    }, O.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, O.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, O.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, O.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, O.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, O.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, O.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, O.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, O.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, O.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, O.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (e(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(a, r)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        e(!q.isZero());
                        var n = new o(1).toRed(this),
                            h = n.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            m = this.m.bitLength();
                        for (m = new o(2 * m * m).toRed(this); 0 !== this.pow(m, l).cmp(h);) m.redIAdd(h);
                        for (var f = this.pow(m, q), d = this.pow(a, q.addn(1).iushrn(1)), c = this.pow(a, q), M = s; 0 !== c.cmp(n);) {
                            for (var v = c, i = 0; 0 !== v.cmp(n); i++) v = v.redSqr();
                            e(i < M);
                            var b = this.pow(f, new o(1).iushln(M - i - 1));
                            d = d.redMul(b), f = b.redSqr(), c = c.redMul(f), M = i
                        }
                        return d
                    }, O.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, O.prototype.pow = function(a, t) {
                        if (t.isZero()) return new o(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = a;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], a);
                        var n = r[0],
                            e = 0,
                            h = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var m = t.words[i], f = l - 1; f >= 0; f--) {
                                var d = m >> f & 1;
                                n !== r[0] && (n = this.sqr(n)), 0 !== d || 0 !== e ? (e <<= 1, e |= d, (4 === ++h || 0 === i && 0 === f) && (n = this.mul(n, r[e]), h = 0, e = 0)) : h = 0
                            }
                            l = 26
                        }
                        return n
                    }, O.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, O.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new T(t)
                    }, h(T, O), T.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, T.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, T.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, T.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new o(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, T.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, n(82)(t))
        },
        295: function(t, r, n) {
            "use strict";
            n.d(r, "a", (function() {
                return v
            })), n.d(r, "c", (function() {
                return A
            })), n.d(r, "b", (function() {
                return S
            }));
            var e = n(1099),
                h = n.n(e),
                o = n(2),
                l = n(1);
            var m = h.a.BN;
            const f = new l.Logger("bignumber/5.7.0"),
                d = {},
                c = 9007199254740991;
            let M = !1;
            class v {
                constructor(t, r) {
                    t !== d && f.throwError("cannot call constructor directly; use BigNumber.from", l.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return y(_(this).fromTwos(t))
                }
                toTwos(t) {
                    return y(_(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? v.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return y(_(this).add(_(t)))
                }
                sub(t) {
                    return y(_(this).sub(_(t)))
                }
                div(t) {
                    return v.from(t).isZero() && x("division-by-zero", "div"), y(_(this).div(_(t)))
                }
                mul(t) {
                    return y(_(this).mul(_(t)))
                }
                mod(t) {
                    const r = _(t);
                    return r.isNeg() && x("division-by-zero", "mod"), y(_(this).umod(r))
                }
                pow(t) {
                    const r = _(t);
                    return r.isNeg() && x("negative-power", "pow"), y(_(this).pow(r))
                }
                and(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && x("unbound-bitwise-result", "and"), y(_(this).and(r))
                }
                or(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && x("unbound-bitwise-result", "or"), y(_(this).or(r))
                }
                xor(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && x("unbound-bitwise-result", "xor"), y(_(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && x("negative-width", "mask"), y(_(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && x("negative-width", "shl"), y(_(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && x("negative-width", "shr"), y(_(this).shrn(t))
                }
                eq(t) {
                    return _(this).eq(_(t))
                }
                lt(t) {
                    return _(this).lt(_(t))
                }
                lte(t) {
                    return _(this).lte(_(t))
                }
                gt(t) {
                    return _(this).gt(_(t))
                }
                gte(t) {
                    return _(this).gte(_(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return _(this).isZero()
                }
                toNumber() {
                    try {
                        return _(this).toNumber()
                    } catch (t) {
                        x("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return f.throwError("this platform does not support BigInt", l.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? M || (M = !0, f.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? f.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", l.Logger.errors.UNEXPECTED_ARGUMENT, {}) : f.throwError("BigNumber.toString does not accept parameters", l.Logger.errors.UNEXPECTED_ARGUMENT, {})), _(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof v) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new v(d, w(t)) : t.match(/^-?[0-9]+$/) ? new v(d, w(new m(t))) : f.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && x("underflow", "BigNumber.from", t), (t >= c || t <= -c) && x("overflow", "BigNumber.from", t), v.from(String(t));
                    const r = t;
                    if ("bigint" == typeof r) return v.from(r.toString());
                    if (Object(o.j)(r)) return v.from(Object(o.i)(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" == typeof t) return v.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" == typeof t && (Object(o.l)(t) || "-" === t[0] && Object(o.l)(t.substring(1)))) return v.from(t)
                        }
                    return f.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function w(t) {
                if ("string" != typeof t) return w(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && f.throwArgumentError("invalid hex", "value", t), "0x00" === (t = w(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function y(t) {
                return v.from(w(t))
            }

            function _(t) {
                const r = v.from(t).toHexString();
                return "-" === r[0] ? new m("-" + r.substring(3), 16) : new m(r.substring(2), 16)
            }

            function x(t, r, n) {
                const e = {
                    fault: t,
                    operation: r
                };
                return null != n && (e.value = n), f.throwError(t, l.Logger.errors.NUMERIC_FAULT, e)
            }

            function A(t) {
                return new m(t, 36).toString(16)
            }

            function S(t) {
                return new m(t, 16).toString(36)
            }
        },
        400: function(t, r, n) {
            "use strict";
            n.d(r, "a", (function() {
                return v
            }));
            var e = n(2),
                h = n(295),
                o = n(30);
            n(121);
            const l = new(n(1).Logger)("address/5.7.0");

            function m(address) {
                Object(e.l)(address, 20) || l.throwArgumentError("invalid address", "address", address);
                const t = (address = address.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let i = 0; i < 40; i++) r[i] = t[i].charCodeAt(0);
                const n = Object(e.a)(Object(o.a)(r));
                for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && (t[i + 1] = t[i + 1].toUpperCase());
                return "0x" + t.join("")
            }
            const f = {};
            for (let i = 0; i < 10; i++) f[String(i)] = String(i);
            for (let i = 0; i < 26; i++) f[String.fromCharCode(65 + i)] = String(10 + i);
            const d = Math.floor((c = 9007199254740991, Math.log10 ? Math.log10(c) : Math.log(c) / Math.LN10));
            var c;

            function M(address) {
                let t = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((t => f[t])).join("");
                for (; t.length >= d;) {
                    let r = t.substring(0, d);
                    t = parseInt(r, 10) % 97 + t.substring(r.length)
                }
                let r = String(98 - parseInt(t, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }

            function v(address) {
                let t = null;
                if ("string" != typeof address && l.throwArgumentError("invalid address", "address", address), address.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== address.substring(0, 2) && (address = "0x" + address), t = m(address), address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== address && l.throwArgumentError("bad address checksum", "address", address);
                else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (address.substring(2, 4) !== M(address) && l.throwArgumentError("bad icap checksum", "address", address), t = Object(h.c)(address.substring(4)); t.length < 40;) t = "0" + t;
                    t = m("0x" + t)
                } else l.throwArgumentError("invalid address", "address", address);
                return t
            }
        },
        505: function(t, r, n) {
            "use strict";
            n.d(r, "a", (function() {
                return o
            }));
            var e = n(30),
                h = n(530);

            function o(text) {
                return Object(e.a)(Object(h.f)(text))
            }
        }
    }
]);