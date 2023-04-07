(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        1117: function(t, r, e) {
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
                        l = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : e(1514).Buffer
                    } catch (t) {}

                    function f(t, r) {
                        var e = t.charCodeAt(r);
                        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void n(!1, "Invalid character in " + t)
                    }

                    function m(t, r, e) {
                        var n = f(t, e);
                        return e - 1 >= r && (n |= f(t, e - 1) << 4), n
                    }

                    function c(t, r, e, h) {
                        for (var o = 0, b = 0, l = Math.min(t.length, e), i = r; i < l; i++) {
                            var f = t.charCodeAt(i) - 48;
                            o *= h, b = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, n(f >= 0 && b < h, "Invalid character"), o += b
                        }
                        return o
                    }

                    function d(t, r) {
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
                            for (var h = t.length - r, o = h % e, l = Math.min(h, h - o) + r, f = 0, i = r; i < l; i += e) f = c(t, i, i + e, base), this.imuln(n), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                            if (0 !== o) {
                                var m = 1;
                                for (f = c(t, i, t.length, base), i = 0; i < o; i++) m *= base;
                                this.imuln(m), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                            }
                            this._strip()
                        }, o.prototype.copy = function(t) {
                            t.words = new Array(this.length);
                            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                            t.length = this.length, t.negative = this.negative, t.red = this.red
                        }, o.prototype._move = function(t) {
                            d(t, this)
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
                            var c = this.clone();
                            for (c.negative = 0; !c.isZero();) {
                                var d = c.modrn(m).toString(base);
                                r = (c = c.idivn(m)).isZero() ? d + r : M[f - d.length] + d + r
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

                    function O(t, r, e) {
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
                            for (var m = l >>> 26, c = 67108863 & l, d = Math.min(f, r.length - 1), v = Math.max(0, f - t.length + 1); v <= d; v++) {
                                var i = f - v | 0;
                                m += (h = (a = 0 | t.words[i]) * (b = 0 | r.words[v]) + c) / 67108864 | 0, c = 67108863 & h
                            }
                            e.words[f] = 0 | c, l = 0 | m
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
                    var _ = function(t, r, e) {
                        var n, h, o, a = t.words,
                            b = r.words,
                            l = e.words,
                            f = 0,
                            m = 0 | a[0],
                            c = 8191 & m,
                            d = m >>> 13,
                            v = 0 | a[1],
                            M = 8191 & v,
                            w = v >>> 13,
                            y = 0 | a[2],
                            O = 8191 & y,
                            _ = y >>> 13,
                            j = 0 | a[3],
                            k = 8191 & j,
                            A = j >>> 13,
                            S = 0 | a[4],
                            x = 8191 & S,
                            N = S >>> 13,
                            C = 0 | a[5],
                            L = 8191 & C,
                            E = C >>> 13,
                            B = 0 | a[6],
                            R = 8191 & B,
                            I = B >>> 13,
                            Z = 0 | a[7],
                            T = 8191 & Z,
                            K = Z >>> 13,
                            U = 0 | a[8],
                            P = 8191 & U,
                            J = U >>> 13,
                            z = 0 | a[9],
                            F = 8191 & z,
                            D = z >>> 13,
                            H = 0 | b[0],
                            $ = 8191 & H,
                            G = H >>> 13,
                            V = 0 | b[1],
                            X = 8191 & V,
                            Y = V >>> 13,
                            Q = 0 | b[2],
                            W = 8191 & Q,
                            tt = Q >>> 13,
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
                            Ot = 8191 & bt,
                            _t = bt >>> 13;
                        e.negative = t.negative ^ r.negative, e.length = 19;
                        var jt = (f + (n = Math.imul(c, $)) | 0) + ((8191 & (h = (h = Math.imul(c, G)) + Math.imul(d, $) | 0)) << 13) | 0;
                        f = ((o = Math.imul(d, G)) + (h >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, n = Math.imul(M, $), h = (h = Math.imul(M, G)) + Math.imul(w, $) | 0, o = Math.imul(w, G);
                        var kt = (f + (n = n + Math.imul(c, X) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, Y) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, Y) | 0) + (h >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(O, $), h = (h = Math.imul(O, G)) + Math.imul(_, $) | 0, o = Math.imul(_, G), n = n + Math.imul(M, X) | 0, h = (h = h + Math.imul(M, Y) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, Y) | 0;
                        var At = (f + (n = n + Math.imul(c, W) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, tt) | 0) + Math.imul(d, W) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, tt) | 0) + (h >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(k, $), h = (h = Math.imul(k, G)) + Math.imul(A, $) | 0, o = Math.imul(A, G), n = n + Math.imul(O, X) | 0, h = (h = h + Math.imul(O, Y) | 0) + Math.imul(_, X) | 0, o = o + Math.imul(_, Y) | 0, n = n + Math.imul(M, W) | 0, h = (h = h + Math.imul(M, tt) | 0) + Math.imul(w, W) | 0, o = o + Math.imul(w, tt) | 0;
                        var St = (f + (n = n + Math.imul(c, et) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, nt) | 0) + Math.imul(d, et) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, nt) | 0) + (h >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(x, $), h = (h = Math.imul(x, G)) + Math.imul(N, $) | 0, o = Math.imul(N, G), n = n + Math.imul(k, X) | 0, h = (h = h + Math.imul(k, Y) | 0) + Math.imul(A, X) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(O, W) | 0, h = (h = h + Math.imul(O, tt) | 0) + Math.imul(_, W) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(M, et) | 0, h = (h = h + Math.imul(M, nt) | 0) + Math.imul(w, et) | 0, o = o + Math.imul(w, nt) | 0;
                        var xt = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, st) | 0) + (h >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(L, $), h = (h = Math.imul(L, G)) + Math.imul(E, $) | 0, o = Math.imul(E, G), n = n + Math.imul(x, X) | 0, h = (h = h + Math.imul(x, Y) | 0) + Math.imul(N, X) | 0, o = o + Math.imul(N, Y) | 0, n = n + Math.imul(k, W) | 0, h = (h = h + Math.imul(k, tt) | 0) + Math.imul(A, W) | 0, o = o + Math.imul(A, tt) | 0, n = n + Math.imul(O, et) | 0, h = (h = h + Math.imul(O, nt) | 0) + Math.imul(_, et) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(M, ot) | 0, h = (h = h + Math.imul(M, st) | 0) + Math.imul(w, ot) | 0, o = o + Math.imul(w, st) | 0;
                        var Nt = (f + (n = n + Math.imul(c, at) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, lt) | 0) + Math.imul(d, at) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, lt) | 0) + (h >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(R, $), h = (h = Math.imul(R, G)) + Math.imul(I, $) | 0, o = Math.imul(I, G), n = n + Math.imul(L, X) | 0, h = (h = h + Math.imul(L, Y) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, Y) | 0, n = n + Math.imul(x, W) | 0, h = (h = h + Math.imul(x, tt) | 0) + Math.imul(N, W) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(k, et) | 0, h = (h = h + Math.imul(k, nt) | 0) + Math.imul(A, et) | 0, o = o + Math.imul(A, nt) | 0, n = n + Math.imul(O, ot) | 0, h = (h = h + Math.imul(O, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, n = n + Math.imul(M, at) | 0, h = (h = h + Math.imul(M, lt) | 0) + Math.imul(w, at) | 0, o = o + Math.imul(w, lt) | 0;
                        var Ct = (f + (n = n + Math.imul(c, mt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, ct) | 0) + Math.imul(d, mt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, ct) | 0) + (h >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, n = Math.imul(T, $), h = (h = Math.imul(T, G)) + Math.imul(K, $) | 0, o = Math.imul(K, G), n = n + Math.imul(R, X) | 0, h = (h = h + Math.imul(R, Y) | 0) + Math.imul(I, X) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(L, W) | 0, h = (h = h + Math.imul(L, tt) | 0) + Math.imul(E, W) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(x, et) | 0, h = (h = h + Math.imul(x, nt) | 0) + Math.imul(N, et) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(k, ot) | 0, h = (h = h + Math.imul(k, st) | 0) + Math.imul(A, ot) | 0, o = o + Math.imul(A, st) | 0, n = n + Math.imul(O, at) | 0, h = (h = h + Math.imul(O, lt) | 0) + Math.imul(_, at) | 0, o = o + Math.imul(_, lt) | 0, n = n + Math.imul(M, mt) | 0, h = (h = h + Math.imul(M, ct) | 0) + Math.imul(w, mt) | 0, o = o + Math.imul(w, ct) | 0;
                        var Lt = (f + (n = n + Math.imul(c, gt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, vt) | 0) + Math.imul(d, gt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, vt) | 0) + (h >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, n = Math.imul(P, $), h = (h = Math.imul(P, G)) + Math.imul(J, $) | 0, o = Math.imul(J, G), n = n + Math.imul(T, X) | 0, h = (h = h + Math.imul(T, Y) | 0) + Math.imul(K, X) | 0, o = o + Math.imul(K, Y) | 0, n = n + Math.imul(R, W) | 0, h = (h = h + Math.imul(R, tt) | 0) + Math.imul(I, W) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(L, et) | 0, h = (h = h + Math.imul(L, nt) | 0) + Math.imul(E, et) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(x, ot) | 0, h = (h = h + Math.imul(x, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(k, at) | 0, h = (h = h + Math.imul(k, lt) | 0) + Math.imul(A, at) | 0, o = o + Math.imul(A, lt) | 0, n = n + Math.imul(O, mt) | 0, h = (h = h + Math.imul(O, ct) | 0) + Math.imul(_, mt) | 0, o = o + Math.imul(_, ct) | 0, n = n + Math.imul(M, gt) | 0, h = (h = h + Math.imul(M, vt) | 0) + Math.imul(w, gt) | 0, o = o + Math.imul(w, vt) | 0;
                        var Et = (f + (n = n + Math.imul(c, wt) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, yt) | 0) + Math.imul(d, wt) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, yt) | 0) + (h >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(F, $), h = (h = Math.imul(F, G)) + Math.imul(D, $) | 0, o = Math.imul(D, G), n = n + Math.imul(P, X) | 0, h = (h = h + Math.imul(P, Y) | 0) + Math.imul(J, X) | 0, o = o + Math.imul(J, Y) | 0, n = n + Math.imul(T, W) | 0, h = (h = h + Math.imul(T, tt) | 0) + Math.imul(K, W) | 0, o = o + Math.imul(K, tt) | 0, n = n + Math.imul(R, et) | 0, h = (h = h + Math.imul(R, nt) | 0) + Math.imul(I, et) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(L, ot) | 0, h = (h = h + Math.imul(L, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, n = n + Math.imul(x, at) | 0, h = (h = h + Math.imul(x, lt) | 0) + Math.imul(N, at) | 0, o = o + Math.imul(N, lt) | 0, n = n + Math.imul(k, mt) | 0, h = (h = h + Math.imul(k, ct) | 0) + Math.imul(A, mt) | 0, o = o + Math.imul(A, ct) | 0, n = n + Math.imul(O, gt) | 0, h = (h = h + Math.imul(O, vt) | 0) + Math.imul(_, gt) | 0, o = o + Math.imul(_, vt) | 0, n = n + Math.imul(M, wt) | 0, h = (h = h + Math.imul(M, yt) | 0) + Math.imul(w, wt) | 0, o = o + Math.imul(w, yt) | 0;
                        var Bt = (f + (n = n + Math.imul(c, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(c, _t) | 0) + Math.imul(d, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(d, _t) | 0) + (h >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(F, X), h = (h = Math.imul(F, Y)) + Math.imul(D, X) | 0, o = Math.imul(D, Y), n = n + Math.imul(P, W) | 0, h = (h = h + Math.imul(P, tt) | 0) + Math.imul(J, W) | 0, o = o + Math.imul(J, tt) | 0, n = n + Math.imul(T, et) | 0, h = (h = h + Math.imul(T, nt) | 0) + Math.imul(K, et) | 0, o = o + Math.imul(K, nt) | 0, n = n + Math.imul(R, ot) | 0, h = (h = h + Math.imul(R, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(L, at) | 0, h = (h = h + Math.imul(L, lt) | 0) + Math.imul(E, at) | 0, o = o + Math.imul(E, lt) | 0, n = n + Math.imul(x, mt) | 0, h = (h = h + Math.imul(x, ct) | 0) + Math.imul(N, mt) | 0, o = o + Math.imul(N, ct) | 0, n = n + Math.imul(k, gt) | 0, h = (h = h + Math.imul(k, vt) | 0) + Math.imul(A, gt) | 0, o = o + Math.imul(A, vt) | 0, n = n + Math.imul(O, wt) | 0, h = (h = h + Math.imul(O, yt) | 0) + Math.imul(_, wt) | 0, o = o + Math.imul(_, yt) | 0;
                        var Rt = (f + (n = n + Math.imul(M, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(M, _t) | 0) + Math.imul(w, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(w, _t) | 0) + (h >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(F, W), h = (h = Math.imul(F, tt)) + Math.imul(D, W) | 0, o = Math.imul(D, tt), n = n + Math.imul(P, et) | 0, h = (h = h + Math.imul(P, nt) | 0) + Math.imul(J, et) | 0, o = o + Math.imul(J, nt) | 0, n = n + Math.imul(T, ot) | 0, h = (h = h + Math.imul(T, st) | 0) + Math.imul(K, ot) | 0, o = o + Math.imul(K, st) | 0, n = n + Math.imul(R, at) | 0, h = (h = h + Math.imul(R, lt) | 0) + Math.imul(I, at) | 0, o = o + Math.imul(I, lt) | 0, n = n + Math.imul(L, mt) | 0, h = (h = h + Math.imul(L, ct) | 0) + Math.imul(E, mt) | 0, o = o + Math.imul(E, ct) | 0, n = n + Math.imul(x, gt) | 0, h = (h = h + Math.imul(x, vt) | 0) + Math.imul(N, gt) | 0, o = o + Math.imul(N, vt) | 0, n = n + Math.imul(k, wt) | 0, h = (h = h + Math.imul(k, yt) | 0) + Math.imul(A, wt) | 0, o = o + Math.imul(A, yt) | 0;
                        var It = (f + (n = n + Math.imul(O, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(O, _t) | 0) + Math.imul(_, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(_, _t) | 0) + (h >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(F, et), h = (h = Math.imul(F, nt)) + Math.imul(D, et) | 0, o = Math.imul(D, nt), n = n + Math.imul(P, ot) | 0, h = (h = h + Math.imul(P, st) | 0) + Math.imul(J, ot) | 0, o = o + Math.imul(J, st) | 0, n = n + Math.imul(T, at) | 0, h = (h = h + Math.imul(T, lt) | 0) + Math.imul(K, at) | 0, o = o + Math.imul(K, lt) | 0, n = n + Math.imul(R, mt) | 0, h = (h = h + Math.imul(R, ct) | 0) + Math.imul(I, mt) | 0, o = o + Math.imul(I, ct) | 0, n = n + Math.imul(L, gt) | 0, h = (h = h + Math.imul(L, vt) | 0) + Math.imul(E, gt) | 0, o = o + Math.imul(E, vt) | 0, n = n + Math.imul(x, wt) | 0, h = (h = h + Math.imul(x, yt) | 0) + Math.imul(N, wt) | 0, o = o + Math.imul(N, yt) | 0;
                        var Zt = (f + (n = n + Math.imul(k, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(k, _t) | 0) + Math.imul(A, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(A, _t) | 0) + (h >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, n = Math.imul(F, ot), h = (h = Math.imul(F, st)) + Math.imul(D, ot) | 0, o = Math.imul(D, st), n = n + Math.imul(P, at) | 0, h = (h = h + Math.imul(P, lt) | 0) + Math.imul(J, at) | 0, o = o + Math.imul(J, lt) | 0, n = n + Math.imul(T, mt) | 0, h = (h = h + Math.imul(T, ct) | 0) + Math.imul(K, mt) | 0, o = o + Math.imul(K, ct) | 0, n = n + Math.imul(R, gt) | 0, h = (h = h + Math.imul(R, vt) | 0) + Math.imul(I, gt) | 0, o = o + Math.imul(I, vt) | 0, n = n + Math.imul(L, wt) | 0, h = (h = h + Math.imul(L, yt) | 0) + Math.imul(E, wt) | 0, o = o + Math.imul(E, yt) | 0;
                        var qt = (f + (n = n + Math.imul(x, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(x, _t) | 0) + Math.imul(N, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(N, _t) | 0) + (h >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, n = Math.imul(F, at), h = (h = Math.imul(F, lt)) + Math.imul(D, at) | 0, o = Math.imul(D, lt), n = n + Math.imul(P, mt) | 0, h = (h = h + Math.imul(P, ct) | 0) + Math.imul(J, mt) | 0, o = o + Math.imul(J, ct) | 0, n = n + Math.imul(T, gt) | 0, h = (h = h + Math.imul(T, vt) | 0) + Math.imul(K, gt) | 0, o = o + Math.imul(K, vt) | 0, n = n + Math.imul(R, wt) | 0, h = (h = h + Math.imul(R, yt) | 0) + Math.imul(I, wt) | 0, o = o + Math.imul(I, yt) | 0;
                        var Tt = (f + (n = n + Math.imul(L, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(L, _t) | 0) + Math.imul(E, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(E, _t) | 0) + (h >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(F, mt), h = (h = Math.imul(F, ct)) + Math.imul(D, mt) | 0, o = Math.imul(D, ct), n = n + Math.imul(P, gt) | 0, h = (h = h + Math.imul(P, vt) | 0) + Math.imul(J, gt) | 0, o = o + Math.imul(J, vt) | 0, n = n + Math.imul(T, wt) | 0, h = (h = h + Math.imul(T, yt) | 0) + Math.imul(K, wt) | 0, o = o + Math.imul(K, yt) | 0;
                        var Kt = (f + (n = n + Math.imul(R, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(R, _t) | 0) + Math.imul(I, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(I, _t) | 0) + (h >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, n = Math.imul(F, gt), h = (h = Math.imul(F, vt)) + Math.imul(D, gt) | 0, o = Math.imul(D, vt), n = n + Math.imul(P, wt) | 0, h = (h = h + Math.imul(P, yt) | 0) + Math.imul(J, wt) | 0, o = o + Math.imul(J, yt) | 0;
                        var Ut = (f + (n = n + Math.imul(T, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(T, _t) | 0) + Math.imul(K, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(K, _t) | 0) + (h >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(F, wt), h = (h = Math.imul(F, yt)) + Math.imul(D, wt) | 0, o = Math.imul(D, yt);
                        var Pt = (f + (n = n + Math.imul(P, Ot) | 0) | 0) + ((8191 & (h = (h = h + Math.imul(P, _t) | 0) + Math.imul(J, Ot) | 0)) << 13) | 0;
                        f = ((o = o + Math.imul(J, _t) | 0) + (h >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
                        var Jt = (f + (n = Math.imul(F, Ot)) | 0) + ((8191 & (h = (h = Math.imul(F, _t)) + Math.imul(D, Ot) | 0)) << 13) | 0;
                        return f = ((o = Math.imul(D, _t)) + (h >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, l[0] = jt, l[1] = kt, l[2] = At, l[3] = St, l[4] = xt, l[5] = Nt, l[6] = Ct, l[7] = Lt, l[8] = Et, l[9] = Bt, l[10] = Rt, l[11] = It, l[12] = Zt, l[13] = qt, l[14] = Tt, l[15] = Kt, l[16] = Ut, l[17] = Pt, l[18] = Jt, 0 !== f && (l[19] = f, e.length++), e
                    };

                    function j(t, r, e) {
                        e.negative = r.negative ^ t.negative, e.length = t.length + r.length;
                        for (var n = 0, h = 0, o = 0; o < e.length - 1; o++) {
                            var l = h;
                            h = 0;
                            for (var f = 67108863 & n, m = Math.min(o, r.length - 1), c = Math.max(0, o - t.length + 1); c <= m; c++) {
                                var i = o - c,
                                    d = (0 | t.words[i]) * (0 | r.words[c]),
                                    v = 67108863 & d;
                                f = 67108863 & (v = v + f | 0), h += (l = (l = l + (d / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, l &= 67108863
                            }
                            e.words[o] = f, n = l, l = h
                        }
                        return 0 !== n ? e.words[o] = n : e.length--, e._strip()
                    }

                    function k(t, r, e) {
                        return j(t, r, e)
                    }

                    function A(t, r) {
                        this.x = t, this.y = r
                    }
                    Math.imul || (_ = O), o.prototype.mulTo = function(t, r) {
                        var e = this.length + t.length;
                        return 10 === this.length && 10 === t.length ? _(this, t, r) : e < 63 ? O(this, t, r) : e < 1024 ? j(this, t, r) : k(this, t, r)
                    }, A.prototype.makeRBT = function(t) {
                        for (var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0; i < t; i++) r[i] = this.revBin(i, e, t);
                        return r
                    }, A.prototype.revBin = function(t, r, e) {
                        if (0 === t || t === e - 1) return t;
                        for (var n = 0, i = 0; i < r; i++) n |= (1 & t) << r - i - 1, t >>= 1;
                        return n
                    }, A.prototype.permute = function(t, r, e, n, h, o) {
                        for (var i = 0; i < o; i++) n[i] = r[t[i]], h[i] = e[t[i]]
                    }, A.prototype.transform = function(t, r, e, n, h, o) {
                        this.permute(o, t, r, e, n, h);
                        for (var s = 1; s < h; s <<= 1)
                            for (var l = s << 1, f = Math.cos(2 * Math.PI / l), m = Math.sin(2 * Math.PI / l), p = 0; p < h; p += l)
                                for (var c = f, d = m, v = 0; v < s; v++) {
                                    var M = e[p + v],
                                        w = n[p + v],
                                        y = e[p + v + s],
                                        O = n[p + v + s],
                                        _ = c * y - d * O;
                                    O = c * O + d * y, y = _, e[p + v] = M + y, n[p + v] = w + O, e[p + v + s] = M - y, n[p + v + s] = w - O, v !== l && (_ = f * c - m * d, d = f * d + m * c, c = _)
                                }
                    }, A.prototype.guessLen13b = function(t, r) {
                        var e = 1 | Math.max(r, t),
                            n = 1 & e,
                            i = 0;
                        for (e = e / 2 | 0; e; e >>>= 1) i++;
                        return 1 << i + 1 + n
                    }, A.prototype.conjugate = function(t, r, e) {
                        if (!(e <= 1))
                            for (var i = 0; i < e / 2; i++) {
                                var n = t[i];
                                t[i] = t[e - i - 1], t[e - i - 1] = n, n = r[i], r[i] = -r[e - i - 1], r[e - i - 1] = -n
                            }
                    }, A.prototype.normalize13b = function(t, r) {
                        for (var e = 0, i = 0; i < r / 2; i++) {
                            var n = 8192 * Math.round(t[2 * i + 1] / r) + Math.round(t[2 * i] / r) + e;
                            t[i] = 67108863 & n, e = n < 67108864 ? 0 : n / 67108864 | 0
                        }
                        return t
                    }, A.prototype.convert13b = function(t, r, e, h) {
                        for (var o = 0, i = 0; i < r; i++) o += 0 | t[i], e[2 * i] = 8191 & o, o >>>= 13, e[2 * i + 1] = 8191 & o, o >>>= 13;
                        for (i = 2 * r; i < h; ++i) e[i] = 0;
                        n(0 === o), n(0 == (-8192 & o))
                    }, A.prototype.stub = function(t) {
                        for (var r = new Array(t), i = 0; i < t; i++) r[i] = 0;
                        return r
                    }, A.prototype.mulp = function(t, r, e) {
                        var n = 2 * this.guessLen13b(t.length, r.length),
                            h = this.makeRBT(n),
                            o = this.stub(n),
                            l = new Array(n),
                            f = new Array(n),
                            m = new Array(n),
                            c = new Array(n),
                            d = new Array(n),
                            v = new Array(n),
                            M = e.words;
                        M.length = n, this.convert13b(t.words, t.length, l, n), this.convert13b(r.words, r.length, c, n), this.transform(l, o, f, m, n, h), this.transform(c, o, d, v, n, h);
                        for (var i = 0; i < n; i++) {
                            var w = f[i] * d[i] - m[i] * v[i];
                            m[i] = f[i] * v[i] + m[i] * d[i], f[i] = w
                        }
                        return this.conjugate(f, m, n), this.transform(f, m, M, o, n, h), this.conjugate(M, o, n), this.normalize13b(M, n), e.negative = t.negative ^ r.negative, e.length = t.length + r.length, e._strip()
                    }, o.prototype.mul = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), this.mulTo(t, r)
                    }, o.prototype.mulf = function(t) {
                        var r = new o(null);
                        return r.words = new Array(this.length + t.length), k(this, t, r)
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
                        for (var m = r.clone(), c = t.clone(); !t.isZero();) {
                            for (var i = 0, d = 1; 0 == (t.words[0] & d) && i < 26; ++i, d <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(e.isOdd() || h.isOdd()) && (e.iadd(m), h.isub(c)), e.iushrn(1), h.iushrn(1);
                            for (var v = 0, M = 1; 0 == (r.words[0] & M) && v < 26; ++v, M <<= 1);
                            if (v > 0)
                                for (r.iushrn(v); v-- > 0;)(l.isOdd() || f.isOdd()) && (l.iadd(m), f.isub(c)), l.iushrn(1), f.iushrn(1);
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
                        return new B(t)
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
                    var S = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function x(t, p) {
                        this.name = t, this.p = new o(p, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function N() {
                        x.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function C() {
                        x.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function L() {
                        x.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function E() {
                        x.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function B(t) {
                        if ("string" == typeof t) {
                            var r = o._prime(t);
                            this.m = r.p, this.prime = r
                        } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function R(t) {
                        B.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    x.prototype._tmp = function() {
                        var t = new o(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, x.prototype.ireduce = function(t) {
                        var r, e = t;
                        do {
                            this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                        } while (r > this.n);
                        var n = r < this.n ? -1 : e.ucmp(this.p);
                        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), e
                    }, x.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, x.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, h(N, x), N.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var r = input.words[9];
                        for (output.words[output.length++] = r & mask, i = 10; i < input.length; i++) {
                            var e = 0 | input.words[i];
                            input.words[i - 10] = (e & mask) << 4 | r >>> 22, r = e
                        }
                        r >>>= 22, input.words[i - 10] = r, 0 === r && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, N.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 0 | t.words[i];
                            r += 977 * e, t.words[i] = 67108863 & r, r = 64 * e + (r / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, h(C, x), h(L, x), h(E, x), E.prototype.imulK = function(t) {
                        for (var r = 0, i = 0; i < t.length; i++) {
                            var e = 19 * (0 | t.words[i]) + r,
                                n = 67108863 & e;
                            e >>>= 26, t.words[i] = n, r = e
                        }
                        return 0 !== r && (t.words[t.length++] = r), t
                    }, o._prime = function(t) {
                        if (S[t]) return S[t];
                        var r;
                        if ("k256" === t) r = new N;
                        else if ("p224" === t) r = new C;
                        else if ("p192" === t) r = new L;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            r = new E
                        }
                        return S[t] = r, r
                    }, B.prototype._verify1 = function(a) {
                        n(0 === a.negative, "red works only with positives"), n(a.red, "red works only with red numbers")
                    }, B.prototype._verify2 = function(a, b) {
                        n(0 == (a.negative | b.negative), "red works only with positives"), n(a.red && a.red === b.red, "red works only with red numbers")
                    }, B.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : (d(a, a.umod(this.m)._forceRed(this)), a)
                    }, B.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, B.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, B.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, B.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, B.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, B.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, B.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, B.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, B.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, B.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, B.prototype.sqrt = function(a) {
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
                        for (var m = this.pow(f, q), c = this.pow(a, q.addn(1).iushrn(1)), d = this.pow(a, q), v = s; 0 !== d.cmp(e);) {
                            for (var M = d, i = 0; 0 !== M.cmp(e); i++) M = M.redSqr();
                            n(i < v);
                            var b = this.pow(m, new o(1).iushln(v - i - 1));
                            c = c.redMul(b), m = b.redSqr(), d = d.redMul(m), v = i
                        }
                        return c
                    }, B.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, B.prototype.pow = function(a, t) {
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
                                var c = f >> m & 1;
                                e !== r[0] && (e = this.sqr(e)), 0 !== c || 0 !== n ? (n <<= 1, n |= c, (4 === ++h || 0 === i && 0 === m) && (e = this.mul(e, r[n]), h = 0, n = 0)) : h = 0
                            }
                            l = 26
                        }
                        return e
                    }, B.prototype.convertTo = function(t) {
                        var r = t.umod(this.m);
                        return r === t ? r.clone() : r
                    }, B.prototype.convertFrom = function(t) {
                        var r = t.clone();
                        return r.red = null, r
                    }, o.mont = function(t) {
                        return new R(t)
                    }, h(R, B), R.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, R.prototype.convertFrom = function(t) {
                        var r = this.imod(t.mul(this.rinv));
                        return r.red = null, r
                    }, R.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, R.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new o(0)._forceRed(this);
                        var t = a.mul(b),
                            r = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(r).iushrn(this.shift),
                            e = u;
                        return u.cmp(this.m) >= 0 ? e = u.isub(this.m) : u.cmpn(0) < 0 && (e = u.iadd(this.m)), e._forceRed(this)
                    }, R.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, e(82)(t))
        },
        247: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return h
            })), e.d(r, "c", (function() {
                return o
            })), e.d(r, "a", (function() {
                return l
            }));
            var n = e(250);

            function h(t) {
                let data = null;
                try {
                    data = JSON.parse(t)
                } catch (t) {
                    return !1
                }
                return data.encseed && data.ethaddr
            }

            function o(t) {
                let data = null;
                try {
                    data = JSON.parse(t)
                } catch (t) {
                    return !1
                }
                return !(!data.version || parseInt(data.version) !== data.version || 3 !== parseInt(data.version))
            }

            function l(t) {
                if (h(t)) try {
                    return Object(n.a)(JSON.parse(t).ethaddr)
                } catch (t) {
                    return null
                }
                if (o(t)) try {
                    return Object(n.a)(JSON.parse(t).address)
                } catch (t) {
                    return null
                }
                return null
            }
        },
        250: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return O
            }));
            var n = e(2),
                h = e(1117),
                o = e.n(h),
                l = e(1);
            var f = o.a.BN;
            new l.Logger("bignumber/5.7.0");
            var m = e(30);
            e(121);
            const c = new l.Logger("address/5.7.0");

            function d(address) {
                Object(n.l)(address, 20) || c.throwArgumentError("invalid address", "address", address);
                const t = (address = address.toLowerCase()).substring(2).split(""),
                    r = new Uint8Array(40);
                for (let i = 0; i < 40; i++) r[i] = t[i].charCodeAt(0);
                const e = Object(n.a)(Object(m.a)(r));
                for (let i = 0; i < 40; i += 2) e[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()), (15 & e[i >> 1]) >= 8 && (t[i + 1] = t[i + 1].toUpperCase());
                return "0x" + t.join("")
            }
            const v = {};
            for (let i = 0; i < 10; i++) v[String(i)] = String(i);
            for (let i = 0; i < 26; i++) v[String.fromCharCode(65 + i)] = String(10 + i);
            const M = Math.floor((w = 9007199254740991, Math.log10 ? Math.log10(w) : Math.log(w) / Math.LN10));
            var w;

            function y(address) {
                let t = (address = (address = address.toUpperCase()).substring(4) + address.substring(0, 2) + "00").split("").map((t => v[t])).join("");
                for (; t.length >= M;) {
                    let r = t.substring(0, M);
                    t = parseInt(r, 10) % 97 + t.substring(r.length)
                }
                let r = String(98 - parseInt(t, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }

            function O(address) {
                let t = null;
                if ("string" != typeof address && c.throwArgumentError("invalid address", "address", address), address.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== address.substring(0, 2) && (address = "0x" + address), t = d(address), address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== address && c.throwArgumentError("bad address checksum", "address", address);
                else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (address.substring(2, 4) !== y(address) && c.throwArgumentError("bad icap checksum", "address", address), r = address.substring(4), t = new f(r, 36).toString(16); t.length < 40;) t = "0" + t;
                    t = d("0x" + t)
                } else c.throwArgumentError("invalid address", "address", address);
                var r;
                return t
            }
        },
        322: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return B
            })), e.d(r, "a", (function() {
                return R
            })), e.d(r, "c", (function() {
                return I
            }));
            var n = e(89),
                h = e.n(n),
                o = e(251),
                l = e.n(o),
                f = e(250),
                m = e(2),
                c = e(142),
                d = e(30),
                v = e(1701),
                M = e(507),
                w = e(15),
                y = e(152),
                O = e(45),
                _ = e(1),
                j = e(498),
                k = function(t, r, e, n) {
                    return new(e || (e = Promise))((function(h, o) {
                        function l(t) {
                            try {
                                m(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function f(t) {
                            try {
                                m(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function m(t) {
                            var r;
                            t.done ? h(t.value) : (r = t.value, r instanceof e ? r : new e((function(t) {
                                t(r)
                            }))).then(l, f)
                        }
                        m((n = n.apply(t, r || [])).next())
                    }))
                };
            const A = new _.Logger(j.a);

            function S(t) {
                return null != t && t.mnemonic && t.mnemonic.phrase
            }
            class x extends w.a {
                isKeystoreAccount(t) {
                    return !(!t || !t._isKeystoreAccount)
                }
            }

            function N(data, t) {
                const r = Object(O.b)(Object(O.c)(data, "crypto/ciphertext"));
                if (Object(m.i)(Object(d.a)(Object(m.b)([t.slice(16, 32), r]))).substring(2) !== Object(O.c)(data, "crypto/mac").toLowerCase()) throw new Error("invalid password");
                const e = function(data, t, r) {
                    if ("aes-128-ctr" === Object(O.c)(data, "crypto/cipher")) {
                        const e = Object(O.b)(Object(O.c)(data, "crypto/cipherparams/iv")),
                            n = new h.a.Counter(e),
                            o = new h.a.ModeOfOperation.ctr(t, n);
                        return Object(m.a)(o.decrypt(r))
                    }
                    return null
                }(data, t.slice(0, 16), r);
                e || A.throwError("unsupported cipher", _.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "decrypt"
                });
                const n = t.slice(32, 64),
                    address = Object(y.c)(e);
                if (data.address) {
                    let t = data.address.toLowerCase();
                    if ("0x" !== t.substring(0, 2) && (t = "0x" + t), Object(f.a)(t) !== address) throw new Error("address mismatch")
                }
                const o = {
                    _isKeystoreAccount: !0,
                    address: address,
                    privateKey: Object(m.i)(e)
                };
                if ("0.1" === Object(O.c)(data, "x-ethers/version")) {
                    const t = Object(O.b)(Object(O.c)(data, "x-ethers/mnemonicCiphertext")),
                        r = Object(O.b)(Object(O.c)(data, "x-ethers/mnemonicCounter")),
                        e = new h.a.Counter(r),
                        l = new h.a.ModeOfOperation.ctr(n, e),
                        path = Object(O.c)(data, "x-ethers/path") || c.b,
                        f = Object(O.c)(data, "x-ethers/locale") || "en",
                        d = Object(m.a)(l.decrypt(t));
                    try {
                        const t = Object(c.c)(d, f),
                            r = c.a.fromMnemonic(t, null, f).derivePath(path);
                        if (r.privateKey != o.privateKey) throw new Error("mnemonic mismatch");
                        o.mnemonic = r.mnemonic
                    } catch (t) {
                        if (t.code !== _.Logger.errors.INVALID_ARGUMENT || "wordlist" !== t.argument) throw t
                    }
                }
                return new x(o)
            }

            function C(t, r, e, n, h) {
                return Object(m.a)(Object(v.a)(t, r, e, n, h))
            }

            function L(t, r, e, n, h) {
                return Promise.resolve(C(t, r, e, n, h))
            }

            function E(data, t, r, e, n) {
                const h = Object(O.a)(t),
                    o = Object(O.c)(data, "crypto/kdf");
                if (o && "string" == typeof o) {
                    const t = function(t, r) {
                        return A.throwArgumentError("invalid key-derivation function parameters", t, r)
                    };
                    if ("scrypt" === o.toLowerCase()) {
                        const r = Object(O.b)(Object(O.c)(data, "crypto/kdfparams/salt")),
                            l = parseInt(Object(O.c)(data, "crypto/kdfparams/n")),
                            f = parseInt(Object(O.c)(data, "crypto/kdfparams/r")),
                            p = parseInt(Object(O.c)(data, "crypto/kdfparams/p"));
                        l && f && p || t("kdf", o), 0 != (l & l - 1) && t("N", l);
                        const m = parseInt(Object(O.c)(data, "crypto/kdfparams/dklen"));
                        return 32 !== m && t("dklen", m), e(h, r, l, f, p, 64, n)
                    }
                    if ("pbkdf2" === o.toLowerCase()) {
                        const e = Object(O.b)(Object(O.c)(data, "crypto/kdfparams/salt"));
                        let n = null;
                        const o = Object(O.c)(data, "crypto/kdfparams/prf");
                        "hmac-sha256" === o ? n = "sha256" : "hmac-sha512" === o ? n = "sha512" : t("prf", o);
                        const l = parseInt(Object(O.c)(data, "crypto/kdfparams/c")),
                            f = parseInt(Object(O.c)(data, "crypto/kdfparams/dklen"));
                        return 32 !== f && t("dklen", f), r(h, e, l, f, n)
                    }
                }
                return A.throwArgumentError("unsupported key-derivation function", "kdf", o)
            }

            function B(t, r) {
                const data = JSON.parse(t);
                return N(data, E(data, r, C, l.a.syncScrypt))
            }

            function R(t, r, e) {
                return k(this, void 0, void 0, (function*() {
                    const data = JSON.parse(t);
                    return N(data, yield E(data, r, L, l.a.scrypt, e))
                }))
            }

            function I(t, r, e, n) {
                try {
                    if (Object(f.a)(t.address) !== Object(y.c)(t.privateKey)) throw new Error("address/privateKey mismatch");
                    if (S(t)) {
                        const r = t.mnemonic;
                        if (c.a.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path || c.b).privateKey != t.privateKey) throw new Error("mnemonic mismatch")
                    }
                } catch (t) {
                    return Promise.reject(t)
                }
                "function" != typeof e || n || (n = e, e = {}), e || (e = {});
                const o = Object(m.a)(t.privateKey),
                    v = Object(O.a)(r);
                let w = null,
                    path = null,
                    _ = null;
                if (S(t)) {
                    const r = t.mnemonic;
                    w = Object(m.a)(Object(c.f)(r.phrase, r.locale || "en")), path = r.path || c.b, _ = r.locale || "en"
                }
                let j = e.client;
                j || (j = "ethers.js");
                let k = null;
                k = e.salt ? Object(m.a)(e.salt) : Object(M.a)(32);
                let A = null;
                if (e.iv) {
                    if (A = Object(m.a)(e.iv), 16 !== A.length) throw new Error("invalid iv")
                } else A = Object(M.a)(16);
                let x = null;
                if (e.uuid) {
                    if (x = Object(m.a)(e.uuid), 16 !== x.length) throw new Error("invalid uuid")
                } else x = Object(M.a)(16);
                let N = 1 << 17,
                    C = 8,
                    p = 1;
                return e.scrypt && (e.scrypt.N && (N = e.scrypt.N), e.scrypt.r && (C = e.scrypt.r), e.scrypt.p && (p = e.scrypt.p)), l.a.scrypt(v, k, N, C, p, 64, n).then((r => {
                    const e = (r = Object(m.a)(r)).slice(0, 16),
                        n = r.slice(16, 32),
                        l = r.slice(32, 64),
                        f = new h.a.Counter(A),
                        c = new h.a.ModeOfOperation.ctr(e, f),
                        v = Object(m.a)(c.encrypt(o)),
                        y = Object(d.a)(Object(m.b)([n, v])),
                        data = {
                            address: t.address.substring(2).toLowerCase(),
                            id: Object(O.d)(x),
                            version: 3,
                            crypto: {
                                cipher: "aes-128-ctr",
                                cipherparams: {
                                    iv: Object(m.i)(A).substring(2)
                                },
                                ciphertext: Object(m.i)(v).substring(2),
                                kdf: "scrypt",
                                kdfparams: {
                                    salt: Object(m.i)(k).substring(2),
                                    n: N,
                                    dklen: 32,
                                    p: p,
                                    r: C
                                },
                                mac: y.substring(2)
                            }
                        };
                    if (w) {
                        const t = Object(M.a)(16),
                            r = new h.a.Counter(t),
                            e = new h.a.ModeOfOperation.ctr(l, r),
                            n = Object(m.a)(e.encrypt(w)),
                            o = new Date,
                            f = o.getUTCFullYear() + "-" + Object(O.e)(o.getUTCMonth() + 1, 2) + "-" + Object(O.e)(o.getUTCDate(), 2) + "T" + Object(O.e)(o.getUTCHours(), 2) + "-" + Object(O.e)(o.getUTCMinutes(), 2) + "-" + Object(O.e)(o.getUTCSeconds(), 2) + ".0Z";
                        data["x-ethers"] = {
                            client: j,
                            gethFilename: "UTC--" + f + "--" + data.address,
                            mnemonicCounter: Object(m.i)(t).substring(2),
                            mnemonicCiphertext: Object(m.i)(n).substring(2),
                            path: path,
                            locale: _,
                            version: "0.1"
                        }
                    }
                    return JSON.stringify(data)
                }))
            }
        },
        45: function(t, r, e) {
            "use strict";
            e.d(r, "b", (function() {
                return o
            })), e.d(r, "e", (function() {
                return l
            })), e.d(r, "a", (function() {
                return f
            })), e.d(r, "c", (function() {
                return m
            })), e.d(r, "d", (function() {
                return c
            }));
            var n = e(2),
                h = e(530);

            function o(t) {
                return "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), Object(n.a)(t)
            }

            function l(t, r) {
                for (t = String(t); t.length < r;) t = "0" + t;
                return t
            }

            function f(t) {
                return "string" == typeof t ? Object(h.f)(t, h.a.NFKC) : Object(n.a)(t)
            }

            function m(object, path) {
                let t = object;
                const r = path.toLowerCase().split("/");
                for (let i = 0; i < r.length; i++) {
                    let e = null;
                    for (const n in t)
                        if (n.toLowerCase() === r[i]) {
                            e = t[n];
                            break
                        }
                    if (null === e) return null;
                    t = e
                }
                return t
            }

            function c(t) {
                const r = Object(n.a)(t);
                r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128;
                const e = Object(n.i)(r);
                return [e.substring(2, 10), e.substring(10, 14), e.substring(14, 18), e.substring(18, 22), e.substring(22, 34)].join("-")
            }
        },
        498: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return n
            }));
            const n = "json-wallets/5.7.0"
        },
        518: function(t, r, e) {
            "use strict";
            e.d(r, "a", (function() {
                return A
            })), e.d(r, "b", (function() {
                return S
            }));
            var n = e(89),
                h = e.n(n),
                o = e(250),
                l = e(2),
                f = e(30),
                m = e(1701),
                c = e(530),
                d = e(15),
                v = e(1),
                M = e(498),
                w = e(45);
            const y = new v.Logger(M.a);
            class O extends d.a {
                isCrowdsaleAccount(t) {
                    return !(!t || !t._isCrowdsaleAccount)
                }
            }

            function _(t, r) {
                const data = JSON.parse(t);
                r = Object(w.a)(r);
                const e = Object(o.a)(Object(w.c)(data, "ethaddr")),
                    n = Object(w.b)(Object(w.c)(data, "encseed"));
                n && n.length % 16 == 0 || y.throwArgumentError("invalid encseed", "json", t);
                const d = Object(l.a)(Object(m.a)(r, r, 2e3, 32, "sha256")).slice(0, 16),
                    v = n.slice(0, 16),
                    M = n.slice(16),
                    _ = new h.a.ModeOfOperation.cbc(d, v),
                    j = h.a.padding.pkcs7.strip(Object(l.a)(_.decrypt(M)));
                let k = "";
                for (let i = 0; i < j.length; i++) k += String.fromCharCode(j[i]);
                const A = Object(c.f)(k),
                    S = Object(f.a)(A);
                return new O({
                    _isCrowdsaleAccount: !0,
                    address: e,
                    privateKey: S
                })
            }
            var j = e(247),
                k = e(322);

            function A(t, r, e) {
                if (Object(j.b)(t)) {
                    e && e(0);
                    const n = _(t, r);
                    return e && e(1), Promise.resolve(n)
                }
                return Object(j.c)(t) ? Object(k.a)(t, r, e) : Promise.reject(new Error("invalid JSON wallet"))
            }

            function S(t, r) {
                if (Object(j.b)(t)) return _(t, r);
                if (Object(j.c)(t)) return Object(k.b)(t, r);
                throw new Error("invalid JSON wallet")
            }
        }
    }
]);