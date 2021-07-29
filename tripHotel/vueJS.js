let vm = new Vue({
    el: "#bigbox",
    data: {
        logoImg: "./hotelImg/logo.png",
        stayImg: [

            {
                id: 1,
                src: "./hotelImg/room/bld_sy.png",
                city: "巴厘岛",
                country: "三亚",
            }, {
                id: 2,
                src: "./hotelImg/room/wyc_ydl.png",
                city: "五渔村",
                country: "意大利",
            }, {
                id: 3,
                src: "./hotelImg/room/hdb_dg.png",
                city: "海德堡",
                country: "德国",
            }, {
                id: 4,
                src: "./hotelImg/room/xbn_mlxy.png",
                city: "仙本那",
                country: "马来西亚",
            }, {
                id: 5,
                src: "./hotelImg/room/xjp_xjp.png",
                city: "新加坡",
                country: "新加坡",
            }, {
                id: 6,
                src: "./hotelImg/room/sbd_mg.png",
                city: "塞班岛",
                country: "美国",
            },
        ],
        specialImg: [

            {
                id: 1,
                src: "./hotelImg/room/a1.png",
                score: 7.7,
                name: "曼谷威客3号酒店(原曼谷胜利纪念碑酒店)",
                nameEN: "Witke No. 3 Hotel Bangkok ",
            }, {
                id: 2,
                src: "./hotelImg/room/a2.png",
                score: 5.5,
                name: "湘南帝景酒店",
                nameEN: "Xiangnan Dijing Hotel",
            }, {
                id: 3,
                src: "./hotelImg/room/a3.png",
                score: 6.3,
                name: "璀璨专享服务公寓",
                nameEN: "Resplendent exclusive service apartment",
            }, {
                id: 4,
                src: "./hotelImg/room/a4.png",
                score: 8.1,
                name: "曼谷暹罗安纳塔拉酒店",
                nameEN: "Siam Anantara Hotel, Bangkok",
            }, {
                id: 5,
                src: "./hotelImg/room/a5.png",
                score: 4.7,
                name: "彩虹云霄酒店",
                nameEN: "Rainbow Sky Hotel",
            }, {
                id: 6,
                src: "./hotelImg/room/a6.png",
                score: 9.5,
                name: "曼谷利特酒店",
                nameEN: "Litt Hotel Bangkok",
            }, {
                id: 7,
                src: "./hotelImg/room/a7.png",
                score: 7.4,
                name: "暹罗四季酒店",
                nameEN: "Four Seasons Hotel Siam",
            }, {
                id: 8,
                src: "./hotelImg/room/a8.png",
                score: 8.6,
                name: "曼谷廊曼机场阿玛瑞酒店",
                nameEN: "Amari Hotel, Don Muang Airport, Bangkok",
            },

        ]
    }
})