(window.webpackJsonp = window.webpackJsonp || []).push([
    [131], {
        120: function(e, t, r) {
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
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.operations = t.crypto = t.utils = t.types = t.wallet = t.EthMessageSigner = t.closestPackableTransactionFee = t.closestPackableTransactionAmount = t.No2FAWalletSigner = t.Create2WalletSigner = t.Signer = t.SyncProvider = t.getDefaultRestProvider = t.RestProvider = t.getDefaultProvider = t.ETHProxy = t.Provider = t.RemoteWallet = t.submitSignedTransactionsBatch = t.submitSignedTransaction = t.ETHOperation = t.Transaction = t.Wallet = void 0;
            var d = r(563);
            Object.defineProperty(t, "Wallet", {
                enumerable: !0,
                get: function() {
                    return d.Wallet
                }
            }), Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return d.Transaction
                }
            }), Object.defineProperty(t, "ETHOperation", {
                enumerable: !0,
                get: function() {
                    return d.ETHOperation
                }
            }), Object.defineProperty(t, "submitSignedTransaction", {
                enumerable: !0,
                get: function() {
                    return d.submitSignedTransaction
                }
            }), Object.defineProperty(t, "submitSignedTransactionsBatch", {
                enumerable: !0,
                get: function() {
                    return d.submitSignedTransactionsBatch
                }
            });
            var h = r(1411);
            Object.defineProperty(t, "RemoteWallet", {
                enumerable: !0,
                get: function() {
                    return h.RemoteWallet
                }
            });
            var l = r(1412);
            Object.defineProperty(t, "Provider", {
                enumerable: !0,
                get: function() {
                    return l.Provider
                }
            }), Object.defineProperty(t, "ETHProxy", {
                enumerable: !0,
                get: function() {
                    return l.ETHProxy
                }
            }), Object.defineProperty(t, "getDefaultProvider", {
                enumerable: !0,
                get: function() {
                    return l.getDefaultProvider
                }
            });
            var f = r(1471);
            Object.defineProperty(t, "RestProvider", {
                enumerable: !0,
                get: function() {
                    return f.RestProvider
                }
            }), Object.defineProperty(t, "getDefaultRestProvider", {
                enumerable: !0,
                get: function() {
                    return f.getDefaultRestProvider
                }
            });
            var y = r(571);
            Object.defineProperty(t, "SyncProvider", {
                enumerable: !0,
                get: function() {
                    return y.SyncProvider
                }
            });
            var v = r(566);
            Object.defineProperty(t, "Signer", {
                enumerable: !0,
                get: function() {
                    return v.Signer
                }
            }), Object.defineProperty(t, "Create2WalletSigner", {
                enumerable: !0,
                get: function() {
                    return v.Create2WalletSigner
                }
            }), Object.defineProperty(t, "No2FAWalletSigner", {
                enumerable: !0,
                get: function() {
                    return v.No2FAWalletSigner
                }
            });
            var m = r(113);
            Object.defineProperty(t, "closestPackableTransactionAmount", {
                enumerable: !0,
                get: function() {
                    return m.closestPackableTransactionAmount
                }
            }), Object.defineProperty(t, "closestPackableTransactionFee", {
                enumerable: !0,
                get: function() {
                    return m.closestPackableTransactionFee
                }
            });
            var S = r(564);
            Object.defineProperty(t, "EthMessageSigner", {
                enumerable: !0,
                get: function() {
                    return S.EthMessageSigner
                }
            }), t.wallet = c(r(563)), t.types = c(r(806)), t.utils = c(r(113)), t.crypto = c(r(565)), t.operations = c(r(307)), r(1472)
        },
        1411: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, c) {
                    function d(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(d, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RemoteWallet = t.submitSignedTransactionsBatch = t.submitSignedTransaction = t.ETHOperation = t.Transaction = void 0;
            const o = r(78),
                c = r(564),
                d = r(307),
                h = r(805);
            var l = r(307);
            Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return l.Transaction
                }
            }), Object.defineProperty(t, "ETHOperation", {
                enumerable: !0,
                get: function() {
                    return l.ETHOperation
                }
            }), Object.defineProperty(t, "submitSignedTransaction", {
                enumerable: !0,
                get: function() {
                    return l.submitSignedTransaction
                }
            }), Object.defineProperty(t, "submitSignedTransactionsBatch", {
                enumerable: !0,
                get: function() {
                    return l.submitSignedTransactionsBatch
                }
            });
            class f extends h.AbstractWallet {
                constructor(e, t, r, n) {
                    super(r, n), this.web3Provider = e, this._ethMessageSigner = t, this.web3Signer = e.getSigner()
                }
                static fromEthSigner(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        const n = new c.EthMessageSigner(e.getSigner(), {
                                verificationMethod: "ERC-1271",
                                isSignedMsgPrefixed: !0
                            }),
                            o = new f(e, n, yield e.getSigner().getAddress(), r);
                        return o.connect(t), yield o.verifyNetworks(), o
                    }))
                }
                ethSigner() {
                    return this.web3Signer
                }
                ethMessageSigner() {
                    return this._ethMessageSigner
                }
                syncSignerConnected() {
                    return !0
                }
                syncSignerPubKeyHash() {
                    return n(this, void 0, void 0, (function*() {
                        let e = yield this.callExtSignerPubKeyHash();
                        return e = e.replace("0x", "sync:"), e
                    }))
                }
                processBatchBuilderTransactions(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        let r = yield this.getNonce(e);
                        const n = t.map((e => (e.tx.nonce = r, r += 1, Object.assign({
                            type: e.type
                        }, e.tx))));
                        return {
                            txs: yield this.callExtSignZkSyncBatch(n)
                        }
                    }))
                }
                signSyncTransfer(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "Transfer"
                        }, e)]))[0]
                    }))
                }
                syncTransfer(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.signSyncTransfer(e);
                        return d.submitSignedTransaction(t, this.provider)
                    }))
                }
                signSetSigningKey(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "ChangePubKey"
                        }, e)]))[0]
                    }))
                }
                setSigningKey(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.signSetSigningKey(e);
                        return d.submitSignedTransaction(t, this.provider)
                    }))
                }
                signWithdrawFromSyncToEthereum(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "Withdraw"
                        }, e)]))[0]
                    }))
                }
                withdrawFromSyncToEthereum(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = e.fastProcessing,
                            r = yield this.signWithdrawFromSyncToEthereum(e);
                        return d.submitSignedTransaction(r, this.provider, t)
                    }))
                }
                signSyncForcedExit(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "ForcedExit"
                        }, e)]))[0]
                    }))
                }
                syncForcedExit(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.signSyncForcedExit(e);
                        return d.submitSignedTransaction(t, this.provider)
                    }))
                }
                signOrder(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.callExtSignOrder(Object.assign({
                            type: "Order"
                        }, e))
                    }))
                }
                signSyncSwap(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "Swap"
                        }, e)]))[0]
                    }))
                }
                syncSwap(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.signSyncSwap(e);
                        return d.submitSignedTransaction(t, this.provider)
                    }))
                }
                signMintNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "MintNFT"
                        }, e)]))[0]
                    }))
                }
                mintNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.signMintNFT(e);
                        return d.submitSignedTransaction(t, this.provider)
                    }))
                }
                signWithdrawNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.callExtSignZkSyncBatch([Object.assign({
                            type: "WithdrawNFT"
                        }, e)]))[0]
                    }))
                }
                withdrawNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = e.fastProcessing,
                            r = yield this.signWithdrawNFT(e);
                        return d.submitSignedTransaction(r, this.provider, t)
                    }))
                }
                syncTransferNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        let t;
                        e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), t = null == e.fee ? yield this.provider.getTransactionsBatchFee(["Transfer", "Transfer"], [e.to, this.address()], e.feeToken): e.fee;
                        const r = {
                                to: e.to,
                                token: e.token.id,
                                amount: 1,
                                fee: 0
                            },
                            n = {
                                to: this.address(),
                                token: e.feeToken,
                                amount: 0,
                                fee: t
                            };
                        return yield this.syncMultiTransfer([r, n])
                    }))
                }
                syncMultiTransfer(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = e.map((e => Object.assign({
                                type: "Transfer"
                            }, e))),
                            r = yield this.callExtSignZkSyncBatch(t);
                        return d.submitSignedTransactionsBatch(this.provider, r)
                    }))
                }
                prepareTxsBeforeSending(e) {
                    const t = ["amount", "fee"],
                        r = ["token", "feeToken", "tokenSell", "tokenBuy"];
                    return e.map((e => {
                        for (const r of t) r in e && (e[r] = o.BigNumber.from(e[r]).toString());
                        for (const t of r) t in e && (e[t] = this.provider.tokenSet.resolveTokenId(e[t]));
                        return "amounts" in e && (e.amounts = [o.BigNumber.from(e.amounts[0]).toString(), o.BigNumber.from(e.amounts[1]).toString()]), "ethAddress" in e && (e.to = e.ethAddress, delete e.ethAddress), e
                    }))
                }
                callExtSignZkSyncBatch(e) {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            const t = this.prepareTxsBeforeSending(e),
                                r = yield this.web3Provider.send("zkSync_signBatch", [t]);
                            return r.map((e => {
                                const t = e.ethereumSignature;
                                return delete e.ethereumSignature, {
                                    tx: e,
                                    ethereumSignature: t
                                }
                            }))
                        } catch (e) {
                            throw console.error(`Received an error performing 'zkSync_signBatch' request: ${e.toString()}`), new Error("Wallet server returned a malformed response to the sign batch request")
                        }
                    }))
                }
                callExtSignOrder(e) {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            const t = this.prepareTxsBeforeSending([e]),
                                r = (yield this.web3Provider.send("zkSync_signBatch", [t]))[0];
                            if (!r.signature) throw new Error("Wallet server returned a malformed response to the sign order request");
                            return r
                        } catch (e) {
                            throw console.error(`Received an error performing 'zkSync_signOrder' request: ${e.toString()}`), new Error("Wallet server returned a malformed response to the sign order request")
                        }
                    }))
                }
                callExtSignerPubKeyHash() {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            const e = yield this.web3Provider.send("zkSync_signerPubKeyHash", null);
                            if (!e.pubKeyHash) throw new Error("Wallet server returned a malformed response to the PubKeyHash request");
                            return e.pubKeyHash
                        } catch (e) {
                            throw console.error(`Received an error performing 'zkSync_signerPubKeyHash' request: ${e.toString()}`), new Error("Wallet server returned a malformed response to the PubKeyHash request")
                        }
                    }))
                }
            }
            t.RemoteWallet = f
        },
        1412: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, c) {
                    function d(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(d, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ETHProxy = t.Provider = t.getDefaultProvider = void 0;
            const o = r(1413),
                c = r(78),
                d = r(113),
                h = r(1467),
                l = r(571);
            t.getDefaultProvider = function(e, t = "HTTP", r) {
                return n(this, void 0, void 0, (function*() {
                    if ("WS" === t && console.warn("Websocket support will be removed in future. Use HTTP transport instead."), "localhost" === e) {
                        if ("WS" === t) return yield f.newWebsocketProvider("ws://127.0.0.1:3031", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("http://127.0.0.1:3030", r, e)
                    } else if ("goerli" === e) {
                        if ("WS" === t) return yield f.newWebsocketProvider("wss://goerli-api.zksync.io/jsrpc-ws", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("https://goerli-api.zksync.io/jsrpc", r, e)
                    } else if ("sepolia" === e) {
                        if ("WS" === t) return yield f.newWebsocketProvider("wss://sepolia-api.zksync.io/jsrpc-ws", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("https://sepolia-api.zksync.io/jsrpc", r, e)
                    } else if ("goerli-beta" === e) {
                        if ("WS" === t) return yield f.newWebsocketProvider("wss://goerli-beta-api.zksync.dev/jsrpc-ws", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("https://goerli-beta-api.zksync.dev/jsrpc", r, e)
                    } else if ("rinkeby-beta" === e) {
                        if ("WS" === t) return yield f.newWebsocketProvider("wss://rinkeby-beta-api.zksync.io/jsrpc-ws", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("https://rinkeby-beta-api.zksync.io/jsrpc", r, e)
                    } else {
                        if ("mainnet" !== e) throw new Error(`Ethereum network ${e} is not supported`);
                        if ("WS" === t) return yield f.newWebsocketProvider("wss://api.zksync.io/jsrpc-ws", e);
                        if ("HTTP" === t) return yield f.newHttpProvider("https://api.zksync.io/jsrpc", r, e)
                    }
                }))
            };
            class f extends l.SyncProvider {
                constructor(e) {
                    super(), this.transport = e, this.providerType = "RPC"
                }
                static newWebsocketProvider(address, e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield o.WSTransport.connect(address), r = new f(t), n = yield Promise.all([r.getContractAddress(), r.getTokens()]);
                        return r.contractAddress = n[0], r.tokenSet = new d.TokenSet(n[1]), r.network = e, r
                    }))
                }
                static newHttpProvider(address = "http://127.0.0.1:3030", e, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = new o.HTTPTransport(address),
                            n = new f(r);
                        e && (n.pollIntervalMilliSecs = e);
                        const c = yield Promise.all([n.getContractAddress(), n.getTokens()]);
                        return n.contractAddress = c[0], n.tokenSet = new d.TokenSet(c[1]), n.network = t, n
                    }))
                }
                static newMockProvider(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        const n = new o.DummyTransport(e, t, r),
                            c = new f(n),
                            h = yield Promise.all([c.getContractAddress(), c.getTokens()]);
                        return c.contractAddress = h[0], c.tokenSet = new d.TokenSet(h[1]), c.network = e, c
                    }))
                }
                submitTx(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("tx_submit", [e, t, r])
                    }))
                }
                submitTxsBatch(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        let r = [];
                        return null == t ? r = [] : t instanceof Array ? r = t : r.push(t), yield this.transport.request("submit_txs_batch", [e, r])
                    }))
                }
                getContractAddress() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("contract_address", null)
                    }))
                }
                getTokens() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("tokens", null)
                    }))
                }
                getState(address) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("account_info", [address])
                    }))
                }
                getTxReceipt(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("tx_info", [e])
                    }))
                }
                getPriorityOpStatus(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("ethop_info", [e])
                    }))
                }
                getConfirmationsForEthOpAmount() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("get_confirmations_for_eth_op_amount", [])
                    }))
                }
                getEthTxForWithdrawal(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("get_eth_tx_for_withdrawal", [e])
                    }))
                }
                getNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.transport.request("get_nft", [e]);
                        if (null == t) throw new Error("Requested NFT doesn't exist or the corresponding mintNFT operation is not verified yet");
                        return t
                    }))
                }
                getNFTOwner(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("get_nft_owner", [e])
                    }))
                }
                notifyPriorityOp(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        if (this.transport.subscriptionsSupported()) return yield new Promise((r => {
                            const n = this.transport.subscribe("ethop_subscribe", [e, t], "ethop_unsubscribe", (e => {
                                n.then((sub => sub.unsubscribe())).catch((e => console.log(`WebSocket connection closed with reason: ${e}`))), r(e)
                            }))
                        }));
                        for (;;) {
                            const r = yield this.getPriorityOpStatus(e);
                            if ("COMMIT" === t ? r.block && r.block.committed : r.block && r.block.verified) return r;
                            yield d.sleep(this.pollIntervalMilliSecs)
                        }
                    }))
                }
                notifyTransaction(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        if (this.transport.subscriptionsSupported()) return yield new Promise((r => {
                            const n = this.transport.subscribe("tx_subscribe", [e, t], "tx_unsubscribe", (e => {
                                n.then((sub => sub.unsubscribe())).catch((e => console.log(`WebSocket connection closed with reason: ${e}`))), r(e)
                            }))
                        }));
                        for (;;) {
                            const r = yield this.getTxReceipt(e);
                            if ("COMMIT" == t ? r.block && r.block.committed : r.block && r.block.verified) return r;
                            yield d.sleep(this.pollIntervalMilliSecs)
                        }
                    }))
                }
                getTransactionFee(e, address, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.transport.request("get_tx_fee", [e, address.toString(), t]);
                        return {
                            feeType: r.feeType,
                            gasTxAmount: c.BigNumber.from(r.gasTxAmount),
                            gasPriceWei: c.BigNumber.from(r.gasPriceWei),
                            gasFee: c.BigNumber.from(r.gasFee),
                            zkpFee: c.BigNumber.from(r.zkpFee),
                            totalFee: c.BigNumber.from(r.totalFee)
                        }
                    }))
                }
                getTransactionsBatchFee(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        const n = yield this.transport.request("get_txs_batch_fee_in_wei", [e, t, r]);
                        return c.BigNumber.from(n.totalFee)
                    }))
                }
                getTokenPrice(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.transport.request("get_token_price", [e]);
                        return parseFloat(t)
                    }))
                }
                toggle2FA(e) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.transport.request("toggle_2fa", [e])).success
                    }))
                }
                getNFTIdByTxHash(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.request("get_nft_id_by_tx_hash", [e])
                    }))
                }
                disconnect() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.transport.disconnect()
                    }))
                }
            }
            t.Provider = f;
            t.ETHProxy = class {
                constructor(e, t) {
                    this.ethersProvider = e, this.contractAddress = t, this.dummySigner = new c.ethers.VoidSigner(c.ethers.constants.AddressZero, this.ethersProvider);
                    const r = new h.GovernanceFactory(this.dummySigner);
                    this.governanceContract = r.attach(t.govContract);
                    const n = new h.ZkSyncFactory(this.dummySigner);
                    this.zkSyncContract = n.attach(t.mainContract)
                }
                getGovernanceContract() {
                    return this.governanceContract
                }
                getZkSyncContract() {
                    return this.zkSyncContract
                }
                getCachedNFTDefaultFactory() {
                    return this.zksyncNFTFactory
                }
                getDefaultNFTFactory() {
                    return n(this, void 0, void 0, (function*() {
                        if (this.zksyncNFTFactory) return this.zksyncNFTFactory;
                        const e = yield this.governanceContract.defaultFactory(), t = new h.ZkSyncNFTFactoryFactory(this.dummySigner);
                        return this.zksyncNFTFactory = t.attach(e), this.zksyncNFTFactory
                    }))
                }
                resolveTokenId(e) {
                    return n(this, void 0, void 0, (function*() {
                        if (d.isTokenETH(e)) return 0; {
                            const t = yield this.governanceContract.tokenIds(e);
                            if (0 == t) throw new Error(`ERC20 token ${e} is not supported`);
                            return t
                        }
                    }))
                }
            }
        },
        1413: function(e, t, r) {
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
                d = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                },
                h = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DummyTransport = t.WSTransport = t.HTTPTransport = t.JRPCError = t.AbstractJSONRPCTransport = void 0;
            const l = r(78),
                f = c(r(78)),
                y = h(r(807)),
                v = r(1432),
                m = c(r(1463)),
                S = r(566),
                T = m.w3cwebsocket;
            class w {
                subscriptionsSupported() {
                    return !1
                }
                subscribe(e, t, r, n) {
                    return d(this, void 0, void 0, (function*() {
                        throw new Error("subscription are not supported for this transport")
                    }))
                }
            }
            t.AbstractJSONRPCTransport = w;
            class k extends Error {
                constructor(e, t) {
                    super(e), this.jrpcError = t
                }
            }
            t.JRPCError = k;
            class P {
                constructor(e) {
                    this.unsubscribe = e
                }
            }
            t.HTTPTransport = class extends w {
                constructor(address) {
                    super(), this.address = address
                }
                request(e, t = null, r) {
                    return d(this, void 0, void 0, (function*() {
                        const n = {
                                id: 1,
                                jsonrpc: "2.0",
                                method: e,
                                params: t
                            },
                            o = yield y.default.post(this.address, n, r).then((e => e.data));
                        if ("result" in o) return o.result;
                        throw "error" in o ? new k(`zkSync API response error: code ${o.error.code}; message: ${o.error.message}`, o.error) : new Error("Unknown JRPC Error")
                    }))
                }
                disconnect() {
                    return d(this, void 0, void 0, (function*() {}))
                }
            };
            class F extends w {
                constructor(address) {
                    super(), this.address = address, this.ws = new v(address, {
                        createWebSocket: e => new T(e),
                        packMessage: data => JSON.stringify(data),
                        unpackMessage: data => JSON.parse(data),
                        attachRequestId: (data, e) => Object.assign({
                            id: e
                        }, data),
                        extractRequestId: data => data && data.id
                    }), this.subscriptionCallback = new Map, this.ws.onUnpackedMessage.addListener((data => {
                        if (data.params && data.params.subscription) {
                            const e = data.params;
                            this.subscriptionCallback.has(e.subscription) && this.subscriptionCallback.get(e.subscription)(e.result)
                        }
                    }))
                }
                static connect(address = "ws://127.0.0.1:3031") {
                    return d(this, void 0, void 0, (function*() {
                        const e = new F(address);
                        return yield e.ws.open(), e
                    }))
                }
                subscriptionsSupported() {
                    return !0
                }
                subscribe(e, t, r, n) {
                    return d(this, void 0, void 0, (function*() {
                        const o = {
                                jsonrpc: "2.0",
                                method: e,
                                params: t
                            },
                            sub = yield this.ws.sendRequest(o);
                        if (sub.error) throw new k("Subscription failed", sub.error);
                        const c = sub.result;
                        this.subscriptionCallback.set(c, n);
                        return new P((() => d(this, void 0, void 0, (function*() {
                            const e = yield this.ws.sendRequest({
                                jsonrpc: "2.0",
                                method: r,
                                params: [c]
                            });
                            if (e.error) throw new k(`Unsubscribe failed: ${c}, ${JSON.stringify(e.error)}`, e.error);
                            if (!0 !== e.result) throw new Error(`Unsubscription failed, returned false: ${c}`);
                            this.subscriptionCallback.delete(c)
                        }))))
                    }))
                }
                request(e, t = null) {
                    return d(this, void 0, void 0, (function*() {
                        const r = {
                                jsonrpc: "2.0",
                                method: e,
                                params: t
                            },
                            n = yield this.ws.sendRequest(r, {
                                requestId: 1
                            });
                        if ("result" in n) return n.result;
                        throw "error" in n ? new k(`zkSync API response error: code ${n.error.code}; message: ${n.error.message}`, n.error) : new Error("Unknown JRPC Error")
                    }))
                }
                disconnect() {
                    return d(this, void 0, void 0, (function*() {
                        yield this.ws.close()
                    }))
                }
            }
            t.WSTransport = F;
            t.DummyTransport = class extends w {
                constructor(e, t, r) {
                    super(), this.network = e, this.ethPrivateKey = t, this.getTokens = r
                }
                getPubKeyHash() {
                    return d(this, void 0, void 0, (function*() {
                        const e = new f.Wallet(this.ethPrivateKey),
                            {
                                signer: t
                            } = yield S.Signer.fromETHSignature(e);
                        return yield t.pubKeyHash()
                    }))
                }
                request(e, t = null) {
                    return d(this, void 0, void 0, (function*() {
                        if ("contract_address" == e) return {
                            mainContract: "0x000102030405060708090a0b0c0d0e0f10111213",
                            govContract: ""
                        };
                        if ("tokens" == e) {
                            const e = this.getTokens(),
                                t = {};
                            let r = 1;
                            for (const n of e.slice(0, 3)) {
                                const e = {
                                    address: n.address,
                                    id: r,
                                    symbol: n.symbol,
                                    decimals: n.decimals
                                };
                                t[n.symbol] = e, r++
                            }
                            return t
                        }
                        return "account_info" == e ? {
                            address: t[0],
                            id: 42,
                            depositing: {},
                            committed: {
                                balances: {
                                    DAI: l.BigNumber.from(12345)
                                },
                                nonce: 0,
                                pubKeyHash: yield this.getPubKeyHash()
                            },
                            verified: {
                                balances: {
                                    USDC: l.BigNumber.from(98765)
                                },
                                nonce: 0,
                                pubKeyHash: ""
                            }
                        } : {
                            method: e,
                            params: t
                        }
                    }))
                }
                disconnect() {
                    return d(this, void 0, void 0, (function*() {}))
                }
            }
        },
        1471: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                },
                o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RestProvider = t.RESTError = t.getDefaultRestProvider = void 0;
            const c = o(r(807)),
                d = r(78),
                h = r(571),
                l = r(113);
            t.getDefaultRestProvider = function(e, t) {
                return n(this, void 0, void 0, (function*() {
                    if ("localhost" === e) return yield y.newProvider("http://127.0.0.1:3001/api/v0.2", t, e);
                    if ("goerli" === e) return yield y.newProvider("https://goerli-api.zksync.io/api/v0.2", t, e);
                    if ("sepolia" === e) return yield y.newProvider("https://sepolia-api.zksync.io/api/v0.2", t, e);
                    if ("goerli-beta" === e) return yield y.newProvider("https://goerli-beta-api.zksync.dev/api/v0.2", t, e);
                    if ("rinkeby-beta" === e) return yield y.newProvider("https://rinkeby-beta-api.zksync.io/api/v0.2", t, e);
                    if ("mainnet" === e) return yield y.newProvider("https://api.zksync.io/api/v0.2", t, e);
                    throw new Error(`Ethereum network ${e} is not supported`)
                }))
            };
            class f extends Error {
                constructor(e, t) {
                    super(e), this.restError = t
                }
            }
            t.RESTError = f;
            class y extends h.SyncProvider {
                constructor(address) {
                    super(), this.address = address, this.providerType = "Rest"
                }
                static newProvider(address = "http://127.0.0.1:3001/api/v0.2", e, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = new y(address);
                        return e && (r.pollIntervalMilliSecs = e), r.contractAddress = yield r.getContractAddress(), r.tokenSet = new l.TokenSet(yield r.getTokens()), r.network = t, r
                    }))
                }
                parseResponse(e) {
                    if ("success" === e.status) return e.result;
                    throw new f(`zkSync API response error: errorType: ${e.error.errorType}; code ${e.error.code}; message: ${e.error.message}`, e.error)
                }
                get(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield c.default.get(e).then((e => e.data))
                    }))
                }
                post(e, body) {
                    return n(this, void 0, void 0, (function*() {
                        return yield c.default.post(e, body).then((e => e.data))
                    }))
                }
                accountInfoDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/accounts/${e}/${t}`)
                    }))
                }
                accountInfo(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.accountInfoDetailed(e, t))
                    }))
                }
                toggle2FADetailed(data) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.post(`${this.address}/transactions/toggle2FA`, data)
                    }))
                }
                toggle2FA(data) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.toggle2FADetailed(data)).success
                    }))
                }
                accountFullInfoDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/accounts/${e}`)
                    }))
                }
                accountFullInfo(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.accountFullInfoDetailed(e))
                    }))
                }
                accountTxsDetailed(e, t, r, o) {
                    return n(this, void 0, void 0, (function*() {
                        let n = `${this.address}/accounts/${e}/transactions?from=${t.from}&limit=${t.limit}&direction=${t.direction}`;
                        return r && (n += `&token=${r}`), o && (n += `&secondAccount=${o}`), yield this.get(n)
                    }))
                }
                accountTxs(e, t, r, o) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.accountTxsDetailed(e, t, r, o))
                    }))
                }
                accountPendingTxsDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/accounts/${e}/transactions/pending?from=${t.from}&limit=${t.limit}&direction=${t.direction}`)
                    }))
                }
                accountPendingTxs(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.accountPendingTxsDetailed(e, t))
                    }))
                }
                blockPaginationDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/blocks?from=${e.from}&limit=${e.limit}&direction=${e.direction}`)
                    }))
                }
                blockPagination(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.blockPaginationDetailed(e))
                    }))
                }
                blockByPositionDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/blocks/${e}`)
                    }))
                }
                blockByPosition(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.blockByPositionDetailed(e))
                    }))
                }
                blockTransactionsDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/blocks/${e}/transactions?from=${t.from}&limit=${t.limit}&direction=${t.direction}`)
                    }))
                }
                blockTransactions(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.blockTransactionsDetailed(e, t))
                    }))
                }
                configDetailed() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/config`)
                    }))
                }
                config() {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.configDetailed())
                    }))
                }
                getTransactionFeeDetailed(e, address, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.post(`${this.address}/fee`, {
                            txType: e,
                            address: address,
                            tokenLike: t
                        });
                        let n;
                        return n = "success" === r.status ? {
                            request: r.request,
                            status: r.status,
                            error: null,
                            result: {
                                gasFee: d.BigNumber.from(r.result.gasFee),
                                zkpFee: d.BigNumber.from(r.result.zkpFee),
                                totalFee: d.BigNumber.from(r.result.totalFee)
                            }
                        } : {
                            request: r.request,
                            status: r.status,
                            error: r.error,
                            result: null
                        }, n
                    }))
                }
                getTransactionFee(e, address, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.getTransactionFeeDetailed(e, address, t))
                    }))
                }
                getBatchFullFeeDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.post(`${this.address}/fee/batch`, {
                            transactions: e,
                            tokenLike: t
                        });
                        let n;
                        return n = "success" === r.status ? {
                            request: r.request,
                            status: r.status,
                            error: null,
                            result: {
                                gasFee: d.BigNumber.from(r.result.gasFee),
                                zkpFee: d.BigNumber.from(r.result.zkpFee),
                                totalFee: d.BigNumber.from(r.result.totalFee)
                            }
                        } : {
                            request: r.request,
                            status: r.status,
                            error: r.error,
                            result: null
                        }, n
                    }))
                }
                getBatchFullFee(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.getBatchFullFeeDetailed(e, t))
                    }))
                }
                networkStatusDetailed() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/networkStatus`)
                    }))
                }
                networkStatus() {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.networkStatusDetailed())
                    }))
                }
                tokenPaginationDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens?from=${e.from}&limit=${e.limit}&direction=${e.direction}`)
                    }))
                }
                tokenPagination(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.tokenPaginationDetailed(e))
                    }))
                }
                tokenInfoDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens/${e}`)
                    }))
                }
                tokenInfo(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.tokenInfoDetailed(e))
                    }))
                }
                tokenPriceInfoDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens/${e}/priceIn/${t}`)
                    }))
                }
                tokenPriceInfo(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.tokenPriceInfoDetailed(e, t))
                    }))
                }
                submitTxNewDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.post(`${this.address}/transactions`, {
                            tx: e,
                            signature: t
                        })
                    }))
                }
                submitTxNew(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.submitTxNewDetailed(e, t))
                    }))
                }
                submitTx(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        r && (e.fastProcessing = r);
                        let n = yield this.submitTxNew(e, t);
                        return n.replace("0x", "sync-tx:"), n
                    }))
                }
                txStatusDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/transactions/${e}`)
                    }))
                }
                txStatus(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.txStatusDetailed(e))
                    }))
                }
                txDataDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/transactions/${e}/data`)
                    }))
                }
                txData(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.txDataDetailed(e))
                    }))
                }
                submitTxsBatchNewDetailed(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.post(`${this.address}/transactions/batches`, {
                            txs: e,
                            signature: t
                        })
                    }))
                }
                submitTxsBatchNew(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.submitTxsBatchNewDetailed(e, t))
                    }))
                }
                submitTxsBatch(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.submitTxsBatchNew(e, t)).transactionHashes
                    }))
                }
                getBatchDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/transactions/batches/${e}`)
                    }))
                }
                getBatch(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.getBatchDetailed(e))
                    }))
                }
                getNFTDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens/nft/${e}`)
                    }))
                }
                getNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = this.parseResponse(yield this.getNFTDetailed(e));
                        if (null == t) throw new Error("Requested NFT doesn't exist or the corresponding mintNFT operation is not verified yet");
                        return t
                    }))
                }
                getNFTOwnerDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens/nft/${e}/owner`)
                    }))
                }
                getNFTOwner(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.getNFTOwnerDetailed(e))
                    }))
                }
                getNFTIdByTxHashDetailed(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.get(`${this.address}/tokens/nft_id_by_tx_hash/${e}`)
                    }))
                }
                getNFTIdByTxHash(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.parseResponse(yield this.getNFTIdByTxHashDetailed(e))
                    }))
                }
                notifyAnyTransaction(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        for (;;) {
                            let r, n = yield this.txStatus(e);
                            if ("COMMIT" === t) r = n && n.rollupBlock;
                            else if (n && n.rollupBlock)
                                if ("rejected" === n.status) {
                                    const e = yield this.blockByPosition(n.rollupBlock);
                                    r = e && "finalized" === e.status
                                } else r = "finalized" === n.status;
                            if (r) return yield this.txStatus(e);
                            yield l.sleep(this.pollIntervalMilliSecs)
                        }
                    }))
                }
                notifyTransaction(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.notifyAnyTransaction(e, t), yield this.getTxReceipt(e)
                    }))
                }
                notifyPriorityOp(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.notifyAnyTransaction(e, t), yield this.getPriorityOpStatus(e)
                    }))
                }
                getContractAddress() {
                    return n(this, void 0, void 0, (function*() {
                        const e = yield this.config();
                        return {
                            mainContract: e.contract,
                            govContract: e.govContract
                        }
                    }))
                }
                getTokens(e) {
                    return n(this, void 0, void 0, (function*() {
                        let t, r = {},
                            n = 0;
                        e = e || y.MAX_LIMIT;
                        do {
                            t = yield this.tokenPagination({
                                from: n,
                                limit: e,
                                direction: "newer"
                            });
                            for (let e of t.list) r[e.symbol] = {
                                address: e.address,
                                id: e.id,
                                symbol: e.symbol,
                                decimals: e.decimals,
                                enabledForFees: e.enabledForFees
                            };
                            n += e
                        } while (t.list.length == e);
                        return r
                    }))
                }
                getState(address) {
                    return n(this, void 0, void 0, (function*() {
                        const e = yield this.accountFullInfo(address), t = {
                            balances: {},
                            nonce: 0,
                            pubKeyHash: "sync:0000000000000000000000000000000000000000",
                            nfts: {},
                            mintedNfts: {}
                        };
                        return e.finalized ? {
                            address: address,
                            id: e.committed.accountId,
                            accountType: e.committed.accountType,
                            depositing: e.depositing,
                            committed: {
                                balances: e.committed.balances,
                                nonce: e.committed.nonce,
                                pubKeyHash: e.committed.pubKeyHash,
                                nfts: e.committed.nfts,
                                mintedNfts: e.committed.mintedNfts
                            },
                            verified: {
                                balances: e.finalized.balances,
                                nonce: e.finalized.nonce,
                                pubKeyHash: e.finalized.pubKeyHash,
                                nfts: e.finalized.nfts,
                                mintedNfts: e.finalized.mintedNfts
                            }
                        } : e.committed ? {
                            address: address,
                            id: e.committed.accountId,
                            accountType: e.committed.accountType,
                            depositing: e.depositing,
                            committed: {
                                balances: e.committed.balances,
                                nonce: e.committed.nonce,
                                pubKeyHash: e.committed.pubKeyHash,
                                nfts: e.committed.nfts,
                                mintedNfts: e.committed.mintedNfts
                            },
                            verified: t
                        } : {
                            address: address,
                            depositing: e.depositing,
                            committed: t,
                            verified: t
                        }
                    }))
                }
                getConfirmationsForEthOpAmount() {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.config()).depositConfirmations
                    }))
                }
                getTransactionsBatchFee(e, t, r) {
                    return n(this, void 0, void 0, (function*() {
                        let n = [];
                        for (let i = 0; i < e.length; ++i) n.push({
                            txType: e[i],
                            address: t[i]
                        });
                        return (yield this.getBatchFullFee(n, r)).totalFee
                    }))
                }
                getTokenPrice(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.tokenPriceInfo(e, "usd");
                        return parseFloat(t.price)
                    }))
                }
                getTxReceipt(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.txStatus(e);
                        if (t && t.rollupBlock) {
                            if ("rejected" === t.status) {
                                const e = yield this.blockByPosition(t.rollupBlock), r = {
                                    blockNumber: t.rollupBlock,
                                    committed: !!e,
                                    verified: !(!e || "finalized" !== e.status)
                                };
                                return {
                                    executed: !0,
                                    success: !1,
                                    failReason: t.failReason,
                                    block: r
                                }
                            }
                            return {
                                executed: !0,
                                success: !0,
                                block: {
                                    blockNumber: t.rollupBlock,
                                    committed: !0,
                                    verified: "finalized" === t.status
                                }
                            }
                        }
                        return {
                            executed: !1
                        }
                    }))
                }
                getPriorityOpStatus(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.txStatus(e);
                        return t && t.rollupBlock ? {
                            executed: !0,
                            block: {
                                blockNumber: t.rollupBlock,
                                committed: !0,
                                verified: "finalized" === t.status
                            }
                        } : {
                            executed: !1
                        }
                    }))
                }
                getEthTxForWithdrawal(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.txData(e);
                        return "Withdraw" === t.tx.op.type || "ForcedExit" === t.tx.op.type || "WithdrawNFT" === t.tx.op.type ? t.tx.op.ethTxHash : null
                    }))
                }
            }
            t.RestProvider = y, y.MAX_LIMIT = 100
        },
        307: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, c) {
                    function d(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(d, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.submitSignedTransactionsBatch = t.submitSignedTransaction = t.Transaction = t.ETHOperation = t.ZKSyncTxError = void 0;
            const o = r(113);
            class c extends Error {
                constructor(e, t) {
                    super(e), this.value = t
                }
            }
            t.ZKSyncTxError = c;
            t.ETHOperation = class {
                constructor(e, t) {
                    this.ethTx = e, this.zkSyncProvider = t, this.state = "Sent"
                }
                awaitEthereumTxCommit() {
                    return n(this, void 0, void 0, (function*() {
                        if ("Sent" !== this.state) return;
                        const e = yield this.ethTx.wait();
                        for (const t of e.logs) try {
                            const e = o.SYNC_MAIN_CONTRACT_INTERFACE.parseLog(t);
                            e && null != e.args.serialId && (this.priorityOpId = e.args.serialId)
                        } catch (e) {}
                        if (!this.priorityOpId) throw new Error("Failed to parse tx logs");
                        return this.state = "Mined", e
                    }))
                }
                awaitReceipt() {
                    return n(this, void 0, void 0, (function*() {
                        if (this.throwErrorIfFailedState(), yield this.awaitEthereumTxCommit(), "Mined" !== this.state) return;
                        let e;
                        e = "RPC" === this.zkSyncProvider.providerType ? this.priorityOpId.toNumber() : this.ethTx.hash;
                        const t = yield this.zkSyncProvider.notifyPriorityOp(e, "COMMIT");
                        return t.executed || (this.setErrorState(new c("Priority operation failed", t)), this.throwErrorIfFailedState()), this.state = "Committed", t
                    }))
                }
                awaitVerifyReceipt() {
                    return n(this, void 0, void 0, (function*() {
                        if (yield this.awaitReceipt(), "Committed" !== this.state) return;
                        let e;
                        e = "RPC" === this.zkSyncProvider.providerType ? this.priorityOpId.toNumber() : this.ethTx.hash;
                        const t = yield this.zkSyncProvider.notifyPriorityOp(e, "VERIFY");
                        return this.state = "Verified", t
                    }))
                }
                setErrorState(e) {
                    this.state = "Failed", this.error = e
                }
                throwErrorIfFailedState() {
                    if ("Failed" === this.state) throw this.error
                }
            };
            class d {
                constructor(e, t, r) {
                    this.txData = e, this.txHash = t, this.sidechainProvider = r, this.state = "Sent"
                }
                awaitReceipt() {
                    return n(this, void 0, void 0, (function*() {
                        if (this.throwErrorIfFailedState(), "Sent" !== this.state) return;
                        const e = yield this.sidechainProvider.notifyTransaction(this.txHash, "COMMIT");
                        return e.success || (this.setErrorState(new c(`zkSync transaction failed: ${e.failReason}`, e)), this.throwErrorIfFailedState()), this.state = "Committed", e
                    }))
                }
                awaitVerifyReceipt() {
                    return n(this, void 0, void 0, (function*() {
                        yield this.awaitReceipt();
                        const e = yield this.sidechainProvider.notifyTransaction(this.txHash, "VERIFY");
                        return this.state = "Verified", e
                    }))
                }
                setErrorState(e) {
                    this.state = "Failed", this.error = e
                }
                throwErrorIfFailedState() {
                    if ("Failed" === this.state) throw this.error
                }
            }
            t.Transaction = d, t.submitSignedTransaction = function(e, t, r) {
                return n(this, void 0, void 0, (function*() {
                    const n = yield t.submitTx(e.tx, e.ethereumSignature, r);
                    return new d(e, n, t)
                }))
            }, t.submitSignedTransactionsBatch = function(e, t, r) {
                return n(this, void 0, void 0, (function*() {
                    return (yield e.submitTxsBatch(t.map((e => ({
                        tx: e.tx,
                        signature: e.ethereumSignature
                    }))), r)).map(((r, n) => new d(t[n], r, e)))
                }))
            }
        },
        564: function(e, t, r) {
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
                d = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EthMessageSigner = void 0;
            const h = c(r(78)),
                l = r(113);
            t.EthMessageSigner = class {
                constructor(e, t) {
                    this.ethSigner = e, this.ethSignerType = t
                }
                getEthMessageSignature(e) {
                    return d(this, void 0, void 0, (function*() {
                        if (null == this.ethSignerType) throw new Error("ethSignerType is unknown");
                        const t = l.getSignedBytesFromMessage(e, !this.ethSignerType.isSignedMsgPrefixed),
                            r = yield l.signMessagePersonalAPI(this.ethSigner, t);
                        return {
                            type: "ECDSA" === this.ethSignerType.verificationMethod ? "EthereumSignature" : "EIP1271Signature",
                            signature: r
                        }
                    }))
                }
                getTransferEthSignMessage(e) {
                    let t = this.getTransferEthMessagePart(e);
                    return 0 != t.length && (t += "\n"), t += `Nonce: ${e.nonce}`, t
                }
                ethSignTransfer(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getTransferEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                ethSignSwap(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getSwapEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                ethSignOrder(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getOrderEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                getSwapEthSignMessagePart(e) {
                    return "0" != e.fee && e.fee ? `Swap fee: ${e.fee} ${e.feeToken}` : ""
                }
                getSwapEthSignMessage(e) {
                    let t = this.getSwapEthSignMessagePart(e);
                    return "" != t && (t += "\n"), t += `Nonce: ${e.nonce}`, t
                }
                getOrderEthSignMessage(e) {
                    let t;
                    return t = "0" == e.amount || null == e.amount ? `Limit order for ${e.tokenSell} -> ${e.tokenBuy}\n` : `Order for ${e.amount} ${e.tokenSell} -> ${e.tokenBuy}\n`, t += `Ratio: ${e.ratio[0].toString()}:${e.ratio[1].toString()}\nAddress: ${e.recipient.toLowerCase()}\nNonce: ${e.nonce}`, t
                }
                ethSignForcedExit(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getForcedExitEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                getMintNFTEthMessagePart(e) {
                    let t = `MintNFT ${e.contentHash} for: ${e.recipient.toLowerCase()}`;
                    return null != e.stringFee && (t += `\nFee: ${e.stringFee} ${e.stringFeeToken}`), t
                }
                getMintNFTEthSignMessage(e) {
                    let t = this.getMintNFTEthMessagePart(e);
                    return t += `\nNonce: ${e.nonce}`, t
                }
                getWithdrawNFTEthMessagePart(e) {
                    let t = `WithdrawNFT ${e.token} to: ${e.to.toLowerCase()}`;
                    return null != e.stringFee && (t += `\nFee: ${e.stringFee} ${e.stringFeeToken}`), t
                }
                getWithdrawNFTEthSignMessage(e) {
                    let t = this.getWithdrawNFTEthMessagePart(e);
                    return t += `\nNonce: ${e.nonce}`, t
                }
                getWithdrawEthSignMessage(e) {
                    let t = this.getWithdrawEthMessagePart(e);
                    return 0 != t.length && (t += "\n"), t += `Nonce: ${e.nonce}`, t
                }
                getForcedExitEthSignMessage(e) {
                    let t = this.getForcedExitEthMessagePart(e);
                    return t += `\nNonce: ${e.nonce}`, t
                }
                getTransferEthMessagePart(e) {
                    let t, r;
                    if (null != e.ethAddress) t = "Withdraw", r = e.ethAddress;
                    else {
                        if (null == e.to) throw new Error("Either to or ethAddress field must be present");
                        t = "Transfer", r = e.to
                    }
                    let n = "";
                    return null != e.stringAmount && (n += `${t} ${e.stringAmount} ${e.stringToken} to: ${r.toLowerCase()}`), null != e.stringFee && (0 != n.length && (n += "\n"), n += `Fee: ${e.stringFee} ${e.stringToken}`), n
                }
                getWithdrawEthMessagePart(e) {
                    return this.getTransferEthMessagePart(e)
                }
                getChangePubKeyEthMessagePart(e) {
                    let t = "";
                    return t += `Set signing key: ${e.pubKeyHash.replace("sync:","").toLowerCase()}`, null != e.stringFee && (t += `\nFee: ${e.stringFee} ${e.stringToken}`), t
                }
                getForcedExitEthMessagePart(e) {
                    let t = `ForcedExit ${e.stringToken} to: ${e.target.toLowerCase()}`;
                    return null != e.stringFee && (t += `\nFee: ${e.stringFee} ${e.stringToken}`), t
                }
                ethSignMintNFT(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getMintNFTEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                ethSignWithdrawNFT(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getWithdrawNFTEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                ethSignWithdraw(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getWithdrawEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                getChangePubKeyEthSignMessage(e) {
                    return l.getChangePubkeyMessage(e.pubKeyHash, e.nonce, e.accountId)
                }
                ethSignChangePubKey(e) {
                    return d(this, void 0, void 0, (function*() {
                        const t = this.getChangePubKeyEthSignMessage(e);
                        return yield this.getEthMessageSignature(t)
                    }))
                }
                ethSignRegisterFactoryMessage(e, t, r) {
                    return d(this, void 0, void 0, (function*() {
                        const n = h.utils.hexlify(l.serializeAddress(e)).substr(2),
                            o = h.utils.hexlify(l.serializeAddress(r)).substr(2),
                            c = `\nCreator's account ID in zkSync: ${h.utils.hexlify(l.serializeAccountId(t)).substr(2)}\nCreator: ${o}\nFactory: ${n}`,
                            d = h.utils.toUtf8Bytes(c);
                        return yield this.getEthMessageSignature(d)
                    }))
                }
            }
        },
        566: function(e, t, r) {
            "use strict";
            var n, o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                c = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                d = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                    return c(t, e), t
                },
                h = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, c) {
                        function d(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function h(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(d, h)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                },
                l = this && this.__classPrivateFieldSet || function(e, t, r, n, o) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
                },
                f = this && this.__classPrivateFieldGet || function(e, t, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.unableToSign = t.No2FAWalletSigner = t.Create2WalletSigner = t.Signer = void 0;
            const y = r(565),
                v = r(78),
                m = d(r(113));
            class S {
                constructor(e) {
                    n.set(this, void 0), l(this, n, e, "f")
                }
                pubKeyHash() {
                    return h(this, void 0, void 0, (function*() {
                        return yield y.privateKeyToPubKeyHash(f(this, n, "f"))
                    }))
                }
                signMintNFT(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "MintNFT",
                                feeToken: e.feeTokenId
                            }),
                            r = m.serializeMintNFT(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                signWithdrawNFT(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "WithdrawNFT",
                                token: e.tokenId,
                                feeToken: e.feeTokenId
                            }),
                            r = m.serializeWithdrawNFT(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                transferSignBytes(e) {
                    return m.serializeTransfer(Object.assign(Object.assign({}, e), {
                        type: "Transfer",
                        token: e.tokenId
                    }))
                }
                signSyncOrder(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = m.serializeOrder(e),
                            r = yield y.signTransactionBytes(f(this, n, "f"), t);
                        return Object.assign(Object.assign({}, e), {
                            amount: v.BigNumber.from(e.amount).toString(),
                            ratio: e.ratio.map((p => v.BigNumber.from(p).toString())),
                            signature: r
                        })
                    }))
                }
                signSyncSwap(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "Swap"
                            }),
                            r = yield m.serializeSwap(t), o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            amounts: [v.BigNumber.from(t.amounts[0]).toString(), v.BigNumber.from(t.amounts[1]).toString()],
                            fee: v.BigNumber.from(t.fee).toString(),
                            signature: o
                        })
                    }))
                }
                signSyncTransfer(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "Transfer",
                                token: e.tokenId
                            }),
                            r = m.serializeTransfer(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            amount: v.BigNumber.from(e.amount).toString(),
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                withdrawSignBytes(e) {
                    return m.serializeWithdraw(Object.assign(Object.assign({}, e), {
                        type: "Withdraw",
                        to: e.ethAddress,
                        token: e.tokenId
                    }))
                }
                signSyncWithdraw(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "Withdraw",
                                to: e.ethAddress,
                                token: e.tokenId
                            }),
                            r = m.serializeWithdraw(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            amount: v.BigNumber.from(e.amount).toString(),
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                forcedExitSignBytes(e) {
                    return m.serializeForcedExit(Object.assign(Object.assign({}, e), {
                        type: "ForcedExit",
                        token: e.tokenId
                    }))
                }
                signSyncForcedExit(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "ForcedExit",
                                token: e.tokenId
                            }),
                            r = m.serializeForcedExit(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                changePubKeySignBytes(e) {
                    return m.serializeChangePubKey(Object.assign(Object.assign({}, e), {
                        type: "ChangePubKey",
                        feeToken: e.feeTokenId,
                        ethAuthData: {
                            type: "Onchain"
                        }
                    }))
                }
                signSyncChangePubKey(e) {
                    return h(this, void 0, void 0, (function*() {
                        const t = Object.assign(Object.assign({}, e), {
                                type: "ChangePubKey",
                                feeToken: e.feeTokenId
                            }),
                            r = m.serializeChangePubKey(t),
                            o = yield y.signTransactionBytes(f(this, n, "f"), r);
                        return Object.assign(Object.assign({}, t), {
                            fee: v.BigNumber.from(e.fee).toString(),
                            signature: o
                        })
                    }))
                }
                static fromPrivateKey(e) {
                    return new S(e)
                }
                static fromSeed(e) {
                    return h(this, void 0, void 0, (function*() {
                        return new S(yield y.privateKeyFromSeed(e))
                    }))
                }
                static fromETHSignature(e) {
                    return h(this, void 0, void 0, (function*() {
                        let t = 1;
                        if (e.provider) {
                            t = (yield e.provider.getNetwork()).chainId
                        }
                        let r = "Access zkSync account.\n\nOnly sign this message for a trusted client!";
                        1 !== t && (r += `\nChain ID: ${t}.`);
                        const n = m.getSignedBytesFromMessage(r, !1),
                            o = yield m.signMessagePersonalAPI(e, n), address = yield e.getAddress(), c = yield m.getEthSignatureType(e.provider, r, o, address), d = v.ethers.utils.arrayify(o);
                        return {
                            signer: yield S.fromSeed(d), ethSignatureType: c
                        }
                    }))
                }
            }
            t.Signer = S, n = new WeakMap;
            class T extends v.ethers.Signer {
                constructor(e, t, r) {
                    super(), this.zkSyncPubkeyHash = e, this.create2WalletData = t, Object.defineProperty(this, "provider", {
                        enumerable: !0,
                        value: r,
                        writable: !1
                    });
                    const n = m.getCREATE2AddressAndSalt(e, t);
                    this.address = n.address, this.salt = n.salt
                }
                getAddress() {
                    return h(this, void 0, void 0, (function*() {
                        return this.address
                    }))
                }
                signMessage(e) {
                    return h(this, void 0, void 0, (function*() {
                        return v.ethers.utils.hexlify(new Uint8Array(65))
                    }))
                }
                signTransaction(e) {
                    return h(this, void 0, void 0, (function*() {
                        throw new Error("Create2Wallet signer can't sign transactions")
                    }))
                }
                connect(e) {
                    return new T(this.zkSyncPubkeyHash, this.create2WalletData, e)
                }
            }
            t.Create2WalletSigner = T;
            class w extends v.ethers.Signer {
                constructor(address, e) {
                    super(), this.address = address, Object.defineProperty(this, "provider", {
                        enumerable: !0,
                        value: e,
                        writable: !1
                    })
                }
                getAddress() {
                    return h(this, void 0, void 0, (function*() {
                        return this.address
                    }))
                }
                signMessage(e) {
                    return h(this, void 0, void 0, (function*() {
                        return v.ethers.utils.hexlify(new Uint8Array(65))
                    }))
                }
                signTransaction(e) {
                    return h(this, void 0, void 0, (function*() {
                        throw new Error("No2FAWallet signer can't sign transactions")
                    }))
                }
                connect(e) {
                    return new w(this.address, e)
                }
            }
            t.No2FAWalletSigner = w, t.unableToSign = function(e) {
                return e instanceof T || e instanceof w
            }
        },
        571: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, c) {
                    function d(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(d, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SyncProvider = void 0;
            const o = r(113);
            t.SyncProvider = class {
                constructor() {
                    this.pollIntervalMilliSecs = 1e3
                }
                updateTokenSet() {
                    return n(this, void 0, void 0, (function*() {
                        const e = new o.TokenSet(yield this.getTokens());
                        this.tokenSet = e
                    }))
                }
                getTokenSymbol(e) {
                    return n(this, void 0, void 0, (function*() {
                        if (o.isNFT(e)) {
                            return (yield this.getNFT(e)).symbol || `NFT-${e}`
                        }
                        return this.tokenSet.resolveTokenSymbol(e)
                    }))
                }
                disconnect() {
                    return n(this, void 0, void 0, (function*() {}))
                }
            }
        }
    }
]);