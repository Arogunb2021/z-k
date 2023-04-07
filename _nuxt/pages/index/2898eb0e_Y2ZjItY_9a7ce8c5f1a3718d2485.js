(window.webpackJsonp = window.webpackJsonp || []).push([
    [197, 153], {
        2533: function(t, e, n) {},
        2808: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10).a.extend({
                    name: "BlockModalsAlternativeWithdrawal",
                    computed: {
                        opened: {
                            set: function(t) {
                                !1 === t && this.$accessor.closeActiveModal()
                            },
                            get: function() {
                                return null !== this.$accessor.currentModal && "AlternativeWithdrawal" === this.$accessor.currentModal
                            }
                        }
                    }
                }),
                o = n(6),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-modal", {
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("How does this all work?")]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.opened,
                            callback: function(e) {
                                t.opened = e
                            },
                            expression: "opened"
                        }
                    }, [t._v(" "), n("p", [n("strong", [t._v("zkSync Alternative Withdrawal")]), t._v(" is way to get funds to Layer 1 without interacting directly with\n    the protocol. zkSync supports most of web3-compatible wallets, so we highly recommend you to use the so the\n    official client to withdraw funds if that is possible as it is cheaper and more convenient.\n  ")]), t._v(" "), n("div", {
                        staticClass: "_margin-top-1"
                    }, [t._v("\n    In order for the account to be eligible for an alternative withdrawal all of the following must be true:\n    "), n("ul", [n("li", [t._v("It must exist (hold any funds) in the zkSync network for at least 24 hours.")]), t._v(" "), n("li", [t._v("The account must be locked (no ChangePubKey operation so far).")])])]), t._v(" "), n("p", [t._v("\n    The amount to compensate is somewhat higher than the base fee due to technical reasons, but the overhead is\n    negligible (less than 0.000001 ETH).\n  ")])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        2829: function(t, e, n) {
            "use strict";
            n(2533)
        },
        3612: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(12),
                o = (n(86), n(10).a.extend({
                    layout: "index",
                    computed: {
                        isMainnet: function() {
                            return "mainnet" === this.$store.getters["zk-provider/network"]
                        }
                    },
                    mounted: function() {
                        this.$analytics.track("visit_login")
                    },
                    methods: {
                        customWallet: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$store.dispatch("zk-onboard/loginWithOnboard");
                                        case 2:
                                            if (e.sent) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", t.$store.dispatch("zk-account/logout"));
                                        case 7:
                                            return t.$analytics.track("login", {
                                                connectionType: "Ethereum Wallet",
                                                wallet: t.$store.getters["zk-onboard/selectedWallet"]
                                            }), e.abrupt("return", t.$router.push("/account"));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        walletConnect: function() {
                            var t = arguments,
                                e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                var r;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = t.length > 0 && void 0 !== t[0] && t[0], n.next = 3, e.$store.dispatch("zk-onboard/".concat(r ? "loginWithArgent" : "loginWithWalletConnect"));
                                        case 3:
                                            if (n.sent) {
                                                n.next = 8;
                                                break
                                            }
                                            return n.abrupt("return", e.$store.dispatch("zk-account/logout"));
                                        case 8:
                                            return e.$analytics.track("login", {
                                                connectionType: "WalletConnect",
                                                wallet: e.$store.getters["zk-onboard/selectedWallet"]
                                            }), n.abrupt("return", e.$router.push("/account"));
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                })),
                l = o,
                c = (n(2829), n(6)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "indexPage"
                    }, [n("i-container", [n("h1", [t._v("Connect your L1 ETH Wallet to start")]), t._v(" "), n("div", {
                        staticClass: "container-fluid _flex-direction-row _display-flex connections"
                    }, [n("button", {
                        staticClass: "tileContainer _text-center",
                        attrs: {
                            "data-cy": "core_connect_wallet_button"
                        },
                        on: {
                            click: function(e) {
                                return t.customWallet()
                            }
                        }
                    }, [n("div", {
                        staticClass: "tile"
                    }, [n("img", {
                        attrs: {
                            src: "/images/wallets/external.png",
                            alt: "External"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "tileName"
                    }, [t._v("Ethereum Wallet")])]), t._v(" "), n("button", {
                        staticClass: "tileContainer _text-center",
                        attrs: {
                            "data-cy": "core_connect_wallet_wc_button"
                        },
                        on: {
                            click: function(e) {
                                return t.walletConnect()
                            }
                        }
                    }, [n("div", {
                        staticClass: "tile"
                    }, [n("img", {
                        attrs: {
                            src: "/images/wallets/wc.png",
                            alt: "Wallet Connect"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "tileName"
                    }, [t._v("Wallet Connect")])]), t._v(" "), t.isMainnet ? n("button", {
                        staticClass: "tileContainer _text-center",
                        attrs: {
                            "data-cy": "core_connect_wallet_argent_button"
                        },
                        on: {
                            click: function(e) {
                                return t.walletConnect(!0)
                            }
                        }
                    }, [n("div", {
                        staticClass: "tile"
                    }, [n("img", {
                        attrs: {
                            src: "/images/wallets/argent.svg",
                            alt: "Argent"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "tileName"
                    }, [t._v("Argent Wallet")])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "container-fluid _display-flex alternativeWithdrawContainer"
                    }, [n("h2", {
                        staticClass: "_display-flex _margin-y-0 _align-items-center"
                    }, [t._v("\n        Can't find your wallet?\n        "), n("span", {
                        staticClass: "icon-container _display-flex",
                        on: {
                            click: function(e) {
                                return t.$accessor.openModal("AlternativeWithdrawal")
                            }
                        }
                    }, [n("v-icon", {
                        staticClass: "iconInfo",
                        attrs: {
                            id: "questionMark",
                            name: "ri-question-mark",
                            scale: .9
                        }
                    })], 1)]), t._v(" "), n("h3", {
                        staticClass: "noteContainer"
                    }, [t._v("Or you’ve receive funds on your exchange address such as Binance?")]), t._v(" "), n("a", {
                        staticClass: "tileContainer _text-center _margin-top-1",
                        attrs: {
                            "data-cy": "core_connect_wallet_button",
                            href: "https://withdraw.zksync.io",
                            target: "_blank"
                        }
                    }, [n("div", {
                        staticClass: "tile"
                    }, [n("img", {
                        attrs: {
                            src: "/images/logo-no-letters.svg",
                            alt: "Alternative withdraw"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "tileName"
                    }, [t._v("Alternative Withdraw")])])])]), t._v(" "), n("block-modals-alternative-withdraw")], 1)
                }), [], !1, null, "8413b7b6", null);
            e.default = component.exports;
            installComponents(component, {
                IContainer: n(237).default,
                BlockModalsAlternativeWithdraw: n(2808).default
            })
        }
    }
]);