(window.webpackJsonp = window.webpackJsonp || []).push([
    [59], {
        286: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n(485),
                o = n(397),
                c = {
                    goerli: {
                        ethereumNetwork: "goerli",
                        api: "https://goerli-api.zksync.io/api/v0.2/",
                        explorer: "https://goerli.zkscan.io/",
                        tools: {
                            forcedExit: "https://withdraw-goerli.zksync.dev/",
                            link: "https://checkout-goerli.zksync.io/",
                            withdrawal: "https://withdraw.zksync.io/",
                            mint: "https://mint-goerli.zksync.dev/"
                        }
                    },
                    "goerli-beta": {
                        ethereumNetwork: "goerli",
                        api: "https://goerli-beta-api.zksync.dev/api/v0.2/",
                        explorer: "https://goerli-beta-scan.zksync.dev/",
                        tools: {
                            forcedExit: "https://withdraw-goerli.zksync.dev/",
                            link: "https://checkout-goerli.zksync.io/",
                            withdrawal: "https://withdraw.zksync.io/",
                            mint: "https://mint-goerli.zksync.dev/"
                        }
                    },
                    mainnet: {
                        ethereumNetwork: "mainnet",
                        api: "https://api.zksync.io/api/v0.2/",
                        explorer: "https://zkscan.io/",
                        tools: {
                            forcedExit: "https://withdraw.zksync.dev/",
                            link: "https://checkout.zksync.io/",
                            withdrawal: "https://withdraw.zksync.io/",
                            mint: "https://mint.zksync.dev/"
                        }
                    }
                },
                l = function(e) {
                    return {
                        goerli: {
                            id: 5,
                            name: "goerli",
                            explorer: "https://goerli.etherscan.io/",
                            rpc_url: "https://goerli.infura.io/v3/".concat(e)
                        },
                        mainnet: {
                            id: 1,
                            name: "mainnet",
                            explorer: "https://etherscan.io/",
                            rpc_url: "https://mainnet.infura.io/v3/".concat(e)
                        }
                    }
                },
                d = function(e, t) {
                    var n = c[e],
                        d = l(t.apiKeys.INFURA_KEY)[n.ethereumNetwork];
                    return {
                        zkSyncLibVersion: r.a,
                        zkUIVersion: o.version,
                        zkSyncNetwork: n,
                        infuraAPIKey: t.apiKeys.INFURA_KEY,
                        ethereumNetwork: d
                    }
                }
        },
        335: function(e, t, n) {
            "use strict";

            function r() {
                return "dark" === localStorage.getItem("theme") || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            }

            function o(e) {
                document.documentElement.classList.remove("dark"), document.documentElement.classList.remove("light"), document.documentElement.classList.add(e)
            }

            function c(e) {
                localStorage.setItem("theme", e)
            }
            t.a = {
                getUserTheme: r,
                setTheme: o,
                toggleTheme: function() {
                    var e = "dark";
                    return "dark" === r() ? (o("light"), e = "light") : (o("dark"), e = "dark"), c(e), e
                },
                saveUserTheme: c
            }
        },
        387: function(e, t, n) {
            "use strict";
            var r, o, c = n(12),
                l = (n(86), n(300), n(94), n(75)),
                d = n.n(l),
                f = n(120),
                m = function(e) {
                    return {
                        network: e.network,
                        providerRequestingError: void 0,
                        forceUpdateValue: Number.MIN_SAFE_INTEGER
                    }
                },
                k = {
                    network: function(e) {
                        return e.network
                    },
                    providerRequestingError: function(e) {
                        return e.providerRequestingError
                    },
                    syncProvider: function(e) {
                        return e.forceUpdateValue, o
                    }
                },
                v = {
                    setNetwork: function(e, t) {
                        return e.network = t
                    },
                    setProviderRequestingError: function(e, t) {
                        return e.providerRequestingError = t
                    },
                    setSyncProvider: function(e, t) {
                        e.forceUpdateValue++, o = t
                    }
                },
                h = {
                    requestProvider: function(e) {
                        var t = arguments;
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var c, l, d, m;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return c = e.getters, l = e.commit, d = t.length > 1 && void 0 !== t[1] && t[1], n.prev = 2, o && !d || (r = Object(f.getDefaultRestProvider)(c.network)), n.next = 6, r;
                                    case 6:
                                        m = n.sent, l("setSyncProvider", m), l("setProviderRequestingError", void 0), n.next = 18;
                                        break;
                                    case 11:
                                        throw n.prev = 11, n.t0 = n.catch(2), r = void 0, l("setSyncProvider", void 0), l("setProviderRequestingError", n.t0), console.warn("Error requesting zkSync provider\n", n.t0), n.t0;
                                    case 18:
                                        return n.abrupt("return", o);
                                    case 19:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 11]
                            ])
                        })))()
                    },
                    changeNetwork: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.commit, o = e.dispatch, c = e.rootGetters, r("zk-onboard/setLoadingHint", "Switching networks...", {
                                            root: !0
                                        }), r("zk-onboard/setOnboardStatus", "connecting", {
                                            root: !0
                                        }), r("setNetwork", t), c["zk-onboard/options"].restoreNetwork && localStorage.setItem("lastSelectedNetwork", t), d.a.clear(), n.prev = 6, n.next = 9, o("requestProvider", !0);
                                    case 9:
                                        n.next = 15;
                                        break;
                                    case 11:
                                        return n.prev = 11, n.t0 = n.catch(6), c["zk-account/loggedIn"] && (console.log("Error requesting provider while changing the network. Logging the user out..."), o("zk-account/logout", null, {
                                            root: !0
                                        })), n.abrupt("return");
                                    case 15:
                                        if (r("zk-tokens/clear", null, {
                                                root: !0
                                            }), o("zk-tokens/loadZkTokens", !0, {
                                                root: !0
                                            }), !c["zk-account/loggedIn"]) {
                                            n.next = 29;
                                            break
                                        }
                                        return n.next = 20, o("zk-account/clearAccountData", null, {
                                            root: !0
                                        });
                                    case 20:
                                        if ("Argent" !== c["zk-onboard/selectedWallet"]) {
                                            n.next = 25;
                                            break
                                        }
                                        return n.next = 23, o("zk-onboard/loginWithWC1", void 0, {
                                            root: !0
                                        });
                                    case 23:
                                        n.next = 27;
                                        break;
                                    case 25:
                                        return n.next = 27, o("zk-onboard/loginWithOnboard", c["zk-onboard/selectedWallet"], {
                                            root: !0
                                        });
                                    case 27:
                                        n.next = 30;
                                        break;
                                    case 29:
                                        r("zk-onboard/setOnboardStatus", "initial", {
                                            root: !0
                                        });
                                    case 30:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [6, 11]
                            ])
                        })))()
                    }
                };
            t.a = function(e) {
                return {
                    namespaced: !0,
                    state: m(e),
                    getters: k,
                    mutations: v,
                    actions: h
                }
            }
        },
        388: function(e, t, n) {
            "use strict";
            var r, o = n(12),
                c = (n(86), n(300), n(94), n(165), n(179), n(75)),
                l = n.n(c),
                d = {},
                f = function(e) {
                    return {
                        zkTokens: void 0,
                        zkTokensLoading: !1,
                        tokenPrices: {},
                        forceUpdateVal: Number.MIN_SAFE_INTEGER
                    }
                },
                m = {
                    zkTokens: function(e) {
                        return e.zkTokens
                    },
                    zkTokensLoading: function(e) {
                        return e.zkTokensLoading
                    },
                    zkTokenByID: function(e) {
                        return function(t) {
                            if (e.zkTokens)
                                for (var symbol in e.zkTokens)
                                    if (e.zkTokens[symbol].id === t) return e.zkTokens[symbol]
                        }
                    },
                    tokenPrices: function(e) {
                        return e.tokenPrices
                    },
                    forceUpdateVal: function(e) {
                        return e.forceUpdateVal
                    }
                },
                k = {
                    setZkTokens: function(e, t) {
                        return e.zkTokens = t
                    },
                    setZkTokensLoading: function(e, t) {
                        return e.zkTokensLoading = t
                    },
                    setTokenPrice: function(e, t) {
                        var n = t.tokenSymbol,
                            r = t.price;
                        return e.tokenPrices[n] = r
                    },
                    forceUpdate: function(e) {
                        return e.forceUpdateVal++
                    },
                    clear: function(e) {
                        e.zkTokens = void 0, e.tokenPrices = {}
                    }
                },
                v = {
                    loadZkTokens: function(e) {
                        var t = arguments;
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var o, c, l, d, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.commit, c = e.getters, l = e.dispatch, d = t.length > 1 && void 0 !== t[1] && t[1], o("setZkTokensLoading", !0), n.prev = 3, r && !d) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.next = 7, l("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 7:
                                        r = n.sent.getTokens();
                                    case 8:
                                        return n.next = 10, r;
                                    case 10:
                                        f = n.sent, o("setZkTokens", f), n.next = 17;
                                        break;
                                    case 14:
                                        n.prev = 14, n.t0 = n.catch(3), console.warn("Error loading zkSync tokens\n", n.t0);
                                    case 17:
                                        return o("setZkTokensLoading", !1), n.abrupt("return", c.zkTokens);
                                    case 19:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 14]
                            ])
                        })))()
                    },
                    getTokenPrice: function(e, symbol) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, f, m;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, t.prev = 1, Object.prototype.hasOwnProperty.call(n.tokenPrices, symbol)) {
                                            t.next = 16;
                                            break
                                        }
                                        if (d[symbol]) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 6, o("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 6:
                                        c = t.sent, d[symbol] = c.getTokenPrice(symbol);
                                    case 8:
                                        return t.next = 10, d[symbol];
                                    case 10:
                                        return f = t.sent, r("setTokenPrice", {
                                            tokenSymbol: symbol,
                                            price: f
                                        }), r("forceUpdate"), l.a.set("tokenPrice-".concat(symbol), f, 36e5), delete d[symbol], t.abrupt("return", f);
                                    case 16:
                                        if (l.a.get("tokenPrice-".concat(symbol))) {
                                            t.next = 24;
                                            break
                                        }
                                        if (d[symbol]) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 20, o("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 20:
                                        m = t.sent, d[symbol] = m.getTokenPrice(symbol), d[symbol].then((function(e) {
                                            r("setTokenPrice", {
                                                tokenSymbol: symbol,
                                                price: e
                                            }), r("forceUpdate"), l.a.set("tokenPrice-".concat(symbol), e, 36e5), delete d[symbol]
                                        }));
                                    case 23:
                                        return t.abrupt("return", n.tokenPrices[symbol]);
                                    case 24:
                                        t.next = 30;
                                        break;
                                    case 26:
                                        t.prev = 26, t.t0 = t.catch(1), delete d[symbol], console.warn("Error getting token price for ".concat(symbol, "\n"), t.t0);
                                    case 30:
                                        return t.abrupt("return", 0);
                                    case 31:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 26]
                            ])
                        })))()
                    },
                    isTokenFeeAcceptable: function(e, symbol) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.dispatch, n.zkTokens && !n.zkTokensLoading) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, r("loadZkTokens");
                                    case 4:
                                        if ("ETH" !== symbol) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return", !0);
                                    case 6:
                                        return o = n.zkTokens, t.abrupt("return", !!Object.prototype.hasOwnProperty.call(o, symbol) && o[symbol].enabledForFees);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getNFT: function(e, t) {
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var r, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, n.prev = 1, n.next = 4, r("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 4:
                                        return o = n.sent, n.next = 7, o.getNFT(t);
                                    case 7:
                                        return n.abrupt("return", n.sent);
                                    case 10:
                                        return n.prev = 10, n.t0 = n.catch(1), n.t0 && n.t0.message && !n.t0.message.includes("operation is not verified yet") && console.warn("Error loading NFT token with ID ".concat(t, "\n"), n.t0), n.abrupt("return", !1);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 10]
                            ])
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: f,
                    getters: m,
                    mutations: k,
                    actions: v
                }
            }
        },
        389: function(e, t, n) {
            "use strict";
            var r, o = n(12),
                c = (n(86), n(93), n(300), n(94), n(78)),
                l = n(120),
                d = n(92),
                f = n(390);

            function m(address, e) {
                return "pubKeySignature-".concat(e, "-").concat(address)
            }
            var k = function(e) {
                    return {
                        cpk: !1,
                        isRemoteWallet: !1,
                        hasSigner: !1,
                        cpkSignState: !1,
                        cpkSignError: void 0,
                        forceUpdateValue: Number.MIN_SAFE_INTEGER
                    }
                },
                v = {
                    syncWallet: function(e) {
                        return e.forceUpdateValue, r
                    },
                    cpk: function(e) {
                        return e.cpk
                    },
                    isRemoteWallet: function(e) {
                        return e.isRemoteWallet
                    },
                    cpkSignState: function(e) {
                        return e.cpkSignState
                    },
                    cpkSignError: function(e) {
                        return e.cpkSignError
                    },
                    cpkStorageKey: function(e, t, n, r) {
                        return m(r["zk-account/address"], r["zk-provider/network"])
                    },
                    hasSigner: function(e) {
                        return e.hasSigner
                    },
                    forceUpdateValue: function(e) {
                        return e.forceUpdateValue
                    }
                },
                h = {
                    setSyncWallet: function(e, t) {
                        e.hasSigner = t.syncSignerConnected(), r = t, e.forceUpdateValue++
                    },
                    setCPK: function(e, t) {
                        return e.cpk = t
                    },
                    setRemoteWallet: function(e, t) {
                        return e.isRemoteWallet = t
                    },
                    setCPKSignState: function(e, t) {
                        return e.cpkSignState = t
                    },
                    setCPKSignError: function(e, t) {
                        return e.cpkSignError = t
                    },
                    clear: function(e) {
                        e.cpk = !1, e.isRemoteWallet = !1, e.hasSigner = !1, e.cpkSignState = !1, e.cpkSignError = void 0
                    }
                },
                w = {
                    checkCPK: function(e) {
                        var t = arguments;
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var o, c, l, d, f, m, k, v, h, w;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.getters, c = e.dispatch, l = e.commit, d = e.rootGetters, f = t.length > 1 && void 0 !== t[1] && t[1], "Argent" !== d["zk-onboard/selectedWallet"]) {
                                            n.next = 5;
                                            break
                                        }
                                        return l("setCPK", !0), n.abrupt("return", !0);
                                    case 5:
                                        if (d["zk-account/accountStateRequested"]) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.next = 8, c("zk-account/updateAccountState", null, {
                                            root: !0
                                        });
                                    case 8:
                                        if (!f) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 11, c("zk-account/updateAccountState", f, {
                                            root: !0
                                        });
                                    case 11:
                                        n.t0 = n.sent, n.next = 15;
                                        break;
                                    case 14:
                                        n.t0 = d["zk-account/accountState"];
                                    case 15:
                                        if (m = n.t0) {
                                            n.next = 19;
                                            break
                                        }
                                        return l("setCPK", !1), n.abrupt("return", !1);
                                    case 19:
                                        if (!r.syncSignerConnected()) {
                                            n.next = 33;
                                            break
                                        }
                                        if (!o.isRemoteWallet) {
                                            n.next = 26;
                                            break
                                        }
                                        return n.next = 23, r.syncSignerPubKeyHash();
                                    case 23:
                                        n.t1 = n.sent, n.next = 29;
                                        break;
                                    case 26:
                                        return n.next = 28, r.signer.pubKeyHash();
                                    case 28:
                                        n.t1 = n.sent;
                                    case 29:
                                        v = n.t1, k = m.committed.pubKeyHash === v, n.next = 34;
                                        break;
                                    case 33:
                                        k = "sync:0000000000000000000000000000000000000000" !== m.committed.pubKeyHash;
                                    case 34:
                                        if (!k) {
                                            n.next = 39;
                                            break
                                        }
                                        return l("setCPK", !0), n.abrupt("return", !0);
                                    case 39:
                                        if (!localStorage.getItem(o.cpkStorageKey)) {
                                            n.next = 66;
                                            break
                                        }
                                        n.prev = 40, h = JSON.parse(localStorage.getItem(o.cpkStorageKey)), n.next = 51;
                                        break;
                                    case 44:
                                        return n.prev = 44, n.t2 = n.catch(40), console.warn("Error parsing local storage cpk\n", n.t2), n.next = 49, c("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 49:
                                        return l("setCPK", !1), n.abrupt("return", !1);
                                    case 51:
                                        if (w = d["zk-account/accountState"], h.accountId === w.id) {
                                            n.next = 58;
                                            break
                                        }
                                        return console.warn("Wrong local CPK account id. Saved ".concat(h.accountId, "; current ").concat(w.id)), n.next = 56, c("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 56:
                                        return l("setCPK", !1), n.abrupt("return", !1);
                                    case 58:
                                        if (h.nonce === w.committed.nonce) {
                                            n.next = 64;
                                            break
                                        }
                                        return console.warn("Wrong local CPK account nonce. Saved ".concat(h.nonce, "; current ").concat(w.committed.nonce)), n.next = 62, c("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 62:
                                        return l("setCPK", !1), n.abrupt("return", !1);
                                    case 64:
                                        return l("setCPK", "signed"), n.abrupt("return", "signed");
                                    case 66:
                                        return l("setCPK", !1), n.abrupt("return", !1);
                                    case 68:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [40, 44]
                            ])
                        })))()
                    },
                    signCPK: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, o, c, f, m, k, v, h, w, y, x, T;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, o = e.dispatch, c = e.commit, f = e.rootGetters, t.prev = 1, t.next = 4, o("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 4:
                                        if (t.sent) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        return c("setCPKSignError", void 0), c("setCPKSignState", "processing"), t.next = 11, o("checkCPK", !0);
                                    case 11:
                                        if (!1 === n.cpk) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 13:
                                        return t.next = 15, o("zk-account/updateAccountState", !0, {
                                            root: !0
                                        });
                                    case 15:
                                        if ("number" == typeof(k = f["zk-account/accountState"]).id) {
                                            t.next = 18;
                                            break
                                        }
                                        throw new TypeError("It is required to have a history of committed balances on the account to activate it. If you have deposited funds wait a while until they become available");
                                    case 18:
                                        if (n.isRemoteWallet || "ERC-1271" !== (null === (m = r.ethSignerType) || void 0 === m ? void 0 : m.verificationMethod)) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.next = 21, r.isOnchainAuthSigningKeySet();
                                    case 21:
                                        if (t.sent) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.next = 25, r.onchainAuthSigningKey();
                                    case 25:
                                        return v = t.sent, t.next = 28, null == v ? void 0 : v.wait();
                                    case 28:
                                        if (!n.isRemoteWallet) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.next = 31, r.syncSignerPubKeyHash();
                                    case 31:
                                        t.t0 = t.sent, t.next = 37;
                                        break;
                                    case 34:
                                        return t.next = 36, r.signer.pubKeyHash();
                                    case 36:
                                        t.t0 = t.sent;
                                    case 37:
                                        return h = t.t0, w = l.utils.getChangePubkeyLegacyMessage(h, k.committed.nonce, k.id), c("setCPKSignState", "waitingForUserConfirmation"), t.next = 42, r.ethMessageSigner().getEthMessageSignature(w);
                                    case 42:
                                        return y = t.sent.signature, c("zk-transaction/setError", void 0, {
                                            root: !0
                                        }), c("setCPKSignState", "updating"), x = {
                                            accountId: k.id,
                                            account: r.address(),
                                            newPkHash: h,
                                            nonce: k.committed.nonce,
                                            ethSignature: y,
                                            validFrom: 0,
                                            validUntil: l.utils.MAX_TIMESTAMP
                                        }, t.next = 48, o("saveLocalCPK", x);
                                    case 48:
                                        return t.next = 50, o("checkCPK");
                                    case 50:
                                        t.next = 57;
                                        break;
                                    case 52:
                                        t.prev = 52, t.t1 = t.catch(1), console.warn("Error signing local CPK\n", t.t1), (T = Object(d.c)(t.t1)) && c("setCPKSignError", T);
                                    case 57:
                                        c("setCPKSignState", !1);
                                    case 58:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 52]
                            ])
                        })))()
                    },
                    saveLocalCPK: function(e, t) {
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var r, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r = e.commit, o = e.rootGetters, localStorage.setItem(m(o["zk-account/address"], o["zk-provider/network"]), JSON.stringify(t)), r("setCPK", "signed");
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    removeLocalCPK: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = e.getters, o = e.rootGetters, localStorage.removeItem(m(o["zk-account/address"], o["zk-provider/network"])), "signed" === r.cpk && n("setCPK", !1);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    requestSigner: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, d, f, m, k;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, r = e.dispatch, o = e.rootGetters, t.next = 3, r("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 3:
                                        if (t.sent) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        return t.next = 8, r("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 8:
                                        return d = t.sent, f = o["zk-onboard/ethereumProvider"], m = new c.ethers.providers.Web3Provider(f).getSigner(), t.next = 13, l.Wallet.fromEthSigner(m, d);
                                    case 13:
                                        return k = t.sent, n("setSyncWallet", k), t.next = 17, r("checkCPK");
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    openWalletApp: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((n = e.rootGetters)["zk-onboard/wcProvider"]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        r = n["zk-onboard/wcProvider"].uri, o = Object(d.f)(), t.t0 = o, t.next = "Android" === t.t0 ? 8 : "iOS" === t.t0 ? 10 : 13;
                                        break;
                                    case 8:
                                        return c = n["zk-account/loggedIn"] ? r.substr(0, r.indexOf("?bridge")) : r, t.abrupt("break", 13);
                                    case 10:
                                        return "Argent" === n["zk-onboard/selectedWallet"] ? c = "mainnet" === n["zk-provider/network"] ? "https://argent.link/app/wc" : "argent-dev://app/wc" : "MetaMask" === n["zk-onboard/selectedWallet"] && (c = "https://metamask.app.link/wc"), c && (c += "?uri=".concat(encodeURIComponent(r))), t.abrupt("break", 13);
                                    case 13:
                                        l = Object(f.a)({
                                            onIgnored: function() {
                                                l.destroy()
                                            },
                                            onFallback: function() {
                                                l.destroy()
                                            },
                                            onReturn: function() {
                                                l.destroy()
                                            }
                                        }), c && l.openURL(c);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: k,
                    getters: v,
                    mutations: h,
                    actions: w
                }
            }
        },
        390: function(e, t, n) {
            "use strict";
            n(164), n(19), n(65);
            t.a = function(e) {
                if (!e) throw new Error("no options");
                var t = !0,
                    n = !1;

                function r() {
                    t = !1
                }

                function o(e) {
                    "hidden" === e.target.visibilityState && (n = !0)
                }

                function c() {
                    n ? (e.onReturn && e.onReturn(), n = !1) : !t && e.onFallback && setTimeout((function() {
                        n || e.onFallback()
                    }), 1e3), t = !0
                }

                function l(e) {
                    [
                        [window, "blur", r],
                        [document, "visibilitychange", o],
                        [window, "focus", c]
                    ].forEach((function(t) {
                        t[0][e + "EventListener"](t[1], t[2])
                    }))
                }
                return l("add"), {
                    destroy: l.bind(null, "remove"),
                    openURL: function(n) {
                        setTimeout((function() {
                            t && e.onIgnored && e.onIgnored()
                        }), 500), window.location = n
                    }
                }
            }
        },
        391: function(e, t, n) {
            "use strict";
            var r = n(17),
                o = n(145),
                c = n(12),
                l = (n(86), n(93), n(411), n(106), n(553), n(71), n(64), n(63), n(19), n(108), n(65), n(109), n(75)),
                d = n.n(l),
                f = n(120);

            function m(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function k(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var v = function(e) {
                    return {}
                },
                h = {},
                w = {},
                y = {
                    getTransactionFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r, o, symbol, c, address, l, m, k, v, h;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, o = e.rootGetters, symbol = t.symbol, c = t.feeSymbol, address = t.address, l = t.type, m = t.force, n.next = 4, r("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 4:
                                        if (k = n.sent, v = "".concat(l, "-").concat(symbol, "-").concat(c, "-").concat(address), !d.a.get(v) || m) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("return", d.a.get(v));
                                    case 8:
                                        if (symbol !== c && c) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 11, k.getTransactionFee(l, address, symbol);
                                    case 11:
                                        h = n.sent.totalFee, n.next = 17;
                                        break;
                                    case 14:
                                        return n.next = 16, k.getTransactionsBatchFee([l, "Transfer"], [address, o["zk-account/address"]], c);
                                    case 16:
                                        h = n.sent;
                                    case 17:
                                        return h = Object(f.closestPackableTransactionFee)(h), d.a.set(v, h, 1e4), n.abrupt("return", h);
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getTransferBatchFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r, c, l, m, k, v, h, w;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, c = e.rootGetters, l = t.feeSymbol, m = t.batch, k = t.force, n.next = 4, r("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 4:
                                        if (v = n.sent, h = "TransferBatch-".concat(l, "-").concat(m.map((function(e) {
                                                return e.address.substr(1, 3) + "." + e.address.substr(e.address.length - 4, e.address.length)
                                            })).join("-"), "-").concat(m.map((function(e) {
                                                return e.token
                                            })).join("-")), !d.a.get(h) || k) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("return", d.a.get(h));
                                    case 8:
                                        return n.next = 10, v.getTransactionsBatchFee([].concat(Object(o.a)(new Array(m.length - 1).fill("Transfer")), ["Transfer"]), [].concat(Object(o.a)(m.map((function(e) {
                                            return e.address
                                        }))), [c["zk-account/loggedIn"] ? c["zk-account/address"] : m[0].address]), l);
                                    case 10:
                                        return w = n.sent, w = Object(f.closestPackableTransactionFee)(w), d.a.set(h, w, 1e4), n.abrupt("return", w);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getTransferFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, n.next = 3, r("getTransactionFee", k(k({}, t), {}, {
                                            type: "Transfer"
                                        }));
                                    case 3:
                                        return n.abrupt("return", n.sent);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getWithdrawFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, n.next = 3, r("getTransactionFee", k(k({}, t), {}, {
                                            type: "Withdraw"
                                        }));
                                    case 3:
                                        return n.abrupt("return", n.sent);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getMintNFTFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, n.next = 3, r("getTransactionFee", k(k({}, t), {}, {
                                            type: "MintNFT"
                                        }));
                                    case 3:
                                        return n.abrupt("return", n.sent);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getWithdrawNFTFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, n.next = 3, r("getTransactionFee", k(k({}, t), {}, {
                                            type: "WithdrawNFT"
                                        }));
                                    case 3:
                                        return n.abrupt("return", n.sent);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getAccountActivationFee: function(e, t) {
                        return Object(c.a)(regeneratorRuntime.mark((function n() {
                            var r, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, o = e.rootGetters, n.next = 3, r("getTransactionFee", k(k({}, t), {}, {
                                            symbol: t.feeSymbol,
                                            feeSymbol: t.feeSymbol,
                                            address: o["zk-account/address"],
                                            type: {
                                                ChangePubKey: {
                                                    onchainPubkeyAuth: !1
                                                }
                                            }
                                        }));
                                    case 3:
                                        return n.abrupt("return", n.sent);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: v,
                    getters: h,
                    mutations: w,
                    actions: y
                }
            }
        },
        392: function(e, t, n) {
            "use strict";
            n(64), n(63), n(108), n(65), n(109), n(95), n(57), n(128), n(41), n(118), n(129);
            var r = n(12),
                o = n(17),
                c = (n(86), n(300), n(94), n(19), n(163), n(68), n(165), n(179), n(106), n(71), n(101), n(93), n(10)),
                l = n(75),
                d = n.n(l),
                f = n(16),
                m = n(210),
                k = n(113);

            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function w(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function y(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? w(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var x = {},
                T = {},
                S = {},
                A = "ethereumBalanceLoaded-",
                O = "allowanceLoaded-",
                z = "allowanceLoaded-",
                R = function(e) {
                    return {
                        ethereumBalances: {},
                        ethereumBalanceLoadingAll: !1,
                        ethereumBalanceLoading: {},
                        ethereumBalancesRequested: !1,
                        tokensAllowance: {
                            ETH: k.ERC20_APPROVE_TRESHOLD
                        },
                        tokensAllowanceLoading: {},
                        tokensAllowanceForceUpdate: Number.MIN_SAFE_INTEGER,
                        pendingBalance: {},
                        pendingBalanceLoading: {}
                    }
                },
                j = {
                    ethereumBalances: function(e) {
                        return e.ethereumBalances
                    },
                    ethereumBalance: function(e) {
                        return function(symbol) {
                            return e.ethereumBalances[symbol]
                        }
                    },
                    ethereumBalanceLoadingAll: function(e) {
                        return e.ethereumBalanceLoadingAll
                    },
                    ethereumBalanceLoading: function(e) {
                        return e.ethereumBalanceLoading
                    },
                    ethereumBalancesRequested: function(e) {
                        return e.ethereumBalancesRequested
                    },
                    tokensAllowance: function(e) {
                        return e.tokensAllowance
                    },
                    tokenAllowance: function(e) {
                        return function(symbol) {
                            return e.tokensAllowance[symbol]
                        }
                    },
                    tokensAllowanceLoading: function(e) {
                        return e.tokensAllowanceLoading
                    },
                    tokensAllowanceForceUpdate: function(e) {
                        return e.tokensAllowanceForceUpdate
                    },
                    pendingBalances: function(e) {
                        return e.pendingBalance
                    },
                    pendingBalance: function(e) {
                        return function(symbol) {
                            return e.pendingBalance[symbol]
                        }
                    },
                    pendingBalancesLoading: function(e) {
                        return e.pendingBalanceLoading
                    },
                    pendingBalanceLoading: function(e) {
                        return function(symbol) {
                            return e.pendingBalance[symbol]
                        }
                    },
                    balances: function(e, t, n, r) {
                        if (!r["zk-account/accountState"]) return {};
                        var o = r["zk-account/accountState"],
                            c = {},
                            l = r["zk-tokens/zkTokens"];
                        for (var symbol in o.committed.balances) {
                            var d, f = o.committed.balances[symbol],
                                m = !!l[symbol] && l[symbol].enabledForFees;
                            "0" !== f.toString() && (f.toString() !== (null === (d = o.verified.balances[symbol]) || void 0 === d ? void 0 : d.toString()) ? c[symbol] = {
                                balance: f,
                                verified: !1,
                                feeAvailable: m
                            } : c[symbol] = {
                                balance: f,
                                verified: !0,
                                feeAvailable: m
                            })
                        }
                        return c
                    },
                    depositingBalances: function(e, t, n, r) {
                        var o = r["zk-account/accountState"];
                        return o ? o.depositing.balances : {}
                    },
                    nfts: function(e, t, n, r) {
                        var o = r["zk-account/accountState"];
                        if (!o) return {};
                        var c = {};
                        for (var l in o.committed.nfts) c[l] = y(y({}, o.committed.nfts[l]), {}, {
                            verified: Object.prototype.hasOwnProperty.call(o.verified.nfts, l)
                        });
                        return c
                    },
                    mintedNFTs: function(e, t, n, r) {
                        var o = r["zk-account/accountState"];
                        if (!o) return {};
                        var c = {};
                        for (var l in o.committed.mintedNfts) c[l] = y(y({}, o.committed.nfts[l]), {}, {
                            verified: Object.prototype.hasOwnProperty.call(o.verified.mintedNfts, l)
                        });
                        return c
                    }
                },
                F = {
                    setEthereumBalance: function(e, t) {
                        var symbol = t.symbol,
                            n = t.balance;
                        return c.a.set(e.ethereumBalances, symbol, n)
                    },
                    setEthereumBalanceLoadingAll: function(e, t) {
                        return e.ethereumBalanceLoadingAll = t
                    },
                    setEthereumBalanceLoading: function(e, t) {
                        var symbol = t.symbol,
                            n = t.status;
                        return c.a.set(e.ethereumBalanceLoading, symbol, n)
                    },
                    setEthereumBalancesRequested: function(e, t) {
                        return e.ethereumBalancesRequested = t
                    },
                    removeEthereumBalance: function(e, symbol) {
                        return delete e.ethereumBalances[symbol]
                    },
                    setAllowance: function(e, t) {
                        var symbol = t.symbol,
                            n = t.amount;
                        return c.a.set(e.tokensAllowance, symbol, n)
                    },
                    setAllowanceLoading: function(e, t) {
                        var symbol = t.symbol,
                            n = t.status;
                        return c.a.set(e.tokensAllowanceLoading, symbol, n)
                    },
                    removeAllowance: function(e, symbol) {
                        return delete e.tokensAllowance[symbol]
                    },
                    tokensAllowanceForceUpdate: function(e) {
                        return e.tokensAllowanceForceUpdate++
                    },
                    setPendingBalance: function(e, t) {
                        var symbol = t.symbol,
                            n = t.amount;
                        return c.a.set(e.pendingBalance, symbol, n)
                    },
                    removePendingBalance: function(e, symbol) {
                        return delete e.pendingBalance[symbol]
                    },
                    setPendingBalanceLoading: function(e, t) {
                        var symbol = t.symbol,
                            n = t.status;
                        return c.a.set(e.pendingBalanceLoading, symbol, n)
                    },
                    clear: function(e) {
                        var t, n = v(d.a.keys());
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                "string" == typeof r && (r.includes(A) || r.includes(O) || r.includes(z)) && d.a.del(r)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        e.ethereumBalances = {}, e.ethereumBalanceLoading = {}, e.ethereumBalancesRequested = !1, e.tokensAllowance = {
                            ETH: k.ERC20_APPROVE_TRESHOLD
                        }, e.tokensAllowanceLoading = {}, e.pendingBalance = {}, e.pendingBalanceLoading = {}, x = {}, T = {}, S = {}
                    }
                },
                E = {
                    requestEthereumBalance: function(e, t) {
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, m, symbol, k, v, h;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.commit, o = e.rootGetters, c = e.getters, l = t.force, m = void 0 !== l && l, symbol = t.symbol, o["zk-account/loggedIn"]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return", f.a.from("0"));
                                    case 4:
                                        if (k = "".concat(A).concat(symbol), !d.a.get(k) || m) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.abrupt("return", c.ethereumBalance(symbol));
                                    case 7:
                                        return v = o["zk-wallet/syncWallet"], r("setEthereumBalanceLoading", {
                                            symbol: symbol,
                                            status: !0
                                        }), n.prev = 9, x[symbol] && !m || (x[symbol] = v.getEthereumBalance(symbol)), n.next = 13, x[symbol];
                                    case 13:
                                        (h = n.sent).eq("0") ? r("removeEthereumBalance", symbol) : r("setEthereumBalance", {
                                            symbol: symbol,
                                            balance: h.toString()
                                        }), n.next = 21;
                                        break;
                                    case 17:
                                        n.prev = 17, n.t0 = n.catch(9), console.warn("Can't get L1 balance of ".concat(symbol), n.t0), r("removeEthereumBalance", symbol);
                                    case 21:
                                        return r("setEthereumBalanceLoading", {
                                            symbol: symbol,
                                            status: !1
                                        }), d.a.set(k, !0, 15e3), delete x[symbol], n.abrupt("return", c.ethereumBalance(symbol));
                                    case 25:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [9, 17]
                            ])
                        })))()
                    },
                    requestEthereumBalances: function(e) {
                        var t = arguments;
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f, m;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.commit, o = e.dispatch, c = e.rootGetters, l = e.getters, d = t.length > 1 && void 0 !== t[1] && t[1], c["zk-account/loggedIn"]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return", {});
                                    case 4:
                                        return r("setEthereumBalanceLoadingAll", !0), n.next = 7, o("zk-tokens/loadZkTokens", null, {
                                            root: !0
                                        });
                                    case 7:
                                        return f = n.sent, m = Object.keys(f).map((function(symbol) {
                                            return o("requestEthereumBalance", {
                                                force: d,
                                                symbol: symbol
                                            })
                                        })), n.next = 11, Promise.all(m).catch((function(e) {
                                            console.warn("Error requesting ethereum balances\n", e)
                                        }));
                                    case 11:
                                        return r("setEthereumBalanceLoadingAll", !1), r("setEthereumBalancesRequested", !0), n.abrupt("return", l.ethereumBalances);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    requestAllowance: function(e, t) {
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, v, symbol, h, w, y, x, S;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.commit, o = e.rootGetters, c = e.getters, l = t.force, v = void 0 !== l && l, symbol = t.symbol, o["zk-account/loggedIn"]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return", f.a.from("0"));
                                    case 4:
                                        if ("ETH" !== symbol) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return", k.ERC20_APPROVE_TRESHOLD);
                                    case 6:
                                        if (h = "".concat(O).concat(symbol), !d.a.get(h) || v) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.abrupt("return", c.tokenAllowance(symbol));
                                    case 9:
                                        return w = o["zk-wallet/syncWallet"], r("setAllowanceLoading", {
                                            symbol: symbol,
                                            status: !0
                                        }), r("tokensAllowanceForceUpdate"), n.prev = 12, T[symbol] || (y = w.provider.tokenSet.resolveTokenAddress(symbol), x = new m.b(y, k.IERC20_INTERFACE, w.ethSigner()), T[symbol] = x.allowance(o["zk-account/address"], w.provider.contractAddress.mainContract)), n.next = 16, T[symbol];
                                    case 16:
                                        S = n.sent, r("setAllowance", {
                                            symbol: symbol,
                                            amount: S
                                        }), n.next = 24;
                                        break;
                                    case 20:
                                        n.prev = 20, n.t0 = n.catch(12), console.warn("Can't get allowance of ".concat(symbol, "\n"), n.t0), r("removeAllowance", symbol);
                                    case 24:
                                        return r("setAllowanceLoading", {
                                            symbol: symbol,
                                            status: !1
                                        }), r("tokensAllowanceForceUpdate"), d.a.set(h, !0, 15e3), delete T[symbol], n.abrupt("return", c.tokenAllowance(symbol));
                                    case 29:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [12, 20]
                            ])
                        })))()
                    },
                    requestPendingBalance: function(e, t) {
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, m, v, symbol, h, w, y, x;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.commit, o = e.dispatch, c = e.rootGetters, l = e.getters, m = t.force, v = void 0 !== m && m, symbol = t.symbol, c["zk-account/loggedIn"]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return", f.a.from("0"));
                                    case 4:
                                        if (h = "".concat(z).concat(symbol), !d.a.get(h) || v) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.abrupt("return", l.pendingBalance(symbol));
                                    case 7:
                                        if (r("setPendingBalanceLoading", {
                                                symbol: symbol,
                                                status: !0
                                            }), n.prev = 8, S[symbol]) {
                                            n.next = 15;
                                            break
                                        }
                                        return n.next = 12, o("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 12:
                                        w = n.sent, y = c["zk-onboard/web3Provider"], S[symbol] = Object(k.getPendingBalance)(y, w, c["zk-account/address"], symbol);
                                    case 15:
                                        return n.next = 17, S[symbol];
                                    case 17:
                                        x = n.sent, r("setPendingBalance", {
                                            symbol: symbol,
                                            amount: x
                                        }), n.next = 25;
                                        break;
                                    case 21:
                                        n.prev = 21, n.t0 = n.catch(8), console.warn("Can't get pending balance of ".concat(symbol, " for ").concat(c["zk-account/address"], "\n"), n.t0), r("removePendingBalance", symbol);
                                    case 25:
                                        return r("setPendingBalanceLoading", {
                                            symbol: symbol,
                                            status: !1
                                        }), d.a.set(h, !0, 15e3), delete S[symbol], n.abrupt("return", l.pendingBalance(symbol));
                                    case 29:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [8, 21]
                            ])
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: R,
                    getters: j,
                    mutations: F,
                    actions: E
                }
            }
        },
        393: function(e, t, n) {
            "use strict";
            var r = n(12),
                o = n(145),
                c = (n(301), n(19), n(1166), n(101), n(1167), n(1168), n(1169), n(1170), n(1171), n(1172), n(1173), n(1174), n(1175), n(1176), n(1177), n(1178), n(1179), n(1180), n(1181), n(1182), n(68), n(106), n(93), n(86), n(75)),
                l = n.n(c),
                d = {},
                f = function(e) {
                    return {
                        transactionHistory: [],
                        transactionHistoryRequested: !1,
                        transactionHistoryLoading: !1,
                        transactionHistoryAllLoaded: !1,
                        withdrawalEthTxHashes: {}
                    }
                },
                m = {
                    transactionHistory: function(e) {
                        return e.transactionHistory
                    },
                    transactionHistoryRequested: function(e) {
                        return e.transactionHistoryRequested
                    },
                    transactionHistoryLoading: function(e) {
                        return e.transactionHistoryLoading
                    },
                    transactionHistoryAllLoaded: function(e) {
                        return e.transactionHistoryAllLoaded
                    },
                    withdrawalEthTxHashes: function(e) {
                        return e.withdrawalEthTxHashes
                    }
                },
                k = {
                    setTransactionHistory: function(e, t) {
                        return e.transactionHistory = t
                    },
                    setTransactionHistoryRequested: function(e, t) {
                        return e.transactionHistoryRequested = t
                    },
                    addTransactionsToHistory: function(e, t) {
                        var n;
                        return (n = e.transactionHistory).push.apply(n, Object(o.a)(t))
                    },
                    setTransactionHistoryLoading: function(e, t) {
                        return e.transactionHistoryLoading = t
                    },
                    setTransactionHistoryAllLoaded: function(e, t) {
                        return e.transactionHistoryAllLoaded = t
                    },
                    setWithdrawalEthTxHashes: function(e, t) {
                        return e.withdrawalEthTxHashes = t
                    },
                    setWithdrawalEthTxHash: function(e, t) {
                        var n = t.zkSyncTxHash,
                            r = t.withdrawalEthTxHash;
                        return e.withdrawalEthTxHashes[n] = r
                    },
                    clear: function(e) {
                        e.transactionHistory = [], e.transactionHistoryRequested = !1, e.transactionHistoryLoading = !1, e.transactionHistoryAllLoaded = !1, l.a.del("transactionHistoryRequested")
                    }
                },
                v = {
                    getTransactionHistory: function(e) {
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, d, f;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, !0 !== n.transactionHistoryLoading) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return r("setTransactionHistoryLoading", "main"), t.prev = 4, t.next = 7, o("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 7:
                                        return d = t.sent, t.next = 10, d.accountTxs(c["zk-account/address"], {
                                            from: "latest",
                                            limit: 20,
                                            direction: "older"
                                        });
                                    case 10:
                                        (f = t.sent).list.length < 20 && r("setTransactionHistoryAllLoaded", !0), r("setTransactionHistory", f.list), r("setTransactionHistoryRequested", !0), l.a.set("transactionHistoryRequested", !0, 15e3), t.next = 20;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t0 = t.catch(4), console.warn("Error getting transaction history\n", t.t0);
                                    case 20:
                                        r("setTransactionHistoryLoading", !1);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [4, 17]
                            ])
                        })))()
                    },
                    getPreviousTransactionHistory: function(e) {
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, d;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, 0 !== n.transactionHistory.length && !0 !== n.transactionHistoryLoading) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return r("setTransactionHistoryLoading", "previous"), t.prev = 4, t.next = 7, o("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 7:
                                        return l = t.sent, t.next = 10, l.accountTxs(c["zk-account/address"], {
                                            from: n.transactionHistory[n.transactionHistory.length - 1].txHash,
                                            limit: 21,
                                            direction: "older"
                                        });
                                    case 10:
                                        (d = t.sent).list.length < 21 && r("setTransactionHistoryAllLoaded", !0), r("addTransactionsToHistory", d.list.splice(1, d.list.length)), t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(4), console.warn("Error getting previous transaction history\n", t.t0);
                                    case 18:
                                        r("setTransactionHistoryLoading", !1);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [4, 15]
                            ])
                        })))()
                    },
                    getNewTransactionHistory: function(e) {
                        var t = arguments;
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, c, d, f, m, k, v, h, w, a;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, c = e.commit, d = e.dispatch, f = e.rootGetters, m = t.length > 1 && void 0 !== t[1] && t[1], !0 !== r.transactionHistoryLoading) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 4:
                                        if (l.a.get("transactionHistoryRequested") && !m) {
                                            n.next = 24;
                                            break
                                        }
                                        return c("setTransactionHistoryLoading", "new"), n.prev = 6, n.next = 9, d("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 9:
                                        return k = n.sent, n.next = 12, k.accountTxs(f["zk-account/address"], {
                                            from: "latest",
                                            limit: 20,
                                            direction: "older"
                                        });
                                    case 12:
                                        for (v = n.sent, h = new Set(v.list.map((function(e) {
                                                return e.txHash
                                            }))), w = JSON.parse(JSON.stringify(r.transactionHistory)), a = w.length - 1; a >= 0; a--) h.has(w[a].txHash) && w.splice(a, 1);
                                        c("setTransactionHistory", [].concat(Object(o.a)(v.list), Object(o.a)(w))), l.a.set("transactionHistoryRequested", !0, 15e3), n.next = 23;
                                        break;
                                    case 20:
                                        n.prev = 20, n.t0 = n.catch(6), console.warn("Error getting transaction history\n", n.t0);
                                    case 23:
                                        c("setTransactionHistoryLoading", !1);
                                    case 24:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [6, 20]
                            ])
                        })))()
                    },
                    getWithdrawalEthTxHash: function(e, t) {
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.commit, c = e.dispatch, !r.withdrawalEthTxHashes[t]) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return", r.withdrawalEthTxHashes[t]);
                                    case 3:
                                        return n.prev = 3, n.next = 6, c("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 6:
                                        return l = n.sent, d[t] || (d[t] = l.getEthTxForWithdrawal(t)), n.next = 10, d[t];
                                    case 10:
                                        return (f = n.sent) && o("setWithdrawalEthTxHash", {
                                            zkSyncTxHash: t,
                                            withdrawalEthTxHash: f
                                        }), delete d[t], n.abrupt("return", f);
                                    case 16:
                                        n.prev = 16, n.t0 = n.catch(3), delete d[t], console.warn("Error getting withdrawal ethereum tx\n", n.t0);
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 16]
                            ])
                        })))()
                    },
                    getFilteredTransactionHistory: function(e, t) {
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, address, d, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.dispatch, o = e.rootGetters, c = t.lastTxHash, l = t.token, address = t.address, n.prev = 2, n.next = 5, r("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 5:
                                        return d = n.sent, n.next = 8, d.accountTxs(o["zk-account/address"], {
                                            from: c || "latest",
                                            limit: 20,
                                            direction: "older"
                                        }, l, address);
                                    case 8:
                                        return f = n.sent, n.abrupt("return", {
                                            allLoaded: f.list.length < 20,
                                            transactions: c ? f.list.splice(1, f.list.length) : f.list,
                                            error: !1
                                        });
                                    case 12:
                                        n.prev = 12, n.t0 = n.catch(2), console.warn("Error getting filtered transaction history\n", n.t0);
                                    case 15:
                                        return n.abrupt("return", {
                                            transactions: [],
                                            allLoaded: !1,
                                            error: !0
                                        });
                                    case 16:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 12]
                            ])
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: f,
                    getters: m,
                    mutations: k,
                    actions: v
                }
            }
        },
        394: function(e, t, n) {
            "use strict";
            var r, o, c = n(51),
                l = n(12),
                d = (n(86), n(57), n(296), n(345), n(562), n(256), n(164), function(e) {
                    return {
                        loggedIn: !1,
                        address: void 0,
                        name: void 0,
                        accountState: void 0,
                        accountStateLoading: !1,
                        accountStateRequested: !1
                    }
                }),
                f = {
                    loggedIn: function(e) {
                        return e.loggedIn
                    },
                    address: function(e) {
                        return e.address
                    },
                    name: function(e) {
                        return e.name
                    },
                    accountState: function(e) {
                        return e.accountState
                    },
                    accountStateLoading: function(e) {
                        return e.accountStateLoading
                    },
                    accountStateRequested: function(e) {
                        return e.accountStateRequested
                    }
                },
                m = {
                    setLoggedIn: function(e, t) {
                        return e.loggedIn = t
                    },
                    setAddress: function(e, address) {
                        return e.address = address
                    },
                    setName: function(e, t) {
                        return e.name = t
                    },
                    setAccountState: function(e, t) {
                        return e.accountState = t
                    },
                    setAccountStateLoading: function(e, t) {
                        return e.accountStateLoading = t
                    },
                    setAccountStateRequested: function(e, t) {
                        return e.accountStateRequested = t
                    },
                    clear: function(e) {
                        e.loggedIn = !1, e.address = void 0, e.name = void 0, e.accountState = void 0, e.accountStateLoading = !1, e.accountStateRequested = !1, r = void 0, clearInterval(o)
                    }
                },
                k = {
                    setInitialName: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, r = e.commit, o = e.dispatch, t.next = 3, o("zk-contacts/getAddressName", n.address, {
                                            root: !0
                                        });
                                    case 3:
                                        (c = t.sent) && "string" == typeof c && c.length > 0 ? r("setName", c) : r("setName", n.address.substr(0, 5) + "..." + n.address.substr(n.address.length - 5, n.address.length - 1));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    saveAccountName: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.getters, o = e.commit, c = e.dispatch, n.next = 3, c("zk-contacts/setAddressName", {
                                            name: t,
                                            address: r.address
                                        }, {
                                            root: !0
                                        });
                                    case 3:
                                        n.sent ? o("setName", t.trim()) : c("setInitialName");
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    updateAccountState: function(e) {
                        var t = arguments;
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var o, l, d, f, m, k, v, h, w, y;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.getters, l = e.commit, d = e.dispatch, f = e.rootGetters, m = t.length > 1 && void 0 !== t[1] && t[1], f["zk-account/loggedIn"]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 4:
                                        return l("setAccountStateLoading", !0), n.prev = 5, k = f["zk-account/address"], v = f["zk-wallet/syncWallet"], r && !m || (r = v.getAccountState()), n.next = 11, r;
                                    case 11:
                                        return h = n.sent, w = JSON.parse(JSON.stringify(h)), n.next = 15, d("zk-tokens/loadZkTokens", null, {
                                            root: !0
                                        });
                                    case 15:
                                        y = n.sent, w.committed.balances = Object.fromEntries(Object.entries(h.committed.balances).sort((function(e, t) {
                                            var n, r, o = Object(c.a)(e, 1)[0],
                                                l = Object(c.a)(t, 1)[0];
                                            return (null === (n = y[o]) || void 0 === n ? void 0 : n.id) - (null === (r = y[l]) || void 0 === r ? void 0 : r.id)
                                        }))), f["zk-account/loggedIn"] && k === f["zk-account/address"] && (l("setAccountState", w), l("setAccountStateRequested", !0), !0 !== f["zk-wallet/cpk"] && d("zk-wallet/checkCPK", null, {
                                            root: !0
                                        })), n.next = 23;
                                        break;
                                    case 20:
                                        n.prev = 20, n.t0 = n.catch(5), console.warn("Error updating account state\n", n.t0);
                                    case 23:
                                        return r = void 0, l("setAccountStateLoading", !1), n.abrupt("return", o.accountState);
                                    case 26:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [5, 20]
                            ])
                        })))()
                    },
                    autoUpdateAccountState: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r = e.dispatch, clearInterval(o), o = setInterval((function() {
                                            r("updateAccountState")
                                        }), t);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    clearAccountData: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (n = e.commit)("clear"), n("zk-contacts/clear", null, {
                                            root: !0
                                        }), n("zk-wallet/clear", null, {
                                            root: !0
                                        }), n("zk-balances/clear", null, {
                                            root: !0
                                        }), n("zk-history/clear", null, {
                                            root: !0
                                        }), n("zk-transaction/clear", null, {
                                            root: !0
                                        });
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    logout: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, r = e.dispatch, n("clear"), n("zk-contacts/clear", null, {
                                            root: !0
                                        }), n("zk-wallet/clear", null, {
                                            root: !0
                                        }), n("zk-balances/clear", null, {
                                            root: !0
                                        }), n("zk-history/clear", null, {
                                            root: !0
                                        }), n("zk-transaction/clear", null, {
                                            root: !0
                                        }), n("zk-onboard/clear", null, {
                                            root: !0
                                        }), localStorage.removeItem("walletconnect"), t.next = 11, r("zk-onboard/reset", null, {
                                            root: !0
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: d,
                    getters: f,
                    mutations: m,
                    actions: k
                }
            }
        },
        395: function(e, t, n) {
            "use strict";
            n(64), n(108), n(65), n(109), n(95), n(57), n(128), n(41), n(118), n(129);
            var r, o = n(17),
                c = n(51),
                l = n(12),
                d = (n(86), n(1474), n(63), n(19), n(106), n(165), n(256), n(68), n(101), n(179), n(71), n(93), n(163), n(302), n(16)),
                f = n(210),
                m = n(120),
                k = n(92);

            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function w(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function y(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? w(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var x = function(e) {
                    return {
                        type: void 0,
                        address: void 0,
                        transferBatch: void 0,
                        symbol: void 0,
                        nftExists: !1,
                        nftExistsLoading: !1,
                        feeSymbol: void 0,
                        feeSymbolAutoSelected: !0,
                        fee: void 0,
                        accountActivationFee: void 0,
                        amount: void 0,
                        contentHash: void 0,
                        feeLoading: !1,
                        activationFeeLoading: !1,
                        activeTransaction: void 0,
                        error: void 0,
                        feeError: void 0,
                        feesChangeSaved: {},
                        feesChange: void 0
                    }
                },
                T = {
                    type: function(e) {
                        return e.type
                    },
                    address: function(e) {
                        return e.address
                    },
                    transferBatch: function(e) {
                        return e.transferBatch
                    },
                    symbol: function(e) {
                        return e.symbol
                    },
                    nftExists: function(e) {
                        return e.nftExists
                    },
                    nftExistsLoading: function(e) {
                        return e.nftExistsLoading
                    },
                    feeSymbol: function(e) {
                        return "string" != typeof e.symbol || e.feeSymbol ? e.feeSymbol : e.symbol
                    },
                    feeSymbolAutoSelected: function(e) {
                        return e.feeSymbolAutoSelected
                    },
                    realFeeSymbol: function(e) {
                        return e.feeSymbol
                    },
                    fee: function(e) {
                        return e.fee
                    },
                    accountActivationFee: function(e) {
                        return e.accountActivationFee
                    },
                    amount: function(e) {
                        return e.amount
                    },
                    contentHash: function(e) {
                        return e.contentHash
                    },
                    feeLoading: function(e) {
                        return e.feeLoading
                    },
                    activationFeeLoading: function(e) {
                        return e.activationFeeLoading
                    },
                    activeTransaction: function(e) {
                        return e.activeTransaction
                    },
                    error: function(e) {
                        return e.error
                    },
                    feeError: function(e) {
                        return e.feeError
                    },
                    feesChangeSaved: function(e) {
                        return e.feesChangeSaved
                    },
                    feesChange: function(e) {
                        return e.feesChange
                    },
                    transactionActionName: function(e) {
                        if (e.type) switch (e.type) {
                            case "Transfer":
                                return "Send on zkSync";
                            case "Deposit":
                                return "Top up";
                            case "Withdraw":
                                return "Send to Ethereum";
                            case "Mint":
                                return "Mint";
                            case "MintNFT":
                                return "Mint NFT";
                            case "TransferNFT":
                                return "Send NFT on zkSync";
                            case "WithdrawNFT":
                                return "Withdraw NFT to Ethereum";
                            case "CPK":
                                return "Activate account";
                            case "WithdrawPending":
                                return "Withdraw pending balance";
                            default:
                                return e.type
                        }
                    },
                    amountBigNumber: function(e, t, n, r) {
                        var o = r["zk-provider/syncProvider"];
                        if (e.symbol && o && e.amount) try {
                            return Object(k.i)(o, e.symbol, e.amount)
                        } catch (t) {
                            return console.warn("Error while parsing amount of ".concat(e.symbol, "\n"), t), d.a.from("0")
                        }
                    },
                    maxAmount: function(e, t, n, r) {
                        if (!e.symbol) return d.a.from("0");
                        if ("L1-Tokens" === t.mainToken) {
                            r["zk-balances/ethereumBalanceLoadingAll"];
                            var o = r["zk-balances/ethereumBalance"](e.symbol);
                            return o || d.a.from("0")
                        }
                        if ("PendingTokens" === t.mainToken) {
                            var c = r["zk-balances/pendingBalance"](e.symbol);
                            return c || d.a.from("0")
                        }
                        if ("L2-Tokens" === t.mainToken) {
                            var l, f = null === (l = r["zk-balances/balances"][e.symbol]) || void 0 === l ? void 0 : l.balance,
                                k = d.a.from(f || "0");
                            if (t.feeSymbol === e.symbol) {
                                var v = k.sub(t.totalFee);
                                return v.gte("0") ? Object(m.closestPackableTransactionAmount)(v) : d.a.from("0")
                            }
                            return Object(m.closestPackableTransactionAmount)(k)
                        }
                        return d.a.from("0")
                    },
                    mainToken: function(e) {
                        switch (e.type) {
                            case "Deposit":
                            case "Allowance":
                            case "Mint":
                                return "L1-Tokens";
                            case "WithdrawPending":
                                return "PendingTokens";
                            case "MintNFT":
                                return !1;
                            case "TransferNFT":
                            case "WithdrawNFT":
                                return "L2-NFT";
                            default:
                                return "L2-Tokens"
                        }
                    },
                    allowCustomFeeToken: function(e, t) {
                        return "L1-Tokens" !== t.mainToken && "PendingTokens" !== t.mainToken
                    },
                    fees: function(e, t, n, r) {
                        if ("L1-Tokens" === t.mainToken || "PendingTokens" === t.mainToken) return [];
                        var o = [{
                            key: "txFee",
                            amount: e.fee
                        }];
                        return !0 !== r["zk-wallet/cpk"] && o.push({
                            key: "accountActivation",
                            amount: e.accountActivationFee
                        }), o.filter((function(e) {
                            var t = e.amount;
                            return d.a.isBigNumber(t)
                        }))
                    },
                    totalFee: function(e, t) {
                        return t.fees.length > 0 ? t.fees.map((function(e) {
                            return e.amount
                        })).filter((function(e) {
                            return d.a.isBigNumber(e)
                        })).reduce((function(e, t) {
                            return e.add(t)
                        })) : d.a.from("0")
                    },
                    enoughBalanceToPayFee: function(e, t, n, r) {
                        if ("L1-Tokens" === t.mainToken || "PendingTokens" === t.mainToken) return !0;
                        if (!t.feeSymbol || !t.totalFee) return !1;
                        var o = r["zk-balances/balances"][t.feeSymbol];
                        return !!o && t.totalFee.lte(o.balance)
                    },
                    enoughAllowance: function(e, t, n, r) {
                        if ("Deposit" === e.type && e.symbol) {
                            r["zk-balances/tokensAllowanceForceUpdate"];
                            var o = r["zk-balances/tokenAllowance"](e.symbol);
                            return !!o && o.gte(t.amountBigNumber || "0")
                        }
                        return !0
                    },
                    availableAmount: function(e, t, n, r) {
                        var o = d.a.from("0");
                        if (!e.symbol) return o;
                        var c = r["zk-balances/balances"][e.symbol];
                        return c ? e.symbol === t.feeSymbol ? d.a.from(c.balance).sub(e.fee || "0") : d.a.from(c.balance) : o
                    },
                    commitAllowed: function(e, t, n, r) {
                        var o = !0 === r["zk-wallet/cpk"] || Boolean(!e.activationFeeLoading && e.accountActivationFee),
                            c = Boolean(!e.feeLoading && e.fee && t.enoughBalanceToPayFee),
                            l = !!t.amountBigNumber && t.amountBigNumber.gt("0");
                        switch (e.type) {
                            case "Deposit":
                                return Boolean(e.address && e.symbol && l && t.enoughAllowance && !r["zk-balances/tokensAllowanceLoading"][e.symbol]);
                            case "Mint":
                            case "WithdrawPending":
                                return Boolean(e.symbol && l && !r["zk-balances/pendingBalancesLoading"][e.symbol]);
                            case "Allowance":
                                return Boolean(e.symbol);
                            case "MintNFT":
                                return Boolean(e.address && t.feeSymbol && e.contentHash && c && o);
                            case "WithdrawNFT":
                            case "TransferNFT":
                                return Boolean(e.address && t.feeSymbol && e.symbol && e.nftExists && !e.nftExistsLoading && c && o);
                            case "CPK":
                                return Boolean(t.feeSymbol && !e.activationFeeLoading && e.accountActivationFee);
                            case "TransferBatch":
                                return Boolean(t.feeSymbol && c && o);
                            default:
                                return Boolean(e.address && t.feeSymbol && e.symbol && l && c && o)
                        }
                    },
                    requiredFees: function(e, t, n, r) {
                        if ("L2-Tokens" === t.mainToken || "L2-NFT" === t.mainToken || "MintNFT" === t.type) {
                            var o = [];
                            return "CPK" !== t.type && o.push("txFee"), !0 === r["zk-wallet/cpk"] && "CPK" !== t.type || o.push("accountActivation"), o
                        }
                        return []
                    }
                },
                S = {
                    setType: function(e, t) {
                        return e.type = t
                    },
                    setAddress: function(e, address) {
                        return e.address = address
                    },
                    setTransferBatch: function(e, t) {
                        return e.transferBatch = t
                    },
                    setSymbol: function(e, symbol) {
                        return e.symbol = symbol
                    },
                    setNFTExists: function(e, t) {
                        return e.nftExists = t
                    },
                    setNFTExistsLoading: function(e, t) {
                        return e.nftExistsLoading = t
                    },
                    setFeeSymbol: function(e, t) {
                        return e.feeSymbol = t
                    },
                    setFeeSymbolAutoSelected: function(e, t) {
                        return e.feeSymbolAutoSelected = t
                    },
                    setFee: function(e, t) {
                        return e.fee = t
                    },
                    setAccountActivationFee: function(e, t) {
                        return e.accountActivationFee = t
                    },
                    setAmount: function(e, t) {
                        return e.amount = t
                    },
                    setContentHash: function(e, t) {
                        return e.contentHash = t
                    },
                    setFeeLoading: function(e, t) {
                        return e.feeLoading = t
                    },
                    setActivationFeeLoading: function(e, t) {
                        return e.activationFeeLoading = t
                    },
                    setError: function(e, t) {
                        return e.error = t
                    },
                    setFeeError: function(e, t) {
                        return e.feeError = t
                    },
                    setFeesChangeSaved: function(e, t) {
                        return e.feesChangeSaved = t
                    },
                    setFeesChange: function(e, t) {
                        return e.feesChange = t
                    },
                    clearActiveTransaction: function(e) {
                        return e.activeTransaction = void 0
                    },
                    setNewActiveTransaction: function(e, t) {
                        e.activeTransaction = {
                            type: t,
                            step: "initial"
                        }, e.error = void 0
                    },
                    setActiveTransactionStep: function(e, t) {
                        return e.activeTransaction.step = t
                    },
                    setActiveTransactionTxHash: function(e, t) {
                        return e.activeTransaction.txHash = t
                    },
                    setActiveTransactionAddress: function(e, address) {
                        return e.activeTransaction.address = address
                    },
                    setActiveTransactionData: function(e, data) {
                        return e.activeTransaction.data = data
                    },
                    setActiveTransactionAmountToken: function(e, t) {
                        var n = t.amount,
                            r = t.token;
                        e.activeTransaction.amount = n, e.activeTransaction.token = r
                    },
                    setActiveTransactionFeeAmountToken: function(e, t) {
                        var n = t.amount,
                            r = t.token;
                        e.activeTransaction.fee = n, e.activeTransaction.feeToken = r
                    },
                    clear: function(e) {
                        e.type = void 0, e.address = void 0, e.transferBatch = void 0, e.symbol = void 0, e.nftExists = !1, e.nftExistsLoading = !1, e.feeSymbol = void 0, e.feeSymbolAutoSelected = !0, e.fee = void 0, e.accountActivationFee = void 0, e.amount = void 0, e.contentHash = void 0, e.feeLoading = !1, e.activationFeeLoading = !1, e.activeTransaction = void 0, e.error = void 0, e.feesChangeSaved = {}, e.feesChange = void 0, r = void 0
                    }
                },
                A = {
                    setType: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.commit, o = e.dispatch, c = e.getters, l = e.rootGetters, r("clearActiveTransaction"), r("setError", void 0), r("setFee", void 0), r("setAccountActivationFee", void 0), r("setFeeError", void 0), r("setType", t), !t) {
                                            n.next = 16;
                                            break
                                        }
                                        if (["Deposit", "Mint", "Withdraw", "WithdrawNFT", "MintNFT"].includes(t) ? r("setAddress", l["zk-account/address"]) : r("setAddress", void 0), void 0 !== c.symbol && ("L2-NFT" === c.mainToken && "number" != typeof c.symbol ? r("setSymbol", void 0) : "L1-Tokens" !== c.mainToken && "PendingTokens" !== c.mainToken && "L2-Tokens" !== c.mainToken || "string" == typeof c.symbol ? "Mint" === c.type ? r("setSymbol", void 0) : o("setSymbol", c.symbol) : r("setSymbol", void 0)), f = l["zk-balances/balances"], "MintNFT" !== t && "CPK" !== t && "L2-NFT" !== c.mainToken || c.feeSymbol && null !== (d = f[c.feeSymbol]) && void 0 !== d && d.feeAvailable) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 14, o("setRandomAcceptableFeeSymbol");
                                    case 14:
                                        return n.next = 16, o("requestAllFees");
                                    case 16:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    setAddress: function(e, address) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, r = e.dispatch, n("setAddress", address), t.next = 4, r("requestFee");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    setSymbol: function(e, symbol) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, r("setFee", void 0), r("setAccountActivationFee", void 0), r("setError", void 0), "string" == typeof symbol ? "L1-Tokens" === n.mainToken && (c["zk-balances/ethereumBalance"](symbol) || "Mint" === n.type || (symbol = void 0)) : "number" == typeof symbol && "L2-NFT" === n.mainToken && (c["zk-balances/nfts"][symbol] || (symbol = void 0)), r("setSymbol", symbol), n.feeSymbolAutoSelected && r("setFeeSymbol", void 0), !symbol || "Deposit" !== n.type && "Allowance" !== n.type) {
                                            t.next = 11;
                                            break
                                        }
                                        o("zk-balances/requestAllowance", {
                                            symbol: symbol
                                        }, {
                                            root: !0
                                        }), t.next = 23;
                                        break;
                                    case 11:
                                        if (!symbol || "WithdrawPending" !== n.type) {
                                            t.next = 15;
                                            break
                                        }
                                        o("zk-balances/requestPendingBalance", {
                                            symbol: symbol
                                        }, {
                                            root: !0
                                        }), t.next = 23;
                                        break;
                                    case 15:
                                        if (!symbol) {
                                            t.next = 23;
                                            break
                                        }
                                        if (n.realFeeSymbol) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 19, o("zk-tokens/isTokenFeeAcceptable", symbol, {
                                            root: !0
                                        });
                                    case 19:
                                        if (t.sent) {
                                            t.next = 23;
                                            break
                                        }
                                        return t.next = 23, o("setRandomAcceptableFeeSymbol");
                                    case 23:
                                        o("checkNFTSymbol"), o("requestAllFees");
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    setFeeSymbol: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.commit, o = e.dispatch, r("setFeeSymbolAutoSelected", !1), r("setFeeSymbol", t), n.next = 5, o("requestAllFees");
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    fillEmptySymbol: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, l, f, m, k;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.dispatch, r = e.getters, o = e.rootGetters, !r.symbol) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        if ("L2-Tokens" !== r.mainToken) {
                                            t.next = 14;
                                            break
                                        }
                                        if (o["zk-account/accountStateRequested"]) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 7, n("zk-account/updateAccountState", null, {
                                            root: !0
                                        });
                                    case 7:
                                        if (!r.symbol) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 9:
                                        l = o["zk-balances/balances"], (f = Object.entries(l).filter((function(e) {
                                            var t = Object(c.a)(e, 2),
                                                n = (t[0], t[1]);
                                            return d.a.from(n.balance).gt("0")
                                        })).map((function(e) {
                                            return Object(c.a)(e, 1)[0]
                                        }))).length > 0 && n("setSymbol", f[0]), t.next = 23;
                                        break;
                                    case 14:
                                        if ("L1-Tokens" !== r.mainToken || "Mint" === r.type) {
                                            t.next = 23;
                                            break
                                        }
                                        if (o["zk-balances/ethereumBalancesRequested"]) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.next = 18, n("zk-balances/requestEthereumBalances", null, {
                                            root: !0
                                        });
                                    case 18:
                                        if (!r.symbol) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 20:
                                        m = o["zk-balances/ethereumBalances"], (k = Object.entries(m).filter((function(e) {
                                            var t = Object(c.a)(e, 2),
                                                n = (t[0], t[1]);
                                            return d.a.from(n).gt("0")
                                        })).map((function(e) {
                                            return Object(c.a)(e, 1)[0]
                                        }))).length > 0 && n("setSymbol", k[0]);
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    setRandomAcceptableFeeSymbol: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, symbol;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.commit, r = e.dispatch, (o = e.rootGetters)["zk-account/accountStateRequested"] && !o["zk-account/accountStateLoading"]) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4, r("zk-account/updateAccountState", null, {
                                            root: !0
                                        });
                                    case 4:
                                        c = o["zk-balances/balances"], t.t0 = regeneratorRuntime.keys(c);
                                    case 6:
                                        if ((t.t1 = t.t0()).done) {
                                            t.next = 14;
                                            break
                                        }
                                        if (symbol = t.t1.value, !c[symbol].feeAvailable) {
                                            t.next = 12;
                                            break
                                        }
                                        return n("setFeeSymbol", symbol), n("setFeeSymbolAutoSelected", !0), t.abrupt("break", 14);
                                    case 12:
                                        t.next = 6;
                                        break;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    checkNFTSymbol: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, r("setNFTExists", !1), "number" == typeof n.symbol && "L2-NFT" === n.mainToken) {
                                            t.next = 5;
                                            break
                                        }
                                        return r("setNFTExistsLoading", !1), t.abrupt("return");
                                    case 5:
                                        return r("setNFTExistsLoading", !0), c = n.symbol, t.next = 9, o("zk-tokens/getNFT", c, {
                                            root: !0
                                        });
                                    case 9:
                                        if (l = t.sent, c === n.symbol) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        r("setNFTExists", !!l), r("setNFTExistsLoading", !1);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    requestFee: function(e) {
                        var t = arguments;
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.commit, c = e.dispatch, l = t.length > 1 && void 0 !== t[1] && t[1], o("setFee", void 0), o("setFeeError", void 0), r.feeSymbol && "L1-Tokens" !== r.mainToken && "PendingTokens" !== r.mainToken) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 6:
                                        return o("setFeeLoading", !0), n.next = 9, c("zk-tokens/isTokenFeeAcceptable", r.feeSymbol, {
                                            root: !0
                                        });
                                    case 9:
                                        if (n.sent) {
                                            n.next = 14;
                                            break
                                        }
                                        return console.warn("".concat(r.feeSymbol, " is not acceptable for paying fees (at transaction/requestFee)")), o("setFeeLoading", !1), n.abrupt("return");
                                    case 14:
                                        if (d = {
                                                address: r.address,
                                                symbol: r.symbol,
                                                feeSymbol: r.feeSymbol,
                                                force: l
                                            }, r.address || "TransferBatch" === r.type) {
                                            n.next = 18;
                                            break
                                        }
                                        return o("setFeeLoading", !1), n.abrupt("return");
                                    case 18:
                                        n.prev = 18, n.t0 = r.type, n.next = "Transfer" === n.t0 || "TransferNFT" === n.t0 ? 22 : "TransferBatch" === n.t0 ? 26 : "Withdraw" === n.t0 ? 30 : "MintNFT" === n.t0 ? 34 : "WithdrawNFT" === n.t0 ? 38 : "Deposit" === n.t0 || "Allowance" === n.t0 || "Mint" === n.t0 || "WithdrawPending" === n.t0 ? 42 : 43;
                                        break;
                                    case 22:
                                        return n.next = 24, c("zk-fees/getTransferFee", d, {
                                            root: !0
                                        });
                                    case 24:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 26:
                                        return n.next = 28, c("zk-fees/getTransferBatchFee", {
                                            force: l,
                                            feeSymbol: d.feeSymbol,
                                            batch: r.transferBatch
                                        }, {
                                            root: !0
                                        });
                                    case 28:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 30:
                                        return n.next = 32, c("zk-fees/getWithdrawFee", d, {
                                            root: !0
                                        });
                                    case 32:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 34:
                                        return n.next = 36, c("zk-fees/getMintNFTFee", d, {
                                            root: !0
                                        });
                                    case 36:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 38:
                                        return n.next = 40, c("zk-fees/getWithdrawNFTFee", d, {
                                            root: !0
                                        });
                                    case 40:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 42:
                                        return n.abrupt("break", 47);
                                    case 43:
                                        return n.next = 45, c("zk-fees/getTransactionFee", y(y({}, d), {}, {
                                            type: r.type
                                        }), {
                                            root: !0
                                        });
                                    case 45:
                                        return f = n.sent, n.abrupt("break", 47);
                                    case 47:
                                        o("setFee", f), n.next = 53;
                                        break;
                                    case 50:
                                        n.prev = 50, n.t1 = n.catch(18), o("setFeeError", "Requesting fee error".concat(n.t1 && n.t1.message ? ": " + n.t1.message : ""));
                                    case 53:
                                        return o("setFeeLoading", !1), n.abrupt("return", r.fee);
                                    case 55:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [18, 50]
                            ])
                        })))()
                    },
                    requestAccountActivationFee: function(e) {
                        var t = arguments;
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f, m;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.commit, c = e.dispatch, l = e.rootGetters, d = t.length > 1 && void 0 !== t[1] && t[1], o("setAccountActivationFee", void 0), o("setFeeError", void 0), l["zk-account/loggedIn"]) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 6:
                                        if (!0 !== l["zk-wallet/cpk"]) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 8:
                                        if (r.feeSymbol && "L1-Tokens" !== r.mainToken && "PendingTokens" !== r.mainToken) {
                                            n.next = 10;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 10:
                                        return o("setActivationFeeLoading", !0), n.next = 13, c("zk-tokens/isTokenFeeAcceptable", r.feeSymbol, {
                                            root: !0
                                        });
                                    case 13:
                                        if (n.sent) {
                                            n.next = 18;
                                            break
                                        }
                                        return console.warn("".concat(r.feeSymbol, " is not acceptable for paying fees (at transaction/requestAccountActivationFee)")), o("setActivationFeeLoading", !1), n.abrupt("return");
                                    case 18:
                                        return f = {
                                            address: r.address,
                                            symbol: r.symbol,
                                            feeSymbol: r.feeSymbol,
                                            force: d
                                        }, n.prev = 19, n.next = 22, c("zk-fees/getAccountActivationFee", f, {
                                            root: !0
                                        });
                                    case 22:
                                        m = n.sent, o("setAccountActivationFee", m), n.next = 29;
                                        break;
                                    case 26:
                                        n.prev = 26, n.t0 = n.catch(19), o("setFeeError", "Requesting fee error".concat(n.t0 && n.t0.message ? ": " + n.t0.message : ""));
                                    case 29:
                                        return o("setActivationFeeLoading", !1), n.abrupt("return", r.accountActivation);
                                    case 31:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [19, 26]
                            ])
                        })))()
                    },
                    requestAllFees: function(e) {
                        var t = arguments;
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.getters, o = e.dispatch, c = t.length > 1 && void 0 !== t[1] && t[1], n.next = 4, Promise.all([o("requestFee", c), o("requestAccountActivationFee", c)]);
                                    case 4:
                                        return n.abrupt("return", {
                                            fee: r.fee,
                                            accountActivation: r.accountActivationFee
                                        });
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    saveCurrentFees: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.getters, r = e.commit, o = n.requiredFees, c = {}, o.includes("txFee") && n.fee && (c.txFee = {
                                            symbol: n.feeSymbol,
                                            amount: n.fee
                                        }), o.includes("accountActivation") && n.accountActivationFee && (c.accountActivation = {
                                            symbol: n.feeSymbol,
                                            amount: n.accountActivationFee
                                        }), r("setFeesChangeSaved", c);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    checkCurrentFees: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, o, c, l, d;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, o = e.commit, c = n.requiredFees, l = {}, c.includes("txFee") && n.fee && n.feesChangeSaved.txFee && n.feesChangeSaved.txFee.amount.lt(n.fee) && (l.txFee = {
                                                symbol: n.feeSymbol,
                                                amount: n.fee
                                            }), c.includes("accountActivation") && n.accountActivationFee && n.feesChangeSaved.accountActivation && n.feesChangeSaved.accountActivation.amount.lt(n.accountActivationFee) && (l.accountActivation = {
                                                symbol: n.feeSymbol,
                                                amount: n.accountActivationFee
                                            }), !Object.keys(l).length) {
                                            t.next = 13;
                                            break
                                        }
                                        return o("setFeesChange", l), t.next = 9, new Promise((function(e) {
                                            r = e
                                        }));
                                    case 9:
                                        return d = t.sent, o("setFeesChangeSaved", {}), o("setFeesChange", void 0), t.abrupt("return", d);
                                    case 13:
                                        return o("setFeesChangeSaved", {}), o("setFeesChange", void 0), t.abrupt("return", !0);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    feesChangeProceed: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r && r(t);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    addCPKToBatch: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f, m, k, v, h;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.dispatch, !(c = e.rootGetters)["zk-wallet/isRemoteWallet"]) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return l = c["zk-wallet/syncWallet"], n.next = 6, o("zk-wallet/checkCPK", !0, {
                                            root: !0
                                        });
                                    case 6:
                                        if (!1 !== (d = n.sent)) {
                                            n.next = 11;
                                            break
                                        }
                                        throw new Error("Account activation message wasn't signed. Make sure local storage is enabled in your browser and refresh the page.");
                                    case 11:
                                        if ("signed" !== d) {
                                            n.next = 44;
                                            break
                                        }
                                        if (m = localStorage.getItem(c["zk-wallet/cpkStorageKey"])) {
                                            n.next = 15;
                                            break
                                        }
                                        throw new Error("Signed CPK wasn't found in storage. Make sure local storage is enabled in your browser and refresh the page.");
                                    case 15:
                                        n.prev = 15, k = JSON.parse(m), n.next = 25;
                                        break;
                                    case 19:
                                        return n.prev = 19, n.t0 = n.catch(15), console.warn("Error parsing local storage cpk\n", n.t0), n.next = 24, o("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 24:
                                        throw new Error("Error parsing local storage CPK. Make sure local storage is enabled in your browser and refresh the page.");
                                    case 25:
                                        if (v = c["zk-account/accountState"], k.accountId === v.id) {
                                            n.next = 31;
                                            break
                                        }
                                        return console.warn("Wrong local CPK account id. Saved ".concat(k.accountId, "; current ").concat(v.id)), n.next = 30, o("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 30:
                                        throw new Error("Wrong local CPK account id. Please, sign account activation again.");
                                    case 31:
                                        if (k.nonce === v.committed.nonce) {
                                            n.next = 36;
                                            break
                                        }
                                        return console.warn("Wrong local CPK account nonce. Saved ".concat(k.nonce, "; current ").concat(v.committed.nonce)), n.next = 35, o("zk-wallet/removeLocalCPK", null, {
                                            root: !0
                                        });
                                    case 35:
                                        throw new Error("Wrong local CPK account nonce. Please, sign account activation again.");
                                    case 36:
                                        if ("ERC-1271" === (null === (f = l.ethSignerType) || void 0 === f ? void 0 : f.verificationMethod) && (k.ethAuthData = {
                                                type: "Onchain"
                                            }), r.accountActivationFee) {
                                            n.next = 40;
                                            break
                                        }
                                        throw o("requestAccountActivationFee"), new Error("No account activation fee was found. Try again.");
                                    case 40:
                                        return n.next = 42, l.signer.signSyncChangePubKey(y(y({}, k), {}, {
                                            fee: r.accountActivationFee,
                                            feeTokenId: l.provider.tokenSet.resolveTokenId(r.feeSymbol)
                                        }));
                                    case 42:
                                        h = n.sent, t.addChangePubKey({
                                            tx: h,
                                            alreadySigned: !0
                                        });
                                    case 44:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [15, 19]
                            ])
                        })))()
                    },
                    addTransferToBatch: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        (r = e.getters).symbol === r.feeSymbol ? t.addTransfer({
                                            to: r.address,
                                            token: r.symbol,
                                            amount: r.amountBigNumber,
                                            fee: r.fee
                                        }) : t.addTransfer({
                                            to: r.address,
                                            token: r.symbol,
                                            amount: "TransferNFT" === r.type ? 1 : r.amountBigNumber,
                                            fee: "0"
                                        });
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    addWithdrawToBatch: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        (r = e.getters).symbol === r.feeSymbol ? t.addWithdraw({
                                            ethAddress: r.address,
                                            token: r.symbol,
                                            amount: r.amountBigNumber,
                                            fee: r.fee
                                        }) : t.addWithdraw({
                                            ethAddress: r.address,
                                            token: r.symbol,
                                            amount: r.amountBigNumber,
                                            fee: "0"
                                        });
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    addMintNFTToBatch: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r = e.getters, t.addMintNFT({
                                            recipient: r.address,
                                            contentHash: Object(k.a)(r.contentHash),
                                            feeToken: r.feeSymbol,
                                            fee: r.fee
                                        });
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    addWithdrawNFTToBatch: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        r = e.getters, t.addWithdrawNFT({
                                            to: r.address,
                                            token: r.symbol,
                                            feeToken: r.feeSymbol,
                                            fee: r.fee
                                        });
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    cpkTransaction: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, d, f, m, v, h;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, t.prev = 1, t.next = 4, o("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 4:
                                        if (t.sent) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        if (f = c["zk-wallet/syncWallet"], r("setNewActiveTransaction", "CPK"), c["zk-wallet/isRemoteWallet"] || "ERC-1271" !== (null === (l = f.ethSignerType) || void 0 === l ? void 0 : l.verificationMethod)) {
                                            t.next = 21;
                                            break
                                        }
                                        return r("setActiveTransactionStep", "waitingForUserConfirmation"), t.next = 13, f.isOnchainAuthSigningKeySet();
                                    case 13:
                                        if (t.sent) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.next = 17, f.onchainAuthSigningKey();
                                    case 17:
                                        return m = t.sent, r("setActiveTransactionStep", "committing"), t.next = 21, null == m ? void 0 : m.wait();
                                    case 21:
                                        return r("setActiveTransactionStep", "waitingForUserConfirmation"), t.next = 24, f.setSigningKey({
                                            feeToken: n.feeSymbol,
                                            ethAuthType: "ECDSALegacyMessage",
                                            fee: n.accountActivationFee
                                        });
                                    case 24:
                                        return v = t.sent, r("setActiveTransactionTxHash", v.txHash), r("setActiveTransactionStep", "committing"), r("setActiveTransactionFeeAmountToken", {
                                            token: null === (d = c["zk-tokens/zkTokenByID"](v.txData.tx.feeTokenId)) || void 0 === d ? void 0 : d.symbol,
                                            amount: v.txData.tx.fee
                                        }), t.next = 30, v.awaitReceipt();
                                    case 30:
                                        return r("setActiveTransactionStep", "updating"), t.next = 33, Promise.all([o("zk-account/updateAccountState", !0, {
                                            root: !0
                                        }), o("zk-wallet/checkCPK", !0, {
                                            root: !0
                                        }), o("zk-history/getNewTransactionHistory", !0, {
                                            root: !0
                                        })]);
                                    case 33:
                                        return r("setActiveTransactionStep", "finished"), t.abrupt("return", v);
                                    case 37:
                                        t.prev = 37, t.t0 = t.catch(1), (h = Object(k.c)(t.t0)) && r("setError", h), r("setActiveTransactionStep", "initial");
                                    case 42:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 37]
                            ])
                        })))()
                    },
                    deposit: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, d, f, m;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, t.prev = 1, t.next = 4, o("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 4:
                                        if (t.sent) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        return l = c["zk-wallet/syncWallet"], r("setNewActiveTransaction", "Deposit"), r("setActiveTransactionStep", "waitingForUserConfirmation"), o("zk-wallet/openWalletApp", void 0, {
                                            root: !0
                                        }), t.next = 13, l.depositToSyncFromEthereum({
                                            depositTo: n.address,
                                            token: n.symbol,
                                            amount: n.amountBigNumber
                                        });
                                    case 13:
                                        if (d = t.sent, n.activeTransaction) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        return r("setActiveTransactionAddress", n.address), r("setActiveTransactionTxHash", d.ethTx.hash), r("setActiveTransactionAmountToken", {
                                            token: n.symbol,
                                            amount: n.amountBigNumber.toString()
                                        }), r("setActiveTransactionStep", "committing"), t.next = 22, d.awaitEthereumTxCommit();
                                    case 22:
                                        if (n.activeTransaction) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 24:
                                        return r("setActiveTransactionStep", "updating"), f = [o("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: "ETH"
                                        }, {
                                            root: !0
                                        }), o("zk-account/updateAccountState", !0, {
                                            root: !0
                                        }), o("zk-history/getNewTransactionHistory", !0, {
                                            root: !0
                                        })], "ETH" !== n.symbol && (f.push(o("zk-balances/requestAllowance", {
                                            force: !0,
                                            symbol: n.symbol
                                        }, {
                                            root: !0
                                        })), f.push(o("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: n.symbol
                                        }, {
                                            root: !0
                                        }))), t.next = 29, Promise.all(f);
                                    case 29:
                                        if (n.activeTransaction) {
                                            t.next = 31;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 31:
                                        return r("setActiveTransactionStep", "finished"), t.abrupt("return", d);
                                    case 35:
                                        t.prev = 35, t.t0 = t.catch(1), (m = Object(k.c)(t.t0)) && r("setError", m), r("setActiveTransactionStep", "initial");
                                    case 40:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 35]
                            ])
                        })))()
                    },
                    setAllowance: function(e) {
                        var t = arguments;
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, f, m, v, h, w, y;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.getters, o = e.commit, c = e.rootGetters, l = e.dispatch, f = !(t.length > 1 && void 0 !== t[1]) || t[1], n.prev = 2, n.next = 5, l("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 5:
                                        if (n.sent) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 8:
                                        return m = c["zk-wallet/syncWallet"], v = m.provider.tokenSet.resolveTokenAddress(r.symbol), o("setNewActiveTransaction", "Allowance"), o("setActiveTransactionStep", "waitingForUserConfirmation"), l("zk-wallet/openWalletApp", void 0, {
                                            root: !0
                                        }), n.next = 15, m.approveERC20TokenDeposits(v, f ? void 0 : r.amountBigNumber);
                                    case 15:
                                        if (h = n.sent, r.activeTransaction) {
                                            n.next = 18;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 18:
                                        return o("setActiveTransactionTxHash", h.hash), o("setActiveTransactionStep", "committing"), n.next = 22, h.wait();
                                    case 22:
                                        if (r.activeTransaction) {
                                            n.next = 24;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 24:
                                        return o("setActiveTransactionStep", "updating"), n.next = 27, Promise.all([l("zk-balances/requestAllowance", {
                                            force: !0,
                                            symbol: r.symbol
                                        }, {
                                            root: !0
                                        }), l("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: "ETH"
                                        }, {
                                            root: !0
                                        })]);
                                    case 27:
                                        if (r.activeTransaction) {
                                            n.next = 29;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 29:
                                        return w = c["zk-balances/tokenAllowance"](r.symbol), o("setActiveTransactionData", {
                                            token: r.symbol,
                                            allowance: w || d.a.from("0")
                                        }), o("setActiveTransactionStep", "finished"), n.abrupt("return", h);
                                    case 35:
                                        n.prev = 35, n.t0 = n.catch(2), (y = Object(k.c)(n.t0)) && o("setError", y), o("setActiveTransactionStep", "initial");
                                    case 40:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 35]
                            ])
                        })))()
                    },
                    mint: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, d, m, k, v;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, r = e.rootGetters, o = e.commit, c = e.dispatch, t.next = 3, c("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 3:
                                        if (t.sent) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        return l = r["zk-wallet/syncWallet"], d = l.provider.tokenSet.resolveTokenAddress(n.symbol), m = [{
                                            constant: !1,
                                            inputs: [{
                                                internalType: "address",
                                                name: "_to",
                                                type: "address"
                                            }, {
                                                internalType: "uint256",
                                                name: "_amount",
                                                type: "uint256"
                                            }],
                                            name: "mint",
                                            outputs: [{
                                                internalType: "bool",
                                                name: "",
                                                type: "bool"
                                            }],
                                            payable: !1,
                                            stateMutability: "nonpayable",
                                            type: "function"
                                        }], k = new f.b(d, m, l.ethSigner()), o("setNewActiveTransaction", "Mint"), o("setActiveTransactionStep", "waitingForUserConfirmation"), c("zk-wallet/openWalletApp", void 0, {
                                            root: !0
                                        }), t.next = 15, k.mint(n.address, n.amountBigNumber);
                                    case 15:
                                        if (v = t.sent, n.activeTransaction) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 18:
                                        return o("setActiveTransactionAddress", n.address), o("setActiveTransactionTxHash", v.hash), o("setActiveTransactionAmountToken", {
                                            token: n.symbol,
                                            amount: n.amountBigNumber.toString()
                                        }), o("setActiveTransactionStep", "committing"), t.next = 24, v.wait();
                                    case 24:
                                        if (n.activeTransaction) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 26:
                                        return o("setActiveTransactionStep", "updating"), t.next = 29, c("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: n.symbol
                                        }, {
                                            root: !0
                                        });
                                    case 29:
                                        return o("setActiveTransactionStep", "finished"), t.abrupt("return", v);
                                    case 31:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    withdrawPendingTransaction: function(e) {
                        return Object(l.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, d, f, m;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, c = e.rootGetters, t.prev = 1, !c["zk-wallet/isRemoteWallet"]) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6, o("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 6:
                                        if (t.sent) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 9:
                                        return l = c["zk-wallet/syncWallet"], r("setNewActiveTransaction", "WithdrawPending"), r("setActiveTransactionStep", "waitingForUserConfirmation"), o("zk-wallet/openWalletApp", void 0, {
                                            root: !0
                                        }), t.next = 15, l.withdrawPendingBalance(c["zk-account/address"], n.symbol);
                                    case 15:
                                        if (d = t.sent, n.activeTransaction) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 18:
                                        return r("setActiveTransactionTxHash", d.hash), r("setActiveTransactionAmountToken", {
                                            token: n.symbol,
                                            amount: n.amountBigNumber.toString()
                                        }), r("setActiveTransactionStep", "committing"), t.next = 23, d.wait();
                                    case 23:
                                        if (n.activeTransaction) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return r("setActiveTransactionStep", "updating"), f = [o("zk-balances/requestPendingBalance", {
                                            force: !0,
                                            symbol: n.symbol
                                        }, {
                                            root: !0
                                        }), o("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: "ETH"
                                        }, {
                                            root: !0
                                        }), o("zk-account/updateAccountState", !0, {
                                            root: !0
                                        }), o("zk-history/getNewTransactionHistory", !0, {
                                            root: !0
                                        })], "ETH" !== n.symbol && f.push(o("zk-balances/requestEthereumBalance", {
                                            force: !0,
                                            symbol: n.symbol
                                        }, {
                                            root: !0
                                        })), t.next = 30, Promise.all(f);
                                    case 30:
                                        if (n.activeTransaction) {
                                            t.next = 32;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 32:
                                        return r("setActiveTransactionStep", "finished"), t.abrupt("return", d);
                                    case 36:
                                        t.prev = 36, t.t0 = t.catch(1), (m = Object(k.c)(t.t0)) && r("setError", m), r("setActiveTransactionStep", "initial");
                                    case 41:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 36]
                            ])
                        })))()
                    },
                    labelTransactions: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o, c, l, d, f, m, k, h, w;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = null, r = null, o = null, c = v(t), e.prev = 4, c.s();
                                    case 6:
                                        if ((l = c.n()).done) {
                                            e.next = 17;
                                            break
                                        }
                                        if ((m = l.value).txData.tx.fee = null === (d = m.txData.tx.fee) || void 0 === d ? void 0 : d.toString(), m.txData.tx.amount = null === (f = m.txData.tx.amount) || void 0 === f ? void 0 : f.toString(), m.txData.tx.feeTokenId || "number" != typeof m.txData.tx.feeToken || (m.txData.tx.feeTokenId = m.txData.tx.feeToken), "ChangePubKey" !== m.txData.tx.type) {
                                            e.next = 14;
                                            break
                                        }
                                        return o = m, e.abrupt("continue", 15);
                                    case 14:
                                        "0" === m.txData.tx.fee ? n = m : "0" === m.txData.tx.amount && (r = m);
                                    case 15:
                                        e.next = 6;
                                        break;
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(4), c.e(e.t0);
                                    case 22:
                                        return e.prev = 22, c.f(), e.finish(22);
                                    case 25:
                                        if (!n) {
                                            k = v(t);
                                            try {
                                                for (k.s(); !(h = k.n()).done;) "ChangePubKey" !== (w = h.value).txData.tx.type && (n = w)
                                            } catch (e) {
                                                k.e(e)
                                            } finally {
                                                k.f()
                                            }
                                        }
                                        return r || (r = n), e.abrupt("return", {
                                            transaction: n,
                                            feeTransaction: r,
                                            cpkTransaction: o
                                        });
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 19, 22, 25]
                            ])
                        })))()
                    },
                    commitTransaction: function(e, t) {
                        return Object(l.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, f, v, h, w, y, x, T, S, A, O, z, R, j, F;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.commit, c = e.dispatch, l = e.rootGetters, d = t.requestFees, n.prev = 2, r.commitAllowed) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 5:
                                        return n.next = 7, c("zk-onboard/checkRightNetwork", null, {
                                            root: !0
                                        });
                                    case 7:
                                        if (n.sent) {
                                            n.next = 10;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 10:
                                        if (f = r.type, o("setNewActiveTransaction", f), o("setActiveTransactionStep", "processing"), !(d && r.requiredFees.length > 0)) {
                                            n.next = 27;
                                            break
                                        }
                                        return o("setActiveTransactionStep", "requestingLatestFees"), n.next = 17, c("saveCurrentFees");
                                    case 17:
                                        return n.next = 19, c("requestAllFees", !0);
                                    case 19:
                                        return o("setActiveTransactionStep", "awaitingUserAction"), n.next = 22, c("checkCurrentFees");
                                    case 22:
                                        if (n.sent) {
                                            n.next = 26;
                                            break
                                        }
                                        return o("setActiveTransactionStep", "initial"), n.abrupt("return");
                                    case 26:
                                        o("setActiveTransactionStep", "processing");
                                    case 27:
                                        if ("Deposit" !== f) {
                                            n.next = 33;
                                            break
                                        }
                                        return n.next = 30, c("deposit");
                                    case 30:
                                        return n.abrupt("return", n.sent);
                                    case 33:
                                        if ("Allowance" !== f) {
                                            n.next = 39;
                                            break
                                        }
                                        return n.next = 36, c("setAllowance");
                                    case 36:
                                        return n.abrupt("return", n.sent);
                                    case 39:
                                        if ("Mint" !== f) {
                                            n.next = 45;
                                            break
                                        }
                                        return n.next = 42, c("mint");
                                    case 42:
                                        return n.abrupt("return", n.sent);
                                    case 45:
                                        if ("CPK" !== f) {
                                            n.next = 51;
                                            break
                                        }
                                        return n.next = 48, c("cpkTransaction");
                                    case 48:
                                        return n.abrupt("return", n.sent);
                                    case 51:
                                        if ("WithdrawPending" !== f) {
                                            n.next = 55;
                                            break
                                        }
                                        return n.next = 54, c("withdrawPendingTransaction");
                                    case 54:
                                        return n.abrupt("return", n.sent);
                                    case 55:
                                        return v = l["zk-wallet/syncWallet"], n.next = 58, v.getNonce("committed");
                                    case 58:
                                        return h = n.sent, w = v.batchBuilder(h), n.next = 62, c("addCPKToBatch", w);
                                    case 62:
                                        if (!0 === l["zk-wallet/cpk"] || r.accountActivationFee) {
                                            n.next = 64;
                                            break
                                        }
                                        throw new Error("No account activation fee found. Try again.");
                                    case 64:
                                        n.t0 = f, n.next = "Transfer" === n.t0 || "TransferNFT" === n.t0 ? 67 : "Withdraw" === n.t0 ? 70 : "MintNFT" === n.t0 ? 73 : "WithdrawNFT" === n.t0 ? 76 : 79;
                                        break;
                                    case 67:
                                        return n.next = 69, c("addTransferToBatch", w);
                                    case 69:
                                        return n.abrupt("break", 79);
                                    case 70:
                                        return n.next = 72, c("addWithdrawToBatch", w);
                                    case 72:
                                        return n.abrupt("break", 79);
                                    case 73:
                                        return n.next = 75, c("addMintNFTToBatch", w);
                                    case 75:
                                        return n.abrupt("break", 79);
                                    case 76:
                                        return n.next = 78, c("addWithdrawNFTToBatch", w);
                                    case 78:
                                        return n.abrupt("break", 79);
                                    case 79:
                                        return "Transfer" !== f && "TransferNFT" !== f && "Withdraw" !== f || r.symbol === r.feeSymbol || w.addTransfer({
                                            to: l["zk-account/address"],
                                            token: r.feeSymbol,
                                            amount: "0",
                                            fee: r.fee
                                        }), o("setActiveTransactionStep", "waitingForUserConfirmation"), c("zk-wallet/openWalletApp", void 0, {
                                            root: !0
                                        }), n.next = 84, w.build();
                                    case 84:
                                        if (y = n.sent, r.activeTransaction) {
                                            n.next = 87;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 87:
                                        return o("setActiveTransactionStep", "committing"), n.next = 90, Object(m.submitSignedTransactionsBatch)(v.provider, y.txs, y.signature ? [y.signature] : void 0);
                                    case 90:
                                        if (x = n.sent, r.activeTransaction) {
                                            n.next = 93;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 93:
                                        return n.next = 95, x[0].awaitReceipt();
                                    case 95:
                                        return o("setActiveTransactionStep", "updating"), n.next = 98, c("labelTransactions", x);
                                    case 98:
                                        return (T = n.sent).transaction && (S = T.transaction, o("setActiveTransactionTxHash", S.txHash), S.txData.tx.to ? o("setActiveTransactionAddress", S.txData.tx.to) : "MintNFT" === S.txData.tx.type && o("setActiveTransactionAddress", S.txData.tx.creatorAddress), "number" != typeof(A = S.txData.tx.tokenId) && "number" == typeof S.txData.tx.token && (A = S.txData.tx.token), "number" == typeof A && (m.utils.isNFT(A) ? o("setActiveTransactionAmountToken", {
                                            token: A,
                                            amount: 1
                                        }) : o("setActiveTransactionAmountToken", {
                                            token: null === (O = l["zk-tokens/zkTokenByID"](A)) || void 0 === O ? void 0 : O.symbol,
                                            amount: S.txData.tx.amount
                                        }))), T.feeTransaction && (z = T.feeTransaction, "number" != typeof(R = z.txData.tx.feeTokenId) && ("number" == typeof z.txData.tx.tokenId ? R = z.txData.tx.tokenId : "number" == typeof z.txData.tx.token && (R = z.txData.tx.token)), "number" == typeof R && o("setActiveTransactionFeeAmountToken", {
                                            token: null === (j = l["zk-tokens/zkTokenByID"](R)) || void 0 === j ? void 0 : j.symbol,
                                            amount: z.txData.tx.fee
                                        })), n.next = 103, Promise.all([c("zk-account/updateAccountState", !0, {
                                            root: !0
                                        }), c("zk-history/getNewTransactionHistory", !0, {
                                            root: !0
                                        })]);
                                    case 103:
                                        if (r.activeTransaction) {
                                            n.next = 105;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 105:
                                        if (!T.cpkTransaction) {
                                            n.next = 108;
                                            break
                                        }
                                        return n.next = 108, c("zk-wallet/checkCPK", !0, {
                                            root: !0
                                        });
                                    case 108:
                                        return o("setActiveTransactionStep", "finished"), "TransferNFT" !== f && "WithdrawNFT" !== f || o("setSymbol", void 0), n.abrupt("return", T);
                                    case 113:
                                        n.prev = 113, n.t1 = n.catch(2), (F = Object(k.c)(n.t1)) && ("Mint" === r.type && F.includes("cannot estimate gas") ? o("setError", "Probably this token isn't available for minting. Try to mint a different one.") : F.startsWith("unknown account #0") ? o("setError", "It seems that your wallet isn't connected or is locked") : F.length > 150 ? (console.warn("Error length is bigger than 150.\n", F), o("setError", "Unexpected error. Please, try again later.")) : o("setError", F)), o("setActiveTransactionStep", "initial");
                                    case 118:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 113]
                            ])
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: x,
                    getters: T,
                    mutations: S,
                    actions: A
                }
            }
        },
        396: function(e, t, n) {
            "use strict";
            var r, o, c, l, d, f = n(51),
                m = n(12),
                k = (n(86), n(57), n(300), n(94), n(106), n(256), n(19), n(163), n(95), n(359), n(1097)),
                v = n(1146),
                h = n(1120),
                w = n(1121),
                y = n(1122),
                x = n(1123),
                T = n(1124),
                S = n(1125),
                A = n(1126),
                O = n(1127),
                z = n(1128),
                R = n(1129),
                j = n(1130),
                F = n(1149),
                E = n(78),
                P = n(120),
                N = n(286),
                L = n(92),
                C = {
                    requireSigner: !1,
                    requestAccountState: !0,
                    autoUpdateAccountState: !0,
                    requestTransactionHistory: !0
                },
                W = {
                    resolve: void 0,
                    reject: void 0
                },
                B = function() {
                    var e, t, n, o, c;
                    return "Argent" === (null === (e = r) || void 0 === e || null === (t = e.state.get().wallets[0].provider) || void 0 === t || null === (n = t.connector) || void 0 === n || null === (o = n.peerMeta) || void 0 === o ? void 0 : o.name) ? "Argent" : null === (c = r) || void 0 === c ? void 0 : c.state.get().wallets[0].label
                },
                H = function(e) {
                    return {
                        loginOptions: C,
                        selectedWallet: void 0,
                        loadingHint: void 0,
                        wrongNetwork: !1,
                        options: e,
                        onboardInited: !1,
                        onboardStatus: "initial",
                        restoringSession: !1,
                        error: "",
                        forceUpdateValue: Number.MIN_SAFE_INTEGER
                    }
                },
                I = {
                    loginOptions: function(e) {
                        return e.loginOptions
                    },
                    selectedWallet: function(e) {
                        return e.selectedWallet
                    },
                    loadingHint: function(e) {
                        return e.loadingHint
                    },
                    wrongNetwork: function(e) {
                        return e.wrongNetwork
                    },
                    onboard: function(e) {
                        return e.forceUpdateValue, r
                    },
                    options: function(e) {
                        return e.options
                    },
                    onboardStatus: function(e) {
                        return e.onboardStatus
                    },
                    onboardInited: function(e) {
                        return e.onboardInited
                    },
                    restoringSession: function(e) {
                        return e.restoringSession
                    },
                    error: function(e) {
                        return e.error
                    },
                    wcProvider: function(e) {
                        var t, n, r;
                        return e.forceUpdateValue, d ? d.connector : "wc" === (null === (t = c) || void 0 === t || null === (n = t.connector) || void 0 === n ? void 0 : n.protocol) ? null === (r = c) || void 0 === r ? void 0 : r.connector : void 0
                    },
                    ethereumProvider: function(e) {
                        return e.forceUpdateValue, c
                    },
                    web3Provider: function(e) {
                        return e.forceUpdateValue, l
                    },
                    wc1Provider: function(e) {
                        return e.forceUpdateValue, d
                    },
                    ethereumNetworksConfig: function(e) {
                        return Object(N.c)(e.options.apiKeys.INFURA_KEY)
                    },
                    config: function(e, t, n, r) {
                        return Object(N.a)(r["zk-provider/network"], e.options)
                    }
                },
                K = {
                    setLoginOptions: function(e, t) {
                        e.loginOptions = Object.assign(C, t)
                    },
                    setSelectedWallet: function(e, t) {
                        e.selectedWallet = t, t ? localStorage.setItem("lastSelectedWallet", t) : localStorage.removeItem("lastSelectedWallet")
                    },
                    setLoadingHint: function(e, t) {
                        return e.loadingHint = t
                    },
                    setWrongNetwork: function(e, t) {
                        return e.wrongNetwork = t
                    },
                    setOnboard: function(e, t) {
                        e.forceUpdateValue++, r = t
                    },
                    setOnboardStatus: function(e, t) {
                        return e.onboardStatus = t
                    },
                    setOnboardInited: function(e, t) {
                        return e.onboardInited = t
                    },
                    setRestoringSession: function(e, t) {
                        return e.restoringSession = t
                    },
                    setError: function(e, t) {
                        return e.error = t
                    },
                    setEthereumProvider: function(e, t) {
                        c = t, e.forceUpdateValue++
                    },
                    setWeb3Provider: function(e, t) {
                        l = t, e.forceUpdateValue++
                    },
                    clear: function(e) {
                        e.selectedWallet = void 0, e.loadingHint = void 0, W = {
                            resolve: void 0,
                            reject: void 0
                        }, c = void 0, e.forceUpdateValue++
                    }
                },
                D = {
                    onboardInit: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = e.getters, n("setOnboard", Object(k.a)({
                                            wallets: [Object(v.a)(), Object(j.a)(), Object(O.a)(), Object(z.a)({
                                                email: "support@zksync.io",
                                                appUrl: "https://wallet.zksync.io"
                                            }), Object(S.a)(), Object(h.a)({
                                                apiKey: r.options.apiKeys.FORTMATIC_KEY
                                            }), Object(x.a)({
                                                apiKey: r.options.apiKeys.PORTIS_KEY
                                            }), Object(A.a)(), Object(T.a)(), Object(w.a)(), Object(y.a)(), Object(R.a)()],
                                            chains: Object.entries(r.ethereumNetworksConfig).map((function(e) {
                                                var t = Object(f.a)(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return {
                                                    id: "0x" + r.id.toString(16),
                                                    token: "ETH",
                                                    label: n,
                                                    rpcUrl: r.rpc_url
                                                }
                                            })),
                                            appMetadata: {
                                                name: "zkSync",
                                                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M389.998 194.021L282.202 79.042V163.247L175.169 247.557L282.202 247.635V309.001L389.998 194.021Z" fill="#4E529A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0015 193.979L117.798 308.958L117.798 225.431L224.831 140.443L117.798 140.365L117.798 78.9999L10.0015 193.979Z" fill="#8C8DFC"/></svg>',
                                                logo: "/images/logo.svg",
                                                description: "zkSync - Rely on math, not validators",
                                                gettingStartedGuide: "https://docs.zksync.io/userdocs/",
                                                explore: "https://zksync.io/",
                                                recommendedInjectedWallets: [{
                                                    name: "MetaMask",
                                                    url: "https://metamask.io"
                                                }]
                                            },
                                            accountCenter: {
                                                desktop: {
                                                    enabled: !1
                                                },
                                                mobile: {
                                                    enabled: !1
                                                }
                                            }
                                        })), window && window.ethereum && (window.ethereum.autoRefreshOnNetworkChange = !1), n("setOnboardInited", !0);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getLastLoginData: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, (r = localStorage.getItem("lastSelectedWallet")) && n("setSelectedWallet", r);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    walletCheck: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.dispatch, r) {
                                            t.next = 4;
                                            break
                                        }
                                        return console.warn("Onboard wasn't initialized with zk-onboard/onboardInit"), t.abrupt("return", !1);
                                    case 4:
                                        return t.next = 6, n("checkRightNetwork");
                                    case 6:
                                        return t.abrupt("return", t.sent);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    onAddressChange: function(e, t) {
                        return Object(m.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, l, d, address;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.getters, c = e.commit, l = e.dispatch, d = e.rootGetters, address = t.address, !d["zk-account/address"] || (null === (r = d["zk-account/address"]) || void 0 === r ? void 0 : r.toLowerCase()) === address.toLowerCase()) {
                                            n.next = 14;
                                            break
                                        }
                                        return c("setLoadingHint", "Switching accounts..."), c("setOnboardStatus", "connecting"), n.next = 7, l("zk-account/clearAccountData", null, {
                                            root: !0
                                        });
                                    case 7:
                                        if ("Argent" !== o.selectedWallet) {
                                            n.next = 12;
                                            break
                                        }
                                        return n.next = 10, l("loginWithWC1");
                                    case 10:
                                        n.next = 14;
                                        break;
                                    case 12:
                                        return n.next = 14, l("loginWithOnboard", o.selectedWallet);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    accountSelect: function() {
                        return Object(m.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r) {
                                            e.next = 3;
                                            break
                                        }
                                        return console.warn("Onboard wasn't initialized with zk-onboard/onboardInit"), e.abrupt("return", !1);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    reset: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, c, l, d, m;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (l = e.commit, (0, e.dispatch)("wc1Disconnect"), l("setOnboardStatus", "initial"), l("setSelectedWallet", void 0), localStorage.removeItem("walletconnect"), o && o(), null === (n = r) || void 0 === n || null === (c = n.state.get()) || void 0 === c || !c.wallets.length) {
                                            t.next = 10;
                                            break
                                        }
                                        return d = Object(f.a)(r.state.get().wallets, 1), m = d[0], t.next = 10, r.disconnectWallet({
                                            label: m.label
                                        });
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    rejectNetworkChange: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (0, e.commit)("setWrongNetwork", !1), W.reject && W.reject(!0);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    loginWithArgent: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, r = e.dispatch, n("setSelectedWallet", "Argent"), t.next = 4, r("loginWithWC1");
                                    case 4:
                                        return t.abrupt("return", t.sent);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    loginWithWalletConnect: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.commit, r = e.dispatch, n("setSelectedWallet", void 0), t.next = 4, r("loginWithOnboard", "WalletConnect");
                                    case 4:
                                        return t.abrupt("return", t.sent);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    checkRightNetwork: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, o;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, o = e.commit, t.prev = 1, t.next = 4, new Promise((function(e, t) {
                                            var c, l, f, m, k, v, h;
                                            W.resolve = e, W.reject = t;
                                            var w = n.config.ethereumNetwork;
                                            if ((null !== (c = null === (l = d) || void 0 === l ? void 0 : l.chainId) && void 0 !== c ? c : parseInt(null !== (f = null === (m = r) || void 0 === m ? void 0 : m.state.get().wallets[0].chains[0].id) && void 0 !== f ? f : "", 16)) === w.id) return o("setWrongNetwork", !1), e(!0);
                                            if (o("setWrongNetwork", !0), !!d || "wc" === (null === (k = r) || void 0 === k || null === (v = k.state.get().wallets[0].provider) || void 0 === v || null === (h = v.connector) || void 0 === h ? void 0 : h.protocol)) return t(new Error("WalletConnect does not support network switching"));
                                            if (r) {
                                                var y = E.ethers.utils.hexValue(w.id);
                                                r.state.get().wallets[0].provider.request({
                                                    method: "wallet_switchEthereumChain",
                                                    params: [{
                                                        chainId: y
                                                    }]
                                                }).then((function() {
                                                    o("setWrongNetwork", !1), e(!0)
                                                })).catch((function(n) {
                                                    var c, l;
                                                    return n ? 4902 !== n.code && 4902 !== (null === (c = n.data) || void 0 === c || null === (l = c.originalError) || void 0 === l ? void 0 : l.code) ? t(n) : r ? void r.state.get().wallets[0].provider.request({
                                                        method: "wallet_addEthereumChain",
                                                        params: [{
                                                            chainId: y,
                                                            chainName: w.name.charAt(0).toUpperCase() + w.name.slice(1),
                                                            nativeCurrency: {
                                                                name: "Ether",
                                                                symbol: "ETH",
                                                                decimals: 18
                                                            },
                                                            rpcUrls: [w.rpc_url],
                                                            blockExplorerUrls: [w.rpc_url],
                                                            iconUrls: ["https://ethereum.org/favicon-32x32.png"]
                                                        }]
                                                    }).then((function() {
                                                        o("setWrongNetwork", !1), e(!0)
                                                    })) : t(new Error("Onboard not initialized")) : t(new Error("Unable to switch network"))
                                                }))
                                            }
                                        }));
                                    case 4:
                                        return t.abrupt("return", !0);
                                    case 7:
                                        return t.prev = 7, t.t0 = t.catch(1), console.warn("checkRightNetwork error: \n", t.t0), t.abrupt("return", !1);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 7]
                            ])
                        })))()
                    },
                    subscribeForOnboardWalletUpdates: function(e) {
                        var t = this;
                        return Object(m.a)(regeneratorRuntime.mark((function n() {
                            var c, l, d, f, k, v;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        c = e.getters, l = e.commit, d = e.dispatch, f = r.state.select("wallets"), k = f.subscribe(function() {
                                            var e = Object(m.a)(regeneratorRuntime.mark((function e(n) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (n.length) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return l("setSelectedWallet", void 0), d("zk-account/logout", null, {
                                                                root: !0
                                                            }), c.options.logoutRedirect && t.$router.push(c.options.logoutRedirect), e.abrupt("return");
                                                        case 5:
                                                            return n[0].provider.autoRefreshOnNetworkChange = !1, l("setSelectedWallet", n[0].label), e.next = 9, d("onAddressChange", {
                                                                address: n[0].accounts[0].address
                                                            });
                                                        case 9:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), v = k.unsubscribe, o = function() {
                                            try {
                                                v()
                                            } catch (e) {}
                                        };
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    loginWithOnboard: function(e, t) {
                        return Object(m.a)(regeneratorRuntime.mark((function n() {
                            var o, c, l, d, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.getters, c = e.commit, l = e.dispatch, o.onboardInited) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.next = 4, l("onboardInit");
                                    case 4:
                                        if (r.state.get().wallets.length) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.next = 7, r.connectWallet(t ? {
                                            autoSelect: {
                                                label: t,
                                                disableModals: !0
                                            }
                                        } : void 0);
                                    case 7:
                                        if ((d = r.state.get().wallets).length) {
                                            n.next = 12;
                                            break
                                        }
                                        return n.abrupt("return", l("reset"));
                                    case 12:
                                        if ("Argent" !== B()) {
                                            n.next = 15;
                                            break
                                        }
                                        return c("setError", "Use Argent Connect button instead"), n.abrupt("return", l("reset"));
                                    case 15:
                                        if (l("subscribeForOnboardWalletUpdates"), c("setSelectedWallet", B()), !(f = o.options.disabledWallets.find((function(e) {
                                                return e.name === o.selectedWallet
                                            })))) {
                                            n.next = 21;
                                            break
                                        }
                                        return c("setError", f.error), n.abrupt("return", l("reset"));
                                    case 21:
                                        return n.next = 23, l("walletCheck");
                                    case 23:
                                        if (n.sent) {
                                            n.next = 26;
                                            break
                                        }
                                        return n.abrupt("return", l("reset"));
                                    case 26:
                                        return n.next = 28, l("login", d[0].provider);
                                    case 28:
                                        return n.abrupt("return", n.sent);
                                    case 29:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    loginWithWC1: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c, l, f, k;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.commit, r = e.dispatch, o = e.getters, c = o.config, d = new F.a({
                                                infuraId: c.infuraAPIKey,
                                                pollingInterval: 1e4,
                                                qrcode: !("Argent" === o.selectedWallet && Object(L.g)()),
                                                chainId: c.ethereumNetwork.id,
                                                qrcodeModalOptions: "Argent" === o.selectedWallet ? {
                                                    mobileLinks: ["argent"]
                                                } : {}
                                            }), t.prev = 3, d) {
                                            t.next = 6;
                                            break
                                        }
                                        throw new Error("Provider not found");
                                    case 6:
                                        return d.connector.on("display_uri", (function(e, t) {
                                            if (e) return console.warn("providerWalletConnect.connector display_uri error\n", e);
                                            "Argent" === o.selectedWallet && Object(L.g)() && r("zk-wallet/openWalletApp", null, {
                                                root: !0
                                            })
                                        })), d.on("accountsChanged", function() {
                                            var e = Object(m.a)(regeneratorRuntime.mark((function e(t) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, r("onAddressChange", {
                                                                address: t[0]
                                                            });
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), d.on("chainChanged", (function(e) {
                                            W.resolve && e === o.config.ethereumNetwork.id && W.resolve(!0)
                                        })), t.next = 11, d.enable();
                                    case 11:
                                        if ("Argent" === (null === (l = d.walletMeta) || void 0 === l ? void 0 : l.name)) {
                                            t.next = 13;
                                            break
                                        }
                                        throw new Error('To use "'.concat(null === (k = d.walletMeta) || void 0 === k ? void 0 : k.name, '" use WalletConnect button instead'));
                                    case 13:
                                        if (n("setSelectedWallet", null === (f = d.walletMeta) || void 0 === f ? void 0 : f.name), d.chainId === o.config.ethereumNetwork.id) {
                                            t.next = 32;
                                            break
                                        }
                                        return n("setWrongNetwork", !0), t.prev = 16, t.next = 19, new Promise((function(e, t) {
                                            W.resolve = e, W.reject = t
                                        }));
                                    case 19:
                                        return t.next = 21, r("login", d);
                                    case 21:
                                    case 34:
                                        return t.abrupt("return", t.sent);
                                    case 24:
                                        return t.prev = 24, t.t0 = t.catch(16), t.abrupt("return", !1);
                                    case 27:
                                        return t.prev = 27, n("setWrongNetwork", !1), t.finish(27);
                                    case 30:
                                        t.next = 35;
                                        break;
                                    case 32:
                                        return t.next = 34, r("login", d);
                                    case 35:
                                        t.next = 44;
                                        break;
                                    case 37:
                                        return t.prev = 37, t.t1 = t.catch(3), console.warn("walletConnectLogin error: \n", t.t1), n("setError", t.t1), t.next = 43, r("reset");
                                    case 43:
                                        return t.abrupt("return", !1);
                                    case 44:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 37],
                                [16, 24, 27, 30]
                            ])
                        })))()
                    },
                    login: function(e, t) {
                        return Object(m.a)(regeneratorRuntime.mark((function n() {
                            var r, o, c, d, f, m, k;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.getters, o = e.commit, c = e.dispatch, t) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return", c("reset"));
                                    case 3:
                                        return d = r.loginOptions, o("setEthereumProvider", t), o("setLoadingHint", "Processing..."), o("setOnboardStatus", "connecting"), n.prev = 7, n.next = 10, c("zk-provider/requestProvider", null, {
                                            root: !0
                                        });
                                    case 10:
                                        f = n.sent, n.next = 17;
                                        break;
                                    case 13:
                                        return n.prev = 13, n.t0 = n.catch(7), c("zk-account/logout", null, {
                                            root: !0
                                        }), n.abrupt("return", c("reset"));
                                    case 17:
                                        if (l = new E.ethers.providers.Web3Provider(t, "any"), o("setWeb3Provider", l), m = l.getSigner(), d.requireSigner && o("setLoadingHint", "Follow the instructions in your Ethereum wallet"), "Argent" !== r.selectedWallet) {
                                            n.next = 28;
                                            break
                                        }
                                        return o("zk-wallet/setRemoteWallet", !0, {
                                            root: !0
                                        }), n.next = 25, P.RemoteWallet.fromEthSigner(l, f);
                                    case 25:
                                        k = n.sent, n.next = 32;
                                        break;
                                    case 28:
                                        return n.next = 30, P.Wallet[d.requireSigner ? "fromEthSigner" : "fromEthSignerNoKeys"](m, f);
                                    case 30:
                                        k = n.sent, o("zk-wallet/setRemoteWallet", !1, {
                                            root: !0
                                        });
                                    case 32:
                                        if (k) {
                                            n.next = 34;
                                            break
                                        }
                                        return n.abrupt("return", c("reset"));
                                    case 34:
                                        return o("setLoadingHint", "Getting wallet information..."), o("zk-account/setAddress", k.address(), {
                                            root: !0
                                        }), o("zk-wallet/setSyncWallet", k, {
                                            root: !0
                                        }), o("zk-account/setLoggedIn", !0, {
                                            root: !0
                                        }), c("zk-account/setInitialName", null, {
                                            root: !0
                                        }), d.requestAccountState && (c("zk-account/updateAccountState", null, {
                                            root: !0
                                        }), c("zk-wallet/checkCPK", null, {
                                            root: !0
                                        })), d.autoUpdateAccountState && c("zk-account/autoUpdateAccountState", 3e4, {
                                            root: !0
                                        }), d.requestTransactionHistory && c("zk-history/getTransactionHistory", null, {
                                            root: !0
                                        }), c("zk-tokens/loadZkTokens", null, {
                                            root: !0
                                        }), c("zk-contacts/requestContacts", null, {
                                            root: !0
                                        }), o("setOnboardStatus", "authorized"), n.abrupt("return", !0);
                                    case 46:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [7, 13]
                            ])
                        })))()
                    },
                    restoreLastNetwork: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, (r = localStorage.getItem("lastSelectedNetwork")) && Object.prototype.hasOwnProperty.call(N.d, r) && n("zk-provider/setNetwork", r, {
                                            root: !0
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    restoreLogin: function(e) {
                        return Object(m.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.getters, r = e.commit, o = e.dispatch, r("setRestoringSession", !0), r("setLoadingHint", "Restoring session..."), !n.options.restoreNetwork) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 6, o("restoreLastNetwork");
                                    case 6:
                                        return t.next = 8, o("getLastLoginData");
                                    case 8:
                                        if (c = !1, "Argent" !== n.selectedWallet) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 12, o("loginWithWC1");
                                    case 12:
                                        c = t.sent, t.next = 18;
                                        break;
                                    case 15:
                                        return t.next = 17, o("loginWithOnboard", n.selectedWallet);
                                    case 17:
                                        c = t.sent;
                                    case 18:
                                        return r("setRestoringSession", !1), t.abrupt("return", c);
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    wc1Disconnect: function() {
                        return Object(m.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !d || !d.isConnecting && !d.connected || !d.disconnect) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, d.disconnect();
                                    case 4:
                                        d = void 0, e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.warn("Error disconnecting from WalletConnect v1\n", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                };
            t.a = function(e) {
                return {
                    namespaced: !0,
                    state: H(e),
                    getters: I,
                    mutations: K,
                    actions: D
                }
            }
        },
        397: function(e) {
            e.exports = JSON.parse('{"name":"@matterlabs/zksync-nuxt-core","version":"1.10.1","license":"MIT","repository":{"type":"git","url":"git+https://github.com/matter-labs/zksync-nuxt-core.git"},"bugs":{"url":"https://github.com/matter-labs/zksync-nuxt-core/issues"},"homepage":"https://github.com/matter-labs/zksync-nuxt-core","author":{"name":"Matter Labs","url":"https://matter-labs.io"},"contributors":[{"name":"JackHamer","url":"https://github.com/JackHamer09"}],"scripts":{"dev":"nuxt","build":"nuxt build","start":"nuxt start","generate":"nuxt generate","lint:eslint":"eslint --fix --ignore-path .gitignore","lint:stylelint":"stylelint --fix --ignore-path .gitignore","lint:prettier":"prettier --write --loglevel warn","lint":"yarn lint:js && yarn lint:style","test":"jest","_postinstall":"husky install","prepublishOnly":"pinst --disable","postpublish":"pinst --enable"},"types":"index.d.ts","dependencies":{"@nuxtjs/axios":"^5.13.1","@walletconnect/web3-provider":"^1.8.0","@web3-onboard/coinbase":"^2.2.0","@web3-onboard/core":"^2.11.1","@web3-onboard/dcent":"^2.2.2","@web3-onboard/fortmatic":"^2.0.14","@web3-onboard/gnosis":"^2.1.5","@web3-onboard/injected-wallets":"^2.4.0","@web3-onboard/keepkey":"^2.3.2","@web3-onboard/ledger":"^2.4.0","@web3-onboard/mew-wallet":"^2.0.0","@web3-onboard/portis":"^2.1.3","@web3-onboard/torus":"^2.2.0","@web3-onboard/trezor":"^2.3.2","@web3-onboard/walletconnect":"^2.2.2","core-js":"^3.9.1","eslint-plugin-prettier-vue":"^3.0.0","ethers":"^5.4.1","js-cache":"^1.0.3","lottie-web":"^5.7.8","multiformats":"^9.4.7","nuxt":"^2.15.3","ts-node":"^9.1.1","web3":"^1.5.3","zksync":"^0.13.1"},"devDependencies":{"@commitlint/cli":"^14.1.0","@commitlint/config-conventional":"^14.1.0","@nuxt/types":"^2.15.3","@nuxt/typescript-build":"^2.1.0","@nuxtjs/eslint-config-typescript":"^6.0.0","@nuxtjs/eslint-module":"^3.0.2","@nuxtjs/stylelint-module":"^4.0.0","@nuxtjs/tailwindcss":"^4.0.1","@semantic-release/changelog":"^6.0.1","@semantic-release/commit-analyzer":"^9.0.1","@semantic-release/git":"^10.0.1","@semantic-release/npm":"^8.0.3","@semantic-release/release-notes-generator":"^10.0.2","@vue/test-utils":"^1.1.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.3","eslint":"^7.22.0","eslint-config-prettier":"^8.1.0","eslint-plugin-nuxt":"^2.0.0","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^7.7.0","fibers":"^5.0.0","husky":"^7.0.0","jest":"^26.6.3","lint-staged":"^11.2.6","node-gyp":"^8.3.0","pinst":"^2.0.0","postcss":"^8.2.13","prettier":"^2.2.1","sass":"^1.32.12","sass-loader":"10","semantic-release":"^18.0.0","stylelint":"^13.12.0","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^21.0.0","ts-jest":"^26.5.4","vue-jest":"^3.0.4"},"packageManager":"yarn@3.1.0","commitlint":{"extends":["@commitlint/config-conventional"]},"release":{"branches":["+([0-9])?(.{+([0-9]),x}).x","main","next","next-major",{"name":"beta","prerelease":true},{"name":"alpha","prerelease":true}],"plugins":["@semantic-release/commit-analyzer","@semantic-release/release-notes-generator","@semantic-release/changelog",["@semantic-release/npm",{}]]},"publishConfig":{"access":"public"},"lint-staged":{"*.{js,ts}":["yarn lint:eslint","yarn lint:prettier"],"*.scss":["yarn lint:stylelint","yarn lint:prettier"],"*.vue":["yarn lint:eslint","yarn lint:stylelint","yarn lint:prettier"],"*.md":["yarn lint:prettier"]}}')
        },
        398: function(e, t, n) {
            "use strict";
            n(71), n(64), n(108), n(65), n(109), n(95), n(128), n(101), n(41), n(118), n(129), n(68);
            var r = n(91),
                o = n(12),
                c = n(17),
                l = n(51),
                d = (n(86), n(300), n(94), n(345), n(562), n(256), n(63), n(19), n(57), n(296), n(143));

            function f(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return m(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function k(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function v(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? k(Object(source), !0).forEach((function(t) {
                        Object(c.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var h = "customAddressName-",
                w = function(e) {
                    return {
                        contacts: {},
                        forceUpdateValue: Number.MIN_SAFE_INTEGER
                    }
                },
                y = {
                    contacts: function(e) {
                        return e.forceUpdateValue, Object.fromEntries(Object.entries(e.contacts).sort((function(e, t) {
                            var n = Object(l.a)(e, 2),
                                r = (n[0], n[1]),
                                o = Object(l.a)(t, 2),
                                c = (o[0], o[1]);
                            return r.deleted === c.deleted ? 0 : r.deleted ? 1 : -1
                        })))
                    },
                    contactsNotDeleted: function(e) {
                        return e.forceUpdateValue, Object.fromEntries(Object.entries(e.contacts).filter((function(e) {
                            var t = Object(l.a)(e, 2);
                            t[0];
                            return !t[1].deleted
                        })))
                    },
                    contactByAddress: function(e) {
                        return function(address) {
                            return e.contacts[Object(d.getAddress)(address)]
                        }
                    },
                    contactByAddressNotDeleted: function(e, t) {
                        return function(address) {
                            return t.contactsNotDeleted[Object(d.getAddress)(address)]
                        }
                    },
                    forceUpdateValue: function(e) {
                        return e.forceUpdateValue
                    }
                },
                x = {
                    setContacts: function(e, t) {
                        return e.contacts = t
                    },
                    setContact: function(e, t) {
                        e.contacts[Object(d.getAddress)(t.address)] = t, e.forceUpdateValue++
                    },
                    removeContact: function(e, address) {
                        address = Object(d.getAddress)(address), Object.prototype.hasOwnProperty.call(e.contacts, address) && (e.contacts[address] = v(v({}, e.contacts[address]), {}, {
                            deleted: !0
                        })), e.forceUpdateValue++
                    },
                    clear: function(e) {
                        return e.contacts = {}
                    }
                },
                T = {
                    requestContacts: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, o, c, l, m, k, v, h, w;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e.commit, o = e.getters, c = e.rootGetters, l = localStorage.getItem("contacts-".concat(c["zk-account/address"]))) try {
                                            if (m = JSON.parse(l), k = {}, "object" === Object(r.a)(m) && (k = m), Array.isArray(m)) {
                                                v = f(m);
                                                try {
                                                    for (v.s(); !(h = v.n()).done;) w = h.value, k[w.address] = {
                                                        name: w.name,
                                                        address: Object(d.getAddress)(w.address)
                                                    }
                                                } catch (e) {
                                                    v.e(e)
                                                } finally {
                                                    v.f()
                                                }
                                            }
                                            n("setContacts", k)
                                        } catch (e) {
                                            console.warn("Error requesting contacts\n", e), n("setContacts", {})
                                        } else n("setContacts", {});
                                        return t.abrupt("return", o.contacts);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    saveContacts: function(e) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.getters, r = e.rootGetters;
                                        try {
                                            localStorage.setItem("contacts-".concat(r["zk-account/address"]), JSON.stringify(Object.fromEntries(Object.entries(n.contacts).filter((function(e) {
                                                var t = Object(l.a)(e, 2);
                                                t[0];
                                                return !t[1].deleted
                                            })))))
                                        } catch (e) {
                                            console.warn("Error saving contacts\n", e)
                                        }
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getAddressName: function(e, address) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return address = Object(d.getAddress)(address), e.abrupt("return", localStorage.getItem(h + address));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    setAddressName: function(e, t) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var n, address;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.name, address = t.address, address = Object(d.getAddress)(address), "string" == typeof n && 0 !== n.trim().length) {
                                            e.next = 5;
                                            break
                                        }
                                        return localStorage.removeItem(h + address), e.abrupt("return", !1);
                                    case 5:
                                        return localStorage.setItem(h + address, n.trim()), e.abrupt("return", !0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    setContact: function(e, t) {
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var r, o;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.commit, o = e.dispatch, t.address = Object(d.getAddress)(t.address), r("setContact", t), n.next = 5, o("saveContacts");
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    removeContact: function(e, address) {
                        return Object(o.a)(regeneratorRuntime.mark((function t() {
                            var n, r, o, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.getters, r = e.commit, o = e.dispatch, address = Object(d.getAddress)(address), r("removeContact", address), t.next = 5, o("getAddressName", address);
                                    case 5:
                                        if (c = t.sent, !n.contactByAddress(address) || n.contactByAddress(address).name !== c) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 9, o("setAddressName", {
                                            name: null,
                                            address: address
                                        });
                                    case 9:
                                        return t.next = 11, o("saveContacts");
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                };
            t.a = function() {
                return {
                    namespaced: !0,
                    state: w,
                    getters: y,
                    mutations: x,
                    actions: T
                }
            }
        },
        621: function(e, t, n) {
            "use strict";
            var r = n(387),
                o = n(388),
                c = n(389),
                l = n(391),
                d = n(392),
                f = n(393),
                m = n(394),
                k = n(395),
                v = n(396),
                h = n(398),
                w = JSON.parse('{"network":"mainnet","ipfsGateway":"https://ipfs.io","apiKeys":{"FORTMATIC_KEY":"pk_live_6B0C5E23B6D8FD3A","PORTIS_KEY":"2de02c10-9d10-4626-99cb-b71ebedab5c6","INFURA_KEY":"560464419d33486ab1713d61ac9f1d82"},"disabledWallets":[{"name":"Keystone","error":"Wallet Keystone is not supported"}],"logoutRedirect":"/","restoreNetwork":true,"onboardConfig":{"APP_NAME":"zkSync Wallet","APP_ID":"764666de-bcb7-48a6-91fc-75e9dc086ea0"}}');
            t.a = function(e) {
                for (var t = e.store, n = 0, y = [
                        ["provider", r.a],
                        ["tokens", o.a],
                        ["wallet", c.a],
                        ["fees", l.a],
                        ["balances", d.a],
                        ["history", f.a],
                        ["account", m.a],
                        ["transaction", k.a],
                        ["onboard", v.a],
                        ["contacts", h.a]
                    ]; n < y.length; n++) {
                    var x = y[n];
                    t.registerModule("zk-" + x[0], x[1](w), {
                        preserveState: Boolean(t.state["zk-" + x[0]])
                    })
                }
            }
        },
        624: function(e, t, n) {
            "use strict";
            n(63), n(19);
            var r = n(10),
                o = n(92);
            t.a = function(e) {
                var t = e.store;
                r.a.filter("parseDecimal", (function(e, symbol) {
                    return Object(o.i)(t.getters["zk-provider/syncProvider"], symbol, e)
                })), r.a.filter("parseBigNumberish", (function(e, symbol) {
                    return Object(o.h)(t.getters["zk-provider/syncProvider"], symbol, e)
                })), r.a.filter("formatBigNumLimited", (function(e, symbol, n) {
                    return Object(o.d)(t.getters["zk-provider/syncProvider"], symbol, e, n)
                })), r.a.filter("formattedPrice", (function(e, symbol) {
                    if (t.getters["zk-tokens/forceUpdateVal"], void 0 === t.getters["zk-tokens/tokenPrices"][symbol]) return "";
                    var n = Object(o.h)(t.getters["zk-provider/syncProvider"], symbol, e);
                    return n ? Object(o.e)(t.getters["zk-tokens/tokenPrices"][symbol], parseFloat(n)) : ""
                }))
            }
        },
        625: function(e, t, n) {
            "use strict";
            var r = n(335);
            r.a.setTheme(r.a.getUserTheme())
        },
        626: function(e, t, n) {},
        92: function(e, t, n) {
            "use strict";
            n.d(t, "i", (function() {
                return l
            })), n.d(t, "h", (function() {
                return d
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "a", (function() {
                return k
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "f", (function() {
                return h
            })), n.d(t, "g", (function() {
                return w
            }));
            n(51), n(19), n(163), n(434), n(93), n(41), n(169), n(95), n(725), n(345), n(63), n(256), n(165), n(179), n(296), n(302), n(552);
            var r = n(132),
                o = (n(143), n(239)),
                c = n(282);

            function l(e, symbol, t) {
                return e.tokenSet.parseToken(symbol, t.toString())
            }

            function d(e, symbol, t) {
                try {
                    var n = e.tokenSet.formatToken(symbol, t);
                    return void 0 === n ? "0" : n && n.endsWith(".0") ? n.substr(0, n.length - 2) : n
                } catch (e) {
                    console.warn("Error parsing BigNumberish for token ".concat(symbol, " with amount ").concat(t, "\n"), e)
                }
            }

            function f(e, symbol, t) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
                    r = d(e, symbol, t);
                if (!r || r.length < n + 1) return r;
                var o = r.split("."),
                    c = o[0];
                if (c.length > n) return "~".concat(c.slice(0, n - 3), "⋆⋆⋆").concat(c.slice(c.length - 3));
                if (o.length < 2) return c;
                var l = o[1],
                    f = Math.max(1, Math.min(n - c.length, 4));
                if (l.length > f) {
                    var m = parseFloat(parseFloat("0.".concat(l)).toFixed(f));
                    return m > 0 ? "~".concat(c).concat(m.toString().slice(1)) : "~".concat(c, ".").concat("00001".slice(5 - f))
                }
                return "~".concat(c, ".").concat(l)
            }

            function m(e, t) {
                var n = e * t;
                return t && 0 !== n ? n < .01 ? "<$0.01" : "~$".concat(n.toFixed(2)) : "$0.00"
            }

            function k(address) {
                if (null != address && address.startsWith("Qm")) try {
                    var e = o.CID.parse(address, c.base58btc.decoder);
                    return r.utils.hexlify(e.toV1().bytes.slice(4))
                } catch (e) {
                    throw new Error("Invalid CIDv0")
                }
                var t, n;
                try {
                    t = o.CID.parse(address)
                } catch (e) {}
                if (t) try {
                    return r.utils.hexlify(t.bytes.slice(4))
                } catch (e) {
                    throw new Error("Invalid CIDv1")
                }
                try {
                    r.utils.hexlify(address), n = r.utils.arrayify(address)
                } catch (e) {
                    throw new Error("Invalid content hash")
                }
                if (32 !== n.length) throw new Error("Content hash must be 32 bytes long");
                return address
            }

            function v(e) {
                if (e.message) {
                    if (e.message.includes("User denied") || e.message.includes("User rejected") || e.message.includes('"Request rejected"') || e.message.includes("Actionscancelled by user")) return;
                    return e.message.includes("Fee Amount is not packable") ? "Fee Amount is not packable" : e.message.includes("Transaction Amount is not packable") ? "Transaction Amount is not packable" : e.message.includes("Fee is to low") ? "Transaction fee was to low. Try again." : e.message
                }
                return "Unknown error"
            }

            function h() {
                var e = navigator.userAgent || navigator.vendor || window.opera;
                return e.match(/iPad/i) || e.match(/iPhone/i) || e.match(/iPod/i) ? "iOS" : e.match(/Android/i) ? "Android" : "unknown"
            }

            function w() {
                var e = h();
                return "iOS" === e || "Android" === e
            }
        }
    }
]);