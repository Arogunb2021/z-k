(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        1475: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var desc = Object.getOwnPropertyDescriptor(t, r);
                    desc && !("get" in desc ? !t.__esModule : desc.writable || desc.configurable) || (desc = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, desc)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                c = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                l = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function l(e) {
                            try {
                                f(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
                            try {
                                f(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function f(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(l, d)
                        }
                        f((n = n.apply(e, t || [])).next())
                    }))
                },
                d = this && this.__generator || function(e, body) {
                    var t, r, n, g, o = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function c(c) {
                        return function(l) {
                            return function(c) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (n = 2 & c[0] ? r.return : c[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, c[1])).done) return n;
                                    switch (r = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            n = c;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                                o.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && o.label < n[1]) {
                                                o.label = n[1], n = c;
                                                break
                                            }
                                            if (n && o.label < n[2]) {
                                                o.label = n[2], o.ops.push(c);
                                                break
                                            }
                                            n[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    c = body.call(e, o)
                                } catch (e) {
                                    c = [6, e], r = 0
                                } finally {
                                    t = n = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, l])
                        }
                    }
                },
                f = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Resolution = void 0;
            var h = f(r(13)),
                v = f(r(1476)),
                m = f(r(1479)),
                w = f(r(1501)),
                y = r(270),
                R = c(r(208)),
                E = f(r(828)),
                k = r(269),
                S = r(440),
                _ = f(r(438)),
                D = r(1502),
                N = r(309),
                U = function() {
                    function e(e) {
                        var t, r = (void 0 === e ? {} : e).sourceConfig,
                            n = void 0 === r ? void 0 : r,
                            o = P(null == n ? void 0 : n.uns) ? new w.default(null == n ? void 0 : n.uns) : new m.default(null == n ? void 0 : n.uns),
                            c = P(null == n ? void 0 : n.zns) ? new w.default(null == n ? void 0 : n.zns) : new v.default(null == n ? void 0 : n.zns),
                            l = o instanceof w.default && c instanceof w.default && o.url === c.url;
                        this.serviceMap = ((t = {})[y.NamingServiceName.UNS] = {
                            usedServices: [o],
                            native: P(null == n ? void 0 : n.uns) ? new m.default : o
                        }, t[y.NamingServiceName.ZNS] = {
                            usedServices: l ? [o] : [o, c],
                            native: P(null == n ? void 0 : n.zns) ? new v.default : c
                        }, t)
                    }
                    return e.autoNetwork = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t, r;
                            return d(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = new this, e.uns ? [4, m.default.autoNetwork(e.uns)] : [3, 2];
                                    case 1:
                                        r = n.sent(), t.serviceMap[y.NamingServiceName.UNS] = {
                                            usedServices: [r],
                                            native: r
                                        }, n.label = 2;
                                    case 2:
                                        return [2, t]
                                }
                            }))
                        }))
                    }, e.infura = function(e, t) {
                        var r, n, o, c;
                        return new this({
                            sourceConfig: {
                                uns: {
                                    locations: {
                                        Layer1: {
                                            url: (0, k.signedLink)(e, (null === (r = null == t ? void 0 : t.uns) || void 0 === r ? void 0 : r.locations.Layer1.network) || "mainnet", "infura"),
                                            network: (null === (n = null == t ? void 0 : t.uns) || void 0 === n ? void 0 : n.locations.Layer1.network) || "mainnet"
                                        },
                                        Layer2: {
                                            url: (0, k.signedLink)(e, (null === (o = null == t ? void 0 : t.uns) || void 0 === o ? void 0 : o.locations.Layer2.network) || "polygon-mainnet", "infura"),
                                            network: (null === (c = null == t ? void 0 : t.uns) || void 0 === c ? void 0 : c.locations.Layer2.network) || "polygon-mainnet"
                                        }
                                    }
                                }
                            }
                        })
                    }, e.alchemy = function(e, t) {
                        var r, n, o, c;
                        return new this({
                            sourceConfig: {
                                uns: {
                                    locations: {
                                        Layer1: {
                                            url: (0, k.signedLink)(e, (null === (r = null == t ? void 0 : t.uns) || void 0 === r ? void 0 : r.locations.Layer1.network) || "mainnet"),
                                            network: (null === (n = null == t ? void 0 : t.uns) || void 0 === n ? void 0 : n.locations.Layer1.network) || "mainnet"
                                        },
                                        Layer2: {
                                            url: (0, k.signedLink)(e, (null === (o = null == t ? void 0 : t.uns) || void 0 === o ? void 0 : o.locations.Layer2.network) || "polygon-mainnet"),
                                            network: (null === (c = null == t ? void 0 : t.uns) || void 0 === c ? void 0 : c.locations.Layer2.network) || "polygon-mainnet"
                                        }
                                    }
                                }
                            }
                        })
                    }, e.fromResolutionProvider = function(e) {
                        if (e.uns) return this.fromEthereumEip1193Provider({
                            uns: e.uns
                        });
                        if (e.zns) return this.fromZilliqaProvider(e.zns.provider, e);
                        throw new R.default(R.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: "Must specify network for uns or zns"
                        })
                    }, e.fromEthereumEip1193Provider = function(e) {
                        var t = {};
                        return e.uns && (t.uns = {
                            locations: {
                                Layer1: {
                                    provider: e.uns.locations.Layer1.provider,
                                    network: e.uns.locations.Layer1.network || "mainnet"
                                },
                                Layer2: {
                                    provider: e.uns.locations.Layer2.provider,
                                    network: e.uns.locations.Layer2.network || "polygon-mainnet"
                                }
                            }
                        }), new this({
                            sourceConfig: t
                        })
                    }, e.fromZilliqaProvider = function(e, t) {
                        var r;
                        return new this({
                            sourceConfig: {
                                zns: {
                                    provider: e,
                                    network: (null === (r = null == t ? void 0 : t.zns) || void 0 === r ? void 0 : r.network) || "mainnet"
                                }
                            }
                        })
                    }, e.fromWeb3Version0Provider = function(e) {
                        return this.fromEthereumEip1193Provider({
                            uns: e.uns ? {
                                locations: {
                                    Layer1: {
                                        network: e.uns.locations.Layer1.network,
                                        provider: S.Eip1993Factories.fromWeb3Version0Provider(e.uns.locations.Layer1.provider)
                                    },
                                    Layer2: {
                                        network: e.uns.locations.Layer2.network,
                                        provider: S.Eip1993Factories.fromWeb3Version0Provider(e.uns.locations.Layer2.provider)
                                    }
                                }
                            } : void 0
                        })
                    }, e.fromWeb3Version1Provider = function(e) {
                        return this.fromEthereumEip1193Provider({
                            uns: e.uns ? {
                                locations: {
                                    Layer1: {
                                        network: e.uns.locations.Layer1.network,
                                        provider: S.Eip1993Factories.fromWeb3Version1Provider(e.uns.locations.Layer1.provider)
                                    },
                                    Layer2: {
                                        network: e.uns.locations.Layer2.network,
                                        provider: S.Eip1993Factories.fromWeb3Version1Provider(e.uns.locations.Layer2.provider)
                                    }
                                }
                            } : void 0
                        })
                    }, e.fromEthersProvider = function(e) {
                        return this.fromEthereumEip1193Provider({
                            uns: e.uns ? {
                                locations: {
                                    Layer1: {
                                        network: e.uns.locations.Layer1.network,
                                        provider: S.Eip1993Factories.fromEthersProvider(e.uns.locations.Layer1.provider)
                                    },
                                    Layer2: {
                                        network: e.uns.locations.Layer2.network,
                                        provider: S.Eip1993Factories.fromEthersProvider(e.uns.locations.Layer2.provider)
                                    }
                                }
                            } : void 0
                        })
                    }, e.prototype.addr = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(r) {
                                return [2, this.record(e, "crypto.".concat(t.toUpperCase(), ".address"))]
                            }))
                        }))
                    }, e.prototype.multiChainAddr = function(e, t, r) {
                        return l(this, void 0, void 0, (function() {
                            var n;
                            return d(this, (function(o) {
                                return e = (0, D.prepareAndValidateDomain)(e), n = "crypto.".concat(t.toUpperCase(), ".version.").concat(r.toUpperCase(), ".address"), [2, this.callServiceForDomain(e, (function(t) {
                                    return t.record(e, n)
                                }))]
                            }))
                        }))
                    }, e.prototype.twitter = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomain(e, (function(t) {
                                    return t.twitter(e)
                                }))]
                            }))
                        }))
                    }, e.prototype.chatId = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return [2, this.record(e, "gundb.username.value")]
                            }))
                        }))
                    }, e.prototype.chatPk = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return [2, this.record(e, "gundb.public_key.value")]
                            }))
                        }))
                    }, e.prototype.ipfsHash = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.getPreferableNewRecord(e, "dweb.ipfs.hash", "ipfs.html.value")]
                            }))
                        }))
                    }, e.prototype.httpUrl = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.getPreferableNewRecord(e, "browser.redirect_url", "ipfs.redirect_domain.value")]
                            }))
                        }))
                    }, e.prototype.email = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return [2, this.record(e, "whois.email.value")]
                            }))
                        }))
                    }, e.prototype.resolver = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return e = (0, D.prepareAndValidateDomain)(e), [4, this.callServiceForDomain(e, (function(t) {
                                            return t.resolver(e)
                                        }))];
                                    case 1:
                                        if (!(t = r.sent())) throw new R.default(R.ResolutionErrorCode.UnspecifiedResolver, {
                                            domain: e
                                        });
                                        return [2, t]
                                }
                            }))
                        }))
                    }, e.prototype.owner = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomain(e, (function(t) {
                                    return t.owner(e)
                                }))]
                            }))
                        }))
                    }, e.prototype.record = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(r) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomain(e, (function(r) {
                                    return r.record(e, t)
                                }))]
                            }))
                        }))
                    }, e.prototype.records = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(r) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomain(e, (function(r) {
                                    return r.records(e, t)
                                }))]
                            }))
                        }))
                    }, e.prototype.isRegistered = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomainBoolean(e, (function(t) {
                                    return t.isRegistered(e)
                                }), {
                                    throwIfUnsupportedDomain: !0,
                                    expectedValue: !0
                                })]
                            }))
                        }))
                    }, e.prototype.isAvailable = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomainBoolean(e, (function(t) {
                                    return t.isAvailable(e)
                                }), {
                                    throwIfUnsupportedDomain: !0,
                                    expectedValue: !1
                                })]
                            }))
                        }))
                    }, e.prototype.namehash = function(e, t, r) {
                        void 0 === r && (r = y.NamehashOptionsDefault);
                        var n = this.serviceMap[t];
                        if (!n) throw new R.default(R.ResolutionErrorCode.UnsupportedService, {
                            namingService: t
                        });
                        return e = (0, D.prepareAndValidateDomain)(e), this.formatNamehash(n.native.namehash(e), r)
                    }, e.prototype.childhash = function(e, label, t, r) {
                        void 0 === r && (r = y.NamehashOptionsDefault);
                        var n = this.serviceMap[t];
                        if (!n) throw new R.default(R.ResolutionErrorCode.UnsupportedService, {
                            namingService: t
                        });
                        return this.formatNamehash(n.native.childhash(e, label), r)
                    }, e.prototype.formatNamehash = function(e, t) {
                        return e = e.replace("0x", ""), "dec" === t.format ? new h.default(e, "hex").toString(10) : t.prefix ? "0x" + e : e
                    }, e.prototype.isValidHash = function(e, t, r) {
                        var n = this.serviceMap[r];
                        if (!n) throw new R.default(R.ResolutionErrorCode.UnsupportedService, {
                            namingService: r
                        });
                        return e = (0, D.prepareAndValidateDomain)(e), n.native.namehash(e) === t
                    }, e.prototype.isSupportedDomain = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomainBoolean(e, (function(t) {
                                    return t.isSupportedDomain(e)
                                }), {
                                    throwIfUnsupportedDomain: !1,
                                    expectedValue: !0
                                })]
                            }))
                        }))
                    }, e.prototype.allRecords = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return e = (0, D.prepareAndValidateDomain)(e), [2, this.callServiceForDomain(e, (function(t) {
                                    return t.allRecords(e)
                                }))]
                            }))
                        }))
                    }, e.prototype.dns = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            var r, n, o;
                            return d(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return r = new E.default, e = (0, D.prepareAndValidateDomain)(e), n = this.getDnsRecordKeys(t), [4, this.callServiceForDomain(e, (function(t) {
                                            return t.records(e, n)
                                        }))];
                                    case 1:
                                        return o = c.sent(), [2, r.toList(o)]
                                }
                            }))
                        }))
                    }, e.prototype.tokenURI = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                return t = this.namehash(e, y.NamingServiceName.UNS), [2, this.callServiceForDomain(e, (function(e) {
                                    return e.getTokenUri(t)
                                }))]
                            }))
                        }))
                    }, e.prototype.tokenURIMetadata = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.tokenURI(e)];
                                    case 1:
                                        return t = r.sent(), [2, this.getMetadataFromTokenURI(t)]
                                }
                            }))
                        }))
                    }, e.prototype.registryAddress = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return [2, this.callServiceForDomain(e, (function(t) {
                                    return t.registryAddress(e)
                                }))]
                            }))
                        }))
                    }, e.prototype.unhash = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            var r;
                            return d(this, (function(n) {
                                return e = (0, N.fromDecStringToHex)(e), r = this.serviceMap[t].usedServices, [2, r[r.length - 1].getDomainFromTokenId(e)]
                            }))
                        }))
                    }, e.prototype.locations = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t, r, n, o, c, l, f, h, v, m, w;
                            return d(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        return t = e.filter((function(e) {
                                            return e.endsWith(".zil")
                                        })), r = this.serviceMap.UNS.usedServices[0].locations(e), t.length ? (n = this.serviceMap.ZNS.usedServices, o = n[n.length - 1], c = (0, k.wrapResult)((function() {
                                            return o.locations(t)
                                        })), [4, r]) : [2, r];
                                    case 1:
                                        return l = d.sent(), f = Object.entries(l).filter((function(e) {
                                            var t = e[0],
                                                r = e[1];
                                            return t.endsWith(".zil") && !r
                                        })), f.length ? [4, c.then(k.unwrapResult)] : [2, l];
                                    case 2:
                                        for (h = d.sent(), v = 0, m = f; v < m.length; v++) w = m[v][0], l[w] = h[w];
                                        return [2, l]
                                }
                            }))
                        }))
                    }, e.prototype.reverseTokenId = function(address, e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                return [2, this.reverseGetTokenId(address, null == e ? void 0 : e.location)]
                            }))
                        }))
                    }, e.prototype.reverse = function(address, e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.reverseGetTokenId(address, null == e ? void 0 : e.location)];
                                    case 1:
                                        return (t = r.sent()) ? [2, this.unhash(t, y.NamingServiceName.UNS)] : [2, null]
                                }
                            }))
                        }))
                    }, e.prototype.getMetadataFromTokenURI = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t, r, n, o;
                            return d(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, _.default.fetch(e, {})];
                                    case 1:
                                        return (t = c.sent()).ok ? [2, t.json()] : (r = R.default.bind, n = [void 0, R.ResolutionErrorCode.ServiceProviderError], o = {}, [4, t.text()]);
                                    case 2:
                                        throw new(r.apply(R.default, n.concat([(o.providerMessage = c.sent(), o.method = "UDAPI", o.methodName = "tokenURIMetadata", o)])))
                                }
                            }))
                        }))
                    }, e.prototype.getDnsRecordKeys = function(e) {
                        var t = ["dns.ttl"];
                        return e.forEach((function(e) {
                            t.push("dns.".concat(e)), t.push("dns.".concat(e, ".ttl"))
                        })), t
                    }, e.prototype.getPreferableNewRecord = function(e, t, r) {
                        return l(this, void 0, void 0, (function() {
                            var n;
                            return d(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.records(e, [t, r])];
                                    case 1:
                                        if (!(n = o.sent())[t] && !n[r]) throw new R.default(R.ResolutionErrorCode.RecordNotFound, {
                                            recordName: t,
                                            domain: e
                                        });
                                        return [2, n[t] || n[r]]
                                }
                            }))
                        }))
                    }, e.prototype.callServiceForDomain = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            var r, n, o, c, l;
                            return d(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (!(r = (0, k.findNamingServiceName)(e))) throw new R.default(R.ResolutionErrorCode.UnsupportedDomain, {
                                            domain: e
                                        });
                                        n = this.serviceMap[r].usedServices.map((function(e) {
                                            return (0, k.wrapResult)((function() {
                                                return t(e)
                                            }))
                                        })), o = 0, c = n, d.label = 1;
                                    case 1:
                                        return o < c.length ? [4, c[o]] : [3, 4];
                                    case 2:
                                        if (null === (l = d.sent()).error) return [2, l.result];
                                        if (!(l.error instanceof R.default && l.error.code === R.ResolutionErrorCode.UnregisteredDomain)) throw l.error;
                                        d.label = 3;
                                    case 3:
                                        return o++, [3, 1];
                                    case 4:
                                        throw new R.default(R.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        })
                                }
                            }))
                        }))
                    }, e.prototype.callServiceForDomainBoolean = function(e, t, r) {
                        return l(this, void 0, void 0, (function() {
                            var n, o, c, l, f, h, v;
                            return d(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (!(n = (0, k.findNamingServiceName)(e))) {
                                            if (!r.throwIfUnsupportedDomain) return [2, !r.expectedValue];
                                            throw new R.default(R.ResolutionErrorCode.UnsupportedDomain, {
                                                domain: e
                                            })
                                        }
                                        o = this.serviceMap[n].usedServices.map((function(e) {
                                            return (0, k.wrapResult)((function() {
                                                return t(e)
                                            }))
                                        })), c = 0, l = o, d.label = 1;
                                    case 1:
                                        return c < l.length ? [4, l[c]] : [3, 4];
                                    case 2:
                                        if (f = d.sent(), h = f.result, v = f.error) {
                                            if (!(v instanceof R.default && v.code === R.ResolutionErrorCode.UnregisteredDomain)) throw v
                                        } else if (h === r.expectedValue) return [2, h];
                                        d.label = 3;
                                    case 3:
                                        return c++, [3, 1];
                                    case 4:
                                        return [2, !r.expectedValue]
                                }
                            }))
                        }))
                    }, e.prototype.reverseGetTokenId = function(address, e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.serviceMap.UNS.native.reverseOf(address, e)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e
                }();

            function P(e) {
                return e && e.api
            }
            t.Resolution = U, t.default = U
        },
        1501: function(e, t, r) {
            "use strict";
            var n, o = this && this.__extends || (n = function(e, b) {
                    return n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, b) {
                        e.__proto__ = b
                    } || function(e, b) {
                        for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                    }, n(e, b)
                }, function(e, b) {
                    if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                    function t() {
                        this.constructor = e
                    }
                    n(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
                }),
                c = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function l(e) {
                            try {
                                f(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
                            try {
                                f(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function f(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(l, d)
                        }
                        f((n = n.apply(e, t || [])).next())
                    }))
                },
                l = this && this.__generator || function(e, body) {
                    var t, r, n, g, o = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function c(c) {
                        return function(l) {
                            return function(c) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (n = 2 & c[0] ? r.return : c[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, c[1])).done) return n;
                                    switch (r = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            n = c;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                                o.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && o.label < n[1]) {
                                                o.label = n[1], n = c;
                                                break
                                            }
                                            if (n && o.label < n[2]) {
                                                o.label = n[2], o.ops.push(c);
                                                break
                                            }
                                            n[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    c = body.call(e, o)
                                } catch (e) {
                                    c = [6, e], r = 0
                                } finally {
                                    t = n = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, l])
                        }
                    }
                },
                d = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = r(823),
                h = r(208),
                v = r(825),
                m = r(270),
                w = d(r(438)),
                y = r(269),
                R = r(309),
                E = function(e) {
                    function t(t) {
                        var r = e.call(this) || this;
                        r.url = (null == t ? void 0 : t.url) || "https://unstoppabledomains.com/api/v1";
                        var n = "".concat("cross-fetch/3.1.4 (+https://github.com/lquixada/cross-fetch)", " Resolution");
                        return r.headers = {
                            "X-user-agent": n
                        }, r
                    }
                    return o(t, e), t.prototype.isSupportedDomain = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(e) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "isSupportedDomain"
                                })
                            }))
                        }))
                    }, t.prototype.namehash = function(e) {
                        throw new Error("Unsupported method when using UD Resolution API")
                    }, t.prototype.childhash = function(e, t) {
                        throw new Error("Unsupported method when using UD Resolution API")
                    }, t.prototype.record = function(e, t) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.records(e, [t])];
                                    case 1:
                                        return [2, r.sent()[t]]
                                }
                            }))
                        }))
                    }, t.prototype.records = function(e, t) {
                        return c(this, void 0, void 0, (function() {
                            var r;
                            return l(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.allRecords(e)];
                                    case 1:
                                        return r = n.sent(), [2, (0, y.constructRecords)(t, r)]
                                }
                            }))
                        }))
                    }, t.prototype.owner = function(e) {
                        return c(this, void 0, void 0, (function() {
                            var t, r, n, o;
                            return l(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, this.resolve(e)];
                                    case 1:
                                        if (t = c.sent(), r = t.meta, n = r.owner, o = r.blockchain, !n) throw new h.ResolutionError(h.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        return o !== m.BlockchainType.ZIL || n.startsWith("zil1") ? [2, n] : [2, (0, f.toBech32Address)(n)]
                                }
                            }))
                        }))
                    }, t.prototype.twitter = function(e) {
                        return c(this, void 0, void 0, (function() {
                            var t, r, n, o, c;
                            return l(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        if ((0, y.findNamingServiceName)(e) !== m.NamingServiceName.UNS) throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                            domain: e,
                                            methodName: "twitter"
                                        });
                                        return [4, this.resolve(e)];
                                    case 1:
                                        if (!(t = l.sent()).meta.owner) throw new h.ResolutionError(h.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        if (r = t.meta.owner, n = t.records || {}, o = n["validation.social.twitter.username"], c = n["social.twitter.username"], !o) throw new h.ResolutionError(h.ResolutionErrorCode.RecordNotFound, {
                                            recordName: "validation.social.twitter.username",
                                            domain: e
                                        });
                                        if (!c) throw new h.ResolutionError(h.ResolutionErrorCode.RecordNotFound, {
                                            recordName: "social.twitter.username",
                                            domain: e
                                        });
                                        if (!(0, v.isValidTwitterSignature)({
                                                tokenId: t.meta.namehash,
                                                owner: r,
                                                twitterHandle: c,
                                                validationSignature: o
                                            })) throw new h.ResolutionError(h.ResolutionErrorCode.InvalidTwitterVerification, {
                                            domain: e
                                        });
                                        return [2, c]
                                }
                            }))
                        }))
                    }, t.prototype.allRecords = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.resolve(e)];
                                    case 1:
                                        return [2, t.sent().records || {}]
                                }
                            }))
                        }))
                    }, t.prototype.getDomainFromTokenId = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = (0, R.fromDecStringToHex)(e), [4, this.getMetadata(e)];
                                    case 1:
                                        return [2, t.sent().meta.domain]
                                }
                            }))
                        }))
                    }, t.prototype.getMetadata = function(e) {
                        return c(this, void 0, void 0, (function() {
                            var t, r;
                            return l(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = "".concat(this.url, "/").concat(e), [4, w.default.fetch(t, {}).catch((function(e) {
                                            throw new h.ResolutionError(h.ResolutionErrorCode.MetadataEndpointError, {
                                                tokenUri: t || "undefined",
                                                errorMessage: e.message
                                            })
                                        }))];
                                    case 1:
                                        return [4, n.sent().json()];
                                    case 2:
                                        if (!(r = n.sent()).meta || !r.meta.domain) throw new h.ResolutionError(h.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: "with tokenId ".concat(e)
                                        });
                                        if ((r.meta.blockchain === m.BlockchainType.ZIL ? (0, R.znsNamehash)(r.meta.domain) : (0, R.eip137Namehash)(r.meta.domain)) !== e) throw new h.ResolutionError(h.ResolutionErrorCode.ServiceProviderError, {
                                            methodName: "unhash",
                                            domain: r.meta.domain,
                                            providerMessage: "Service provider returned an invalid domain name"
                                        });
                                        return [2, r]
                                }
                            }))
                        }))
                    }, t.prototype.resolve = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, w.default.fetch("".concat(this.url, "/").concat(e), {
                                            method: "GET",
                                            headers: this.headers
                                        })];
                                    case 1:
                                        return [2, t.sent().json()]
                                }
                            }))
                        }))
                    }, t.prototype.resolver = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.resolve(e)];
                                    case 1:
                                        return [2, t.sent().meta.resolver]
                                }
                            }))
                        }))
                    }, t.prototype.reverse = function(e, t) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(e) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "reverse"
                                })
                            }))
                        }))
                    }, t.prototype.reverseOf = function(e, t) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(e) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "reverseOf"
                                })
                            }))
                        }))
                    }, t.prototype.isRegistered = function(e) {
                        return c(this, void 0, void 0, (function() {
                            var t;
                            return l(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.resolve(e)];
                                    case 1:
                                        return t = r.sent(), [2, !(0, y.isNullAddress)(t.meta.owner)]
                                }
                            }))
                        }))
                    }, t.prototype.getTokenUri = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(e) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "getTokenUri"
                                })
                            }))
                        }))
                    }, t.prototype.isAvailable = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.isRegistered(e)];
                                    case 1:
                                        return [2, !t.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.registryAddress = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(t) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    domain: e,
                                    methodName: "registryAddress"
                                })
                            }))
                        }))
                    }, t.prototype.locations = function(e) {
                        return c(this, void 0, void 0, (function() {
                            return l(this, (function(e) {
                                throw new h.ResolutionError(h.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "locations"
                                })
                            }))
                        }))
                    }, t
                }(r(573).NamingService);
            t.default = E
        },
        572: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var desc = Object.getOwnPropertyDescriptor(t, r);
                    desc && !("get" in desc ? !t.__esModule : desc.writable || desc.configurable) || (desc = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, desc)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                c = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                l = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function l(e) {
                            try {
                                f(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
                            try {
                                f(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function f(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(l, d)
                        }
                        f((n = n.apply(e, t || [])).next())
                    }))
                },
                d = this && this.__generator || function(e, body) {
                    var t, r, n, g, o = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return g = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                        return this
                    }), g;

                    function c(c) {
                        return function(l) {
                            return function(c) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (t = 1, r && (n = 2 & c[0] ? r.return : c[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, c[1])).done) return n;
                                    switch (r = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            n = c;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                                o.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && o.label < n[1]) {
                                                o.label = n[1], n = c;
                                                break
                                            }
                                            if (n && o.label < n[2]) {
                                                o.label = n[2], o.ops.push(c);
                                                break
                                            }
                                            n[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    c = body.call(e, o)
                                } catch (e) {
                                    c = [6, e], r = 0
                                } finally {
                                    t = n = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, l])
                        }
                    }
                },
                f = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var h = c(r(208)),
                v = f(r(438)),
                m = function() {
                    function e(e, t) {
                        this.url = t, this.name = e
                    }
                    return e.factory = function(e, t) {
                        return new this(e, t)
                    }, e.prototype.request = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.fetchJson(e)];
                                    case 1:
                                        if ((t = r.sent()).error) throw new h.default(h.ResolutionErrorCode.ServiceProviderError, {
                                            providerMessage: t.error.message
                                        });
                                        return [2, t.result]
                                }
                            }))
                        }))
                    }, e.prototype.fetchJson = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t;
                            return d(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, v.default.fetch(this.url, {
                                            method: "POST",
                                            body: JSON.stringify({
                                                jsonrpc: "2.0",
                                                id: "1",
                                                method: e.method,
                                                params: e.params || []
                                            }),
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        })];
                                    case 1:
                                        if (200 !== (t = r.sent()).status) throw new h.default(h.ResolutionErrorCode.ServiceProviderError, {
                                            providerMessage: "Request to ".concat(this.url, " failed with response status ").concat(t.status)
                                        });
                                        return [2, t.json()]
                                }
                            }))
                        }))
                    }, e
                }();
            t.default = m
        },
        573: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NamingService = void 0;
            var n = function() {};
            t.NamingService = n
        }
    }
]);