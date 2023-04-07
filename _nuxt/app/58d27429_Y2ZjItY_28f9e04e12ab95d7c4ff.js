(window.webpackJsonp = window.webpackJsonp || []).push([
    [73], {
        122: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return y
            })), r.d(e, "b", (function() {
                return w
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "d", (function() {
                return _
            }));
            var o = r(173),
                n = r(56),
                l = r(3),
                c = r(1218),
                h = r(9),
                d = r(220),
                f = r(1),
                m = r(58);
            const k = new f.Logger(m.a);
            class y {
                constructor() {
                    k.checkNew(new.target, y), this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    const t = {},
                        address = this.address.bind(this),
                        e = this.bigNumber.bind(this),
                        r = this.blockTag.bind(this),
                        data = this.data.bind(this),
                        o = this.hash.bind(this),
                        n = this.hex.bind(this),
                        l = this.number.bind(this),
                        c = this.type.bind(this);
                    return t.transaction = {
                        hash: o,
                        type: c,
                        accessList: y.allowNull(this.accessList.bind(this), null),
                        blockHash: y.allowNull(o, null),
                        blockNumber: y.allowNull(l, null),
                        transactionIndex: y.allowNull(l, null),
                        confirmations: y.allowNull(l, null),
                        from: address,
                        gasPrice: y.allowNull(e),
                        maxPriorityFeePerGas: y.allowNull(e),
                        maxFeePerGas: y.allowNull(e),
                        gasLimit: e,
                        to: y.allowNull(address, null),
                        value: e,
                        nonce: l,
                        data: data,
                        r: y.allowNull(this.uint256),
                        s: y.allowNull(this.uint256),
                        v: y.allowNull(l),
                        creates: y.allowNull(address, null),
                        raw: y.allowNull(data)
                    }, t.transactionRequest = {
                        from: y.allowNull(address),
                        nonce: y.allowNull(l),
                        gasLimit: y.allowNull(e),
                        gasPrice: y.allowNull(e),
                        maxPriorityFeePerGas: y.allowNull(e),
                        maxFeePerGas: y.allowNull(e),
                        to: y.allowNull(address),
                        value: y.allowNull(e),
                        data: y.allowNull((t => this.data(t, !0))),
                        type: y.allowNull(l),
                        accessList: y.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: l,
                        blockNumber: l,
                        transactionHash: o,
                        address: address,
                        topics: y.arrayOf(o),
                        data: data,
                        logIndex: l,
                        blockHash: o
                    }, t.receipt = {
                        to: y.allowNull(this.address, null),
                        from: y.allowNull(this.address, null),
                        contractAddress: y.allowNull(address, null),
                        transactionIndex: l,
                        root: y.allowNull(n),
                        gasUsed: e,
                        logsBloom: y.allowNull(data),
                        blockHash: o,
                        transactionHash: o,
                        logs: y.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: l,
                        confirmations: y.allowNull(l, null),
                        cumulativeGasUsed: e,
                        effectiveGasPrice: y.allowNull(e),
                        status: y.allowNull(l),
                        type: c
                    }, t.block = {
                        hash: o,
                        parentHash: o,
                        number: l,
                        timestamp: l,
                        nonce: y.allowNull(n),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: e,
                        gasUsed: e,
                        miner: address,
                        extraData: data,
                        transactions: y.allowNull(y.arrayOf(o)),
                        baseFeePerGas: y.allowNull(e)
                    }, t.blockWithTransactions = Object(h.g)(t.block), t.blockWithTransactions.transactions = y.allowNull(y.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: y.allowNull(r, void 0),
                        toBlock: y.allowNull(r, void 0),
                        blockHash: y.allowNull(o, void 0),
                        address: y.allowNull(address, void 0),
                        topics: y.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: y.allowNull(l),
                        blockHash: y.allowNull(o),
                        transactionIndex: l,
                        removed: y.allowNull(this.boolean.bind(this)),
                        address: address,
                        data: y.allowFalsish(data, "0x"),
                        topics: y.arrayOf(o),
                        transactionHash: o,
                        logIndex: l
                    }, t
                }
                accessList(t) {
                    return Object(d.a)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : n.a.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : n.a.from(t).toNumber()
                }
                bigNumber(t) {
                    return n.a.from(t)
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
                    return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), Object(l.k)(t)) ? t.toLowerCase() : k.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    const r = this.hex(t, e);
                    if (r.length % 2 != 0) throw new Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return Object(o.a)(t)
                }
                callAddress(t) {
                    if (!Object(l.k)(t, 32)) return null;
                    const address = Object(o.a)(Object(l.e)(t, 12));
                    return address === c.a ? null : address
                }
                contractAddress(t) {
                    return Object(o.b)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    if ("latest" === t || "pending" === t) return t;
                    if ("number" == typeof t || Object(l.k)(t)) return Object(l.f)(t);
                    throw new Error("invalid blockTag")
                }
                hash(t, e) {
                    const r = this.hex(t, e);
                    return 32 !== Object(l.d)(r) ? k.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    const e = n.a.from(t);
                    try {
                        return e.toNumber()
                    } catch (t) {}
                    return null
                }
                uint256(t) {
                    if (!Object(l.k)(t)) throw new Error("invalid uint256");
                    return Object(l.g)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    const r = null != t._difficulty ? t._difficulty : t.difficulty,
                        o = y.check(e, t);
                    return o._difficulty = null == r ? null : n.a.from(r), o
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return y.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && n.a.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), 1 !== t.type && 2 !== t.type || null != t.accessList || (t.accessList = []);
                    const e = y.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        Object(l.k)(r) && (r = n.a.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), Object(l.k)(r) && (r = n.a.from(r).toNumber()), "number" != typeof r && null != e.v && (r = (e.v - 35) / 2, r < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return Object(d.c)(t)
                }
                receiptLog(t) {
                    return y.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    const e = y.check(this.formats.receipt, t);
                    if (null != e.root)
                        if (e.root.length <= 4) {
                            const t = n.a.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && k.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : k.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && k.throwArgumentError("invalid root hash", "value.root", e.root);
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map((t => this.topics(t))) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return y.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return y.check(this.formats.filterLog, t)
                }
                static check(t, object) {
                    const e = {};
                    for (const r in t) try {
                        const o = t[r](object[r]);
                        void 0 !== o && (e[r] = o)
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
            let N = !1;

            function _() {
                N || (N = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
        },
        212: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return $
            })), r.d(e, "a", (function() {
                return V
            }));
            var o = r(248),
                n = r(333),
                l = r(56),
                c = r(3),
                h = r(1217),
                d = r(508),
                f = r(383),
                m = r(9),
                k = r(1162),
                y = r(294),
                w = r(139),
                v = r(306),
                N = r.n(v),
                _ = r(1),
                E = r(58),
                O = r(122),
                T = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, l) {
                        function c(t) {
                            try {
                                d(o.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(o.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((o = o.apply(t, e || [])).next())
                    }))
                };
            const j = new _.Logger(E.a);

            function R(t) {
                return null == t ? "null" : (32 !== Object(c.d)(t) && j.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function B(t) {
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

            function P(t) {
                if ("string" == typeof t) {
                    if (t = t.toLowerCase(), 32 === Object(c.d)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else {
                    if (Array.isArray(t)) return "filter:*:" + B(t);
                    if (o.a.isForkEvent(t)) throw j.warn("not implemented"), new Error("not implemented");
                    if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + B(t.topics || [])
                }
                throw new Error("invalid event - " + t)
            }

            function x() {
                return (new Date).getTime()
            }

            function L(t) {
                return new Promise((e => {
                    setTimeout(e, t)
                }))
            }
            const A = ["block", "network", "pending", "poll"];
            class I {
                constructor(t, e, r) {
                    Object(m.d)(this, "tag", t), Object(m.d)(this, "listener", e), Object(m.d)(this, "once", r)
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
                    return this.tag.indexOf(":") >= 0 || A.indexOf(this.tag) >= 0
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
                return Object(c.g)(l.a.from(t).toHexString(), 32)
            }

            function U(data) {
                return n.a.encode(Object(c.b)([data, Object(c.e)(Object(k.c)(Object(k.c)(data)), 0, 4)]))
            }
            const H = new RegExp("^(ipfs)://(.*)$", "i"),
                F = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), H, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function D(t) {
                try {
                    return Object(y.d)(G(t))
                } catch (t) {}
                return null
            }

            function G(t) {
                if ("0x" === t) return null;
                const e = l.a.from(Object(c.e)(t, 0, 32)).toNumber(),
                    r = l.a.from(Object(c.e)(t, e, e + 32)).toNumber();
                return Object(c.e)(t, e + 32, e + 32 + r)
            }

            function K(link) {
                return `https://gateway.ipfs.io/ipfs/${link.substring(7)}`
            }
            class $ {
                constructor(t, address, e, r) {
                    Object(m.d)(this, "provider", t), Object(m.d)(this, "name", e), Object(m.d)(this, "address", t.formatter.address(address)), Object(m.d)(this, "_resolvedAddress", r)
                }
                _fetchBytes(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        const r = {
                            to: this.address,
                            data: Object(c.c)([t, Object(d.a)(this.name), e || "0x"])
                        };
                        try {
                            return G(yield this.provider.call(r))
                        } catch (t) {
                            return t.code, _.Logger.errors.CALL_EXCEPTION, null
                        }
                    }))
                }
                _getAddress(t, e) {
                    const r = C[String(t)];
                    if (null == r && j.throwError(`unsupported coin type: ${t}`, _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    const o = Object(c.a)(e);
                    if (null != r.p2pkh) {
                        const t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return U(Object(c.b)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        const t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            const e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return U(Object(c.b)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        const t = o[1];
                        let e = o[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && o.length === 2 + t && t >= 1 && t <= 75) {
                            const t = N.a.toWords(o.slice(2));
                            return t.unshift(e), N.a.encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return T(this, void 0, void 0, (function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            const t = {
                                    to: this.address,
                                    data: "0x3b3b57de" + Object(d.a)(this.name).substring(2)
                                },
                                e = yield this.provider.call(t);
                            return "0x" === e || e === h.a ? null : this.provider.formatter.callAddress(e)
                        } catch (t) {
                            if (t.code === _.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                        const e = yield this._fetchBytes("0xf1cb7e06", S(t));
                        if (null == e || "0x" === e) return null;
                        const address = this._getAddress(t, e);
                        return null == address && j.throwError("invalid or unsupported coin data", _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), address
                    }))
                }
                getAvatar() {
                    return T(this, void 0, void 0, (function*() {
                        const t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            const e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let i = 0; i < F.length; i++) {
                                const r = e.match(F[i]);
                                if (null == r) continue;
                                const o = r[1].toLowerCase();
                                switch (o) {
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
                                            url: K(e)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            const n = "erc721" === o ? "0xc87b56dd" : "0x0e89341c";t.push({
                                                type: o,
                                                content: e
                                            });
                                            const h = this._resolvedAddress || (yield this.getAddress()),
                                                d = (r[2] || "").split("/");
                                            if (2 !== d.length) return null;
                                            const f = yield this.provider.formatter.address(d[0]), m = Object(c.g)(l.a.from(d[1]).toHexString(), 32);
                                            if ("erc721" === o) {
                                                const e = this.provider.formatter.callAddress(yield this.provider.call({
                                                    to: f,
                                                    data: Object(c.c)(["0x6352211e", m])
                                                }));
                                                if (h !== e) return null;
                                                t.push({
                                                    type: "owner",
                                                    content: e
                                                })
                                            } else if ("erc1155" === o) {
                                                const e = l.a.from(yield this.provider.call({
                                                    to: f,
                                                    data: Object(c.c)(["0x00fdd58e", Object(c.g)(h, 32), m])
                                                }));
                                                if (e.isZero()) return null;
                                                t.push({
                                                    type: "balance",
                                                    content: e.toString()
                                                })
                                            }
                                            const k = {
                                                to: this.provider.formatter.address(d[0]),
                                                data: Object(c.c)([n, m])
                                            };
                                            let y = D(yield this.provider.call(k));
                                            if (null == y) return null;t.push({
                                                type: "metadata-url",
                                                content: y
                                            }),
                                            "erc1155" === o && (y = y.replace("{id}", m.substring(2)), t.push({
                                                type: "metadata-url-expanded",
                                                content: y
                                            }));
                                            const v = yield Object(w.a)(y);
                                            if (!v) return null;t.push({
                                                type: "metadata",
                                                content: JSON.stringify(v)
                                            });
                                            let N = v.image;
                                            if ("string" != typeof N) return null;
                                            if (N.match(/^(https:\/\/|data:)/i));
                                            else {
                                                if (null == N.match(H)) return null;
                                                t.push({
                                                    type: "url-ipfs",
                                                    content: N
                                                }), N = K(N)
                                            }
                                            return t.push({
                                                type: "url",
                                                content: N
                                            }),
                                            {
                                                linkage: t,
                                                url: N
                                            }
                                        }
                                }
                            }
                        } catch (t) {}
                        return null
                    }))
                }
                getContentHash() {
                    return T(this, void 0, void 0, (function*() {
                        const t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        const e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            const t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + n.a.encode("0x" + e[1])
                        }
                        const r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        return r && 64 === r[1].length ? "bzz://" + r[1] : j.throwError("invalid or unsupported content hash data", _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    }))
                }
                getText(t) {
                    return T(this, void 0, void 0, (function*() {
                        let e = Object(y.b)(t);
                        e = Object(c.b)([S(64), S(e.length), e]), e.length % 32 != 0 && (e = Object(c.b)([e, Object(c.g)("0x", 32 - t.length % 32)]));
                        const r = yield this._fetchBytes("0x59d1d43c", Object(c.h)(e));
                        return null == r || "0x" === r ? null : Object(y.d)(r)
                    }))
                }
            }
            let M = null,
                W = 1;
            class V extends o.b {
                constructor(t) {
                    if (j.checkNew(new.target, o.b), super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.formatter = new.target.getFormatter(), Object(m.d)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch((t => {})), this._ready().catch((t => {}));
                    else {
                        const e = Object(m.e)(new.target, "getNetwork")(t);
                        e ? (Object(m.d)(this, "_network", e), this.emit("network", e, null)) : j.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return T(this, void 0, void 0, (function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (t) {}
                            null == t && (t = yield this.detectNetwork()), t || j.throwError("no network detected", _.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : Object(m.d)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    }))
                }
                get ready() {
                    return Object(w.b)((() => this._ready().then((t => t), (t => {
                        if (t.code !== _.Logger.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))))
                }
                static getFormatter() {
                    return null == M && (M = new O.a), M
                }
                static getNetwork(t) {
                    return Object(f.a)(null == t ? "homestead" : t)
                }
                _getInternalBlockNumber(t) {
                    return T(this, void 0, void 0, (function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                const e = this._internalBlockNumber;
                                try {
                                    const r = yield e;
                                    if (x() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (t) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        const e = x(),
                            r = Object(m.f)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then((t => null), (t => t))
                            }).then((({
                                blockNumber: t,
                                networkError: o
                            }) => {
                                if (o) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), o;
                                const n = x();
                                return (t = l.a.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: n
                                }
                            }));
                        return this._internalBlockNumber = r, r.catch((t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        })), (yield r).blockNumber
                    }))
                }
                poll() {
                    return T(this, void 0, void 0, (function*() {
                        const t = W++,
                            e = [];
                        let r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (t) {
                            return void this.emit("error", t)
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r !== this._lastBlockNumber) {
                            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) j.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", j.makeError("network block skew detected", _.Logger.errors.NETWORK_ERROR, {
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
                                            let o = this.getTransactionReceipt(r).then((t => t && null != t.blockNumber ? (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t), null) : null)).catch((t => {
                                                this.emit("error", t)
                                            }));e.push(o);
                                            break
                                        }
                                    case "filter":
                                        {
                                            const filter = t.filter;filter.fromBlock = this._lastBlockNumber + 1,
                                            filter.toBlock = r;
                                            const o = this.getLogs(filter).then((t => {
                                                0 !== t.length && t.forEach((t => {
                                                    this._emitted["b:" + t.blockHash] = t.blockNumber, this._emitted["t:" + t.transactionHash] = t.blockNumber, this.emit(filter, t)
                                                }))
                                            })).catch((t => {
                                                this.emit("error", t)
                                            }));e.push(o);
                                            break
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
                    return T(this, void 0, void 0, (function*() {
                        return j.throwError("provider does not support network detection", _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    }))
                }
                getNetwork() {
                    return T(this, void 0, void 0, (function*() {
                        const t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield L(0), this._network;
                            const r = j.makeError("underlying network changed", _.Logger.errors.NETWORK_ERROR, {
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
                    const t = x();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then((t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber)))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = x(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return T(this, void 0, void 0, (function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    }))
                }
                _waitForTransaction(t, e, r, o) {
                    return T(this, void 0, void 0, (function*() {
                        const n = yield this.getTransactionReceipt(t);
                        return (n ? n.confirmations : 0) >= e ? n : new Promise(((n, l) => {
                            const c = [];
                            let h = !1;
                            const d = function() {
                                    return !!h || (h = !0, c.forEach((t => {
                                        t()
                                    })), !1)
                                },
                                f = t => {
                                    t.confirmations < e || d() || n(t)
                                };
                            if (this.on(t, f), c.push((() => {
                                    this.removeListener(t, f)
                                })), o) {
                                let r = o.startBlock,
                                    n = null;
                                const f = c => T(this, void 0, void 0, (function*() {
                                    h || (yield L(1e3), this.getTransactionCount(o.from).then((m => T(this, void 0, void 0, (function*() {
                                        if (!h) {
                                            if (m <= o.nonce) r = c;
                                            else {
                                                {
                                                    const e = yield this.getTransaction(t);
                                                    if (e && null != e.blockNumber) return
                                                }
                                                for (null == n && (n = r - 3, n < o.startBlock && (n = o.startBlock)); n <= c;) {
                                                    if (h) return;
                                                    const r = yield this.getBlockWithTransactions(n);
                                                    for (let n = 0; n < r.transactions.length; n++) {
                                                        const c = r.transactions[n];
                                                        if (c.hash === t) return;
                                                        if (c.from === o.from && c.nonce === o.nonce) {
                                                            if (h) return;
                                                            const r = yield this.waitForTransaction(c.hash, e);
                                                            if (d()) return;
                                                            let n = "replaced";
                                                            return c.data === o.data && c.to === o.to && c.value.eq(o.value) ? n = "repriced" : "0x" === c.data && c.from === c.to && c.value.isZero() && (n = "cancelled"), void l(j.makeError("transaction was replaced", _.Logger.errors.TRANSACTION_REPLACED, {
                                                                cancelled: "replaced" === n || "cancelled" === n,
                                                                reason: n,
                                                                replacement: this._wrapTransaction(c),
                                                                hash: t,
                                                                receipt: r
                                                            }))
                                                        }
                                                    }
                                                    n++
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
                                    d() || l(j.makeError("timeout exceeded", _.Logger.errors.TIMEOUT, {
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
                    return T(this, void 0, void 0, (function*() {
                        return this._getInternalBlockNumber(0)
                    }))
                }
                getGasPrice() {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield this.perform("getGasPrice", {});
                        try {
                            return l.a.from(t)
                        } catch (e) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    }))
                }
                getBalance(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getBalance", r);
                        try {
                            return l.a.from(o)
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getTransactionCount(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getTransactionCount", r);
                        try {
                            return l.a.from(o).toNumber()
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getCode(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("getCode", r);
                        try {
                            return Object(c.h)(o)
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                getStorageAt(t, e, r) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const o = yield Object(m.f)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then((p => Object(c.f)(p)))
                        }), n = yield this.perform("getStorageAt", o);
                        try {
                            return Object(c.h)(n)
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: o,
                                result: n,
                                error: t
                            })
                        }
                    }))
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== Object(c.d)(e)) throw new Error("invalid response - sendTransaction");
                    const o = t;
                    return null != e && t.hash !== e && j.throwError("Transaction hash mismatch from Provider.sendTransaction.", _.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), o.wait = (e, o) => T(this, void 0, void 0, (function*() {
                        let n;
                        null == e && (e = 1), null == o && (o = 0), 0 !== e && null != r && (n = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        const l = yield this._waitForTransaction(t.hash, e, o, n);
                        return null == l && 0 === e ? null : (this._emitted["t:" + t.hash] = l.blockNumber, 0 === l.status && j.throwError("transaction failed", _.Logger.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: l
                        }), l)
                    })), o
                }
                sendTransaction(t) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Promise.resolve(t).then((t => Object(c.h)(t))), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        const o = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            const t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, o)
                        } catch (t) {
                            throw t.transaction = r, t.transactionHash = r.hash, t
                        }
                    }))
                }
                _getTransactionRequest(t) {
                    return T(this, void 0, void 0, (function*() {
                        const e = yield t, r = {};
                        return ["from", "to"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? this._getAddress(t) : null)))
                        })), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? l.a.from(t) : null)))
                        })), ["type"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => null != t ? t : null)))
                        })), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach((t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then((t => t ? Object(c.h)(t) : null)))
                        })), this.formatter.transactionRequest(yield Object(m.f)(r))
                    }))
                }
                _getFilter(filter) {
                    return T(this, void 0, void 0, (function*() {
                        filter = yield filter;
                        const t = {};
                        return null != filter.address && (t.address = this._getAddress(filter.address)), ["blockHash", "topics"].forEach((e => {
                            null != filter[e] && (t[e] = filter[e])
                        })), ["fromBlock", "toBlock"].forEach((e => {
                            null != filter[e] && (t[e] = this._getBlockTag(filter[e]))
                        })), this.formatter.filter(yield Object(m.f)(t))
                    }))
                }
                call(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const r = yield Object(m.f)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e)
                        }), o = yield this.perform("call", r);
                        try {
                            return Object(c.h)(o)
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "call",
                                params: r,
                                result: o,
                                error: t
                            })
                        }
                    }))
                }
                estimateGas(t) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const e = yield Object(m.f)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return l.a.from(r)
                        } catch (t) {
                            return j.throwError("bad result from backend", _.Logger.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: t
                            })
                        }
                    }))
                }
                _getAddress(t) {
                    return T(this, void 0, void 0, (function*() {
                        "string" != typeof(t = yield t) && j.throwArgumentError("invalid address or ENS name", "name", t);
                        const address = yield this.resolveName(t);
                        return null == address && j.throwError("ENS name not configured", _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), address
                    }))
                }
                _getBlock(t, e) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128;
                        const o = {
                            includeTransactions: !!e
                        };
                        if (Object(c.k)(t, 32)) o.blockHash = t;
                        else try {
                            o.blockTag = yield this._getBlockTag(t), Object(c.k)(o.blockTag) && (r = parseInt(o.blockTag.substring(2), 16))
                        } catch (e) {
                            j.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return Object(w.b)((() => T(this, void 0, void 0, (function*() {
                            const t = yield this.perform("getBlock", o);
                            if (null == t) return null != o.blockHash && null == this._emitted["b:" + o.blockHash] || null != o.blockTag && r > this._emitted.block ? null : void 0;
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
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(w.b)((() => T(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            const o = this.formatter.transactionResponse(r);
                            if (null == o.blockNumber) o.confirmations = 0;
                            else if (null == o.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
                                t <= 0 && (t = 1), o.confirmations = t
                            }
                            return this._wrapTransaction(o)
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getTransactionReceipt(t) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork(), t = yield t;
                        const e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return Object(w.b)((() => T(this, void 0, void 0, (function*() {
                            const r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            const o = this.formatter.receipt(r);
                            if (null == o.blockNumber) o.confirmations = 0;
                            else if (null == o.confirmations) {
                                let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - o.blockNumber + 1;
                                t <= 0 && (t = 1), o.confirmations = t
                            }
                            return o
                        }))), {
                            oncePoll: this
                        })
                    }))
                }
                getLogs(filter) {
                    return T(this, void 0, void 0, (function*() {
                        yield this.getNetwork();
                        const t = yield Object(m.f)({
                            filter: this._getFilter(filter)
                        }), e = yield this.perform("getLogs", t);
                        return e.forEach((t => {
                            null == t.removed && (t.removed = !1)
                        })), O.a.arrayOf(this.formatter.filterLog.bind(this.formatter))(e)
                    }))
                }
                getEtherPrice() {
                    return T(this, void 0, void 0, (function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    }))
                }
                _getBlockTag(t) {
                    return T(this, void 0, void 0, (function*() {
                        if ("number" == typeof(t = yield t) && t < 0) {
                            t % 1 && j.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return e += t, e < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    }))
                }
                getResolver(t) {
                    return T(this, void 0, void 0, (function*() {
                        try {
                            const address = yield this._getResolver(t);
                            return null == address ? null : new $(this, address, t)
                        } catch (t) {
                            if (t.code === _.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    }))
                }
                _getResolver(t) {
                    return T(this, void 0, void 0, (function*() {
                        const e = yield this.getNetwork();
                        e.ensAddress || j.throwError("network does not support ENS", _.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "ENS",
                            network: e.name
                        });
                        const r = {
                            to: e.ensAddress,
                            data: "0x0178b8bf" + Object(d.a)(t).substring(2)
                        };
                        try {
                            return this.formatter.callAddress(yield this.call(r))
                        } catch (t) {
                            if (t.code === _.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    }))
                }
                resolveName(t) {
                    return T(this, void 0, void 0, (function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (e) {
                            if (Object(c.k)(t)) throw e
                        }
                        "string" != typeof t && j.throwArgumentError("invalid ENS name", "name", t);
                        const e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    }))
                }
                lookupAddress(address) {
                    return T(this, void 0, void 0, (function*() {
                        address = yield address;
                        const t = (address = this.formatter.address(address)).substring(2).toLowerCase() + ".addr.reverse",
                            e = yield this._getResolver(t);
                        if (!e) return null;
                        let r = Object(c.a)(yield this.call({
                            to: e,
                            data: "0x691f3431" + Object(d.a)(t).substring(2)
                        }));
                        if (r.length < 32 || !l.a.from(r.slice(0, 32)).eq(32)) return null;
                        if (r = r.slice(32), r.length < 32) return null;
                        const o = l.a.from(r.slice(0, 32)).toNumber();
                        if (r = r.slice(32), o > r.length) return null;
                        const n = Object(y.d)(r.slice(0, o));
                        return (yield this.resolveName(n)) != address ? null : n
                    }))
                }
                getAvatar(t) {
                    return T(this, void 0, void 0, (function*() {
                        let e = null;
                        if (Object(c.k)(t)) {
                            const address = this.formatter.address(t),
                                r = address.substring(2).toLowerCase() + ".addr.reverse",
                                o = yield this._getResolver(r);
                            if (!o) return null;
                            e = new $(this, o, "_", address)
                        } else if (e = yield this.getResolver(t), !e) return null;
                        const r = yield e.getAvatar();
                        return null == r ? null : r.url
                    }))
                }
                perform(t, e) {
                    return j.throwError(t + " not implemented", _.Logger.errors.NOT_IMPLEMENTED, {
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
                    const o = new I(P(t), e, r);
                    return this._events.push(o), this._startEvent(o), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        o = [],
                        n = P(t);
                    return this._events = this._events.filter((t => t.tag !== n || (setTimeout((() => {
                        t.listener.apply(this, e)
                    }), 0), r = !0, !t.once || (o.push(t), !1)))), o.forEach((t => {
                        this._stopEvent(t)
                    })), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = P(t);
                    return this._events.filter((t => t.tag === e)).length
                }
                listeners(t) {
                    if (null == t) return this._events.map((t => t.listener));
                    let e = P(t);
                    return this._events.filter((t => t.tag === e)).map((t => t.listener))
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    const r = [];
                    let o = !1,
                        n = P(t);
                    return this._events = this._events.filter((t => t.tag !== n || t.listener != e || (!!o || (o = !0, r.push(t), !1)))), r.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        const r = P(t);
                        this._events = this._events.filter((t => t.tag !== r || (e.push(t), !1)))
                    }
                    return e.forEach((t => {
                        this._stopEvent(t)
                    })), this
                }
            }
        },
        461: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return k
            })), r.d(e, "a", (function() {
                return y
            }));
            var o = r(9),
                n = r(122),
                l = r(281),
                c = r(1),
                h = r(58),
                d = r(155);
            const f = new c.Logger(h.a),
                m = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
            class k extends l.a {
                constructor(t, e) {
                    const r = new y(t, e);
                    super(r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi."), r.network), Object(o.d)(this, "apiKey", r.apiKey)
                }
                isCommunityResource() {
                    return this.apiKey === m
                }
            }
            class y extends d.b {
                static getWebSocketProvider(t, e) {
                    return new k(t, e)
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
                        throttleCallback: (t, r) => (e === m && Object(n.d)(), Promise.resolve(!0))
                    }
                }
                isCommunityResource() {
                    return this.apiKey === m
                }
            }
        },
        58: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            const o = "providers/5.5.2"
        },
        612: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return I
            }));
            var o = r(248),
                n = r(56),
                l = r(3),
                c = r(9),
                h = r(1700),
                d = r(139),
                f = r(212),
                m = r(122),
                k = r(1),
                y = r(58),
                w = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, l) {
                        function c(t) {
                            try {
                                d(o.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(o.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((o = o.apply(t, e || [])).next())
                    }))
                };
            const v = new k.Logger(y.a);

            function N() {
                return (new Date).getTime()
            }

            function _(t) {
                let e = null;
                for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    if (null == r) return null;
                    e ? e.name === r.name && e.chainId === r.chainId && (e.ensAddress === r.ensAddress || null == e.ensAddress && null == r.ensAddress) || v.throwArgumentError("provider mismatch", "networks", t) : e = r
                }
                return e
            }

            function E(t, e) {
                t = t.slice().sort();
                const r = Math.floor(t.length / 2);
                if (t.length % 2) return t[r];
                const a = t[r - 1],
                    b = t[r];
                return null != e && Math.abs(a - b) > e ? null : (a + b) / 2
            }

            function O(t) {
                if (null === t) return "null";
                if ("number" == typeof t || "boolean" == typeof t) return JSON.stringify(t);
                if ("string" == typeof t) return t;
                if (n.a.isBigNumber(t)) return t.toString();
                if (Array.isArray(t)) return JSON.stringify(t.map((i => O(i))));
                if ("object" == typeof t) {
                    const e = Object.keys(t);
                    return e.sort(), "{" + e.map((e => {
                        let r = t[e];
                        return r = "function" == typeof r ? "[function]" : O(r), JSON.stringify(e) + ":" + r
                    })).join(",") + "}"
                }
                throw new Error("unknown value type: " + typeof t)
            }
            let T = 1;

            function j(t) {
                let e = null,
                    r = null,
                    o = new Promise((o => {
                        e = function() {
                            r && (clearTimeout(r), r = null), o()
                        }, r = setTimeout(e, t)
                    }));
                return {
                    cancel: e,
                    getPromise: function() {
                        return o
                    },
                    wait: t => (o = o.then(t), o)
                }
            }
            const R = [k.Logger.errors.CALL_EXCEPTION, k.Logger.errors.INSUFFICIENT_FUNDS, k.Logger.errors.NONCE_EXPIRED, k.Logger.errors.REPLACEMENT_UNDERPRICED, k.Logger.errors.UNPREDICTABLE_GAS_LIMIT],
                B = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

            function P(t, e) {
                const r = {
                    weight: t.weight
                };
                return Object.defineProperty(r, "provider", {
                    get: () => t.provider
                }), t.start && (r.start = t.start), e && (r.duration = e - t.start), t.done && (t.error ? r.error = t.error : r.result = t.result || null), r
            }

            function x(t, e, r) {
                let o = O;
                switch (e) {
                    case "getBlockNumber":
                        return function(e) {
                            const r = e.map((t => t.result));
                            let o = E(e.map((t => t.result)), 2);
                            if (null != o) return o = Math.ceil(o), r.indexOf(o + 1) >= 0 && o++, o >= t._highestBlockNumber && (t._highestBlockNumber = o), t._highestBlockNumber
                        };
                    case "getGasPrice":
                        return function(t) {
                            const e = t.map((t => t.result));
                            return e.sort(), e[Math.floor(e.length / 2)]
                        };
                    case "getEtherPrice":
                        return function(t) {
                            return E(t.map((t => t.result)))
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
                        o = function(t) {
                            return null == t ? null : ((t = Object(c.g)(t)).confirmations = -1, O(t))
                        };
                        break;
                    case "getBlock":
                        o = r.includeTransactions ? function(t) {
                            return null == t ? null : ((t = Object(c.g)(t)).transactions = t.transactions.map((t => ((t = Object(c.g)(t)).confirmations = -1, t))), O(t))
                        } : function(t) {
                            return null == t ? null : O(t)
                        };
                        break;
                    default:
                        throw new Error("unknown method: " + e)
                }
                return function(t, e) {
                    return function(r) {
                        const o = {};
                        r.forEach((e => {
                            const r = t(e.result);
                            o[r] || (o[r] = {
                                count: 0,
                                result: e.result
                            }), o[r].count++
                        }));
                        const n = Object.keys(o);
                        for (let i = 0; i < n.length; i++) {
                            const t = o[n[i]];
                            if (t.count >= e) return t.result
                        }
                    }
                }(o, t.quorum)
            }

            function L(t, e) {
                return w(this, void 0, void 0, (function*() {
                    const r = t.provider;
                    return null != r.blockNumber && r.blockNumber >= e || -1 === e ? r : Object(d.b)((() => new Promise(((o, n) => {
                        setTimeout((function() {
                            return r.blockNumber >= e ? o(r) : t.cancelled ? o(null) : o(void 0)
                        }), 0)
                    }))), {
                        oncePoll: r
                    })
                }))
            }

            function A(t, e, r, o) {
                return w(this, void 0, void 0, (function*() {
                    let n = t.provider;
                    switch (r) {
                        case "getBlockNumber":
                        case "getGasPrice":
                            return n[r]();
                        case "getEtherPrice":
                            if (n.getEtherPrice) return n.getEtherPrice();
                            break;
                        case "getBalance":
                        case "getTransactionCount":
                        case "getCode":
                            return o.blockTag && Object(l.k)(o.blockTag) && (n = yield L(t, e)), n[r](o.address, o.blockTag || "latest");
                        case "getStorageAt":
                            return o.blockTag && Object(l.k)(o.blockTag) && (n = yield L(t, e)), n.getStorageAt(o.address, o.position, o.blockTag || "latest");
                        case "getBlock":
                            return o.blockTag && Object(l.k)(o.blockTag) && (n = yield L(t, e)), n[o.includeTransactions ? "getBlockWithTransactions" : "getBlock"](o.blockTag || o.blockHash);
                        case "call":
                        case "estimateGas":
                            return o.blockTag && Object(l.k)(o.blockTag) && (n = yield L(t, e)), n[r](o.transaction);
                        case "getTransaction":
                        case "getTransactionReceipt":
                            return n[r](o.transactionHash);
                        case "getLogs":
                            {
                                let filter = o.filter;
                                return (filter.fromBlock && Object(l.k)(filter.fromBlock) || filter.toBlock && Object(l.k)(filter.toBlock)) && (n = yield L(t, e)),
                                n.getLogs(filter)
                            }
                    }
                    return v.throwError("unknown method error", k.Logger.errors.UNKNOWN_ERROR, {
                        method: r,
                        params: o
                    })
                }))
            }
            class I extends f.a {
                constructor(t, e) {
                    v.checkNew(new.target, I), 0 === t.length && v.throwArgumentError("missing providers", "providers", t);
                    const r = t.map(((t, e) => {
                            if (o.b.isProvider(t)) {
                                const e = Object(m.c)(t) ? 2e3 : 750,
                                    r = 1;
                                return Object.freeze({
                                    provider: t,
                                    weight: 1,
                                    stallTimeout: e,
                                    priority: r
                                })
                            }
                            const r = Object(c.g)(t);
                            null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = Object(m.c)(t) ? 2e3 : 750), null == r.weight && (r.weight = 1);
                            const n = r.weight;
                            return (n % 1 || n > 512 || n < 1) && v.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${e}].weight`, n), Object.freeze(r)
                        })),
                        n = r.reduce(((t, e) => t + e.weight), 0);
                    null == e ? e = n / 2 : e > n && v.throwArgumentError("quorum will always fail; larger than total weight", "quorum", e);
                    let l = _(r.map((t => t.provider.network)));
                    null == l && (l = new Promise(((t, e) => {
                        setTimeout((() => {
                            this.detectNetwork().then(t, e)
                        }), 0)
                    }))), super(l), Object(c.d)(this, "providerConfigs", Object.freeze(r)), Object(c.d)(this, "quorum", e), this._highestBlockNumber = -1
                }
                detectNetwork() {
                    return w(this, void 0, void 0, (function*() {
                        return _(yield Promise.all(this.providerConfigs.map((t => t.provider.getNetwork()))))
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
                        const r = x(this, t, e),
                            o = Object(h.a)(this.providerConfigs.map(c.g));
                        o.sort(((a, b) => a.priority - b.priority));
                        const n = this._highestBlockNumber;
                        let i = 0,
                            l = !0;
                        for (;;) {
                            const h = N();
                            let d = o.filter((t => t.runner && h - t.start < t.stallTimeout)).reduce(((t, e) => t + e.weight), 0);
                            for (; d < this.quorum && i < o.length;) {
                                const r = o[i++],
                                    l = T++;
                                r.start = N(), r.staller = j(r.stallTimeout), r.staller.wait((() => {
                                    r.staller = null
                                })), r.runner = A(r, n, t, e).then((o => {
                                    r.done = !0, r.result = o, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: l,
                                        backend: P(r, N()),
                                        request: {
                                            method: t,
                                            params: Object(c.c)(e)
                                        },
                                        provider: this
                                    })
                                }), (o => {
                                    r.done = !0, r.error = o, this.listenerCount("debug") && this.emit("debug", {
                                        action: "request",
                                        rid: l,
                                        backend: P(r, N()),
                                        request: {
                                            method: t,
                                            params: Object(c.c)(e)
                                        },
                                        provider: this
                                    })
                                })), this.listenerCount("debug") && this.emit("debug", {
                                    action: "request",
                                    rid: l,
                                    backend: P(r, null),
                                    request: {
                                        method: t,
                                        params: Object(c.c)(e)
                                    },
                                    provider: this
                                }), d += r.weight
                            }
                            const f = [];
                            o.forEach((t => {
                                !t.done && t.runner && (f.push(t.runner), t.staller && f.push(t.staller.getPromise()))
                            })), f.length && (yield Promise.race(f));
                            const m = o.filter((t => t.done && null == t.error));
                            if (m.length >= this.quorum) {
                                const t = r(m);
                                if (void 0 !== t) return o.forEach((t => {
                                    t.staller && t.staller.cancel(), t.cancelled = !0
                                })), t;
                                l || (yield j(100).getPromise()), l = !1
                            }
                            const k = o.reduce(((t, e) => {
                                if (!e.done || null == e.error) return t;
                                const code = e.error.code;
                                return R.indexOf(code) >= 0 && (t[code] || (t[code] = {
                                    error: e.error,
                                    weight: 0
                                }), t[code].weight += e.weight), t
                            }), {});
                            if (Object.keys(k).forEach((t => {
                                    const e = k[t];
                                    if (e.weight < this.quorum) return;
                                    o.forEach((t => {
                                        t.staller && t.staller.cancel(), t.cancelled = !0
                                    }));
                                    const r = e.error,
                                        n = {};
                                    B.forEach((t => {
                                        null != r[t] && (n[t] = r[t])
                                    })), v.throwError(r.reason || r.message, t, n)
                                })), 0 === o.filter((t => !t.done)).length) break
                        }
                        return o.forEach((t => {
                            t.staller && t.staller.cancel(), t.cancelled = !0
                        })), v.throwError("failed to meet quorum", k.Logger.errors.SERVER_ERROR, {
                            method: t,
                            params: e,
                            results: o.map((t => P(t))),
                            provider: this
                        })
                    }))
                }
            }
        },
        613: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return d
            }));
            var o = r(155),
                n = r(1),
                l = r(58),
                c = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, l) {
                        function c(t) {
                            try {
                                d(o.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(o.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((o = o.apply(t, e || [])).next())
                    }))
                };
            const h = new n.Logger(l.a);
            class d extends o.b {
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
        614: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return T
            }));
            var o = r(3),
                n = r(9),
                l = r(220),
                c = r(139),
                h = r(122),
                d = r(1),
                f = r(58),
                m = r(212),
                k = function(t, e, r, o) {
                    return new(r || (r = Promise))((function(n, l) {
                        function c(t) {
                            try {
                                d(o.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function h(t) {
                            try {
                                d(o.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function d(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(c, h)
                        }
                        d((o = o.apply(t, e || [])).next())
                    }))
                };
            const y = new d.Logger(f.a);

            function w(t) {
                const e = {};
                for (let r in t) {
                    if (null == t[r]) continue;
                    let n = t[r];
                    "type" === r && 0 === n || (n = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    }[r] ? Object(o.f)(Object(o.h)(n)) : "accessList" === r ? "[" + Object(l.a)(n).map((t => `{address:"${t.address}",storageKeys:["${t.storageKeys.join('","')}"]}`)).join(",") + "]" : Object(o.h)(n), e[r] = n)
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

            function N(t) {
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

            function _(t) {
                if ("pending" === t) throw new Error("pending not supported");
                return "latest" === t ? t : parseInt(t.substring(2), 16)
            }
            const E = "9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB";

            function O(t, e, r) {
                if ("call" === t && e.code === d.Logger.errors.SERVER_ERROR) {
                    const t = e.error;
                    if (t && (t.message.match(/reverted/i) || t.message.match(/VM execution error/i))) {
                        let data = t.data;
                        if (data && (data = "0x" + data.replace(/^.*0x/i, "")), Object(o.k)(data)) return data;
                        y.throwError("missing revert data in call exception", d.Logger.errors.CALL_EXCEPTION, {
                            error: e,
                            data: "0x"
                        })
                    }
                }
                let n = e.message;
                throw e.code === d.Logger.errors.SERVER_ERROR && (e.error && "string" == typeof e.error.message ? n = e.error.message : "string" == typeof e.body ? n = e.body : "string" == typeof e.responseText && (n = e.responseText)), n = (n || "").toLowerCase(), n.match(/insufficient funds/) && y.throwError("insufficient funds for intrinsic transaction cost", d.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: r
                }), n.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && y.throwError("nonce has already been used", d.Logger.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: r
                }), n.match(/another transaction with same nonce/) && y.throwError("replacement fee too low", d.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: r
                }), n.match(/execution failed due to an exception|execution reverted/) && y.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", d.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: r
                }), e
            }
            class T extends m.a {
                constructor(t, e) {
                    y.checkNew(new.target, T), super(t), Object(n.d)(this, "baseUrl", this.getBaseUrl()), Object(n.d)(this, "apiKey", e || E)
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
                    return y.throwArgumentError("unsupported network", "network", name)
                }
                getUrl(t, e) {
                    const r = Object.keys(e).reduce(((t, r) => {
                            const o = e[r];
                            return null != o && (t += `&${r}=${o}`), t
                        }), ""),
                        o = this.apiKey ? `&apikey=${this.apiKey}` : "";
                    return `${this.baseUrl}/api?module=${t}${r}${o}`
                }
                getPostUrl() {
                    return `${this.baseUrl}/api`
                }
                getPostData(t, e) {
                    return e.module = t, e.apikey = this.apiKey, e
                }
                fetch(t, e, r) {
                    return k(this, void 0, void 0, (function*() {
                        const o = r ? this.getPostUrl() : this.getUrl(t, e),
                            l = r ? this.getPostData(t, e) : null,
                            d = "proxy" === t ? N : v;
                        this.emit("debug", {
                            action: "request",
                            request: o,
                            provider: this
                        });
                        const f = {
                            url: o,
                            throttleSlotInterval: 1e3,
                            throttleCallback: (t, e) => (this.isCommunityResource() && Object(h.d)(), Promise.resolve(!0))
                        };
                        let m = null;
                        l && (f.headers = {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }, m = Object.keys(l).map((t => `${t}=${l[t]}`)).join("&"));
                        const k = yield Object(c.a)(f, m, d || N);
                        return this.emit("debug", {
                            action: "response",
                            request: o,
                            response: Object(n.c)(k),
                            provider: this
                        }), k
                    }))
                }
                detectNetwork() {
                    return k(this, void 0, void 0, (function*() {
                        return this.network
                    }))
                }
                perform(t, e) {
                    const r = Object.create(null, {
                        perform: {
                            get: () => super.perform
                        }
                    });
                    return k(this, void 0, void 0, (function*() {
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
                                }, !0).catch((t => O("sendTransaction", t, e.signedTransaction)));
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
                                        return O("call", t, e.transaction)
                                    }
                                }
                            case "estimateGas":
                                {
                                    const t = w(e.transaction);t.module = "proxy",
                                    t.action = "eth_estimateGas";
                                    try {
                                        return yield this.fetch("proxy", t, !0)
                                    } catch (t) {
                                        return O("estimateGas", t, e.transaction)
                                    }
                                }
                            case "getLogs":
                                {
                                    const t = {
                                        action: "getLogs"
                                    };
                                    if (e.filter.fromBlock && (t.fromBlock = _(e.filter.fromBlock)), e.filter.toBlock && (t.toBlock = _(e.filter.toBlock)), e.filter.address && (t.address = e.filter.address), e.filter.topics && e.filter.topics.length > 0 && (e.filter.topics.length > 1 && y.throwError("unsupported topic count", d.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topics: e.filter.topics
                                        }), 1 === e.filter.topics.length)) {
                                        const r = e.filter.topics[0];
                                        "string" == typeof r && 66 === r.length || y.throwError("unsupported topic format", d.Logger.errors.UNSUPPORTED_OPERATION, {
                                            topic0: r
                                        }), t.topic0 = r
                                    }
                                    const r = yield this.fetch("logs", t);
                                    let o = {};
                                    for (let i = 0; i < r.length; i++) {
                                        const t = r[i];
                                        if (null == t.blockHash) {
                                            if (null == o[t.blockNumber]) {
                                                const e = yield this.getBlock(t.blockNumber);
                                                e && (o[t.blockNumber] = e.hash)
                                            }
                                            t.blockHash = o[t.blockNumber]
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
                    return k(this, void 0, void 0, (function*() {
                        const o = {
                            action: "txlist",
                            address: yield this.resolveName(t), startblock: null == e ? 0 : e, endblock: null == r ? 99999999 : r, sort: "asc"
                        };
                        return (yield this.fetch("account", o)).map((t => {
                            ["contractAddress", "to"].forEach((function(e) {
                                "" == t[e] && delete t[e]
                            })), null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress);
                            const e = this.formatter.transactionResponse(t);
                            return t.timeStamp && (e.timestamp = parseInt(t.timeStamp)), e
                        }))
                    }))
                }
                isCommunityResource() {
                    return this.apiKey === E
                }
            }
        },
        9: function(t, e, r) {
            "use strict";
            r.d(e, "d", (function() {
                return c
            })), r.d(e, "e", (function() {
                return h
            })), r.d(e, "f", (function() {
                return d
            })), r.d(e, "b", (function() {
                return f
            })), r.d(e, "g", (function() {
                return m
            })), r.d(e, "c", (function() {
                return v
            })), r.d(e, "a", (function() {
                return N
            }));
            var o = r(1);
            var n = function(t, e, r, o) {
                return new(r || (r = Promise))((function(n, l) {
                    function c(t) {
                        try {
                            d(o.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function h(t) {
                        try {
                            d(o.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function d(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(c, h)
                    }
                    d((o = o.apply(t, e || [])).next())
                }))
            };
            const l = new o.Logger("properties/5.7.0");

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
                return n(this, void 0, void 0, (function*() {
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
            const k = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function y(object) {
                if (null == object || k[typeof object]) return !0;
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
                        if (!y(e)) return !1
                    }
                    return !0
                }
                return l.throwArgumentError("Cannot deepCopy " + typeof object, "object", object)
            }

            function w(object) {
                if (y(object)) return object;
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
            class N {
                constructor(t) {
                    for (const e in t) this[e] = v(t[e])
                }
            }
        }
    }
]);