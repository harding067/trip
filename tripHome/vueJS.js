var vm = new Vue({
    el: "#bigbox",
    data: {
        logoPath: "./homeImg/logo.png",
        searchPath: "./homeImg/search.png",
        swiperImg: [

            {
                id: 1,
                src: "./homeImg/slideImg/s4.png",
            },

            {
                id: 2,
                src: "./homeImg/slideImg/s3.png",
            },

            {
                id: 3,
                src: "./homeImg/slideImg/s2.jpg",
            },

            {
                id: 4,
                src: "./homeImg/slideImg/s1.png",
            },
        ],
        recommendImg: [

            {
                id: 1,
                src: "./homeImg/images/t1.jpg",
                txt: "穿越秘境，出逃呼伦贝尔，在狂风呼啸中记录夏天",
                leftInfo: "in老板",
                rightInfo: "8382人浏览过",
            }, {
                id: 2,
                src: "./homeImg/images/t2.jpg",
                txt: "上海南京杭州无锡武汉直飞三亚海口5-12天往返",
                leftInfo: "上海，杭州，南京",
                rightInfo: "1190元起",
            }, {
                id: 3,
                src: "./homeImg/images/t3.png",
                txt: "金刚&口丁行天下奇观岛，2021.1-2海南环岛自游",
                leftInfo: "口丁口丁",
                rightInfo: "9382人浏览过",
            }, {
                id: 5,
                src: "./homeImg/images/t5.jpg",
                txt: "端午/暑假上海/南昌直飞三亚5/6天往返机票",
                leftInfo: "杭州，上海，南京",
                rightInfo: "2150元起",
            }, {
                id: 6,
                src: "./homeImg/images/t6.jpg",
                txt: "在渔港边，住了一间有态度的小旅社，他们竟有周末",
                leftInfo: "我走我的独木桥",
                rightInfo: "8382人浏览过",
            }, {
                id: 7,
                src: "./homeImg/images/t7.jpg",
                txt: "沿北纬30度前行，寻秘境神龙架，探访恩施大峡谷",
                leftInfo: "rain_chenyu",
                rightInfo: "9382人浏览过",
            }, {
                id: 8,
                src: "./homeImg/images/t8.jpg",
                txt: "大河之路——跟着奥斯卡电影《绿皮书》，玩转大河",
                leftInfo: "活猪子",
                rightInfo: "34526人浏览过",
            },
        ],
        storeImg: [

            {
                id: 1,
                src: "./homeImg/images/s1.jpg",
                txt: "上海南京杭州无锡武汉直飞三亚海口5-12天",
                flag: "新鲜甩尾",
                price: 1190,
            }, {
                id: 2,
                src: "./homeImg/images/s1.jpg",
                txt: "北京直飞海南三亚海口5-12天往返含税",
                flag: "新鲜甩尾",
                price: 2260,
            }, {
                id: 3,
                src: "./homeImg/images/s3.jpg",
                txt: "上海/暑假上海/南京直飞三亚5/6天往返含税",
                flag: "新鲜甩尾",
                price: 2150,
            }, {
                id: 4,
                src: "./homeImg/images/s4.jpg",
                txt: "错峰出行上海直飞海南三亚5-6天往返含税",
                flag: "新鲜甩尾",
                price: 1715,
            }, {
                id: 5,
                src: "./homeImg/images/s1.jpg",
                txt: "上海杭州无锡武汉广州直飞三亚海口5-12天",
                flag: "新鲜甩尾",
                price: 1590,
            }, {
                id: 6,
                src: "./homeImg/images/s1.jpg",
                txt: "上海南京杭州无锡武汉直飞三亚海口5-12天含税",
                flag: "新鲜甩尾",
                price: 2600,
            },

        ],
        linksWeb: [

            {
                id: 1,
                src: "https://www.hertzgroup.cn/",
                name: "Hertz国际租车",
            }, {
                id: 2,
                src: "http://www.dazijia.com/",
                name: "大自驾网",
            }, {
                id: 3,
                src: "https://bbs.qyer.com/thread-3223352-1.html",
                name: "凤凰古城住宿推荐",
            }, {
                id: 4,
                src: "http://tool.qyer.com/qtag",
                name: "信息聚合",
            }, {
                id: 5,
                src: "http://www.wandoujia.com",
                name: "豌豆荚安卓市场",
            }, {
                id: 6,
                src: "http://travel.ifeng.com/",
                name: "凤凰网旅游",
            }, {
                id: 7,
                src: "http://www.zuche.com/",
                name: "神州租车",
            }, {
                id: 8,
                src: "http://www.qianzhengdaiban.com/",
                name: "中国签证资讯网",
            }, {
                id: 9,
                src: "http://www.zglxw.com/",
                name: "北京国旅官网",
            }, {
                id: 10,
                src: "http://www.ly.com/",
                name: "同程旅游",
            }, {
                id: 11,
                src: "http://www.meet99.com/",
                name: "相约九九旅游网",
            }, {
                id: 12,
                src: "http://vacations.ctrip.com/",
                name: "携程旅游网",
            }, {
                id: 13,
                src: "http://www.8264.com/",
                name: "户外资料网",
            }, {
                id: 14,
                src: "http://www.114piaowu.com/",
                name: "火车票",
            }, {
                id: 15,
                src: "http://www.lvye.cn/",
                name: "绿野网",
            }, {
                id: 16,
                src: "http://www.cncn.com/",
                name: "欣欣旅游网",
            }, {
                id: 17,
                src: "http://www.lvmama.com",
                name: "驴妈妈旅游网",
            }, {
                id: 18,
                src: "http://www.yododo.cn/",
                name: "多多驿站",
            }, {
                id: 19,
                src: "http://trip.elong.com/",
                name: "艺龙旅游指南",
            },
        ]
    },
    methods: {
        backTop() {
            var timer = setInterval(function() {
                document.body.scrollTop -= 100;
                document.documentElement.scrollTop -= 100;
                // 滚动至顶部，清除定时器
                let flag = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
                if (flag) {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    //此时滚动条处于页面的顶部
                    if (scrollTop == 0) {
                        clearInterval(timer);
                    }
                }

            }, 40);
        }
    }
})
