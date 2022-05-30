const productData = [
    {
        id: 1,
        name: "Semi Skimmed",
        type:"Glass",
        desc:"Cotteswold Dairy Semi Skimmed Milk 1 Pint (568ml) Glass",
        price:0.89,
        img: "https://static.wixstatic.com/media/94465c_52a9a65d792649db8117a599038d6b8f~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_52a9a65d792649db8117a599038d6b8f~mv2.webp"
    },
    {
        id: 2,
        name: "Skimmed",
        type:"Glass",
        desc:"Cotteswold Dairy Skimmed Milk 1 Pint (568ml) Glass",
        price:0.89,
        img: "https://static.wixstatic.com/media/94465c_ca28c2e64e5c48f3ad426973a7706cf2~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_ca28c2e64e5c48f3ad426973a7706cf2~mv2.webp"
    },
    {
        id: 3,
        name: "Pasteurised",
        type:"Glass",
        desc:"Cotteswold Dairy Whole Milk 1 Pint (568ml) Glass",
        price:0.89,
        img: "https://static.wixstatic.com/media/94465c_e3e51a146b324ed79cdc6ce656c9ad24~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_e3e51a146b324ed79cdc6ce656c9ad24~mv2.webp"
    },
    {
        id: 4,
        name: "Channel Island",
        type:"Glass",
        desc:"Cotteswold Dairy Channel Island Milk 1 Pint (568ml) Glass",
        price:0.92,
        img: "https://static.wixstatic.com/media/94465c_ca28c2e64e5c48f3ad426973a7706cf2~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_ca28c2e64e5c48f3ad426973a7706cf2~mv2.webp"
    },
    {
        id: 5,
        name: "Organic Semi Skimmed",
        type:"Glass Organic",
        desc:"Cotteswold Dairy Organic Semi Skimmed Milk 1 Pint (568ml) Glass",
        price:0.97,
        img: "https://static.wixstatic.com/media/94465c_4af24c65824344889daf6f92621eae8d~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_4af24c65824344889daf6f92621eae8d~mv2.webp"
    },
    {
        id: 6,
        name: "Organic Skimmed",
        type:"Glass Organic",
        desc:"Cotteswold Dairy Organic Skimmed Milk 1 Pint (568ml) Glass",
        price:0.97,
        img: "https://static.wixstatic.com/media/94465c_c6175ea3b1844ef0b3e62050fb327867~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_c6175ea3b1844ef0b3e62050fb327867~mv2.webp"
    },
    {
        id: 7,
        name: "Organic Pasteurised",
        type:"Glass Organic",
        desc:"Cotteswold Dairy Organic Pasteurised Milk 1 Pint (568ml) Glass",
        price:0.97,
        img: "https://static.wixstatic.com/media/94465c_f65abc7b88ab4cc2aa8c6ce231f544bb~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_f65abc7b88ab4cc2aa8c6ce231f544bb~mv2.webp"
    },
    {
        id: 8,
        name: "Homogenised Pasteurised",
        type:"Glass",
        desc:"Cotteswold Dairy Homogenised Pasteurised Milk 1 Pint (568ml) Glass",
        price:0.89,
        img: "https://static.wixstatic.com/media/94465c_4b7641399e4c402298498a79600fda2c~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_4b7641399e4c402298498a79600fda2c~mv2.webp"
    },
    {
        id: 9,
        name: "Semi Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Semi Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_d2aa50e450724c3c972b8547dbf67935~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_d2aa50e450724c3c972b8547dbf67935~mv2.webp"
    },
    {
        id: 10,
        name: "Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_c7ce6c738c5a43649dc1f8449a0b2bea~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_c7ce6c738c5a43649dc1f8449a0b2bea~mv2.webp"
    },
    {
        id: 11,
        name: "Pasteurised",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Pasteurised Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_5b1600f7cc6a4fc6be25a099932003f0~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_5b1600f7cc6a4fc6be25a099932003f0~mv2.webp"
    },
    {
        id: 12,
        name: "Organic Semi Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Semi Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_bbec5c5560ae43a884ccca4d9f6f498d~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_bbec5c5560ae43a884ccca4d9f6f498d~mv2.webp"
    },
    {
        id: 13,
        name: "Organic Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_3a2b98eb35104e22ac10d5dde396a5fd~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_3a2b98eb35104e22ac10d5dde396a5fd~mv2.webp"
    },
    {
        id: 14,
        name: "Organic Pasteurised",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Pasteurised Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_8b15ee06979342078302ebe39370dad8~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_8b15ee06979342078302ebe39370dad8~mv2.webp"
    },
    {
        id: 15,
        name: "Semi Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Semi Skimmed Milk 1 Litres",
        price:1.42,
        img: "https://static.wixstatic.com/media/94465c_725ba3515cf44134856d22a53849ca0b~mv2.jpg/v1/crop/x_1504,y_373,w_3222,h_3197/fill/w_344,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20SEMI%20SKIMMED%201%20Litre%20Pr.jpg"
    },
    {
        id: 16,
        name: "Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Skimmed Milk 1 Litres",
        price:1.42,
        img: "https://static.wixstatic.com/media/94465c_5111b6be2c6b43f3a3fba6f4f87fefda~mv2.jpg/v1/crop/x_1461,y_344,w_3222,h_3197/fill/w_341,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20SKIMMED%201%20Litre%20Product.jpg"
    },
    {
        id: 17,
        name: "Pasteurised",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Pasteurised Milk 1 Litres",
        price:1.42,
        img: "https://static.wixstatic.com/media/94465c_6065d3a21e92473faf2fd61162873e89~mv2.jpg/v1/crop/x_1477,y_351,w_3240,h_3188/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20WHOLE%201%20Litre%20Product%20p.jpg"
    },
    {
        id: 18,
        name: "Semi Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Semi Skimmed Milk 1 pint",
        price:0.91,
        img: "https://static.wixstatic.com/media/94465c_e93caed1720043ffb12e1bc2c71ece3e~mv2.jpg/v1/crop/x_1416,y_282,w_3265,h_3265/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20SEMI%20SKIMMED%201%20Pint%20Pro.jpg"
    },
    {
        id: 19,
        name: "Skimmed",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Skimmed Milk 1 pint",
        price:0.91,
        img: "https://static.wixstatic.com/media/94465c_64a11a4bfc0c4628af0b25679b9c90ff~mv2.jpg/v1/crop/x_1480,y_255,w_3202,h_3206/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20SKIMMED%201%20Pint%20Product%20.jpg"
    },
    {
        id: 20,
        name: "Pasteurised",
        type:"Poly",
        desc:"Cotteswold Dairy Welsh Pasteurised Milk 1 pint",
        price:0.91,
        img: "https://static.wixstatic.com/media/94465c_d1dbd76934b44f39960bad4e0117674e~mv2.jpg/v1/crop/x_1300,y_157,w_3478,h_3482/fill/w_333,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20WELSH%20WHOLE%201%20Pint%20Product%20ph.jpg"
    },
    {
        id: 21,
        name: "Semi Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Semi Skimmed Milk 1 Litres",
        price:1.52,
        img: "https://static.wixstatic.com/media/94465c_871baf51c7ec40ce8afb6b9a949e53cb~mv2.jpg/v1/crop/x_1406,y_340,w_3322,h_3338/fill/w_338,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20semi%20skimmed%20mi.jpg"
    },
    {
        id: 22,
        name: "Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Skimmed Milk 1 Litres",
        price:1.52,
        img: "https://static.wixstatic.com/media/94465c_05f43dea846c4d25991529835b3323f9~mv2.jpg/v1/crop/x_1367,y_349,w_3322,h_3338/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20skimmed%20milk%201%20.jpg"
    },
    {
        id: 23,
        name: "Pasteurised",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Pasteurised Milk 1 Litres",
        price:1.52,
        img: "https://static.wixstatic.com/media/94465c_1628f7ac80f84f06aad63878a4c064e5~mv2.jpg/v1/crop/x_1346,y_336,w_3330,h_3326/fill/w_338,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20whole%20milk%201%20Li.jpg"
    },
    {
        id: 24,
        name: "Semi Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Semi Skimmed Milk 1 pint",
        price:0.99,
        img: "https://static.wixstatic.com/media/94465c_ebc87a2f4e104308a6096e5bb41bd436~mv2.jpg/v1/crop/x_1423,y_563,w_3127,h_3127/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20semi%20skimmed%20mi.jpg"
    },
    {
        id: 25,
        name: "Skimmed",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Skimmed Milk 1 pint",
        price:0.99,
        img: "https://static.wixstatic.com/media/94465c_e7347337d13b447fbcf3451336d7ef75~mv2.jpg/v1/crop/x_1428,y_579,w_3076,h_3073/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20skimmed%20milk%201%20.jpg"
    },
    {
        id: 26,
        name: "Pasteurised",
        type:"Organic Poly",
        desc:"Cotteswold Dairy Welsh Organic Pasteurised Milk 1 pint",
        price:0.99,
        img: "https://static.wixstatic.com/media/94465c_1d799df6eadd4c70804c40d9cb4f3d10~mv2.jpg/v1/crop/x_1379,y_517,w_3194,h_3206/fill/w_338,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cotteswold%20Dairy%20Organic%20whole%20milk%201%20pi.jpg"
    },
    {
        id: 27,
        name: "Pasteurised",
        type:"24 Pint PerGal (Milk Pack)",
        desc:"Cotteswold Dairy Pasteurised 24 Pint PerGal (Milk Pack)",
        price:10.99,
        img: "https://static.wixstatic.com/media/94465c_11629c49a2bb4e6cb4134e953cbc242c~mv2.jpg/v1/crop/x_1211,y_0,w_4030,h_4000/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CONVENTIONAL%20HOMOGENISED%20WHOLE%20MILK%2024%20P.jpg"
    },
    {
        id: 28,
        name: "Semi Skimmed",
        type:"24 Pint PerGal (Milk Pack)",
        desc:"Cotteswold Dairy Semi Skimmed 24 Pint PerGal (Milk Pack)",
        price:10.99,
        img: "https://static.wixstatic.com/media/94465c_081436abc3014d4ab9a1ef79f761e7c4~mv2.jpg/v1/crop/x_973,y_0,w_4055,h_4000/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CONVENTIONAL%20SEMI%20SKIMMED%20MILK%2024%20Pint%20P.jpg"
    },
    {
        id: 29,
        name: "Channel Island",
        type:"Glass",
        desc:"Cotteswold Dairy Channel Island Milk 1 Pint (568ml) Glass",
        price:0.99,
        img: "https://static.wixstatic.com/media/94465c_d24e5d669b5549f684e3578952cc402e~mv2.jpg/v1/crop/x_1573,y_0,w_2854,h_2854/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20DAIRY%20CHANNEL%20ISLAND%20GLASS%201%20.jpg"
    },
    {
        id: 30,
        name: "Oato Fresh Oat",
        type:"Glass",
        desc:"Cotteswold Dairy OATO Fresh Oat Drink 1 Pint (568ml) Glass",
        price:0.99,
        img: "https://static.wixstatic.com/media/94465c_4fd2c8848bd04b5f8994605bf2b0df0e~mv2.jpg/v1/crop/x_1573,y_653,w_2941,h_2885/fill/w_338,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/OATO%20Glass%201%20Pint.jpg"
    },
    {
        id: 31,
        name: "Double Cream",
        type:"Cream",
        desc:"Cotteswold Dairy Double Cream 250ml",
        price:0.55,
        img: "https://static.wixstatic.com/media/94465c_b6037effd5524f15a6311c8cc426db26~mv2.jpg/v1/crop/x_461,y_0,w_1715,h_1714/fill/w_335,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20DAIRY%20CONVENTIONAL%20DOUBLE%20CREAM%20250ml%20%20.jpg"
    },
    {
        id: 32,
        name: "Single Cream",
        type:"Cream",
        desc:"Cotteswold Dairy Single Cream 250ml",
        price:0.55,
        img: "https://static.wixstatic.com/media/94465c_e680c886686446b189075bd80b88003e~mv2.jpg/v1/crop/x_469,y_0,w_1715,h_1714/fill/w_335,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COTTESWOLD%20DAIRY%20CONVENTIONAL%20SINGLE%20CREAM%20250ml%20.jpg"
    },
    {
        id: 33,
        name: "Whipping Cream",
        type:"Cream",
        desc:"Cotteswold Dairy Whipping Cream 2 Litres",
        price:10.55,
        img: "https://static.wixstatic.com/media/94465c_b113eaf7077d45bd90e08483fca3d06a~mv2.jpg/v1/crop/x_1350,y_238,w_3330,h_3326/fill/w_335,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CONVENTIONAL%20WHIPPING%20CREAM%202L%20Product%20p.jpg"
    },
    {
        id: 34,
        name: "Banana Milk",
        type:"Alternate Milk",
        desc:"Delamere Sterilised Banana Flavoured Milk 500ml",
        price:2.55,
        img: "https://static.wixstatic.com/media/94465c_08773a9a9f29421aba1e9f1cf8b6c951~mv2.jpg/v1/crop/x_1508,y_798,w_2960,h_2970/fill/w_338,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sterilised%20Delamere%20Banana%20flavoured%20mil.jpg"
    },
    {
        id: 35,
        name: "Chocolate Milk",
        type:"Alternate Milk",
        desc:"Delamere Sterilised Chocolate Flavoured Milk 500ml",
        price:2.55,
        img: "https://static.wixstatic.com/media/94465c_21137964249646639d8a299a66852eee~mv2.jpg/v1/crop/x_1556,y_743,w_3020,h_3020/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sterilised%20Delamere%20Chocolate%20flavoured%20.jpg"
    },
    {
        id: 36,
        name: "Strawberry Milk",
        type:"Alternate Milk",
        desc:"Delamere Sterilised Strawberry Flavoured Milk 500ml",
        price:2.55,
        img: "https://static.wixstatic.com/media/94465c_574932130f6d443383b4fddd04d67abb~mv2.jpg/v1/crop/x_1476,y_730,w_3020,h_3020/fill/w_341,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sterilised%20Delamere%20Strawberry%20flavoured.jpg"
    },
    {
        id: 37,
        name: "Semi Skimmed Goats Milk",
        type:"Alternate Milk",
        desc:"Delamere Fresh Semi Skimmed Goats Milk 1 Litre",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_cbec65b71dc6478f947e9ca5ef5fbff5~mv2.jpg/v1/crop/x_1000,y_0,w_4000,h_4000/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Delamere%20Goats%20milk%20semi%20skimmed%201%20litre.jpg"
    },
    {
        id: 38,
        name: "Fresh Orange Juice",
        type:"Juice",
        desc:"Fresh Orange Juice 1 Pint (589ml)",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_fd494c6d65494c2aad858116a1eee032~mv2.jpg/v1/crop/x_1553,y_562,w_3069,h_3083/fill/w_335,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Orange%20juice%201%20pint%20glass%20bottle%20_JPG.jpg"
    },
    {
        id: 39,
        name: "Fresh Apple Juice",
        type:"Juice",
        desc:"Fresh Apple Juice 1 Pint (589ml)",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_1f923210bb33425fadc1354221716c2d~mv2.jpg/v1/crop/x_1519,y_642,w_2967,h_2970/fill/w_338,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Glass%20Apple%20juice%201%20Pint%20_JPG.jpg"
    },
    {
        id: 40,
        name: "Fresh Cranberry Juice",
        type:"Juice",
        desc:"Fresh Cranberry Juice 1 Pint (589ml)",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_2aee432645a7475cbb231fc143c01245~mv2.jpg/v1/crop/x_1419,y_773,w_2908,h_2911/fill/w_338,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Glass%20Cranberry%20juice%201%20Pint%20_JPG.jpg"
    },
    {
        id: 41,
        name: "Hovis White Bread",
        type:"Bread",
        desc:"Hovis Medium/Thick Sliced White Bread 800g",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_44a493bd0206463b8049df5f83dc9691~mv2.jpg/v1/crop/x_1027,y_0,w_4000,h_4000/fill/w_335,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hovis%20Soft%20White%20medium%20bread%20800g%20_JPG.jpg"
    },
    {
        id: 42,
        name: "Hovis Wholemeal Bread",
        type:"Bread",
        desc:"Hovis Medium/Thick Sliced Wholemeal Bread 800g",
        price:1.55,
        img: "https://static.wixstatic.com/media/94465c_ed2eb52dda214e9a8b68e7d4ada99e39~mv2.jpg/v1/crop/x_1149,y_189,w_3806,h_3811/fill/w_338,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hovis%20Tasty%20Wholemeal%20medium%20bread%20800g%20.jpg"
    }

];

export default productData;