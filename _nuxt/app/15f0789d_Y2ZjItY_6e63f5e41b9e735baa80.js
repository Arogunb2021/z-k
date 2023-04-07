/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [42], {
        1022: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("ug-cn", {
                    months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                    weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                    weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                        LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                        LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                    },
                    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "يېرىم كېچە" === _ || "سەھەر" === _ || "چۈشتىن بۇرۇن" === _ ? e : "چۈشتىن كېيىن" === _ || "كەچ" === _ ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, _, t) {
                        var d = 100 * e + _;
                        return d < 600 ? "يېرىم كېچە" : d < 900 ? "سەھەر" : d < 1130 ? "چۈشتىن بۇرۇن" : d < 1230 ? "چۈش" : d < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                    },
                    calendar: {
                        sameDay: "[بۈگۈن سائەت] LT",
                        nextDay: "[ئەتە سائەت] LT",
                        nextWeek: "[كېلەركى] dddd [سائەت] LT",
                        lastDay: "[تۆنۈگۈن] LT",
                        lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s كېيىن",
                        past: "%s بۇرۇن",
                        s: "نەچچە سېكونت",
                        ss: "%d سېكونت",
                        m: "بىر مىنۇت",
                        mm: "%d مىنۇت",
                        h: "بىر سائەت",
                        hh: "%d سائەت",
                        d: "بىر كۈن",
                        dd: "%d كۈن",
                        M: "بىر ئاي",
                        MM: "%d ئاي",
                        y: "بىر يىل",
                        yy: "%d يىل"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-كۈنى";
                            case "w":
                            case "W":
                                return e + "-ھەپتە";
                            default:
                                return e
                        }
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(11))
        },
        1023: function(e, _, t) {
            ! function(e) {
                "use strict";

                function _(e, _) {
                    var t = e.split("_");
                    return _ % 10 == 1 && _ % 100 != 11 ? t[0] : _ % 10 >= 2 && _ % 10 <= 4 && (_ % 100 < 10 || _ % 100 >= 20) ? t[1] : t[2]
                }

                function t(e, t, d) {
                    return "m" === d ? t ? "хвилина" : "хвилину" : "h" === d ? t ? "година" : "годину" : e + " " + _({
                        ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                        mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                        hh: t ? "година_години_годин" : "годину_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    }[d], +e)
                }

                function d(e, _) {
                    var t = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    };
                    return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[ВвУу]\]) ?dddd/.test(_) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(_) ? "genitive" : "nominative"][e.day()] : t.nominative
                }

                function n(e) {
                    return function() {
                        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                    }
                }
                e.defineLocale("uk", {
                    months: {
                        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                    },
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: d,
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., HH:mm",
                        LLLL: "dddd, D MMMM YYYY р., HH:mm"
                    },
                    calendar: {
                        sameDay: n("[Сьогодні "),
                        nextDay: n("[Завтра "),
                        lastDay: n("[Вчора "),
                        nextWeek: n("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return n("[Минулої] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return n("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        ss: t,
                        m: t,
                        mm: t,
                        h: "годину",
                        hh: t,
                        d: "день",
                        dd: t,
                        M: "місяць",
                        MM: t,
                        y: "рік",
                        yy: t
                    },
                    meridiemParse: /ночі|ранку|дня|вечора/,
                    isPM: function(input) {
                        return /^(дня|вечора)$/.test(input)
                    },
                    meridiem: function(e, _, t) {
                        return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(11))
        },
        1024: function(e, _, t) {
            ! function(e) {
                "use strict";
                var _ = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                    t = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
                e.defineLocale("ur", {
                    months: _,
                    monthsShort: _,
                    weekdays: t,
                    weekdaysShort: t,
                    weekdaysMin: t,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd، D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /صبح|شام/,
                    isPM: function(input) {
                        return "شام" === input
                    },
                    meridiem: function(e, _, t) {
                        return e < 12 ? "صبح" : "شام"
                    },
                    calendar: {
                        sameDay: "[آج بوقت] LT",
                        nextDay: "[کل بوقت] LT",
                        nextWeek: "dddd [بوقت] LT",
                        lastDay: "[گذشتہ روز بوقت] LT",
                        lastWeek: "[گذشتہ] dddd [بوقت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s بعد",
                        past: "%s قبل",
                        s: "چند سیکنڈ",
                        ss: "%d سیکنڈ",
                        m: "ایک منٹ",
                        mm: "%d منٹ",
                        h: "ایک گھنٹہ",
                        hh: "%d گھنٹے",
                        d: "ایک دن",
                        dd: "%d دن",
                        M: "ایک ماہ",
                        MM: "%d ماہ",
                        y: "ایک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(11))
        },
        1025: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz", {
                    months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                    weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                    weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бугун соат] LT [да]",
                        nextDay: "[Эртага] LT [да]",
                        nextWeek: "dddd [куни соат] LT [да]",
                        lastDay: "[Кеча соат] LT [да]",
                        lastWeek: "[Утган] dddd [куни соат] LT [да]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Якин %s ичида",
                        past: "Бир неча %s олдин",
                        s: "фурсат",
                        ss: "%d фурсат",
                        m: "бир дакика",
                        mm: "%d дакика",
                        h: "бир соат",
                        hh: "%d соат",
                        d: "бир кун",
                        dd: "%d кун",
                        M: "бир ой",
                        MM: "%d ой",
                        y: "бир йил",
                        yy: "%d йил"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(11))
        },
        1026: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz-latn", {
                    months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                    monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                    weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                    weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                    weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[Bugun soat] LT [da]",
                        nextDay: "[Ertaga] LT [da]",
                        nextWeek: "dddd [kuni soat] LT [da]",
                        lastDay: "[Kecha soat] LT [da]",
                        lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Yaqin %s ichida",
                        past: "Bir necha %s oldin",
                        s: "soniya",
                        ss: "%d soniya",
                        m: "bir daqiqa",
                        mm: "%d daqiqa",
                        h: "bir soat",
                        hh: "%d soat",
                        d: "bir kun",
                        dd: "%d kun",
                        M: "bir oy",
                        MM: "%d oy",
                        y: "bir yil",
                        yy: "%d yil"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(t(11))
        },
        1027: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("vi", {
                    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                    monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                    monthsParseExact: !0,
                    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysParseExact: !0,
                    meridiemParse: /sa|ch/i,
                    isPM: function(input) {
                        return /^ch$/i.test(input)
                    },
                    meridiem: function(e, _, t) {
                        return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [năm] YYYY",
                        LLL: "D MMMM [năm] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hôm nay lúc] LT",
                        nextDay: "[Ngày mai lúc] LT",
                        nextWeek: "dddd [tuần tới lúc] LT",
                        lastDay: "[Hôm qua lúc] LT",
                        lastWeek: "dddd [tuần trước lúc] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s tới",
                        past: "%s trước",
                        s: "vài giây",
                        ss: "%d giây",
                        m: "một phút",
                        mm: "%d phút",
                        h: "một giờ",
                        hh: "%d giờ",
                        d: "một ngày",
                        dd: "%d ngày",
                        w: "một tuần",
                        ww: "%d tuần",
                        M: "một tháng",
                        MM: "%d tháng",
                        y: "một năm",
                        yy: "%d năm"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(11))
        },
        1028: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("x-pseudo", {
                    months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                    monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                    monthsParseExact: !0,
                    weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                    weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                    weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[T~ódá~ý át] LT",
                        nextDay: "[T~ómó~rró~w át] LT",
                        nextWeek: "dddd [át] LT",
                        lastDay: "[Ý~ést~érdá~ý át] LT",
                        lastWeek: "[L~ást] dddd [át] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "í~ñ %s",
                        past: "%s á~gó",
                        s: "á ~féw ~sécó~ñds",
                        ss: "%d s~écóñ~ds",
                        m: "á ~míñ~úté",
                        mm: "%d m~íñú~tés",
                        h: "á~ñ hó~úr",
                        hh: "%d h~óúrs",
                        d: "á ~dáý",
                        dd: "%d d~áýs",
                        M: "á ~móñ~th",
                        MM: "%d m~óñt~hs",
                        y: "á ~ýéár",
                        yy: "%d ý~éárs"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var b = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(11))
        },
        1029: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("yo", {
                    months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                    monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                    weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                    weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                    weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Ònì ni] LT",
                        nextDay: "[Ọ̀la ni] LT",
                        nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                        lastDay: "[Àna ni] LT",
                        lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ní %s",
                        past: "%s kọjá",
                        s: "ìsẹjú aayá die",
                        ss: "aayá %d",
                        m: "ìsẹjú kan",
                        mm: "ìsẹjú %d",
                        h: "wákati kan",
                        hh: "wákati %d",
                        d: "ọjọ́ kan",
                        dd: "ọjọ́ %d",
                        M: "osù kan",
                        MM: "osù %d",
                        y: "ọdún kan",
                        yy: "ọdún %d"
                    },
                    dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                    ordinal: "ọjọ́ %d",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(11))
        },
        1030: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-cn", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日Ah点mm分",
                        LLLL: "YYYY年M月D日ddddAh点mm分",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "凌晨" === _ || "早上" === _ || "上午" === _ ? e : "下午" === _ || "晚上" === _ ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, _, t) {
                        var d = 100 * e + _;
                        return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: function(e) {
                            return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                        },
                        lastDay: "[昨天]LT",
                        lastWeek: function(e) {
                            return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                        },
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "周";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s后",
                        past: "%s前",
                        s: "几秒",
                        ss: "%d 秒",
                        m: "1 分钟",
                        mm: "%d 分钟",
                        h: "1 小时",
                        hh: "%d 小时",
                        d: "1 天",
                        dd: "%d 天",
                        w: "1 周",
                        ww: "%d 周",
                        M: "1 个月",
                        MM: "%d 个月",
                        y: "1 年",
                        yy: "%d 年"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(t(11))
        },
        1031: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-hk", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "凌晨" === _ || "早上" === _ || "上午" === _ ? e : "中午" === _ ? e >= 11 ? e : e + 12 : "下午" === _ || "晚上" === _ ? e + 12 : void 0
                    },
                    meridiem: function(e, _, t) {
                        var d = 100 * e + _;
                        return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1200 ? "上午" : 1200 === d ? "中午" : d < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: "[下]ddddLT",
                        lastDay: "[昨天]LT",
                        lastWeek: "[上]ddddLT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(11))
        },
        1032: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-mo", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "D/M/YYYY",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "凌晨" === _ || "早上" === _ || "上午" === _ ? e : "中午" === _ ? e >= 11 ? e : e + 12 : "下午" === _ || "晚上" === _ ? e + 12 : void 0
                    },
                    meridiem: function(e, _, t) {
                        var d = 100 * e + _;
                        return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天] LT",
                        nextDay: "[明天] LT",
                        nextWeek: "[下]dddd LT",
                        lastDay: "[昨天] LT",
                        lastWeek: "[上]dddd LT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s內",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(11))
        },
        1033: function(e, _, t) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-tw", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日 HH:mm",
                        LLLL: "YYYY年M月D日dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY年M月D日",
                        lll: "YYYY年M月D日 HH:mm",
                        llll: "YYYY年M月D日dddd HH:mm"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "凌晨" === _ || "早上" === _ || "上午" === _ ? e : "中午" === _ ? e >= 11 ? e : e + 12 : "下午" === _ || "晚上" === _ ? e + 12 : void 0
                    },
                    meridiem: function(e, _, t) {
                        var d = 100 * e + _;
                        return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天] LT",
                        nextDay: "[明天] LT",
                        nextWeek: "[下]dddd LT",
                        lastDay: "[昨天] LT",
                        lastWeek: "[上]dddd LT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(e, _) {
                        switch (_) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "日";
                            case "M":
                                return e + "月";
                            case "w":
                            case "W":
                                return e + "週";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "幾秒",
                        ss: "%d 秒",
                        m: "1 分鐘",
                        mm: "%d 分鐘",
                        h: "1 小時",
                        hh: "%d 小時",
                        d: "1 天",
                        dd: "%d 天",
                        M: "1 個月",
                        MM: "%d 個月",
                        y: "1 年",
                        yy: "%d 年"
                    }
                })
            }(t(11))
        }
    }
]);