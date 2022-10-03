const currencies = [
    {
        "code": "/m/019vxc",
        "name": "Afghan Afghani",
        "price": "88.10000000000001",
        "details": {
            "code": "AFN",
            "name": "Afghan afghani",
            "symbol": "؋"
        },
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "country": "Afghanistan"
    },
    {
        "code": "/m/01n64b",
        "name": "Albanian Lek",
        "price": "118.95",
        "details": {
            "code": "ALL",
            "name": "Albanian lek",
            "symbol": "L"
        },
        "flag": "https://flagcdn.com/al.svg",
        "country": "Albania"
    },
    {
        "code": "/m/04wcz0",
        "name": "Algerian Dinar",
        "price": "140.824",
        "details": {
            "code": "DZD",
            "name": "Algerian dinar",
            "symbol": "د.ج"
        },
        "flag": "https://flagcdn.com/dz.svg",
        "country": "Algeria"
    },
    {
        "code": "/m/03c7mb",
        "name": "Angolan Kwanza",
        "price": "433.4055",
        "details": {
            "code": "AOA",
            "name": "Angolan kwanza",
            "symbol": "Kz"
        },
        "flag": "https://flagcdn.com/ao.svg",
        "country": "Angola"
    },
    {
        "code": "/m/024nzm",
        "name": "Argentine Peso",
        "price": "147.3014",
        "details": {
            "code": "ARS",
            "name": "Argentine peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/ar.svg",
        "country": "Argentina"
    },
    {
        "code": "/m/033xr3",
        "name": "Armenian Dram",
        "price": "405.65000000000003",
        "details": {
            "code": "AMD",
            "name": "Armenian dram",
            "symbol": "֏"
        },
        "flag": "https://flagcdn.com/am.svg",
        "country": "Armenia"
    },
    {
        "code": "/m/08s1k3",
        "name": "Aruban Florin",
        "price": "1.7999999999999998",
        "details": {
            "code": "AWG",
            "name": "Aruban florin",
            "symbol": "ƒ"
        },
        "flag": "https://flagcdn.com/aw.svg",
        "country": "Aruba"
    },
    {
        "code": "/m/0kz1h",
        "name": "Australian Dollar",
        "price": "1.561524",
        "details": {
            "code": "AUD",
            "name": "Australian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/au.svg",
        "country": "Australia"
    },
    {
        "code": "/m/04bq4y",
        "name": "Azerbaijani Manat",
        "price": "1.7",
        "details": {
            "code": "AZN",
            "name": "Azerbaijani manat",
            "symbol": "₼"
        },
        "flag": "https://flagcdn.com/az.svg",
        "country": "Azerbaijan"
    },
    {
        "code": "/m/01l6dm",
        "name": "Bahamian Dollar",
        "price": "1.000559",
        "details": {
            "code": "BSD",
            "name": "Bahamian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/bs.svg",
        "country": "Bahamas"
    },
    {
        "code": "/m/04wd20",
        "name": "Bahraini Dinar",
        "price": "0.3772738",
        "details": {
            "code": "BHD",
            "name": "Bahraini dinar",
            "symbol": ".د.ب"
        },
        "flag": "https://flagcdn.com/bh.svg",
        "country": "Bahrain"
    },
    // {
    //     "code": "/m/05hy7p",
    //     "name": "Bajan dollar",
    //     "price": "2.020181"
    // },
    {
        "code": "/m/02gsv3",
        "name": "Bangladeshi Taka",
        "price": "101.3498",
        "details": {
            "code": "BDT",
            "name": "Bangladeshi taka",
            "symbol": "৳"
        },
        "flag": "https://flagcdn.com/bd.svg",
        "country": "Bangladesh"
    },
    {
        "code": "/m/05c9_x",
        "name": "Belarusian Ruble",
        "price": "2.525366",
        "details": {
            "code": "BYN",
            "name": "New Belarusian ruble",
            "symbol": "Br"
        },
        "flag": "https://flagcdn.com/by.svg",
        "country": "Belarus",
    },
    {
        "code": "/m/02bwg4",
        "name": "Belize Dollar",
        "price": "2.016799",
        "details": {
            "code": "BZD",
            "name": "Belize dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/bz.svg",
        "country": "Belize"
    },
    {
        "code": "/m/04xb8t",
        "name": "Bermudan Dollar",
        "price": "1",
        "details": {
            "code": "BMD",
            "name": "Bermudian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/bm.svg",
        "country": "Bermuda",
    },
    {
        "code": "/m/02gt45",
        "name": "Bhutan currency",
        "price": "81.48458000000001",
        "details": {
            "code": "BTN",
            "name": "Bhutanese ngultrum",
            "symbol": "Nu."
        },
        "flag": "https://flagcdn.com/bt.svg",
        "country": "Bhutan",
    },
    {
        "code": "/m/04tkg7",
        "name": "Bolivian Boliviano",
        "price": "6.913041",
        "details": {
            "code": "BOB",
            "name": "Bolivian boliviano",
            "symbol": "Bs."
        },
        "flag": "https://flagcdn.com/bo.svg",
        "country": "Bolivia"
    },
    {
        "code": "/m/02lnq3",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "price": "2.004612",
        "details": {
            "code": "BAM",
            "name": "Bosnia and Herzegovina convertible mark",
            "symbol": "KM"
        },
        "flag": "https://flagcdn.com/ba.svg",
        "country": "Bosnia and Herzegovina",
    },
    {
        "code": "/m/02nksv",
        "name": "Botswanan Pula",
        "price": "13.331520000000001",
        "details": {
            "code": "BWP",
            "name": "Botswana pula",
            "symbol": "P"
        },
        "flag": "https://flagcdn.com/bw.svg",
        "country": "Botswana"
    },
    {
        "code": "/m/03385m",
        "name": "Brazilian Real",
        "price": "5.412471",
        "details": {
            "code": "BRL",
            "name": "Brazilian real",
            "symbol": "R$"
        },
        "flag": "https://flagcdn.com/br.svg",
        "country": "Brazil"
    },
    {
        "code": "/m/021x2r",
        "name": "Brunei Dollar",
        "price": "1.436097",
        "details": {
            "code": "BND",
            "name": "Brunei dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/bn.svg",
        "country": "Brunei Darussalam"
    },
    {
        "code": "/m/01nmfw",
        "name": "Bulgarian Lev",
        "price": "1.996186",
        "details": {
            "code": "BGN",
            "name": "Bulgarian lev",
            "symbol": "лв"
        },
        "flag": "https://flagcdn.com/bg.svg",
        "country": "Bulgaria"
    },
    {
        "code": "/m/05jc3y",
        "name": "Burundian Franc",
        "price": "2048",
        "details": {
            "code": "BIF",
            "name": "Burundian franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/bi.svg",
        "country": "Burundi"
    },
    {
        "code": "/m/03_m0v",
        "name": "Cambodian riel",
        "price": "4130",
        "details": {
            "code": "KHR",
            "name": "Cambodian riel",
            "symbol": "៛"
        },
        "flag": "https://flagcdn.com/kh.svg",
        "country": "Cambodia"
    },
    {
        "code": "/m/0ptk_",
        "name": "Canadian Dollar",
        "price": "1.38327",
        "details": {
            "code": "CAD",
            "name": "Canadian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/ca.svg",
        "country": "Canada"
    },
    {
        "code": "/m/06plyy",
        "name": "Cape Verdean Escudo",
        "price": "113",
        "details": {
            "code": "CVE",
            "name": "Cape Verdean escudo",
            "symbol": "Esc"
        },
        "flag": "https://flagcdn.com/cv.svg",
        "country": "Cabo Verde"
    },
    {
        "code": "/m/04xbgl",
        "name": "Cayman Islands Dollar",
        "price": "0.8337988",
        "details": {
            "code": "KYD",
            "name": "Cayman Islands dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/ky.svg",
        "country": "Cayman Islands"
    },
    {
        "code": "/m/025sw2b",
        "name": "Central African CFA franc",
        "price": "672.2937000000001",
        "details": {
            "code": "XAF",
            "name": "Central African CFA franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/cm.svg",
        "country": "Cameroon"
    },
    {
        "code": "/m/01qyjx",
        "name": "CFP Franc",
        "price": "122.4",
        "details": {
            "code": "XPF",
            "name": "CFP franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/pf.svg",
        "country": "French Polynesia"
    },
    {
        "code": "/m/0172zs",
        "name": "Chilean Peso",
        "price": "968.01",
        "details": {
            "code": "CLP",
            "name": "Chilean peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/cl.svg",
        "country": "Chile"
    },
    // {
    //     "code": "/m/0775_k",
    //     "name": "Chilean Unit of Account (UF)",
    //     "price": "0.028256211899999998"
    // },
    {
        "code": "/m/0hn4_",
        "name": "Chinese Yuan",
        "price": "7.116",
        "details": {
            "code": "CNY",
            "name": "Chinese yuan",
            "symbol": "¥"
        },
        "flag": "https://flagcdn.com/cn.svg",
        "country": "China"
    },
    // {
    //     "code": "/g/11c54p47s9",
    //     "name": "Chinese Yuan (offshore)",
    //     "price": "7.1472999999999995"
    // },
    {
        "code": "/m/034sw6",
        "name": "Colombian Peso",
        "price": "4610.01",
        "details": {
            "code": "COP",
            "name": "Colombian peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/co.svg",
        "country": "Colombia"
    },
    {
        "code": "/m/05yxq3",
        "name": "Comorian franc",
        "price": "501.45000000000005",
        "details": {
            "code": "KMF",
            "name": "Comorian franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/km.svg",
        "country": "Comoros"
    },
    {
        "code": "/m/04h1d6",
        "name": "Congolese Franc",
        "price": "2045",
        "details": {
            "code": "CDF",
            "name": "Congolese franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/cd.svg",
        "country": "Congo (Democratic Republic of the)"
    },
    {
        "code": "/m/04wccn",
        "name": "Costa Rican Colón",
        "price": "627.7424",
        "details": {
            "code": "CRC",
            "name": "Costa Rican colón",
            "symbol": "₡"
        },
        "flag": "https://flagcdn.com/cr.svg",
        "country": "Costa Rica"
    },
    {
        "code": "/m/02z8jt",
        "name": "Croatian Kuna",
        "price": "7.673699999999999",
        "details": {
            "code": "HRK",
            "name": "Croatian kuna",
            "symbol": "kn"
        },
        "flag": "https://flagcdn.com/hr.svg",
        "country": "Croatia"
    },
    {
        "code": "/m/049p2z",
        "name": "Cuban Peso",
        "price": "24.012890000000002",
        "details": {
            "code": "CUP",
            "name": "Cuban peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/cu.svg",
        "country": "Cuba"
    },
    {
        "code": "/m/04rpc3",
        "name": "Czech Koruna",
        "price": "25.082900000000002",
        "details": {
            "code": "CZK",
            "name": "Czech koruna",
            "symbol": "Kč"
        },
        "flag": "https://flagcdn.com/cz.svg",
        "country": "Czech Republic"
    },
    {
        "code": "/m/01j9nc",
        "name": "Danish Krone",
        "price": "7.58765",
        "details": {
            "code": "DKK",
            "name": "Danish krone",
            "symbol": "kr"
        },
        "flag": "https://flagcdn.com/dk.svg",
        "country": "Denmark"
    },
    {
        "code": "/m/05yxn7",
        "name": "Djiboutian Franc",
        "price": "177.72",
        "details": {
            "code": "DJF",
            "name": "Djiboutian franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/dj.svg",
        "country": "Djibouti"
    },
    {
        "code": "/m/04lt7_",
        "name": "Dominican Peso",
        "price": "53.6",
        "details": {
            "code": "DOP",
            "name": "Dominican peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/do.svg",
        "country": "Dominican Republic"
    },
    {
        "code": "/m/02r4k",
        "name": "East Caribbean Dollar",
        "price": "2.70255",
        "details": {
            "code": "XCD",
            "name": "East Caribbean dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/ai.svg",
        "country": "Anguilla"
    },
    {
        "code": "/m/04phzg",
        "name": "Egyptian Pound",
        "price": "19.538050000000002",
        "details": {
            "code": "EGP",
            "name": "Egyptian pound",
            "symbol": "£"
        },
        "flag": "https://flagcdn.com/eg.svg",
        "country": "Egypt"
    },
    {
        "code": "/m/02_mbk",
        "name": "Ethiopian Birr",
        "price": "52.6",
        "details": {
            "code": "ETB",
            "name": "Ethiopian birr",
            "symbol": "Br"
        },
        "flag": "https://flagcdn.com/et.svg",
        "country": "Ethiopia"
    },
    {
        "code": "/m/02l6h",
        "name": "Euro (Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden)",
        "price": "1.0199099999999999",
        "details": {
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
        },
        "flag": "https://flagcdn.com/eu.svg",
        "country": "European Union"
    },
    {
        "code": "/m/04xbp1",
        "name": "Fijian Dollar",
        "price": "2.31005",
        "details": {
            "code": "FJD",
            "name": "Fijian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/fj.svg",
        "country": "Fiji"
    },
    {
        "code": "/m/04wctd",
        "name": "Gambian dalasi",
        "price": "55.400000000000006",
        "details": {
            "code": "GMD",
            "name": "Gambian dalasi",
            "symbol": "D"
        },
        "flag": "https://flagcdn.com/gm.svg",
        "country": "Gambia"
    },
    {
        "code": "/m/03nh77",
        "name": "Georgian Lari",
        "price": "2.8249999999999997",
        "details": {
            "code": "GEL",
            "name": "Georgian Lari",
            "symbol": "ლ"
        },
        "flag": "https://flagcdn.com/ge.svg",
        "country": "Georgia"
    },
    {
        "code": "/m/01s733",
        "name": "Ghanaian Cedi",
        "price": "10.450000000000001",
        "details": {
            "code": "GHS",
            "name": "Ghanaian cedi",
            "symbol": "₵"
        },
        "flag": "https://flagcdn.com/gh.svg",
        "country": "Ghana"
    },
    {
        "code": "/m/01crby",
        "name": "Guatemalan Quetzal",
        "price": "7.880757",
        "details": {
            "code": "GTQ",
            "name": "Guatemalan quetzal",
            "symbol": "Q"
        },
        "flag": "https://flagcdn.com/gt.svg",
        "country": "Guatemala"
    },
    {
        "code": "/m/05yxld",
        "name": "Guinean Franc",
        "price": "8755",
        "details": {
            "code": "GNF",
            "name": "Guinean franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/gn.svg",
        "country": "Guinea"
    },
    {
        "code": "/m/059mfk",
        "name": "Guyanaese Dollar",
        "price": "209.32600000000002",
        "details": {
            "code": "GYD",
            "name": "Guyanese dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/gy.svg",
        "country": "Guyana"
    },
    {
        "code": "/m/04xrp0",
        "name": "Haitian Gourde",
        "price": "121.06530000000001",
        "details": {
            "code": "HTG",
            "name": "Haitian gourde",
            "symbol": "G"
        },
        "flag": "https://flagcdn.com/ht.svg",
        "country": "Haiti"
    },
    {
        "code": "/m/04krzv",
        "name": "Honduran Lempira",
        "price": "24.76",
        "details": {
            "code": "HNL",
            "name": "Honduran lempira",
            "symbol": "L"
        },
        "flag": "https://flagcdn.com/hn.svg",
        "country": "Honduras"
    },
    {
        "code": "/m/02nb4kq",
        "name": "Hong Kong Dollar",
        "price": "7.84985",
        "details": {
            "code": "HKD",
            "name": "Hong Kong dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/hk.svg",
        "country": "Hong Kong"
    },
    {
        "code": "/m/01hfll",
        "name": "Hungarian Forint",
        "price": "431.574",
        "details": {
            "code": "HUF",
            "name": "Hungarian forint",
            "symbol": "Ft"
        },
        "flag": "https://flagcdn.com/hu.svg",
        "country": "Hungary"
    },
    {
        "code": "/m/012nk9",
        "name": "Icelandic Króna",
        "price": "144.16",
        "details": {
            "code": "ISK",
            "name": "Icelandic króna",
            "symbol": "kr"
        },
        "flag": "https://flagcdn.com/is.svg",
        "country": "Iceland"
    },
    {
        "code": "/m/02gsvk",
        "name": "Indian Rupee",
        "price": "81.6384",
        "details": {
            "code": "INR",
            "name": "Indian rupee",
            "symbol": "₹"
        },
        "flag": "https://flagcdn.com/in.svg",
        "country": "India"
    },
    {
        "code": "/m/0203sy",
        "name": "Indonesian Rupiah",
        "price": "15303.7",
        "details": {
            "code": "IDR",
            "name": "Indonesian rupiah",
            "symbol": "Rp"
        },
        "flag": "https://flagcdn.com/id.svg",
        "country": "Indonesia"
    },
    {
        "code": "/m/034n11",
        "name": "Iranian Rial",
        "price": "42350",
        "details": {
            "code": "IRR",
            "name": "Iranian rial",
            "symbol": "﷼"
        },
        "flag": "https://flagcdn.com/ir.svg",
        "country": "Iran (Islamic Republic of)"
    },
    {
        "code": "/m/01kpb3",
        "name": "Iraqi Dinar",
        "price": "1460",
        "details": {
            "code": "IQD",
            "name": "Iraqi dinar",
            "symbol": "ع.د"
        },
        "flag": "https://flagcdn.com/iq.svg",
        "country": "Iraq"
    },
    {
        "code": "/m/01jcw8",
        "name": "Israeli New Shekel",
        "price": "3.55854",
        "details": {
            "code": "ILS",
            "name": "Israeli new shekel",
            "symbol": "₪"
        },
        "flag": "https://flagcdn.com/il.svg",
        "country": "Israel"
    },
    {
        "code": "/m/04xc2m",
        "name": "Jamaican Dollar",
        "price": "152.14700000000002",
        "details": {
            "code": "JMD",
            "name": "Jamaican dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/jm.svg",
        "country": "Jamaica"
    },
    {
        "code": "/m/088n7",
        "name": "Japanese Yen",
        "price": "144.739",
        "details": {
            "code": "JPY",
            "name": "Japanese yen",
            "symbol": "¥"
        },
        "flag": "https://flagcdn.com/jp.svg",
        "country": "Japan"
    },
    {
        "code": "/m/028qvh",
        "name": "Jordanian Dinar",
        "price": "0.709",
        "details": {
            "code": "JOD",
            "name": "Jordanian dinar",
            "symbol": "د.ا"
        },
        "flag": "https://flagcdn.com/jo.svg",
        "country": "Jordan"
    },
    {
        "code": "/m/01km4c",
        "name": "Kazakhstani Tenge",
        "price": "476.3911",
        "details": {
            "code": "KZT",
            "name": "Kazakhstani tenge",
            "symbol": "₸"
        },
        "flag": "https://flagcdn.com/kz.svg",
        "country": "Kazakhstan"
    },
    {
        "code": "/m/05yxpb",
        "name": "Kenyan Shilling",
        "price": "120.85000000000001",
        "details": {
            "code": "KES",
            "name": "Kenyan shilling",
            "symbol": "Sh"
        },
        "flag": "https://flagcdn.com/ke.svg",
        "country": "Kenya"
    },
    {
        "code": "/m/01j2v3",
        "name": "Kuwaiti Dinar",
        "price": "0.30996",
        "details": {
            "code": "KWD",
            "name": "Kuwaiti dinar",
            "symbol": "د.ك"
        },
        "flag": "https://flagcdn.com/kw.svg",
        "country": "Kuwait"
    },
    {
        "code": "/m/04k5c6",
        "name": "Kyrgystani Som",
        "price": "80.17710000000001",
        "details": {
            "code": "KGS",
            "name": "Kyrgyzstani som",
            "symbol": "с"
        },
        "flag": "https://flagcdn.com/kg.svg",
        "country": "Kyrgyzstan"
    },
    {
        "code": "/m/04k4j1",
        "name": "Laotian Kip",
        "price": "16525",
        "details": {
            "code": "LAK",
            "name": "Lao kip",
            "symbol": "₭"
        },
        "flag": "https://flagcdn.com/la.svg",
        "country": "Lao People's Democratic Republic"
    },
    {
        "code": "/m/025tsrc",
        "name": "Lebanese pound",
        "price": "1516.943",
        "details": {
            "code": "LBP",
            "name": "Lebanese pound",
            "symbol": "ل.ل"
        },
        "flag": "https://flagcdn.com/lb.svg",
        "country": "Lebanon"
    },
    {
        "code": "/m/04xm1m",
        "name": "Lesotho loti",
        "price": "18.080000000000002",
        "details": {
            "code": "LSL",
            "name": "Lesotho loti",
            "symbol": "L"
        },
        "flag": "https://flagcdn.com/ls.svg",
        "country": "Lesotho"
    },
    {
        "code": "/m/05g359",
        "name": "Liberian Dollar",
        "price": "153.8",
        "details": {
            "code": "LRD",
            "name": "Liberian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/lr.svg",
        "country": "Liberia"
    },
    {
        "code": "/m/024xpm",
        "name": "Libyan Dinar",
        "price": "5.055",
        "details": {
            "code": "LYD",
            "name": "Libyan dinar",
            "symbol": "ل.د"
        },
        "flag": "https://flagcdn.com/ly.svg",
        "country": "Libya"
    },
    {
        "code": "/m/02fbly",
        "name": "Macanese Pataca",
        "price": "8.089474",
        "details": {
            "code": "MOP",
            "name": "Macanese pataca",
            "symbol": "P"
        },
        "flag": "https://flagcdn.com/mo.svg",
        "country": "Macao"
    },
    {
        "code": "/m/022dkb",
        "name": "Macedonian Denar",
        "price": "63.136590000000005",
        "details": {
            "code": "MKD",
            "name": "Macedonian denar",
            "symbol": "ден"
        },
        "flag": "https://flagcdn.com/mk.svg",
        "country": "North Macedonia"
    },
    {
        "code": "/m/04hx_7",
        "name": "Malagasy Ariary",
        "price": "4197",
        "details": {
            "code": "MGA",
            "name": "Malagasy ariary",
            "symbol": "Ar"
        },
        "flag": "https://flagcdn.com/mg.svg",
        "country": "Madagascar"
    },
    {
        "code": "/m/0fr4w",
        "name": "Malawian Kwacha",
        "price": "1026",
        "details": {
            "code": "MWK",
            "name": "Malawian kwacha",
            "symbol": "MK"
        },
        "flag": "https://flagcdn.com/mw.svg",
        "country": "Malawi"
    },
    {
        "code": "/m/01_c9q",
        "name": "Malaysian Ringgit",
        "price": "4.637",
        "details": {
            "code": "MYR",
            "name": "Malaysian ringgit",
            "symbol": "RM"
        },
        "flag": "https://flagcdn.com/my.svg",
        "country": "Malaysia"
    },
    {
        "code": "/m/02gsxf",
        "name": "Maldivian Rufiyaa",
        "price": "15.450000000000001",
        "details": {
            "code": "MVR",
            "name": "Maldivian rufiyaa",
            "symbol": ".ރ"
        },
        "flag": "https://flagcdn.com/mv.svg",
        "country": "Maldives"
    },
    {
        "code": "/m/023c2n",
        "name": "Mauritanian Ouguiya (1973–2017)",
        "price": "37.905",
        "details": {
            "code": "MRO",
            "name": "Mauritanian ouguiya",
            "symbol": "UM"
        },
        "flag": "https://flagcdn.com/mr.svg",
        "country": "Mauritania"
    },
    {
        "code": "/m/02scxb",
        "name": "Mauritian Rupee",
        "price": "45.746230000000004",
        "details": {
            "code": "MUR",
            "name": "Mauritian rupee",
            "symbol": "₨"
        },
        "flag": "https://flagcdn.com/mu.svg",
        "country": "Mauritius"
    },
    {
        "code": "/m/012ts8",
        "name": "Mexican Peso",
        "price": "20.146150000000002",
        "details": {
            "code": "MXN",
            "name": "Mexican peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/mx.svg",
        "country": "Mexico"
    },
    {
        "code": "/m/02z6sq",
        "name": "Moldovan Leu",
        "price": "19.509580000000003",
        "details": {
            "code": "MDL",
            "name": "Moldovan leu",
            "symbol": "L"
        },
        "flag": "https://flagcdn.com/md.svg",
        "country": "Moldova (Republic of)"
    },
    {
        "code": "/m/06qsj1",
        "name": "Moroccan Dirham",
        "price": "10.953000000000001",
        "details": {
            "code": "MAD",
            "name": "Moroccan dirham",
            "symbol": "د.م."
        },
        "flag": "https://flagcdn.com/ma.svg",
        "country": "Morocco"
    },
    {
        "code": "/m/05yxqw",
        "name": "Mozambican metical",
        "price": "63.830000000000005",
        "details": {
            "code": "MZN",
            "name": "Mozambican metical",
            "symbol": "MT"
        },
        "flag": "https://flagcdn.com/mz.svg",
        "country": "Mozambique"
    },
    {
        "code": "/m/04r7gc",
        "name": "Myanmar Kyat",
        "price": "2100.926",
        "details": {
            "code": "MMK",
            "name": "Burmese kyat",
            "symbol": "Ks"
        },
        "flag": "https://flagcdn.com/mm.svg",
        "country": "Myanmar"
    },
    {
        "code": "/m/01y8jz",
        "name": "Namibian dollar",
        "price": "18.080000000000002",
        "details": {
            "code": "NAD",
            "name": "Namibian dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/na.svg",
        "country": "Namibia"
    },
    {
        "code": "/m/02f4f4",
        "name": "Nepalese Rupee",
        "price": "130.3684",
        "details": {
            "code": "NPR",
            "name": "Nepalese rupee",
            "symbol": "₨"
        },
        "flag": "https://flagcdn.com/np.svg",
        "country": "Nepal"
    },
    {
        "code": "/m/08njbf",
        "name": "Netherlands Antillean Guilder",
        "price": "1.803199",
        "details": {
            "code": "ANG",
            "name": "Netherlands Antillean guilder",
            "symbol": "ƒ"
        },
        "flag": "https://flagcdn.com/cw.svg",
        "country": "Curaçao"
    },
    {
        "code": "/m/01t0lt",
        "name": "New Taiwan dollar",
        "price": "31.817600000000002",
        "details": {
            "code": "TWD",
            "name": "New Taiwan dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/tw.svg",
        "country": "Taiwan"
    },
    {
        "code": "/m/015f1d",
        "name": "New Zealand Dollar",
        "price": "1.7893949999999998",
        "details": {
            "code": "NZD",
            "name": "New Zealand dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/ck.svg",
        "country": "Cook Islands"
    },
    {
        "code": "/m/02fvtk",
        "name": "Nicaraguan Córdoba",
        "price": "36",
        "details": {
            "code": "NIO",
            "name": "Nicaraguan córdoba",
            "symbol": "C$"
        },
        "flag": "https://flagcdn.com/ni.svg",
        "country": "Nicaragua"
    },
    {
        "code": "/m/018cg3",
        "name": "Nigerian Naira",
        "price": "432.37",
        "details": {
            "code": "NGN",
            "name": "Nigerian naira",
            "symbol": "₦"
        },
        "flag": "https://flagcdn.com/ng.svg",
        "country": "Nigeria"
    },
    {
        "code": "/m/0h5dw",
        "name": "Norwegian Krone",
        "price": "10.88606",
        "details": {
            "code": "NOK",
            "name": "Norwegian krone",
            "symbol": "kr"
        },
        "flag": "https://flagcdn.com/bv.svg",
        "country": "Bouvet Island"
    },
    {
        "code": "/m/04_66x",
        "name": "Omani Rial",
        "price": "0.3849662",
        "details": {
            "code": "OMR",
            "name": "Omani rial",
            "symbol": "ر.ع."
        },
        "flag": "https://flagcdn.com/om.svg",
        "country": "Oman"
    },
    {
        "code": "/m/02svsf",
        "name": "Pakistani Rupee",
        "price": "228.10000000000002",
        "details": {
            "code": "PKR",
            "name": "Pakistani rupee",
            "symbol": "₨"
        },
        "flag": "https://flagcdn.com/pk.svg",
        "country": "Pakistan"
    },
    {
        "code": "/m/0200cp",
        "name": "Panamanian Balboa",
        "price": "1.000559",
        "details": {
            "code": "PAB",
            "name": "Panamanian balboa",
            "symbol": "B/."
        },
        "flag": "https://flagcdn.com/pa.svg",
        "country": "Panama"
    },
    {
        "code": "/m/04xblj",
        "name": "Papua New Guinean Kina",
        "price": "3.52",
        "details": {
            "code": "PGK",
            "name": "Papua New Guinean kina",
            "symbol": "K"
        },
        "flag": "https://flagcdn.com/pg.svg",
        "country": "Papua New Guinea"
    },
    {
        "code": "/m/04w7dd",
        "name": "Paraguayan Guarani",
        "price": "7072.611",
        "details": {
            "code": "PYG",
            "name": "Paraguayan guaraní",
            "symbol": "₲"
        },
        "flag": "https://flagcdn.com/py.svg",
        "country": "Paraguay"
    },
    {
        "code": "/m/01h5bw",
        "name": "Philippine peso",
        "price": "58.801500000000004",
        "details": {
            "code": "PHP",
            "name": "Philippine peso",
            "symbol": "₱"
        },
        "flag": "https://flagcdn.com/ph.svg",
        "country": "Philippines"
    },
    {
        "code": "/m/0glfp",
        "name": "Polish złoty",
        "price": "4.951725",
        "details": {
            "code": "PLN",
            "name": "Polish złoty",
            "symbol": "zł"
        },
        "flag": "https://flagcdn.com/pl.svg",
        "country": "Poland"
    },
    {
        "code": "/m/01nv4h",
        "name": "Pound sterling",
        "price": "0.8968609999999999",
        "details": {
            "code": "GBP",
            "name": "British pound",
            "symbol": "£"
        },
        "flag": "https://flagcdn.com/gb.svg",
        "country": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
        "code": "/m/05lf7w",
        "name": "Qatari Rial",
        "price": "3.641",
        "details": {
            "code": "QAR",
            "name": "Qatari riyal",
            "symbol": "ر.ق"
        },
        "flag": "https://flagcdn.com/qa.svg",
        "country": "Qatar"
    },
    {
        "code": "/m/02zsyq",
        "name": "Romanian Leu",
        "price": "5.0493",
        "details": {
            "code": "RON",
            "name": "Romanian leu",
            "symbol": "lei"
        },
        "flag": "https://flagcdn.com/ro.svg",
        "country": "Romania"
    },
    {
        "code": "/m/01hy_q",
        "name": "Russian Ruble",
        "price": "60.2",
        "details": {
            "code": "RUB",
            "name": "Russian ruble",
            "symbol": "₽"
        },
        "flag": "https://flagcdn.com/ru.svg",
        "country": "Russian Federation"
    },
    {
        "code": "/m/05yxkm",
        "name": "Rwandan franc",
        "price": "1041.5",
        "details": {
            "code": "RWF",
            "name": "Rwandan franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/rw.svg",
        "country": "Rwanda"
    },
    {
        "code": "/m/04wcnp",
        "name": "Salvadoran Colón",
        "price": "8.755054",
        "details": {
            "code": "SVC",
            "name": "Salvadoran Colón",
            "symbol": "₡"
        },
        "flag": "https://flagcdn.com/sv.svg",
        "country": "El Salvador"
    },
    {
        "code": "/m/02d1cm",
        "name": "Saudi Riyal",
        "price": "3.756801",
        "details": {
            "code": "SAR",
            "name": "Saudi riyal",
            "symbol": "ر.س"
        },
        "flag": "https://flagcdn.com/sa.svg",
        "country": "Saudi Arabia"
    },
    {
        "code": "/m/02kz6b",
        "name": "Serbian Dinar",
        "price": "119.71000000000001",
        "details": {
            "code": "RSD",
            "name": "Serbian dinar",
            "symbol": "дин."
        },
        "flag": "https://flagcdn.com/rs.svg",
        "country": "Serbia"
    },
    {
        "code": "/m/01lvjz",
        "name": "Seychellois Rupee",
        "price": "13.05563",
        "details": {
            "code": "SCR",
            "name": "Seychellois rupee",
            "symbol": "₨"
        },
        "flag": "https://flagcdn.com/sc.svg",
        "country": "Seychelles"
    },
    {
        "code": "/m/02vqvn",
        "name": "Sierra Leonean Leone",
        "price": "15495",
        "details": {
            "code": "SLL",
            "name": "Sierra Leonean leone",
            "symbol": "Le"
        },
        "flag": "https://flagcdn.com/sl.svg",
        "country": "Sierra Leone"
    },
    {
        "code": "/m/02f32g",
        "name": "Singapore Dollar",
        "price": "1.4319849999999998",
        "details": {
            "code": "SGD",
            "name": "Singapore dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/sg.svg",
        "country": "Singapore"
    },
    {
        "code": "/m/0b423v",
        "name": "Sol",
        "price": "3.9815",
        "details": {
            "code": "PEN",
            "name": "Peruvian sol",
            "symbol": "S/."
        },
        "flag": "https://flagcdn.com/pe.svg",
        "country": "Peru"
    },
    {
        "code": "/m/05jpx1",
        "name": "Solomon Islands Dollar",
        "price": "8.150095",
        "details": {
            "code": "SBD",
            "name": "Solomon Islands dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/sb.svg",
        "country": "Solomon Islands"
    },
    {
        "code": "/m/05yxgz",
        "name": "Somali Shilling",
        "price": "568.5",
        "details": {
            "code": "SOS",
            "name": "Somali shilling",
            "symbol": "Sh"
        },
        "flag": "https://flagcdn.com/so.svg",
        "country": "Somalia"
    },
    {
        "code": "/m/01rmbs",
        "name": "South African Rand",
        "price": "18.091040000000003",
        "details": {
            "code": "ZAR",
            "name": "South African rand",
            "symbol": "R"
        },
        "flag": "https://flagcdn.com/za.svg",
        "country": "South Africa"
    },
    {
        "code": "/m/01rn1k",
        "name": "South Korean won",
        "price": "1440.23",
        "details": {
            "code": "KRW",
            "name": "South Korean won",
            "symbol": "₩"
        },
        "flag": "https://flagcdn.com/kr.svg",
        "country": "Korea (Republic of)"
    },
    {
        "code": "/g/11bc5b_s84",
        "name": "Sovereign Bolivar",
        "price": "8.173449999999999",
        "details": {
            "code": "VEF",
            "name": "Venezuelan bolívar",
            "symbol": "Bs S"
        },
        "flag": "https://flagcdn.com/ve.svg",
        "country": "Venezuela"
    },
    {
        "code": "/m/02gsxw",
        "name": "Sri Lankan Rupee",
        "price": "365.6612",
        "details": {
            "code": "LKR",
            "name": "Sri Lankan rupee",
            "symbol": "Rs"
        },
        "flag": "https://flagcdn.com/lk.svg",
        "country": "Sri Lanka"
    },
    {
        "code": "/m/08d4zw",
        "name": "Sudanese pound",
        "price": "578.5",
        "details": {
            "code": "SDG",
            "name": "Sudanese pound",
            "symbol": "ج.س."
        },
        "flag": "https://flagcdn.com/sd.svg",
        "country": "Sudan"
    },
    {
        "code": "/m/02dl9v",
        "name": "Surinamese Dollar",
        "price": "28.5895",
        "details": {
            "code": "SRD",
            "name": "Surinamese dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/sr.svg",
        "country": "Suriname"
    },
    {
        "code": "/m/02pmxj",
        "name": "Swazi Lilangeni",
        "price": "18.080000000000002",
        "details": {
            "code": "SZL",
            "name": "Swazi lilangeni",
            "symbol": "L"
        },
        "flag": "https://flagcdn.com/sz.svg",
        "country": "Swaziland"
    },
    {
        "code": "/m/0485n",
        "name": "Swedish Krona",
        "price": "11.082960000000002",
        "details": {
            "code": "SEK",
            "name": "Swedish krona",
            "symbol": "kr"
        },
        "flag": "https://flagcdn.com/se.svg",
        "country": "Sweden"
    },
    {
        "code": "/m/01_h4b",
        "name": "Swiss Franc",
        "price": "0.9886995999999999",
        "details": {
            "code": "CHF",
            "name": "Swiss franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/li.svg",
        "country": "Liechtenstein"
    },
    {
        "code": "/m/0370bp",
        "name": "Tajikistani Somoni",
        "price": "9.829965999999999",
        "details": {
            "code": "TJS",
            "name": "Tajikistani somoni",
            "symbol": "ЅМ"
        },
        "flag": "https://flagcdn.com/tj.svg",
        "country": "Tajikistan"
    },
    {
        "code": "/m/04s1qh",
        "name": "Tanzanian Shilling",
        "price": "2330",
        "details": {
            "code": "TZS",
            "name": "Tanzanian shilling",
            "symbol": "Sh"
        },
        "flag": "https://flagcdn.com/tz.svg",
        "country": "Tanzania, United Republic of"
    },
    {
        "code": "/m/0mcb5",
        "name": "Thai Baht",
        "price": "37.668000000000006",
        "details": {
            "code": "THB",
            "name": "Thai baht",
            "symbol": "฿"
        },
        "flag": "https://flagcdn.com/th.svg",
        "country": "Thailand"
    },
    {
        "code": "/m/040qbv",
        "name": "Tongan Pa'anga",
        "price": "2.4271",
        "details": {
            "code": "TOP",
            "name": "Tongan paʻanga",
            "symbol": "T$"
        },
        "flag": "https://flagcdn.com/to.svg",
        "country": "Tonga"
    },
    {
        "code": "/m/04xcgz",
        "name": "Trinidad & Tobago Dollar",
        "price": "6.797382",
        "details": {
            "code": "TTD",
            "name": "Trinidad and Tobago dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/tt.svg",
        "country": "Trinidad and Tobago"
    },
    {
        "code": "/m/04z4ml",
        "name": "Tunisian Dinar",
        "price": "3.2689999999999997",
        "details": {
            "code": "TND",
            "name": "Tunisian dinar",
            "symbol": "د.ت"
        },
        "flag": "https://flagcdn.com/tn.svg",
        "country": "Tunisia"
    },
    {
        "code": "/m/04dq0w",
        "name": "Turkish lira",
        "price": "18.502000000000002",
        "details": {
            "code": "TRY",
            "name": "Turkish lira",
            "symbol": "₺"
        },
        "flag": "https://flagcdn.com/tr.svg",
        "country": "Turkey"
    },
    {
        "code": "/m/0425kx",
        "name": "Turkmenistani manat",
        "price": "3.51",
        "details": {
            "code": "TMT",
            "name": "Turkmenistan manat",
            "symbol": "m"
        },
        "flag": "https://flagcdn.com/tm.svg",
        "country": "Turkmenistan"
    },
    {
        "code": "/m/04b6vh",
        "name": "Ugandan Shilling",
        "price": "3852.926",
        "details": {
            "code": "UGX",
            "name": "Ugandan shilling",
            "symbol": "Sh"
        },
        "flag": "https://flagcdn.com/ug.svg",
        "country": "Uganda"
    },
    {
        "code": "/m/035qkb",
        "name": "Ukrainian hryvnia",
        "price": "36.95029",
        "details": {
            "code": "UAH",
            "name": "Ukrainian hryvnia",
            "symbol": "₴"
        },
        "flag": "https://flagcdn.com/ua.svg",
        "country": "Ukraine"
    },
    {
        "code": "/m/02zl8q",
        "name": "United Arab Emirates Dirham",
        "price": "3.6730199999999997",
        "details": {
            "code": "AED",
            "name": "United Arab Emirates dirham",
            "symbol": "د.إ"
        },
        "flag": "https://flagcdn.com/ae.svg",
        "country": "United Arab Emirates"
    },
    {
        "code": "/m/09nqf",
        "name": "United States Dollar",
        "price": "1",
        "details": {
            "code": "USD",
            "name": "United States Dollar",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/us.svg",
        "country": "United States of America"
    },
    {
        "code": "/m/04wblx",
        "name": "Uruguayan Peso",
        "price": "41.36818",
        "details": {
            "code": "UYU",
            "name": "Uruguayan peso",
            "symbol": "$"
        },
        "flag": "https://flagcdn.com/uy.svg",
        "country": "Uruguay"
    },
    {
        "code": "/m/04l7bl",
        "name": "Uzbekistani Som",
        "price": "11015",
        "details": {
            "code": "UZS",
            "name": "Uzbekistani so'm",
            "symbol": "so'm"
        },
        "flag": "https://flagcdn.com/uz.svg",
        "country": "Uzbekistan"
    },
    {
        "code": "/m/03ksl6",
        "name": "Vietnamese dong",
        "price": "23865",
        "details": {
            "code": "VND",
            "name": "Vietnamese đồng",
            "symbol": "₫"
        },
        "flag": "https://flagcdn.com/vn.svg",
        "country": "Vietnam"
    },
    {
        "code": "/m/025sw2q",
        "name": "West African CFA franc",
        "price": "686.96",
        "details": {
            "code": "XOF",
            "name": "West African CFA franc",
            "symbol": "Fr"
        },
        "flag": "https://flagcdn.com/bj.svg",
        "country": "Benin"
    },
    {
        "code": "/m/05yxwz",
        "name": "Yemeni Rial",
        "price": "250.25",
        "details": {
            "code": "YER",
            "name": "Yemeni rial",
            "symbol": "﷼"
        },
        "flag": "https://flagcdn.com/ye.svg",
        "country": "Yemen"
    },
    {
        "code": "/m/0fr4f",
        "name": "Zambian Kwacha",
        "price": "15.783450000000002",
        "details": {
            "code": "ZMW",
            "name": "Zambian kwacha",
            "symbol": "ZK"
        },
        "flag": "https://flagcdn.com/zm.svg",
        "country": "Zambia"
    }
];

export default currencies;

// currencies.forEach(async(currency) => {
//     await fetch(`https://www.google.com/async/currency_v2_update?vet=12ahUKEwi5lvmo_L_6AhWzxQIHHW_wAb8Q_sIDegQIAxAB..i&ei=oLA4Y7nGI7OLi-gP7-CH-As&yv=3&cs=1&async=source_amount:1000,source_currency:%2Fm%2F09nqf,target_currency:${currency.code},lang:en,country:ng,disclaimer_url:https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fgooglefinance%2Fdisclaimer%2F,period:1M,interval:86400,_id:currency-v2-updatable_2,_pms:s,_fmt:pc`, {
//         "headers": {
//           "accept": "*/*",
//           "accept-language": "en-US,en;q=0.9",
//           "cache-control": "no-cache",
//           "pragma": "no-cache",
//           "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
//           "sec-ch-ua-arch": "\"x86\"",
//           "sec-ch-ua-bitness": "\"64\"",
//           "sec-ch-ua-full-version": "\"106.0.5249.61\"",
//           "sec-ch-ua-full-version-list": "\"Chromium\";v=\"106.0.5249.61\", \"Google Chrome\";v=\"106.0.5249.61\", \"Not;A=Brand\";v=\"99.0.0.0\"",
//           "sec-ch-ua-mobile": "?0",
//           "sec-ch-ua-model": "",
//           "sec-ch-ua-platform": "\"Windows\"",
//           "sec-ch-ua-platform-version": "\"10.0.0\"",
//           "sec-ch-ua-wow64": "?0",
//           "sec-fetch-dest": "empty",
//           "sec-fetch-mode": "no-cors",
//           "sec-fetch-site": "same-origin",
//           "cookie": "OTZ=6702382_52_52__52_; AEC=AakniGOmvZoeb5NJrwOR6GFgnnKoGDKa3TipPiYHfqPlMnP8CfLQI1HmpWg; 1P_JAR=2022-10-02-00; NID=511=cugPkqki09kxily6lcF8I9tN2_6tyRCdc5iWp0tHU3VE3mItxe5ppFQgZm6BsD6_nFK2lJzWe3KDv6uPBntqLdXvIZCdvRT2MPWocJGUE2y_5AvCYou3nIZEFvzU1HVzuALwx2hR0W5jupg4fMjfFO9dElJ4TDzS97gxCx1upME; DV=YzUwNXGfV9MqoLzqnEwKQNAB3eVfOVigFLPp11GAHgEAAAA",
//           "Referer": "https://www.google.com/",
//           "Referrer-Policy": "origin",
//           'Access-Control-Allow-Origin': "http://127.0.0.1:3000"
//         },
//         "body": null,
//         "method": "GET",
//         "mode": "no-cors"
//       })
//     .then(res => res.text())
//     .then(data => {

//         currency.price = data.match(/data-exchange-rate="[\d|\.]+/)?.[0]?.split('data-exchange-rate=\"')?.[1];
//     });
// })

// currencies.sort((a, b) => {
//     let fa = a.name.toLowerCase(),
//         fb = b.name.toLowerCase();

//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// });