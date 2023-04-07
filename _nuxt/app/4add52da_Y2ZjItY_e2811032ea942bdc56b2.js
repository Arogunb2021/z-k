(window.webpackJsonp = window.webpackJsonp || []).push([
    [65], {
        1115: function(t, r, e) {
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

                    function h(t, base, r) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (r = base, base = 10), this._init(t || 0, base || 10, r || "be"))
                    }
                    var l;
                    "object" == typeof t ? t.exports = h : r.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(1512).Buffer
                    } catch (t) {}

                    function m(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function f(t, r, e) {
                        var n = m(t, e);
                        return e - 1 >= r && (n |= m(t, e - 1) << 4), n
                    }

                    function d(t, r, e, o) {
                        for (var h = 0, b = 0, l = Math.min(t.length, e), i = r; i < l; i++) {
                            var m = t.charCodeAt(i) - 48;
                            h *= o, b = m >= 49 ? m - 49 + 10 : m >= 17 ? m - 17 + 10 : m, n(m >= 0 && b < o, "Invalid character"), h += b
                        }
                        return h
                    }

                    function c(t, r) {
                        t.words = r.words, t.length = r.length, t.negative = r.negative, t.red = r.red
                    }
                    if (h.isBN = function(t) {
                            return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                        }, h.max = function(t, r) {
                            return t.cmp(r) > 0 ? t : r
                        }, h.min = function(t, r) {
                            return t.cmp(r) < 0 ? t : r
                        }, h.prototype._init = function(t, base, r) {
                            if ("number" == typeof t) return this._initNumber(t, base, r);
                            if ("object" == typeof t) return this._initArray(t, base, r);
                            "hex" === base && (base = 16), n(base === (0 | base) && base >= 2 && base <= 36);
                            var e = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (e++, this.negative = 1), e < t.length && (16 === base ? this._parseHex(t, e, r) : (this._parseBase(t, base, e), "le" === r && this._initArray(this.toArray(), base, r)))
                        }, h.prototype._initNumber = function(t, base, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), base, r)
                        }, h.prototype._initArray = function(t, base, r) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var e, o, h = 0;
                            if ("be" === r)
                                for (i = t.length - 1, e = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[e] |= o << h & 67108863, this.words[e + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, e++);
                            else if ("le" === r)
                                for (i = 0, e = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[e] |= o << h & 67108863, this.words[e + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, e++);
                            return this._strip()
                        }, h.prototype._parseHex = function(t, r, e) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, o = 0,
                                h = 0;
                            if ("be" === e)
                                for (i = t.length - 1; i >= r; i -= 2) n = f(t, r, i) << o, this.words[h] |= 67108863 & n, o >= 18 ? (o -= 18, h += 1, this.words[h] |= n >>> 26) : o += 8;
                            else
                                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = f(t, r, i) << o, this.words[h] |= 67108863 & n, o >= 18 ? (o -= 18, h += 1, this.words[h] |= n >>> 26) : o += 8;
                            this._strip()
                        }, h.prototype._parseBase = function(t, base, r) {
                            this.words = [0], this.length = 1;
                            for (var e = 0, n = 1; n <= 67108863; n *= base) e++;
                            e--, n = n / base | 0;
                            for (var o = t.length - r, h = o % e, l = Math.min(o, o - h) + r, m = 0, i = r; i < l; i += e) m = d(t, i, i + e, base), this.imuln(n), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                            if (0 !== h) {
                                var f = 1;
                                for (m = d(t, i, t.length, base), i = 0; i < h; i++) f *= base;
                                this.imuln(f), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                            }
                            this._strip()
                        }, h.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, h.prototype._move = function(t) {
                            c(t, this)
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
                    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        w = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        y = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    h.prototype.toString = function(base, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            r = "";
                            for (var e = 0, o = 0, i = 0; i < this.length; i++) {
                                var h = this.words[i],
                                    l = (16777215 & (h << e | o)).toString(16);
                                o = h >>> 24 - e & 16777215, (e += 2) >= 26 && (e -= 26, i--), r = 0 !== o || i !== this.length - 1 ? M[6 - l.length] + l + r : l + r
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var m = w[base],
                                f = y[base];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var c = d.modrn(f).toString(base);
                                r = (d = d.idivn(f)).isZero() ? c + r : M[m - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, l && (h.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(l, t, r)
                    }), h.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function _(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | r.words[0],
                            o = a * b,
                            h = 67108863 & o,
                            l = o / 67108864 | 0;
                        e.words[0] = h;
                        for (var m = 1; m < n; m++) {
                            for (var f = l >>> 26, d = 67108863 & l, c = Math.min(m, r.length - 1), v = Math.max(0, m - t.length + 1); v <= c; v++) {
                                var i = m - v | 0;
                                f += (o = (a = 0 | t.words[i]) * (b = 0 | r.words[v]) + d) / 67108864 | 0, d = 67108863 & o
                            }
                            e.words[m] = 0 | d, l = 0 | f
                        }
                        return 0 !== l ? e.words[m] = 0 | l : e.length--, e._strip()
                    }
                    h.prototype.toArrayLike = function(t, r, e) {
                        this._strip();
                        var o = this.byteLength(),
                            h = e || Math.max(1, o);
                        n(o <= h, "byte array longer than desired length"), n(h > 0, "Requested array length <= 0");
                        var l = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, h);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](l, o), l
                    }, h.prototype._toArrayLikeLE = function(t, r) {
                        for (var e = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var h = this.words[i] << o | n;
                            t[e++] = 255 & h, e < t.length && (t[e++] = h >> 8 & 255), e < t.length && (t[e++] = h >> 16 & 255), 6 === o ? (e < t.length && (t[e++] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
                        }
                        if (e < t.length)
                            for (t[e++] = n; e < t.length;) t[e++] = 0
                    }, h.prototype._toArrayLikeBE = function(t, r) {
                        for (var e = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var h = this.words[i] << o | n;
                            t[e--] = 255 & h, e >= 0 && (t[e--] = h >> 8 & 255), e >= 0 && (t[e--] = h >> 16 & 255), 6 === o ? (e >= 0 && (t[e--] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
                        }
                        if (e >= 0)
                            for (t[e--] = n; e >= 0;) t[e--] = 0
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
                    }, h.prototype.bitLength = function() {
                        var t = this.words[this.length - 1],
                            r = this._countBits(t);
                        return 26 * (this.length - 1) + r
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
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this._strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, r) {
                        n("number" == typeof t && t >= 0);
                        var e = t / 26 | 0,
                            o = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << o : this.words[e] & ~(1 << o), this._strip()
                    }, h.prototype.iadd = function(t) {
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
                    }, h.prototype.add = function(t) {
                        var r;
                        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                    }, h.prototype.isub = function(t) {
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
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var P = function(t, r, e) {
                        var n, o, h, a = t.words,
                            b = r.words,
                            l = e.words,
                            m = 0,
                            f = 0 | a[0],
                            d = 8191 & f,
                            c = f >>> 13,
                            v = 0 | a[1],
                            M = 8191 & v,
                            w = v >>> 13,
                            y = 0 | a[2],
                            _ = 8191 & y,
                            P = y >>> 13,
                            x = 0 | a[3],
                            N = 8191 & x,
                            k = x >>> 13,
                            A = 0 | a[4],
                            E = 8191 & A,
                            S = A >>> 13,
                            T = 0 | a[5],
                            B = 8191 & T,
                            L = T >>> 13,
                            R = 0 | a[6],
                            F = 8191 & R,
                            O = R >>> 13,
                            I = 0 | a[7],
                            G = 8191 & I,
                            Z = I >>> 13,
                            U = 0 | a[8],
                            D = 8191 & U,
                            j = U >>> 13,
                            C = 0 | a[9],
                            z = 8191 & C,
                            H = C >>> 13,
                            J = 0 | b[0],
                            K = 8191 & J,
                            V = J >>> 13,
                            X = 0 | b[1],
                            $ = 8191 & X,
                            Q = X >>> 13,
                            W = 0 | b[2],
                            Y = 8191 & W,
                            tt = W >>> 13,
                            it = 0 | b[3],
                            et = 8191 & it,
                            nt = it >>> 13,
                            ot = 0 | b[4],
                            st = 8191 & ot,
                            ht = ot >>> 13,
                            ut = 0 | b[5],
                            at = 8191 & ut,
                            lt = ut >>> 13,
                            mt = 0 | b[6],
                            ft = 8191 & mt,
                            ct = mt >>> 13,
                            pt = 0 | b[7],
                            gt = 8191 & pt,
                            vt = pt >>> 13,
                            Mt = 0 | b[8],
                            wt = 8191 & Mt,
                            yt = Mt >>> 13,
                            bt = 0 | b[9],
                            _t = 8191 & bt,
                            Pt = bt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19;
                        var xt = (m + (n = Math.imul(d, K)) | 0) + ((8191 & (o = (o = Math.imul(d, V)) + Math.imul(c, K) | 0)) << 13) | 0;
                        m = ((h = Math.imul(c, V)) + (o >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(M, K), o = (o = Math.imul(M, V)) + Math.imul(w, K) | 0, h = Math.imul(w, V);
                        var Nt = (m + (n = n + Math.imul(d, $) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, Q) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, Q) | 0) + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(_, K), o = (o = Math.imul(_, V)) + Math.imul(P, K) | 0, h = Math.imul(P, V), n = n + Math.imul(M, $) | 0, o = (o = o + Math.imul(M, Q) | 0) + Math.imul(w, $) | 0, h = h + Math.imul(w, Q) | 0;
                        var kt = (m + (n = n + Math.imul(d, Y) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, tt) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, tt) | 0) + (o >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(N, K), o = (o = Math.imul(N, V)) + Math.imul(k, K) | 0, h = Math.imul(k, V), n = n + Math.imul(_, $) | 0, o = (o = o + Math.imul(_, Q) | 0) + Math.imul(P, $) | 0, h = h + Math.imul(P, Q) | 0, n = n + Math.imul(M, Y) | 0, o = (o = o + Math.imul(M, tt) | 0) + Math.imul(w, Y) | 0, h = h + Math.imul(w, tt) | 0;
                        var At = (m + (n = n + Math.imul(d, et) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, nt) | 0) + Math.imul(c, et) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, nt) | 0) + (o >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(E, K), o = (o = Math.imul(E, V)) + Math.imul(S, K) | 0, h = Math.imul(S, V), n = n + Math.imul(N, $) | 0, o = (o = o + Math.imul(N, Q) | 0) + Math.imul(k, $) | 0, h = h + Math.imul(k, Q) | 0, n = n + Math.imul(_, Y) | 0, o = (o = o + Math.imul(_, tt) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, tt) | 0, n = n + Math.imul(M, et) | 0, o = (o = o + Math.imul(M, nt) | 0) + Math.imul(w, et) | 0, h = h + Math.imul(w, nt) | 0;
                        var Et = (m + (n = n + Math.imul(d, st) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, ht) | 0) + Math.imul(c, st) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, ht) | 0) + (o >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(B, K), o = (o = Math.imul(B, V)) + Math.imul(L, K) | 0, h = Math.imul(L, V), n = n + Math.imul(E, $) | 0, o = (o = o + Math.imul(E, Q) | 0) + Math.imul(S, $) | 0, h = h + Math.imul(S, Q) | 0, n = n + Math.imul(N, Y) | 0, o = (o = o + Math.imul(N, tt) | 0) + Math.imul(k, Y) | 0, h = h + Math.imul(k, tt) | 0, n = n + Math.imul(_, et) | 0, o = (o = o + Math.imul(_, nt) | 0) + Math.imul(P, et) | 0, h = h + Math.imul(P, nt) | 0, n = n + Math.imul(M, st) | 0, o = (o = o + Math.imul(M, ht) | 0) + Math.imul(w, st) | 0, h = h + Math.imul(w, ht) | 0;
                        var St = (m + (n = n + Math.imul(d, at) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, lt) | 0) + Math.imul(c, at) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, lt) | 0) + (o >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(F, K), o = (o = Math.imul(F, V)) + Math.imul(O, K) | 0, h = Math.imul(O, V), n = n + Math.imul(B, $) | 0, o = (o = o + Math.imul(B, Q) | 0) + Math.imul(L, $) | 0, h = h + Math.imul(L, Q) | 0, n = n + Math.imul(E, Y) | 0, o = (o = o + Math.imul(E, tt) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, tt) | 0, n = n + Math.imul(N, et) | 0, o = (o = o + Math.imul(N, nt) | 0) + Math.imul(k, et) | 0, h = h + Math.imul(k, nt) | 0, n = n + Math.imul(_, st) | 0, o = (o = o + Math.imul(_, ht) | 0) + Math.imul(P, st) | 0, h = h + Math.imul(P, ht) | 0, n = n + Math.imul(M, at) | 0, o = (o = o + Math.imul(M, lt) | 0) + Math.imul(w, at) | 0, h = h + Math.imul(w, lt) | 0;
                        var Tt = (m + (n = n + Math.imul(d, ft) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, ct) | 0) + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(G, K), o = (o = Math.imul(G, V)) + Math.imul(Z, K) | 0, h = Math.imul(Z, V), n = n + Math.imul(F, $) | 0, o = (o = o + Math.imul(F, Q) | 0) + Math.imul(O, $) | 0, h = h + Math.imul(O, Q) | 0, n = n + Math.imul(B, Y) | 0, o = (o = o + Math.imul(B, tt) | 0) + Math.imul(L, Y) | 0, h = h + Math.imul(L, tt) | 0, n = n + Math.imul(E, et) | 0, o = (o = o + Math.imul(E, nt) | 0) + Math.imul(S, et) | 0, h = h + Math.imul(S, nt) | 0, n = n + Math.imul(N, st) | 0, o = (o = o + Math.imul(N, ht) | 0) + Math.imul(k, st) | 0, h = h + Math.imul(k, ht) | 0, n = n + Math.imul(_, at) | 0, o = (o = o + Math.imul(_, lt) | 0) + Math.imul(P, at) | 0, h = h + Math.imul(P, lt) | 0, n = n + Math.imul(M, ft) | 0, o = (o = o + Math.imul(M, ct) | 0) + Math.imul(w, ft) | 0, h = h + Math.imul(w, ct) | 0;
                        var Bt = (m + (n = n + Math.imul(d, gt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, vt) | 0) + Math.imul(c, gt) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, vt) | 0) + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(D, K), o = (o = Math.imul(D, V)) + Math.imul(j, K) | 0, h = Math.imul(j, V), n = n + Math.imul(G, $) | 0, o = (o = o + Math.imul(G, Q) | 0) + Math.imul(Z, $) | 0, h = h + Math.imul(Z, Q) | 0, n = n + Math.imul(F, Y) | 0, o = (o = o + Math.imul(F, tt) | 0) + Math.imul(O, Y) | 0, h = h + Math.imul(O, tt) | 0, n = n + Math.imul(B, et) | 0, o = (o = o + Math.imul(B, nt) | 0) + Math.imul(L, et) | 0, h = h + Math.imul(L, nt) | 0, n = n + Math.imul(E, st) | 0, o = (o = o + Math.imul(E, ht) | 0) + Math.imul(S, st) | 0, h = h + Math.imul(S, ht) | 0, n = n + Math.imul(N, at) | 0, o = (o = o + Math.imul(N, lt) | 0) + Math.imul(k, at) | 0, h = h + Math.imul(k, lt) | 0, n = n + Math.imul(_, ft) | 0, o = (o = o + Math.imul(_, ct) | 0) + Math.imul(P, ft) | 0, h = h + Math.imul(P, ct) | 0, n = n + Math.imul(M, gt) | 0, o = (o = o + Math.imul(M, vt) | 0) + Math.imul(w, gt) | 0, h = h + Math.imul(w, vt) | 0;
                        var Lt = (m + (n = n + Math.imul(d, wt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, yt) | 0) + Math.imul(c, wt) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, yt) | 0) + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(z, K), o = (o = Math.imul(z, V)) + Math.imul(H, K) | 0, h = Math.imul(H, V), n = n + Math.imul(D, $) | 0, o = (o = o + Math.imul(D, Q) | 0) + Math.imul(j, $) | 0, h = h + Math.imul(j, Q) | 0, n = n + Math.imul(G, Y) | 0, o = (o = o + Math.imul(G, tt) | 0) + Math.imul(Z, Y) | 0, h = h + Math.imul(Z, tt) | 0, n = n + Math.imul(F, et) | 0, o = (o = o + Math.imul(F, nt) | 0) + Math.imul(O, et) | 0, h = h + Math.imul(O, nt) | 0, n = n + Math.imul(B, st) | 0, o = (o = o + Math.imul(B, ht) | 0) + Math.imul(L, st) | 0, h = h + Math.imul(L, ht) | 0, n = n + Math.imul(E, at) | 0, o = (o = o + Math.imul(E, lt) | 0) + Math.imul(S, at) | 0, h = h + Math.imul(S, lt) | 0, n = n + Math.imul(N, ft) | 0, o = (o = o + Math.imul(N, ct) | 0) + Math.imul(k, ft) | 0, h = h + Math.imul(k, ct) | 0, n = n + Math.imul(_, gt) | 0, o = (o = o + Math.imul(_, vt) | 0) + Math.imul(P, gt) | 0, h = h + Math.imul(P, vt) | 0, n = n + Math.imul(M, wt) | 0, o = (o = o + Math.imul(M, yt) | 0) + Math.imul(w, wt) | 0, h = h + Math.imul(w, yt) | 0;
                        var Rt = (m + (n = n + Math.imul(d, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, Pt) | 0) + Math.imul(c, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(c, Pt) | 0) + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(z, $), o = (o = Math.imul(z, Q)) + Math.imul(H, $) | 0, h = Math.imul(H, Q), n = n + Math.imul(D, Y) | 0, o = (o = o + Math.imul(D, tt) | 0) + Math.imul(j, Y) | 0, h = h + Math.imul(j, tt) | 0, n = n + Math.imul(G, et) | 0, o = (o = o + Math.imul(G, nt) | 0) + Math.imul(Z, et) | 0, h = h + Math.imul(Z, nt) | 0, n = n + Math.imul(F, st) | 0, o = (o = o + Math.imul(F, ht) | 0) + Math.imul(O, st) | 0, h = h + Math.imul(O, ht) | 0, n = n + Math.imul(B, at) | 0, o = (o = o + Math.imul(B, lt) | 0) + Math.imul(L, at) | 0, h = h + Math.imul(L, lt) | 0, n = n + Math.imul(E, ft) | 0, o = (o = o + Math.imul(E, ct) | 0) + Math.imul(S, ft) | 0, h = h + Math.imul(S, ct) | 0, n = n + Math.imul(N, gt) | 0, o = (o = o + Math.imul(N, vt) | 0) + Math.imul(k, gt) | 0, h = h + Math.imul(k, vt) | 0, n = n + Math.imul(_, wt) | 0, o = (o = o + Math.imul(_, yt) | 0) + Math.imul(P, wt) | 0, h = h + Math.imul(P, yt) | 0;
                        var Ft = (m + (n = n + Math.imul(M, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(M, Pt) | 0) + Math.imul(w, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(w, Pt) | 0) + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, n = Math.imul(z, Y), o = (o = Math.imul(z, tt)) + Math.imul(H, Y) | 0, h = Math.imul(H, tt), n = n + Math.imul(D, et) | 0, o = (o = o + Math.imul(D, nt) | 0) + Math.imul(j, et) | 0, h = h + Math.imul(j, nt) | 0, n = n + Math.imul(G, st) | 0, o = (o = o + Math.imul(G, ht) | 0) + Math.imul(Z, st) | 0, h = h + Math.imul(Z, ht) | 0, n = n + Math.imul(F, at) | 0, o = (o = o + Math.imul(F, lt) | 0) + Math.imul(O, at) | 0, h = h + Math.imul(O, lt) | 0, n = n + Math.imul(B, ft) | 0, o = (o = o + Math.imul(B, ct) | 0) + Math.imul(L, ft) | 0, h = h + Math.imul(L, ct) | 0, n = n + Math.imul(E, gt) | 0, o = (o = o + Math.imul(E, vt) | 0) + Math.imul(S, gt) | 0, h = h + Math.imul(S, vt) | 0, n = n + Math.imul(N, wt) | 0, o = (o = o + Math.imul(N, yt) | 0) + Math.imul(k, wt) | 0, h = h + Math.imul(k, yt) | 0;
                        var Ot = (m + (n = n + Math.imul(_, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(_, Pt) | 0) + Math.imul(P, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(P, Pt) | 0) + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(z, et), o = (o = Math.imul(z, nt)) + Math.imul(H, et) | 0, h = Math.imul(H, nt), n = n + Math.imul(D, st) | 0, o = (o = o + Math.imul(D, ht) | 0) + Math.imul(j, st) | 0, h = h + Math.imul(j, ht) | 0, n = n + Math.imul(G, at) | 0, o = (o = o + Math.imul(G, lt) | 0) + Math.imul(Z, at) | 0, h = h + Math.imul(Z, lt) | 0, n = n + Math.imul(F, ft) | 0, o = (o = o + Math.imul(F, ct) | 0) + Math.imul(O, ft) | 0, h = h + Math.imul(O, ct) | 0, n = n + Math.imul(B, gt) | 0, o = (o = o + Math.imul(B, vt) | 0) + Math.imul(L, gt) | 0, h = h + Math.imul(L, vt) | 0, n = n + Math.imul(E, wt) | 0, o = (o = o + Math.imul(E, yt) | 0) + Math.imul(S, wt) | 0, h = h + Math.imul(S, yt) | 0;
                        var It = (m + (n = n + Math.imul(N, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(N, Pt) | 0) + Math.imul(k, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(k, Pt) | 0) + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(z, st), o = (o = Math.imul(z, ht)) + Math.imul(H, st) | 0, h = Math.imul(H, ht), n = n + Math.imul(D, at) | 0, o = (o = o + Math.imul(D, lt) | 0) + Math.imul(j, at) | 0, h = h + Math.imul(j, lt) | 0, n = n + Math.imul(G, ft) | 0, o = (o = o + Math.imul(G, ct) | 0) + Math.imul(Z, ft) | 0, h = h + Math.imul(Z, ct) | 0, n = n + Math.imul(F, gt) | 0, o = (o = o + Math.imul(F, vt) | 0) + Math.imul(O, gt) | 0, h = h + Math.imul(O, vt) | 0, n = n + Math.imul(B, wt) | 0, o = (o = o + Math.imul(B, yt) | 0) + Math.imul(L, wt) | 0, h = h + Math.imul(L, yt) | 0;
                        var Gt = (m + (n = n + Math.imul(E, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(E, Pt) | 0) + Math.imul(S, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(S, Pt) | 0) + (o >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, n = Math.imul(z, at), o = (o = Math.imul(z, lt)) + Math.imul(H, at) | 0, h = Math.imul(H, lt), n = n + Math.imul(D, ft) | 0, o = (o = o + Math.imul(D, ct) | 0) + Math.imul(j, ft) | 0, h = h + Math.imul(j, ct) | 0, n = n + Math.imul(G, gt) | 0, o = (o = o + Math.imul(G, vt) | 0) + Math.imul(Z, gt) | 0, h = h + Math.imul(Z, vt) | 0, n = n + Math.imul(F, wt) | 0, o = (o = o + Math.imul(F, yt) | 0) + Math.imul(O, wt) | 0, h = h + Math.imul(O, yt) | 0;
                        var qt = (m + (n = n + Math.imul(B, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(B, Pt) | 0) + Math.imul(L, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(L, Pt) | 0) + (o >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(z, ft), o = (o = Math.imul(z, ct)) + Math.imul(H, ft) | 0, h = Math.imul(H, ct), n = n + Math.imul(D, gt) | 0, o = (o = o + Math.imul(D, vt) | 0) + Math.imul(j, gt) | 0, h = h + Math.imul(j, vt) | 0, n = n + Math.imul(G, wt) | 0, o = (o = o + Math.imul(G, yt) | 0) + Math.imul(Z, wt) | 0, h = h + Math.imul(Z, yt) | 0;
                        var Zt = (m + (n = n + Math.imul(F, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(F, Pt) | 0) + Math.imul(O, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(O, Pt) | 0) + (o >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, n = Math.imul(z, gt), o = (o = Math.imul(z, vt)) + Math.imul(H, gt) | 0, h = Math.imul(H, vt), n = n + Math.imul(D, wt) | 0, o = (o = o + Math.imul(D, yt) | 0) + Math.imul(j, wt) | 0, h = h + Math.imul(j, yt) | 0;
                        var Ut = (m + (n = n + Math.imul(G, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(G, Pt) | 0) + Math.imul(Z, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(Z, Pt) | 0) + (o >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(z, wt), o = (o = Math.imul(z, yt)) + Math.imul(H, wt) | 0, h = Math.imul(H, yt);
                        var Dt = (m + (n = n + Math.imul(D, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(D, Pt) | 0) + Math.imul(j, _t) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(j, Pt) | 0) + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863;
                        var jt = (m + (n = Math.imul(z, _t)) | 0) + ((8191 & (o = (o = Math.imul(z, Pt)) + Math.imul(H, _t) | 0)) << 13) | 0;
                        return m = ((h = Math.imul(H, Pt)) + (o >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, l[0] = xt, l[1] = Nt, l[2] = kt, l[3] = At, l[4] = Et, l[5] = St, l[6] = Tt, l[7] = Bt, l[8] = Lt, l[9] = Rt, l[10] = Ft, l[11] = Ot, l[12] = It, l[13] = Gt, l[14] = qt, l[15] = Zt, l[16] = Ut, l[17] = Dt, l[18] = jt, 0 !== m && (l[19] = m, e.length++), e
                    };

                    function x(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, o = 0, h = 0; h < e.length - 1; h++) {
                            var l = o;
                            o = 0;
                            for (var m = 67108863 & n, f = Math.min(h, r.length - 1), d = Math.max(0, h - t.length + 1); d <= f; d++) {
                                var i = h - d,
                                    c = (0 | t.words[i]) * (0 | r.words[d]),
                                    v = 67108863 & c;
                                m = 67108863 & (v = v + m | 0), o += (l = (l = l + (c / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, l &= 67108863
                            }
                            e.words[h] = m, n = l, l = o
                        }
                        return 0 !== n ? e.words[h] = n : e.length--, e._strip()
                    }

                    function N(t, r, e) {
                        return x(t, r, e)
                    }

                    function k(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (P = _), h.prototype.mulTo = function(t, r) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? P(this, t, r) : e < 63 ? _(this, t, r) : e < 1024 ? x(this, t, r) : N(this, t, r)
                    }, k.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = h.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, e, t);
                        return r
                    }, k.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, k.prototype.permute = function(t, r, e, n, o, h) {
                        for (var i = 0; i < h; i++) n[i] = r[t[i]], o[i] = e[t[i]]
                    }, k.prototype.transform = function(t, r, e, n, o, h) {
                        this.permute(h, t, r, e, n, o);
                        for (var s = 1; s < o; s <<= 1)
                            for (var l = s << 1, m = Math.cos(2 * Math.PI / l), f = Math.sin(2 * Math.PI / l), p = 0; p < o; p += l)
                                for (var d = m, c = f, v = 0; v < s; v++) {
                                    var M = e[p + v],
                                        w = n[p + v],
                                        y = e[p + v + s],
                                        _ = n[p + v + s],
                                        P = d * y - c * _;
                                    _ = d * _ + c * y, y = P, e[p + v] = M + y, n[p + v] = w + _, e[p + v + s] = M - y, n[p + v + s] = w - _, v !== l && (P = m * d - f * c, c = m * c + f * d, d = P)
                                }
                    }, k.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, k.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var i = 0; i < e / 2; i++) {
                                var n = t[i];
                                t[i] = t[e - i - 1], t[e - i - 1] = n, n = r[i], r[i] = -r[e - i - 1], r[e - i - 1] = -n
                            }
                    }, k.prototype.normalize13b = function(t, r) {
                        for (var e = 0, i = 0; i < r / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + e;
                            t[i] = 67108863 & n, e = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, k.prototype.convert13b = function(t, r, e, o) {
                        for (var h = 0, i = 0; i < r; i++) h += 0 | t[i], e[2 * i] = 8191 & h, h >>>= 13, e[2 * i + 1] = 8191 & h, h >>>= 13;
                        for (i = 2 * r; i < o; ++i) e[i] = 0;
                        n(0 === h), n(0 == (-8192 & h))
                    }, k.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, k.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            o = this.makeRBT(n),
                            h = this.stub(n),
                            l = new Array(n),
                            m = new Array(n),
                            f = new Array(n),
                            d = new Array(n),
                            c = new Array(n),
                            v = new Array(n),
                            M = e.words;
                        M.length = n, this.convert13b(t.words, t.length, l, n), this.convert13b(r.words, r.length, d, n), this.transform(l, h, m, f, n, o), this.transform(d, h, c, v, n, o);
                        for (var i = 0; i < n; i++) {
                            var w = m[i] * c[i] - f[i] * v[i];
                            f[i] = m[i] * v[i] + f[i] * c[i], m[i] = w
                        }
                        return this.conjugate(m, f, n), this.transform(m, f, M, h, n, o), this.conjugate(M, h, n), this.normalize13b(M, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e._strip()
                    }, h.prototype.mul = function(t) {
                        var r = new h(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, h.prototype.mulf = function(t) {
                        var r = new h(null);
                        return r.words = new Array(this.length + t.length), N(this, t, r)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var e = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t,
                                h = (67108863 & o) + (67108863 & e);
                            e >>= 26, e += o / 67108864 | 0, e += h >>> 26, this.words[i] = 67108863 & h
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), r ? this.ineg() : this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                                var n = e / 26 | 0,
                                    o = e % 26;
                                r[e] = t.words[n] >>> o & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new h(1);
                        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
                        if (++i < r.length)
                            for (var q = e.sqr(); i < r.length; i++, q = q.sqr()) 0 !== r[i] && (e = e.mul(q));
                        return e
                    }, h.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            s = (t - r) / 26,
                            e = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var h = this.words[i] & e,
                                    l = (0 | this.words[i]) - h << r;
                                this.words[i] = l | o, o = h >>> 26 - r
                            }
                            o && (this.words[i] = o, this.length++)
                        }
                        if (0 !== s) {
                            for (i = this.length - 1; i >= 0; i--) this.words[i + s] = this.words[i];
                            for (i = 0; i < s; i++) this.words[i] = 0;
                            this.length += s
                        }
                        return this._strip()
                    }, h.prototype.ishln = function(t) {
                        return n(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, r, e) {
                        var o;
                        n("number" == typeof t && t >= 0), o = r ? (r - r % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> h << h,
                            l = e;
                        if (o -= s, o = Math.max(0, o), l) {
                            for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                            l.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var m = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== m || i >= o); i--) {
                            var f = 0 | this.words[i];
                            this.words[i] = m << 26 - h | f >>> h, m = f & mask
                        }
                        return l && 0 !== m && (l.words[l.length++] = m), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, h.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
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
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, h.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== r && s++, this.length = Math.min(s, this.length), 0 !== r) {
                            var mask = 67108863 ^ 67108863 >>> r << r;
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
                    }, h.prototype._ishlnsubmul = function(t, r, e) {
                        var i, o, h = t.length + e;
                        this._expand(h);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + e]) + l;
                            var m = (0 | t.words[i]) * r;
                            l = ((o -= 67108863 & m) >> 26) - (m / 67108864 | 0), this.words[i + e] = 67108863 & o
                        }
                        for (; i < this.length - e; i++) l = (o = (0 | this.words[i + e]) + l) >> 26, this.words[i + e] = 67108863 & o;
                        if (0 === l) return this._strip();
                        for (n(-1 === l), l = 0, i = 0; i < this.length; i++) l = (o = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, h.prototype._wordDiv = function(t, r) {
                        var e = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            n = 0 | b.words[b.length - 1];
                        0 !== (e = 26 - this._countBits(n)) && (b = b.ushln(e), a.iushln(e), n = 0 | b.words[b.length - 1]);
                        var q, o = a.length - b.length;
                        if ("mod" !== r) {
                            (q = new h(null)).length = o + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, o);
                        0 === l.negative && (a = l, q && (q.words[o] = 1));
                        for (var m = o - 1; m >= 0; m--) {
                            var f = 67108864 * (0 | a.words[b.length + m]) + (0 | a.words[b.length + m - 1]);
                            for (f = Math.min(f / n | 0, 67108863), a._ishlnsubmul(b, f, m); 0 !== a.negative;) f--, a.negative = 0, a._ishlnsubmul(b, 1, m), a.isZero() || (a.negative ^= 1);
                            q && (q.words[m] = f)
                        }
                        return q && q._strip(), a._strip(), "div" !== r && 0 !== e && a.iushrn(e), {
                            div: q || null,
                            mod: a
                        }
                    }, h.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, r), "mod" !== r && (div = l.div.neg()), "div" !== r && (o = l.mod.neg(), e && 0 !== o.negative && o.iadd(t)), {
                            div: div,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), r), "mod" !== r && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), r), "div" !== r && (o = l.mod.neg(), e && 0 !== o.negative && o.isub(t)), {
                            div: l.div,
                            mod: o
                        }) : t.length > this.length || this.cmp(t) < 0 ? {
                            div: new h(0),
                            mod: this
                        } : 1 === t.length ? "div" === r ? {
                            div: this.divn(t.words[0]),
                            mod: null
                        } : "mod" === r ? {
                            div: null,
                            mod: new h(this.modrn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modrn(t.words[0]))
                        } : this._wordDiv(t, r);
                        var div, o, l
                    }, h.prototype.div = function(t) {
                        return this.divmod(t, "div", !1).div
                    }, h.prototype.mod = function(t) {
                        return this.divmod(t, "mod", !1).mod
                    }, h.prototype.umod = function(t) {
                        return this.divmod(t, "mod", !0).mod
                    }, h.prototype.divRound = function(t) {
                        var r = this.divmod(t);
                        if (r.mod.isZero()) return r.div;
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            o = t.andln(1),
                            h = e.cmp(n);
                        return h < 0 || 1 === o && 0 === h ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, h.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var p = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (p * e + (0 | this.words[i])) % t;
                        return r ? -e : e
                    }, h.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, h.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var o = (0 | this.words[i]) + 67108864 * e;
                            this.words[i] = o / t | 0, e = o % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var t = this,
                            r = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var e = new h(1), o = new h(0), l = new h(0), m = new h(1), g = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++g;
                        for (var f = r.clone(), d = t.clone(); !t.isZero();) {
                            for (var i = 0, c = 1; 0 == (t.words[0] & c) && i < 26; ++i, c <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(e.isOdd() || o.isOdd()) && (e.iadd(f), o.isub(d)), e.iushrn(1), o.iushrn(1);
                            for (var v = 0, M = 1; 0 == (r.words[0] & M) && v < 26; ++v, M <<= 1);
                            if (v > 0)
                                for (r.iushrn(v); v-- > 0;)(l.isOdd() || m.isOdd()) && (l.iadd(f), m.isub(d)), l.iushrn(1), m.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), e.isub(l), o.isub(m)) : (r.isub(t), l.isub(e), m.isub(o))
                        }
                        return {
                            a: l,
                            b: m,
                            gcd: r.iushln(g)
                        }
                    }, h.prototype._invmp = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, r = new h(1), e = new h(0), o = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) r.isOdd() && r.iadd(o), r.iushrn(1);
                            for (var m = 0, f = 1; 0 == (b.words[0] & f) && m < 26; ++m, f <<= 1);
                            if (m > 0)
                                for (b.iushrn(m); m-- > 0;) e.isOdd() && e.iadd(o), e.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), r.isub(e)) : (b.isub(a), e.isub(r))
                        }
                        return (t = 0 === a.cmpn(1) ? r : e).cmpn(0) < 0 && t.iadd(p), t
                    }, h.prototype.gcd = function(t) {
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
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var e = q, i = s; 0 !== e && i < this.length; i++) {
                            var o = 0 | this.words[i];
                            e = (o += e) >>> 26, o &= 67108863, this.words[i] = o
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
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
                    }, h.prototype.cmp = function(t) {
                        if (0 !== this.negative && 0 === t.negative) return -1;
                        if (0 === this.negative && 0 !== t.negative) return 1;
                        var r = this.ucmp(t);
                        return 0 !== this.negative ? 0 | -r : r
                    }, h.prototype.ucmp = function(t) {
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
                        return new R(t)
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
                    var A = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function E(t, p) {
                        this.name = t, this.p = new h(p, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function S() {
                        E.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function T() {
                        E.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function B() {
                        E.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function L() {
                        E.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function R(t) {
                        if ("string" == typeof t) {
                            var r = h._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function F(t) {
                        R.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    E.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, E.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, E.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, E.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, o(S, E), S.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var e = 0 | input.words[i];
                            input.words[i - 10] = (e & mask) << 4 | r >>> 22, r = e
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, S.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 0 | t.words[i];
                            r += 977 * e, t.words[i] = 67108863 & r, r = 64 * e + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, o(T, E), o(B, E), o(L, E), L.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 19 * (0 | t.words[i]) + r,
                                n = 67108863 & e;
                            e >>>= 26, t.words[i] = n, r = e
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, h._prime = function(t) {
                        if (A[t]) return A[t];
                        var r;
                        if ("k256" === t) r = new S;
                        else if ("p224" === t) r = new T;
                        else if ("p192" === t) r = new B;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new L
                        }
                        return A[t] = r, r
                    }, R.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, R.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, R.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (c(a, a.umod(this.m)._forceRed(this)), a)
                    }, R.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, R.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, R.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, R.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, R.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, R.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, R.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, R.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, R.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, R.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, R.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new h(1)).iushrn(2);
                            return this.pow(a, r)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        n(!q.isZero());
                        var e = new h(1).toRed(this),
                            o = e.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            m = this.m.bitLength();
                        for (m = new h(2 * m * m).toRed(this); 0 !== this.pow(m, l).cmp(o);) m.redIAdd(o);
                        for (var f = this.pow(m, q), d = this.pow(a, q.addn(1).iushrn(1)), c = this.pow(a, q), v = s; 0 !== c.cmp(e);) {
                            for (var M = c, i = 0; 0 !== M.cmp(e); i++) M = M.redSqr();
                            n(i < v);
                            var b = this.pow(f, new h(1).iushln(v - i - 1));
                            d = d.redMul(b), f = b.redSqr(), c = c.redMul(f), v = i
                        }
                        return d
                    }, R.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, R.prototype.pow = function(a, t) {
                        if (t.isZero()) return new h(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var r = new Array(16);
                        r[0] = new h(1).toRed(this), r[1] = a;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], a);
                        var e = r[0],
                            n = 0,
                            o = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var m = t.words[i], f = l - 1; f >= 0; f--) {
                                var d = m >> f & 1;
                                e !== r[0] && (e = this.sqr(e)), 0 !== d || 0 !== n ? (n <<= 1, n |= d, (4 === ++o || 0 === i && 0 === f) && (e = this.mul(e, r[n]), o = 0, n = 0)) : o = 0
                            }
                            l = 26
                        }
                        return e
                    }, R.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, R.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, h.mont = function(t) {
                        return new F(t)
                    }, o(F, R), F.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, F.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, F.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, F.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new h(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, F.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(82)(t))
        },
        650: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return d
            })), e.d(r, "b", (function() {
                return c
            }));
            var n = e(15),
                o = e(1);
            var h = function(t, r, e, n) {
                return new(e || (e = Promise))((function(o, h) {
                    function l(t) {
                        try {
                            f(n.next(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function m(t) {
                        try {
                            f(n.throw(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function f(t) {
                        var r;
                        t.done ? o(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                            t(r)
                        }))).then(l, m)
                    }
                    f((n = n.apply(t, r || [])).next())
                }))
            };
            const l = new o.Logger("abstract-signer/5.7.0"),
                m = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                f = [o.Logger.errors.INSUFFICIENT_FUNDS, o.Logger.errors.NONCE_EXPIRED, o.Logger.errors.REPLACEMENT_UNDERPRICED];
            class d {
                constructor() {
                    l.checkAbstract(new.target, d), Object(n.d)(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return h(this, void 0, void 0, (function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    }))
                }
                getTransactionCount(t) {
                    return h(this, void 0, void 0, (function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    }))
                }
                estimateGas(t) {
                    return h(this, void 0, void 0, (function*() {
                        this._checkProvider("estimateGas");
                        const r = yield Object(n.f)(this.checkTransaction(t));
                        return yield this.provider.estimateGas(r)
                    }))
                }
                call(t, r) {
                    return h(this, void 0, void 0, (function*() {
                        this._checkProvider("call");
                        const e = yield Object(n.f)(this.checkTransaction(t));
                        return yield this.provider.call(e, r)
                    }))
                }
                sendTransaction(t) {
                    return h(this, void 0, void 0, (function*() {
                        this._checkProvider("sendTransaction");
                        const r = yield this.populateTransaction(t), e = yield this.signTransaction(r);
                        return yield this.provider.sendTransaction(e)
                    }))
                }
                getChainId() {
                    return h(this, void 0, void 0, (function*() {
                        this._checkProvider("getChainId");
                        return (yield this.provider.getNetwork()).chainId
                    }))
                }
                getGasPrice() {
                    return h(this, void 0, void 0, (function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    }))
                }
                getFeeData() {
                    return h(this, void 0, void 0, (function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    }))
                }
                resolveName(t) {
                    return h(this, void 0, void 0, (function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    }))
                }
                checkTransaction(t) {
                    for (const r in t) - 1 === m.indexOf(r) && l.throwArgumentError("invalid transaction key: " + r, "transaction", t);
                    const r = Object(n.g)(t);
                    return null == r.from ? r.from = this.getAddress() : r.from = Promise.all([Promise.resolve(r.from), this.getAddress()]).then((r => (r[0].toLowerCase() !== r[1].toLowerCase() && l.throwArgumentError("from address mismatch", "transaction", t), r[0]))), r
                }
                populateTransaction(t) {
                    return h(this, void 0, void 0, (function*() {
                        const r = yield Object(n.f)(this.checkTransaction(t));
                        null != r.to && (r.to = Promise.resolve(r.to).then((t => h(this, void 0, void 0, (function*() {
                            if (null == t) return null;
                            const address = yield this.resolveName(t);
                            return null == address && l.throwArgumentError("provided ENS name resolves to null", "tx.to", t), address
                        })))), r.to.catch((t => {})));
                        const e = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
                        if (null == r.gasPrice || 2 !== r.type && !e ? 0 !== r.type && 1 !== r.type || !e || l.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t) : l.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t), 2 !== r.type && null != r.type || null == r.maxFeePerGas || null == r.maxPriorityFeePerGas)
                            if (0 === r.type || 1 === r.type) null == r.gasPrice && (r.gasPrice = this.getGasPrice());
                            else {
                                const t = yield this.getFeeData();
                                if (null == r.type)
                                    if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                                        if (r.type = 2, null != r.gasPrice) {
                                            const t = r.gasPrice;
                                            delete r.gasPrice, r.maxFeePerGas = t, r.maxPriorityFeePerGas = t
                                        } else null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                                else null != t.gasPrice ? (e && l.throwError("network does not support EIP-1559", o.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == r.gasPrice && (r.gasPrice = t.gasPrice), r.type = 0) : l.throwError("failed to get consistent fee data", o.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                });
                                else 2 === r.type && (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas), null == r.maxPriorityFeePerGas && (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                            }
                        else r.type = 2;
                        return null == r.nonce && (r.nonce = this.getTransactionCount("pending")), null == r.gasLimit && (r.gasLimit = this.estimateGas(r).catch((t => {
                            if (f.indexOf(t.code) >= 0) throw t;
                            return l.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", o.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: r
                            })
                        }))), null == r.chainId ? r.chainId = this.getChainId() : r.chainId = Promise.all([Promise.resolve(r.chainId), this.getChainId()]).then((r => (0 !== r[1] && r[0] !== r[1] && l.throwArgumentError("chainId address mismatch", "transaction", t), r[0]))), yield Object(n.f)(r)
                    }))
                }
                _checkProvider(t) {
                    this.provider || l.throwError("missing provider", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !(!t || !t._isSigner)
                }
            }
            class c extends d {
                constructor(address, t) {
                    super(), Object(n.d)(this, "address", address), Object(n.d)(this, "provider", t || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(t, r) {
                    return Promise.resolve().then((() => {
                        l.throwError(t, o.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: r
                        })
                    }))
                }
                signMessage(t) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(t) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(t, r, e) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(t) {
                    return new c(this.address, t)
                }
            }
        },
        652: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return A
            })), e.d(r, "b", (function() {
                return E
            }));
            var n = e(1115),
                o = e.n(n),
                h = e(2),
                l = e(1);
            var m = o.a.BN;
            const f = new l.Logger("bignumber/5.7.0"),
                d = {},
                c = 9007199254740991;
            let v = !1;
            class M {
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
                    return "-" === this._hex[0] ? M.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return y(_(this).add(_(t)))
                }
                sub(t) {
                    return y(_(this).sub(_(t)))
                }
                div(t) {
                    return M.from(t).isZero() && P("division-by-zero", "div"), y(_(this).div(_(t)))
                }
                mul(t) {
                    return y(_(this).mul(_(t)))
                }
                mod(t) {
                    const r = _(t);
                    return r.isNeg() && P("division-by-zero", "mod"), y(_(this).umod(r))
                }
                pow(t) {
                    const r = _(t);
                    return r.isNeg() && P("negative-power", "pow"), y(_(this).pow(r))
                }
                and(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && P("unbound-bitwise-result", "and"), y(_(this).and(r))
                }
                or(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && P("unbound-bitwise-result", "or"), y(_(this).or(r))
                }
                xor(t) {
                    const r = _(t);
                    return (this.isNegative() || r.isNeg()) && P("unbound-bitwise-result", "xor"), y(_(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && P("negative-width", "mask"), y(_(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && P("negative-width", "shl"), y(_(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && P("negative-width", "shr"), y(_(this).shrn(t))
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
                        P("overflow", "toNumber", this.toString())
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
                    return arguments.length > 0 && (10 === arguments[0] ? v || (v = !0, f.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? f.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", l.Logger.errors.UNEXPECTED_ARGUMENT, {}) : f.throwError("BigNumber.toString does not accept parameters", l.Logger.errors.UNEXPECTED_ARGUMENT, {})), _(this).toString(10)
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
                    if (t instanceof M) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new M(d, w(t)) : t.match(/^-?[0-9]+$/) ? new M(d, w(new m(t))) : f.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && P("underflow", "BigNumber.from", t), (t >= c || t <= -c) && P("overflow", "BigNumber.from", t), M.from(String(t));
                    const r = t;
                    if ("bigint" == typeof r) return M.from(r.toString());
                    if (Object(h.j)(r)) return M.from(Object(h.i)(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" == typeof t) return M.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" == typeof t && (Object(h.l)(t) || "-" === t[0] && Object(h.l)(t.substring(1)))) return M.from(t)
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
                return M.from(w(t))
            }

            function _(t) {
                const r = M.from(t).toHexString();
                return "-" === r[0] ? new m("-" + r.substring(3), 16) : new m(r.substring(2), 16)
            }

            function P(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), f.throwError(t, l.Logger.errors.NUMERIC_FAULT, n)
            }
            var x = e(15);
            var N = function(t, r, e, n) {
                return new(e || (e = Promise))((function(o, h) {
                    function l(t) {
                        try {
                            f(n.next(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function m(t) {
                        try {
                            f(n.throw(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function f(t) {
                        var r;
                        t.done ? o(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                            t(r)
                        }))).then(l, m)
                    }
                    f((n = n.apply(t, r || [])).next())
                }))
            };
            const k = new l.Logger("abstract-provider/5.7.0");
            class A extends x.a {
                static isForkEvent(t) {
                    return !(!t || !t._isForkEvent)
                }
            }
            class E {
                constructor() {
                    k.checkAbstract(new.target, E), Object(x.d)(this, "_isProvider", !0)
                }
                getFeeData() {
                    return N(this, void 0, void 0, (function*() {
                        const {
                            block: t,
                            gasPrice: r
                        } = yield Object(x.f)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch((t => null))
                        });
                        let e = null,
                            n = null,
                            o = null;
                        return t && t.baseFeePerGas && (e = t.baseFeePerGas, o = M.from("1500000000"), n = t.baseFeePerGas.mul(2).add(o)), {
                            lastBaseFeePerGas: e,
                            maxFeePerGas: n,
                            maxPriorityFeePerGas: o,
                            gasPrice: r
                        }
                    }))
                }
                addListener(t, r) {
                    return this.on(t, r)
                }
                removeListener(t, r) {
                    return this.off(t, r)
                }
                static isProvider(t) {
                    return !(!t || !t._isProvider)
                }
            }
        }
    }
]);