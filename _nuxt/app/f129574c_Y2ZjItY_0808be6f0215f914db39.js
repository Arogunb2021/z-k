(window.webpackJsonp = window.webpackJsonp || []).push([
    [130], {
        1116: function(t, e, r) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function o(t, e) {
                        t.super_ = e;
                        var r = function() {};
                        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                    }

                    function h(t, base, e) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (e = base, base = 10), this._init(t || 0, base || 10, e || "be"))
                    }
                    var l;
                    "object" == typeof t ? t.exports = h : e.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(1513).Buffer
                    } catch (t) {}

                    function m(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function c(t, e, r) {
                        var n = m(t, r);
                        return r - 1 >= e && (n |= m(t, r - 1) << 4), n
                    }

                    function d(t, e, r, o) {
                        for (var h = 0, b = 0, l = Math.min(t.length, r), i = e; i < l; i++) {
                            var m = t.charCodeAt(i) - 48;
                            h *= o, b = m >= 49 ? m - 49 + 10 : m >= 17 ? m - 17 + 10 : m, n(m >= 0 && b < o, "Invalid character"), h += b
                        }
                        return h
                    }

                    function f(t, e) {
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
                            var r, o, h = 0;
                            if ("be" === e)
                                for (i = t.length - 1, r = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[r] |= o << h & 67108863, this.words[r + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, r++);
                            else if ("le" === e)
                                for (i = 0, r = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[r] |= o << h & 67108863, this.words[r + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, r++);
                            return this._strip()
                        }, h.prototype._parseHex = function(t, e, r) {
                            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, o = 0,
                                h = 0;
                            if ("be" === r)
                                for (i = t.length - 1; i >= e; i -= 2) n = c(t, e, i) << o, this.words[h] |= 67108863 & n, o >= 18 ? (o -= 18, h += 1, this.words[h] |= n >>> 26) : o += 8;
                            else
                                for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = c(t, e, i) << o, this.words[h] |= 67108863 & n, o >= 18 ? (o -= 18, h += 1, this.words[h] |= n >>> 26) : o += 8;
                            this._strip()
                        }, h.prototype._parseBase = function(t, base, e) {
                            this.words = [0], this.length = 1;
                            for (var r = 0, n = 1; n <= 67108863; n *= base) r++;
                            r--, n = n / base | 0;
                            for (var o = t.length - e, h = o % r, l = Math.min(o, o - h) + e, m = 0, i = e; i < l; i += r) m = d(t, i, i + r, base), this.imuln(n), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                            if (0 !== h) {
                                var c = 1;
                                for (m = d(t, i, t.length, base), i = 0; i < h; i++) c *= base;
                                this.imuln(c), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                            }
                            this._strip()
                        }, h.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, h.prototype._move = function(t) {
                            f(t, this)
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
                        h.prototype[Symbol.for("nodejs.util.inspect.custom")] = y
                    } catch (t) {
                        h.prototype.inspect = y
                    } else h.prototype.inspect = y;

                    function y() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        M = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        w = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    h.prototype.toString = function(base, t) {
                        var e;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            e = "";
                            for (var r = 0, o = 0, i = 0; i < this.length; i++) {
                                var h = this.words[i],
                                    l = (16777215 & (h << r | o)).toString(16);
                                o = h >>> 24 - r & 16777215, (r += 2) >= 26 && (r -= 26, i--), e = 0 !== o || i !== this.length - 1 ? v[6 - l.length] + l + e : l + e
                            }
                            for (0 !== o && (e = o.toString(16) + e); e.length % t != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var m = M[base],
                                c = w[base];
                            e = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var f = d.modrn(c).toString(base);
                                e = (d = d.idivn(c)).isZero() ? f + e : v[m - f.length] + f + e
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
                    }, l && (h.prototype.toBuffer = function(t, e) {
                        return this.toArrayLike(l, t, e)
                    }), h.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    };

                    function S(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = t.length + e.length | 0;
                        r.length = n, n = n - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | e.words[0],
                            o = a * b,
                            h = 67108863 & o,
                            l = o / 67108864 | 0;
                        r.words[0] = h;
                        for (var m = 1; m < n; m++) {
                            for (var c = l >>> 26, d = 67108863 & l, f = Math.min(m, e.length - 1), y = Math.max(0, m - t.length + 1); y <= f; y++) {
                                var i = m - y | 0;
                                c += (o = (a = 0 | t.words[i]) * (b = 0 | e.words[y]) + d) / 67108864 | 0, d = 67108863 & o
                            }
                            r.words[m] = 0 | d, l = 0 | c
                        }
                        return 0 !== l ? r.words[m] = 0 | l : r.length--, r._strip()
                    }
                    h.prototype.toArrayLike = function(t, e, r) {
                        this._strip();
                        var o = this.byteLength(),
                            h = r || Math.max(1, o);
                        n(o <= h, "byte array longer than desired length"), n(h > 0, "Requested array length <= 0");
                        var l = function(t, e) {
                            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
                        }(t, h);
                        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](l, o), l
                    }, h.prototype._toArrayLikeLE = function(t, e) {
                        for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var h = this.words[i] << o | n;
                            t[r++] = 255 & h, r < t.length && (t[r++] = h >> 8 & 255), r < t.length && (t[r++] = h >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
                        }
                        if (r < t.length)
                            for (t[r++] = n; r < t.length;) t[r++] = 0
                    }, h.prototype._toArrayLikeBE = function(t, e) {
                        for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                            var h = this.words[i] << o | n;
                            t[r--] = 255 & h, r >= 0 && (t[r--] = h >> 8 & 255), r >= 0 && (t[r--] = h >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = h >> 24 & 255), n = 0, o = 0) : (n = h >>> 24, o += 2)
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
                            o = t % 26;
                        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << o : this.words[r] & ~(1 << o), this._strip()
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
                        var n, o, h, a = t.words,
                            b = e.words,
                            l = r.words,
                            m = 0,
                            c = 0 | a[0],
                            d = 8191 & c,
                            f = c >>> 13,
                            y = 0 | a[1],
                            v = 8191 & y,
                            M = y >>> 13,
                            w = 0 | a[2],
                            S = 8191 & w,
                            A = w >>> 13,
                            C = 0 | a[3],
                            E = 8191 & C,
                            k = C >>> 13,
                            B = 0 | a[4],
                            T = 8191 & B,
                            P = B >>> 13,
                            R = 0 | a[5],
                            O = 8191 & R,
                            _ = R >>> 13,
                            D = 0 | a[6],
                            x = 8191 & D,
                            L = D >>> 13,
                            F = 0 | a[7],
                            N = 8191 & F,
                            I = F >>> 13,
                            j = 0 | a[8],
                            G = 8191 & j,
                            H = j >>> 13,
                            W = 0 | a[9],
                            U = 8191 & W,
                            V = W >>> 13,
                            z = 0 | b[0],
                            J = 8191 & z,
                            Z = z >>> 13,
                            $ = 0 | b[1],
                            K = 8191 & $,
                            Q = $ >>> 13,
                            Y = 0 | b[2],
                            X = 8191 & Y,
                            tt = Y >>> 13,
                            et = 0 | b[3],
                            it = 8191 & et,
                            nt = et >>> 13,
                            ot = 0 | b[4],
                            at = 8191 & ot,
                            st = ot >>> 13,
                            ht = 0 | b[5],
                            ut = 8191 & ht,
                            lt = ht >>> 13,
                            mt = 0 | b[6],
                            ct = 8191 & mt,
                            ft = mt >>> 13,
                            pt = 0 | b[7],
                            gt = 8191 & pt,
                            yt = pt >>> 13,
                            vt = 0 | b[8],
                            Mt = 8191 & vt,
                            wt = vt >>> 13,
                            bt = 0 | b[9],
                            St = 8191 & bt,
                            At = bt >>> 13;
                        r.negative = t.negative ^ e.negative, r.length = 19;
                        var Ct = (m + (n = Math.imul(d, J)) | 0) + ((8191 & (o = (o = Math.imul(d, Z)) + Math.imul(f, J) | 0)) << 13) | 0;
                        m = ((h = Math.imul(f, Z)) + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, n = Math.imul(v, J), o = (o = Math.imul(v, Z)) + Math.imul(M, J) | 0, h = Math.imul(M, Z);
                        var Et = (m + (n = n + Math.imul(d, K) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, Q) | 0) + Math.imul(f, K) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, Q) | 0) + (o >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(S, J), o = (o = Math.imul(S, Z)) + Math.imul(A, J) | 0, h = Math.imul(A, Z), n = n + Math.imul(v, K) | 0, o = (o = o + Math.imul(v, Q) | 0) + Math.imul(M, K) | 0, h = h + Math.imul(M, Q) | 0;
                        var kt = (m + (n = n + Math.imul(d, X) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, tt) | 0) + (o >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(E, J), o = (o = Math.imul(E, Z)) + Math.imul(k, J) | 0, h = Math.imul(k, Z), n = n + Math.imul(S, K) | 0, o = (o = o + Math.imul(S, Q) | 0) + Math.imul(A, K) | 0, h = h + Math.imul(A, Q) | 0, n = n + Math.imul(v, X) | 0, o = (o = o + Math.imul(v, tt) | 0) + Math.imul(M, X) | 0, h = h + Math.imul(M, tt) | 0;
                        var Bt = (m + (n = n + Math.imul(d, it) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, nt) | 0) + Math.imul(f, it) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, nt) | 0) + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(T, J), o = (o = Math.imul(T, Z)) + Math.imul(P, J) | 0, h = Math.imul(P, Z), n = n + Math.imul(E, K) | 0, o = (o = o + Math.imul(E, Q) | 0) + Math.imul(k, K) | 0, h = h + Math.imul(k, Q) | 0, n = n + Math.imul(S, X) | 0, o = (o = o + Math.imul(S, tt) | 0) + Math.imul(A, X) | 0, h = h + Math.imul(A, tt) | 0, n = n + Math.imul(v, it) | 0, o = (o = o + Math.imul(v, nt) | 0) + Math.imul(M, it) | 0, h = h + Math.imul(M, nt) | 0;
                        var Tt = (m + (n = n + Math.imul(d, at) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, st) | 0) + Math.imul(f, at) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, st) | 0) + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(O, J), o = (o = Math.imul(O, Z)) + Math.imul(_, J) | 0, h = Math.imul(_, Z), n = n + Math.imul(T, K) | 0, o = (o = o + Math.imul(T, Q) | 0) + Math.imul(P, K) | 0, h = h + Math.imul(P, Q) | 0, n = n + Math.imul(E, X) | 0, o = (o = o + Math.imul(E, tt) | 0) + Math.imul(k, X) | 0, h = h + Math.imul(k, tt) | 0, n = n + Math.imul(S, it) | 0, o = (o = o + Math.imul(S, nt) | 0) + Math.imul(A, it) | 0, h = h + Math.imul(A, nt) | 0, n = n + Math.imul(v, at) | 0, o = (o = o + Math.imul(v, st) | 0) + Math.imul(M, at) | 0, h = h + Math.imul(M, st) | 0;
                        var Pt = (m + (n = n + Math.imul(d, ut) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, lt) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, lt) | 0) + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(x, J), o = (o = Math.imul(x, Z)) + Math.imul(L, J) | 0, h = Math.imul(L, Z), n = n + Math.imul(O, K) | 0, o = (o = o + Math.imul(O, Q) | 0) + Math.imul(_, K) | 0, h = h + Math.imul(_, Q) | 0, n = n + Math.imul(T, X) | 0, o = (o = o + Math.imul(T, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, n = n + Math.imul(E, it) | 0, o = (o = o + Math.imul(E, nt) | 0) + Math.imul(k, it) | 0, h = h + Math.imul(k, nt) | 0, n = n + Math.imul(S, at) | 0, o = (o = o + Math.imul(S, st) | 0) + Math.imul(A, at) | 0, h = h + Math.imul(A, st) | 0, n = n + Math.imul(v, ut) | 0, o = (o = o + Math.imul(v, lt) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, lt) | 0;
                        var Rt = (m + (n = n + Math.imul(d, ct) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, ft) | 0) + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(N, J), o = (o = Math.imul(N, Z)) + Math.imul(I, J) | 0, h = Math.imul(I, Z), n = n + Math.imul(x, K) | 0, o = (o = o + Math.imul(x, Q) | 0) + Math.imul(L, K) | 0, h = h + Math.imul(L, Q) | 0, n = n + Math.imul(O, X) | 0, o = (o = o + Math.imul(O, tt) | 0) + Math.imul(_, X) | 0, h = h + Math.imul(_, tt) | 0, n = n + Math.imul(T, it) | 0, o = (o = o + Math.imul(T, nt) | 0) + Math.imul(P, it) | 0, h = h + Math.imul(P, nt) | 0, n = n + Math.imul(E, at) | 0, o = (o = o + Math.imul(E, st) | 0) + Math.imul(k, at) | 0, h = h + Math.imul(k, st) | 0, n = n + Math.imul(S, ut) | 0, o = (o = o + Math.imul(S, lt) | 0) + Math.imul(A, ut) | 0, h = h + Math.imul(A, lt) | 0, n = n + Math.imul(v, ct) | 0, o = (o = o + Math.imul(v, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
                        var Ot = (m + (n = n + Math.imul(d, gt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, yt) | 0) + Math.imul(f, gt) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, yt) | 0) + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(G, J), o = (o = Math.imul(G, Z)) + Math.imul(H, J) | 0, h = Math.imul(H, Z), n = n + Math.imul(N, K) | 0, o = (o = o + Math.imul(N, Q) | 0) + Math.imul(I, K) | 0, h = h + Math.imul(I, Q) | 0, n = n + Math.imul(x, X) | 0, o = (o = o + Math.imul(x, tt) | 0) + Math.imul(L, X) | 0, h = h + Math.imul(L, tt) | 0, n = n + Math.imul(O, it) | 0, o = (o = o + Math.imul(O, nt) | 0) + Math.imul(_, it) | 0, h = h + Math.imul(_, nt) | 0, n = n + Math.imul(T, at) | 0, o = (o = o + Math.imul(T, st) | 0) + Math.imul(P, at) | 0, h = h + Math.imul(P, st) | 0, n = n + Math.imul(E, ut) | 0, o = (o = o + Math.imul(E, lt) | 0) + Math.imul(k, ut) | 0, h = h + Math.imul(k, lt) | 0, n = n + Math.imul(S, ct) | 0, o = (o = o + Math.imul(S, ft) | 0) + Math.imul(A, ct) | 0, h = h + Math.imul(A, ft) | 0, n = n + Math.imul(v, gt) | 0, o = (o = o + Math.imul(v, yt) | 0) + Math.imul(M, gt) | 0, h = h + Math.imul(M, yt) | 0;
                        var _t = (m + (n = n + Math.imul(d, Mt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, wt) | 0) + Math.imul(f, Mt) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, wt) | 0) + (o >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(U, J), o = (o = Math.imul(U, Z)) + Math.imul(V, J) | 0, h = Math.imul(V, Z), n = n + Math.imul(G, K) | 0, o = (o = o + Math.imul(G, Q) | 0) + Math.imul(H, K) | 0, h = h + Math.imul(H, Q) | 0, n = n + Math.imul(N, X) | 0, o = (o = o + Math.imul(N, tt) | 0) + Math.imul(I, X) | 0, h = h + Math.imul(I, tt) | 0, n = n + Math.imul(x, it) | 0, o = (o = o + Math.imul(x, nt) | 0) + Math.imul(L, it) | 0, h = h + Math.imul(L, nt) | 0, n = n + Math.imul(O, at) | 0, o = (o = o + Math.imul(O, st) | 0) + Math.imul(_, at) | 0, h = h + Math.imul(_, st) | 0, n = n + Math.imul(T, ut) | 0, o = (o = o + Math.imul(T, lt) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, lt) | 0, n = n + Math.imul(E, ct) | 0, o = (o = o + Math.imul(E, ft) | 0) + Math.imul(k, ct) | 0, h = h + Math.imul(k, ft) | 0, n = n + Math.imul(S, gt) | 0, o = (o = o + Math.imul(S, yt) | 0) + Math.imul(A, gt) | 0, h = h + Math.imul(A, yt) | 0, n = n + Math.imul(v, Mt) | 0, o = (o = o + Math.imul(v, wt) | 0) + Math.imul(M, Mt) | 0, h = h + Math.imul(M, wt) | 0;
                        var Dt = (m + (n = n + Math.imul(d, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(d, At) | 0) + Math.imul(f, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(f, At) | 0) + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, n = Math.imul(U, K), o = (o = Math.imul(U, Q)) + Math.imul(V, K) | 0, h = Math.imul(V, Q), n = n + Math.imul(G, X) | 0, o = (o = o + Math.imul(G, tt) | 0) + Math.imul(H, X) | 0, h = h + Math.imul(H, tt) | 0, n = n + Math.imul(N, it) | 0, o = (o = o + Math.imul(N, nt) | 0) + Math.imul(I, it) | 0, h = h + Math.imul(I, nt) | 0, n = n + Math.imul(x, at) | 0, o = (o = o + Math.imul(x, st) | 0) + Math.imul(L, at) | 0, h = h + Math.imul(L, st) | 0, n = n + Math.imul(O, ut) | 0, o = (o = o + Math.imul(O, lt) | 0) + Math.imul(_, ut) | 0, h = h + Math.imul(_, lt) | 0, n = n + Math.imul(T, ct) | 0, o = (o = o + Math.imul(T, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0, n = n + Math.imul(E, gt) | 0, o = (o = o + Math.imul(E, yt) | 0) + Math.imul(k, gt) | 0, h = h + Math.imul(k, yt) | 0, n = n + Math.imul(S, Mt) | 0, o = (o = o + Math.imul(S, wt) | 0) + Math.imul(A, Mt) | 0, h = h + Math.imul(A, wt) | 0;
                        var xt = (m + (n = n + Math.imul(v, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(v, At) | 0) + Math.imul(M, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(M, At) | 0) + (o >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(U, X), o = (o = Math.imul(U, tt)) + Math.imul(V, X) | 0, h = Math.imul(V, tt), n = n + Math.imul(G, it) | 0, o = (o = o + Math.imul(G, nt) | 0) + Math.imul(H, it) | 0, h = h + Math.imul(H, nt) | 0, n = n + Math.imul(N, at) | 0, o = (o = o + Math.imul(N, st) | 0) + Math.imul(I, at) | 0, h = h + Math.imul(I, st) | 0, n = n + Math.imul(x, ut) | 0, o = (o = o + Math.imul(x, lt) | 0) + Math.imul(L, ut) | 0, h = h + Math.imul(L, lt) | 0, n = n + Math.imul(O, ct) | 0, o = (o = o + Math.imul(O, ft) | 0) + Math.imul(_, ct) | 0, h = h + Math.imul(_, ft) | 0, n = n + Math.imul(T, gt) | 0, o = (o = o + Math.imul(T, yt) | 0) + Math.imul(P, gt) | 0, h = h + Math.imul(P, yt) | 0, n = n + Math.imul(E, Mt) | 0, o = (o = o + Math.imul(E, wt) | 0) + Math.imul(k, Mt) | 0, h = h + Math.imul(k, wt) | 0;
                        var Lt = (m + (n = n + Math.imul(S, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(S, At) | 0) + Math.imul(A, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(A, At) | 0) + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(U, it), o = (o = Math.imul(U, nt)) + Math.imul(V, it) | 0, h = Math.imul(V, nt), n = n + Math.imul(G, at) | 0, o = (o = o + Math.imul(G, st) | 0) + Math.imul(H, at) | 0, h = h + Math.imul(H, st) | 0, n = n + Math.imul(N, ut) | 0, o = (o = o + Math.imul(N, lt) | 0) + Math.imul(I, ut) | 0, h = h + Math.imul(I, lt) | 0, n = n + Math.imul(x, ct) | 0, o = (o = o + Math.imul(x, ft) | 0) + Math.imul(L, ct) | 0, h = h + Math.imul(L, ft) | 0, n = n + Math.imul(O, gt) | 0, o = (o = o + Math.imul(O, yt) | 0) + Math.imul(_, gt) | 0, h = h + Math.imul(_, yt) | 0, n = n + Math.imul(T, Mt) | 0, o = (o = o + Math.imul(T, wt) | 0) + Math.imul(P, Mt) | 0, h = h + Math.imul(P, wt) | 0;
                        var Ft = (m + (n = n + Math.imul(E, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(E, At) | 0) + Math.imul(k, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(k, At) | 0) + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, n = Math.imul(U, at), o = (o = Math.imul(U, st)) + Math.imul(V, at) | 0, h = Math.imul(V, st), n = n + Math.imul(G, ut) | 0, o = (o = o + Math.imul(G, lt) | 0) + Math.imul(H, ut) | 0, h = h + Math.imul(H, lt) | 0, n = n + Math.imul(N, ct) | 0, o = (o = o + Math.imul(N, ft) | 0) + Math.imul(I, ct) | 0, h = h + Math.imul(I, ft) | 0, n = n + Math.imul(x, gt) | 0, o = (o = o + Math.imul(x, yt) | 0) + Math.imul(L, gt) | 0, h = h + Math.imul(L, yt) | 0, n = n + Math.imul(O, Mt) | 0, o = (o = o + Math.imul(O, wt) | 0) + Math.imul(_, Mt) | 0, h = h + Math.imul(_, wt) | 0;
                        var Nt = (m + (n = n + Math.imul(T, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(T, At) | 0) + Math.imul(P, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(P, At) | 0) + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(U, ut), o = (o = Math.imul(U, lt)) + Math.imul(V, ut) | 0, h = Math.imul(V, lt), n = n + Math.imul(G, ct) | 0, o = (o = o + Math.imul(G, ft) | 0) + Math.imul(H, ct) | 0, h = h + Math.imul(H, ft) | 0, n = n + Math.imul(N, gt) | 0, o = (o = o + Math.imul(N, yt) | 0) + Math.imul(I, gt) | 0, h = h + Math.imul(I, yt) | 0, n = n + Math.imul(x, Mt) | 0, o = (o = o + Math.imul(x, wt) | 0) + Math.imul(L, Mt) | 0, h = h + Math.imul(L, wt) | 0;
                        var It = (m + (n = n + Math.imul(O, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(O, At) | 0) + Math.imul(_, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(_, At) | 0) + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(U, ct), o = (o = Math.imul(U, ft)) + Math.imul(V, ct) | 0, h = Math.imul(V, ft), n = n + Math.imul(G, gt) | 0, o = (o = o + Math.imul(G, yt) | 0) + Math.imul(H, gt) | 0, h = h + Math.imul(H, yt) | 0, n = n + Math.imul(N, Mt) | 0, o = (o = o + Math.imul(N, wt) | 0) + Math.imul(I, Mt) | 0, h = h + Math.imul(I, wt) | 0;
                        var jt = (m + (n = n + Math.imul(x, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(x, At) | 0) + Math.imul(L, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(L, At) | 0) + (o >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(U, gt), o = (o = Math.imul(U, yt)) + Math.imul(V, gt) | 0, h = Math.imul(V, yt), n = n + Math.imul(G, Mt) | 0, o = (o = o + Math.imul(G, wt) | 0) + Math.imul(H, Mt) | 0, h = h + Math.imul(H, wt) | 0;
                        var Gt = (m + (n = n + Math.imul(N, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(N, At) | 0) + Math.imul(I, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(I, At) | 0) + (o >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, n = Math.imul(U, Mt), o = (o = Math.imul(U, wt)) + Math.imul(V, Mt) | 0, h = Math.imul(V, wt);
                        var Ht = (m + (n = n + Math.imul(G, St) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(G, At) | 0) + Math.imul(H, St) | 0)) << 13) | 0;
                        m = ((h = h + Math.imul(H, At) | 0) + (o >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863;
                        var Wt = (m + (n = Math.imul(U, St)) | 0) + ((8191 & (o = (o = Math.imul(U, At)) + Math.imul(V, St) | 0)) << 13) | 0;
                        return m = ((h = Math.imul(V, At)) + (o >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, l[0] = Ct, l[1] = Et, l[2] = kt, l[3] = Bt, l[4] = Tt, l[5] = Pt, l[6] = Rt, l[7] = Ot, l[8] = _t, l[9] = Dt, l[10] = xt, l[11] = Lt, l[12] = Ft, l[13] = Nt, l[14] = It, l[15] = jt, l[16] = Gt, l[17] = Ht, l[18] = Wt, 0 !== m && (l[19] = m, r.length++), r
                    };

                    function C(t, e, r) {
                        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                        for (var n = 0, o = 0, h = 0; h < r.length - 1; h++) {
                            var l = o;
                            o = 0;
                            for (var m = 67108863 & n, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
                                var i = h - d,
                                    f = (0 | t.words[i]) * (0 | e.words[d]),
                                    y = 67108863 & f;
                                m = 67108863 & (y = y + m | 0), o += (l = (l = l + (f / 67108864 | 0) | 0) + (y >>> 26) | 0) >>> 26, l &= 67108863
                            }
                            r.words[h] = m, n = l, l = o
                        }
                        return 0 !== n ? r.words[h] = n : r.length--, r._strip()
                    }

                    function E(t, e, r) {
                        return C(t, e, r)
                    }

                    function k(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (A = S), h.prototype.mulTo = function(t, e) {
                        var r = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? A(this, t, e) : r < 63 ? S(this, t, e) : r < 1024 ? C(this, t, e) : E(this, t, e)
                    }, k.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), r = h.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                        return e
                    }, k.prototype.revBin = function(t, e, r) {
                        if (0 === t || t === r - 1) return t;
                        for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                        return n
                    }, k.prototype.permute = function(t, e, r, n, o, h) {
                        for (var i = 0; i < h; i++) n[i] = e[t[i]], o[i] = r[t[i]]
                    }, k.prototype.transform = function(t, e, r, n, o, h) {
                        this.permute(h, t, e, r, n, o);
                        for (var s = 1; s < o; s <<= 1)
                            for (var l = s << 1, m = Math.cos(2 * Math.PI / l), c = Math.sin(2 * Math.PI / l), p = 0; p < o; p += l)
                                for (var d = m, f = c, y = 0; y < s; y++) {
                                    var v = r[p + y],
                                        M = n[p + y],
                                        w = r[p + y + s],
                                        S = n[p + y + s],
                                        A = d * w - f * S;
                                    S = d * S + f * w, w = A, r[p + y] = v + w, n[p + y] = M + S, r[p + y + s] = v - w, n[p + y + s] = M - S, y !== l && (A = m * d - c * f, f = m * f + c * d, d = A)
                                }
                    }, k.prototype.guessLen13b = function(t, e) {
                        var r = 1 | Math.max(e, t),
                            n = 1 & r,
                            i = 0;
                        for (r = r / 2 | 0; r; r >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, k.prototype.conjugate = function(t, e, r) {
                        if (!(r <= 1))
                            for (var i = 0; i < r / 2; i++) {
                                var n = t[i];
                                t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                            }
                    }, k.prototype.normalize13b = function(t, e) {
                        for (var r = 0, i = 0; i < e / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                            t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, k.prototype.convert13b = function(t, e, r, o) {
                        for (var h = 0, i = 0; i < e; i++) h += 0 | t[i], r[2 * i] = 8191 & h, h >>>= 13, r[2 * i + 1] = 8191 & h, h >>>= 13;
                        for (i = 2 * e; i < o; ++i) r[i] = 0;
                        n(0 === h), n(0 == (-8192 & h))
                    }, k.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, k.prototype.mulp = function(t, e, r) {
                        var n = 2 * this.guessLen13b(t.length, e.length),
                            o = this.makeRBT(n),
                            h = this.stub(n),
                            l = new Array(n),
                            m = new Array(n),
                            c = new Array(n),
                            d = new Array(n),
                            f = new Array(n),
                            y = new Array(n),
                            v = r.words;
                        v.length = n, this.convert13b(t.words, t.length, l, n), this.convert13b(e.words, e.length, d, n), this.transform(l, h, m, c, n, o), this.transform(d, h, f, y, n, o);
                        for (var i = 0; i < n; i++) {
                            var M = m[i] * f[i] - c[i] * y[i];
                            c[i] = m[i] * y[i] + c[i] * f[i], m[i] = M
                        }
                        return this.conjugate(m, c, n), this.transform(m, c, v, h, n, o), this.conjugate(v, h, n), this.normalize13b(v, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                    }, h.prototype.mul = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, h.prototype.mulf = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), E(this, t, e)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        var e = t < 0;
                        e && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var r = 0, i = 0; i < this.length; i++) {
                            var o = (0 | this.words[i]) * t,
                                h = (67108863 & o) + (67108863 & r);
                            r >>= 26, r += o / 67108864 | 0, r += h >>> 26, this.words[i] = 67108863 & h
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
                                    o = r % 26;
                                e[r] = t.words[n] >>> o & 1
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
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var h = this.words[i] & r,
                                    l = (0 | this.words[i]) - h << e;
                                this.words[i] = l | o, o = h >>> 26 - e
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
                    }, h.prototype.iushrn = function(t, e, r) {
                        var o;
                        n("number" == typeof t && t >= 0), o = e ? (e - e % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> h << h,
                            l = r;
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
                            var c = 0 | this.words[i];
                            this.words[i] = m << 26 - h | c >>> h, m = c & mask
                        }
                        return l && 0 !== m && (l.words[l.length++] = m), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
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
                        var i, o, h = t.length + r;
                        this._expand(h);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + r]) + l;
                            var m = (0 | t.words[i]) * e;
                            l = ((o -= 67108863 & m) >> 26) - (m / 67108864 | 0), this.words[i + r] = 67108863 & o
                        }
                        for (; i < this.length - r; i++) l = (o = (0 | this.words[i + r]) + l) >> 26, this.words[i + r] = 67108863 & o;
                        if (0 === l) return this._strip();
                        for (n(-1 === l), l = 0, i = 0; i < this.length; i++) l = (o = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this._strip()
                    }, h.prototype._wordDiv = function(t, e) {
                        var r = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            n = 0 | b.words[b.length - 1];
                        0 !== (r = 26 - this._countBits(n)) && (b = b.ushln(r), a.iushln(r), n = 0 | b.words[b.length - 1]);
                        var q, o = a.length - b.length;
                        if ("mod" !== e) {
                            (q = new h(null)).length = o + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, o);
                        0 === l.negative && (a = l, q && (q.words[o] = 1));
                        for (var m = o - 1; m >= 0; m--) {
                            var c = 67108864 * (0 | a.words[b.length + m]) + (0 | a.words[b.length + m - 1]);
                            for (c = Math.min(c / n | 0, 67108863), a._ishlnsubmul(b, c, m); 0 !== a.negative;) c--, a.negative = 0, a._ishlnsubmul(b, 1, m), a.isZero() || (a.negative ^= 1);
                            q && (q.words[m] = c)
                        }
                        return q && q._strip(), a._strip(), "div" !== e && 0 !== r && a.iushrn(r), {
                            div: q || null,
                            mod: a
                        }
                    }, h.prototype.divmod = function(t, e, r) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, e), "mod" !== e && (div = l.div.neg()), "div" !== e && (o = l.mod.neg(), r && 0 !== o.negative && o.iadd(t)), {
                            div: div,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), e), "mod" !== e && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), e), "div" !== e && (o = l.mod.neg(), r && 0 !== o.negative && o.isub(t)), {
                            div: l.div,
                            mod: o
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
                        var div, o, l
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
                            o = t.andln(1),
                            h = r.cmp(n);
                        return h < 0 || 1 === o && 0 === h ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
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
                            var o = (0 | this.words[i]) + 67108864 * r;
                            this.words[i] = o / t | 0, r = o % t
                        }
                        return this._strip(), e ? this.ineg() : this
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var t = this,
                            e = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var r = new h(1), o = new h(0), l = new h(0), m = new h(1), g = 0; t.isEven() && e.isEven();) t.iushrn(1), e.iushrn(1), ++g;
                        for (var c = e.clone(), d = t.clone(); !t.isZero();) {
                            for (var i = 0, f = 1; 0 == (t.words[0] & f) && i < 26; ++i, f <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(r.isOdd() || o.isOdd()) && (r.iadd(c), o.isub(d)), r.iushrn(1), o.iushrn(1);
                            for (var y = 0, v = 1; 0 == (e.words[0] & v) && y < 26; ++y, v <<= 1);
                            if (y > 0)
                                for (e.iushrn(y); y-- > 0;)(l.isOdd() || m.isOdd()) && (l.iadd(c), m.isub(d)), l.iushrn(1), m.iushrn(1);
                            t.cmp(e) >= 0 ? (t.isub(e), r.isub(l), o.isub(m)) : (e.isub(t), l.isub(r), m.isub(o))
                        }
                        return {
                            a: l,
                            b: m,
                            gcd: e.iushln(g)
                        }
                    }, h.prototype._invmp = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, e = new h(1), r = new h(0), o = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) e.isOdd() && e.iadd(o), e.iushrn(1);
                            for (var m = 0, c = 1; 0 == (b.words[0] & c) && m < 26; ++m, c <<= 1);
                            if (m > 0)
                                for (b.iushrn(m); m-- > 0;) r.isOdd() && r.iadd(o), r.iushrn(1);
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
                            var o = 0 | this.words[i];
                            r = (o += r) >>> 26, o &= 67108863, this.words[i] = o
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
                            var o = 0 | this.words[0];
                            e = o === t ? 0 : o < t ? -1 : 1
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
                        return new D(t)
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
                    var B = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function T(t, p) {
                        this.name = t, this.p = new h(p, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function P() {
                        T.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function R() {
                        T.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function O() {
                        T.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function _() {
                        T.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function D(t) {
                        if ("string" == typeof t) {
                            var e = h._prime(t);
                            this.m = e.p, this.prime = e
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function x(t) {
                        D.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    T.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, T.prototype.ireduce = function(t) {
                        var e, r = t;
                        do {
                            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var n = e < this.n ? -1 : r.ucmp(this.p);
                        return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                    }, T.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, T.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, o(P, T), P.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var e = input.words[9];
                        for (output.words[output.length++] = e & mask, i = 10; i < input.length; i++) {
                            var r = 0 | input.words[i];
                            input.words[i - 10] = (r & mask) << 4 | e >>> 22, e = r
                        }
                        e >>>= 22, input.words[i - 10] = e, 0 === e && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, P.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 0 | t.words[i];
                            e += 977 * r, t.words[i] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, o(R, T), o(O, T), o(_, T), _.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var r = 19 * (0 | t.words[i]) + e,
                                n = 67108863 & r;
                            r >>>= 26, t.words[i] = n, e = r
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, h._prime = function(t) {
                        if (B[t]) return B[t];
                        var e;
                        if ("k256" === t) e = new P;
                        else if ("p224" === t) e = new R;
                        else if ("p192" === t) e = new O;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new _
                        }
                        return B[t] = e, e
                    }, D.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, D.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, D.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (f(a, a.umod(this.m)._forceRed(this)), a)
                    }, D.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, D.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, D.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, D.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, D.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, D.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, D.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, D.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, D.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, D.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, D.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var e = this.m.add(new h(1)).iushrn(2);
                            return this.pow(a, e)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        n(!q.isZero());
                        var r = new h(1).toRed(this),
                            o = r.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            m = this.m.bitLength();
                        for (m = new h(2 * m * m).toRed(this); 0 !== this.pow(m, l).cmp(o);) m.redIAdd(o);
                        for (var c = this.pow(m, q), d = this.pow(a, q.addn(1).iushrn(1)), f = this.pow(a, q), y = s; 0 !== f.cmp(r);) {
                            for (var v = f, i = 0; 0 !== v.cmp(r); i++) v = v.redSqr();
                            n(i < y);
                            var b = this.pow(c, new h(1).iushln(y - i - 1));
                            d = d.redMul(b), c = b.redSqr(), f = f.redMul(c), y = i
                        }
                        return d
                    }, D.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, D.prototype.pow = function(a, t) {
                        if (t.isZero()) return new h(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var e = new Array(16);
                        e[0] = new h(1).toRed(this), e[1] = a;
                        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], a);
                        var r = e[0],
                            n = 0,
                            o = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var m = t.words[i], c = l - 1; c >= 0; c--) {
                                var d = m >> c & 1;
                                r !== e[0] && (r = this.sqr(r)), 0 !== d || 0 !== n ? (n <<= 1, n |= d, (4 === ++o || 0 === i && 0 === c) && (r = this.mul(r, e[n]), o = 0, n = 0)) : o = 0
                            }
                            l = 26
                        }
                        return r
                    }, D.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, D.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, h.mont = function(t) {
                        return new x(t)
                    }, o(x, D), x.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, x.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, x.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            r = u;
                        return u.cmp(this.m) >= 0 ? r = u.isub(this.m) : u.cmpn(0) < 0 && (r = u.iadd(this.m)), r._forceRed(this)
                    }, x.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new h(0)._forceRed(this);
                        var t = a.mul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            r = u;
                        return u.cmp(this.m) >= 0 ? r = u.isub(this.m) : u.cmpn(0) < 0 && (r = u.iadd(this.m)), r._forceRed(this)
                    }, x.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, r(82)(t))
        },
        1785: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return c
            }));
            var n = r(504);
            let o = null;

            function h(t) {
                if (null == o && (o = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== n.a.check(t))) throw o = null, new Error("BIP39 Wordlist for en (English) FAILED")
            }
            class l extends n.a {
                constructor() {
                    super("en")
                }
                getWord(t) {
                    return h(this), o[t]
                }
                getWordIndex(t) {
                    return h(this), o.indexOf(t)
                }
            }
            const m = new l;
            n.a.register(m);
            const c = {
                en: m
            }
        },
        370: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return et
            })), r.d(e, "b", (function() {
                return it
            }));
            r(34), r(652);
            var n = r(650),
                o = r(2),
                h = r(30),
                l = r(530);

            function m(t) {
                return "string" == typeof t && (t = Object(l.f)(t)), Object(h.a)(Object(o.b)([Object(l.f)("Ethereum Signed Message:\n"), Object(l.f)(String(t.length)), t]))
            }
            var c = r(1116),
                d = r.n(c),
                f = r(1);
            var y = d.a.BN;
            const v = new f.Logger("bignumber/5.7.0"),
                M = {},
                w = 9007199254740991;
            let S = !1;
            class A {
                constructor(t, e) {
                    t !== M && v.throwError("cannot call constructor directly; use BigNumber.from", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return E(k(this).fromTwos(t))
                }
                toTwos(t) {
                    return E(k(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? A.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return E(k(this).add(k(t)))
                }
                sub(t) {
                    return E(k(this).sub(k(t)))
                }
                div(t) {
                    return A.from(t).isZero() && B("division-by-zero", "div"), E(k(this).div(k(t)))
                }
                mul(t) {
                    return E(k(this).mul(k(t)))
                }
                mod(t) {
                    const e = k(t);
                    return e.isNeg() && B("division-by-zero", "mod"), E(k(this).umod(e))
                }
                pow(t) {
                    const e = k(t);
                    return e.isNeg() && B("negative-power", "pow"), E(k(this).pow(e))
                }
                and(t) {
                    const e = k(t);
                    return (this.isNegative() || e.isNeg()) && B("unbound-bitwise-result", "and"), E(k(this).and(e))
                }
                or(t) {
                    const e = k(t);
                    return (this.isNegative() || e.isNeg()) && B("unbound-bitwise-result", "or"), E(k(this).or(e))
                }
                xor(t) {
                    const e = k(t);
                    return (this.isNegative() || e.isNeg()) && B("unbound-bitwise-result", "xor"), E(k(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "mask"), E(k(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "shl"), E(k(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && B("negative-width", "shr"), E(k(this).shrn(t))
                }
                eq(t) {
                    return k(this).eq(k(t))
                }
                lt(t) {
                    return k(this).lt(k(t))
                }
                lte(t) {
                    return k(this).lte(k(t))
                }
                gt(t) {
                    return k(this).gt(k(t))
                }
                gte(t) {
                    return k(this).gte(k(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return k(this).isZero()
                }
                toNumber() {
                    try {
                        return k(this).toNumber()
                    } catch (t) {
                        B("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return v.throwError("this platform does not support BigInt", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? S || (S = !0, v.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? v.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", f.Logger.errors.UNEXPECTED_ARGUMENT, {}) : v.throwError("BigNumber.toString does not accept parameters", f.Logger.errors.UNEXPECTED_ARGUMENT, {})), k(this).toString(10)
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
                    if (t instanceof A) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new A(M, C(t)) : t.match(/^-?[0-9]+$/) ? new A(M, C(new y(t))) : v.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && B("underflow", "BigNumber.from", t), (t >= w || t <= -w) && B("overflow", "BigNumber.from", t), A.from(String(t));
                    const e = t;
                    if ("bigint" == typeof e) return A.from(e.toString());
                    if (Object(o.j)(e)) return A.from(Object(o.i)(e));
                    if (e)
                        if (e.toHexString) {
                            const t = e.toHexString();
                            if ("string" == typeof t) return A.from(t)
                        } else {
                            let t = e._hex;
                            if (null == t && "BigNumber" === e.type && (t = e.hex), "string" == typeof t && (Object(o.l)(t) || "-" === t[0] && Object(o.l)(t.substring(1)))) return A.from(t)
                        }
                    return v.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function C(t) {
                if ("string" != typeof t) return C(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && v.throwArgumentError("invalid hex", "value", t), "0x00" === (t = C(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function E(t) {
                return A.from(C(t))
            }

            function k(t) {
                const e = A.from(t).toHexString();
                return "-" === e[0] ? new y("-" + e.substring(3), 16) : new y(e.substring(2), 16)
            }

            function B(t, e, r) {
                const n = {
                    fault: t,
                    operation: e
                };
                return null != r && (n.value = r), v.throwError(t, f.Logger.errors.NUMERIC_FAULT, n)
            }
            r(121);
            const T = new f.Logger("address/5.7.0");

            function P(address) {
                Object(o.l)(address, 20) || T.throwArgumentError("invalid address", "address", address);
                const t = (address = address.toLowerCase()).substring(2).split(""),
                    e = new Uint8Array(40);
                for (let i = 0; i < 40; i++) e[i] = t[i].charCodeAt(0);
                const r = Object(o.a)(Object(h.a)(e));
                for (let i = 0; i < 40; i += 2) r[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()), (15 & r[i >> 1]) >= 8 && (t[i + 1] = t[i + 1].toUpperCase());
                return "0x" + t.join("")
            }
            const R = {};
            for (let i = 0; i < 10; i++) R[String(i)] = String(i);
            for (let i = 0; i < 26; i++) R[String.fromCharCode(65 + i)] = String(10 + i);
            const O = Math.floor((_ = 9007199254740991, Math.log10 ? Math.log10(_) : Math.log(_) / Math.LN10));
            var _;

            function D(address) {
                let t = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((t => R[t])).join("");
                for (; t.length >= O;) {
                    let e = t.substring(0, O);
                    t = parseInt(e, 10) % 97 + t.substring(e.length)
                }
                let e = String(98 - parseInt(t, 10) % 97);
                for (; e.length < 2;) e = "0" + e;
                return e
            }

            function x(address) {
                let t = null;
                if ("string" != typeof address && T.throwArgumentError("invalid address", "address", address), address.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== address.substring(0, 2) && (address = "0x" + address), t = P(address), address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== address && T.throwArgumentError("bad address checksum", "address", address);
                else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (address.substring(2, 4) !== D(address) && T.throwArgumentError("bad icap checksum", "address", address), e = address.substring(4), t = new y(e, 36).toString(16); t.length < 40;) t = "0" + t;
                    t = P("0x" + t)
                } else T.throwArgumentError("invalid address", "address", address);
                var e;
                return t
            }
            var L = r(15);

            function F(text) {
                return Object(h.a)(Object(l.f)(text))
            }
            var N = function(t, e, r, n) {
                return new(r || (r = Promise))((function(o, h) {
                    function l(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function m(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            h(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(l, m)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            const I = new f.Logger("hash/5.7.0"),
                j = new Uint8Array(32);
            j.fill(0);
            const G = A.from(-1),
                H = A.from(0),
                W = A.from(1),
                U = A.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
            const V = Object(o.h)(W.toHexString(), 32),
                z = Object(o.h)(H.toHexString(), 32),
                J = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                Z = ["name", "version", "chainId", "verifyingContract", "salt"];

            function $(t) {
                return function(e) {
                    return "string" != typeof e && I.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            const K = {
                name: $("name"),
                version: $("version"),
                chainId: function(t) {
                    try {
                        return A.from(t).toString()
                    } catch (t) {}
                    return I.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
                },
                verifyingContract: function(t) {
                    try {
                        return x(t).toLowerCase()
                    } catch (t) {}
                    return I.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    try {
                        const e = Object(o.a)(t);
                        if (32 !== e.length) throw new Error("bad length");
                        return Object(o.i)(e)
                    } catch (t) {}
                    return I.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
                }
            };

            function Q(t) {
                {
                    const e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        const r = "" === e[1],
                            n = parseInt(e[2] || "256");
                        (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && I.throwArgumentError("invalid numeric width", "type", t);
                        const h = U.mask(r ? n - 1 : n),
                            l = r ? h.add(W).mul(G) : H;
                        return function(e) {
                            const r = A.from(e);
                            return (r.lt(l) || r.gt(h)) && I.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), Object(o.h)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    const e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        const r = parseInt(e[1]);
                        return (0 === r || r > 32 || e[1] !== String(r)) && I.throwArgumentError("invalid bytes width", "type", t),
                            function(e) {
                                return Object(o.a)(e).length !== r && I.throwArgumentError(`invalid length for ${t}`, "value", e),
                                    function(t) {
                                        const e = Object(o.a)(t),
                                            r = e.length % 32;
                                        return r ? Object(o.c)([e, j.slice(r)]) : Object(o.i)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return Object(o.h)(x(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? V : z
                        };
                    case "bytes":
                        return function(t) {
                            return Object(h.a)(t)
                        };
                    case "string":
                        return function(t) {
                            return F(t)
                        }
                }
                return null
            }

            function Y(t, e) {
                return `${t}(${e.map((({name:t,type:e})=>e+" "+t)).join(",")})`
            }
            class X {
                constructor(t) {
                    Object(L.d)(this, "types", Object.freeze(Object(L.c)(t))), Object(L.d)(this, "_encoderCache", {}), Object(L.d)(this, "_types", {});
                    const e = {},
                        r = {},
                        n = {};
                    Object.keys(t).forEach((t => {
                        e[t] = {}, r[t] = [], n[t] = {}
                    }));
                    for (const n in t) {
                        const o = {};
                        t[n].forEach((h => {
                            o[h.name] && I.throwArgumentError(`duplicate variable name ${JSON.stringify(h.name)} in ${JSON.stringify(n)}`, "types", t), o[h.name] = !0;
                            const l = h.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            l === n && I.throwArgumentError(`circular type reference to ${JSON.stringify(l)}`, "types", t);
                            Q(l) || (r[l] || I.throwArgumentError(`unknown type ${JSON.stringify(l)}`, "types", t), r[l].push(n), e[n][l] = !0)
                        }))
                    }
                    const o = Object.keys(r).filter((t => 0 === r[t].length));
                    0 === o.length ? I.throwArgumentError("missing primary type", "types", t) : o.length > 1 && I.throwArgumentError(`ambiguous primary types or unused types: ${o.map((t=>JSON.stringify(t))).join(", ")}`, "types", t), Object(L.d)(this, "primaryType", o[0]),
                        function o(h, l) {
                            l[h] && I.throwArgumentError(`circular type reference to ${JSON.stringify(h)}`, "types", t), l[h] = !0, Object.keys(e[h]).forEach((t => {
                                r[t] && (o(t, l), Object.keys(l).forEach((e => {
                                    n[e][t] = !0
                                })))
                            })), delete l[h]
                        }(this.primaryType, {});
                    for (const e in n) {
                        const r = Object.keys(n[e]);
                        r.sort(), this._types[e] = Y(e, t[e]) + r.map((e => Y(e, t[e]))).join("")
                    }
                }
                getEncoder(t) {
                    let e = this._encoderCache[t];
                    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
                }
                _getEncoder(t) {
                    {
                        const e = Q(t);
                        if (e) return e
                    }
                    const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (e) {
                        const t = e[1],
                            r = this.getEncoder(t),
                            n = parseInt(e[3]);
                        return e => {
                            n >= 0 && e.length !== n && I.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                            let l = e.map(r);
                            return this._types[t] && (l = l.map(h.a)), Object(h.a)(Object(o.c)(l))
                        }
                    }
                    const r = this.types[t];
                    if (r) {
                        const e = F(this._types[t]);
                        return t => {
                            const n = r.map((({
                                name: e,
                                type: r
                            }) => {
                                const n = this.getEncoder(r)(t[e]);
                                return this._types[r] ? Object(h.a)(n) : n
                            }));
                            return n.unshift(e), Object(o.c)(n)
                        }
                    }
                    return I.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    const e = this._types[t];
                    return e || I.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return Object(h.a)(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    if (Q(t)) return r(t, e);
                    const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        const t = n[1],
                            o = parseInt(n[3]);
                        return o >= 0 && e.length !== o && I.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), e.map((e => this._visit(t, e, r)))
                    }
                    const o = this.types[t];
                    return o ? o.reduce(((t, {
                        name: n,
                        type: o
                    }) => (t[n] = this._visit(o, e[n], r), t)), {}) : I.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new X(t)
                }
                static getPrimaryType(t) {
                    return X.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return X.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    const e = [];
                    for (const r in t) {
                        const n = J[r];
                        n || I.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: n
                        })
                    }
                    return e.sort(((a, b) => Z.indexOf(a.name) - Z.indexOf(b.name))), X.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return Object(o.c)(["0x1901", X.hashDomain(t), X.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return Object(h.a)(X.encode(t, e, r))
                }
                static resolveNames(t, e, r, n) {
                    return N(this, void 0, void 0, (function*() {
                        t = Object(L.g)(t);
                        const h = {};
                        t.verifyingContract && !Object(o.l)(t.verifyingContract, 20) && (h[t.verifyingContract] = "0x");
                        const l = X.from(e);
                        l.visit(r, ((t, e) => ("address" !== t || Object(o.l)(e, 20) || (h[e] = "0x"), e)));
                        for (const t in h) h[t] = yield n(t);
                        return t.verifyingContract && h[t.verifyingContract] && (t.verifyingContract = h[t.verifyingContract]), r = l.visit(r, ((t, e) => "address" === t && h[e] ? h[e] : e)), {
                            domain: t,
                            value: r
                        }
                    }))
                }
                static getPayload(t, e, r) {
                    X.hashDomain(t);
                    const n = {},
                        h = [];
                    Z.forEach((e => {
                        const r = t[e];
                        null != r && (n[e] = K[e](r), h.push({
                            name: e,
                            type: J[e]
                        }))
                    }));
                    const l = X.from(e),
                        m = Object(L.g)(e);
                    return m.EIP712Domain ? I.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : m.EIP712Domain = h, l.encode(r), {
                        types: m,
                        domain: n,
                        primaryType: l.primaryType,
                        message: l.visit(r, ((t, e) => {
                            if (t.match(/^bytes(\d*)/)) return Object(o.i)(Object(o.a)(e));
                            if (t.match(/^u?int/)) return A.from(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return "string" != typeof e && I.throwArgumentError("invalid string", "value", e), e
                            }
                            return I.throwArgumentError("unsupported type", "type", t)
                        }))
                    }
                }
            }
            r(142), r(507), r(185), r(322), r(518);
            var tt = r(152);
            new f.Logger("wallet/5.5.0");
            n.a;

            function et(t, e) {
                return Object(tt.e)(m(t), e)
            }

            function it(t, e, r, n) {
                return Object(tt.e)(X.hash(t, e, r), n)
            }
        },
        504: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return c
            }));
            var n = r(30),
                o = r(530);
            var h = r(15),
                l = r(1);
            const m = new l.Logger("wordlists/5.7.0");
            class c {
                constructor(t) {
                    m.checkAbstract(new.target, c), Object(h.d)(this, "locale", t)
                }
                split(t) {
                    return t.toLowerCase().split(/ +/g)
                }
                join(t) {
                    return t.join(" ")
                }
                static check(t) {
                    const e = [];
                    for (let i = 0; i < 2048; i++) {
                        const r = t.getWord(i);
                        if (i !== t.getWordIndex(r)) return "0x";
                        e.push(r)
                    }
                    return text = e.join("\n") + "\n", Object(n.a)(Object(o.f)(text));
                    var text
                }
                static register(t, e) {
                    e || (e = t.locale)
                }
            }
        }
    }
]);