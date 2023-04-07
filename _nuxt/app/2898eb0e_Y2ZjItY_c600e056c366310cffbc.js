(window.webpackJsonp = window.webpackJsonp || []).push([
    [53], {
        1038: function(t, e, n) {
            "use strict";
            n.r(e);
            n(57);
            var r = n(10).a.extend({
                    name: "WrongNetwork",
                    computed: {
                        network: function() {
                            return this.$store.getters["zk-onboard/config"].ethereumNetwork.name
                        },
                        opened: {
                            set: function(t) {
                                !1 === t && this.$store.dispatch("zk-onboard/rejectNetworkChange")
                            },
                            get: function() {
                                return this.$store.getters["zk-onboard/wrongNetwork"]
                            }
                        }
                    }
                }),
                o = (n(1282), n(6)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-modal", {
                        staticClass: "wrongNetworkModal",
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Wrong network")]
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
                    }, [t._v(" "), n("div", [n("div", {
                        staticClass: "_padding-bottom-1"
                    }, [t._v("\n      You are on the wrong network. Please switch your wallet to "), n("b", [t._v(t._s(t.network))]), t._v(" to continue.\n    ")]), t._v(" "), n("div", {
                        staticClass: "_padding-bottom-1 text-sm"
                    }, [t._v("\n      Some wallets may not support changing networks. If you can not change networks in your wallet you may consider\n      switching to a different wallet.\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        1039: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10).a.extend({
                    name: "RequestingProviderError",
                    computed: {
                        network: function() {
                            return this.$store.getters["zk-provider/network"]
                        },
                        providerError: function() {
                            return this.$store.getters["zk-provider/providerRequestingError"]
                        },
                        opened: {
                            set: function(t) {
                                !1 === t && this.$store.commit("zk-provider/setProviderRequestingError", void 0)
                            },
                            get: function() {
                                return !!this.$store.getters["zk-provider/providerRequestingError"]
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
                        staticClass: "wrongNetworkModal",
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Error requesting zkSync provider")]
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
                    }, [t._v(" "), n("div", [n("div", {
                        staticClass: "_padding-bottom-1"
                    }, [t._v("\n      Error requesting zkSync "), n("b", [t._v(t._s(t.network))]), t._v(" provider. Please check your internet connection and try again\n      later.\n    ")]), t._v(" "), n("div", {
                        staticClass: "_padding-bottom-1"
                    }, [t._v("\n      " + t._s(t.providerError) + "\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        1040: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10).a.extend({
                    name: "WrongNetwork",
                    computed: {
                        error: function() {
                            return this.$store.getters["zk-onboard/error"]
                        },
                        opened: {
                            set: function(t) {
                                !1 === t && this.$store.commit("zk-onboard/setError", "")
                            },
                            get: function() {
                                return !!this.error
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
                        staticClass: "wrongNetworkModal",
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Login error")]
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
                    }, [t._v(" "), n("div", [n("div", {
                        staticClass: "_padding-bottom-1 errorText"
                    }, [t._v("\n      " + t._s(t.error) + "\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        1041: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10),
                o = n(198),
                c = r.a.extend({
                    props: {
                        value: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            theme: o.a.getUserTheme()
                        }
                    },
                    computed: {
                        modal: {
                            get: function() {
                                return this.value
                            },
                            set: function(t) {
                                this.$emit("input", t)
                            }
                        },
                        blockExplorerLink: function() {
                            return this.$store.getters["zk-onboard/config"].zkSyncNetwork.explorer
                        },
                        isDarkTheme: function() {
                            return "dark" === this.theme
                        }
                    },
                    methods: {
                        toggleDarkMode: function() {
                            this.theme = o.a.toggleTheme(), this.$inkline.config.variant = this.theme
                        },
                        openNetworkSwitchModal: function() {
                            return this.$analytics.track("visit_change_network"), this.$accessor.openModal("NetworkSwitch")
                        }
                    }
                }),
                l = n(6),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "footerModalContainer"
                    }, [n("i-modal", {
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [n("b", [t._v("Information")])]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [n("a", {
                                    staticClass: "modalFooterBtn big",
                                    attrs: {
                                        href: "https://docs.zksync.io/userdocs/intro.html",
                                        target: "_blank"
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-book-2-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Docs")])], 1), t._v(" "), n("a", {
                                    staticClass: "modalFooterBtn big",
                                    attrs: {
                                        href: "https://docs.zksync.io/legal/terms.html",
                                        target: "_blank"
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-profile-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Terms")])], 1), t._v(" "), n("a", {
                                    staticClass: "modalFooterBtn big",
                                    attrs: {
                                        href: "https://docs.zksync.io/contact.html",
                                        target: "_blank"
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-contacts-book-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Contact")])], 1), t._v(" "), n("a", {
                                    staticClass: "modalFooterBtn big",
                                    attrs: {
                                        href: t.blockExplorerLink,
                                        target: "_blank"
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-external-link-line"
                                    }
                                }), t._v(" "), n("span", [t._v("zkScan")])], 1), t._v(" "), n("a", {
                                    staticClass: "modalFooterBtn big",
                                    attrs: {
                                        href: "https://uptime.com/s/zkSync",
                                        target: "_blank"
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-wifi-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Uptime")])], 1), t._v(" "), n("div", {
                                    staticClass: "modalFooterBtn big",
                                    on: {
                                        click: function(e) {
                                            return t.$accessor.openModal("environment")
                                        }
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-reserved-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Environment")])], 1)]
                            },
                            proxy: !0
                        }, {
                            key: "footer",
                            fn: function() {
                                return [n("div", {
                                    staticClass: "_display-flex _justify-content-space-between"
                                }, [n("block-system-info"), t._v(" "), n("block-modals-network-switch"), t._v(" "), n("div", {
                                    staticClass: "_display-flex"
                                }, [n("i-button", {
                                    staticClass: "_margin-right-1 _margin-0",
                                    attrs: {
                                        size: "md",
                                        circle: "",
                                        block: ""
                                    },
                                    on: {
                                        click: t.openNetworkSwitchModal
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "co-ethereum",
                                        scale: "1"
                                    }
                                })], 1), t._v(" "), n("i-button", {
                                    staticClass: "_margin-0",
                                    attrs: {
                                        block: "",
                                        size: "md",
                                        circle: ""
                                    },
                                    on: {
                                        click: t.toggleDarkMode
                                    }
                                }, [t.isDarkTheme ? n("v-icon", {
                                    attrs: {
                                        name: "ri-sun-fill"
                                    }
                                }) : n("v-icon", {
                                    attrs: {
                                        name: "ri-moon-fill"
                                    }
                                })], 1)], 1)], 1)]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.modal,
                            callback: function(e) {
                                t.modal = e
                            },
                            expression: "modal"
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockSystemInfo: n(1042).default,
                BlockModalsNetworkSwitch: n(1043).default,
                IButton: n(134).default,
                IModal: n(183).default
            })
        },
        1043: function(t, e, n) {
            "use strict";
            n.r(e);
            n(71);
            var r = n(10),
                o = n(484),
                c = r.a.extend({
                    name: "NetworkSwitch",
                    computed: {
                        options: function() {
                            return Object.keys(o.a)
                        },
                        network: function() {
                            return this.$store.getters["zk-provider/network"]
                        },
                        opened: {
                            set: function(t) {
                                !1 === t && this.$accessor.closeActiveModal()
                            },
                            get: function() {
                                return null !== this.$accessor.currentModal && "NetworkSwitch" === this.$accessor.currentModal
                            }
                        }
                    },
                    methods: {
                        changeNetworkConfig: function(t) {
                            this.$analytics.track("change_network", {
                                networkName: t
                            }), this.$store.dispatch("zk-provider/changeNetwork", t), this.$accessor.closeActiveModal()
                        }
                    }
                }),
                l = n(6),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-modal", {
                        staticClass: "networkSwitchModal",
                        attrs: {
                            size: "md",
                            "data-cy": "network_switch_modal"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Network Configuration")]
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
                    }, [t._v(" "), n("ul", {
                        staticClass: "network-list"
                    }, t._l(t.options, (function(e) {
                        return n("li", {
                            key: e,
                            staticClass: "network-list-item",
                            attrs: {
                                "data-cy": "network_switch_" + e
                            },
                            on: {
                                click: function(n) {
                                    return t.changeNetworkConfig(e)
                                }
                            }
                        }, [n("span", [e === t.network ? n("v-icon", {
                            staticClass: "selected",
                            attrs: {
                                name: "ri-check-line"
                            }
                        }) : t._e()], 1), t._v(" "), n("span", [t._v("\n        zkSync lite "), n("span", {
                            staticClass: "networkName"
                        }, [t._v(t._s(e))])])])
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        1185: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10),
                o = n(647),
                c = r.a.extend({
                    name: "WalletAddress",
                    props: {
                        wallet: {
                            type: String,
                            default: "",
                            required: !0
                        }
                    },
                    methods: {
                        copyAddress: function() {
                            Object(o.b)(this.wallet)
                        }
                    }
                }),
                l = n(6),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "walletContainer"
                    }, [n("user-img", {
                        attrs: {
                            wallet: t.wallet
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("clickPicture")
                            }
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "walletValue walletAddress"
                    }, [t._v(t._s(t.wallet))]), t._v(" "), n("i-tooltip", {
                        attrs: {
                            placement: "left",
                            trigger: "click"
                        },
                        scopedSlots: t._u([{
                            key: "body",
                            fn: function() {
                                return [t._v("Copied!")]
                            },
                            proxy: !0
                        }])
                    }, [n("i", {
                        staticClass: "copy",
                        on: {
                            click: function(e) {
                                return t.copyAddress()
                            }
                        }
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-clipboard-line"
                        }
                    })], 1)])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                UserImg: n(654).default,
                ITooltip: n(343).default
            })
        },
        1282: function(t, e, n) {
            "use strict";
            n(709)
        },
        1287: function(t, e, n) {
            "use strict";
            n(715)
        },
        1328: function(t, e, n) {
            "use strict";
            n(734)
        },
        1688: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(12),
                o = (n(86), n(10)),
                c = n(1085),
                l = o.a.extend({
                    components: {
                        VueQrcode: c.a
                    },
                    data: function() {
                        return {
                            renameWalletModal: !1,
                            walletName: this.$store.getters["zk-account/name"]
                        }
                    },
                    computed: {
                        accountName: function() {
                            return this.$store.getters["zk-account/name"]
                        },
                        accountAddress: function() {
                            return this.$store.getters["zk-account/address"]
                        },
                        accountZkScanUrl: function() {
                            return this.$store.getters["zk-onboard/config"].zkSyncNetwork.explorer + "explorer/accounts/" + this.accountAddress
                        },
                        accountModal: {
                            get: function() {
                                return this.$accessor.getAccountModalState
                            },
                            set: function(t) {
                                return this.$accessor.setAccountModalState(t), t
                            }
                        },
                        isNameValid: function() {
                            var t;
                            return (null === (t = this.walletName) || void 0 === t ? void 0 : t.length) > 0
                        }
                    },
                    watch: {
                        renameWalletModal: {
                            immediate: !0,
                            handler: function(t) {
                                var e = this;
                                t ? this.$nextTick((function() {
                                    var t, n, r;
                                    e.$refs.nameInput && (null === (t = e.$refs.nameInput) || void 0 === t || null === (n = t.$el) || void 0 === n || null === (r = n.querySelector("input")) || void 0 === r || r.focus())
                                })) : this.walletName = this.accountName
                            }
                        }
                    },
                    methods: {
                        logout: function() {
                            var t = this;
                            this.$analytics.track("disconnect"), this.accountModal = !1, this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$store.dispatch("zk-account/logout");
                                        case 2:
                                            return e.next = 4, t.$router.push("/");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))))
                        },
                        renameWalletOpen: function() {
                            this.$analytics.track("visit_rename_wallet"), this.accountModal = !1, this.renameWalletModal = !0
                        },
                        renameWallet: function() {
                            this.isNameValid && (this.$analytics.track("rename_wallet"), this.$store.dispatch("zk-account/saveAccountName", this.walletName), this.renameWalletModal = !1, this.walletName = this.accountName)
                        },
                        togglePopup: function() {
                            this.$accessor.setAccountModalState(!0)
                        }
                    }
                }),
                d = n(6),
                component = Object(d.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "accountModalContainer"
                    }, [n("i-modal", {
                        staticClass: "prevent-close",
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Rename wallet")]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.renameWalletModal,
                            callback: function(e) {
                                t.renameWalletModal = e
                            },
                            expression: "renameWalletModal"
                        }
                    }, [t._v(" "), n("div", [n("i-input", {
                        ref: "nameInput",
                        attrs: {
                            size: "lg",
                            placeholder: "Name",
                            type: "name",
                            maxlength: "18"
                        },
                        on: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.renameWallet()
                            }
                        },
                        model: {
                            value: t.walletName,
                            callback: function(e) {
                                t.walletName = e
                            },
                            expression: "walletName"
                        }
                    }), t._v(" "), n("i-button", {
                        staticClass: "_margin-top-1",
                        attrs: {
                            block: "",
                            size: "lg",
                            variant: "secondary",
                            disabled: !t.isNameValid
                        },
                        on: {
                            click: function(e) {
                                return t.renameWallet()
                            }
                        }
                    }, [t._v("Save\n      ")])], 1)]), t._v(" "), n("i-modal", {
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [n("b", [t._v(t._s(t.accountName))])]
                            },
                            proxy: !0
                        }, {
                            key: "footer",
                            fn: function() {
                                return [n("a", {
                                    staticClass: "modalFooterBtn",
                                    attrs: {
                                        href: t.accountZkScanUrl,
                                        target: "_blank"
                                    },
                                    on: {
                                        "&click": function(e) {
                                            return t.$analytics.track("view_in_blockexplorer")
                                        }
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-external-link-line"
                                    }
                                }), t._v(" "), n("span", [t._v("View in block explorer")])], 1), t._v(" "), n("div", {
                                    staticClass: "modalFooterBtn",
                                    on: {
                                        click: t.renameWalletOpen
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-pencil-line"
                                    }
                                }), t._v(" "), n("span", [t._v("Rename wallet")])], 1), t._v(" "), n("div", {
                                    staticClass: "modalFooterBtn",
                                    on: {
                                        click: function(e) {
                                            return t.logout()
                                        }
                                    }
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-link-unlink-m"
                                    }
                                }), t._v(" "), n("span", [t._v("Disconnect wallet")])], 1)]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.accountModal,
                            callback: function(e) {
                                t.accountModal = e
                            },
                            expression: "accountModal"
                        }
                    }, [t._v(" "), n("div", [n("wallet-address", {
                        attrs: {
                            wallet: t.accountAddress
                        }
                    }), t._v(" "), t.accountAddress ? n("vue-qrcode", {
                        staticClass: "addressQR",
                        attrs: {
                            value: t.accountAddress,
                            margin: 1,
                            scale: 6
                        }
                    }) : t._e()], 1)])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IInput: n(178).default,
                IButton: n(134).default,
                IModal: n(183).default,
                WalletAddress: n(1185).default
            })
        },
        1689: function(t, e, n) {
            "use strict";
            n.r(e);
            n(57);
            var r = n(10).a.extend({
                    name: "Environment",
                    computed: {
                        opened: {
                            set: function(t) {
                                !1 === t && this.$accessor.closeActiveModal()
                            },
                            get: function() {
                                return null !== this.$accessor.currentModal && "environment" === this.$accessor.currentModal
                            }
                        },
                        config: function() {
                            return this.$store.getters["zk-onboard/config"]
                        },
                        netName: function() {
                            return this.config.ethereumNetwork.name
                        },
                        githubLink: function() {
                            return "https://github.com/matter-labs/zksync-wallet-vue/commit/".concat(this.$config.git.revision)
                        },
                        zkApiBase: function() {
                            return this.config.zkSyncNetwork.api
                        }
                    }
                }),
                o = n(6),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.$config.git.version ? n("i-modal", {
                        attrs: {
                            size: "md"
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Environment")]
                            },
                            proxy: !0
                        }], null, !1, 3883658487),
                        model: {
                            value: t.opened,
                            callback: function(e) {
                                t.opened = e
                            },
                            expression: "opened"
                        }
                    }, [t._v(" "), n("div", {
                        staticClass: "modalFooterBtn"
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-npmjs-fill"
                        }
                    }), t._v(" "), n("span", [t._v("zkSync:")]), t._v(" "), n("strong", [t._v(t._s(t.$config.zksyncVersion))])], 1), t._v(" "), n("div", {
                        staticClass: "modalFooterBtn"
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-reserved-fill"
                        }
                    }), t._v(" "), n("span", [t._v("zkSync API:")]), t._v(" "), n("strong", [t._v(t._s(t.zkApiBase))])], 1), t._v(" "), n("div", {
                        staticClass: "modalFooterBtn"
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-reserved-fill"
                        }
                    }), t._v(" "), n("span", [t._v("Ethereum env:")]), t._v(" "), n("strong", [t._v(t._s(t.netName))])], 1)]) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IModal: n(183).default
            })
        },
        1690: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(12),
                o = (n(86), n(10).a.extend({
                    name: "SignPubkey",
                    data: function() {
                        return {
                            loading: !1,
                            requestingSigner: !1
                        }
                    },
                    computed: {
                        cpkStatus: function() {
                            return this.$store.getters["zk-wallet/cpk"]
                        },
                        opened: function() {
                            return "SignPubkey" === this.$accessor.currentModal
                        },
                        state: function() {
                            return this.$store.getters["zk-wallet/cpkSignState"]
                        },
                        hasSigner: function() {
                            return this.$store.getters["zk-wallet/hasSigner"]
                        },
                        error: function() {
                            return this.$store.getters["zk-wallet/cpkSignError"]
                        },
                        transactionError: function() {
                            return this.$store.getters["zk-transaction/error"]
                        }
                    },
                    watch: {
                        cpkStatus: function(t) {
                            !1 !== t && this.opened && this.$accessor.closeActiveModal()
                        }
                    },
                    methods: {
                        close: function() {
                            var t = this;
                            if (this.$accessor.closeActiveModal(), this.$store.commit("zk-wallet/setCPKSignError", void 0), this.$store.commit("zk-wallet/setCPKSignState", !1), this.loading = !1, this.requestingSigner = !1, !1 === this.$store.getters["zk-wallet/cpk"]) {
                                !this.$accessor.getPreviousRoute || function() {
                                    for (var e = 0, n = ["/transaction/transfer", "/transaction/withdraw", "/transaction/nft/transfer", "/transaction/nft/withdraw"]; e < n.length; e++) {
                                        var r, o, c = n[e];
                                        if ((null === (r = t.$accessor.getPreviousRoute) || void 0 === r ? void 0 : r.path) === c || (null === (o = t.$accessor.getPreviousRoute) || void 0 === o ? void 0 : o.path) === c + "/") return !0
                                    }
                                    return !1
                                }() ? this.$router.push("/") : this.$router.push(this.$accessor.getPreviousRoute)
                            }
                        },
                        signActivation: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.hasSigner) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.prev = 1, t.requestingSigner = !0, e.next = 5, t.$store.dispatch("zk-wallet/requestSigner");
                                        case 5:
                                            e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), t.$sentry.captureException(e.t0, {
                                                tags: {
                                                    "operation.type": "requestSigner"
                                                }
                                            });
                                        case 10:
                                            t.requestingSigner = !1, e.next = 25;
                                            break;
                                        case 13:
                                            return t.loading = !0, e.prev = 14, e.next = 17, t.$store.dispatch("zk-wallet/signCPK");
                                        case 17:
                                            e.next = 23;
                                            break;
                                        case 19:
                                            throw e.prev = 19, e.t1 = e.catch(14), t.$sentry.captureException(e.t1, {
                                                tags: {
                                                    "operation.type": "signCPK"
                                                }
                                            }), e.t1;
                                        case 23:
                                            !1 !== t.$store.getters["zk-wallet/cpk"] && t.close(), t.loading = !1;
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 7],
                                    [14, 19]
                                ])
                            })))()
                        }
                    }
                })),
                c = (n(1328), n(6)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-modal", {
                        staticClass: "accountActivationModal prevent-close",
                        attrs: {
                            value: t.opened,
                            size: "md",
                            "data-cy": "account_activation_modal"
                        },
                        on: {
                            hide: function(e) {
                                return t.close()
                            }
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Account Activation")]
                            },
                            proxy: !0
                        }])
                    }, [t._v(" "), n("div", {
                        staticClass: "_text-center"
                    }, [!1 === t.state ? n("p", [n("span", [t._v("Sign a message to activate your zkSync account.")]), t._v(" "), n("span", {
                        staticClass: "_display-block _margin-top-05 secondaryText text-sm"
                    }, [t._v(t._s(t.transactionError))])]) : "processing" === t.state ? n("p", {
                        staticClass: "_text-center"
                    }, [t._v("Processing...")]) : "waitingForUserConfirmation" === t.state ? n("p", {
                        staticClass: "_text-center"
                    }, [t._v("\n      Sign the message in your wallet to continue\n    ")]) : "updating" === t.state ? n("p", {
                        staticClass: "_text-center"
                    }, [t._v("Loading account data...")]) : t._e(), t._v(" "), n("i-button", {
                        staticClass: "_margin-top-2",
                        attrs: {
                            disabled: t.loading || t.requestingSigner,
                            block: "",
                            size: "lg",
                            variant: "secondary",
                            "data-cy": "account_activation_sign_button"
                        },
                        on: {
                            click: function(e) {
                                return t.signActivation()
                            }
                        }
                    }, [n("div", {
                        staticClass: "_display-flex _justify-content-center _align-items-center"
                    }, [t.hasSigner ? t._e() : n("v-icon", {
                        attrs: {
                            name: "md-vpnkey-round"
                        }
                    }), t._v("  \n        "), n("div", [t._v(t._s(t.hasSigner ? "" : "Authorize to ") + "Sign account activation")]), t._v(" "), t.loading || t.requestingSigner ? n("loader", {
                        staticClass: "_margin-left-1",
                        attrs: {
                            size: "xs"
                        }
                    }) : t._e()], 1)]), t._v(" "), t.requestingSigner ? n("div", {
                        staticClass: "_text-center _margin-top-1",
                        attrs: {
                            "data-cy": "requesting_signer_text"
                        }
                    }, [t._v("\n      Follow the instructions in your Ethereum wallet\n    ")]) : t._e(), t._v(" "), t.error ? n("div", {
                        staticClass: "errorText _text-center _margin-top-1"
                    }, [t._v("\n      " + t._s(t.error) + "\n    ")]) : t._e()], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Loader: n(646).default,
                IButton: n(134).default,
                IModal: n(183).default
            })
        },
        646: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(10).a.extend({
                    props: {
                        size: {
                            type: String,
                            default: "md",
                            required: !1
                        }
                    }
                }),
                o = n(6),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "loaderContainer",
                        class: "size-" + t.size,
                        attrs: {
                            "data-cy": "core_loader_spinner"
                        }
                    }, [n("div", {
                        staticClass: "loaderSpinner"
                    }, [t._v("Loading...")])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        654: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1084),
                o = n(10).a.extend({
                    name: "UserImg",
                    props: {
                        wallet: {
                            type: String,
                            default: "",
                            required: !0
                        }
                    },
                    computed: {
                        walletImg: function() {
                            return r.create({
                                seed: this.wallet.toLowerCase()
                            }).toDataURL()
                        }
                    }
                }),
                c = (n(1287), n(6)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        e = t.$createElement;
                    return (t._self._c || e)("img", {
                        staticClass: "userImg",
                        attrs: {
                            src: t.walletImg,
                            alt: "avatar"
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("click")
                            }
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        709: function(t, e, n) {},
        715: function(t, e, n) {},
        734: function(t, e, n) {}
    }
]);