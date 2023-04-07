/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [94], {
        1012: function(e, _, n) {
            ! function(e) {
                "use strict";
                e.defineLocale("tet", {
                    months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                    weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                    weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                    weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Ohin iha] LT",
                        nextDay: "[Aban iha] LT",
                        nextWeek: "dddd [iha] LT",
                        lastDay: "[Horiseik iha] LT",
                        lastWeek: "dddd [semana kotuk] [iha] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "iha %s",
                        past: "%s liuba",
                        s: "segundu balun",
                        ss: "segundu %d",
                        m: "minutu ida",
                        mm: "minutu %d",
                        h: "oras ida",
                        hh: "oras %d",
                        d: "loron ida",
                        dd: "loron %d",
                        M: "fulan ida",
                        MM: "fulan %d",
                        y: "tinan ida",
                        yy: "tinan %d"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var b = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(n(11))
        },
        1013: function(e, _, n) {
            ! function(e) {
                "use strict";
                var _ = {
                    0: "-ум",
                    1: "-ум",
                    2: "-юм",
                    3: "-юм",
                    4: "-ум",
                    5: "-ум",
                    6: "-ум",
                    7: "-ум",
                    8: "-ум",
                    9: "-ум",
                    10: "-ум",
                    12: "-ум",
                    13: "-ум",
                    20: "-ум",
                    30: "-юм",
                    40: "-ум",
                    50: "-ум",
                    60: "-ум",
                    70: "-ум",
                    80: "-ум",
                    90: "-ум",
                    100: "-ум"
                };
                e.defineLocale("tg", {
                    months: {
                        format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                        standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                    },
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                    weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                    weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Имрӯз соати] LT",
                        nextDay: "[Фардо соати] LT",
                        lastDay: "[Дирӯз соати] LT",
                        nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                        lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "баъди %s",
                        past: "%s пеш",
                        s: "якчанд сония",
                        m: "як дақиқа",
                        mm: "%d дақиқа",
                        h: "як соат",
                        hh: "%d соат",
                        d: "як рӯз",
                        dd: "%d рӯз",
                        M: "як моҳ",
                        MM: "%d моҳ",
                        y: "як сол",
                        yy: "%d сол"
                    },
                    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                    meridiemHour: function(e, _) {
                        return 12 === e && (e = 0), "шаб" === _ ? e < 4 ? e : e + 12 : "субҳ" === _ ? e : "рӯз" === _ ? e >= 11 ? e : e + 12 : "бегоҳ" === _ ? e + 12 : void 0
                    },
                    meridiem: function(e, _, n) {
                        return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                    ordinal: function(e) {
                        var a = e % 10,
                            b = e >= 100 ? 100 : null;
                        return e + (_[e] || _[a] || _[b])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(n(11))
        },
        1014: function(e, _, n) {
            ! function(e) {
                "use strict";
                e.defineLocale("th", {
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                    monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา H:mm",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                    },
                    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                    isPM: function(input) {
                        return "หลังเที่ยง" === input
                    },
                    meridiem: function(e, _, n) {
                        return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                    },
                    calendar: {
                        sameDay: "[วันนี้ เวลา] LT",
                        nextDay: "[พรุ่งนี้ เวลา] LT",
                        nextWeek: "dddd[หน้า เวลา] LT",
                        lastDay: "[เมื่อวานนี้ เวลา] LT",
                        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        ss: "%d วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        w: "1 สัปดาห์",
                        ww: "%d สัปดาห์",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    }
                })
            }(n(11))
        },
        1015: function(e, _, n) {
            ! function(e) {
                "use strict";
                var _ = {
                    1: "'inji",
                    5: "'inji",
                    8: "'inji",
                    70: "'inji",
                    80: "'inji",
                    2: "'nji",
                    7: "'nji",
                    20: "'nji",
                    50: "'nji",
                    3: "'ünji",
                    4: "'ünji",
                    100: "'ünji",
                    6: "'njy",
                    9: "'unjy",
                    10: "'unjy",
                    30: "'unjy",
                    60: "'ynjy",
                    90: "'ynjy"
                };
                e.defineLocale("tk", {
                    months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
                    monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
                    weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
                    weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
                    weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün sagat] LT",
                        nextDay: "[ertir sagat] LT",
                        nextWeek: "[indiki] dddd [sagat] LT",
                        lastDay: "[düýn] LT",
                        lastWeek: "[geçen] dddd [sagat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s soň",
                        past: "%s öň",
                        s: "birnäçe sekunt",
                        m: "bir minut",
                        mm: "%d minut",
                        h: "bir sagat",
                        hh: "%d sagat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir aý",
                        MM: "%d aý",
                        y: "bir ýyl",
                        yy: "%d ýyl"
                    },
                    ordinal: function(e, n) {
                        switch (n) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'unjy";
                                var a = e % 10,
                                    b = e % 100 - a,
                                    t = e >= 100 ? 100 : null;
                                return e + (_[a] || _[b] || _[t])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(n(11))
        },
        1016: function(e, _, n) {
            ! function(e) {
                "use strict";
                e.defineLocale("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY HH:mm",
                        LLLL: "dddd, MMMM DD, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "LT [ngayong araw]",
                        nextDay: "[Bukas ng] LT",
                        nextWeek: "LT [sa susunod na] dddd",
                        lastDay: "LT [kahapon]",
                        lastWeek: "LT [noong nakaraang] dddd",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        ss: "%d segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
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
            }(n(11))
        },
        1017: function(e, _, n) {
            ! function(e) {
                "use strict";
                var _ = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function n(output) {
                    var time = output;
                    return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "leS" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "waQ" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "nem" : time + " pIq"
                }

                function t(output) {
                    var time = output;
                    return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "Hu’" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "wen" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "ben" : time + " ret"
                }

                function r(e, _, n, t) {
                    var r = d(e);
                    switch (n) {
                        case "ss":
                            return r + " lup";
                        case "mm":
                            return r + " tup";
                        case "hh":
                            return r + " rep";
                        case "dd":
                            return r + " jaj";
                        case "MM":
                            return r + " jar";
                        case "yy":
                            return r + " DIS"
                    }
                }

                function d(e) {
                    var n = Math.floor(e % 1e3 / 100),
                        t = Math.floor(e % 100 / 10),
                        r = e % 10,
                        d = "";
                    return n > 0 && (d += _[n] + "vatlh"), t > 0 && (d += ("" !== d ? " " : "") + _[t] + "maH"), r > 0 && (d += ("" !== d ? " " : "") + _[r]), "" === d ? "pagh" : d
                }
                e.defineLocale("tlh", {
                    months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                    monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                    monthsParseExact: !0,
                    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DaHjaj] LT",
                        nextDay: "[wa’leS] LT",
                        nextWeek: "LLL",
                        lastDay: "[wa’Hu’] LT",
                        lastWeek: "LLL",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: n,
                        past: t,
                        s: "puS lup",
                        ss: r,
                        m: "wa’ tup",
                        mm: r,
                        h: "wa’ rep",
                        hh: r,
                        d: "wa’ jaj",
                        dd: r,
                        M: "wa’ jar",
                        MM: r,
                        y: "wa’ DIS",
                        yy: r
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(n(11))
        },
        1018: function(e, _, n) {
            ! function(e) {
                "use strict";
                var _ = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                e.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    meridiem: function(e, _, n) {
                        return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
                    },
                    meridiemParse: /öö|ÖÖ|ös|ÖS/,
                    isPM: function(input) {
                        return "ös" === input || "ÖS" === input
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[gelecek] dddd [saat] LT",
                        lastDay: "[dün] LT",
                        lastWeek: "[geçen] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        ss: "%d saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        w: "bir hafta",
                        ww: "%d hafta",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e, n) {
                        switch (n) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'ıncı";
                                var a = e % 10,
                                    b = e % 100 - a,
                                    t = e >= 100 ? 100 : null;
                                return e + (_[a] || _[b] || _[t])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(n(11))
        },
        1019: function(e, _, n) {
            ! function(e) {
                "use strict";

                function _(e, _, n, t) {
                    var r = {
                        s: ["viensas secunds", "'iensas secunds"],
                        ss: [e + " secunds", e + " secunds"],
                        m: ["'n míut", "'iens míut"],
                        mm: [e + " míuts", e + " míuts"],
                        h: ["'n þora", "'iensa þora"],
                        hh: [e + " þoras", e + " þoras"],
                        d: ["'n ziua", "'iensa ziua"],
                        dd: [e + " ziuas", e + " ziuas"],
                        M: ["'n mes", "'iens mes"],
                        MM: [e + " mesen", e + " mesen"],
                        y: ["'n ar", "'iens ar"],
                        yy: [e + " ars", e + " ars"]
                    };
                    return t || _ ? r[n][0] : r[n][1]
                }
                e.defineLocale("tzl", {
                    months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                    monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                    weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                    weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                    weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM [dallas] YYYY",
                        LLL: "D. MMMM [dallas] YYYY HH.mm",
                        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                    },
                    meridiemParse: /d\'o|d\'a/i,
                    isPM: function(input) {
                        return "d'o" === input.toLowerCase()
                    },
                    meridiem: function(e, _, n) {
                        return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                    },
                    calendar: {
                        sameDay: "[oxhi à] LT",
                        nextDay: "[demà à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[ieiri à] LT",
                        lastWeek: "[sür el] dddd [lasteu à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "osprei %s",
                        past: "ja%s",
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
            }(n(11))
        },
        1020: function(e, _, n) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm", {
                    months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                        nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                        nextWeek: "dddd [ⴴ] LT",
                        lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                        lastWeek: "dddd [ⴴ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                        past: "ⵢⴰⵏ %s",
                        s: "ⵉⵎⵉⴽ",
                        ss: "%d ⵉⵎⵉⴽ",
                        m: "ⵎⵉⵏⵓⴺ",
                        mm: "%d ⵎⵉⵏⵓⴺ",
                        h: "ⵙⴰⵄⴰ",
                        hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                        d: "ⴰⵙⵙ",
                        dd: "%d oⵙⵙⴰⵏ",
                        M: "ⴰⵢoⵓⵔ",
                        MM: "%d ⵉⵢⵢⵉⵔⵏ",
                        y: "ⴰⵙⴳⴰⵙ",
                        yy: "%d ⵉⵙⴳⴰⵙⵏ"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(n(11))
        },
        1021: function(e, _, n) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm-latn", {
                    months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        ss: "%d imik",
                        m: "minuḍ",
                        mm: "%d minuḍ",
                        h: "saɛa",
                        hh: "%d tassaɛin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(n(11))
        }
    }
]);