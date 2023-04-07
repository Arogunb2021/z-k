(window.webpackJsonp = window.webpackJsonp || []).push([
    [39], {
        1088: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            const n = "random/5.6.0"
        },
        136: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return f
            })), r.d(t, "b", (function() {
                return m
            }));
            var n = r(5),
                o = r(7),
                c = r(54),
                d = r(157),
                l = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                h(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            try {
                                h(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, l)
                        }
                        h((n = n.apply(e, t || [])).next())
                    }))
                };
            const h = new o.Logger(c.a);
            class f extends d.a {
                detectNetwork() {
                    const e = Object.create(null, {
                        detectNetwork: {
                            get: () => super.detectNetwork
                        }
                    });
                    return l(this, void 0, void 0, (function*() {
                        let t = this.network;
                        return null == t && (t = yield e.detectNetwork.call(this), t || h.throwError("no network detected", o.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (Object(n.defineReadOnly)(this, "_network", t), this.emit("network", t, null))), t
                    }))
                }
            }
            class m extends f {
                constructor(e, t) {
                    h.checkAbstract(new.target, m), e = Object(n.getStatic)(new.target, "getNetwork")(e), t = Object(n.getStatic)(new.target, "getApiKey")(t);
                    super(Object(n.getStatic)(new.target, "getUrl")(e, t), e), "string" == typeof t ? Object(n.defineReadOnly)(this, "apiKey", t) : null != t && Object.keys(t).forEach((e => {
                        Object(n.defineReadOnly)(this, e, t[e])
                    }))
                }
                _startPending() {
                    h.warn("WARNING: API provider does not support pending filters")
                }
                isCommunityResource() {
                    return !1
                }
                getSigner(address) {
                    return h.throwError("API provider does not support signing", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
                listAccounts() {
                    return Promise.resolve([])
                }
                static getApiKey(e) {
                    return e
                }
                static getUrl(e, t) {
                    return h.throwError("not implemented; sub-classes must override getUrl", o.Logger.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }
        },
        157: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return T
            })), r.d(t, "a", (function() {
                return A
            }));
            var n = r(156),
                o = r(16),
                c = r(0),
                d = r(481),
                l = r(5),
                h = r(60),
                f = r(59),
                m = r(99),
                w = r(7),
                y = r(54),
                v = r(211),
                k = function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                h(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            try {
                                h(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, l)
                        }
                        h((n = n.apply(e, t || [])).next())
                    }))
                };
            const O = new w.Logger(y.a),
                _ = ["call", "estimateGas"];

            function E(e) {
                if (null == e) return null;
                if ("string" == typeof e.message && e.message.match("reverted") && Object(c.isHexString)(e.data)) return {
                    message: e.message,
                    data: e.data
                };
                if ("object" == typeof e) {
                    for (const t in e) {
                        const r = E(e[t]);
                        if (r) return r
                    }
                    return null
                }
                if ("string" == typeof e) try {
                    return E(JSON.parse(e))
                } catch (e) {}
                return null
            }

            function P(e, t, r) {
                if ("call" === e) {
                    const e = E(t);
                    if (e) return e.data;
                    O.throwError("missing revert data in call exception; Transaction reverted without a reason string", w.Logger.errors.CALL_EXCEPTION, {
                        error: t,
                        data: "0x"
                    })
                }
                let n = t.message;
                t.code === w.Logger.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message ? n = t.error.message : "string" == typeof t.body ? n = t.body : "string" == typeof t.responseText && (n = t.responseText), n = (n || "").toLowerCase();
                const o = r.transaction || r.signedTransaction;
                throw n.match(/insufficient funds|base fee exceeds gas limit/) && O.throwError("insufficient funds for intrinsic transaction cost", w.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: t,
                    method: e,
                    transaction: o
                }), n.match(/nonce (is )?too low/) && O.throwError("nonce has already been used", w.Logger.errors.NONCE_EXPIRED, {
                    error: t,
                    method: e,
                    transaction: o
                }), n.match(/replacement transaction underpriced/) && O.throwError("replacement fee too low", w.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: t,
                    method: e,
                    transaction: o
                }), n.match(/only replay-protected/) && O.throwError("legacy pre-eip-155 transactions not supported", w.Logger.errors.UNSUPPORTED_OPERATION, {
                    error: t,
                    method: e,
                    transaction: o
                }), _.indexOf(e) >= 0 && n.match(/gas required exceeds allowance|always failing transaction|execution reverted/) && O.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", w.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: t,
                    method: e,
                    transaction: o
                }), t
            }

            function R(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }

            function j(e) {
                if (e.error) {
                    const t = new Error(e.error.message);
                    throw t.code = e.error.code, t.data = e.error.data, t
                }
                return e.result
            }

            function N(e) {
                return e ? e.toLowerCase() : e
            }
            const I = {};
            class T extends n.a {
                constructor(e, t, r) {
                    if (O.checkNew(new.target, T), super(), e !== I) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    Object(l.defineReadOnly)(this, "provider", t), null == r && (r = 0), "string" == typeof r ? (Object(l.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), Object(l.defineReadOnly)(this, "_index", null)) : "number" == typeof r ? (Object(l.defineReadOnly)(this, "_index", r), Object(l.defineReadOnly)(this, "_address", null)) : O.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(e) {
                    return O.throwError("cannot alter JSON-RPC Signer connection", w.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new S(I, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((e => (e.length <= this._index && O.throwError("unknown account #" + this._index, w.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(e[this._index]))))
                }
                sendUncheckedTransaction(e) {
                    e = Object(l.shallowCopy)(e);
                    const t = this.getAddress().then((address => (address && (address = address.toLowerCase()), address)));
                    if (null == e.gasLimit) {
                        const r = Object(l.shallowCopy)(e);
                        r.from = t, e.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != e.to && (e.to = Promise.resolve(e.to).then((e => k(this, void 0, void 0, (function*() {
                        if (null == e) return null;
                        const address = yield this.provider.resolveName(e);
                        return null == address && O.throwArgumentError("provided ENS name resolves to null", "tx.to", e), address
                    }))))), Object(l.resolveProperties)({
                        tx: Object(l.resolveProperties)(e),
                        sender: t
                    }).then((({
                        tx: t,
                        sender: r
                    }) => {
                        null != t.from ? t.from.toLowerCase() !== r && O.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
                        const n = this.provider.constructor.hexlifyTransaction(t, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [n]).then((e => e), (e => P("sendTransaction", e, n)))
                    }))
                }
                signTransaction(e) {
                    return O.throwError("signing transactions is unsupported", w.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(e) {
                    return k(this, void 0, void 0, (function*() {
                        const t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
                        try {
                            return yield Object(m.poll)((() => k(this, void 0, void 0, (function*() {
                                const e = yield this.provider.getTransaction(r);
                                if (null !== e) return this.provider._wrapTransaction(e, r, t)
                            }))), {
                                oncePoll: this.provider
                            })
                        } catch (e) {
                            throw e.transactionHash = r, e
                        }
                    }))
                }
                signMessage(e) {
                    return k(this, void 0, void 0, (function*() {
                        const data = "string" == typeof e ? Object(h.f)(e) : e,
                            address = yield this.getAddress();
                        return yield this.provider.send("personal_sign", [Object(c.hexlify)(data), address.toLowerCase()])
                    }))
                }
                _legacySignMessage(e) {
                    return k(this, void 0, void 0, (function*() {
                        const data = "string" == typeof e ? Object(h.f)(e) : e,
                            address = yield this.getAddress();
                        return yield this.provider.send("eth_sign", [address.toLowerCase(), Object(c.hexlify)(data)])
                    }))
                }
                _signTypedData(e, t, r) {
                    return k(this, void 0, void 0, (function*() {
                        const n = yield d.a.resolveNames(e, t, r, (e => this.provider.resolveName(e))), address = yield this.getAddress();
                        return yield this.provider.send("eth_signTypedData_v4", [address.toLowerCase(), JSON.stringify(d.a.getPayload(n.domain, t, n.value))])
                    }))
                }
                unlock(e) {
                    return k(this, void 0, void 0, (function*() {
                        const t = this.provider,
                            address = yield this.getAddress();
                        return t.send("personal_unlockAccount", [address.toLowerCase(), e, null])
                    }))
                }
            }
            class S extends T {
                sendTransaction(e) {
                    return this.sendUncheckedTransaction(e).then((e => ({
                        hash: e,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: t => this.provider.waitForTransaction(e, t)
                    })))
                }
            }
            const L = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            class A extends v.a {
                constructor(e, t) {
                    O.checkNew(new.target, A);
                    let r = t;
                    null == r && (r = new Promise(((e, t) => {
                        setTimeout((() => {
                            this.detectNetwork().then((t => {
                                e(t)
                            }), (e => {
                                t(e)
                            }))
                        }), 0)
                    }))), super(r), e || (e = Object(l.getStatic)(this.constructor, "defaultUrl")()), "string" == typeof e ? Object(l.defineReadOnly)(this, "connection", Object.freeze({
                        url: e
                    })) : Object(l.defineReadOnly)(this, "connection", Object.freeze(Object(l.shallowCopy)(e))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout((() => {
                        this._cache.detectNetwork = null
                    }), 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return k(this, void 0, void 0, (function*() {
                        yield R(0);
                        let e = null;
                        try {
                            e = yield this.send("eth_chainId", [])
                        } catch (t) {
                            try {
                                e = yield this.send("net_version", [])
                            } catch (e) {}
                        }
                        if (null != e) {
                            const t = Object(l.getStatic)(this.constructor, "getNetwork");
                            try {
                                return t(o.a.from(e).toNumber())
                            } catch (t) {
                                return O.throwError("could not detect network", w.Logger.errors.NETWORK_ERROR, {
                                    chainId: e,
                                    event: "invalidNetwork",
                                    serverError: t
                                })
                            }
                        }
                        return O.throwError("could not detect network", w.Logger.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    }))
                }
                getSigner(e) {
                    return new T(I, this, e)
                }
                getUncheckedSigner(e) {
                    return this.getSigner(e).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then((e => e.map((a => this.formatter.address(a)))))
                }
                send(e, t) {
                    const r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: Object(l.deepCopy)(r),
                        provider: this
                    });
                    const n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (n && this._cache[e]) return this._cache[e];
                    const o = Object(m.fetchJson)(this.connection, JSON.stringify(r), j).then((e => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: e,
                        provider: this
                    }), e)), (e => {
                        throw this.emit("debug", {
                            action: "response",
                            error: e,
                            request: r,
                            provider: this
                        }), e
                    }));
                    return n && (this._cache[e] = o, setTimeout((() => {
                        this._cache[e] = null
                    }), 0)), o
                }
                prepareRequest(e, t) {
                    switch (e) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [N(t.address), t.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [N(t.address), t.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [N(t.address), t.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [N(t.address), t.position, t.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [t.signedTransaction]];
                        case "getBlock":
                            return t.blockTag ? ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]] : t.blockHash ? ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]] : null;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [t.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [t.transactionHash]];
                        case "call":
                            return ["eth_call", [Object(l.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, {
                                from: !0
                            }), t.blockTag]];
                        case "estimateGas":
                            return ["eth_estimateGas", [Object(l.getStatic)(this.constructor, "hexlifyTransaction")(t.transaction, {
                                from: !0
                            })]];
                        case "getLogs":
                            return t.filter && null != t.filter.address && (t.filter.address = N(t.filter.address)), ["eth_getLogs", [t.filter]]
                    }
                    return null
                }
                perform(e, t) {
                    return k(this, void 0, void 0, (function*() {
                        if ("call" === e || "estimateGas" === e) {
                            const e = t.transaction;
                            if (e && null != e.type && o.a.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                                const r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((t = Object(l.shallowCopy)(t)).transaction = Object(l.shallowCopy)(e), delete t.transaction.type)
                            }
                        }
                        const r = this.prepareRequest(e, t);
                        null == r && O.throwError(e + " not implemented", w.Logger.errors.NOT_IMPLEMENTED, {
                            operation: e
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (r) {
                            return P(e, r, t)
                        }
                    }))
                }
                _startEvent(e) {
                    "pending" === e.tag && this._startPending(), super._startEvent(e)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    const e = this,
                        t = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = t, t.then((function(r) {
                        return function n() {
                            e.send("eth_getFilterChanges", [r]).then((function(r) {
                                if (e._pendingFilter != t) return null;
                                let n = Promise.resolve();
                                return r.forEach((function(t) {
                                    e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then((function() {
                                        return e.getTransaction(t).then((function(t) {
                                            return e.emit("pending", t), null
                                        }))
                                    }))
                                })), n.then((function() {
                                    return R(1e3)
                                }))
                            })).then((function() {
                                if (e._pendingFilter == t) return setTimeout((function() {
                                    n()
                                }), 0), null;
                                e.send("eth_uninstallFilter", [r])
                            })).catch((e => {}))
                        }(), r
                    })).catch((e => {}))
                }
                _stopEvent(e) {
                    "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
                }
                static hexlifyTransaction(e, t) {
                    const r = Object(l.shallowCopy)(L);
                    if (t)
                        for (const e in t) t[e] && (r[e] = !0);
                    Object(l.checkProperties)(e, r);
                    const n = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(t) {
                        if (null == e[t]) return;
                        const r = Object(c.hexValue)(e[t]);
                        "gasLimit" === t && (t = "gas"), n[t] = r
                    })), ["from", "to", "data"].forEach((function(t) {
                        null != e[t] && (n[t] = Object(c.hexlify)(e[t]))
                    })), e.accessList && (n.accessList = Object(f.accessListify)(e.accessList)), n
                }
            }
        },
        174: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "encode", (function() {
                return f
            })), r.d(t, "decode", (function() {
                return y
            }));
            var n = r(0),
                o = r(7);
            const c = new o.Logger("rlp/5.6.0");

            function d(e) {
                const t = [];
                for (; e;) t.unshift(255 & e), e >>= 8;
                return t
            }

            function l(data, e, t) {
                let r = 0;
                for (let i = 0; i < t; i++) r = 256 * r + data[e + i];
                return r
            }

            function h(object) {
                if (Array.isArray(object)) {
                    let e = [];
                    if (object.forEach((function(t) {
                            e = e.concat(h(t))
                        })), e.length <= 55) return e.unshift(192 + e.length), e;
                    const t = d(e.length);
                    return t.unshift(247 + t.length), t.concat(e)
                }
                Object(n.isBytesLike)(object) || c.throwArgumentError("RLP object must be BytesLike", "object", object);
                const data = Array.prototype.slice.call(Object(n.arrayify)(object));
                if (1 === data.length && data[0] <= 127) return data;
                if (data.length <= 55) return data.unshift(128 + data.length), data;
                const e = d(data.length);
                return e.unshift(183 + e.length), e.concat(data)
            }

            function f(object) {
                return Object(n.hexlify)(h(object))
            }

            function m(data, e, t, r) {
                const n = [];
                for (; t < e + 1 + r;) {
                    const d = w(data, t);
                    n.push(d.result), (t += d.consumed) > e + 1 + r && c.throwError("child data too short", o.Logger.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + r,
                    result: n
                }
            }

            function w(data, e) {
                if (0 === data.length && c.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {}), data[e] >= 248) {
                    const t = data[e] - 247;
                    e + 1 + t > data.length && c.throwError("data short segment too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    const r = l(data, e + 1, t);
                    return e + 1 + t + r > data.length && c.throwError("data long segment too short", o.Logger.errors.BUFFER_OVERRUN, {}), m(data, e, e + 1 + t, t + r)
                }
                if (data[e] >= 192) {
                    const t = data[e] - 192;
                    return e + 1 + t > data.length && c.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {}), m(data, e, e + 1, t)
                }
                if (data[e] >= 184) {
                    const t = data[e] - 183;
                    e + 1 + t > data.length && c.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    const r = l(data, e + 1, t);
                    e + 1 + t + r > data.length && c.throwError("data array too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + t + r,
                        result: Object(n.hexlify)(data.slice(e + 1 + t, e + 1 + t + r))
                    }
                }
                if (data[e] >= 128) {
                    const t = data[e] - 128;
                    e + 1 + t > data.length && c.throwError("data too short", o.Logger.errors.BUFFER_OVERRUN, {});
                    return {
                        consumed: 1 + t,
                        result: Object(n.hexlify)(data.slice(e + 1, e + 1 + t))
                    }
                }
                return {
                    consumed: 1,
                    result: Object(n.hexlify)(data[e])
                }
            }

            function y(data) {
                const e = Object(n.arrayify)(data),
                    t = w(e, 0);
                return t.consumed !== e.length && c.throwArgumentError("invalid rlp data", "data", data), t.result
            }
        },
        280: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return y
            }));
            var n = r(16),
                o = r(5),
                c = r(157),
                d = r(7),
                l = r(54);
            let h = null;
            try {
                if (h = WebSocket, null == h) throw new Error("inject please")
            } catch (e) {
                const t = new d.Logger(l.a);
                h = function() {
                    t.throwError("WebSockets not supported in this environment", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new WebSocket()"
                    })
                }
            }
            var f = function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, c) {
                    function d(e) {
                        try {
                            h(n.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function l(e) {
                        try {
                            h(n.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(d, l)
                    }
                    h((n = n.apply(e, t || [])).next())
                }))
            };
            const m = new d.Logger(l.a);
            let w = 1;
            class y extends c.a {
                constructor(e, t) {
                    "any" === t && m.throwError("WebSocketProvider does not support 'any' network yet", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "network:any"
                    }), super("string" == typeof e ? e : "_websocket", t), this._pollingInterval = -1, this._wsReady = !1, "string" == typeof e ? Object(o.defineReadOnly)(this, "_websocket", new h(this.connection.url)) : Object(o.defineReadOnly)(this, "_websocket", e), Object(o.defineReadOnly)(this, "_requests", {}), Object(o.defineReadOnly)(this, "_subs", {}), Object(o.defineReadOnly)(this, "_subIds", {}), Object(o.defineReadOnly)(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
                        this._wsReady = !0, Object.keys(this._requests).forEach((e => {
                            this.websocket.send(this._requests[e].payload)
                        }))
                    }, this.websocket.onmessage = e => {
                        const data = e.data,
                            t = JSON.parse(data);
                        if (null != t.id) {
                            const e = String(t.id),
                                r = this._requests[e];
                            if (delete this._requests[e], void 0 !== t.result) r.callback(null, t.result), this.emit("debug", {
                                action: "response",
                                request: JSON.parse(r.payload),
                                response: t.result,
                                provider: this
                            });
                            else {
                                let e = null;
                                t.error ? (e = new Error(t.error.message || "unknown error"), Object(o.defineReadOnly)(e, "code", t.error.code || null), Object(o.defineReadOnly)(e, "response", data)) : e = new Error("unknown error"), r.callback(e, void 0), this.emit("debug", {
                                    action: "response",
                                    error: e,
                                    request: JSON.parse(r.payload),
                                    provider: this
                                })
                            }
                        } else if ("eth_subscription" === t.method) {
                            const sub = this._subs[t.params.subscription];
                            sub && sub.processFunc(t.params.result)
                        } else console.warn("this should not happen")
                    };
                    const r = setInterval((() => {
                        this.emit("poll")
                    }), 1e3);
                    r.unref && r.unref()
                }
                get websocket() {
                    return this._websocket
                }
                detectNetwork() {
                    return this._detectNetwork
                }
                get pollingInterval() {
                    return 0
                }
                resetEventsBlock(e) {
                    m.throwError("cannot reset events block on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
                set pollingInterval(e) {
                    m.throwError("cannot set polling interval on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
                poll() {
                    return f(this, void 0, void 0, (function*() {
                        return null
                    }))
                }
                set polling(e) {
                    e && m.throwError("cannot set polling on WebSocketProvider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
                send(e, t) {
                    const r = w++;
                    return new Promise(((n, o) => {
                        const c = JSON.stringify({
                            method: e,
                            params: t,
                            id: r,
                            jsonrpc: "2.0"
                        });
                        this.emit("debug", {
                            action: "request",
                            request: JSON.parse(c),
                            provider: this
                        }), this._requests[String(r)] = {
                            callback: function(e, t) {
                                return e ? o(e) : n(t)
                            },
                            payload: c
                        }, this._wsReady && this.websocket.send(c)
                    }))
                }
                static defaultUrl() {
                    return "ws://localhost:8546"
                }
                _subscribe(e, param, t) {
                    return f(this, void 0, void 0, (function*() {
                        let r = this._subIds[e];
                        null == r && (r = Promise.all(param).then((param => this.send("eth_subscribe", param))), this._subIds[e] = r);
                        const n = yield r;
                        this._subs[n] = {
                            tag: e,
                            processFunc: t
                        }
                    }))
                }
                _startEvent(e) {
                    switch (e.type) {
                        case "block":
                            this._subscribe("block", ["newHeads"], (e => {
                                const t = n.a.from(e.number).toNumber();
                                this._emitted.block = t, this.emit("block", t)
                            }));
                            break;
                        case "pending":
                            this._subscribe("pending", ["newPendingTransactions"], (e => {
                                this.emit("pending", e)
                            }));
                            break;
                        case "filter":
                            this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (t => {
                                null == t.removed && (t.removed = !1), this.emit(e.filter, this.formatter.filterLog(t))
                            }));
                            break;
                        case "tx":
                            {
                                const t = e => {
                                    const t = e.hash;
                                    this.getTransactionReceipt(t).then((e => {
                                        e && this.emit(t, e)
                                    }))
                                };t(e),
                                this._subscribe("tx", ["newHeads"], (e => {
                                    this._events.filter((e => "tx" === e.type)).forEach(t)
                                }));
                                break
                            }
                        case "debug":
                        case "poll":
                        case "willPoll":
                        case "didPoll":
                        case "error":
                            break;
                        default:
                            console.log("unhandled:", e)
                    }
                }
                _stopEvent(e) {
                    let t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter((e => "tx" === e.type)).length) return;
                        t = "tx"
                    } else if (this.listenerCount(e.event)) return;
                    const r = this._subIds[t];
                    r && (delete this._subIds[t], r.then((e => {
                        this._subs[e] && (delete this._subs[e], this.send("eth_unsubscribe", [e]))
                    })))
                }
                destroy() {
                    return f(this, void 0, void 0, (function*() {
                        this.websocket.readyState === h.CONNECTING && (yield new Promise((e => {
                            this.websocket.onopen = function() {
                                e(!0)
                            }, this.websocket.onerror = function() {
                                e(!1)
                            }
                        }))), this.websocket.close(1e3)
                    }))
                }
            }
        },
        332: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return f
                }));
                var n = r(0),
                    o = r(7),
                    c = r(1088);
                const d = new o.Logger(c.a);
                const l = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== e) return e;
                    throw new Error("unable to locate global object")
                }();
                let h = l.crypto || l.msCrypto;

                function f(e) {
                    (e <= 0 || e > 1024 || e % 1 || e != e) && d.throwArgumentError("invalid length", "length", e);
                    const t = new Uint8Array(e);
                    return h.getRandomValues(t), Object(n.arrayify)(t)
                }
                h && h.getRandomValues || (d.warn("WARNING: Missing strong random number source"), h = {
                    getRandomValues: function(e) {
                        return d.throwError("no secure random source avaialble", o.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "crypto.getRandomValues"
                        })
                    }
                })
            }).call(this, r(36))
        },
        362: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(332);
            r.d(t, "randomBytes", (function() {
                return n.a
            }));
            var o = r(599);
            r.d(t, "shuffled", (function() {
                return o.a
            }))
        },
        371: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "Provider", (function() {
                return n.b
            })), r.d(t, "BaseProvider", (function() {
                return c.a
            })), r.d(t, "Resolver", (function() {
                return c.b
            })), r.d(t, "UrlJsonRpcProvider", (function() {
                return E.b
            })), r.d(t, "FallbackProvider", (function() {
                return m.a
            })), r.d(t, "AlchemyProvider", (function() {
                return d.a
            })), r.d(t, "AlchemyWebSocketProvider", (function() {
                return d.b
            })), r.d(t, "AnkrProvider", (function() {
                return l.a
            })), r.d(t, "CloudflareProvider", (function() {
                return h.a
            })), r.d(t, "EtherscanProvider", (function() {
                return f.a
            })), r.d(t, "InfuraProvider", (function() {
                return N
            })), r.d(t, "InfuraWebSocketProvider", (function() {
                return j
            })), r.d(t, "JsonRpcProvider", (function() {
                return I.a
            })), r.d(t, "JsonRpcBatchProvider", (function() {
                return S
            })), r.d(t, "NodesmithProvider", (function() {
                return A
            })), r.d(t, "PocketProvider", (function() {
                return F
            })), r.d(t, "StaticJsonRpcProvider", (function() {
                return E.a
            })), r.d(t, "Web3Provider", (function() {
                return K
            })), r.d(t, "WebSocketProvider", (function() {
                return v.a
            })), r.d(t, "IpcProvider", (function() {
                return w
            })), r.d(t, "JsonRpcSigner", (function() {
                return I.b
            })), r.d(t, "getDefaultProvider", (function() {
                return J
            })), r.d(t, "getNetwork", (function() {
                return o.a
            })), r.d(t, "isCommunityResource", (function() {
                return k.c
            })), r.d(t, "isCommunityResourcable", (function() {
                return k.b
            })), r.d(t, "showThrottleMessage", (function() {
                return k.d
            })), r.d(t, "Formatter", (function() {
                return k.a
            }));
            var n = r(171),
                o = r(382),
                c = r(211),
                d = r(458),
                l = r(602),
                h = r(603),
                f = r(604),
                m = r(601);
            const w = null;
            var y = r(5),
                v = r(280),
                k = r(111),
                O = r(7),
                _ = r(54),
                E = r(136);
            const P = new O.Logger(_.a),
                R = "84842078b09946638c03157f83405213";
            class j extends v.a {
                constructor(e, t) {
                    const r = new N(e, t),
                        n = r.connection;
                    n.password && P.throwError("INFURA WebSocket project secrets unsupported", O.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "InfuraProvider.getWebSocketProvider()"
                    });
                    super(n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), e), Object(y.defineReadOnly)(this, "apiKey", r.projectId), Object(y.defineReadOnly)(this, "projectId", r.projectId), Object(y.defineReadOnly)(this, "projectSecret", r.projectSecret)
                }
                isCommunityResource() {
                    return this.projectId === R
                }
            }
            class N extends E.b {
                static getWebSocketProvider(e, t) {
                    return new j(e, t)
                }
                static getApiKey(e) {
                    const t = {
                        apiKey: R,
                        projectId: R,
                        projectSecret: null
                    };
                    return null == e || ("string" == typeof e ? t.projectId = e : null != e.projectSecret ? (P.assertArgument("string" == typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId), P.assertArgument("string" == typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"), t.projectId = e.projectId, t.projectSecret = e.projectSecret) : e.projectId && (t.projectId = e.projectId), t.apiKey = t.projectId), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "mainnet.infura.io";
                            break;
                        case "ropsten":
                            r = "ropsten.infura.io";
                            break;
                        case "rinkeby":
                            r = "rinkeby.infura.io";
                            break;
                        case "kovan":
                            r = "kovan.infura.io";
                            break;
                        case "goerli":
                            r = "goerli.infura.io";
                            break;
                        case "matic":
                            r = "polygon-mainnet.infura.io";
                            break;
                        case "maticmum":
                            r = "polygon-mumbai.infura.io";
                            break;
                        case "optimism":
                            r = "optimism-mainnet.infura.io";
                            break;
                        case "optimism-kovan":
                            r = "optimism-kovan.infura.io";
                            break;
                        case "arbitrum":
                            r = "arbitrum-mainnet.infura.io";
                            break;
                        case "arbitrum-rinkeby":
                            r = "arbitrum-rinkeby.infura.io";
                            break;
                        default:
                            P.throwError("unsupported network", O.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    const n = {
                        allowGzip: !0,
                        url: "https://" + r + "/v3/" + t.projectId,
                        throttleCallback: (e, r) => (t.projectId === R && Object(k.d)(), Promise.resolve(!0))
                    };
                    return null != t.projectSecret && (n.user = "", n.password = t.projectSecret), n
                }
                isCommunityResource() {
                    return this.projectId === R
                }
            }
            var I = r(157),
                T = r(99);
            class S extends I.a {
                send(e, t) {
                    const r = {
                        method: e,
                        params: t,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    const n = {
                            request: r,
                            resolve: null,
                            reject: null
                        },
                        o = new Promise(((e, t) => {
                            n.resolve = e, n.reject = t
                        }));
                    return this._pendingBatch.push(n), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout((() => {
                        const e = this._pendingBatch;
                        this._pendingBatch = null, this._pendingBatchAggregator = null;
                        const t = e.map((e => e.request));
                        return this.emit("debug", {
                            action: "requestBatch",
                            request: Object(y.deepCopy)(t),
                            provider: this
                        }), Object(T.fetchJson)(this.connection, JSON.stringify(t)).then((r => {
                            this.emit("debug", {
                                action: "response",
                                request: t,
                                response: r,
                                provider: this
                            }), e.forEach(((e, t) => {
                                const n = r[t];
                                if (n.error) {
                                    const t = new Error(n.error.message);
                                    t.code = n.error.code, t.data = n.error.data, e.reject(t)
                                } else e.resolve(n.result)
                            }))
                        }), (r => {
                            this.emit("debug", {
                                action: "response",
                                error: r,
                                request: t,
                                provider: this
                            }), e.forEach((e => {
                                e.reject(r)
                            }))
                        }))
                    }), 10)), o
                }
            }
            const L = new O.Logger(_.a);
            class A extends E.b {
                static getApiKey(e) {
                    return e && "string" != typeof e && L.throwArgumentError("invalid apiKey", "apiKey", e), e || "ETHERS_JS_SHARED"
                }
                static getUrl(e, t) {
                    L.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    let r = null;
                    switch (e.name) {
                        case "homestead":
                            r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                            break;
                        case "ropsten":
                            r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                            break;
                        case "rinkeby":
                            r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                            break;
                        case "goerli":
                            r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                            break;
                        case "kovan":
                            r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                            break;
                        default:
                            L.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return r + "?apiKey=" + t
                }
            }
            const x = new O.Logger(_.a),
                U = {
                    homestead: "6004bcd10040261633ade990",
                    ropsten: "6004bd4d0040261633ade991",
                    rinkeby: "6004bda20040261633ade994",
                    goerli: "6004bd860040261633ade992"
                };
            class F extends E.b {
                constructor(e, t) {
                    if (null == t) {
                        const r = Object(y.getStatic)(new.target, "getNetwork")(e);
                        if (r) {
                            const e = U[r.name];
                            e && (t = {
                                applicationId: e,
                                loadBalancer: !0
                            })
                        }
                        null == t && x.throwError("unsupported network", O.Logger.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: e
                        })
                    }
                    super(e, t)
                }
                static getApiKey(e) {
                    null == e && x.throwArgumentError("PocketProvider.getApiKey does not support null apiKey", "apiKey", e);
                    const t = {
                        applicationId: null,
                        loadBalancer: !1,
                        applicationSecretKey: null
                    };
                    return "string" == typeof e ? t.applicationId = e : null != e.applicationSecretKey ? (x.assertArgument("string" == typeof e.applicationId, "applicationSecretKey requires an applicationId", "applicationId", e.applicationId), x.assertArgument("string" == typeof e.applicationSecretKey, "invalid applicationSecretKey", "applicationSecretKey", "[REDACTED]"), t.applicationId = e.applicationId, t.applicationSecretKey = e.applicationSecretKey, t.loadBalancer = !!e.loadBalancer) : e.applicationId ? (x.assertArgument("string" == typeof e.applicationId, "apiKey.applicationId must be a string", "apiKey.applicationId", e.applicationId), t.applicationId = e.applicationId, t.loadBalancer = !!e.loadBalancer) : x.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e), t
                }
                static getUrl(e, t) {
                    let r = null;
                    switch (e ? e.name : "unknown") {
                        case "homestead":
                            r = "eth-mainnet.gateway.pokt.network";
                            break;
                        case "ropsten":
                            r = "eth-ropsten.gateway.pokt.network";
                            break;
                        case "rinkeby":
                            r = "eth-rinkeby.gateway.pokt.network";
                            break;
                        case "goerli":
                            r = "eth-goerli.gateway.pokt.network";
                            break;
                        default:
                            x.throwError("unsupported network", O.Logger.errors.INVALID_ARGUMENT, {
                                argument: "network",
                                value: e
                            })
                    }
                    let n = null;
                    n = t.loadBalancer ? `https://${r}/v1/lb/${t.applicationId}` : `https://${r}/v1/${t.applicationId}`;
                    const o = {
                        url: n,
                        headers: {}
                    };
                    return null != t.applicationSecretKey && (o.user = "", o.password = t.applicationSecretKey), o
                }
                isCommunityResource() {
                    return this.applicationId === U[this.network.name]
                }
            }
            const C = new O.Logger(_.a);
            let B = 1;

            function D(e, t) {
                const r = "Web3LegacyFetcher";
                return function(e, n) {
                    const o = {
                        method: e,
                        params: n,
                        id: B++,
                        jsonrpc: "2.0"
                    };
                    return new Promise(((e, n) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: Object(y.deepCopy)(o),
                            provider: this
                        }), t(o, ((t, c) => {
                            if (t) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: t,
                                request: o,
                                provider: this
                            }), n(t);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: o,
                                    response: c,
                                    provider: this
                                }), c.error) {
                                const e = new Error(c.error.message);
                                return e.code = c.error.code, e.data = c.error.data, n(e)
                            }
                            e(c.result)
                        }))
                    }))
                }
            }
            class K extends I.a {
                constructor(e, t) {
                    C.checkNew(new.target, K), null == e && C.throwArgumentError("missing provider", "provider", e);
                    let path = null,
                        r = null,
                        n = null;
                    "function" == typeof e ? (path = "unknown:", r = e) : (path = e.host || e.path || "", !path && e.isMetaMask && (path = "metamask"), n = e, e.request ? ("" === path && (path = "eip-1193:"), r = function(e) {
                        return function(t, r) {
                            null == r && (r = []);
                            const n = {
                                method: t,
                                params: r
                            };
                            return this.emit("debug", {
                                action: "request",
                                fetcher: "Eip1193Fetcher",
                                request: Object(y.deepCopy)(n),
                                provider: this
                            }), e.request(n).then((e => (this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: n,
                                response: e,
                                provider: this
                            }), e)), (e => {
                                throw this.emit("debug", {
                                    action: "response",
                                    fetcher: "Eip1193Fetcher",
                                    request: n,
                                    error: e,
                                    provider: this
                                }), e
                            }))
                        }
                    }(e)) : e.sendAsync ? r = D(0, e.sendAsync.bind(e)) : e.send ? r = D(0, e.send.bind(e)) : C.throwArgumentError("unsupported provider", "provider", e), path || (path = "unknown:")), super(path, t), Object(y.defineReadOnly)(this, "jsonRpcFetchFunc", r), Object(y.defineReadOnly)(this, "provider", n)
                }
                send(e, t) {
                    return this.jsonRpcFetchFunc(e, t)
                }
            }
            const G = new O.Logger(_.a);

            function J(e, t) {
                if (null == e && (e = "homestead"), "string" == typeof e) {
                    const t = e.match(/^(ws|http)s?:/i);
                    if (t) switch (t[1]) {
                        case "http":
                            return new I.a(e);
                        case "ws":
                            return new v.a(e);
                        default:
                            G.throwArgumentError("unsupported URL scheme", "network", e)
                    }
                }
                const r = Object(o.a)(e);
                return r && r._defaultProvider || G.throwError("unsupported getDefaultProvider network", O.Logger.errors.NETWORK_ERROR, {
                    operation: "getDefaultProvider",
                    network: e
                }), r._defaultProvider({
                    FallbackProvider: m.a,
                    AlchemyProvider: d.a,
                    AnkrProvider: l.a,
                    CloudflareProvider: h.a,
                    EtherscanProvider: f.a,
                    InfuraProvider: N,
                    JsonRpcProvider: I.a,
                    NodesmithProvider: A,
                    PocketProvider: F,
                    Web3Provider: K,
                    IpcProvider: w
                }, t)
            }
        },
        599: function(e, t, r) {
            "use strict";

            function n(e) {
                for (let i = (e = e.slice()).length - 1; i > 0; i--) {
                    const t = Math.floor(Math.random() * (i + 1)),
                        r = e[i];
                    e[i] = e[t], e[t] = r
                }
                return e
            }
            r.d(t, "a", (function() {
                return n
            }))
        }
    }
]);