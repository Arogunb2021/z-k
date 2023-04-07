(window.webpackJsonp = window.webpackJsonp || []).push([
    [114], {
        1410: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, d) {
                    function c(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(c, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BatchBuilder = void 0;
            const o = r(78),
                d = r(113);
            class c {
                constructor(e, t, r = []) {
                    this.wallet = e, this.nonce = t, this.txs = r
                }
                static fromWallet(e, t) {
                    return new c(e, t, [])
                }
                build(e) {
                    return n(this, void 0, void 0, (function*() {
                        if (0 == this.txs.length) throw new Error("Transaction batch cannot be empty");
                        null != e && (yield this.setFeeToken(e));
                        const t = new Map;
                        for (const e of this.txs) {
                            const r = e.tx.fee;
                            e.alreadySigned && (e.token = this.wallet.provider.tokenSet.resolveTokenSymbol(e.tx.feeToken));
                            const n = e.token,
                                d = t.get(n) || o.BigNumber.from(0);
                            t.set(n, d.add(r))
                        }
                        const {
                            txs: r,
                            signature: n
                        } = yield this.processTransactions();
                        return {
                            txs: r,
                            signature: n,
                            totalFee: t
                        }
                    }))
                }
                setFeeToken(e) {
                    return n(this, void 0, void 0, (function*() {
                        if (null != this.txs.find((e => e.alreadySigned || !o.BigNumber.from(e.tx.fee).isZero()))) throw new Error("All transactions are expected to be unsigned with zero fees");
                        this.txs[this.txs.length - 1].token !== e && this.addTransfer({
                            to: this.wallet.address(),
                            token: e,
                            amount: 0
                        });
                        const t = this.txs[this.txs.length - 1],
                            r = this.txs.map((e => e.feeType)),
                            n = this.txs.map((e => e.address));
                        t.tx.fee = yield this.wallet.provider.getTransactionsBatchFee(r, n, e)
                    }))
                }
                addWithdraw(e) {
                    const t = {
                        ethAddress: e.ethAddress,
                        token: e.token,
                        amount: e.amount,
                        fee: e.fee || 0,
                        nonce: null,
                        validFrom: e.validFrom || 0,
                        validUntil: e.validUntil || d.MAX_TIMESTAMP
                    };
                    return this.txs.push({
                        type: "Withdraw",
                        tx: t,
                        feeType: "Withdraw",
                        address: t.ethAddress,
                        token: t.token
                    }), this
                }
                addMintNFT(e) {
                    const t = {
                        recipient: e.recipient,
                        contentHash: e.contentHash,
                        feeToken: e.feeToken,
                        fee: e.fee || 0
                    };
                    return this.txs.push({
                        type: "MintNFT",
                        tx: t,
                        feeType: "MintNFT",
                        address: t.recipient,
                        token: t.feeToken
                    }), this
                }
                addWithdrawNFT(e) {
                    const t = {
                        to: e.to,
                        token: e.token,
                        feeToken: e.feeToken,
                        fee: e.fee || 0,
                        validFrom: e.validFrom || 0,
                        validUntil: e.validUntil || d.MAX_TIMESTAMP
                    };
                    return this.txs.push({
                        type: "WithdrawNFT",
                        tx: t,
                        feeType: "WithdrawNFT",
                        address: t.to,
                        token: t.feeToken
                    }), this
                }
                addSwap(e) {
                    const t = {
                        orders: e.orders,
                        amounts: e.amounts,
                        nonce: null,
                        fee: e.fee || 0,
                        feeToken: e.feeToken
                    };
                    return this.txs.push({
                        type: "Swap",
                        tx: t,
                        feeType: "Swap",
                        address: this.wallet.address(),
                        token: e.feeToken
                    }), this
                }
                addTransfer(e) {
                    const t = {
                        to: e.to,
                        token: e.token,
                        amount: e.amount,
                        fee: e.fee || 0,
                        nonce: null,
                        validFrom: e.validFrom || 0,
                        validUntil: e.validUntil || d.MAX_TIMESTAMP
                    };
                    return this.txs.push({
                        type: "Transfer",
                        tx: t,
                        feeType: "Transfer",
                        address: t.to,
                        token: t.token
                    }), this
                }
                addChangePubKey(e) {
                    if ("tx" in e) {
                        if ("ChangePubKey" !== e.tx.type) throw new Error("Invalid transaction type: expected ChangePubKey");
                        return this.txs.push({
                            type: "ChangePubKey",
                            tx: e.tx,
                            feeType: null,
                            address: this.wallet.address(),
                            token: null,
                            alreadySigned: !0
                        }), this
                    }
                    const t = {
                            feeToken: e.feeToken,
                            fee: e.fee || 0,
                            nonce: null,
                            ethAuthType: e.ethAuthType,
                            validFrom: e.validFrom || 0,
                            validUntil: e.validUntil || d.MAX_TIMESTAMP
                        },
                        r = {
                            ChangePubKey: e.ethAuthType
                        };
                    return this.txs.push({
                        type: "ChangePubKey",
                        tx: t,
                        feeType: r,
                        address: this.wallet.address(),
                        token: t.feeToken
                    }), this
                }
                addForcedExit(e) {
                    const t = {
                        target: e.target,
                        token: e.token,
                        fee: e.fee || 0,
                        nonce: null,
                        validFrom: e.validFrom || 0,
                        validUntil: e.validUntil || d.MAX_TIMESTAMP
                    };
                    return this.txs.push({
                        type: "ForcedExit",
                        tx: t,
                        feeType: "ForcedExit",
                        address: t.target,
                        token: t.token
                    }), this
                }
                processTransactions() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.wallet.processBatchBuilderTransactions(this.nonce, this.txs)
                    }))
                }
            }
            t.BatchBuilder = c
        },
        565: function(e, t, r) {
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
                d = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                },
                c = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(o, d) {
                        function c(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function h(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(c, h)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.loadZkSyncCrypto = t.rescueHashOrders = t.privateKeyToPubKeyHash = t.signTransactionBytes = t.privateKeyFromSeed = void 0;
            const h = d(r(1401)),
                l = r(78);
            let y;
            t.privateKeyFromSeed = function(e) {
                return c(this, void 0, void 0, (function*() {
                    yield v();
                    return (y || h).privateKeyFromSeed(e)
                }))
            }, t.signTransactionBytes = function(e, t) {
                return c(this, void 0, void 0, (function*() {
                    yield v();
                    const r = (y || h).sign_musig(e, t);
                    return {
                        pubKey: l.utils.hexlify(r.slice(0, 32)).substr(2),
                        signature: l.utils.hexlify(r.slice(32)).substr(2)
                    }
                }))
            }, t.privateKeyToPubKeyHash = function(e) {
                return c(this, void 0, void 0, (function*() {
                    yield v();
                    const t = y || h;
                    return `sync:${l.utils.hexlify(t.private_key_to_pubkey_hash(e)).substr(2)}`
                }))
            }, t.rescueHashOrders = function(e) {
                return c(this, void 0, void 0, (function*() {
                    yield v();
                    return (y || h).rescueHashOrders(e)
                }))
            };
            let f = !1;

            function v(e) {
                return c(this, void 0, void 0, (function*() {
                    if (f) return;
                    const t = h;
                    t.loadZkSyncCrypto && (t.wasmSupported() ? yield t.loadZkSyncCrypto(e): y = yield t.loadZkSyncCrypto(e), f = !0)
                }))
            }
            t.loadZkSyncCrypto = v
        },
        805: function(e, t, r) {
            "use strict";
            var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(o, d) {
                    function c(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(c, h)
                    }
                    l((n = n.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AbstractWallet = void 0;
            const o = r(78),
                d = r(1),
                c = r(1410),
                h = r(806),
                l = r(113),
                y = r(307);
            t.AbstractWallet = class {
                constructor(e, t) {
                    this.cachedAddress = e, this.accountId = t
                }
                connect(e) {
                    return this.provider = e, this
                }
                address() {
                    return this.cachedAddress
                }
                getCurrentPubKeyHash() {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.provider.getState(this.address())).committed.pubKeyHash
                    }))
                }
                getNonce(e = "committed") {
                    return n(this, void 0, void 0, (function*() {
                        return "committed" === e ? (yield this.provider.getState(this.address())).committed.nonce : "number" == typeof e ? e : void 0
                    }))
                }
                getAccountId() {
                    return n(this, void 0, void 0, (function*() {
                        return (yield this.getAccountState()).id
                    }))
                }
                getAccountState() {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.provider.getState(this.address())
                    }))
                }
                resolveAccountId() {
                    return n(this, void 0, void 0, (function*() {
                        if (void 0 !== this.accountId) return this.accountId; {
                            const e = yield this.getAccountState();
                            if (!e.id) throw new Error("Can't resolve account id from the zkSync node");
                            return e.id
                        }
                    }))
                }
                isCorrespondingSigningKeySet() {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.syncSignerConnected()) throw new Error("ZKSync signer is required for current pubkey calculation.");
                        return (yield this.getCurrentPubKeyHash()) === (yield this.syncSignerPubKeyHash())
                    }))
                }
                isSigningKeySet() {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.syncSignerConnected()) throw new Error("ZKSync signer is required for current pubkey calculation.");
                        return "sync:0000000000000000000000000000000000000000" !== (yield this.getCurrentPubKeyHash())
                    }))
                }
                getNFT(e, t = "committed") {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.getAccountState();
                        let n;
                        return n = "committed" === t ? r.committed.nfts[e] : r.verified.nfts[e], n
                    }))
                }
                getBalance(e, t = "committed") {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.getAccountState(), n = this.provider.tokenSet.resolveTokenSymbol(e);
                        let d;
                        return d = "committed" === t ? r.committed.balances[n] || "0" : r.verified.balances[n] || "0", o.BigNumber.from(d)
                    }))
                }
                getEthereumBalance(e) {
                    return n(this, void 0, void 0, (function*() {
                        try {
                            return yield l.getEthereumBalance(this.ethSigner().provider, this.provider, this.cachedAddress, e)
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                batchBuilder(e) {
                    return c.BatchBuilder.fromWallet(this, e)
                }
                signLimitOrder(e) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.signOrder(Object.assign(Object.assign({}, e), {
                            amount: 0
                        }))
                    }))
                }
                getToggle2FA(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        const r = yield this.getAccountId(), n = (new Date).getTime();
                        return {
                            accountId: r,
                            signature: yield this.ethMessageSigner().getEthMessageSignature(l.getToggle2FAMessage(e, n, t)), timestamp: n, enable: e, pubKeyHash: t
                        }
                    }))
                }
                toggle2FA(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return yield this.setRequiredAccountIdFromServer("Toggle 2FA"), yield this.provider.toggle2FA(yield this.getToggle2FA(e, t))
                    }))
                }
                approveERC20TokenDeposits(e, t = l.MAX_ERC20_APPROVE_AMOUNT) {
                    return n(this, void 0, void 0, (function*() {
                        if (l.isTokenETH(e)) throw Error("ETH token does not need approval.");
                        const r = this.provider.tokenSet.resolveTokenAddress(e),
                            n = new o.Contract(r, l.IERC20_INTERFACE, this.ethSigner());
                        try {
                            return n.approve(this.provider.contractAddress.mainContract, t)
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                depositToSyncFromEthereum(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.ethSigner().provider.getGasPrice(), r = this.getZkSyncMainContract();
                        let n;
                        if (l.isTokenETH(e.token)) try {
                            n = yield r.depositETH(e.depositTo, Object.assign({
                                value: o.BigNumber.from(e.amount),
                                gasLimit: o.BigNumber.from(l.ETH_RECOMMENDED_DEPOSIT_GAS_LIMIT),
                                gasPrice: t
                            }, e.ethTxOptions))
                        } catch (e) {
                            this.modifyEthersError(e)
                        } else {
                            const d = this.provider.tokenSet.resolveTokenAddress(e.token),
                                c = new o.Contract(d, l.IERC20_INTERFACE, this.ethSigner());
                            let h;
                            if (e.approveDepositAmountForERC20) try {
                                h = (yield c.approve(this.provider.contractAddress.mainContract, e.amount)).nonce + 1
                            } catch (e) {
                                this.modifyEthersError(e)
                            }
                            const y = [d, e.amount, e.depositTo, Object.assign({
                                    nonce: h,
                                    gasPrice: t
                                }, e.ethTxOptions)],
                                f = y[y.length - 1];
                            if (null == f.gasLimit) try {
                                const e = yield r.estimateGas.depositERC20(...y).then((e => e), (() => o.BigNumber.from("0")));
                                let t = 1 == (yield this.ethSigner().getChainId()) && l.ERC20_DEPOSIT_GAS_LIMIT[d] ? o.BigNumber.from(l.ERC20_DEPOSIT_GAS_LIMIT[d]) : l.ERC20_RECOMMENDED_DEPOSIT_GAS_LIMIT;
                                f.gasLimit = e.gte(t) ? e : t, y[y.length - 1] = f
                            } catch (e) {
                                this.modifyEthersError(e)
                            }
                            try {
                                n = yield r.depositERC20(...y)
                            } catch (e) {
                                this.modifyEthersError(e)
                            }
                        }
                        return new y.ETHOperation(n, this.provider)
                    }))
                }
                onchainAuthSigningKey(e = "committed", t) {
                    return n(this, void 0, void 0, (function*() {
                        if (!this.syncSignerConnected()) throw new Error("ZKSync signer is required for current pubkey calculation.");
                        const r = yield this.getCurrentPubKeyHash(), n = yield this.syncSignerPubKeyHash();
                        if (r === n) throw new Error("Current PubKeyHash is the same as new");
                        const d = yield this.getNonce(e), c = this.getZkSyncMainContract();
                        try {
                            return c.setAuthPubkeyHash(n.replace("sync:", "0x"), d, Object.assign({
                                gasLimit: o.BigNumber.from("200000")
                            }, t))
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                emergencyWithdraw(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.ethSigner().provider.getGasPrice();
                        let r = null != e.accountId ? e.accountId : yield this.resolveAccountId();
                        const n = this.getZkSyncMainContract(),
                            d = this.provider.tokenSet.resolveTokenAddress(e.token);
                        try {
                            const c = yield n.requestFullExit(r, d, Object.assign({
                                gasLimit: o.BigNumber.from("500000"),
                                gasPrice: t
                            }, e.ethTxOptions));
                            return new y.ETHOperation(c, this.provider)
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                emergencyWithdrawNFT(e) {
                    return n(this, void 0, void 0, (function*() {
                        const t = yield this.ethSigner().provider.getGasPrice();
                        let r = null != e.accountId ? e.accountId : yield this.resolveAccountId();
                        const n = this.getZkSyncMainContract();
                        try {
                            const d = yield n.requestFullExitNFT(r, e.tokenId, Object.assign({
                                gasLimit: o.BigNumber.from("500000"),
                                gasPrice: t
                            }, e.ethTxOptions));
                            return new y.ETHOperation(d, this.provider)
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                signRegisterFactory(e) {
                    return n(this, void 0, void 0, (function*() {
                        yield this.setRequiredAccountIdFromServer("Sign register factory");
                        return {
                            signature: yield this.ethMessageSigner().ethSignRegisterFactoryMessage(e, this.accountId, this.address()), accountId: this.accountId, accountAddress: this.address()
                        }
                    }))
                }
                isOnchainAuthSigningKeySet(e = "committed") {
                    return n(this, void 0, void 0, (function*() {
                        const t = this.getZkSyncMainContract(),
                            r = yield this.getNonce(e);
                        try {
                            return "0x0000000000000000000000000000000000000000000000000000000000000000" !== (yield t.authFacts(this.address(), r))
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                isERC20DepositsApproved(e, t = l.ERC20_APPROVE_TRESHOLD) {
                    return n(this, void 0, void 0, (function*() {
                        if (l.isTokenETH(e)) throw Error("ETH token does not need approval.");
                        const r = this.provider.tokenSet.resolveTokenAddress(e),
                            n = new o.Contract(r, l.IERC20_INTERFACE, this.ethSigner());
                        try {
                            const e = yield n.allowance(this.address(), this.provider.contractAddress.mainContract);
                            return o.BigNumber.from(e).gte(t)
                        } catch (e) {
                            this.modifyEthersError(e)
                        }
                    }))
                }
                getZkSyncMainContract() {
                    return new o.ethers.Contract(this.provider.contractAddress.mainContract, l.SYNC_MAIN_CONTRACT_INTERFACE, this.ethSigner())
                }
                verifyNetworks() {
                    return n(this, void 0, void 0, (function*() {
                        if (null != this.provider.network && null != this.ethSigner().provider) {
                            const e = yield this.ethSigner().provider.getNetwork();
                            if (h.l1ChainId(this.provider.network) !== e.chainId) throw new Error(`ETH network ${e.name} and ZkSync network ${this.provider.network} don't match`)
                        }
                    }))
                }
                modifyEthersError(e) {
                    if (this.ethSigner instanceof o.ethers.providers.JsonRpcSigner) {
                        [d.ErrorCode.NONCE_EXPIRED, d.ErrorCode.INSUFFICIENT_FUNDS, d.ErrorCode.REPLACEMENT_UNDERPRICED, d.ErrorCode.UNPREDICTABLE_GAS_LIMIT].includes(e.code) || (e.message = `Ethereum smart wallet JSON RPC server returned the following error while executing an operation: "${e.message}". Please contact your smart wallet support for help.`)
                    }
                    throw e
                }
                setRequiredAccountIdFromServer(e) {
                    return n(this, void 0, void 0, (function*() {
                        if (void 0 === this.accountId) {
                            const t = yield this.getAccountId();
                            if (null == t) throw new Error(`Failed to ${e}: Account does not exist in the zkSync network`);
                            this.accountId = t
                        }
                    }))
                }
            }
        }
    }
]);