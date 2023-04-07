(window.webpackJsonp = window.webpackJsonp || []).push([
    [101], {
        113: function(e, t, f) {
            "use strict";
            (function(e) {
                var n = this && this.__awaiter || function(e, t, f, n) {
                    return new(f || (f = Promise))((function(d, r) {
                        function c(e) {
                            try {
                                y(n.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function o(e) {
                            try {
                                y(n.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function y(e) {
                            var t;
                            e.done ? d(e.value) : (t = e.value, t instanceof f ? t : new f((function(e) {
                                e(t)
                            }))).then(c, o)
                        }
                        y((n = n.apply(e, t || [])).next())
                    }))
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.serializeTimestamp = t.serializeNonce = t.serializeFeePacked = t.serializeAmountFull = t.serializeAmountPacked = t.serializeTokenId = t.serializeAccountId = t.serializeAddress = t.serializeContentHash = t.getEthSignatureType = t.verifyERC1271Signature = t.signMessagePersonalAPI = t.getSignedBytesFromMessage = t.getToggle2FAMessage = t.getChangePubkeyLegacyMessage = t.getChangePubkeyMessage = t.TokenSet = t.isTokenETH = t.sleep = t.buffer2bitsBE = t.isNFT = t.isTransactionFeePackable = t.closestGreaterOrEqPackableTransactionFee = t.closestPackableTransactionFee = t.isTransactionAmountPackable = t.closestGreaterOrEqPackableTransactionAmount = t.closestPackableTransactionAmount = t.packFeeChecked = t.packAmountChecked = t.reverseBits = t.integerToFloatUp = t.integerToFloat = t.bitsIntoBytesInBEOrder = t.floatToInteger = t.weiRatio = t.tokenRatio = t.ERC20_RECOMMENDED_DEPOSIT_GAS_LIMIT = t.ETH_RECOMMENDED_DEPOSIT_GAS_LIMIT = t.ERC20_APPROVE_TRESHOLD = t.MAX_ERC20_APPROVE_AMOUNT = t.ERC20_DEPOSIT_GAS_LIMIT = t.MULTICALL_INTERFACE = t.IEIP1271_INTERFACE = t.SYNC_NFT_FACTORY_INTERFACE = t.SYNC_GOV_CONTRACT_INTERFACE = t.SYNC_MAIN_CONTRACT_INTERFACE = t.IERC20_INTERFACE = t.CURRENT_TX_VERSION = t.MIN_NFT_TOKEN_ID = t.MAX_TIMESTAMP = void 0, t.getTxHash = t.getPendingBalance = t.getEthereumBalance = t.getCREATE2AddressAndSalt = t.parseHexWithPrefix = t.numberToBytesBE = t.serializeTx = t.serializeForcedExit = t.serializeChangePubKey = t.serializeTransfer = t.serializeWithdrawNFT = t.serializeMintNFT = t.serializeWithdraw = t.serializeSwap = t.serializeOrder = void 0;
                const d = f(78),
                    r = f(565),
                    c = Math.pow(2, 31),
                    o = Math.pow(2, 24);
                t.MAX_TIMESTAMP = 4294967295, t.MIN_NFT_TOKEN_ID = 65536, t.CURRENT_TX_VERSION = 1, t.IERC20_INTERFACE = new d.utils.Interface(f(1403).abi), t.SYNC_MAIN_CONTRACT_INTERFACE = new d.utils.Interface(f(1404).abi), t.SYNC_GOV_CONTRACT_INTERFACE = new d.utils.Interface(f(1405).abi), t.SYNC_NFT_FACTORY_INTERFACE = new d.utils.Interface(f(1406).abi), t.IEIP1271_INTERFACE = new d.utils.Interface(f(1407).abi), t.MULTICALL_INTERFACE = new d.utils.Interface(f(1408).abi), t.ERC20_DEPOSIT_GAS_LIMIT = f(1409), t.MAX_ERC20_APPROVE_AMOUNT = d.BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"), t.ERC20_APPROVE_TRESHOLD = d.BigNumber.from("57896044618658097711785492504343953926634992332820282019728792003956564819968"), t.ETH_RECOMMENDED_DEPOSIT_GAS_LIMIT = d.BigNumber.from("90000"), t.ERC20_RECOMMENDED_DEPOSIT_GAS_LIMIT = d.BigNumber.from("300000");

                function y(e, t, f, n) {
                    if (8 * e.length !== f + t) throw new Error("Float unpacking, incorrect input length");
                    const r = C(e).reverse();
                    let c = d.BigNumber.from(0),
                        o = d.BigNumber.from(1);
                    for (let i = 0; i < t; i++) 1 === r[i] && (c = c.add(o)), o = o.mul(2);
                    c = d.BigNumber.from(n).pow(c);
                    let y = d.BigNumber.from(0),
                        l = d.BigNumber.from(1);
                    for (let i = t; i < t + f; i++) 1 === r[i] && (y = y.add(l)), l = l.mul(2);
                    return c.mul(y)
                }

                function l(e) {
                    if (e.length % 8 != 0) throw new Error("wrong number of bits to pack");
                    const t = e.length / 8,
                        f = new Uint8Array(t);
                    for (let n = 0; n < t; ++n) {
                        let t = 0;
                        1 === e[8 * n] && (t |= 128), 1 === e[8 * n + 1] && (t |= 64), 1 === e[8 * n + 2] && (t |= 32), 1 === e[8 * n + 3] && (t |= 16), 1 === e[8 * n + 4] && (t |= 8), 1 === e[8 * n + 5] && (t |= 4), 1 === e[8 * n + 6] && (t |= 2), 1 === e[8 * n + 7] && (t |= 1), f[n] = t
                    }
                    return f
                }

                function m(e, t) {
                    const f = [];
                    for (let i = 0; i < t; i++) f.push(1 & e), e /= 2;
                    return f
                }

                function T(e, t, f, n) {
                    const r = d.BigNumber.from(2).pow(t).sub(1),
                        c = d.BigNumber.from(n).pow(r),
                        o = d.BigNumber.from(2).pow(f).sub(1);
                    if (e.gt(o.mul(c))) throw new Error("Integer is too big");
                    let y = 0,
                        T = d.BigNumber.from(1);
                    for (; e.gt(o.mul(T));) T = T.mul(n), y += 1;
                    let k = e.div(T);
                    if (0 !== y) {
                        const t = T.mul(k),
                            f = T.div(n).mul(o),
                            d = e.sub(t);
                        e.sub(f).lt(d) && (k = o, y -= 1)
                    }
                    const h = [];
                    h.push(...m(y, t));
                    const w = k.toNumber();
                    return h.push(...m(w, f)), l(h.reverse()).reverse()
                }

                function k(e, t, f, n) {
                    const r = d.BigNumber.from(2).pow(t).sub(1),
                        c = d.BigNumber.from(n).pow(r),
                        o = d.BigNumber.from(2).pow(f).sub(1);
                    if (e.gt(o.mul(c))) throw new Error("Integer is too big");
                    let y = 0,
                        T = d.BigNumber.from(1);
                    for (; e.gt(o.mul(T));) T = T.mul(n), y += 1;
                    let k = e.div(T);
                    e.mod(T).eq(d.BigNumber.from(0)) || (k = k.add(1));
                    const h = [];
                    h.push(...m(y, t));
                    const w = k.toNumber();
                    return h.push(...m(w, f)), l(h.reverse()).reverse()
                }

                function h(e) {
                    const t = e.reverse();
                    return t.map((b => b = (170 & (b = (204 & (b = (240 & b) >> 4 | (15 & b) << 4)) >> 2 | (51 & b) << 2)) >> 1 | (85 & b) << 1)), t
                }

                function w(e) {
                    return h(T(e, 5, 35, 10))
                }

                function v(e) {
                    return h(T(e, 5, 11, 10))
                }

                function E(e) {
                    if (A(e.toString()).toString() !== e.toString()) throw new Error("Transaction Amount is not packable");
                    return w(e)
                }

                function I(e) {
                    if (N(e.toString()).toString() !== e.toString()) throw new Error("Fee Amount is not packable");
                    return v(e)
                }

                function A(e) {
                    return y(w(d.BigNumber.from(e)), 5, 35, 10)
                }

                function _(e) {
                    return A(e).eq(e)
                }

                function N(e) {
                    return y(v(d.BigNumber.from(e)), 5, 11, 10)
                }

                function M(e) {
                    return N(e).eq(e)
                }

                function F(e) {
                    return "number" == typeof e && e >= t.MIN_NFT_TOKEN_ID
                }

                function C(e) {
                    const t = new Array(8 * e.length);
                    for (let i = 0; i < e.length; i++) {
                        const b = e[i];
                        t[8 * i] = 0 != (128 & b) ? 1 : 0, t[8 * i + 1] = 0 != (64 & b) ? 1 : 0, t[8 * i + 2] = 0 != (32 & b) ? 1 : 0, t[8 * i + 3] = 0 != (16 & b) ? 1 : 0, t[8 * i + 4] = 0 != (8 & b) ? 1 : 0, t[8 * i + 5] = 0 != (4 & b) ? 1 : 0, t[8 * i + 6] = 0 != (2 & b) ? 1 : 0, t[8 * i + 7] = 0 != (1 & b) ? 1 : 0
                    }
                    return t
                }

                function S(e) {
                    return "ETH" === e || e === d.constants.AddressZero
                }
                t.tokenRatio = function(e) {
                    return Object.assign({
                        type: "Token"
                    }, e)
                }, t.weiRatio = function(e) {
                    return Object.assign({
                        type: "Wei"
                    }, e)
                }, t.floatToInteger = y, t.bitsIntoBytesInBEOrder = l, t.integerToFloat = T, t.integerToFloatUp = k, t.reverseBits = h, t.packAmountChecked = E, t.packFeeChecked = I, t.closestPackableTransactionAmount = A, t.closestGreaterOrEqPackableTransactionAmount = function(e) {
                    const t = function(e) {
                        return h(k(e, 5, 35, 10))
                    }(d.BigNumber.from(e));
                    return y(t, 5, 35, 10)
                }, t.isTransactionAmountPackable = _, t.closestPackableTransactionFee = N, t.closestGreaterOrEqPackableTransactionFee = function(e) {
                    return y(h(k(d.BigNumber.from(e), 5, 11, 10)), 5, 11, 10)
                }, t.isTransactionFeePackable = M, t.isNFT = F, t.buffer2bitsBE = C, t.sleep = function(e) {
                    return new Promise((t => setTimeout(t, e)))
                }, t.isTokenETH = S;

                function x(e, t) {
                    let f = "string" == typeof e ? d.utils.toUtf8Bytes(e) : d.utils.arrayify(e);
                    return t && (f = d.utils.concat([d.utils.toUtf8Bytes(`Ethereum Signed Message:\n${f.length}`), f])), f
                }

                function R(address, e, f, r, c = !0) {
                    return n(this, void 0, void 0, (function*() {
                        const n = x(e, c),
                            o = d.utils.keccak256(n),
                            y = new d.ethers.Contract(address, t.IEIP1271_INTERFACE, r);
                        return "0x1626ba7e" === (yield y.isValidSignature(o, f))
                    }))
                }

                function O(e) {
                    const t = d.utils.arrayify(e);
                    if (32 !== t.length) throw new Error("Content hash must be 32 bytes long");
                    return t
                }

                function P(address) {
                    const e = function(address) {
                            if (address.startsWith("0x")) return address.substr(2);
                            if (address.startsWith("sync:")) return address.substr(5);
                            throw new Error("ETH address must start with '0x' and PubKeyHash must start with 'sync:'")
                        }(address),
                        t = d.utils.arrayify(`0x${e}`);
                    if (20 !== t.length) throw new Error("Address must be 20 bytes long");
                    return t
                }

                function B(e) {
                    if (e < 0) throw new Error("Negative account id");
                    if (e >= o) throw new Error("AccountId is too big");
                    return Q(e, 4)
                }

                function U(e) {
                    if (e < 0) throw new Error("Negative tokenId");
                    if (e >= c) throw new Error("TokenId is too big");
                    return Q(e, 4)
                }

                function z(e) {
                    return E(d.BigNumber.from(e))
                }

                function D(e) {
                    const t = d.BigNumber.from(e);
                    return d.utils.zeroPad(d.utils.arrayify(t), 16)
                }

                function H(e) {
                    return I(d.BigNumber.from(e))
                }

                function L(e) {
                    if (e < 0) throw new Error("Negative nonce");
                    return Q(e, 4)
                }

                function G(time) {
                    if (time < 0) throw new Error("Negative timestamp");
                    return d.ethers.utils.concat([new Uint8Array(4), Q(time, 4)])
                }

                function V(e) {
                    const f = new Uint8Array(["o".charCodeAt(0)]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.accountId),
                        c = P(e.recipient),
                        o = L(e.nonce),
                        y = U(e.tokenSell),
                        l = U(e.tokenBuy),
                        m = d.BigNumber.from(e.ratio[0]).toHexString(),
                        T = d.BigNumber.from(e.ratio[1]).toHexString(),
                        k = z(e.amount),
                        h = G(e.validFrom),
                        w = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, d.ethers.utils.zeroPad(m, 15), d.ethers.utils.zeroPad(T, 15), k, h, w])
                }

                function j(e) {
                    return n(this, void 0, void 0, (function*() {
                        const f = new Uint8Array([244]),
                            n = new Uint8Array([t.CURRENT_TX_VERSION]),
                            c = B(e.submitterId),
                            o = P(e.submitterAddress),
                            y = L(e.nonce),
                            l = V(e.orders[0]),
                            m = V(e.orders[1]),
                            T = yield r.rescueHashOrders(d.ethers.utils.concat([l, m])), k = U(e.feeToken), h = H(e.fee), w = z(e.amounts[0]), v = z(e.amounts[1]);
                        return d.ethers.utils.concat([f, n, c, o, y, T, k, h, w, v])
                    }))
                }

                function Z(e) {
                    const f = new Uint8Array([252]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.accountId),
                        c = P(e.from),
                        o = P(e.to),
                        y = U(e.token),
                        l = D(e.amount),
                        m = H(e.fee),
                        T = L(e.nonce),
                        k = G(e.validFrom),
                        h = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T, k, h])
                }

                function W(e) {
                    const f = new Uint8Array([246]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.creatorId),
                        c = P(e.creatorAddress),
                        o = O(e.contentHash),
                        y = P(e.recipient),
                        l = U(e.feeToken),
                        m = H(e.fee),
                        T = L(e.nonce);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T])
                }

                function Y(e) {
                    const f = new Uint8Array([245]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.accountId),
                        c = P(e.from),
                        o = P(e.to),
                        y = U(e.token),
                        l = U(e.feeToken),
                        m = H(e.fee),
                        T = L(e.nonce),
                        k = G(e.validFrom),
                        h = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T, k, h])
                }

                function X(e) {
                    const f = new Uint8Array([250]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.accountId),
                        c = P(e.from),
                        o = P(e.to),
                        y = U(e.token),
                        l = z(e.amount),
                        m = H(e.fee),
                        T = L(e.nonce),
                        k = G(e.validFrom),
                        h = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T, k, h])
                }

                function K(e) {
                    const f = new Uint8Array([248]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.accountId),
                        c = P(e.account),
                        o = P(e.newPkHash),
                        y = U(e.feeToken),
                        l = H(e.fee),
                        m = L(e.nonce),
                        T = G(e.validFrom),
                        k = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T, k])
                }

                function $(e) {
                    const f = new Uint8Array([247]),
                        n = new Uint8Array([t.CURRENT_TX_VERSION]),
                        r = B(e.initiatorAccountId),
                        c = P(e.target),
                        o = U(e.token),
                        y = H(e.fee),
                        l = L(e.nonce),
                        m = G(e.validFrom),
                        T = G(e.validUntil);
                    return d.ethers.utils.concat([f, n, r, c, o, y, l, m, T])
                }

                function J(e) {
                    return n(this, void 0, void 0, (function*() {
                        switch (e.type) {
                            case "Transfer":
                                return X(e);
                            case "Withdraw":
                                return Z(e);
                            case "ChangePubKey":
                                return K(e);
                            case "ForcedExit":
                                return $(e);
                            case "MintNFT":
                                return W(e);
                            case "WithdrawNFT":
                                return Y(e);
                            case "Swap":
                                return j(e);
                            default:
                                return new Uint8Array
                        }
                    }))
                }

                function Q(e, t) {
                    const f = new Uint8Array(t);
                    for (let i = t - 1; i >= 0; i--) f[i] = 255 & e, e >>= 8;
                    return f
                }
                t.TokenSet = class {
                    constructor(e) {
                        this.tokensBySymbol = e
                    }
                    resolveTokenObject(e) {
                        if (this.tokensBySymbol[e]) return this.tokensBySymbol[e];
                        for (const t of Object.values(this.tokensBySymbol))
                            if ("number" == typeof e) {
                                if (t.id === e) return t
                            } else if (t.address.toLocaleLowerCase() === e.toLocaleLowerCase() || t.symbol.toLocaleLowerCase() === e.toLocaleLowerCase()) return t;
                        throw new Error(`Token ${e} is not supported`)
                    }
                    isTokenTransferAmountPackable(e, t) {
                        return _(this.parseToken(e, t))
                    }
                    isTokenTransactionFeePackable(e, t) {
                        return M(this.parseToken(e, t))
                    }
                    formatToken(e, t) {
                        const f = this.resolveTokenDecimals(e),
                            n = d.utils.formatUnits(t, f);
                        return n.includes(".") ? n : n + ".0"
                    }
                    parseToken(e, t) {
                        const f = this.resolveTokenDecimals(e);
                        return d.utils.parseUnits(t, f)
                    }
                    resolveTokenDecimals(e) {
                        return F(e) ? 0 : this.resolveTokenObject(e).decimals
                    }
                    resolveTokenId(e) {
                        return F(e) ? e : this.resolveTokenObject(e).id
                    }
                    resolveTokenAddress(e) {
                        return this.resolveTokenObject(e).address
                    }
                    resolveTokenSymbol(e) {
                        return this.resolveTokenObject(e).symbol
                    }
                }, t.getChangePubkeyMessage = function(e, t, f, n) {
                    const r = null == n ? new Uint8Array(32).fill(0) : d.ethers.utils.arrayify(n),
                        c = L(t),
                        o = B(f),
                        y = P(e);
                    return d.ethers.utils.concat([y, c, o, r])
                }, t.getChangePubkeyLegacyMessage = function(e, t, f) {
                    const n = d.utils.hexlify(L(t)),
                        r = d.utils.hexlify(B(f)),
                        c = `Register zkSync pubkey:\n\n${d.utils.hexlify(P(e)).substr(2)}\nnonce: ${n}\naccount id: ${r}\n\nOnly sign this message for a trusted client!`;
                    return d.utils.toUtf8Bytes(c)
                }, t.getToggle2FAMessage = function(e, t, f) {
                    let n;
                    return n = e ? `By signing this message, you are opting into Two-factor Authentication protection by the zkSync Server.\nTransactions now require signatures by both your L1 and L2 private key.\nTimestamp: ${t}` : `You are opting out of Two-factor Authentication protection by the zkSync Server.\nTransactions now only require signatures by your L2 private key.\nBY SIGNING THIS MESSAGE, YOU ARE TRUSTING YOUR WALLET CLIENT TO KEEP YOUR L2 PRIVATE KEY SAFE!\nTimestamp: ${t}`, f && (n += `\nPubKeyHash: ${f}`), d.utils.toUtf8Bytes(n)
                }, t.getSignedBytesFromMessage = x, t.signMessagePersonalAPI = function(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        return e instanceof d.ethers.providers.JsonRpcSigner ? e.provider.send("personal_sign", [d.utils.hexlify(t), yield e.getAddress()]).then((e => e), (f => {
                            if (f.message.includes("personal_sign")) return e.signMessage(t);
                            throw f
                        })) : e.signMessage(t)
                    }))
                }, t.verifyERC1271Signature = R, t.getEthSignatureType = function(e, t, f, address) {
                    return n(this, void 0, void 0, (function*() {
                        const n = "string" == typeof t ? d.utils.toUtf8Bytes(t) : d.utils.arrayify(t),
                            r = x(n, !1),
                            c = x(n, !0);
                        if (d.utils.recoverAddress(d.utils.keccak256(c), f).toLowerCase() === address.toLowerCase()) return {
                            verificationMethod: "ECDSA",
                            isSignedMsgPrefixed: !0
                        };
                        if (d.utils.recoverAddress(d.utils.keccak256(r), f).toLowerCase() === address.toLowerCase()) return {
                            verificationMethod: "ECDSA",
                            isSignedMsgPrefixed: !1
                        };
                        let o = null;
                        try {
                            o = yield R(address, r, f, e)
                        } catch (e) {
                            o = !1
                        }
                        return {
                            verificationMethod: "ERC-1271",
                            isSignedMsgPrefixed: o
                        }
                    }))
                }, t.serializeContentHash = O, t.serializeAddress = P, t.serializeAccountId = B, t.serializeTokenId = U, t.serializeAmountPacked = z, t.serializeAmountFull = D, t.serializeFeePacked = H, t.serializeNonce = L, t.serializeTimestamp = G, t.serializeOrder = V, t.serializeSwap = j, t.serializeWithdraw = Z, t.serializeMintNFT = W, t.serializeWithdrawNFT = Y, t.serializeTransfer = X, t.serializeChangePubKey = K, t.serializeForcedExit = $, t.serializeTx = J, t.numberToBytesBE = Q, t.parseHexWithPrefix = function(t) {
                    return Uint8Array.from(e.from(t.slice(2), "hex"))
                }, t.getCREATE2AddressAndSalt = function(e, t) {
                    const f = e.replace("sync:", "0x"),
                        n = d.ethers.utils.arrayify(t.saltArg);
                    if (32 !== n.length) throw new Error("create2Data.saltArg should be exactly 32 bytes long");
                    const r = d.ethers.utils.keccak256(d.ethers.utils.concat([n, f]));
                    return {
                        address: "0x" + d.ethers.utils.keccak256(d.ethers.utils.concat([d.ethers.utils.arrayify(255), d.ethers.utils.arrayify(t.creatorAddress), r, d.ethers.utils.arrayify(t.codeHash)])).slice(26),
                        salt: d.ethers.utils.hexlify(r)
                    }
                }, t.getEthereumBalance = function(e, f, address, r) {
                    return n(this, void 0, void 0, (function*() {
                        let n;
                        if (S(r)) n = yield e.getBalance(address);
                        else {
                            const c = new d.Contract(f.tokenSet.resolveTokenAddress(r), t.IERC20_INTERFACE, e);
                            n = yield c.balanceOf(address)
                        }
                        return n
                    }))
                }, t.getPendingBalance = function(e, f, address, r) {
                    return n(this, void 0, void 0, (function*() {
                        const n = new d.Contract(f.contractAddress.mainContract, t.SYNC_MAIN_CONTRACT_INTERFACE, e),
                            c = f.tokenSet.resolveTokenAddress(r);
                        return n.getPendingBalance(address, c)
                    }))
                }, t.getTxHash = function(e) {
                    return n(this, void 0, void 0, (function*() {
                        if ("Close" == e.type) throw new Error("Close operation is disabled");
                        let t = yield J(e);
                        return d.ethers.utils.sha256(t).replace("0x", "sync-tx:")
                    }))
                }
            }).call(this, f(33).Buffer)
        },
        1467: function(e, t, f) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ZkSyncNFTFactoryFactory = t.ZkSyncFactory = t.GovernanceFactory = void 0;
            var n = f(1468);
            Object.defineProperty(t, "GovernanceFactory", {
                enumerable: !0,
                get: function() {
                    return n.GovernanceFactory
                }
            });
            var d = f(1469);
            Object.defineProperty(t, "ZkSyncFactory", {
                enumerable: !0,
                get: function() {
                    return d.ZkSyncFactory
                }
            });
            var r = f(1470);
            Object.defineProperty(t, "ZkSyncNFTFactoryFactory", {
                enumerable: !0,
                get: function() {
                    return r.ZkSyncNFTFactoryFactory
                }
            })
        },
        1468: function(e, t, f) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GovernanceFactory = void 0;
            const n = f(78);
            class d extends n.ContractFactory {
                constructor(e) {
                    super(r, c, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(address) {
                    return super.attach(address)
                }
                connect(e) {
                    return super.connect(e)
                }
                static connect(address, e) {
                    return new n.Contract(address, r, e)
                }
            }
            t.GovernanceFactory = d;
            const r = [{
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "creatorAccountId",
                        type: "uint32"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "creatorAddress",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "factoryAddress",
                        type: "address"
                    }],
                    name: "NFTFactoryRegisteredCreator",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "newGovernor",
                        type: "address"
                    }],
                    name: "NewGovernor",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint16",
                        name: "tokenId",
                        type: "uint16"
                    }],
                    name: "NewToken",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "newTokenGovernance",
                        type: "address"
                    }],
                    name: "NewTokenGovernance",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "token",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "paused",
                        type: "bool"
                    }],
                    name: "TokenPausedUpdate",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "validatorAddress",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "isActive",
                        type: "bool"
                    }],
                    name: "ValidatorStatusUpdate",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_token",
                        type: "address"
                    }],
                    name: "addToken",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_newGovernor",
                        type: "address"
                    }],
                    name: "changeGovernor",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_newTokenGovernance",
                        type: "address"
                    }],
                    name: "changeTokenGovernance",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "defaultFactory",
                    outputs: [{
                        internalType: "contract NFTFactory",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "_creatorAccountId",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "_creatorAddress",
                        type: "address"
                    }],
                    name: "getNFTFactory",
                    outputs: [{
                        internalType: "contract NFTFactory",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "initializationParameters",
                        type: "bytes"
                    }],
                    name: "initialize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint16",
                        name: "_tokenId",
                        type: "uint16"
                    }],
                    name: "isValidTokenId",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "networkGovernor",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "nftFactories",
                    outputs: [{
                        internalType: "contract NFTFactory",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint16",
                        name: "",
                        type: "uint16"
                    }],
                    name: "pausedTokens",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "_creatorAccountId",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "_creatorAddress",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }],
                    name: "registerNFTFactoryCreator",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_address",
                        type: "address"
                    }],
                    name: "requireActiveValidator",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_address",
                        type: "address"
                    }],
                    name: "requireGovernor",
                    outputs: [],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_factory",
                        type: "address"
                    }],
                    name: "setDefaultNFTFactory",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddr",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "_tokenPaused",
                        type: "bool"
                    }],
                    name: "setTokenPaused",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_validator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "_active",
                        type: "bool"
                    }],
                    name: "setValidator",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint16",
                        name: "",
                        type: "uint16"
                    }],
                    name: "tokenAddresses",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tokenGovernance",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "tokenIds",
                    outputs: [{
                        internalType: "uint16",
                        name: "",
                        type: "uint16"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalTokens",
                    outputs: [{
                        internalType: "uint16",
                        name: "",
                        type: "uint16"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "upgradeParameters",
                        type: "bytes"
                    }],
                    name: "upgrade",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddr",
                        type: "address"
                    }],
                    name: "validateTokenAddress",
                    outputs: [{
                        internalType: "uint16",
                        name: "",
                        type: "uint16"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "validators",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                c = "0x608060405234801561001057600080fd5b50611184806100206000396000f3fe608060405234801561001057600080fd5b506004361061012d5760003560e01c8063ce09e20d116100b3578063ce09e20d1461040d578063d48bfca714610433578063d4b6846d14610459578063e122b7d114610461578063e2c7926814610493578063e4c0aaf4146104c8578063ead31762146104ee578063f39349ef14610514578063f3a65bf91461051c578063f5f84ed41461053d578063fa52c7d814610563578063fc97a303146105895761012d565b806310603dad14610132578063253946451461016f578063439fab91146101df5780634623c91d1461024d5780634b18bd0f1461027b57806362257470146102a157806378393d22146102cf5780637e1c0c09146102f55780638d1db94014610314578063b79eb8c71461031c578063c4dcb92c1461034e575b600080fd5b6101536004803603602081101561014857600080fd5b503561ffff166105af565b604080516001600160a01b039092168252519081900360200190f35b6101dd6004803603602081101561018557600080fd5b810190602081018135600160201b81111561019f57600080fd5b8201836020820111156101b157600080fd5b803590602001918460018302840111600160201b831117156101d257600080fd5b5090925090506105ca565b005b6101dd600480360360208110156101f557600080fd5b810190602081018135600160201b81111561020f57600080fd5b82018360208201111561022157600080fd5b803590602001918460018302840111600160201b8311171561024257600080fd5b5090925090506105ce565b6101dd6004803603604081101561026357600080fd5b506001600160a01b0381351690602001351515610607565b6101dd6004803603602081101561029157600080fd5b50356001600160a01b0316610696565b6101dd600480360360408110156102b757600080fd5b506001600160a01b03813516906020013515156106eb565b6101dd600480360360208110156102e557600080fd5b50356001600160a01b03166107fa565b6102fd61086c565b6040805161ffff9092168252519081900360200190f35b61015361087d565b6101536004803603604081101561033257600080fd5b50803563ffffffff1690602001356001600160a01b031661088c565b6101dd6004803603606081101561036457600080fd5b63ffffffff823516916001600160a01b0360208201351691810190606081016040820135600160201b81111561039957600080fd5b8201836020820111156103ab57600080fd5b803590602001918460018302840111600160201b831117156103cc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108d8945050505050565b6101dd6004803603602081101561042357600080fd5b50356001600160a01b0316610c0e565b6101dd6004803603602081101561044957600080fd5b50356001600160a01b0316610c7c565b610153610dfb565b6101536004803603604081101561047757600080fd5b50803563ffffffff1690602001356001600160a01b0316610e0a565b6104b4600480360360208110156104a957600080fd5b503561ffff16610e30565b604080519115158252519081900360200190f35b6101dd600480360360208110156104de57600080fd5b50356001600160a01b0316610e47565b6102fd6004803603602081101561050457600080fd5b50356001600160a01b0316610eb9565b610153610f0d565b6104b46004803603602081101561053257600080fd5b503561ffff16610f1c565b6101dd6004803603602081101561055357600080fd5b50356001600160a01b0316610f31565b6104b46004803603602081101561057957600080fd5b50356001600160a01b0316610f78565b6102fd6004803603602081101561059f57600080fd5b50356001600160a01b0316610f8d565b6001602052600090815260409020546001600160a01b031681565b5050565b6000828260208110156105e057600080fd5b506000805491356001600160a01b03166001600160a01b0319909216919091179055505050565b61061033610f31565b6001600160a01b03821660009081526003602052604090205460ff161515811515146105ca576001600160a01b038216600081815260036020908152604091829020805460ff1916851515908117909155825190815291517f065b77b53864e46fda3d8986acb51696223d6dde7ced42441eb150bae6d481369281900390910190a25050565b6001600160a01b03811660009081526003602052604090205460ff166106e8576040805162461bcd60e51b8152602060048201526002602482015261062d60f31b604482015290519081900360640190fd5b50565b6106f433610f31565b6000306001600160a01b031663ead31762846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561074357600080fd5b505afa158015610757573d6000803e3d6000fd5b505050506040513d602081101561076d57600080fd5b505161ffff811660009081526004602052604090205490915060ff161515821515146107f55761ffff8116600090815260046020908152604091829020805460ff1916851515908117909155825190815291516001600160a01b038616927ff72cbadf0693609a042637541df35c63e7e074363dea6efb5c19d6c7814ceee992908290030190a25b505050565b61080333610f31565b6005546001600160a01b038281169116146106e857600580546001600160a01b0383166001600160a01b0319909116811790915560408051918252517fb24c0fc80a0c2a8c6a406f1f63ac240a949e45444715e77bcb06073a1a1d401c9181900360200190a150565b600054600160a01b900461ffff1681565b6005546001600160a01b031681565b63ffffffff821660009081526006602090815260408083206001600160a01b038086168552925282205416806108cf5750506007546001600160a01b03166108d2565b90505b92915050565b63ffffffff831660009081526006602090815260408083206001600160a01b038681168552925290912054161561093a576040805162461bcd60e51b81526020600482015260016024820152605160f81b604482015290519081900360640190fd5b600061096d84604051602001808263ffffffff1660e01b8152600401915050604051602081830303815290604052610fa3565b6109a18460405160200180826001600160a01b031660601b8152601401915050604051602081830303815290604052610fa3565b604080513360601b60208201528151808203601401815260349091019091526109c990610fa3565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3134310000006020820190815290603d01602161112e823960210184805190602001908083835b60208310610a2d5780518252601f199092019160209182019101610a0e565b51815160209384036101000a600019018019909216911617905268521b932b0ba37b91d160b51b919093019081528551600a90910192860191508083835b60208310610a8a5780518252601f199092019160209182019101610a6b565b51815160209384036101000a60001901801990921691161790526852330b1ba37b93c9d160b51b919093019081528451600a90910192850191508083835b60208310610ae75780518252601f199092019160209182019101610ac8565b6001836020036101000a03801982511681845116808217855250505050505090500193505050506040516020818303038152906040528051906020012090506000610b328383611065565b9050836001600160a01b0316816001600160a01b0316148015610b5d57506001600160a01b03811615155b610b93576040805162461bcd60e51b8152602060048201526002602482015261777360f01b604482015290519081900360640190fd5b63ffffffff851660008181526006602090815260408083206001600160a01b0389168085529083529281902080546001600160a01b03191633908117909155815190815290519293927fa31b86f0827cd4eabf087b77e866f658278cb60e2d7c291d407edaada53408e0929181900390910190a35050505050565b610c1733610f31565b6007546001600160a01b031615610c5a576040805162461bcd60e51b815260206004820152600260248201526136b160f11b604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b03163314610cc0576040805162461bcd60e51b8152602060048201526002602482015261314560f01b604482015290519081900360640190fd5b6001600160a01b03811660009081526002602052604090205461ffff1615610d14576040805162461bcd60e51b8152602060048201526002602482015261316560f01b604482015290519081900360640190fd5b6000546005600160a01b90910461ffff1610610d5c576040805162461bcd60e51b815260206004820152600260248201526118b360f11b604482015290519081900360640190fd5b60008054600161ffff600160a01b808404821683018216810261ffff60a01b1990941693909317808555929092049091168083526020918252604080842080546001600160a01b0387166001600160a01b031990911681179091558085526002909352808420805461ffff1916831790555190928392917ffe74dea79bde70d1990ddb655bac45735b14f495ddc508cfab80b7729aa9d6689190a35050565b6007546001600160a01b031681565b60066020908152600092835260408084209091529082529020546001600160a01b031681565b600054600160a01b900461ffff9081169116111590565b610e5033610f31565b6000546001600160a01b038281169116146106e857600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f5425363a03f182281120f5919107c49c7a1a623acc1cbc6df468b6f0c11fcf8c9181900360200190a150565b6001600160a01b03811660009081526002602052604081205461ffff16806108d2576040805162461bcd60e51b8152602060048201526002602482015261316960f01b604482015290519081900360640190fd5b6000546001600160a01b031681565b60046020526000908152604090205460ff1681565b6000546001600160a01b038281169116146106e8576040805162461bcd60e51b8152602060048201526002602482015261316760f01b604482015290519081900360640190fd5b60036020526000908152604090205460ff1681565b60026020526000908152604090205461ffff1681565b60606000825160020267ffffffffffffffff81118015610fc257600080fd5b506040519080825280601f01601f191660200182016040528015610fed576020820181803683370190505b5090506020830183518101602083015b8183101561105b57825160f81c6f6665646362613938373635343332313060088260041c021c60f81b82526f66656463626139383736353433323130600882600f16021c60f81b600183015250600183019250600281019050610ffd565b5091949350505050565b600082516041146110a1576040805162461bcd60e51b81526020600482015260016024820152600560fc1b604482015290519081900360640190fd5b60008060006020860151925060408601519150606086015160001a905060018582858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611118573d6000803e3d6000fd5b5050604051601f19015197965050505050505056fe0a43726561746f722773206163636f756e7420494420696e207a6b53796e633a20a2646970667358221220643c94dea7204728fe246c744f5d5984f2fe7641921f3b225362b0b89e9488d764736f6c63430007060033"
        },
        1469: function(e, t, f) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ZkSyncFactory = void 0;
            const n = f(78);
            class d extends n.ContractFactory {
                constructor(e) {
                    super(r, c, e)
                }
                deploy(e) {
                    return super.deploy(e || {})
                }
                getDeployTransaction(e) {
                    return super.getDeployTransaction(e || {})
                }
                attach(address) {
                    return super.attach(address)
                }
                connect(e) {
                    return super.connect(e)
                }
                static connect(address, e) {
                    return new n.Contract(address, r, e)
                }
            }
            t.ZkSyncFactory = d;
            const r = [{
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "blockNumber",
                        type: "uint32"
                    }],
                    name: "BlockCommit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "blockNumber",
                        type: "uint32"
                    }],
                    name: "BlockVerification",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint32",
                        name: "totalBlocksVerified",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "uint32",
                        name: "totalBlocksCommitted",
                        type: "uint32"
                    }],
                    name: "BlocksRevert",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint16",
                        name: "tokenId",
                        type: "uint16"
                    }, {
                        indexed: !1,
                        internalType: "uint128",
                        name: "amount",
                        type: "uint128"
                    }],
                    name: "Deposit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "zkSyncBlockId",
                        type: "uint32"
                    }, {
                        indexed: !0,
                        internalType: "uint32",
                        name: "accountId",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint16",
                        name: "tokenId",
                        type: "uint16"
                    }, {
                        indexed: !1,
                        internalType: "uint128",
                        name: "amount",
                        type: "uint128"
                    }],
                    name: "DepositCommit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [],
                    name: "ExodusMode",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint32",
                        name: "nonce",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "fact",
                        type: "bytes"
                    }],
                    name: "FactAuth",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "zkSyncBlockId",
                        type: "uint32"
                    }, {
                        indexed: !0,
                        internalType: "uint32",
                        name: "accountId",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint16",
                        name: "tokenId",
                        type: "uint16"
                    }, {
                        indexed: !1,
                        internalType: "uint128",
                        name: "amount",
                        type: "uint128"
                    }],
                    name: "FullExitCommit",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint64",
                        name: "serialId",
                        type: "uint64"
                    }, {
                        indexed: !1,
                        internalType: "enum Operations.OpType",
                        name: "opType",
                        type: "uint8"
                    }, {
                        indexed: !1,
                        internalType: "bytes",
                        name: "pubData",
                        type: "bytes"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "expirationBlock",
                        type: "uint256"
                    }],
                    name: "NewPriorityRequest",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint16",
                        name: "tokenId",
                        type: "uint16"
                    }, {
                        indexed: !1,
                        internalType: "uint128",
                        name: "amount",
                        type: "uint128"
                    }],
                    name: "Withdrawal",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint32",
                        name: "tokenId",
                        type: "uint32"
                    }],
                    name: "WithdrawalNFT",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "contract IERC20",
                        name: "_token",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_to",
                        type: "address"
                    }, {
                        internalType: "uint128",
                        name: "_amount",
                        type: "uint128"
                    }, {
                        internalType: "uint128",
                        name: "_maxAmount",
                        type: "uint128"
                    }],
                    name: "_transferERC20",
                    outputs: [{
                        internalType: "uint128",
                        name: "withdrawnAmount",
                        type: "uint128"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "activateExodusMode",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }],
                    name: "authFacts",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint64",
                        name: "_n",
                        type: "uint64"
                    }, {
                        internalType: "bytes[]",
                        name: "_depositsPubdata",
                        type: "bytes[]"
                    }],
                    name: "cancelOutstandingDepositsForExodusMode",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "uint32",
                            name: "blockNumber",
                            type: "uint32"
                        }, {
                            internalType: "uint64",
                            name: "priorityOperations",
                            type: "uint64"
                        }, {
                            internalType: "bytes32",
                            name: "pendingOnchainOperationsHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            internalType: "bytes32",
                            name: "stateHash",
                            type: "bytes32"
                        }, {
                            internalType: "bytes32",
                            name: "commitment",
                            type: "bytes32"
                        }],
                        internalType: "struct Storage.StoredBlockInfo",
                        name: "_lastCommittedBlockData",
                        type: "tuple"
                    }, {
                        components: [{
                            internalType: "bytes32",
                            name: "newStateHash",
                            type: "bytes32"
                        }, {
                            internalType: "bytes",
                            name: "publicData",
                            type: "bytes"
                        }, {
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            components: [{
                                internalType: "bytes",
                                name: "ethWitness",
                                type: "bytes"
                            }, {
                                internalType: "uint32",
                                name: "publicDataOffset",
                                type: "uint32"
                            }],
                            internalType: "struct ZkSync.OnchainOperationData[]",
                            name: "onchainOperations",
                            type: "tuple[]"
                        }, {
                            internalType: "uint32",
                            name: "blockNumber",
                            type: "uint32"
                        }, {
                            internalType: "uint32",
                            name: "feeAccount",
                            type: "uint32"
                        }],
                        internalType: "struct ZkSync.CommitBlockInfo[]",
                        name: "_newBlocksData",
                        type: "tuple[]"
                    }],
                    name: "commitBlocks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "contract IERC20",
                        name: "_token",
                        type: "address"
                    }, {
                        internalType: "uint104",
                        name: "_amount",
                        type: "uint104"
                    }, {
                        internalType: "address",
                        name: "_zkSyncAddress",
                        type: "address"
                    }],
                    name: "depositERC20",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_zkSyncAddress",
                        type: "address"
                    }],
                    name: "depositETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            components: [{
                                internalType: "uint32",
                                name: "blockNumber",
                                type: "uint32"
                            }, {
                                internalType: "uint64",
                                name: "priorityOperations",
                                type: "uint64"
                            }, {
                                internalType: "bytes32",
                                name: "pendingOnchainOperationsHash",
                                type: "bytes32"
                            }, {
                                internalType: "uint256",
                                name: "timestamp",
                                type: "uint256"
                            }, {
                                internalType: "bytes32",
                                name: "stateHash",
                                type: "bytes32"
                            }, {
                                internalType: "bytes32",
                                name: "commitment",
                                type: "bytes32"
                            }],
                            internalType: "struct Storage.StoredBlockInfo",
                            name: "storedBlock",
                            type: "tuple"
                        }, {
                            internalType: "bytes[]",
                            name: "pendingOnchainOpsPubdata",
                            type: "bytes[]"
                        }],
                        internalType: "struct ZkSync.ExecuteBlockInfo[]",
                        name: "_blocksData",
                        type: "tuple[]"
                    }],
                    name: "executeBlocks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "exodusMode",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getNoticePeriod",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_address",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_token",
                        type: "address"
                    }],
                    name: "getPendingBalance",
                    outputs: [{
                        internalType: "uint128",
                        name: "",
                        type: "uint128"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "initializationParameters",
                        type: "bytes"
                    }],
                    name: "initialize",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "isReadyForUpgrade",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "uint32",
                            name: "blockNumber",
                            type: "uint32"
                        }, {
                            internalType: "uint64",
                            name: "priorityOperations",
                            type: "uint64"
                        }, {
                            internalType: "bytes32",
                            name: "pendingOnchainOperationsHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            internalType: "bytes32",
                            name: "stateHash",
                            type: "bytes32"
                        }, {
                            internalType: "bytes32",
                            name: "commitment",
                            type: "bytes32"
                        }],
                        internalType: "struct Storage.StoredBlockInfo[]",
                        name: "_committedBlocks",
                        type: "tuple[]"
                    }, {
                        components: [{
                            internalType: "uint256[]",
                            name: "recursiveInput",
                            type: "uint256[]"
                        }, {
                            internalType: "uint256[]",
                            name: "proof",
                            type: "uint256[]"
                        }, {
                            internalType: "uint256[]",
                            name: "commitments",
                            type: "uint256[]"
                        }, {
                            internalType: "uint8[]",
                            name: "vkIndexes",
                            type: "uint8[]"
                        }, {
                            internalType: "uint256[16]",
                            name: "subproofsLimbs",
                            type: "uint256[16]"
                        }],
                        internalType: "struct ZkSync.ProofInput",
                        name: "_proof",
                        type: "tuple"
                    }],
                    name: "proveBlocks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "_accountId",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "_token",
                        type: "address"
                    }],
                    name: "requestFullExit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "_accountId",
                        type: "uint32"
                    }, {
                        internalType: "uint32",
                        name: "_tokenId",
                        type: "uint32"
                    }],
                    name: "requestFullExitNFT",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        components: [{
                            internalType: "uint32",
                            name: "blockNumber",
                            type: "uint32"
                        }, {
                            internalType: "uint64",
                            name: "priorityOperations",
                            type: "uint64"
                        }, {
                            internalType: "bytes32",
                            name: "pendingOnchainOperationsHash",
                            type: "bytes32"
                        }, {
                            internalType: "uint256",
                            name: "timestamp",
                            type: "uint256"
                        }, {
                            internalType: "bytes32",
                            name: "stateHash",
                            type: "bytes32"
                        }, {
                            internalType: "bytes32",
                            name: "commitment",
                            type: "bytes32"
                        }],
                        internalType: "struct Storage.StoredBlockInfo[]",
                        name: "_blocksToRevert",
                        type: "tuple[]"
                    }],
                    name: "revertBlocks",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "_pubkeyHash",
                        type: "bytes"
                    }, {
                        internalType: "uint32",
                        name: "_nonce",
                        type: "uint32"
                    }],
                    name: "setAuthPubkeyHash",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalBlocksCommitted",
                    outputs: [{
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalBlocksExecuted",
                    outputs: [{
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes",
                        name: "upgradeParameters",
                        type: "bytes"
                    }],
                    name: "upgrade",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upgradeCanceled",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upgradeFinishes",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upgradeNoticePeriodStarted",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "upgradePreparationStarted",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "_owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_token",
                        type: "address"
                    }, {
                        internalType: "uint128",
                        name: "_amount",
                        type: "uint128"
                    }],
                    name: "withdrawPendingBalance",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint32",
                        name: "_tokenId",
                        type: "uint32"
                    }],
                    name: "withdrawPendingNFTBalance",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                c = "0x608060405234801561001057600080fd5b50615c8880620000216000396000f3fe60806040526004361061014c5760003560e01c806383981808116100bc57806383981808146102ea578063871b8ff11461030a5780638773334c1461031f5780638ae20dc9146103345780638ee1a74e14610354578063a7e7aacd14610374578063ab9b2adf14610389578063b0705b42146103a9578063b269b9ae1461030a578063b4a8498c146103c9578063d514da50146103e9578063e17376b514610409578063f223548714610429578063faf4d8cb1461044b5761014c565b806313d9787b146101515780632539464514610173578063264c0912146101935780632a3174f4146101be5780632d2da806146101e05780633b154b73146101f3578063439fab91146102085780634526929814610228578063505a757314610248578063595a5ebc146102685780635aca41f61461028857806378b91e70146102b55780637efcfe85146102ca575b600080fd5b34801561015d57600080fd5b5061017161016c36600461503e565b610460565b005b34801561017f57600080fd5b5061017161018e366004614d68565b6105d0565b34801561019f57600080fd5b506101a861062e565b6040516101b59190615596565b60405180910390f35b3480156101ca57600080fd5b506101d3610637565b6040516101b591906155a1565b6101716101ee3660046149ec565b61063d565b3480156101ff57600080fd5b50610171610685565b34801561021457600080fd5b50610171610223366004614d68565b610687565b34801561023457600080fd5b50610171610243366004614e9d565b610755565b34801561025457600080fd5b50610171610263366004615009565b6109a5565b34801561027457600080fd5b50610171610283366004614da7565b610c48565b34801561029457600080fd5b506102a86102a3366004614aae565b610dad565b6040516101b59190615b12565b3480156102c157600080fd5b50610171610e7e565b3480156102d657600080fd5b506101716102e5366004615059565b610e93565b3480156102f657600080fd5b50610171610305366004614c24565b61115c565b34801561031657600080fd5b506101716113b0565b34801561032b57600080fd5b506101a86113bf565b34801561034057600080fd5b506101d361034f366004614ae6565b6113c9565b34801561036057600080fd5b506102a861036f366004614df8565b6113e6565b34801561038057600080fd5b506101a8611585565b34801561039557600080fd5b506101716103a4366004615023565b61163d565b3480156103b557600080fd5b506101716103c4366004614b11565b61183c565b3480156103d557600080fd5b506101716103e4366004614bf2565b611a93565b3480156103f557600080fd5b50610171610404366004614a64565b611d08565b34801561041557600080fd5b50610171610424366004614e53565b611f61565b34801561043557600080fd5b5061043e61229f565b6040516101b59190615b35565b34801561045757600080fd5b5061043e6122b2565b600080516020615c3383398151915254806104a7576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c33833981519152556104c16122c5565b62ffffff63ffffffff841611156104f35760405162461bcd60e51b81526004016104ea90615929565b60405180910390fd5b63ffffffff831662ffffff141561051c5760405162461bcd60e51b81526004016104ea906158f3565b63ffffffff821661ffff10801561053c5750637ffffffe63ffffffff8316105b6105585760405162461bcd60e51b81526004016104ea90615850565b604080516101008101825263ffffffff80861682523360208301528416918101919091526000606082018190526080820181905260a0820181905260c0820181905260e082018190526105aa826122e8565b90506105b7600682612329565b50506001600080516020615c3383398151915255505050565b600080516020615c338339815191525480610617576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b50506001600080516020615c338339815191525550565b60095460ff1681565b60005b90565b6001600160a01b0381811614156106665760405162461bcd60e51b81526004016104ea906157ff565b61066e6122c5565b610682600061067c3461248a565b836124d1565b50565b565b61068f612564565b6000808061069f84860186614a24565b600280546001600160a01b038085166001600160a01b03199283161790925560038054928616929091169190911790556040805160c081018252600080825260208201819052600080516020615c1383398151915292820192909252606081018290526080810183905260a0810191909152929550909350915061072281612578565b60008052600d6020527f81955a0a11e65eac625c29e8882660bae4e165a75d72780094acae8ece9a29ee55505050505050565b600080516020615c33833981519152548061079c576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c33833981519152556107b66122c5565b600354604051634b18bd0f60e01b81526001600160a01b0390911690634b18bd0f906107e6903390600401615434565b60006040518083038186803b1580156107fe57600080fd5b505afa158015610812573d6000803e3d6000fd5b5050505061081f83612578565b600654600160601b900463ffffffff166000908152600d60205260409020541461085b5760405162461bcd60e51b81526004016104ea90615a6e565b60005b82518163ffffffff1610156109245761089084848363ffffffff168151811061088357fe5b60200260200101516125a8565b6020810151600c80546001600160401b03600160801b808304821690940116909202600160801b600160c01b031990921691909117905593506108d284612578565b845163ffffffff9081166000908152600d6020526040808220939093558651925192909116917f81a92942d0f9c33b897a438384c9c3d88be397776138efa3ba1a4fc8b62684249190a260010161085e565b5081516006805463ffffffff600160601b80830482169094011690920263ffffffff60601b19909216919091179055600c546001600160401b03600160401b82048116600160801b90920416111561098e5760405162461bcd60e51b81526004016104ea90615944565b6001600080516020615c3383398151915255505050565b600080516020615c3383398151915254806109ec576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c3383398151915281905563ffffffff808416825260126020908152604092839020835160c081018552815480851682526001600160a01b03600160201b82048116948301859052600160c01b909104851695820195909552600182015460608201526002909101549384166080820152600160a01b90930490911660a0830152610a925760405162461bcd60e51b81526004016104ea9061597a565b6003548151602083015160405163b79eb8c760e01b81526000936001600160a01b03169263b79eb8c792610ac892600401615b46565b60206040518083038186803b158015610ae057600080fd5b505afa158015610af4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b189190614a08565b9050806001600160a01b0316637ebcb16883602001518460800151856040015186606001518760a001516040518663ffffffff1660e01b8152600401610b629594939291906154b4565b600060405180830381600087803b158015610b7c57600080fd5b505af1158015610b90573d6000803e3d6000fd5b5050505060a08201805163ffffffff90811660009081526011602052604080822080546001600160a01b0319166001600160a01b0387161790559251925192909116917f0b9f3586023bf754b8d962232407f7ac4d90fd19a1c4756c6619927abf0675609190a250505063ffffffff16600090815260126020526040812080546001600160e01b031916815560018082019290925560020180546001600160c01b0319169055600080516020615c3383398151915255565b60148214610c685760405162461bcd60e51b81526004016104ea90615835565b336000908152600a6020908152604080832063ffffffff85168452909152902054610ccd578282604051610c9d92919061516f565b6040805191829003909120336000908152600a602090815283822063ffffffff8616835290529190912055610da8565b33600090815260106020908152604080832063ffffffff8516845290915290205480610d1b5733600090815260106020908152604080832063ffffffff861684529091529020429055610da6565b62015180610d2942836126d6565b1015610d475760405162461bcd60e51b81526004016104ea90615723565b33600090815260106020908152604080832063ffffffff861684529091528082209190915551610d7a908590859061516f565b6040805191829003909120336000908152600a602090815283822063ffffffff87168352905291909120555b505b505050565b6000806001600160a01b03831615610e42576003546040516375698bb160e11b81526001600160a01b039091169063ead3176290610def908690600401615434565b60206040518083038186803b158015610e0757600080fd5b505afa158015610e1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3f9190614fe7565b90505b60046000610e508684612703565b6001600160501b03191681526020810191909152604001600020546001600160801b03169150505b92915050565b6000805460ff19166001908117909155429055565b600080516020615c338339815191525480610eda576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c338339815191525560095460ff16610f0e5760405162461bcd60e51b81526004016104ea90615a38565b600c54600090610f2e90600160401b90046001600160401b031685612720565b90508251816001600160401b031614610f595760405162461bcd60e51b81526004016104ea906155f9565b6000816001600160401b031611610f825760405162461bcd60e51b81526004016104ea906159e7565b600c546000906001600160401b03165b600c546001600160401b039081168401811690821610156110fc5760016001600160401b0382166000908152600f6020526040902054600160e01b900460ff16600b811115610fdd57fe5b14156110ce57600085836001600160401b031681518110610ffa57fe5b6020908102919091018101516001600160401b0384166000908152600f90925260409091205490915060601b6001600160601b03191661103982612748565b6001600160601b031916146110605760405162461bcd60e51b81526004016104ea906156d2565b826001019250600061107182612756565b9050600061108782606001518360200151612703565b6040928301516001600160501b031991909116600090815260046020529290922080546001600160801b031981166001600160801b03918216909401169290921790915550505b6001600160401b0381166000908152600f6020526040902080546001600160e81b0319169055600101610f92565b5050600c8054600160401b600160801b03196001600160401b031982166001600160401b039283168501831617908116600160401b918290048316949094039091160291909117905550506001600080516020615c338339815191525550565b600080516020615c3383398151915254806111a3576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c33833981519152819055600e5463ffffffff16905b84518110156112905763ffffffff60018301166000908152600d60205260409020548551611203908790849081106111f657fe5b6020026020010151612578565b146112205760405162461bcd60e51b81526004016104ea9061586b565b8160010191506001600160fd1b0385828151811061123a57fe5b602002602001015160a0015160001c166001600160fd1b038560400151838151811061126257fe5b602002602001015116146112885760405162461bcd60e51b81526004016104ea9061578f565b6001016111c2565b506002548351602085015160608601516040808801516080890151915163054185eb60e51b81526000966001600160a01b03169563a830bd60956112dc959194909391926004016154ea565b60206040518083038186803b1580156112f457600080fd5b505afa158015611308573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132c9190614d30565b90508061134b5760405162461bcd60e51b81526004016104ea90615680565b60065463ffffffff600160601b9091048116908316111561137e5760405162461bcd60e51b81526004016104ea906156ed565b50600e805463ffffffff191663ffffffff9290921691909117905550506001600080516020615c338339815191525550565b6000805460ff19168155600155565b60095460ff161590565b600a60209081526000928352604080842090915290825290205481565b60003330146114075760405162461bcd60e51b81526004016104ea906159b1565b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190611436903090600401615434565b60206040518083038186803b15801561144e57600080fd5b505afa158015611462573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114869190614d50565b905061149c8686866001600160801b03166127e5565b6114b85760405162461bcd60e51b81526004016104ea90615a1d565b6040516370a0823160e01b81526000906001600160a01b038816906370a08231906114e7903090600401615434565b60206040518083038186803b1580156114ff57600080fd5b505afa158015611513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115379190614d50565b9050600061154583836126d6565b9050846001600160801b03168111156115705760405162461bcd60e51b81526004016104ea90615774565b6115798161248a565b98975050505050505050565b600c546001600160401b039081166000908152600f602052604081205490918291600160a01b90041643108015906115e05750600c546001600160401b039081166000908152600f6020526040902054600160a01b90041615155b905080156116335760095460ff16611629576009805460ff191660011790556040517fc71028c67eb0ef128ea270a59a674629e767d51c1af44ed6753fd2fad2c7b67790600090a15b600191505061063a565b600091505061063a565b600080516020615c338339815191525480611684576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c338339815191525561169e6122c5565b62ffffff63ffffffff841611156116c75760405162461bcd60e51b81526004016104ea90615929565b63ffffffff831662ffffff14156116f05760405162461bcd60e51b81526004016104ea906158f3565b60006001600160a01b0383166117085750600061178b565b6003546040516375698bb160e11b81526001600160a01b039091169063ead3176290611738908690600401615434565b60206040518083038186803b15801561175057600080fd5b505afa158015611764573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117889190614fe7565b90505b604080516101008101825263ffffffff8616815233602082015261ffff8316918101919091526000606082018190526080820181905260a0820181905260c0820181905260e082018190526117df826122e8565b90506117ec600682612329565b60006117f83385612703565b6001600160501b0319166000908152600460205260409020805460ff60801b191660ff60801b17905550506001600080516020615c33833981519152555050505050565b600080516020615c338339815191525480611883576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c338339815191525561189d6122c5565b600354604051634b18bd0f60e01b81526001600160a01b0390911690634b18bd0f906118cd903390600401615434565b60006040518083038186803b1580156118e557600080fd5b505afa1580156118f9573d6000803e3d6000fd5b50508351600092509050815b8163ffffffff168163ffffffff1610156119be5761193c858263ffffffff168151811061192e57fe5b60200260200101518261290b565b848163ffffffff168151811061194e57fe5b6020026020010151600001516020015183019250848163ffffffff168151811061197457fe5b6020026020010151600001516000015163ffffffff167f0cdbd8bd7813095001c5fe7917bd69d834dc01db7c1dfcf52ca135bd2038441360405160405180910390a2600101611905565b50600c8054600160401b600160801b0319600160801b600160c01b03196001600160401b031983166001600160401b039384168701841617908116600160801b918290048416879003841690910217908116600160401b9182900483168690039092168102919091179091556006805463ffffffff60401b1981169083900463ffffffff9081168501811684029190911791829055600e54811692909104161115611a7b5760405162461bcd60e51b81526004016104ea90615759565b50506001600080516020615c33833981519152555050565b600080516020615c338339815191525480611ada576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c3383398151915255600354604051634b18bd0f60e01b81526001600160a01b0390911690634b18bd0f90611b1c903390600401615434565b60006040518083038186803b158015611b3457600080fd5b505afa158015611b48573d6000803e3d6000fd5b5050600654845163ffffffff600160601b83048116945060009350611b7692600160401b9004168403612bb8565b90506000805b8263ffffffff168163ffffffff161015611c1b576000868263ffffffff1681518110611ba457fe5b60200260200101519050611bb781612578565b63ffffffff86166000908152600d602052604090205414611bea5760405162461bcd60e51b81526004016104ea90615708565b63ffffffff85166000908152600d602090815260408220919091550151600019909401939190910190600101611b7c565b506006805463ffffffff60601b1916600160601b63ffffffff86811682029290921792839055600c8054600160801b600160c01b03198116600160801b918290046001600160401b0390811688900316909102179055600e5482169204161015611ca457600654600e8054600160601b90920463ffffffff1663ffffffff199092169190911790555b7f6f3a8259cce1ea2680115053d21c971aa1764295a45850f520525f2bfdf3c9d3600660089054906101000a900463ffffffff1684604051611ce7929190615b65565b60405180910390a15050506001600080516020615c33833981519152555050565b600080516020615c338339815191525480611d4f576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c33833981519152556001600160a01b038316611e0657611d7b60008386612bd3565b6000846001600160a01b0316836001600160801b0316604051611d9d9061063a565b60006040518083038185875af1925050503d8060008114611dda576040519150601f19603f3d011682016040523d82523d6000602084013e611ddf565b606091505b5050905080611e005760405162461bcd60e51b81526004016104ea90615a89565b50611f49565b6003546040516375698bb160e11b81526000916001600160a01b03169063ead3176290611e37908790600401615434565b60206040518083038186803b158015611e4f57600080fd5b505afa158015611e63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e879190614fe7565b90506000611e958683612703565b6001600160501b031981166000908152600460208190526040808320549051634770d3a760e11b81529394506001600160801b0316923091638ee1a74e91611ee5918b918d918c918991016155aa565b602060405180830381600087803b158015611eff57600080fd5b505af1158015611f13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f379190614fcb565b9050611f4484828a612bd3565b505050505b6001600080516020615c338339815191525550505050565b600080516020615c338339815191525480611fa8576040805162461bcd60e51b815260206004820152600260248201526118b160f11b604482015290519081900360640190fd5b6000600080516020615c33833981519152556001600160a01b038281161415611fe35760405162461bcd60e51b81526004016104ea906157ff565b611feb6122c5565b6003546040516375698bb160e11b81526000916001600160a01b03169063ead317629061201c908890600401615434565b60206040518083038186803b15801561203457600080fd5b505afa158015612048573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061206c9190614fe7565b60035460405163f3a65bf960e01b81529192506001600160a01b03169063f3a65bf99061209d908490600401615b26565b60206040518083038186803b1580156120b557600080fd5b505afa1580156120c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ed9190614d30565b1561210a5760405162461bcd60e51b81526004016104ea9061595f565b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190612139903090600401615434565b60206040518083038186803b15801561215157600080fd5b505afa158015612165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121899190614d50565b90506121b18633306121a3896001600160681b031661248a565b6001600160801b0316612c7d565b6121cd5760405162461bcd60e51b81526004016104ea9061562f565b6040516370a0823160e01b81526000906001600160a01b038816906370a08231906121fc903090600401615434565b60206040518083038186803b15801561221457600080fd5b505afa158015612228573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224c9190614d50565b9050600061226261225d83856126d6565b61248a565b90506001600160681b036001600160801b03821611156122945760405162461bcd60e51b81526004016104ea906155de565b611f448482886124d1565b600654600160401b900463ffffffff1681565b600654600160601b900463ffffffff1681565b60095460ff16156106855760405162461bcd60e51b81526004016104ea90615887565b606060068251602080850151604080870151905161231395949360009182918291829182910161539f565b6040516020818303038152906040529050919050565b600c5443606501906001600160401b03808216600160401b9092041601600061235184612748565b90506040518060600160405280826001600160601b0319168152602001846001600160401b0316815260200186600b81111561238957fe5b90526001600160401b038084166000908152600f60209081526040918290208451815492860151909416600160a01b0267ffffffffffffffff60a01b1960609590951c6001600160a01b03199093169290921793909316178083559083015190829060ff60e01b1916600160e01b83600b81111561240357fe5b02179055509050507fd0943372c08b438a88d4b39d77216901079eda9ca59d45349841c099083b683033838787876001600160401b031660405161244b959493929190615448565b60405180910390a15050600c805460016001600160401b03600160401b8084048216929092011602600160401b600160801b0319909116179055505050565b6000600160801b82106124c9576040805162461bcd60e51b8152602060048201526002602482015261189b60f11b604482015290519081900360640190fd5b50805b919050565b60408051608081018252600080825261ffff861660208301526001600160801b038516928201929092526001600160a01b03831660608201529061251482612da9565b9050612521600182612329565b8461ffff167f8f5f51448394699ad6a3b80cdadf4ec68c5d724c8c3fea09bea55b3c2d0e2dd0856040516125559190615b12565b60405180910390a25050505050565b6001600080516020615c3383398151915255565b60008160405160200161258b9190615abf565b604051602081830303815290604052805190602001209050919050565b6125b061451e565b826000015160010163ffffffff16826080015163ffffffff16146125e65760405162461bcd60e51b81526004016104ea906159cc565b82606001518260400151101561260e5760405162461bcd60e51b81526004016104ea9061564a565b604082015160009061262342620151806126d6565b11159050600061263542610384612dd0565b8460400151111590508180156126485750805b6126645760405162461bcd60e51b81526004016104ea9061590e565b5050600080600061267485612e0f565b92509250925060006126878787846131e5565b6040805160c0810182526080808a015163ffffffff1682526001600160401b039096166020820152808201969096528701516060860152865193850193909352505060a0820152905092915050565b60006126fc8383604051806040016040528060018152602001603b60f91b815250613428565b9392505050565b60a01b61ffff60a01b166001600160a01b03919091161760501b90565b6000816001600160401b0316836001600160401b03161061274157816126fc565b5090919050565b805160209091012060601b90565b61275e614553565b600161276a83826134bf565b63ffffffff168352905061277e83826134bf565b63ffffffff166020840152905061279583826134d8565b6001600160801b0316604084015290506127af83826134e8565b6001600160a01b031660608401529050602d81146127df5760405162461bcd60e51b81526004016104ea9061581a565b50919050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17815292518251600094859485948a16939092909182918083835b602083106128635780518252601f199092019160209182019101612844565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146128c5576040519150601f19603f3d011682016040523d82523d6000602084013e6128ca565b606091505b509150915060008151600014806128f457508180602001905160208110156128f157600080fd5b50515b90508280156129005750805b979650505050505050565b81515163ffffffff166000908152600d6020526040902054825161292e90612578565b1461294b5760405162461bcd60e51b81526004016104ea906157aa565b600654825151600160401b90910463ffffffff908116830160010181169116146129875760405162461bcd60e51b81526004016104ea90615aa4565b600080516020615c1383398151915260005b8360200151518163ffffffff161015612b9357600084602001518263ffffffff16815181106129c457fe5b602002602001015190506000816000815181106129dd57fe5b016020015160f81c600b8111156129f057fe5b9050600381600b811115612a0057fe5b1415612a30576000612a11836134f8565b9050612a2a816000015182604001518360200151613553565b50612b7a565b600881600b811115612a3e57fe5b1415612a4f576000612a11836136f2565b600681600b811115612a5d57fe5b1415612b38576000612a6e83613706565b905061ffff63ffffffff16816040015163ffffffff1611612aa557612aa0816040015182602001518360600151613553565b612a2a565b80606001516001600160801b031660011415612a2a5760006040518060c00160405280836080015163ffffffff1681526020018360a001516001600160a01b031681526020018360c0015163ffffffff1681526020018360e00151815260200183602001516001600160a01b03168152602001836040015163ffffffff168152509050612b31816137e8565b5050612b7a565b600a81600b811115612b4657fe5b1415612b62576000612b5783613a10565b9050612a2a816137e8565b60405162461bcd60e51b81526004016104ea906157c9565b612b848483613aa7565b93505050806001019050612999565b508251604001518114610da85760405162461bcd60e51b81526004016104ea90615a02565b60008163ffffffff168363ffffffff161061274157816126fc565b6000612bdf8285612703565b6001600160501b031981166000908152600460205260409020549091506001600160801b0316612c0f8185613ab6565b6001600160501b031983166000908152600460205260409081902080546001600160801b0319166001600160801b0393909316929092179091555161ffff8616907ff4bf32c167ee6e782944cd1db8174729b46adcd3bc732e282cc4a8079393315490612555908790615b12565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094859485948b16939092909182918083835b60208310612d035780518252601f199092019160209182019101612ce4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612d65576040519150601f19603f3d011682016040523d82523d6000602084013e612d6a565b606091505b50915091506000815160001480612d945750818060200190516020811015612d9157600080fd5b50515b90508280156115795750979650505050505050565b60606001602080840151604080860151606087015191516123139594600094939101615341565b6000828201838110156126fc576040805162461bcd60e51b81526020600482015260026024820152610c4d60f21b604482015290519081900360640190fd5b6020810151600c548151600080516020615c13833981519152926000926060926001600160401b03808316600160801b909304169190910190600a900615612e695760405162461bcd60e51b81526004016104ea906155f9565b8151600a90046001600160401b0381118015612e8457600080fd5b506040519080825280601f01601f191660200182016040528015612eaf576020820181803683370190505b50925060005b8660600151518110156131db57600087606001518281518110612ed457fe5b602002602001015190506000816020015163ffffffff16905084518110612f0d5760405162461bcd60e51b81526004016104ea906156b6565b600a810615612f2e5760405162461bcd60e51b81526004016104ea90615665565b6000600a82049050868181518110612f4257fe5b01602001516001600160f81b03191615612f6e5760405162461bcd60e51b81526004016104ea906155de565b600160f81b878281518110612f7f57fe5b60200101906001600160f81b031916908160001a9053506000868381518110612fa457fe5b016020015160f81c600b811115612fb757fe5b9050600181600b811115612fc757fe5b1415613003576000612fdb8885603c613add565b90506000612fe882612756565b9050612ff6818c8a01613b99565b50506001909801976131cc565b600781600b81111561301157fe5b14156130f65760006130258885603c613add565b9050600061303282613c29565b8651519091501561307257600061304d876000015183613c99565b90508061306c5760405162461bcd60e51b81526004016104ea906157e4565b506130ef565b600081602001516040516020016130899190615134565b60408051601f198184030181529181528151602092830120848201516001600160a01b03166000908152600a8452828120606087015163ffffffff168252909352912054149050806130ed5760405162461bcd60e51b81526004016104ea9061573e565b505b50506131cc565b6060600382600b81111561310657fe5b141561311f576131188885603c613add565b90506131be565b600882600b81111561312d57fe5b141561313f576131188885603c613add565b600a82600b81111561314d57fe5b141561315f5761311888856064613add565b600682600b81111561316d57fe5b14156131a65761317f8885606e613add565b9050600061318c82613706565b905061319a818c8a01613d38565b506001909901986131be565b60405162461bcd60e51b81526004016104ea90615a53565b6131c88b82613aa7565b9a50505b50505050806001019050612eb5565b5050509193909250565b6000806002846080015163ffffffff168560a0015163ffffffff16604051602001613211929190615161565b60408051601f198184030181529082905261322b9161517f565b602060405180830381855afa158015613248573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061326b9190614d50565b90506002818660800151604051602001613286929190615161565b60408051601f19818403018152908290526132a09161517f565b602060405180830381855afa1580156132bd573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906132e09190614d50565b84516040519192506002916132f9918491602001615161565b60408051601f19818403018152908290526133139161517f565b602060405180830381855afa158015613330573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906133539190614d50565b9050600281856040015160405160200161336e929190615161565b60408051601f19818403018152908290526133889161517f565b602060405180830381855afa1580156133a5573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906133c89190614d50565b905060008460200151846040516020016133e392919061519b565b60405160208183030381529060405290506040518151838352602082602083018560025afa81845280801561341757613419565bfe5b50509051979650505050505050565b600081848411156134b75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561347c578181015183820152602001613464565b50505050905090810190601f1680156134a95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6004810160006134cf8484613dc8565b90509250929050565b6010810160006134cf8484613e16565b6014810160006134cf8484613e59565b61350061457a565b600561350c83826134bf565b63ffffffff168352905061352083826134d8565b6001600160801b03166020840152600201905061353d83826134e8565b6001600160a01b03166040840152509092915050565b600061355f8385612703565b9050600061ffff85166135885783613580816001600160801b038616613e9c565b91505061369a565b6003546040516310603dad60e01b81526000916001600160a01b0316906310603dad906135b9908990600401615b26565b60206040518083038186803b1580156135d157600080fd5b505afa1580156135e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136099190614a08565b604051634770d3a760e11b81529091503090638ee1a74e90620186a09061363a9085908a908a9081906004016155aa565b602060405180830381600088803b15801561365457600080fd5b5087f193505050508015613685575060408051601f3d908101601f1916820190925261368291810190614fcb565b60015b6136925760009150613698565b50600191505b505b80156136e1578461ffff167ff4bf32c167ee6e782944cd1db8174729b46adcd3bc732e282cc4a80793933154846040516136d49190615b12565b60405180910390a26136eb565b6136eb8284613f08565b5050505050565b6136fa61457a565b600961350c83826134bf565b61370e61459a565b600161371a83826134bf565b63ffffffff168352905061372e83826134e8565b6001600160a01b03166020840152905061374883826134bf565b63ffffffff166040840152905061375f83826134d8565b6001600160801b03166060840152905061377983826134bf565b63ffffffff166080840152905061379083826134e8565b6001600160a01b031660a084015290506137aa83826134bf565b63ffffffff1660c084015290506137c18382613fa6565b60e08401529050606981146127df5760405162461bcd60e51b81526004016104ea90615996565b6003548151602083015160405163b79eb8c760e01b81526000936001600160a01b03169263b79eb8c79261381e92600401615b46565b60206040518083038186803b15801561383657600080fd5b505afa15801561384a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061386e9190614a08565b9050806001600160a01b0316637ebcb168620493e084602001518560800151866040015187606001518860a001516040518763ffffffff1660e01b81526004016138bc9594939291906154b4565b600060405180830381600088803b1580156138d657600080fd5b5087f1935050505080156138e8575060015b6139a85760a08201805163ffffffff90811660009081526012602090815260409182902086518154928801519388015163ffffffff1990931690851617600160201b600160c01b031916600160201b6001600160a01b03948516021763ffffffff60c01b1916600160c01b928516929092029190911781556060860151600182015560808601516002909101805494516001600160a01b0319909516919092161763ffffffff60a01b1916600160a01b9390921692909202179055613a0c565b60a08201805163ffffffff90811660009081526011602052604080822080546001600160a01b0319166001600160a01b0387161790559251925192909116917f0b9f3586023bf754b8d962232407f7ac4d90fd19a1c4756c6619927abf0675609190a25b5050565b613a1861451e565b6005613a2483826134bf565b63ffffffff1683529050613a3883826134e8565b6001600160a01b031660208401529050613a5283826134bf565b63ffffffff1660408401529050613a698382613fa6565b60608401529050613a7a83826134e8565b6001600160a01b031660808401529050613a9483826134bf565b63ffffffff1660a0840152509092915050565b80519181526020909101902090565b60006126fc838360405180604001604052806002815260200161616160f01b815250613fb6565b606081830184511015613b1b576040805162461bcd60e51b81526020600482015260016024820152602d60f91b604482015290519081900360640190fd5b6000826001600160401b0381118015613b3357600080fd5b506040519080825280601f01601f191660200182016040528015613b5e576020820181803683370190505b5090508215613b9157602081018381016020860187015b81831015613b8d578051835260209283019201613b75565b5050505b949350505050565b6001600160401b0381166000908152600f6020526040902054600160e01b900460ff16600181600b811115613bca57fe5b14613be75760405162461bcd60e51b81526004016104ea9061569b565b6001600160401b0382166000908152600f602052604090205460601b613c0d848261401b565b610da65760405162461bcd60e51b81526004016104ea906158a2565b613c31614553565b6001613c3d83826134bf565b63ffffffff1683529050613c51838261404b565b6001600160601b03191660208401529050613c6c83826134e8565b6001600160a01b031660408401529050613c8683826134bf565b63ffffffff166060840152509092915050565b60008083600081518110613ca957fe5b016020015160f81c6002811115613cbc57fe5b90506000816002811115613ccc57fe5b1415613ce457613cdc848461405b565b915050610e78565b6001816002811115613cf257fe5b1415613d0257613cdc84846140f3565b6002816002811115613d1057fe5b1415613d2057613cdc84846141cb565b60405162461bcd60e51b81526004016104ea90615614565b6001600160401b0381166000908152600f6020526040902054600160e01b900460ff16600681600b811115613d6957fe5b14613d865760405162461bcd60e51b81526004016104ea906158bd565b6001600160401b0382166000908152600f602052604090205460601b613dac8482614243565b610da65760405162461bcd60e51b81526004016104ea906158d8565b6000808260040190508084511015613e0b576040805162461bcd60e51b81526020600482015260016024820152602b60f91b604482015290519081900360640190fd5b929092015192915050565b6000808260100190508084511015613e0b576040805162461bcd60e51b81526020600482015260016024820152605760f81b604482015290519081900360640190fd5b6000808260140190508084511015613e0b576040805162461bcd60e51b81526020600482015260016024820152602960f91b604482015290519081900360640190fd5b600080836001600160a01b0316620186a084604051613eba9061063a565b600060405180830381858888f193505050503d8060008114613ef8576040519150601f19603f3d011682016040523d82523d6000602084013e613efd565b606091505b509095945050505050565b6001600160501b03198216600090815260046020526040908190205481518083019092526001600160801b03169080613f41838561425c565b6001600160801b03908116825260ff60209283018190526001600160501b031990961660009081526004835260409020835181549490930151909616600160801b0260ff60801b19929091166001600160801b03199093169290921716179092555050565b6020810160006134cf84846142a7565b6000836001600160801b0316836001600160801b0316111582906134b75760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561347c578181015183820152602001613464565b60006001600160601b0319821661403961403485612da9565b612748565b6001600160601b031916149392505050565b6014810160006134cf84846142ea565b60008061406b8460016041614332565b91505060008360200151846060015185600001516000801b60405160200161409694939291906152e3565b60405160208183030381529060405280519060200120905060006140ba838361434d565b905084604001516001600160a01b0316816001600160a01b03161480156140e957506001600160a01b03811615155b9695505050505050565b6000808080600161410487826134e8565b945090506141128782613fa6565b935090506141208782613fa6565b60208089015160405192955092935060009261413e92879201615149565b60408051601f198184030181529082905280516020918201209250600091614176916001600160f81b03199189918691899101615100565b6040516020818303038152906040528051906020012060001c905087604001516001600160a01b0316816001600160a01b03161480156141be5750606088015163ffffffff16155b9998505050505050505050565b6000806141db8460016041614332565b915050600061420c84602001516040516020016141f89190615134565b604051602081830303815290604052614415565b61422161421c86606001516144d6565b614415565b61423161421c87600001516144d6565b604051602001614096939291906151ca565b60006001600160601b03198216614039614034856122e8565b60008282016001600160801b0380851690821610156126fc576040805162461bcd60e51b8152602060048201526002602482015261189960f11b604482015290519081900360640190fd5b6000808260200190508084511015613e0b576040805162461bcd60e51b81526020600482015260016024820152605960f81b604482015290519081900360640190fd5b60008160140183511015614329576040805162461bcd60e51b81526020600482015260016024820152605360f81b604482015290519081900360640190fd5b50016020015190565b60006060614341858585613add565b93909201949293505050565b60008251604114614389576040805162461bcd60e51b81526020600482015260016024820152600560fc1b604482015290519081900360640190fd5b60008060006020860151925060408601519150606086015160001a905060018582858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015614400573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b6060600082516002026001600160401b038111801561443357600080fd5b506040519080825280601f01601f19166020018201604052801561445e576020820181803683370190505b5090506020830183518101602083015b818310156144cc57825160f81c6f6665646362613938373635343332313060088260041c021c60f81b82526f66656463626139383736353433323130600882600f16021c60f81b60018301525060018301925060028101905061446e565b5091949350505050565b604080516004808252818301909252606091610e789163ffffffff85169190849082602082018180368337505050602092830360080260ff169390931b918301919091525090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604080516060810182526000808252602082018190529181019190915290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b600082601f8301126145ee578081fd5b813560206146036145fe83615b9f565b615b7c565b82815281810190858301855b8581101561463857614626898684358b01016148df565b8452928401929084019060010161460f565b5090979650505050505050565b600082601f830112614655578081fd5b813560206146656145fe83615b9f565b82815281810190858301855b858110156146385781358801604080601f19838d03011215614691578889fd5b80518181016001600160401b0382821081831117156146ac57fe5b9083528389013590808211156146c0578b8cfd5b506146cf8d8a838701016148df565b8252506146dd8284016149c1565b81890152865250509284019290840190600101614671565b600082601f830112614705578081fd5b813560206147156145fe83615b9f565b8281528181019085830160c080860288018501891015614733578687fd5b865b86811015614759576147478a84614943565b85529385019391810191600101614735565b509198975050505050505050565b600082601f830112614777578081fd5b6040516102008082018281106001600160401b038211171561479557fe5b60405281848281018710156147a8578485fd5b8492505b60108310156147cc578035825260019290920191602091820191016147ac565b509195945050505050565b600082601f8301126147e7578081fd5b813560206147f76145fe83615b9f565b8281528181019085830183850287018401881015614813578586fd5b855b8581101561463857813584529284019290840190600101614815565b600082601f830112614841578081fd5b813560206148516145fe83615b9f565b828152818101908583018385028701840188101561486d578586fd5b855b8581101561463857813560ff81168114614887578788fd5b8452928401929084019060010161486f565b60008083601f8401126148aa578182fd5b5081356001600160401b038111156148c0578182fd5b6020830191508360208285010111156148d857600080fd5b9250929050565b600082601f8301126148ef578081fd5b81356001600160401b0381111561490257fe5b614915601f8201601f1916602001615b7c565b818152846020838601011115614929578283fd5b816020850160208301379081016020019190915292915050565b600060c08284031215614954578081fd5b60405160c081018181106001600160401b038211171561497057fe5b60405290508061497f836149c1565b815261498d602084016149d5565b602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b803563ffffffff811681146124cc57600080fd5b80356001600160401b03811681146124cc57600080fd5b6000602082840312156149fd578081fd5b81356126fc81615be8565b600060208284031215614a19578081fd5b81516126fc81615be8565b600080600060608486031215614a38578182fd5b8335614a4381615be8565b92506020840135614a5381615be8565b929592945050506040919091013590565b600080600060608486031215614a78578081fd5b8335614a8381615be8565b92506020840135614a9381615be8565b91506040840135614aa381615bfd565b809150509250925092565b60008060408385031215614ac0578182fd5b8235614acb81615be8565b91506020830135614adb81615be8565b809150509250929050565b60008060408385031215614af8578182fd5b8235614b0381615be8565b91506134cf602084016149c1565b60006020808385031215614b23578182fd5b82356001600160401b0380821115614b39578384fd5b818501915085601f830112614b4c578384fd5b8135614b5a6145fe82615b9f565b81815284810190848601875b84811015614be3578135870160e080601f19838f03011215614b86578a8bfd5b604080518181018181108b82111715614b9b57fe5b8252614ba98f858e01614943565b8152918301359189831115614bbc578c8dfd5b614bca8f8d858701016145de565b818d015287525050509287019290870190600101614b66565b50909998505050505050505050565b600060208284031215614c03578081fd5b81356001600160401b03811115614c18578182fd5b613b91848285016146f5565b60008060408385031215614c36578182fd5b82356001600160401b0380821115614c4c578384fd5b614c58868387016146f5565b93506020850135915080821115614c6d578283fd5b908401906102808287031215614c81578283fd5b614c8b60a0615b7c565b823582811115614c99578485fd5b614ca5888286016147d7565b825250602083013582811115614cb9578485fd5b614cc5888286016147d7565b602083015250604083013582811115614cdc578485fd5b614ce8888286016147d7565b604083015250606083013582811115614cff578485fd5b614d0b88828601614831565b606083015250614d1e8760808501614767565b60808201528093505050509250929050565b600060208284031215614d41578081fd5b815180151581146126fc578182fd5b600060208284031215614d61578081fd5b5051919050565b60008060208385031215614d7a578182fd5b82356001600160401b03811115614d8f578283fd5b614d9b85828601614899565b90969095509350505050565b600080600060408486031215614dbb578081fd5b83356001600160401b03811115614dd0578182fd5b614ddc86828701614899565b9094509250614def9050602085016149c1565b90509250925092565b60008060008060808587031215614e0d578182fd5b8435614e1881615be8565b93506020850135614e2881615be8565b92506040850135614e3881615bfd565b91506060850135614e4881615bfd565b939692955090935050565b600080600060608486031215614e67578081fd5b8335614e7281615be8565b925060208401356001600160681b0381168114614e8d578182fd5b91506040840135614aa381615be8565b60008060e08385031215614eaf578182fd5b614eb98484614943565b915060c08301356001600160401b0380821115614ed4578283fd5b818501915085601f830112614ee7578283fd5b81356020614ef76145fe83615b9f565b82815281810190858301875b85811015614fba578135880160c0818e03601f19011215614f2257898afd5b614f2c60c0615b7c565b868201358152604082013589811115614f43578b8cfd5b614f518f89838601016148df565b888301525060608201356040820152608082013589811115614f71578b8cfd5b614f7f8f8983860101614645565b606083015250614f9160a083016149c1565b6080820152614fa260c083016149c1565b60a08201528552509284019290840190600101614f03565b50979a909950975050505050505050565b600060208284031215614fdc578081fd5b81516126fc81615bfd565b600060208284031215614ff8578081fd5b815161ffff811681146126fc578182fd5b60006020828403121561501a578081fd5b6126fc826149c1565b60008060408385031215615035578182fd5b614acb836149c1565b60008060408385031215615050578182fd5b614b03836149c1565b6000806040838503121561506b578182fd5b615074836149d5565b915060208301356001600160401b0381111561508e578182fd5b61509a858286016145de565b9150509250929050565b60601b6001600160601b0319169052565b6000815180845260208085019450808401835b838110156150e4578151875295820195908201906001016150c8565b509495945050505050565b60e01b6001600160e01b0319169052565b6001600160f81b031994909416845260609290921b6001600160601b03191660018401526015830152603582015260550190565b6001600160601b031991909116815260140190565b9182526001600160601b031916602082015260340190565b918252602082015260400190565b6000828483379101908152919050565b60008251615191818460208701615bbc565b9190910192915050565b600083516151ad818460208801615bbc565b8351908301906151c1818360208801615bbc565b01949350505050565b7f19457468657265756d205369676e6564204d6573736167653a0a3135320000008152782932b3b4b9ba32b9103d35a9bcb73190383ab135b2bc9d050560391b601d8201528351600090615225816036850160208901615bbc565b600560f91b6036918401918201819052680dcdedcc6ca744060f60bb1b6037830152855161525a816040850160208a01615bbc565b60409201918201526d0c2c6c6deeadce840d2c8744060f60931b6041820152835161528c81604f840160208801615bbc565b61050560f11b604f92909101918201527f4f6e6c79207369676e2074686973206d65737361676520666f7220612074727560518201526b7374656420636c69656e742160a01b6071820152607d0195945050505050565b7b019457468657265756d205369676e6564204d6573736167653a0a36360241b81526001600160601b031994909416601c8501526001600160e01b031960e093841b811660308601529190921b166034830152603882015260580190565b60f89590951b6001600160f81b03191685526001600160e01b0319938416600186015260e09290921b909216600584015260809190911b6001600160801b031916600983015260601b6001600160601b0319166019820152602d0190565b6001600160f81b031960f88b901b1681526001600160e01b031960e08a811b821660018401526001600160601b031960608b901b16600584015288811b821660198401526001600160801b0319608089901b16601d84015286901b16602d820152600061540f60318301866150a4565b61541c60458301856150ef565b50604981019190915260690198975050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03861681526001600160401b03851660208201526000600c851061546f57fe5b84604083015260a0606083015283518060a08401526154958160c0850160208801615bbc565b608083019390935250601f91909101601f19160160c001949350505050565b6001600160a01b03958616815293909416602084015263ffffffff91821660408401526060830152909116608082015260a00190565b60006102808083526154fe818401896150b5565b905060208382038185015261551382896150b5565b84810360408601528751808252828901935090820190845b8181101561554a57845160ff168352938301939183019160010161552b565b5050848103606086015261555e81886150b5565b9350506080840191508460005b60108110156155885781518452928201929082019060010161556b565b505050509695505050505050565b901515815260200190565b90815260200190565b6001600160a01b0394851681529290931660208301526001600160801b039081166040830152909116606082015260800190565b6020808252600190820152604360f81b604082015260600190565b6020808252600190820152604160f81b604082015260600190565b6020808252600190820152604760f81b604082015260600190565b6020808252600190820152606360f81b604082015260600190565b6020808252600190820152606760f81b604082015260600190565b6020808252600190820152602160f91b604082015260600190565b6020808252600190820152600760fc1b604082015260600190565b6020808252600190820152600960fb1b604082015260600190565b602080825260029082015261413160f01b604082015260600190565b6020808252600190820152606160f81b604082015260600190565b6020808252600190820152607160f81b604082015260600190565b6020808252600190820152603960f91b604082015260600190565b6020808252600190820152603d60f91b604082015260600190565b6020808252600190820152604560f81b604082015260600190565b6020808252600190820152603760f91b604082015260600190565b6020808252600190820152603760f81b604082015260600190565b6020808252600190820152606f60f81b604082015260600190565b602080825260059082015264065786531360dc1b604082015260600190565b6020808252600190820152601b60fa1b604082015260600190565b6020808252600190820152601160fa1b604082015260600190565b6020808252600190820152600560fc1b604082015260600190565b6020808252600190820152602760f91b604082015260600190565b6020808252600190820152607960f81b604082015260600190565b6020808252600190820152601560fa1b604082015260600190565b6020808252600290820152616f3160f01b604082015260600190565b6020808252600190820152601360fa1b604082015260600190565b6020808252600190820152604960f81b604082015260600190565b6020808252600190820152602560f91b604082015260600190565b6020808252600190820152604b60f81b604082015260600190565b6020808252600190820152603b60f91b604082015260600190565b6020808252600190820152600d60fb1b604082015260600190565b6020808252600190820152606560f81b604082015260600190565b6020808252600190820152603560f91b604082015260600190565b6020808252600190820152603160f91b604082015260600190565b60208082526002908201526106f760f41b604082015260600190565b6020808252600190820152604f60f81b604082015260600190565b6020808252600190820152603560f81b604082015260600190565b6020808252600190820152603360f91b604082015260600190565b6020808252600190820152603960f81b604082015260600190565b6020808252600190820152606d60f81b604082015260600190565b6020808252600190820152601b60f91b604082015260600190565b6020808252600190820152600760fb1b604082015260600190565b6020808252600190820152602360f91b604082015260600190565b6020808252600190820152606960f81b604082015260600190565b6020808252600190820152601960fa1b604082015260600190565b6020808252600190820152606b60f81b604082015260600190565b600060c08201905063ffffffff83511682526001600160401b03602084015116602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b6001600160801b0391909116815260200190565b61ffff91909116815260200190565b63ffffffff91909116815260200190565b63ffffffff9290921682526001600160a01b0316602082015260400190565b63ffffffff92831681529116602082015260400190565b6040518181016001600160401b0381118282101715615b9757fe5b604052919050565b60006001600160401b03821115615bb257fe5b5060209081020190565b60005b83811015615bd7578181015183820152602001615bbf565b83811115610da65750506000910152565b6001600160a01b038116811461068257600080fd5b6001600160801b038116811461068257600080fdfec5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708e94fed44239eb2314ab7a406345e6c5a8f0ccedf3b600de3d004e672c33abf4a2646970667358221220e50aca121ca19563951b2d2e1040fc948457d58e6d29548995633e529810d4ce64736f6c63430007060033"
        },
        1470: function(e, t, f) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ZkSyncNFTFactoryFactory = void 0;
            const n = f(78);
            class d extends n.ContractFactory {
                constructor(e) {
                    super(r, c, e)
                }
                deploy(e, symbol, t, f) {
                    return super.deploy(e, symbol, t, f || {})
                }
                getDeployTransaction(e, symbol, t, f) {
                    return super.getDeployTransaction(e, symbol, t, f || {})
                }
                attach(address) {
                    return super.attach(address)
                }
                connect(e) {
                    return super.connect(e)
                }
                static connect(address, e) {
                    return new n.Contract(address, r, e)
                }
            }
            t.ZkSyncNFTFactoryFactory = d;
            const r = [{
                    inputs: [{
                        internalType: "string",
                        name: "name",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "symbol",
                        type: "string"
                    }, {
                        internalType: "address",
                        name: "zkSyncAddress",
                        type: "address"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "approved",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "ApprovalForAll",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "creator",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint32",
                        name: "creatorAccountId",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "uint32",
                        name: "serialId",
                        type: "uint32"
                    }, {
                        indexed: !1,
                        internalType: "bytes32",
                        name: "contentHash",
                        type: "bytes32"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "MintNFTFromZkSync",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "baseURI",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getApproved",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256"
                    }],
                    name: "getContentHash",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getCreatorAccountId",
                    outputs: [{
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getCreatorAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_tokenId",
                        type: "uint256"
                    }],
                    name: "getCreatorFingerprint",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "getSerialId",
                    outputs: [{
                        internalType: "uint32",
                        name: "",
                        type: "uint32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }],
                    name: "isApprovedForAll",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "creator",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint32",
                        name: "creatorAccountId",
                        type: "uint32"
                    }, {
                        internalType: "uint32",
                        name: "serialId",
                        type: "uint32"
                    }, {
                        internalType: "bytes32",
                        name: "contentHash",
                        type: "bytes32"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "mintNFTFromZkSync",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "ownerOf",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }, {
                        internalType: "bytes",
                        name: "_data",
                        type: "bytes"
                    }],
                    name: "safeTransferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "operator",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "approved",
                        type: "bool"
                    }],
                    name: "setApprovalForAll",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "bytes4",
                        name: "interfaceId",
                        type: "bytes4"
                    }],
                    name: "supportsInterface",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "tokenByIndex",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "tokenOfOwnerByIndex",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "tokenURI",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                c = "0x60806040523480156200001157600080fd5b50604051620021fd380380620021fd833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405260200151915083905082620001b86301ffc9a760e01b62000245565b8151620001cd906006906020850190620002ca565b508051620001e3906007906020840190620002ca565b50620001f66380ac58cd60e01b62000245565b62000208635b5e139f60e01b62000245565b6200021a63780e9d6360e01b62000245565b5050600c80546001600160a01b0319166001600160a01b039290921691909117905550620003769050565b6001600160e01b03198082161415620002a5576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200030257600085556200034d565b82601f106200031d57805160ff19168380011785556200034d565b828001600101855582156200034d579182015b828111156200034d57825182559160200191906001019062000330565b506200035b9291506200035f565b5090565b5b808211156200035b576000815560010162000360565b611e7780620003866000396000f3fe608060405234801561001057600080fd5b506004361061012d5760003560e01c80636352211e116100b35780636352211e146103a85780636c0360eb146103c557806370a08231146103cd57806395d89b41146103f3578063a1b8aa26146103fb578063a22cb46514610418578063a30b4db914610446578063b88d4fde14610463578063b90ea3ec14610527578063c87b56dd14610544578063e985e9c514610561578063ffbdc8cb1461058f5761012d565b806301ffc9a71461013257806306fdde031461016d578063081812fc146101ea578063095ea7b31461022357806318160ddd14610251578063234ce5901461026b57806323b872dd146102bd5780632f745c59146102f3578063328c3a4a1461031f57806342842e0e146103555780634f6ccce71461038b575b600080fd5b6101596004803603602081101561014857600080fd5b50356001600160e01b0319166105ac565b604080519115158252519081900360200190f35b6101756105cf565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101af578181015183820152602001610197565b50505050905090810190601f1680156101dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102076004803603602081101561020057600080fd5b5035610665565b604080516001600160a01b039092168252519081900360200190f35b61024f6004803603604081101561023957600080fd5b506001600160a01b0381351690602001356106c7565b005b6102596107a2565b60408051918252519081900360200190f35b61024f600480360360c081101561028157600080fd5b506001600160a01b03813581169160208101359091169063ffffffff604082013581169160608101359091169060808101359060a001356107b3565b61024f600480360360608110156102d357600080fd5b506001600160a01b038135811691602081013590911690604001356108ac565b6102596004803603604081101561030957600080fd5b506001600160a01b038135169060200135610903565b61033c6004803603602081101561033557600080fd5b503561092e565b6040805163ffffffff9092168252519081900360200190f35b61024f6004803603606081101561036b57600080fd5b506001600160a01b03813581169160208101359091169060400135610951565b610259600480360360208110156103a157600080fd5b503561096c565b610207600480360360208110156103be57600080fd5b5035610982565b6101756109aa565b610259600480360360208110156103e357600080fd5b50356001600160a01b0316610a0b565b610175610a73565b6102596004803603602081101561041157600080fd5b5035610ad4565b61024f6004803603604081101561042e57600080fd5b506001600160a01b0381351690602001351515610ae6565b6102076004803603602081101561045c57600080fd5b5035610be7565b61024f6004803603608081101561047957600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156104b357600080fd5b8201836020820111156104c557600080fd5b803590602001918460018302840111600160201b831117156104e657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c02945050505050565b61033c6004803603602081101561053d57600080fd5b5035610c60565b6101756004803603602081101561055a57600080fd5b5035610c7c565b6101596004803603604081101561057757600080fd5b506001600160a01b0381358116916020013516610efd565b610259600480360360208110156105a557600080fd5b5035610f2b565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561065b5780601f106106305761010080835404028352916020019161065b565b820191906000526020600020905b81548152906001019060200180831161063e57829003601f168201915b5050505050905090565b600061067082610f3d565b6106ab5760405162461bcd60e51b815260040180806020018281038252602c815260200180611d6c602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006106d282610982565b9050806001600160a01b0316836001600160a01b031614156107255760405162461bcd60e51b8152600401808060200182810382526021815260200180611df06021913960400191505060405180910390fd5b806001600160a01b0316610737610f4a565b6001600160a01b03161480610758575061075881610753610f4a565b610efd565b6107935760405162461bcd60e51b8152600401808060200182810382526038815260200180611cbf6038913960400191505060405180910390fd5b61079d8383610f4e565b505050565b60006107ae6002610fbc565b905090565b600c546001600160a01b03166107c7610f4a565b6001600160a01b031614610806576040805162461bcd60e51b81526020600482015260016024820152603d60f91b604482015290519081900360640190fd5b6108108582610fc7565b6000818152600a6020526040812083905561082c878686610fe5565b6000838152600b6020908152604091829020839055815163ffffffff808a1682528816918101919091528082018690526060810185905290519192506001600160a01b0380891692908a16917f6f9f9796c253c64d832328af44bc2ec5e2dad7f948ee013003be6a082532a14a919081900360800190a350505050505050565b6108bd6108b7610f4a565b82611014565b6108f85760405162461bcd60e51b8152600401808060200182810382526031815260200180611e116031913960400191505060405180910390fd5b61079d8383836110b8565b6001600160a01b03821660009081526001602052604081206109259083611204565b90505b92915050565b6000818152600b602052604081205461094a8160c060e0611210565b9392505050565b61079d83838360405180602001604052806000815250610c02565b60008061097a600284611278565b509392505050565b600061092882604051806060016040528060298152602001611d216029913960029190611294565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561065b5780601f106106305761010080835404028352916020019161065b565b60006001600160a01b038216610a525760405162461bcd60e51b815260040180806020018281038252602a815260200180611cf7602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061092890610fbc565b60078054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561065b5780601f106106305761010080835404028352916020019161065b565b6000908152600b602052604090205490565b610aee610f4a565b6001600160a01b0316826001600160a01b03161415610b50576040805162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015290519081900360640190fd5b8060056000610b5d610f4a565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610ba1610f4a565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6000818152600b602052604081205461094a818360a0611210565b610c13610c0d610f4a565b83611014565b610c4e5760405162461bcd60e51b8152600401808060200182810382526031815260200180611e116031913960400191505060405180910390fd5b610c5a848484846112a1565b50505050565b6000818152600b602052604081205461094a8160a060c0611210565b6060610c8782610f3d565b610cc25760405162461bcd60e51b815260040180806020018281038252602f815260200180611dc1602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015610d555780601f10610d2a57610100808354040283529160200191610d55565b820191906000526020600020905b815481529060010190602001808311610d3857829003601f168201915b505050505090506000610d666109aa565b9050805160001415610d7a575090506105ca565b815115610e3b5780826040516020018083805190602001908083835b60208310610db55780518252601f199092019160209182019101610d96565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610dfd5780518252601f199092019160209182019101610dde565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506105ca565b80610e45856112f3565b6040516020018083805190602001908083835b60208310610e775780518252601f199092019160209182019101610e58565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610ebf5780518252601f199092019160209182019101610ea0565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000908152600a602052604090205490565b60006109286002836113ce565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f8382610982565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610928826113da565b610fe18282604051806020016040528060008152506113de565b5050565b6001600160a01b03831663ffffffff60a01b60a084901b161763ffffffff60c01b60c083901b16179392505050565b600061101f82610f3d565b61105a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611c93602c913960400191505060405180910390fd5b600061106583610982565b9050806001600160a01b0316846001600160a01b031614806110a05750836001600160a01b031661109584610665565b6001600160a01b0316145b806110b057506110b08185610efd565b949350505050565b826001600160a01b03166110cb82610982565b6001600160a01b0316146111105760405162461bcd60e51b8152600401808060200182810382526029815260200180611d986029913960400191505060405180910390fd5b6001600160a01b0382166111555760405162461bcd60e51b8152600401808060200182810382526024815260200180611c6f6024913960400191505060405180910390fd5b611160838383611430565b61116b600082610f4e565b6001600160a01b038316600090815260016020526040902061118d908261145e565b506001600160a01b03821660009081526001602052604090206111b0908261146a565b506111bd60028284611476565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610925838361148c565b60008261ffff168261ffff1611611253576040805162461bcd60e51b8152602060048201526002602482015261717160f01b604482015290519081900360640190fd5b50600161ffff82811682901b60001990810191851692831b01188416901c9392505050565b600080808061128786866114f0565b9097909650945050505050565b60006110b084848461156b565b6112ac8484846110b8565b6112b884848484611635565b610c5a5760405162461bcd60e51b8152600401808060200182810382526032815260200180611c3d6032913960400191505060405180910390fd5b60608161131857506040805180820190915260018152600360fc1b60208201526105ca565b8160005b811561133057600101600a8204915061131c565b60008167ffffffffffffffff8111801561134957600080fd5b506040519080825280601f01601f191660200182016040528015611374576020820181803683370190505b50859350905060001982015b83156113c557600a840660300160f81b828280600190039350815181106113a357fe5b60200101906001600160f81b031916908160001a905350600a84049350611380565b50949350505050565b6000610925838361179d565b5490565b6113e883836117b5565b6113f56000848484611635565b61079d5760405162461bcd60e51b8152600401808060200182810382526032815260200180611c3d6032913960400191505060405180910390fd5b6001600160a01b03821661079d576000908152600a60209081526040808320839055600b9091528120555050565b600061092583836118e2565b600061092583836119a8565b60006110b084846001600160a01b0385166119f2565b815460009082106114ce5760405162461bcd60e51b8152600401808060200182810382526022815260200180611c1b6022913960400191505060405180910390fd5b8260000182815481106114dd57fe5b9060005260206000200154905092915050565b8154600090819083106115345760405162461bcd60e51b8152600401808060200182810382526022815260200180611d4a6022913960400191505060405180910390fd5b600084600001848154811061154557fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816116065760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115cb5781810151838201526020016115b3565b50505050905090810190601f1680156115f85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061161957fe5b9060005260206000209060020201600101549150509392505050565b6000611649846001600160a01b0316611a89565b611655575060016110b0565b6000611763630a85bd0160e11b61166a610f4a565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156116d15781810151838201526020016116b9565b50505050905090810190601f1680156116fe5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611c3d603291396001600160a01b0388169190611a8f565b9050600081806020019051602081101561177c57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6001600160a01b038216611810576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61181981610f3d565b1561186a576040805162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015290519081900360640190fd5b61187660008383611430565b6001600160a01b0382166000908152600160205260409020611898908261146a565b506118a560028284611476565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600183016020526040812054801561199e578354600019808301919081019060009087908390811061191557fe5b906000526020600020015490508087600001848154811061193257fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061196257fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610928565b6000915050610928565b60006119b4838361179d565b6119ea57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610928565b506000610928565b600082815260018401602052604081205480611a5757505060408051808201825283815260208082018481528654600181810189556000898152848120955160029093029095019182559151908201558654868452818801909252929091205561094a565b82856000016001830381548110611a6a57fe5b906000526020600020906002020160010181905550600091505061094a565b3b151590565b60606110b0848460008585611aa385611a89565b611af4576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611b325780518252601f199092019160209182019101611b13565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611b94576040519150601f19603f3d011682016040523d82523d6000602084013e611b99565b606091505b5091509150611ba9828286611bb4565b979650505050505050565b60608315611bc357508161094a565b825115611bd35782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156115cb5781810151838201526020016115b356fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220c5e4ba0f42e895a8ddb335b28a317016f7f0d500452c36216d8b8097203c444764736f6c63430007060033"
        },
        806: function(e, t, f) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.l1ChainId = void 0;
            t.l1ChainId = function(e) {
                if ("rinkeby-beta" === e) return 4;
                if ("goerli" === e || "goerli-beta" === e) return 5;
                if ("sepolia" === e) return 11155111;
                if ("mainnet" === e) return 1;
                if ("localhost" === e) return 9;
                throw new Error("Unsupported netwrok")
            }
        }
    }
]);