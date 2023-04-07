(window.webpackJsonp = window.webpackJsonp || []).push([
    [37], {
        111: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return k
            })), r.d(e, "b", (function() {
                return w
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "d", (function() {
                return N
            }));
            var n = r(34),
                o = r(16),
                l = r(0),
                c = r(600),
                h = r(5),
                d = r(59),
                f = r(7),
                m = r(54);
            const y = new f.Logger(m.a);
            class k {
                constructor() {
                    y.checkNew(new.target, k), this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    const t = {},
                        address = this.address.bind(this),
                        e = this.bigNumber.bind(this),
                        r = this.blockTag.bind(this),
                        data = this.data.bind(this),
                        n = this.hash.bind(this),
                        o = this.hex.bind(this),
                        l = this.number.bind(this),
                        c = this.type.bind(this);
                    return t.transaction = {
                        hash: n,
                        type: c,
                        accessList: k.allowNull(this.accessList.bind(this), null),
                        blockHash: k.allowNull(n, null),
                        blockNumber: k.allowNull(l, null),
                        transactionIndex: k.allowNull(l, null),
                        confirmations: k.allowNull(l, null),
                        from: address,
                        gasPrice: k.allowNull(e),
                        maxPriorityFeePerGas: k.allowNull(e),
                        maxFeePerGas: k.allowNull(e),
                        gasLimit: e,
                        to: k.allowNull(address, null),
                        value: e,
                        nonce: l,
                        data: data,
                        r: k.allowNull(this.uint256),
                        s: k.allowNull(this.uint256),
                        v: k.allowNull(l),
                        creates: k.allowNull(address, null),
                        raw: k.allowNull(data)
                    }, t.transactionRequest = {
                        from: k.allowNull(address),
                        nonce: k.allowNull(l),
                        gasLimit: k.allowNull(e),
                        gasPrice: k.allowNull(e),
                        maxPriorityFeePerGas: k.allowNull(e),
                        maxFeePerGas: k.allowNull(e),
                        to: k.allowNull(address),
                        value: k.allowNull(e),
                        data: k.allowNull((t => this.data(t, !0))),
                        type: k.allowNull(l),
                        accessList: k.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: l,
                        blockNumber: l,
                        transactionHash: n,
                        address: address,
                        topics: k.arrayOf(n),
                        data: data,
                        logIndex: l,
                        blockHash: n
                    }, t.receipt = {
                        to: k.allowNull(this.address, null),
                        from: k.allowNull(this.address, null),
                        contractAddress: k.allowNull(address, null),
                        transactionIndex: l,
                        root: k.allowNull(o),
                        gasUsed: e,
                        logsBloom: k.allowNull(data),
                        blockHash: n,
                        transactionHash: n,
                        logs: k.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: l,
                        confirmations: k.allowNull(l, null),
                        cumulativeGasUsed: e,
                        effectiveGasPrice: k.allowNull(e),
                        status: k.allowNull(l),
                        type: c
                    }, t.block = {
                        hash: k.allowNull(n),
                        parentHash: n,
                        number: l,
                        timestamp: l,
                        nonce: k.allowNull(o),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: e,
                        gasUsed: e,
                        miner: k.allowNull(address),
                        extraData: data,
                        transactions: k.allowNull(k.arrayOf(n)),
                        baseFeePerGas: k.allowNull(e)
                    }, t.blockWithTransactions = Object(h.shallowCopy)(t.block), t.blockWithTransactions.transactions = k.allowNull(k.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: k.allowNull(r, void 0),
                        toBlock: k.allowNull(r, void 0),
                        blockHash: k.allowNull(n, void 0),
                        address: k.allowNull(address, void 0),
                        topics: k.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: k.allowNull(l),
                        blockHash: k.allowNull(n),
                        transactionIndex: l,
                        removed: k.allowNull(this.boolean.bind(this)),
                        address: address,
                        data: k.allowFalsish(data, "0x"),
                        topics: k.arrayOf(n),
                        transactionHash: n,
                        logIndex: l
                    }, t
                }
                accessList(t) {
                    return Object(d.accessListify)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : o.a.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : o.a.from(t).toNumber()
                }
                bigNumber(t) {
                    return o.a.from(t)
                }
                boolean(t) {
                    if ("boolean" == typeof t) return t;
                    if ("string" == typeof t) {
                        if ("true" === (t = t.toLowerCase())) return !0;
                        if ("false" === t) return !1
                    }
                    throw new Error("invalid boolean - " + t)
                }
                hex(t, e) {
                    return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), Object(l.isHexString)(t)) ? t.toLowerCase() : y.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    const r = this.hex(t, e);
                    if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return Object(n.getAddress)(t)
                }
                callAddress(t) {
                    if (!Object(l.isHexString)(t, 32)) return null;
                    const address = Object(n.getAddress)(Object(l.hexDataSlice)(t, 12));
                    return address === c.a ? null : address
                }
                contractAddress(t) {
                    return Object(n.getContractAddress)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    if ("latest" === t || "pending" === t) return t;
                    if ("number" == typeof t || Object(l.isHexString)(t)) return Object(l.hexValue)(t);
                    throw new Error("invalid blockTag")
                }
                hash(t, e) {
                    const r = this.hex(t, e);
                    return 32 !== Object(l.hexDataLength)(r) ? y.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    const e = o.a.from(t);
                    try {
                        return e.toNumber()
                    } catch (t) {}
                    return null
                }
                uint256(t) {
                    if (!Object(l.isHexString)(t)) throw new Error("invalid uint256");
                    return Object(l.hexZeroPad)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    const r = null != t._difficulty ? t._difficulty : t.difficulty,
                        n = k.check(e, t);
                    return n._difficulty = null == r ? null : o.a.from(r), n
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return k.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && o.a.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
                    const e = k.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        Object(l.isHexString)(r) && (r = o.a.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), Object(l.isHexString)(r) && (r = o.a.from(r).toNumber()), "number" != typeof r && null != e.v && (r = (e.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return Object(d.parse)(t)
                }
                receiptLog(t) {
                    return k.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    const e = k.check(this.formats.receipt, t);
                    if (null != e.root)
                        if (e.root.length <= 4) {
                            const t = o.a.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && y.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : y.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && y.throwArgumentError("invalid root hash", "value.root", e.root);
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map((t => this.topics(t))) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return k.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return k.check(this.formats.filterLog, t)
                }
                static check(t, object) {
                    const e = {};
                    for (const r in t) try {
                        const n = t[r](object[r]);
                        void 0 !== n && (e[r] = n)
                    } catch (t) {
                        throw t.checkKey = r, t.checkValue = object[r], t
                    }
                    return e
                }
                static allowNull(t, e) {
                    return function(r) {
                        return null == r ? e : t(r)
                    }
                }
                static allowFalsish(t, e) {
                    return function(r) {
                        return r ? t(r) : e
                    }
                }
                static arrayOf(t) {
                    return function(e) {
                        if (!Array.isArray(e)) throw new Error("not an array");
                        const r = [];
                        return e.forEach((function(e) {
                            r.push(t(e))
                        })), r
                    }
                }
            }

            function w(t) {
                return t && "function" == typeof t.isCommunityResource
            }

            function v(t) {
                return w(t) && t.isCommunityResource()
            }
            let _ = !1;

            function N() {
                _ || (_ = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
        },
        1695: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return l
            }));
            var n = r(0),
                o = r(213);

            function l(t, e, r, l, c) {
                let h;
                t = Object(n.arrayify)(t), e = Object(n.arrayify)(e);
                let d = 1;
                const f = new Uint8Array(l),
                    m = new Uint8Array(e.length + 4);
                let y, k;
                m.set(e);
                for (let i = 1; i <= d; i++) {
                    m[e.length] = i >> 24 & 255, m[e.length + 1] = i >> 16 & 255, m[e.length + 2] = i >> 8 & 255, m[e.length + 3] = 255 & i;
                    let w = Object(n.arrayify)(Object(o.a)(c, t, m));
                    h || (h = w.length, k = new Uint8Array(h), d = Math.ceil(l / h), y = l - (d - 1) * h), k.set(w);
                    for (let e = 1; e < r; e++) {
                        w = Object(n.arrayify)(Object(o.a)(c, t, w));
                        for (let t = 0; t < h; t++) k[t] ^= w[t]
                    }
                    const v = (i - 1) * h,
                        _ = i === d ? y : h;
                    f.set(Object(n.arrayify)(k).slice(0, _), v)
                }
                return Object(n.hexlify)(f)
            }
        },
        211: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return W
            })), r.d(e, "a", (function() {
                return z
            }));
            var n = r(171),
                o = r(194),
                l = r(16),
                c = r(0),
                h = r(483),
                d = r(218),
                f = r(382),
                m = r(5),
                y = r(213),
                k = r(60),
                w = r(99),
                v = r(306),
                _ = r.n(v),
                N = r(7),
                O = r(54),
                E = r(111),
                x = function(t, e, r, n) {
                    return new(r || (r = Promise))((function(o, l) {
                        function c(t) {
                            try {
                                d(n.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(n.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((n = n.apply(t, e || [])).next())
                    }))
                };
            const P = new N.Logger(O.a);

            function R(t) {
                return null == t ? "null" : (32 !== Object(c.hexDataLength)(t) && P.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function T(t) {
                for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
                return t.map((t => {
                    if (Array.isArray(t)) {
                        const e = {};
                        t.forEach((t => {
                            e[R(t)] = !0
                        }));
                        const r = Object.keys(e);
                        return r.sort(), r.join("|")
                    }
                    return R(t)
                })).join("&")
            }

            function j(t) {
                if ("string" == typeof t) {
                    if (t = t.toLowerCase(), 32 === Object(c.hexDataLength)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else {
                    if (Array.isArray(t)) return "filter:*:" + T(t);
                    if (n.a.isForkEvent(t)) throw P.warn("not implemented"), new Error("not implemented");
                    if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + T(t.topics || [])
                }
                throw new Error("invalid event - " + t)
            }

            function L() {
                return (new Date).getTime()
            }

            function A(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }
            const B = ["block", "network", "pending", "poll"];
            class I {
                constructor(t, e, r) {
                    Object(m.defineReadOnly)(this, "tag", t), Object(m.defineReadOnly)(this, "listener", e), Object(m.defineReadOnly)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    const t = this.tag.split(":");
                    return "tx" !== t[0] ? null : t[1]
                }
                get filter() {
                    const t = this.tag.split(":");
                    if ("filter" !== t[0]) return null;
                    const address = t[1],
                        e = "" === (data = t[2]) ? [] : data.split(/&/g).map((t => {
                            if ("" === t) return [];
                            const e = t.split("|").map((t => "null" === t ? null : t));
                            return 1 === e.length ? e[0] : e
                        }));
                    var data;
                    const filter = {};
                    return e.length > 0 && (filter.topics = e), address && "*" !== address && (filter.address = address), filter
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || B.indexOf(this.tag) >= 0
                }
            }
            const C = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function S(t) {
                return Object(c.hexZeroPad)(l.a.from(t).toHexString(), 32)
            }

            function H(data) {
                return o.Base58.encode(Object(c.concat)([data, Object(c.hexDataSlice)(Object(y.c)(Object(y.c)(data)), 0, 4)]))
            }
            const D = new RegExp("^(ipfs)://(.*)$", "i"),
                U = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), D, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function F(t, e) {
                try {
                    return Object(k.h)(K(t, e))
                } catch (t) {}
                return null
            }

            function K(t, e) {
                if ("0x" === t) return null;
                const r = l.a.from(Object(c.hexDataSlice)(t, e, e + 32)).toNumber(),
                    n = l.a.from(Object(c.hexDataSlice)(t, r, r + 32)).toNumber();
                return Object(c.hexDataSlice)(t, r + 32, r + 32 + n)
            }

            function $(link) {
                return link.match(/^ipfs:\/\/ipfs\//i) ? link = link.substring(12) : link.match(/^ipfs:\/\//i) ? link = link.substring(7) : P.throwArgumentError("unsupported IPFS format", "link", link), `https://gateway.ipfs.io/ipfs/${link}`
            }

            function G(t) {
                const e = Object(c.arrayify)(t);
                if (e.length > 32) throw new Error("internal; should not happen");
                const r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }

            function M(t) {
                if (t.length % 32 == 0) return t;
                const e = new Uint8Array(32 * Math.ceil(t.length / 32));
                return e.set(t), e
            }

            function V(t) {
                const e = [];
                let r = 0;
                for (let i = 0; i < t.length; i++) e.push(null), r += 32;
                for (let i = 0; i < t.length; i++) {
                    const data = Object(c.arrayify)(t[i]);
                    e[i] = G(r), e.push(G(data.length)), e.push(M(data)), r += 32 + 32 * Math.ceil(data.length / 32)
                }
                return Object(c.hexConcat)(e)
            }
            class W {
                constructor(t, address, e, r) {
                    Object(m.defineReadOnly)(this, "provider", t), Object(m.defineReadOnly)(this, "name", e), Object(m.defineReadOnly)(this, "address", t.formatter.address(address)), Object(m.defineReadOnly)(this, "_resolvedAddress", r)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then((t => l.a.from(t).eq(1))).catch((t => {
                        if (t.code === N.Logger.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, t
                    }))), this._supportsEip2544
                }
                _fetch(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        const r = {
                            to: this.address,
                            ccipReadEnabled: !0,
                            data: Object(c.hexConcat)([t, Object(d.c)(this.name), e || "0x"])
                        };
                        let n = !1;
                        (yield this.supportsWildcard()) && (n = !0, r.data = Object(c.hexConcat)(["0x9061b923", V([Object(d.a)(this.name), r.data])]));
                        try {
                            let t = yield this.provider.call(r);
                            return Object(c.arrayify)(t).length % 32 == 4 && P.throwError("resolver threw error", N.Logger.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: t
                            }), n && (t = K(t, 0)), t
                        } catch (t) {
                            if (t.code === N.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    }))
                }
                _fetchBytes(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        const r = yield this._fetch(t, e);
                        return null != r ? K(r, 0) : null
                    }))
                }
                _getAddress(t, e) {
                    const r = C[String(t)];
                    if (null == r && P.throwError(`unsupported coin type: ${t}`, N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    const n = Object(c.arrayify)(e);
                    if (null != r.p2pkh) {
                        const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return H(Object(c.concat)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return H(Object(c.concat)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        const t = n[1];
                        let e = n[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
                            const t = _.a.toWords(n.slice(2));
                            return t.unshift(e), _.a.encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return x(this, void 0, void 0, (function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            const t = yield this._fetch("0x3b3b57de");
                            return "0x" === t || t === h.a ? null : this.provider.formatter.callAddress(t)
                        } catch (t) {
                            if (t.code === N.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                        const e = yield this._fetchBytes("0xf1cb7e06", S(t));
                        if (null == e || "0x" === e) return null;
                        const address = this._getAddress(t, e);
                        return null == address && P.throwError("invalid or unsupported coin data", N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), address
                    }))
                }
                getAvatar() {
                    return x(this, void 0, void 0, (function*() {
                        const t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            const e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let i = 0; i < U.length; i++) {
                                const r = e.match(U[i]);
                                if (null == r) continue;
                                const n = r[1].toLowerCase();
                                switch (n) {
                                    case "https":
                                        return t.push({
                                            type: "url",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "data":
                                        return t.push({
                                            type: "data",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "ipfs":
                                        return t.push({
                                            type: "ipfs",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: $(e)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            const o = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";t.push({
                                                type: n,
                                                content: e
                                            });
                                            const h = this._resolvedAddress || (yield this.getAddress()),
                                                d = (r[2] || "").split("/");
                                            if (2 !== d.length) return null;
                                            const f = yield this.provider.formatter.address(d[0]), m = Object(c.hexZeroPad)(l.a.from(d[1]).toHexString(), 32);
                                            if ("erc721" === n) {
                                                const e = this.provider.formatter.callAddress(yield this.provider.call({
                                                    to: f,
                                                    data: Object(c.hexConcat)(["0x6352211e", m])
                                                }));
                                                if (h !== e) return null;
                                                t.push({
                                                    type: "owner",
                                                    content: e
                                                })
                                            } else if ("erc1155" === n) {
                                                const e = l.a.from(yield this.provider.call({
                                                    to: f,
                                                    data: Object(c.hexConcat)(["0x00fdd58e", Object(c.hexZeroPad)(h, 32), m])
                                                }));
                                                if (e.isZero()) return null;
                                                t.push({
                                                    type: "balance",
                                                    content: e.toString()
                                                })
                                            }
                                            const y = {
                                                to: this.provider.formatter.address(d[0]),
                                                data: Object(c.hexConcat)([o, m])
                                            };
                                            let k = F(yield this.provider.call(y), 0);
                                            if (null == k) return null;t.push({
                                                type: "metadata-url-base",
                                                content: k
                                            }),
                                            "erc1155" === n && (k = k.replace("{id}", m.substring(2)), t.push({
                                                type: "metadata-url-expanded",
                                                content: k
                                            })),
                                            k.match(/^ipfs:/i) && (k = $(k)),
                                            t.push({
                                                type: "metadata-url",
                                                content: k
                                            });
                                            const v = yield Object(w.fetchJson)(k);
                                            if (!v) return null;t.push({
                                                type: "metadata",
                                                content: JSON.stringify(v)
                                            });
                                            let _ = v.image;
                                            if ("string" != typeof _) return null;
                                            if (_.match(/^(https:\/\/|data:)/i));
                                            else {
                                                if (null == _.match(D)) return null;
                                                t.push({
                                                    type: "url-ipfs",
                                                    content: _
                                                }), _ = $(_)
                                            }
                                            return t.push({
                                                type: "url",
                                                content: _
                                            }),
                                            {
                                                linkage: t,
                                                url: _
                                            }
                                        }
                                }
                            }
                        } catch (t) {}
                        return null
                    }))
                }
                getContentHash() {
                    return x(this, void 0, void 0, (function*() {
                        const t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            const t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + o.Base58.encode("0x" + e[1])
                        }
                        const r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            const t = parseInt(r[3], 16);
                            if (r[4].length === 2 * t) return "ipns://" + o.Base58.encode("0x" + r[1])
                        }
                        const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        return n && 64 === n[1].length ? "bzz://" + n[1] : P.throwError("invalid or unsupported content hash data", N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    }))
                }
                getText(t) {
                    return x(this, void 0, void 0, (function*() {
                        let e = Object(k.f)(t);
                        e = Object(c.concat)([S(64), S(e.length), e]), e.length % 32 != 0 && (e = Object(c.concat)([e, Object(c.hexZeroPad)("0x", 32 - t.length % 32)]));
                        const r = yield this._fetchBytes("0x59d1d43c", Object(c.hexlify)(e));
                        return null == r || "0x" === r ? null : Object(k.h)(r)
                    }))
                }
            }
            let J = null,
                X = 1;
            class z extends n.b {
                constructor(t) {
                    if (P.checkNew(new.target, n.b), super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), Object(m.defineReadOnly)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch((t => {})), this._ready().catch((t => {}));
                    else {
                        const e = Object(m.getStatic)(new.target, "getNetwork")(t);
                        e ? (Object(m.defineReadOnly)(this, "_network", e), this.emit("network", e, null)) : P.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return x(this, void 0, void 0, (function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (t) {}
                            null == t && (t = yield this.detectNetwork()), t || P.throwError("no network detected", N.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : Object(m.defineReadOnly)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    }))
                }
                get ready() {
                    return Object(w.poll)((() => this._ready().then((t => t), (t => {
                        if (t.code !== N.Logger.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))))
                }
                static getFormatter() {
                    return null == J && (J = new E.a), J
                }
                static getNetwork(t) {
                    return Object(f.a)(null == t ? "homestead" : t)
                }
                ccipReadFetch(t, e, r) {
                    return x(this, void 0, void 0, (function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        const n = t.to.toLowerCase(),
                            data = e.toLowerCase(),
                            o = [];
                        for (let i = 0; i < r.length; i++) {
                            const t = r[i],
                                e = t.replace("{sender}", n).replace("{data}", data),
                                l = t.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: data,
                                    sender: n
                                }),
                                c = yield Object(w.fetchJson)({
                                    url: e,
                                    errorPassThrough: !0
                                }, l, ((t, e) => (t.status = e.statusCode, t)));
                            if (c.data) return c.data;
                            const h = c.message || "unknown error";
                            if (c.status >= 400 && c.status < 500) return P.throwError(`response not found during CCIP fetch: ${h}`, N.Logger.errors.SERVER_ERROR, {
                                url: t,
                                errorMessage: h
                            });
                            o.push(h)
                        }
                        return P.throwError(`error encountered during CCIP fetch: ${o.map((t=>JSON.stringify(t))).join(", ")}`, N.Logger.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    }))
                }
                _getInternalBlockNumber(t) {
                    return x(this, void 0, void 0, (function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                const e = this._internalBlockNumber;
                                try {
                                    const r = yield e;
                                    if (L() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (t) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        const e = L(),
                            r = Object(m.resolveProperties)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then((t => null), (t => t))
                            }).then((({
                                blockNumber: t,
                                networkError: n
                            }) => {
                                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                                const o = L();
                                return (t = l.a.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: o
                                }
                            }));
                        return this._internalBlockNumber = r, r.catch((t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        })), (yield r).blockNumber
                    }))
                }
                poll() {
                    return x(this, void 0, void 0, (function*() {
                        const t = X++,
                            e = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (t) {
                            return void this.emit("error", t)
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) P.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", P.makeError("network block skew detected", N.Logger.errors.NETWORK_ERROR, {
                                blockNumber: r,
                                event: "blockSkew",
                                previousBlockNumber: this._emitted.block
                            })), this.emit("block", r);
                            else
                                for (let i = this._emitted.block + 1; i <= r; i++) this.emit("block", i);
                            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach((t => {
                                if ("block" === t) return;
                                const e = this._emitted[t];
                                "pending" !== e && r - e > 12 && delete this._emitted[t]
                            }))), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach((t => {
                                switch (t.type) {
                                    case "tx":
                                        {
                                            const r = t.hash;
                                            let n = this.getTransactionReceipt(r).then((t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t), null) : null)).catch((t => {
                                                this.emit("error", t)
                                            }));e.push(n);
                                            break
                                        }
                                    case "filter":
                                        if (!t._inflight) {
                                            t._inflight = !0;
                                            const filter = t.filter;
                                            filter.fromBlock = t._lastBlockNumber + 1, filter.toBlock = r, filter.toBlock - this._maxFilterBlockRange > filter.fromBlock && (filter.fromBlock = filter.toBlock - this._maxFilterBlockRange);
                                            const n = this.getLogs(filter).then((e => {
                                                t._inflight = !1, 0 !== e.length && e.forEach((e => {
                                                    e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(filter, e)
                                                }))
                                            })).catch((e => {
                                                this.emit("error", e), t._inflight = !1
                                            }));
                                            e.push(n)
                                        }
                                }
                            })), this._lastBlockNumber = r, Promise.all(e).then((() => {
                                this.emit("didPoll", t)
                            })).catch((t => {
                                this.emit("error", t)
                            }))
                        } else this.emit("didPoll", t)
                    }))
                }
                resetEventsBlock(t) {
                    this._lastBlockNumber = t - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return x(this, void 0, void 0, (function*() {
                        return P.throwError("provider does not support network detection", N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    }))
                }
                getNetwork() {
                    return x(this, void 0, void 0, (function*() {
                        const t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield A(0), this._network;
                            const r = P.makeError("underlying network changed", N.Logger.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: t,
                                detectedNetwork: e
                            });
                            throw this.emit("error", r), r
                        }
                        return t
                    }))
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((t => {
                        this._setFastBlockNumber(t)
                    }), (t => {})), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(t) {
                    t && !this._poller ? (this._poller = setInterval((() => {
                        this.poll()
                    }), this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout((() => {
                        this.poll(), this._bootstrapPoll = setTimeout((() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }), this.pollingInterval)
                    }), 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(t) {
                    if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
                    this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval((() => {
                        this.poll()
                    }), this._pollingInterval))
                }
                _getFastBlockNumber() {
                    const t = L();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber)))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = L(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return x(this, void 0, void 0, (function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    }))
                }
                _waitForTransaction(t, e, r, n) {
                    return x(this, void 0, void 0, (function*() {
                        const o = yield this.getTransactionReceipt(t);
                        return (o ? o.confirmations : 0) >= e ? o : new Promise(((o, l) => {
                            const c = [];
                            let h = !1;
                            const d = function() {
                                    return !!h || (h = !0, c.forEach((t => {
                                        t()
                                    })), !1)
                                },
                                f = t => {
                                    t.confirmations < e || d() || o(t)
                                };
                            if (this.on(t, f), c.push((() => {
                                    this.removeListener(t, f)
                                })), n) {
                                let r = n.startBlock,
                                    o = null;
                                const f = c => x(this, void 0, void 0, (function*() {
                                    h || (yield A(1e3), this.getTransactionCount(n.from).then((m => x(this, void 0, void 0, (function*() {
                                        if (!h) {
                                            if (m <= n.nonce) r = c;
                                            else {
                                                {
                                                    const e = yield this.getTransaction(t);
                                                    if (e && null != e.blockNumber) return
                                                }
                                                for (null == o && (o = r - 3, o < n.startBlock && (o = n.startBlock)); o <= c;) {
                                                    if (h) return;
                                                    const r = yield this.getBlockWithTransactions(o);
                                                    for (let o = 0; o < r.transactions.length; o++) {
                                                        const c = r.transactions[o];
                                                        if (c.hash === t) return;
                                                        if (c.from === n.from && c.nonce === n.nonce) {
                                                            if (h) return;
                                                            const r = yield this.waitForTransaction(c.hash, e);
                                                            if (d()) return;
                                                            let o = "replaced";
                                                            return c.data === n.data && c.to === n.to && c.value.eq(n.value) ? o = "repriced" : "0x" === c.data && c.from === c.to && c.value.isZero() && (o = "cancelled"), void l(P.makeError("transaction was replaced", N.Logger.errors.TRANSACTION_REPLACED, {
                                                                cancelled: "replaced" === o || "cancelled" === o,
                                                                reason: o,
                                                                replacement: this._wrapTransaction(c),
                                                                hash: t,
                                                                receipt: r
                                                            }))
                                                        }
                                                    }
                                                    o++
                                                }
                                            }
                                            h || this.once("block", f)
                                        }
                                    }))), (t => {
                                        h || this.once("block", f)
                                    })))
                                }));
                                if (h) return;
                                this.once("block", f), c.push((() => {
                                    this.removeListener("block", f)
                                }))
                            }
                            if ("number" == typeof r && r > 0) {
                                const t = setTimeout((() => {
                                    d() || l(P.makeError("timeout exceeded", N.Logger.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }), r);
                                t.unref && t.unref(), c.push((() => {
                                    clearTimeout(t)
                                }))
                            }
                        }))
                    }))
                }
                getBlockNumber() {
                    return x(this, void 0, void 0, (function*() {
                        return this._getInternalBlockNumber(0)
                    }))
                }
                getGasPrice() {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield this.perform("getGasPrice", {});
                        try {
                            return l.a.from(t)
                        } catch (e) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    }))
                }
                getBalance(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getBalance", r);
                        try {
                            return l.a.from(n)
                        } catch (t) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    }))
                }
                getTransactionCount(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getTransactionCount", r);
                        try {
                            return l.a.from(n).toNumber()
                        } catch (t) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    }))
                }
                getCode(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getCode", r);
                        try {
                            return Object(c.hexlify)(n)
                        } catch (t) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    }))
                }
                getStorageAt(t, e, r) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const n = yield Object(m.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then((p => Object(c.hexValue)(p)))
                        }), o = yield this.perform("getStorageAt", n);
                        try {
                            return Object(c.hexlify)(o)
                        } catch (t) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: n,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== Object(c.hexDataLength)(e)) throw new Error("invalid response - sendTransaction");
                    const n = t;
                    return null != e && t.hash !== e && P.throwError("Transaction hash mismatch from Provider.sendTransaction.", N.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), n.wait = (e, n) => x(this, void 0, void 0, (function*() {
                        let o;
                        null == e && (e = 1), null == n && (n = 0), 0 !== e && null != r && (o = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        const l = yield this._waitForTransaction(t.hash, e, n, o);
                        return null == l && 0 === e ? null : (this._emitted["t:" + t.hash] = l.blockNumber, 0 === l.status && P.throwError("transaction failed", N.Logger.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: l
                        }), l)
                    })), n
                }
                sendTransaction(t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Promise.resolve(t).then((t => Object(c.hexlify)(t))), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        const n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, n)
                        } catch (t) {
                            throw t.transaction = r, t.transactionHash = r.hash, t
                        }
                    }))
                }
                _getTransactionRequest(t) {
                    return x(this, void 0, void 0, (function*() {
                        const e = yield t, r = {};
                        return ["from", "to"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? this._getAddress(t) : null)))
                        })), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? l.a.from(t) : null)))
                        })), ["type"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => null != t ? t : null)))
                        })), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? Object(c.hexlify)(t) : null)))
                        })), this.formatter.transactionRequest(yield Object(m.resolveProperties)(r))
                    }))
                }
                _getFilter(filter) {
                    return x(this, void 0, void 0, (function*() {
                        filter = yield filter;
                        const t = {};
                        return null != filter.address && (t.address = this._getAddress(filter.address)), ["blockHash", "topics"].forEach((e => {
                            null != filter[e] && (t[e] = filter[e])
                        })), ["fromBlock", "toBlock"].forEach((e => {
                            null != filter[e] && (t[e] = this._getBlockTag(filter[e]))
                        })), this.formatter.filter(yield Object(m.resolveProperties)(t))
                    }))
                }
                _call(t, e, r) {
                    return x(this, void 0, void 0, (function*() {
                        r >= 10 && P.throwError("CCIP read exceeded maximum redirections", N.Logger.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: t
                        });
                        const n = t.to,
                            o = yield this.perform("call", {
                                transaction: t,
                                blockTag: e
                            });
                        if (r >= 0 && "latest" === e && null != n && "0x556f1830" === o.substring(0, 10) && Object(c.hexDataLength)(o) % 32 == 4) try {
                            const data = Object(c.hexDataSlice)(o, 4),
                                h = Object(c.hexDataSlice)(data, 0, 32);
                            l.a.from(h).eq(n) || P.throwError("CCIP Read sender did not match", N.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: o
                            });
                            const d = [],
                                f = l.a.from(Object(c.hexDataSlice)(data, 32, 64)).toNumber(),
                                m = l.a.from(Object(c.hexDataSlice)(data, f, f + 32)).toNumber(),
                                y = Object(c.hexDataSlice)(data, f + 32);
                            for (let u = 0; u < m; u++) {
                                const e = F(y, 32 * u);
                                null == e && P.throwError("CCIP Read contained corrupt URL string", N.Logger.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: o
                                }), d.push(e)
                            }
                            const k = K(data, 64);
                            l.a.from(Object(c.hexDataSlice)(data, 100, 128)).isZero() || P.throwError("CCIP Read callback selector included junk", N.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: o
                            });
                            const w = Object(c.hexDataSlice)(data, 96, 100),
                                v = K(data, 128),
                                _ = yield this.ccipReadFetch(t, k, d);
                            null == _ && P.throwError("CCIP Read disabled or provided no URLs", N.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: o
                            });
                            const O = {
                                to: n,
                                data: Object(c.hexConcat)([w, V([_, v])])
                            };
                            return this._call(O, e, r + 1)
                        } catch (t) {
                            if (t.code === N.Logger.errors.SERVER_ERROR) throw t
                        }
                        try {
                            return Object(c.hexlify)(o)
                        } catch (r) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: t,
                                    blockTag: e
                                },
                                result: o,
                                error: r
                            })
                        }
                    }))
                }
                call(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.resolveProperties)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e),
                            ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    }))
                }
                estimateGas(t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Object(m.resolveProperties)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return l.a.from(r)
                        } catch (t) {
                            return P.throwError("bad result from backend", N.Logger.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: t
                            })
                        }
                    }))
                }
                _getAddress(t) {
                    return x(this, void 0, void 0, (function*() {
                        "string" != typeof(t = yield t) && P.throwArgumentError("invalid address or ENS name", "name", t);
                        const address = yield this.resolveName(t);
                        return null == address && P.throwError("ENS name not configured", N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), address
                    }))
                }
                _getBlock(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128;
                        const n = {
                            includeTransactions: !!e
                        };
                        if (Object(c.isHexString)(t, 32)) n.blockHash = t;
                        else try {
                            n.blockTag = yield this._getBlockTag(t), Object(c.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (e) {
                            P.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return Object(w.poll)((() => x(this, void 0, void 0, (function*() {
                            const t = yield this.perform("getBlock", n);
                            if (null == t) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                            if (e) {
                                let e = null;
                                for (let i = 0; i < t.transactions.length; i++) {
                                    const r = t.transactions[i];
                                    if (null == r.blockNumber) r.confirmations = 0;
                                    else if (null == r.confirmations) {
                                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let t = e - r.blockNumber + 1;
                                        t <= 0 && (t = 1), r.confirmations = t
                                    }
                                }
                                const r = this.formatter.blockWithTransactions(t);
                                return r.transactions = r.transactions.map((t => this._wrapTransaction(t))), r
                            }
                            return this.formatter.block(t)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getBlock(t) {
                    return this._getBlock(t, !1)
                }
                getBlockWithTransactions(t) {
                    return this._getBlock(t, !0)
                }
                getTransaction(t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(w.poll)((() => x(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            const n = this.formatter.transactionResponse(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return this._wrapTransaction(n)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getTransactionReceipt(t) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(w.poll)((() => x(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            const n = this.formatter.receipt(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                                t <= 0 && (t = 1), n.confirmations = t
                            }
                            return n
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getLogs(filter) {
                    return x(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield Object(m.resolveProperties)({
                            filter: this._getFilter(filter)
                        }), e = yield this.perform("getLogs", t);
                        return e.forEach((t => {
                            null == t.removed && (t.removed = !1)
                        })), E.a.arrayOf(this.formatter.filterLog.bind(this.formatter))(e)
                    }))
                }
                getEtherPrice() {
                    return x(this, void 0, void 0, (function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    }))
                }
                _getBlockTag(t) {
                    return x(this, void 0, void 0, (function*() {
                        if ("number" == typeof(t = yield t) && t < 0) {
                            t % 1 && P.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return e += t, e < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    }))
                }
                getResolver(t) {
                    return x(this, void 0, void 0, (function*() {
                        let e = t;
                        for (;;) {
                            if ("" === e || "." === e) return null;
                            if ("eth" !== t && "eth" === e) return null;
                            const r = yield this._getResolver(e, "getResolver");
                            if (null != r) {
                                const n = new W(this, r, t);
                                return e === t || (yield n.supportsWildcard()) ? n : null
                            }
                            e = e.split(".").slice(1).join(".")
                        }
                    }))
                }
                _getResolver(t, e) {
                    return x(this, void 0, void 0, (function*() {
                        null == e && (e = "ENS");
                        const r = yield this.getNetwork();
                        r.ensAddress || P.throwError("network does not support ENS", N.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e,
                            network: r.name
                        });
                        try {
                            const e = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + Object(d.c)(t).substring(2)
                            });
                            return this.formatter.callAddress(e)
                        } catch (t) {}
                        return null
                    }))
                }
                resolveName(t) {
                    return x(this, void 0, void 0, (function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (e) {
                            if (Object(c.isHexString)(t)) throw e
                        }
                        "string" != typeof t && P.throwArgumentError("invalid ENS name", "name", t);
                        const e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    }))
                }
                lookupAddress(address) {
                    return x(this, void 0, void 0, (function*() {
                        address = yield address;
                        const t = (address = this.formatter.address(address)).substring(2).toLowerCase() + ".addr.reverse",
                            e = yield this._getResolver(t, "lookupAddress");
                        if (null == e) return null;
                        const r = F(yield this.call({
                            to: e,
                            data: "0x691f3431" + Object(d.c)(t).substring(2)
                        }), 0);
                        return (yield this.resolveName(r)) != address ? null : r
                    }))
                }
                getAvatar(t) {
                    return x(this, void 0, void 0, (function*() {
                        let e = null;
                        if (Object(c.isHexString)(t)) {
                            const r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse",
                                n = yield this._getResolver(r, "getAvatar");
                            if (!n) return null;
                            e = new W(this, n, r);
                            try {
                                const t = yield e.getAvatar();
                                if (t) return t.url
                            } catch (t) {
                                if (t.code !== N.Logger.errors.CALL_EXCEPTION) throw t
                            }
                            try {
                                const t = F(yield this.call({
                                    to: n,
                                    data: "0x691f3431" + Object(d.c)(r).substring(2)
                                }), 0);
                                e = yield this.getResolver(t)
                            } catch (t) {
                                if (t.code !== N.Logger.errors.CALL_EXCEPTION) throw t;
                                return null
                            }
                        } else if (e = yield this.getResolver(t), !e) return null;
                        const r = yield e.getAvatar();
                        return null == r ? null : r.url
                    }))
                }
                perform(t, e) {
                    return P.throwError(t + " not implemented", N.Logger.errors.NOT_IMPLEMENTED, {
                        operation: t
                    })
                }
                _startEvent(t) {
                    this.polling = this._events.filter((t => t.pollable())).length > 0
                }
                _stopEvent(t) {
                    this.polling = this._events.filter((t => t.pollable())).length > 0
                }
                _addEventListener(t, e, r) {
                    const n = new I(j(t), e, r);
                    return this._events.push(n), this._startEvent(n), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        n = [],
                        o = j(t);
                    return this._events = this._events.filter((t => t.tag !== o || (setTimeout((() => {
                        t.listener.apply(this, e)
                    }), 0), r = !0, !t.once || (n.push(t), !1)))), n.forEach((t => {
                        this._stopEvent(t)
                    })), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = j(t);
                    return this._events.filter((t => t.tag === e)).length
                }
                listeners(t) {
                    if (null == t) return this._events.map((t => t.listener));
                    let e = j(t);
                    return this._events.filter((t => t.tag === e)).map((t => t.listener))
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    const r = [];
                    let n = !1,
                        o = j(t);
                    return this._events = this._events.filter((t => t.tag !== o || t.listener != e || (!!n || (n = !0, r.push(t), !1)))), r.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        const r = j(t);
                        this._events = this._events.filter((t => t.tag !== r || (e.push(t), !1)))
                    }
                    return e.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
            }
        },
        382: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return m
            }));
            const n = new(r(7).Logger)("networks/5.6.2");

            function o(t) {
                const e = function(e, r) {
                    null == r && (r = {});
                    const n = [];
                    if (e.InfuraProvider && "-" !== r.infura) try {
                        n.push(new e.InfuraProvider(t, r.infura))
                    } catch (t) {}
                    if (e.EtherscanProvider && "-" !== r.etherscan) try {
                        n.push(new e.EtherscanProvider(t, r.etherscan))
                    } catch (t) {}
                    if (e.AlchemyProvider && "-" !== r.alchemy) try {
                        n.push(new e.AlchemyProvider(t, r.alchemy))
                    } catch (t) {}
                    if (e.PocketProvider && "-" !== r.pocket) {
                        const o = ["goerli", "ropsten", "rinkeby"];
                        try {
                            const l = new e.PocketProvider(t, r.pocket);
                            l.network && -1 === o.indexOf(l.network.name) && n.push(l)
                        } catch (t) {}
                    }
                    if (e.CloudflareProvider && "-" !== r.cloudflare) try {
                        n.push(new e.CloudflareProvider(t))
                    } catch (t) {}
                    if (e.AnkrProvider && "-" !== r.ankr) try {
                        n.push(new e.AnkrProvider(t, r.ankr))
                    } catch (t) {}
                    if (0 === n.length) return null;
                    if (e.FallbackProvider) {
                        let o = 1;
                        return null != r.quorum ? o = r.quorum : "homestead" === t && (o = 2), new e.FallbackProvider(n, o)
                    }
                    return n[0]
                };
                return e.renetwork = function(t) {
                    return o(t)
                }, e
            }

            function l(t, e) {
                const r = function(r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
                };
                return r.renetwork = function(e) {
                    return l(t, e)
                }, r
            }
            const c = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: o("homestead")
                },
                h = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: o("ropsten")
                },
                d = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: l("https://www.ethercluster.com/mordor", "classicMordor")
                },
                f = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: c,
                    mainnet: c,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: h,
                    testnet: h,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: o("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: o("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: o("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: l("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: d,
                    classicTestnet: d,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: l("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic"
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism"
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };

            function m(t) {
                if (null == t) return null;
                if ("number" == typeof t) {
                    for (const e in f) {
                        const r = f[e];
                        if (r.chainId === t) return {
                            name: r.name,
                            chainId: r.chainId,
                            ensAddress: r.ensAddress || null,
                            _defaultProvider: r._defaultProvider || null
                        }
                    }
                    return {
                        chainId: t,
                        name: "unknown"
                    }
                }
                if ("string" == typeof t) {
                    const e = f[t];
                    return null == e ? null : {
                        name: e.name,
                        chainId: e.chainId,
                        ensAddress: e.ensAddress,
                        _defaultProvider: e._defaultProvider || null
                    }
                }
                const e = f[t.name];
                if (!e) return "number" != typeof t.chainId && n.throwArgumentError("invalid network chainId", "network", t), t;
                0 !== t.chainId && t.chainId !== e.chainId && n.throwArgumentError("network chainId mismatch", "network", t);
                let r = t._defaultProvider || null;
                var o;
                return null == r && e._defaultProvider && (r = (o = e._defaultProvider) && "function" == typeof o.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider), {
                    name: t.name,
                    chainId: e.chainId,
                    ensAddress: t.ensAddress || e.ensAddress || null,
                    _defaultProvider: r
                }
            }
        },
        458: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return y
            })), r.d(e, "a", (function() {
                return k
            }));
            var n = r(5),
                o = r(111),
                l = r(280),
                c = r(7),
                h = r(54),
                d = r(136);
            const f = new c.Logger(h.a),
                m = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class y extends l.a {
                constructor(t, e) {
                    const r = new k(t, e);
                    super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), Object(n.defineReadOnly)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === m
                }
            }
            class k extends d.b {
                static getWebSocketProvider(t, e) {
                    return new y(t, e)
                }
                static getApiKey(t) {
                    return null == t ? m : (t && "string" != typeof t && f.throwArgumentError("invalid apiKey", "apiKey", t), t)
                }
                static getUrl(t, e) {
                    let r = null;
                    switch (t.name) {
                        case "homestead":
                            r = "eth-mainnet.alchemyapi.io/v2/";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.alchemyapi.io/v2/";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.alchemyapi.io/v2/";
                            break;
                        case "goerli":
                            r = "eth-goerli.alchemyapi.io/v2/";
                            break;
                        case "kovan":
                            r = "eth-kovan.alchemyapi.io/v2/";
                            break;
                        case "matic":
                            r = "polygon-mainnet.g.alchemy.com/v2/";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.g.alchemy.com/v2/";
                            break;
                        case "arbitrum":
                            r = "arb-mainnet.g.alchemy.com/v2/";
                            break;
                        case "arbitrum-rinkeby":
                            r = "arb-rinkeby.g.alchemy.com/v2/";
                            break;
                        case "optimism":
                            r = "opt-mainnet.g.alchemy.com/v2/";
                            break;
                        case "optimism-kovan":
                            r = "opt-kovan.g.alchemy.com/v2/";
                            break;
                        default:
                            f.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + r + e,
                        throttleCallback: (t, r) => (e === m && Object(o.d)(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === m
                }
            }
        },
        5: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "defineReadOnly", (function() {
                return c
            })), r.d(e, "getStatic", (function() {
                return h
            })), r.d(e, "resolveProperties", (function() {
                return d
            })), r.d(e, "checkProperties", (function() {
                return f
            })), r.d(e, "shallowCopy", (function() {
                return m
            })), r.d(e, "deepCopy", (function() {
                return v
            })), r.d(e, "Description", (function() {
                return _
            }));
            var n = r(7);
            var o = function(t, e, r, n) {
                return new(r || (r = Promise))((function(o, l) {
                    function c(t) {
                        try {
                            d(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function h(t) {
                        try {
                            d(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function d(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(c, h)
                    }
                    d((n = n.apply(t, e || [])).next())
                }))
            };
            const l = new n.Logger("properties/5.6.0");

            function c(object, t, e) {
                Object.defineProperty(object, t, {
                    enumerable: !0,
                    value: e,
                    writable: !1
                })
            }

            function h(t, e) {
                for (let i = 0; i < 32; i++) {
                    if (t[e]) return t[e];
                    if (!t.prototype || "object" != typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function d(object) {
                return o(this, void 0, void 0, (function*() {
                    const t = Object.keys(object).map((t => {
                        const e = object[t];
                        return Promise.resolve(e).then((e => ({
                            key: t,
                            value: e
                        })))
                    }));
                    return (yield Promise.all(t)).reduce(((t, e) => (t[e.key] = e.value, t)), {})
                }))
            }

            function f(object, t) {
                object && "object" == typeof object || l.throwArgumentError("invalid object", "object", object), Object.keys(object).forEach((e => {
                    t[e] || l.throwArgumentError("invalid object key - " + e, "transaction:" + e, object)
                }))
            }

            function m(object) {
                const t = {};
                for (const e in object) t[e] = object[e];
                return t
            }
            const y = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function k(object) {
                if (null == object || y[typeof object]) return !0;
                if (Array.isArray(object) || "object" == typeof object) {
                    if (!Object.isFrozen(object)) return !1;
                    const t = Object.keys(object);
                    for (let i = 0; i < t.length; i++) {
                        let e = null;
                        try {
                            e = object[t[i]]
                        } catch (t) {
                            continue
                        }
                        if (!k(e)) return !1
                    }
                    return !0
                }
                return l.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function w(object) {
                if (k(object)) return object;
                if (Array.isArray(object)) return Object.freeze(object.map((t => v(t))));
                if ("object" == typeof object) {
                    const t = {};
                    for (const e in object) {
                        const r = object[e];
                        void 0 !== r && c(t, e, v(r))
                    }
                    return t
                }
                return l.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function v(object) {
                return w(object)
            }
            class _ {
                constructor(t) {
                    for (const e in t) this[e] = v(t[e])
                }
            }
        },
        54: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            const n = "providers/5.6.4"
        },
        601: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return I
            }));
            var n = r(171),
                o = r(16),
                l = r(0),
                c = r(5),
                h = r(599),
                d = r(99),
                f = r(211),
                m = r(111),
                y = r(7),
                k = r(54),
                w = function(t, e, r, n) {
                    return new(r || (r = Promise))((function(o, l) {
                        function c(t) {
                            try {
                                d(n.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(n.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((n = n.apply(t, e || [])).next())
                    }))
                };
            const v = new y.Logger(k.a);

            function _() {
                return (new Date).getTime()
            }

            function N(t) {
                let e = null;
                for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    if (null == r) return null;
                    e ? e.name === r.name && e.chainId === r.chainId && (e.ensAddress === r.ensAddress || null == e.ensAddress && null == r.ensAddress) || v.throwArgumentError("provider mismatch", "networks", t) : e = r
                }
                return e
            }

            function O(t, e) {
                t = t.slice().sort();
                const r = Math.floor(t.length / 2);
                if (t.length % 2) return t[r];
                const a = t[r - 1],
                    b = t[r];
                return null != e && Math.abs(a - b) > e ? null : (a + b) / 2
            }

            function E(t) {
                if (null === t) return "null";
                if ("number" == typeof t || "boolean" == typeof t) return JSON.stringify(t);
                if ("string" == typeof t) return t;
                if (o.a.isBigNumber(t)) return t.toString();
                if (Array.isArray(t)) return JSON.stringify(t.map((i => E(i))));
                if ("object" == typeof t) {
                    const e = Object.keys(t);
                    return e.sort(), "{" + e.map((e => {
                        let r = t[e];
                        return r = "function" == typeof r ? "[function]" : E(r), JSON.stringify(e) + ":" + r
                    })).join(",") + "}"
                }
                throw new Error("unknown value type: " + typeof t)
            }
            let x = 1;

            function P(t) {
                let e = null,
                    r = null,
                    n = new Promise((n => {
                        e = function() {
                            r && (clearTimeout(r), r = null), n()
                        }, r = setTimeout(e, t)
                    }));
                return {
                    cancel: e,
                    getPromise: function() {
                        return n
                    },
                    wait: t => (n = n.then(t), n)
                }
            }
            const R = [y.Logger.errors.CALL_EXCEPTION, y.Logger.errors.INSUFFICIENT_FUNDS, y.Logger.errors.NONCE_EXPIRED, y.Logger.errors.REPLACEMENT_UNDERPRICED, y.Logger.errors.UNPREDICTABLE_GAS_LIMIT],
                T = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function j(t, e) {
                const r = {
                    weight: t.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => t.provider
                }), t.start && (r.start = t.start), e && (r.duration = e - t.start), t.done && (t.error ? r.error = t.error : r.result = t.result || null), r
            }

            function L(t, e, r) {
                let n = E;
                switch (e) {
                    case "getBlockNumber":
                        return function(e) {
                            const r = e.map((t => t.result));
                            let n = O(e.map((t => t.result)), 2);
                            if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= t._highestBlockNumber && (t._highestBlockNumber = n), t._highestBlockNumber
                        };
                    case "getGasPrice":
                        return function(t) {
                            const e = t.map((t => t.result));
                            return e.sort(), e[Math.floor(e.length / 2)]
                        };
                    case "getEtherPrice":
                        return function(t) {
                            return O(t.map((t => t.result)))
                        };
                    case "getBalance":
                    case "getTransactionCount":
                    case "getCode":
                    case "getStorageAt":
                    case "call":
                    case "estimateGas":
                    case "getLogs":
                        break;
                    case "getTransaction":
                    case "getTransactionReceipt":
                        n = function(t) {
                            return null == t ? null : ((t = Object(c.shallowCopy)(t)).confirmations = -1, E(t))
                        };
                        break;
                    case "getBlock":
                        n = r.includeTransactions ? function(t) {
                            return null == t ? null : ((t = Object(c.shallowCopy)(t)).transactions = t.transactions.map((t => ((t = Object(c.shallowCopy)(t)).confirmations = -1, t))), E(t))
                        } : function(t) {
                            return null == t ? null : E(t)
                        };
                        break;
                    default:
                        throw new Error("unknown method: " + e)
                }
                return function(t, e) {
                    return function(r) {
                        const n = {};
                        r.forEach((e => {
                            const r = t(e.result);
                            n[r] || (n[r] = {
                                count: 0,
                                result: e.result
                            }), n[r].count++
                        }));
                        const o = Object.keys(n);
                        for (let i = 0; i < o.length; i++) {
                            const t = n[o[i]];
                            if (t.count >= e) return t.result
                        }
                    }
                }(n, t.quorum)
            }

            function A(t, e) {
                return w(this, void 0, void 0, (function*() {
                    const r = t.provider;
                    return null != r.blockNumber && r.blockNumber >= e || -1 === e ? r : Object(d.poll)((() => new Promise(((n, o) => {
                        setTimeout((function() {
                            return r.blockNumber >= e ? n(r) : t.cancelled ? n(null) : n(void 0)
                        }), 0)
                    }))), {
                        oncePoll: r
                    })
                }))
            }

            function B(t, e, r, n) {
                return w(this, void 0, void 0, (function*() {
                    let o = t.provider;
                    switch (r) {
                        case "getBlockNumber":
                        case "getGasPrice":
                            return o[r]();
                        case "getEtherPrice":
                            if (o.getEtherPrice) return o.getEtherPrice();
                            break;
                        case "getBalance":
                        case "getTransactionCount":
                        case "getCode":
                            return n.blockTag && Object(l.isHexString)(n.blockTag) && (o = yield A(t, e)), o[r](n.address, n.blockTag || "latest");
                        case "getStorageAt":
                            return n.blockTag && Object(l.isHexString)(n.blockTag) && (o = yield A(t, e)), o.getStorageAt(n.address, n.position, n.blockTag || "latest");
                        case "getBlock":
                            return n.blockTag && Object(l.isHexString)(n.blockTag) && (o = yield A(t, e)), o[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                        case "call":
                        case "estimateGas":
                            return n.blockTag && Object(l.isHexString)(n.blockTag) && (o = yield A(t, e)), o[r](n.transaction);
                        case "getTransaction":
                        case "getTransactionReceipt":
                            return o[r](n.transactionHash);
                        case "getLogs":
                            {
                                let filter = n.filter;
                                return (filter.fromBlock && Object(l.isHexString)(filter.fromBlock) || filter.toBlock && Object(l.isHexString)(filter.toBlock)) && (o = yield A(t, e)),
                                o.getLogs(filter)
                            }
                    }
                    return v.throwError("unknown method error", y.Logger.errors.UNKNOWN_ERROR, {
                        method: r,
                        params: n
                    })
                }))
            }
            class I extends f.a {
                constructor(t, e) {
                    v.checkNew(new.target, I), 0 === t.length && v.throwArgumentError("missing providers", "providers", t);
                    const r = t.map(((t, e) => {
                            if (n.b.isProvider(t)) {
                                const e = Object(m.c)(t) ? 2e3 : 750,
                                    r = 1;
                                return Object.freeze({
                                    provider: t,
                                    weight: 1,
                                    stallTimeout: e,
                                    priority: r
                                })
                            }
                            const r = Object(c.shallowCopy)(t);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = Object(m.c)(t) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            const o = r.weight;
                            return (o % 1 || o > 512 || o < 1) && v.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${e}].weight`, o), Object.freeze(r)
                        })),
                        o = r.reduce(((t, e) => t + e.weight), 0);
                    null == e ? e = o / 2 : e > o && v.throwArgumentError("quorum will always fail; larger than total weight", "quorum", e);
                    let l = N(r.map((t => t.provider.network)));
                    null == l && (l = new Promise(((t, e) => {
                        setTimeout((() => {
                            this.detectNetwork().then(t, e)
                        }), 0)
                    }))), super(l), Object(c.defineReadOnly)(this, "providerConfigs", Object.freeze(r)), Object(c.defineReadOnly)(this, "quorum", e), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return w(this, void 0, void 0, (function*() {
                        return N(yield Promise.all(this.providerConfigs.map((t => t.provider.getNetwork()))))
                    }))
                }
                perform(t, e) {
                    return w(this, void 0, void 0, (function*() {
                        if ("sendTransaction" === t) {
                            const t = yield Promise.all(this.providerConfigs.map((t => t.provider.sendTransaction(e.signedTransaction).then((t => t.hash), (t => t)))));
                            for (let i = 0; i < t.length; i++) {
                                const e = t[i];
                                if ("string" == typeof e) return e
                            }
                            throw t[0]
                        } - 1 === this._highestBlockNumber && "getBlockNumber" !== t && (yield this.getBlockNumber());
                        const r = L(this, t, e),
                            n = Object(h.a)(this.providerConfigs.map(c.shallowCopy));
                        n.sort(((a, b) => a.priority - b.priority));
                        const o = this._highestBlockNumber;
                        let i = 0,
                            l = !0;
                        for (;;) {
                            const h = _();
                            let d = n.filter((t => t.runner && h - t.start < t.stallTimeout)).reduce(((t, e) => t + e.weight), 0);
                            for (; d < this.quorum && i < n.length;) {
                                const r = n[i++],
                                    l = x++;
                                r.start = _(), r.staller = P(r.stallTimeout), r.staller.wait((() => {
                                    r.staller = null
                                })), r.runner = B(r, o, t, e).then((n => {
                                    r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: l,
                                        backend: j(r, _()),
                                        request: {
                                            method: t,
                                            params: Object(c.deepCopy)(e)
                                        },
                                        provider: this
                                    })
                                }), (n => {
                                    r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: l,
                                        backend: j(r, _()),
                                        request: {
                                            method: t,
                                            params: Object(c.deepCopy)(e)
                                        },
                                        provider: this
                                    })
                                })), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: l,
                                    backend: j(r, null),
                                    request: {
                                        method: t,
                                        params: Object(c.deepCopy)(e)
                                    },
                                    provider: this
                                }), d += r.weight
                            }
                            const f = [];
                            n.forEach((t => {
                                !t.done && t.runner && (f.push(t.runner), t.staller && f.push(t.staller.getPromise()))
                            })), f.length && (yield Promise.race(f));
                            const m = n.filter((t => t.done && null == t.error));
                            if (m.length >= this.quorum) {
                                const t = r(m);
                                if (void 0 !== t) return n.forEach((t => {
                                    t.staller && t.staller.cancel(), t.cancelled = !0
                                })), t;
                                l || (yield P(100).getPromise()), l = !1
                            }
                            const y = n.reduce(((t, e) => {
                                if (!e.done || null == e.error) return t;
                                const code = e.error.code;
                                return R.indexOf(code) >= 0 && (t[code] || (t[code] = {
                                    error: e.error,
                                    weight: 0
                                }), t[code].weight += e.weight), t
                            }), {});
                            if (Object.keys(y).forEach((t => {
                                    const e = y[t];
                                    if (e.weight < this.quorum) return;
                                    n.forEach((t => {
                                        t.staller && t.staller.cancel(), t.cancelled = !0
                                    }));
                                    const r = e.error,
                                        o = {};
                                    T.forEach((t => {
                                        null != r[t] && (o[t] = r[t])
                                    })), v.throwError(r.reason || r.message, t, o)
                                })), 0 === n.filter((t => !t.done)).length) break
                        }
                        return n.forEach((t => {
                            t.staller && t.staller.cancel(), t.cancelled = !0
                        })), v.throwError("failed to meet quorum", y.Logger.errors.SERVER_ERROR, {
                            method: t,
                            params: e,
                            results: n.map((t => j(t))),
                            provider: this
                        })
                    }))
                }
            }
        },
        602: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return m
            }));
            var n = r(111),
                o = r(136),
                l = r(7),
                c = r(54);
            const h = new l.Logger(c.a),
                d = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";

            function f(t) {
                switch (t) {
                    case "homestead":
                        return "rpc.ankr.com/eth/";
                    case "matic":
                        return "rpc.ankr.com/polygon/";
                    case "arbitrum":
                        return "rpc.ankr.com/arbitrum/"
                }
                return h.throwArgumentError("unsupported network", "name", t)
            }
            class m extends o.b {
                isCommunityResource() {
                    return this.apiKey === d
                }
                static getApiKey(t) {
                    return null == t ? d : t
                }
                static getUrl(t, e) {
                    null == e && (e = d);
                    const r = {
                        allowGzip: !0,
                        url: "https://" + f(t.name) + e,
                        throttleCallback: (t, r) => (e.apiKey === d && Object(n.d)(), Promise.resolve(!0))
                    };
                    return null != e.projectSecret && (r.user = "", r.password = e.projectSecret), r
                }
            }
        },
        603: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return d
            }));
            var n = r(136),
                o = r(7),
                l = r(54),
                c = function(t, e, r, n) {
                    return new(r || (r = Promise))((function(o, l) {
                        function c(t) {
                            try {
                                d(n.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(n.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((n = n.apply(t, e || [])).next())
                    }))
                };
            const h = new o.Logger(l.a);
            class d extends n.b {
                static getApiKey(t) {
                    return null != t && h.throwArgumentError("apiKey not supported for cloudflare", "apiKey", t), null
                }
                static getUrl(t, e) {
                    let r = null;
                    if ("homestead" === t.name) r = "https://cloudflare-eth.com/";
                    else h.throwArgumentError("unsupported network", "network", arguments[0]);
                    return r
                }
                perform(t, e) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return c(this, void 0, void 0, (function*() {
                        if ("getBlockNumber" === t) {
                            return (yield r.perform.call(this, "getBlock", {
                                blockTag: "latest"
                            })).number
                        }
                        return r.perform.call(this, t, e)
                    }))
                }
            }
        },
        604: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return x
            }));
            var n = r(0),
                o = r(5),
                l = r(59),
                c = r(99),
                h = r(111),
                d = r(7),
                f = r(54),
                m = r(211),
                y = function(t, e, r, n) {
                    return new(r || (r = Promise))((function(o, l) {
                        function c(t) {
                            try {
                                d(n.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(n.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((n = n.apply(t, e || [])).next())
                    }))
                };
            const k = new d.Logger(f.a);

            function w(t) {
                const e = {};
                for (let r in t) {
                    if (null == t[r]) continue;
                    let o = t[r];
                    "type" === r && 0 === o || (o = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    }[r] ? Object(n.hexValue)(Object(n.hexlify)(o)) : "accessList" === r ? "[" + Object(l.accessListify)(o).map((t => `{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`)).join(",") + "]" : Object(n.hexlify)(o), e[r] = o)
                }
                return e
            }

            function v(t) {
                if (0 == t.status && ("No records found" === t.message || "No transactions found" === t.message)) return t.result;
                if (1 != t.status || "OK" != t.message) {
                    const e = new Error("invalid response");
                    throw e.result = JSON.stringify(t), (t.result || "").toLowerCase().indexOf("rate limit") >= 0 && (e.throttleRetry = !0), e
                }
                return t.result
            }

            function _(t) {
                if (t && 0 == t.status && "NOTOK" == t.message && (t.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                    const e = new Error("throttled response");
                    throw e.result = JSON.stringify(t), e.throttleRetry = !0, e
                }
                if ("2.0" != t.jsonrpc) {
                    const e = new Error("invalid response");
                    throw e.result = JSON.stringify(t), e
                }
                if (t.error) {
                    const e = new Error(t.error.message || "unknown error");
                    throw t.error.code && (e.code = t.error.code), t.error.data && (e.data = t.error.data), e
                }
                return t.result
            }

            function N(t) {
                if ("pending" === t) throw new Error("pending not supported");
                return "latest" === t ? t : parseInt(t.substring(2), 16)
            }
            const O = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";

            function E(t, e, r) {
                if ("call" === t && e.code === d.Logger.errors.SERVER_ERROR) {
                    const t = e.error;
                    if (t && (t.message.match(/reverted/i) || t.message.match(/VM execution error/i))) {
                        let data = t.data;
                        if (data && (data = "0x" + data.replace(/^.*0x/i, "")), Object(n.isHexString)(data)) return data;
                        k.throwError("missing revert data in call exception", d.Logger.errors.CALL_EXCEPTION, {
                            error: e,
                            data: "0x"
                        })
                    }
                }
                let o = e.message;
                throw e.code === d.Logger.errors.SERVER_ERROR && (e.error && "string" == typeof e.error.message ? o = e.error.message : "string" == typeof e.body ? o = e.body : "string" == typeof e.responseText && (o = e.responseText)), o = (o || "").toLowerCase(), o.match(/insufficient funds/) && k.throwError("insufficient funds for intrinsic transaction cost", d.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && k.throwError("nonce has already been used", d.Logger.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/another transaction with same nonce/) && k.throwError("replacement fee too low", d.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: r
                }), o.match(/execution failed due to an exception|execution reverted/) && k.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", d.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: r
                }), e
            }
            class x extends m.a {
                constructor(t, e) {
                    k.checkNew(new.target, x), super(t), Object(o.defineReadOnly)(this, "baseUrl", this.getBaseUrl()), Object(o.defineReadOnly)(this, "apiKey", e || O)
                }
                getBaseUrl() {
                    switch (this.network ? this.network.name : "invalid") {
                        case "homestead":
                            return "https://api.etherscan.io";
                        case "ropsten":
                            return "https://api-ropsten.etherscan.io";
                        case "rinkeby":
                            return "https://api-rinkeby.etherscan.io";
                        case "kovan":
                            return "https://api-kovan.etherscan.io";
                        case "goerli":
                            return "https://api-goerli.etherscan.io"
                    }
                    return k.throwArgumentError("unsupported network", "network", name)
                }
                getUrl(t, e) {
                    const r = Object.keys(e).reduce(((t, r) => {
                            const n = e[r];
                            return null != n && (t += `&${r}=${n}`), t
                        }), ""),
                        n = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${t}${r}${n}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(t, e) {
                    return e.module = t, e.apikey = this.apiKey, e
                }
                fetch(t, e, r) {
                    return y(this, void 0, void 0, (function*() {
                        const n = r ? this.getPostUrl() : this.getUrl(t, e),
                            l = r ? this.getPostData(t, e) : null,
                            d = "proxy" === t ? _ : v;
                        this.emit("debug", {
                            action: "request",
                            request: n,
                            provider: this
                        });
                        const f = {
                            url: n,
                            throttleSlotInterval: 1e3,
                            throttleCallback: (t, e) => (this.isCommunityResource() && Object(h.d)(), Promise.resolve(!0))
                        };
                        let m = null;
                        l && (f.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, m = Object.keys(l).map((t => `${t}=${l[t]}`)).join("&"));
                        const y = yield Object(c.fetchJson)(f, m, d || _);
                        return this.emit("debug", {
                            action: "response",
                            request: n,
                            response: Object(o.deepCopy)(y),
                            provider: this
                        }), y
                    }))
                }
                detectNetwork() {
                    return y(this, void 0, void 0, (function*() {
                        return this.network
                    }))
                }
                perform(t, e) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return y(this, void 0, void 0, (function*() {
                        switch (t) {
                            case "getBlockNumber":
                                return this.fetch("proxy", {
                                    action: "eth_blockNumber"
                                });
                            case "getGasPrice":
                                return this.fetch("proxy", {
                                    action: "eth_gasPrice"
                                });
                            case "getBalance":
                                return this.fetch("account", {
                                    action: "balance",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getTransactionCount":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionCount",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getCode":
                                return this.fetch("proxy", {
                                    action: "eth_getCode",
                                    address: e.address,
                                    tag: e.blockTag
                                });
                            case "getStorageAt":
                                return this.fetch("proxy", {
                                    action: "eth_getStorageAt",
                                    address: e.address,
                                    position: e.position,
                                    tag: e.blockTag
                                });
                            case "sendTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_sendRawTransaction",
                                    hex: e.signedTransaction
                                }, !0).catch((t => E("sendTransaction", t, e.signedTransaction)));
                            case "getBlock":
                                if (e.blockTag) return this.fetch("proxy", {
                                    action: "eth_getBlockByNumber",
                                    tag: e.blockTag,
                                    boolean: e.includeTransactions ? "true" : "false"
                                });
                                throw new Error("getBlock by blockHash not implemented");
                            case "getTransaction":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionByHash",
                                    txhash: e.transactionHash
                                });
                            case "getTransactionReceipt":
                                return this.fetch("proxy", {
                                    action: "eth_getTransactionReceipt",
                                    txhash: e.transactionHash
                                });
                            case "call":
                                {
                                    if ("latest" !== e.blockTag) throw new Error("EtherscanProvider does not support blockTag for call");
                                    const t = w(e.transaction);t.module = "proxy",
                                    t.action = "eth_call";
                                    try {
                                        return yield this.fetch("proxy", t, !0)
                                    } catch (t) {
                                        return E("call", t, e.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    const t = w(e.transaction);t.module = "proxy",
                                    t.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", t, !0)
                                    } catch (t) {
                                        return E("estimateGas", t, e.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    const t = {
                                        action: "getLogs"
                                    };
                                    if (e.filter.fromBlock && (t.fromBlock = N(e.filter.fromBlock)), e.filter.toBlock && (t.toBlock = N(e.filter.toBlock)), e.filter.address && (t.address = e.filter.address), e.filter.topics && e.filter.topics.length > 0 && (e.filter.topics.length > 1 && k.throwError("unsupported topic count", d.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topics: e.filter.topics
                                        }), 1 === e.filter.topics.length)) {
                                        const r = e.filter.topics[0];
                                        "string" == typeof r && 66 === r.length || k.throwError("unsupported topic format", d.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topic0: r
                                        }), t.topic0 = r
                                    }
                                    const r = yield this.fetch("logs", t);
                                    let n = {};
                                    for (let i = 0; i < r.length; i++) {
                                        const t = r[i];
                                        if (null == t.blockHash) {
                                            if (null == n[t.blockNumber]) {
                                                const e = yield this.getBlock(t.blockNumber);
                                                e && (n[t.blockNumber] = e.hash)
                                            }
                                            t.blockHash = n[t.blockNumber]
                                        }
                                    }
                                    return r
                                }
                            case "getEtherPrice":
                                return "homestead" !== this.network.name ? 0 : parseFloat((yield this.fetch("stats", {
                                    action: "ethprice"
                                })).ethusd)
                        }
                        return r.perform.call(this, t, e)
                    }))
                }
                getHistory(t, e, r) {
                    return y(this, void 0, void 0, (function*() {
                        const n = {
                            action: "txlist",
                            address: yield this.resolveName(t), startblock: null == e ? 0 : e, endblock: null == r ? 99999999 : r, sort: "asc"
                        };
                        return (yield this.fetch("account", n)).map((t => {
                            ["contractAddress", "to"].forEach((function(e) {
                                "" == t[e] && delete t[e]
                            })), null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress);
                            const e = this.formatter.transactionResponse(t);
                            return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
                        }))
                    }))
                }
                isCommunityResource() {
                    return this.apiKey === O
                }
            }
        }
    }
]);