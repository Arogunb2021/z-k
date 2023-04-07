(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        1495: function(e, d, t) {
            "use strict";
            var r = this && this.__awaiter || function(e, d, t, r) {
                    return new(t || (t = Promise))((function(n, c) {
                        function o(e) {
                            try {
                                y(r.next(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function l(e) {
                            try {
                                y(r.throw(e))
                            } catch (e) {
                                c(e)
                            }
                        }

                        function y(e) {
                            var d;
                            e.done ? n(e.value) : (d = e.value, d instanceof t ? d : new t((function(e) {
                                e(d)
                            }))).then(o, l)
                        }
                        y((r = r.apply(e, d || [])).next())
                    }))
                },
                n = this && this.__generator || function(e, body) {
                    var d, t, r, g, n = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
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
                        return function(o) {
                            return function(c) {
                                if (d) throw new TypeError("Generator is already executing.");
                                for (; n;) try {
                                    if (d = 1, t && (r = 2 & c[0] ? t.return : c[0] ? t.throw || ((r = t.return) && r.call(t), 0) : t.next) && !(r = r.call(t, c[1])).done) return r;
                                    switch (t = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                        case 0:
                                        case 1:
                                            r = c;
                                            break;
                                        case 4:
                                            return n.label++, {
                                                value: c[1],
                                                done: !1
                                            };
                                        case 5:
                                            n.label++, t = c[1], c = [0];
                                            continue;
                                        case 7:
                                            c = n.ops.pop(), n.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = n.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                n = 0;
                                                continue
                                            }
                                            if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                                n.label = c[1];
                                                break
                                            }
                                            if (6 === c[0] && n.label < r[1]) {
                                                n.label = r[1], r = c;
                                                break
                                            }
                                            if (r && n.label < r[2]) {
                                                n.label = r[2], n.ops.push(c);
                                                break
                                            }
                                            r[2] && n.ops.pop(), n.trys.pop();
                                            continue
                                    }
                                    c = body.call(e, n)
                                } catch (e) {
                                    c = [6, e], t = 0
                                } finally {
                                    d = r = 0
                                }
                                if (5 & c[0]) throw c[1];
                                return {
                                    value: c[0] ? c[1] : void 0,
                                    done: !0
                                }
                            }([c, o])
                        }
                    }
                };
            Object.defineProperty(d, "__esModule", {
                value: !0
            });
            var c = t(1183),
                o = function() {
                    function e(e, address, d) {
                        this.abi = e, this.address = address, this.provider = d, this.coder = new c.Interface(this.abi)
                    }
                    return e.prototype.call = function(e, d) {
                        return r(this, void 0, void 0, (function() {
                            var t, r;
                            return n(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = this.coder.encodeFunctionData(e, d), [4, this.callEth(t)];
                                    case 1:
                                        return (r = n.sent()) && "0x" !== r ? [2, this.coder.decodeFunctionResult(e, r)] : [2, []]
                                }
                            }))
                        }))
                    }, e.prototype.multicall = function(e) {
                        return r(this, void 0, void 0, (function() {
                            var d, t, r, c, o, l, y, f, i;
                            return n(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        for (d = [], t = 0, r = e; t < r.length; t++) c = r[t], d.push(this.coder.encodeFunctionData(c.method, c.args));
                                        return o = this.coder.encodeFunctionData("multicall", [d]), [4, this.callEth(o)];
                                    case 1:
                                        if (!(l = n.sent()) || "0x" === l) return [2, []];
                                        for (y = this.coder.decodeFunctionResult("multicall", l), f = [], i = 0; i < y.results.length; i++) f.push(this.coder.decodeFunctionResult(e[i].method, y.results[i]));
                                        return [2, f]
                                }
                            }))
                        }))
                    }, e.prototype.fetchLogs = function(e, d, t) {
                        return void 0 === t && (t = "earliest"), r(this, void 0, void 0, (function() {
                            var r, c, o;
                            return n(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return r = this.coder.getEventTopic(e), c = [{
                                            fromBlock: t,
                                            toBlock: "latest",
                                            address: this.address,
                                            topics: [r, d]
                                        }], o = {
                                            method: "eth_getLogs",
                                            params: c
                                        }, [4, this.provider.request(o)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.callEth = function(data) {
                        return r(this, void 0, void 0, (function() {
                            var e, d;
                            return n(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = [{
                                            data: data,
                                            to: this.address
                                        }, "latest"], d = {
                                            method: "eth_call",
                                            params: e
                                        }, [4, this.provider.request(d)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e
                }();
            d.default = o
        },
        1498: function(e, d, t) {
            "use strict";
            Object.defineProperty(d, "__esModule", {
                value: !0
            }), d.default = [{
                inputs: [{
                    internalType: "contract IUNSRegistry",
                    name: "unsRegistry",
                    type: "address"
                }, {
                    internalType: "contract ICNSRegistry",
                    name: "cnsRegistry",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                inputs: [],
                name: "NAME",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "VERSION",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
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
                inputs: [{
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, {
                    internalType: "string",
                    name: "label",
                    type: "string"
                }],
                name: "childIdOf",
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
                name: "exists",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "string",
                    name: "key",
                    type: "string"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "get",
                outputs: [{
                    internalType: "string",
                    name: "value",
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
                    name: "keyHash",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "getByHash",
                outputs: [{
                    internalType: "string",
                    name: "key",
                    type: "string"
                }, {
                    internalType: "string",
                    name: "value",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "string[]",
                    name: "keys",
                    type: "string[]"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "getData",
                outputs: [{
                    internalType: "address",
                    name: "resolver",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "string[]",
                    name: "values",
                    type: "string[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256[]",
                    name: "keyHashes",
                    type: "uint256[]"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "getDataByHash",
                outputs: [{
                    internalType: "address",
                    name: "resolver",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "string[]",
                    name: "keys",
                    type: "string[]"
                }, {
                    internalType: "string[]",
                    name: "values",
                    type: "string[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256[]",
                    name: "keyHashes",
                    type: "uint256[]"
                }, {
                    internalType: "uint256[]",
                    name: "tokenIds",
                    type: "uint256[]"
                }],
                name: "getDataByHashForMany",
                outputs: [{
                    internalType: "address[]",
                    name: "resolvers",
                    type: "address[]"
                }, {
                    internalType: "address[]",
                    name: "owners",
                    type: "address[]"
                }, {
                    internalType: "string[][]",
                    name: "keys",
                    type: "string[][]"
                }, {
                    internalType: "string[][]",
                    name: "values",
                    type: "string[][]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "string[]",
                    name: "keys",
                    type: "string[]"
                }, {
                    internalType: "uint256[]",
                    name: "tokenIds",
                    type: "uint256[]"
                }],
                name: "getDataForMany",
                outputs: [{
                    internalType: "address[]",
                    name: "resolvers",
                    type: "address[]"
                }, {
                    internalType: "address[]",
                    name: "owners",
                    type: "address[]"
                }, {
                    internalType: "string[][]",
                    name: "values",
                    type: "string[][]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "string[]",
                    name: "keys",
                    type: "string[]"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "getMany",
                outputs: [{
                    internalType: "string[]",
                    name: "values",
                    type: "string[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256[]",
                    name: "keyHashes",
                    type: "uint256[]"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "getManyByHash",
                outputs: [{
                    internalType: "string[]",
                    name: "keys",
                    type: "string[]"
                }, {
                    internalType: "string[]",
                    name: "values",
                    type: "string[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "isApprovedForAll",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "isApprovedOrOwner",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes[]",
                    name: "data",
                    type: "bytes[]"
                }],
                name: "multicall",
                outputs: [{
                    internalType: "bytes[]",
                    name: "results",
                    type: "bytes[]"
                }],
                stateMutability: "nonpayable",
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
                    internalType: "uint256[]",
                    name: "tokenIds",
                    type: "uint256[]"
                }],
                name: "ownerOfForMany",
                outputs: [{
                    internalType: "address[]",
                    name: "owners",
                    type: "address[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "registryOf",
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
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "resolverOf",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
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
                inputs: [{
                    internalType: "address",
                    name: "addr",
                    type: "address"
                }],
                name: "reverseOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }]
        },
        1499: function(e) {
            e.exports = JSON.parse('{"version":"0.4.0","networks":{"1":{"contracts":{"UNSRegistry":{"address":"0x049aba7510f45BA5b64ea9E658E342F904DB358D","implementation":"0xa715562307AA8AEDCba976b3793b3337F371c14a","legacyAddresses":[],"deploymentBlock":"0xd62e9d","forwarder":"0x049aba7510f45BA5b64ea9E658E342F904DB358D"},"CNSRegistry":{"address":"0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe","legacyAddresses":[],"deploymentBlock":"0x8a958b","forwarder":"0x97B0E89fC1B7eD4A8B237D9d8Fcce9b234f25A37"},"MintingManager":{"address":"0x2a7084870bB724175a3C96Da8FaA55128fa3E19D","implementation":"0x8caAeaD19aab5f54C94BB9F4be32e200E54AC8D7","legacyAddresses":[],"deploymentBlock":"0xc2fee0","forwarder":"0xb970fbCF52cd8111c76c379D4f2FE12E7f8AE7fb"},"ProxyAdmin":{"address":"0xAA16DA78110D9A9742c760a1a064F28654Ab93de","legacyAddresses":[],"deploymentBlock":"0xc2fedc"},"SignatureController":{"address":"0x82EF94294C95aD0930055f31e53A34509227c5f7","legacyAddresses":[],"deploymentBlock":"0x8a95a6"},"MintingController":{"address":"0xb0EE56339C3253361730F50c08d3d7817ecD60Ca","legacyAddresses":[],"deploymentBlock":"0x8a95aa","deprecated":true},"WhitelistedMinter":{"address":"0xd3fF3377b0ceade1303dAF9Db04068ef8a650757","legacyAddresses":[],"deploymentBlock":"0xa76ad3","deprecated":true},"URIPrefixController":{"address":"0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91","legacyAddresses":[],"deploymentBlock":"0x8a95ae","deprecated":true},"DomainZoneController":{"address":"0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7","legacyAddresses":[],"deploymentBlock":"0x98ca20","deprecated":true},"Resolver":{"address":"0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842","legacyAddresses":["0xa1cac442be6673c49f8e74ffc7c4fd746f3cbd0d","0x878bc2f3f717766ab69c0a5f9a6144931e61aed3"],"deploymentBlock":"0x960844","forwarder":"0x486eb10E4F48C038513ECAf11585Ca2779768CF2"},"ProxyReader":{"address":"0x1BDc0fD4fbABeed3E611fd6195fCd5d41dcEF393","legacyAddresses":["0x58034A288D2E56B661c9056A0C27273E5460B63c","0xc3C2BAB5e3e52DBF311b2aAcEf2e40344f19494E","0xfEe4D4F0aDFF8D84c12170306507554bC7045878","0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5","0x7ea9Ee21077F84339eDa9C80048ec6db678642B1"],"deploymentBlock":"0xde71cd"},"TwitterValidationOperator":{"address":"0x2F659766E3D08561CA3408FbAba7C0749ab2c402","legacyAddresses":["0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855"],"deploymentBlock":"0xc300b5"},"FreeMinter":{"address":"0x1fC985cAc641ED5846b631f96F35d9b48Bc3b834","legacyAddresses":[],"deploymentBlock":"0xacc390","deprecated":true},"MintableERC721Predicate":{"address":"0x932532aA4c0174b8453839A6E44eE09Cc615F2b7","legacyAddresses":[],"deploymentBlock":"0xa3cf69"},"RootChainManager":{"address":"0xA0c68C638235ee32657e8f720a23ceC1bFc77C77","legacyAddresses":[],"deploymentBlock":"0xa3cf4d"}}},"4":{"contracts":{"UNSRegistry":{"address":"0x7fb83000B8eD59D3eAD22f0D584Df3a85fBC0086","implementation":"0xc479D7A65243f7Eb1641F06a6C04E5F06cb5c4F7","legacyAddresses":[],"deploymentBlock":"0x85e628","forwarder":"0x7fb83000B8eD59D3eAD22f0D584Df3a85fBC0086"},"CNSRegistry":{"address":"0xAad76bea7CFEc82927239415BB18D2e93518ecBB","legacyAddresses":[],"deploymentBlock":"0x7232bc","forwarder":"0xdf5CC97216785398D5C77348e68fc9461108f85d"},"MintingManager":{"address":"0xdAAf99A920D31F4f5720e4667b12b24e54A03070","implementation":"0x38Fa95a0AC0E59D6e2845eFADBc17aF0FF9c7089","legacyAddresses":[],"deploymentBlock":"0x85e629","forwarder":"0xfB13e29C4D31a48B4Cd61131Cf3b681416e11681"},"ProxyAdmin":{"address":"0xaf9815005A208d1460b6fC60B4f90B9f2185E88c","legacyAddresses":[],"deploymentBlock":"0x85e627"},"SignatureController":{"address":"0x66a5e3e2C27B4ce4F46BBd975270BE154748D164","legacyAddresses":[],"deploymentBlock":"0x7232be"},"MintingController":{"address":"0x51765307AeB3Df2E647014a2C501d5324212467c","legacyAddresses":[],"deploymentBlock":"0x7232bf","deprecated":true},"WhitelistedMinter":{"address":"0xbcB32f13f90978a9e059E8Cb40FaA9e6619d98e7","legacyAddresses":[],"deploymentBlock":"0x7232c6","deprecated":true},"URIPrefixController":{"address":"0xe1d2e4B9f0518CA5c803073C3dFa886470627237","legacyAddresses":[],"deploymentBlock":"0x7232c0","deprecated":true},"DomainZoneController":{"address":"0x6f8F96A566663C1d4fEe70edD37E9b62Fe39dE5D","legacyAddresses":[],"deploymentBlock":"0x7232c2","deprecated":true},"Resolver":{"address":"0x95AE1515367aa64C462c71e87157771165B1287A","legacyAddresses":[],"deploymentBlock":"0x7232cf","forwarder":"0xE172D8557d6F342b1b2976dE784F6Dff6ABC0a37"},"ProxyReader":{"address":"0xE6729D224D00b3dd4FC731C4Ee3274E35Da06578","legacyAddresses":["0x299974AeD8911bcbd2C61262605b89F591a53E83","0x9F19473F6a98a715176291c930558E1954fd3D1e","0x3A2e74CF832cbA3d77E72708d55370119E4323a6"],"deploymentBlock":"0x8dc79a"},"TwitterValidationOperator":{"address":"0x9ea4A63184ebE9CBA55CD1af473D98075Aa02b4C","legacyAddresses":["0x1CB337b3b208dc29a6AcE8d11Bb591b66c5Dd83d"],"deploymentBlock":"0x86935e"},"FreeMinter":{"address":"0x84214215904cDEbA9044ECf95F3eBF009185AAf4","legacyAddresses":[],"deploymentBlock":"0x740d93","deprecated":true}}},"5":{"contracts":{"UNSRegistry":{"address":"0x070e83FCed225184E67c86302493ffFCDB953f71","implementation":"0x4473e84898E3F58feEFb7529dfF9E83Ff26CCae9","legacyAddresses":[],"deploymentBlock":"0x5b57ea","forwarder":"0x070e83FCed225184E67c86302493ffFCDB953f71"},"CNSRegistry":{"address":"0x801452cFAC27e79a11c6b185986fdE09e8637589","legacyAddresses":[],"deploymentBlock":"0x5b57d7","forwarder":"0x00443017FFaa4C840Caf5Dc7d3CB59147f363080"},"MintingManager":{"address":"0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345","implementation":"0xFB11410f3067BB6Db61bC335f0de23bE87A1767e","legacyAddresses":[],"deploymentBlock":"0x5b57ec","forwarder":"0x7F9F48cF94C69ce91D4b442DA186F31118ac0185"},"ProxyAdmin":{"address":"0xf4906E210523F9dA79E33811A44EE000441F4E04","legacyAddresses":[],"deploymentBlock":"0x5b57e8"},"SignatureController":{"address":"0x5199dAE4B24B987ba18FcE1b64664D1B798d372B","legacyAddresses":[],"deploymentBlock":"0x5b57d8"},"MintingController":{"address":"0xCEC41677be322049cC885c0DAe2fE0D52CA195ca","legacyAddresses":[],"deploymentBlock":"0x5b57d9","deprecated":true},"WhitelistedMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"URIPrefixController":{"address":"0x29465e3d2daA588E62375977bCe9b3f51406a794","legacyAddresses":[],"deploymentBlock":"0x5b57da","deprecated":true},"DomainZoneController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"Resolver":{"address":"0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437","legacyAddresses":[],"deploymentBlock":"0x5b57dc","forwarder":"0xFCc1A95B7287Ae7a8B7cA813F12991dF5714d4C7"},"ProxyReader":{"address":"0xE3b961856C417d081a02cBa0161a051268F52677","legacyAddresses":["0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982","0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68"],"deploymentBlock":"0x65bdfe"},"TwitterValidationOperator":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"FreeMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"MintableERC721Predicate":{"address":"0x56E14C4C1748a818a5564D33cF774c59EB3eDF59","legacyAddresses":[],"deploymentBlock":"0x2fc240"},"RootChainManager":{"address":"0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74","legacyAddresses":[],"deploymentBlock":"0x2dc9b9"}}},"137":{"contracts":{"UNSRegistry":{"address":"0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f","legacyAddresses":[],"deploymentBlock":"0x019d6188","implementation":"0x5442953b0BFFf69FC945f5f1387cbFD2e2673447","forwarder":"0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f"},"CNSRegistry":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","forwarder":"0x0000000000000000000000000000000000000000"},"MintingManager":{"address":"0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26","legacyAddresses":[],"deploymentBlock":"0x01272f41","implementation":"0xBb45a6E10224Aa36EAcd812205F3763D353e9783","forwarder":"0xC37d3c4326ab0E1D2b9D8b916bBdf5715f780fcF"},"ProxyAdmin":{"address":"0xe1D668052D52388F52b90f4d1798DB2b04bC3b88","legacyAddresses":[],"deploymentBlock":"0x01272d15"},"SignatureController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"MintingController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"WhitelistedMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"URIPrefixController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"DomainZoneController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"Resolver":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","forwarder":"0x0000000000000000000000000000000000000000"},"ProxyReader":{"address":"0x3E67b8c702a1292d1CEb025494C84367fcb12b45","legacyAddresses":["0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680","0xA3f32c8cd786dc089Bd1fC175F2707223aeE5d00"],"deploymentBlock":"0x019d61a9"},"TwitterValidationOperator":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"FreeMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"MintableERC721Predicate":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"RootChainManager":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"}}},"1337":{"contracts":{"UNSRegistry":{"address":"0x58a175BEbc8ec21A94ea63Aa5a28743945940EE6","legacyAddresses":[],"deploymentBlock":"0x0d","implementation":"0xe0aFC4e9E03e4aa67257Df7A2Eca77454309789D","forwarder":"0x58a175BEbc8ec21A94ea63Aa5a28743945940EE6"},"CNSRegistry":{"address":"0xC58206842E4030a3B2CaBC78780Ae7635173C533","legacyAddresses":[],"deploymentBlock":"0x01","forwarder":"0xAc52F68f31577E44aE0C7E95A42dC9eb574B9383"},"MintingManager":{"address":"0x27935e7e85db3c4e7885eB828B9e889BA69a4e7f","legacyAddresses":[],"deploymentBlock":"0x0f","implementation":"0xa1A2114B0C4bDF9AEe05fdd80801e6267639FAd9","forwarder":"0xC20631145b77a58018E2b10f2282Dd048E12fC81"},"ProxyAdmin":{"address":"0xbE5dEAC45dd1ca4ee18Dc2D585D84D3d3CB82B0D","legacyAddresses":[],"deploymentBlock":"0x01"},"SignatureController":{"address":"0x7bB6Cd9be29fab783c0b494A06FED8b2E2596B7a","legacyAddresses":[],"deploymentBlock":"0x02"},"MintingController":{"address":"0x4a3C194eB88966178bfDD81744ddDafED611B830","legacyAddresses":[],"deploymentBlock":"0x03","deprecated":true},"WhitelistedMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"URIPrefixController":{"address":"0x4872CC1be60A9DB9c880A0A437Da7a6AF134F08f","legacyAddresses":[],"deploymentBlock":"0x04","deprecated":true},"DomainZoneController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"Resolver":{"address":"0xF8C26340C1eAeA6c7fF1760B25005e1306953572","legacyAddresses":[],"deploymentBlock":"0x08","forwarder":"0x11dD97b7Ca847DfB6504e61B7B9Eb30F55E554a0"},"ProxyReader":{"address":"0x4e44E79e0cEc05D9e62e952B2088c02A3C450aeC","legacyAddresses":[],"deploymentBlock":"0x14"},"TwitterValidationOperator":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"FreeMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"MintableERC721Predicate":{"address":"0x7c3c91245769c8B7450aD522792deC4bd4bf797f","legacyAddresses":[],"deploymentBlock":"0x1b"},"RootChainManager":{"address":"0x2f5e6eed50C839835BD2873d428E1683793Ad09D","legacyAddresses":[],"deploymentBlock":"0x1d"}}},"80001":{"contracts":{"UNSRegistry":{"address":"0x2a93C52E7B6E7054870758e15A1446E769EdfB93","legacyAddresses":[],"deploymentBlock":"0x0189f713","implementation":"0xAc1a1F2136BfDe3a353a95C0676Cd0d55f311ee3","forwarder":"0x2a93C52E7B6E7054870758e15A1446E769EdfB93"},"CNSRegistry":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","forwarder":"0x0000000000000000000000000000000000000000"},"MintingManager":{"address":"0x428189346bb3CC52f031A1092fd47C919AC30A9f","legacyAddresses":[],"deploymentBlock":"0x01213f4a","implementation":"0xCC17E698bA21bae4277579F22cA51135AaF00777","forwarder":"0xEf3a491A8750BEC2Dff5339CF6Df94436d432C4d"},"ProxyAdmin":{"address":"0x460d63117c7Ab1624b7474C45BF46eC6702f57ce","legacyAddresses":[],"deploymentBlock":"0x01213b22"},"SignatureController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"MintingController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"WhitelistedMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"URIPrefixController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"DomainZoneController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"Resolver":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","forwarder":"0x0000000000000000000000000000000000000000"},"ProxyReader":{"address":"0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B","legacyAddresses":["0xbd9e01F6513E7C05f71Bf21d419a3bDF1EA9104b","0x332A8191905fA8E6eeA7350B5799F225B8ed30a9"],"deploymentBlock":"0x0189f72d"},"TwitterValidationOperator":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"FreeMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0","deprecated":true},"MintableERC721Predicate":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"RootChainManager":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"}}}}}')
        },
        1500: function(e) {
            e.exports = JSON.parse('{"version":"2.1.1","information":{"description":"This file desribes all resolver keys with a defined meaning and related metadata used by Unstoppable Domains UNS Registry","documentation":"https://docs.unstoppabledomains.com/domain-registry-essentials/records-reference","contribution":"https://github.com/unstoppabledomains/uns/blob/main/resolver-keys.json"},"keys":{"crypto.BTC.address":{"deprecatedKeyName":"BTC","deprecated":false,"validationRegex":"^bc1[ac-hj-np-z02-9]{6,87}$|^[13][a-km-zA-HJ-NP-Z1-9]{25,39}$"},"crypto.ETH.address":{"deprecatedKeyName":"ETH","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.ZIL.address":{"deprecatedKeyName":"ZIL","deprecated":false,"validationRegex":"^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$"},"crypto.LTC.address":{"deprecatedKeyName":"LTC","deprecated":false,"validationRegex":"^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$|^ltc1[a-zA-HJ-NP-Z0-9]{25,39}$"},"crypto.ETC.address":{"deprecatedKeyName":"ETC","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.EQL.address":{"deprecatedKeyName":"EQL","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.LINK.address":{"deprecatedKeyName":"LINK","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.USDC.address":{"deprecatedKeyName":"USDC","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.BAT.address":{"deprecatedKeyName":"BAT","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.REP.address":{"deprecatedKeyName":"REP","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.ZRX.address":{"deprecatedKeyName":"ZRX","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.DAI.address":{"deprecatedKeyName":"DAI","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.BCH.address":{"deprecatedKeyName":"BCH","deprecated":false,"validationRegex":"^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$"},"crypto.XMR.address":{"deprecatedKeyName":"XMR","deprecated":false,"validationRegex":"^[48]{1}[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$"},"crypto.DASH.address":{"deprecatedKeyName":"DASH","deprecated":false,"validationRegex":"^X[1-9A-HJ-NP-Za-km-z]{33}$"},"crypto.NEO.address":{"deprecatedKeyName":"NEO","deprecated":false,"validationRegex":"^A[0-9a-zA-Z]{33}$"},"crypto.SWTH.address":{"deprecatedKeyName":"SWTH","deprecated":false,"validationRegex":"^A[0-9a-zA-Z]{33}$"},"crypto.DOGE.address":{"deprecatedKeyName":"DOGE","deprecated":false,"validationRegex":"^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$"},"crypto.XRP.address":{"deprecatedKeyName":"XRP","deprecated":false,"validationRegex":"^r[1-9a-km-zA-HJ-NP-Z]{24,34}$"},"crypto.ZEC.address":{"deprecatedKeyName":"ZEC","deprecated":false,"validationRegex":"^z([a-zA-Z0-9]){94}$|^zs1([a-zA-Z0-9]){75}$|^t([a-zA-Z0-9]){34}$"},"crypto.YEC.address":{"deprecatedKeyName":"YEC","deprecated":false,"validationRegex":"^y([a-zA-Z0-9]){94}$|^ys1([a-zA-Z0-9]){75}$|^s([a-zA-Z0-9]){34}$"},"crypto.ADA.address":{"deprecatedKeyName":"ADA","deprecated":false,"validationRegex":"^[1-9a-km-zA-HJ-NP-Z]{104}$|^A[1-9A-HJ-NP-Za-km-z]{58}$|^addr[0-9a-zA-Z]{99}$"},"crypto.EOS.address":{"deprecatedKeyName":"EOS","deprecated":false,"validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$"},"crypto.XLM.address":{"deprecatedKeyName":"XLM","deprecated":false,"validationRegex":"^G[A-Z2-7]{55}$"},"crypto.BNB.address":{"deprecatedKeyName":"BNB","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.BTG.address":{"deprecatedKeyName":"BTG","deprecated":false,"validationRegex":"^[GA][a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.NANO.address":{"deprecatedKeyName":"NANO","deprecated":false,"validationRegex":"^nano_[1-9a-z]{60}$"},"crypto.WAVES.address":{"deprecatedKeyName":"WAVES","deprecated":false,"validationRegex":"^3[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.KMD.address":{"deprecatedKeyName":"KMD","deprecated":false,"validationRegex":"^R[a-km-zA-Z1-9]{33}$"},"crypto.AE.address":{"deprecatedKeyName":"AE","deprecated":false,"validationRegex":"^ak_[a-km-zA-Z1-9]{48,52}$"},"crypto.RSK.address":{"deprecatedKeyName":"RSK","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.WAN.address":{"deprecatedKeyName":"WAN","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.STRAT.address":{"deprecatedKeyName":"STRAT","deprecated":false,"validationRegex":"^S[a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.UBQ.address":{"deprecatedKeyName":"UBQ","deprecated":false,"validationRegex":"^0x[a-km-zA-HJ-NP-Z0-9]{40}$"},"crypto.XTZ.address":{"deprecatedKeyName":"XTZ","deprecated":false,"validationRegex":"^(tz|KT)[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.IOTA.address":{"deprecatedKeyName":"IOTA","deprecated":false,"validationRegex":"^[A-Z0-9]{90}$|^iota1[a-z0-9]{59}$"},"crypto.VET.address":{"deprecatedKeyName":"VET","deprecated":false,"validationRegex":"^0x[a-km-zA-HJ-NP-Z0-9]{40}$"},"crypto.QTUM.address":{"deprecatedKeyName":"QTUM","deprecated":false,"validationRegex":"^Q[a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.ICX.address":{"deprecatedKeyName":"ICX","deprecated":false,"validationRegex":"^[a-km-zA-HJ-NP-Z0-9]{42}$"},"crypto.DGB.address":{"deprecatedKeyName":"DGB","deprecated":false,"validationRegex":"(^[a-km-zA-HJ-NP-Z1-9]{34}$)|(^[a-zA-Z1-9]{42}$)|(^dgb1[a-zA-Z0-9]{39}$)"},"crypto.XZC.address":{"deprecatedKeyName":"XZC","deprecated":false,"validationRegex":"^[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.BURST.address":{"deprecatedKeyName":"BURST","deprecated":false,"validationRegex":"^BURST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{5}"},"crypto.DCR.address":{"deprecatedKeyName":"DCR","deprecated":false,"validationRegex":null},"crypto.XEM.address":{"deprecatedKeyName":"XEM","deprecated":false,"validationRegex":"^N[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{39}$"},"crypto.LSK.address":{"deprecatedKeyName":"LSK","deprecated":false,"validationRegex":"^\\\\d{1,21}[L]$"},"crypto.ATOM.address":{"deprecatedKeyName":"ATOM","deprecated":false,"validationRegex":"^(cosmos)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$"},"crypto.ONG.address":{"deprecatedKeyName":"ONG","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ONT.address":{"deprecatedKeyName":"ONT","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.SMART.address":{"deprecatedKeyName":"SMART","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.TPAY.address":{"deprecatedKeyName":"TPAY","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.GRS.address":{"deprecatedKeyName":"GRS","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.BSV.address":{"deprecatedKeyName":"BSV","deprecated":false,"validationRegex":"^bitcoincash:[a-zA-Z0-9]{42}$"},"crypto.GAS.address":{"deprecatedKeyName":"GAS","deprecated":false,"validationRegex":null},"crypto.TRX.address":{"deprecatedKeyName":"TRX","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.VTHO.address":{"deprecatedKeyName":"VTHO","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{42}$"},"crypto.BCD.address":{"deprecatedKeyName":"BCD","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.BTT.address":{"deprecatedKeyName":"BTT","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.KIN.address":{"deprecatedKeyName":"KIN","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{56}$"},"crypto.RVN.address":{"deprecatedKeyName":"RVN","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ARK.address":{"deprecatedKeyName":"ARK","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.XVG.address":{"deprecatedKeyName":"XVG","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ALGO.address":{"deprecatedKeyName":"ALGO","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{58}$"},"crypto.NEBL.address":{"deprecatedKeyName":"NEBL","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.XPM.address":{"deprecatedKeyName":"XPM","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ONE.address":{"deprecatedKeyName":"ONE","deprecated":false,"validationRegex":"^one[a-zA-Z0-9]{39}$"},"crypto.BNTY.address":{"deprecatedKeyName":"BNTY","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.CRO.address":{"deprecatedKeyName":"CRO","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.TWT.address":{"deprecatedKeyName":"TWT","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.SIERRA.address":{"deprecatedKeyName":"SIERRA","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.VSYS.address":{"deprecatedKeyName":"VSYS","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{35}$"},"crypto.HIVE.address":{"deprecatedKeyName":"HIVE","validationRegex":"^(?!s*$).+","deprecated":false},"crypto.HT.address":{"deprecatedKeyName":"HT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ENJ.address":{"deprecatedKeyName":"ENJ","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.YFI.address":{"deprecatedKeyName":"YFI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MTA.address":{"deprecatedKeyName":"MTA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.COMP.address":{"deprecatedKeyName":"COMP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAL.address":{"deprecatedKeyName":"BAL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AMPL.address":{"deprecatedKeyName":"AMPL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LEND.address":{"deprecatedKeyName":"LEND","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TLOS.address":{"deprecatedKeyName":"TLOS","validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$","deprecated":false},"crypto.XDC.address":{"deprecatedKeyName":"XDC","validationRegex":"^xdc[a-fA-F0-9]{40}$","deprecated":false},"crypto.XST.address":{"deprecatedKeyName":"XST","validationRegex":"(?:RwxQ3jUs2BjKhseNX1em4msn2GyV5XAec[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XAe[defghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XA[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|RwxQ3jUs2BjKhseNX1em4msn2GyV5X[BCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|RwxQ3jUs2BjKhseNX1em4msn2GyV5[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|RwxQ3jUs2BjKhseNX1em4msn2GyV[6789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|RwxQ3jUs2BjKhseNX1em4msn2Gy[WXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|RwxQ3jUs2BjKhseNX1em4msn2G[z][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|RwxQ3jUs2BjKhseNX1em4msn2[HJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|RwxQ3jUs2BjKhseNX1em4msn[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|RwxQ3jUs2BjKhseNX1em4ms[opqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|RwxQ3jUs2BjKhseNX1em4m[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|RwxQ3jUs2BjKhseNX1em4[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|RwxQ3jUs2BjKhseNX1em[56789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|RwxQ3jUs2BjKhseNX1e[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|RwxQ3jUs2BjKhseNX1[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|RwxQ3jUs2BjKhseNX[23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|RwxQ3jUs2BjKhseN[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|RwxQ3jUs2BjKhse[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|RwxQ3jUs2BjKhs[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|RwxQ3jUs2BjKh[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|RwxQ3jUs2BjK[ijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|RwxQ3jUs2Bj[LMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|RwxQ3jUs2B[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|RwxQ3jUs2[CDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|RwxQ3jUs[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|RwxQ3jU[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|RwxQ3j[VWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|RwxQ3[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|RwxQ[456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|Rwx[RSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{30}|Rw[yz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|R[xyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|S[123456789ABCDEFGHJKL][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|SM[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ12[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnop][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|SMJ12q[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|SMJ12qn[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|SMJ12qn9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|SMJ12qn9j[123456789ABCDEFGHJKLM][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|SMJ12qn9jN[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|SMJ12qn9jNC[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|SMJ12qn9jNCC[123456789ABCDEFGHJKLMNPQRSTUVW][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|SMJ12qn9jNCCX[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|SMJ12qn9jNCCXJ[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|SMJ12qn9jNCCXJn[123456789ABCDEFGHJKLMNPQRS][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|SMJ12qn9jNCCXJnT[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|SMJ12qn9jNCCXJnTY[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|SMJ12qn9jNCCXJnTYR[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxy][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|SMJ12qn9jNCCXJnTYRz[1234][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|SMJ12qn9jNCCXJnTYRz5[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|SMJ12qn9jNCCXJnTYRz5Y[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrst][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|SMJ12qn9jNCCXJnTYRz5Yu[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|SMJ12qn9jNCCXJnTYRz5Yu9[123456789ABCDEFGHJKLMNPQRSTUVWXY][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|SMJ12qn9jNCCXJnTYRz5Yu9Z[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcd][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|SMJ12qn9jNCCXJnTYRz5Yu9Ze[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|SMJ12qn9jNCCXJnTYRz5Yu9Zen[123456789ABCD][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|SMJ12qn9jNCCXJnTYRz5Yu9ZenE[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|SMJ12qn9jNCCXJnTYRz5Yu9ZenER[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERn[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnk[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkk[123456789ABCDEFGHJKLMNPQRST][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkU[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstu][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkUv[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi])","deprecated":false},"crypto.STRAX.address":{"deprecatedKeyName":"STRAX","validationRegex":"^X[a-km-zA-HJ-NP-Z1-9]{33}$","deprecated":false},"crypto.SIGNA.address":{"deprecatedKeyName":"SIGNA","validationRegex":"^S-((?=[A-Z2-9]{4})(?:[^IO]{4})-){3}(?=[A-Z2-9]{5})(?:[^IO]{5})$","deprecated":false},"crypto.NIM.address":{"deprecatedKeyName":"NIM","validationRegex":"^NQ[0-9]{2} ([A-Z0-9]{4} ){7}[A-Z0-9]{4}$","deprecated":false},"crypto.GUAP.address":{"deprecatedKeyName":"GUAP","validationRegex":"^(G|P)[a-zA-HJ-NP-Z0-9]{25,39}$","deprecated":false},"crypto.ELA.version.ELA.address":{"deprecatedKeyName":"ELA_ELA","validationRegex":"E[a-zA-HJ-NP-Z0-9]{33}","deprecated":false},"crypto.ELA.version.ESC.address":{"deprecatedKeyName":"ELA_ESC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDT.version.ERC20.address":{"deprecatedKeyName":"USDT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDT.version.TRON.address":{"deprecatedKeyName":"USDT_TRON","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.USDT.version.EOS.address":{"deprecatedKeyName":"USDT_EOS","validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$","deprecated":false},"crypto.USDT.version.OMNI.address":{"deprecatedKeyName":"USDT_OMNI","validationRegex":"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$","deprecated":false},"crypto.FTM.version.ERC20.address":{"deprecatedKeyName":"FTM_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FTM.version.BEP2.address":{"deprecatedKeyName":"FTM_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.FTM.version.OPERA.address":{"deprecatedKeyName":"FTM_OPERA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUSE.version.ERC20.address":{"deprecatedKeyName":"FUSE_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUSE.version.FUSE.address":{"deprecatedKeyName":"FUSE_FUSE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MATIC.version.MATIC.address":{"deprecatedKeyName":"MATIC_MATIC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MATIC.version.BEP20.address":{"deprecatedKeyName":"MATIC_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MATIC.version.ERC20.address":{"deprecatedKeyName":"MATIC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"social.payid.name":{"deprecatedKeyName":"payid","validationRegex":"^[0-9a-zA-Z]+\\\\$[0-9a-zA-Z]+\\\\.[0-9a-zA-Z]+$","deprecated":false},"social.picture.value":{"deprecatedKeyName":"picture","validationRegex":null,"deprecated":false},"whois.email.value":{"deprecatedKeyName":"email","validationRegex":"^[^@]+@[^\\\\.]+\\\\..+$","deprecated":false},"whois.for_sale.value":{"deprecatedKeyName":"for_sale","validationRegex":"(true)|(false)","deprecated":false},"ipfs.html.value":{"deprecatedKeyName":"html","validationRegex":".{0,100}","deprecated":false},"ipfs.redirect_domain.value":{"deprecatedKeyName":"redirect_domain","validationRegex":".{0,253}","deprecated":false},"dweb.ipfs.hash":{"deprecatedKeyName":"dweb_hash","validationRegex":".{0,100}","deprecated":false},"browser.redirect_url":{"deprecatedKeyName":"browser_redirect","validationRegex":".{0,253}","deprecated":false},"browser.preferred_protocols":{"deprecatedKeyName":"browser_preferred_protocols","validationRegex":null,"deprecated":false},"gundb.username.value":{"deprecatedKeyName":"gundb_username","validationRegex":null,"deprecated":false},"gundb.public_key.value":{"deprecatedKeyName":"gundb_public_key","validationRegex":null,"deprecated":false},"social.image.value":{"deprecatedKeyName":"image","validationRegex":null,"deprecated":false},"social.twitter.username":{"deprecatedKeyName":"twitter_username","validationRegex":null,"deprecated":false},"validation.social.twitter.username":{"deprecatedKeyName":"validation_twitter_username","validationRegex":null,"deprecated":false},"forwarding.url":{"deprecatedKeyName":"forwarding_url","validationRegex":"^(https?)://[^\\\\s/$.?#].[^\\\\s]*$","deprecated":false},"dns.ttl":{"deprecatedKeyName":"dns_ttl","validationRegex":null,"deprecated":false},"dns.A":{"deprecatedKeyName":"dns_A","validationRegex":null,"deprecated":false},"dns.A.ttl":{"deprecatedKeyName":"dns_A_ttl","validationRegex":null,"deprecated":false},"dns.AAAA":{"deprecatedKeyName":"dns_AAAA","validationRegex":null,"deprecated":false},"dns.AAAA.ttl":{"deprecatedKeyName":"dns_AAAA_ttl","validationRegex":null,"deprecated":false},"dns.AFSDB":{"deprecatedKeyName":"dns_AFSDB","validationRegex":null,"deprecated":false},"dns.AFSDB.ttl":{"deprecatedKeyName":"dns_AFSDB_ttl","validationRegex":null,"deprecated":false},"dns.APL":{"deprecatedKeyName":"dns_APL","validationRegex":null,"deprecated":false},"dns.APL.ttl":{"deprecatedKeyName":"dns_APL_ttl","validationRegex":null,"deprecated":false},"dns.CAA":{"deprecatedKeyName":"dns_CAA","validationRegex":null,"deprecated":false},"dns.CAA.ttl":{"deprecatedKeyName":"dns_CAA_ttl","validationRegex":null,"deprecated":false},"dns.CDNSKEY":{"deprecatedKeyName":"dns_CDNSKEY","validationRegex":null,"deprecated":false},"dns.CDNSKEY.ttl":{"deprecatedKeyName":"dns_CDNSKEY_ttl","validationRegex":null,"deprecated":false},"dns.CDS":{"deprecatedKeyName":"dns_CDS","validationRegex":null,"deprecated":false},"dns.CDS.ttl":{"deprecatedKeyName":"dns_CDS_ttl","validationRegex":null,"deprecated":false},"dns.CERT":{"deprecatedKeyName":"dns_CERT","validationRegex":null,"deprecated":false},"dns.CERT.ttl":{"deprecatedKeyName":"dns_CERT_ttl","validationRegex":null,"deprecated":false},"dns.CNAME":{"deprecatedKeyName":"dns_CNAME","validationRegex":null,"deprecated":false},"dns.CNAME.ttl":{"deprecatedKeyName":"dns_CNAME_ttl","validationRegex":null,"deprecated":false},"dns.CSYNC":{"deprecatedKeyName":"dns_CSYNC","validationRegex":null,"deprecated":false},"dns.CSYNC.ttl":{"deprecatedKeyName":"dns_CSYNC_ttl","validationRegex":null,"deprecated":false},"dns.DHCID":{"deprecatedKeyName":"dns_DHCID","validationRegex":null,"deprecated":false},"dns.DHCID.ttl":{"deprecatedKeyName":"dns_DHCID_ttl","validationRegex":null,"deprecated":false},"dns.DLV":{"deprecatedKeyName":"dns_DLV","validationRegex":null,"deprecated":false},"dns.DLV.ttl":{"deprecatedKeyName":"dns_DLV_ttl","validationRegex":null,"deprecated":false},"dns.DNAME":{"deprecatedKeyName":"dns_DNAME","validationRegex":null,"deprecated":false},"dns.DNAME.ttl":{"deprecatedKeyName":"dns_DNAME_ttl","validationRegex":null,"deprecated":false},"dns.DNSKEY":{"deprecatedKeyName":"dns_DNSKEY","validationRegex":null,"deprecated":false},"dns.DNSKEY.ttl":{"deprecatedKeyName":"dns_DNSKEY_ttl","validationRegex":null,"deprecated":false},"dns.DS":{"deprecatedKeyName":"dns_DS","validationRegex":null,"deprecated":false},"dns.DS.ttl":{"deprecatedKeyName":"dns_DS_ttl","validationRegex":null,"deprecated":false},"dns.EUI48":{"deprecatedKeyName":"dns_EUI48","validationRegex":null,"deprecated":false},"dns.EUI48.ttl":{"deprecatedKeyName":"dns_EUI48_ttl","validationRegex":null,"deprecated":false},"dns.EUI64":{"deprecatedKeyName":"dns_EUI64","validationRegex":null,"deprecated":false},"dns.EUI64.ttl":{"deprecatedKeyName":"dns_EUI64_ttl","validationRegex":null,"deprecated":false},"dns.HINFO":{"deprecatedKeyName":"dns_HINFO","validationRegex":null,"deprecated":false},"dns.HINFO.ttl":{"deprecatedKeyName":"dns_HINFO_ttl","validationRegex":null,"deprecated":false},"dns.HIP":{"deprecatedKeyName":"dns_HIP","validationRegex":null,"deprecated":false},"dns.HIP.ttl":{"deprecatedKeyName":"dns_HIP_ttl","validationRegex":null,"deprecated":false},"dns.HTTPS":{"deprecatedKeyName":"dns_HTTPS","validationRegex":null,"deprecated":false},"dns.HTTPS.ttl":{"deprecatedKeyName":"dns_HTTPS_ttl","validationRegex":null,"deprecated":false},"dns.IPSECKEY":{"deprecatedKeyName":"dns_IPSECKEY","validationRegex":null,"deprecated":false},"dns.IPSECKEY.ttl":{"deprecatedKeyName":"dns_IPSECKEY_ttl","validationRegex":null,"deprecated":false},"dns.KEY":{"deprecatedKeyName":"dns_KEY","validationRegex":null,"deprecated":false},"dns.KEY.ttl":{"deprecatedKeyName":"dns_KEY_ttl","validationRegex":null,"deprecated":false},"dns.KX":{"deprecatedKeyName":"dns_KX","validationRegex":null,"deprecated":false},"dns.KX.ttl":{"deprecatedKeyName":"dns_KX_ttl","validationRegex":null,"deprecated":false},"dns.LOC":{"deprecatedKeyName":"dns_LOC","validationRegex":null,"deprecated":false},"dns.LOC.ttl":{"deprecatedKeyName":"dns_LOC_ttl","validationRegex":null,"deprecated":false},"dns.MX":{"deprecatedKeyName":"dns_MX","validationRegex":null,"deprecated":false},"dns.MX.ttl":{"deprecatedKeyName":"dns_MX_ttl","validationRegex":null,"deprecated":false},"dns.NAPTR":{"deprecatedKeyName":"dns_NAPTR","validationRegex":null,"deprecated":false},"dns.NAPTR.ttl":{"deprecatedKeyName":"dns_NAPTR_ttl","validationRegex":null,"deprecated":false},"dns.NS":{"deprecatedKeyName":"dns_NS","validationRegex":null,"deprecated":false},"dns.NS.ttl":{"deprecatedKeyName":"dns_NS_ttl","validationRegex":null,"deprecated":false},"dns.NSEC":{"deprecatedKeyName":"dns_NSEC","validationRegex":null,"deprecated":false},"dns.NSEC.ttl":{"deprecatedKeyName":"dns_NSEC_ttl","validationRegex":null,"deprecated":false},"dns.NSEC3":{"deprecatedKeyName":"dns_NSEC3","validationRegex":null,"deprecated":false},"dns.NSEC3.ttl":{"deprecatedKeyName":"dns_NSEC3_ttl","validationRegex":null,"deprecated":false},"dns.NSEC3PARAM":{"deprecatedKeyName":"dns_NSEC3PARAM","validationRegex":null,"deprecated":false},"dns.NSEC3PARAM.ttl":{"deprecatedKeyName":"dns_NSEC3PARAM_ttl","validationRegex":null,"deprecated":false},"dns.OPENPGPKEY":{"deprecatedKeyName":"dns_OPENPGPKEY","validationRegex":null,"deprecated":false},"dns.OPENPGPKEY.ttl":{"deprecatedKeyName":"dns_OPENPGPKEY_ttl","validationRegex":null,"deprecated":false},"dns.PTR":{"deprecatedKeyName":"dns_PTR","validationRegex":null,"deprecated":false},"dns.PTR.ttl":{"deprecatedKeyName":"dns_PTR_ttl","validationRegex":null,"deprecated":false},"dns.RP":{"deprecatedKeyName":"dns_RP","validationRegex":null,"deprecated":false},"dns.RP.ttl":{"deprecatedKeyName":"dns_RP_ttl","validationRegex":null,"deprecated":false},"dns.RRSIG":{"deprecatedKeyName":"dns_RRSIG","validationRegex":null,"deprecated":false},"dns.RRSIG.ttl":{"deprecatedKeyName":"dns_RRSIG_ttl","validationRegex":null,"deprecated":false},"dns.SIG":{"deprecatedKeyName":"dns_SIG","validationRegex":null,"deprecated":false},"dns.SIG.ttl":{"deprecatedKeyName":"dns_SIG_ttl","validationRegex":null,"deprecated":false},"dns.SMIMEA":{"deprecatedKeyName":"dns_SMIMEA","validationRegex":null,"deprecated":false},"dns.SMIMEA.ttl":{"deprecatedKeyName":"dns_SMIMEA_ttl","validationRegex":null,"deprecated":false},"dns.SOA":{"deprecatedKeyName":"dns_SOA","validationRegex":null,"deprecated":false},"dns.SOA.ttl":{"deprecatedKeyName":"dns_SOA_ttl","validationRegex":null,"deprecated":false},"dns.SRV":{"deprecatedKeyName":"dns_SRV","validationRegex":null,"deprecated":false},"dns.SRV.ttl":{"deprecatedKeyName":"dns_SRV_ttl","validationRegex":null,"deprecated":false},"dns.SSHFP":{"deprecatedKeyName":"dns_SSHFP","validationRegex":null,"deprecated":false},"dns.SSHFP.ttl":{"deprecatedKeyName":"dns_SSHFP_ttl","validationRegex":null,"deprecated":false},"dns.SVCB":{"deprecatedKeyName":"dns_SVCB","validationRegex":null,"deprecated":false},"dns.SVCB.ttl":{"deprecatedKeyName":"dns_SVCB_ttl","validationRegex":null,"deprecated":false},"dns.TA":{"deprecatedKeyName":"dns_TA","validationRegex":null,"deprecated":false},"dns.TA.ttl":{"deprecatedKeyName":"dns_TA_ttl","validationRegex":null,"deprecated":false},"dns.TKEY":{"deprecatedKeyName":"dns_TKEY","validationRegex":null,"deprecated":false},"dns.TKEY.ttl":{"deprecatedKeyName":"dns_TKEY_ttl","validationRegex":null,"deprecated":false},"dns.TLSA":{"deprecatedKeyName":"dns_TLSA","validationRegex":null,"deprecated":false},"dns.TLSA.ttl":{"deprecatedKeyName":"dns_TLSA_ttl","validationRegex":null,"deprecated":false},"dns.TSIG":{"deprecatedKeyName":"dns_TSIG","validationRegex":null,"deprecated":false},"dns.TSIG.ttl":{"deprecatedKeyName":"dns_TSIG_ttl","validationRegex":null,"deprecated":false},"dns.TXT":{"deprecatedKeyName":"dns_TXT","validationRegex":null,"deprecated":false},"dns.TXT.ttl":{"deprecatedKeyName":"dns_TXT_ttl","validationRegex":null,"deprecated":false},"dns.URI":{"deprecatedKeyName":"dns_URI","validationRegex":null,"deprecated":false},"dns.URI.ttl":{"deprecatedKeyName":"dns_URI_ttl","validationRegex":null,"deprecated":false},"dns.ZONEMD":{"deprecatedKeyName":"dns_ZONEMD","validationRegex":null,"deprecated":false},"dns.ZONEMD.ttl":{"deprecatedKeyName":"dns_ZONEMD_ttl","validationRegex":null,"deprecated":false},"crypto.DOT.address":{"deprecatedKeyName":"DOT","validationRegex":null,"deprecated":false},"crypto.UNI.version.ERC20.address":{"deprecatedKeyName":"UNI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.BEP20.address":{"deprecatedKeyName":"UNI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.MATIC.address":{"deprecatedKeyName":"UNI_MATIC","validationRegex":null,"deprecated":false},"crypto.UNI.version.HRC20.address":{"deprecatedKeyName":"UNI_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.XDAI.address":{"deprecatedKeyName":"UNI_XDAI","validationRegex":null,"deprecated":false},"crypto.SOL.address":{"deprecatedKeyName":"SOL","validationRegex":null,"deprecated":false},"crypto.BUSD.version.ERC20.address":{"deprecatedKeyName":"BUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BUSD.version.BEP20.address":{"deprecatedKeyName":"BUSD_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BUSD.version.HRC20.address":{"deprecatedKeyName":"BUSD_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ICP.address":{"deprecatedKeyName":"ICP","validationRegex":null,"deprecated":false},"crypto.THETA.address":{"deprecatedKeyName":"THETA","validationRegex":null,"deprecated":false},"crypto.WBTC.version.ERC20.address":{"deprecatedKeyName":"WBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WBTC.version.MATIC.address":{"deprecatedKeyName":"WBTC_MATIC","validationRegex":null,"deprecated":false},"crypto.WBTC.version.FANTOM.address":{"deprecatedKeyName":"WBTC_FANTOM","validationRegex":null,"deprecated":false},"crypto.WBTC.version.HRC20.address":{"deprecatedKeyName":"WBTC_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WBTC.version.XDAI.address":{"deprecatedKeyName":"WBTC_XDAI","validationRegex":null,"deprecated":false},"crypto.FIL.address":{"deprecatedKeyName":"FIL","validationRegex":null,"deprecated":false},"crypto.CDAI.address":{"deprecatedKeyName":"CDAI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KSM.address":{"deprecatedKeyName":"KSM","validationRegex":null,"deprecated":false},"crypto.OKB.address":{"deprecatedKeyName":"OKB","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AAVE.version.ERC20.address":{"deprecatedKeyName":"AAVE_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AAVE.version.MATIC.address":{"deprecatedKeyName":"AAVE_MATIC","validationRegex":null,"deprecated":false},"crypto.AAVE.version.FANTOM.address":{"deprecatedKeyName":"AAVE_FANTOM","validationRegex":null,"deprecated":false},"crypto.AAVE.version.HRC20.address":{"deprecatedKeyName":"AAVE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SHIB.version.ERC20.address":{"deprecatedKeyName":"SHIB_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SHIB.version.MATIC.address":{"deprecatedKeyName":"SHIB_MATIC","validationRegex":null,"deprecated":false},"crypto.SHIB.version.FANTOM.address":{"deprecatedKeyName":"SHIB_FANTOM","validationRegex":null,"deprecated":false},"crypto.CEL.version.ERC20.address":{"deprecatedKeyName":"CEL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CEL.version.MATIC.address":{"deprecatedKeyName":"CEL_MATIC","validationRegex":null,"deprecated":false},"crypto.CEL.version.FANTOM.address":{"deprecatedKeyName":"CEL_FANTOM","validationRegex":null,"deprecated":false},"crypto.CEL.version.HRC20.address":{"deprecatedKeyName":"CEL_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUSDC.address":{"deprecatedKeyName":"CUSDC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CETH.address":{"deprecatedKeyName":"CETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AMP.address":{"deprecatedKeyName":"AMP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CAKE.version.BEP20.address":{"deprecatedKeyName":"CAKE_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CAKE.version.HRC20.address":{"deprecatedKeyName":"CAKE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIOTA.address":{"deprecatedKeyName":"MIOTA","validationRegex":null,"deprecated":false},"crypto.FTT.address":{"deprecatedKeyName":"FTT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MKR.address":{"deprecatedKeyName":"MKR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TFUEL.address":{"deprecatedKeyName":"TFUEL","validationRegex":null,"deprecated":false},"crypto.KLAY.address":{"deprecatedKeyName":"KLAY","validationRegex":null,"deprecated":false},"crypto.LUNA.address":{"deprecatedKeyName":"LUNA","validationRegex":null,"deprecated":false},"crypto.AVAX.address":{"deprecatedKeyName":"AVAX","validationRegex":null,"deprecated":false},"crypto.LEO.address":{"deprecatedKeyName":"LEO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAFEMOON.version.BEP20.address":{"deprecatedKeyName":"SAFEMOON_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAFEMOON.version.HRC20.address":{"deprecatedKeyName":"SAFEMOON_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UST.address":{"deprecatedKeyName":"UST","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RUNE.address":{"deprecatedKeyName":"RUNE","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.HBAR.address":{"deprecatedKeyName":"HBAR","validationRegex":null,"deprecated":false},"crypto.TEL.version.ERC20.address":{"deprecatedKeyName":"TEL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TEL.version.MATIC.address":{"deprecatedKeyName":"TEL_MATIC","validationRegex":null,"deprecated":false},"crypto.CHZ.address":{"deprecatedKeyName":"CHZ","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.ERC20.address":{"deprecatedKeyName":"SUSHI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.BEP20.address":{"deprecatedKeyName":"SUSHI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.MATIC.address":{"deprecatedKeyName":"SUSHI_MATIC","validationRegex":null,"deprecated":false},"crypto.SUSHI.version.FANTOM.address":{"deprecatedKeyName":"SUSHI_FANTOM","validationRegex":null,"deprecated":false},"crypto.SUSHI.version.HRC20.address":{"deprecatedKeyName":"SUSHI_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.EGLD.address":{"deprecatedKeyName":"EGLD","validationRegex":null,"deprecated":false},"crypto.TUSD.version.ERC20.address":{"deprecatedKeyName":"TUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.BEP20.address":{"deprecatedKeyName":"TUSD_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.AVAX.address":{"deprecatedKeyName":"TUSD_AVAX","validationRegex":null,"deprecated":false},"crypto.TUSD.version.HRC20.address":{"deprecatedKeyName":"TUSD_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.BEP2.address":{"deprecatedKeyName":"TUSD_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.TUSD.version.TRON.address":{"deprecatedKeyName":"TUSD_TRON","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.HBTC.version.ERC20.address":{"deprecatedKeyName":"HBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HBTC.version.HRC20.address":{"deprecatedKeyName":"HBTC_HRC20","validationRegex":null,"deprecated":false},"crypto.SNX.version.ERC20.address":{"deprecatedKeyName":"SNX_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SNX.version.MATIC.address":{"deprecatedKeyName":"SNX_MATIC","validationRegex":null,"deprecated":false},"crypto.SNX.version.FANTOM.address":{"deprecatedKeyName":"SNX_FANTOM","validationRegex":null,"deprecated":false},"crypto.SNX.version.HRC20.address":{"deprecatedKeyName":"SNX_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HOT.version.ERC20.address":{"deprecatedKeyName":"HOT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HOT.version.HRC20.address":{"deprecatedKeyName":"HOT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEAR.address":{"deprecatedKeyName":"NEAR","validationRegex":null,"deprecated":false},"crypto.HNT.address":{"deprecatedKeyName":"HNT","validationRegex":null,"deprecated":false},"crypto.STETH.address":{"deprecatedKeyName":"STETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEXO.version.ERC20.address":{"deprecatedKeyName":"NEXO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEXO.version.FANTOM.address":{"deprecatedKeyName":"NEXO_FANTOM","validationRegex":null,"deprecated":false},"crypto.PAX.address":{"deprecatedKeyName":"PAX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STX.address":{"deprecatedKeyName":"STX","validationRegex":null,"deprecated":false},"crypto.MANA.version.ERC20.address":{"deprecatedKeyName":"MANA_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MANA.version.MATIC.address":{"deprecatedKeyName":"MANA_MATIC","validationRegex":null,"deprecated":false},"crypto.MDX.version.HRC20.address":{"deprecatedKeyName":"MDX_HRC20","validationRegex":null,"deprecated":false},"crypto.MDX.version.BEP20.address":{"deprecatedKeyName":"MDX_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ZEN.address":{"deprecatedKeyName":"ZEN","validationRegex":null,"deprecated":false},"crypto.ARRR.address":{"deprecatedKeyName":"ARRR","validationRegex":null,"deprecated":false},"crypto.BNT.address":{"deprecatedKeyName":"BNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LUSD.version.ERC20.address":{"deprecatedKeyName":"LUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LUSD.version.MATIC.address":{"deprecatedKeyName":"LUSD_MATIC","validationRegex":null,"deprecated":false},"crypto.GRT.version.ERC20.address":{"deprecatedKeyName":"GRT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GRT.version.MATIC.address":{"deprecatedKeyName":"GRT_MATIC","validationRegex":null,"deprecated":false},"crypto.GRT.version.HRC20.address":{"deprecatedKeyName":"GRT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SC.address":{"deprecatedKeyName":"SC","validationRegex":null,"deprecated":false},"crypto.HUSD.version.ERC20.address":{"deprecatedKeyName":"HUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HUSD.version.HRC20.address":{"deprecatedKeyName":"HUSD_HRC20","validationRegex":null,"deprecated":false},"crypto.CRV.version.ERC20.address":{"deprecatedKeyName":"CRV_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CRV.version.MATIC.address":{"deprecatedKeyName":"CRV_MATIC","validationRegex":null,"deprecated":false},"crypto.CRV.version.FANTOM.address":{"deprecatedKeyName":"CRV_FANTOM","validationRegex":null,"deprecated":false},"crypto.UMA.address":{"deprecatedKeyName":"UMA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WRX.version.BEP2.address":{"deprecatedKeyName":"WRX_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.WRX.version.MATIC.address":{"deprecatedKeyName":"WRX_MATIC","validationRegex":null,"deprecated":false},"crypto.AR.address":{"deprecatedKeyName":"AR","validationRegex":null,"deprecated":false},"crypto.OMG.address":{"deprecatedKeyName":"OMG","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GT.address":{"deprecatedKeyName":"GT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.QNT.address":{"deprecatedKeyName":"QNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CHSB.address":{"deprecatedKeyName":"CHSB","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IOST.address":{"deprecatedKeyName":"IOST","validationRegex":null,"deprecated":false},"crypto.NXM.address":{"deprecatedKeyName":"NXM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KCS.address":{"deprecatedKeyName":"KCS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LPT.version.ERC20.address":{"deprecatedKeyName":"LPT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LPT.version.HRC20.address":{"deprecatedKeyName":"LPT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XSUSHI.address":{"deprecatedKeyName":"XSUSHI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUSDT.address":{"deprecatedKeyName":"CUSDT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FLOW.address":{"deprecatedKeyName":"FLOW","validationRegex":null,"deprecated":false},"crypto.ANKR.address":{"deprecatedKeyName":"ANKR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HBC.address":{"deprecatedKeyName":"HBC","validationRegex":null,"deprecated":false},"crypto.VGX.address":{"deprecatedKeyName":"VGX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEI.address":{"deprecatedKeyName":"FEI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAKE.version.BEP20.address":{"deprecatedKeyName":"BAKE_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAKE.version.HRC20.address":{"deprecatedKeyName":"BAKE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.ERC20.address":{"deprecatedKeyName":"1INCH_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.BEP20.address":{"deprecatedKeyName":"1INCH_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.MATIC.address":{"deprecatedKeyName":"1INCH_MATIC","validationRegex":null,"deprecated":false},"crypto.1INCH.version.HRC20.address":{"deprecatedKeyName":"1INCH_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CKB.address":{"deprecatedKeyName":"CKB","validationRegex":null,"deprecated":false},"crypto.WOO.version.ERC20.address":{"deprecatedKeyName":"WOO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WOO.version.HRC20.address":{"deprecatedKeyName":"WOO_HRC20","validationRegex":null,"deprecated":false},"crypto.TITAN.address":{"deprecatedKeyName":"TITAN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OMI.address":{"deprecatedKeyName":"OMI","validationRegex":null,"deprecated":false},"crypto.MINA.address":{"deprecatedKeyName":"MINA","validationRegex":null,"deprecated":false},"crypto.SETH.address":{"deprecatedKeyName":"SETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RSR.address":{"deprecatedKeyName":"RSR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OXY.version.SOLANA.address":{"deprecatedKeyName":"OXY_SOLANA","validationRegex":null,"deprecated":false},"crypto.OXY.version.ERC20.address":{"deprecatedKeyName":"OXY_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REN.version.ERC20.address":{"deprecatedKeyName":"REN_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REN.version.HRC20.address":{"deprecatedKeyName":"REN_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XCH.address":{"deprecatedKeyName":"XCH","validationRegex":null,"deprecated":false},"crypto.RENBTC.version.ERC20.address":{"deprecatedKeyName":"RENBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RENBTC.version.BEP20.address":{"deprecatedKeyName":"RENBTC_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RENBTC.version.HRC20.address":{"deprecatedKeyName":"RENBTC_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDN.address":{"deprecatedKeyName":"USDN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BCHA.address":{"deprecatedKeyName":"BCHA","validationRegex":null,"deprecated":false},"crypto.LRC.address":{"deprecatedKeyName":"LRC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PUNDIX.address":{"deprecatedKeyName":"PUNDIX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ERG.address":{"deprecatedKeyName":"ERG","validationRegex":null,"deprecated":false},"crypto.WIN.address":{"deprecatedKeyName":"WIN","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.NPXS.address":{"deprecatedKeyName":"NPXS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TRIBE.address":{"deprecatedKeyName":"TRIBE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MAID.address":{"deprecatedKeyName":"MAID","validationRegex":"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$","deprecated":false},"crypto.ASD.address":{"deprecatedKeyName":"ASD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUNI.address":{"deprecatedKeyName":"CUNI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CELO.address":{"deprecatedKeyName":"CELO","validationRegex":null,"deprecated":false},"crypto.DENT.address":{"deprecatedKeyName":"DENT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SNT.address":{"deprecatedKeyName":"SNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEG.version.ERC20.address":{"deprecatedKeyName":"FEG_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEG.version.HRC20.address":{"deprecatedKeyName":"FEG_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SKL.address":{"deprecatedKeyName":"SKL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALUSD.address":{"deprecatedKeyName":"ALUSD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIR.version.ERC20.address":{"deprecatedKeyName":"MIR_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIR.version.BEP20.address":{"deprecatedKeyName":"MIR_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GLM.address":{"deprecatedKeyName":"GLM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PAXG.version.ERC20.address":{"deprecatedKeyName":"PAXG_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PAXG.version.HRC20.address":{"deprecatedKeyName":"PAXG_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CFX.address":{"deprecatedKeyName":"CFX","validationRegex":null,"deprecated":false},"crypto.UOS.address":{"deprecatedKeyName":"UOS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SVCS.address":{"deprecatedKeyName":"SVCS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.ERC20.address":{"deprecatedKeyName":"REEF_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.BEP20.address":{"deprecatedKeyName":"REEF_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.HRC20.address":{"deprecatedKeyName":"REEF_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GNO.address":{"deprecatedKeyName":"GNO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDP.address":{"deprecatedKeyName":"USDP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KAVA.address":{"deprecatedKeyName":"KAVA","validationRegex":null,"deprecated":false},"crypto.ALCX.address":{"deprecatedKeyName":"ALCX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.EWT.address":{"deprecatedKeyName":"EWT","validationRegex":null,"deprecated":false},"crypto.TON.address":{"deprecatedKeyName":"TON","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RLC.address":{"deprecatedKeyName":"RLC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AXS.address":{"deprecatedKeyName":"AXS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AUDIO.address":{"deprecatedKeyName":"AUDIO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XVS.address":{"deprecatedKeyName":"XVS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAND.version.ERC20.address":{"deprecatedKeyName":"BAND_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAND.version.FANTOM.address":{"deprecatedKeyName":"BAND_FANTOM","validationRegex":null,"deprecated":false},"crypto.NMR.address":{"deprecatedKeyName":"NMR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.INJ.version.ERC20.address":{"deprecatedKeyName":"INJ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.INJ.version.BEP20.address":{"deprecatedKeyName":"INJ_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WAXP.address":{"deprecatedKeyName":"WAXP","validationRegex":null,"deprecated":false},"crypto.UQC.address":{"deprecatedKeyName":"UQC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IOTX.address":{"deprecatedKeyName":"IOTX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUN.address":{"deprecatedKeyName":"FUN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OCEAN.address":{"deprecatedKeyName":"OCEAN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAND.version.ERC20.address":{"deprecatedKeyName":"SAND_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAND.version.HRC20.address":{"deprecatedKeyName":"SAND_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.ERC20.address":{"deprecatedKeyName":"CTSI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.BEP20.address":{"deprecatedKeyName":"CTSI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.MATIC.address":{"deprecatedKeyName":"CTSI_MATIC","validationRegex":null,"deprecated":false},"crypto.RAY.address":{"deprecatedKeyName":"RAY","validationRegex":null,"deprecated":false},"crypto.ANC.version.TERRA.address":{"deprecatedKeyName":"ANC_TERRA","validationRegex":null,"deprecated":false},"crypto.ANC.version.ERC20.address":{"deprecatedKeyName":"ANC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.ERC20.address":{"deprecatedKeyName":"IQ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.BEP20.address":{"deprecatedKeyName":"IQ_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.MATIC.address":{"deprecatedKeyName":"IQ_MATIC","validationRegex":null,"deprecated":false},"crypto.SUSD.version.ERC20.address":{"deprecatedKeyName":"SUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSD.version.FANTOM.address":{"deprecatedKeyName":"SUSD_FANTOM","validationRegex":null,"deprecated":false},"crypto.KLV.address":{"deprecatedKeyName":"KLV","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.BTCST.address":{"deprecatedKeyName":"BTCST","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TLM.address":{"deprecatedKeyName":"TLM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AKT.address":{"deprecatedKeyName":"AKT","validationRegex":null,"deprecated":false},"crypto.STMX.address":{"deprecatedKeyName":"STMX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PROM.address":{"deprecatedKeyName":"PROM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XPRT.address":{"deprecatedKeyName":"XPRT","validationRegex":null,"deprecated":false},"crypto.SRM.version.ERC20.address":{"deprecatedKeyName":"SRM_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SRM.version.SOLANA.address":{"deprecatedKeyName":"SRM_SOLANA","validationRegex":null,"deprecated":false},"crypto.RPL.address":{"deprecatedKeyName":"RPL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AGIX.address":{"deprecatedKeyName":"AGIX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CELR.address":{"deprecatedKeyName":"CELR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FET.address":{"deprecatedKeyName":"FET","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OXT.address":{"deprecatedKeyName":"OXT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ARDR.address":{"deprecatedKeyName":"ARDR","validationRegex":null,"deprecated":false},"crypto.MATH.address":{"deprecatedKeyName":"MATH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.10SET.address":{"deprecatedKeyName":"10SET","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.POLY.address":{"deprecatedKeyName":"POLY","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GUSD.address":{"deprecatedKeyName":"GUSD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NKN.address":{"deprecatedKeyName":"NKN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CVC.address":{"deprecatedKeyName":"CVC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GTC.address":{"deprecatedKeyName":"GTC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STEEM.address":{"deprecatedKeyName":"STEEM","validationRegex":null,"deprecated":false},"crypto.ORN.address":{"deprecatedKeyName":"ORN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KEEP.version.ERC20.address":{"deprecatedKeyName":"KEEP_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KEEP.version.HRC20.address":{"deprecatedKeyName":"KEEP_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HXRO.address":{"deprecatedKeyName":"HXRO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ORBS.address":{"deprecatedKeyName":"ORBS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALPHA.version.ERC20.address":{"deprecatedKeyName":"ALPHA_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALPHA.version.BEP20.address":{"deprecatedKeyName":"ALPHA_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DODO.version.ERC20.address":{"deprecatedKeyName":"DODO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DODO.version.BEP20.address":{"deprecatedKeyName":"DODO_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OGN.address":{"deprecatedKeyName":"OGN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KNCL.version.ERC20.address":{"deprecatedKeyName":"KNCL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KNCL.version.FANTOM.address":{"deprecatedKeyName":"KNCL_FANTOM","validationRegex":null,"deprecated":false},"crypto.KNCL.version.HRC20.address":{"deprecatedKeyName":"KNCL_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MED.address":{"deprecatedKeyName":"MED","validationRegex":null,"deprecated":false},"crypto.XAUT.address":{"deprecatedKeyName":"XAUT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.VLX.address":{"deprecatedKeyName":"VLX","validationRegex":null,"deprecated":false},"crypto.PHA.address":{"deprecatedKeyName":"PHA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KOBE.address":{"deprecatedKeyName":"KOBE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PERP.address":{"deprecatedKeyName":"PERP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XHV.address":{"deprecatedKeyName":"XHV","validationRegex":null,"deprecated":false},"crypto.META.address":{"deprecatedKeyName":"META","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SEUR.address":{"deprecatedKeyName":"SEUR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MONA.address":{"deprecatedKeyName":"MONA","validationRegex":null,"deprecated":false},"crypto.ANT.address":{"deprecatedKeyName":"ANT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HYDRA.address":{"deprecatedKeyName":"HYDRA","validationRegex":null,"deprecated":false},"crypto.ZKS.address":{"deprecatedKeyName":"ZKS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.ERC20.address":{"deprecatedKeyName":"SXP_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.BEP20.address":{"deprecatedKeyName":"SXP_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.HRC20.address":{"deprecatedKeyName":"SXP_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CSPR.address":{"deprecatedKeyName":"CSPR","validationRegex":null,"deprecated":false},"crypto.MTL.address":{"deprecatedKeyName":"MTL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NU.address":{"deprecatedKeyName":"NU","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ZMT.address":{"deprecatedKeyName":"ZMT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LOC.address":{"deprecatedKeyName":"LOC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TKO.address":{"deprecatedKeyName":"TKO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ETN.address":{"deprecatedKeyName":"ETN","validationRegex":null,"deprecated":false},"crypto.UBT.version.ERC20.address":{"deprecatedKeyName":"UBT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UBT.version.MATIC.address":{"deprecatedKeyName":"UBT_MATIC","validationRegex":null,"deprecated":false},"crypto.EXRD.address":{"deprecatedKeyName":"EXRD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NMX.address":{"deprecatedKeyName":"NMX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RIF.address":{"deprecatedKeyName":"RIF","validationRegex":null,"deprecated":false},"crypto.STORJ.version.ERC20.address":{"deprecatedKeyName":"STORJ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STORJ.version.HRC20.address":{"deprecatedKeyName":"STORJ_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AVA.address":{"deprecatedKeyName":"AVA","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.DPI.version.ERC20.address":{"deprecatedKeyName":"DPI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DPI.version.MATIC.address":{"deprecatedKeyName":"DPI_MATIC","validationRegex":null,"deprecated":false}}}')
        },
        208: function(e, d, t) {
            "use strict";
            var r, n, c, o = this && this.__extends || (r = function(e, b) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, b) {
                    e.__proto__ = b
                } || function(e, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }, r(e, b)
            }, function(e, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                function d() {
                    this.constructor = e
                }
                r(e, b), e.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d)
            });
            Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d.ResolutionError = d.ResolutionErrorCode = void 0,
                function(e) {
                    e.UnregisteredDomain = "UnregisteredDomain", e.UnspecifiedResolver = "UnspecifiedResolver", e.UnsupportedDomain = "UnsupportedDomain", e.UnsupportedService = "UnsupportedService", e.UnsupportedMethod = "UnsupportedMethod", e.UnspecifiedCurrency = "UnspecifiedCurrency", e.UnsupportedCurrency = "UnsupportedCurrency", e.IncorrectResolverInterface = "IncorrectResolverInterface", e.RecordNotFound = "RecordNotFound", e.MetadataEndpointError = "MetadataEndpointError", e.ServiceProviderError = "ServiceProviderError", e.InvalidTwitterVerification = "InvalidTwitterVerification", e.InconsistentDomainArray = "InconsistentDomainArray", e.InvalidDomainAddress = "InvalidDomainAddress"
                }(c = d.ResolutionErrorCode || (d.ResolutionErrorCode = {}));
            var l = ((n = {})[c.UnregisteredDomain] = function(e) {
                    return "Domain ".concat(e.domain, " is not registered")
                }, n[c.UnspecifiedResolver] = function(e) {
                    return "".concat(e.location ? "".concat(e.location, ": ") : "", "Domain ").concat(e.domain, " is not configured")
                }, n[c.UnsupportedDomain] = function(e) {
                    return "Domain ".concat(e.domain, " is not supported")
                }, n[c.UnsupportedMethod] = function(e) {
                    var d, t = (null === (d = e.domain) || void 0 === d ? void 0 : d.endsWith(".zil")) ? " (if this method was called via the Resolution class with both UNS and ZNS providers configured not in the API mode, this error also means that the domain doesn't exist in UNS)" : "";
                    return "Method ".concat(e.methodName, " is not supported for ").concat(e.domain).concat(t)
                }, n[c.InvalidTwitterVerification] = function(e) {
                    return "".concat(e.location ? "".concat(e.location, ": ") : "", "Domain ").concat(e.domain, " has invalid Twitter signature verification")
                }, n[c.UnsupportedCurrency] = function(e) {
                    return "".concat(e.currencyTicker, " is not supported")
                }, n[c.IncorrectResolverInterface] = function(e) {
                    return "Domain resolver is configured incorrectly for ".concat(e.method)
                }, n[c.RecordNotFound] = function(e) {
                    return "".concat(e.location ? "".concat(e.location, ": ") : "", "No ").concat(e.recordName, " record found for ").concat(e.domain)
                }, n[c.ServiceProviderError] = function(e) {
                    return "< ".concat(e.providerMessage, " >")
                }, n[c.MetadataEndpointError] = function(e) {
                    return "Failed to query tokenUri ".concat(e.tokenUri, ". Error: ").concat(e.errorMessage)
                }, n[c.UnsupportedService] = function(e) {
                    return "Naming service ".concat(e.namingService, " is not supported")
                }, n[c.InvalidDomainAddress] = function(e) {
                    return "Domain address ".concat(e.domain, " is invalid")
                }, n),
                y = function(e) {
                    function d(code, t) {
                        void 0 === t && (t = {});
                        var r = this,
                            n = l[code],
                            c = t.domain,
                            o = t.method,
                            y = t.currencyTicker,
                            f = n(t);
                        return (r = e.call(this, f) || this).code = code, r.domain = c, r.method = o, r.currencyTicker = y, r.name = "ResolutionError", Object.setPrototypeOf(r, d.prototype), r
                    }
                    return o(d, e), d
                }(Error);
            d.ResolutionError = y, d.default = y
        },
        310: function(e, d, t) {
            "use strict";
            var r, n, c, o = this && this.__extends || (r = function(e, b) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, b) {
                    e.__proto__ = b
                } || function(e, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }, r(e, b)
            }, function(e, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                function d() {
                    this.constructor = e
                }
                r(e, b), e.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d)
            });
            Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d.ConfigurationError = d.ConfigurationErrorCode = void 0,
                function(e) {
                    e.IncorrectProvider = "IncorrectProvider", e.UnsupportedNetwork = "UnsupportedNetwork", e.UnspecifiedUrl = "UnspecifiedUrl", e.NetworkConfigMissing = "NetworkConfigMissing", e.CustomNetworkConfigMissing = "CustomNetworkConfigMissing", e.InvalidConfigurationField = "InvalidProxyReader"
                }(c = d.ConfigurationErrorCode || (d.ConfigurationErrorCode = {}));
            var l = ((n = {})[c.IncorrectProvider] = function() {
                    return "Provider doesn't implement sendAsync or send method"
                }, n[c.UnsupportedNetwork] = function(e) {
                    return "Unsupported network in Resolution ".concat(e.method || "", " configuration")
                }, n[c.UnspecifiedUrl] = function(e) {
                    return "Unspecified url in Resolution ".concat(e.method, " configuration")
                }, n[c.NetworkConfigMissing] = function(e) {
                    return "Missing configuration in Resolution ".concat(e.method, ". Please specify ").concat(e.config)
                }, n[c.CustomNetworkConfigMissing] = function(e) {
                    return "Missing configuration in Resolution ".concat(e.method, ". Please specify ").concat(e.config, " when using a custom network")
                }, n[c.InvalidConfigurationField] = function(e) {
                    return "Invalid '".concat(e.field, "' in Resolution ").concat(e.method)
                }, n),
                y = function(e) {
                    function d(code, t) {
                        void 0 === t && (t = {});
                        var r = this,
                            n = l[code];
                        return (r = e.call(this, n(t)) || this).code = code, r.method = t.method, r.name = "ConfigurationError", Object.setPrototypeOf(r, d.prototype), r
                    }
                    return o(d, e), d
                }(Error);
            d.ConfigurationError = y, d.default = y
        },
        829: function(e, d, t) {
            "use strict";
            var r, n, c, o = this && this.__extends || (r = function(e, b) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, b) {
                    e.__proto__ = b
                } || function(e, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }, r(e, b)
            }, function(e, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                function d() {
                    this.constructor = e
                }
                r(e, b), e.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d)
            });
            Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d.DnsRecordsError = d.DnsRecordsErrorCode = void 0,
                function(e) {
                    e.InconsistentTtl = "InconsistentTtl", e.DnsRecordCorrupted = "DnsRecordCorrupted"
                }(c = d.DnsRecordsErrorCode || (d.DnsRecordsErrorCode = {}));
            var l = ((n = {})[c.InconsistentTtl] = function(e) {
                    return "ttl for record ".concat(e.recordType, " is different for other records of the same type")
                }, n[c.DnsRecordCorrupted] = function(e) {
                    return "dns record ".concat(e.recordType, " is invalid json-string")
                }, n),
                y = function(e) {
                    function d(code, t) {
                        void 0 === t && (t = {});
                        var r = this,
                            n = l[code];
                        return (r = e.call(this, n(t)) || this).code = code, r.name = "DnsRecordsError", Object.setPrototypeOf(r, d.prototype), r
                    }
                    return o(d, e), d
                }(Error);
            d.DnsRecordsError = y, d.default = y
        }
    }
]);