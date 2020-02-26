//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: {
      indicatorDots: true,
      autoplay: true,
      currentIndex: 3
    },
    srcSwiper: "../../static/images/index/",
    imgArr: [
      "adog.png", 
      "angry.jpg", 
      "cats.jpg", 
      "dog.jpg", 
      "meatball.jpg", 
      "small.jpeg",
      "three.jpg"
    ],
    titleArr: ["项目", "关于"],
    itemList: app.globalData.itemList,
    aboutUs: app.globalData.aboutUs,
    showFirstArr: [
      {
        id: 1,
        name: "春分",
        pic: "index/spring.jpeg",
        fun: "handleContentGo",
        selfCss:"firstItemClass"
      },
      {
        id: 2,
        name: "夏至",
        pic: "index/summer.gif",
        fun: "handleContentGo",
        selfCss: "firstItemClass"
      },
      {
        id: 3,
        name: "寒露",
        pic: "index/autumu.gif",
        fun: "handleContentGo",
        selfCss: "firstItemClass"
      },
      {
        id: 4,
        name: "大雪",
        pic: "index/winter.jpg",
        fun: "handleContentGo",
        selfCss: "firstItemClass"
      },
    ],

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "首页"
    })
    // this.setData({
    //   itemList: app.globalData.itemList
    // })
  },

  onShow: function () {
  },
  swiperChange(e){
    this.setData({
      "swiperData.currentIndex": e.detail.current
    })
  },
  imgClick(){
    console.log(this.data.swiperData.currentIndex)
  },

  handleContentGo(e){
    console.log(e)
  }
})
