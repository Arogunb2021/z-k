(window.webpackJsonp = window.webpackJsonp || []).push([
    [85], {
        1222: function(e, t, r) {
            const n = r(879),
                o = r(1606);

            function c(e, t) {
                return new Promise((r => {
                    const n = setTimeout(r, e);
                    n.unref && t && n.unref()
                }))
            }
            e.exports = class extends o {
                constructor(e = {}) {
                    if (!e.provider) throw new Error("PollingBlockTracker - no provider specified.");
                    const t = e.pollingInterval || 2e4,
                        r = e.retryTimeout || t / 10,
                        n = void 0 === e.keepEventLoopActive || e.keepEventLoopActive,
                        o = e.setSkipCacheFlag || !1;
                    super(Object.assign({
                        blockResetDuration: t
                    }, e)), this._provider = e.provider, this._pollingInterval = t, this._retryTimeout = r, this._keepEventLoopActive = n, this._setSkipCacheFlag = o
                }
                async checkForLatestBlock() {
                    return await this._updateLatestBlock(), await this.getLatestBlock()
                }
                _start() {
                    this._performSync().catch((e => this.emit("error", e)))
                }
                async _performSync() {
                    for (; this._isRunning;) try {
                        await this._updateLatestBlock(), await c(this._pollingInterval, !this._keepEventLoopActive)
                    } catch (e) {
                        const t = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${e.stack}`);
                        try {
                            this.emit("error", t)
                        } catch (e) {
                            console.error(t)
                        }
                        await c(this._retryTimeout, !this._keepEventLoopActive)
                    }
                }
                async _updateLatestBlock() {
                    const e = await this._fetchLatestBlock();
                    this._newPotentialLatest(e)
                }
                async _fetchLatestBlock() {
                    const e = {
                        jsonrpc: "2.0",
                        id: 1,
                        method: "eth_blockNumber",
                        params: []
                    };
                    this._setSkipCacheFlag && (e.skipCache = !0);
                    const t = await n((t => this._provider.sendAsync(e, t)))();
                    if (t.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${t.error}`);
                    return t.result
                }
            }
        },
        1223: function(e, t, r) {
            const n = r(516).default,
                o = r(898),
                {
                    createAsyncMiddleware: c
                } = r(894),
                l = r(893),
                {
                    unsafeRandomBytes: d,
                    incrementHexInt: h
                } = r(368),
                f = r(592);

            function m(e) {
                return {
                    hash: e.hash,
                    parentHash: e.parentHash,
                    sha3Uncles: e.sha3Uncles,
                    miner: e.miner,
                    stateRoot: e.stateRoot,
                    transactionsRoot: e.transactionsRoot,
                    receiptsRoot: e.receiptsRoot,
                    logsBloom: e.logsBloom,
                    difficulty: e.difficulty,
                    number: e.number,
                    gasLimit: e.gasLimit,
                    gasUsed: e.gasUsed,
                    nonce: e.nonce,
                    mixHash: e.mixHash,
                    timestamp: e.timestamp,
                    extraData: e.extraData
                }
            }
            e.exports = function({
                blockTracker: e,
                provider: t
            }) {
                const r = {},
                    y = l({
                        blockTracker: e,
                        provider: t
                    });
                let _ = !1;
                const w = new n,
                    v = o({
                        eth_subscribe: c((async function(n, o) {
                            if (_) throw new Error("SubscriptionManager - attempting to use after destroying");
                            const c = n.params[0],
                                l = d(16);
                            let sub;
                            switch (c) {
                                case "newHeads":
                                    sub = w({
                                        subId: l
                                    });
                                    break;
                                case "logs":
                                    const e = n.params[1];
                                    sub = v({
                                        subId: l,
                                        filter: await y.newLogFilter(e)
                                    });
                                    break;
                                default:
                                    throw new Error(`SubscriptionManager - unsupported subscription type "${c}"`)
                            }
                            return r[l] = sub, void(o.result = l);

                            function w({
                                subId: r
                            }) {
                                const sub = {
                                    type: c,
                                    destroy: async () => {
                                        e.removeListener("sync", sub.update)
                                    },
                                    update: async ({
                                        oldBlock: e,
                                        newBlock: n
                                    }) => {
                                        const o = n,
                                            c = h(e);
                                        (await f({
                                            provider: t,
                                            fromBlock: c,
                                            toBlock: o
                                        })).map(m).forEach((e => {
                                            k(r, e)
                                        }))
                                    }
                                };
                                return e.on("sync", sub.update), sub
                            }

                            function v({
                                subId: e,
                                filter: filter
                            }) {
                                filter.on("update", (t => k(e, t)));
                                return {
                                    type: c,
                                    destroy: async () => await y.uninstallFilter(filter.idHex)
                                }
                            }
                        })),
                        eth_unsubscribe: c((async function(e, t) {
                            if (_) throw new Error("SubscriptionManager - attempting to use after destroying");
                            const n = e.params[0],
                                o = r[n];
                            if (!o) return void(t.result = !1);
                            delete r[n], await o.destroy(), t.result = !0
                        }))
                    });
                return v.destroy = function() {
                    w.removeAllListeners();
                    for (const e in r) r[e].destroy(), delete r[e];
                    _ = !0
                }, {
                    events: w,
                    middleware: v
                };

                function k(e, t) {
                    w.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: e,
                            result: t
                        }
                    })
                }
            }
        },
        1444: function(e, t, r) {
            "use strict";
            var n = r(186),
                o = n("%Symbol.species%", !0),
                c = n("%TypeError%"),
                l = r(1445),
                d = r(267);
            e.exports = function(e, t) {
                if ("Object" !== d(e)) throw new c("Assertion failed: Type(O) is not Object");
                var r = e.constructor;
                if (void 0 === r) return t;
                if ("Object" !== d(r)) throw new c("O.constructor is not an Object");
                var n = o ? r[o] : void 0;
                if (null == n) return t;
                if (l(n)) return n;
                throw new c("no constructor found")
            }
        },
        1445: function(e, t, r) {
            "use strict";
            var n = r(1446)("%Reflect.construct%", !0),
                o = r(1447);
            try {
                o({}, "", {
                    "[[Get]]": function() {}
                })
            } catch (e) {
                o = null
            }
            if (o && n) {
                var c = {},
                    l = {};
                o(l, "length", {
                    "[[Get]]": function() {
                        throw c
                    },
                    "[[Enumerable]]": !0
                }), e.exports = function(e) {
                    try {
                        n(e, l)
                    } catch (e) {
                        return e === c
                    }
                }
            } else e.exports = function(e) {
                return "function" == typeof e && !!e.prototype
            }
        },
        1446: function(e, t, r) {
            "use strict";
            e.exports = r(186)
        },
        1447: function(e, t, r) {
            "use strict";
            var n = r(186)("%TypeError%"),
                o = r(1448),
                c = r(1449),
                l = r(1451),
                d = r(1453),
                h = r(1454),
                f = r(1455),
                m = r(1456),
                y = r(1458),
                _ = r(267);
            e.exports = function(e, t, desc) {
                if ("Object" !== _(e)) throw new n("Assertion failed: Type(O) is not Object");
                if (!f(t)) throw new n("Assertion failed: IsPropertyKey(P) is not true");
                var r = o({
                    Type: _,
                    IsDataDescriptor: h,
                    IsAccessorDescriptor: d
                }, desc) ? desc : y(desc);
                if (!o({
                        Type: _,
                        IsDataDescriptor: h,
                        IsAccessorDescriptor: d
                    }, r)) throw new n("Assertion failed: Desc is not a valid Property Descriptor");
                return c(h, m, l, e, t, r)
            }
        },
        1448: function(e, t, r) {
            "use strict";
            var n = r(186),
                o = r(308),
                c = n("%TypeError%");
            e.exports = function(e, t) {
                if ("Object" !== e.Type(t)) return !1;
                var r = {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Get]]": !0,
                    "[[Set]]": !0,
                    "[[Value]]": !0,
                    "[[Writable]]": !0
                };
                for (var n in t)
                    if (o(t, n) && !r[n]) return !1;
                if (e.IsDataDescriptor(t) && e.IsAccessorDescriptor(t)) throw new c("Property Descriptors may not be both accessor and data descriptors");
                return !0
            }
        },
        1449: function(e, t, r) {
            "use strict";
            var n, o = r(186)("%Object.defineProperty%", !0);
            if (o) try {
                o({}, "a", {
                    value: 1
                })
            } catch (e) {
                o = null
            }
            try {
                n = o && 0 === o([], "length", {
                    value: 1
                }).length
            } catch (e) {
                n = !0
            }
            var c = n && r(1450),
                l = r(663)("Object.prototype.propertyIsEnumerable");
            e.exports = function(e, t, r, d, h, desc) {
                if (!o) {
                    if (!e(desc)) return !1;
                    if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) return !1;
                    if (h in d && l(d, h) !== !!desc["[[Enumerable]]"]) return !1;
                    var f = desc["[[Value]]"];
                    return d[h] = f, t(d[h], f)
                }
                return n && "length" === h && "[[Value]]" in desc && c(d) && d.length !== desc["[[Value]]"] ? (d.length = desc["[[Value]]"], d.length === desc["[[Value]]"]) : (o(d, h, r(desc)), !0)
            }
        },
        1450: function(e, t, r) {
            "use strict";
            var n = r(186)("%Array%"),
                o = !n.isArray && r(663)("Object.prototype.toString");
            e.exports = n.isArray || function(e) {
                return "[object Array]" === o(e)
            }
        },
        1451: function(e, t, r) {
            "use strict";
            var n = r(570),
                o = r(267);
            e.exports = function(e) {
                if (void 0 === e) return e;
                n(o, "Property Descriptor", "Desc", e);
                var t = {};
                return "[[Value]]" in e && (t.value = e["[[Value]]"]), "[[Writable]]" in e && (t.writable = e["[[Writable]]"]), "[[Get]]" in e && (t.get = e["[[Get]]"]), "[[Set]]" in e && (t.set = e["[[Set]]"]), "[[Enumerable]]" in e && (t.enumerable = e["[[Enumerable]]"]), "[[Configurable]]" in e && (t.configurable = e["[[Configurable]]"]), t
            }
        },
        1452: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
            }
        },
        1453: function(e, t, r) {
            "use strict";
            var n = r(308),
                o = r(570),
                c = r(267);
            e.exports = function(e) {
                return void 0 !== e && (o(c, "Property Descriptor", "Desc", e), !(!n(e, "[[Get]]") && !n(e, "[[Set]]")))
            }
        },
        1454: function(e, t, r) {
            "use strict";
            var n = r(308),
                o = r(570),
                c = r(267);
            e.exports = function(e) {
                return void 0 !== e && (o(c, "Property Descriptor", "Desc", e), !(!n(e, "[[Value]]") && !n(e, "[[Writable]]")))
            }
        },
        1455: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return "string" == typeof e || "symbol" == typeof e
            }
        },
        1456: function(e, t, r) {
            "use strict";
            var n = r(1457);
            e.exports = function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : n(e) && n(t)
            }
        },
        1457: function(e, t, r) {
            "use strict";
            e.exports = Number.isNaN || function(a) {
                return a != a
            }
        },
        1458: function(e, t, r) {
            "use strict";
            var n = r(308),
                o = r(186)("%TypeError%"),
                c = r(267),
                l = r(1459),
                d = r(821);
            e.exports = function(e) {
                if ("Object" !== c(e)) throw new o("ToPropertyDescriptor requires an object");
                var desc = {};
                if (n(e, "enumerable") && (desc["[[Enumerable]]"] = l(e.enumerable)), n(e, "configurable") && (desc["[[Configurable]]"] = l(e.configurable)), n(e, "value") && (desc["[[Value]]"] = e.value), n(e, "writable") && (desc["[[Writable]]"] = l(e.writable)), n(e, "get")) {
                    var t = e.get;
                    if (void 0 !== t && !d(t)) throw new o("getter must be a function");
                    desc["[[Get]]"] = t
                }
                if (n(e, "set")) {
                    var r = e.set;
                    if (void 0 !== r && !d(r)) throw new o("setter must be a function");
                    desc["[[Set]]"] = r
                }
                if ((n(desc, "[[Get]]") || n(desc, "[[Set]]")) && (n(desc, "[[Value]]") || n(desc, "[[Writable]]"))) throw new o("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return desc
            }
        },
        1459: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return !!e
            }
        },
        1606: function(e, t, r) {
            r(880), r(879);
            const n = r(1608),
                o = (e, t) => e + t,
                c = ["sync", "latest"];

            function l(e) {
                return Number.parseInt(e, 16)
            }
            e.exports = class extends n {
                constructor(e = {}) {
                    super(), this._blockResetDuration = e.blockResetDuration || 2e4, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
                }
                isRunning() {
                    return this._isRunning
                }
                getCurrentBlock() {
                    return this._currentBlock
                }
                async getLatestBlock() {
                    if (this._currentBlock) return this._currentBlock;
                    return await new Promise((e => this.once("latest", e)))
                }
                removeAllListeners(e) {
                    e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener()
                }
                _start() {}
                _end() {}
                _setupInternalEvents() {
                    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
                }
                _onNewListener(e, t) {
                    c.includes(e) && this._maybeStart()
                }
                _onRemoveListener(e, t) {
                    this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                }
                _maybeStart() {
                    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start())
                }
                _maybeEnd() {
                    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end())
                }
                _getBlockTrackerEventCount() {
                    return c.map((e => this.listenerCount(e))).reduce(o)
                }
                _newPotentialLatest(e) {
                    const t = this._currentBlock;
                    t && l(e) <= l(t) || this._setCurrentBlock(e)
                }
                _setCurrentBlock(e) {
                    const t = this._currentBlock;
                    this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
                        oldBlock: t,
                        newBlock: e
                    })
                }
                _setupBlockResetTimeout() {
                    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                }
                _cancelBlockResetTimeout() {
                    clearTimeout(this._blockResetTimeout)
                }
                _resetCurrentBlock() {
                    this._currentBlock = null
                }
            }
        },
        1646: function(e, t, r) {
            const n = r(1647),
                o = r(1648),
                c = [void 0, null, "<nil>"];
            e.exports = function(e = {}) {
                const {
                    blockTracker: t
                } = e;
                if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
                const r = new l,
                    c = {
                        perma: r,
                        block: r,
                        fork: r
                    };
                return o((async (e, o, l) => {
                    if (e.skipCache) return l();
                    const d = n.cacheTypeForPayload(e),
                        h = c[d];
                    if (!h) return l();
                    if (!h.canCacheRequest(e)) return l();
                    let f, m = n.blockTagForPayload(e);
                    if (m || (m = "latest"), "earliest" === m) f = "0x00";
                    else if ("latest" === m) {
                        const e = await t.getLatestBlock();
                        r.clearBefore(e), f = e
                    } else f = m;
                    const y = await h.get(e, f);
                    void 0 === y ? (await l(), await h.set(e, f, o.result)) : o.result = y
                }))
            };
            class l {
                constructor() {
                    this.cache = {}
                }
                getBlockCacheForPayload(e, t) {
                    const r = Number.parseInt(t, 16);
                    let n = this.cache[r];
                    if (!n) {
                        const e = {};
                        this.cache[r] = e, n = e
                    }
                    return n
                }
                async get(e, t) {
                    const r = this.getBlockCacheForPayload(e, t);
                    if (!r) return;
                    return r[n.cacheIdentifierForPayload(e, !0)]
                }
                async set(e, t, r) {
                    if (!this.canCacheResult(e, r)) return;
                    this.getBlockCacheForPayload(e, t)[n.cacheIdentifierForPayload(e, !0)] = r
                }
                canCacheRequest(e) {
                    if (!n.canCache(e)) return !1;
                    return "pending" !== n.blockTagForPayload(e)
                }
                canCacheResult(e, t) {
                    if (!c.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash)
                }
                clearBefore(e) {
                    const t = this,
                        r = Number.parseInt(e, 16);
                    Object.keys(t.cache).map(Number).filter((e => e < r)).forEach((e => delete t.cache[e]))
                }
            }
        },
        1647: function(e, t, r) {
            const n = r(892);

            function o(e) {
                return "never" !== d(e)
            }

            function c(e) {
                const t = l(e);
                return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
            }

            function l(e) {
                switch (e.method) {
                    case "eth_getStorageAt":
                        return 2;
                    case "eth_getBalance":
                    case "eth_getCode":
                    case "eth_getTransactionCount":
                    case "eth_call":
                        return 1;
                    case "eth_getBlockByNumber":
                        return 0;
                    default:
                        return
                }
            }

            function d(e) {
                switch (e.method) {
                    case "web3_clientVersion":
                    case "web3_sha3":
                    case "eth_protocolVersion":
                    case "eth_getBlockTransactionCountByHash":
                    case "eth_getUncleCountByBlockHash":
                    case "eth_getCode":
                    case "eth_getBlockByHash":
                    case "eth_getTransactionByHash":
                    case "eth_getTransactionByBlockHashAndIndex":
                    case "eth_getTransactionReceipt":
                    case "eth_getUncleByBlockHashAndIndex":
                    case "eth_getCompilers":
                    case "eth_compileLLL":
                    case "eth_compileSolidity":
                    case "eth_compileSerpent":
                    case "shh_version":
                    case "test_permaCache":
                        return "perma";
                    case "eth_getBlockByNumber":
                    case "eth_getBlockTransactionCountByNumber":
                    case "eth_getUncleCountByBlockNumber":
                    case "eth_getTransactionByBlockNumberAndIndex":
                    case "eth_getUncleByBlockNumberAndIndex":
                    case "test_forkCache":
                        return "fork";
                    case "eth_gasPrice":
                    case "eth_blockNumber":
                    case "eth_getBalance":
                    case "eth_getStorageAt":
                    case "eth_getTransactionCount":
                    case "eth_call":
                    case "eth_estimateGas":
                    case "eth_getFilterLogs":
                    case "eth_getLogs":
                    case "test_blockCache":
                        return "block";
                    case "net_version":
                    case "net_peerCount":
                    case "net_listening":
                    case "eth_syncing":
                    case "eth_sign":
                    case "eth_coinbase":
                    case "eth_mining":
                    case "eth_hashrate":
                    case "eth_accounts":
                    case "eth_sendTransaction":
                    case "eth_sendRawTransaction":
                    case "eth_newFilter":
                    case "eth_newBlockFilter":
                    case "eth_newPendingTransactionFilter":
                    case "eth_uninstallFilter":
                    case "eth_getFilterChanges":
                    case "eth_getWork":
                    case "eth_submitWork":
                    case "eth_submitHashrate":
                    case "db_putString":
                    case "db_getString":
                    case "db_putHex":
                    case "db_getHex":
                    case "shh_post":
                    case "shh_newIdentity":
                    case "shh_hasIdentity":
                    case "shh_newGroup":
                    case "shh_addToGroup":
                    case "shh_newFilter":
                    case "shh_uninstallFilter":
                    case "shh_getFilterChanges":
                    case "shh_getMessages":
                    case "test_neverCache":
                        return "never"
                }
            }
            e.exports = {
                cacheIdentifierForPayload: function(e, t) {
                    const r = t ? c(e) : e.params;
                    return o(e) ? e.method + ":" + n(r) : null
                },
                canCache: o,
                blockTagForPayload: function(e) {
                    let t = l(e);
                    if (t >= e.params.length) return null;
                    return e.params[t]
                },
                paramsWithoutBlockTag: c,
                blockTagParamIndex: l,
                cacheTypeForPayload: d
            }
        },
        1651: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIdRemapMiddleware = void 0;
            const n = r(895);
            t.createIdRemapMiddleware = function() {
                return (e, t, r, o) => {
                    const c = e.id,
                        l = n.getUniqueId();
                    e.id = l, t.id = l, r((r => {
                        e.id = c, t.id = c, r()
                    }))
                }
            }
        },
        1652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAsyncMiddleware = void 0, t.createAsyncMiddleware = function(e) {
                return async (t, r, n, o) => {
                    let c;
                    const l = new Promise((e => {
                        c = e
                    }));
                    let d = null,
                        h = !1;
                    const f = async () => {
                        h = !0, n((e => {
                            d = e, c()
                        })), await l
                    };
                    try {
                        await e(t, r, f), h ? (await l, d(null)) : o(null)
                    } catch (e) {
                        d ? d(e) : o(e)
                    }
                }
            }
        },
        1653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createScaffoldMiddleware = void 0, t.createScaffoldMiddleware = function(e) {
                return (t, r, n, o) => {
                    const c = e[t.method];
                    return void 0 === c ? n() : "function" == typeof c ? c(t, r, n, o) : (r.result = c, o())
                }
            }
        },
        1654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
            const n = r(589);
            Object.defineProperty(t, "EthereumRpcError", {
                enumerable: !0,
                get: function() {
                    return n.EthereumRpcError
                }
            }), Object.defineProperty(t, "EthereumProviderError", {
                enumerable: !0,
                get: function() {
                    return n.EthereumProviderError
                }
            });
            const o = r(897);
            Object.defineProperty(t, "serializeError", {
                enumerable: !0,
                get: function() {
                    return o.serializeError
                }
            }), Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return o.getMessageFromCode
                }
            });
            const c = r(1655);
            Object.defineProperty(t, "ethErrors", {
                enumerable: !0,
                get: function() {
                    return c.ethErrors
                }
            });
            const l = r(590);
            Object.defineProperty(t, "errorCodes", {
                enumerable: !0,
                get: function() {
                    return l.errorCodes
                }
            })
        },
        1655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ethErrors = void 0;
            const n = r(589),
                o = r(897),
                c = r(590);

            function l(code, e) {
                const [t, data] = h(e);
                return new n.EthereumRpcError(code, t || o.getMessageFromCode(code), data)
            }

            function d(code, e) {
                const [t, data] = h(e);
                return new n.EthereumProviderError(code, t || o.getMessageFromCode(code), data)
            }

            function h(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        const {
                            message: t,
                            data: data
                        } = e;
                        if (t && "string" != typeof t) throw new Error("Must specify string message.");
                        return [t || void 0, data]
                    }
                }
                return []
            }
            t.ethErrors = {
                rpc: {
                    parse: e => l(c.errorCodes.rpc.parse, e),
                    invalidRequest: e => l(c.errorCodes.rpc.invalidRequest, e),
                    invalidParams: e => l(c.errorCodes.rpc.invalidParams, e),
                    methodNotFound: e => l(c.errorCodes.rpc.methodNotFound, e),
                    internal: e => l(c.errorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: code
                        } = e;
                        if (!Number.isInteger(code) || code > -32005 || code < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return l(code, e)
                    },
                    invalidInput: e => l(c.errorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => l(c.errorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => l(c.errorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => l(c.errorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => l(c.errorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => l(c.errorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => d(c.errorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => d(c.errorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => d(c.errorCodes.provider.unsupportedMethod, e),
                    disconnected: e => d(c.errorCodes.provider.disconnected, e),
                    chainDisconnected: e => d(c.errorCodes.provider.chainDisconnected, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: code,
                            message: t,
                            data: data
                        } = e;
                        if (!t || "string" != typeof t) throw new Error('"message" must be a nonempty string');
                        return new n.EthereumProviderError(code, t, data)
                    }
                }
            }
        },
        1656: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mergeMiddleware = void 0;
            const n = r(896);
            t.mergeMiddleware = function(e) {
                const t = new n.JsonRpcEngine;
                return e.forEach((e => t.push(e))), t.asMiddleware()
            }
        },
        1658: function(e, t, r) {
            const n = r(880),
                o = r(1659),
                c = r(1660),
                {
                    bnToHex: l,
                    hexToInt: d,
                    incrementHexInt: h,
                    minBlockRef: f,
                    blockRefIsNumber: m
                } = r(368);
            e.exports = class extends c {
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "log", this.ethQuery = new n(e), this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, t), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((address => address.toLowerCase())))
                }
                async initialize({
                    currentBlock: e
                }) {
                    let t = this.params.fromBlock;
                    ["latest", "pending"].includes(t) && (t = e), "earliest" === t && (t = "0x0"), this.params.fromBlock = t;
                    const r = f(this.params.toBlock, e),
                        n = Object.assign({}, this.params, {
                            toBlock: r
                        }),
                        o = await this._fetchLogs(n);
                    this.addInitialResults(o)
                }
                async update({
                    oldBlock: e,
                    newBlock: t
                }) {
                    const r = t;
                    let n;
                    n = e ? h(e) : t;
                    const o = Object.assign({}, this.params, {
                            fromBlock: n,
                            toBlock: r
                        }),
                        c = (await this._fetchLogs(o)).filter((e => this.matchLog(e)));
                    this.addResults(c)
                }
                async _fetchLogs(e) {
                    return await o((t => this.ethQuery.getLogs(e, t)))()
                }
                matchLog(e) {
                    if (d(this.params.fromBlock) >= d(e.blockNumber)) return !1;
                    if (m(this.params.toBlock) && d(this.params.toBlock) <= d(e.blockNumber)) return !1;
                    const t = e.address && e.address.toLowerCase();
                    if (this.params.address && t && !this.params.address.includes(t)) return !1;
                    return this.params.topics.every(((t, r) => {
                        let n = e.topics[r];
                        if (!n) return !1;
                        n = n.toLowerCase();
                        let o = Array.isArray(t) ? t : [t];
                        if (o.includes(null)) return !0;
                        o = o.map((e => e.toLowerCase()));
                        return o.includes(n)
                    }))
                }
            }
        },
        1659: function(e, t, r) {
            "use strict";
            const n = (e, t, r, n) => function(...o) {
                    return new(0, t.promiseModule)(((c, l) => {
                        t.multiArgs ? o.push(((...e) => {
                            t.errorFirst ? e[0] ? l(e) : (e.shift(), c(e)) : c(e)
                        })) : t.errorFirst ? o.push(((e, t) => {
                            e ? l(e) : c(t)
                        })) : o.push(c);
                        const d = this === r ? n : this;
                        Reflect.apply(e, d, o)
                    }))
                },
                o = new WeakMap;
            e.exports = (input, e) => {
                e = {
                    exclude: [/.+(?:Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                    ...e
                };
                const t = typeof input;
                if (null === input || "object" !== t && "function" !== t) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===input?"null":t}\``);
                const r = new WeakMap,
                    c = new Proxy(input, {
                        apply(t, o, l) {
                            const d = r.get(t);
                            if (d) return Reflect.apply(d, o, l);
                            const h = e.excludeMain ? t : n(t, e, c, t);
                            return r.set(t, h), Reflect.apply(h, o, l)
                        },
                        get(t, l) {
                            const d = t[l];
                            if (!((t, r) => {
                                    let n = o.get(t);
                                    if (n || (n = {}, o.set(t, n)), r in n) return n[r];
                                    const c = pattern => "string" == typeof pattern || "symbol" == typeof r ? r === pattern : pattern.test(r),
                                        desc = Reflect.getOwnPropertyDescriptor(t, r),
                                        l = void 0 === desc || desc.writable || desc.configurable,
                                        d = (e.include ? e.include.some(c) : !e.exclude.some(c)) && l;
                                    return n[r] = d, d
                                })(t, l) || d === Function.prototype[l]) return d;
                            const h = r.get(d);
                            if (h) return h;
                            if ("function" == typeof d) {
                                const o = n(d, e, c, t);
                                return r.set(d, o), o
                            }
                            return d
                        }
                    });
                return c
            }
        },
        1660: function(e, t, r) {
            const n = r(591);
            e.exports = class extends n {
                constructor() {
                    super(), this.allResults = []
                }
                async update() {
                    throw new Error("BaseFilterWithHistory - no update method specified")
                }
                addResults(e) {
                    this.allResults = this.allResults.concat(e), super.addResults(e)
                }
                addInitialResults(e) {
                    this.allResults = this.allResults.concat(e), super.addInitialResults(e)
                }
                getAllResults() {
                    return this.allResults
                }
            }
        },
        1661: function(e, t, r) {
            const n = r(591),
                o = r(592),
                {
                    incrementHexInt: c
                } = r(368);
            e.exports = class extends n {
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "block", this.provider = e
                }
                async update({
                    oldBlock: e,
                    newBlock: t
                }) {
                    const r = t,
                        n = c(e),
                        l = (await o({
                            provider: this.provider,
                            fromBlock: n,
                            toBlock: r
                        })).map((e => e.hash));
                    this.addResults(l)
                }
            }
        },
        1662: function(e, t, r) {
            const n = r(591),
                o = r(592),
                {
                    incrementHexInt: c
                } = r(368);
            e.exports = class extends n {
                constructor({
                    provider: e
                }) {
                    super(), this.type = "tx", this.provider = e
                }
                async update({
                    oldBlock: e
                }) {
                    const t = e,
                        r = c(e),
                        n = await o({
                            provider: this.provider,
                            fromBlock: r,
                            toBlock: t
                        }),
                        l = [];
                    for (const e of n) l.push(...e.transactions);
                    this.addResults(l)
                }
            }
        },
        267: function(e, t, r) {
            "use strict";
            var n = r(1452);
            e.exports = function(e) {
                return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : n(e)
            }
        },
        368: function(e, t) {
            function r(e) {
                return e.sort(((e, t) => "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : n(e) - n(t)))
            }

            function n(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function o(e) {
                if (null == e) return e;
                let t = e.toString(16);
                return t.length % 2 && (t = "0" + t), "0x" + t
            }

            function c() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            e.exports = {
                minBlockRef: function(...e) {
                    return r(e)[0]
                },
                maxBlockRef: function(...e) {
                    const t = r(e);
                    return t[t.length - 1]
                },
                sortBlockRefs: r,
                bnToHex: function(e) {
                    return "0x" + e.toString(16)
                },
                blockRefIsNumber: function(e) {
                    return e && !["earliest", "latest", "pending"].includes(e)
                },
                hexToInt: n,
                incrementHexInt: function(e) {
                    if (null == e) return e;
                    return o(n(e) + 1)
                },
                intToHex: o,
                unsafeRandomBytes: function(e) {
                    let t = "0x";
                    for (let i = 0; i < e; i++) t += c(), t += c();
                    return t
                }
            }
        },
        570: function(e, t, r) {
            "use strict";
            var n = r(186),
                o = n("%TypeError%"),
                c = n("%SyntaxError%"),
                l = r(308),
                d = {
                    "Property Descriptor": function(e, t) {
                        if ("Object" !== e(t)) return !1;
                        var r = {
                            "[[Configurable]]": !0,
                            "[[Enumerable]]": !0,
                            "[[Get]]": !0,
                            "[[Set]]": !0,
                            "[[Value]]": !0,
                            "[[Writable]]": !0
                        };
                        for (var n in t)
                            if (l(t, n) && !r[n]) return !1;
                        var c = l(t, "[[Value]]"),
                            d = l(t, "[[Get]]") || l(t, "[[Set]]");
                        if (c && d) throw new o("Property Descriptors may not be both accessor and data descriptors");
                        return !0
                    }
                };
            e.exports = function(e, t, r, n) {
                var l = d[t];
                if ("function" != typeof l) throw new c("unknown record type: " + t);
                if (!l(e, n)) throw new o(r + " must be a " + t)
            }
        },
        589: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EthereumProviderError = t.EthereumRpcError = void 0;
            const n = r(1184);
            class o extends Error {
                constructor(code, e, data) {
                    if (!Number.isInteger(code)) throw new Error('"code" must be an integer.');
                    if (!e || "string" != typeof e) throw new Error('"message" must be a nonempty string.');
                    super(e), this.code = code, void 0 !== data && (this.data = data)
                }
                serialize() {
                    const e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e
                }
                toString() {
                    return n.default(this.serialize(), c, 2)
                }
            }
            t.EthereumRpcError = o;

            function c(e, t) {
                if ("[Circular]" !== t) return t
            }
            t.EthereumProviderError = class extends o {
                constructor(code, e, data) {
                    if (! function(code) {
                            return Number.isInteger(code) && code >= 1e3 && code <= 4999
                        }(code)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(code, e, data)
                }
            }
        },
        590: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.errorCodes = void 0, t.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        591: function(e, t, r) {
            const n = r(516).default;
            e.exports = class extends n {
                constructor() {
                    super(), this.updates = []
                }
                async initialize() {}
                async update() {
                    throw new Error("BaseFilter - no update method specified")
                }
                addResults(e) {
                    this.updates = this.updates.concat(e), e.forEach((e => this.emit("update", e)))
                }
                addInitialResults(e) {}
                getChangesAndClear() {
                    const e = this.updates;
                    return this.updates = [], e
                }
            }
        },
        592: function(e, t) {
            function r(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function n(e) {
                if (null == e) return e;
                return "0x" + e.toString(16)
            }
            e.exports = async function({
                provider: e,
                fromBlock: t,
                toBlock: o
            }) {
                t || (t = o);
                const c = r(t),
                    l = r(o),
                    d = Array(l - c + 1).fill().map(((e, t) => c + t)).map(n);
                return await Promise.all(d.map((t => function(e, t, r) {
                    return new Promise(((n, o) => {
                        e.sendAsync({
                            id: 1,
                            jsonrpc: "2.0",
                            method: t,
                            params: r
                        }, ((e, t) => {
                            if (e) return o(e);
                            n(t.result)
                        }))
                    }))
                }(e, "eth_getBlockByNumber", [t, !1]))))
            }
        },
        821: function(e, t, r) {
            "use strict";
            e.exports = r(1443)
        },
        893: function(e, t, r) {
            const n = r(1693).Mutex,
                {
                    createAsyncMiddleware: o
                } = r(894),
                c = r(898),
                l = r(1658),
                d = r(1661),
                h = r(1662),
                {
                    intToHex: f,
                    hexToInt: m
                } = r(368);

            function y(e) {
                return _((async (...t) => {
                    const filter = await e(...t);
                    return f(filter.id)
                }))
            }

            function _(e) {
                return o((async (t, r) => {
                    const n = await e.apply(null, t.params);
                    r.result = n
                }))
            }

            function w(e, t) {
                const r = [];
                for (let t in e) r.push(e[t]);
                return r
            }
            e.exports = function({
                blockTracker: e,
                provider: t
            }) {
                let r = 0,
                    o = {};
                const v = new n,
                    k = function({
                        mutex: e
                    }) {
                        return t => async (r, n, o, c) => {
                            (await e.acquire())(), t(r, n, o, c)
                        }
                    }({
                        mutex: v
                    }),
                    R = c({
                        eth_newFilter: k(y(B)),
                        eth_newBlockFilter: k(y(C)),
                        eth_newPendingTransactionFilter: k(y(x)),
                        eth_uninstallFilter: k(_(T)),
                        eth_getFilterChanges: k(_(P)),
                        eth_getFilterLogs: k(_(I))
                    }),
                    E = async ({
                        oldBlock: e,
                        newBlock: t
                    }) => {
                        if (0 === o.length) return;
                        const r = await v.acquire();
                        try {
                            await Promise.all(w(o).map((async filter => {
                                try {
                                    await filter.update({
                                        oldBlock: e,
                                        newBlock: t
                                    })
                                } catch (e) {
                                    console.error(e)
                                }
                            })))
                        } catch (e) {
                            console.error(e)
                        }
                        r()
                    };
                return R.newLogFilter = B, R.newBlockFilter = C, R.newPendingTransactionFilter = x, R.uninstallFilter = T, R.getFilterChanges = P, R.getFilterLogs = I, R.destroy = () => {
                    !async function() {
                        const e = w(o).length;
                        o = {}, F({
                            prevFilterCount: e,
                            newFilterCount: 0
                        })
                    }()
                }, R;
                async function B(e) {
                    const filter = new l({
                        provider: t,
                        params: e
                    });
                    await j(filter);
                    return filter
                }
                async function C() {
                    const filter = new d({
                        provider: t
                    });
                    await j(filter);
                    return filter
                }
                async function x() {
                    const filter = new h({
                        provider: t
                    });
                    await j(filter);
                    return filter
                }
                async function P(e) {
                    const t = m(e),
                        filter = o[t];
                    if (!filter) throw new Error(`No filter for index "${t}"`);
                    return filter.getChangesAndClear()
                }
                async function I(e) {
                    const t = m(e),
                        filter = o[t];
                    if (!filter) throw new Error(`No filter for index "${t}"`);
                    return "log" === filter.type ? results = filter.getAllResults() : results = [], results
                }
                async function T(e) {
                    const t = m(e),
                        filter = o[t],
                        r = Boolean(filter);
                    return r && await async function(e) {
                        const t = w(o).length;
                        delete o[e];
                        const r = w(o).length;
                        F({
                            prevFilterCount: t,
                            newFilterCount: r
                        })
                    }(t), r
                }
                async function j(filter) {
                    const t = w(o).length,
                        n = await e.getLatestBlock();
                    await filter.initialize({
                        currentBlock: n
                    }), r++, o[r] = filter, filter.id = r, filter.idHex = f(r);
                    return F({
                        prevFilterCount: t,
                        newFilterCount: w(o).length
                    }), r
                }

                function F({
                    prevFilterCount: t,
                    newFilterCount: r
                }) {
                    0 === t && r > 0 ? e.on("sync", E) : t > 0 && 0 === r && e.removeListener("sync", E)
                }
            }
        },
        894: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var p in e) "default" === p || Object.prototype.hasOwnProperty.call(t, p) || n(t, e, p)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(1651), t), o(r(1652), t), o(r(1653), t), o(r(895), t), o(r(896), t), o(r(1656), t)
        },
        895: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqueId = void 0;
            const n = 4294967295;
            let o = Math.floor(Math.random() * n);
            t.getUniqueId = function() {
                return o = (o + 1) % n, o
            }
        },
        896: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonRpcEngine = void 0;
            const o = n(r(516)),
                c = r(1654);
            class l extends o.default {
                constructor() {
                    super(), this._middleware = []
                }
                push(e) {
                    this._middleware.push(e)
                }
                handle(e, t) {
                    if (t && "function" != typeof t) throw new Error('"callback" must be a function if provided.');
                    return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
                }
                asMiddleware() {
                    return async (e, t, r, n) => {
                        try {
                            const [o, c, d] = await l._runAllMiddleware(e, t, this._middleware);
                            return c ? (await l._runReturnHandlers(d), n(o)) : r((async e => {
                                try {
                                    await l._runReturnHandlers(d)
                                } catch (t) {
                                    return e(t)
                                }
                                return e()
                            }))
                        } catch (e) {
                            return n(e)
                        }
                    }
                }
                async _handleBatch(e, t) {
                    try {
                        const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
                        return t ? t(null, r) : r
                    } catch (e) {
                        if (t) return t(e);
                        throw e
                    }
                }
                _promiseHandle(e) {
                    return new Promise((t => {
                        this._handle(e, ((e, r) => {
                            t(r)
                        }))
                    }))
                }
                async _handle(e, t) {
                    if (!e || Array.isArray(e) || "object" != typeof e) {
                        const r = new c.EthereumRpcError(c.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: " + typeof e, {
                            request: e
                        });
                        return t(r, {
                            id: void 0,
                            jsonrpc: "2.0",
                            error: r
                        })
                    }
                    if ("string" != typeof e.method) {
                        const r = new c.EthereumRpcError(c.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: " + typeof e.method, {
                            request: e
                        });
                        return t(r, {
                            id: e.id,
                            jsonrpc: "2.0",
                            error: r
                        })
                    }
                    const r = Object.assign({}, e),
                        n = {
                            id: r.id,
                            jsonrpc: r.jsonrpc
                        };
                    let o = null;
                    try {
                        await this._processRequest(r, n)
                    } catch (e) {
                        o = e
                    }
                    return o && (delete n.result, n.error || (n.error = c.serializeError(o))), t(o, n)
                }
                async _processRequest(e, t) {
                    const [r, n, o] = await l._runAllMiddleware(e, t, this._middleware);
                    if (l._checkForCompletion(e, t, n), await l._runReturnHandlers(o), r) throw r
                }
                static async _runAllMiddleware(e, t, r) {
                    const n = [];
                    let o = null,
                        c = !1;
                    for (const d of r)
                        if ([o, c] = await l._runMiddleware(e, t, d, n), c) break;
                    return [o, c, n.reverse()]
                }
                static _runMiddleware(e, t, r, n) {
                    return new Promise((o => {
                        const l = e => {
                                const r = e || t.error;
                                r && (t.error = c.serializeError(r)), o([r, !0])
                            },
                            h = r => {
                                t.error ? l(t.error) : (r && ("function" != typeof r && l(new c.EthereumRpcError(c.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${d(e)}`, {
                                    request: e
                                })), n.push(r)), o([null, !1]))
                            };
                        try {
                            r(e, t, h, l)
                        } catch (e) {
                            l(e)
                        }
                    }))
                }
                static async _runReturnHandlers(e) {
                    for (const t of e) await new Promise(((e, r) => {
                        t((t => t ? r(t) : e()))
                    }))
                }
                static _checkForCompletion(e, t, r) {
                    if (!("result" in t) && !("error" in t)) throw new c.EthereumRpcError(c.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${d(e)}`, {
                        request: e
                    });
                    if (!r) throw new c.EthereumRpcError(c.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${d(e)}`, {
                        request: e
                    })
                }
            }

            function d(e) {
                return JSON.stringify(e, null, 2)
            }
            t.JsonRpcEngine = l
        },
        897: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const n = r(590),
                o = r(589),
                c = n.errorCodes.rpc.internal,
                l = {
                    code: c,
                    message: d(c)
                };

            function d(code, e = "Unspecified error message. This is a bug, please report it.") {
                if (Number.isInteger(code)) {
                    const e = code.toString();
                    if (y(n.errorValues, e)) return n.errorValues[e].message;
                    if (f(code)) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return e
            }

            function h(code) {
                if (!Number.isInteger(code)) return !1;
                const e = code.toString();
                return !!n.errorValues[e] || !!f(code)
            }

            function f(code) {
                return code >= -32099 && code <= -32e3
            }

            function m(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function y(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = d, t.isValidCode = h, t.serializeError = function(e, {
                fallbackError: t = l,
                shouldIncludeStack: r = !1
            } = {}) {
                var n, c;
                if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw new Error("Must provide fallback error with integer number code and string message.");
                if (e instanceof o.EthereumRpcError) return e.serialize();
                const f = {};
                if (e && "object" == typeof e && !Array.isArray(e) && y(e, "code") && h(e.code)) {
                    const t = e;
                    f.code = t.code, t.message && "string" == typeof t.message ? (f.message = t.message, y(t, "data") && (f.data = t.data)) : (f.message = d(f.code), f.data = {
                        originalError: m(e)
                    })
                } else {
                    f.code = t.code;
                    const r = null === (n = e) || void 0 === n ? void 0 : n.message;
                    f.message = r && "string" == typeof r ? r : t.message, f.data = {
                        originalError: m(e)
                    }
                }
                const _ = null === (c = e) || void 0 === c ? void 0 : c.stack;
                return r && e && _ && "string" == typeof _ && (f.stack = _), f
            }
        },
        898: function(e, t, r) {
            e.exports = r(1657)
        }
    }
]);