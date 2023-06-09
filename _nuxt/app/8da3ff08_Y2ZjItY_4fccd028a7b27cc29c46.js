(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        1147: function(e, t, n) {
            "use strict";
            var r = n(24),
                o = n(1133);
            const c = "Session currently connected",
                h = "Session currently disconnected",
                d = "JSON RPC response format is invalid",
                l = "User close QRCode Modal";
            var _ = class {
                constructor() {
                    this._eventEmitters = []
                }
                subscribe(e) {
                    this._eventEmitters.push(e)
                }
                unsubscribe(e) {
                    this._eventEmitters = this._eventEmitters.filter((t => t.event !== e))
                }
                trigger(e) {
                    let t, n = [];
                    t = Object(r.q)(e) ? e.method : Object(r.s)(e) || Object(r.r)(e) ? `response:${e.id}` : Object(r.p)(e) ? e.event : "", t && (n = this._eventEmitters.filter((e => e.event === t))), n && n.length || Object(r.u)(t) || Object(r.p)(t) || (n = this._eventEmitters.filter((e => "call_request" === e.event))), n.forEach((t => {
                        if (Object(r.r)(e)) {
                            const n = new Error(e.error.message);
                            t.callback(n, null)
                        } else t.callback(null, e)
                    }))
                }
            };
            var m = class {
                constructor(e = "walletconnect") {
                    this.storageId = e
                }
                getSession() {
                    let e = null;
                    const t = Object(r.k)(this.storageId);
                    return t && Object(r.w)(t) && (e = t), e
                }
                setSession(e) {
                    return Object(r.D)(this.storageId, e), e
                }
                removeSession() {
                    Object(r.C)(this.storageId)
                }
            };
            const f = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((e => `https://${e}.bridge.walletconnect.org`));

            function w() {
                return f[Math.floor(Math.random() * f.length)]
            }
            t.a = class {
                constructor(e) {
                    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new _, this._clientMeta = Object(r.i)() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new m(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...r.E, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw new Error("Missing one of the required parameters: bridge / uri / session");
                    var t;
                    e.connectorOpts.bridge && (this.bridge = function(e) {
                        return "walletconnect.org" === function(e) {
                            return function(e) {
                                let t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0];
                                return t = t.split(":")[0], t = t.split("?")[0], t
                            }(e).split(".").slice(-2).join(".")
                        }(e)
                    }(t = e.connectorOpts.bridge) ? w() : t), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
                    const n = e.connectorOpts.session || this._getStorageSession();
                    n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new o.a({
                        protocol: this.protocol,
                        version: this.version,
                        url: this.bridge,
                        subscriptions: [this.clientId]
                    }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts)
                }
                set bridge(e) {
                    e && (this._bridge = e)
                }
                get bridge() {
                    return this._bridge
                }
                set key(e) {
                    if (!e) return;
                    const t = Object(r.e)(e);
                    this._key = t
                }
                get key() {
                    if (this._key) {
                        return Object(r.c)(this._key, !0)
                    }
                    return ""
                }
                set clientId(e) {
                    e && (this._clientId = e)
                }
                get clientId() {
                    let e = this._clientId;
                    return e || (e = this._clientId = Object(r.F)()), this._clientId
                }
                set peerId(e) {
                    e && (this._peerId = e)
                }
                get peerId() {
                    return this._peerId
                }
                set clientMeta(e) {}
                get clientMeta() {
                    let e = this._clientMeta;
                    return e || (e = this._clientMeta = Object(r.i)()), e
                }
                set peerMeta(e) {
                    this._peerMeta = e
                }
                get peerMeta() {
                    return this._peerMeta
                }
                set handshakeTopic(e) {
                    e && (this._handshakeTopic = e)
                }
                get handshakeTopic() {
                    return this._handshakeTopic
                }
                set handshakeId(e) {
                    e && (this._handshakeId = e)
                }
                get handshakeId() {
                    return this._handshakeId
                }
                get uri() {
                    return this._formatUri()
                }
                set uri(e) {
                    if (!e) return;
                    const {
                        handshakeTopic: t,
                        bridge: n,
                        key: r
                    } = this._parseUri(e);
                    this.handshakeTopic = t, this.bridge = n, this.key = r
                }
                set chainId(e) {
                    this._chainId = e
                }
                get chainId() {
                    return this._chainId
                }
                set networkId(e) {
                    this._networkId = e
                }
                get networkId() {
                    return this._networkId
                }
                set accounts(e) {
                    this._accounts = e
                }
                get accounts() {
                    return this._accounts
                }
                set rpcUrl(e) {
                    this._rpcUrl = e
                }
                get rpcUrl() {
                    return this._rpcUrl
                }
                set connected(e) {}
                get connected() {
                    return this._connected
                }
                set pending(e) {}
                get pending() {
                    return !!this._handshakeTopic
                }
                get session() {
                    return {
                        connected: this.connected,
                        accounts: this.accounts,
                        chainId: this.chainId,
                        bridge: this.bridge,
                        key: this.key,
                        clientId: this.clientId,
                        clientMeta: this.clientMeta,
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        handshakeId: this.handshakeId,
                        handshakeTopic: this.handshakeTopic
                    }
                }
                set session(e) {
                    e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
                }
                on(e, t) {
                    const n = {
                        event: e,
                        callback: t
                    };
                    this._eventManager.subscribe(n)
                }
                off(e) {
                    this._eventManager.unsubscribe(e)
                }
                async createInstantRequest(e) {
                    this._key = await this._generateKey();
                    const t = this._formatRequest({
                        method: "wc_instantRequest",
                        params: [{
                            peerId: this.clientId,
                            peerMeta: this.clientMeta,
                            request: this._formatRequest(e)
                        }]
                    });
                    this.handshakeId = t.id, this.handshakeTopic = Object(r.F)(), this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                    }), this.on("modal_closed", (() => {
                        throw new Error(l)
                    }));
                    const n = () => {
                        this.killSession()
                    };
                    try {
                        const e = await this._sendCallRequest(t);
                        return e && n(), e
                    } catch (e) {
                        throw n(), e
                    }
                }
                async connect(e) {
                    if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
                    return this.connected ? {
                        chainId: this.chainId,
                        accounts: this.accounts
                    } : (await this.createSession(e), new Promise((async (e, t) => {
                        this.on("modal_closed", (() => t(new Error(l)))), this.on("connect", ((n, r) => {
                            if (n) return t(n);
                            e(r.params[0])
                        }))
                    })))
                }
                async createSession(e) {
                    if (this._connected) throw new Error(c);
                    if (this.pending) return;
                    this._key = await this._generateKey();
                    const t = this._formatRequest({
                        method: "wc_sessionRequest",
                        params: [{
                            peerId: this.clientId,
                            peerMeta: this.clientMeta,
                            chainId: e && e.chainId ? e.chainId : null
                        }]
                    });
                    this.handshakeId = t.id, this.handshakeTopic = Object(r.F)(), this._sendSessionRequest(t, "Session update rejected", {
                        topic: this.handshakeTopic
                    }), this._eventManager.trigger({
                        event: "display_uri",
                        params: [this.uri]
                    })
                }
                approveSession(e) {
                    if (this._connected) throw new Error(c);
                    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                    const t = {
                            approved: !0,
                            chainId: this.chainId,
                            networkId: this.networkId,
                            accounts: this.accounts,
                            rpcUrl: this.rpcUrl,
                            peerId: this.clientId,
                            peerMeta: this.clientMeta
                        },
                        n = {
                            id: this.handshakeId,
                            jsonrpc: "2.0",
                            result: t
                        };
                    this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                        event: "connect",
                        params: [{
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })
                }
                rejectSession(e) {
                    if (this._connected) throw new Error(c);
                    const t = e && e.message ? e.message : "Session Rejected",
                        n = this._formatResponse({
                            id: this.handshakeId,
                            error: {
                                message: t
                            }
                        });
                    this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                        event: "disconnect",
                        params: [{
                            message: t
                        }]
                    }), this._removeStorageSession()
                }
                updateSession(e) {
                    if (!this._connected) throw new Error(h);
                    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                    const t = {
                            approved: !0,
                            chainId: this.chainId,
                            networkId: this.networkId,
                            accounts: this.accounts,
                            rpcUrl: this.rpcUrl
                        },
                        n = this._formatRequest({
                            method: "wc_sessionUpdate",
                            params: [t]
                        });
                    this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                        event: "session_update",
                        params: [{
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    }), this._manageStorageSession()
                }
                async killSession(e) {
                    const t = e ? e.message : "Session Disconnected",
                        n = this._formatRequest({
                            method: "wc_sessionUpdate",
                            params: [{
                                approved: !1,
                                chainId: null,
                                networkId: null,
                                accounts: null
                            }]
                        });
                    await this._sendRequest(n), this._handleSessionDisconnect(t)
                }
                async sendTransaction(e) {
                    if (!this._connected) throw new Error(h);
                    const t = Object(r.z)(e),
                        n = this._formatRequest({
                            method: "eth_sendTransaction",
                            params: [t]
                        });
                    return await this._sendCallRequest(n)
                }
                async signTransaction(e) {
                    if (!this._connected) throw new Error(h);
                    const t = Object(r.z)(e),
                        n = this._formatRequest({
                            method: "eth_signTransaction",
                            params: [t]
                        });
                    return await this._sendCallRequest(n)
                }
                async signMessage(e) {
                    if (!this._connected) throw new Error(h);
                    const t = this._formatRequest({
                        method: "eth_sign",
                        params: e
                    });
                    return await this._sendCallRequest(t)
                }
                async signPersonalMessage(e) {
                    if (!this._connected) throw new Error(h);
                    e = Object(r.y)(e);
                    const t = this._formatRequest({
                        method: "personal_sign",
                        params: e
                    });
                    return await this._sendCallRequest(t)
                }
                async signTypedData(e) {
                    if (!this._connected) throw new Error(h);
                    const t = this._formatRequest({
                        method: "eth_signTypedData",
                        params: e
                    });
                    return await this._sendCallRequest(t)
                }
                async updateChain(e) {
                    if (!this._connected) throw new Error("Session currently disconnected");
                    const t = this._formatRequest({
                        method: "wallet_updateChain",
                        params: [e]
                    });
                    return await this._sendCallRequest(t)
                }
                unsafeSend(e, t) {
                    return this._sendRequest(e, t), this._eventManager.trigger({
                        event: "call_request_sent",
                        params: [{
                            request: e,
                            options: t
                        }]
                    }), new Promise(((t, n) => {
                        this._subscribeToResponse(e.id, ((e, r) => {
                            if (e) n(e);
                            else {
                                if (!r) throw new Error("Missing JSON RPC response");
                                t(r)
                            }
                        }))
                    }))
                }
                async sendCustomRequest(e, t) {
                    if (!this._connected) throw new Error(h);
                    switch (e.method) {
                        case "eth_accounts":
                            return this.accounts;
                        case "eth_chainId":
                            return Object(r.f)(this.chainId);
                        case "eth_sendTransaction":
                        case "eth_signTransaction":
                            e.params && (e.params[0] = Object(r.z)(e.params[0]));
                            break;
                        case "personal_sign":
                            e.params && (e.params = Object(r.y)(e.params))
                    }
                    const n = this._formatRequest(e);
                    return await this._sendCallRequest(n, t)
                }
                approveRequest(e) {
                    if (!Object(r.s)(e)) throw new Error('JSON-RPC success response must include "result" field'); {
                        const t = this._formatResponse(e);
                        this._sendResponse(t)
                    }
                }
                rejectRequest(e) {
                    if (!Object(r.r)(e)) throw new Error('JSON-RPC error response must include "error" field'); {
                        const t = this._formatResponse(e);
                        this._sendResponse(t)
                    }
                }
                transportClose() {
                    this._transport.close()
                }
                async _sendRequest(e, t) {
                    const n = this._formatRequest(e),
                        o = await this._encrypt(n),
                        c = void 0 !== (null == t ? void 0 : t.topic) ? t.topic : this.peerId,
                        h = JSON.stringify(o),
                        d = void 0 !== (null == t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : Object(r.v)(n);
                    this._transport.send(h, c, d)
                }
                async _sendResponse(e) {
                    const t = await this._encrypt(e),
                        n = this.peerId,
                        r = JSON.stringify(t);
                    this._transport.send(r, n, !0)
                }
                async _sendSessionRequest(e, t, n) {
                    this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, t)
                }
                _sendCallRequest(e, t) {
                    return this._sendRequest(e, t), this._eventManager.trigger({
                        event: "call_request_sent",
                        params: [{
                            request: e,
                            options: t
                        }]
                    }), this._subscribeToCallResponse(e.id)
                }
                _formatRequest(e) {
                    if (void 0 === e.method) throw new Error('JSON RPC request must have valid "method" value');
                    return {
                        id: void 0 === e.id ? Object(r.B)() : e.id,
                        jsonrpc: "2.0",
                        method: e.method,
                        params: void 0 === e.params ? [] : e.params
                    }
                }
                _formatResponse(e) {
                    if (void 0 === e.id) throw new Error('JSON RPC request must have valid "id" value');
                    const t = {
                        id: e.id,
                        jsonrpc: "2.0"
                    };
                    if (Object(r.r)(e)) {
                        const n = Object(r.h)(e.error);
                        return Object.assign(Object.assign(Object.assign({}, t), e), {
                            error: n
                        })
                    }
                    if (Object(r.s)(e)) {
                        return Object.assign(Object.assign({}, t), e)
                    }
                    throw new Error(d)
                }
                _handleSessionDisconnect(e) {
                    const t = e || "Session Disconnected";
                    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Object(r.C)(r.x)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                        event: "disconnect",
                        params: [{
                            message: t
                        }]
                    }), this._removeStorageSession(), this.transportClose()
                }
                _handleSessionResponse(e, t) {
                    t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
                        event: "session_update",
                        params: [{
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
                        event: "connect",
                        params: [{
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            chainId: this.chainId,
                            accounts: this.accounts
                        }]
                    })), this._manageStorageSession()) : this._handleSessionDisconnect(e)
                }
                async _handleIncomingMessages(e) {
                    if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
                    let t;
                    try {
                        t = JSON.parse(e.payload)
                    } catch (e) {
                        return
                    }
                    const n = await this._decrypt(t);
                    n && this._eventManager.trigger(n)
                }
                _subscribeToSessionRequest() {
                    this._transport.subscribe(this.handshakeTopic)
                }
                _subscribeToResponse(e, t) {
                    this.on(`response:${e}`, t)
                }
                _subscribeToSessionResponse(e, t) {
                    this._subscribeToResponse(e, ((e, n) => {
                        e ? this._handleSessionResponse(e.message) : Object(r.s)(n) ? this._handleSessionResponse(t, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(t)
                    }))
                }
                _subscribeToCallResponse(e) {
                    return new Promise(((t, n) => {
                        this._subscribeToResponse(e, ((e, o) => {
                            e ? n(e) : Object(r.s)(o) ? t(o.result) : o.error && o.error.message ? n(o.error) : n(new Error(d))
                        }))
                    }))
                }
                _subscribeToInternalEvents() {
                    this.on("display_uri", (() => {
                        this._qrcodeModal && this._qrcodeModal.open(this.uri, (() => {
                            this._eventManager.trigger({
                                event: "modal_closed",
                                params: []
                            })
                        }), this._qrcodeModalOptions)
                    })), this.on("connect", (() => {
                        this._qrcodeModal && this._qrcodeModal.close()
                    })), this.on("call_request_sent", ((e, t) => {
                        const {
                            request: n
                        } = t.params[0];
                        if (Object(r.t)() && this._signingMethods.includes(n.method)) {
                            const e = Object(r.k)(r.x);
                            e && (window.location.href = e.href)
                        }
                    })), this.on("wc_sessionRequest", ((e, t) => {
                        e && this._eventManager.trigger({
                            event: "error",
                            params: [{
                                code: "SESSION_REQUEST_ERROR",
                                message: e.toString()
                            }]
                        }), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
                        const n = Object.assign(Object.assign({}, t), {
                            method: "session_request"
                        });
                        this._eventManager.trigger(n)
                    })), this.on("wc_sessionUpdate", ((e, t) => {
                        e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0])
                    }))
                }
                _initTransport() {
                    this._transport.on("message", (e => this._handleIncomingMessages(e))), this._transport.on("open", (() => this._eventManager.trigger({
                        event: "transport_open",
                        params: []
                    }))), this._transport.on("close", (() => this._eventManager.trigger({
                        event: "transport_close",
                        params: []
                    }))), this._transport.on("error", (() => this._eventManager.trigger({
                        event: "transport_error",
                        params: ["Websocket connection failed"]
                    }))), this._transport.open()
                }
                _formatUri() {
                    return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
                }
                _parseUri(e) {
                    const t = Object(r.A)(e);
                    if (t.protocol === this.protocol) {
                        if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                        const e = t.handshakeTopic;
                        if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
                        const n = decodeURIComponent(t.bridge);
                        if (!t.key) throw Error("Invalid or missing key parameter value");
                        return {
                            handshakeTopic: e,
                            bridge: n,
                            key: t.key
                        }
                    }
                    throw new Error("URI format is invalid")
                }
                async _generateKey() {
                    if (this._cryptoLib) {
                        return await this._cryptoLib.generateKey()
                    }
                    return null
                }
                async _encrypt(data) {
                    const e = this._key;
                    if (this._cryptoLib && e) {
                        return await this._cryptoLib.encrypt(data, e)
                    }
                    return null
                }
                async _decrypt(e) {
                    const t = this._key;
                    if (this._cryptoLib && t) {
                        return await this._cryptoLib.decrypt(e, t)
                    }
                    return null
                }
                _getStorageSession() {
                    let e = null;
                    return this._sessionStorage && (e = this._sessionStorage.getSession()), e
                }
                _setStorageSession() {
                    this._sessionStorage && this._sessionStorage.setSession(this.session)
                }
                _removeStorageSession() {
                    this._sessionStorage && this._sessionStorage.removeSession()
                }
                _manageStorageSession() {
                    this._connected ? this._setStorageSession() : this._removeStorageSession()
                }
                _registerPushServer(e) {
                    if (!e.url || "string" != typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                    if (!e.type || "string" != typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                    if (!e.token || "string" != typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                    const t = {
                        bridge: this.bridge,
                        topic: this.clientId,
                        type: e.type,
                        token: e.token,
                        peerName: "",
                        language: e.language || ""
                    };
                    this.on("connect", (async (n, r) => {
                        if (n) throw n;
                        if (e.peerMeta) {
                            const e = r.params[0].peerMeta.name;
                            t.peerName = e
                        }
                        try {
                            const n = await fetch(`${e.url}/new`, {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(t)
                            });
                            if (!(await n.json()).success) throw Error("Failed to register in Push Server")
                        } catch (n) {
                            throw Error("Failed to register in Push Server")
                        }
                    }))
                }
            }
        },
        595: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "detectEnv", (function() {
                return h
            })), n.d(t, "detectOS", (function() {
                return d
            })), n.d(t, "isAndroid", (function() {
                return l
            })), n.d(t, "isIOS", (function() {
                return _
            })), n.d(t, "isMobile", (function() {
                return m
            })), n.d(t, "isNode", (function() {
                return f
            })), n.d(t, "isBrowser", (function() {
                return w
            })), n.d(t, "getFromWindow", (function() {
                return I
            })), n.d(t, "getFromWindowOrThrow", (function() {
                return v
            })), n.d(t, "getDocumentOrThrow", (function() {
                return S
            })), n.d(t, "getDocument", (function() {
                return k
            })), n.d(t, "getNavigatorOrThrow", (function() {
                return y
            })), n.d(t, "getNavigator", (function() {
                return O
            })), n.d(t, "getLocationOrThrow", (function() {
                return M
            })), n.d(t, "getLocation", (function() {
                return R
            })), n.d(t, "getCryptoOrThrow", (function() {
                return T
            })), n.d(t, "getCrypto", (function() {
                return j
            })), n.d(t, "getLocalStorageOrThrow", (function() {
                return E
            })), n.d(t, "getLocalStorage", (function() {
                return C
            })), n.d(t, "getClientMeta", (function() {
                return L
            })), n.d(t, "safeJsonParse", (function() {
                return N
            })), n.d(t, "safeJsonStringify", (function() {
                return P
            })), n.d(t, "setLocal", (function() {
                return D
            })), n.d(t, "getLocal", (function() {
                return J
            })), n.d(t, "removeLocal", (function() {
                return $
            })), n.d(t, "mobileLinkChoiceKey", (function() {
                return F
            })), n.d(t, "formatIOSMobile", (function() {
                return W
            })), n.d(t, "saveMobileLinkInfo", (function() {
                return K
            })), n.d(t, "getMobileRegistryEntry", (function() {
                return x
            })), n.d(t, "getMobileLinkRegistry", (function() {
                return z
            })), n.d(t, "getWalletRegistryUrl", (function() {
                return B
            })), n.d(t, "getDappRegistryUrl", (function() {
                return Q
            })), n.d(t, "formatMobileRegistryEntry", (function() {
                return H
            })), n.d(t, "formatMobileRegistry", (function() {
                return G
            }));
            var r = n(665),
                o = n(148),
                c = n(666);

            function h(e) {
                return Object(c.a)(e)
            }

            function d() {
                const e = h();
                return e && e.os ? e.os : void 0
            }

            function l() {
                const e = d();
                return !!e && e.toLowerCase().includes("android")
            }

            function _() {
                const e = d();
                return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function m() {
                return !!d() && (l() || _())
            }

            function f() {
                const e = h();
                return !(!e || !e.name) && "node" === e.name.toLowerCase()
            }

            function w() {
                return !f() && !!O()
            }
            const I = o.getFromWindow,
                v = o.getFromWindowOrThrow,
                S = o.getDocumentOrThrow,
                k = o.getDocument,
                y = o.getNavigatorOrThrow,
                O = o.getNavigator,
                M = o.getLocationOrThrow,
                R = o.getLocation,
                T = o.getCryptoOrThrow,
                j = o.getCrypto,
                E = o.getLocalStorageOrThrow,
                C = o.getLocalStorage;

            function L() {
                return r.getWindowMetadata()
            }
            var U = n(575);
            const N = U.a,
                P = U.b;

            function D(e, data) {
                const t = P(data),
                    n = C();
                n && n.setItem(e, t)
            }

            function J(e) {
                let data = null,
                    t = null;
                const n = C();
                return n && (t = n.getItem(e)), data = t ? N(t) : t, data
            }

            function $(e) {
                const t = C();
                t && t.removeItem(e)
            }
            const F = "WALLETCONNECT_DEEPLINK_CHOICE";

            function W(e, t) {
                const n = encodeURIComponent(e);
                return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function K(data) {
                const e = data.href.split("?")[0];
                D(F, Object.assign(Object.assign({}, data), {
                    href: e
                }))
            }

            function x(e, t) {
                return e.filter((e => e.name.toLowerCase().includes(t.toLowerCase())))[0]
            }

            function z(e, t) {
                let n = e;
                return t && (n = t.map((t => x(e, t))).filter(Boolean)), n
            }
            const A = "https://registry.walletconnect.com";

            function B() {
                return A + "/api/v2/wallets"
            }

            function Q() {
                return A + "/api/v2/dapps"
            }

            function H(e, t = "mobile") {
                var n;
                return {
                    name: e.name || "",
                    shortName: e.metadata.shortName || "",
                    color: e.metadata.colors.primary || "",
                    logo: null !== (n = e.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: e[t].universal || "",
                    deepLink: e[t].native || ""
                }
            }

            function G(e, t = "mobile") {
                return Object.values(e).filter((e => !!e[t].universal || !!e[t].native)).map((e => H(e, t)))
            }
        }
    }
]);