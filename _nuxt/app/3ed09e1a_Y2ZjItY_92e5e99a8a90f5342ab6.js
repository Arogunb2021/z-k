(window.webpackJsonp = window.webpackJsonp || []).push([
    [61], {
        1133: function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n(24),
                    o = n(1134);
                const h = void 0 !== t.WebSocket ? t.WebSocket : n(1522);
                e.a = class {
                    constructor(t) {
                        if (this.opts = t, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new o.a, !t.url || "string" != typeof t.url) throw new Error("Missing or invalid WebSocket url");
                        this._url = t.url, this._netMonitor.on("online", (() => this._socketCreate()))
                    }
                    set readyState(t) {}
                    get readyState() {
                        return this._socket ? this._socket.readyState : -1
                    }
                    set connecting(t) {}
                    get connecting() {
                        return 0 === this.readyState
                    }
                    set connected(t) {}
                    get connected() {
                        return 1 === this.readyState
                    }
                    set closing(t) {}
                    get closing() {
                        return 2 === this.readyState
                    }
                    set closed(t) {}
                    get closed() {
                        return 3 === this.readyState
                    }
                    open() {
                        this._socketCreate()
                    }
                    close() {
                        this._socketClose()
                    }
                    send(t, e, n) {
                        if (!e || "string" != typeof e) throw new Error("Missing or invalid topic field");
                        this._socketSend({
                            topic: e,
                            type: "pub",
                            payload: t,
                            silent: !!n
                        })
                    }
                    subscribe(t) {
                        this._socketSend({
                            topic: t,
                            type: "sub",
                            payload: "",
                            silent: !0
                        })
                    }
                    on(t, e) {
                        this._events.push({
                            event: t,
                            callback: e
                        })
                    }
                    _socketCreate() {
                        if (this._nextSocket) return;
                        const t = function(t, e, n) {
                            var o, h;
                            const l = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"),
                                c = Object(r.o)() ? {
                                    protocol: e,
                                    version: n,
                                    env: "browser",
                                    host: (null === (o = Object(r.l)()) || void 0 === o ? void 0 : o.host) || ""
                                } : {
                                    protocol: e,
                                    version: n,
                                    env: (null === (h = Object(r.g)()) || void 0 === h ? void 0 : h.name) || ""
                                },
                                d = Object(r.a)(Object(r.m)(l[1] || ""), c);
                            return l[0] + "?" + d
                        }(this._url, this._protocol, this._version);
                        if (this._nextSocket = new h(t), !this._nextSocket) throw new Error("Failed to create socket");
                        this._nextSocket.onmessage = t => this._socketReceive(t), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = t => this._socketError(t), this._nextSocket.onclose = () => {
                            setTimeout((() => {
                                this._nextSocket = null, this._socketCreate()
                            }), 1e3)
                        }
                    }
                    _socketOpen() {
                        this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                    }
                    _socketClose() {
                        this._socket && (this._socket.onclose = () => {}, this._socket.close())
                    }
                    _socketSend(t) {
                        const e = JSON.stringify(t);
                        this._socket && 1 === this._socket.readyState ? this._socket.send(e) : (this._setToQueue(t), this._socketCreate())
                    }
                    async _socketReceive(t) {
                        let e;
                        try {
                            e = JSON.parse(t.data)
                        } catch (t) {
                            return
                        }
                        if (this._socketSend({
                                topic: e.topic,
                                type: "ack",
                                payload: "",
                                silent: !0
                            }), this._socket && 1 === this._socket.readyState) {
                            const t = this._events.filter((t => "message" === t.event));
                            t && t.length && t.forEach((t => t.callback(e)))
                        }
                    }
                    _socketError(t) {
                        const e = this._events.filter((t => "error" === t.event));
                        e && e.length && e.forEach((e => e.callback(t)))
                    }
                    _queueSubscriptions() {
                        this._subscriptions.forEach((t => this._queue.push({
                            topic: t,
                            type: "sub",
                            payload: "",
                            silent: !0
                        }))), this._subscriptions = this.opts.subscriptions || []
                    }
                    _setToQueue(t) {
                        this._queue.push(t)
                    }
                    _pushQueue() {
                        this._queue.forEach((t => this._socketSend(t))), this._queue = []
                    }
                }
            }).call(this, n(36))
        },
        1134: function(t, e, n) {
            "use strict";
            e.a = class {
                constructor() {
                    this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", (() => this.trigger("online"))), window.addEventListener("offline", (() => this.trigger("offline"))))
                }
                on(t, e) {
                    this._eventEmitters.push({
                        event: t,
                        callback: e
                    })
                }
                trigger(t) {
                    let e = [];
                    t && (e = this._eventEmitters.filter((e => e.event === t))), e.forEach((t => {
                        t.callback()
                    }))
                }
            }
        },
        1149: function(t, e, n) {
            "use strict";
            var r = n(1147),
                o = n(1135);
            class h extends r.a {
                constructor(t, e) {
                    super({
                        cryptoLib: o,
                        connectorOpts: t,
                        pushServerOpts: e
                    })
                }
            }
            var l = h,
                c = n(1136),
                d = n.n(c),
                f = n(1137),
                m = n(24);
            const v = n(1564),
                M = n(1645),
                w = n(1649),
                y = n(1650),
                _ = n(1663),
                k = n(1679),
                S = n(1682);
            e.a = class extends v {
                constructor(t) {
                    if (super({
                            pollingInterval: t.pollingInterval || 8e3
                        }), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModal = d.a, this.qrcodeModalOptions = void 0, this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], this.accounts = [], this.chainId = 1, this.rpcUrl = "", this.enable = async () => {
                            const t = await this.getWalletConnector();
                            if (t) return this.start(), this.subscribeWalletConnector(), t.accounts;
                            throw new Error("Failed to connect to WalleConnect")
                        }, this.request = async t => this.send(t), this.send = async (t, e) => {
                            var n;
                            if ("string" == typeof t) {
                                const n = t;
                                let r = e;
                                return "personal_sign" === n && (r = Object(m.y)(r)), this.sendAsyncPromise(n, r)
                            }
                            if ("personal_sign" === (t = Object.assign({
                                    id: Object(m.B)(),
                                    jsonrpc: "2.0"
                                }, t)).method && (t.params = Object(m.y)(t.params)), !e) {
                                if ("eth_signTypedData_v4" === t.method && "MetaMask" === (null === (n = this.walletMeta) || void 0 === n ? void 0 : n.name)) {
                                    const {
                                        result: e
                                    } = await this.handleOtherRequests(t);
                                    return e
                                }
                                return this.sendAsyncPromise(t.method, t.params)
                            }
                            this.sendAsync(t, e)
                        }, this.onConnect = t => {
                            this.connectCallbacks.push(t)
                        }, this.triggerConnect = t => {
                            this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach((e => e(t)))
                        }, this.bridge = t.connector ? t.connector.bridge : t.bridge || "https://bridge.walletconnect.org", this.qrcode = void 0 === t.qrcode || !1 !== t.qrcode, this.qrcodeModal = t.qrcodeModal || this.qrcodeModal, this.qrcodeModalOptions = t.qrcodeModalOptions, this.wc = t.connector || new l({
                            bridge: this.bridge,
                            qrcodeModal: this.qrcode ? this.qrcodeModal : void 0,
                            qrcodeModalOptions: this.qrcodeModalOptions,
                            storageId: null == t ? void 0 : t.storageId,
                            signingMethods: null == t ? void 0 : t.signingMethods,
                            clientMeta: null == t ? void 0 : t.clientMeta
                        }), this.rpc = t.rpc || null, !(this.rpc || t.infuraId && "string" == typeof t.infuraId && t.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
                    this.infuraId = t.infuraId || "", this.chainId = (null == t ? void 0 : t.chainId) || this.chainId, this.initialize()
                }
                get isWalletConnect() {
                    return !0
                }
                get connector() {
                    return this.wc
                }
                get walletMeta() {
                    return this.wc.peerMeta
                }
                async disconnect() {
                    this.close()
                }
                async close() {
                    const t = await this.getWalletConnector({
                        disableSessionCreation: !0
                    });
                    await t.killSession(), await this.onDisconnect()
                }
                async handleRequest(t) {
                    try {
                        let e, n = null;
                        const r = await this.getWalletConnector();
                        switch (t.method) {
                            case "wc_killSession":
                                await this.close(), n = null;
                                break;
                            case "eth_accounts":
                                n = r.accounts;
                                break;
                            case "eth_coinbase":
                                n = r.accounts[0];
                                break;
                            case "eth_chainId":
                            case "net_version":
                                n = r.chainId;
                                break;
                            case "eth_uninstallFilter":
                                this.sendAsync(t, (t => t)), n = !0;
                                break;
                            default:
                                e = await this.handleOtherRequests(t)
                        }
                        return e || this.formatResponse(t, n)
                    } catch (t) {
                        throw this.emit("error", t), t
                    }
                }
                async handleOtherRequests(t) {
                    if (!m.E.includes(t.method) && t.method.startsWith("eth_")) return this.handleReadRequests(t);
                    const e = await this.getWalletConnector(),
                        n = await e.sendCustomRequest(t);
                    return this.formatResponse(t, n)
                }
                async handleReadRequests(t) {
                    if (!this.http) {
                        const t = new Error("HTTP Connection not available");
                        throw this.emit("error", t), t
                    }
                    return this.http.send(t)
                }
                formatResponse(t, e) {
                    return {
                        id: t.id,
                        jsonrpc: t.jsonrpc,
                        result: e
                    }
                }
                getWalletConnector(t = {}) {
                    const {
                        disableSessionCreation: e = !1
                    } = t;
                    return new Promise(((t, n) => {
                        const r = this.wc;
                        this.isConnecting ? this.onConnect((e => t(e))) : r.connected || e ? (this.connected || (this.connected = !0, this.updateState(r.session)), t(r)) : (this.isConnecting = !0, r.on("modal_closed", (() => {
                            n(new Error("User closed modal"))
                        })), r.createSession({
                            chainId: this.chainId
                        }).then((() => {
                            r.on("connect", ((e, o) => {
                                if (e) return this.isConnecting = !1, n(e);
                                this.isConnecting = !1, this.connected = !0, o && this.updateState(o.params[0]), this.emit("connect"), this.triggerConnect(r), t(r)
                            }))
                        })).catch((t => {
                            this.isConnecting = !1, n(t)
                        })))
                    }))
                }
                async subscribeWalletConnector() {
                    const t = await this.getWalletConnector();
                    t.on("disconnect", (t => {
                        t ? this.emit("error", t) : this.onDisconnect()
                    })), t.on("session_update", ((t, e) => {
                        t ? this.emit("error", t) : this.updateState(e.params[0])
                    }))
                }
                async onDisconnect() {
                    await this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected"), this.connected = !1
                }
                async updateState(t) {
                    const {
                        accounts: e,
                        chainId: n,
                        networkId: r,
                        rpcUrl: o
                    } = t;
                    (!this.accounts || e && this.accounts !== e) && (this.accounts = e, this.emit("accountsChanged", e)), (!this.chainId || n && this.chainId !== n) && (this.chainId = n, this.emit("chainChanged", n)), (!this.networkId || r && this.networkId !== r) && (this.networkId = r, this.emit("networkChanged", r)), this.updateRpcUrl(this.chainId, o || "")
                }
                updateRpcUrl(t, e = "") {
                    const n = {
                        infuraId: this.infuraId,
                        custom: this.rpc || void 0
                    };
                    (e = e || Object(m.n)(t, n)) ? (this.rpcUrl = e, this.updateHttpConnection()) : this.emit("error", new Error(`No RPC Url available for chainId: ${t}`))
                }
                updateHttpConnection() {
                    this.rpcUrl && (this.http = new f.a(this.rpcUrl), this.http.on("payload", (t => this.emit("payload", t))), this.http.on("error", (t => this.emit("error", t))))
                }
                sendAsyncPromise(t, e) {
                    return new Promise(((n, r) => {
                        this.sendAsync({
                            id: Object(m.B)(),
                            jsonrpc: "2.0",
                            method: t,
                            params: e || []
                        }, ((t, e) => {
                            t ? r(t) : n(e.result)
                        }))
                    }))
                }
                initialize() {
                    this.updateRpcUrl(this.chainId), this.addProvider(new w({
                        eth_hashrate: "0x00",
                        eth_mining: !1,
                        eth_syncing: !0,
                        net_listening: !0,
                        web3_clientVersion: "WalletConnect/v1.x.x/javascript"
                    })), this.addProvider(new M), this.addProvider(new S), this.addProvider(new y), this.addProvider(new k), this.addProvider(new _(this.configWallet())), this.addProvider({
                        handleRequest: async (t, e, n) => {
                            try {
                                const {
                                    error: e,
                                    result: r
                                } = await this.handleRequest(t);
                                n(e, r)
                            } catch (t) {
                                n(t)
                            }
                        },
                        setEngine: t => t
                    })
                }
                configWallet() {
                    return {
                        getAccounts: async t => {
                            try {
                                const e = (await this.getWalletConnector()).accounts;
                                e && e.length ? t(null, e) : t(new Error("Failed to get accounts"))
                            } catch (e) {
                                t(e)
                            }
                        },
                        processMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signMessage([t.from, t.data]))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processPersonalMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signPersonalMessage([t.data, t.from]))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processSignTransaction: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signTransaction(t))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processTransaction: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.sendTransaction(t))
                            } catch (t) {
                                e(t)
                            }
                        },
                        processTypedMessage: async (t, e) => {
                            try {
                                const n = await this.getWalletConnector();
                                e(null, await n.signTypedData([t.from, t.data]))
                            } catch (t) {
                                e(t)
                            }
                        }
                    }
                }
            }
        },
        148: function(t, e, n) {
            "use strict";

            function r(t) {
                let e;
                return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e
            }

            function o(t) {
                const e = r(t);
                if (!e) throw new Error(`${t} is not defined in Window`);
                return e
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, e.getFromWindow = r, e.getFromWindowOrThrow = o, e.getDocumentOrThrow = function() {
                return o("document")
            }, e.getDocument = function() {
                return r("document")
            }, e.getNavigatorOrThrow = function() {
                return o("navigator")
            }, e.getNavigator = function() {
                return r("navigator")
            }, e.getLocationOrThrow = function() {
                return o("location")
            }, e.getLocation = function() {
                return r("location")
            }, e.getCryptoOrThrow = function() {
                return o("crypto")
            }, e.getCrypto = function() {
                return r("crypto")
            }, e.getLocalStorageOrThrow = function() {
                return o("localStorage")
            }, e.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        1522: function(t, e, n) {
            "use strict";
            t.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        24: function(t, e, n) {
            "use strict";
            n.d(e, "g", (function() {
                return r.detectEnv
            })), n.d(e, "t", (function() {
                return r.isMobile
            })), n.d(e, "o", (function() {
                return r.isBrowser
            })), n.d(e, "j", (function() {
                return r.getFromWindow
            })), n.d(e, "l", (function() {
                return r.getLocation
            })), n.d(e, "i", (function() {
                return r.getClientMeta
            })), n.d(e, "D", (function() {
                return r.setLocal
            })), n.d(e, "k", (function() {
                return r.getLocal
            })), n.d(e, "C", (function() {
                return r.removeLocal
            })), n.d(e, "x", (function() {
                return r.mobileLinkChoiceKey
            })), n.d(e, "E", (function() {
                return h
            })), n.d(e, "b", (function() {
                return m
            })), n.d(e, "c", (function() {
                return v
            })), n.d(e, "d", (function() {
                return M
            })), n.d(e, "e", (function() {
                return w
            })), n.d(e, "f", (function() {
                return y
            })), n.d(e, "y", (function() {
                return W
            })), n.d(e, "z", (function() {
                return B
            })), n.d(e, "B", (function() {
                return S
            })), n.d(e, "F", (function() {
                return O
            })), n.d(e, "n", (function() {
                return C
            })), n.d(e, "h", (function() {
                return N
            })), n.d(e, "w", (function() {
                return U
            })), n.d(e, "A", (function() {
                return z
            })), n.d(e, "m", (function() {
                return Z
            })), n.d(e, "a", (function() {
                return D
            })), n.d(e, "q", (function() {
                return A
            })), n.d(e, "s", (function() {
                return I
            })), n.d(e, "r", (function() {
                return R
            })), n.d(e, "p", (function() {
                return T
            })), n.d(e, "u", (function() {
                return E
            })), n.d(e, "v", (function() {
                return L
            }));
            var r = n(595);
            const o = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                h = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                l = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                };
            var c = n(403),
                d = n.n(c),
                f = n(26);

            function m(t) {
                return f.b(new Uint8Array(t))
            }

            function v(t, e) {
                return f.c(new Uint8Array(t), !e)
            }

            function M(t) {
                return f.f(t).buffer
            }

            function w(t) {
                return f.n(t).buffer
            }

            function y(t, e) {
                const n = f.x(f.y(new d.a(t).toString(16)));
                return e ? n : f.a(n)
            }
            var _ = n(79);

            function k(t) {
                return f.y(t)
            }
            const S = n(1132).payloadId;

            function O() {
                return ((a, b) => {
                    for (b = a = ""; a++ < 36; b += 51 * a & 52 ? (15 ^ a ? 8 ^ Math.random() * (20 ^ a ? 16 : 4) : 4).toString(16) : "-");
                    return b
                })()
            }

            function C(t, e) {
                let n;
                const r = function(t, e) {
                    let n;
                    const r = l[t];
                    return r && (n = `https://${r}.infura.io/v3/${e}`), n
                }(t, e.infuraId);
                return e.custom && e.custom[t] ? n = e.custom[t] : r && (n = r), n
            }

            function x(t, e) {
                return f.s(t, e)
            }

            function A(object) {
                return void 0 !== object.method
            }

            function I(object) {
                return void 0 !== object.result
            }

            function R(object) {
                return void 0 !== object.error
            }

            function T(object) {
                return void 0 !== object.event
            }

            function E(t) {
                return o.includes(t) || t.startsWith("wc_")
            }

            function L(t) {
                return !!t.method.startsWith("wc_") || !h.includes(t.method)
            }

            function j(address) {
                address = Object(f.x)(address.toLowerCase());
                const t = Object(f.x)(Object(_.keccak_256)((e = address, f.A(e))));
                var e;
                let n = "";
                for (let i = 0; i < address.length; i++) parseInt(t[i], 16) > 7 ? n += address[i].toUpperCase() : n += address[i];
                return Object(f.a)(n)
            }

            function W(t) {
                var e, n, r;
                return (r = t) && r.length && !x(t[0]) && (t[0] = (e = t[0], f.B(e, !n))), t
            }

            function B(t) {
                if (void 0 !== t.type && "0" !== t.type) return t;
                if (void 0 === t.from || (!(address = t.from) || "0x" !== address.toLowerCase().substring(0, 2) || !/^(0x)?[0-9a-f]{40}$/i.test(address) || !/^(0x)?[0-9a-f]{40}$/.test(address) && !/^(0x)?[0-9A-F]{40}$/.test(address) && address !== j(address))) throw new Error("Transaction object must include a valid 'from' value.");
                var address;

                function e(t) {
                    let e = t;
                    var n;
                    return ("number" == typeof t || "string" == typeof t && ! function(t) {
                        return "" === t || "string" == typeof t && "" === t.trim()
                    }(t)) && (x(t) ? "string" == typeof t && (e = k(t)) : e = y(t)), "string" == typeof e && (n = e, e = f.w(f.a(n))), e
                }
                const n = {
                        from: k(t.from),
                        to: void 0 === t.to ? void 0 : k(t.to),
                        gasPrice: void 0 === t.gasPrice ? "" : e(t.gasPrice),
                        gas: void 0 === t.gas ? void 0 === t.gasLimit ? "" : e(t.gasLimit) : e(t.gas),
                        value: void 0 === t.value ? "" : e(t.value),
                        nonce: void 0 === t.nonce ? "" : e(t.nonce),
                        data: void 0 === t.data ? "" : k(t.data) || "0x"
                    },
                    r = ["gasPrice", "gas", "value", "nonce"];
                return Object.keys(n).forEach((t => {
                    (void 0 === n[t] || "string" == typeof n[t] && !n[t].trim().length) && r.includes(t) && delete n[t]
                })), n
            }

            function N(t) {
                const e = t.message || "Failed or Rejected Request";
                let code = -32e3;
                if (t && !t.code) switch (e) {
                    case "Parse error":
                        code = -32700;
                        break;
                    case "Invalid request":
                        code = -32600;
                        break;
                    case "Method not found":
                        code = -32601;
                        break;
                    case "Invalid params":
                        code = -32602;
                        break;
                    case "Internal error":
                        code = -32603;
                        break;
                    default:
                        code = -32e3
                }
                const n = {
                    code: code,
                    message: e
                };
                return t.data && (n.data = t.data), n
            }
            var P = n(616);

            function Z(t) {
                const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
                return void 0 !== e ? t.substr(e) : ""
            }

            function D(t, e) {
                let n = F(t);
                return n = Object.assign(Object.assign({}, n), e), t = function(t) {
                    return P.stringify(t)
                }(n), t
            }

            function F(t) {
                return P.parse(t)
            }

            function U(object) {
                return void 0 !== object.bridge
            }

            function z(t) {
                const e = t.indexOf(":"),
                    n = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                    r = t.substring(0, e);
                const o = function(path) {
                    const t = path.split("@");
                    return {
                        handshakeTopic: t[0],
                        version: parseInt(t[1], 10)
                    }
                }(t.substring(e + 1, n));
                const h = function(t) {
                    const e = F(t);
                    return {
                        key: e.key || "",
                        bridge: e.bridge || ""
                    }
                }(void 0 !== n ? t.substr(n) : "");
                return Object.assign(Object.assign({
                    protocol: r
                }, o), h)
            }
        },
        403: function(t, e, n) {
            (function(t) {
                ! function(t, e) {
                    "use strict";

                    function r(t, e) {
                        if (!t) throw new Error(e || "Assertion failed")
                    }

                    function o(t, e) {
                        t.super_ = e;
                        var n = function() {};
                        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                    }

                    function h(t, base, e) {
                        if (h.isBN(t)) return t;
                        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== base && "be" !== base || (e = base, base = 10), this._init(t || 0, base || 10, e || "be"))
                    }
                    var l;
                    "object" == typeof t ? t.exports = h : e.BN = h, h.BN = h, h.wordSize = 26;
                    try {
                        l = n(1515).Buffer
                    } catch (t) {}

                    function c(t, e, n) {
                        for (var r = 0, o = Math.min(t.length, n), i = e; i < o; i++) {
                            var h = t.charCodeAt(i) - 48;
                            r <<= 4, r |= h >= 49 && h <= 54 ? h - 49 + 10 : h >= 17 && h <= 22 ? h - 17 + 10 : 15 & h
                        }
                        return r
                    }

                    function d(t, e, n, r) {
                        for (var o = 0, h = Math.min(t.length, n), i = e; i < h; i++) {
                            var l = t.charCodeAt(i) - 48;
                            o *= r, o += l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l
                        }
                        return o
                    }
                    h.isBN = function(t) {
                        return t instanceof h || null !== t && "object" == typeof t && t.constructor.wordSize === h.wordSize && Array.isArray(t.words)
                    }, h.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, h.min = function(t, e) {
                        return t.cmp(e) < 0 ? t : e
                    }, h.prototype._init = function(t, base, e) {
                        if ("number" == typeof t) return this._initNumber(t, base, e);
                        if ("object" == typeof t) return this._initArray(t, base, e);
                        "hex" === base && (base = 16), r(base === (0 | base) && base >= 2 && base <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++, 16 === base ? this._parseHex(t, n) : this._parseBase(t, base, n), "-" === t[0] && (this.negative = 1), this.strip(), "le" === e && this._initArray(this.toArray(), base, e)
                    }, h.prototype._initNumber = function(t, base, e) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === e && this._initArray(this.toArray(), base, e)
                    }, h.prototype._initArray = function(t, base, e) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, o, h = 0;
                        if ("be" === e)
                            for (i = t.length - 1, n = 0; i >= 0; i -= 3) o = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[n] |= o << h & 67108863, this.words[n + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, n++);
                        else if ("le" === e)
                            for (i = 0, n = 0; i < t.length; i += 3) o = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[n] |= o << h & 67108863, this.words[n + 1] = o >>> 26 - h & 67108863, (h += 24) >= 26 && (h -= 26, n++);
                        return this.strip()
                    }, h.prototype._parseHex = function(t, e) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) this.words[i] = 0;
                        var n, r, o = 0;
                        for (i = t.length - 6, n = 0; i >= e; i -= 6) r = c(t, i, i + 6), this.words[n] |= r << o & 67108863, this.words[n + 1] |= r >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                        i + 6 !== e && (r = c(t, e, i + 6), this.words[n] |= r << o & 67108863, this.words[n + 1] |= r >>> 26 - o & 4194303), this.strip()
                    }, h.prototype._parseBase = function(t, base, e) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, r = 1; r <= 67108863; r *= base) n++;
                        n--, r = r / base | 0;
                        for (var o = t.length - e, h = o % n, l = Math.min(o, o - h) + e, c = 0, i = e; i < l; i += n) c = d(t, i, i + n, base), this.imuln(r), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== h) {
                            var f = 1;
                            for (c = d(t, i, t.length, base), i = 0; i < h; i++) f *= base;
                            this.imuln(f), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                        }
                    }, h.prototype.copy = function(t) {
                        t.words = new Array(this.length);
                        for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, h.prototype.clone = function() {
                        var t = new h(null);
                        return this.copy(t), t
                    }, h.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, h.prototype.strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, h.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, h.prototype.inspect = function() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    };
                    var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                        m = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        v = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                    function M(t, e, n) {
                        n.negative = e.negative ^ t.negative;
                        var r = t.length + e.length | 0;
                        n.length = r, r = r - 1 | 0;
                        var a = 0 | t.words[0],
                            b = 0 | e.words[0],
                            o = a * b,
                            h = 67108863 & o,
                            l = o / 67108864 | 0;
                        n.words[0] = h;
                        for (var c = 1; c < r; c++) {
                            for (var d = l >>> 26, f = 67108863 & l, m = Math.min(c, e.length - 1), v = Math.max(0, c - t.length + 1); v <= m; v++) {
                                var i = c - v | 0;
                                d += (o = (a = 0 | t.words[i]) * (b = 0 | e.words[v]) + f) / 67108864 | 0, f = 67108863 & o
                            }
                            n.words[c] = 0 | f, l = 0 | d
                        }
                        return 0 !== l ? n.words[c] = 0 | l : n.length--, n.strip()
                    }
                    h.prototype.toString = function(base, t) {
                        var e;
                        if (t = 0 | t || 1, 16 === (base = base || 10) || "hex" === base) {
                            e = "";
                            for (var n = 0, o = 0, i = 0; i < this.length; i++) {
                                var h = this.words[i],
                                    l = (16777215 & (h << n | o)).toString(16);
                                e = 0 !== (o = h >>> 24 - n & 16777215) || i !== this.length - 1 ? f[6 - l.length] + l + e : l + e, (n += 2) >= 26 && (n -= 26, i--)
                            }
                            for (0 !== o && (e = o.toString(16) + e); e.length % t != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        if (base === (0 | base) && base >= 2 && base <= 36) {
                            var c = m[base],
                                d = v[base];
                            e = "";
                            var M = this.clone();
                            for (M.negative = 0; !M.isZero();) {
                                var w = M.modn(d).toString(base);
                                e = (M = M.idivn(d)).isZero() ? w + e : f[c - w.length] + w + e
                            }
                            for (this.isZero() && (e = "0" + e); e.length % t != 0;) e = "0" + e;
                            return 0 !== this.negative && (e = "-" + e), e
                        }
                        r(!1, "Base should be between 2 and 36")
                    }, h.prototype.toNumber = function() {
                        var t = this.words[0];
                        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                    }, h.prototype.toJSON = function() {
                        return this.toString(16)
                    }, h.prototype.toBuffer = function(t, e) {
                        return r(void 0 !== l), this.toArrayLike(l, t, e)
                    }, h.prototype.toArray = function(t, e) {
                        return this.toArrayLike(Array, t, e)
                    }, h.prototype.toArrayLike = function(t, e, n) {
                        var o = this.byteLength(),
                            h = n || Math.max(1, o);
                        r(o <= h, "byte array longer than desired length"), r(h > 0, "Requested array length <= 0"), this.strip();
                        var b, i, l = "le" === e,
                            c = new t(h),
                            q = this.clone();
                        if (l) {
                            for (i = 0; !q.isZero(); i++) b = q.andln(255), q.iushrn(8), c[i] = b;
                            for (; i < h; i++) c[i] = 0
                        } else {
                            for (i = 0; i < h - o; i++) c[i] = 0;
                            for (i = 0; !q.isZero(); i++) b = q.andln(255), q.iushrn(8), c[h - i - 1] = b
                        }
                        return c
                    }, Math.clz32 ? h.prototype._countBits = function(t) {
                        return 32 - Math.clz32(t)
                    } : h.prototype._countBits = function(t) {
                        var e = t,
                            n = 0;
                        return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e
                    }, h.prototype._zeroBits = function(t) {
                        if (0 === t) return 26;
                        var e = t,
                            n = 0;
                        return 0 == (8191 & e) && (n += 13, e >>>= 13), 0 == (127 & e) && (n += 7, e >>>= 7), 0 == (15 & e) && (n += 4, e >>>= 4), 0 == (3 & e) && (n += 2, e >>>= 2), 0 == (1 & e) && n++, n
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
                        return this.strip()
                    }, h.prototype.ior = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuor(t)
                    }, h.prototype.or = function(t) {
                        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                    }, h.prototype.uor = function(t) {
                        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                    }, h.prototype.iuand = function(t) {
                        var b;
                        b = this.length > t.length ? t : this;
                        for (var i = 0; i < b.length; i++) this.words[i] = this.words[i] & t.words[i];
                        return this.length = b.length, this.strip()
                    }, h.prototype.iand = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuand(t)
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
                        return this.length = a.length, this.strip()
                    }, h.prototype.ixor = function(t) {
                        return r(0 == (this.negative | t.negative)), this.iuxor(t)
                    }, h.prototype.xor = function(t) {
                        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                    }, h.prototype.uxor = function(t) {
                        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                    }, h.prototype.inotn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = 0 | Math.ceil(t / 26),
                            n = t % 26;
                        this._expand(e), n > 0 && e--;
                        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                    }, h.prototype.notn = function(t) {
                        return this.clone().inotn(t)
                    }, h.prototype.setn = function(t, e) {
                        r("number" == typeof t && t >= 0);
                        var n = t / 26 | 0,
                            o = t % 26;
                        return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << o : this.words[n] & ~(1 << o), this.strip()
                    }, h.prototype.iadd = function(t) {
                        var e, a, b;
                        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                        this.length > t.length ? (a = this, b = t) : (a = t, b = this);
                        for (var n = 0, i = 0; i < b.length; i++) e = (0 | a.words[i]) + (0 | b.words[i]) + n, this.words[i] = 67108863 & e, n = e >>> 26;
                        for (; 0 !== n && i < a.length; i++) e = (0 | a.words[i]) + n, this.words[i] = 67108863 & e, n = e >>> 26;
                        if (this.length = a.length, 0 !== n) this.words[this.length] = n, this.length++;
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
                        var a, b, n = this.cmp(t);
                        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                        n > 0 ? (a = this, b = t) : (a = t, b = this);
                        for (var r = 0, i = 0; i < b.length; i++) r = (e = (0 | a.words[i]) - (0 | b.words[i]) + r) >> 26, this.words[i] = 67108863 & e;
                        for (; 0 !== r && i < a.length; i++) r = (e = (0 | a.words[i]) + r) >> 26, this.words[i] = 67108863 & e;
                        if (0 === r && i < a.length && a !== this)
                            for (; i < a.length; i++) this.words[i] = a.words[i];
                        return this.length = Math.max(this.length, i), a !== this && (this.negative = 1), this.strip()
                    }, h.prototype.sub = function(t) {
                        return this.clone().isub(t)
                    };
                    var w = function(t, e, n) {
                        var r, o, h, a = t.words,
                            b = e.words,
                            l = n.words,
                            c = 0,
                            d = 0 | a[0],
                            f = 8191 & d,
                            m = d >>> 13,
                            v = 0 | a[1],
                            M = 8191 & v,
                            w = v >>> 13,
                            y = 0 | a[2],
                            _ = 8191 & y,
                            k = y >>> 13,
                            S = 0 | a[3],
                            O = 8191 & S,
                            C = S >>> 13,
                            x = 0 | a[4],
                            A = 8191 & x,
                            I = x >>> 13,
                            R = 0 | a[5],
                            T = 8191 & R,
                            E = R >>> 13,
                            L = 0 | a[6],
                            j = 8191 & L,
                            W = L >>> 13,
                            B = 0 | a[7],
                            N = 8191 & B,
                            P = B >>> 13,
                            Z = 0 | a[8],
                            D = 8191 & Z,
                            F = Z >>> 13,
                            U = 0 | a[9],
                            z = 8191 & U,
                            J = U >>> 13,
                            $ = 0 | b[0],
                            H = 8191 & $,
                            K = $ >>> 13,
                            Q = 0 | b[1],
                            V = 8191 & Q,
                            G = Q >>> 13,
                            X = 0 | b[2],
                            Y = 8191 & X,
                            tt = X >>> 13,
                            it = 0 | b[3],
                            et = 8191 & it,
                            nt = it >>> 13,
                            ot = 0 | b[4],
                            st = 8191 & ot,
                            ht = ot >>> 13,
                            ut = 0 | b[5],
                            at = 8191 & ut,
                            lt = ut >>> 13,
                            ct = 0 | b[6],
                            ft = 8191 & ct,
                            mt = ct >>> 13,
                            pt = 0 | b[7],
                            gt = 8191 & pt,
                            vt = pt >>> 13,
                            Mt = 0 | b[8],
                            wt = 8191 & Mt,
                            yt = Mt >>> 13,
                            bt = 0 | b[9],
                            _t = 8191 & bt,
                            kt = bt >>> 13;
                        n.negative = t.negative ^ e.negative, n.length = 19;
                        var St = (c + (r = Math.imul(f, H)) | 0) + ((8191 & (o = (o = Math.imul(f, K)) + Math.imul(m, H) | 0)) << 13) | 0;
                        c = ((h = Math.imul(m, K)) + (o >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, r = Math.imul(M, H), o = (o = Math.imul(M, K)) + Math.imul(w, H) | 0, h = Math.imul(w, K);
                        var Ot = (c + (r = r + Math.imul(f, V) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, G) | 0) + Math.imul(m, V) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, G) | 0) + (o >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, r = Math.imul(_, H), o = (o = Math.imul(_, K)) + Math.imul(k, H) | 0, h = Math.imul(k, K), r = r + Math.imul(M, V) | 0, o = (o = o + Math.imul(M, G) | 0) + Math.imul(w, V) | 0, h = h + Math.imul(w, G) | 0;
                        var Ct = (c + (r = r + Math.imul(f, Y) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, tt) | 0) + Math.imul(m, Y) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, tt) | 0) + (o >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, r = Math.imul(O, H), o = (o = Math.imul(O, K)) + Math.imul(C, H) | 0, h = Math.imul(C, K), r = r + Math.imul(_, V) | 0, o = (o = o + Math.imul(_, G) | 0) + Math.imul(k, V) | 0, h = h + Math.imul(k, G) | 0, r = r + Math.imul(M, Y) | 0, o = (o = o + Math.imul(M, tt) | 0) + Math.imul(w, Y) | 0, h = h + Math.imul(w, tt) | 0;
                        var xt = (c + (r = r + Math.imul(f, et) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, nt) | 0) + Math.imul(m, et) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, nt) | 0) + (o >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, r = Math.imul(A, H), o = (o = Math.imul(A, K)) + Math.imul(I, H) | 0, h = Math.imul(I, K), r = r + Math.imul(O, V) | 0, o = (o = o + Math.imul(O, G) | 0) + Math.imul(C, V) | 0, h = h + Math.imul(C, G) | 0, r = r + Math.imul(_, Y) | 0, o = (o = o + Math.imul(_, tt) | 0) + Math.imul(k, Y) | 0, h = h + Math.imul(k, tt) | 0, r = r + Math.imul(M, et) | 0, o = (o = o + Math.imul(M, nt) | 0) + Math.imul(w, et) | 0, h = h + Math.imul(w, nt) | 0;
                        var qt = (c + (r = r + Math.imul(f, st) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, ht) | 0) + Math.imul(m, st) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, ht) | 0) + (o >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, r = Math.imul(T, H), o = (o = Math.imul(T, K)) + Math.imul(E, H) | 0, h = Math.imul(E, K), r = r + Math.imul(A, V) | 0, o = (o = o + Math.imul(A, G) | 0) + Math.imul(I, V) | 0, h = h + Math.imul(I, G) | 0, r = r + Math.imul(O, Y) | 0, o = (o = o + Math.imul(O, tt) | 0) + Math.imul(C, Y) | 0, h = h + Math.imul(C, tt) | 0, r = r + Math.imul(_, et) | 0, o = (o = o + Math.imul(_, nt) | 0) + Math.imul(k, et) | 0, h = h + Math.imul(k, nt) | 0, r = r + Math.imul(M, st) | 0, o = (o = o + Math.imul(M, ht) | 0) + Math.imul(w, st) | 0, h = h + Math.imul(w, ht) | 0;
                        var At = (c + (r = r + Math.imul(f, at) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, lt) | 0) + Math.imul(m, at) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, lt) | 0) + (o >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, r = Math.imul(j, H), o = (o = Math.imul(j, K)) + Math.imul(W, H) | 0, h = Math.imul(W, K), r = r + Math.imul(T, V) | 0, o = (o = o + Math.imul(T, G) | 0) + Math.imul(E, V) | 0, h = h + Math.imul(E, G) | 0, r = r + Math.imul(A, Y) | 0, o = (o = o + Math.imul(A, tt) | 0) + Math.imul(I, Y) | 0, h = h + Math.imul(I, tt) | 0, r = r + Math.imul(O, et) | 0, o = (o = o + Math.imul(O, nt) | 0) + Math.imul(C, et) | 0, h = h + Math.imul(C, nt) | 0, r = r + Math.imul(_, st) | 0, o = (o = o + Math.imul(_, ht) | 0) + Math.imul(k, st) | 0, h = h + Math.imul(k, ht) | 0, r = r + Math.imul(M, at) | 0, o = (o = o + Math.imul(M, lt) | 0) + Math.imul(w, at) | 0, h = h + Math.imul(w, lt) | 0;
                        var It = (c + (r = r + Math.imul(f, ft) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, mt) | 0) + Math.imul(m, ft) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, mt) | 0) + (o >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, r = Math.imul(N, H), o = (o = Math.imul(N, K)) + Math.imul(P, H) | 0, h = Math.imul(P, K), r = r + Math.imul(j, V) | 0, o = (o = o + Math.imul(j, G) | 0) + Math.imul(W, V) | 0, h = h + Math.imul(W, G) | 0, r = r + Math.imul(T, Y) | 0, o = (o = o + Math.imul(T, tt) | 0) + Math.imul(E, Y) | 0, h = h + Math.imul(E, tt) | 0, r = r + Math.imul(A, et) | 0, o = (o = o + Math.imul(A, nt) | 0) + Math.imul(I, et) | 0, h = h + Math.imul(I, nt) | 0, r = r + Math.imul(O, st) | 0, o = (o = o + Math.imul(O, ht) | 0) + Math.imul(C, st) | 0, h = h + Math.imul(C, ht) | 0, r = r + Math.imul(_, at) | 0, o = (o = o + Math.imul(_, lt) | 0) + Math.imul(k, at) | 0, h = h + Math.imul(k, lt) | 0, r = r + Math.imul(M, ft) | 0, o = (o = o + Math.imul(M, mt) | 0) + Math.imul(w, ft) | 0, h = h + Math.imul(w, mt) | 0;
                        var Rt = (c + (r = r + Math.imul(f, gt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, vt) | 0) + Math.imul(m, gt) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, vt) | 0) + (o >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, r = Math.imul(D, H), o = (o = Math.imul(D, K)) + Math.imul(F, H) | 0, h = Math.imul(F, K), r = r + Math.imul(N, V) | 0, o = (o = o + Math.imul(N, G) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, G) | 0, r = r + Math.imul(j, Y) | 0, o = (o = o + Math.imul(j, tt) | 0) + Math.imul(W, Y) | 0, h = h + Math.imul(W, tt) | 0, r = r + Math.imul(T, et) | 0, o = (o = o + Math.imul(T, nt) | 0) + Math.imul(E, et) | 0, h = h + Math.imul(E, nt) | 0, r = r + Math.imul(A, st) | 0, o = (o = o + Math.imul(A, ht) | 0) + Math.imul(I, st) | 0, h = h + Math.imul(I, ht) | 0, r = r + Math.imul(O, at) | 0, o = (o = o + Math.imul(O, lt) | 0) + Math.imul(C, at) | 0, h = h + Math.imul(C, lt) | 0, r = r + Math.imul(_, ft) | 0, o = (o = o + Math.imul(_, mt) | 0) + Math.imul(k, ft) | 0, h = h + Math.imul(k, mt) | 0, r = r + Math.imul(M, gt) | 0, o = (o = o + Math.imul(M, vt) | 0) + Math.imul(w, gt) | 0, h = h + Math.imul(w, vt) | 0;
                        var Tt = (c + (r = r + Math.imul(f, wt) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, yt) | 0) + Math.imul(m, wt) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, yt) | 0) + (o >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, r = Math.imul(z, H), o = (o = Math.imul(z, K)) + Math.imul(J, H) | 0, h = Math.imul(J, K), r = r + Math.imul(D, V) | 0, o = (o = o + Math.imul(D, G) | 0) + Math.imul(F, V) | 0, h = h + Math.imul(F, G) | 0, r = r + Math.imul(N, Y) | 0, o = (o = o + Math.imul(N, tt) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, tt) | 0, r = r + Math.imul(j, et) | 0, o = (o = o + Math.imul(j, nt) | 0) + Math.imul(W, et) | 0, h = h + Math.imul(W, nt) | 0, r = r + Math.imul(T, st) | 0, o = (o = o + Math.imul(T, ht) | 0) + Math.imul(E, st) | 0, h = h + Math.imul(E, ht) | 0, r = r + Math.imul(A, at) | 0, o = (o = o + Math.imul(A, lt) | 0) + Math.imul(I, at) | 0, h = h + Math.imul(I, lt) | 0, r = r + Math.imul(O, ft) | 0, o = (o = o + Math.imul(O, mt) | 0) + Math.imul(C, ft) | 0, h = h + Math.imul(C, mt) | 0, r = r + Math.imul(_, gt) | 0, o = (o = o + Math.imul(_, vt) | 0) + Math.imul(k, gt) | 0, h = h + Math.imul(k, vt) | 0, r = r + Math.imul(M, wt) | 0, o = (o = o + Math.imul(M, yt) | 0) + Math.imul(w, wt) | 0, h = h + Math.imul(w, yt) | 0;
                        var Et = (c + (r = r + Math.imul(f, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(f, kt) | 0) + Math.imul(m, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(m, kt) | 0) + (o >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, r = Math.imul(z, V), o = (o = Math.imul(z, G)) + Math.imul(J, V) | 0, h = Math.imul(J, G), r = r + Math.imul(D, Y) | 0, o = (o = o + Math.imul(D, tt) | 0) + Math.imul(F, Y) | 0, h = h + Math.imul(F, tt) | 0, r = r + Math.imul(N, et) | 0, o = (o = o + Math.imul(N, nt) | 0) + Math.imul(P, et) | 0, h = h + Math.imul(P, nt) | 0, r = r + Math.imul(j, st) | 0, o = (o = o + Math.imul(j, ht) | 0) + Math.imul(W, st) | 0, h = h + Math.imul(W, ht) | 0, r = r + Math.imul(T, at) | 0, o = (o = o + Math.imul(T, lt) | 0) + Math.imul(E, at) | 0, h = h + Math.imul(E, lt) | 0, r = r + Math.imul(A, ft) | 0, o = (o = o + Math.imul(A, mt) | 0) + Math.imul(I, ft) | 0, h = h + Math.imul(I, mt) | 0, r = r + Math.imul(O, gt) | 0, o = (o = o + Math.imul(O, vt) | 0) + Math.imul(C, gt) | 0, h = h + Math.imul(C, vt) | 0, r = r + Math.imul(_, wt) | 0, o = (o = o + Math.imul(_, yt) | 0) + Math.imul(k, wt) | 0, h = h + Math.imul(k, yt) | 0;
                        var Lt = (c + (r = r + Math.imul(M, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(M, kt) | 0) + Math.imul(w, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(w, kt) | 0) + (o >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, r = Math.imul(z, Y), o = (o = Math.imul(z, tt)) + Math.imul(J, Y) | 0, h = Math.imul(J, tt), r = r + Math.imul(D, et) | 0, o = (o = o + Math.imul(D, nt) | 0) + Math.imul(F, et) | 0, h = h + Math.imul(F, nt) | 0, r = r + Math.imul(N, st) | 0, o = (o = o + Math.imul(N, ht) | 0) + Math.imul(P, st) | 0, h = h + Math.imul(P, ht) | 0, r = r + Math.imul(j, at) | 0, o = (o = o + Math.imul(j, lt) | 0) + Math.imul(W, at) | 0, h = h + Math.imul(W, lt) | 0, r = r + Math.imul(T, ft) | 0, o = (o = o + Math.imul(T, mt) | 0) + Math.imul(E, ft) | 0, h = h + Math.imul(E, mt) | 0, r = r + Math.imul(A, gt) | 0, o = (o = o + Math.imul(A, vt) | 0) + Math.imul(I, gt) | 0, h = h + Math.imul(I, vt) | 0, r = r + Math.imul(O, wt) | 0, o = (o = o + Math.imul(O, yt) | 0) + Math.imul(C, wt) | 0, h = h + Math.imul(C, yt) | 0;
                        var jt = (c + (r = r + Math.imul(_, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(_, kt) | 0) + Math.imul(k, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(k, kt) | 0) + (o >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, r = Math.imul(z, et), o = (o = Math.imul(z, nt)) + Math.imul(J, et) | 0, h = Math.imul(J, nt), r = r + Math.imul(D, st) | 0, o = (o = o + Math.imul(D, ht) | 0) + Math.imul(F, st) | 0, h = h + Math.imul(F, ht) | 0, r = r + Math.imul(N, at) | 0, o = (o = o + Math.imul(N, lt) | 0) + Math.imul(P, at) | 0, h = h + Math.imul(P, lt) | 0, r = r + Math.imul(j, ft) | 0, o = (o = o + Math.imul(j, mt) | 0) + Math.imul(W, ft) | 0, h = h + Math.imul(W, mt) | 0, r = r + Math.imul(T, gt) | 0, o = (o = o + Math.imul(T, vt) | 0) + Math.imul(E, gt) | 0, h = h + Math.imul(E, vt) | 0, r = r + Math.imul(A, wt) | 0, o = (o = o + Math.imul(A, yt) | 0) + Math.imul(I, wt) | 0, h = h + Math.imul(I, yt) | 0;
                        var Wt = (c + (r = r + Math.imul(O, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(O, kt) | 0) + Math.imul(C, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(C, kt) | 0) + (o >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, r = Math.imul(z, st), o = (o = Math.imul(z, ht)) + Math.imul(J, st) | 0, h = Math.imul(J, ht), r = r + Math.imul(D, at) | 0, o = (o = o + Math.imul(D, lt) | 0) + Math.imul(F, at) | 0, h = h + Math.imul(F, lt) | 0, r = r + Math.imul(N, ft) | 0, o = (o = o + Math.imul(N, mt) | 0) + Math.imul(P, ft) | 0, h = h + Math.imul(P, mt) | 0, r = r + Math.imul(j, gt) | 0, o = (o = o + Math.imul(j, vt) | 0) + Math.imul(W, gt) | 0, h = h + Math.imul(W, vt) | 0, r = r + Math.imul(T, wt) | 0, o = (o = o + Math.imul(T, yt) | 0) + Math.imul(E, wt) | 0, h = h + Math.imul(E, yt) | 0;
                        var Bt = (c + (r = r + Math.imul(A, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(A, kt) | 0) + Math.imul(I, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(I, kt) | 0) + (o >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, r = Math.imul(z, at), o = (o = Math.imul(z, lt)) + Math.imul(J, at) | 0, h = Math.imul(J, lt), r = r + Math.imul(D, ft) | 0, o = (o = o + Math.imul(D, mt) | 0) + Math.imul(F, ft) | 0, h = h + Math.imul(F, mt) | 0, r = r + Math.imul(N, gt) | 0, o = (o = o + Math.imul(N, vt) | 0) + Math.imul(P, gt) | 0, h = h + Math.imul(P, vt) | 0, r = r + Math.imul(j, wt) | 0, o = (o = o + Math.imul(j, yt) | 0) + Math.imul(W, wt) | 0, h = h + Math.imul(W, yt) | 0;
                        var Nt = (c + (r = r + Math.imul(T, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(T, kt) | 0) + Math.imul(E, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(E, kt) | 0) + (o >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, r = Math.imul(z, ft), o = (o = Math.imul(z, mt)) + Math.imul(J, ft) | 0, h = Math.imul(J, mt), r = r + Math.imul(D, gt) | 0, o = (o = o + Math.imul(D, vt) | 0) + Math.imul(F, gt) | 0, h = h + Math.imul(F, vt) | 0, r = r + Math.imul(N, wt) | 0, o = (o = o + Math.imul(N, yt) | 0) + Math.imul(P, wt) | 0, h = h + Math.imul(P, yt) | 0;
                        var Pt = (c + (r = r + Math.imul(j, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(j, kt) | 0) + Math.imul(W, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(W, kt) | 0) + (o >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, r = Math.imul(z, gt), o = (o = Math.imul(z, vt)) + Math.imul(J, gt) | 0, h = Math.imul(J, vt), r = r + Math.imul(D, wt) | 0, o = (o = o + Math.imul(D, yt) | 0) + Math.imul(F, wt) | 0, h = h + Math.imul(F, yt) | 0;
                        var Zt = (c + (r = r + Math.imul(N, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(N, kt) | 0) + Math.imul(P, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(P, kt) | 0) + (o >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, r = Math.imul(z, wt), o = (o = Math.imul(z, yt)) + Math.imul(J, wt) | 0, h = Math.imul(J, yt);
                        var Dt = (c + (r = r + Math.imul(D, _t) | 0) | 0) + ((8191 & (o = (o = o + Math.imul(D, kt) | 0) + Math.imul(F, _t) | 0)) << 13) | 0;
                        c = ((h = h + Math.imul(F, kt) | 0) + (o >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863;
                        var Ft = (c + (r = Math.imul(z, _t)) | 0) + ((8191 & (o = (o = Math.imul(z, kt)) + Math.imul(J, _t) | 0)) << 13) | 0;
                        return c = ((h = Math.imul(J, kt)) + (o >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, l[0] = St, l[1] = Ot, l[2] = Ct, l[3] = xt, l[4] = qt, l[5] = At, l[6] = It, l[7] = Rt, l[8] = Tt, l[9] = Et, l[10] = Lt, l[11] = jt, l[12] = Wt, l[13] = Bt, l[14] = Nt, l[15] = Pt, l[16] = Zt, l[17] = Dt, l[18] = Ft, 0 !== c && (l[19] = c, n.length++), n
                    };

                    function y(t, e, n) {
                        return (new _).mulp(t, e, n)
                    }

                    function _(t, e) {
                        this.x = t, this.y = e
                    }
                    Math.imul || (w = M), h.prototype.mulTo = function(t, e) {
                        var n, r = this.length + t.length;
                        return n = 10 === this.length && 10 === t.length ? w(this, t, e) : r < 63 ? M(this, t, e) : r < 1024 ? function(t, e, n) {
                            n.negative = e.negative ^ t.negative, n.length = t.length + e.length;
                            for (var r = 0, o = 0, h = 0; h < n.length - 1; h++) {
                                var l = o;
                                o = 0;
                                for (var c = 67108863 & r, d = Math.min(h, e.length - 1), f = Math.max(0, h - t.length + 1); f <= d; f++) {
                                    var i = h - f,
                                        m = (0 | t.words[i]) * (0 | e.words[f]),
                                        v = 67108863 & m;
                                    c = 67108863 & (v = v + c | 0), o += (l = (l = l + (m / 67108864 | 0) | 0) + (v >>> 26) | 0) >>> 26, l &= 67108863
                                }
                                n.words[h] = c, r = l, l = o
                            }
                            return 0 !== r ? n.words[h] = r : n.length--, n.strip()
                        }(this, t, e) : y(this, t, e), n
                    }, _.prototype.makeRBT = function(t) {
                        for (var e = new Array(t), n = h.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, n, t);
                        return e
                    }, _.prototype.revBin = function(t, e, n) {
                        if (0 === t || t === n - 1) return t;
                        for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                        return r
                    }, _.prototype.permute = function(t, e, n, r, o, h) {
                        for (var i = 0; i < h; i++) r[i] = e[t[i]], o[i] = n[t[i]]
                    }, _.prototype.transform = function(t, e, n, r, o, h) {
                        this.permute(h, t, e, n, r, o);
                        for (var s = 1; s < o; s <<= 1)
                            for (var l = s << 1, c = Math.cos(2 * Math.PI / l), d = Math.sin(2 * Math.PI / l), p = 0; p < o; p += l)
                                for (var f = c, m = d, v = 0; v < s; v++) {
                                    var M = n[p + v],
                                        w = r[p + v],
                                        y = n[p + v + s],
                                        _ = r[p + v + s],
                                        k = f * y - m * _;
                                    _ = f * _ + m * y, y = k, n[p + v] = M + y, r[p + v] = w + _, n[p + v + s] = M - y, r[p + v + s] = w - _, v !== l && (k = c * f - d * m, m = c * m + d * f, f = k)
                                }
                    }, _.prototype.guessLen13b = function(t, e) {
                        var n = 1 | Math.max(e, t),
                            r = 1 & n,
                            i = 0;
                        for (n = n / 2 | 0; n; n >>>= 1) i++;
                        return 1 << i + 1 + r
                    }, _.prototype.conjugate = function(t, e, n) {
                        if (!(n <= 1))
                            for (var i = 0; i < n / 2; i++) {
                                var r = t[i];
                                t[i] = t[n - i - 1], t[n - i - 1] = r, r = e[i], e[i] = -e[n - i - 1], e[n - i - 1] = -r
                            }
                    }, _.prototype.normalize13b = function(t, e) {
                        for (var n = 0, i = 0; i < e / 2; i++) {
                            var r = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + n;
                            t[i] = 67108863 & r, n = r < 67108864 ? 0 : r / 67108864 | 0
                        }
                        return t
                    }, _.prototype.convert13b = function(t, e, n, o) {
                        for (var h = 0, i = 0; i < e; i++) h += 0 | t[i], n[2 * i] = 8191 & h, h >>>= 13, n[2 * i + 1] = 8191 & h, h >>>= 13;
                        for (i = 2 * e; i < o; ++i) n[i] = 0;
                        r(0 === h), r(0 == (-8192 & h))
                    }, _.prototype.stub = function(t) {
                        for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
                        return e
                    }, _.prototype.mulp = function(t, e, n) {
                        var r = 2 * this.guessLen13b(t.length, e.length),
                            o = this.makeRBT(r),
                            h = this.stub(r),
                            l = new Array(r),
                            c = new Array(r),
                            d = new Array(r),
                            f = new Array(r),
                            m = new Array(r),
                            v = new Array(r),
                            M = n.words;
                        M.length = r, this.convert13b(t.words, t.length, l, r), this.convert13b(e.words, e.length, f, r), this.transform(l, h, c, d, r, o), this.transform(f, h, m, v, r, o);
                        for (var i = 0; i < r; i++) {
                            var w = c[i] * m[i] - d[i] * v[i];
                            d[i] = c[i] * v[i] + d[i] * m[i], c[i] = w
                        }
                        return this.conjugate(c, d, r), this.transform(c, d, M, h, r, o), this.conjugate(M, h, r), this.normalize13b(M, r), n.negative = t.negative ^ e.negative, n.length = t.length + e.length, n.strip()
                    }, h.prototype.mul = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
                    }, h.prototype.mulf = function(t) {
                        var e = new h(null);
                        return e.words = new Array(this.length + t.length), y(this, t, e)
                    }, h.prototype.imul = function(t) {
                        return this.clone().mulTo(t, this)
                    }, h.prototype.imuln = function(t) {
                        r("number" == typeof t), r(t < 67108864);
                        for (var e = 0, i = 0; i < this.length; i++) {
                            var n = (0 | this.words[i]) * t,
                                o = (67108863 & n) + (67108863 & e);
                            e >>= 26, e += n / 67108864 | 0, e += o >>> 26, this.words[i] = 67108863 & o
                        }
                        return 0 !== e && (this.words[i] = e, this.length++), this
                    }, h.prototype.muln = function(t) {
                        return this.clone().imuln(t)
                    }, h.prototype.sqr = function() {
                        return this.mul(this)
                    }, h.prototype.isqr = function() {
                        return this.imul(this.clone())
                    }, h.prototype.pow = function(t) {
                        var e = function(t) {
                            for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
                                var r = n / 26 | 0,
                                    o = n % 26;
                                e[n] = (t.words[r] & 1 << o) >>> o
                            }
                            return e
                        }(t);
                        if (0 === e.length) return new h(1);
                        for (var n = this, i = 0; i < e.length && 0 === e[i]; i++, n = n.sqr());
                        if (++i < e.length)
                            for (var q = n.sqr(); i < e.length; i++, q = q.sqr()) 0 !== e[i] && (n = n.mul(q));
                        return n
                    }, h.prototype.iushln = function(t) {
                        r("number" == typeof t && t >= 0);
                        var i, e = t % 26,
                            s = (t - e) / 26,
                            n = 67108863 >>> 26 - e << 26 - e;
                        if (0 !== e) {
                            var o = 0;
                            for (i = 0; i < this.length; i++) {
                                var h = this.words[i] & n,
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
                        return this.strip()
                    }, h.prototype.ishln = function(t) {
                        return r(0 === this.negative), this.iushln(t)
                    }, h.prototype.iushrn = function(t, e, n) {
                        var o;
                        r("number" == typeof t && t >= 0), o = e ? (e - e % 26) / 26 : 0;
                        var h = t % 26,
                            s = Math.min((t - h) / 26, this.length),
                            mask = 67108863 ^ 67108863 >>> h << h,
                            l = n;
                        if (o -= s, o = Math.max(0, o), l) {
                            for (var i = 0; i < s; i++) l.words[i] = this.words[i];
                            l.length = s
                        }
                        if (0 === s);
                        else if (this.length > s)
                            for (this.length -= s, i = 0; i < this.length; i++) this.words[i] = this.words[i + s];
                        else this.words[0] = 0, this.length = 1;
                        var c = 0;
                        for (i = this.length - 1; i >= 0 && (0 !== c || i >= o); i--) {
                            var d = 0 | this.words[i];
                            this.words[i] = c << 26 - h | d >>> h, c = d & mask
                        }
                        return l && 0 !== c && (l.words[l.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                    }, h.prototype.ishrn = function(t, e, n) {
                        return r(0 === this.negative), this.iushrn(t, e, n)
                    }, h.prototype.shln = function(t) {
                        return this.clone().ishln(t)
                    }, h.prototype.ushln = function(t) {
                        return this.clone().iushln(t)
                    }, h.prototype.shrn = function(t) {
                        return this.clone().ishrn(t)
                    }, h.prototype.ushrn = function(t) {
                        return this.clone().iushrn(t)
                    }, h.prototype.testn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            s = (t - e) / 26,
                            q = 1 << e;
                        return !(this.length <= s) && !!(this.words[s] & q)
                    }, h.prototype.imaskn = function(t) {
                        r("number" == typeof t && t >= 0);
                        var e = t % 26,
                            s = (t - e) / 26;
                        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) return this;
                        if (0 !== e && s++, this.length = Math.min(s, this.length), 0 !== e) {
                            var mask = 67108863 ^ 67108863 >>> e << e;
                            this.words[this.length - 1] &= mask
                        }
                        return this.strip()
                    }, h.prototype.maskn = function(t) {
                        return this.clone().imaskn(t)
                    }, h.prototype.iaddn = function(t) {
                        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
                    }, h.prototype._iaddn = function(t) {
                        this.words[0] += t;
                        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) this.words[i] -= 67108864, i === this.length - 1 ? this.words[i + 1] = 1 : this.words[i + 1]++;
                        return this.length = Math.max(this.length, i + 1), this
                    }, h.prototype.isubn = function(t) {
                        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                        else
                            for (var i = 0; i < this.length && this.words[i] < 0; i++) this.words[i] += 67108864, this.words[i + 1] -= 1;
                        return this.strip()
                    }, h.prototype.addn = function(t) {
                        return this.clone().iaddn(t)
                    }, h.prototype.subn = function(t) {
                        return this.clone().isubn(t)
                    }, h.prototype.iabs = function() {
                        return this.negative = 0, this
                    }, h.prototype.abs = function() {
                        return this.clone().iabs()
                    }, h.prototype._ishlnsubmul = function(t, e, n) {
                        var i, o, h = t.length + n;
                        this._expand(h);
                        var l = 0;
                        for (i = 0; i < t.length; i++) {
                            o = (0 | this.words[i + n]) + l;
                            var c = (0 | t.words[i]) * e;
                            l = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & o
                        }
                        for (; i < this.length - n; i++) l = (o = (0 | this.words[i + n]) + l) >> 26, this.words[i + n] = 67108863 & o;
                        if (0 === l) return this.strip();
                        for (r(-1 === l), l = 0, i = 0; i < this.length; i++) l = (o = -(0 | this.words[i]) + l) >> 26, this.words[i] = 67108863 & o;
                        return this.negative = 1, this.strip()
                    }, h.prototype._wordDiv = function(t, e) {
                        var n = (this.length, t.length),
                            a = this.clone(),
                            b = t,
                            r = 0 | b.words[b.length - 1];
                        0 !== (n = 26 - this._countBits(r)) && (b = b.ushln(n), a.iushln(n), r = 0 | b.words[b.length - 1]);
                        var q, o = a.length - b.length;
                        if ("mod" !== e) {
                            (q = new h(null)).length = o + 1, q.words = new Array(q.length);
                            for (var i = 0; i < q.length; i++) q.words[i] = 0
                        }
                        var l = a.clone()._ishlnsubmul(b, 1, o);
                        0 === l.negative && (a = l, q && (q.words[o] = 1));
                        for (var c = o - 1; c >= 0; c--) {
                            var d = 67108864 * (0 | a.words[b.length + c]) + (0 | a.words[b.length + c - 1]);
                            for (d = Math.min(d / r | 0, 67108863), a._ishlnsubmul(b, d, c); 0 !== a.negative;) d--, a.negative = 0, a._ishlnsubmul(b, 1, c), a.isZero() || (a.negative ^= 1);
                            q && (q.words[c] = d)
                        }
                        return q && q.strip(), a.strip(), "div" !== e && 0 !== n && a.iushrn(n), {
                            div: q || null,
                            mod: a
                        }
                    }, h.prototype.divmod = function(t, e, n) {
                        return r(!t.isZero()), this.isZero() ? {
                            div: new h(0),
                            mod: new h(0)
                        } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, e), "mod" !== e && (div = l.div.neg()), "div" !== e && (o = l.mod.neg(), n && 0 !== o.negative && o.iadd(t)), {
                            div: div,
                            mod: o
                        }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), e), "mod" !== e && (div = l.div.neg()), {
                            div: div,
                            mod: l.mod
                        }) : 0 != (this.negative & t.negative) ? (l = this.neg().divmod(t.neg(), e), "div" !== e && (o = l.mod.neg(), n && 0 !== o.negative && o.isub(t)), {
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
                            mod: new h(this.modn(t.words[0]))
                        } : {
                            div: this.divn(t.words[0]),
                            mod: new h(this.modn(t.words[0]))
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
                        var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                            r = t.ushrn(1),
                            o = t.andln(1),
                            h = n.cmp(r);
                        return h < 0 || 1 === o && 0 === h ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                    }, h.prototype.modn = function(t) {
                        r(t <= 67108863);
                        for (var p = (1 << 26) % t, e = 0, i = this.length - 1; i >= 0; i--) e = (p * e + (0 | this.words[i])) % t;
                        return e
                    }, h.prototype.idivn = function(t) {
                        r(t <= 67108863);
                        for (var e = 0, i = this.length - 1; i >= 0; i--) {
                            var n = (0 | this.words[i]) + 67108864 * e;
                            this.words[i] = n / t | 0, e = n % t
                        }
                        return this.strip()
                    }, h.prototype.divn = function(t) {
                        return this.clone().idivn(t)
                    }, h.prototype.egcd = function(p) {
                        r(0 === p.negative), r(!p.isZero());
                        var t = this,
                            e = p.clone();
                        t = 0 !== t.negative ? t.umod(p) : t.clone();
                        for (var n = new h(1), o = new h(0), l = new h(0), c = new h(1), g = 0; t.isEven() && e.isEven();) t.iushrn(1), e.iushrn(1), ++g;
                        for (var d = e.clone(), f = t.clone(); !t.isZero();) {
                            for (var i = 0, m = 1; 0 == (t.words[0] & m) && i < 26; ++i, m <<= 1);
                            if (i > 0)
                                for (t.iushrn(i); i-- > 0;)(n.isOdd() || o.isOdd()) && (n.iadd(d), o.isub(f)), n.iushrn(1), o.iushrn(1);
                            for (var v = 0, M = 1; 0 == (e.words[0] & M) && v < 26; ++v, M <<= 1);
                            if (v > 0)
                                for (e.iushrn(v); v-- > 0;)(l.isOdd() || c.isOdd()) && (l.iadd(d), c.isub(f)), l.iushrn(1), c.iushrn(1);
                            t.cmp(e) >= 0 ? (t.isub(e), n.isub(l), o.isub(c)) : (e.isub(t), l.isub(n), c.isub(o))
                        }
                        return {
                            a: l,
                            b: c,
                            gcd: e.iushln(g)
                        }
                    }, h.prototype._invmp = function(p) {
                        r(0 === p.negative), r(!p.isZero());
                        var a = this,
                            b = p.clone();
                        a = 0 !== a.negative ? a.umod(p) : a.clone();
                        for (var t, e = new h(1), n = new h(0), o = b.clone(); a.cmpn(1) > 0 && b.cmpn(1) > 0;) {
                            for (var i = 0, l = 1; 0 == (a.words[0] & l) && i < 26; ++i, l <<= 1);
                            if (i > 0)
                                for (a.iushrn(i); i-- > 0;) e.isOdd() && e.iadd(o), e.iushrn(1);
                            for (var c = 0, d = 1; 0 == (b.words[0] & d) && c < 26; ++c, d <<= 1);
                            if (c > 0)
                                for (b.iushrn(c); c-- > 0;) n.isOdd() && n.iadd(o), n.iushrn(1);
                            a.cmp(b) >= 0 ? (a.isub(b), e.isub(n)) : (b.isub(a), n.isub(e))
                        }
                        return (t = 0 === a.cmpn(1) ? e : n).cmpn(0) < 0 && t.iadd(p), t
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
                            var n = a.cmp(b);
                            if (n < 0) {
                                var r = a;
                                a = b, b = r
                            } else if (0 === n || 0 === b.cmpn(1)) break;
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
                        r("number" == typeof t);
                        var e = t % 26,
                            s = (t - e) / 26,
                            q = 1 << e;
                        if (this.length <= s) return this._expand(s + 1), this.words[s] |= q, this;
                        for (var n = q, i = s; 0 !== n && i < this.length; i++) {
                            var o = 0 | this.words[i];
                            n = (o += n) >>> 26, o &= 67108863, this.words[i] = o
                        }
                        return 0 !== n && (this.words[i] = n, this.length++), this
                    }, h.prototype.isZero = function() {
                        return 1 === this.length && 0 === this.words[0]
                    }, h.prototype.cmpn = function(t) {
                        var e, n = t < 0;
                        if (0 !== this.negative && !n) return -1;
                        if (0 === this.negative && n) return 1;
                        if (this.strip(), this.length > 1) e = 1;
                        else {
                            n && (t = -t), r(t <= 67108863, "Number is too big");
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
                        return new I(t)
                    }, h.prototype.toRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                    }, h.prototype.fromRed = function() {
                        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                    }, h.prototype._forceRed = function(t) {
                        return this.red = t, this
                    }, h.prototype.forceRed = function(t) {
                        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                    }, h.prototype.redAdd = function(t) {
                        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                    }, h.prototype.redIAdd = function(t) {
                        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                    }, h.prototype.redSub = function(t) {
                        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                    }, h.prototype.redISub = function(t) {
                        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                    }, h.prototype.redShl = function(t) {
                        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                    }, h.prototype.redMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                    }, h.prototype.redIMul = function(t) {
                        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                    }, h.prototype.redSqr = function() {
                        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                    }, h.prototype.redISqr = function() {
                        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                    }, h.prototype.redSqrt = function() {
                        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                    }, h.prototype.redInvm = function() {
                        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                    }, h.prototype.redNeg = function() {
                        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                    }, h.prototype.redPow = function(t) {
                        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                    };
                    var k = {
                        k256: null,
                        p224: null,
                        p192: null,
                        p25519: null
                    };

                    function S(t, p) {
                        this.name = t, this.p = new h(p, 16), this.n = this.p.bitLength(), this.k = new h(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                    }

                    function O() {
                        S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                    }

                    function C() {
                        S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                    }

                    function x() {
                        S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                    }

                    function A() {
                        S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                    }

                    function I(t) {
                        if ("string" == typeof t) {
                            var e = h._prime(t);
                            this.m = e.p, this.prime = e
                        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                    }

                    function R(t) {
                        I.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new h(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                    }
                    S.prototype._tmp = function() {
                        var t = new h(null);
                        return t.words = new Array(Math.ceil(this.n / 13)), t
                    }, S.prototype.ireduce = function(t) {
                        var e, n = t;
                        do {
                            this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                        } while (e > this.n);
                        var r = e < this.n ? -1 : n.ucmp(this.p);
                        return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
                    }, S.prototype.split = function(input, t) {
                        input.iushrn(this.n, 0, t)
                    }, S.prototype.imulK = function(t) {
                        return t.imul(this.k)
                    }, o(O, S), O.prototype.split = function(input, output) {
                        for (var mask = 4194303, t = Math.min(input.length, 9), i = 0; i < t; i++) output.words[i] = input.words[i];
                        if (output.length = t, input.length <= 9) return input.words[0] = 0, void(input.length = 1);
                        var e = input.words[9];
                        for (output.words[output.length++] = e & mask, i = 10; i < input.length; i++) {
                            var n = 0 | input.words[i];
                            input.words[i - 10] = (n & mask) << 4 | e >>> 22, e = n
                        }
                        e >>>= 22, input.words[i - 10] = e, 0 === e && input.length > 10 ? input.length -= 10 : input.length -= 9
                    }, O.prototype.imulK = function(t) {
                        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var n = 0 | t.words[i];
                            e += 977 * n, t.words[i] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                        }
                        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                    }, o(C, S), o(x, S), o(A, S), A.prototype.imulK = function(t) {
                        for (var e = 0, i = 0; i < t.length; i++) {
                            var n = 19 * (0 | t.words[i]) + e,
                                r = 67108863 & n;
                            n >>>= 26, t.words[i] = r, e = n
                        }
                        return 0 !== e && (t.words[t.length++] = e), t
                    }, h._prime = function(t) {
                        if (k[t]) return k[t];
                        var e;
                        if ("k256" === t) e = new O;
                        else if ("p224" === t) e = new C;
                        else if ("p192" === t) e = new x;
                        else {
                            if ("p25519" !== t) throw new Error("Unknown prime " + t);
                            e = new A
                        }
                        return k[t] = e, e
                    }, I.prototype._verify1 = function(a) {
                        r(0 === a.negative, "red works only with positives"), r(a.red, "red works only with red numbers")
                    }, I.prototype._verify2 = function(a, b) {
                        r(0 == (a.negative | b.negative), "red works only with positives"), r(a.red && a.red === b.red, "red works only with red numbers")
                    }, I.prototype.imod = function(a) {
                        return this.prime ? this.prime.ireduce(a)._forceRed(this) : a.umod(this.m)._forceRed(this)
                    }, I.prototype.neg = function(a) {
                        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this)
                    }, I.prototype.add = function(a, b) {
                        this._verify2(a, b);
                        var t = a.add(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
                    }, I.prototype.iadd = function(a, b) {
                        this._verify2(a, b);
                        var t = a.iadd(b);
                        return t.cmp(this.m) >= 0 && t.isub(this.m), t
                    }, I.prototype.sub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.sub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
                    }, I.prototype.isub = function(a, b) {
                        this._verify2(a, b);
                        var t = a.isub(b);
                        return t.cmpn(0) < 0 && t.iadd(this.m), t
                    }, I.prototype.shl = function(a, t) {
                        return this._verify1(a), this.imod(a.ushln(t))
                    }, I.prototype.imul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.imul(b))
                    }, I.prototype.mul = function(a, b) {
                        return this._verify2(a, b), this.imod(a.mul(b))
                    }, I.prototype.isqr = function(a) {
                        return this.imul(a, a.clone())
                    }, I.prototype.sqr = function(a) {
                        return this.mul(a, a)
                    }, I.prototype.sqrt = function(a) {
                        if (a.isZero()) return a.clone();
                        var t = this.m.andln(3);
                        if (r(t % 2 == 1), 3 === t) {
                            var e = this.m.add(new h(1)).iushrn(2);
                            return this.pow(a, e)
                        }
                        for (var q = this.m.subn(1), s = 0; !q.isZero() && 0 === q.andln(1);) s++, q.iushrn(1);
                        r(!q.isZero());
                        var n = new h(1).toRed(this),
                            o = n.redNeg(),
                            l = this.m.subn(1).iushrn(1),
                            c = this.m.bitLength();
                        for (c = new h(2 * c * c).toRed(this); 0 !== this.pow(c, l).cmp(o);) c.redIAdd(o);
                        for (var d = this.pow(c, q), f = this.pow(a, q.addn(1).iushrn(1)), m = this.pow(a, q), v = s; 0 !== m.cmp(n);) {
                            for (var M = m, i = 0; 0 !== M.cmp(n); i++) M = M.redSqr();
                            r(i < v);
                            var b = this.pow(d, new h(1).iushln(v - i - 1));
                            f = f.redMul(b), d = b.redSqr(), m = m.redMul(d), v = i
                        }
                        return f
                    }, I.prototype.invm = function(a) {
                        var t = a._invmp(this.m);
                        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                    }, I.prototype.pow = function(a, t) {
                        if (t.isZero()) return new h(1).toRed(this);
                        if (0 === t.cmpn(1)) return a.clone();
                        var e = new Array(16);
                        e[0] = new h(1).toRed(this), e[1] = a;
                        for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], a);
                        var n = e[0],
                            r = 0,
                            o = 0,
                            l = t.bitLength() % 26;
                        for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                            for (var c = t.words[i], d = l - 1; d >= 0; d--) {
                                var f = c >> d & 1;
                                n !== e[0] && (n = this.sqr(n)), 0 !== f || 0 !== r ? (r <<= 1, r |= f, (4 === ++o || 0 === i && 0 === d) && (n = this.mul(n, e[r]), o = 0, r = 0)) : o = 0
                            }
                            l = 26
                        }
                        return n
                    }, I.prototype.convertTo = function(t) {
                        var e = t.umod(this.m);
                        return e === t ? e.clone() : e
                    }, I.prototype.convertFrom = function(t) {
                        var e = t.clone();
                        return e.red = null, e
                    }, h.mont = function(t) {
                        return new R(t)
                    }, o(R, I), R.prototype.convertTo = function(t) {
                        return this.imod(t.ushln(this.shift))
                    }, R.prototype.convertFrom = function(t) {
                        var e = this.imod(t.mul(this.rinv));
                        return e.red = null, e
                    }, R.prototype.imul = function(a, b) {
                        if (a.isZero() || b.isZero()) return a.words[0] = 0, a.length = 1, a;
                        var t = a.imul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, R.prototype.mul = function(a, b) {
                        if (a.isZero() || b.isZero()) return new h(0)._forceRed(this);
                        var t = a.mul(b),
                            e = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                            u = t.isub(e).iushrn(this.shift),
                            n = u;
                        return u.cmp(this.m) >= 0 ? n = u.isub(this.m) : u.cmpn(0) < 0 && (n = u.iadd(this.m)), n._forceRed(this)
                    }, R.prototype.invm = function(a) {
                        return this.imod(a._invmp(this.m).mul(this.r2))._forceRed(this)
                    }
                }(t, this)
            }).call(this, n(82)(t))
        },
        575: function(t, e, n) {
            "use strict";

            function r(t) {
                if ("string" != typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return t
                }
            }

            function o(t) {
                return "string" == typeof t ? t : JSON.stringify(t)
            }
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "b", (function() {
                return o
            }))
        },
        665: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getWindowMetadata = void 0;
            const r = n(148);
            e.getWindowMetadata = function() {
                let t, e;
                try {
                    t = r.getDocumentOrThrow(), e = r.getLocationOrThrow()
                } catch (t) {
                    return null
                }

                function n(...e) {
                    const n = t.getElementsByTagName("meta");
                    for (let i = 0; i < n.length; i++) {
                        const t = n[i],
                            r = ["itemprop", "property", "name"].map((e => t.getAttribute(e))).filter((t => !!t && e.includes(t)));
                        if (r.length && r) {
                            const content = t.getAttribute("content");
                            if (content) return content
                        }
                    }
                    return ""
                }
                const o = function() {
                    let e = n("name", "og:site_name", "og:title", "twitter:title");
                    return e || (e = t.title), e
                }();
                return {
                    description: n("description", "og:description", "twitter:description", "keywords"),
                    url: e.origin,
                    icons: function() {
                        const n = t.getElementsByTagName("link"),
                            r = [];
                        for (let i = 0; i < n.length; i++) {
                            const link = n[i],
                                t = link.getAttribute("rel");
                            if (t && t.toLowerCase().indexOf("icon") > -1) {
                                const t = link.getAttribute("href");
                                if (t)
                                    if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                                        let n = e.protocol + "//" + e.host;
                                        if (0 === t.indexOf("/")) n += t;
                                        else {
                                            const path = e.pathname.split("/");
                                            path.pop();
                                            n += path.join("/") + "/" + t
                                        }
                                        r.push(n)
                                    } else if (0 === t.indexOf("//")) {
                                    const n = e.protocol + t;
                                    r.push(n)
                                } else r.push(t)
                            }
                        }
                        return r
                    }(),
                    name: o
                }
            }
        }
    }
]);