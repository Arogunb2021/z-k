(window.webpackJsonp = window.webpackJsonp || []).push([
    [120], {
        1409: function(e) {
            e.exports = JSON.parse('{"0x0000000000095413afc295d19edeb1ad7b71c952":140000,"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d":160000,"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd":140000,"0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac":140000,"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984":150000,"0x9ba00d6856a4edf4665bca2c2309936572473b7e":270000,"0x8daebade922df735c38c80c7ebd708af50815faa":140000,"0x0d8775f648430679a709e98d2b0cb6250d2887ef":140000,"0xdac17f958d2ee523a2206206994597c13d831ec7":140000,"0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24":150000,"0x056fd409e1d7a124bd7017459dfea2f387b6d5cd":180000,"0x0f5d2fb29fb7d3cfee444a200298f468908cc942":140000,"0x514910771af9ca656af840dff83e8264ecf986ca":140000,"0x1985365e9f78359a9b6ad760e32412f4a445e862":180000,"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599":140000,"0xe41d2489571d322189246dafa5ebde1f4699f498":140000,"0x6b175474e89094c44da98b954eedeac495271d0f":140000,"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d":150000,"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39":140000,"0x65ece136b89ebaa72a7f7aa815674946e44ca3f9":140000,"0x0000000000085d4780b73119b644ae5ecd22b376":150000,"0xdb25f211ab05b1c97d595516f45794528a807ad8":180000,"0x408e41876cccdc0f92210600ef50372656052a38":140000,"0x15a2b3cfafd696e1c783fe99eed168b78a3a371e":160000,"0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1":160000,"0x3108ccfd96816f9e663baa0e8c5951d229e8c6da":140000,"0x56d811088235f11c8920698a204a5010a788f4b3":240000,"0x57ab1ec28d129707052df4df418d58a2d46d5f51":220000,"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2":140000,"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":150000,"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f":200000,"0x744d70fdbe2ba4cf95131626614a1763df805b9e":230000,"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e":140000,"0x4c7065bca76fe44afb0d16c2441b1e6e163354e2":250000,"0xdd974d5c2e2928dea5f71b9825b8b646686bd200":140000,"0x80fb784b7ed66730e8b1dbd9820afd29931aab03":140000,"0xd56dac73a4d6766464b38ec6d91eb45ce7457c44":140000,"0x4fabb145d64652a948d72533023f6e7a623c7c53":150000,"0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7":140000,"0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429":140000}')
        },
        1472: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, d) {
                    function c(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(c, h)
                    }
                    l((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const o = n(78),
                d = n(563),
                c = n(113);

            function h(e) {
                if (!e.provider) throw new Error("The Ethereum Wallet must be connected to a provider")
            }
            d.Wallet.prototype.withdrawPendingBalance = function(e, t, n) {
                return r(this, void 0, void 0, (function*() {
                    h(this.ethSigner());
                    const r = this.getZkSyncMainContract(),
                        d = yield this.ethSigner().getGasPrice(), c = this.provider.tokenSet.resolveTokenAddress(t), l = n || (yield r.getPendingBalance(e, c));
                    return r.withdrawPendingBalance(e, c, l, {
                        gasLimit: o.BigNumber.from("200000"),
                        gasPrice: d
                    })
                }))
            }, d.Wallet.prototype.withdrawPendingBalances = function(e, t, n, d) {
                return r(this, void 0, void 0, (function*() {
                    if (h(this.ethSigner()), t.length != e.length) throw new Error("The array of addresses and the tokens should be the same length");
                    const r = n.address || function(e) {
                            switch (e) {
                                case "sepolia":
                                case "rinkeby-beta":
                                    return "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821";
                                case "goerli":
                                case "goerli-beta":
                                    return "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e";
                                case "mainnet":
                                    return "0xeefba1e63905ef1d7acba5a8513c70307c1ce441";
                                default:
                                    throw new Error("There is no default multicall contract address for this network")
                            }
                        }(n.network),
                        l = this.getZkSyncMainContract(),
                        f = yield this.ethSigner().getGasPrice(), S = t.map((e => this.provider.tokenSet.resolveTokenAddress(e)));
                    if (!d) {
                        const t = e.map(((address, i) => l.getPendingBalance(address, S[i])));
                        d = yield Promise.all(t)
                    }
                    if (d.length != t.length) throw new Error("The amounts array should be the same length as tokens array");
                    const y = e.map(((address, i) => {
                        const e = l.interface.encodeFunctionData("withdrawPendingBalance", [address, S[i], d[i]]);
                        return [l.address, e]
                    }));
                    return new o.Contract(r, c.MULTICALL_INTERFACE, this.ethSigner()).aggregate(y, {
                        gasLimit: n.gasLimit || o.BigNumber.from("300000"),
                        gasPrice: f
                    })
                }))
            }
        },
        485: function(e) {
            e.exports = JSON.parse('{"a":"0.13.1"}')
        },
        563: function(e, t, n) {
            "use strict";
            var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(o, d) {
                    function c(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function h(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            d(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(c, h)
                    }
                    l((r = r.apply(e, t || [])).next())
                }))
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Wallet = t.submitSignedTransactionsBatch = t.submitSignedTransaction = t.ETHOperation = t.Transaction = void 0;
            const o = n(78),
                d = n(564),
                c = n(566),
                h = n(113),
                l = n(307),
                f = n(805);
            var S = n(307);
            Object.defineProperty(t, "Transaction", {
                enumerable: !0,
                get: function() {
                    return S.Transaction
                }
            }), Object.defineProperty(t, "ETHOperation", {
                enumerable: !0,
                get: function() {
                    return S.ETHOperation
                }
            }), Object.defineProperty(t, "submitSignedTransaction", {
                enumerable: !0,
                get: function() {
                    return S.submitSignedTransaction
                }
            }), Object.defineProperty(t, "submitSignedTransactionsBatch", {
                enumerable: !0,
                get: function() {
                    return S.submitSignedTransactionsBatch
                }
            });
            class y extends f.AbstractWallet {
                constructor(e, t, n, r, o, d) {
                    super(n, o), this._ethSigner = e, this._ethMessageSigner = t, this.signer = r, this.ethSignerType = d
                }
                static fromEthSigner(e, t, n, o, h) {
                    return r(this, void 0, void 0, (function*() {
                        if (null == n) {
                            const t = yield c.Signer.fromETHSignature(e);
                            n = t.signer, h = h || t.ethSignatureType
                        } else if (null == h) throw new Error("If you passed signer, you must also pass ethSignerType.");
                        const r = new d.EthMessageSigner(e, h),
                            l = new y(e, r, yield e.getAddress(), n, o, h);
                        return l.connect(t), yield l.verifyNetworks(), l
                    }))
                }
                static fromCreate2Data(e, t, n, o) {
                    return r(this, void 0, void 0, (function*() {
                        const r = new c.Create2WalletSigner(yield e.pubKeyHash(), n);
                        return yield y.fromEthSigner(r, t, e, o, {
                            verificationMethod: "ERC-1271",
                            isSignedMsgPrefixed: !0
                        })
                    }))
                }
                static fromEthSignerNoKeys(e, t, n, o) {
                    return r(this, void 0, void 0, (function*() {
                        const r = new d.EthMessageSigner(e, o),
                            c = new y(e, r, yield e.getAddress(), void 0, n, o);
                        return c.connect(t), yield c.verifyNetworks(), c
                    }))
                }
                static fromSyncSigner(e, t, n, o) {
                    return r(this, void 0, void 0, (function*() {
                        return yield y.fromEthSigner(e, n, t, o, {
                            verificationMethod: "ERC-1271",
                            isSignedMsgPrefixed: !0
                        })
                    }))
                }
                ethSigner() {
                    return this._ethSigner
                }
                ethMessageSigner() {
                    return this._ethMessageSigner
                }
                syncSignerConnected() {
                    return null != this.signer
                }
                syncSignerPubKeyHash() {
                    return r(this, void 0, void 0, (function*() {
                        return yield this.signer.pubKeyHash()
                    }))
                }
                processBatchBuilderTransactions(e, t) {
                    return r(this, void 0, void 0, (function*() {
                        const n = [];
                        let r = [],
                            o = yield this.getNonce(e);
                        const d = o;
                        for (const e of t) switch (e.tx.nonce = o++, e.type) {
                            case "Withdraw":
                                r.push(this.getWithdrawEthMessagePart(e.tx));
                                const t = {
                                    tx: yield this.getWithdrawFromSyncToEthereum(e.tx)
                                };
                                n.push(t);
                                break;
                            case "Transfer":
                                r.push(yield this.getTransferEthMessagePart(e.tx));
                                const o = {
                                    tx: yield this.getTransfer(e.tx)
                                };
                                n.push(o);
                                break;
                            case "ChangePubKey":
                                const d = e.alreadySigned ? e.tx : (yield this.signSetSigningKey(e.tx)).tx;
                                if ((yield this.getCurrentPubKeyHash()) === d.newPkHash) throw new Error("Current signing key is already set");
                                r.push(this.getChangePubKeyEthMessagePart({
                                    pubKeyHash: d.newPkHash,
                                    feeToken: e.token,
                                    fee: d.fee
                                })), n.push({
                                    tx: d
                                });
                                break;
                            case "ForcedExit":
                                r.push(this.getForcedExitEthMessagePart(e.tx));
                                const c = {
                                    tx: yield this.getForcedExit(e.tx)
                                };
                                n.push(c);
                                break;
                            case "MintNFT":
                                r.push(this.getMintNFTEthMessagePart(e.tx));
                                const h = {
                                    tx: yield this.getMintNFT(e.tx)
                                };
                                n.push(h);
                                break;
                            case "Swap":
                                r.push(this.getSwapEthSignMessagePart(e.tx));
                                const l = {
                                    tx: yield this.getSwap(e.tx), ethereumSignature: [null, e.tx.orders[0].ethSignature || null, e.tx.orders[1].ethSignature || null]
                                };
                                n.push(l);
                                break;
                            case "WithdrawNFT":
                                r.push(this.getWithdrawNFTEthMessagePart(e.tx));
                                const f = {
                                    tx: yield this.getWithdrawNFT(e.tx)
                                };
                                n.push(f)
                        }
                        r.push(`Nonce: ${d}`);
                        const c = r.filter((e => 0 != e.length)).join("\n");
                        return {
                            txs: n,
                            signature: yield this.ethMessageSigner().getEthMessageSignature(c)
                        }
                    }))
                }
                signSyncTransfer(e) {
                    return r(this, void 0, void 0, (function*() {
                        e.validFrom = e.validFrom || 0, e.validUntil = e.validUntil || h.MAX_TIMESTAMP;
                        const t = yield this.getTransfer(e), n = o.BigNumber.from(e.amount).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.amount), r = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee), d = this.provider.tokenSet.resolveTokenSymbol(e.token);
                        return {
                            tx: t,
                            ethereumSignature: c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignTransfer({
                                stringAmount: n,
                                stringFee: r,
                                stringToken: d,
                                to: e.to,
                                nonce: e.nonce,
                                accountId: this.accountId
                            })
                        }
                    }))
                }
                syncTransfer(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), null == e.fee) {
                            const t = yield this.provider.getTransactionFee("Transfer", e.to, e.token);
                            e.fee = t.totalFee
                        }
                        const t = yield this.signSyncTransfer(e);
                        return l.submitSignedTransaction(t, this.provider)
                    }))
                }
                signSetSigningKey(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = yield this.signer.pubKeyHash();
                        let n, r;
                        if ("Onchain" === e.ethAuthType) n = {
                            type: "Onchain"
                        };
                        else if ("ECDSA" === e.ethAuthType) {
                            yield this.setRequiredAccountIdFromServer("ChangePubKey authorized by ECDSA.");
                            const r = h.getChangePubkeyMessage(t, e.nonce, this.accountId, e.batchHash);
                            n = {
                                type: "ECDSA",
                                ethSignature: (yield this.ethMessageSigner().getEthMessageSignature(r)).signature,
                                batchHash: e.batchHash
                            }
                        } else if ("CREATE2" === e.ethAuthType) {
                            const e = this.ethSigner();
                            if (!(e instanceof c.Create2WalletSigner)) throw new Error("CREATE2 wallet authentication is only available for CREATE2 wallets"); {
                                const t = e.create2WalletData;
                                n = {
                                    type: "CREATE2",
                                    creatorAddress: t.creatorAddress,
                                    saltArg: t.saltArg,
                                    codeHash: t.codeHash
                                }
                            }
                        } else {
                            if ("ECDSALegacyMessage" !== e.ethAuthType) throw new Error("Unsupported SetSigningKey type"); {
                                yield this.setRequiredAccountIdFromServer("ChangePubKey authorized by ECDSALegacyMessage.");
                                const n = h.getChangePubkeyLegacyMessage(t, e.nonce, this.accountId);
                                r = (yield this.ethMessageSigner().getEthMessageSignature(n)).signature
                            }
                        }
                        const o = Object.assign(e, {
                            ethAuthData: n,
                            ethSignature: r
                        });
                        o.validFrom = e.validFrom || 0, o.validUntil = e.validUntil || h.MAX_TIMESTAMP;
                        return {
                            tx: yield this.getChangePubKey(o)
                        }
                    }))
                }
                setSigningKey(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), null == e.fee)
                            if (e.fee = 0, "ECDSALegacyMessage" === e.ethAuthType) {
                                const t = {
                                        ChangePubKey: {
                                            onchainPubkeyAuth: !1
                                        }
                                    },
                                    n = yield this.provider.getTransactionFee(t, this.address(), e.feeToken);
                                e.fee = n.totalFee
                            } else {
                                const t = {
                                        ChangePubKey: e.ethAuthType
                                    },
                                    n = yield this.provider.getTransactionFee(t, this.address(), e.feeToken);
                                e.fee = n.totalFee
                            }
                        const t = yield this.signSetSigningKey(e);
                        if ((yield this.getCurrentPubKeyHash()) === t.tx.newPkHash) throw new Error("Current signing key is already set");
                        return l.submitSignedTransaction(t, this.provider)
                    }))
                }
                signWithdrawFromSyncToEthereum(e) {
                    return r(this, void 0, void 0, (function*() {
                        e.validFrom = e.validFrom || 0, e.validUntil = e.validUntil || h.MAX_TIMESTAMP;
                        const t = yield this.getWithdrawFromSyncToEthereum(e), n = o.BigNumber.from(e.amount).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.amount), r = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee), d = this.provider.tokenSet.resolveTokenSymbol(e.token);
                        return {
                            tx: t,
                            ethereumSignature: c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignWithdraw({
                                stringAmount: n,
                                stringFee: r,
                                stringToken: d,
                                ethAddress: e.ethAddress,
                                nonce: e.nonce,
                                accountId: this.accountId
                            })
                        }
                    }))
                }
                withdrawFromSyncToEthereum(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), null == e.fee) {
                            const t = !0 === e.fastProcessing ? "FastWithdraw" : "Withdraw",
                                n = yield this.provider.getTransactionFee(t, e.ethAddress, e.token);
                            e.fee = n.totalFee
                        }
                        const t = yield this.signWithdrawFromSyncToEthereum(e);
                        return l.submitSignedTransaction(t, this.provider, e.fastProcessing)
                    }))
                }
                signSyncForcedExit(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = yield this.getForcedExit(e), n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee), r = this.provider.tokenSet.resolveTokenSymbol(e.token);
                        return {
                            tx: t,
                            ethereumSignature: c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignForcedExit({
                                stringToken: r,
                                stringFee: n,
                                target: e.target,
                                nonce: e.nonce
                            })
                        }
                    }))
                }
                syncForcedExit(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), null == e.fee) {
                            const t = yield this.provider.getTransactionFee("ForcedExit", e.target, e.token);
                            e.fee = t.totalFee
                        }
                        const t = yield this.signSyncForcedExit(e);
                        return l.submitSignedTransaction(t, this.provider)
                    }))
                }
                signOrder(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = yield this.getPartialOrder(e), n = o.BigNumber.from(t.amount).isZero() ? null : this.provider.tokenSet.formatToken(t.tokenSell, t.amount), r = yield this.provider.getTokenSymbol(t.tokenSell), d = yield this.provider.getTokenSymbol(t.tokenBuy), h = c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignOrder({
                            amount: n,
                            tokenSell: r,
                            tokenBuy: d,
                            nonce: t.nonce,
                            recipient: t.recipient,
                            ratio: t.ratio
                        });
                        return t.ethSignature = h, t
                    }))
                }
                signSyncSwap(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = yield this.getSwap(e), n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee), r = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                        return {
                            tx: t,
                            ethereumSignature: [c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignSwap({
                                fee: n,
                                feeToken: r,
                                nonce: e.nonce
                            }), e.orders[0].ethSignature || null, e.orders[1].ethSignature || null]
                        }
                    }))
                }
                syncSwap(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), null == e.fee) {
                            const t = yield this.provider.getTransactionFee("Swap", this.address(), e.feeToken);
                            e.fee = t.totalFee
                        }
                        if (null == e.amounts) {
                            let t = o.BigNumber.from(e.orders[0].amount),
                                n = o.BigNumber.from(e.orders[1].amount);
                            if (t.eq(0) || n.eq(0)) throw new Error("If amounts in orders are implicit, you must specify them during submission");
                            e.amounts = [t, n]
                        }
                        const t = yield this.signSyncSwap(e);
                        return l.submitSignedTransaction(t, this.provider)
                    }))
                }
                signMintNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = yield this.getMintNFT(e), n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee), r = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                        return {
                            tx: t,
                            ethereumSignature: c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignMintNFT({
                                stringFeeToken: r,
                                stringFee: n,
                                recipient: e.recipient,
                                contentHash: e.contentHash,
                                nonce: e.nonce
                            })
                        }
                    }))
                }
                mintNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), e.contentHash = o.ethers.utils.hexlify(e.contentHash), null == e.fee) {
                            const t = yield this.provider.getTransactionFee("MintNFT", e.recipient, e.feeToken);
                            e.fee = t.totalFee
                        }
                        const t = yield this.signMintNFT(e);
                        return l.submitSignedTransaction(t, this.provider, !1)
                    }))
                }
                signWithdrawNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        e.validFrom = e.validFrom || 0, e.validUntil = e.validUntil || h.MAX_TIMESTAMP;
                        const t = yield this.getWithdrawNFT(e), n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee), r = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                        return {
                            tx: t,
                            ethereumSignature: c.unableToSign(this.ethSigner()) ? null : yield this.ethMessageSigner().ethSignWithdrawNFT({
                                token: e.token,
                                to: e.to,
                                stringFee: n,
                                stringFeeToken: r,
                                nonce: e.nonce
                            })
                        }
                    }))
                }
                withdrawNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), !h.isNFT(e.token)) throw new Error("This token ID does not correspond to an NFT");
                        if (null == e.fee) {
                            const t = !0 === e.fastProcessing ? "FastWithdrawNFT" : "WithdrawNFT",
                                n = yield this.provider.getTransactionFee(t, e.to, e.feeToken);
                            e.fee = n.totalFee
                        }
                        const t = yield this.signWithdrawNFT(e);
                        return l.submitSignedTransaction(t, this.provider, e.fastProcessing)
                    }))
                }
                syncTransferNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        let t;
                        e.nonce = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), t = null == e.fee ? yield this.provider.getTransactionsBatchFee(["Transfer", "Transfer"], [e.to, this.address()], e.feeToken): e.fee;
                        const n = {
                                to: e.to,
                                token: e.token.id,
                                amount: 1,
                                fee: 0
                            },
                            r = {
                                to: this.address(),
                                token: e.feeToken,
                                amount: 0,
                                fee: t
                            };
                        return yield this.syncMultiTransfer([n, r])
                    }))
                }
                syncMultiTransfer(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        if (0 == e.length) return [];
                        yield this.setRequiredAccountIdFromServer("Transfer funds");
                        let t = [],
                            n = [],
                            r = null != e[0].nonce ? yield this.getNonce(e[0].nonce): yield this.getNonce();
                        const o = r;
                        for (let i = 0; i < e.length; i++) {
                            const o = e[i],
                                d = r;
                            r += 1;
                            const c = yield this.getTransfer({
                                to: o.to,
                                token: o.token,
                                amount: o.amount,
                                fee: o.fee,
                                nonce: d,
                                validFrom: o.validFrom || 0,
                                validUntil: o.validUntil || h.MAX_TIMESTAMP
                            }), l = yield this.getTransferEthMessagePart(o);
                            n.push(l), t.push({
                                tx: c,
                                signature: null
                            })
                        }
                        n.push(`Nonce: ${o}`);
                        const d = n.filter((e => 0 != e.length)).join("\n"),
                            f = c.unableToSign(this.ethSigner()) ? [] : [yield this.ethMessageSigner().getEthMessageSignature(d)];
                        return (yield this.provider.submitTxsBatch(t, f)).map(((e, n) => new l.Transaction(t[n], e, this.provider)))
                    }))
                }
                getTransfer(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        yield this.setRequiredAccountIdFromServer("Transfer funds");
                        const t = this.provider.tokenSet.resolveTokenId(e.token),
                            n = {
                                accountId: this.accountId,
                                from: this.address(),
                                to: e.to,
                                tokenId: t,
                                amount: e.amount,
                                fee: e.fee,
                                nonce: e.nonce,
                                validFrom: e.validFrom,
                                validUntil: e.validUntil
                            };
                        return this.signer.signSyncTransfer(n)
                    }))
                }
                getChangePubKey(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for current pubkey calculation.");
                        const t = this.provider.tokenSet.resolveTokenId(e.feeToken),
                            n = yield this.signer.pubKeyHash();
                        yield this.setRequiredAccountIdFromServer("Set Signing Key");
                        return yield this.signer.signSyncChangePubKey({
                            accountId: this.accountId,
                            account: this.address(),
                            newPkHash: n,
                            nonce: e.nonce,
                            feeTokenId: t,
                            fee: o.BigNumber.from(e.fee).toString(),
                            ethAuthData: e.ethAuthData,
                            ethSignature: e.ethSignature,
                            validFrom: e.validFrom,
                            validUntil: e.validUntil
                        })
                    }))
                }
                getWithdrawFromSyncToEthereum(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        yield this.setRequiredAccountIdFromServer("Withdraw funds");
                        const t = this.provider.tokenSet.resolveTokenId(e.token),
                            n = {
                                accountId: this.accountId,
                                from: this.address(),
                                ethAddress: e.ethAddress,
                                tokenId: t,
                                amount: e.amount,
                                fee: e.fee,
                                nonce: e.nonce,
                                validFrom: e.validFrom,
                                validUntil: e.validUntil
                            };
                        return yield this.signer.signSyncWithdraw(n)
                    }))
                }
                getForcedExit(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        yield this.setRequiredAccountIdFromServer("perform a Forced Exit");
                        const t = this.provider.tokenSet.resolveTokenId(e.token),
                            n = {
                                initiatorAccountId: this.accountId,
                                target: e.target,
                                tokenId: t,
                                fee: e.fee,
                                nonce: e.nonce,
                                validFrom: e.validFrom || 0,
                                validUntil: e.validUntil || h.MAX_TIMESTAMP
                            };
                        return yield this.signer.signSyncForcedExit(n)
                    }))
                }
                getSwap(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("zkSync signer is required for swapping funds");
                        yield this.setRequiredAccountIdFromServer("Swap submission");
                        const t = this.provider.tokenSet.resolveTokenId(e.feeToken);
                        return this.signer.signSyncSwap(Object.assign(Object.assign({}, e), {
                            submitterId: yield this.getAccountId(), submitterAddress: this.address(), feeToken: t
                        }))
                    }))
                }
                getMintNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        yield this.setRequiredAccountIdFromServer("MintNFT");
                        const t = this.provider.tokenSet.resolveTokenId(e.feeToken),
                            n = {
                                creatorId: this.accountId,
                                creatorAddress: this.address(),
                                recipient: e.recipient,
                                contentHash: e.contentHash,
                                feeTokenId: t,
                                fee: e.fee,
                                nonce: e.nonce
                            };
                        return yield this.signer.signMintNFT(n)
                    }))
                }
                getWithdrawNFT(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("ZKSync signer is required for sending zksync transactions.");
                        yield this.setRequiredAccountIdFromServer("WithdrawNFT");
                        const t = this.provider.tokenSet.resolveTokenId(e.token),
                            n = this.provider.tokenSet.resolveTokenId(e.feeToken),
                            r = {
                                accountId: this.accountId,
                                from: this.address(),
                                to: e.to,
                                tokenId: t,
                                feeTokenId: n,
                                fee: e.fee,
                                nonce: e.nonce,
                                validFrom: e.validFrom,
                                validUntil: e.validUntil
                            };
                        return yield this.signer.signWithdrawNFT(r)
                    }))
                }
                getWithdrawNFTEthMessagePart(e) {
                    const t = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee),
                        n = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                    return this.ethMessageSigner().getWithdrawNFTEthMessagePart({
                        token: e.token,
                        to: e.to,
                        stringFee: t,
                        stringFeeToken: n
                    })
                }
                getTransferEthMessagePart(e) {
                    return r(this, void 0, void 0, (function*() {
                        const t = o.BigNumber.from(e.amount).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.amount),
                            n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee),
                            r = yield this.provider.getTokenSymbol(e.token);
                        return this.ethMessageSigner().getTransferEthMessagePart({
                            stringAmount: t,
                            stringFee: n,
                            stringToken: r,
                            to: e.to
                        })
                    }))
                }
                getWithdrawEthMessagePart(e) {
                    const t = o.BigNumber.from(e.amount).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.amount),
                        n = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee),
                        r = this.provider.tokenSet.resolveTokenSymbol(e.token);
                    return this.ethMessageSigner().getWithdrawEthMessagePart({
                        stringAmount: t,
                        stringFee: n,
                        stringToken: r,
                        ethAddress: e.ethAddress
                    })
                }
                getChangePubKeyEthMessagePart(e) {
                    const t = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee),
                        n = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                    return this.ethMessageSigner().getChangePubKeyEthMessagePart({
                        pubKeyHash: e.pubKeyHash,
                        stringToken: n,
                        stringFee: t
                    })
                }
                getMintNFTEthMessagePart(e) {
                    const t = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee),
                        n = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                    return this.ethMessageSigner().getMintNFTEthMessagePart({
                        stringFeeToken: n,
                        stringFee: t,
                        recipient: e.recipient,
                        contentHash: e.contentHash
                    })
                }
                getSwapEthSignMessagePart(e) {
                    const t = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.feeToken, e.fee),
                        n = this.provider.tokenSet.resolveTokenSymbol(e.feeToken);
                    return this.ethMessageSigner().getSwapEthSignMessagePart({
                        fee: t,
                        feeToken: n
                    })
                }
                getForcedExitEthMessagePart(e) {
                    const t = o.BigNumber.from(e.fee).isZero() ? null : this.provider.tokenSet.formatToken(e.token, e.fee),
                        n = this.provider.tokenSet.resolveTokenSymbol(e.token);
                    return this.ethMessageSigner().getForcedExitEthMessagePart({
                        stringToken: n,
                        stringFee: t,
                        target: e.target
                    })
                }
                getPartialOrder(e) {
                    return r(this, void 0, void 0, (function*() {
                        if (!this.signer) throw new Error("zkSync signer is required for signing an order");
                        yield this.setRequiredAccountIdFromServer("Swap order");
                        const t = null != e.nonce ? yield this.getNonce(e.nonce): yield this.getNonce(), n = e.recipient || this.address();
                        let r;
                        const d = e.tokenSell,
                            c = e.tokenBuy;
                        if (!e.ratio[d] || !e.ratio[c]) throw new Error(`Wrong tokens in the ratio object: should be ${d} and ${c}`);
                        "Wei" == e.ratio.type ? r = [e.ratio[d], e.ratio[c]] : "Token" == e.ratio.type && (r = [this.provider.tokenSet.parseToken(d, e.ratio[d].toString()), this.provider.tokenSet.parseToken(c, e.ratio[c].toString())]);
                        return yield this.signer.signSyncOrder({
                            accountId: this.accountId,
                            recipient: n,
                            nonce: t,
                            amount: e.amount || o.BigNumber.from(0),
                            tokenSell: this.provider.tokenSet.resolveTokenId(e.tokenSell),
                            tokenBuy: this.provider.tokenSet.resolveTokenId(e.tokenBuy),
                            validFrom: e.validFrom || 0,
                            validUntil: e.validUntil || h.MAX_TIMESTAMP,
                            ratio: r
                        })
                    }))
                }
            }
            t.Wallet = y
        }
    }
]);