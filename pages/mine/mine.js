
// import { publicGoto } from "../common/widget/widget.js"
import widget from "../common/widget/widget.js"
const { publicGoto } = widget

const app = getApp()
// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:"",
    test:"test",
    motto: 'someting',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgSrc:"../../static/images/mine/",
    mineArr:[
      {
        id:1,
        pic:"mine/money.png",
        name: "我的钱包",
        fun: "handleMineGo",
        selfCss: "mineListStyle"
      },
      {
        id: 2,
        pic: "mine/coupon.png",
        name: "我的卡券",
        fun: "handleMineGo",
        selfCss: "mineListStyle"
      },
      {
        id: 3,
        pic: "mine/haveBooked.png",
        name: "当前预约",
        fun: "handleMineGo",
        selfCss: "mineListStyle"
      },
      {
        id: 4,
        pic: "mine/history.png",
        name: "我的订单",
        fun: "handleMineGo",
        selfCss: "mineListStyle"
      },
      {
        id: 5,
        pic: "mine/itemclass.png",
        name: "其  它 ",
        fun: "handleMineGo",
        selfCss: "mineListStyle"
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: "我的"
    // })
    // wx.navigationBarTextStyle({
    //   title: "我的"
    // })
    // publicGoto()
    console.log(publicGoto)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //事件处理函数
  bindViewTap: function (df) {
    console.log(this)
    console.log(app)
    console.log(df)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleMineGo(e) { 
    console.log(e)
  }
})