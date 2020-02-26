// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctors:[
      {
        id:1,
        name: "张三三",
        pic: "mine/nolog.png",
        fun:"handleDocBooking",
        selfCss:"bookDoctorCss",
        pieces:{
          msg:"神一般的存在！！",
          info:"中央司命者，或曰制命丈人，主生年之本命，摄寿天之简札，太一变魂而符列，司命混合太一，以行籍而由之，故称丈人焉。"
        },

      },
      {
        id: 2,
        name: "李四四",
        pic: "mine/nolog.png",
        fun: "handleDocBooking",
        selfCss: "bookDoctorCss",
        pieces: {
          msg: "神一般的存在！！",
          info: "司掌命运之神，掌控他人命运！"
        },
      },
      {
        id: 3,
        name: "王五五",
        pic: "mine/nolog.png",
        fun: "handleDocBooking",
        selfCss: "bookDoctorCss",
        pieces: {
          msg: "神一般的存在！！",
          info: "中央司命者，或曰制命丈人，主生年之本命，摄寿天之简札，太一变魂而符列，司命混合太一，以行籍而由之，故称丈人焉。"
        },
      },
      {
        id: 4,
        name: "赵六六",
        pic: "mine/nolog.png",
        fun: "handleDocBooking",
        selfCss: "bookDoctorCss",
        pieces: {
          msg: "神一般的存在！！",
          info: "司掌命运之神，掌控他人命运！"
        },
      },
      {
        id: 5,
        name: "孙七七",
        pic: "mine/nolog.png",
        fun: "handleDocBooking",
        selfCss: "bookDoctorCss",
        pieces: {
          msg: "神一般的存在！！",
          info: "司掌命运之神，掌控他人命运！"
        },
      },
      {
        id: 6,
        name: "周八八",
        pic: "mine/nolog.png",
        fun: "handleDocBooking",
        selfCss: "bookDoctorCss",
        pieces: {
          msg: "神一般的存在！！",
          info: "中央司命者，或曰制命丈人，主生年之本命，摄寿天之简札，太一变魂而符列，司命混合太一，以行籍而由之，故称丈人焉。！"
        },
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "预约"
    })

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

  }
})