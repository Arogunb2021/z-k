(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        1120: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                const {
                    apiKey: t
                } = e;
                return () => ({
                    label: "Fortmatic",
                    getIcon: async () => (await n.e(273).then(n.bind(null, 1708))).default,
                    getInterface: async ({
                        EventEmitter: e,
                        BigNumber: r,
                        chains: o
                    }) => {
                        const {
                            default: c
                        } = await n.e(328).then(n.t.bind(null, 1709, 7)), {
                            createEIP1193Provider: l,
                            ProviderRpcErrorCode: d,
                            ProviderRpcError: h
                        } = await Promise.resolve().then(n.bind(null, 21)), m = new e;
                        let w, y = new c(t, {
                                chainId: parseInt(o[0].id),
                                rpcUrl: o[0].rpcUrl
                            }),
                            f = y.getProvider();
                        return w = function e() {
                            const n = l(f, {
                                eth_requestAccounts: async () => {
                                    try {
                                        return await y.user.login()
                                    } catch (e) {
                                        const {
                                            code: code
                                        } = e;
                                        if (-32603 === code) throw new h({
                                            code: d.ACCOUNT_ACCESS_REJECTED,
                                            message: "Account access rejected"
                                        });
                                        return []
                                    }
                                },
                                eth_selectAccounts: null,
                                eth_getBalance: async () => {
                                    const [e] = await y.user.getBalances();
                                    return e ? r.from(e.crypto_amount).mul("1000000000000000000").toString() : "0"
                                },
                                wallet_switchEthereumChain: async ({
                                    params: n
                                }) => {
                                    const r = o.find((({
                                        id: e
                                    }) => e === n[0].chainId));
                                    if (!r) throw new Error("chain must be set before switching");
                                    return y = new c(t, {
                                        chainId: parseInt(r.id),
                                        rpcUrl: r.rpcUrl
                                    }), f = y.getProvider(), m.emit("chainChanged", r.id), e(), null
                                }
                            });
                            return w ? (w.request = n.request.bind(n), w.send = n.send.bind(n), w.sendAsync = n.sendAsync.bind(n), w) : (n.on = m.on.bind(m), n.disconnect = () => () => y.user.logout(), n)
                        }(), {
                            provider: w,
                            instance: y
                        }
                    }
                })
            }
        },
        1121: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                const {
                    whitelistedDomains: t = [/^https:\/\/gnosis-safe\.io$/, /^https:\/\/app\.safe\.global$/, /^https:\/\/safe\.global$/]
                } = e || {};
                return () => window.self !== window.top ? {
                    label: "Safe",
                    getIcon: async () => (await n.e(274).then(n.bind(null, 1710))).default,
                    getInterface: async () => {
                        const {
                            default: e
                        } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(217), n.e(257), n.e(259)]).then(n.t.bind(null, 1711, 7)), {
                            SafeAppProvider: r
                        } = await n.e(254).then(n.t.bind(null, 1712, 7)), {
                            createEIP1193Provider: o
                        } = await Promise.resolve().then(n.bind(null, 21)), c = new(e.default || e)({
                            whitelistedDomains: t
                        }), l = await Promise.race([c.safe.getInfo(), new Promise((e => setTimeout(e, 200)))]);
                        if (!l) throw new Error('App must be loaded in a Safe App context, head to <a href="https://gnosis-safe.io/app">the Safe</a> and open this website as an app.');
                        return {
                            provider: o(new r(l, c), {
                                eth_requestAccounts: () => Promise.resolve([l.safeAddress])
                            }),
                            instance: c
                        }
                    }
                } : []
            }
        },
        1122: function(e, t, n) {
            "use strict";
            var r = n(21);
            t.a = function() {
                return "undefined" == typeof window ? () => null : ({
                    device: e
                }) => "mobile" === e.type ? {
                    label: "MEW wallet",
                    getIcon: async () => (await n.e(320).then(n.bind(null, 1713))).default,
                    getInterface: async () => {
                        if (window.hasOwnProperty("ethereum") && window.ethereum.isMEWwallet) return {
                            provider: Object(r.createEIP1193Provider)(window.ethereum, {
                                wallet_switchEthereumChain: async ({
                                    params: t
                                }) => {
                                    if ("ios" === e.os.name.toLowerCase()) throw new r.ProviderRpcError({
                                        message: "MEW Wallet iOS only supports ETH network",
                                        code: 4200
                                    });
                                    return window.ethereum.setChainId(parseInt(t[0].chainId)), null
                                }
                            })
                        };
                        throw window.open("https://download.mewwallet.com?source=onboard", "_blank"), new Error("Please Install MEW wallet and use within the MEW DApp browser")
                    }
                } : null
            }
        },
        1123: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                const {
                    apiKey: t
                } = e;
                return () => ({
                    label: "Portis",
                    getIcon: async () => (await n.e(321).then(n.bind(null, 1714))).default,
                    getInterface: async ({
                        chains: e
                    }) => {
                        const {
                            default: r
                        } = await n.e(268).then(n.t.bind(null, 1715, 7)), {
                            createEIP1193Provider: o
                        } = await Promise.resolve().then(n.bind(null, 21)), c = new r(t, {
                            nodeUrl: e[0].rpcUrl,
                            chainId: e[0].id
                        }), l = c.provider, d = o(l, {
                            eth_requestAccounts: l.enable,
                            eth_selectAccounts: null,
                            wallet_switchEthereumChain: async ({
                                params: t
                            }) => {
                                const n = e.find((({
                                    id: e
                                }) => e === t[0].chainId));
                                if (!n) throw new Error("chain must be set before switching");
                                return c.changeNetwork({
                                    nodeUrl: n.rpcUrl,
                                    chainId: n.id
                                }), d.emit("chainChanged", n.id), null
                            }
                        });
                        return {
                            provider: d,
                            instance: c
                        }
                    }
                })
            }
        },
        1124: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                const {
                    buttonPosition: t,
                    modalZIndex: r,
                    apiKey: o,
                    buildEnv: c,
                    enableLogging: l,
                    loginConfig: d,
                    showTorusButton: h,
                    integrity: m,
                    whiteLabel: w,
                    skipTKey: y
                } = e || {};
                return () => ({
                    label: "Torus",
                    getIcon: async () => (await n.e(322).then(n.bind(null, 1716))).default,
                    getInterface: async ({
                        chains: e
                    }) => {
                        const {
                            default: f
                        } = await Promise.all([n.e(232), n.e(218), n.e(227), n.e(226), n.e(251)]).then(n.bind(null, 1717)), {
                            createEIP1193Provider: v,
                            ProviderRpcErrorCode: I,
                            ProviderRpcError: P
                        } = await Promise.resolve().then(n.bind(null, 21)), [E] = e;
                        let k = new f({
                            buttonPosition: t,
                            modalZIndex: r,
                            apiKey: o
                        });
                        await k.init({
                            buildEnv: c,
                            enableLogging: l,
                            network: {
                                host: E.rpcUrl,
                                chainId: parseInt(E.id),
                                networkName: E.label
                            },
                            showTorusButton: h,
                            loginConfig: d,
                            integrity: m,
                            whiteLabel: w,
                            skipTKey: y
                        });
                        const T = v(k.provider, {
                            eth_requestAccounts: async () => {
                                try {
                                    return await k.login()
                                } catch (e) {
                                    throw new P({
                                        code: I.ACCOUNT_ACCESS_REJECTED,
                                        message: "Account access rejected"
                                    })
                                }
                            },
                            eth_selectAccounts: null,
                            wallet_switchEthereumChain: async ({
                                params: t
                            }) => {
                                const n = e.find((({
                                    id: e
                                }) => e === t[0].chainId));
                                if (!n) throw new Error("chain must be set before switching");
                                return await k.setProvider({
                                    host: n.rpcUrl,
                                    chainId: parseInt(n.id),
                                    networkName: n.label
                                }), null
                            },
                            eth_chainId: async ({
                                baseRequest: e
                            }) => {
                                const t = await e({
                                    method: "eth_chainId"
                                });
                                return `0x${parseInt(t).toString(16)}`
                            }
                        });
                        return T.disconnect = () => k.cleanUp(), {
                            provider: T,
                            instance: k
                        }
                    }
                })
            }
        },
        1126: function(e, t, n) {
            "use strict";
            const r = [{
                    label: "Ethereum Mainnet",
                    value: "m/44'/60'/0'/0/0"
                }],
                o = [{
                    label: "ETH"
                }],
                c = "busy",
                l = "pairing",
                d = {
                    [c]: "Your KeepKey is currently connected to another application.\n  Please close any other browser tabs or applications that may be connected to your device and try again.",
                    [l]: "There was an error pairing the device. Please disconnect and reconnect the device and try again."
                };
            t.a = function({
                filter: filter,
                containerElement: e
            } = {}) {
                const t = async () => (await n.e(316).then(n.bind(null, 1720))).default;
                return ({
                    device: c
                }) => {
                    let l;
                    return Array.isArray(filter) && (filter.includes(c.type) || filter.includes(c.os.name)) ? null : {
                        label: "KeepKey",
                        getIcon: t,
                        getInterface: async ({
                            EventEmitter: t,
                            chains: c
                        }) => {
                            const {
                                WebUSBKeepKeyAdapter: h
                            } = await Promise.all([n.e(216), n.e(5), n.e(18), n.e(12), n.e(13), n.e(20), n.e(16), n.e(15), n.e(14), n.e(11), n.e(209), n.e(260), n.e(236), n.e(261), n.e(262), n.e(263), n.e(264), n.e(255), n.e(265), n.e(266), n.e(213), n.e(228), n.e(231), n.e(244), n.e(233), n.e(256), n.e(252), n.e(223), n.e(243), n.e(249), n.e(214), n.e(238), n.e(253), n.e(219), n.e(241), n.e(329), n.e(330), n.e(250), n.e(332), n.e(212)]).then(n.t.bind(null, 1721, 7)), {
                                Keyring: m,
                                Events: w,
                                bip32ToAddressNList: y,
                                addressNListToBIP32: f,
                                HDWalletErrorType: v
                            } = await Promise.all([n.e(5), n.e(15), n.e(14), n.e(11), n.e(225), n.e(331)]).then(n.t.bind(null, 1704, 7)), {
                                createEIP1193Provider: I,
                                ProviderRpcError: P
                            } = await Promise.resolve().then(n.bind(null, 21)), {
                                accountSelect: E,
                                entryModal: k
                            } = await n.e(6).then(n.bind(null, 420)), {
                                bigNumberFieldsToStrings: T,
                                getHardwareWalletProvider: _
                            } = await n.e(6).then(n.bind(null, 420)), {
                                utils: A
                            } = await Promise.resolve().then(n.bind(null, 78)), {
                                StaticJsonRpcProvider: C
                            } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(7)]).then(n.bind(null, 406)), S = await Promise.all([n.e(237), n.e(334)]).then(n.t.bind(null, 1722, 7)), N = new m, O = h.useKeyring(N), x = new t;
                            let j, B = c[0];
                            N.on(["*", "*", w.DISCONNECT], (async () => {
                                x.emit("accountsChanged", [])
                            })), N.on(["*", "*", w.PIN_REQUEST], (() => {
                                k("pin", (e => j.sendPin(e)), (() => j.cancel()))
                            })), N.on(["*", "*", w.PASSPHRASE_REQUEST], (() => {
                                k("passphrase", (e => j.sendPassphrase(e)), (() => j.cancel()))
                            }));
                            const M = e => {
                                    const {
                                        accountIdx: t
                                    } = j.describePath({
                                        path: y(e),
                                        coin: "Ethereum"
                                    });
                                    if (void 0 === t) throw new Error(`Could not derive account from path: ${e}`);
                                    return t
                                },
                                W = e => {
                                    const [t] = j.ethGetAccountPaths({
                                        coin: "Ethereum",
                                        accountIdx: e
                                    });
                                    return t
                                },
                                D = async ({
                                    accountIdx: e,
                                    provider: t,
                                    asset: n
                                }) => {
                                    const r = W(e),
                                        address = await j.ethGetAddress({
                                            addressNList: r.addressNList,
                                            showDisplay: !1
                                        }),
                                        o = await t.getBalance(address);
                                    return {
                                        derivationPath: f(r.addressNList),
                                        address: address,
                                        balance: {
                                            asset: n.label,
                                            value: o
                                        }
                                    }
                                };
                            let R;
                            const L = async ({
                                    derivationPath: e,
                                    chainId: t,
                                    asset: n
                                }) => {
                                    if (!j) throw new Error("Device must be connected before scanning accounts");
                                    if (B = c.find((({
                                            id: e
                                        }) => e === t)) || B, R = new C(B.rpcUrl), !r.find((({
                                            value: t
                                        }) => t === e))) try {
                                        const t = M(e);
                                        return [await D({
                                            accountIdx: t,
                                            provider: R,
                                            asset: n
                                        })]
                                    } catch (e) {
                                        throw new Error("Invalid derivation path")
                                    }
                                    return (async ({
                                        derivationPath: e,
                                        asset: t,
                                        provider: n
                                    }) => {
                                        try {
                                            let r = M(e),
                                                o = 0;
                                            const c = [];
                                            for (; o < 5;) {
                                                const e = await D({
                                                    accountIdx: r,
                                                    provider: n,
                                                    asset: t
                                                });
                                                e && e.balance && e.balance.value && e.balance.value.isZero() ? (o++, c.push(e)) : (c.push(e), o = 0), r++
                                            }
                                            return c
                                        } catch (e) {
                                            throw new Error(e.message.message)
                                        }
                                    })({
                                        derivationPath: e,
                                        asset: n,
                                        provider: R
                                    })
                                },
                                U = async () => {
                                    if (l = await E({
                                            basePaths: r,
                                            assets: o,
                                            chains: c,
                                            scanAccounts: L,
                                            containerElement: e
                                        }), !l) throw new Error("No accounts were found");
                                    return l.length && x.emit("accountsChanged", [l[0].address]), l
                                },
                                $ = async (address, e) => {
                                    if (!l || !Array.isArray(l) || !(l.length && l.length > 0)) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                    const t = l.find((e => e.address === address)) || l[0],
                                        {
                                            derivationPath: n
                                        } = t,
                                        r = M(n),
                                        {
                                            addressNList: o
                                        } = W(r),
                                        {
                                            signature: c
                                        } = await j.ethSignMessage({
                                            addressNList: o,
                                            message: "0x" === e.slice(0, 2) ? (S.default || S).toBuffer(e).toString("utf8") : e
                                        });
                                    return c
                                },
                                F = I(_((() => B.rpcUrl)), {
                                    eth_requestAccounts: async () => {
                                        j && "function" == typeof j.cancel && j.cancel();
                                        try {
                                            j = await O.pairDevice()
                                        } catch (e) {
                                            const {
                                                name: t
                                            } = e;
                                            if (t === v.ConflictingApp) throw new P({
                                                code: 4001,
                                                message: d.busy
                                            });
                                            if (t === v.WebUSBCouldNotPair) throw new P({
                                                code: 4001,
                                                message: d.pairing
                                            })
                                        }
                                        const e = await U();
                                        if (!e || !Array.isArray(e)) throw new Error("No accounts were returned from Keepkey device");
                                        if (!e.length) throw new P({
                                            code: 4001,
                                            message: "User rejected the request."
                                        });
                                        if (!e[0].hasOwnProperty("address")) throw new Error("The account returned does not have a required address field");
                                        return [e[0].address]
                                    },
                                    eth_selectAccounts: async () => (await U()).map((({
                                        address: address
                                    }) => address)),
                                    eth_accounts: async () => {
                                        if (!l || !Array.isArray(l)) throw new Error("No accounts were returned from Keepkey device");
                                        return l[0].hasOwnProperty("address") ? [l[0].address] : []
                                    },
                                    eth_chainId: async () => B && null != B.id ? B.id : "0x0",
                                    eth_signTransaction: async ({
                                        params: [e]
                                    }) => {
                                        if (!l || !Array.isArray(l) || !l.length) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                        const t = e && e.hasOwnProperty("from") ? l.find((t => t.address.toLocaleLowerCase() === e.from.toLocaleLowerCase())) : l[0],
                                            {
                                                derivationPath: n,
                                                address: address
                                            } = t,
                                            r = y(n),
                                            o = R.getSigner(address);
                                        e.gasLimit = e.gas || e.gasLimit, delete e.gas, e.gasLimit = void 0;
                                        let c = await o.populateTransaction(e);
                                        const {
                                            to: d,
                                            value: h,
                                            nonce: m,
                                            gasLimit: w,
                                            gasPrice: f,
                                            maxFeePerGas: v,
                                            maxPriorityFeePerGas: I,
                                            data: data
                                        } = T(c), P = f ? {
                                            gasPrice: f
                                        } : {
                                            maxFeePerGas: v,
                                            maxPriorityFeePerGas: I
                                        }, E = {
                                            addressNList: r,
                                            chainId: parseInt(B.id),
                                            to: d || "",
                                            value: h || "",
                                            nonce: A.hexValue(m),
                                            gasLimit: w || "0x0",
                                            data: (data || "").toString(),
                                            ...P
                                        };
                                        let k;
                                        try {
                                            ({
                                                serialized: k
                                            } = await j.ethSignTx(E))
                                        } catch (e) {
                                            throw e.message && e.message.message ? new Error(e.message.message) : new Error(e)
                                        }
                                        return k
                                    },
                                    eth_sendTransaction: async ({
                                        baseRequest: e,
                                        params: t
                                    }) => {
                                        const n = await F.request({
                                            method: "eth_signTransaction",
                                            params: t
                                        });
                                        return await e({
                                            method: "eth_sendRawTransaction",
                                            params: [n]
                                        })
                                    },
                                    eth_sign: async ({
                                        params: [address, e]
                                    }) => $(address, e),
                                    personal_sign: async ({
                                        params: [e, address]
                                    }) => $(address, e),
                                    eth_signTypedData: null,
                                    wallet_switchEthereumChain: async ({
                                        params: [{
                                            chainId: e
                                        }]
                                    }) => {
                                        if (B = c.find((({
                                                id: t
                                            }) => t === e)) || B, !B) throw new Error("chain must be set before switching");
                                        return x.emit("chainChanged", B.id), null
                                    },
                                    wallet_addEthereumChain: null
                                });
                            return F.on = x.on.bind(x), {
                                provider: F,
                                instance: {
                                    selectAccount: U
                                }
                            }
                        }
                    }
                }
            }
        },
        1127: function(e, t, n) {
            "use strict";
            const r = e => !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/));
            t.a = function(e) {
                return () => ({
                    label: "Ledger",
                    getIcon: async () => (await n.e(317).then(n.bind(null, 1723))).default,
                    getInterface: async ({
                        chains: t,
                        EventEmitter: o
                    }) => {
                        const {
                            loadConnectKit: c,
                            SupportedProviders: l,
                            SupportedProviderImplementations: d
                        } = await n.e(267).then(n.bind(null, 1724)), h = await c();
                        h.enableDebugLogs();
                        const m = h.checkSupport({
                                providerType: l.Ethereum,
                                chainId: null == e ? void 0 : e.chainId,
                                infuraId: null == e ? void 0 : e.infuraId,
                                rpc: null == e ? void 0 : e.rpc
                            }),
                            w = await h.getProvider();
                        if (m.providerImplementation === d.LedgerConnect) return {
                            provider: w
                        };
                        const {
                            StaticJsonRpcProvider: y
                        } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(7)]).then(n.bind(null, 406)), {
                            ProviderRpcError: f,
                            ProviderRpcErrorCode: v
                        } = await Promise.resolve().then(n.bind(null, 21)), {
                            default: I
                        } = await Promise.all([n.e(25), n.e(30)]).then(n.bind(null, 1226)), {
                            Subject: P,
                            fromEvent: E
                        } = await Promise.all([n.e(23), n.e(318)]).then(n.bind(null, 1732)), {
                            takeUntil: k,
                            take: T
                        } = await Promise.all([n.e(23), n.e(319)]).then(n.bind(null, 1736)), _ = w.connector, A = new o;
                        return {
                            provider: new class {
                                constructor({
                                    connector: e,
                                    chains: t
                                }) {
                                    this.emit = A.emit.bind(A), this.on = A.on.bind(A), this.removeListener = A.removeListener.bind(A), this.connector = e, this.chains = t, this.disconnected$ = new P, this.providers = {}, E(this.connector, "session_update", ((e, t) => {
                                        if (e) throw e;
                                        return t
                                    })).pipe(k(this.disconnected$)).subscribe({
                                        next: ({
                                            params: e
                                        }) => {
                                            const [{
                                                accounts: t,
                                                chainId: n
                                            }] = e;
                                            this.emit("accountsChanged", t);
                                            const o = r(n) ? n : `0x${n.toString(16)}`;
                                            this.emit("chainChanged", o)
                                        },
                                        error: console.warn
                                    }), E(this.connector, "disconnect", ((e, t) => {
                                        if (e) throw e;
                                        return t
                                    })).pipe(k(this.disconnected$)).subscribe({
                                        next: () => {
                                            this.emit("accountsChanged", []), this.disconnected$.next(!0), "undefined" != typeof localStorage && localStorage.removeItem("walletconnect")
                                        },
                                        error: console.warn
                                    }), this.disconnect = () => this.connector.killSession(), this.request = async ({
                                        method: e,
                                        params: n
                                    }) => {
                                        if ("eth_chainId" === e) return r(this.connector.chainId) ? this.connector.chainId : `0x${this.connector.chainId.toString(16)}`;
                                        if ("eth_requestAccounts" === e) return new Promise(((t, n) => {
                                            if (this.connector.connected) {
                                                const {
                                                    accounts: e,
                                                    chainId: n
                                                } = this.connector.session, o = r(n) ? n : `0x${n.toString(16)}`;
                                                return this.emit("chainChanged", o), t(e)
                                            }
                                            t(w.request({
                                                method: e
                                            })), E(this.connector, "connect", ((e, t) => {
                                                if (e) throw e;
                                                return t
                                            })).pipe(T(1)).subscribe({
                                                next: ({
                                                    params: e
                                                }) => {
                                                    const [{
                                                        accounts: n,
                                                        chainId: o
                                                    }] = e;
                                                    this.emit("accountsChanged", n);
                                                    const c = r(o) ? o : `0x${o.toString(16)}`;
                                                    this.emit("chainChanged", c), t(n)
                                                },
                                                error: n
                                            })
                                        }));
                                        if ("eth_selectAccounts" === e) throw new f({
                                            code: v.UNSUPPORTED_METHOD,
                                            message: `The Provider does not support the requested method: ${e}`
                                        });
                                        if ("wallet_switchEthereumChain" == e) throw new f({
                                            code: v.UNSUPPORTED_METHOD,
                                            message: `The Provider does not support the requested method: ${e}`
                                        });
                                        if ("eth_sendTransaction" === e) return this.connector.sendTransaction(n[0]);
                                        if ("eth_signTransaction" === e) return this.connector.signTransaction(n[0]);
                                        if ("personal_sign" === e) return this.connector.signPersonalMessage(n);
                                        if ("eth_sign" === e) return this.connector.signMessage(n);
                                        if (e.includes("eth_signTypedData")) return this.connector.signTypedData(n);
                                        if ("eth_accounts" === e) return this.connector.sendCustomRequest({
                                            id: 1337,
                                            jsonrpc: "2.0",
                                            method: e,
                                            params: n
                                        });
                                        const o = await this.request({
                                            method: "eth_chainId"
                                        });
                                        if (!this.providers[o]) {
                                            const n = t.find((({
                                                id: e
                                            }) => e === o));
                                            if (!n) throw new f({
                                                code: v.CHAIN_NOT_ADDED,
                                                message: `The Provider does not have a rpcUrl to make a request for the requested method: ${e}`
                                            });
                                            this.providers[o] = new y(n.rpcUrl)
                                        }
                                        return this.providers[o].send(e, n)
                                    }
                                }
                            }({
                                chains: t,
                                connector: _
                            })
                        }
                    }
                })
            }
        },
        1128: function(e, t, n) {
            "use strict";
            var r = n(33);
            const o = "m/44'/60'/0'/0",
                c = [{
                    label: "ETH"
                }],
                l = [{
                    label: "Ethereum Mainnet",
                    value: o
                }],
                d = async ({
                    publicKey: e,
                    chainCode: t,
                    path: path
                }, o, c, l) => {
                    const {
                        default: d
                    } = await Promise.all([n.e(18), n.e(12), n.e(13), n.e(20), n.e(16), n.e(242)]).then(n.t.bind(null, 1725, 7)), h = await Promise.all([n.e(26), n.e(31)]).then(n.t.bind(null, 1225, 7)), {
                        publicToAddress: m,
                        toChecksumAddress: w
                    } = h.default || h, y = new d;
                    y.publicKey = r.Buffer.from(e, "hex"), y.chainCode = r.Buffer.from(t, "hex");
                    const address = w(`0x${m(y.deriveChild(c).publicKey,!0).toString("hex")}`);
                    return {
                        derivationPath: `${path}/${c}`,
                        address: address,
                        balance: {
                            asset: o.label,
                            value: await l.getBalance(address)
                        }
                    }
                };
            t.a = function(e) {
                const t = async () => (await n.e(323).then(n.bind(null, 1726))).default;
                return ({
                    device: r
                }) => {
                    const {
                        email: h,
                        appUrl: m,
                        customNetwork: w,
                        filter: filter,
                        containerElement: y
                    } = e || {};
                    if (!h || !m) throw new Error("Email and AppUrl required in Trezor options for Trezor Wallet Connection");
                    if (Array.isArray(filter) && (filter.includes(r.type) || filter.includes(r.os.name))) return null;
                    let f;
                    return {
                        label: "Trezor",
                        getIcon: t,
                        getInterface: async ({
                            EventEmitter: e,
                            chains: t
                        }) => {
                            const {
                                default: r
                            } = await n.e(210).then(n.t.bind(null, 1727, 7)), {
                                Transaction: v,
                                FeeMarketEIP1559Transaction: I
                            } = await Promise.all([n.e(17), n.e(19), n.e(10), n.e(21), n.e(29)]).then(n.t.bind(null, 1189, 7)), {
                                createEIP1193Provider: P,
                                ProviderRpcError: E
                            } = await Promise.resolve().then(n.bind(null, 21)), {
                                accountSelect: k
                            } = await n.e(6).then(n.bind(null, 420)), {
                                getCommon: T,
                                bigNumberFieldsToStrings: _,
                                getHardwareWalletProvider: A
                            } = await n.e(6).then(n.bind(null, 420)), C = await Promise.all([n.e(26), n.e(31)]).then(n.t.bind(null, 1225, 7)), {
                                compress: S
                            } = (await Promise.all([n.e(18), n.e(12), n.e(13), n.e(20), n.e(16), n.e(17), n.e(19), n.e(10), n.e(21), n.e(246), n.e(224), n.e(245), n.e(235), n.e(248)]).then(n.bind(null, 1735))).publicKey, {
                                StaticJsonRpcProvider: N
                            } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(7)]).then(n.bind(null, 406)), O = r.default || r;
                            O.manifest({
                                email: h,
                                appUrl: m
                            });
                            const x = new e;
                            let j, B, M = t[0];
                            const W = async ({
                                    derivationPath: e,
                                    chainId: n,
                                    asset: r
                                }) => {
                                    M = t.find((({
                                        id: e
                                    }) => e === n)) || M, B = new N(M.rpcUrl);
                                    const {
                                        publicKey: c,
                                        chainCode: l,
                                        path: path
                                    } = await async function(e) {
                                        if (!e) throw new Error("a derivation path is needed to get the public key");
                                        try {
                                            const t = await O.getPublicKey({
                                                path: e,
                                                coin: "ETH"
                                            });
                                            if (!t.success) throw new Error(t.payload.error);
                                            return j = {
                                                publicKey: t.payload.publicKey,
                                                chainCode: t.payload.chainCode,
                                                path: t.payload.serializedPath
                                            }, j
                                        } catch (e) {
                                            throw new Error(`There was an error accessing your Trezor accounts - Error: ${e}`)
                                        }
                                    }(e);
                                    if (e !== o) {
                                        const address = await async function(path) {
                                            const e = `Unable to derive address from path ${path}`;
                                            try {
                                                const t = await O.ethereumGetAddress({
                                                    path: path,
                                                    showOnTrezor: !0
                                                });
                                                if (!t.success) throw new Error(e);
                                                return t.payload.address
                                            } catch (t) {
                                                throw console.error(t), new Error(e)
                                            }
                                        }(path);
                                        return [{
                                            derivationPath: e,
                                            address: address,
                                            balance: {
                                                asset: r.label,
                                                value: await B.getBalance(address.toLowerCase())
                                            }
                                        }]
                                    }
                                    return (async (e, t, n) => {
                                        const r = [];
                                        let o = 0,
                                            c = 0;
                                        for (; c < 5;) {
                                            const l = await d(e, t, o, n);
                                            l && l.hasOwnProperty("balance") && l.balance.hasOwnProperty("value") && l.balance.value.isZero() ? (c++, r.push(l)) : (r.push(l), c = 0), o++
                                        }
                                        return r
                                    })({
                                        publicKey: S(c),
                                        chainCode: l || "",
                                        path: e
                                    }, r, B)
                                },
                                D = async () => (f = await k({
                                    basePaths: l,
                                    assets: c,
                                    chains: t,
                                    scanAccounts: W,
                                    containerElement: y
                                }), Array.isArray(f) && f.length && f[0].hasOwnProperty("address") && x.emit("accountsChanged", [f[0].address]), f);
                            async function R(e) {
                                if (!Array.isArray(f) || !f.length) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                let t;
                                e.hasOwnProperty("from") && (t = f.find((t => t.address === e.from))), t = t || f[0];
                                const {
                                    derivationPath: n,
                                    address: address
                                } = t;
                                e.gasLimit = e.gas || e.gasLimit, delete e.gas;
                                const r = B.getSigner(address),
                                    o = await r.populateTransaction(e);
                                o.hasOwnProperty("nonce") && "number" == typeof o.nonce && (o.nonce = o.nonce.toString(16)), o.hasOwnProperty("nonce") && "string" == typeof o.nonce && (o.nonce = C.addHexPrefix(o.nonce));
                                const c = function(e) {
                                    if (!e || !e.hasOwnProperty("gasLimit") && !e.hasOwnProperty("gas")) throw new Error("There was no Transaction Object or both the gasLimit and gas property are missing");
                                    const t = e.gasLimit || e.gas;
                                    return e.maxFeePerGas || e.maxPriorityFeePerGas ? {
                                        to: e.to,
                                        value: e.value || "",
                                        gasLimit: t,
                                        maxFeePerGas: e.maxFeePerGas,
                                        maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                                        nonce: e.nonce,
                                        chainId: Number(M.id),
                                        data: e.hasOwnProperty("data") ? e.data : ""
                                    } : {
                                        to: e.to,
                                        value: e.value || "",
                                        gasPrice: e.gasPrice,
                                        gasLimit: t,
                                        nonce: e.nonce,
                                        chainId: Number(M.id),
                                        data: e.hasOwnProperty("data") ? e.data : ""
                                    }
                                }(_(o));
                                c.from = address;
                                const l = M.hasOwnProperty("id") ? Number(M.id) : 1,
                                    d = await T({
                                        customNetwork: w,
                                        chainId: l
                                    }),
                                    h = await
                                function(path, e) {
                                    try {
                                        return O.ethereumSignTransaction({
                                            path: path,
                                            transaction: e
                                        })
                                    } catch (e) {
                                        throw new Error(`There was an error signing transaction - Error: ${e}`)
                                    }
                                }(n, c);
                                if (!h.success) {
                                    const e = "Unknown message" === h.payload.error ? "This type of transactions is not supported on this device" : h.payload.error;
                                    throw new Error(e)
                                }
                                let m;
                                return m = c.maxFeePerGas || c.maxPriorityFeePerGas ? I.fromTxData({ ...c,
                                    ...h.payload
                                }, {
                                    common: d
                                }) : v.fromTxData({ ...c,
                                    ...h.payload
                                }, {
                                    common: d
                                }), m ? `0x${m.serialize().toString("hex")}` : ""
                            }
                            async function L(address, e) {
                                if (!Array.isArray(f) || !f.length) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                const t = f.find((e => e.address === address)) || f[0];
                                return new Promise(((n, r) => {
                                    O.ethereumSignMessage({
                                        path: t.derivationPath,
                                        message: C.stripHexPrefix(e.data),
                                        hex: !0
                                    }).then((e => {
                                        if (e.success) {
                                            e.payload.address !== C.toChecksumAddress(address) && r(new Error("signature doesnt match the right address"));
                                            const t = `0x${e.payload.signature}`;
                                            n(t)
                                        } else r(new Error(e.payload && e.payload.error || "There was an error signing a message"))
                                    }))
                                }))
                            }
                            const U = P(A((() => null == M ? void 0 : M.rpcUrl)), {
                                eth_requestAccounts: async () => {
                                    const e = await D();
                                    if (!Array.isArray(e)) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                    if (0 === e.length) throw new E({
                                        code: 4001,
                                        message: "User rejected the request."
                                    });
                                    if (!e[0].hasOwnProperty("address")) throw new Error("No address property associated with the selected account");
                                    return [e[0].address]
                                },
                                eth_selectAccounts: async () => (await D()).map((({
                                    address: address
                                }) => address)),
                                eth_accounts: async () => Array.isArray(f) && f.length && f[0].hasOwnProperty("address") ? [f[0].address] : [],
                                eth_chainId: async () => M.hasOwnProperty("id") ? M.id : "",
                                eth_signTransaction: async ({
                                    params: [e]
                                }) => R(e),
                                eth_sendTransaction: async ({
                                    baseRequest: e,
                                    params: t
                                }) => {
                                    const n = await U.request({
                                        method: "eth_signTransaction",
                                        params: t
                                    });
                                    return await e({
                                        method: "eth_sendRawTransaction",
                                        params: [n]
                                    })
                                },
                                eth_sign: async ({
                                    params: [address, e]
                                }) => L(address, {
                                    data: e
                                }),
                                personal_sign: async ({
                                    params: [e, address]
                                }) => L(address, {
                                    data: e
                                }),
                                wallet_switchEthereumChain: async ({
                                    params: [{
                                        chainId: e
                                    }]
                                }) => {
                                    if (M = t.find((({
                                            id: t
                                        }) => t === e)) || M, !M) throw new Error("chain must be set before switching");
                                    return x.emit("chainChanged", M.id), null
                                },
                                eth_signTypedData: null,
                                wallet_addEthereumChain: null
                            });
                            return U.on = x.on.bind(x), {
                                provider: U
                            }
                        }
                    }
                }
            }
        },
        1129: function(e, t, n) {
            "use strict";
            const r = "m/44'/60'/0'/0/0",
                o = [{
                    label: "D'CENT",
                    value: r
                }],
                c = [{
                    label: "ETH"
                }];
            t.a = function({
                customNetwork: e,
                filter: filter,
                containerElement: t
            } = {}) {
                const r = async () => (await n.e(272).then(n.bind(null, 1728))).default;
                return ({
                    device: l
                }) => {
                    if (Array.isArray(filter) && (filter.includes(l.type) || filter.includes(l.os.name))) return null;
                    const d = "mobile" === l.type;
                    let h;
                    return {
                        label: "D'CENT",
                        getIcon: r,
                        getInterface: async ({
                            EventEmitter: r,
                            chains: l
                        }) => {
                            const m = new r;
                            if (d) {
                                const e = window.ethereum;
                                return d && !e && location.replace("https://link.dcentwallet.com/DAppBrowser/?url=" + document.location), e.on = m.on.bind(m), {
                                    provider: e
                                }
                            }
                            const {
                                StaticJsonRpcProvider: w
                            } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(7)]).then(n.bind(null, 406)), {
                                default: y
                            } = await Promise.all([n.e(247), n.e(211), n.e(327), n.e(239), n.e(229), n.e(240), n.e(335)]).then(n.t.bind(null, 1729, 7)), f = new y({}), {
                                TransactionFactory: v
                            } = await Promise.all([n.e(17), n.e(19), n.e(10), n.e(21), n.e(29)]).then(n.t.bind(null, 1189, 7)), {
                                getCommon: I,
                                accountSelect: P
                            } = await n.e(6).then(n.bind(null, 420)), {
                                createEIP1193Provider: E,
                                ProviderRpcErrorCode: k,
                                ProviderRpcError: T
                            } = await Promise.resolve().then(n.bind(null, 21));
                            let _ = l[0];
                            const A = async ({
                                    chainId: e
                                }) => {
                                    _ = l.find((({
                                        id: t
                                    }) => t === e)) || _;
                                    const t = new w(_.rpcUrl);
                                    return (async (e, t) => {
                                        const n = [],
                                            r = await e.addAccounts(),
                                            o = {
                                                derivationPath: "m/44'/60'/0'/0/0",
                                                address: r[0],
                                                balance: {
                                                    asset: "",
                                                    value: await t.getBalance(r[0])
                                                }
                                            };
                                        return n.push(o), n
                                    })(f, t)
                                },
                                C = async () => (h = await P({
                                    basePaths: o,
                                    assets: c,
                                    chains: l,
                                    scanAccounts: A,
                                    supportsCustomPath: !1,
                                    containerElement: t
                                }), h.length && m.emit("accountsChanged", [h[0].address]), h),
                                S = E({
                                    request: async ({
                                        method: e,
                                        params: t
                                    }) => {
                                        const n = await fetch(_.rpcUrl, {
                                            method: "POST",
                                            body: JSON.stringify({
                                                id: "42",
                                                method: e,
                                                params: t
                                            })
                                        }).then((e => e.json()));
                                        if (n.result) return n.result;
                                        throw n.error
                                    }
                                }, {
                                    eth_requestAccounts: async () => {
                                        const e = await C();
                                        if (0 === e.length) throw new T({
                                            code: k.ACCOUNT_ACCESS_REJECTED,
                                            message: "User rejected the request."
                                        });
                                        return e[0] ? [e[0].address] : []
                                    },
                                    eth_selectAccounts: async () => (await C()).map((({
                                        address: address
                                    }) => address)),
                                    eth_accounts: async () => h && h[0].address ? [h[0].address] : [],
                                    eth_chainId: async () => _.id,
                                    eth_signTransaction: async ({
                                        params: [t]
                                    }) => {
                                        if (!h) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                        if (!t) throw new T({
                                            message: "Invalid method parameters",
                                            code: k.INVALID_PARAMS,
                                            data: t
                                        });
                                        const n = h.find((e => e.address === t.from)) || h[0],
                                            {
                                                address: r
                                            } = n;
                                        t = { ...t,
                                            from: r
                                        };
                                        const o = _.hasOwnProperty("id") ? Number.parseInt(_.id) : 1,
                                            c = await I({
                                                customNetwork: e,
                                                chainId: o
                                            });
                                        t.gasLimit = t.gas || t.gasLimit;
                                        const l = v.fromTxData({ ...t
                                        }, {
                                            common: c,
                                            freeze: !1
                                        });
                                        try {
                                            return `0x${(await f.signTransaction(r,l)).serialize().toString("hex")}`
                                        } catch (e) {
                                            throw e
                                        }
                                    },
                                    eth_sendTransaction: async ({
                                        baseRequest: e,
                                        params: t
                                    }) => {
                                        const n = await S.request({
                                            method: "eth_signTransaction",
                                            params: t
                                        });
                                        return await e({
                                            method: "eth_sendRawTransaction",
                                            params: [n]
                                        })
                                    },
                                    eth_sign: async ({
                                        params: [address, e]
                                    }) => {
                                        if (!(h && h.length && h.length > 0)) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                        const t = h.find((e => e.address === address)) || h[0];
                                        return f.signMessage(t.address, e)
                                    },
                                    personal_sign: async ({
                                        params: [e, address]
                                    }) => {
                                        if (!(h && h.length && h.length > 0)) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                        const t = h.find((e => e.address === address)) || h[0];
                                        return f.signPersonalMessage(t.address, e)
                                    },
                                    eth_signTypedData: async ({
                                        params: [address, e]
                                    }) => {
                                        if (!(h && h.length && h.length > 0)) throw new Error("No account selected. Must call eth_requestAccounts first.");
                                        const t = h.find((e => e.address === address)) || h[0];
                                        return f.signTypedData(t.address, e, {
                                            version: "V4"
                                        })
                                    },
                                    wallet_switchEthereumChain: async ({
                                        params: [{
                                            chainId: e
                                        }]
                                    }) => {
                                        if (_ = l.find((({
                                                id: t
                                            }) => t === e)) || _, !_) throw new Error("chain must be set before switching");
                                        return m.emit("chainChanged", _.id), null
                                    },
                                    wallet_addEthereumChain: null
                                });
                            return S.on = m.on.bind(m), {
                                provider: S
                            }
                        }
                    }
                }
            }
        },
        1130: function(e, t, n) {
            "use strict";
            const r = e => !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/));
            t.a = function(e) {
                const {
                    bridge: t = "https://bridge.walletconnect.org",
                    qrcodeModalOptions: o,
                    connectFirstChainId: c
                } = e || {};
                return () => ({
                    label: "WalletConnect",
                    getIcon: async () => (await n.e(324).then(n.bind(null, 1730))).default,
                    getInterface: async ({
                        chains: e,
                        EventEmitter: l
                    }) => {
                        const {
                            StaticJsonRpcProvider: d
                        } = await Promise.all([n.e(2), n.e(3), n.e(4), n.e(7)]).then(n.bind(null, 406)), {
                            ProviderRpcError: h,
                            ProviderRpcErrorCode: m
                        } = await Promise.resolve().then(n.bind(null, 21)), {
                            default: w
                        } = await Promise.all([n.e(25), n.e(30)]).then(n.bind(null, 1226));
                        let y = await n.e(220).then(n.t.bind(null, 1731, 7));
                        y = y.default || y;
                        const {
                            Subject: f,
                            fromEvent: v
                        } = await Promise.all([n.e(24), n.e(325)]).then(n.bind(null, 1733)), {
                            takeUntil: I,
                            take: P
                        } = await Promise.all([n.e(24), n.e(326)]).then(n.bind(null, 1737)), E = new w({
                            bridge: t
                        }), k = new l;
                        return {
                            provider: new class {
                                constructor({
                                    connector: e,
                                    chains: t
                                }) {
                                    this.emit = k.emit.bind(k), this.on = k.on.bind(k), this.removeListener = k.removeListener.bind(k), this.connector = e, this.chains = t, this.disconnected$ = new f, this.providers = {}, v(this.connector, "session_update", ((e, t) => {
                                        if (e) throw e;
                                        return t
                                    })).pipe(I(this.disconnected$)).subscribe({
                                        next: ({
                                            params: e
                                        }) => {
                                            const [{
                                                accounts: t,
                                                chainId: n
                                            }] = e;
                                            this.emit("accountsChanged", t);
                                            const o = r(n) ? n : `0x${n.toString(16)}`;
                                            this.emit("chainChanged", o)
                                        },
                                        error: console.warn
                                    }), v(this.connector, "disconnect", ((e, t) => {
                                        if (e) throw e;
                                        return t
                                    })).pipe(I(this.disconnected$)).subscribe({
                                        next: () => {
                                            this.emit("accountsChanged", []), this.disconnected$.next(!0), "undefined" != typeof localStorage && localStorage.removeItem("walletconnect")
                                        },
                                        error: console.warn
                                    }), this.disconnect = () => this.connector.killSession(), this.request = async ({
                                        method: e,
                                        params: n
                                    }) => {
                                        if ("eth_chainId" === e) return r(this.connector.chainId) ? this.connector.chainId : `0x${this.connector.chainId.toString(16)}`;
                                        if ("eth_requestAccounts" === e) return new Promise(((e, n) => {
                                            if (this.connector.connected) {
                                                const {
                                                    accounts: t,
                                                    chainId: n
                                                } = this.connector.session, o = r(n) ? n : `0x${n.toString(16)}`;
                                                return this.emit("chainChanged", o), e(t)
                                            }
                                            this.connector.createSession(c ? {
                                                chainId: parseInt(t[0].id, 16)
                                            } : void 0).then((() => {
                                                y.open(this.connector.uri, (() => n(new h({
                                                    code: 4001,
                                                    message: "User rejected the request."
                                                }))), o)
                                            })), v(this.connector, "connect", ((e, t) => {
                                                if (e) throw e;
                                                return t
                                            })).pipe(P(1)).subscribe({
                                                next: ({
                                                    params: t
                                                }) => {
                                                    const [{
                                                        accounts: n,
                                                        chainId: o
                                                    }] = t;
                                                    this.emit("accountsChanged", n);
                                                    const c = r(o) ? o : `0x${o.toString(16)}`;
                                                    this.emit("chainChanged", c), y.close(), e(n)
                                                },
                                                error: n
                                            })
                                        }));
                                        if ("eth_selectAccounts" === e) throw new h({
                                            code: m.UNSUPPORTED_METHOD,
                                            message: `The Provider does not support the requested method: ${e}`
                                        });
                                        if ("wallet_switchEthereumChain" == e) {
                                            if (!n) throw new h({
                                                code: m.INVALID_PARAMS,
                                                message: "The Provider requires a chainId to be passed in as an argument"
                                            });
                                            const e = n[0];
                                            if (!e.hasOwnProperty("chainId") || void 0 === e.chainId) throw new h({
                                                code: m.INVALID_PARAMS,
                                                message: "The Provider requires a chainId to be passed in as an argument"
                                            });
                                            return this.connector.sendCustomRequest({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: e.chainId
                                                }]
                                            })
                                        }
                                        if ("eth_sendTransaction" === e) return this.connector.sendTransaction(n[0]);
                                        if ("eth_signTransaction" === e) return this.connector.signTransaction(n[0]);
                                        if ("personal_sign" === e) return this.connector.signPersonalMessage(n);
                                        if ("eth_sign" === e) return this.connector.signMessage(n);
                                        if (e.includes("eth_signTypedData")) return this.connector.signTypedData(n);
                                        if ("eth_accounts" === e) return this.connector.sendCustomRequest({
                                            id: 1337,
                                            jsonrpc: "2.0",
                                            method: e,
                                            params: n
                                        });
                                        const l = await this.request({
                                            method: "eth_chainId"
                                        });
                                        if (!this.providers[l]) {
                                            const n = t.find((({
                                                id: e
                                            }) => e === l));
                                            if (!n) throw new h({
                                                code: m.CHAIN_NOT_ADDED,
                                                message: `The Provider does not have a rpcUrl to make a request for the requested method: ${e}`
                                            });
                                            this.providers[l] = new d(n.rpcUrl)
                                        }
                                        return this.providers[l].send(e, n)
                                    }
                                }
                            }({
                                chains: e,
                                connector: E
                            })
                        }
                    }
                })
            }
        },
        1146: function(e, t, n) {
            "use strict";
            var r, o, c, l = n(1119),
                d = n.n(l);
            ! function(e) {
                e.AlphaWallet = "isAlphaWallet", e.AToken = "isAToken", e.Binance = "bbcSignTx", e.Bitpie = "isBitpie", e.BlockWallet = "isBlockWallet", e.Coinbase = "isToshi", e.CoinbaseExtension = "isCoinbaseWallet", e.Detected = "request", e.Dcent = "isDcentWallet", e.Exodus = "isExodus", e.Frontier = "isFrontier", e.Frame = "isFrame", e.HuobiWallet = "isHbWallet", e.HyperPay = "isHyperPay", e.ImToken = "isImToken", e.Liquality = "isLiquality", e.MeetOne = "wallet", e.MetaMask = "isMetaMask", e.MyKey = "isMYKEY", e.OwnBit = "isOwnbit", e.Status = "isStatus", e.Trust = "isTrust", e.TokenPocket = "isTokenPocket", e.TP = "isTp", e.WalletIo = "isWalletIO", e.XDEFI = "isXDEFI", e.OneInch = "isOneInchIOSWallet", e.Tokenary = "isTokenary", e.Tally = "isTally", e.BraveWallet = "isBraveWallet", e.Rabby = "isRabby", e.MathWallet = "isMathWallet", e.GameStop = "isGamestop", e.BitKeep = "isBitKeep", e.Sequence = "isSequence", e.Core = "isAvalanche", e.Opera = "isOpera", e.Bitski = "isBitski", e.Enkrypt = "isEnkrypt", e.Zeal = "isZeal", e.Phantom = "isPhantom", e.Zerion = "isZerion", e.Rainbow = "isRainbow"
            }(r || (r = {})),
            function(e) {
                e.AlphaWallet = "AlphaWallet", e.AToken = "AToken", e.Binance = "Binance Smart Wallet", e.Bitpie = "Bitpie", e.Bitski = "Bitski", e.BlockWallet = "BlockWallet", e.Brave = "Brave Wallet", e.Coinbase = "Coinbase Wallet", e.Dcent = "D'CENT", e.Detected = "Detected Wallet", e.Exodus = "Exodus", e.Frame = "Frame", e.Frontier = "Frontier", e.HuobiWallet = "Huobi Wallet", e.HyperPay = "HyperPay", e.ImToken = "imToken", e.Liquality = "Liquality", e.MeetOne = "MeetOne", e.MetaMask = "MetaMask", e.MyKey = "MyKey", e.Opera = "Opera Wallet", e.OwnBit = "OwnBit", e.Status = "Status Wallet", e.Trust = "Trust Wallet", e.TokenPocket = "TokenPocket", e.TP = "TP Wallet", e.WalletIo = "Wallet.io", e.XDEFI = "XDEFI Wallet", e.OneInch = "1inch Wallet", e.Tokenary = "Tokenary Wallet", e.Tally = "Tally Ho Wallet", e.Rabby = "Rabby", e.MathWallet = "MathWallet", e.GameStop = "GameStop Wallet", e.BitKeep = "BitKeep", e.Sequence = "Sequence", e.Core = "Core", e.Enkrypt = "Enkrypt", e.Zeal = "Zeal", e.Phantom = "Phantom", e.Zerion = "Zerion", e.Rainbow = "Rainbow"
            }(o || (o = {})),
            function(e) {
                e.Ethereum = "ethereum", e.Binance = "BinanceChain", e.Tally = "tally", e.Web3 = "web3", e.Arbitrum = "arbitrum", e.XFI = "xfi", e.GameStop = "gamestop", e.BitKeep = "bitkeep", e.Avalanche = "avalanche", e.Bitski = "Bitski", e.Enkrypt = "enkrypt", e.Zeal = "zeal", e.Frontier = "frontier", e.Phantom = "phantom"
            }(c || (c = {}));
            var h = n(21);
            const m = null;

            function w(e, t) {
                return async () => ({
                    provider: window.ethereum.providers && Array.isArray(window.ethereum.providers) ? y(e, t) : window.ethereum
                })
            }

            function y(e, t) {
                return window.ethereum.providers.find((n => t ? !!n[e] && !f(e, n) : !!n[e]))
            }

            function f(e, t) {
                return Object.values(r).filter((t => t !== e && t !== r.Detected)).some((e => !!t[e]))
            }
            const v = {
                    label: o.MetaMask,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.MetaMask] && !f(r.MetaMask, e),
                    getIcon: async () => (await n.e(298).then(n.bind(null, 3548))).default,
                    getInterface: w(r.MetaMask, !0),
                    platforms: ["all"]
                },
                I = {
                    label: o.Exodus,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Exodus],
                    getIcon: async () => (await n.e(288).then(n.bind(null, 3549))).default,
                    getInterface: w(r.Exodus),
                    platforms: ["all"]
                },
                P = {
                    label: o.Frontier,
                    injectedNamespace: c.Frontier,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e.ethereum && !!e.ethereum[r.Frontier],
                    getIcon: async () => (await n.e(290).then(n.bind(null, 3550))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.frontier.ethereum)
                    }),
                    platforms: ["all"]
                },
                E = {
                    label: o.Brave,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.BraveWallet],
                    getIcon: async () => (await n.e(283).then(n.bind(null, 3551))).default,
                    getInterface: w(r.BraveWallet),
                    platforms: ["all"]
                },
                k = {
                    label: o.Binance,
                    injectedNamespace: c.Binance,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Binance],
                    getIcon: async () => (await n.e(278).then(n.bind(null, 3552))).default,
                    getInterface: async () => {
                        let e = { ...window.BinanceChain
                        };
                        window.BinanceChain = e;
                        const t = window.BinanceChain.on.bind(window.BinanceChain);
                        window.BinanceChain.on = (e, n) => {
                            t(e, "chainChanged" === e ? e => {
                                n(`0x${parseInt(e).toString(16)}`)
                            } : n)
                        };
                        const n = Object(h.createEIP1193Provider)(window.BinanceChain, {
                            eth_chainId: ({
                                baseRequest: e
                            }) => e({
                                method: "eth_chainId"
                            }).then((e => `0x${parseInt(e).toString(16)}`)),
                            eth_selectAccounts: m,
                            wallet_switchEthereumChain: m
                        });
                        return n.removeListener = (e, t) => {}, {
                            provider: n
                        }
                    },
                    platforms: ["desktop"]
                },
                T = {
                    label: o.Coinbase,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Coinbase] || !!e && !!e[r.CoinbaseExtension],
                    getIcon: async () => (await n.e(284).then(n.bind(null, 3553))).default,
                    getInterface: async () => {
                        const {
                            provider: e
                        } = await w(r.CoinbaseExtension)(), t = e.on.bind(e);
                        return e.on = (e, n) => {
                            t(e, "chainChanged" === e ? e => {
                                n(`0x${parseInt(e).toString(16)}`)
                            } : n)
                        }, {
                            provider: e
                        }
                    },
                    platforms: ["all"]
                },
                _ = {
                    label: o.Detected,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Detected],
                    getIcon: async () => (await n.e(286).then(n.bind(null, 3554))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["all"]
                },
                A = {
                    label: o.Trust,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !(!e || !e[r.Trust] || !e || e[r.TokenPocket]),
                    getIcon: async () => (await n.e(312).then(n.bind(null, 3555))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                C = {
                    label: o.Opera,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Opera],
                    getIcon: async () => (await n.e(301).then(n.bind(null, 3556))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            eth_requestAccounts: async ({
                                baseRequest: e
                            }) => e({
                                method: "eth_accounts"
                            }),
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["all"]
                },
                S = {
                    label: o.Status,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Status],
                    getIcon: async () => (await n.e(307).then(n.bind(null, 3557))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["mobile"]
                },
                N = {
                    label: o.AlphaWallet,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.AlphaWallet],
                    getIcon: async () => (await n.e(276).then(n.bind(null, 3558))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                O = {
                    label: o.AToken,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.AToken],
                    getIcon: async () => (await n.e(277).then(n.bind(null, 3559))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["mobile"]
                },
                x = {
                    label: o.Bitpie,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: () => !!window.Bitpie,
                    getIcon: async () => (await n.e(280).then(n.bind(null, 3560))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                j = {
                    label: o.BlockWallet,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.BlockWallet],
                    getIcon: async () => (await n.e(282).then(n.bind(null, 3561))).default,
                    getInterface: w(r.BlockWallet),
                    platforms: ["desktop"]
                },
                B = {
                    label: o.Frame,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Frame],
                    getIcon: async () => (await n.e(289).then(n.bind(null, 3562))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["desktop"]
                },
                M = {
                    label: o.HuobiWallet,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.HuobiWallet],
                    getIcon: async () => (await n.e(292).then(n.bind(null, 3563))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                W = {
                    label: o.HyperPay,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: () => !!window.hiWallet,
                    getIcon: async () => (await n.e(293).then(n.bind(null, 3564))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                D = {
                    label: o.ImToken,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.ImToken],
                    getIcon: async () => (await n.e(294).then(n.bind(null, 3565))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                R = {
                    label: o.Liquality,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Liquality],
                    getIcon: async () => (await n.e(295).then(n.bind(null, 3566))).default,
                    getInterface: async () => {
                        const e = Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        });
                        return e.removeListener = (e, t) => {}, {
                            provider: e
                        }
                    },
                    platforms: ["desktop"]
                },
                L = {
                    label: o.MeetOne,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && "MEETONE" === e[r.MeetOne],
                    getIcon: async () => (await n.e(297).then(n.bind(null, 3567))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["mobile"]
                },
                U = {
                    label: o.MyKey,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.MyKey],
                    getIcon: async () => (await n.e(299).then(n.bind(null, 3568))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["mobile"]
                },
                $ = {
                    label: o.OwnBit,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.OwnBit],
                    getIcon: async () => (await n.e(302).then(n.bind(null, 3569))).default,
                    getInterface: async () => {
                        const e = Object(h.createEIP1193Provider)(window.ethereum, {
                            eth_chainId: ({
                                baseRequest: e
                            }) => e({
                                method: "eth_chainId"
                            }).then((e => `0x${parseInt(e).toString(16)}`)),
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        });
                        return e.removeListener = (e, t) => {}, e.on = (e, t) => {}, {
                            provider: e
                        }
                    },
                    platforms: ["mobile"]
                },
                F = {
                    label: o.TokenPocket,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.TokenPocket] && !e[r.TP],
                    getIcon: async () => (await n.e(310).then(n.bind(null, 3570))).default,
                    getInterface: w(r.TokenPocket),
                    platforms: ["all"]
                },
                K = {
                    label: o.TP,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.TP],
                    getIcon: async () => (await n.e(311).then(n.bind(null, 3571))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum, {
                            wallet_switchEthereumChain: m,
                            eth_selectAccounts: m
                        })
                    }),
                    platforms: ["mobile"]
                },
                H = {
                    label: o.XDEFI,
                    injectedNamespace: c.XFI,
                    checkProviderIdentity: ({
                        provider: e
                    }) => e && e.ethereum && e.ethereum[r.XDEFI],
                    getIcon: async () => (await n.e(313).then(n.bind(null, 3572))).default,
                    getInterface: async () => ({
                        provider: window.xfi && window.xfi.ethereum
                    }),
                    platforms: ["all"]
                },
                G = {
                    label: o.OneInch,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.OneInch],
                    getIcon: async () => (await n.e(300).then(n.bind(null, 3573))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum)
                    }),
                    platforms: ["mobile"]
                },
                Z = {
                    label: o.Tokenary,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Tokenary],
                    getIcon: async () => (await n.e(309).then(n.bind(null, 3574))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum)
                    }),
                    platforms: ["all"]
                },
                z = {
                    label: o.Tally,
                    injectedNamespace: c.Tally,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Tally],
                    getIcon: async () => (await n.e(308).then(n.bind(null, 3575))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.tally)
                    }),
                    platforms: ["desktop"]
                },
                J = {
                    label: o.Zeal,
                    injectedNamespace: c.Zeal,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Zeal],
                    getIcon: async () => (await n.e(314).then(n.bind(null, 3576))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.zeal)
                    }),
                    platforms: ["desktop"]
                },
                X = {
                    label: o.Rabby,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Rabby],
                    getIcon: async () => (await n.e(304).then(n.bind(null, 3577))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum)
                    }),
                    platforms: ["desktop"]
                },
                V = {
                    label: o.MathWallet,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.MathWallet],
                    getIcon: async () => (await n.e(296).then(n.bind(null, 3578))).default,
                    getInterface: w(r.MathWallet),
                    platforms: ["all"]
                },
                Y = {
                    label: o.GameStop,
                    injectedNamespace: c.GameStop,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.GameStop],
                    getIcon: async () => (await n.e(291).then(n.bind(null, 3579))).default,
                    getInterface: async () => {
                        const e = Object(h.createEIP1193Provider)(window.gamestop, {
                            eth_chainId: ({
                                baseRequest: e
                            }) => e({
                                method: "eth_chainId"
                            }).then((e => `0x${parseInt(e).toString(16)}`)),
                            wallet_switchEthereumChain: m
                        });
                        return e.removeListener = (e, t) => {}, e.on = (e, t) => {}, {
                            provider: e
                        }
                    },
                    platforms: ["desktop"]
                },
                Q = {
                    label: o.BitKeep,
                    injectedNamespace: c.BitKeep,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e.ethereum[r.BitKeep],
                    getIcon: async () => (await n.e(279).then(n.bind(null, 3580))).default,
                    getInterface: async () => ({
                        provider: window.bitkeep && window.bitkeep.ethereum
                    }),
                    platforms: ["all"]
                },
                ee = {
                    label: o.Sequence,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Sequence],
                    getIcon: async () => (await n.e(306).then(n.bind(null, 3581))).default,
                    getInterface: async () => ({
                        provider: window.ethereum
                    }),
                    platforms: ["all"]
                },
                te = {
                    label: o.Core,
                    injectedNamespace: c.Avalanche,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Core],
                    getIcon: async () => (await n.e(285).then(n.bind(null, 3582))).default,
                    getInterface: w(r.Core),
                    platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"]
                },
                ne = {
                    label: o.Bitski,
                    injectedNamespace: c.Bitski,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e.getProvider && !!e.getProvider().isBitski,
                    getIcon: async () => (await n.e(281).then(n.bind(null, 3583))).default,
                    getInterface: async () => ({
                        provider: window.Bitski && window.Bitski.getProvider && window.Bitski.getProvider()
                    }),
                    platforms: ["all"]
                },
                ae = {
                    label: o.Zerion,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Zerion],
                    getIcon: async () => (await n.e(315).then(n.bind(null, 3584))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.ethereum)
                    }),
                    platforms: ["all"]
                };
            var re = [J, I, P, v, k, T, _, A, C, S, N, O, x, j, E, B, M, W, D, R, L, U, $, F, K, H, G, Z, z, X, V, Y, Q, ee, te, ne, {
                    label: o.Enkrypt,
                    injectedNamespace: c.Enkrypt,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e.providers && !!e.providers.ethereum,
                    getIcon: async () => (await n.e(287).then(n.bind(null, 3585))).default,
                    getInterface: async () => {
                        const e = window.enkrypt.providers.ethereum.on.bind(window.enkrypt.providers.ethereum);
                        window.enkrypt.providers.ethereum.on = (t, n) => {
                            e(t, "chainChanged" === t ? e => {
                                n(`0x${parseInt(e).toString(16)}`)
                            } : n)
                        };
                        const t = Object(h.createEIP1193Provider)(window.enkrypt.providers.ethereum, {
                            eth_chainId: ({
                                baseRequest: e
                            }) => e({
                                method: "eth_chainId"
                            }).then((e => `0x${parseInt(e).toString(16)}`))
                        });
                        return t.removeListener = (e, t) => {}, {
                            provider: t
                        }
                    },
                    platforms: ["all"]
                }, {
                    label: o.Phantom,
                    injectedNamespace: c.Phantom,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e.ethereum && !!e.ethereum[r.Phantom],
                    getIcon: async () => (await n.e(303).then(n.bind(null, 3586))).default,
                    getInterface: async () => ({
                        provider: Object(h.createEIP1193Provider)(window.phantom.ethereum)
                    }),
                    platforms: ["all"]
                }, ae, {
                    label: o.Rainbow,
                    injectedNamespace: c.Ethereum,
                    checkProviderIdentity: ({
                        provider: e
                    }) => !!e && !!e[r.Rainbow],
                    getIcon: async () => (await n.e(305).then(n.bind(null, 3587))).default,
                    getInterface: w(r.Rainbow),
                    platforms: ["all"]
                }],
                ie = n(8),
                oe = n.n(ie);
            const se = oe.a.object({
                    label: oe.a.string().required(),
                    getIcon: oe.a.function().arity(0).required(),
                    getInterface: oe.a.function().maxArity(1).required(),
                    injectedNamespace: oe.a.string().required(),
                    checkProviderIdentity: oe.a.function().arity(1).required(),
                    platforms: oe.a.array().items(oe.a.string())
                }),
                ce = oe.a.array().items(se),
                le = oe.a.object().pattern(/\w+/, oe.a.any().allow(oe.a.boolean(), oe.a.array().items(oe.a.string()))),
                de = oe.a.object({
                    custom: ce,
                    filter: le,
                    displayUnavailable: oe.a.boolean(),
                    walletUnavailableMessage: oe.a.function(),
                    sort: oe.a.function()
                });
            Error;
            t.a = function(e) {
                if ("undefined" == typeof window) return () => null;
                if (e) {
                    const t = (data = e, Object(h.validate)(de, data));
                    if (t && t.error) throw t.error
                }
                var data;
                return t => {
                    const {
                        device: n
                    } = t, {
                        custom: r = [],
                        filter: filter = {},
                        displayUnavailable: c,
                        sort: l,
                        walletUnavailableMessage: h
                    } = e || {}, m = d()([...r, ...re], (({
                        label: label
                    }) => label)).reduce(((e, t) => {
                        const {
                            label: label,
                            platforms: r,
                            injectedNamespace: o,
                            checkProviderIdentity: l
                        } = t, d = filter[label], m = !1 === d, w = ((e, t, n) => e && e.providers && Array.isArray(e.providers) ? !!e.providers.filter((e => t({
                            provider: e,
                            device: n
                        }))).length : t({
                            provider: e,
                            device: n
                        }))(window[o], l, n);
                        let y = !1;
                        Array.isArray(d) && (d.includes(n.type) || d.includes(n.os.name)) && (y = !0), "unavailable" !== d || w || (y = !0);
                        const f = !r.includes("all") && !r.includes(n.type) && !r.includes(n.os.name);
                        return !m && !y && !f && (w || c) && e.push(c && !w ? { ...t,
                            getInterface: async () => {
                                throw new Error(h ? h(t) : (({
                                    label: label
                                }) => `Please install or enable ${label} to continue`)(t))
                            }
                        } : t), e
                    }), []);
                    if (m.length) {
                        const e = m.length > 1,
                            t = m.filter((t => {
                                const {
                                    label: label
                                } = t;
                                return !(label === o.Detected && e)
                            })).map((({
                                label: label,
                                getIcon: e,
                                getInterface: t
                            }) => ({
                                label: label,
                                getIcon: e,
                                getInterface: t
                            }))).sort(((a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0));
                        return l ? l(t) : t
                    }
                    return []
                }
            }
        }
    }
]);