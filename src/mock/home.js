import Mock from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'JavaScript',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Vue',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: '小程序',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'ES6',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }
                ],
                tableData: [
                    {
                        name: 'SpringBoot',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    },
                    {
                        name: 'Vue',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    },
                    {
                        name: 'JavaScript',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    },
                    {
                        name: 'ES6',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    },
                    {
                        name: '小程序',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    },
                    {
                        name: 'Java',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(1000, 10000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2),
                    }
                ],
                //柱状图
                userData: [
                    {
                        date: "2019-8",
                        new: Mock.Random.integer(10000, 25000),
                        active: Mock.Random.integer(100, 10000)
                    },
                    {
                        date: "2019-9",
                        new: Mock.Random.integer(10000, 25000),
                        active: Mock.Random.integer(100, 10000)
                    },
                    {
                        date: "2019-10",
                        new: Mock.Random.integer(10000, 25000),
                        active: Mock.Random.integer(1000, 10000)
                    },
                    {
                        date: "2019-11",
                        new: Mock.Random.integer(10000, 25000),
                        active: Mock.Random.integer(1000, 10000)
                    },
                    {
                        date: "2019-12",
                        new: Mock.Random.integer(10000, 25000),
                        active: Mock.Random.integer(100, 10000)
                    }
                ],
               
                // 折线图
                orderData: {
                    data: [
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                        {

                            vue: Mock.Random.float(100, 10000, 0, 2),
                            wechat: Mock.Random.float(100, 10000, 0, 2),
                            ES6: Mock.Random.float(100, 10000, 0, 2),
                            Redis: Mock.Random.float(100, 10000, 0, 2),
                            React: Mock.Random.float(100, 10000, 0, 2),
                            Java: Mock.Random.float(100, 10000, 0, 2),

                        },
                    ],


                    date: [
                        "20191001",
                        "20191002",
                        "20191003",
                        "20191004",
                        "20191005",
                        "20191006",
                        "20191007",
                    ]
                },
                //饼图
                reportData: [
                    {
                        name: "高",
                        value: Mock.Random.float(0, 100, 0, 2)
                    },
                    {
                        name: "中",
                        value: Mock.Random.float(0, 100, 0, 2)
                    },
                    {
                        name: "低",
                        value: Mock.Random.float(0, 100, 0, 2)
                    },
                    {
                        name: "极高",
                        value: Mock.Random.float(0, 100, 0, 2)
                    },
                    {
                        name: "一般",
                        value: Mock.Random.float(0, 100, 0, 2)
                    },
                    {
                        name: "不在意",
                        value: Mock.Random.float(0, 100, 0, 2)
                    }
                ]




            }
        }
    }
}