(window.webpackJsonp = window.webpackJsonp || []).push([
    [45], {
        133: function(e, t, r) {
            "use strict";
            r.d(t, "l", (function() {
                return pe
            })), r.d(t, "d", (function() {
                return l
            })), r.d(t, "a", (function() {
                return E
            })), r.d(t, "e", (function() {
                return f
            })), r.d(t, "b", (function() {
                return H
            })), r.d(t, "k", (function() {
                return B
            })), r.d(t, "i", (function() {
                return T
            })), r.d(t, "g", (function() {
                return m
            })), r.d(t, "h", (function() {
                return _
            })), r.d(t, "j", (function() {
                return A
            })), r.d(t, "f", (function() {
                return P
            })), r.d(t, "c", (function() {
                return S
            }));
            var n, h, o, c = r(14);

            function l(e) {
                return e.type === h.literal
            }

            function E(e) {
                return e.type === h.argument
            }

            function f(e) {
                return e.type === h.number
            }

            function H(e) {
                return e.type === h.date
            }

            function B(e) {
                return e.type === h.time
            }

            function T(e) {
                return e.type === h.select
            }

            function m(e) {
                return e.type === h.plural
            }

            function _(e) {
                return e.type === h.pound
            }

            function A(e) {
                return e.type === h.tag
            }

            function P(e) {
                return !(!e || "object" != typeof e || e.type !== o.number)
            }

            function S(e) {
                return !(!e || "object" != typeof e || e.type !== o.dateTime)
            }! function(e) {
                e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
            }(n || (n = {})),
            function(e) {
                e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
            }(h || (h = {})),
            function(e) {
                e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
            }(o || (o = {}));
            var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                L = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

            function v(e) {
                var t = {};
                return e.replace(L, (function(e) {
                    var r = e.length;
                    switch (e[0]) {
                        case "G":
                            t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                            break;
                        case "y":
                            t.year = 2 === r ? "2-digit" : "numeric";
                            break;
                        case "Y":
                        case "u":
                        case "U":
                        case "r":
                            throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                        case "q":
                        case "Q":
                            throw new RangeError("`q/Q` (quarter) patterns are not supported");
                        case "M":
                        case "L":
                            t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
                            break;
                        case "w":
                        case "W":
                            throw new RangeError("`w/W` (week) patterns are not supported");
                        case "d":
                            t.day = ["numeric", "2-digit"][r - 1];
                            break;
                        case "D":
                        case "F":
                        case "g":
                            throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                        case "E":
                            t.weekday = 4 === r ? "short" : 5 === r ? "narrow" : "short";
                            break;
                        case "e":
                            if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "c":
                            if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                            t.weekday = ["short", "long", "narrow", "short"][r - 4];
                            break;
                        case "a":
                            t.hour12 = !0;
                            break;
                        case "b":
                        case "B":
                            throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                        case "h":
                            t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "H":
                            t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "K":
                            t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "k":
                            t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
                            break;
                        case "j":
                        case "J":
                        case "C":
                            throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                        case "m":
                            t.minute = ["numeric", "2-digit"][r - 1];
                            break;
                        case "s":
                            t.second = ["numeric", "2-digit"][r - 1];
                            break;
                        case "S":
                        case "A":
                            throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                        case "z":
                            t.timeZoneName = r < 4 ? "short" : "long";
                            break;
                        case "Z":
                        case "O":
                        case "v":
                        case "V":
                        case "X":
                        case "x":
                            throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                    }
                    return ""
                })), t
            }
            var d = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
            var N = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
                C = /^(@+)?(\+|#+)?[rs]?$/g,
                R = /(\*)(0+)|(#+)(0+)|(0+)/g,
                O = /^(0+)$/;

            function I(e) {
                var t = {};
                return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(C, (function(e, r, n) {
                    return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
                })), t
            }

            function M(e) {
                switch (e) {
                    case "sign-auto":
                        return {
                            signDisplay: "auto"
                        };
                    case "sign-accounting":
                    case "()":
                        return {
                            currencySign: "accounting"
                        };
                    case "sign-always":
                    case "+!":
                        return {
                            signDisplay: "always"
                        };
                    case "sign-accounting-always":
                    case "()!":
                        return {
                            signDisplay: "always",
                            currencySign: "accounting"
                        };
                    case "sign-except-zero":
                    case "+?":
                        return {
                            signDisplay: "exceptZero"
                        };
                    case "sign-accounting-except-zero":
                    case "()?":
                        return {
                            signDisplay: "exceptZero",
                            currencySign: "accounting"
                        };
                    case "sign-never":
                    case "+_":
                        return {
                            signDisplay: "never"
                        }
                }
            }

            function U(e) {
                var t;
                if ("E" === e[0] && "E" === e[1] ? (t = {
                        notation: "engineering"
                    }, e = e.slice(2)) : "E" === e[0] && (t = {
                        notation: "scientific"
                    }, e = e.slice(1)), t) {
                    var r = e.slice(0, 2);
                    if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !O.test(e)) throw new Error("Malformed concise eng/scientific notation");
                    t.minimumIntegerDigits = e.length
                }
                return t
            }

            function G(e) {
                var t = M(e);
                return t || {}
            }

            function D(e) {
                for (var t = {}, r = 0, n = e; r < n.length; r++) {
                    var h = n[r];
                    switch (h.stem) {
                        case "percent":
                        case "%":
                            t.style = "percent";
                            continue;
                        case "%x100":
                            t.style = "percent", t.scale = 100;
                            continue;
                        case "currency":
                            t.style = "currency", t.currency = h.options[0];
                            continue;
                        case "group-off":
                        case ",_":
                            t.useGrouping = !1;
                            continue;
                        case "precision-integer":
                        case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                        case "unit":
                            t.style = "unit", t.unit = h.options[0].replace(/^(.*?)-/, "");
                            continue;
                        case "compact-short":
                        case "K":
                            t.notation = "compact", t.compactDisplay = "short";
                            continue;
                        case "compact-long":
                        case "KK":
                            t.notation = "compact", t.compactDisplay = "long";
                            continue;
                        case "scientific":
                            t = Object(c.a)(Object(c.a)(Object(c.a)({}, t), {
                                notation: "scientific"
                            }), h.options.reduce((function(e, t) {
                                return Object(c.a)(Object(c.a)({}, e), G(t))
                            }), {}));
                            continue;
                        case "engineering":
                            t = Object(c.a)(Object(c.a)(Object(c.a)({}, t), {
                                notation: "engineering"
                            }), h.options.reduce((function(e, t) {
                                return Object(c.a)(Object(c.a)({}, e), G(t))
                            }), {}));
                            continue;
                        case "notation-simple":
                            t.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                            continue;
                        case "unit-width-short":
                            t.currencyDisplay = "code", t.unitDisplay = "short";
                            continue;
                        case "unit-width-full-name":
                            t.currencyDisplay = "name", t.unitDisplay = "long";
                            continue;
                        case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                        case "scale":
                            t.scale = parseFloat(h.options[0]);
                            continue;
                        case "integer-width":
                            if (h.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                            h.options[0].replace(R, (function(e, r, n, h, o, c) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else {
                                    if (h && o) throw new Error("We currently do not support maximum integer digits");
                                    if (c) throw new Error("We currently do not support exact integer digits")
                                }
                                return ""
                            }));
                            continue
                    }
                    if (O.test(h.stem)) t.minimumIntegerDigits = h.stem.length;
                    else if (N.test(h.stem)) {
                        if (h.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        h.stem.replace(N, (function(e, r, n, h, o, c) {
                            return "*" === n ? t.minimumFractionDigits = r.length : h && "#" === h[0] ? t.maximumFractionDigits = h.length : o && c ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + c.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                        }));
                        var o = h.options[0];
                        "w" === o ? t = Object(c.a)(Object(c.a)({}, t), {
                            trailingZeroDisplay: "stripIfInteger"
                        }) : o && (t = Object(c.a)(Object(c.a)({}, t), I(o)))
                    } else if (C.test(h.stem)) t = Object(c.a)(Object(c.a)({}, t), I(h.stem));
                    else {
                        var l = M(h.stem);
                        l && (t = Object(c.a)(Object(c.a)({}, t), l));
                        var E = U(h.stem);
                        E && (t = Object(c.a)(Object(c.a)({}, t), E))
                    }
                }
                return t
            }
            var w, F = {
                AX: ["H"],
                BQ: ["H"],
                CP: ["H"],
                CZ: ["H"],
                DK: ["H"],
                FI: ["H"],
                ID: ["H"],
                IS: ["H"],
                ML: ["H"],
                NE: ["H"],
                RU: ["H"],
                SE: ["H"],
                SJ: ["H"],
                SK: ["H"],
                AS: ["h", "H"],
                BT: ["h", "H"],
                DJ: ["h", "H"],
                ER: ["h", "H"],
                GH: ["h", "H"],
                IN: ["h", "H"],
                LS: ["h", "H"],
                PG: ["h", "H"],
                PW: ["h", "H"],
                SO: ["h", "H"],
                TO: ["h", "H"],
                VU: ["h", "H"],
                WS: ["h", "H"],
                "001": ["H", "h"],
                AL: ["h", "H", "hB"],
                TD: ["h", "H", "hB"],
                "ca-ES": ["H", "h", "hB"],
                CF: ["H", "h", "hB"],
                CM: ["H", "h", "hB"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                LU: ["H", "h", "hB"],
                NP: ["H", "h", "hB"],
                PF: ["H", "h", "hB"],
                SC: ["H", "h", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                TF: ["H", "h", "hB"],
                VA: ["H", "h", "hB"],
                CY: ["h", "H", "hb", "hB"],
                GR: ["h", "H", "hb", "hB"],
                CO: ["h", "H", "hB", "hb"],
                DO: ["h", "H", "hB", "hb"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                NA: ["h", "H", "hB", "hb"],
                PA: ["h", "H", "hB", "hb"],
                PR: ["h", "H", "hB", "hb"],
                VE: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AI: ["H", "h", "hb", "hB"],
                BW: ["H", "h", "hb", "hB"],
                BZ: ["H", "h", "hb", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CX: ["H", "h", "hb", "hB"],
                DG: ["H", "h", "hb", "hB"],
                FK: ["H", "h", "hb", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GI: ["H", "h", "hb", "hB"],
                IE: ["H", "h", "hb", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IO: ["H", "h", "hb", "hB"],
                JE: ["H", "h", "hb", "hB"],
                LT: ["H", "h", "hb", "hB"],
                MK: ["H", "h", "hb", "hB"],
                MN: ["H", "h", "hb", "hB"],
                MS: ["H", "h", "hb", "hB"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                PN: ["H", "h", "hb", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SX: ["H", "h", "hb", "hB"],
                TA: ["H", "h", "hb", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                "af-ZA": ["H", "h", "hB", "hb"],
                AR: ["H", "h", "hB", "hb"],
                CL: ["H", "h", "hB", "hb"],
                CR: ["H", "h", "hB", "hb"],
                CU: ["H", "h", "hB", "hb"],
                EA: ["H", "h", "hB", "hb"],
                "es-BO": ["H", "h", "hB", "hb"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-EC": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "es-PE": ["H", "h", "hB", "hb"],
                GT: ["H", "h", "hB", "hb"],
                HN: ["H", "h", "hB", "hb"],
                IC: ["H", "h", "hB", "hb"],
                KG: ["H", "h", "hB", "hb"],
                KM: ["H", "h", "hB", "hb"],
                LK: ["H", "h", "hB", "hb"],
                MA: ["H", "h", "hB", "hb"],
                MX: ["H", "h", "hB", "hb"],
                NI: ["H", "h", "hB", "hb"],
                PY: ["H", "h", "hB", "hb"],
                SV: ["H", "h", "hB", "hb"],
                UY: ["H", "h", "hB", "hb"],
                JP: ["H", "h", "K"],
                AD: ["H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AT: ["H", "hB"],
                AW: ["H", "hB"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BR: ["H", "hB"],
                CG: ["H", "hB"],
                CI: ["H", "hB"],
                CV: ["H", "hB"],
                DE: ["H", "hB"],
                EE: ["H", "hB"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GF: ["H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GW: ["H", "hB"],
                HR: ["H", "hB"],
                IL: ["H", "hB"],
                IT: ["H", "hB"],
                KZ: ["H", "hB"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                MF: ["H", "hB"],
                MQ: ["H", "hB"],
                MZ: ["H", "hB"],
                NC: ["H", "hB"],
                NL: ["H", "hB"],
                PM: ["H", "hB"],
                PT: ["H", "hB"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                SI: ["H", "hB"],
                SR: ["H", "hB"],
                ST: ["H", "hB"],
                TG: ["H", "hB"],
                TR: ["H", "hB"],
                WF: ["H", "hB"],
                YT: ["H", "hB"],
                BD: ["h", "hB", "H"],
                PK: ["h", "hB", "H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BG: ["H", "hB", "h"],
                CH: ["H", "hB", "h"],
                GE: ["H", "hB", "h"],
                LI: ["H", "hB", "h"],
                ME: ["H", "hB", "h"],
                RS: ["H", "hB", "h"],
                UA: ["H", "hB", "h"],
                UZ: ["H", "hB", "h"],
                XK: ["H", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                BB: ["h", "hb", "H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                CA: ["h", "hb", "H", "hB"],
                DM: ["h", "hb", "H", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                FJ: ["h", "hb", "H", "hB"],
                FM: ["h", "hb", "H", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GM: ["h", "hb", "H", "hB"],
                GU: ["h", "hb", "H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                JM: ["h", "hb", "H", "hB"],
                KI: ["h", "hb", "H", "hB"],
                KN: ["h", "hb", "H", "hB"],
                KY: ["h", "hb", "H", "hB"],
                LC: ["h", "hb", "H", "hB"],
                LR: ["h", "hb", "H", "hB"],
                MH: ["h", "hb", "H", "hB"],
                MP: ["h", "hb", "H", "hB"],
                MW: ["h", "hb", "H", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                SB: ["h", "hb", "H", "hB"],
                SG: ["h", "hb", "H", "hB"],
                SL: ["h", "hb", "H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                SZ: ["h", "hb", "H", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                BO: ["H", "hB", "h", "hb"],
                EC: ["H", "hB", "h", "hb"],
                ES: ["H", "hB", "h", "hb"],
                GQ: ["H", "hB", "h", "hb"],
                PE: ["H", "hB", "h", "hb"],
                AE: ["h", "hB", "hb", "H"],
                "ar-001": ["h", "hB", "hb", "H"],
                BH: ["h", "hB", "hb", "H"],
                DZ: ["h", "hB", "hb", "H"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                HK: ["h", "hB", "hb", "H"],
                IQ: ["h", "hB", "hb", "H"],
                JO: ["h", "hB", "hb", "H"],
                KW: ["h", "hB", "hb", "H"],
                LB: ["h", "hB", "hb", "H"],
                LY: ["h", "hB", "hb", "H"],
                MO: ["h", "hB", "hb", "H"],
                MR: ["h", "hB", "hb", "H"],
                OM: ["h", "hB", "hb", "H"],
                PH: ["h", "hB", "hb", "H"],
                PS: ["h", "hB", "hb", "H"],
                QA: ["h", "hB", "hb", "H"],
                SA: ["h", "hB", "hb", "H"],
                SD: ["h", "hB", "hb", "H"],
                SY: ["h", "hB", "hb", "H"],
                TN: ["h", "hB", "hb", "H"],
                YE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                LA: ["H", "hb", "hB", "h"],
                CN: ["H", "hB", "hb", "h"],
                LV: ["H", "hB", "hb", "h"],
                TL: ["H", "hB", "hb", "h"],
                "zu-ZA": ["H", "hB", "hb", "h"],
                CD: ["hB", "H"],
                IR: ["hB", "H"],
                "hi-IN": ["hB", "h", "H"],
                "kn-IN": ["hB", "h", "H"],
                "ml-IN": ["hB", "h", "H"],
                "te-IN": ["hB", "h", "H"],
                KH: ["hB", "h", "H", "hb"],
                "ta-IN": ["hB", "h", "hb", "H"],
                BN: ["hb", "hB", "h", "H"],
                MY: ["hb", "hB", "h", "H"],
                ET: ["hB", "hb", "h", "H"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                TW: ["hB", "hb", "h", "H"],
                KE: ["hB", "hb", "H", "h"],
                MM: ["hB", "hb", "H", "h"],
                TZ: ["hB", "hb", "H", "h"],
                UG: ["hB", "hb", "H", "h"]
            };

            function k(e) {
                var t = e.hourCycle;
                if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
                    case "h24":
                        return "k";
                    case "h23":
                        return "H";
                    case "h12":
                        return "h";
                    case "h11":
                        return "K";
                    default:
                        throw new Error("Invalid hourCycle")
                }
                var r, n = e.language;
                return "root" !== n && (r = e.maximize().region), (F[r || ""] || F[n || ""] || F["".concat(n, "-001")] || F["001"])[0]
            }
            var X = new RegExp("^".concat(y.source, "*")),
                V = new RegExp("".concat(y.source, "*$"));

            function K(e, t) {
                return {
                    start: e,
                    end: t
                }
            }
            var j = !!String.prototype.startsWith,
                x = !!String.fromCodePoint,
                Y = !!Object.fromEntries,
                Z = !!String.prototype.codePointAt,
                W = !!String.prototype.trimStart,
                J = !!String.prototype.trimEnd,
                Q = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
                    return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
                },
                z = !0;
            try {
                z = "a" === (null === (w = se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === w ? void 0 : w[0])
            } catch (e) {
                z = !1
            }
            var $, ee = j ? function(s, e, t) {
                    return s.startsWith(e, t)
                } : function(s, e, t) {
                    return s.slice(t, t + e.length) === e
                },
                te = x ? String.fromCodePoint : function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var code, r = "", n = e.length, i = 0; n > i;) {
                        if ((code = e[i++]) > 1114111) throw RangeError(code + " is not a valid code point");
                        r += code < 65536 ? String.fromCharCode(code) : String.fromCharCode(55296 + ((code -= 65536) >> 10), code % 1024 + 56320)
                    }
                    return r
                },
                re = Y ? Object.fromEntries : function(e) {
                    for (var t = {}, r = 0, n = e; r < n.length; r++) {
                        var h = n[r],
                            o = h[0],
                            c = h[1];
                        t[o] = c
                    }
                    return t
                },
                ie = Z ? function(s, e) {
                    return s.codePointAt(e)
                } : function(s, e) {
                    var t = s.length;
                    if (!(e < 0 || e >= t)) {
                        var r, n = s.charCodeAt(e);
                        return n < 55296 || n > 56319 || e + 1 === t || (r = s.charCodeAt(e + 1)) < 56320 || r > 57343 ? n : r - 56320 + (n - 55296 << 10) + 65536
                    }
                },
                ne = W ? function(s) {
                    return s.trimStart()
                } : function(s) {
                    return s.replace(X, "")
                },
                he = J ? function(s) {
                    return s.trimEnd()
                } : function(s) {
                    return s.replace(V, "")
                };

            function se(s, e) {
                return new RegExp(s, e)
            }
            if (z) {
                var oe = se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
                $ = function(s, e) {
                    var t;
                    return oe.lastIndex = e, null !== (t = oe.exec(s)[1]) && void 0 !== t ? t : ""
                }
            } else $ = function(s, e) {
                for (var t = [];;) {
                    var r = ie(s, e);
                    if (void 0 === r || ue(r) || le(r)) break;
                    t.push(r), e += r >= 65536 ? 2 : 1
                }
                return te.apply(void 0, t)
            };
            var ae = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this.message = e, this.position = {
                        offset: 0,
                        line: 1,
                        column: 1
                    }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
                }
                return e.prototype.parse = function() {
                    if (0 !== this.offset()) throw Error("parser can only be used once");
                    return this.parseMessage(0, "", !1)
                }, e.prototype.parseMessage = function(e, t, r) {
                    for (var o = []; !this.isEOF();) {
                        var c = this.char();
                        if (123 === c) {
                            if ((l = this.parseArgument(e, r)).err) return l;
                            o.push(l.val)
                        } else {
                            if (125 === c && e > 0) break;
                            if (35 !== c || "plural" !== t && "selectordinal" !== t) {
                                if (60 === c && !this.ignoreTag && 47 === this.peek()) {
                                    if (r) break;
                                    return this.error(n.UNMATCHED_CLOSING_TAG, K(this.clonePosition(), this.clonePosition()))
                                }
                                if (60 === c && !this.ignoreTag && ce(this.peek() || 0)) {
                                    if ((l = this.parseTag(e, t)).err) return l;
                                    o.push(l.val)
                                } else {
                                    var l;
                                    if ((l = this.parseLiteral(e, t)).err) return l;
                                    o.push(l.val)
                                }
                            } else {
                                var E = this.clonePosition();
                                this.bump(), o.push({
                                    type: h.pound,
                                    location: K(E, this.clonePosition())
                                })
                            }
                        }
                    }
                    return {
                        val: o,
                        err: null
                    }
                }, e.prototype.parseTag = function(e, t) {
                    var r = this.clonePosition();
                    this.bump();
                    var o = this.parseTagName();
                    if (this.bumpSpace(), this.bumpIf("/>")) return {
                        val: {
                            type: h.literal,
                            value: "<".concat(o, "/>"),
                            location: K(r, this.clonePosition())
                        },
                        err: null
                    };
                    if (this.bumpIf(">")) {
                        var c = this.parseMessage(e + 1, t, !0);
                        if (c.err) return c;
                        var l = c.val,
                            E = this.clonePosition();
                        if (this.bumpIf("</")) {
                            if (this.isEOF() || !ce(this.char())) return this.error(n.INVALID_TAG, K(E, this.clonePosition()));
                            var f = this.clonePosition();
                            return o !== this.parseTagName() ? this.error(n.UNMATCHED_CLOSING_TAG, K(f, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                                val: {
                                    type: h.tag,
                                    value: o,
                                    children: l,
                                    location: K(r, this.clonePosition())
                                },
                                err: null
                            } : this.error(n.INVALID_TAG, K(E, this.clonePosition())))
                        }
                        return this.error(n.UNCLOSED_TAG, K(r, this.clonePosition()))
                    }
                    return this.error(n.INVALID_TAG, K(r, this.clonePosition()))
                }, e.prototype.parseTagName = function() {
                    var e, t = this.offset();
                    for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                    return this.message.slice(t, this.offset())
                }, e.prototype.parseLiteral = function(e, t) {
                    for (var r = this.clonePosition(), n = "";;) {
                        var o = this.tryParseQuote(t);
                        if (o) n += o;
                        else {
                            var c = this.tryParseUnquoted(e, t);
                            if (c) n += c;
                            else {
                                var l = this.tryParseLeftAngleBracket();
                                if (!l) break;
                                n += l
                            }
                        }
                    }
                    var E = K(r, this.clonePosition());
                    return {
                        val: {
                            type: h.literal,
                            value: n,
                            location: E
                        },
                        err: null
                    }
                }, e.prototype.tryParseLeftAngleBracket = function() {
                    return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ce(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
                    var e
                }, e.prototype.tryParseQuote = function(e) {
                    if (this.isEOF() || 39 !== this.char()) return null;
                    switch (this.peek()) {
                        case 39:
                            return this.bump(), this.bump(), "'";
                        case 123:
                        case 60:
                        case 62:
                        case 125:
                            break;
                        case 35:
                            if ("plural" === e || "selectordinal" === e) break;
                            return null;
                        default:
                            return null
                    }
                    this.bump();
                    var t = [this.char()];
                    for (this.bump(); !this.isEOF();) {
                        var r = this.char();
                        if (39 === r) {
                            if (39 !== this.peek()) {
                                this.bump();
                                break
                            }
                            t.push(39), this.bump()
                        } else t.push(r);
                        this.bump()
                    }
                    return te.apply(void 0, t)
                }, e.prototype.tryParseUnquoted = function(e, t) {
                    if (this.isEOF()) return null;
                    var r = this.char();
                    return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), te(r))
                }, e.prototype.parseArgument = function(e, t) {
                    var r = this.clonePosition();
                    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition()));
                    if (125 === this.char()) return this.bump(), this.error(n.EMPTY_ARGUMENT, K(r, this.clonePosition()));
                    var o = this.parseIdentifierIfPossible().value;
                    if (!o) return this.error(n.MALFORMED_ARGUMENT, K(r, this.clonePosition()));
                    if (this.bumpSpace(), this.isEOF()) return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition()));
                    switch (this.char()) {
                        case 125:
                            return this.bump(), {
                                val: {
                                    type: h.argument,
                                    value: o,
                                    location: K(r, this.clonePosition())
                                },
                                err: null
                            };
                        case 44:
                            return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, K(r, this.clonePosition())) : this.parseArgumentOptions(e, t, o, r);
                        default:
                            return this.error(n.MALFORMED_ARGUMENT, K(r, this.clonePosition()))
                    }
                }, e.prototype.parseIdentifierIfPossible = function() {
                    var e = this.clonePosition(),
                        t = this.offset(),
                        r = $(this.message, t),
                        n = t + r.length;
                    return this.bumpTo(n), {
                        value: r,
                        location: K(e, this.clonePosition())
                    }
                }, e.prototype.parseArgumentOptions = function(e, t, r, l) {
                    var E, f = this.clonePosition(),
                        H = this.parseIdentifierIfPossible().value,
                        B = this.clonePosition();
                    switch (H) {
                        case "":
                            return this.error(n.EXPECT_ARGUMENT_TYPE, K(f, B));
                        case "number":
                        case "date":
                        case "time":
                            this.bumpSpace();
                            var T = null;
                            if (this.bumpIf(",")) {
                                this.bumpSpace();
                                var m = this.clonePosition();
                                if ((d = this.parseSimpleArgStyleIfPossible()).err) return d;
                                if (0 === (style = he(d.val)).length) return this.error(n.EXPECT_ARGUMENT_STYLE, K(this.clonePosition(), this.clonePosition()));
                                T = {
                                    style: style,
                                    styleLocation: K(m, this.clonePosition())
                                }
                            }
                            if ((N = this.tryParseArgumentClose(l)).err) return N;
                            var _ = K(l, this.clonePosition());
                            if (T && ee(null == T ? void 0 : T.style, "::", 0)) {
                                var A = ne(T.style.slice(2));
                                if ("number" === H) return (d = this.parseNumberSkeletonFromString(A, T.styleLocation)).err ? d : {
                                    val: {
                                        type: h.number,
                                        value: r,
                                        location: _,
                                        style: d.val
                                    },
                                    err: null
                                };
                                if (0 === A.length) return this.error(n.EXPECT_DATE_TIME_SKELETON, _);
                                var P = A;
                                this.locale && (P = function(e, t) {
                                    for (var r = "", n = 0; n < e.length; n++) {
                                        var h = e.charAt(n);
                                        if ("j" === h) {
                                            for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === h;) o++, n++;
                                            var c = 1 + (1 & o),
                                                l = o < 2 ? 1 : 3 + (o >> 1),
                                                E = k(t);
                                            for ("H" != E && "k" != E || (l = 0); l-- > 0;) r += "a";
                                            for (; c-- > 0;) r = E + r
                                        } else r += "J" === h ? "H" : h
                                    }
                                    return r
                                }(A, this.locale));
                                var style = {
                                    type: o.dateTime,
                                    pattern: P,
                                    location: T.styleLocation,
                                    parsedOptions: this.shouldParseSkeletons ? v(P) : {}
                                };
                                return {
                                    val: {
                                        type: "date" === H ? h.date : h.time,
                                        value: r,
                                        location: _,
                                        style: style
                                    },
                                    err: null
                                }
                            }
                            return {
                                val: {
                                    type: "number" === H ? h.number : "date" === H ? h.date : h.time,
                                    value: r,
                                    location: _,
                                    style: null !== (E = null == T ? void 0 : T.style) && void 0 !== E ? E : null
                                },
                                err: null
                            };
                        case "plural":
                        case "selectordinal":
                        case "select":
                            var S = this.clonePosition();
                            if (this.bumpSpace(), !this.bumpIf(",")) return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS, K(S, Object(c.a)({}, S)));
                            this.bumpSpace();
                            var y = this.parseIdentifierIfPossible(),
                                L = 0;
                            if ("select" !== H && "offset" === y.value) {
                                if (!this.bumpIf(":")) return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K(this.clonePosition(), this.clonePosition()));
                                var d;
                                if (this.bumpSpace(), (d = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return d;
                                this.bumpSpace(), y = this.parseIdentifierIfPossible(), L = d.val
                            }
                            var N, C = this.tryParsePluralOrSelectOptions(e, H, t, y);
                            if (C.err) return C;
                            if ((N = this.tryParseArgumentClose(l)).err) return N;
                            var R = K(l, this.clonePosition());
                            return "select" === H ? {
                                val: {
                                    type: h.select,
                                    value: r,
                                    options: re(C.val),
                                    location: R
                                },
                                err: null
                            } : {
                                val: {
                                    type: h.plural,
                                    value: r,
                                    options: re(C.val),
                                    offset: L,
                                    pluralType: "plural" === H ? "cardinal" : "ordinal",
                                    location: R
                                },
                                err: null
                            };
                        default:
                            return this.error(n.INVALID_ARGUMENT_TYPE, K(f, B))
                    }
                }, e.prototype.tryParseArgumentClose = function(e) {
                    return this.isEOF() || 125 !== this.char() ? this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE, K(e, this.clonePosition())) : (this.bump(), {
                        val: !0,
                        err: null
                    })
                }, e.prototype.parseSimpleArgStyleIfPossible = function() {
                    for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
                        switch (this.char()) {
                            case 39:
                                this.bump();
                                var r = this.clonePosition();
                                if (!this.bumpUntil("'")) return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, K(r, this.clonePosition()));
                                this.bump();
                                break;
                            case 123:
                                e += 1, this.bump();
                                break;
                            case 125:
                                if (!(e > 0)) return {
                                    val: this.message.slice(t.offset, this.offset()),
                                    err: null
                                };
                                e -= 1;
                                break;
                            default:
                                this.bump()
                        }
                    }
                    return {
                        val: this.message.slice(t.offset, this.offset()),
                        err: null
                    }
                }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
                    var r = [];
                    try {
                        r = function(e) {
                            if (0 === e.length) throw new Error("Number skeleton cannot be empty");
                            for (var t = [], r = 0, n = e.split(d).filter((function(e) {
                                    return e.length > 0
                                })); r < n.length; r++) {
                                var h = n[r].split("/");
                                if (0 === h.length) throw new Error("Invalid number skeleton");
                                for (var o = h[0], c = h.slice(1), l = 0, E = c; l < E.length; l++)
                                    if (0 === E[l].length) throw new Error("Invalid number skeleton");
                                t.push({
                                    stem: o,
                                    options: c
                                })
                            }
                            return t
                        }(e)
                    } catch (e) {
                        return this.error(n.INVALID_NUMBER_SKELETON, t)
                    }
                    return {
                        val: {
                            type: o.number,
                            tokens: r,
                            location: t,
                            parsedOptions: this.shouldParseSkeletons ? D(r) : {}
                        },
                        err: null
                    }
                }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, h) {
                    for (var o, c = !1, l = [], E = new Set, f = h.value, H = h.location;;) {
                        if (0 === f.length) {
                            var B = this.clonePosition();
                            if ("select" === t || !this.bumpIf("=")) break;
                            var T = this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR, n.INVALID_PLURAL_ARGUMENT_SELECTOR);
                            if (T.err) return T;
                            H = K(B, this.clonePosition()), f = this.message.slice(B.offset, this.offset())
                        }
                        if (E.has(f)) return this.error("select" === t ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, H);
                        "other" === f && (c = !0), this.bumpSpace();
                        var m = this.clonePosition();
                        if (!this.bumpIf("{")) return this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, K(this.clonePosition(), this.clonePosition()));
                        var _ = this.parseMessage(e + 1, t, r);
                        if (_.err) return _;
                        var A = this.tryParseArgumentClose(m);
                        if (A.err) return A;
                        l.push([f, {
                            value: _.val,
                            location: K(m, this.clonePosition())
                        }]), E.add(f), this.bumpSpace(), f = (o = this.parseIdentifierIfPossible()).value, H = o.location
                    }
                    return 0 === l.length ? this.error("select" === t ? n.EXPECT_SELECT_ARGUMENT_SELECTOR : n.EXPECT_PLURAL_ARGUMENT_SELECTOR, K(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !c ? this.error(n.MISSING_OTHER_CLAUSE, K(this.clonePosition(), this.clonePosition())) : {
                        val: l,
                        err: null
                    }
                }, e.prototype.tryParseDecimalInteger = function(e, t) {
                    var r = 1,
                        n = this.clonePosition();
                    this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                    for (var h = !1, o = 0; !this.isEOF();) {
                        var c = this.char();
                        if (!(c >= 48 && c <= 57)) break;
                        h = !0, o = 10 * o + (c - 48), this.bump()
                    }
                    var l = K(n, this.clonePosition());
                    return h ? Q(o *= r) ? {
                        val: o,
                        err: null
                    } : this.error(t, l) : this.error(e, l)
                }, e.prototype.offset = function() {
                    return this.position.offset
                }, e.prototype.isEOF = function() {
                    return this.offset() === this.message.length
                }, e.prototype.clonePosition = function() {
                    return {
                        offset: this.position.offset,
                        line: this.position.line,
                        column: this.position.column
                    }
                }, e.prototype.char = function() {
                    var e = this.position.offset;
                    if (e >= this.message.length) throw Error("out of bound");
                    var code = ie(this.message, e);
                    if (void 0 === code) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                    return code
                }, e.prototype.error = function(e, t) {
                    return {
                        val: null,
                        err: {
                            kind: e,
                            message: this.message,
                            location: t
                        }
                    }
                }, e.prototype.bump = function() {
                    if (!this.isEOF()) {
                        var code = this.char();
                        10 === code ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += code < 65536 ? 1 : 2)
                    }
                }, e.prototype.bumpIf = function(e) {
                    if (ee(this.message, e, this.offset())) {
                        for (var i = 0; i < e.length; i++) this.bump();
                        return !0
                    }
                    return !1
                }, e.prototype.bumpUntil = function(pattern) {
                    var e = this.offset(),
                        t = this.message.indexOf(pattern, e);
                    return t >= 0 ? (this.bumpTo(t), !0) : (this.bumpTo(this.message.length), !1)
                }, e.prototype.bumpTo = function(e) {
                    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
                    for (e = Math.min(e, this.message.length);;) {
                        var t = this.offset();
                        if (t === e) break;
                        if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
                        if (this.bump(), this.isEOF()) break
                    }
                }, e.prototype.bumpSpace = function() {
                    for (; !this.isEOF() && ue(this.char());) this.bump()
                }, e.prototype.peek = function() {
                    if (this.isEOF()) return null;
                    var code = this.char(),
                        e = this.offset(),
                        t = this.message.charCodeAt(e + (code >= 65536 ? 2 : 1));
                    return null != t ? t : null
                }, e
            }();

            function ce(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function ue(e) {
                return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
            }

            function le(e) {
                return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
            }

            function Ee(e) {
                e.forEach((function(e) {
                    if (delete e.location, T(e) || m(e))
                        for (var t in e.options) delete e.options[t].location, Ee(e.options[t].value);
                    else f(e) && P(e.style) || (H(e) || B(e)) && S(e.style) ? delete e.style.location : A(e) && Ee(e.children)
                }))
            }

            function pe(e, t) {
                void 0 === t && (t = {}), t = Object(c.a)({
                    shouldParseSkeletons: !0,
                    requiresOtherClause: !0
                }, t);
                var r = new ae(e, t).parse();
                if (r.err) {
                    var h = SyntaxError(n[r.err.kind]);
                    throw h.location = r.err.location, h.originalMessage = r.err.message, h
                }
                return (null == t ? void 0 : t.captureLocation) || Ee(r.val), r.val
            }
        },
        290: function(e, t, r) {
            "use strict";

            function n(e, t) {
                var r = t && t.cache ? t.cache : H,
                    n = t && t.serializer ? t.serializer : E;
                return (t && t.strategy ? t.strategy : l)(e, {
                    cache: r,
                    serializer: n
                })
            }

            function h(e, t, r, n) {
                var h, o = null == (h = n) || "number" == typeof h || "boolean" == typeof h ? n : r(n),
                    c = t.get(o);
                return void 0 === c && (c = e.call(this, n), t.set(o, c)), c
            }

            function o(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    h = r(n),
                    o = t.get(h);
                return void 0 === o && (o = e.apply(this, n), t.set(h, o)), o
            }

            function c(e, t, r, n, h) {
                return r.bind(t, e, n, h)
            }

            function l(e, t) {
                return c(e, this, 1 === e.length ? h : o, t.cache.create(), t.serializer)
            }
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return B
            }));
            var E = function() {
                return JSON.stringify(arguments)
            };

            function f() {
                this.cache = Object.create(null)
            }
            f.prototype.get = function(e) {
                return this.cache[e]
            }, f.prototype.set = function(e, t) {
                this.cache[e] = t
            };
            var H = {
                    create: function() {
                        return new f
                    }
                },
                B = {
                    variadic: function(e, t) {
                        return c(e, this, o, t.cache.create(), t.serializer)
                    },
                    monadic: function(e, t) {
                        return c(e, this, h, t.cache.create(), t.serializer)
                    }
                }
        }
    }
]);