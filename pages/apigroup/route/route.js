// pages/apigroup/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 切换tab
    wx.switchTab({
      url: 'url',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    /**
     * 关闭所有页面，打开到应用内的某个页面
     * 在小程序插件中使用时，只能在当前插件的页面中调用
     * */ 
    wx.reLaunch({
      url: 'url',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    /**
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     * 在小程序插件中使用时，只能在当前插件的页面中调用
     * */ 
    wx.redirectTo({
      url: 'url',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    /**
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
     * 在小程序插件中使用时，只能在当前插件的页面中调用
     * events 页面间通信接口，用于监听被打开页面发送到当前页面的数据。基础库 2.7.3 开始支持
     * */ 
    wx.navigateTo({
      url: 'url',
      events: events,
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。
     * 在小程序插件中使用时，只能在当前插件的页面中调用
     * */ 
    wx.navigateBack({
      delta: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });
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