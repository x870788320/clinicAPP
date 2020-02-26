//app.js
App({
  globalData: {
    userInfo: null,
    itemList: [
      {
        id: 1,
        name: "美女", 
        pic: "index/modify.png",
        fun: "handleHomeListGo",
        selfCss:"itemListClass"
      },
      {
        id: 2,
        name: "帅哥",
        pic: "index/mineSe.png",
        fun: "handleHomeListGo",
        selfCss: "itemListClass"
      },
      {
        id: 3,
        name: "他大爷",
        pic: "index/child.png",
        fun: "handleHomeListGo",
        selfCss: "itemListClass"
      },
      {
        id: 4,
        name: "他二大爷",
        pic: "index/badtooth.png",
        fun: "handleHomeListGo",
        selfCss: "itemListClass"
      },
    ],
    aboutUs:{
      "名称":"吉祥如意",
      "电话":15912345678,
      "邮箱":"15912345678@163.com",
      "地址":"研发中心 A3f4-6-81"
    }
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})