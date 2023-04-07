(window.webpackJsonp = window.webpackJsonp || []).push([
    [71], {
        1476: function(e, t, r) {
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
                c = this && this.__assign || function() {
                    return c = Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    }, c.apply(this, arguments)
                },
                l = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
                d = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                h = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && l(t, e, r);
                    return d(t, e), t
                },
                f = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function l(e) {
                            try {
                                h(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
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
                            }))).then(l, d)
                        }
                        h((n = n.apply(e, t || [])).next())
                    }))
                },
                v = this && this.__generator || function(e, body) {
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
                w = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var y = r(823),
                m = r(269),
                k = r(437),
                C = r(208),
                R = r(270),
                _ = w(r(572)),
                N = r(309),
                E = r(573),
                A = h(r(310)),
                S = function(e) {
                    function t(source) {
                        void 0 === source && (source = {
                            url: t.UrlMap[1],
                            network: "mainnet"
                        });
                        var r = e.call(this) || this;
                        return r.name = R.NamingServiceName.ZNS, r.checkNetworkConfig(source), r.network = t.NetworkNameMap[source.network], r.url = source.url || t.UrlMap[r.network], r.provider = source.provider || new _.default(r.name, r.url), r.registryAddr = source.registryAddress || t.RegistryMap[r.network], r.checkRegistryAddress(r.registryAddr), r.registryAddr.startsWith("0x") && (r.registryAddr = (0, y.toBech32Address)(r.registryAddr)), r
                    }
                    return o(t, e), t.prototype.owner = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getRecordsAddresses(e)];
                                    case 1:
                                        if (!(t = n.sent())) throw new C.ResolutionError(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        if (!(r = t[0])) throw new C.ResolutionError(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        return [2, r]
                                }
                            }))
                        }))
                    }, t.prototype.resolver = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getRecordsAddresses(e)];
                                    case 1:
                                        if (!(t = n.sent()) || !t[0]) throw new C.ResolutionError(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        if (r = t[1], (0, m.isNullAddress)(r)) throw new C.ResolutionError(C.ResolutionErrorCode.UnspecifiedResolver, {
                                            domain: e
                                        });
                                        return [2, r]
                                }
                            }))
                        }))
                    }, t.prototype.namehash = function(e) {
                        if (!this.checkDomain(e)) throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedDomain, {
                            domain: e
                        });
                        return (0, N.znsNamehash)(e)
                    }, t.prototype.childhash = function(e, label) {
                        return (0, N.znsChildhash)(e, label)
                    }, t.prototype.isSupportedDomain = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                return [2, this.checkDomain(e)]
                            }))
                        }))
                    }, t.prototype.record = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var r, n;
                            return v(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.records(e, [t])];
                                    case 1:
                                        if (r = o.sent(), !(n = r[t])) throw new C.ResolutionError(C.ResolutionErrorCode.RecordNotFound, {
                                            domain: e,
                                            recordName: t
                                        });
                                        return [2, n]
                                }
                            }))
                        }))
                    }, t.prototype.records = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var r;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.allRecords(e)];
                                    case 1:
                                        return r = n.sent(), [2, (0, m.constructRecords)(t, r)]
                                }
                            }))
                        }))
                    }, t.prototype.allRecords = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.resolver(e)];
                                    case 1:
                                        return t = r.sent(), [2, this.getResolverRecords(t)]
                                }
                            }))
                        }))
                    }, t.prototype.twitter = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedMethod, {
                                    domain: e,
                                    methodName: "twitter"
                                })
                            }))
                        }))
                    }, t.prototype.reverse = function(address, e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "reverse"
                                })
                            }))
                        }))
                    }, t.prototype.reverseOf = function(address, e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "reverseOf"
                                })
                            }))
                        }))
                    }, t.prototype.isRegistered = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getRecordsAddresses(e)];
                                    case 1:
                                        return t = r.sent(), [2, Boolean(t && t[0])]
                                }
                            }))
                        }))
                    }, t.prototype.getTokenUri = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "getTokenUri"
                                })
                            }))
                        }))
                    }, t.prototype.getDomainFromTokenId = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "getDomainFromTokenId"
                                })
                            }))
                        }))
                    }, t.prototype.isAvailable = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.isRegistered(e)];
                                    case 1:
                                        return [2, !t.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.registryAddress = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                return [2, this.registryAddr]
                            }))
                        }))
                    }, t.prototype.locations = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r = this;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, Promise.all(e.map((function(e) {
                                            return r.getRecordsAddresses(e)
                                        })))];
                                    case 1:
                                        return t = n.sent(), [2, e.reduce((function(e, n, i) {
                                            var o, l = null,
                                                d = t[i];
                                            if (d) {
                                                var h = d[0],
                                                    f = d[1];
                                                l = {
                                                    registryAddress: r.registryAddr,
                                                    resolverAddress: f,
                                                    networkId: r.network,
                                                    blockchain: R.BlockchainType.ZIL,
                                                    ownerAddress: h,
                                                    blockchainProviderUrl: r.url
                                                }
                                            }
                                            return c(c({}, e), ((o = {})[n] = l, o))
                                        }), {})]
                                }
                            }))
                        }))
                    }, t.prototype.getRecordsAddresses = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n, o;
                            return v(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.isSupportedDomain(e)) throw new C.ResolutionError(C.ResolutionErrorCode.UnsupportedDomain, {
                                            domain: e
                                        });
                                        return [4, this.getContractMapValue(this.registryAddr, "records", this.namehash(e))];
                                    case 1:
                                        return (t = c.sent()) ? (r = t.arguments, n = r[0], o = r[1], [2, [n.startsWith("0x") ? (0, y.toBech32Address)(n) : n, o]]) : [2, void 0]
                                }
                            }))
                        }))
                    }, t.prototype.getResolverRecords = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return (0, m.isNullAddress)(e) ? [2, {}] : (t = (0, y.toChecksumAddress)(e), [4, this.getContractField(t, "records")]);
                                    case 1:
                                        return [2, r.sent() || {}]
                                }
                            }))
                        }))
                    }, t.prototype.fetchSubState = function(e, t, r) {
                        return void 0 === r && (r = []), f(this, void 0, void 0, (function() {
                            var n;
                            return v(this, (function(o) {
                                return n = [e.replace("0x", ""), t, r], "GetSmartContractSubState", [2, this.provider.request({
                                    method: "GetSmartContractSubState",
                                    params: n
                                })]
                            }))
                        }))
                    }, t.prototype.getContractField = function(e, t, r) {
                        return void 0 === r && (r = []), f(this, void 0, void 0, (function() {
                            var n;
                            return v(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return n = e.startsWith("zil1") ? (0, y.fromBech32Address)(e) : e, [4, this.fetchSubState(n, t, r)];
                                    case 1:
                                        return [2, (o.sent() || {})[t]]
                                }
                            }))
                        }))
                    }, t.prototype.getContractMapValue = function(e, t, r) {
                        return f(this, void 0, void 0, (function() {
                            var n;
                            return v(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.getContractField(e, t, [r])];
                                    case 1:
                                        return [2, (n = o.sent()) && n[r] || null]
                                }
                            }))
                        }))
                    }, t.prototype.checkDomain = function(e) {
                        var t = e.split(".");
                        return !!t.length && "zil" === t[t.length - 1] && t.every((function(e) {
                            return !!e.length
                        }))
                    }, t.prototype.checkNetworkConfig = function(source) {
                        if (!source.network) throw new A.default(A.ConfigurationErrorCode.UnsupportedNetwork, {
                            method: R.NamingServiceName.ZNS
                        });
                        k.ZnsSupportedNetwork.guard(source.network) || this.checkCustomNetworkConfig(source)
                    }, t.prototype.checkRegistryAddress = function(address) {
                        if (!new RegExp("^0x[a-fA-F0-9]{40}$|^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$").test(address)) throw new A.default(A.ConfigurationErrorCode.InvalidConfigurationField, {
                            method: this.name,
                            field: "registryAddress"
                        })
                    }, t.prototype.checkCustomNetworkConfig = function(source) {
                        if (!source.registryAddress) throw new A.default(A.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                            method: R.NamingServiceName.ZNS,
                            config: "registryAddress"
                        });
                        if (!source.url && !source.provider) throw new A.default(A.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                            method: R.NamingServiceName.ZNS,
                            config: "url or provider"
                        })
                    }, t.UrlMap = {
                        1: "https://api.zilliqa.com",
                        333: "https://dev-api.zilliqa.com",
                        111: "http://localhost:4201"
                    }, t.NetworkNameMap = {
                        mainnet: 1,
                        testnet: 333,
                        localnet: 111
                    }, t.RegistryMap = {
                        1: "zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz",
                        333: "zil1hyj6m5w4atcn7s806s69r0uh5g4t84e8gp6nps"
                    }, t
                }(E.NamingService);
            t.default = S
        },
        1479: function(e, t, r) {
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
                c = this && this.__assign || function() {
                    return c = Object.assign || function(e) {
                        for (var s, i = 1, t = arguments.length; i < t; i++)
                            for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                        return e
                    }, c.apply(this, arguments)
                },
                l = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
                d = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                h = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && l(t, e, r);
                    return d(t, e), t
                },
                f = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function l(e) {
                            try {
                                h(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
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
                            }))).then(l, d)
                        }
                        h((n = n.apply(e, t || [])).next())
                    }))
                },
                v = this && this.__generator || function(e, body) {
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
                w = this && this.__asyncValues || function(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var i, t = e[Symbol.asyncIterator];
                    return t ? t.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
                        return this
                    }, i);

                    function r(t) {
                        i[t] = e[t] && function(r) {
                            return new Promise((function(n, o) {
                                (function(e, t, r, n) {
                                    Promise.resolve(n).then((function(t) {
                                        e({
                                            value: t,
                                            done: r
                                        })
                                    }), t)
                                })(n, o, (r = e[t](r)).done, r.value)
                            }))
                        }
                    }
                },
                y = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                    return e.concat(n || Array.prototype.slice.call(t))
                },
                m = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var k = r(437),
                C = h(r(208)),
                R = r(269),
                _ = r(270),
                N = r(825),
                E = m(r(572)),
                A = r(309),
                S = r(573),
                U = h(r(310)),
                x = m(r(1494)),
                O = m(r(438)),
                D = m(r(1500)),
                M = function(e) {
                    function t(source) {
                        var t = e.call(this) || this;
                        if (t.name = _.NamingServiceName.UNS, source && source.locations && (!source.locations.Layer1 || !source.locations.Layer2)) throw new U.default(U.ConfigurationErrorCode.NetworkConfigMissing, {
                            method: _.NamingServiceName.UNS,
                            config: source.locations.Layer1 ? "Layer2" : "Layer1"
                        });
                        return source || (source = {
                            locations: {
                                Layer1: {
                                    url: x.default.UrlMap.mainnet,
                                    network: "mainnet"
                                },
                                Layer2: {
                                    url: x.default.UrlMap["polygon-mainnet"],
                                    network: "polygon-mainnet"
                                }
                            }
                        }), t.unsl1 = new x.default(_.UnsLocation.Layer1, source.locations.Layer1, _.BlockchainType.ETH), t.unsl2 = new x.default(_.UnsLocation.Layer2, source.locations.Layer2, _.BlockchainType.MATIC), t
                    }
                    return o(t, e), t.autoNetwork = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n, o, c, l;
                            return v(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        if ((0, k.hasProvider)(e.locations.Layer1) && (0, k.hasProvider)(e.locations.Layer2)) t = e.locations.Layer1.provider, r = e.locations.Layer2.provider;
                                        else {
                                            if (!e.locations.Layer1.url || !e.locations.Layer2.url) throw new U.default(U.ConfigurationErrorCode.UnspecifiedUrl, {
                                                method: _.NamingServiceName.UNS
                                            });
                                            t = E.default.factory(_.NamingServiceName.UNS, e.locations.Layer1.url), r = E.default.factory(_.NamingServiceName.UNS, e.locations.Layer2.url)
                                        }
                                        return [4, t.request({
                                            method: "net_version"
                                        })];
                                    case 1:
                                        return n = d.sent(), [4, r.request({
                                            method: "net_version"
                                        })];
                                    case 2:
                                        if (o = d.sent(), c = R.EthereumNetworksInverted[n], l = R.EthereumNetworksInverted[o], !(c && k.UnsSupportedNetwork.guard(c) && l && k.UnsSupportedNetwork.guard(l))) throw new U.default(U.ConfigurationErrorCode.UnsupportedNetwork, {
                                            method: _.NamingServiceName.UNS
                                        });
                                        return [2, new this({
                                            locations: {
                                                Layer1: {
                                                    network: c,
                                                    provider: t
                                                },
                                                Layer2: {
                                                    network: l,
                                                    provider: r
                                                }
                                            }
                                        })]
                                }
                            }))
                        }))
                    }, t.prototype.namehash = function(e) {
                        if (!this.checkDomain(e)) throw new C.default(C.ResolutionErrorCode.UnsupportedDomain, {
                            domain: e
                        });
                        return (0, A.eip137Namehash)(e)
                    }, t.prototype.childhash = function(e, label) {
                        return (0, A.eip137Childhash)(e, label)
                    }, t.prototype.isSupportedDomain = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n, o;
                            return v(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return this.checkDomain(e) && (t = e.split(".").pop()) ? [4, Promise.all([this.unsl1.exists(t), this.unsl2.exists(t)])] : [2, !1];
                                    case 1:
                                        return r = c.sent(), n = r[0], o = r[1], [2, n || o]
                                }
                            }))
                        }))
                    }, t.prototype.owner = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, data;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = this.namehash(e), [4, this.get(t, [])];
                                    case 1:
                                        if (data = r.sent(), (0, R.isNullAddress)(data.owner)) throw new C.default(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        return [2, data.owner]
                                }
                            }))
                        }))
                    }, t.prototype.resolver = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.getVerifiedData(e)];
                                    case 1:
                                        return [2, t.sent().resolver]
                                }
                            }))
                        }))
                    }, t.prototype.record = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var r;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.records(e, [t])];
                                    case 1:
                                        if (!(r = n.sent()[t])) throw new C.default(C.ResolutionErrorCode.RecordNotFound, {
                                            recordName: t,
                                            domain: e
                                        });
                                        return [2, r]
                                }
                            }))
                        }))
                    }, t.prototype.records = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getVerifiedData(e, t)];
                                    case 1:
                                        return [2, r.sent().records]
                                }
                            }))
                        }))
                    }, t.prototype.allRecords = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                return this.namehash(e), [2, this.records(e, y([], Object.keys(D.default.keys), !0))]
                            }))
                        }))
                    }, t.prototype.twitter = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, data, n, o, c, l, d;
                            return v(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        return t = this.namehash(e), r = ["validation.social.twitter.username", "social.twitter.username"], [4, this.getVerifiedData(e, r)];
                                    case 1:
                                        if (data = h.sent(), n = data.records, o = data.location, c = n["validation.social.twitter.username"], l = n["social.twitter.username"], (0, R.isNullAddress)(c)) throw new C.default(C.ResolutionErrorCode.RecordNotFound, {
                                            domain: e,
                                            location: o,
                                            recordName: "validation.social.twitter.username"
                                        });
                                        if (!l) throw new C.default(C.ResolutionErrorCode.RecordNotFound, {
                                            domain: e,
                                            location: o,
                                            recordName: "social.twitter.username"
                                        });
                                        if (d = data.owner, !(0, N.isValidTwitterSignature)({
                                                tokenId: t,
                                                owner: d,
                                                twitterHandle: l,
                                                validationSignature: c
                                            })) throw new C.default(C.ResolutionErrorCode.InvalidTwitterVerification, {
                                            domain: e
                                        });
                                        return [2, l]
                                }
                            }))
                        }))
                    }, t.prototype.reverse = function(address, e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(e) {
                                throw new C.default(C.ResolutionErrorCode.UnsupportedMethod, {
                                    methodName: "reverse"
                                })
                            }))
                        }))
                    }, t.prototype.isRegistered = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, data;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = this.namehash(e), [4, this.get(t, [])];
                                    case 1:
                                        return data = r.sent(), [2, !(0, R.isNullAddress)(data.owner)]
                                }
                            }))
                        }))
                    }, t.prototype.getTokenUri = function(e) {
                        var t, r;
                        return f(this, void 0, void 0, (function() {
                            var n, o, c, l, d, h = this;
                            return v(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        f.trys.push([0, 5, 6, 11]), n = w([(0, R.wrapResult)((function() {
                                            return h.unsl2.getTokenUri(e)
                                        })), (0, R.wrapResult)((function() {
                                            return h.unsl1.getTokenUri(e)
                                        }))]), f.label = 1;
                                    case 1:
                                        return [4, n.next()];
                                    case 2:
                                        if ((o = f.sent()).done) return [3, 4];
                                        if (c = o.value, l = (0, R.unwrapResult)(c)) return [2, l];
                                        f.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return d = f.sent(), t = {
                                            error: d
                                        }, [3, 11];
                                    case 6:
                                        return f.trys.push([6, , 9, 10]), o && !o.done && (r = n.return) ? [4, r.call(n)] : [3, 8];
                                    case 7:
                                        f.sent(), f.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (t) throw t.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        throw new C.default(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: "with tokenId ".concat(e)
                                        })
                                }
                            }))
                        }))
                    }, t.prototype.isAvailable = function(e) {
                        return f(this, void 0, void 0, (function() {
                            return v(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.isRegistered(e)];
                                    case 1:
                                        return [2, !t.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.registryAddress = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n;
                            return v(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([this.unsl1.registryAddress(e).catch((function(e) {
                                            return e
                                        })), this.unsl2.registryAddress(e).catch((function(e) {
                                            return e
                                        }))])];
                                    case 1:
                                        if (t = o.sent(), r = t[0], (n = t[1]) instanceof Error) ! function(e, t) {
                                            if (!(e instanceof C.default)) throw e;
                                            if (e.code === t) return !0;
                                            throw e
                                        }(n, C.ResolutionErrorCode.UnregisteredDomain);
                                        else if (!(0, R.isNullAddress)(n)) return [2, n];
                                        return [2, j(r)]
                                }
                            }))
                        }))
                    }, t.prototype.locations = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n, o;
                            return v(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, Promise.all([this.unsl1.locations(e), this.unsl2.locations(e)])];
                                    case 1:
                                        return t = l.sent(), r = t[0], n = t[1], o = Object.keys(n).filter((function(e) {
                                            return null != n[e]
                                        })).reduce((function(a, e) {
                                            var t;
                                            return c(c({}, a), ((t = {})[e] = n[e], t))
                                        }), {}), [2, c(c({}, r), o)]
                                }
                            }))
                        }))
                    }, t.prototype.reverseOf = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var r, n, o, c, l, d, h;
                            return v(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, Promise.all([this.unsl1.reverseOf(e).catch((function(e) {
                                            return e
                                        })), this.unsl2.reverseOf(e).catch((function(e) {
                                            return e
                                        }))])];
                                    case 1:
                                        return r = f.sent(), n = r[0], o = r[1], c = function() {
                                            return j(n), "0x00" !== n._hex ? (0, A.fromHexStringToDecimals)(n._hex) : null
                                        }, l = function() {
                                            return j(o), "0x00" !== o._hex ? (0, A.fromHexStringToDecimals)(o._hex) : null
                                        }, t === _.UnsLocation.Layer1 ? [2, c()] : t === _.UnsLocation.Layer2 ? [2, l()] : (d = c()) ? [2, d] : (h = l()) ? [2, h] : [2, null]
                                }
                            }))
                        }))
                    }, t.prototype.getDomainFromTokenId = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t;
                            return v(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getMetadata(e)];
                                    case 1:
                                        if (t = r.sent(), this.namehash(t.name) !== e) throw new C.default(C.ResolutionErrorCode.ServiceProviderError, {
                                            methodName: "unhash",
                                            domain: t.name,
                                            providerMessage: "Service provider returned an invalid domain name"
                                        });
                                        return [2, t.name]
                                }
                            }))
                        }))
                    }, t.prototype.getMetadata = function(e) {
                        return f(this, void 0, void 0, (function() {
                            var t, r, n;
                            return v(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.getTokenUri(e)];
                                    case 1:
                                        return t = o.sent(), [4, O.default.fetch(t, {}).catch((function(e) {
                                            throw new C.default(C.ResolutionErrorCode.MetadataEndpointError, {
                                                tokenUri: t || "undefined",
                                                errorMessage: e.message
                                            })
                                        }))];
                                    case 2:
                                        if (!(r = o.sent()).ok) throw new C.default(C.ResolutionErrorCode.MetadataEndpointError, {
                                            tokenUri: t || "undefined"
                                        });
                                        return [4, r.json()];
                                    case 3:
                                        if (!(n = o.sent()).name) throw new C.default(C.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: "with tokenId ".concat(e)
                                        });
                                        if (this.namehash(n.name) !== e) throw new C.default(C.ResolutionErrorCode.ServiceProviderError, {
                                            methodName: "unhash",
                                            domain: n.name,
                                            providerMessage: "Service provider returned an invalid domain name"
                                        });
                                        return [2, n]
                                }
                            }))
                        }))
                    }, t.prototype.getVerifiedData = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var r, data;
                            return v(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return r = this.namehash(e), [4, this.get(r, t)];
                                    case 1:
                                        if (data = n.sent(), (0, R.isNullAddress)(data.resolver)) {
                                            if ((0, R.isNullAddress)(data.owner)) throw new C.default(C.ResolutionErrorCode.UnregisteredDomain, {
                                                domain: e
                                            });
                                            throw new C.default(C.ResolutionErrorCode.UnspecifiedResolver, {
                                                location: data.location,
                                                domain: e
                                            })
                                        }
                                        return [2, data]
                                }
                            }))
                        }))
                    }, t.prototype.get = function(e, t) {
                        return void 0 === t && (t = []), f(this, void 0, void 0, (function() {
                            var r, n, o, c, l, d, h, f, w;
                            return v(this, (function(v) {
                                switch (v.label) {
                                    case 0:
                                        return [4, Promise.all([this.unsl1.get(e, t).catch((function(e) {
                                            return e
                                        })), this.unsl2.get(e, t).catch((function(e) {
                                            return e
                                        }))])];
                                    case 1:
                                        return r = v.sent(), n = r[0], j(o = r[1]), c = o.resolver, l = o.owner, d = o.records, (0, R.isNullAddress)(l) ? (j(n), h = n.resolver, f = n.owner, w = n.records, [2, {
                                            resolver: h,
                                            owner: f,
                                            records: (0, R.constructRecords)(t, w),
                                            location: _.UnsLocation.Layer1
                                        }]) : [2, {
                                            resolver: c,
                                            owner: l,
                                            records: (0, R.constructRecords)(t, d),
                                            location: _.UnsLocation.Layer2
                                        }]
                                }
                            }))
                        }))
                    }, t.prototype.checkDomain = function(e, t) {
                        if (void 0 === t && (t = !1), t) return !0;
                        var r = e.split(".");
                        return !!r.length && !("eth" === e || /^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(e)) && r.every((function(e) {
                            return !!e.length
                        }))
                    }, t
                }(S.NamingService);

            function j(e) {
                if (e instanceof Error) throw e;
                return e
            }
            t.default = M
        },
        1494: function(e, t, r) {
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
                                h(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function d(e) {
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
                            }))).then(l, d)
                        }
                        h((n = n.apply(e, t || [])).next())
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
                h = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length)
                        for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                    return e.concat(n || Array.prototype.slice.call(t))
                },
                f = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var v = r(437),
                w = f(r(310)),
                y = r(310),
                m = r(269),
                k = f(r(572)),
                C = f(r(1495)),
                R = f(r(1498)),
                _ = f(r(1499)),
                N = c(r(208)),
                E = r(309),
                A = function() {
                    function e(t, source, r) {
                        this.unsLocation = t, this.checkNetworkConfig(t, source), this.network = source.network, this.blockchain = r, this.url = source.url || e.UrlMap[this.network], this.provider = source.provider || new k.default(this.unsLocation, this.url), this.readerContract = new C.default(R.default, source.proxyReaderAddress || e.ProxyReaderMap[m.EthereumNetworks[this.network]], this.provider)
                    }
                    return e.prototype.exists = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.readerContract.call("exists", [this.namehash(e)])];
                                    case 1:
                                        return [2, t.sent()[0]]
                                }
                            }))
                        }))
                    }, e.prototype.reverseOf = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.readerContract.call("reverseOf", [e])];
                                    case 1:
                                        return [2, t.sent()[0]]
                                }
                            }))
                        }))
                    }, e.prototype.getTokenUri = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.readerContract.call("tokenURI", [e])];
                                    case 1:
                                        return [2, t.sent()[0]]
                                }
                            }))
                        }))
                    }, e.prototype.registryAddress = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t, r, address;
                            return d(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (t = !e.includes("."), !this.checkDomain(e, t)) throw new N.default(N.ResolutionErrorCode.UnsupportedDomain, {
                                            domain: e
                                        });
                                        return r = t ? e : this.namehash(e), [4, this.readerContract.call("registryOf", [r])];
                                    case 1:
                                        if (address = n.sent()[0], (0, m.isNullAddress)(address)) throw new N.default(N.ResolutionErrorCode.UnregisteredDomain, {
                                            domain: e
                                        });
                                        return [2, address]
                                }
                            }))
                        }))
                    }, e.prototype.resolver = function(e) {
                        return l(this, void 0, void 0, (function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.getVerifiedData(e)];
                                    case 1:
                                        return [2, t.sent().resolver]
                                }
                            }))
                        }))
                    }, e.prototype.get = function(e, t) {
                        return void 0 === t && (t = []), l(this, void 0, void 0, (function() {
                            var r, n, o, c;
                            return d(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        return [4, this.readerContract.call("getData", [t, e])];
                                    case 1:
                                        return r = l.sent(), n = r[0], o = r[1], c = r[2], [2, {
                                            owner: o,
                                            resolver: n,
                                            records: (0, m.constructRecords)(t, c),
                                            location: this.unsLocation
                                        }]
                                }
                            }))
                        }))
                    }, e.prototype.locations = function(e) {
                        return l(this, void 0, void 0, (function() {
                            var t, r, n, o, c, l, f = this;
                            return d(this, (function(d) {
                                switch (d.label) {
                                    case 0:
                                        return t = e.map((function(e) {
                                            return f.namehash(e)
                                        })), [4, this.readerContract.multicall(h([{
                                            method: "getDataForMany",
                                            args: [
                                                [], t
                                            ]
                                        }], t.map((function(e) {
                                            return {
                                                method: "registryOf",
                                                args: [e]
                                            }
                                        })), !0))];
                                    case 1:
                                        return r = d.sent(), n = r[0], o = n[0], c = n[1], l = r.slice(1), [2, e.reduce((function(e, t, i) {
                                            return e[t] = null, c && c[i] !== v.NullAddress && (e[t] = {
                                                resolverAddress: o[i],
                                                registryAddress: l[i][0],
                                                ownerAddress: c[i],
                                                networkId: m.EthereumNetworks[f.network],
                                                blockchain: f.blockchain,
                                                blockchainProviderUrl: f.url
                                            }), e
                                        }), {})]
                                }
                            }))
                        }))
                    }, e.prototype.namehash = function(e) {
                        if (!this.checkDomain(e)) throw new N.default(N.ResolutionErrorCode.UnsupportedDomain, {
                            domain: e
                        });
                        return (0, E.eip137Namehash)(e)
                    }, e.prototype.checkDomain = function(e, t) {
                        if (void 0 === t && (t = !1), t) return !0;
                        var r = e.split(".");
                        return !!r.length && !("eth" === e || /^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(e)) && r.every((function(e) {
                            return !!e.length
                        }))
                    }, e.prototype.getVerifiedData = function(e, t) {
                        return l(this, void 0, void 0, (function() {
                            var r, data;
                            return d(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return r = this.namehash(e), [4, this.get(r, t)];
                                    case 1:
                                        if (data = n.sent(), (0, m.isNullAddress)(data.resolver)) {
                                            if ((0, m.isNullAddress)(data.owner)) throw new N.default(N.ResolutionErrorCode.UnregisteredDomain, {
                                                domain: e
                                            });
                                            throw new N.default(N.ResolutionErrorCode.UnspecifiedResolver, {
                                                location: this.unsLocation,
                                                domain: e
                                            })
                                        }
                                        return [2, data]
                                }
                            }))
                        }))
                    }, e.prototype.checkNetworkConfig = function(e, source) {
                        if (!source.network) throw new w.default(y.ConfigurationErrorCode.UnsupportedNetwork, {
                            method: e
                        });
                        if (source.proxyReaderAddress && !this.isValidProxyReader(source.proxyReaderAddress)) throw new w.default(y.ConfigurationErrorCode.InvalidConfigurationField, {
                            method: this.unsLocation,
                            field: "proxyReaderAddress"
                        });
                        v.UnsSupportedNetwork.guard(source.network) || this.checkCustomNetworkConfig(source)
                    }, e.prototype.checkCustomNetworkConfig = function(source) {
                        if (!this.isValidProxyReader(source.proxyReaderAddress)) throw new w.default(y.ConfigurationErrorCode.InvalidConfigurationField, {
                            method: this.unsLocation,
                            field: "proxyReaderAddress"
                        });
                        if (!source.url && !source.provider) throw new w.default(y.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                            method: this.unsLocation,
                            config: "url or provider"
                        })
                    }, e.prototype.isValidProxyReader = function(address) {
                        if (!address) throw new w.default(y.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                            method: this.unsLocation,
                            config: "proxyReaderAddress"
                        });
                        return new RegExp("^0x[a-fA-F0-9]{40}$").test(address)
                    }, e.ProxyReaderMap = function() {
                        for (var map = {}, e = 0, t = Object.keys(_.default.networks); e < t.length; e++) {
                            var r = t[e];
                            map[r] = _.default.networks[r].contracts.ProxyReader.address.toLowerCase()
                        }
                        return map
                    }(), e.UrlMap = {
                        mainnet: "https://eth-mainnet.alchemyapi.io/v2/GmQ8X1FHf-WDEry0BBSn0RgjVhjHkRmS",
                        rinkeby: "https://eth-rinkeby.alchemyapi.io/v2/ZDERxOLIj120dh2-Io2Q9RTh9RfWEssT",
                        goerli: "https://eth-goerli.alchemyapi.io/v2/J-ff_OlmWzw41ocqwpkRccHdfqSZML4q",
                        "polygon-mainnet": "https://polygon-mainnet.g.alchemy.com/v2/iG-oHZ2FvjqC9D43O5q9sj62out5ubsy",
                        "polygon-mumbai": "https://polygon-mumbai.g.alchemy.com/v2/YtQwLH1UOmRGgQp_Rg1TXvFWSWeV5Y02"
                    }, e
                }();
            t.default = A
        }
    }
]);