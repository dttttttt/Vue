import Mock from 'mockjs';

Mock.mock('/login', (options) => {
    console.log(options.body)
    return options.body
  })
  Mock.mock('/post', (options) => {
    console.log(options.body)
    return options.body
  })


  Mock.mock('/search1',{
    'img':  "https://cube.elemecdn.com/4/70/cb4d3121b4e2a394d9d70c534995ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed",

     'content':"测试搜索功能"
  
  })
  Mock.mock('/search',{
  'img':'',
     'content':""
  
  })

  Mock.mock('/storename',{
    "array|1":[
        "生鲜传奇（七彩路店）",
        "广电冷面（24h金地店）",
        "徐州馅饼",
        "潘师傅红烧肉（兴园店）",
        "重庆麻辣烫",
        "御上煲仔饭",
        "小凡锅贴"

]
        
})

Mock.mock('/sale',{
  "sale|1":[
      "375",
      "246",
      "465",
      "321",
      "234",
      "564"

]
})
Mock.mock('/price',{
  "price|1":[
      "15",
      "22",
      "25",
      "18",
      "20",
      "10"

]
})
Mock.mock('/saleprice',{
  "saleprice|1":[
      "2",
      "3",
      "4",
      "5",
      "6",
      "7"

]
})
Mock.mock('/time',{
  "time|1":[
      "35",
      "22",
      "25",
      "48",
      "50",
      "39"

]
})
Mock.mock('/img',{
  "img|1":[
      "https://fuss10.elemecdn.com/e/21/2e704bd6391f7902fe95cc0455517jpeg.jpeg?imageMogr/format/webp/thumbnail/!280x280r/gravity/Center/crop/280x280/",
      "https://cube.elemecdn.com/7/0c/5ef52063d8c6e15b516648885f45ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed",
      "https://cube.elemecdn.com/4/3e/1ac1c501ee1ff73eed60cf8c8761ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed",
      "https://cube.elemecdn.com/4/70/cb4d3121b4e2a394d9d70c534995ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed",
      "https://cube.elemecdn.com/c/a3/d52387b288c03860efe75cebd694ejpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed",
      "https://cube.elemecdn.com/4/29/4d668175141788120e76bc3476cf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_218,h_218,m_fixed"

]
})