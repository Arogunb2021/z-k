/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [124], {
        954: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "૧",
                        2: "૨",
                        3: "૩",
                        4: "૪",
                        5: "૫",
                        6: "૬",
                        7: "૭",
                        8: "૮",
                        9: "૯",
                        0: "૦"
                    },
                    _ = {
                        "૧": "1",
                        "૨": "2",
                        "૩": "3",
                        "૪": "4",
                        "૫": "5",
                        "૬": "6",
                        "૭": "7",
                        "૮": "8",
                        "૯": "9",
                        "૦": "0"
                    };
                e.defineLocale("gu", {
                    months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                    monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                    weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                    weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm વાગ્યે",
                        LTS: "A h:mm:ss વાગ્યે",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                        LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                    },
                    calendar: {
                        sameDay: "[આજ] LT",
                        nextDay: "[કાલે] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ગઇકાલે] LT",
                        lastWeek: "[પાછલા] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s મા",
                        past: "%s પહેલા",
                        s: "અમુક પળો",
                        ss: "%d સેકંડ",
                        m: "એક મિનિટ",
                        mm: "%d મિનિટ",
                        h: "એક કલાક",
                        hh: "%d કલાક",
                        d: "એક દિવસ",
                        dd: "%d દિવસ",
                        M: "એક મહિનો",
                        MM: "%d મહિનો",
                        y: "એક વર્ષ",
                        yy: "%d વર્ષ"
                    },
                    preparse: function(e) {
                        return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        955: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("he", {
                    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                    monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                    weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY HH:mm",
                        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[היום ב־]LT",
                        nextDay: "[מחר ב־]LT",
                        nextWeek: "dddd [בשעה] LT",
                        lastDay: "[אתמול ב־]LT",
                        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "בעוד %s",
                        past: "לפני %s",
                        s: "מספר שניות",
                        ss: "%d שניות",
                        m: "דקה",
                        mm: "%d דקות",
                        h: "שעה",
                        hh: function(e) {
                            return 2 === e ? "שעתיים" : e + " שעות"
                        },
                        d: "יום",
                        dd: function(e) {
                            return 2 === e ? "יומיים" : e + " ימים"
                        },
                        M: "חודש",
                        MM: function(e) {
                            return 2 === e ? "חודשיים" : e + " חודשים"
                        },
                        y: "שנה",
                        yy: function(e) {
                            return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                        }
                    },
                    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                    isPM: function(input) {
                        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input)
                    },
                    meridiem: function(e, t, _) {
                        return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? _ ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? _ ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                    }
                })
            }(_(11))
        },
        956: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    _ = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    },
                    n = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i],
                    d = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
                e.defineLocale("hi", {
                    months: {
                        format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                        standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                    },
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        LTS: "A h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                    },
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: d,
                    monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                    monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        ss: "%d सेकंड",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /रात|सुबह|दोपहर|शाम/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        957: function(e, t, _) {
            ! function(e) {
                "use strict";

                function t(e, t, _) {
                    var n = e + " ";
                    switch (_) {
                        case "ss":
                            return n += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                        case "dd":
                            return n += 1 === e ? "dan" : "dana";
                        case "MM":
                            return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                        case "yy":
                            return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                    }
                }
                e.defineLocale("hr", {
                    months: {
                        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                    },
                    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM YYYY",
                        LLL: "Do MMMM YYYY H:mm",
                        LLLL: "dddd, Do MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prošlu] [nedjelju] [u] LT";
                                case 3:
                                    return "[prošlu] [srijedu] [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        958: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

                function _(e, t, _, n) {
                    var d = e;
                    switch (_) {
                        case "s":
                            return n || t ? "néhány másodperc" : "néhány másodperce";
                        case "ss":
                            return d + (n || t) ? " másodperc" : " másodperce";
                        case "m":
                            return "egy" + (n || t ? " perc" : " perce");
                        case "mm":
                            return d + (n || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (n || t ? " óra" : " órája");
                        case "hh":
                            return d + (n || t ? " óra" : " órája");
                        case "d":
                            return "egy" + (n || t ? " nap" : " napja");
                        case "dd":
                            return d + (n || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (n || t ? " hónap" : " hónapja");
                        case "MM":
                            return d + (n || t ? " hónap" : " hónapja");
                        case "y":
                            return "egy" + (n || t ? " év" : " éve");
                        case "yy":
                            return d + (n || t ? " év" : " éve")
                    }
                    return ""
                }

                function n(e) {
                    return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
                }
                e.defineLocale("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(input) {
                        return "u" === input.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? !0 === _ ? "de" : "DE" : !0 === _ ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: _,
                        ss: _,
                        m: _,
                        mm: _,
                        h: _,
                        hh: _,
                        d: _,
                        dd: _,
                        M: _,
                        MM: _,
                        y: _,
                        yy: _
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        959: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("hy-am", {
                    months: {
                        format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                        standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                    },
                    monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                    weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY թ.",
                        LLL: "D MMMM YYYY թ., HH:mm",
                        LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                    },
                    calendar: {
                        sameDay: "[այսօր] LT",
                        nextDay: "[վաղը] LT",
                        lastDay: "[երեկ] LT",
                        nextWeek: function() {
                            return "dddd [օրը ժամը] LT"
                        },
                        lastWeek: function() {
                            return "[անցած] dddd [օրը ժամը] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s հետո",
                        past: "%s առաջ",
                        s: "մի քանի վայրկյան",
                        ss: "%d վայրկյան",
                        m: "րոպե",
                        mm: "%d րոպե",
                        h: "ժամ",
                        hh: "%d ժամ",
                        d: "օր",
                        dd: "%d օր",
                        M: "ամիս",
                        MM: "%d ամիս",
                        y: "տարի",
                        yy: "%d տարի"
                    },
                    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                    isPM: function(input) {
                        return /^(ցերեկվա|երեկոյան)$/.test(input)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-ին" : e + "-րդ";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        960: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|siang|sore|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        ss: "%d detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        961: function(e, t, _) {
            ! function(e) {
                "use strict";

                function t(e) {
                    return e % 100 == 11 || e % 10 != 1
                }

                function _(e, _, n, d) {
                    var r = e + " ";
                    switch (n) {
                        case "s":
                            return _ || d ? "nokkrar sekúndur" : "nokkrum sekúndum";
                        case "ss":
                            return t(e) ? r + (_ || d ? "sekúndur" : "sekúndum") : r + "sekúnda";
                        case "m":
                            return _ ? "mínúta" : "mínútu";
                        case "mm":
                            return t(e) ? r + (_ || d ? "mínútur" : "mínútum") : _ ? r + "mínúta" : r + "mínútu";
                        case "hh":
                            return t(e) ? r + (_ || d ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                        case "d":
                            return _ ? "dagur" : d ? "dag" : "degi";
                        case "dd":
                            return t(e) ? _ ? r + "dagar" : r + (d ? "daga" : "dögum") : _ ? r + "dagur" : r + (d ? "dag" : "degi");
                        case "M":
                            return _ ? "mánuður" : d ? "mánuð" : "mánuði";
                        case "MM":
                            return t(e) ? _ ? r + "mánuðir" : r + (d ? "mánuði" : "mánuðum") : _ ? r + "mánuður" : r + (d ? "mánuð" : "mánuði");
                        case "y":
                            return _ || d ? "ár" : "ári";
                        case "yy":
                            return t(e) ? r + (_ || d ? "ár" : "árum") : r + (_ || d ? "ár" : "ári")
                    }
                }
                e.defineLocale("is", {
                    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                    },
                    calendar: {
                        sameDay: "[í dag kl.] LT",
                        nextDay: "[á morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[í gær kl.] LT",
                        lastWeek: "[síðasta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s síðan",
                        s: _,
                        ss: _,
                        m: _,
                        mm: _,
                        h: "klukkustund",
                        hh: _,
                        d: _,
                        dd: _,
                        M: _,
                        MM: _,
                        y: _,
                        yy: _
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        962: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        nextDay: function() {
                            return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        nextWeek: function() {
                            return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        lastDay: function() {
                            return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        lastWeek: function() {
                            return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "tra %s",
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        w: "una settimana",
                        ww: "%d settimane",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        963: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("it-ch", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(s) {
                            return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        964: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ja", {
                    eras: [{
                        since: "2019-05-01",
                        offset: 1,
                        name: "令和",
                        narrow: "㋿",
                        abbr: "R"
                    }, {
                        since: "1989-01-08",
                        until: "2019-04-30",
                        offset: 1,
                        name: "平成",
                        narrow: "㍻",
                        abbr: "H"
                    }, {
                        since: "1926-12-25",
                        until: "1989-01-07",
                        offset: 1,
                        name: "昭和",
                        narrow: "㍼",
                        abbr: "S"
                    }, {
                        since: "1912-07-30",
                        until: "1926-12-24",
                        offset: 1,
                        name: "大正",
                        narrow: "㍽",
                        abbr: "T"
                    }, {
                        since: "1873-01-01",
                        until: "1912-07-29",
                        offset: 6,
                        name: "明治",
                        narrow: "㍾",
                        abbr: "M"
                    }, {
                        since: "0001-01-01",
                        until: "1873-12-31",
                        offset: 1,
                        name: "西暦",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "紀元前",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    eraYearOrdinalRegex: /(元|\d+)年/,
                    eraYearOrdinalParse: function(input, e) {
                        return "元" === e[1] ? 1 : parseInt(e[1] || input, 10)
                    },
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日(ddd) HH:mm"
                    },
                    meridiemParse: /午前|午後/i,
                    isPM: function(input) {
                        return "午後" === input
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "午前" : "午後"
                    },
                    calendar: {
                        sameDay: "[今日] LT",
                        nextDay: "[明日] LT",
                        nextWeek: function(e) {
                            return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                        },
                        lastDay: "[昨日] LT",
                        lastWeek: function(e) {
                            return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                        },
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}日/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "y":
                                return 1 === e ? "元年" : e + "年";
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "数秒",
                        ss: "%d秒",
                        m: "1分",
                        mm: "%d分",
                        h: "1時間",
                        hh: "%d時間",
                        d: "1日",
                        dd: "%d日",
                        M: "1ヶ月",
                        MM: "%dヶ月",
                        y: "1年",
                        yy: "%d年"
                    }
                })
            }(_(11))
        },
        965: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("jv", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                    weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /enjing|siyang|sonten|ndalu/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                    },
                    calendar: {
                        sameDay: "[Dinten puniko pukul] LT",
                        nextDay: "[Mbenjang pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kala wingi pukul] LT",
                        lastWeek: "dddd [kepengker pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "wonten ing %s",
                        past: "%s ingkang kepengker",
                        s: "sawetawis detik",
                        ss: "%d detik",
                        m: "setunggal menit",
                        mm: "%d menit",
                        h: "setunggal jam",
                        hh: "%d jam",
                        d: "sedinten",
                        dd: "%d dinten",
                        M: "sewulan",
                        MM: "%d wulan",
                        y: "setaun",
                        yy: "%d taun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        966: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ka", {
                    months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                    weekdays: {
                        standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                        format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                        isFormat: /(წინა|შემდეგ)/
                    },
                    weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                    weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[დღეს] LT[-ზე]",
                        nextDay: "[ხვალ] LT[-ზე]",
                        lastDay: "[გუშინ] LT[-ზე]",
                        nextWeek: "[შემდეგ] dddd LT[-ზე]",
                        lastWeek: "[წინა] dddd LT-ზე",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(s) {
                            return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(e, t, _) {
                                return "ი" === _ ? t + "ში" : t + _ + "ში"
                            }))
                        },
                        past: function(s) {
                            return /(წამი|წუთი|საათი|დღე|თვე)/.test(s) ? s.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(s) ? s.replace(/წელი$/, "წლის წინ") : s
                        },
                        s: "რამდენიმე წამი",
                        ss: "%d წამი",
                        m: "წუთი",
                        mm: "%d წუთი",
                        h: "საათი",
                        hh: "%d საათი",
                        d: "დღე",
                        dd: "%d დღე",
                        M: "თვე",
                        MM: "%d თვე",
                        y: "წელი",
                        yy: "%d წელი"
                    },
                    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                    ordinal: function(e) {
                        return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        967: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                    0: "-ші",
                    1: "-ші",
                    2: "-ші",
                    3: "-ші",
                    4: "-ші",
                    5: "-ші",
                    6: "-шы",
                    7: "-ші",
                    8: "-ші",
                    9: "-шы",
                    10: "-шы",
                    20: "-шы",
                    30: "-шы",
                    40: "-шы",
                    50: "-ші",
                    60: "-шы",
                    70: "-ші",
                    80: "-ші",
                    90: "-шы",
                    100: "-ші"
                };
                e.defineLocale("kk", {
                    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгін сағат] LT",
                        nextDay: "[Ертең сағат] LT",
                        nextWeek: "dddd [сағат] LT",
                        lastDay: "[Кеше сағат] LT",
                        lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ішінде",
                        past: "%s бұрын",
                        s: "бірнеше секунд",
                        ss: "%d секунд",
                        m: "бір минут",
                        mm: "%d минут",
                        h: "бір сағат",
                        hh: "%d сағат",
                        d: "бір күн",
                        dd: "%d күн",
                        M: "бір ай",
                        MM: "%d ай",
                        y: "бір жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            b = e >= 100 ? 100 : null;
                        return e + (t[e] || t[a] || t[b])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        968: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "១",
                        2: "២",
                        3: "៣",
                        4: "៤",
                        5: "៥",
                        6: "៦",
                        7: "៧",
                        8: "៨",
                        9: "៩",
                        0: "០"
                    },
                    _ = {
                        "១": "1",
                        "២": "2",
                        "៣": "3",
                        "៤": "4",
                        "៥": "5",
                        "៦": "6",
                        "៧": "7",
                        "៨": "8",
                        "៩": "9",
                        "០": "0"
                    };
                e.defineLocale("km", {
                    months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ព្រឹក|ល្ងាច/,
                    isPM: function(input) {
                        return "ល្ងាច" === input
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "ព្រឹក" : "ល្ងាច"
                    },
                    calendar: {
                        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                        nextDay: "[ស្អែក ម៉ោង] LT",
                        nextWeek: "dddd [ម៉ោង] LT",
                        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sទៀត",
                        past: "%sមុន",
                        s: "ប៉ុន្មានវិនាទី",
                        ss: "%d វិនាទី",
                        m: "មួយនាទី",
                        mm: "%d នាទី",
                        h: "មួយម៉ោង",
                        hh: "%d ម៉ោង",
                        d: "មួយថ្ងៃ",
                        dd: "%d ថ្ងៃ",
                        M: "មួយខែ",
                        MM: "%d ខែ",
                        y: "មួយឆ្នាំ",
                        yy: "%d ឆ្នាំ"
                    },
                    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                    ordinal: "ទី%d",
                    preparse: function(e) {
                        return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        969: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "೧",
                        2: "೨",
                        3: "೩",
                        4: "೪",
                        5: "೫",
                        6: "೬",
                        7: "೭",
                        8: "೮",
                        9: "೯",
                        0: "೦"
                    },
                    _ = {
                        "೧": "1",
                        "೨": "2",
                        "೩": "3",
                        "೪": "4",
                        "೫": "5",
                        "೬": "6",
                        "೭": "7",
                        "೮": "8",
                        "೯": "9",
                        "೦": "0"
                    };
                e.defineLocale("kn", {
                    months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                    monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                    weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                    weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[ಇಂದು] LT",
                        nextDay: "[ನಾಳೆ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ನಿನ್ನೆ] LT",
                        lastWeek: "[ಕೊನೆಯ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ನಂತರ",
                        past: "%s ಹಿಂದೆ",
                        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                        ss: "%d ಸೆಕೆಂಡುಗಳು",
                        m: "ಒಂದು ನಿಮಿಷ",
                        mm: "%d ನಿಮಿಷ",
                        h: "ಒಂದು ಗಂಟೆ",
                        hh: "%d ಗಂಟೆ",
                        d: "ಒಂದು ದಿನ",
                        dd: "%d ದಿನ",
                        M: "ಒಂದು ತಿಂಗಳು",
                        MM: "%d ತಿಂಗಳು",
                        y: "ಒಂದು ವರ್ಷ",
                        yy: "%d ವರ್ಷ"
                    },
                    preparse: function(e) {
                        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                    ordinal: function(e) {
                        return e + "ನೇ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        970: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ko", {
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY년 MMMM D일",
                        LLL: "YYYY년 MMMM D일 A h:mm",
                        LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY년 MMMM D일",
                        lll: "YYYY년 MMMM D일 A h:mm",
                        llll: "YYYY년 MMMM D일 dddd A h:mm"
                    },
                    calendar: {
                        sameDay: "오늘 LT",
                        nextDay: "내일 LT",
                        nextWeek: "dddd LT",
                        lastDay: "어제 LT",
                        lastWeek: "지난주 dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s 후",
                        past: "%s 전",
                        s: "몇 초",
                        ss: "%d초",
                        m: "1분",
                        mm: "%d분",
                        h: "한 시간",
                        hh: "%d시간",
                        d: "하루",
                        dd: "%d일",
                        M: "한 달",
                        MM: "%d달",
                        y: "일 년",
                        yy: "%d년"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "일";
                            case "M":
                                return e + "월";
                            case "w":
                            case "W":
                                return e + "주";
                            default:
                                return e
                        }
                    },
                    meridiemParse: /오전|오후/,
                    isPM: function(e) {
                        return "오후" === e
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "오전" : "오후"
                    }
                })
            }(_(11))
        },
        971: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "١",
                        2: "٢",
                        3: "٣",
                        4: "٤",
                        5: "٥",
                        6: "٦",
                        7: "٧",
                        8: "٨",
                        9: "٩",
                        0: "٠"
                    },
                    _ = {
                        "١": "1",
                        "٢": "2",
                        "٣": "3",
                        "٤": "4",
                        "٥": "5",
                        "٦": "6",
                        "٧": "7",
                        "٨": "8",
                        "٩": "9",
                        "٠": "0"
                    },
                    n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
                e.defineLocale("ku", {
                    months: n,
                    monthsShort: n,
                    weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ئێواره‌|به‌یانی/,
                    isPM: function(input) {
                        return /ئێواره‌/.test(input)
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "به‌یانی" : "ئێواره‌"
                    },
                    calendar: {
                        sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                        nextDay: "[به‌یانی كاتژمێر] LT",
                        nextWeek: "dddd [كاتژمێر] LT",
                        lastDay: "[دوێنێ كاتژمێر] LT",
                        lastWeek: "dddd [كاتژمێر] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "له‌ %s",
                        past: "%s",
                        s: "چه‌ند چركه‌یه‌ك",
                        ss: "چركه‌ %d",
                        m: "یه‌ك خوله‌ك",
                        mm: "%d خوله‌ك",
                        h: "یه‌ك كاتژمێر",
                        hh: "%d كاتژمێر",
                        d: "یه‌ك ڕۆژ",
                        dd: "%d ڕۆژ",
                        M: "یه‌ك مانگ",
                        MM: "%d مانگ",
                        y: "یه‌ك ساڵ",
                        yy: "%d ساڵ"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                            return _[e]
                        })).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        })).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(_(11))
        },
        972: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                    0: "-чү",
                    1: "-чи",
                    2: "-чи",
                    3: "-чү",
                    4: "-чү",
                    5: "-чи",
                    6: "-чы",
                    7: "-чи",
                    8: "-чи",
                    9: "-чу",
                    10: "-чу",
                    20: "-чы",
                    30: "-чу",
                    40: "-чы",
                    50: "-чү",
                    60: "-чы",
                    70: "-чи",
                    80: "-чи",
                    90: "-чу",
                    100: "-чү"
                };
                e.defineLocale("ky", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгүн саат] LT",
                        nextDay: "[Эртең саат] LT",
                        nextWeek: "dddd [саат] LT",
                        lastDay: "[Кечээ саат] LT",
                        lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ичинде",
                        past: "%s мурун",
                        s: "бирнече секунд",
                        ss: "%d секунд",
                        m: "бир мүнөт",
                        mm: "%d мүнөт",
                        h: "бир саат",
                        hh: "%d саат",
                        d: "бир күн",
                        dd: "%d күн",
                        M: "бир ай",
                        MM: "%d ай",
                        y: "бир жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            b = e >= 100 ? 100 : null;
                        return e + (t[e] || t[a] || t[b])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        973: function(e, t, _) {
            ! function(e) {
                "use strict";

                function t(e, t, _, n) {
                    var d = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return t ? d[_][0] : d[_][1]
                }

                function _(e) {
                    return d(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                }

                function n(e) {
                    return d(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                }

                function d(e) {
                    if (e = parseInt(e, 10), isNaN(e)) return !1;
                    if (e < 0) return !0;
                    if (e < 10) return 4 <= e && e <= 7;
                    if (e < 100) {
                        var t = e % 10;
                        return d(0 === t ? e / 10 : t)
                    }
                    if (e < 1e4) {
                        for (; e >= 10;) e /= 10;
                        return d(e)
                    }
                    return d(e /= 1e3)
                }
                e.defineLocale("lb", {
                    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm [Auer]",
                        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gëschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: _,
                        past: n,
                        s: "e puer Sekonnen",
                        ss: "%d Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: "%d Deeg",
                        M: t,
                        MM: "%d Méint",
                        y: t,
                        yy: "%d Joer"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        974: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("lo", {
                    months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                    monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                    weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                    weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                    weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                    isPM: function(input) {
                        return "ຕອນແລງ" === input
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                    },
                    calendar: {
                        sameDay: "[ມື້ນີ້ເວລາ] LT",
                        nextDay: "[ມື້ອື່ນເວລາ] LT",
                        nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                        lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                        lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ອີກ %s",
                        past: "%sຜ່ານມາ",
                        s: "ບໍ່ເທົ່າໃດວິນາທີ",
                        ss: "%d ວິນາທີ",
                        m: "1 ນາທີ",
                        mm: "%d ນາທີ",
                        h: "1 ຊົ່ວໂມງ",
                        hh: "%d ຊົ່ວໂມງ",
                        d: "1 ມື້",
                        dd: "%d ມື້",
                        M: "1 ເດືອນ",
                        MM: "%d ເດືອນ",
                        y: "1 ປີ",
                        yy: "%d ປີ"
                    },
                    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                    ordinal: function(e) {
                        return "ທີ່" + e
                    }
                })
            }(_(11))
        },
        975: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                    ss: "sekundė_sekundžių_sekundes",
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                };

                function _(e, t, _, n) {
                    return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                }

                function n(e, t, _, n) {
                    return t ? r(_)[0] : n ? r(_)[1] : r(_)[2]
                }

                function d(e) {
                    return e % 10 == 0 || e > 10 && e < 20
                }

                function r(e) {
                    return t[e].split("_")
                }

                function m(e, t, _, m) {
                    var o = e + " ";
                    return 1 === e ? o + n(e, t, _[0], m) : t ? o + (d(e) ? r(_)[1] : r(_)[0]) : m ? o + r(_)[1] : o + (d(e) ? r(_)[1] : r(_)[2])
                }
                e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: _,
                        ss: m,
                        m: n,
                        mm: m,
                        h: n,
                        hh: m,
                        d: n,
                        dd: m,
                        M: n,
                        MM: m,
                        y: n,
                        yy: m
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        976: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    h: "stundas_stundām_stunda_stundas".split("_"),
                    hh: "stundas_stundām_stunda_stundas".split("_"),
                    d: "dienas_dienām_diena_dienas".split("_"),
                    dd: "dienas_dienām_diena_dienas".split("_"),
                    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                };

                function _(e, t, _) {
                    return _ ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
                }

                function n(e, n, d) {
                    return e + " " + _(t[d], e, n)
                }

                function d(e, n, d) {
                    return _(t[d], e, n)
                }

                function r(e, t) {
                    return t ? "dažas sekundes" : "dažām sekundēm"
                }
                e.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pēc %s",
                        past: "pirms %s",
                        s: r,
                        ss: n,
                        m: d,
                        mm: n,
                        h: d,
                        hh: n,
                        d: d,
                        dd: n,
                        M: d,
                        MM: n,
                        y: d,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        977: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["sekund", "sekunda", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, _, n) {
                        var d = t.words[n];
                        return 1 === n.length ? _ ? d[0] : d[1] : e + " " + t.correctGrammaticalCase(e, d)
                    }
                };
                e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mjesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        978: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("mi", {
                    months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                    monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                    weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                    weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                    weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [i] HH:mm",
                        LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i teie mahana, i] LT",
                        nextDay: "[apopo i] LT",
                        nextWeek: "dddd [i] LT",
                        lastDay: "[inanahi i] LT",
                        lastWeek: "dddd [whakamutunga i] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "i roto i %s",
                        past: "%s i mua",
                        s: "te hēkona ruarua",
                        ss: "%d hēkona",
                        m: "he meneti",
                        mm: "%d meneti",
                        h: "te haora",
                        hh: "%d haora",
                        d: "he ra",
                        dd: "%d ra",
                        M: "he marama",
                        MM: "%d marama",
                        y: "he tau",
                        yy: "%d tau"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        979: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("mk", {
                    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[Денес во] LT",
                        nextDay: "[Утре во] LT",
                        nextWeek: "[Во] dddd [во] LT",
                        lastDay: "[Вчера во] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[Изминатата] dddd [во] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Изминатиот] dddd [во] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пред %s",
                        s: "неколку секунди",
                        ss: "%d секунди",
                        m: "една минута",
                        mm: "%d минути",
                        h: "еден час",
                        hh: "%d часа",
                        d: "еден ден",
                        dd: "%d дена",
                        M: "еден месец",
                        MM: "%d месеци",
                        y: "една година",
                        yy: "%d години"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            _ = e % 100;
                        return 0 === e ? e + "-ев" : 0 === _ ? e + "-ен" : _ > 10 && _ < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        980: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ml", {
                    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -നു",
                        LTS: "A h:mm:ss -നു",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm -നു",
                        LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                    },
                    calendar: {
                        sameDay: "[ഇന്ന്] LT",
                        nextDay: "[നാളെ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ഇന്നലെ] LT",
                        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s കഴിഞ്ഞ്",
                        past: "%s മുൻപ്",
                        s: "അൽപ നിമിഷങ്ങൾ",
                        ss: "%d സെക്കൻഡ്",
                        m: "ഒരു മിനിറ്റ്",
                        mm: "%d മിനിറ്റ്",
                        h: "ഒരു മണിക്കൂർ",
                        hh: "%d മണിക്കൂർ",
                        d: "ഒരു ദിവസം",
                        dd: "%d ദിവസം",
                        M: "ഒരു മാസം",
                        MM: "%d മാസം",
                        y: "ഒരു വർഷം",
                        yy: "%d വർഷം"
                    },
                    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, _) {
                        return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                    }
                })
            }(_(11))
        },
        981: function(e, t, _) {
            ! function(e) {
                "use strict";

                function t(e, t, _, n) {
                    switch (_) {
                        case "s":
                            return t ? "хэдхэн секунд" : "хэдхэн секундын";
                        case "ss":
                            return e + (t ? " секунд" : " секундын");
                        case "m":
                        case "mm":
                            return e + (t ? " минут" : " минутын");
                        case "h":
                        case "hh":
                            return e + (t ? " цаг" : " цагийн");
                        case "d":
                        case "dd":
                            return e + (t ? " өдөр" : " өдрийн");
                        case "M":
                        case "MM":
                            return e + (t ? " сар" : " сарын");
                        case "y":
                        case "yy":
                            return e + (t ? " жил" : " жилийн");
                        default:
                            return e
                    }
                }
                e.defineLocale("mn", {
                    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY оны MMMMын D",
                        LLL: "YYYY оны MMMMын D HH:mm",
                        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                    },
                    meridiemParse: /ҮӨ|ҮХ/i,
                    isPM: function(input) {
                        return "ҮХ" === input
                    },
                    meridiem: function(e, t, _) {
                        return e < 12 ? "ҮӨ" : "ҮХ"
                    },
                    calendar: {
                        sameDay: "[Өнөөдөр] LT",
                        nextDay: "[Маргааш] LT",
                        nextWeek: "[Ирэх] dddd LT",
                        lastDay: "[Өчигдөр] LT",
                        lastWeek: "[Өнгөрсөн] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s дараа",
                        past: "%s өмнө",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " өдөр";
                            default:
                                return e
                        }
                    }
                })
            }(_(11))
        },
        982: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    _ = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };

                function n(e, t, _, n) {
                    var output = "";
                    if (t) switch (_) {
                        case "s":
                            output = "काही सेकंद";
                            break;
                        case "ss":
                            output = "%d सेकंद";
                            break;
                        case "m":
                            output = "एक मिनिट";
                            break;
                        case "mm":
                            output = "%d मिनिटे";
                            break;
                        case "h":
                            output = "एक तास";
                            break;
                        case "hh":
                            output = "%d तास";
                            break;
                        case "d":
                            output = "एक दिवस";
                            break;
                        case "dd":
                            output = "%d दिवस";
                            break;
                        case "M":
                            output = "एक महिना";
                            break;
                        case "MM":
                            output = "%d महिने";
                            break;
                        case "y":
                            output = "एक वर्ष";
                            break;
                        case "yy":
                            output = "%d वर्षे"
                    } else switch (_) {
                        case "s":
                            output = "काही सेकंदां";
                            break;
                        case "ss":
                            output = "%d सेकंदां";
                            break;
                        case "m":
                            output = "एका मिनिटा";
                            break;
                        case "mm":
                            output = "%d मिनिटां";
                            break;
                        case "h":
                            output = "एका तासा";
                            break;
                        case "hh":
                            output = "%d तासां";
                            break;
                        case "d":
                            output = "एका दिवसा";
                            break;
                        case "dd":
                            output = "%d दिवसां";
                            break;
                        case "M":
                            output = "एका महिन्या";
                            break;
                        case "MM":
                            output = "%d महिन्यां";
                            break;
                        case "y":
                            output = "एका वर्षा";
                            break;
                        case "yy":
                            output = "%d वर्षां"
                    }
                    return output.replace(/%d/i, e)
                }
                e.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm वाजता",
                        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमध्ये",
                        past: "%sपूर्वी",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        983: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        984: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(_(11))
        },
        985: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("mt", {
                    months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                    monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                    weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                    weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                    weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Illum fil-]LT",
                        nextDay: "[Għada fil-]LT",
                        nextWeek: "dddd [fil-]LT",
                        lastDay: "[Il-bieraħ fil-]LT",
                        lastWeek: "dddd [li għadda] [fil-]LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "f’ %s",
                        past: "%s ilu",
                        s: "ftit sekondi",
                        ss: "%d sekondi",
                        m: "minuta",
                        mm: "%d minuti",
                        h: "siegħa",
                        hh: "%d siegħat",
                        d: "ġurnata",
                        dd: "%d ġranet",
                        M: "xahar",
                        MM: "%d xhur",
                        y: "sena",
                        yy: "%d sni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        986: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "၁",
                        2: "၂",
                        3: "၃",
                        4: "၄",
                        5: "၅",
                        6: "၆",
                        7: "၇",
                        8: "၈",
                        9: "၉",
                        0: "၀"
                    },
                    _ = {
                        "၁": "1",
                        "၂": "2",
                        "၃": "3",
                        "၄": "4",
                        "၅": "5",
                        "၆": "6",
                        "၇": "7",
                        "၈": "8",
                        "၉": "9",
                        "၀": "0"
                    };
                e.defineLocale("my", {
                    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                    weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ယနေ.] LT [မှာ]",
                        nextDay: "[မနက်ဖြန်] LT [မှာ]",
                        nextWeek: "dddd LT [မှာ]",
                        lastDay: "[မနေ.က] LT [မှာ]",
                        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "လာမည့် %s မှာ",
                        past: "လွန်ခဲ့သော %s က",
                        s: "စက္ကန်.အနည်းငယ်",
                        ss: "%d စက္ကန့်",
                        m: "တစ်မိနစ်",
                        mm: "%d မိနစ်",
                        h: "တစ်နာရီ",
                        hh: "%d နာရီ",
                        d: "တစ်ရက်",
                        dd: "%d ရက်",
                        M: "တစ်လ",
                        MM: "%d လ",
                        y: "တစ်နှစ်",
                        yy: "%d နှစ်"
                    },
                    preparse: function(e) {
                        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        987: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        ss: "%d sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        w: "en uke",
                        ww: "%d uker",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "ett år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        988: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    _ = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };
                e.defineLocale("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        LTS: "Aको h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, Aको h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोलि] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडि",
                        s: "केही क्षण",
                        ss: "%d सेकेण्ड",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        },
        989: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    _ = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    d = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? _[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: d,
                    monthsShortRegex: d,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        w: "één week",
                        ww: "%d weken",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        990: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    _ = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    d = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? _[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: d,
                    monthsShortRegex: d,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        991: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
                    weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I går klokka] LT",
                        lastWeek: "[Føregåande] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s sidan",
                        s: "nokre sekund",
                        ss: "%d sekund",
                        m: "eit minutt",
                        mm: "%d minutt",
                        h: "ein time",
                        hh: "%d timar",
                        d: "ein dag",
                        dd: "%d dagar",
                        w: "ei veke",
                        ww: "%d veker",
                        M: "ein månad",
                        MM: "%d månader",
                        y: "eit år",
                        yy: "%d år"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        992: function(e, t, _) {
            ! function(e) {
                "use strict";
                e.defineLocale("oc-lnc", {
                    months: {
                        standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                        format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                        isFormat: /D[oD]?(\s)+MMMM/
                    },
                    monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [de] YYYY",
                        ll: "D MMM YYYY",
                        LLL: "D MMMM [de] YYYY [a] H:mm",
                        lll: "D MMM YYYY, H:mm",
                        LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                        llll: "ddd D MMM YYYY, H:mm"
                    },
                    calendar: {
                        sameDay: "[uèi a] LT",
                        nextDay: "[deman a] LT",
                        nextWeek: "dddd [a] LT",
                        lastDay: "[ièr a] LT",
                        lastWeek: "dddd [passat a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "d'aquí %s",
                        past: "fa %s",
                        s: "unas segondas",
                        ss: "%d segondas",
                        m: "una minuta",
                        mm: "%d minutas",
                        h: "una ora",
                        hh: "%d oras",
                        d: "un jorn",
                        dd: "%d jorns",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                    ordinal: function(e, t) {
                        var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                        return "w" !== t && "W" !== t || (output = "a"), e + output
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(_(11))
        },
        993: function(e, t, _) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "੧",
                        2: "੨",
                        3: "੩",
                        4: "੪",
                        5: "੫",
                        6: "੬",
                        7: "੭",
                        8: "੮",
                        9: "੯",
                        0: "੦"
                    },
                    _ = {
                        "੧": "1",
                        "੨": "2",
                        "੩": "3",
                        "੪": "4",
                        "੫": "5",
                        "੬": "6",
                        "੭": "7",
                        "੮": "8",
                        "੯": "9",
                        "੦": "0"
                    };
                e.defineLocale("pa-in", {
                    months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                    weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm ਵਜੇ",
                        LTS: "A h:mm:ss ਵਜੇ",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                    },
                    calendar: {
                        sameDay: "[ਅਜ] LT",
                        nextDay: "[ਕਲ] LT",
                        nextWeek: "[ਅਗਲਾ] dddd, LT",
                        lastDay: "[ਕਲ] LT",
                        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ਵਿੱਚ",
                        past: "%s ਪਿਛਲੇ",
                        s: "ਕੁਝ ਸਕਿੰਟ",
                        ss: "%d ਸਕਿੰਟ",
                        m: "ਇਕ ਮਿੰਟ",
                        mm: "%d ਮਿੰਟ",
                        h: "ਇੱਕ ਘੰਟਾ",
                        hh: "%d ਘੰਟੇ",
                        d: "ਇੱਕ ਦਿਨ",
                        dd: "%d ਦਿਨ",
                        M: "ਇੱਕ ਮਹੀਨਾ",
                        MM: "%d ਮਹੀਨੇ",
                        y: "ਇੱਕ ਸਾਲ",
                        yy: "%d ਸਾਲ"
                    },
                    preparse: function(e) {
                        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                            return _[e]
                        }))
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return t[e]
                        }))
                    },
                    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, _) {
                        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(_(11))
        }
    }
]);