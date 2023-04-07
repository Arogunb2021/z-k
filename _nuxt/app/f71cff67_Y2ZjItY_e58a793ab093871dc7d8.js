(window.webpackJsonp = window.webpackJsonp || []).push([
    [134], {
        1037: function(t, e, n) {
            "use strict";
            n.r(e);
            var o, r = n(12),
                l = (n(86), n(164), n(10).a.extend({
                    name: "LoggingInLoader",
                    data: function() {
                        return {
                            connectingScreenDelay: !1
                        }
                    },
                    computed: {
                        connecting: function() {
                            return "connecting" === this.$store.getters["zk-onboard/onboardStatus"] || this.$store.getters["zk-onboard/restoringSession"]
                        },
                        loggedIn: function() {
                            return "authorized" === this.$store.getters["zk-onboard/onboardStatus"]
                        },
                        hintText: function() {
                            return this.$store.getters["zk-onboard/loadingHint"]
                        },
                        selectedWallet: function() {
                            return this.$store.getters["zk-onboard/selectedWallet"]
                        }
                    },
                    watch: {
                        connecting: function(t) {
                            var e = this;
                            clearTimeout(o), !0 === t ? (this.connectingScreenDelay = !0, o = setTimeout((function() {
                                e.connectingScreenDelay = !1
                            }), 150)) : this.connectingScreenDelay = !1
                        }
                    },
                    methods: {
                        cancelLogin: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$store.dispatch("zk-account/logout");
                                        case 2:
                                            return e.abrupt("return", t.$router.push("/"));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                })),
                c = n(6),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t.connecting && !t.connectingScreenDelay ? n("div", {
                        staticClass: "loggingInLoader"
                    }, [n("block-logo", {
                        staticClass: "_margin-bottom-3"
                    }), t._v(" "), n("h1", [t._v("Connecting " + t._s(t.selectedWallet ? "with " + t.selectedWallet : ""))]), t._v(" "), t.hintText ? n("transition-group", {
                        staticClass: "hint",
                        attrs: {
                            tag: "div",
                            name: "slide-vertical-fade"
                        }
                    }, [n("div", {
                        key: t.hintText
                    }, [t._v(t._s(t.hintText))])]) : t._e(), t._v(" "), n("loader", {
                        staticClass: "_margin-y-2",
                        attrs: {
                            size: "lg"
                        }
                    }), t._v(" "), n("i-button", {
                        staticClass: "cancelButton _padding-x-2",
                        attrs: {
                            size: "sm",
                            variant: "secondary"
                        },
                        on: {
                            click: function(e) {
                                return t.cancelLogin()
                            }
                        }
                    }, [t._v("Cancel")])], 1) : t._e()])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockLogo: n(517).default,
                Loader: n(646).default,
                IButton: n(134).default
            })
        },
        1042: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(10).a.extend({
                    computed: {
                        config: function() {
                            return this.$store.getters["zk-onboard/config"]
                        }
                    }
                }),
                r = n(6),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.$config.git.version ? n("i-badge", {
                        staticClass: "system-info",
                        attrs: {
                            variant: "secondary"
                        }
                    }, [n("i-popover", {
                        staticClass: "system-env-popover",
                        attrs: {
                            size: "sm",
                            trigger: ["hover"]
                        },
                        scopedSlots: t._u([{
                            key: "header",
                            fn: function() {
                                return [t._v("Environment details")]
                            },
                            proxy: !0
                        }, {
                            key: "body",
                            fn: function() {
                                return [n("span", {
                                    staticClass: "env-details"
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-npmjs-fill"
                                    }
                                }), t._v("\n        zkSync v." + t._s(t.$config.zksyncVersion) + "\n      ")], 1), t._v(" "), n("span", {
                                    staticClass: "env-details"
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-reserved-fill"
                                    }
                                }), t._v("\n        zkSync API\n        "), n("code", {
                                    staticClass: "_padding-y-0",
                                    attrs: {
                                        "data-cy": "environment_details_api"
                                    }
                                }, [t._v(t._s(t.config.zkSyncNetwork.api))])], 1), t._v(" "), n("span", {
                                    staticClass: "env-details"
                                }, [n("v-icon", {
                                    attrs: {
                                        name: "ri-reserved-fill"
                                    }
                                }), t._v("\n        Ethereum env\n        "), n("code", {
                                    staticClass: "_padding-y-0",
                                    attrs: {
                                        "data-cy": "environment_details_network"
                                    }
                                }, [t._v(t._s(t.config.ethereumNetwork.name))])], 1)]
                            },
                            proxy: !0
                        }], null, !1, 3539735684)
                    }, [n("span", {
                        staticClass: "version"
                    }, [t._v("v." + t._s(t.$config.git.version))])]), t._v(" "), n("a", {
                        staticClass: "revision _background-gray-40",
                        attrs: {
                            href: "https://github.com/matter-labs/zksync-wallet-vue/commit/" + t.$config.git.revision,
                            target: "_blank"
                        }
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-github-fill"
                        }
                    }), t._v("\n    " + t._s(t.$config.git.revision) + "\n  ")], 1)], 1) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IPopover: n(596).default,
                IBadge: n(449).default
            })
        },
        1044: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(10),
                r = n(198),
                l = o.a.extend({
                    name: "Footer",
                    data: function() {
                        return {
                            footerModal: !1,
                            theme: r.a.getUserTheme()
                        }
                    },
                    computed: {
                        blockExplorerLink: function() {
                            return this.$store.getters["zk-onboard/config"].zkSyncNetwork.explorer
                        },
                        isDarkTheme: function() {
                            return "dark" === this.theme
                        }
                    },
                    methods: {
                        toggleDarkMode: function() {
                            this.theme = r.a.toggleTheme(), this.$inkline.config.variant = this.theme
                        },
                        openNetworkSwitchModal: function() {
                            return this.$analytics.track("visit_change_network"), this.$accessor.openModal("NetworkSwitch")
                        }
                    }
                }),
                c = n(6),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-layout-footer", {
                        staticClass: "mainFooter"
                    }, [n("block-modals-footer-modal", {
                        model: {
                            value: t.footerModal,
                            callback: function(e) {
                                t.footerModal = e
                            },
                            expression: "footerModal"
                        }
                    }), t._v(" "), n("block-modals-network-switch"), t._v(" "), n("div", {
                        staticClass: "container _display-flex _flex-direction-row _align-items-center _justify-content-space-between _justify-content_mobile-space-around"
                    }, [n("i-row", {
                        staticClass: "linksRow _margin-0 _margin-md-top-1 _flex-nowrap _text-nowrap",
                        attrs: {
                            center: ""
                        }
                    }, [n("div", {
                        staticClass: "_padding-1-2 _padding-md-x-1 _padding-left-0"
                    }, [n("a", {
                        staticClass: "footer-link",
                        attrs: {
                            target: "_blank",
                            href: "https://docs.zksync.io/userdocs/intro.html"
                        }
                    }, [t._v("Docs")])]), t._v(" "), n("div", {
                        staticClass: "_padding-1-2 _padding-md-x-1"
                    }, [n("a", {
                        staticClass: "footer-link",
                        attrs: {
                            target: "_blank",
                            href: "https://docs.zksync.io/legal/terms.html"
                        }
                    }, [t._v("Terms")])]), t._v(" "), n("div", {
                        staticClass: "_padding-1-2 _padding-md-x-1"
                    }, [n("a", {
                        staticClass: "footer-link",
                        attrs: {
                            target: "_blank",
                            href: "https://docs.zksync.io/contact.html"
                        }
                    }, [t._v("Contact")])]), t._v(" "), n("div", {
                        staticClass: "_padding-1-2 _padding-md-x-1"
                    }, [n("span", {
                        staticClass: "dividerLine"
                    }, [t._v("|")])]), t._v(" "), n("div", {
                        staticClass: "_padding-1-2 _padding-md-x-1"
                    }, [n("a", {
                        staticClass: "footer-link",
                        attrs: {
                            target: "_blank",
                            href: t.blockExplorerLink
                        }
                    }, [t._v("zkScan")])])]), t._v(" "), n("i-row", {
                        staticClass: "_text-nowrap _align-items-center _margin-0",
                        attrs: {
                            center: ""
                        }
                    }, [n("div", {
                        staticClass: "_display-flex _align-items-center _padding-1-2 _padding-md-top-2 _padding-md-bottom-1 _padding-right-1 _hidden-sm-and-down"
                    }, [n("block-system-info"), t._v(" "), n("span", {
                        staticClass: "_padding-x-1 dividerLine"
                    }, [t._v("|")]), t._v(" "), n("a", {
                        staticClass: "uptime-link",
                        attrs: {
                            href: "https://uptime.com/s/zkSync",
                            target: "_blank"
                        }
                    }, [t._v("uptime")])], 1), t._v(" "), n("i-button", {
                        staticClass: "_margin-right-1 _hidden-sm-and-down",
                        attrs: {
                            size: "md",
                            circle: "",
                            "data-cy": "network_switch_icon",
                            outline: "",
                            variant: "dark"
                        },
                        on: {
                            click: t.openNetworkSwitchModal
                        }
                    }, [n("v-icon", {
                        attrs: {
                            name: "co-ethereum"
                        }
                    })], 1), t._v(" "), n("i-button", {
                        staticClass: "floating-on-mobile _hidden-sm-and-down",
                        attrs: {
                            size: "md",
                            circle: "",
                            outline: "",
                            variant: "dark"
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
                    })], 1), t._v(" "), n("i-button", {
                        staticClass: "_hidden-md-and-up floating-on-mobile",
                        attrs: {
                            size: "md",
                            circle: "",
                            outline: "",
                            variant: "dark"
                        },
                        on: {
                            click: function(e) {
                                t.footerModal = !t.footerModal
                            }
                        }
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-more-2-fill"
                        }
                    })], 1)], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockModalsFooterModal: n(1041).default,
                BlockModalsNetworkSwitch: n(1043).default,
                IRow: n(209).default,
                BlockSystemInfo: n(1042).default,
                IButton: n(134).default,
                ILayoutFooter: n(597).default
            })
        },
        1079: function(t, e, n) {
            "use strict";
            n.r(e);
            n(1284);
            var o = n(6),
                component = Object(o.a)({}, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "announcement"
                    }, [t._v("\n  zkSync v1 is now zkSync Lite.\n  "), n("a", {
                        attrs: {
                            href: "https://blog.matter-labs.io/8b8964ba7c59",
                            rel: "noopener nofollow noreferrer",
                            target: "_blank"
                        }
                    }, [t._v("Learn more")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        1275: function(t, e, n) {},
        1284: function(t, e, n) {
            "use strict";
            n(711)
        },
        1686: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(10).a.extend({
                    name: "NetworkBadge",
                    computed: {
                        isMainnet: function() {
                            return "mainnet" === this.$store.getters["zk-provider/network"]
                        },
                        network: function() {
                            return this.$store.getters["zk-provider/network"]
                        }
                    }
                }),
                r = n(6),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.isMainnet ? t._e() : n("i-badge", {
                        attrs: {
                            variant: "primary",
                            "data-cy": "network_logo"
                        }
                    }, [n("small", {
                        staticClass: "version"
                    }, [t._v(t._s(t.network))])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                IBadge: n(449).default
            })
        },
        1687: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(12),
                r = (n(86), n(10).a.extend({
                    name: "Header",
                    data: function() {
                        return {
                            footerModal: !1
                        }
                    },
                    computed: {
                        walletName: function() {
                            return this.$store.getters["zk-account/name"]
                        },
                        walletAddressFull: function() {
                            return this.$store.getters["zk-account/address"]
                        },
                        accountModal: {
                            get: function() {
                                return this.$accessor.getAccountModalState
                            },
                            set: function(t) {
                                return this.$accessor.setAccountModalState(t), t
                            }
                        }
                    },
                    methods: {
                        logout: function() {
                            var t = this;
                            this.accountModal = !1, this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e() {
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
                        togglePopup: function() {
                            this.$accessor.setAccountModalState(!0)
                        }
                    }
                })),
                l = n(6),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-layout-header", {
                        staticClass: "loggedInHeader"
                    }, [n("i-container", [n("i-row", [n("i-column", {
                        staticClass: "_padding-left-0 _display-flex _justify-content-start",
                        attrs: {
                            xs: 6,
                            md: 3
                        }
                    }, [n("nuxt-link", {
                        staticClass: "logoLinkContainer",
                        attrs: {
                            to: "/account"
                        }
                    }, [n("block-logo")], 1)], 1), t._v(" "), n("i-column", {
                        staticClass: "_padding-y-0 pagesContainerRow",
                        attrs: {
                            xs: 0,
                            md: 6
                        }
                    }, [n("div", {
                        staticClass: "pagesContainer linksContainer _margin-x-auto"
                    }, [n("nuxt-link", {
                        staticClass: "headerLink",
                        attrs: {
                            to: "/account"
                        }
                    }, [n("v-icon", {
                        staticClass: "mobileOnly",
                        attrs: {
                            name: "ri-wallet-line"
                        }
                    }), t._v(" "), n("span", [t._v("Home")])], 1), t._v(" "), n("nuxt-link", {
                        staticClass: "headerLink",
                        attrs: {
                            to: "/account/nft"
                        }
                    }, [n("v-icon", {
                        staticClass: "mobileOnly",
                        attrs: {
                            name: "ri-gallery-line"
                        }
                    }), t._v(" "), n("span", [t._v("NFTs")])], 1), t._v(" "), n("nuxt-link", {
                        staticClass: "headerLink",
                        attrs: {
                            to: "/contacts"
                        }
                    }, [n("v-icon", {
                        staticClass: "mobileOnly",
                        attrs: {
                            name: "ri-contacts-line"
                        }
                    }), t._v(" "), n("span", [t._v("Contacts")])], 1), t._v(" "), n("nuxt-link", {
                        staticClass: "headerLink",
                        attrs: {
                            to: "/account/history"
                        }
                    }, [n("v-icon", {
                        staticClass: "mobileOnly",
                        attrs: {
                            name: "ri-history-line"
                        }
                    }), t._v(" "), n("span", [t._v("History")])], 1), t._v(" "), n("div", {
                        staticClass: "mobileOnly headerLink _cursor-pointer",
                        on: {
                            click: function(e) {
                                t.footerModal = !t.footerModal
                            }
                        }
                    }, [n("v-icon", {
                        staticClass: "mobileOnly",
                        attrs: {
                            name: "ri-more-2-fill"
                        }
                    }), t._v(" "), n("span", [t._v("More")])], 1)], 1)]), t._v(" "), n("i-column", {
                        staticClass: "_margin-left-auto _padding-right-0 _display-flex _justify-content-end",
                        attrs: {
                            xs: 6,
                            md: 3
                        }
                    }, [n("div", {
                        staticClass: "linksContainer"
                    }, [n("div", {
                        staticClass: "userDropdown",
                        on: {
                            click: t.togglePopup
                        }
                    }, [n("div", {
                        staticClass: "userDropdownAddress"
                    }, [n("div", {
                        staticClass: "walletLabel"
                    }, [t._v("Wallet")]), t._v(" "), n("div", {
                        staticClass: "userAddress"
                    }, [n("div", {
                        staticClass: "address"
                    }, [t._v(t._s(t.walletName))])])]), t._v(" "), n("div", {
                        staticClass: "userImgContainer"
                    }, [n("user-img", {
                        attrs: {
                            wallet: t.walletAddressFull
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "dropdownArrow"
                    }, [n("v-icon", {
                        attrs: {
                            name: "ri-arrow-down-s-line"
                        }
                    })], 1)])])])], 1)], 1), t._v(" "), n("block-modals-account-modal"), t._v(" "), n("block-modals-footer-modal", {
                        model: {
                            value: t.footerModal,
                            callback: function(e) {
                                t.footerModal = e
                            },
                            expression: "footerModal"
                        }
                    }), t._v(" "), n("block-modals-environment")], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockLogo: n(517).default,
                IColumn: n(235).default,
                UserImg: n(654).default,
                IRow: n(209).default,
                IContainer: n(237).default,
                BlockModalsAccountModal: n(1688).default,
                BlockModalsFooterModal: n(1041).default,
                BlockModalsEnvironment: n(1689).default,
                ILayoutHeader: n(450).default
            })
        },
        1691: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(10).a.extend({
                    data: function() {
                        return {
                            firstHovered: !1,
                            opened: !1,
                            dropdownOpened: !1
                        }
                    },
                    computed: {
                        dropdownOptions: function() {
                            return [{
                                name: "Explore zkSync",
                                link: "https://ecosystem.zksync.io",
                                isDividerAfter: !0
                            }, {
                                name: "zkSync Era Portal",
                                link: "https://portal.zksync.io"
                            }, {
                                name: "zkSync Era Docs",
                                link: "https://era.zksync.io/docs/"
                            }, {
                                name: "Block Explorer",
                                link: this.config.zkSyncNetwork.explorer
                            }, {
                                name: "zkCheckout",
                                link: this.checkoutLink
                            }]
                        },
                        config: function() {
                            return this.$store.getters["zk-onboard/config"]
                        },
                        checkoutLink: function() {
                            var t = "mainnet" === this.config.zkSyncNetwork.ethereumNetwork ? "" : "-".concat(this.config.zkSyncNetwork.ethereumNetwork);
                            return "https://checkout".concat(t, ".zksync.io")
                        }
                    }
                }),
                r = n(6),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("i-layout-header", {
                        staticClass: "indexHeader",
                        class: {
                            opened: t.opened
                        }
                    }, [n("div", {
                        staticClass: "mobileIndexHeader"
                    }, [n("i-container", {
                        staticClass: "mobileOnly"
                    }, [n("i-row", {
                        staticClass: "_display-flex _justify-content-between _flex-nowrap"
                    }, [n("i-column", [n("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [n("block-logo")], 1)], 1), t._v(" "), n("i-column", {
                        staticClass: "_padding-right-0"
                    }, [n("div", {
                        staticClass: "hamContainer"
                    }, [n("svg", {
                        attrs: {
                            id: "ham",
                            viewBox: "0 0 100 100",
                            width: "80"
                        },
                        on: {
                            click: function(e) {
                                t.opened = !t.opened
                            }
                        }
                    }, [n("path", {
                        staticClass: "line top",
                        attrs: {
                            d: "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "line middle",
                        attrs: {
                            d: "m 30,50 h 40"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "line bottom",
                        attrs: {
                            d: "m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                        }
                    })])])])], 1)], 1)], 1), t._v(" "), n("div", {
                        staticClass: "mainIndexHeader"
                    }, [n("i-container", [n("i-row", [n("i-column", {
                        staticClass: "_padding-left-0 desktopOnly",
                        attrs: {
                            xs: 12,
                            md: 4
                        }
                    }, [n("block-logo")], 1), t._v(" "), n("i-column", {
                        staticClass: "_padding-y-0",
                        attrs: {
                            xs: 12,
                            md: 4
                        }
                    }, [n("div", {
                        staticClass: "linksContainer"
                    }, [n("a", {
                        staticClass: "linkItem",
                        attrs: {
                            href: "https://docs.zksync.io/userdocs/",
                            target: "_blank"
                        }
                    }, [t._v("FAQ")]), t._v(" "), n("a", {
                        staticClass: "linkItem",
                        attrs: {
                            href: "https://docs.zksync.io/dev/",
                            target: "_blank"
                        }
                    }, [t._v("Docs")]), t._v(" "), n("i-dropdown", {
                        staticClass: "_background-transparent _border-none likeLinkItem",
                        class: {
                            opened: t.dropdownOpened, firstElementHovered: t.firstHovered
                        },
                        attrs: {
                            size: "sm",
                            "hide-on-item-click": !0,
                            "hide-on-click": !0,
                            "click-outside": !0,
                            variation: "dark",
                            placement: "bottom",
                            trigger: "click"
                        },
                        on: {
                            "!change": function(e) {
                                t.dropdownOpened = !t.dropdownOpened
                            }
                        },
                        nativeOn: {
                            mouseout: function(e) {
                                t.firstHovered = !1
                            }
                        }
                    }, [n("a", {
                        staticClass: "dropDownHandler linkItem _position-top-0"
                    }, [t._v("\n                zkTools\n                "), n("v-icon", {
                        staticClass: "fal",
                        attrs: {
                            name: t.dropdownOpened ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                        }
                    })], 1), t._v(" "), n("i-dropdown-menu", {
                        model: {
                            value: t.dropdownOpened,
                            callback: function(e) {
                                t.dropdownOpened = e
                            },
                            expression: "dropdownOpened"
                        }
                    }, t._l(t.dropdownOptions, (function(e, o) {
                        return n("i-dropdown-item", {
                            key: o,
                            class: e.isDividerAfter ? "bottomDivider" : "",
                            attrs: {
                                href: e.link,
                                target: "_blank"
                            },
                            nativeOn: {
                                mouseover: function(e) {
                                    t.firstHovered = !(o > 0)
                                },
                                mouseout: function(e) {
                                    t.firstHovered = 0 !== o
                                }
                            }
                        }, [t._v(t._s(e.name) + "\n                ")])
                    })), 1)], 1), t._v(" "), n("a", {
                        staticClass: "linkItem",
                        attrs: {
                            href: "https://matter-labs.io/#jobs",
                            target: "_blank"
                        }
                    }, [t._v("We're hiring")])], 1)]), t._v(" "), n("i-column", {
                        staticClass: "_margin-left-auto _padding-right-0 _justify-content-end desktopOnly",
                        attrs: {
                            xs: 12,
                            md: 4
                        }
                    }, [n("block-social-block")], 1)], 1)], 1)], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockLogo: n(517).default,
                IColumn: n(235).default,
                IRow: n(209).default,
                IContainer: n(237).default,
                IDropdownItem: n(598).default,
                IDropdownMenu: n(375).default,
                IDropdown: n(376).default,
                BlockSocialBlock: n(1692).default,
                ILayoutHeader: n(450).default
            })
        },
        1692: function(t, e, n) {
            "use strict";
            n.r(e);
            n(63), n(19);
            var o = n(10).a.extend({
                    props: {
                        location: {
                            required: !1,
                            type: String,
                            default: "header"
                        }
                    },
                    data: function() {
                        return {
                            socialProfiles: [{
                                name: "Medium Blog",
                                icon: "fa-medium-m",
                                url: "https://medium.com/matter-labs"
                            }, {
                                name: "Discord Community",
                                icon: "ri-discord-fill",
                                url: "https://join.zksync.dev/"
                            }, {
                                name: "Telegram Community",
                                icon: "fa-telegram-plane",
                                url: "https://t.me/zksync"
                            }, {
                                name: "Twitter Community",
                                icon: "bi-twitter",
                                url: "https://twitter.com/zksync"
                            }, {
                                name: "All Contacts",
                                icon: "ri-at-line",
                                url: "https://docs.zksync.io/contact.html",
                                hideIn: "footer"
                            }]
                        }
                    },
                    computed: {
                        socialNetworks: function() {
                            var t = this;
                            return this.socialProfiles.filter((function(e) {
                                return (null == e ? void 0 : e.hideIn) !== t.location
                            }))
                        }
                    }
                }),
                r = n(6),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "socialIcons"
                    }, t._l(t.socialNetworks, (function(t) {
                        return n("a", {
                            key: t.name,
                            staticClass: "socialItem",
                            attrs: {
                                href: t.url,
                                target: "_blank"
                            }
                        }, [n("v-icon", {
                            class: [t.icon],
                            attrs: {
                                name: t.icon
                            }
                        })], 1)
                    })), 0)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        517: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(10).a.extend({
                    name: "BlockLogo",
                    props: {
                        hideNetwork: {
                            default: !1,
                            type: Boolean,
                            required: !1
                        }
                    }
                }),
                r = n(6),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "_display-flex _flex-direction-row _align-items-center headerWrapper"
                    }, [n("svg", {
                        staticClass: "projectLogo _margin-right-1-2",
                        attrs: {
                            width: "124",
                            height: "24",
                            viewBox: "0 0 124 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M28.4373 0L40.4585 12L28.4373 24V17.5541H16.6028L28.4373 8.84609V0ZM29.1279 1.6651V9.19532L18.7065 16.8636H29.1279V22.3349L39.4811 12L29.1279 1.6651Z",
                            fill: "#4E5299"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M12.0414 0.000976562V6.44581H23.8466L12.0414 15.2316V23.9989L0 11.9999L12.0414 0.000976562ZM0.978336 11.9999L11.3508 22.3359V14.8847L21.7621 7.13638H11.3508V1.664L0.978336 11.9999Z",
                            fill: "#8B8CFB"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M56.583 9.55329V7.2251H48.2173V9.65194H53.0118L48.0989 15.1173V17.5836H56.6619V15.137H51.532L56.583 9.55329Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M68.362 7.22519H64.7119L61.1209 11.0726V2.33203H58.3192V17.5837H61.1209V14.8412L62.285 13.6179L65.0276 17.5837H68.4607L64.2186 11.5856L68.362 7.22519Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M76.5897 8.8826L74.4982 8.48799C73.4131 8.27095 72.8804 7.7185 72.8804 6.8109C72.8804 6.2979 73.0974 5.8441 73.5315 5.48895C73.9655 5.11407 74.5377 4.91677 75.2085 4.91677C76.057 4.91677 76.6883 5.1338 77.1224 5.56787C77.5565 6.00194 77.8327 6.4952 77.9314 7.02793L80.5358 6.21898C80.4371 5.76518 80.2793 5.31138 80.0425 4.89704C79.8255 4.4827 79.5098 4.06835 79.0955 3.67375C78.6811 3.25941 78.1484 2.94372 77.4775 2.70695C76.8067 2.47019 76.0372 2.35181 75.1888 2.35181C73.7485 2.35181 72.5252 2.80561 71.4992 3.69348C70.493 4.60108 69.98 5.70598 69.98 7.02793C69.98 8.13283 70.3351 9.06017 71.0257 9.80993C71.736 10.5597 72.683 11.0529 73.8866 11.3094L75.978 11.7238C76.5502 11.8422 77.004 12.0592 77.3 12.3749C77.6157 12.6906 77.7933 13.0457 77.7933 13.4995C77.7933 14.052 77.5762 14.486 77.1421 14.8215C76.7278 15.1569 76.1359 15.3345 75.3664 15.3345C74.3601 15.3345 73.5906 15.0582 73.0185 14.5255C72.466 13.9928 72.1701 13.322 72.0911 12.5327L69.3881 13.243C69.4473 13.7955 69.6051 14.3479 69.8419 14.8807C70.1181 15.3936 70.4732 15.9066 70.9468 16.3802C71.4006 16.834 72.0122 17.2089 72.7817 17.5048C73.5315 17.781 74.3996 17.9192 75.3269 17.9192C76.9646 17.9192 78.2668 17.4653 79.2533 16.5577C80.2398 15.6304 80.7331 14.5452 80.7331 13.322C80.7331 12.2368 80.3582 11.3094 79.6282 10.5005C78.9376 9.67182 77.9116 9.13909 76.5897 8.8826Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M86.4548 13.2824L83.6925 7.2251H80.5554L84.9553 16.2814L82.5087 21.6678H85.488L91.9991 7.2251H89.0001L86.4548 13.2824Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M98.7666 6.94897C98.155 6.94897 97.5828 7.08709 97.0304 7.34358C96.4779 7.61981 96.0636 7.99468 95.7676 8.50768V7.22519H93.0448V17.5837H95.8465V11.6251C95.8465 11.0134 96.0241 10.5005 96.3793 10.0861C96.7344 9.67177 97.2079 9.47447 97.7998 9.47447C98.4509 9.47447 98.9245 9.67177 99.2402 10.0467C99.5559 10.4215 99.7334 10.9148 99.7334 11.5462V17.5837H102.535V11.0529C102.535 9.84935 102.219 8.86282 101.568 8.11307C100.917 7.34358 99.9899 6.94897 98.7666 6.94897Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        staticClass: "logoLetter",
                        attrs: {
                            d: "M111.833 13.6492C111.695 14.1227 111.419 14.537 111.024 14.8922C110.629 15.2276 110.097 15.4052 109.446 15.4052C108.696 15.4052 108.064 15.1487 107.551 14.6357C107.038 14.103 106.802 13.3927 106.802 12.4851C106.802 11.5775 107.058 10.8869 107.551 10.3542C108.064 9.84119 108.676 9.5847 109.426 9.5847C110.61 9.5847 111.379 10.1766 111.715 11.3407L114.22 10.4923C113.984 9.5255 113.451 8.69682 112.602 8.02599C111.754 7.33542 110.689 7 109.367 7C107.847 7 106.565 7.513 105.539 8.55871C104.513 9.60443 104 10.9066 104 12.4851C104 14.0635 104.513 15.3657 105.559 16.4114C106.604 17.4572 107.907 17.9702 109.465 17.9702C110.748 17.9702 111.833 17.6347 112.662 16.9442C113.51 16.2536 114.043 15.4447 114.299 14.4779L111.833 13.6492Z",
                            fill: "#243955"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M113.801 5.92277V0.950684H114.788V5.92277H113.801Z",
                            fill: "#8B8CFB"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M115.814 1.89774V0.950684H116.84V1.89774H115.814ZM115.834 5.92277V2.41074H116.82V5.92277H115.834Z",
                            fill: "#8B8CFB"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M117.294 3.16085V2.39135H119.642V3.16085H117.294ZM117.905 5.92311V1.42456H118.892V5.92311H117.905Z",
                            fill: "#8B8CFB"
                        }
                    }), t._v(" "), n("path", {
                        attrs: {
                            d: "M121.832 6.0019C121.516 6.0019 121.24 5.94271 121.023 5.84405C120.806 5.7454 120.608 5.60729 120.47 5.42972C120.332 5.25214 120.233 5.07457 120.155 4.85753C120.095 4.6405 120.056 4.42346 120.056 4.1867C120.056 3.96966 120.095 3.7329 120.155 3.51586C120.214 3.29882 120.312 3.10152 120.451 2.92395C120.589 2.74637 120.766 2.60826 120.983 2.48987C121.2 2.39122 121.457 2.33203 121.772 2.33203C122.049 2.33203 122.285 2.37149 122.483 2.47015C122.68 2.5688 122.858 2.68718 122.996 2.86476C123.134 3.0226 123.233 3.2199 123.311 3.43694C123.371 3.65397 123.41 3.89074 123.41 4.16696C123.41 4.20642 123.41 4.26562 123.41 4.32481C123.41 4.384 123.41 4.44319 123.39 4.52212H121.042C121.062 4.73915 121.161 4.897 121.319 5.01538C121.477 5.11403 121.654 5.17322 121.891 5.17322C122.068 5.17322 122.246 5.13376 122.424 5.07457C122.601 5.01538 122.759 4.91673 122.877 4.81807L123.331 5.50864C123.154 5.62702 122.996 5.72568 122.838 5.8046C122.68 5.88352 122.542 5.94271 122.384 5.96244C122.207 5.98217 122.029 6.0019 121.832 6.0019ZM122.443 4.00912C122.443 3.96966 122.463 3.9302 122.463 3.89074C122.463 3.85128 122.483 3.81182 122.483 3.79209C122.483 3.69343 122.463 3.61451 122.424 3.53559C122.384 3.45667 122.345 3.39748 122.285 3.33829C122.226 3.2791 122.147 3.23963 122.068 3.20017C121.989 3.16071 121.891 3.16071 121.792 3.16071C121.634 3.16071 121.496 3.20017 121.378 3.25937C121.279 3.31856 121.181 3.39748 121.141 3.49613C121.082 3.59478 121.042 3.69343 121.042 3.79209H122.798L122.443 4.00912Z",
                            fill: "#8B8CFB"
                        }
                    })]), t._v(" "), t.hideNetwork ? t._e() : n("block-network-badge")], 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                BlockNetworkBadge: n(1686).default
            })
        },
        711: function(t, e, n) {}
    }
]);