(window.webpackJsonp = window.webpackJsonp || []).push([
    [81], {
        1114: function(t, r, e) {
            (function(t) {
                ! function(t, r) {
                    "use strict";

                    function n(t, r) {
                        if (!t) throw new Error(r || "Assertion failed")
                    }

                    function h(t, r) {
                        t.super_ = r;
                        var e = function() {};
                        e.prototype = r.prototype, t.prototype = new e, t.prototype.constructor = t
                    }

                    function o(t, base, r) {
                        if (o.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (r = base, base = 10), this._init(t || 0, base || 10, r || "be"))
                    }
                    var l;
                    "object" == typeof t ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
                    try {
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(1511).Buffer
                    } catch (t) {}

                    function f(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function m(t, r, e) {
                        var n = f(t, e);
                        return e - 1 >= r && (n |= f(t, e - 1) << 4), n
                    }

                    function d(t, r, e, h) {
                        for (var o = 0, b = 0, l = Math.min(t.length, e), i = r; i < l; i++) {
                            var f = t.charCodeAt(i) - 48;
                            o *= h, b = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, n(f >= 0 && b < h, "Invalid character"), o += b
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
                            "hex" === base && (base = 16), n(base === (0 | base) && base >= 2 && base <= 36);
                            var e = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (e++, this.negative = 1), e < t.length && (16 === base ? this._parseHex(t, e, r) : (this._parseBase(t, base, e), "le" === r && this._initArray(this.toArray(), base, r)))
                        }, o.prototype._initNumber = function(t, base, r) {
                            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), base, r)
                        }, o.prototype._initArray = function(t, base, r) {
                            if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var e, h, o = 0;
                            if ("be" === r)
                                for (i = t.length - 1, e = 0; i >= 0; i -= 3) h = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[e] |= h << o & 67108863, this.words[e + 1] = h >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, e++);
                            else if ("le" === r)
                                for (i = 0, e = 0; i < t.length; i += 3) h = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[e] |= h << o & 67108863, this.words[e + 1] = h >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, e++);
                            return this._strip()
                        }, o.prototype._parseHex = function(t, r, e) {
                            this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var n, h = 0,
                                o = 0;
                            if ("be" === e)
                                for (i = t.length - 1; i >= r; i -= 2) n = m(t, r, i) << h, this.words[o] |= 67108863 & n, h >= 18 ? (h -= 18, o += 1, this.words[o] |= n >>> 26) : h += 8;
                            else
                                for (i = (t.length - r) % 2 == 0 ? r + 1 : r; i < t.length; i += 2) n = m(t, r, i) << h, this.words[o] |= 67108863 & n, h >= 18 ? (h -= 18, o += 1, this.words[o] |= n >>> 26) : h += 8;
                            this._strip()
                        }, o.prototype._parseBase = function(t, base, r) {
                            this.words = [0], this.length = 1;
                            for (var e = 0, n = 1; n <= 67108863; n *= base) e++;
                            e--, n = n / base | 0;
                            for (var h = t.length - r, o = h % e, l = Math.min(h, h - o) + r, f = 0, i = r; i < l; i += e) f = d(t, i, i + e, base), this.imuln(n), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                            if (0 !== o) {
                                var m = 1;
                                for (f = d(t, i, t.length, base), i = 0; i < o; i++) m *= base;
                                this.imuln(m), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
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
                        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = v
                    } catch (t) {
                        o.prototype.inspect = v
                    } else o.prototype.inspect = v;

                    function v() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    }
                    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        w = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        y = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                    o.prototype.toString = function(base, t) {
                        var r;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            r = "";
                            for (var e = 0, h = 0, i = 0; i < this.length; i++) {
                                var o = this.words[i],
                                    l = (16777215 & (o << e | h)).toString(16);
                                h = o >>> 24 - e & 16777215, (e += 2) >= 26 && (e -= 26, i--), r = 0 !== h || i !== this.length - 1 ? M[6 - l.length] + l + r : l + r
                            }
                            for (0 !== h && (r = h.toString(16) + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var f = w[base],
                                m = y[base];
                            r = "";
                            var d = this.clone();
                            for (d.negative = 0; !d.isZero();) {
                                var c = d.modrn(m).toString(base);
                                r = (d = d.idivn(m)).isZero() ? c + r : M[f - c.length] + c + r
                            }
                            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r
                        }
                        n(!1, "Base should be between 2 and 36")
                    }, o.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, o.prototype.toJSON = function() {
                        return this.toString(16, 2)
                    }, l && (o.prototype.toBuffer = function(t, r) {
                        return this.toArrayLike(l, t, r)
                    }), o.prototype.toArray = function(t, r) {
                        return this.toArrayLike(Array, t, r)
                    };

                    function _(t, r, e) {
                        e.negative = r.negative ^ t.negative;
                        var n = t.length + r.length | 0;
                        e.length = n, n = n - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | r.words[0],
                            h = a * b,
                            o = 67108863 & h,
                            l = h / 67108864 | 0;
                        e.words[0] = o;
                        for (var f = 1; f < n; f++) {
                            for (var m = l >>> 26, d = 67108863 & l, c = Math.min(f, r.length - 1), v = Math.max(0, f - t.length + 1); v <= c; v++) {
                                var i = f - v | 0;
                                m += (h = (a = 0 | t.words[i]) * (b = 0 | r.words[v]) + d) / 67108864 | 0, d = 67108863 & h
                            }
                            e.words[f] = 0 | d, l = 0 | m
                        }
                        return 0 !== l ? e.words[f] = 0 | l : e.length--, e._strip()
                    }
                    o.prototype.toArrayLike = function(t, r, e) {
                        this._strip();
                        var h = this.byteLength(),
                            o = e || Math.max(1, h);
                        n(h <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                        var l = function(t, r) {
                            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r)
                        }(t, o);
                        return this["_toArrayLike" + ("le" === r ? "LE" : "BE")](l, h), l
                    }, o.prototype._toArrayLikeLE = function(t, r) {
                        for (var e = 0, n = 0, i = 0, h = 0; i < this.length; i++) {
                            var o = this.words[i] << h | n;
                            t[e++] = 255 & o, e < t.length && (t[e++] = o >> 8 & 255), e < t.length && (t[e++] = o >> 16 & 255), 6 === h ? (e < t.length && (t[e++] = o >> 24 & 255), n = 0, h = 0) : (n = o >>> 24, h += 2)
                        }
                        if (e < t.length)
                            for (t[e++] = n; e < t.length;) t[e++] = 0
                    }, o.prototype._toArrayLikeBE = function(t, r) {
                        for (var e = t.length - 1, n = 0, i = 0, h = 0; i < this.length; i++) {
                            var o = this.words[i] << h | n;
                            t[e--] = 255 & o, e >= 0 && (t[e--] = o >> 8 & 255), e >= 0 && (t[e--] = o >> 16 & 255), 6 === h ? (e >= 0 && (t[e--] = o >> 24 & 255), n = 0, h = 0) : (n = o >>> 24, h += 2)
                        }
                        if (e >= 0)
                            for (t[e--] = n; e >= 0;) t[e--] = 0
                    }, Math.clz32 ? o.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : o.prototype._countBits = function(t) {
                        var r = t,
                            e = 0;
                        return r >= 4096 && (e += 13, r >>>= 13), r >= 64 && (e += 7, r >>>= 7), r >= 8 && (e += 4, r >>>= 4), r >= 2 && (e += 2, r >>>= 2), e + r
                    }, o.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var r = t,
                            e = 0;
                        return 0 == (8191 & r) && (e += 13, r >>>= 13), 0 == (127 & r) && (e += 7, r >>>= 7), 0 == (15 & r) && (e += 4, r >>>= 4), 0 == (3 & r) && (e += 2, r >>>= 2), 0 == (1 & r) && e++, e
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
                        return n(0 == (this.negative | t.negative)), this.iuor(t)
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
                        return n(0 == (this.negative | t.negative)), this.iuand(t)
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
                        return n(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, o.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, o.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, o.prototype.inotn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = 0 | Math.ceil(t / 26),
                            e = t % 26;
                        this._expand(r), e > 0 && r--;
                        for (var i = 0; i < r; i++) this.words[i] = 67108863 & ~this.words[i];
                        return e > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - e), this._strip()
                    }, o.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, o.prototype.setn = function(t, r) {
                        n("number" == typeof t && t >= 0);
                        var e = t / 26 | 0,
                            h = t % 26;
                        return this._expand(e + 1), this.words[e] = r ? this.words[e] | 1 << h : this.words[e] & ~(1 << h), this._strip()
                    }, o.prototype.iadd = function(t) {
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
                        var a, b, e = this.cmp(t);
                        if (0 === e) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        e > 0 ? (a = this, b = t) : (a = t, b = this);
                        for (var n = 0, i = 0; i < b.length; i++) n = (r = (0 | a.words[i]) - (0 | b.words[i]) + n) >> 26, this.words[i] = 67108863 & r;
                        for (; 0 !== n && i < a.length; i++) n = (r = (0 | a.words[i]) + n) >> 26, this.words[i] = 67108863 & r;
                        if (0 === n && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this._strip()
                    }, o.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var x = function(t, r, e) {
                        var n, h, o, a = t.words,
                            b = r.words,
                            l = e.words,
                            f = 0,
                            m = 0 | a[0],
                            d = 8191 & m,
                            c = m >>> 13,
                            v = 0 | a[1],
                            M = 8191 & v,
                            w = v >>> 13,
                            y = 0 | a[2],
                            _ = 8191 & y,
                            x = y >>> 13,
                            O = 0 | a[3],
                            j = 8191 & O,
                            N = O >>> 13,
                            A = 0 | a[4],
                            S = 8191 & A,
                            E = A >>> 13,
                            k = 0 | a[5],
                            B = 8191 & k,
                            R = k >>> 13,
                            K = 0 | a[6],
                            L = 8191 & K,
                            Z = K >>> 13,
                            T = 0 | a[7],
                            I = 8191 & T,
                            z = T >>> 13,
                            D = 0 | a[8],
                            P = 8191 & D,
                            U = D >>> 13,
                            C = 0 | a[9],
                            F = 8191 & C,
                            H = C >>> 13,
                            $ = 0 | b[0],
                            J = 8191 & $,
                            G = $ >>> 13,
                            W = 0 | b[1],
                            X = 8191 & W,
                            Q = W >>> 13,
                            V = 0 | b[2],
                            Y = 8191 & V,
                            tt = V >>> 13,
                            it = 0 | b[3],
                            et = 8191 & it,
                            nt = it >>> 13,
                            ht = 0 | b[4],
                            ot = 8191 & ht,
                            st = ht >>> 13,
                            ut = 0 | b[5],
                            at = 8191 & ut,
                            lt = ut >>> 13,
                            ft = 0 | b[6],
                            mt = 8191 & ft,
                            ct = ft >>> 13,
                            pt = 0 | b[7],
                            gt = 8191 & pt,
                            vt = pt >>> 13,
                            Mt = 0 | b[8],
                            wt = 8191 & Mt,
                            yt = Mt >>> 13,
                            bt = 0 | b[9],
                            _t = 8191 & bt,
                            xt = bt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19;
                        var Ot = (f + (n = Math.imul(d, J)) | 0) + ((8191 & (h = (h = Math.imul(d, G)) + Math.imul(c, J) | 0)) << 13) | 0;
                        f = ((o = Math.imul(c, G)) + (h >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(M, J), h = (h = Math.imul(M, G)) + Math.imul(w, J) | 0, o = Math.imul(w, G);
                        var jt = (f + (n = n + Math.imul(d, X) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, Q) | 0) + Math.imul(c, X) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, Q) | 0) + (h >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(_, J), h = (h = Math.imul(_, G)) + Math.imul(x, J) | 0, o = Math.imul(x, G), n = n + Math.imul(M, X) | 0, h = (h = h + Math.imul(M, Q) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, Q) | 0;
                        var Nt = (f + (n = n + Math.imul(d, Y) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, tt) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, tt) | 0) + (h >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(j, J), h = (h = Math.imul(j, G)) + Math.imul(N, J) | 0, o = Math.imul(N, G), n = n + Math.imul(_, X) | 0, h = (h = h + Math.imul(_, Q) | 0) + Math.imul(x, X) | 0, o = o + Math.imul(x, Q) | 0, n = n + Math.imul(M, Y) | 0, h = (h = h + Math.imul(M, tt) | 0) + Math.imul(w, Y) | 0, o = o + Math.imul(w, tt) | 0;
                        var At = (f + (n = n + Math.imul(d, et) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, nt) | 0) + Math.imul(c, et) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, nt) | 0) + (h >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(S, J), h = (h = Math.imul(S, G)) + Math.imul(E, J) | 0, o = Math.imul(E, G), n = n + Math.imul(j, X) | 0, h = (h = h + Math.imul(j, Q) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, Q) | 0, n = n + Math.imul(_, Y) | 0, h = (h = h + Math.imul(_, tt) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(M, et) | 0, h = (h = h + Math.imul(M, nt) | 0) + Math.imul(w, et) | 0, o = o + Math.imul(w, nt) | 0;
                        var St = (f + (n = n + Math.imul(d, ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, st) | 0) + (h >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(B, J), h = (h = Math.imul(B, G)) + Math.imul(R, J) | 0, o = Math.imul(R, G), n = n + Math.imul(S, X) | 0, h = (h = h + Math.imul(S, Q) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, Q) | 0, n = n + Math.imul(j, Y) | 0, h = (h = h + Math.imul(j, tt) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(_, et) | 0, h = (h = h + Math.imul(_, nt) | 0) + Math.imul(x, et) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(M, ot) | 0, h = (h = h + Math.imul(M, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0;
                        var Et = (f + (n = n + Math.imul(d, at) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, lt) | 0) + Math.imul(c, at) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, lt) | 0) + (h >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(L, J), h = (h = Math.imul(L, G)) + Math.imul(Z, J) | 0, o = Math.imul(Z, G), n = n + Math.imul(B, X) | 0, h = (h = h + Math.imul(B, Q) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, Q) | 0, n = n + Math.imul(S, Y) | 0, h = (h = h + Math.imul(S, tt) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(j, et) | 0, h = (h = h + Math.imul(j, nt) | 0) + Math.imul(N, et) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(_, ot) | 0, h = (h = h + Math.imul(_, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(M, at) | 0, h = (h = h + Math.imul(M, lt) | 0) + Math.imul(w, at) | 0, o = o + Math.imul(w, lt) | 0;
                        var kt = (f + (n = n + Math.imul(d, mt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, ct) | 0) + Math.imul(c, mt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, ct) | 0) + (h >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(I, J), h = (h = Math.imul(I, G)) + Math.imul(z, J) | 0, o = Math.imul(z, G), n = n + Math.imul(L, X) | 0, h = (h = h + Math.imul(L, Q) | 0) + Math.imul(Z, X) | 0, o = o + Math.imul(Z, Q) | 0, n = n + Math.imul(B, Y) | 0, h = (h = h + Math.imul(B, tt) | 0) + Math.imul(R, Y) | 0, o = o + Math.imul(R, tt) | 0, n = n + Math.imul(S, et) | 0, h = (h = h + Math.imul(S, nt) | 0) + Math.imul(E, et) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(j, ot) | 0, h = (h = h + Math.imul(j, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(_, at) | 0, h = (h = h + Math.imul(_, lt) | 0) + Math.imul(x, at) | 0, o = o + Math.imul(x, lt) | 0, n = n + Math.imul(M, mt) | 0, h = (h = h + Math.imul(M, ct) | 0) + Math.imul(w, mt) | 0, o = o + Math.imul(w, ct) | 0;
                        var Bt = (f + (n = n + Math.imul(d, gt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, vt) | 0) + Math.imul(c, gt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, vt) | 0) + (h >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(P, J), h = (h = Math.imul(P, G)) + Math.imul(U, J) | 0, o = Math.imul(U, G), n = n + Math.imul(I, X) | 0, h = (h = h + Math.imul(I, Q) | 0) + Math.imul(z, X) | 0, o = o + Math.imul(z, Q) | 0, n = n + Math.imul(L, Y) | 0, h = (h = h + Math.imul(L, tt) | 0) + Math.imul(Z, Y) | 0, o = o + Math.imul(Z, tt) | 0, n = n + Math.imul(B, et) | 0, h = (h = h + Math.imul(B, nt) | 0) + Math.imul(R, et) | 0, o = o + Math.imul(R, nt) | 0, n = n + Math.imul(S, ot) | 0, h = (h = h + Math.imul(S, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, n = n + Math.imul(j, at) | 0, h = (h = h + Math.imul(j, lt) | 0) + Math.imul(N, at) | 0, o = o + Math.imul(N, lt) | 0, n = n + Math.imul(_, mt) | 0, h = (h = h + Math.imul(_, ct) | 0) + Math.imul(x, mt) | 0, o = o + Math.imul(x, ct) | 0, n = n + Math.imul(M, gt) | 0, h = (h = h + Math.imul(M, vt) | 0) + Math.imul(w, gt) | 0, o = o + Math.imul(w, vt) | 0;
                        var Rt = (f + (n = n + Math.imul(d, wt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, yt) | 0) + Math.imul(c, wt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, yt) | 0) + (h >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(F, J), h = (h = Math.imul(F, G)) + Math.imul(H, J) | 0, o = Math.imul(H, G), n = n + Math.imul(P, X) | 0, h = (h = h + Math.imul(P, Q) | 0) + Math.imul(U, X) | 0, o = o + Math.imul(U, Q) | 0, n = n + Math.imul(I, Y) | 0, h = (h = h + Math.imul(I, tt) | 0) + Math.imul(z, Y) | 0, o = o + Math.imul(z, tt) | 0, n = n + Math.imul(L, et) | 0, h = (h = h + Math.imul(L, nt) | 0) + Math.imul(Z, et) | 0, o = o + Math.imul(Z, nt) | 0, n = n + Math.imul(B, ot) | 0, h = (h = h + Math.imul(B, st) | 0) + Math.imul(R, ot) | 0, o = o + Math.imul(R, st) | 0, n = n + Math.imul(S, at) | 0, h = (h = h + Math.imul(S, lt) | 0) + Math.imul(E, at) | 0, o = o + Math.imul(E, lt) | 0, n = n + Math.imul(j, mt) | 0, h = (h = h + Math.imul(j, ct) | 0) + Math.imul(N, mt) | 0, o = o + Math.imul(N, ct) | 0, n = n + Math.imul(_, gt) | 0, h = (h = h + Math.imul(_, vt) | 0) + Math.imul(x, gt) | 0, o = o + Math.imul(x, vt) | 0, n = n + Math.imul(M, wt) | 0, h = (h = h + Math.imul(M, yt) | 0) + Math.imul(w, wt) | 0, o = o + Math.imul(w, yt) | 0;
                        var Kt = (f + (n = n + Math.imul(d, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(d, xt) | 0) + Math.imul(c, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(c, xt) | 0) + (h >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, n = Math.imul(F, X), h = (h = Math.imul(F, Q)) + Math.imul(H, X) | 0, o = Math.imul(H, Q), n = n + Math.imul(P, Y) | 0, h = (h = h + Math.imul(P, tt) | 0) + Math.imul(U, Y) | 0, o = o + Math.imul(U, tt) | 0, n = n + Math.imul(I, et) | 0, h = (h = h + Math.imul(I, nt) | 0) + Math.imul(z, et) | 0, o = o + Math.imul(z, nt) | 0, n = n + Math.imul(L, ot) | 0, h = (h = h + Math.imul(L, st) | 0) + Math.imul(Z, ot) | 0, o = o + Math.imul(Z, st) | 0, n = n + Math.imul(B, at) | 0, h = (h = h + Math.imul(B, lt) | 0) + Math.imul(R, at) | 0, o = o + Math.imul(R, lt) | 0, n = n + Math.imul(S, mt) | 0, h = (h = h + Math.imul(S, ct) | 0) + Math.imul(E, mt) | 0, o = o + Math.imul(E, ct) | 0, n = n + Math.imul(j, gt) | 0, h = (h = h + Math.imul(j, vt) | 0) + Math.imul(N, gt) | 0, o = o + Math.imul(N, vt) | 0, n = n + Math.imul(_, wt) | 0, h = (h = h + Math.imul(_, yt) | 0) + Math.imul(x, wt) | 0, o = o + Math.imul(x, yt) | 0;
                        var Lt = (f + (n = n + Math.imul(M, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(M, xt) | 0) + Math.imul(w, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(w, xt) | 0) + (h >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(F, Y), h = (h = Math.imul(F, tt)) + Math.imul(H, Y) | 0, o = Math.imul(H, tt), n = n + Math.imul(P, et) | 0, h = (h = h + Math.imul(P, nt) | 0) + Math.imul(U, et) | 0, o = o + Math.imul(U, nt) | 0, n = n + Math.imul(I, ot) | 0, h = (h = h + Math.imul(I, st) | 0) + Math.imul(z, ot) | 0, o = o + Math.imul(z, st) | 0, n = n + Math.imul(L, at) | 0, h = (h = h + Math.imul(L, lt) | 0) + Math.imul(Z, at) | 0, o = o + Math.imul(Z, lt) | 0, n = n + Math.imul(B, mt) | 0, h = (h = h + Math.imul(B, ct) | 0) + Math.imul(R, mt) | 0, o = o + Math.imul(R, ct) | 0, n = n + Math.imul(S, gt) | 0, h = (h = h + Math.imul(S, vt) | 0) + Math.imul(E, gt) | 0, o = o + Math.imul(E, vt) | 0, n = n + Math.imul(j, wt) | 0, h = (h = h + Math.imul(j, yt) | 0) + Math.imul(N, wt) | 0, o = o + Math.imul(N, yt) | 0;
                        var Zt = (f + (n = n + Math.imul(_, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(_, xt) | 0) + Math.imul(x, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(x, xt) | 0) + (h >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, n = Math.imul(F, et), h = (h = Math.imul(F, nt)) + Math.imul(H, et) | 0, o = Math.imul(H, nt), n = n + Math.imul(P, ot) | 0, h = (h = h + Math.imul(P, st) | 0) + Math.imul(U, ot) | 0, o = o + Math.imul(U, st) | 0, n = n + Math.imul(I, at) | 0, h = (h = h + Math.imul(I, lt) | 0) + Math.imul(z, at) | 0, o = o + Math.imul(z, lt) | 0, n = n + Math.imul(L, mt) | 0, h = (h = h + Math.imul(L, ct) | 0) + Math.imul(Z, mt) | 0, o = o + Math.imul(Z, ct) | 0, n = n + Math.imul(B, gt) | 0, h = (h = h + Math.imul(B, vt) | 0) + Math.imul(R, gt) | 0, o = o + Math.imul(R, vt) | 0, n = n + Math.imul(S, wt) | 0, h = (h = h + Math.imul(S, yt) | 0) + Math.imul(E, wt) | 0, o = o + Math.imul(E, yt) | 0;
                        var qt = (f + (n = n + Math.imul(j, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(j, xt) | 0) + Math.imul(N, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(N, xt) | 0) + (h >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(F, ot), h = (h = Math.imul(F, st)) + Math.imul(H, ot) | 0, o = Math.imul(H, st), n = n + Math.imul(P, at) | 0, h = (h = h + Math.imul(P, lt) | 0) + Math.imul(U, at) | 0, o = o + Math.imul(U, lt) | 0, n = n + Math.imul(I, mt) | 0, h = (h = h + Math.imul(I, ct) | 0) + Math.imul(z, mt) | 0, o = o + Math.imul(z, ct) | 0, n = n + Math.imul(L, gt) | 0, h = (h = h + Math.imul(L, vt) | 0) + Math.imul(Z, gt) | 0, o = o + Math.imul(Z, vt) | 0, n = n + Math.imul(B, wt) | 0, h = (h = h + Math.imul(B, yt) | 0) + Math.imul(R, wt) | 0, o = o + Math.imul(R, yt) | 0;
                        var Tt = (f + (n = n + Math.imul(S, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(S, xt) | 0) + Math.imul(E, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(E, xt) | 0) + (h >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(F, at), h = (h = Math.imul(F, lt)) + Math.imul(H, at) | 0, o = Math.imul(H, lt), n = n + Math.imul(P, mt) | 0, h = (h = h + Math.imul(P, ct) | 0) + Math.imul(U, mt) | 0, o = o + Math.imul(U, ct) | 0, n = n + Math.imul(I, gt) | 0, h = (h = h + Math.imul(I, vt) | 0) + Math.imul(z, gt) | 0, o = o + Math.imul(z, vt) | 0, n = n + Math.imul(L, wt) | 0, h = (h = h + Math.imul(L, yt) | 0) + Math.imul(Z, wt) | 0, o = o + Math.imul(Z, yt) | 0;
                        var It = (f + (n = n + Math.imul(B, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(B, xt) | 0) + Math.imul(R, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(R, xt) | 0) + (h >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(F, mt), h = (h = Math.imul(F, ct)) + Math.imul(H, mt) | 0, o = Math.imul(H, ct), n = n + Math.imul(P, gt) | 0, h = (h = h + Math.imul(P, vt) | 0) + Math.imul(U, gt) | 0, o = o + Math.imul(U, vt) | 0, n = n + Math.imul(I, wt) | 0, h = (h = h + Math.imul(I, yt) | 0) + Math.imul(z, wt) | 0, o = o + Math.imul(z, yt) | 0;
                        var zt = (f + (n = n + Math.imul(L, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(L, xt) | 0) + Math.imul(Z, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(Z, xt) | 0) + (h >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, n = Math.imul(F, gt), h = (h = Math.imul(F, vt)) + Math.imul(H, gt) | 0, o = Math.imul(H, vt), n = n + Math.imul(P, wt) | 0, h = (h = h + Math.imul(P, yt) | 0) + Math.imul(U, wt) | 0, o = o + Math.imul(U, yt) | 0;
                        var Dt = (f + (n = n + Math.imul(I, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(I, xt) | 0) + Math.imul(z, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(z, xt) | 0) + (h >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, n = Math.imul(F, wt), h = (h = Math.imul(F, yt)) + Math.imul(H, wt) | 0, o = Math.imul(H, yt);
                        var Pt = (f + (n = n + Math.imul(P, _t) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(P, xt) | 0) + Math.imul(U, _t) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(U, xt) | 0) + (h >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
                        var Ut = (f + (n = Math.imul(F, _t)) | 0) + ((8191 & (h = (h = Math.imul(F, xt)) + Math.imul(H, _t) | 0)) << 13) | 0;
                        return f = ((o = Math.imul(H, xt)) + (h >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, l[0] = Ot, l[1] = jt, l[2] = Nt, l[3] = At, l[4] = St, l[5] = Et, l[6] = kt, l[7] = Bt, l[8] = Rt, l[9] = Kt, l[10] = Lt, l[11] = Zt, l[12] = qt, l[13] = Tt, l[14] = It, l[15] = zt, l[16] = Dt, l[17] = Pt, l[18] = Ut, 0 !== f && (l[19] = f, e.length++), e
                    };

                    function O(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, h = 0, o = 0; o < e.length - 1; o++) {
                            var l = h;
                            h = 0;
                            for (var f = 67108863 & n, m = Math.min(o, r.length - 1), d = Math.max(0, o - t.length + 1); d <= m; d++) {
                                var i = o - d,
                                    c = (0 | t.words[i]) * (0 | r.words[d]),
                                    v = 67108863 & c;
                                f = 67108863 & (v = v + f | 0), h += (l = (l = l + (c / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, l &= 67108863
                            }
                            e.words[o] = f, n = l, l = h
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e._strip()
                    }

                    function j(t, r, e) {
                        return O(t, r, e)
                    }

                    function N(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (x = _), o.prototype.mulTo = function(t, r) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? x(this, t, r) : e < 63 ? _(this, t, r) : e < 1024 ? O(this, t, r) : j(this, t, r)
                    }, N.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, e, t);
                        return r
                    }, N.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, N.prototype.permute = function(t, r, e, n, h, o) {
                        for (var i = 0; i < o; i++) n[i] = r[t[i]], h[i] = e[t[i]]
                    }, N.prototype.transform = function(t, r, e, n, h, o) {
                        this.permute(o, t, r, e, n, h);
                        for (var s = 1; s < h; s <<= 1)
                            for (var l = s << 1, f = Math.cos(2 * Math.PI / l), m = Math.sin(2 * Math.PI / l), p = 0; p < h; p += l)
                                for (var d = f, c = m, v = 0; v < s; v++) {
                                    var M = e[p + v],
                                        w = n[p + v],
                                        y = e[p + v + s],
                                        _ = n[p + v + s],
                                        x = d * y - c * _;
                                    _ = d * _ + c * y, y = x, e[p + v] = M + y, n[p + v] = w + _, e[p + v + s] = M - y, n[p + v + s] = w - _, v !== l && (x = f * d - m * c, c = f * c + m * d, d = x)
                                }
                    }, N.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, N.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var i = 0; i < e / 2; i++) {
                                var n = t[i];
                                t[i] = t[e - i - 1], t[e - i - 1] = n, n = r[i], r[i] = -r[e - i - 1], r[e - i - 1] = -n
                            }
                    }, N.prototype.normalize13b = function(t, r) {
                        for (var e = 0, i = 0; i < r / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + e;
                            t[i] = 67108863 & n, e = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, N.prototype.convert13b = function(t, r, e, h) {
                        for (var o = 0, i = 0; i < r; i++) o += 0 | t[i], e[2 * i] = 8191 & o, o >>>= 13, e[2 * i + 1] = 8191 & o, o >>>= 13;
                        for (i = 2 * r; i < h; ++i) e[i] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, N.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, N.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            h = this.makeRBT(n),
                            o = this.stub(n),
                            l = new Array(n),
                            f = new Array(n),
                            m = new Array(n),
                            d = new Array(n),
                            c = new Array(n),
                            v = new Array(n),
                            M = e.words;
                        M.length = n, this.convert13b(t.words, t.length, l, n), this.convert13b(r.words, r.length, d, n), this.transform(l, o, f, m, n, h), this.transform(d, o, c, v, n, h);
                        for (var i = 0; i < n; i++) {
                            var w = f[i] * c[i] - m[i] * v[i];
                            m[i] = f[i] * v[i] + m[i] * c[i], f[i] = w
                        }
                        return this.conjugate(f, m, n), this.transform(f, m, M, o, n, h), this.conjugate(M, o, n), this.normalize13b(M, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e._strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), j(this, t, r)
                    }, o.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, o.prototype.imuln = function(t) {
                        var r = t < 0;
                        r && (t = -t), n("number" == typeof t), n(t < 67108864);
                        for (var e = 0, i = 0; i < this.length; i++) {
                            var h = (0 | this.words[i]) * t,
                                o = (67108863 & h) + (67108863 & e);
                            e >>= 26, e += h / 67108864 | 0, e += o >>> 26, this.words[i] = 67108863 & o
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), r ? this.ineg() : this
                    }, o.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, o.prototype.sqr = function() {
                        return this.mul(this)
                    }, o.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, o.prototype.pow = function(t) {
                        var r = function(t) {
                            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                                var n = e / 26 | 0,
                                    h = e % 26;
                                r[e] = t.words[n] >>> h & 1
                            }
                            return r
                        }(t);
                        if (0 === r.length) return new o(1);
                        for (var e = this, i = 0; i < r.length && 0 === r[i]; i++, e = e.sqr());
                        if (++i < r.length)
                            for (var q = e.sqr(); i < r.length; i++, q = q.sqr()) 0 !== r[i] && (e = e.mul(q));
                        return e
                    }, o.prototype.iushln = function(t) {
                        n("number" == typeof t && t >= 0);
                        var i, r = t % 26,
                            s = (t - r) / 26,
                            e = 67108863 >>> 26 - r << 26 - r;
                        if (0 !== r) {
                            var h = 0;
                            for (i = 0; i < this.length; i++) {
                                var o = this.words[i] & e,
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
                        return n(0 === this.negative), this.iushln(t)
                    }, o.prototype.iushrn = function(t, r, e) {
                        var h;
                        n("number" == typeof t && t >= 0), h = r ? (r - r % 26) / 26 : 0;
                        var o = t % 26,
                            s = Math.min((t - o) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> o << o,
                            l = e;
                        if (h -= s, h = Math.max(0, h), l) {
                            for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                            l.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var f = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== f || i >= h); i--) {
                            var m = 0 | this.words[i];
                            this.words[i] = f << 26 - o | m >>> o, f = m & mask
                        }
                        return l && 0 !== f && (l.words[l.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                    }, o.prototype.ishrn = function(t, r, e) {
                        return n(0 === this.negative), this.iushrn(t, r, e)
                    }, o.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, o.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, o.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, o.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, o.prototype.testn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, o.prototype.imaskn = function(t) {
                        n("number" == typeof t && t >= 0);
                        var r = t % 26,
                            s = (t - r) / 26;
                        if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== r && s++, this.length = Math.min(s, this.length), 0 !== r) {
                            var mask = 67108863 ^ 67108863 >>> r << r;
                            this.words[this.length - 1] &= mask
                        }
                        return this._strip()
                    }, o.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, o.prototype.iaddn = function(t) {
                        return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, o.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, o.prototype.isubn = function(t) {
                        if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
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
                    }, o.prototype._ishlnsubmul = function(t, r, e) {
                        var i, h, o = t.length + e;
                        this._expand(o);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            h = (0 | this.words[i + e]) + l;
                            var f = (0 | t.words[i]) * r;
                            l = ((h -= 67108863 & f) >> 26) - (f / 67108864 | 0), this.words[i + e] = 67108863 & h
                        }
                        for (; i < this.length - e; i++) l = (h = (0 | this.words[i + e]) + l) >> 26, this.words[i + e] = 67108863 & h;
                        if (0 === l) return this._strip();
                        for (n(-1 === l), l = 0, i = 0; i < this.length; i++) l = (h = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & h;
                        return this.negative = 1, this._strip()
                    }, o.prototype._wordDiv = function(t, r) {
                        var e = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            n = 0 | b.words[b.length - 1];
                        0 !== (e = 26 - this._countBits(n)) && (b = b.ushln(e), a.iushln(e), n = 0 | b.words[b.length - 1]);
                        var q, h = a.length - b.length;
                        if ("mod" !== r) {
                            (q = new o(null)).length = h + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, h);
                        0 === l.negative && (a = l, q && (q.words[h] = 1));
                        for (var f = h - 1; f >= 0; f--) {
                            var m = 67108864 * (0 | a.words[b.length + f]) + (0 | a.words[b.length + f - 1]);
                            for (m = Math.min(m / n | 0, 67108863), a._ishlnsubmul(b, m, f); 0 !== a.negative;) m--, a.negative = 0, a._ishlnsubmul(b, 1, f), a.isZero() || (a.negative ^= 1);
                            q && (q.words[f] = m)
                        }
                        return q && q._strip(), a._strip(), "div" !== r && 0 !== e && a.iushrn(e), {
                            div: q || null,
                            mod: a
                        }
                    }, o.prototype.divmod = function(t, r, e) {
                        return n(!t.isZero()), this.isZero() ? {
                            div: new o(0),
                            mod: new o(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, r), "mod" !== r && (div = l.div.neg()), "div" !== r && (h = l.mod.neg(), e && 0 !== h.negative && h.iadd(t)), {
                            div: div,
                            mod: h
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), r), "mod" !== r && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), r), "div" !== r && (h = l.mod.neg(), e && 0 !== h.negative && h.isub(t)), {
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
                        var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                            n = t.ushrn(1),
                            h = t.andln(1),
                            o = e.cmp(n);
                        return o < 0 || 1 === h && 0 === o ? r.div : 0 !== r.div.negative ? r.div.isubn(1) : r.div.iaddn(1)
                    }, o.prototype.modrn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var p = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (p * e + (0 | this.words[i])) % t;
                        return r ? -e : e
                    }, o.prototype.modn = function(t) {
                        return this.modrn(t)
                    }, o.prototype.idivn = function(t) {
                        var r = t < 0;
                        r && (t = -t), n(t <= 67108863);
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var h = (0 | this.words[i]) + 67108864 * e;
                            this.words[i] = h / t | 0, e = h % t
                        }
                        return this._strip(), r ? this.ineg() : this
                    }, o.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, o.prototype.egcd = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var t = this,
                            r = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var e = new o(1), h = new o(0), l = new o(0), f = new o(1), g = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++g;
                        for (var m = r.clone(), d = t.clone(); !t.isZero();) {
                            for (var i = 0, c = 1; 0 == (t.words[0] & c) && i < 26; ++i, c <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(e.isOdd() || h.isOdd()) && (e.iadd(m), h.isub(d)), e.iushrn(1), h.iushrn(1);
                            for (var v = 0, M = 1; 0 == (r.words[0] & M) && v < 26; ++v, M <<= 1);
                            if (v > 0)
                                for (r.iushrn(v); v-- > 0;)(l.isOdd() || f.isOdd()) && (l.iadd(m), f.isub(d)), l.iushrn(1), f.iushrn(1);
                            t.cmp(r) >= 0 ? (t.isub(r), e.isub(l), h.isub(f)) : (r.isub(t), l.isub(e), f.isub(h))
                        }
                        return {
                            a: l,
                            b: f,
                            gcd: r.iushln(g)
                        }
                    }, o.prototype._invmp = function(p) {
                        n(0 === p.negative), n(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, r = new o(1), e = new o(0), h = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) r.isOdd() && r.iadd(h), r.iushrn(1);
                            for (var f = 0, m = 1; 0 == (b.words[0] & m) && f < 26; ++f, m <<= 1);
                            if (f > 0)
                                for (b.iushrn(f); f-- > 0;) e.isOdd() && e.iadd(h), e.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), r.isub(e)) : (b.isub(a), e.isub(r))
                        }
                        return (t = 0 === a.cmpn(1) ? r : e).cmpn(0) < 0 && t.iadd(p), t
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
                            var e = a.cmp(b);
                            if (e < 0) {
                                var n = a;
                                a = b, b = n
                            } else if (0 === e || 0 === b.cmpn(1)) break;
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
                        n("number" == typeof t);
                        var r = t % 26,
                            s = (t - r) / 26,
                            q = 1 << r;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var e = q, i = s; 0 !== e && i < this.length; i++) {
                            var h = 0 | this.words[i];
                            e = (h += e) >>> 26, h &= 67108863, this.words[i] = h
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), this
                    }, o.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, o.prototype.cmpn = function(t) {
                        var r, e = t < 0;
                        if (0 !== this.negative && !e) return -1;
                        if (0 === this.negative && e) return 1;
                        if (this._strip(), this.length > 1) r = 1;
                        else {
                            e && (t = -t), n(t <= 67108863, "Number is too big");
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
                        return new K(t)
                    }, o.prototype.toRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, o.prototype.fromRed = function() {
                        return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, o.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, o.prototype.forceRed = function(t) {
                        return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, o.prototype.redAdd = function(t) {
                        return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, o.prototype.redIAdd = function(t) {
                        return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, o.prototype.redSub = function(t) {
                        return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, o.prototype.redISub = function(t) {
                        return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, o.prototype.redShl = function(t) {
                        return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, o.prototype.redMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, o.prototype.redIMul = function(t) {
                        return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, o.prototype.redSqr = function() {
                        return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, o.prototype.redISqr = function() {
                        return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, o.prototype.redSqrt = function() {
                        return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, o.prototype.redInvm = function() {
                        return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, o.prototype.redNeg = function() {
                        return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, o.prototype.redPow = function(t) {
                        return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var A = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function S(t, p) {
                        this.name = t, this.p = new o(p, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function E() {
                        S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function k() {
                        S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function B() {
                        S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function R() {
                        S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function K(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function L(t) {
                        K.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    S.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, S.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, S.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, S.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, h(E, S), E.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var e = 0 | input.words[i];
                            input.words[i - 10] = (e & mask) << 4 | r >>> 22, r = e
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, E.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 0 | t.words[i];
                            r += 977 * e, t.words[i] = 67108863 & r, r = 64 * e + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, h(k, S), h(B, S), h(R, S), R.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 19 * (0 | t.words[i]) + r,
                                n = 67108863 & e;
                            e >>>= 26, t.words[i] = n, r = e
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (A[t]) return A[t];
                        var r;
                        if ("k256" === t) r = new E;
                        else if ("p224" === t) r = new k;
                        else if ("p192" === t) r = new B;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new R
                        }
                        return A[t] = r, r
                    }, K.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, K.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, K.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (c(a, a.umod(this.m)._forceRed(this)), a)
                    }, K.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, K.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, K.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, K.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, K.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, K.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, K.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, K.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, K.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, K.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, K.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (n(t % 2 == 1), 3 === t) {
                            var r = this.m.add(new o(1)).iushrn(2);
                            return this.pow(a, r)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        n(!q.isZero());
                        var e = new o(1).toRed(this),
                            h = e.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            f = this.m.bitLength();
                        for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, l).cmp(h);) f.redIAdd(h);
                        for (var m = this.pow(f, q), d = this.pow(a, q.addn(1).iushrn(1)), c = this.pow(a, q), v = s; 0 !== c.cmp(e);) {
                            for (var M = c, i = 0; 0 !== M.cmp(e); i++) M = M.redSqr();
                            n(i < v);
                            var b = this.pow(m, new o(1).iushln(v - i - 1));
                            d = d.redMul(b), m = b.redSqr(), c = c.redMul(m), v = i
                        }
                        return d
                    }, K.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, K.prototype.pow = function(a, t) {
                        if (t.isZero()) return new o(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var r = new Array(16);
                        r[0] = new o(1).toRed(this), r[1] = a;
                        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], a);
                        var e = r[0],
                            n = 0,
                            h = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var f = t.words[i], m = l - 1; m >= 0; m--) {
                                var d = f >> m & 1;
                                e !== r[0] && (e = this.sqr(e)), 0 !== d || 0 !== n ? (n <<= 1, n |= d, (4 === ++h || 0 === i && 0 === m) && (e = this.mul(e, r[n]), h = 0, n = 0)) : h = 0
                            }
                            l = 26
                        }
                        return e
                    }, K.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, K.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new L(t)
                    }, h(L, K), L.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, L.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, L.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, L.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new o(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, L.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(82)(t))
        },
        142: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return C
            })), e.d(r, "a", (function() {
                return F
            })), e.d(r, "g", (function() {
                return H
            })), e.d(r, "f", (function() {
                return $
            })), e.d(r, "c", (function() {
                return J
            })), e.d(r, "e", (function() {
                return G
            })), e.d(r, "d", (function() {
                return W
            }));
            var n = e(515),
                h = e(2),
                o = e(1114),
                l = e.n(o),
                f = e(1);
            var m = l.a.BN;
            const d = new f.Logger("bignumber/5.7.0"),
                c = {},
                v = 9007199254740991;
            let M = !1;
            class w {
                constructor(t, r) {
                    t !== c && d.throwError("cannot call constructor directly; use BigNumber.from", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = r, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return _(x(this).fromTwos(t))
                }
                toTwos(t) {
                    return _(x(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? w.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return _(x(this).add(x(t)))
                }
                sub(t) {
                    return _(x(this).sub(x(t)))
                }
                div(t) {
                    return w.from(t).isZero() && O("division-by-zero", "div"), _(x(this).div(x(t)))
                }
                mul(t) {
                    return _(x(this).mul(x(t)))
                }
                mod(t) {
                    const r = x(t);
                    return r.isNeg() && O("division-by-zero", "mod"), _(x(this).umod(r))
                }
                pow(t) {
                    const r = x(t);
                    return r.isNeg() && O("negative-power", "pow"), _(x(this).pow(r))
                }
                and(t) {
                    const r = x(t);
                    return (this.isNegative() || r.isNeg()) && O("unbound-bitwise-result", "and"), _(x(this).and(r))
                }
                or(t) {
                    const r = x(t);
                    return (this.isNegative() || r.isNeg()) && O("unbound-bitwise-result", "or"), _(x(this).or(r))
                }
                xor(t) {
                    const r = x(t);
                    return (this.isNegative() || r.isNeg()) && O("unbound-bitwise-result", "xor"), _(x(this).xor(r))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && O("negative-width", "mask"), _(x(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && O("negative-width", "shl"), _(x(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && O("negative-width", "shr"), _(x(this).shrn(t))
                }
                eq(t) {
                    return x(this).eq(x(t))
                }
                lt(t) {
                    return x(this).lt(x(t))
                }
                lte(t) {
                    return x(this).lte(x(t))
                }
                gt(t) {
                    return x(this).gt(x(t))
                }
                gte(t) {
                    return x(this).gte(x(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return x(this).isZero()
                }
                toNumber() {
                    try {
                        return x(this).toNumber()
                    } catch (t) {
                        O("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return d.throwError("this platform does not support BigInt", f.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? M || (M = !0, d.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? d.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", f.Logger.errors.UNEXPECTED_ARGUMENT, {}) : d.throwError("BigNumber.toString does not accept parameters", f.Logger.errors.UNEXPECTED_ARGUMENT, {})), x(this).toString(10)
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
                    if (t instanceof w) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new w(c, y(t)) : t.match(/^-?[0-9]+$/) ? new w(c, y(new m(t))) : d.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && O("underflow", "BigNumber.from", t), (t >= v || t <= -v) && O("overflow", "BigNumber.from", t), w.from(String(t));
                    const r = t;
                    if ("bigint" == typeof r) return w.from(r.toString());
                    if (Object(h.j)(r)) return w.from(Object(h.i)(r));
                    if (r)
                        if (r.toHexString) {
                            const t = r.toHexString();
                            if ("string" == typeof t) return w.from(t)
                        } else {
                            let t = r._hex;
                            if (null == t && "BigNumber" === r.type && (t = r.hex), "string" == typeof t && (Object(h.l)(t) || "-" === t[0] && Object(h.l)(t.substring(1)))) return w.from(t)
                        }
                    return d.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !(!t || !t._isBigNumber)
                }
            }

            function y(t) {
                if ("string" != typeof t) return y(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && d.throwArgumentError("invalid hex", "value", t), "0x00" === (t = y(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function _(t) {
                return w.from(y(t))
            }

            function x(t) {
                const r = w.from(t).toHexString();
                return "-" === r[0] ? new m("-" + r.substring(3), 16) : new m(r.substring(2), 16)
            }

            function O(t, r, e) {
                const n = {
                    fault: t,
                    operation: r
                };
                return null != e && (n.value = e), d.throwError(t, f.Logger.errors.NUMERIC_FAULT, n)
            }
            var j = e(530),
                N = e(1701),
                A = e(15),
                S = e(185),
                E = e(1161),
                k = e(1109),
                B = e(152),
                R = e(1785);
            const K = new f.Logger("hdnode/5.7.0"),
                L = w.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                Z = Object(j.f)("Bitcoin seed"),
                T = 2147483648;

            function I(t) {
                return (1 << t) - 1 << 8 - t
            }

            function z(t) {
                return Object(h.h)(Object(h.i)(t), 32)
            }

            function D(data) {
                return n.a.encode(Object(h.b)([data, Object(h.e)(Object(E.c)(Object(E.c)(data)), 0, 4)]))
            }

            function P(t) {
                if (null == t) return R.a.en;
                if ("string" == typeof t) {
                    const r = R.a[t];
                    return null == r && K.throwArgumentError("unknown locale", "wordlist", t), r
                }
                return t
            }
            const U = {},
                C = "m/44'/60'/0'/0/0";
            class F {
                constructor(t, r, e, n, o, l, f, m) {
                    if (t !== U) throw new Error("HDNode constructor cannot be called directly");
                    if (r) {
                        const t = new S.a(r);
                        Object(A.d)(this, "privateKey", t.privateKey), Object(A.d)(this, "publicKey", t.compressedPublicKey)
                    } else Object(A.d)(this, "privateKey", null), Object(A.d)(this, "publicKey", Object(h.i)(e));
                    Object(A.d)(this, "parentFingerprint", n), Object(A.d)(this, "fingerprint", Object(h.e)(Object(E.b)(Object(E.c)(this.publicKey)), 0, 4)), Object(A.d)(this, "address", Object(B.c)(this.publicKey)), Object(A.d)(this, "chainCode", o), Object(A.d)(this, "index", l), Object(A.d)(this, "depth", f), null == m ? (Object(A.d)(this, "mnemonic", null), Object(A.d)(this, "path", null)) : "string" == typeof m ? (Object(A.d)(this, "mnemonic", null), Object(A.d)(this, "path", m)) : (Object(A.d)(this, "mnemonic", m), Object(A.d)(this, "path", m.path))
                }
                get extendedKey() {
                    if (this.depth >= 256) throw new Error("Depth too large!");
                    return D(Object(h.b)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", Object(h.i)(this.depth), this.parentFingerprint, Object(h.h)(Object(h.i)(this.index), 4), this.chainCode, null != this.privateKey ? Object(h.b)(["0x00", this.privateKey]) : this.publicKey]))
                }
                neuter() {
                    return new F(U, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
                }
                _derive(t) {
                    if (t > 4294967295) throw new Error("invalid index - " + String(t));
                    let path = this.path;
                    path && (path += "/" + (2147483647 & t));
                    const data = new Uint8Array(37);
                    if (t & T) {
                        if (!this.privateKey) throw new Error("cannot derive child of neutered node");
                        data.set(Object(h.a)(this.privateKey), 1), path && (path += "'")
                    } else data.set(Object(h.a)(this.publicKey));
                    for (let i = 24; i >= 0; i -= 8) data[33 + (i >> 3)] = t >> 24 - i & 255;
                    const r = Object(h.a)(Object(E.a)(k.a.sha512, this.chainCode, data)),
                        e = r.slice(0, 32),
                        n = r.slice(32);
                    let o = null,
                        l = null;
                    if (this.privateKey) o = z(w.from(e).add(this.privateKey).mod(L));
                    else {
                        l = new S.a(Object(h.i)(e))._addPoint(this.publicKey)
                    }
                    let f = path;
                    const m = this.mnemonic;
                    return m && (f = Object.freeze({
                        phrase: m.phrase,
                        path: path,
                        locale: m.locale || "en"
                    })), new F(U, o, l, this.fingerprint, z(n), t, this.depth + 1, f)
                }
                derivePath(path) {
                    const t = path.split("/");
                    if (0 === t.length || "m" === t[0] && 0 !== this.depth) throw new Error("invalid path - " + path);
                    "m" === t[0] && t.shift();
                    let r = this;
                    for (let i = 0; i < t.length; i++) {
                        const component = t[i];
                        if (component.match(/^[0-9]+'$/)) {
                            const t = parseInt(component.substring(0, component.length - 1));
                            if (t >= T) throw new Error("invalid path index - " + component);
                            r = r._derive(T + t)
                        } else {
                            if (!component.match(/^[0-9]+$/)) throw new Error("invalid path component - " + component); {
                                const t = parseInt(component);
                                if (t >= T) throw new Error("invalid path index - " + component);
                                r = r._derive(t)
                            }
                        }
                    }
                    return r
                }
                static _fromSeed(t, r) {
                    const e = Object(h.a)(t);
                    if (e.length < 16 || e.length > 64) throw new Error("invalid seed");
                    const n = Object(h.a)(Object(E.a)(k.a.sha512, Z, e));
                    return new F(U, z(n.slice(0, 32)), null, "0x00000000", z(n.slice(32)), 0, 0, r)
                }
                static fromMnemonic(t, r, e) {
                    return t = J($(t, e = P(e)), e), F._fromSeed(H(t, r), {
                        phrase: t,
                        path: "m",
                        locale: e.locale
                    })
                }
                static fromSeed(t) {
                    return F._fromSeed(t, null)
                }
                static fromExtendedKey(t) {
                    const r = n.a.decode(t);
                    82 === r.length && D(r.slice(0, 78)) === t || K.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                    const e = r[4],
                        o = Object(h.i)(r.slice(5, 9)),
                        l = parseInt(Object(h.i)(r.slice(9, 13)).substring(2), 16),
                        f = Object(h.i)(r.slice(13, 45)),
                        m = r.slice(45, 78);
                    switch (Object(h.i)(r.slice(0, 4))) {
                        case "0x0488b21e":
                        case "0x043587cf":
                            return new F(U, null, Object(h.i)(m), o, f, l, e, null);
                        case "0x0488ade4":
                        case "0x04358394 ":
                            if (0 !== m[0]) break;
                            return new F(U, Object(h.i)(m.slice(1)), null, o, f, l, e, null)
                    }
                    return K.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
                }
            }

            function H(t, r) {
                r || (r = "");
                const e = Object(j.f)("mnemonic" + r, j.a.NFKD);
                return Object(N.a)(Object(j.f)(t, j.a.NFKD), e, 2048, 64, "sha512")
            }

            function $(t, r) {
                r = P(r), K.checkNormalize();
                const e = r.split(t);
                if (e.length % 3 != 0) throw new Error("invalid mnemonic");
                const n = Object(h.a)(new Uint8Array(Math.ceil(11 * e.length / 8)));
                let o = 0;
                for (let i = 0; i < e.length; i++) {
                    let t = r.getWordIndex(e[i].normalize("NFKD"));
                    if (-1 === t) throw new Error("invalid mnemonic");
                    for (let r = 0; r < 11; r++) t & 1 << 10 - r && (n[o >> 3] |= 1 << 7 - o % 8), o++
                }
                const l = 32 * e.length / 3,
                    f = I(e.length / 3);
                if ((Object(h.a)(Object(E.c)(n.slice(0, l / 8)))[0] & f) !== (n[n.length - 1] & f)) throw new Error("invalid checksum");
                return Object(h.i)(n.slice(0, l / 8))
            }

            function J(t, r) {
                if (r = P(r), (t = Object(h.a)(t)).length % 4 != 0 || t.length < 16 || t.length > 32) throw new Error("invalid entropy");
                const e = [0];
                let n = 11;
                for (let i = 0; i < t.length; i++) n > 8 ? (e[e.length - 1] <<= 8, e[e.length - 1] |= t[i], n -= 8) : (e[e.length - 1] <<= n, e[e.length - 1] |= t[i] >> 8 - n, e.push(t[i] & (1 << 8 - n) - 1), n += 3);
                const o = t.length / 4,
                    l = Object(h.a)(Object(E.c)(t))[0] & I(o);
                return e[e.length - 1] <<= o, e[e.length - 1] |= l >> 8 - o, r.join(e.map((t => r.getWord(t))))
            }

            function G(t, r) {
                try {
                    return $(t, r), !0
                } catch (t) {}
                return !1
            }

            function W(t) {
                return ("number" != typeof t || t < 0 || t >= T || t % 1) && K.throwArgumentError("invalid account index", "index", t), `m/44'/60'/${t}'/0/0`
            }
        }
    }
]);