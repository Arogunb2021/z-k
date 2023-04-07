/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [117], {
        1085: function(e, t, r) {
            "use strict";
            var n = r(14),
                o = r(1086),
                c = r.n(o);
            const h = ["low", "medium", "quartile", "high", "L", "M", "Q", "H"],
                l = [0, 1, 2, 3, 4, 5, 6, 7],
                d = ["alphanumeric", "numeric", "kanji", "byte"],
                f = ["image/png", "image/jpeg", "image/webp"];
            t.a = {
                props: {
                    version: {
                        type: Number,
                        validator: e => e === Number.parseInt(String(e), 10) && e >= 1 && e <= 40
                    },
                    errorCorrectionLevel: {
                        type: String,
                        validator: e => h.includes(e)
                    },
                    maskPattern: {
                        type: Number,
                        validator: e => l.includes(e)
                    },
                    toSJISFunc: Function,
                    margin: Number,
                    scale: Number,
                    width: Number,
                    color: {
                        type: Object,
                        validator: e => ["dark", "light"].every((t => ["string", "undefined"].includes(typeof e[t])))
                    },
                    type: {
                        type: String,
                        validator: e => f.includes(e)
                    },
                    quality: {
                        type: Number,
                        validator: e => e === Number.parseFloat(String(e)) && e >= 0 && e <= 1
                    },
                    value: {
                        type: [String, Array],
                        required: !0,
                        validator: e => "string" == typeof e || e.every((({
                            data: data,
                            mode: e
                        }) => "string" == typeof data && (null == e || d.includes(e))))
                    }
                },
                data: () => ({
                    dataUrl: ""
                }),
                watch: {
                    $props: {
                        deep: !0,
                        immediate: !0,
                        handler: "toDataURL"
                    }
                },
                methods: {
                    toDataURL() {
                        const e = this.$props,
                            {
                                quality: t
                            } = e,
                            r = Object(n.i)(e, ["quality"]);
                        return c.a.toDataURL(this.value, Object.assign(r, null == t || {
                            renderOptions: {
                                quality: t
                            }
                        })).then((e => this.dataUrl = e)).catch((e => this.$emit("error", e)))
                    }
                },
                render() {
                    return this.$createElement("img", {
                        domProps: Object.assign(Object.assign({}, this.$attrs), {
                            src: this.dataUrl
                        })
                    })
                }
            }
        },
        1138: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    for (var p in e) t.hasOwnProperty(p) || (t[p] = e[p])
                }(r(1546));
            var n = r(580);
            t.XMLHttpRequestEventTarget = n.XMLHttpRequestEventTarget
        },
        1432: function(e, t, r) {
            const n = r(1433),
                o = r(816),
                c = r(1436),
                h = r(1461),
                {
                    throwIf: l
                } = r(1462),
                d = 0,
                f = 1,
                _ = 2,
                y = 3;
            e.exports = class {
                constructor(e, t) {
                    this._assertOptions(t), this._url = e, this._options = Object.assign({}, h, t), this._requests = new c, this._ws = null, this._wsSubscription = null, this._createOpeningController(), this._createClosingController(), this._createChannels()
                }
                get ws() {
                    return this._ws
                }
                get url() {
                    return this._url
                }
                get isOpening() {
                    return Boolean(this._ws && this._ws.readyState === d)
                }
                get isOpened() {
                    return Boolean(this._ws && this._ws.readyState === f)
                }
                get isClosing() {
                    return Boolean(this._ws && this._ws.readyState === _)
                }
                get isClosed() {
                    return Boolean(!this._ws || this._ws.readyState === y)
                }
                get onOpen() {
                    return this._onOpen
                }
                get onSend() {
                    return this._onSend
                }
                get onMessage() {
                    return this._onMessage
                }
                get onUnpackedMessage() {
                    return this._onUnpackedMessage
                }
                get onResponse() {
                    return this._onResponse
                }
                get onClose() {
                    return this._onClose
                }
                get onError() {
                    return this._onError
                }
                open() {
                    return this.isClosing ? Promise.reject(new Error("Can't open WebSocket while closing.")) : this.isOpened ? this._opening.promise : this._opening.call((() => {
                        this._opening.promise.catch((e => this._cleanup(e))), this._createWS()
                    }))
                }
                sendRequest(data, e = {}) {
                    const t = e.requestId || `${Math.random()}`,
                        r = void 0 !== e.timeout ? e.timeout : this._options.timeout;
                    return this._requests.create(t, (() => {
                        this._assertRequestIdHandlers();
                        const e = this._options.attachRequestId(data, t);
                        this.sendPacked(e)
                    }), r)
                }
                sendPacked(data) {
                    this._assertPackingHandlers();
                    const e = this._options.packMessage(data);
                    this.send(e)
                }
                send(data) {
                    l(!this.isOpened, "Can't send data because WebSocket is not opened."), this._ws.send(data), this._onSend.dispatchAsync(data)
                }
                close(code, e) {
                    return this.isClosed ? Promise.resolve(this._closing.value) : this._closing.call((() => this._ws.close(code, e)))
                }
                removeAllListeners() {
                    this._onOpen.removeAllListeners(), this._onMessage.removeAllListeners(), this._onUnpackedMessage.removeAllListeners(), this._onResponse.removeAllListeners(), this._onSend.removeAllListeners(), this._onClose.removeAllListeners(), this._onError.removeAllListeners()
                }
                _createOpeningController() {
                    const e = this._options.connectionTimeout || this._options.timeout;
                    this._opening = new o({
                        timeout: e,
                        timeoutReason: `Can't open WebSocket within allowed timeout: ${e} ms.`
                    })
                }
                _createClosingController() {
                    const e = this._options.timeout;
                    this._closing = new o({
                        timeout: e,
                        timeoutReason: `Can't close WebSocket within allowed timeout: ${e} ms.`
                    })
                }
                _createChannels() {
                    this._onOpen = new n, this._onMessage = new n, this._onUnpackedMessage = new n, this._onResponse = new n, this._onSend = new n, this._onClose = new n, this._onError = new n
                }
                _createWS() {
                    this._ws = this._options.createWebSocket(this._url), this._wsSubscription = new n.Subscription([{
                        channel: this._ws,
                        event: "open",
                        listener: e => this._handleOpen(e)
                    }, {
                        channel: this._ws,
                        event: "message",
                        listener: e => this._handleMessage(e)
                    }, {
                        channel: this._ws,
                        event: "error",
                        listener: e => this._handleError(e)
                    }, {
                        channel: this._ws,
                        event: "close",
                        listener: e => this._handleClose(e)
                    }]).on()
                }
                _handleOpen(e) {
                    this._onOpen.dispatchAsync(e), this._opening.resolve(e)
                }
                _handleMessage(e) {
                    const data = this._options.extractMessageData(e);
                    this._onMessage.dispatchAsync(data), this._tryUnpack(data)
                }
                _tryUnpack(data) {
                    this._options.unpackMessage && void 0 !== (data = this._options.unpackMessage(data)) && (this._onUnpackedMessage.dispatchAsync(data), this._tryHandleResponse(data))
                }
                _tryHandleResponse(data) {
                    if (this._options.extractRequestId) {
                        const e = this._options.extractRequestId(data);
                        e && (this._onResponse.dispatchAsync(data, e), this._requests.resolve(e, data))
                    }
                }
                _handleError(e) {
                    this._onError.dispatchAsync(e)
                }
                _handleClose(e) {
                    this._onClose.dispatchAsync(e), this._closing.resolve(e);
                    const t = new Error(`WebSocket closed with reason: ${e.reason} (${e.code}).`);
                    this._opening.isPending && this._opening.reject(t), this._cleanup(t)
                }
                _cleanupWS() {
                    this._wsSubscription && (this._wsSubscription.off(), this._wsSubscription = null), this._ws = null
                }
                _cleanup(e) {
                    this._cleanupWS(), this._requests.rejectAll(e)
                }
                _assertOptions(e) {
                    Object.keys(e || {}).forEach((e => {
                        if (!h.hasOwnProperty(e)) throw new Error(`Unknown option: ${e}`)
                    }))
                }
                _assertPackingHandlers() {
                    const {
                        packMessage: e,
                        unpackMessage: t
                    } = this._options;
                    l(!e || !t, "Please define 'options.packMessage / options.unpackMessage' for sending packed messages.")
                }
                _assertRequestIdHandlers() {
                    const {
                        attachRequestId: e,
                        extractRequestId: t
                    } = this._options;
                    l(!e || !t, "Please define 'options.attachRequestId / options.extractRequestId' for sending requests.")
                }
            }
        },
        1436: function(e, t, r) {
            const n = r(816),
                o = r(1437);
            e.exports = class {
                constructor() {
                    this._items = new Map
                }
                create(e, t, r) {
                    return this._rejectExistingRequest(e), this._createNewRequest(e, t, r)
                }
                resolve(e, data) {
                    e && this._items.has(e) && this._items.get(e).resolve(data)
                }
                rejectAll(e) {
                    this._items.forEach((t => t.isPending ? t.reject(e) : null))
                }
                _rejectExistingRequest(e) {
                    const t = this._items.get(e);
                    t && t.isPending && t.reject(new Error(`WebSocket request is replaced, id: ${e}`))
                }
                _createNewRequest(e, t, r) {
                    const c = new n({
                        timeout: r,
                        timeoutReason: `WebSocket request was rejected by timeout (${r} ms). RequestId: ${e}`
                    });
                    return this._items.set(e, c), o(c.call(t), (() => this._deleteRequest(e, c)))
                }
                _deleteRequest(e, t) {
                    this._items.get(e) === t && this._items.delete(e)
                }
            }
        },
        1461: function(e, t) {
            e.exports = {
                createWebSocket: e => new WebSocket(e),
                packMessage: null,
                unpackMessage: null,
                attachRequestId: null,
                extractRequestId: null,
                extractMessageData: e => e.data,
                timeout: 0,
                connectionTimeout: 0
            }
        },
        1462: function(e, t) {
            t.throwIf = (e, t) => {
                if (e) throw new Error(t)
            }
        },
        1463: function(e, t, r) {
            var n;
            if ("object" == typeof globalThis) n = globalThis;
            else try {
                n = r(1464)
            } catch (e) {} finally {
                if (n || "undefined" == typeof window || (n = window), !n) throw new Error("Could not determine global this")
            }
            var o = n.WebSocket || n.MozWebSocket,
                c = r(1465);

            function h(e, t) {
                return t ? new o(e, t) : new o(e)
            }
            o && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((function(e) {
                Object.defineProperty(h, e, {
                    get: function() {
                        return o[e]
                    }
                })
            })), e.exports = {
                w3cwebsocket: o ? h : null,
                version: c
            }
        },
        1464: function(e, t) {
            var r = function() {
                if ("object" == typeof self && self) return self;
                if ("object" == typeof window && window) return window;
                throw new Error("Unable to resolve global `this`")
            };
            e.exports = function() {
                if (this) return this;
                if ("object" == typeof globalThis && globalThis) return globalThis;
                try {
                    Object.defineProperty(Object.prototype, "__global__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    })
                } catch (e) {
                    return r()
                }
                try {
                    return __global__ || r()
                } finally {
                    delete Object.prototype.__global__
                }
            }()
        },
        1465: function(e, t, r) {
            e.exports = r(1466).version
        },
        1466: function(e) {
            e.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')
        },
        1546: function(e, t, r) {
            "use strict";
            (function(e, n) {
                var o, c = this && this.__extends || (o = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, b) {
                            e.__proto__ = b
                        } || function(e, b) {
                            for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                        },
                        function(e, b) {
                            function t() {
                                this.constructor = e
                            }
                            o(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                        }),
                    h = this && this.__assign || Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l = r(855),
                    d = r(1559),
                    f = r(1220),
                    _ = r(529),
                    y = r(1560),
                    m = r(1561),
                    v = r(580),
                    w = r(1562),
                    E = r(1563),
                    k = function(t) {
                        function r(n) {
                            void 0 === n && (n = {});
                            var o = t.call(this) || this;
                            return o.UNSENT = r.UNSENT, o.OPENED = r.OPENED, o.HEADERS_RECEIVED = r.HEADERS_RECEIVED, o.LOADING = r.LOADING, o.DONE = r.DONE, o.onreadystatechange = null, o.readyState = r.UNSENT, o.response = null, o.responseText = "", o.responseType = "", o.status = 0, o.statusText = "", o.timeout = 0, o.upload = new w.XMLHttpRequestUpload, o.responseUrl = "", o.withCredentials = !1, o._method = null, o._url = null, o._sync = !1, o._headers = {}, o._loweredHeaders = {}, o._mimeOverride = null, o._request = null, o._response = null, o._responseParts = null, o._responseHeaders = null, o._aborting = null, o._error = null, o._loadedBytes = 0, o._totalBytes = 0, o._lengthComputable = !1, o._restrictedMethods = {
                                CONNECT: !0,
                                TRACE: !0,
                                TRACK: !0
                            }, o._restrictedHeaders = {
                                "accept-charset": !0,
                                "accept-encoding": !0,
                                "access-control-request-headers": !0,
                                "access-control-request-method": !0,
                                connection: !0,
                                "content-length": !0,
                                cookie: !0,
                                cookie2: !0,
                                date: !0,
                                dnt: !0,
                                expect: !0,
                                host: !0,
                                "keep-alive": !0,
                                origin: !0,
                                referer: !0,
                                te: !0,
                                trailer: !0,
                                "transfer-encoding": !0,
                                upgrade: !0,
                                "user-agent": !0,
                                via: !0
                            }, o._privateHeaders = {
                                "set-cookie": !0,
                                "set-cookie2": !0
                            }, o._userAgent = "Mozilla/5.0 (" + f.type() + " " + f.arch() + ") node.js/" + e.versions.node + " v8/" + e.versions.v8, o._anonymous = n.anon || !1, o
                        }
                        return c(r, t), r.prototype.open = function(e, t, n, o, c) {
                            if (void 0 === n && (n = !0), e = e.toUpperCase(), this._restrictedMethods[e]) throw new r.SecurityError("HTTP method " + e + " is not allowed in XHR");
                            var h = this._parseUrl(t, o, c);
                            this.readyState === r.HEADERS_RECEIVED || (this.readyState, r.LOADING), this._method = e, this._url = h, this._sync = !n, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(r.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1
                        }, r.prototype.setRequestHeader = function(e, t) {
                            if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
                            var n = e.toLowerCase();
                            this._restrictedHeaders[n] || /^sec-/.test(n) || /^proxy-/.test(n) ? console.warn('Refused to set unsafe header "' + e + '"') : (t = t.toString(), null != this._loweredHeaders[n] ? (e = this._loweredHeaders[n], this._headers[e] = this._headers[e] + ", " + t) : (this._loweredHeaders[n] = e, this._headers[e] = t))
                        }, r.prototype.send = function(data) {
                            if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
                            if (this._request) throw new r.InvalidStateError("send() already called");
                            switch (this._url.protocol) {
                                case "file:":
                                    return this._sendFile(data);
                                case "http:":
                                case "https:":
                                    return this._sendHttp(data);
                                default:
                                    throw new r.NetworkError("Unsupported protocol " + this._url.protocol)
                            }
                        }, r.prototype.abort = function() {
                            null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"))
                        }, r.prototype.getResponseHeader = function(e) {
                            if (null == this._responseHeaders || null == e) return null;
                            var t = e.toLowerCase();
                            return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null
                        }, r.prototype.getAllResponseHeaders = function() {
                            var e = this;
                            return null == this._responseHeaders ? "" : Object.keys(this._responseHeaders).map((function(t) {
                                return t + ": " + e._responseHeaders[t]
                            })).join("\r\n")
                        }, r.prototype.overrideMimeType = function(e) {
                            if (this.readyState === r.LOADING || this.readyState === r.DONE) throw new r.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
                            this._mimeOverride = e.toLowerCase()
                        }, r.prototype.nodejsSet = function(e) {
                            if (this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent, e.hasOwnProperty("baseUrl")) {
                                if (null != e.baseUrl)
                                    if (!_.parse(e.baseUrl, !1, !0).protocol) throw new r.SyntaxError("baseUrl must be an absolute URL");
                                this.nodejsBaseUrl = e.baseUrl
                            }
                        }, r.nodejsSet = function(e) {
                            r.prototype.nodejsSet(e)
                        }, r.prototype._setReadyState = function(e) {
                            this.readyState = e, this.dispatchEvent(new y.ProgressEvent("readystatechange"))
                        }, r.prototype._sendFile = function(data) {
                            throw new Error("Protocol file: not implemented")
                        }, r.prototype._sendHttp = function(data) {
                            if (this._sync) throw new Error("Synchronous XHR processing not implemented");
                            !data || "GET" !== this._method && "HEAD" !== this._method ? data = data || "" : (console.warn("Discarding entity body for " + this._method + " requests"), data = null), this.upload._setData(data), this._finalizeHeaders(), this._sendHxxpRequest()
                        }, r.prototype._sendHxxpRequest = function() {
                            var e = this;
                            if (this.withCredentials) {
                                var t = r.cookieJar.getCookies(E.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
                                this._headers.cookie = this._headers.cookie2 = t
                            }
                            var n = "http:" === this._url.protocol ? [l, this.nodejsHttpAgent] : [d, this.nodejsHttpsAgent],
                                o = n[0],
                                c = n[1],
                                h = o.request.bind(o)({
                                    hostname: this._url.hostname,
                                    port: +this._url.port,
                                    path: this._url.path,
                                    auth: this._url.auth,
                                    method: this._method,
                                    headers: this._headers,
                                    agent: c
                                });
                            this._request = h, this.timeout && h.setTimeout(this.timeout, (function() {
                                return e._onHttpTimeout(h)
                            })), h.on("response", (function(t) {
                                return e._onHttpResponse(h, t)
                            })), h.on("error", (function(t) {
                                return e._onHttpRequestError(h, t)
                            })), this.upload._startUpload(h), this._request === h && this._dispatchProgress("loadstart")
                        }, r.prototype._finalizeHeaders = function() {
                            this._headers = h({}, this._headers, {
                                Connection: "keep-alive",
                                Host: this._url.host,
                                "User-Agent": this._userAgent
                            }, this._anonymous ? {
                                Referer: "about:blank"
                            } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders)
                        }, r.prototype._onHttpResponse = function(e, t) {
                            var n = this;
                            if (this._request === e) {
                                if (this.withCredentials && (t.headers["set-cookie"] || t.headers["set-cookie2"]) && r.cookieJar.setCookies(t.headers["set-cookie"] || t.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(t.statusCode) >= 0) return this._url = this._parseUrl(t.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), null != this._headers["Content-Type"] && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), void this._sendHxxpRequest();
                                this._response = t, this._response.on("data", (function(data) {
                                    return n._onHttpResponseData(t, data)
                                })), this._response.on("end", (function() {
                                    return n._onHttpResponseEnd(t)
                                })), this._response.on("close", (function() {
                                    return n._onHttpResponseClose(t)
                                })), this.responseUrl = this._url.href.split("#")[0], this.status = t.statusCode, this.statusText = l.STATUS_CODES[this.status], this._parseResponseHeaders(t);
                                var o = this._responseHeaders["content-length"] || "";
                                this._totalBytes = +o, this._lengthComputable = !!o, this._setReadyState(r.HEADERS_RECEIVED)
                            }
                        }, r.prototype._onHttpResponseData = function(e, data) {
                            this._response === e && (this._responseParts.push(new n(data)), this._loadedBytes += data.length, this.readyState !== r.LOADING && this._setReadyState(r.LOADING), this._dispatchProgress("progress"))
                        }, r.prototype._onHttpResponseEnd = function(e) {
                            this._response === e && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(r.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"))
                        }, r.prototype._onHttpResponseClose = function(e) {
                            if (this._response === e) {
                                var t = this._request;
                                this._setError(), t.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend")
                            }
                        }, r.prototype._onHttpTimeout = function(e) {
                            this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"))
                        }, r.prototype._onHttpRequestError = function(e, t) {
                            this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"))
                        }, r.prototype._dispatchProgress = function(e) {
                            var t = new r.ProgressEvent(e);
                            t.lengthComputable = this._lengthComputable, t.loaded = this._loadedBytes, t.total = this._totalBytes, this.dispatchEvent(t)
                        }, r.prototype._setError = function() {
                            this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null
                        }, r.prototype._parseUrl = function(e, t, r) {
                            var n = null == this.nodejsBaseUrl ? e : _.resolve(this.nodejsBaseUrl, e),
                                o = _.parse(n, !1, !0);
                            o.hash = null;
                            var c = (o.auth || "").split(":"),
                                h = c[0],
                                l = c[1];
                            return (h || l || t || r) && (o.auth = (t || h || "") + ":" + (r || l || "")), o
                        }, r.prototype._parseResponseHeaders = function(e) {
                            for (var t in this._responseHeaders = {}, e.headers) {
                                var r = t.toLowerCase();
                                this._privateHeaders[r] || (this._responseHeaders[r] = e.headers[t])
                            }
                            null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride)
                        }, r.prototype._parseResponse = function() {
                            var e = n.concat(this._responseParts);
                            switch (this._responseParts = null, this.responseType) {
                                case "json":
                                    this.responseText = null;
                                    try {
                                        this.response = JSON.parse(e.toString("utf-8"))
                                    } catch (e) {
                                        this.response = null
                                    }
                                    return;
                                case "buffer":
                                    return this.responseText = null, void(this.response = e);
                                case "arraybuffer":
                                    this.responseText = null;
                                    for (var t = new ArrayBuffer(e.length), view = new Uint8Array(t), i = 0; i < e.length; i++) view[i] = e[i];
                                    return void(this.response = t);
                                default:
                                    try {
                                        this.responseText = e.toString(this._parseResponseEncoding())
                                    } catch (t) {
                                        this.responseText = e.toString("binary")
                                    }
                                    this.response = this.responseText
                            }
                        }, r.prototype._parseResponseEncoding = function() {
                            return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8"
                        }, r.ProgressEvent = y.ProgressEvent, r.InvalidStateError = m.InvalidStateError, r.NetworkError = m.NetworkError, r.SecurityError = m.SecurityError, r.SyntaxError = m.SyntaxError, r.XMLHttpRequestUpload = w.XMLHttpRequestUpload, r.UNSENT = 0, r.OPENED = 1, r.HEADERS_RECEIVED = 2, r.LOADING = 3, r.DONE = 4, r.cookieJar = E.CookieJar(), r
                    }(v.XMLHttpRequestEventTarget);
                t.XMLHttpRequest = k, k.prototype.nodejsHttpAgent = l.globalAgent, k.prototype.nodejsHttpsAgent = d.globalAgent, k.prototype.nodejsBaseUrl = null
            }).call(this, r(67), r(33).Buffer)
        },
        1555: function(e, t, r) {
            "use strict";
            e.exports = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e
                },
                isNull: function(e) {
                    return null === e
                },
                isNullOrUndefined: function(e) {
                    return null == e
                }
            }
        },
        1560: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0
            };
            t.ProgressEvent = n
        },
        1561: function(e, t, r) {
            "use strict";
            var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, b) {
                    e.__proto__ = b
                } || function(e, b) {
                    for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                },
                function(e, b) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), t
            }(Error);
            t.SecurityError = c;
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), t
            }(Error);
            t.InvalidStateError = h;
            var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), t
            }(Error);
            t.NetworkError = l;
            var d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), t
            }(Error);
            t.SyntaxError = d
        },
        1562: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, b) {
                        e.__proto__ = b
                    } || function(e, b) {
                        for (var p in b) b.hasOwnProperty(p) && (e[p] = b[p])
                    },
                    function(e, b) {
                        function t() {
                            this.constructor = e
                        }
                        n(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = function(t) {
                    function r() {
                        var e = t.call(this) || this;
                        return e._contentType = null, e._body = null, e._reset(), e
                    }
                    return o(r, t), r.prototype._reset = function() {
                        this._contentType = null, this._body = null
                    }, r.prototype._setData = function(data) {
                        if (null != data)
                            if ("string" == typeof data) 0 !== data.length && (this._contentType = "text/plain;charset=UTF-8"), this._body = new e(data, "utf-8");
                            else if (e.isBuffer(data)) this._body = data;
                        else if (data instanceof ArrayBuffer) {
                            for (var body = new e(data.byteLength), view = new Uint8Array(data), i = 0; i < data.byteLength; i++) body[i] = view[i];
                            this._body = body
                        } else {
                            if (!(data.buffer && data.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + data);
                            body = new e(data.byteLength);
                            var t = data.byteOffset;
                            for (view = new Uint8Array(data.buffer), i = 0; i < data.byteLength; i++) body[i] = view[i + t];
                            this._body = body
                        }
                    }, r.prototype._finalizeHeaders = function(e, t) {
                        this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString())
                    }, r.prototype._startUpload = function(e) {
                        this._body && e.write(this._body), e.end()
                    }, r
                }(r(580).XMLHttpRequestEventTarget);
                t.XMLHttpRequestUpload = c
            }).call(this, r(33).Buffer)
        },
        1564: function(e, t, r) {
            const n = r(177).EventEmitter,
                o = r(259).inherits,
                c = r(366),
                h = r(1222),
                map = r(1609),
                l = r(1637),
                d = r(1640),
                f = (r(891), r(587)),
                _ = function() {};

            function y(e) {
                const t = this;
                n.call(t), t.setMaxListeners(30), e = e || {};
                const r = {
                        sendAsync: t._handleAsync.bind(t)
                    },
                    o = e.blockTrackerProvider || r;
                t._blockTracker = e.blockTracker || new h({
                    provider: o,
                    pollingInterval: e.pollingInterval || 4e3,
                    setSkipCacheFlag: !0
                }), t._ready = new d, t.currentBlock = null, t._providers = []
            }
            e.exports = y, o(y, n), y.prototype.start = function(e = _) {
                const t = this;
                t._ready.go(), t._blockTracker.on("latest", (e => {
                    t._getBlockByNumberWithRetry(e, ((e, r) => {
                        if (e) return void this.emit("error", e);
                        if (!r) return console.log(r), void this.emit("error", new Error("Could not find block"));
                        const n = (o = r, {
                            number: c.toBuffer(o.number),
                            hash: c.toBuffer(o.hash),
                            parentHash: c.toBuffer(o.parentHash),
                            nonce: c.toBuffer(o.nonce),
                            mixHash: c.toBuffer(o.mixHash),
                            sha3Uncles: c.toBuffer(o.sha3Uncles),
                            logsBloom: c.toBuffer(o.logsBloom),
                            transactionsRoot: c.toBuffer(o.transactionsRoot),
                            stateRoot: c.toBuffer(o.stateRoot),
                            receiptsRoot: c.toBuffer(o.receiptRoot || o.receiptsRoot),
                            miner: c.toBuffer(o.miner),
                            difficulty: c.toBuffer(o.difficulty),
                            totalDifficulty: c.toBuffer(o.totalDifficulty),
                            size: c.toBuffer(o.size),
                            extraData: c.toBuffer(o.extraData),
                            gasLimit: c.toBuffer(o.gasLimit),
                            gasUsed: c.toBuffer(o.gasUsed),
                            timestamp: c.toBuffer(o.timestamp),
                            transactions: o.transactions
                        });
                        var o;
                        t._setCurrentBlock(n), t.emit("rawBlock", r), t.emit("latest", r)
                    }))
                })), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start")
            }, y.prototype.stop = function() {
                const e = this;
                e._blockTracker.removeAllListeners(), e._running = !1, e.emit("stop")
            }, y.prototype.isRunning = function() {
                return this._running
            }, y.prototype.addProvider = function(source, e) {
                const t = this;
                "number" == typeof e ? t._providers.splice(e, 0, source) : t._providers.push(source), source.setEngine(this)
            }, y.prototype.removeProvider = function(source) {
                const e = this._providers.indexOf(source);
                if (e < 0) throw new Error("Provider not found.");
                this._providers.splice(e, 1)
            }, y.prototype.send = function(e) {
                throw new Error("Web3ProviderEngine does not support synchronous requests.")
            }, y.prototype.sendAsync = function(e, t) {
                const r = this;
                r._ready.await((function() {
                    Array.isArray(e) ? map(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t)
                }))
            }, y.prototype._getBlockByNumberWithRetry = function(e, t) {
                const r = this;
                let n = 5;
                return void o();

                function o() {
                    r._getBlockByNumber(e, c)
                }

                function c(e, r) {
                    return e ? t(e) : r ? void t(null, r) : n > 0 ? (n--, void setTimeout((function() {
                        o()
                    }), 1e3)) : void t(null, null)
                }
            }, y.prototype._getBlockByNumber = function(e, t) {
                const r = f({
                    method: "eth_getBlockByNumber",
                    params: [e, !1],
                    skipCache: !0
                });
                this._handleAsync(r, ((e, r) => e ? t(e) : t(null, r.result)))
            }, y.prototype._handleAsync = function(e, t) {
                var r = this,
                    n = -1,
                    o = null,
                    c = null,
                    h = [];

                function d(r, n) {
                    c = r, o = n, l(h, (function(e, t) {
                        e ? e(c, o, t) : t()
                    }), (function() {
                        var r = {
                            id: e.id,
                            jsonrpc: e.jsonrpc,
                            result: o
                        };
                        null != c ? (r.error = {
                            message: c.stack || c.message || c,
                            code: -32e3
                        }, t(c, r)) : t(null, r)
                    }))
                }! function t(o) {
                    if (n += 1, h.unshift(o), n >= r._providers.length) d(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
                    else try {
                        r._providers[n].handleRequest(e, t, d)
                    } catch (e) {
                        d(e)
                    }
                }()
            }, y.prototype._setCurrentBlock = function(e) {
                this.currentBlock = e, this.emit("block", e)
            }
        },
        1640: function(e, t, r) {
            const n = r(177).EventEmitter,
                o = r(259).inherits;

            function c() {
                n.call(this), this.isLocked = !0
            }
            e.exports = c, o(c, n), c.prototype.go = function() {
                this.isLocked = !1, this.emit("unlock")
            }, c.prototype.stop = function() {
                this.isLocked = !0, this.emit("lock")
            }, c.prototype.await = function(e) {
                const t = this;
                t.isLocked ? t.once("unlock", e) : setTimeout(e)
            }
        },
        1644: function(e, t) {
            e.exports = function() {
                return Math.floor(Number.MAX_SAFE_INTEGER * Math.random())
            }
        },
        1645: function(e, t, r) {
            const n = r(588),
                o = r(1646);
            e.exports = class extends n {
                constructor(e) {
                    super((({
                        blockTracker: t
                    }) => o(Object.assign({
                        blockTracker: t
                    }, e))))
                }
            }
        },
        1649: function(e, t, r) {
            const n = r(259).inherits,
                o = r(445);

            function c(e) {
                e = e || {}, this.staticResponses = e
            }
            e.exports = c, n(c, o), c.prototype.handleRequest = function(e, t, r) {
                var n = this.staticResponses[e.method];
                "function" == typeof n ? n(e, t, r) : void 0 !== n ? setTimeout((() => r(null, n))) : t()
            }
        },
        1650: function(e, t, r) {
            const n = r(588),
                o = r(893);
            e.exports = class extends n {
                constructor() {
                    super((({
                        blockTracker: e,
                        provider: t,
                        engine: r
                    }) => o({
                        blockTracker: e,
                        provider: t
                    })))
                }
            }
        },
        1663: function(e, t, r) {
            const n = r(1664),
                o = r(1665),
                c = r(259).inherits,
                h = r(366),
                l = r(1667),
                d = r(412),
                f = r(1677),
                _ = r(445),
                y = r(1678),
                m = /^[0-9A-Fa-f]+$/g;

            function v(e) {
                const t = this;
                t.nonceLock = f(1), e.getAccounts && (t.getAccounts = e.getAccounts), e.processTransaction && (t.processTransaction = e.processTransaction), e.processMessage && (t.processMessage = e.processMessage), e.processPersonalMessage && (t.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (t.processTypedMessage = e.processTypedMessage), t.approveTransaction = e.approveTransaction || t.autoApprove, t.approveMessage = e.approveMessage || t.autoApprove, t.approvePersonalMessage = e.approvePersonalMessage || t.autoApprove, t.approveDecryptMessage = e.approveDecryptMessage || t.autoApprove, t.approveEncryptionPublicKey = e.approveEncryptionPublicKey || t.autoApprove, t.approveTypedMessage = e.approveTypedMessage || t.autoApprove, e.signTransaction && (t.signTransaction = e.signTransaction || S("signTransaction")), e.signMessage && (t.signMessage = e.signMessage || S("signMessage")), e.signPersonalMessage && (t.signPersonalMessage = e.signPersonalMessage || S("signPersonalMessage")), e.decryptMessage && (t.decryptMessage = e.decryptMessage || S("decryptMessage")), e.encryptionPublicKey && (t.encryptionPublicKey = e.encryptionPublicKey || S("encryptionPublicKey")), e.signTypedMessage && (t.signTypedMessage = e.signTypedMessage || S("signTypedMessage")), e.recoverPersonalSignature && (t.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (t.publishTransaction = e.publishTransaction), t.estimateGas = e.estimateGas || t.estimateGas, t.getGasPrice = e.getGasPrice || t.getGasPrice
            }

            function w(e) {
                return e.toLowerCase()
            }

            function E(e) {
                const t = h.addHexPrefix(e);
                return h.isValidAddress(t)
            }

            function k(e) {
                const t = h.addHexPrefix(e);
                return !h.isValidAddress(t) && T(e)
            }

            function T(data) {
                if (!("string" == typeof data)) return !1;
                if (!("0x" === data.slice(0, 2))) return !1;
                return data.slice(2).match(m)
            }

            function S(e) {
                return function(t, r) {
                    r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'))
                }
            }
            e.exports = v, c(v, _), v.prototype.handleRequest = function(e, t, r) {
                const o = this;
                let c, h, l, f, address;
                switch (o._parityRequests = {}, o._parityRequestCount = 0, e.method) {
                    case "eth_coinbase":
                        return void o.getAccounts((function(e, t) {
                            if (e) return r(e);
                            let n = t[0] || null;
                            r(null, n)
                        }));
                    case "eth_accounts":
                        return void o.getAccounts((function(e, t) {
                            if (e) return r(e);
                            r(null, t)
                        }));
                    case "eth_sendTransaction":
                        return c = e.params[0], void n([e => o.validateTransaction(c, e), e => o.processTransaction(c, e)], r);
                    case "eth_signTransaction":
                        return c = e.params[0], void n([e => o.validateTransaction(c, e), e => o.processSignTransaction(c, e)], r);
                    case "eth_sign":
                        return address = e.params[0], f = e.params[1], l = e.params[2] || {}, h = d(l, {
                            from: address,
                            data: f
                        }), void n([e => o.validateMessage(h, e), e => o.processMessage(h, e)], r);
                    case "personal_sign":
                        return function() {
                            const t = e.params[0];
                            if (k(e.params[1]) && E(t)) {
                                let t = "The eth_personalSign method requires params ordered ";
                                t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), address = e.params[0], f = e.params[1]
                            } else f = e.params[0], address = e.params[1];
                            l = e.params[2] || {}, h = d(l, {
                                from: address,
                                data: f
                            }), n([e => o.validatePersonalMessage(h, e), e => o.processPersonalMessage(h, e)], r)
                        }();
                    case "eth_decryptMessage":
                        return function() {
                            const t = e.params[0];
                            if (k(e.params[1]) && E(t)) {
                                let t = "The eth_decryptMessage method requires params ordered ";
                                t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), address = e.params[0], f = e.params[1]
                            } else f = e.params[0], address = e.params[1];
                            l = e.params[2] || {}, h = d(l, {
                                from: address,
                                data: f
                            }), n([e => o.validateDecryptMessage(h, e), e => o.processDecryptMessage(h, e)], r)
                        }();
                    case "encryption_public_key":
                        return function() {
                            const address = e.params[0];
                            n([e => o.validateEncryptionPublicKey(address, e), e => o.processEncryptionPublicKey(address, e)], r)
                        }();
                    case "personal_ecRecover":
                        return function() {
                            f = e.params[0];
                            let t = e.params[1];
                            l = e.params[2] || {}, h = d(l, {
                                sig: t,
                                data: f
                            }), o.recoverPersonalSignature(h, r)
                        }();
                    case "eth_signTypedData":
                    case "eth_signTypedData_v3":
                    case "eth_signTypedData_v4":
                        return function() {
                            const t = e.params[0],
                                c = e.params[1];
                            E(t) ? (address = t, f = c) : (f = t, address = c), l = e.params[2] || {}, h = d(l, {
                                from: address,
                                data: f
                            }), n([e => o.validateTypedMessage(h, e), e => o.processTypedMessage(h, e)], r)
                        }();
                    case "parity_postTransaction":
                        return c = e.params[0], void o.parityPostTransaction(c, r);
                    case "parity_postSign":
                        return address = e.params[0], f = e.params[1], void o.parityPostSign(address, f, r);
                    case "parity_checkRequest":
                        return function() {
                            const t = e.params[0];
                            o.parityCheckRequest(t, r)
                        }();
                    case "parity_defaultAccount":
                        return void o.getAccounts((function(e, t) {
                            if (e) return r(e);
                            const n = t[0] || null;
                            r(null, n)
                        }));
                    default:
                        return void t()
                }
            }, v.prototype.getAccounts = function(e) {
                e(null, [])
            }, v.prototype.processTransaction = function(e, t) {
                const r = this;
                n([t => r.approveTransaction(e, t), (e, t) => r.checkApproval("transaction", e, t), t => r.finalizeAndSubmitTx(e, t)], t)
            }, v.prototype.processSignTransaction = function(e, t) {
                const r = this;
                n([t => r.approveTransaction(e, t), (e, t) => r.checkApproval("transaction", e, t), t => r.finalizeTx(e, t)], t)
            }, v.prototype.processMessage = function(e, t) {
                const r = this;
                n([t => r.approveMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signMessage(e, t)], t)
            }, v.prototype.processPersonalMessage = function(e, t) {
                const r = this;
                n([t => r.approvePersonalMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signPersonalMessage(e, t)], t)
            }, v.prototype.processDecryptMessage = function(e, t) {
                const r = this;
                n([t => r.approveDecryptMessage(e, t), (e, t) => r.checkApproval("decryptMessage", e, t), t => r.decryptMessage(e, t)], t)
            }, v.prototype.processEncryptionPublicKey = function(e, t) {
                const r = this;
                n([t => r.approveEncryptionPublicKey(e, t), (e, t) => r.checkApproval("encryptionPublicKey", e, t), t => r.encryptionPublicKey(e, t)], t)
            }, v.prototype.processTypedMessage = function(e, t) {
                const r = this;
                n([t => r.approveTypedMessage(e, t), (e, t) => r.checkApproval("message", e, t), t => r.signTypedMessage(e, t)], t)
            }, v.prototype.autoApprove = function(e, t) {
                t(null, !0)
            }, v.prototype.checkApproval = function(e, t, r) {
                r(t ? null : new Error("User denied " + e + " signature."))
            }, v.prototype.parityPostTransaction = function(e, t) {
                const r = this,
                    n = `0x${r._parityRequestCount.toString(16)}`;
                r._parityRequestCount++, r.emitPayload({
                    method: "eth_sendTransaction",
                    params: [e]
                }, (function(e, t) {
                    if (e) return void(r._parityRequests[n] = {
                        error: e
                    });
                    const o = t.result;
                    r._parityRequests[n] = o
                })), t(null, n)
            }, v.prototype.parityPostSign = function(address, e, t) {
                const r = this,
                    n = `0x${r._parityRequestCount.toString(16)}`;
                r._parityRequestCount++, r.emitPayload({
                    method: "eth_sign",
                    params: [address, e]
                }, (function(e, t) {
                    if (e) return void(r._parityRequests[n] = {
                        error: e
                    });
                    const o = t.result;
                    r._parityRequests[n] = o
                })), t(null, n)
            }, v.prototype.parityCheckRequest = function(e, t) {
                const r = this._parityRequests[e] || null;
                return r ? r.error ? t(r.error) : void t(null, r) : t(null, null)
            }, v.prototype.recoverPersonalSignature = function(e, t) {
                let r;
                try {
                    r = l.recoverPersonalSignature(e)
                } catch (e) {
                    return t(e)
                }
                t(null, r)
            }, v.prototype.validateTransaction = function(e, t) {
                if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
                this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`))
                }))
            }, v.prototype.validateMessage = function(e, t) {
                if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
                this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
                }))
            }, v.prototype.validatePersonalMessage = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : T(e.data) ? void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
                })) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))
            }, v.prototype.validateDecryptMessage = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to decrypt message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to decrypt message.")) : T(e.data) ? void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`))
                })) : t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))
            }, v.prototype.validateEncryptionPublicKey = function(address, e) {
                this.validateSender(address, (function(t, r) {
                    return t ? e(t) : r ? void e() : e(new Error(`Unknown address - unable to obtain encryption public key for this address: "${address}"`))
                }))
            }, v.prototype.validateTypedMessage = function(e, t) {
                return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) {
                    return r ? t(r) : n ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`))
                }))
            }, v.prototype.validateSender = function(e, t) {
                if (!e) return t(null, !1);
                this.getAccounts((function(r, n) {
                    if (r) return t(r);
                    const o = -1 !== n.map(w).indexOf(e.toLowerCase());
                    t(null, o)
                }))
            }, v.prototype.finalizeAndSubmitTx = function(e, t) {
                const r = this;
                r.nonceLock.take((function() {
                    n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], (function(e, n) {
                        if (r.nonceLock.leave(), e) return t(e);
                        t(null, n)
                    }))
                }))
            }, v.prototype.finalizeTx = function(e, t) {
                const r = this;
                r.nonceLock.take((function() {
                    n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], (function(n, o) {
                        if (r.nonceLock.leave(), n) return t(n);
                        t(null, {
                            raw: o,
                            tx: e
                        })
                    }))
                }))
            }, v.prototype.publishTransaction = function(e, t) {
                this.emitPayload({
                    method: "eth_sendRawTransaction",
                    params: [e]
                }, (function(e, r) {
                    if (e) return t(e);
                    t(null, r.result)
                }))
            }, v.prototype.estimateGas = function(e, t) {
                y(this.engine, e, t)
            }, v.prototype.getGasPrice = function(e) {
                this.emitPayload({
                    method: "eth_gasPrice",
                    params: []
                }, (function(t, r) {
                    if (t) return e(t);
                    e(null, r.result)
                }))
            }, v.prototype.fillInTxExtras = function(e, t) {
                const r = this,
                    address = e.from,
                    n = {};
                void 0 === e.gasPrice && (n.gasPrice = r.getGasPrice.bind(r)), void 0 === e.nonce && (n.nonce = r.emitPayload.bind(r, {
                    method: "eth_getTransactionCount",
                    params: [address, "pending"]
                })), void 0 === e.gas && (n.gas = r.estimateGas.bind(r, function(e) {
                    return {
                        from: e.from,
                        to: e.to,
                        value: e.value,
                        data: e.data,
                        gas: e.gas,
                        gasPrice: e.gasPrice,
                        nonce: e.nonce
                    }
                }(e))), o(n, (function(r, n) {
                    if (r) return t(r);
                    const o = {};
                    n.gasPrice && (o.gasPrice = n.gasPrice), n.nonce && (o.nonce = n.nonce.result), n.gas && (o.gas = n.gas), t(null, d(e, o))
                }))
            }
        },
        1678: function(e, t, r) {
            const n = r(587);
            e.exports = function(e, t, r) {
                e.sendAsync(n({
                    method: "eth_estimateGas",
                    params: [t]
                }), (function(e, t) {
                    if (e) return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
                    r(null, t.result)
                }))
            }
        },
        1679: function(e, t, r) {
            (function(t) {
                const n = r(259).inherits,
                    o = r(1680),
                    c = r(366),
                    h = r(445),
                    l = r(891).blockTagForPayload;

                function d(e) {
                    this.nonceCache = {}
                }
                e.exports = d, n(d, h), d.prototype.handleRequest = function(e, r, n) {
                    const h = this;
                    switch (e.method) {
                        case "eth_getTransactionCount":
                            var d = l(e),
                                address = e.params[0].toLowerCase(),
                                f = h.nonceCache[address];
                            return void("pending" === d ? f ? n(null, f) : r((function(e, t, r) {
                                if (e) return r();
                                void 0 === h.nonceCache[address] && (h.nonceCache[address] = t), r()
                            })) : r());
                        case "eth_sendRawTransaction":
                            return void r((function(r, n, l) {
                                if (r) return l();
                                var d = e.params[0],
                                    f = (c.stripHexPrefix(d), t.from(c.stripHexPrefix(d), "hex"), new o(t.from(c.stripHexPrefix(d), "hex"))),
                                    address = "0x" + f.getSenderAddress().toString("hex").toLowerCase(),
                                    _ = c.bufferToInt(f.nonce),
                                    y = (++_).toString(16);
                                y.length % 2 && (y = "0" + y), y = "0x" + y, h.nonceCache[address] = y, l()
                            }));
                        case "evm_revert":
                            return h.nonceCache = {}, void r();
                        default:
                            return void r()
                    }
                }
            }).call(this, r(33).Buffer)
        },
        1682: function(e, t, r) {
            const n = r(588),
                o = r(1223);
            e.exports = class extends n {
                constructor() {
                    super((({
                        blockTracker: e,
                        provider: t,
                        engine: r
                    }) => {
                        const {
                            events: n,
                            middleware: c
                        } = o({
                            blockTracker: e,
                            provider: t
                        });
                        return n.on("notification", (data => r.emit("data", null, data))), c
                    }))
                }
            }
        },
        337: function(e, t, r) {
            "use strict";
            var n = {
                name: "NoSsr",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var r = t.parent,
                        n = t.slots,
                        o = t.props,
                        c = n(),
                        h = c.default;
                    void 0 === h && (h = []);
                    var l = c.placeholder;
                    return r._isMounted ? h : (r.$once("hook:mounted", (function() {
                        r.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || l) ? e(o.placeholderTag, {
                        class: ["no-ssr-placeholder"]
                    }, o.placeholder || l) : h.length > 0 ? h.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = n
        },
        445: function(e, t, r) {
            const n = r(587);

            function o() {}
            e.exports = o, o.prototype.setEngine = function(e) {
                const t = this;
                t.engine || (t.engine = e, e.on("block", (function(e) {
                    t.currentBlock = e
                })), e.on("start", (function() {
                    t.start()
                })), e.on("stop", (function() {
                    t.stop()
                })))
            }, o.prototype.handleRequest = function(e, t, r) {
                throw new Error("Subproviders should override `handleRequest`.")
            }, o.prototype.emitPayload = function(e, t) {
                this.engine.sendAsync(n(e), t)
            }, o.prototype.stop = function() {}, o.prototype.start = function() {}
        },
        512: function(e, t, r) {
            (function(t) {
                function r(e) {
                    try {
                        if (!t.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    var r = t.localStorage[e];
                    return null != r && "true" === String(r).toLowerCase()
                }
                e.exports = function(e, t) {
                    if (r("noDeprecation")) return e;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (r("throwDeprecation")) throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }).call(this, r(36))
        },
        529: function(e, t, r) {
            "use strict";
            var n = r(1554),
                o = r(1555);

            function c() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }
            t.parse = P, t.resolve = function(source, e) {
                return P(source, !1, !0).resolve(e)
            }, t.resolveObject = function(source, e) {
                return source ? P(source, !1, !0).resolveObject(e) : e
            }, t.format = function(e) {
                o.isString(e) && (e = P(e));
                return e instanceof c ? e.format() : c.prototype.format.call(e)
            }, t.Url = c;
            var h = /^([a-z0-9.+-]+:)/i,
                l = /:[0-9]*$/,
                d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                f = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                _ = ["'"].concat(f),
                y = ["%", "/", "?", ";", "#"].concat(_),
                m = ["/", "?", "#"],
                v = /^[+a-z0-9A-Z_-]{0,63}$/,
                w = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                E = {
                    javascript: !0,
                    "javascript:": !0
                },
                k = {
                    javascript: !0,
                    "javascript:": !0
                },
                T = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                S = r(1556);

            function P(e, t, r) {
                if (e && o.isObject(e) && e instanceof c) return e;
                var u = new c;
                return u.parse(e, t, r), u
            }
            c.prototype.parse = function(e, t, r) {
                if (!o.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                var c = e.indexOf("?"),
                    l = -1 !== c && c < e.indexOf("#") ? "?" : "#",
                    f = e.split(l);
                f[0] = f[0].replace(/\\/g, "/");
                var P = e = f.join(l);
                if (P = P.trim(), !r && 1 === e.split("#").length) {
                    var R = d.exec(P);
                    if (R) return this.path = P, this.href = P, this.pathname = R[1], R[2] ? (this.search = R[2], this.query = t ? S.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                }
                var x = h.exec(P);
                if (x) {
                    var A = (x = x[0]).toLowerCase();
                    this.protocol = A, P = P.substr(x.length)
                }
                if (r || x || P.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var M = "//" === P.substr(0, 2);
                    !M || x && k[x] || (P = P.substr(2), this.slashes = !0)
                }
                if (!k[x] && (M || x && !T[x])) {
                    for (var O, C, H = -1, i = 0; i < m.length; i++) {
                        -1 !== (j = P.indexOf(m[i])) && (-1 === H || j < H) && (H = j)
                    } - 1 !== (C = -1 === H ? P.lastIndexOf("@") : P.lastIndexOf("@", H)) && (O = P.slice(0, C), P = P.slice(C + 1), this.auth = decodeURIComponent(O)), H = -1;
                    for (i = 0; i < y.length; i++) {
                        var j; - 1 !== (j = P.indexOf(y[i])) && (-1 === H || j < H) && (H = j)
                    } - 1 === H && (H = P.length), this.host = P.slice(0, H), P = P.slice(H), this.parseHost(), this.hostname = this.hostname || "";
                    var B = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!B)
                        for (var N = this.hostname.split(/\./), U = (i = 0, N.length); i < U; i++) {
                            var L = N[i];
                            if (L && !L.match(v)) {
                                for (var D = "", I = 0, $ = L.length; I < $; I++) L.charCodeAt(I) > 127 ? D += "x" : D += L[I];
                                if (!D.match(v)) {
                                    var W = N.slice(0, i),
                                        F = N.slice(i + 1),
                                        G = L.match(w);
                                    G && (W.push(G[1]), F.unshift(G[2])), F.length && (P = "/" + F.join(".") + P), this.hostname = W.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), B || (this.hostname = n.toASCII(this.hostname));
                    var p = this.port ? ":" + this.port : "",
                        z = this.hostname || "";
                    this.host = z + p, this.href += this.host, B && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== P[0] && (P = "/" + P))
                }
                if (!E[A])
                    for (i = 0, U = _.length; i < U; i++) {
                        var K = _[i];
                        if (-1 !== P.indexOf(K)) {
                            var X = encodeURIComponent(K);
                            X === K && (X = escape(K)), P = P.split(K).join(X)
                        }
                    }
                var J = P.indexOf("#"); - 1 !== J && (this.hash = P.substr(J), P = P.slice(0, J));
                var V = P.indexOf("?");
                if (-1 !== V ? (this.search = P.substr(V), this.query = P.substr(V + 1), t && (this.query = S.parse(this.query)), P = P.slice(0, V)) : t && (this.search = "", this.query = {}), P && (this.pathname = P), T[A] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    p = this.pathname || "";
                    var s = this.search || "";
                    this.path = p + s
                }
                return this.href = this.format(), this
            }, c.prototype.format = function() {
                var e = this.auth || "";
                e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                var t = this.protocol || "",
                    r = this.pathname || "",
                    n = this.hash || "",
                    c = !1,
                    h = "";
                this.host ? c = e + this.host : this.hostname && (c = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (c += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (h = S.stringify(this.query));
                var l = this.search || h && "?" + h || "";
                return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || T[t]) && !1 !== c ? (c = "//" + (c || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : c || (c = ""), n && "#" !== n.charAt(0) && (n = "#" + n), l && "?" !== l.charAt(0) && (l = "?" + l), t + c + (r = r.replace(/[?#]/g, (function(e) {
                    return encodeURIComponent(e)
                }))) + (l = l.replace("#", "%23")) + n
            }, c.prototype.resolve = function(e) {
                return this.resolveObject(P(e, !1, !0)).format()
            }, c.prototype.resolveObject = function(e) {
                if (o.isString(e)) {
                    var t = new c;
                    t.parse(e, !1, !0), e = t
                }
                for (var r = new c, n = Object.keys(this), h = 0; h < n.length; h++) {
                    var l = n[h];
                    r[l] = this[l]
                }
                if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                if (e.slashes && !e.protocol) {
                    for (var d = Object.keys(e), f = 0; f < d.length; f++) {
                        var _ = d[f];
                        "protocol" !== _ && (r[_] = e[_])
                    }
                    return T[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                }
                if (e.protocol && e.protocol !== r.protocol) {
                    if (!T[e.protocol]) {
                        for (var y = Object.keys(e), m = 0; m < y.length; m++) {
                            var v = y[m];
                            r[v] = e[v]
                        }
                        return r.href = r.format(), r
                    }
                    if (r.protocol = e.protocol, e.host || k[e.protocol]) r.pathname = e.pathname;
                    else {
                        for (var w = (e.pathname || "").split("/"); w.length && !(e.host = w.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== w[0] && w.unshift(""), w.length < 2 && w.unshift(""), r.pathname = w.join("/")
                    }
                    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                        var p = r.pathname || "",
                            s = r.search || "";
                        r.path = p + s
                    }
                    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                }
                var E = r.pathname && "/" === r.pathname.charAt(0),
                    S = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    P = S || E || r.host && e.pathname,
                    R = P,
                    x = r.pathname && r.pathname.split("/") || [],
                    A = (w = e.pathname && e.pathname.split("/") || [], r.protocol && !T[r.protocol]);
                if (A && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === w[0] ? w[0] = e.host : w.unshift(e.host)), e.host = null), P = P && ("" === w[0] || "" === x[0])), S) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, x = w;
                else if (w.length) x || (x = []), x.pop(), x = x.concat(w), r.search = e.search, r.query = e.query;
                else if (!o.isNullOrUndefined(e.search)) {
                    if (A) r.hostname = r.host = x.shift(), (H = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = H.shift(), r.host = r.hostname = H.shift());
                    return r.search = e.search, r.query = e.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                }
                if (!x.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                for (var M = x.slice(-1)[0], O = (r.host || e.host || x.length > 1) && ("." === M || ".." === M) || "" === M, C = 0, i = x.length; i >= 0; i--) "." === (M = x[i]) ? x.splice(i, 1) : ".." === M ? (x.splice(i, 1), C++) : C && (x.splice(i, 1), C--);
                if (!P && !R)
                    for (; C--; C) x.unshift("..");
                !P || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), O && "/" !== x.join("/").substr(-1) && x.push("");
                var H, j = "" === x[0] || x[0] && "/" === x[0].charAt(0);
                A && (r.hostname = r.host = j ? "" : x.length ? x.shift() : "", (H = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = H.shift(), r.host = r.hostname = H.shift()));
                return (P = P || r.host && x.length) && !j && x.unshift(""), x.length ? r.pathname = x.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }, c.prototype.parseHost = function() {
                var e = this.host,
                    t = l.exec(e);
                t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
            }
        },
        580: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e() {
                    this.listeners = {}
                }
                return e.prototype.addEventListener = function(e, t) {
                    e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t.handleEvent || t)
                }, e.prototype.removeEventListener = function(e, t) {
                    if (e = e.toLowerCase(), this.listeners[e]) {
                        var r = this.listeners[e].indexOf(t.handleEvent || t);
                        r < 0 || this.listeners[e].splice(r, 1)
                    }
                }, e.prototype.dispatchEvent = function(e) {
                    var t = e.type.toLowerCase();
                    if (e.target = this, this.listeners[t])
                        for (var r = 0, n = this.listeners[t]; r < n.length; r++) {
                            n[r].call(this, e)
                        }
                    var o = this["on" + t];
                    return o && o.call(this, e), !0
                }, e
            }();
            t.XMLHttpRequestEventTarget = n
        },
        587: function(e, t, r) {
            const n = r(1644),
                o = r(412);
            e.exports = function(data) {
                return o({
                    id: n(),
                    jsonrpc: "2.0",
                    params: []
                }, data)
            }
        },
        588: function(e, t, r) {
            const n = r(445);
            e.exports = class extends n {
                constructor(e) {
                    if (super(), !e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
                    this._constructorFn = e
                }
                setEngine(e) {
                    if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");
                    const t = e._blockTracker,
                        r = this._constructorFn({
                            engine: e,
                            provider: e,
                            blockTracker: t
                        });
                    if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
                    if ("function" != typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
                    this.middleware = r
                }
                handleRequest(e, t, r) {
                    const n = {
                        id: e.id
                    };
                    this.middleware(e, n, (function(e) {
                        t(((t, r, o) => {
                            t ? (delete n.result, n.error = {
                                message: t.message || t
                            }) : n.result = r, e ? e(o) : o()
                        }))
                    }), (function(e) {
                        if (e) return r(e);
                        r(null, n.result)
                    }))
                }
            }
        },
        619: function(e, t, r) {
            "use strict";
            var n = {
                name: "ClientOnly",
                functional: !0,
                props: {
                    placeholder: String,
                    placeholderTag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(e, t) {
                    var r = t.parent,
                        n = t.slots,
                        o = t.props,
                        c = n(),
                        h = c.default;
                    void 0 === h && (h = []);
                    var l = c.placeholder;
                    return r._isMounted ? h : (r.$once("hook:mounted", (function() {
                        r.$forceUpdate()
                    })), o.placeholderTag && (o.placeholder || l) ? e(o.placeholderTag, {
                        class: ["client-only-placeholder"]
                    }, o.placeholder || l) : h.length > 0 ? h.map((function() {
                        return e(!1)
                    })) : e(!1))
                }
            };
            e.exports = n
        },
        891: function(e, t, r) {
            const n = r(892);

            function o(e) {
                return "never" !== l(e)
            }

            function c(e) {
                var t = h(e);
                return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
            }

            function h(e) {
                switch (e.method) {
                    case "eth_getStorageAt":
                        return 2;
                    case "eth_getBalance":
                    case "eth_getCode":
                    case "eth_getTransactionCount":
                    case "eth_call":
                    case "eth_estimateGas":
                        return 1;
                    case "eth_getBlockByNumber":
                        return 0;
                    default:
                        return
                }
            }

            function l(e) {
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
                        return "perma";
                    case "eth_getBlockByNumber":
                    case "eth_getBlockTransactionCountByNumber":
                    case "eth_getUncleCountByBlockNumber":
                    case "eth_getTransactionByBlockNumberAndIndex":
                    case "eth_getUncleByBlockNumberAndIndex":
                        return "fork";
                    case "eth_gasPrice":
                    case "eth_getBalance":
                    case "eth_getStorageAt":
                    case "eth_getTransactionCount":
                    case "eth_call":
                    case "eth_estimateGas":
                    case "eth_getFilterLogs":
                    case "eth_getLogs":
                    case "eth_blockNumber":
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
                        return "never"
                }
            }
            e.exports = {
                cacheIdentifierForPayload: function(e, t = {}) {
                    if (!o(e)) return null;
                    const {
                        includeBlockRef: r
                    } = t, h = r ? e.params : c(e);
                    return e.method + ":" + n(h)
                },
                canCache: o,
                blockTagForPayload: function(e) {
                    var t = h(e);
                    if (t >= e.params.length) return null;
                    return e.params[t]
                },
                paramsWithoutBlockTag: c,
                blockTagParamIndex: h,
                cacheTypeForPayload: l
            }
        }
    }
]);