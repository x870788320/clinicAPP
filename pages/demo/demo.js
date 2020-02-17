// pages/demo/demo.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testArr: ['sf','sdf','ssss','aaa'],
    testObj: {
      name:"aa",
      age:2,
      sex: 1
    },
    name: app.myData.name
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.myData.name)
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

    // this.setData({
    //   name: app.myData.name
    // }, () => {

    //   console.log(this.name)
    // })

    console.log(this.data.name)
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

  goIndex(){
    wx.navigateTo({
      url: '../index/index?a=3',
    })
  },
  testClick(e){
    console.log('dddddd')
    console.log(e)
  },

  changeName(){
    console.log(this)
    app.myData.name = "aaaaa"
    this.setData({
      name:"aaaaa"
    }, (a) => {
      console.log(a)
    })
    console.log("ddd")
    console.log(app.myData.name)
    console.log(this.data.name)
  }
})