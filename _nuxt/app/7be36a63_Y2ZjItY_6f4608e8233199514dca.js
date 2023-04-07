/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [87], {
        1132: function(n, t, e) {
            "use strict";
            e(115), e(285);
            var r = e(833);
            e.o(r, "payloadId") && e.d(t, "payloadId", (function() {
                return r.payloadId
            }));
            var o = e(834);
            e.d(t, "payloadId", (function() {
                return o.a
            }));
            e(835), e(836), e(841), e(842)
        },
        1135: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, "generateKey", (function() {
                return l
            })), e.d(t, "verifyHmac", (function() {
                return f
            })), e.d(t, "encrypt", (function() {
                return d
            })), e.d(t, "decrypt", (function() {
                return h
            }));
            var r = e(334),
                o = e(26),
                c = e(24);
            async function l(n) {
                const t = (n || 256) / 8,
                    e = r.randomBytes(t);
                return Object(c.d)(o.b(e))
            }
            async function f(n, t) {
                const e = o.n(n.data),
                    c = o.n(n.iv),
                    l = o.n(n.hmac),
                    f = o.c(l, !1),
                    d = o.j(e, c),
                    h = await r.hmacSha256Sign(t, d),
                    m = o.c(h, !1);
                return o.x(f) === o.x(m)
            }
            async function d(data, n, t) {
                const e = o.f(Object(c.b)(n)),
                    f = t || await l(128),
                    d = o.f(Object(c.b)(f)),
                    h = o.c(d, !1),
                    m = JSON.stringify(data),
                    content = o.z(m),
                    _ = await r.aesCbcEncrypt(d, e, content),
                    w = o.c(_, !1),
                    v = o.j(_, d),
                    y = await r.hmacSha256Sign(e, v);
                return {
                    data: w,
                    hmac: o.c(y, !1),
                    iv: h
                }
            }
            async function h(n, t) {
                const e = o.f(Object(c.b)(t));
                if (!e) throw new Error("Missing key: required for decryption");
                if (!await f(n, e)) return null;
                const l = o.n(n.data),
                    d = o.n(n.iv),
                    h = await r.aesCbcDecrypt(d, e, l),
                    m = o.e(h);
                let data;
                try {
                    data = JSON.parse(m)
                } catch (n) {
                    return null
                }
                return data
            }
        },
        1136: function(n, t, e) {
            (function(t) {
                function r(n) {
                    return n && "object" == typeof n && "default" in n ? n.default : n
                }
                var o = e(595),
                    c = r(e(1525)),
                    l = r(e(1219)),
                    f = e(1227);
                "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
                var d = "walletconnect-wrapper",
                    h = "walletconnect-style-sheet",
                    m = "walletconnect-qrcode-modal",
                    _ = "walletconnect-qrcode-text";

                function w(n) {
                    return f.createElement("div", {
                        className: "walletconnect-modal__header"
                    }, f.createElement("img", {
                        src: "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
                        className: "walletconnect-modal__headerLogo"
                    }), f.createElement("p", null, "WalletConnect"), f.createElement("div", {
                        className: "walletconnect-modal__close__wrapper",
                        onClick: n.onClose
                    }, f.createElement("div", {
                        id: "walletconnect-qrcode-close",
                        className: "walletconnect-modal__close__icon"
                    }, f.createElement("div", {
                        className: "walletconnect-modal__close__line1"
                    }), f.createElement("div", {
                        className: "walletconnect-modal__close__line2"
                    }))))
                }

                function v(n) {
                    return f.createElement("a", {
                        className: "walletconnect-connect__button",
                        href: n.href,
                        id: "walletconnect-connect-button-" + n.name,
                        onClick: n.onClick,
                        rel: "noopener noreferrer",
                        style: {
                            backgroundColor: n.color
                        },
                        target: "_blank"
                    }, n.name)
                }

                function y(n) {
                    var t = n.color,
                        e = n.href,
                        r = n.name,
                        o = n.logo,
                        c = n.onClick;
                    return f.createElement("a", {
                        className: "walletconnect-modal__base__row",
                        href: e,
                        onClick: c,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, f.createElement("h3", {
                        className: "walletconnect-modal__base__row__h3"
                    }, r), f.createElement("div", {
                        className: "walletconnect-modal__base__row__right"
                    }, f.createElement("div", {
                        className: "walletconnect-modal__base__row__right__app-icon",
                        style: {
                            background: "url('" + o + "') " + t,
                            backgroundSize: "100%"
                        }
                    }), f.createElement("img", {
                        src: "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E",
                        className: "walletconnect-modal__base__row__right__caret"
                    })))
                }

                function x(n) {
                    var t = n.color,
                        e = n.href,
                        r = n.name,
                        o = n.logo,
                        c = n.onClick,
                        l = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                    return f.createElement("a", {
                        className: "walletconnect-connect__button__icon_anchor",
                        href: e,
                        onClick: c,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, f.createElement("div", {
                        className: "walletconnect-connect__button__icon",
                        style: {
                            background: "url('" + o + "') " + t,
                            backgroundSize: "100%"
                        }
                    }), f.createElement("div", {
                        style: {
                            fontSize: l
                        },
                        className: "walletconnect-connect__button__text"
                    }, r))
                }

                function E(n) {
                    var t = o.isAndroid(),
                        e = f.useState(""),
                        input = e[0],
                        r = e[1],
                        c = f.useState(""),
                        filter = c[0],
                        l = c[1],
                        d = f.useState(1),
                        h = d[0],
                        m = d[1],
                        w = filter ? n.links.filter((function(link) {
                            return link.name.toLowerCase().includes(filter.toLowerCase())
                        })) : n.links,
                        E = n.errorMessage,
                        C = filter || w.length > 5,
                        A = Math.ceil(w.length / 12),
                        S = [12 * (h - 1) + 1, 12 * h],
                        R = w.length ? w.filter((function(n, t) {
                            return t + 1 >= S[0] && t + 1 <= S[1]
                        })) : [],
                        P = !(t || !(A > 1)),
                        B = void 0;
                    return f.createElement("div", null, f.createElement("p", {
                        id: _,
                        className: "walletconnect-qrcode__text"
                    }, t ? n.text.connect_mobile_wallet : n.text.choose_preferred_wallet), !t && f.createElement("input", {
                        className: "walletconnect-search__input",
                        placeholder: "Search",
                        value: input,
                        onChange: function(n) {
                            r(n.target.value), clearTimeout(B), n.target.value ? B = setTimeout((function() {
                                l(n.target.value), m(1)
                            }), 1e3) : (r(""), l(""), m(1))
                        }
                    }), f.createElement("div", {
                        className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : C && w.length ? "__wrap" : "")
                    }, t ? f.createElement(v, {
                        name: n.text.connect,
                        color: "rgb(64, 153, 255)",
                        href: n.uri,
                        onClick: f.useCallback((function() {
                            o.saveMobileLinkInfo({
                                name: "Unknown",
                                href: n.uri
                            })
                        }), [])
                    }) : R.length ? R.map((function(t) {
                        var e = t.color,
                            r = t.name,
                            c = t.shortName,
                            l = t.logo,
                            d = o.formatIOSMobile(n.uri, t),
                            h = f.useCallback((function() {
                                o.saveMobileLinkInfo({
                                    name: r,
                                    href: d
                                })
                            }), [R]);
                        return C ? f.createElement(x, {
                            color: e,
                            href: d,
                            name: c || r,
                            logo: l,
                            onClick: h
                        }) : f.createElement(y, {
                            color: e,
                            href: d,
                            name: r,
                            logo: l,
                            onClick: h
                        })
                    })) : f.createElement(f.Fragment, null, f.createElement("p", null, E.length ? n.errorMessage : n.links.length && !w.length ? n.text.no_wallets_found : n.text.loading))), P && f.createElement("div", {
                        className: "walletconnect-modal__footer"
                    }, Array(A).fill(0).map((function(n, t) {
                        var e = t + 1,
                            r = h === e;
                        return f.createElement("a", {
                            style: {
                                margin: "auto 10px",
                                fontWeight: r ? "bold" : "normal"
                            },
                            onClick: function() {
                                return m(e)
                            }
                        }, e)
                    }))))
                }

                function C(n) {
                    var t = !!n.message.trim();
                    return f.createElement("div", {
                        className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
                    }, n.message)
                }

                function A(n) {
                    var t = f.useState(""),
                        e = t[0],
                        r = t[1],
                        o = f.useState(""),
                        svg = o[0],
                        d = o[1];
                    f.useEffect((function() {
                        try {
                            return Promise.resolve(function(data) {
                                try {
                                    var n = "";
                                    return Promise.resolve(c.toString(data, {
                                        margin: 0,
                                        type: "svg"
                                    })).then((function(t) {
                                        return "string" == typeof t && (n = t.replace("<svg", '<svg class="walletconnect-qrcode__image"')), n
                                    }))
                                } catch (n) {
                                    return Promise.reject(n)
                                }
                            }(n.uri)).then((function(n) {
                                d(n)
                            }))
                        } catch (n) {
                            Promise.reject(n)
                        }
                    }), []);
                    return f.createElement("div", null, f.createElement("p", {
                        id: _,
                        className: "walletconnect-qrcode__text"
                    }, n.text.scan_qrcode_with_wallet), f.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: svg
                        }
                    }), f.createElement("div", {
                        className: "walletconnect-modal__footer"
                    }, f.createElement("a", {
                        onClick: function() {
                            l(n.uri) ? (r(n.text.copied_to_clipboard), setInterval((function() {
                                return r("")
                            }), 1200)) : (r("Error"), setInterval((function() {
                                return r("")
                            }), 1200))
                        }
                    }, n.text.copy_to_clipboard)), f.createElement(C, {
                        message: e
                    }))
                }

                function S(n) {
                    var t = o.isAndroid(),
                        e = o.isMobile(),
                        r = e ? n.qrcodeModalOptions && n.qrcodeModalOptions.mobileLinks ? n.qrcodeModalOptions.mobileLinks : void 0 : n.qrcodeModalOptions && n.qrcodeModalOptions.desktopLinks ? n.qrcodeModalOptions.desktopLinks : void 0,
                        c = f.useState(!1),
                        l = c[0],
                        d = c[1],
                        h = f.useState(!1),
                        _ = h[0],
                        v = h[1],
                        y = f.useState(!e),
                        x = y[0],
                        C = y[1],
                        S = {
                            mobile: e,
                            text: n.text,
                            uri: n.uri,
                            qrcodeModalOptions: n.qrcodeModalOptions
                        },
                        R = f.useState(""),
                        P = R[0],
                        B = R[1],
                        T = f.useState(!1),
                        k = T[0],
                        M = T[1],
                        N = f.useState([]),
                        I = N[0],
                        O = N[1],
                        L = f.useState(""),
                        j = L[0],
                        z = L[1],
                        U = function() {
                            _ || l || r && !r.length || I.length > 0 || f.useEffect((function() {
                                ! function() {
                                    try {
                                        if (t) return Promise.resolve();
                                        d(!0);
                                        var c = function(body, n) {
                                            try {
                                                var t = body()
                                            } catch (t) {
                                                return n(t)
                                            }
                                            return t && t.then ? t.then(void 0, n) : t
                                        }((function() {
                                            var t = n.qrcodeModalOptions && n.qrcodeModalOptions.registryUrl ? n.qrcodeModalOptions.registryUrl : o.getWalletRegistryUrl();
                                            return Promise.resolve(fetch(t)).then((function(t) {
                                                return Promise.resolve(t.json()).then((function(t) {
                                                    var c = t.listings,
                                                        l = e ? "mobile" : "desktop",
                                                        f = o.getMobileLinkRegistry(o.formatMobileRegistry(c, l), r);
                                                    d(!1), v(!0), z(f.length ? "" : n.text.no_supported_wallets), O(f);
                                                    var h = 1 === f.length;
                                                    h && (B(o.formatIOSMobile(n.uri, f[0])), C(!0)), M(h)
                                                }))
                                            }))
                                        }), (function(t) {
                                            d(!1), v(!0), z(n.text.something_went_wrong), console.error(t)
                                        }));
                                        Promise.resolve(c && c.then ? c.then((function() {})) : void 0)
                                    } catch (n) {
                                        return Promise.reject(n)
                                    }
                                }()
                            }))
                        };
                    U();
                    var D = e ? x : !x;
                    return f.createElement("div", {
                        id: m,
                        className: "walletconnect-qrcode__base animated fadeIn"
                    }, f.createElement("div", {
                        className: "walletconnect-modal__base"
                    }, f.createElement(w, {
                        onClose: n.onClose
                    }), k && x ? f.createElement("div", {
                        className: "walletconnect-modal__single_wallet"
                    }, f.createElement("a", {
                        onClick: function() {
                            return o.saveMobileLinkInfo({
                                name: I[0].name,
                                href: P
                            })
                        },
                        href: P,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, n.text.connect_with + " " + (k ? I[0].name : "") + " ›")) : t || l || !l && I.length ? f.createElement("div", {
                        className: "walletconnect-modal__mobile__toggle" + (D ? " right__selected" : "")
                    }, f.createElement("div", {
                        className: "walletconnect-modal__mobile__toggle_selector"
                    }), e ? f.createElement(f.Fragment, null, f.createElement("a", {
                        onClick: function() {
                            return C(!1), U()
                        }
                    }, n.text.mobile), f.createElement("a", {
                        onClick: function() {
                            return C(!0)
                        }
                    }, n.text.qrcode)) : f.createElement(f.Fragment, null, f.createElement("a", {
                        onClick: function() {
                            return C(!0)
                        }
                    }, n.text.qrcode), f.createElement("a", {
                        onClick: function() {
                            return C(!1), U()
                        }
                    }, n.text.desktop))) : null, f.createElement("div", null, x || !t && !l && !I.length ? f.createElement(A, Object.assign({}, S)) : f.createElement(E, Object.assign({}, S, {
                        links: I,
                        errorMessage: j
                    })))))
                }
                var R = {
                    de: {
                        choose_preferred_wallet: "Wähle bevorzugte Wallet",
                        connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                        scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                        connect: "Verbinden",
                        qrcode: "QR-Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "In die Zwischenablage kopieren",
                        copied_to_clipboard: "In die Zwischenablage kopiert!",
                        connect_with: "Verbinden mit Hilfe von",
                        loading: "Laden...",
                        something_went_wrong: "Etwas ist schief gelaufen",
                        no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
                        no_wallets_found: "keine Wallet gefunden"
                    },
                    en: {
                        choose_preferred_wallet: "Choose your preferred wallet",
                        connect_mobile_wallet: "Connect to Mobile Wallet",
                        scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                        connect: "Connect",
                        qrcode: "QR Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copy to clipboard",
                        copied_to_clipboard: "Copied to clipboard!",
                        connect_with: "Connect with",
                        loading: "Loading...",
                        something_went_wrong: "Something went wrong",
                        no_supported_wallets: "There are no supported wallets yet",
                        no_wallets_found: "No wallets found"
                    },
                    es: {
                        choose_preferred_wallet: "Elige tu billetera preferida",
                        connect_mobile_wallet: "Conectar a billetera móvil",
                        scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
                        connect: "Conectar",
                        qrcode: "Código QR",
                        mobile: "Móvil",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copiar",
                        copied_to_clipboard: "Copiado!",
                        connect_with: "Conectar mediante",
                        loading: "Cargando...",
                        something_went_wrong: "Algo salió mal",
                        no_supported_wallets: "Todavía no hay billeteras compatibles",
                        no_wallets_found: "No se encontraron billeteras"
                    },
                    fr: {
                        choose_preferred_wallet: "Choisissez votre portefeuille préféré",
                        connect_mobile_wallet: "Se connecter au portefeuille mobile",
                        scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                        connect: "Se connecter",
                        qrcode: "QR Code",
                        mobile: "Mobile",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copier",
                        copied_to_clipboard: "Copié!",
                        connect_with: "Connectez-vous à l'aide de",
                        loading: "Chargement...",
                        something_went_wrong: "Quelque chose a mal tourné",
                        no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                        no_wallets_found: "Aucun portefeuille trouvé"
                    },
                    ko: {
                        choose_preferred_wallet: "원하는 지갑을 선택하세요",
                        connect_mobile_wallet: "모바일 지갑과 연결",
                        scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
                        connect: "연결",
                        qrcode: "QR 코드",
                        mobile: "모바일",
                        desktop: "데스크탑",
                        copy_to_clipboard: "클립보드에 복사",
                        copied_to_clipboard: "클립보드에 복사되었습니다!",
                        connect_with: "와 연결하다",
                        loading: "로드 중...",
                        something_went_wrong: "문제가 발생했습니다.",
                        no_supported_wallets: "아직 지원되는 지갑이 없습니다",
                        no_wallets_found: "지갑을 찾을 수 없습니다"
                    },
                    pt: {
                        choose_preferred_wallet: "Escolha sua carteira preferida",
                        connect_mobile_wallet: "Conectar-se à carteira móvel",
                        scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
                        connect: "Conectar",
                        qrcode: "Código QR",
                        mobile: "Móvel",
                        desktop: "Desktop",
                        copy_to_clipboard: "Copiar",
                        copied_to_clipboard: "Copiado!",
                        connect_with: "Ligar por meio de",
                        loading: "Carregamento...",
                        something_went_wrong: "Algo correu mal",
                        no_supported_wallets: "Ainda não há carteiras suportadas",
                        no_wallets_found: "Nenhuma carteira encontrada"
                    },
                    zh: {
                        choose_preferred_wallet: "选择你的钱包",
                        connect_mobile_wallet: "连接至移动端钱包",
                        scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
                        connect: "连接",
                        qrcode: "二维码",
                        mobile: "移动",
                        desktop: "桌面",
                        copy_to_clipboard: "复制到剪贴板",
                        copied_to_clipboard: "复制到剪贴板成功！",
                        connect_with: "通过以下方式连接",
                        loading: "正在加载...",
                        something_went_wrong: "出了问题",
                        no_supported_wallets: "目前还没有支持的钱包",
                        no_wallets_found: "没有找到钱包"
                    },
                    fa: {
                        choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
                        connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
                        scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
                        connect: "اتصال",
                        qrcode: "کد QR",
                        mobile: "سیار",
                        desktop: "دسکتاپ",
                        copy_to_clipboard: "کپی به کلیپ بورد",
                        copied_to_clipboard: "در کلیپ بورد کپی شد!",
                        connect_with: "ارتباط با",
                        loading: "...بارگذاری",
                        something_went_wrong: "مشکلی پیش آمد",
                        no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
                        no_wallets_found: "هیچ کیف پولی پیدا نشد"
                    }
                };

                function P() {
                    var n = o.getDocumentOrThrow(),
                        t = n.getElementById(m);
                    t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
                        var t = n.getElementById(d);
                        t && n.body.removeChild(t)
                    }), 300))
                }

                function B(n) {
                    return function() {
                        P(), n && n()
                    }
                }

                function T(n, t, e) {
                    ! function() {
                        var n = o.getDocumentOrThrow(),
                            t = n.getElementById(h);
                        t && n.head.removeChild(t);
                        var style = n.createElement("style");
                        style.setAttribute("id", h), style.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', n.head.appendChild(style)
                    }();
                    var r, c = function() {
                        var n = o.getDocumentOrThrow(),
                            t = n.createElement("div");
                        return t.setAttribute("id", d), n.body.appendChild(t), t
                    }();
                    f.render(f.createElement(S, {
                        text: (r = o.getNavigatorOrThrow().language.split("-")[0] || "en", R[r] || R.en),
                        uri: n,
                        onClose: B(t),
                        qrcodeModalOptions: e
                    }), c)
                }
                var k = function() {
                    return void 0 !== t && void 0 !== t.versions && void 0 !== t.versions.node
                };
                var M = {
                    open: function(n, t, e) {
                        console.log(n), k() ? function(n) {
                            c.toString(n, {
                                type: "terminal"
                            }).then(console.log)
                        }(n) : T(n, t, e)
                    },
                    close: function() {
                        k() || P()
                    }
                };
                n.exports = M
            }).call(this, e(67))
        },
        1137: function(n, t, e) {
            "use strict";
            var r = e(364),
                o = e.n(r),
                c = e(1138),
                l = e(24);
            const f = Object(l.j)("XMLHttpRequest") || c.XMLHttpRequest;
            class d extends o.a {
                constructor(n) {
                    super(), this.url = n
                }
                formatError(n, t, code = -1) {
                    return {
                        error: {
                            message: t,
                            code: code
                        },
                        id: n.id,
                        jsonrpc: n.jsonrpc
                    }
                }
                send(n, t) {
                    return new Promise((e => {
                        if ("eth_subscribe" === n.method) {
                            const t = this.formatError(n, "Subscriptions are not supported by this HTTP endpoint");
                            return this.emit("error", t), e(t)
                        }
                        const r = new f;
                        let o = !1;
                        const c = (c, l) => {
                            if (!o)
                                if (r.abort(), o = !0, t) t(c, l);
                                else {
                                    const {
                                        id: t,
                                        jsonrpc: r
                                    } = n, o = c ? {
                                        id: t,
                                        jsonrpc: r,
                                        error: {
                                            message: c.message,
                                            code: c.code
                                        }
                                    } : {
                                        id: t,
                                        jsonrpc: r,
                                        result: l
                                    };
                                    this.emit("payload", o), e(o)
                                }
                        };
                        r.open("POST", this.url, !0), r.setRequestHeader("Content-Type", "application/json"), r.timeout = 6e4, r.onerror = c, r.ontimeout = c, r.onreadystatechange = () => {
                            if (4 === r.readyState) try {
                                const n = JSON.parse(r.responseText);
                                c(n.error, n.result)
                            } catch (n) {
                                c(n)
                            }
                        }, r.send(JSON.stringify(n))
                    }))
                }
            }
            t.a = d
        },
        115: function(n, t, e) {
            "use strict";
            e.d(t, "b", (function() {
                return r
            })), e.d(t, "d", (function() {
                return o
            })), e.d(t, "c", (function() {
                return c
            })), e.d(t, "e", (function() {
                return l
            })), e.d(t, "f", (function() {
                return f
            })), e.d(t, "a", (function() {
                return d
            }));
            const r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                c = [-32700, -32600, -32601, -32602, -32603],
                l = [-32e3, -32099],
                f = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                d = o
        },
        1516: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, "__extends", (function() {
                return o
            })), e.d(t, "__assign", (function() {
                return c
            })), e.d(t, "__rest", (function() {
                return l
            })), e.d(t, "__decorate", (function() {
                return f
            })), e.d(t, "__param", (function() {
                return d
            })), e.d(t, "__metadata", (function() {
                return h
            })), e.d(t, "__awaiter", (function() {
                return m
            })), e.d(t, "__generator", (function() {
                return _
            })), e.d(t, "__createBinding", (function() {
                return w
            })), e.d(t, "__exportStar", (function() {
                return v
            })), e.d(t, "__values", (function() {
                return y
            })), e.d(t, "__read", (function() {
                return x
            })), e.d(t, "__spread", (function() {
                return E
            })), e.d(t, "__spreadArrays", (function() {
                return C
            })), e.d(t, "__await", (function() {
                return A
            })), e.d(t, "__asyncGenerator", (function() {
                return S
            })), e.d(t, "__asyncDelegator", (function() {
                return R
            })), e.d(t, "__asyncValues", (function() {
                return P
            })), e.d(t, "__makeTemplateObject", (function() {
                return B
            })), e.d(t, "__importStar", (function() {
                return T
            })), e.d(t, "__importDefault", (function() {
                return k
            })), e.d(t, "__classPrivateFieldGet", (function() {
                return M
            })), e.d(t, "__classPrivateFieldSet", (function() {
                return N
            }));
            var r = function(n, b) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(n, b) {
                    n.__proto__ = b
                } || function(n, b) {
                    for (var p in b) b.hasOwnProperty(p) && (n[p] = b[p])
                }, r(n, b)
            };

            function o(n, b) {
                function t() {
                    this.constructor = n
                }
                r(n, b), n.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
            }
            var c = function() {
                return c = Object.assign || function(n) {
                    for (var s, i = 1, t = arguments.length; i < t; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (n[p] = s[p]);
                    return n
                }, c.apply(this, arguments)
            };

            function l(s, n) {
                var t = {};
                for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && n.indexOf(p) < 0 && (t[p] = s[p]);
                if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) n.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]])
                }
                return t
            }

            function f(n, t, e, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, e) : desc;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(n, t, e, desc);
                else
                    for (var i = n.length - 1; i >= 0; i--)(r = n[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, e, c) : r(t, e)) || c);
                return o > 3 && c && Object.defineProperty(t, e, c), c
            }

            function d(n, t) {
                return function(e, r) {
                    t(e, r, n)
                }
            }

            function h(n, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(n, t)
            }

            function m(n, t, e, r) {
                return new(e || (e = Promise))((function(o, c) {
                    function l(n) {
                        try {
                            d(r.next(n))
                        } catch (n) {
                            c(n)
                        }
                    }

                    function f(n) {
                        try {
                            d(r.throw(n))
                        } catch (n) {
                            c(n)
                        }
                    }

                    function d(n) {
                        var t;
                        n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
                            n(t)
                        }))).then(l, f)
                    }
                    d((r = r.apply(n, t || [])).next())
                }))
            }

            function _(n, body) {
                var t, e, r, g, o = {
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
                    return function(l) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, e && (r = 2 & c[0] ? e.return : c[0] ? e.throw || ((r = e.return) && r.call(e), 0) : e.next) && !(r = r.call(e, c[1])).done) return r;
                                switch (e = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        r = c;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, e = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                            o.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && o.label < r[1]) {
                                            o.label = r[1], r = c;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(c);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                c = body.call(n, o)
                            } catch (n) {
                                c = [6, n], e = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, l])
                    }
                }
            }

            function w(n, t, e, r) {
                void 0 === r && (r = e), n[r] = t[e]
            }

            function v(n, t) {
                for (var p in n) "default" === p || t.hasOwnProperty(p) || (t[p] = n[p])
            }

            function y(n) {
                var s = "function" == typeof Symbol && Symbol.iterator,
                    t = s && n[s],
                    i = 0;
                if (t) return t.call(n);
                if (n && "number" == typeof n.length) return {
                    next: function() {
                        return n && i >= n.length && (n = void 0), {
                            value: n && n[i++],
                            done: !n
                        }
                    }
                };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function x(n, t) {
                var e = "function" == typeof Symbol && n[Symbol.iterator];
                if (!e) return n;
                var r, o, i = e.call(n),
                    c = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) c.push(r.value)
                } catch (n) {
                    o = {
                        error: n
                    }
                } finally {
                    try {
                        r && !r.done && (e = i.return) && e.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function E() {
                for (var n = [], i = 0; i < arguments.length; i++) n = n.concat(x(arguments[i]));
                return n
            }

            function C() {
                for (var s = 0, i = 0, n = arguments.length; i < n; i++) s += arguments[i].length;
                var t = Array(s),
                    e = 0;
                for (i = 0; i < n; i++)
                    for (var a = arguments[i], r = 0, o = a.length; r < o; r++, e++) t[e] = a[r];
                return t
            }

            function A(n) {
                return this instanceof A ? (this.v = n, this) : new A(n)
            }

            function S(n, t, e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i, g = e.apply(n, t || []),
                    q = [];
                return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function r(n) {
                    g[n] && (i[n] = function(t) {
                        return new Promise((function(a, b) {
                            q.push([n, t, a, b]) > 1 || o(n, t)
                        }))
                    })
                }

                function o(n, t) {
                    try {
                        (e = g[n](t)).value instanceof A ? Promise.resolve(e.value.v).then(c, l) : f(q[0][2], e)
                    } catch (n) {
                        f(q[0][3], n)
                    }
                    var e
                }

                function c(n) {
                    o("next", n)
                }

                function l(n) {
                    o("throw", n)
                }

                function f(n, t) {
                    n(t), q.shift(), q.length && o(q[0][0], q[0][1])
                }
            }

            function R(n) {
                var i, p;
                return i = {}, t("next"), t("throw", (function(n) {
                    throw n
                })), t("return"), i[Symbol.iterator] = function() {
                    return this
                }, i;

                function t(t, e) {
                    i[t] = n[t] ? function(r) {
                        return (p = !p) ? {
                            value: A(n[t](r)),
                            done: "return" === t
                        } : e ? e(r) : r
                    } : e
                }
            }

            function P(n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i, t = n[Symbol.asyncIterator];
                return t ? t.call(n) : (n = y(n), i = {}, e("next"), e("throw"), e("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i);

                function e(t) {
                    i[t] = n[t] && function(e) {
                        return new Promise((function(r, o) {
                            (function(n, t, e, r) {
                                Promise.resolve(r).then((function(t) {
                                    n({
                                        value: t,
                                        done: e
                                    })
                                }), t)
                            })(r, o, (e = n[t](e)).done, e.value)
                        }))
                    }
                }
            }

            function B(n, t) {
                return Object.defineProperty ? Object.defineProperty(n, "raw", {
                    value: t
                }) : n.raw = t, n
            }

            function T(n) {
                if (n && n.__esModule) return n;
                var t = {};
                if (null != n)
                    for (var e in n) Object.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                return t.default = n, t
            }

            function k(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function M(n, t) {
                if (!t.has(n)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(n)
            }

            function N(n, t, e) {
                if (!t.has(n)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(n, e), e
            }
        },
        1517: function(n, t, e) {
            "use strict";
            (function(n) {
                function e() {
                    return (null == n ? void 0 : n.crypto) || (null == n ? void 0 : n.msCrypto) || {}
                }

                function r() {
                    const n = e();
                    return n.subtle || n.webkitSubtle
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = e, t.getSubtleCrypto = r, t.isBrowserCryptoAvailable = function() {
                    return !!e() && !!r()
                }
            }).call(this, e(36))
        },
        1518: function(n, t, e) {
            "use strict";
            (function(n) {
                function e() {
                    return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
                }

                function r() {
                    return void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = e, t.isNode = r, t.isBrowser = function() {
                    return !e() && !r()
                }
            }).call(this, e(67))
        },
        1523: function(n, t, e) {
            "use strict";
            (function(n) {
                function e() {
                    return (null == n ? void 0 : n.crypto) || (null == n ? void 0 : n.msCrypto) || {}
                }

                function r() {
                    const n = e();
                    return n.subtle || n.webkitSubtle
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = e, t.getSubtleCrypto = r, t.isBrowserCryptoAvailable = function() {
                    return !!e() && !!r()
                }
            }).call(this, e(36))
        },
        1524: function(n, t, e) {
            "use strict";
            (function(n) {
                function e() {
                    return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
                }

                function r() {
                    return void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = e, t.isNode = r, t.isBrowser = function() {
                    return !e() && !r()
                }
            }).call(this, e(67))
        },
        1525: function(n, t, e) {
            var r = e(1526),
                o = e(1527),
                c = e(1543),
                l = e(1544);

            function f(n, canvas, text, t, e) {
                var c = [].slice.call(arguments, 1),
                    l = c.length,
                    f = "function" == typeof c[l - 1];
                if (!f && !r()) throw new Error("Callback required as last argument");
                if (!f) {
                    if (l < 1) throw new Error("Too few arguments provided");
                    return 1 === l ? (text = canvas, canvas = t = void 0) : 2 !== l || canvas.getContext || (t = text, text = canvas, canvas = void 0), new Promise((function(e, r) {
                        try {
                            var data = o.create(text, t);
                            e(n(data, canvas, t))
                        } catch (n) {
                            r(n)
                        }
                    }))
                }
                if (l < 2) throw new Error("Too few arguments provided");
                2 === l ? (e = text, text = canvas, canvas = t = void 0) : 3 === l && (canvas.getContext && void 0 === e ? (e = t, t = void 0) : (e = t, t = text, text = canvas, canvas = void 0));
                try {
                    var data = o.create(text, t);
                    e(null, n(data, canvas, t))
                } catch (n) {
                    e(n)
                }
            }
            t.create = o.create, t.toCanvas = f.bind(null, c.render), t.toDataURL = f.bind(null, c.renderToDataURL), t.toString = f.bind(null, (function(data, n, t) {
                return l.render(data, t)
            }))
        },
        1526: function(n, t) {
            n.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        1527: function(n, t, e) {
            var r = e(311),
                o = e(271),
                c = e(577),
                l = e(1528),
                f = e(1529),
                d = e(1530),
                h = e(1531),
                m = e(1532),
                _ = e(851),
                w = e(1533),
                v = e(1536),
                y = e(1537),
                x = e(272),
                E = e(1538),
                C = e(576);

            function A(n, t, e) {
                var i, r, o = n.size,
                    c = y.getEncodedBits(t, e);
                for (i = 0; i < 15; i++) r = 1 == (c >> i & 1), i < 6 ? n.set(i, 8, r, !0) : i < 8 ? n.set(i + 1, 8, r, !0) : n.set(o - 15 + i, 8, r, !0), i < 8 ? n.set(8, o - i - 1, r, !0) : i < 9 ? n.set(8, 15 - i - 1 + 1, r, !0) : n.set(8, 15 - i - 1, r, !0);
                n.set(o - 8, 8, 1, !0)
            }

            function S(n, t, e) {
                var c = new l;
                e.forEach((function(data) {
                    c.put(data.mode.bit, 4), c.put(data.getLength(), x.getCharCountIndicator(data.mode, n)), data.write(c)
                }));
                var f = 8 * (o.getSymbolTotalCodewords(n) - _.getTotalCodewordsCount(n, t));
                for (c.getLengthInBits() + 4 <= f && c.put(0, 4); c.getLengthInBits() % 8 != 0;) c.putBit(0);
                for (var d = (f - c.getLengthInBits()) / 8, i = 0; i < d; i++) c.put(i % 2 ? 17 : 236, 8);
                return function(n, t, e) {
                    for (var c = o.getSymbolTotalCodewords(t), l = _.getTotalCodewordsCount(t, e), f = c - l, d = _.getBlocksCount(t, e), h = d - c % d, m = Math.floor(c / d), v = Math.floor(f / d), y = v + 1, x = m - v, E = new w(x), C = 0, A = new Array(d), S = new Array(d), R = 0, P = r.from(n.buffer), b = 0; b < d; b++) {
                        var B = b < h ? v : y;
                        A[b] = P.slice(C, C + B), S[b] = E.encode(A[b]), C += B, R = Math.max(R, B)
                    }
                    var i, T, data = r.alloc(c),
                        k = 0;
                    for (i = 0; i < R; i++)
                        for (T = 0; T < d; T++) i < A[T].length && (data[k++] = A[T][i]);
                    for (i = 0; i < x; i++)
                        for (T = 0; T < d; T++) data[k++] = S[T][i];
                    return data
                }(c, n, t)
            }

            function R(data, n, t, e) {
                var r;
                if (C(data)) r = E.fromArray(data);
                else {
                    if ("string" != typeof data) throw new Error("Invalid data");
                    var c = n;
                    if (!c) {
                        var l = E.rawSplit(data);
                        c = v.getBestVersionForData(l, t)
                    }
                    r = E.fromString(data, c || 40)
                }
                var _ = v.getBestVersionForData(r, t);
                if (!_) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (n) {
                    if (n < _) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + _ + ".\n")
                } else n = _;
                var w = S(n, t, r),
                    y = o.getSymbolSize(n),
                    x = new f(y);
                return function(n, t) {
                        for (var e = n.size, r = h.getPositions(t), i = 0; i < r.length; i++)
                            for (var o = r[i][0], col = r[i][1], c = -1; c <= 7; c++)
                                if (!(o + c <= -1 || e <= o + c))
                                    for (var l = -1; l <= 7; l++) col + l <= -1 || e <= col + l || (c >= 0 && c <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === c || 6 === c) || c >= 2 && c <= 4 && l >= 2 && l <= 4 ? n.set(o + c, col + l, !0, !0) : n.set(o + c, col + l, !1, !0))
                    }(x, n),
                    function(n) {
                        for (var t = n.size, e = 8; e < t - 8; e++) {
                            var r = e % 2 == 0;
                            n.set(e, 6, r, !0), n.set(6, e, r, !0)
                        }
                    }(x),
                    function(n, t) {
                        for (var e = d.getPositions(t), i = 0; i < e.length; i++)
                            for (var r = e[i][0], col = e[i][1], o = -2; o <= 2; o++)
                                for (var c = -2; c <= 2; c++) - 2 === o || 2 === o || -2 === c || 2 === c || 0 === o && 0 === c ? n.set(r + o, col + c, !0, !0) : n.set(r + o, col + c, !1, !0)
                    }(x, n), A(x, t, 0), n >= 7 && function(n, t) {
                        for (var e, col, r, o = n.size, c = v.getEncodedBits(t), i = 0; i < 18; i++) e = Math.floor(i / 3), col = i % 3 + o - 8 - 3, r = 1 == (c >> i & 1), n.set(e, col, r, !0), n.set(col, e, r, !0)
                    }(x, n),
                    function(n, data) {
                        for (var t = n.size, e = -1, r = t - 1, o = 7, c = 0, col = t - 1; col > 0; col -= 2)
                            for (6 === col && col--;;) {
                                for (var l = 0; l < 2; l++)
                                    if (!n.isReserved(r, col - l)) {
                                        var f = !1;
                                        c < data.length && (f = 1 == (data[c] >>> o & 1)), n.set(r, col - l, f), -1 == --o && (c++, o = 7)
                                    }
                                if ((r += e) < 0 || t <= r) {
                                    r -= e, e = -e;
                                    break
                                }
                            }
                    }(x, w), isNaN(e) && (e = m.getBestMask(x, A.bind(null, x, t))), m.applyMask(e, x), A(x, t, e), {
                        modules: x,
                        version: n,
                        errorCorrectionLevel: t,
                        maskPattern: e,
                        segments: r
                    }
            }
            t.create = function(data, n) {
                if (void 0 === data || "" === data) throw new Error("No input text");
                var t, mask, e = c.M;
                return void 0 !== n && (e = c.from(n.errorCorrectionLevel, c.M), t = v.from(n.version), mask = m.from(n.maskPattern), n.toSJISFunc && o.setToSJISFunction(n.toSJISFunc)), R(data, t, e, mask)
            }
        },
        1528: function(n, t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(n) {
                    var t = Math.floor(n / 8);
                    return 1 == (this.buffer[t] >>> 7 - n % 8 & 1)
                },
                put: function(n, t) {
                    for (var i = 0; i < t; i++) this.putBit(1 == (n >>> t - i - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(n) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), n && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, n.exports = e
        },
        1529: function(n, t, e) {
            var r = e(311);

            function o(n) {
                if (!n || n < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = n, this.data = r.alloc(n * n), this.reservedBit = r.alloc(n * n)
            }
            o.prototype.set = function(n, col, t, e) {
                var r = n * this.size + col;
                this.data[r] = t, e && (this.reservedBit[r] = !0)
            }, o.prototype.get = function(n, col) {
                return this.data[n * this.size + col]
            }, o.prototype.xor = function(n, col, t) {
                this.data[n * this.size + col] ^= t
            }, o.prototype.isReserved = function(n, col) {
                return this.reservedBit[n * this.size + col]
            }, n.exports = o
        },
        1530: function(n, t, e) {
            var r = e(271).getSymbolSize;
            t.getRowColCoords = function(n) {
                if (1 === n) return [];
                for (var t = Math.floor(n / 7) + 2, e = r(n), o = 145 === e ? 26 : 2 * Math.ceil((e - 13) / (2 * t - 2)), c = [e - 7], i = 1; i < t - 1; i++) c[i] = c[i - 1] - o;
                return c.push(6), c.reverse()
            }, t.getPositions = function(n) {
                for (var e = [], r = t.getRowColCoords(n), o = r.length, i = 0; i < o; i++)
                    for (var c = 0; c < o; c++) 0 === i && 0 === c || 0 === i && c === o - 1 || i === o - 1 && 0 === c || e.push([r[i], r[c]]);
                return e
            }
        },
        1531: function(n, t, e) {
            var r = e(271).getSymbolSize;
            t.getPositions = function(n) {
                var t = r(n);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        1532: function(n, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            var e = 3,
                r = 3,
                o = 40,
                c = 10;

            function l(n, i, e) {
                switch (n) {
                    case t.Patterns.PATTERN000:
                        return (i + e) % 2 == 0;
                    case t.Patterns.PATTERN001:
                        return i % 2 == 0;
                    case t.Patterns.PATTERN010:
                        return e % 3 == 0;
                    case t.Patterns.PATTERN011:
                        return (i + e) % 3 == 0;
                    case t.Patterns.PATTERN100:
                        return (Math.floor(i / 2) + Math.floor(e / 3)) % 2 == 0;
                    case t.Patterns.PATTERN101:
                        return i * e % 2 + i * e % 3 == 0;
                    case t.Patterns.PATTERN110:
                        return (i * e % 2 + i * e % 3) % 2 == 0;
                    case t.Patterns.PATTERN111:
                        return (i * e % 3 + (i + e) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + n)
                }
            }
            t.isValid = function(mask) {
                return null != mask && "" !== mask && !isNaN(mask) && mask >= 0 && mask <= 7
            }, t.from = function(n) {
                return t.isValid(n) ? parseInt(n, 10) : void 0
            }, t.getPenaltyN1 = function(data) {
                for (var n = data.size, t = 0, r = 0, o = 0, c = null, l = null, f = 0; f < n; f++) {
                    r = o = 0, c = l = null;
                    for (var col = 0; col < n; col++) {
                        var d = data.get(f, col);
                        d === c ? r++ : (r >= 5 && (t += e + (r - 5)), c = d, r = 1), (d = data.get(col, f)) === l ? o++ : (o >= 5 && (t += e + (o - 5)), l = d, o = 1)
                    }
                    r >= 5 && (t += e + (r - 5)), o >= 5 && (t += e + (o - 5))
                }
                return t
            }, t.getPenaltyN2 = function(data) {
                for (var n = data.size, t = 0, e = 0; e < n - 1; e++)
                    for (var col = 0; col < n - 1; col++) {
                        var o = data.get(e, col) + data.get(e, col + 1) + data.get(e + 1, col) + data.get(e + 1, col + 1);
                        4 !== o && 0 !== o || t++
                    }
                return t * r
            }, t.getPenaltyN3 = function(data) {
                for (var n = data.size, t = 0, e = 0, r = 0, c = 0; c < n; c++) {
                    e = r = 0;
                    for (var col = 0; col < n; col++) e = e << 1 & 2047 | data.get(c, col), col >= 10 && (1488 === e || 93 === e) && t++, r = r << 1 & 2047 | data.get(col, c), col >= 10 && (1488 === r || 93 === r) && t++
                }
                return t * o
            }, t.getPenaltyN4 = function(data) {
                for (var n = 0, t = data.data.length, i = 0; i < t; i++) n += data.data[i];
                return Math.abs(Math.ceil(100 * n / t / 5) - 10) * c
            }, t.applyMask = function(pattern, data) {
                for (var n = data.size, col = 0; col < n; col++)
                    for (var t = 0; t < n; t++) data.isReserved(t, col) || data.xor(t, col, l(pattern, t, col))
            }, t.getBestMask = function(data, n) {
                for (var e = Object.keys(t.Patterns).length, r = 0, o = 1 / 0, p = 0; p < e; p++) {
                    n(p), t.applyMask(p, data);
                    var c = t.getPenaltyN1(data) + t.getPenaltyN2(data) + t.getPenaltyN3(data) + t.getPenaltyN4(data);
                    t.applyMask(p, data), c < o && (o = c, r = p)
                }
                return r
            }
        },
        1533: function(n, t, e) {
            var r = e(311),
                o = e(1534),
                c = e(33).Buffer;

            function l(n) {
                this.genPoly = void 0, this.degree = n, this.degree && this.initialize(this.degree)
            }
            l.prototype.initialize = function(n) {
                this.degree = n, this.genPoly = o.generateECPolynomial(this.degree)
            }, l.prototype.encode = function(data) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                var n = r.alloc(this.degree),
                    t = c.concat([data, n], data.length + this.degree),
                    e = o.mod(t, this.genPoly),
                    l = this.degree - e.length;
                if (l > 0) {
                    var f = r.alloc(this.degree);
                    return e.copy(f, l), f
                }
                return e
            }, n.exports = l
        },
        1534: function(n, t, e) {
            var r = e(311),
                o = e(1535);
            t.mul = function(n, t) {
                for (var e = r.alloc(n.length + t.length - 1), i = 0; i < n.length; i++)
                    for (var c = 0; c < t.length; c++) e[i + c] ^= o.mul(n[i], t[c]);
                return e
            }, t.mod = function(n, t) {
                for (var e = r.from(n); e.length - t.length >= 0;) {
                    for (var c = e[0], i = 0; i < t.length; i++) e[i] ^= o.mul(t[i], c);
                    for (var l = 0; l < e.length && 0 === e[l];) l++;
                    e = e.slice(l)
                }
                return e
            }, t.generateECPolynomial = function(n) {
                for (var e = r.from([1]), i = 0; i < n; i++) e = t.mul(e, [1, o.exp(i)]);
                return e
            }
        },
        1535: function(n, t, e) {
            var r = e(311),
                o = r.alloc(512),
                c = r.alloc(256);
            ! function() {
                for (var n = 1, i = 0; i < 255; i++) o[i] = n, c[n] = i, 256 & (n <<= 1) && (n ^= 285);
                for (i = 255; i < 512; i++) o[i] = o[i - 255]
            }(), t.log = function(n) {
                if (n < 1) throw new Error("log(" + n + ")");
                return c[n]
            }, t.exp = function(n) {
                return o[n]
            }, t.mul = function(n, t) {
                return 0 === n || 0 === t ? 0 : o[c[n] + c[t]]
            }
        },
        1536: function(n, t, e) {
            var r = e(271),
                o = e(851),
                c = e(577),
                l = e(272),
                f = e(852),
                d = e(576),
                h = r.getBCHDigit(7973);

            function m(n, t) {
                return l.getCharCountIndicator(n, t) + 4
            }

            function _(n, t) {
                var e = 0;
                return n.forEach((function(data) {
                    var n = m(data.mode, t);
                    e += n + data.getBitsLength()
                })), e
            }
            t.from = function(n, t) {
                return f.isValid(n) ? parseInt(n, 10) : t
            }, t.getCapacity = function(n, t, e) {
                if (!f.isValid(n)) throw new Error("Invalid QR Code version");
                void 0 === e && (e = l.BYTE);
                var c = 8 * (r.getSymbolTotalCodewords(n) - o.getTotalCodewordsCount(n, t));
                if (e === l.MIXED) return c;
                var d = c - m(e, n);
                switch (e) {
                    case l.NUMERIC:
                        return Math.floor(d / 10 * 3);
                    case l.ALPHANUMERIC:
                        return Math.floor(d / 11 * 2);
                    case l.KANJI:
                        return Math.floor(d / 13);
                    case l.BYTE:
                    default:
                        return Math.floor(d / 8)
                }
            }, t.getBestVersionForData = function(data, n) {
                var e, r = c.from(n, c.M);
                if (d(data)) {
                    if (data.length > 1) return function(n, e) {
                        for (var r = 1; r <= 40; r++)
                            if (_(n, r) <= t.getCapacity(r, e, l.MIXED)) return r
                    }(data, r);
                    if (0 === data.length) return 1;
                    e = data[0]
                } else e = data;
                return function(n, e, r) {
                    for (var o = 1; o <= 40; o++)
                        if (e <= t.getCapacity(o, r, n)) return o
                }(e.mode, e.getLength(), r)
            }, t.getEncodedBits = function(n) {
                if (!f.isValid(n) || n < 7) throw new Error("Invalid QR Code version");
                for (var t = n << 12; r.getBCHDigit(t) - h >= 0;) t ^= 7973 << r.getBCHDigit(t) - h;
                return n << 12 | t
            }
        },
        1537: function(n, t, e) {
            var r = e(271),
                o = r.getBCHDigit(1335);
            t.getEncodedBits = function(n, mask) {
                for (var data = n.bit << 3 | mask, t = data << 10; r.getBCHDigit(t) - o >= 0;) t ^= 1335 << r.getBCHDigit(t) - o;
                return 21522 ^ (data << 10 | t)
            }
        },
        1538: function(n, t, e) {
            var r = e(272),
                o = e(1539),
                c = e(1540),
                l = e(1541),
                f = e(1542),
                d = e(853),
                h = e(271),
                m = e(662);

            function _(n) {
                return unescape(encodeURIComponent(n)).length
            }

            function w(n, t, e) {
                for (var r, o = []; null !== (r = n.exec(e));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return o
            }

            function v(n) {
                var t, e, o = w(d.NUMERIC, r.NUMERIC, n),
                    c = w(d.ALPHANUMERIC, r.ALPHANUMERIC, n);
                return h.isKanjiModeEnabled() ? (t = w(d.BYTE, r.BYTE, n), e = w(d.KANJI, r.KANJI, n)) : (t = w(d.BYTE_KANJI, r.BYTE, n), e = []), o.concat(c, t, e).sort((function(n, t) {
                    return n.index - t.index
                })).map((function(n) {
                    return {
                        data: n.data,
                        mode: n.mode,
                        length: n.length
                    }
                }))
            }

            function y(n, t) {
                switch (t) {
                    case r.NUMERIC:
                        return o.getBitsLength(n);
                    case r.ALPHANUMERIC:
                        return c.getBitsLength(n);
                    case r.KANJI:
                        return f.getBitsLength(n);
                    case r.BYTE:
                        return l.getBitsLength(n)
                }
            }

            function x(data, n) {
                var t, e = r.getBestModeForData(data);
                if ((t = r.from(n, e)) !== r.BYTE && t.bit < e.bit) throw new Error('"' + data + '" cannot be encoded with mode ' + r.toString(t) + ".\n Suggested mode is: " + r.toString(e));
                switch (t !== r.KANJI || h.isKanjiModeEnabled() || (t = r.BYTE), t) {
                    case r.NUMERIC:
                        return new o(data);
                    case r.ALPHANUMERIC:
                        return new c(data);
                    case r.KANJI:
                        return new f(data);
                    case r.BYTE:
                        return new l(data)
                }
            }
            t.fromArray = function(n) {
                return n.reduce((function(n, t) {
                    return "string" == typeof t ? n.push(x(t, null)) : t.data && n.push(x(t.data, t.mode)), n
                }), [])
            }, t.fromString = function(data, n) {
                for (var e = function(n) {
                        for (var t = [], i = 0; i < n.length; i++) {
                            var e = n[i];
                            switch (e.mode) {
                                case r.NUMERIC:
                                    t.push([e, {
                                        data: e.data,
                                        mode: r.ALPHANUMERIC,
                                        length: e.length
                                    }, {
                                        data: e.data,
                                        mode: r.BYTE,
                                        length: e.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([e, {
                                        data: e.data,
                                        mode: r.BYTE,
                                        length: e.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([e, {
                                        data: e.data,
                                        mode: r.BYTE,
                                        length: _(e.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: e.data,
                                        mode: r.BYTE,
                                        length: _(e.data)
                                    }])
                            }
                        }
                        return t
                    }(v(data, h.isKanjiModeEnabled())), o = function(n, t) {
                        for (var table = {}, e = {
                                start: {}
                            }, o = ["start"], i = 0; i < n.length; i++) {
                            for (var c = n[i], l = [], f = 0; f < c.length; f++) {
                                var d = c[f],
                                    h = "" + i + f;
                                l.push(h), table[h] = {
                                    node: d,
                                    lastCount: 0
                                }, e[h] = {};
                                for (var m = 0; m < o.length; m++) {
                                    var _ = o[m];
                                    table[_] && table[_].node.mode === d.mode ? (e[_][h] = y(table[_].lastCount + d.length, d.mode) - y(table[_].lastCount, d.mode), table[_].lastCount += d.length) : (table[_] && (table[_].lastCount = d.length), e[_][h] = y(d.length, d.mode) + 4 + r.getCharCountIndicator(d.mode, t))
                                }
                            }
                            o = l
                        }
                        for (m = 0; m < o.length; m++) e[o[m]].end = 0;
                        return {
                            map: e,
                            table: table
                        }
                    }(e, n), path = m.find_path(o.map, "start", "end"), c = [], i = 1; i < path.length - 1; i++) c.push(o.table[path[i]].node);
                return t.fromArray(function(n) {
                    return n.reduce((function(n, t) {
                        var e = n.length - 1 >= 0 ? n[n.length - 1] : null;
                        return e && e.mode === t.mode ? (n[n.length - 1].data += t.data, n) : (n.push(t), n)
                    }), [])
                }(c))
            }, t.rawSplit = function(data) {
                return t.fromArray(v(data, h.isKanjiModeEnabled()))
            }
        },
        1539: function(n, t, e) {
            var r = e(272);

            function o(data) {
                this.mode = r.NUMERIC, this.data = data.toString()
            }
            o.getBitsLength = function(n) {
                return 10 * Math.floor(n / 3) + (n % 3 ? n % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(n) {
                var i, t, e;
                for (i = 0; i + 3 <= this.data.length; i += 3) t = this.data.substr(i, 3), e = parseInt(t, 10), n.put(e, 10);
                var r = this.data.length - i;
                r > 0 && (t = this.data.substr(i), e = parseInt(t, 10), n.put(e, 3 * r + 1))
            }, n.exports = o
        },
        1540: function(n, t, e) {
            var r = e(272),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function c(data) {
                this.mode = r.ALPHANUMERIC, this.data = data
            }
            c.getBitsLength = function(n) {
                return 11 * Math.floor(n / 2) + n % 2 * 6
            }, c.prototype.getLength = function() {
                return this.data.length
            }, c.prototype.getBitsLength = function() {
                return c.getBitsLength(this.data.length)
            }, c.prototype.write = function(n) {
                var i;
                for (i = 0; i + 2 <= this.data.length; i += 2) {
                    var t = 45 * o.indexOf(this.data[i]);
                    t += o.indexOf(this.data[i + 1]), n.put(t, 11)
                }
                this.data.length % 2 && n.put(o.indexOf(this.data[i]), 6)
            }, n.exports = c
        },
        1541: function(n, t, e) {
            var r = e(311),
                o = e(272);

            function c(data) {
                this.mode = o.BYTE, this.data = r.from(data)
            }
            c.getBitsLength = function(n) {
                return 8 * n
            }, c.prototype.getLength = function() {
                return this.data.length
            }, c.prototype.getBitsLength = function() {
                return c.getBitsLength(this.data.length)
            }, c.prototype.write = function(n) {
                for (var i = 0, t = this.data.length; i < t; i++) n.put(this.data[i], 8)
            }, n.exports = c
        },
        1542: function(n, t, e) {
            var r = e(272),
                o = e(271);

            function c(data) {
                this.mode = r.KANJI, this.data = data
            }
            c.getBitsLength = function(n) {
                return 13 * n
            }, c.prototype.getLength = function() {
                return this.data.length
            }, c.prototype.getBitsLength = function() {
                return c.getBitsLength(this.data.length)
            }, c.prototype.write = function(n) {
                var i;
                for (i = 0; i < this.data.length; i++) {
                    var t = o.toSJIS(this.data[i]);
                    if (t >= 33088 && t <= 40956) t -= 33088;
                    else {
                        if (!(t >= 57408 && t <= 60351)) throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
                        t -= 49472
                    }
                    t = 192 * (t >>> 8 & 255) + (255 & t), n.put(t, 13)
                }
            }, n.exports = c
        },
        1543: function(n, t, e) {
            var r = e(854);
            t.render = function(n, canvas, t) {
                var e = t,
                    o = canvas;
                void 0 !== e || canvas && canvas.getContext || (e = canvas, canvas = void 0), canvas || (o = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (n) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), e = r.getOptions(e);
                var c = r.getImageWidth(n.modules.size, e),
                    l = o.getContext("2d"),
                    image = l.createImageData(c, c);
                return r.qrToImageData(image.data, n, e),
                    function(n, canvas, t) {
                        n.clearRect(0, 0, canvas.width, canvas.height), canvas.style || (canvas.style = {}), canvas.height = t, canvas.width = t, canvas.style.height = t + "px", canvas.style.width = t + "px"
                    }(l, o, c), l.putImageData(image, 0, 0), o
            }, t.renderToDataURL = function(n, canvas, e) {
                var r = e;
                void 0 !== r || canvas && canvas.getContext || (r = canvas, canvas = void 0), r || (r = {});
                var o = t.render(n, canvas, r),
                    c = r.type || "image/png",
                    l = r.rendererOpts || {};
                return o.toDataURL(c, l.quality)
            }
        },
        1544: function(n, t, e) {
            var r = e(854);

            function o(n, t) {
                var e = n.a / 255,
                    r = t + '="' + n.hex + '"';
                return e < 1 ? r + " " + t + '-opacity="' + e.toFixed(2).slice(1) + '"' : r
            }

            function c(n, t, e) {
                var r = n + t;
                return void 0 !== e && (r += " " + e), r
            }
            t.render = function(n, t, e) {
                var l = r.getOptions(t),
                    f = n.modules.size,
                    data = n.modules.data,
                    d = f + 2 * l.margin,
                    h = l.color.light.a ? "<path " + o(l.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
                    path = "<path " + o(l.color.dark, "stroke") + ' d="' + function(data, n, t) {
                        for (var path = "", e = 0, r = !1, o = 0, i = 0; i < data.length; i++) {
                            var col = Math.floor(i % n),
                                l = Math.floor(i / n);
                            col || r || (r = !0), data[i] ? (o++, i > 0 && col > 0 && data[i - 1] || (path += r ? c("M", col + t, .5 + l + t) : c("m", e, 0), e = 0, r = !1), col + 1 < n && data[i + 1] || (path += c("h", o), o = 0)) : e++
                        }
                        return path
                    }(data, f, l.margin) + '"/>',
                    m = 'viewBox="0 0 ' + d + " " + d + '"',
                    _ = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + h + path + "</svg>\n";
                return "function" == typeof e && e(null, _), _
            }
        },
        160: function(n, t, e) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function(n, t, e, r) {
                    void 0 === r && (r = e), Object.defineProperty(n, r, {
                        enumerable: !0,
                        get: function() {
                            return t[e]
                        }
                    })
                } : function(n, t, e, r) {
                    void 0 === r && (r = e), n[r] = t[e]
                }),
                o = this && this.__exportStar || function(n, t) {
                    for (var p in n) "default" === p || t.hasOwnProperty(p) || r(t, n, p)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(e(1523), t), o(e(1524), t)
        },
        182: function(n, t, e) {
            "use strict";
            e.d(t, "b", (function() {
                return l
            })), e.d(t, "a", (function() {
                return f
            })), e.d(t, "c", (function() {
                return d
            })), e.d(t, "d", (function() {
                return h
            })), e.d(t, "e", (function() {
                return m
            })), e.d(t, "f", (function() {
                return _
            }));
            var r = e(160),
                o = e(77);
            async function c(n, t = o.a) {
                return r.getSubtleCrypto().importKey("raw", n, function(n) {
                    return n === o.a ? {
                        length: o.b,
                        name: o.a
                    } : {
                        hash: {
                            name: o.f
                        },
                        name: o.e
                    }
                }(t), !0, function(n) {
                    return n === o.a ? [o.d, o.c] : [o.k, o.l]
                }(t))
            }
            async function l(n, t, data) {
                const e = r.getSubtleCrypto(),
                    l = await c(t, o.a),
                    f = await e.encrypt({
                        iv: n,
                        name: o.a
                    }, l, data);
                return new Uint8Array(f)
            }
            async function f(n, t, data) {
                const e = r.getSubtleCrypto(),
                    l = await c(t, o.a),
                    f = await e.decrypt({
                        iv: n,
                        name: o.a
                    }, l, data);
                return new Uint8Array(f)
            }
            async function d(n, data) {
                const t = r.getSubtleCrypto(),
                    e = await c(n, o.e),
                    l = await t.sign({
                        length: o.g,
                        name: o.e
                    }, e, data);
                return new Uint8Array(l)
            }
            async function h(n, data) {
                const t = r.getSubtleCrypto(),
                    e = await c(n, o.e),
                    l = await t.sign({
                        length: o.h,
                        name: o.e
                    }, e, data);
                return new Uint8Array(l)
            }
            async function m(data) {
                const n = r.getSubtleCrypto(),
                    t = await n.digest({
                        name: o.i
                    }, data);
                return new Uint8Array(t)
            }
            async function _(data) {
                const n = r.getSubtleCrypto(),
                    t = await n.digest({
                        name: o.j
                    }, data);
                return new Uint8Array(t)
            }
        },
        26: function(n, t, e) {
            "use strict";
            (function(n) {
                e.d(t, "f", (function() {
                    return m
                })), e.d(t, "g", (function() {
                    return _
                })), e.d(t, "i", (function() {
                    return w
                })), e.d(t, "h", (function() {
                    return v
                })), e.d(t, "b", (function() {
                    return y
                })), e.d(t, "c", (function() {
                    return x
                })), e.d(t, "e", (function() {
                    return E
                })), e.d(t, "d", (function() {
                    return C
                })), e.d(t, "o", (function() {
                    return A
                })), e.d(t, "n", (function() {
                    return S
                })), e.d(t, "p", (function() {
                    return R
                })), e.d(t, "A", (function() {
                    return P
                })), e.d(t, "z", (function() {
                    return B
                })), e.d(t, "B", (function() {
                    return T
                })), e.d(t, "v", (function() {
                    return k
                })), e.d(t, "u", (function() {
                    return M
                })), e.d(t, "s", (function() {
                    return O
                })), e.d(t, "r", (function() {
                    return L
                })), e.d(t, "t", (function() {
                    return j
                })), e.d(t, "q", (function() {
                    return z
                })), e.d(t, "m", (function() {
                    return U
                })), e.d(t, "l", (function() {
                    return D
                })), e.d(t, "k", (function() {
                    return Y
                })), e.d(t, "j", (function() {
                    return F
                })), e.d(t, "x", (function() {
                    return K
                })), e.d(t, "a", (function() {
                    return Q
                })), e.d(t, "y", (function() {
                    return V
                })), e.d(t, "w", (function() {
                    return W
                }));
                var r = e(615),
                    o = e.n(r),
                    c = e(1131),
                    l = e.n(c);
                const f = "hex",
                    d = "utf8",
                    h = "0";

                function m(n) {
                    return new Uint8Array(n)
                }

                function _(n, t = !1) {
                    const e = n.toString(f);
                    return t ? Q(e) : e
                }

                function w(n) {
                    return n.toString(d)
                }

                function v(n) {
                    return n.readUIntBE(0, n.length)
                }

                function y(n) {
                    return l()(n)
                }

                function x(n, t = !1) {
                    return _(y(n), t)
                }

                function E(n) {
                    return w(y(n))
                }

                function C(n) {
                    return v(y(n))
                }

                function A(t) {
                    return n.from(K(t), f)
                }

                function S(n) {
                    return m(A(n))
                }

                function R(n) {
                    return w(A(n))
                }

                function P(t) {
                    return n.from(t, d)
                }

                function B(n) {
                    return m(P(n))
                }

                function T(n, t = !1) {
                    return _(P(n), t)
                }

                function k(n) {
                    return y(I(N(n)))
                }

                function M(n) {
                    return I(N(n))
                }

                function N(n) {
                    return J((n >>> 0).toString(2))
                }

                function I(n) {
                    return new Uint8Array(H(n).map((n => parseInt(n, 2))))
                }

                function O(n, t) {
                    return !("string" != typeof n || !n.match(/^0x[0-9A-Fa-f]*$/)) && (!t || n.length === 2 + 2 * t)
                }

                function L(t) {
                    return n.isBuffer(t)
                }

                function j(n) {
                    return o.a.strict(n) && !L(n)
                }

                function z(n) {
                    return !j(n) && !L(n) && void 0 !== n.byteLength
                }

                function U(n) {
                    return L(n) ? "buffer" : j(n) ? "typed-array" : z(n) ? "array-buffer" : Array.isArray(n) ? "array" : typeof n
                }

                function D(n) {
                    return function(n) {
                        return !("string" != typeof n || !new RegExp(/^[01]+$/).test(n)) && n.length % 8 == 0
                    }(n) ? "binary" : O(n) ? f : d
                }

                function Y(...t) {
                    return n.concat(t)
                }

                function F(...n) {
                    let t = [];
                    return n.forEach((n => t = t.concat(Array.from(n)))), new Uint8Array([...t])
                }

                function H(n, t = 8) {
                    const e = J(n).match(new RegExp(`.{${t}}`, "gi"));
                    return Array.from(e || [])
                }

                function J(n, t = 8, e = "0") {
                    return function(n, t, e = "0") {
                        return $(n, t, !0, e)
                    }(n, function(n, t = 8) {
                        const e = n % t;
                        return e ? (n - e) / t * t + t : n
                    }(n.length, t), e)
                }

                function K(n) {
                    return n.replace(/^0x/, "")
                }

                function Q(n) {
                    return n.startsWith("0x") ? n : `0x${n}`
                }

                function V(n) {
                    return (n = J(n = K(n), 2)) && (n = Q(n)), n
                }

                function W(n) {
                    const t = n.startsWith("0x");
                    return n = (n = K(n)).startsWith(h) ? n.substring(1) : n, t ? Q(n) : n
                }

                function $(n, t, e, r = "0") {
                    const o = t - n.length;
                    let c = n;
                    if (o > 0) {
                        const t = r.repeat(o);
                        c = e ? t + n : n + t
                    }
                    return c
                }
            }).call(this, e(33).Buffer)
        },
        271: function(n, t) {
            var e, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(n) {
                if (!n) throw new Error('"version" cannot be null or undefined');
                if (n < 1 || n > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * n + 17
            }, t.getSymbolTotalCodewords = function(n) {
                return r[n]
            }, t.getBCHDigit = function(data) {
                for (var n = 0; 0 !== data;) n++, data >>>= 1;
                return n
            }, t.setToSJISFunction = function(n) {
                if ("function" != typeof n) throw new Error('"toSJISFunc" is not a valid function.');
                e = n
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== e
            }, t.toSJIS = function(n) {
                return e(n)
            }
        },
        272: function(n, t, e) {
            var r = e(852),
                o = e(853);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(n, t) {
                if (!n.ccBits) throw new Error("Invalid mode: " + n);
                if (!r.isValid(t)) throw new Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? n.ccBits[0] : t < 27 ? n.ccBits[1] : n.ccBits[2]
            }, t.getBestModeForData = function(n) {
                return o.testNumeric(n) ? t.NUMERIC : o.testAlphanumeric(n) ? t.ALPHANUMERIC : o.testKanji(n) ? t.KANJI : t.BYTE
            }, t.toString = function(n) {
                if (n && n.id) return n.id;
                throw new Error("Invalid mode")
            }, t.isValid = function(n) {
                return n && n.bit && n.ccBits
            }, t.from = function(n, e) {
                if (t.isValid(n)) return n;
                try {
                    return function(n) {
                        if ("string" != typeof n) throw new Error("Param is not a string");
                        switch (n.toLowerCase()) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw new Error("Unknown mode: " + n)
                        }
                    }(n)
                } catch (n) {
                    return e
                }
            }
        },
        285: function(n, t, e) {
            "use strict";
            e.d(t, "c", (function() {
                return o
            })), e.d(t, "a", (function() {
                return c
            })), e.d(t, "b", (function() {
                return l
            }));
            var r = e(115);

            function o(code) {
                return r.c.includes(code)
            }

            function c(n) {
                return Object.keys(r.f).includes(n) ? r.f[n] : r.f[r.a]
            }

            function l(code) {
                const n = Object.values(r.f).find((n => n.code === code));
                return n || r.f[r.a]
            }
        },
        311: function(n, t, e) {
            "use strict";
            var r = e(576);
            c.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var n = new Uint8Array(1);
                    return n.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === n.foo()
                } catch (n) {
                    return !1
                }
            }();
            var o = c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

            function c(n, t, e) {
                return c.TYPED_ARRAY_SUPPORT || this instanceof c ? "number" == typeof n ? d(this, n) : function(n, t, e, r) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(n, t, e, r) {
                        if (e < 0 || t.byteLength < e) throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < e + (r || 0)) throw new RangeError("'length' is out of bounds");
                        var o;
                        o = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r);
                        c.TYPED_ARRAY_SUPPORT ? o.__proto__ = c.prototype : o = h(n, o);
                        return o
                    }(n, t, e, r);
                    if ("string" == typeof t) return function(n, t) {
                        var e = 0 | _(t),
                            r = f(n, e),
                            o = r.write(t);
                        o !== e && (r = r.slice(0, o));
                        return r
                    }(n, t);
                    return function(n, t) {
                        if (c.isBuffer(t)) {
                            var e = 0 | l(t.length),
                                r = f(n, e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r
                        }
                        if (t) {
                            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? f(n, 0) : h(n, t);
                            if ("Buffer" === t.type && Array.isArray(t.data)) return h(n, t.data)
                        }
                        var o;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(n, t)
                }(this, n, t, e) : new c(n, t, e)
            }

            function l(n) {
                if (n >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                return 0 | n
            }

            function f(n, t) {
                var e;
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === (e = n) && (e = new c(t)), e.length = t), e
            }

            function d(n, t) {
                var e = f(n, t < 0 ? 0 : 0 | l(t));
                if (!c.TYPED_ARRAY_SUPPORT)
                    for (var i = 0; i < t; ++i) e[i] = 0;
                return e
            }

            function h(n, t) {
                for (var e = t.length < 0 ? 0 : 0 | l(t.length), r = f(n, e), i = 0; i < e; i += 1) r[i] = 255 & t[i];
                return r
            }

            function m(n, t) {
                var e;
                t = t || 1 / 0;
                for (var r = n.length, o = null, c = [], i = 0; i < r; ++i) {
                    if ((e = n.charCodeAt(i)) > 55295 && e < 57344) {
                        if (!o) {
                            if (e > 56319) {
                                (t -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            if (i + 1 === r) {
                                (t -= 3) > -1 && c.push(239, 191, 189);
                                continue
                            }
                            o = e;
                            continue
                        }
                        if (e < 56320) {
                            (t -= 3) > -1 && c.push(239, 191, 189), o = e;
                            continue
                        }
                        e = 65536 + (o - 55296 << 10 | e - 56320)
                    } else o && (t -= 3) > -1 && c.push(239, 191, 189);
                    if (o = null, e < 128) {
                        if ((t -= 1) < 0) break;
                        c.push(e)
                    } else if (e < 2048) {
                        if ((t -= 2) < 0) break;
                        c.push(e >> 6 | 192, 63 & e | 128)
                    } else if (e < 65536) {
                        if ((t -= 3) < 0) break;
                        c.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        c.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
                    }
                }
                return c
            }

            function _(n) {
                return c.isBuffer(n) ? n.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(n) || n instanceof ArrayBuffer) ? n.byteLength : ("string" != typeof n && (n = "" + n), 0 === n.length ? 0 : m(n).length)
            }
            c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            })), c.prototype.write = function(n, t, e) {
                void 0 === t || void 0 === e && "string" == typeof t ? (e = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(e) ? e |= 0 : e = void 0);
                var r = this.length - t;
                if ((void 0 === e || e > r) && (e = r), n.length > 0 && (e < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                return function(n, t, e, r) {
                    return function(n, t, e, r) {
                        for (var i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i) t[i + e] = n[i];
                        return i
                    }(m(t, n.length - e), n, e, r)
                }(this, n, t, e)
            }, c.prototype.slice = function(n, t) {
                var e, r = this.length;
                if ((n = ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < n && (t = n), c.TYPED_ARRAY_SUPPORT)(e = this.subarray(n, t)).__proto__ = c.prototype;
                else {
                    var o = t - n;
                    e = new c(o, void 0);
                    for (var i = 0; i < o; ++i) e[i] = this[i + n]
                }
                return e
            }, c.prototype.copy = function(n, t, e, r) {
                if (e || (e = 0), r || 0 === r || (r = this.length), t >= n.length && (t = n.length), t || (t = 0), r > 0 && r < e && (r = e), r === e) return 0;
                if (0 === n.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), n.length - t < r - e && (r = n.length - t + e);
                var i, o = r - e;
                if (this === n && e < t && t < r)
                    for (i = o - 1; i >= 0; --i) n[i + t] = this[i + e];
                else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) n[i + t] = this[i + e];
                else Uint8Array.prototype.set.call(n, this.subarray(e, e + o), t);
                return o
            }, c.prototype.fill = function(n, t, e) {
                if ("string" == typeof n) {
                    if ("string" == typeof t ? (t = 0, e = this.length) : "string" == typeof e && (e = this.length), 1 === n.length) {
                        var code = n.charCodeAt(0);
                        code < 256 && (n = code)
                    }
                } else "number" == typeof n && (n &= 255);
                if (t < 0 || this.length < t || this.length < e) throw new RangeError("Out of range index");
                if (e <= t) return this;
                var i;
                if (t >>>= 0, e = void 0 === e ? this.length : e >>> 0, n || (n = 0), "number" == typeof n)
                    for (i = t; i < e; ++i) this[i] = n;
                else {
                    var r = c.isBuffer(n) ? n : new c(n),
                        o = r.length;
                    for (i = 0; i < e - t; ++i) this[i + t] = r[i % o]
                }
                return this
            }, c.concat = function(n, t) {
                if (!r(n)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === n.length) return f(null, 0);
                var i;
                if (void 0 === t)
                    for (t = 0, i = 0; i < n.length; ++i) t += n[i].length;
                var e = d(null, t),
                    o = 0;
                for (i = 0; i < n.length; ++i) {
                    var l = n[i];
                    if (!c.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                    l.copy(e, o), o += l.length
                }
                return e
            }, c.byteLength = _, c.prototype._isBuffer = !0, c.isBuffer = function(b) {
                return !(null == b || !b._isBuffer)
            }, n.exports.alloc = function(n) {
                var t = new c(n);
                return t.fill(0), t
            }, n.exports.from = function(data) {
                return new c(data)
            }
        },
        334: function(n, t, e) {
            "use strict";
            var r = e(843);
            e.d(t, "randomBytes", (function() {
                return r.a
            }));
            var o = e(844);
            e.d(t, "aesCbcDecrypt", (function() {
                return o.a
            })), e.d(t, "aesCbcEncrypt", (function() {
                return o.b
            }));
            var c = e(845);
            e.d(t, "hmacSha256Sign", (function() {
                return c.a
            }));
            e(850), e(380), e(77)
        },
        379: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            class r {}
        },
        380: function(n, t, e) {
            "use strict";
            var r = e(846);
            e.o(r, "isConstantTime") && e.d(t, "isConstantTime", (function() {
                return r.isConstantTime
            }));
            e(847);
            var o = e(848);
            e.o(o, "isConstantTime") && e.d(t, "isConstantTime", (function() {
                return o.isConstantTime
            }));
            var c = e(849);
            e.d(t, "isConstantTime", (function() {
                return c.a
            }))
        },
        462: function(n, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = e(1516);
            r.__exportStar(e(1517), t), r.__exportStar(e(1518), t)
        },
        576: function(n, t) {
            var e = {}.toString;
            n.exports = Array.isArray || function(n) {
                return "[object Array]" == e.call(n)
            }
        },
        577: function(n, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(n) {
                return n && void 0 !== n.bit && n.bit >= 0 && n.bit < 4
            }, t.from = function(n, e) {
                if (t.isValid(n)) return n;
                try {
                    return function(n) {
                        if ("string" != typeof n) throw new Error("Param is not a string");
                        switch (n.toLowerCase()) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw new Error("Unknown EC Level: " + n)
                        }
                    }(n)
                } catch (n) {
                    return e
                }
            }
        },
        77: function(n, t, e) {
            "use strict";
            e.d(t, "b", (function() {
                return o
            })), e.d(t, "g", (function() {
                return c
            })), e.d(t, "a", (function() {
                return l
            })), e.d(t, "f", (function() {
                return f
            })), e.d(t, "e", (function() {
                return d
            })), e.d(t, "i", (function() {
                return h
            })), e.d(t, "j", (function() {
                return m
            })), e.d(t, "h", (function() {
                return r
            })), e.d(t, "d", (function() {
                return _
            })), e.d(t, "c", (function() {
                return w
            })), e.d(t, "k", (function() {
                return v
            })), e.d(t, "l", (function() {
                return y
            }));
            const r = 512,
                o = 256,
                c = 256,
                l = "AES-CBC",
                f = `SHA-${o}`,
                d = "HMAC",
                h = "SHA-256",
                m = "SHA-512",
                _ = "encrypt",
                w = "decrypt",
                v = "sign",
                y = "verify"
        },
        833: function(n, t, e) {
            "use strict";
            var r = e(462);
            e.o(r, "payloadId") && e.d(t, "payloadId", (function() {
                return r.payloadId
            }));
            r.isNode
        },
        834: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return r
            }));
            e(285), e(115);

            function r() {
                return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
            }
        },
        835: function(n, t, e) {
            "use strict"
        },
        836: function(n, t, e) {
            "use strict";
            e(837)
        },
        837: function(n, t, e) {
            "use strict";
            e(838), e(379), e(839), e(840)
        },
        838: function(n, t) {},
        839: function(n, t, e) {
            "use strict";
            var r = e(379);
            r.a;
            r.a
        },
        840: function(n, t) {},
        841: function(n, t, e) {
            "use strict"
        },
        842: function(n, t, e) {
            "use strict"
        },
        843: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return o
            }));
            var r = e(160);

            function o(n) {
                return r.getBrowerCrypto().getRandomValues(new Uint8Array(n))
            }
        },
        844: function(n, t, e) {
            "use strict";
            e.d(t, "b", (function() {
                return o
            })), e.d(t, "a", (function() {
                return c
            }));
            var r = e(182);

            function o(n, t, data) {
                return Object(r.b)(n, t, data)
            }

            function c(n, t, data) {
                return Object(r.a)(n, t, data)
            }
        },
        845: function(n, t, e) {
            "use strict";
            e.d(t, "a", (function() {
                return o
            }));
            var r = e(182);
            e(380);
            async function o(n, t) {
                return await Object(r.c)(n, t)
            }
        },
        846: function(n, t, e) {
            "use strict";
            var r = e(160);
            e.o(r, "isConstantTime") && e.d(t, "isConstantTime", (function() {
                return r.isConstantTime
            }))
        },
        847: function(n, t, e) {
            "use strict"
        },
        848: function(n, t) {},
        849: function(n, t, e) {
            "use strict";

            function r(n, t) {
                if (n.length !== t.length) return !1;
                let e = 0;
                for (let i = 0; i < n.length; i++) e |= n[i] ^ t[i];
                return 0 === e
            }
            e.d(t, "a", (function() {
                return r
            }))
        },
        850: function(n, t, e) {
            "use strict";
            e(182)
        },
        851: function(n, t, e) {
            var r = e(577),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                c = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(n, t) {
                switch (t) {
                    case r.L:
                        return o[4 * (n - 1) + 0];
                    case r.M:
                        return o[4 * (n - 1) + 1];
                    case r.Q:
                        return o[4 * (n - 1) + 2];
                    case r.H:
                        return o[4 * (n - 1) + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(n, t) {
                switch (t) {
                    case r.L:
                        return c[4 * (n - 1) + 0];
                    case r.M:
                        return c[4 * (n - 1) + 1];
                    case r.Q:
                        return c[4 * (n - 1) + 2];
                    case r.H:
                        return c[4 * (n - 1) + 3];
                    default:
                        return
                }
            }
        },
        852: function(n, t) {
            t.isValid = function(n) {
                return !isNaN(n) && n >= 1 && n <= 40
            }
        },
        853: function(n, t) {
            var e = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp(e, "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            var c = new RegExp("^" + r + "$"),
                l = new RegExp("^[0-9]+$"),
                f = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(n) {
                return c.test(n)
            }, t.testNumeric = function(n) {
                return l.test(n)
            }, t.testAlphanumeric = function(n) {
                return f.test(n)
            }
        },
        854: function(n, t) {
            function e(n) {
                if ("number" == typeof n && (n = n.toString()), "string" != typeof n) throw new Error("Color should be defined as hex string");
                var t = n.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + n);
                3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(n) {
                    return [n, n]
                })))), 6 === t.length && t.push("F", "F");
                var e = parseInt(t.join(""), 16);
                return {
                    r: e >> 24 & 255,
                    g: e >> 16 & 255,
                    b: e >> 8 & 255,
                    a: 255 & e,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(n) {
                n || (n = {}), n.color || (n.color = {});
                var t = void 0 === n.margin || null === n.margin || n.margin < 0 ? 4 : n.margin,
                    r = n.width && n.width >= 21 ? n.width : void 0,
                    o = n.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: t,
                    color: {
                        dark: e(n.color.dark || "#000000ff"),
                        light: e(n.color.light || "#ffffffff")
                    },
                    type: n.type,
                    rendererOpts: n.rendererOpts || {}
                }
            }, t.getScale = function(n, t) {
                return t.width && t.width >= n + 2 * t.margin ? t.width / (n + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(n, e) {
                var r = t.getScale(n, e);
                return Math.floor((n + 2 * e.margin) * r)
            }, t.qrToImageData = function(n, e, r) {
                for (var o = e.modules.size, data = e.modules.data, c = t.getScale(o, r), l = Math.floor((o + 2 * r.margin) * c), f = r.margin * c, d = [r.color.light, r.color.dark], i = 0; i < l; i++)
                    for (var h = 0; h < l; h++) {
                        var m = 4 * (i * l + h),
                            _ = r.color.light;
                        if (i >= f && h >= f && i < l - f && h < l - f) _ = d[data[Math.floor((i - f) / c) * o + Math.floor((h - f) / c)] ? 1 : 0];
                        n[m++] = _.r, n[m++] = _.g, n[m++] = _.b, n[m] = _.a
                    }
            }
        }
    }
]);