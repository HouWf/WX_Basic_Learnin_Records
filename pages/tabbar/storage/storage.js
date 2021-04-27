// pages/tabbar/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.name = 'HWF';
    console.log(this.data);
    // 同步存储、获取数据
    wx.setStorageSync('username', this.data.name);
    var nm = wx.getStorageSync('username')
    console.log('同步获取的用户数据是：' + nm);

    // wx.setStorage({
    //   data: data,
    //   key: 'key',
    //   complete(com){

    //   }
    // });

    wx.removeStorage({
      key: 'username',
    });
    console.log('remove后获取的用户数据是：' + wx.getStorageSync('username'));

    wx.clearStorage({
      success: (res) => {},
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