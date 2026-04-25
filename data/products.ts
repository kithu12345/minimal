export interface Product {
    id: number;
    name: string;
    color: string;
    price: number;
    image: string;
}

export const allProducts: Product[] = [
    {
        id: 1,
        name: 'Structured Wool Overcoat',
        color: 'Camel Taupe',
        price: 450.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE',
    },
    {
        id: 2,
        name: 'Pima Cotton Capsule Tee',
        color: 'Pristine White',
        price: 65.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCFfEXdLOobvy4SRYxnJBWoUp7RT-yAPzzxFmBeBmW2kpipxFmX9EzshjdkL4o5iy7KVxSnQXQc47Hz0Dlk8p_H9h63qIimN97JwTi7UCj0mmBa7oJRmeLSIuxwTH43imRMcDv2DJ4IzrJHva6cafhZtWY5aS_Ir3jATghtSXkW7SjcZhZWXJDk-ubt9j_qTU9182qXaIK5cM8dKRsb5_meNqMvc1VsIAaJ4PE_r456ITS4-LOCl__PnQDxoOPRxmbFOVM9t9Fr789b',
    },
    {
        id: 3,
        name: 'Raw Selvedge Denim',
        color: 'Indigo Wash',
        price: 185.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBEJdtkthRNwQ0GOEkyVsi9MtMOxr7jk5OcgitCK-fbOEVovDDtu3TXJb2rhV4OUsg0wjfnz7GHc2SyxmIm_TcmFo3FdYoYfMfS0rOW_AFHLERCuR5O-FU6oYRiWFwpckIVrrXN2LdqdJwiuj2royCRAvB4Sqdrs4u7QqpMQH-s74hXPdkWJ_3c5AhwEYV6N2d52qAhw1Nr68hXfKNGeadMQmamYDJsQkNomAobOBh3EkM77ShWMoZvACotu6IjTx485iSycVKQ4-Xh',
    },
    {
        id: 4,
        name: 'Silk Blend Lounge Set',
        color: 'Mist Grey',
        price: 210.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB2jjINy6X9ZmAL4TH-7YZv-jAgM_DqAMy5Qi-pLg2WQMKDfgkZCbrbIbaGZ_Bga_TcYvpHAr3lifqniq4w2QOfFeiyPuCMosLCCBZ_HjaaT7pwxS9s48nF2zz22_ic3IEbtbGojgJR9lDAhajnBAVWDQT3In_cQC2EBfnbNUQ3fM4cVQycrlvZ6tlbjNuHMTp2f3EY1p59GroL9sxakiADc1SSJL5EeB6DzfTPT9_qO81t3iClmClubUMQzTXltq53rc8Z6N6ySN-G',
    },
    {
        id: 5,
        name: 'Signature Cashmere Knit',
        color: 'Midnight Navy',
        price: 295.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE',
    },
    {
        id: 6,
        name: 'Tailored Pleated Trousers',
        color: 'Deep Charcoal',
        price: 175.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCFfEXdLOobvy4SRYxnJBWoUp7RT-yAPzzxFmBeBmW2kpipxFmX9EzshjdkL4o5iy7KVxSnQXQc47Hz0Dlk8p_H9h63qIimN97JwTi7UCj0mmBa7oJRmeLSIuxwTH43imRMcDv2DJ4IzrJHva6cafhZtWY5aS_Ir3jATghtSXkW7SjcZhZWXJDk-ubt9j_qTU9182qXaIK5cM8dKRsb5_meNqMvc1VsIAaJ4PE_r456ITS4-LOCl__PnQDxoOPRxmbFOVM9t9Fr789b',
    },
    {
        id: 7,
        name: 'Merino Rib Turtleneck',
        color: 'Stone Beige',
        price: 140.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE',
    },
    {
        id: 8,
        name: 'Relaxed Linen Shirt',
        color: 'Soft Sand',
        price: 110.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCFfEXdLOobvy4SRYxnJBWoUp7RT-yAPzzxFmBeBmW2kpipxFmX9EzshjdkL4o5iy7KVxSnQXQc47Hz0Dlk8p_H9h63qIimN97JwTi7UCj0mmBa7oJRmeLSIuxwTH43imRMcDv2DJ4IzrJHva6cafhZtWY5aS_Ir3jATghtSXkW7SjcZhZWXJDk-ubt9j_qTU9182qXaIK5cM8dKRsb5_meNqMvc1VsIAaJ4PE_r456ITS4-LOCl__PnQDxoOPRxmbFOVM9t9Fr789b',
    },
    {
        id: 9,
        name: 'Cropped Utility Jacket',
        color: 'Olive Khaki',
        price: 260.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBEJdtkthRNwQ0GOEkyVsi9MtMOxr7jk5OcgitCK-fbOEVovDDtu3TXJb2rhV4OUsg0wjfnz7GHc2SyxmIm_TcmFo3FdYoYfMfS0rOW_AFHLERCuR5O-FU6oYRiWFwpckIVrrXN2LdqdJwiuj2royCRAvB4Sqdrs4u7QqpMQH-s74hXPdkWJ_3c5AhwEYV6N2d52qAhw1Nr68hXfKNGeadMQmamYDJsQkNomAobOBh3EkM77ShWMoZvACotu6IjTx485iSycVKQ4-Xh',
    },
    {
        id: 10,
        name: 'Organic Cotton Poplin Dress',
        color: 'Warm Ivory',
        price: 225.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB2jjINy6X9ZmAL4TH-7YZv-jAgM_DqAMy5Qi-pLg2WQMKDfgkZCbrbIbaGZ_Bga_TcYvpHAr3lifqniq4w2QOfFeiyPuCMosLCCBZ_HjaaT7pwxS9s48nF2zz22_ic3IEbtbGojgJR9lDAhajnBAVWDQT3In_cQC2EBfnbNUQ3fM4cVQycrlvZ6tlbjNuHMTp2f3EY1p59GroL9sxakiADc1SSJL5EeB6DzfTPT9_qO81t3iClmClubUMQzTXltq53rc8Z6N6ySN-G',
    },
    {
        id: 11,
        name: 'Minimal Leather Loafers',
        color: 'Espresso Brown',
        price: 320.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE',
    },
    {
        id: 12,
        name: 'Wool Blend Midi Skirt',
        color: 'Graphite',
        price: 190.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCFfEXdLOobvy4SRYxnJBWoUp7RT-yAPzzxFmBeBmW2kpipxFmX9EzshjdkL4o5iy7KVxSnQXQc47Hz0Dlk8p_H9h63qIimN97JwTi7UCj0mmBa7oJRmeLSIuxwTH43imRMcDv2DJ4IzrJHva6cafhZtWY5aS_Ir3jATghtSXkW7SjcZhZWXJDk-ubt9j_qTU9182qXaIK5cM8dKRsb5_meNqMvc1VsIAaJ4PE_r456ITS4-LOCl__PnQDxoOPRxmbFOVM9t9Fr789b',
    },
    {
        id: 13,
        name: 'Classic Trench Coat',
        color: 'Dusty Camel',
        price: 410.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBEJdtkthRNwQ0GOEkyVsi9MtMOxr7jk5OcgitCK-fbOEVovDDtu3TXJb2rhV4OUsg0wjfnz7GHc2SyxmIm_TcmFo3FdYoYfMfS0rOW_AFHLERCuR5O-FU6oYRiWFwpckIVrrXN2LdqdJwiuj2royCRAvB4Sqdrs4u7QqpMQH-s74hXPdkWJ_3c5AhwEYV6N2d52qAhw1Nr68hXfKNGeadMQmamYDJsQkNomAobOBh3EkM77ShWMoZvACotu6IjTx485iSycVKQ4-Xh',
    },
    {
        id: 14,
        name: 'Soft Structure Blazer',
        color: 'Slate Blue',
        price: 275.0,
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB2jjINy6X9ZmAL4TH-7YZv-jAgM_DqAMy5Qi-pLg2WQMKDfgkZCbrbIbaGZ_Bga_TcYvpHAr3lifqniq4w2QOfFeiyPuCMosLCCBZ_HjaaT7pwxS9s48nF2zz22_ic3IEbtbGojgJR9lDAhajnBAVWDQT3In_cQC2EBfnbNUQ3fM4cVQycrlvZ6tlbjNuHMTp2f3EY1p59GroL9sxakiADc1SSJL5EeB6DzfTPT9_qO81t3iClmClubUMQzTXltq53rc8Z6N6ySN-G',
    },
];