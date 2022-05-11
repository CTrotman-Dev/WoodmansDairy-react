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
        type:"Glass",
        desc:"Cotteswold Dairy Organic Semi Skimmed Milk 1 Pint (568ml) Glass",
        price:0.97,
        img: "https://static.wixstatic.com/media/94465c_4af24c65824344889daf6f92621eae8d~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_4af24c65824344889daf6f92621eae8d~mv2.webp"
    },
    {
        id: 6,
        name: "Organic Skimmed",
        type:"Glass",
        desc:"Cotteswold Dairy Organic Skimmed Milk 1 Pint (568ml) Glass",
        price:0.97,
        img: "https://static.wixstatic.com/media/94465c_c6175ea3b1844ef0b3e62050fb327867~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_c6175ea3b1844ef0b3e62050fb327867~mv2.webp"
    },
    {
        id: 7,
        name: "Organic Pasteurised",
        type:"Glass",
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
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Semi Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_d2aa50e450724c3c972b8547dbf67935~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_d2aa50e450724c3c972b8547dbf67935~mv2.webp"
    },
    {
        id: 10,
        name: "Skimmed",
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_c7ce6c738c5a43649dc1f8449a0b2bea~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_c7ce6c738c5a43649dc1f8449a0b2bea~mv2.webp"
    },
    {
        id: 11,
        name: "Pasteurised",
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Pasteurised Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_5b1600f7cc6a4fc6be25a099932003f0~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_5b1600f7cc6a4fc6be25a099932003f0~mv2.webp"
    },
    {
        id: 12,
        name: "Organic Semi Skimmed",
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Organic Semi Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_bbec5c5560ae43a884ccca4d9f6f498d~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_bbec5c5560ae43a884ccca4d9f6f498d~mv2.webp"
    },
    {
        id: 13,
        name: "Organic Skimmed",
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Organic Skimmed Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_3a2b98eb35104e22ac10d5dde396a5fd~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_3a2b98eb35104e22ac10d5dde396a5fd~mv2.webp"
    },
    {
        id: 14,
        name: "Organic Pasteurised",
        type:"Poly 2 Litres",
        desc:"Cotteswold Dairy Welsh Organic Pasteurised Milk 2 Litres",
        price:2.42,
        img: "https://static.wixstatic.com/media/94465c_8b15ee06979342078302ebe39370dad8~mv2.jpg/v1/fill/w_338,h_338,al_c,q_80,usm_0.66_1.00_0.01/94465c_8b15ee06979342078302ebe39370dad8~mv2.webp"
    }

];

export default productData;