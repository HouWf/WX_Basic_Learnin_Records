// pages/assembly/assembly.js

var scrollOrder = ['red', 'yellow', 'blue', 'green']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // scroll
    scrollTop: 0,
    toView: 'red',

    // swipper
    indicatorDots: true,
    autoplay: true,
    interval:3000,
    duration: 300,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],

    // moveable
    disable: false,
    x:0,
    y:0,

  },

  navigateToBaseAss: function(e){
    wx.navigateTo({
      url: '../assembly/baseAss/baseAss',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  fatherClickMe : function (e){
    console.log('父视图相应了' + JSON.stringify(e));
  },

  clickMe : function (e){
    console.log('bindtap响应了' + JSON.stringify(e));
  },

  catchMe : function (e){
    console.log('catchtap响应了' + JSON.stringify(e));
    console.log('相应数据是' + e.target.dataset.name);
  },

  captureTap : function (e){
    console.log('capture');
  },

  // scroll-view
  scroll : function(e){
    console.log("进行滚动了" + JSON.stringify(e));
  },

  upper : function (e){
    console.log("滚动到顶部了");
  },

  lower : function (e){
    console.log("滚动更到底部了");
  },

  scrollButtonToTap : function(e){
    for (let index = 0; index < scrollOrder.length; index++) {
      const element = scrollOrder[index];
      if (element === this.data.toView) {
        var nextIndex = index + 1;
        if (nextIndex >= scrollOrder.length) {
          nextIndex = 0
        }
        this.setData({
          toView: scrollOrder[nextIndex]
        })
        break;
      }
    }
  },
  
  scrollButtonToMove : function(e){
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  },

  // swipper
  swipperChange : function (e) {
    console.log('swipper change' + JSON.stringify(e));
  },

  swipperAnimationfinish : function (e){
    console.log('swipper animation finish');
  },
  
// movable-view
  movableTapChangePosition : function(e){
    this.setData({
      x:10,
      y:30
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('其他页面传进来的参数：' + options.title);
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
    this.setData({
      autoplay:true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      autoplay:false
    })
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