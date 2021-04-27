// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items : [
      {name: "商品1", idindex: '001'},
      {name: "商品2", idindex: '002'},
      {name: "商品3", idindex: '003'},
      {name: "商品4", idindex: '004'},
      {name: "商品5", idindex: '005'}
    ],
    codition: 1,
    tempItem: {
      name:"张三",
      phone: '10000000000',
      address: '中国'
    },
    choseTemp: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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