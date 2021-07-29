let vm = new Vue({
    el: "#bigbox",
    data: {
        logoImg: "./silkBagImg/logo.png",
        searchImg: "./silkBagImg/search.png",
        areaTxt: [

            {
                id: 1,
                name: "亚洲",
            }, {
                id: 2,
                name: "欧洲",
            }, {
                id: 3,
                name: "北美洲",
            }, {
                id: 4,
                name: "南美洲",
            }, {
                id: 5,
                name: "大洋洲",
            }, {
                id: 6,
                name: "非洲",
            }, {
                id: 7,
                name: "南极洲",
            }, {
                id: 8,
                name: "杂志",
            }, {
                id: 9,
                name: "专题锦囊",
            }, {
                id: 10,
                name: "中国",
            },

        ],
        slideImg: [

            {
                id: 1,
                src: "./silkBagImg/img/s1.jpg",
            }, {
                id: 2,
                src: "./silkBagImg/img/s2.jpg",
            }, {
                id: 3,
                src: "./silkBagImg/img/s3.jpg",
            }, {
                id: 4,
                src: "./silkBagImg/img/s4.jpg",
            }, {
                id: 5,
                src: "./silkBagImg/img/s5.jpg",
            },
        ],
        recommendImg: [

            {
                id: 1,
                src: "./silkBagImg/img/t1.jpg",
                name: "敦煌",
            }, {
                id: 2,
                src: "./silkBagImg/img/t2.jpg",
                name: "喀什到和田",
            }, {
                id: 3,
                src: "./silkBagImg/img/t3.jpg",
                name: "三亚",
            }, {
                id: 4,
                src: "./silkBagImg/img/t4.jpg",
                name: "夏河",
            }, {
                id: 5,
                src: "./silkBagImg/img/t5.jpg",
                name: "新疆天山",
            }, {
                id: 6,
                src: "./silkBagImg/img/t6.jpg",
                name: "巴蜀石窟",
            },
        ],
        allSilkIInfo: [

            [{
                id: 1,
                src: "./silkBagImg/all/n1.jpg",
                city: "大阪",
                country: "日本",
                updateTime: "2021-02-21",
            }, {
                id: 2,
                src: "./silkBagImg/all/n2.jpg",
                city: "波黑",
                country: "波黑",
                updateTime: "2021-02-17",
            }, {
                id: 3,
                src: "./silkBagImg/all/n3.jpg",
                city: "皇后镇",
                country: "新西兰",
                updateTime: "2021-02-12",
            }, {
                id: 4,
                src: "./silkBagImg/all/n4.jpg",
                city: "哥斯达黎加",
                country: "哥斯达黎加",
                updateTime: "2021-02-11",
            }, {
                id: 5,
                src: "./silkBagImg/all/n5.jpg",
                city: "复活节岛",
                country: "智利",
                updateTime: "2021-02-11",
            }, ],
            [{
                id: 6,
                src: "./silkBagImg/all/n6.jpg",
                city: "摩洛哥",
                country: "摩洛哥",
                updateTime: "2021-02-10",
            }, {
                id: 7,
                src: "./silkBagImg/all/n7.jpg",
                city: "约旦",
                country: "约旦",
                updateTime: "2021-02-10",
            }, {
                id: 8,
                src: "./silkBagImg/all/n8.jpg",
                city: "阿拉木图",
                country: "哈萨克斯坦",
                updateTime: "2021-02-10",
            }, {
                id: 9,
                src: "./silkBagImg/all/n9.jpg",
                city: "印度南部",
                country: "印度",
                updateTime: "2021-02-05",
            }, {
                id: 10,
                src: "./silkBagImg/all/n10.jpg",
                city: "新西兰自驾",
                country: "新西兰",
                updateTime: "2021-02-05",
            }, ],
            [{
                id: 11,
                src: "./silkBagImg/all/n11.jpg",
                city: "神户",
                country: "日本",
                updateTime: "2021-02-04",
            }, {
                id: 12,
                src: "./silkBagImg/all/n12.jpg",
                city: "瑞士滑雪",
                country: "瑞士",
                updateTime: "2021-02-04",
            }, {
                id: 13,
                src: "./silkBagImg/all/n13.jpg",
                city: "奥地利滑雪",
                country: "奥地利",
                updateTime: "2021-02-04",
            }, {
                id: 14,
                src: "./silkBagImg/all/n14.jpg",
                city: "关岛",
                country: "关岛",
                updateTime: "2021-02-04",
            }, {
                id: 15,
                src: "./silkBagImg/all/n15.jpg",
                city: "哥伦比亚",
                country: "哥伦比亚",
                updateTime: "2021-02-04",
            }, ],
            [{
                id: 16,
                src: "./silkBagImg/all/n16.jpg",
                city: "克罗地亚",
                country: "克罗地亚",
                updateTime: "2021-02-03",
            }, {
                id: 17,
                src: "./silkBagImg/all/n17.jpg",
                city: "伊朗",
                country: "伊朗",
                updateTime: "2021-02-03",
            }, {
                id: 18,
                src: "./silkBagImg/all/n18.jpg",
                city: "新西兰南岛",
                country: "新西兰",
                updateTime: "2021-02-03",
            }, {
                id: 4,
                src: "./silkBagImg/all/n19.jpg",
                city: "吉尔吉斯斯坦",
                country: "吉尔吉斯斯坦",
                updateTime: "2021-02-21",
            }, {
                id: 5,
                src: "./silkBagImg/all/n20.jpg",
                city: "以色列和巴勒斯坦",
                country: "以色列",
                updateTime: "2021-02-19",
            }, ],
        ],

    }
})