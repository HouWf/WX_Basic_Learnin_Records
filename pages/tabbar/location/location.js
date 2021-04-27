// pages/tabbar/location/location.js

const util = require('../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "name":"鼓楼区北京西路(江苏省人民政府内)",
    "address":"江苏省南京市鼓楼区北京西路",
    "latitude":'32.06071',
    "longitude":'118.76295'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取授权
    util.checkAndAuthorize('scope.userLocation')
    // util.checkAndAuthorize('scope.userLocationBackground');

    // wx,wx.getLocation({
    //   altitude: this.data.latitude,
    //   highAccuracyExpireTime: 0,
    //   isHighAccuracy: true,
    //   type: 'type',
    //   success: (result) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    // 开启小程序进入前台时接收位置消息
    wx.startLocationUpdate({
      success: (res) => {
        console.log('开启定位成功' + res);
      },
      fail: (res) => {
        console.log('开启定位失败' + JSON.stringify(res));
      },
      complete: (res) => {},
    });

    // 关闭监听实时位置变化，前后台都停止消息接收
    // wx.stopLocationUpdate({
    //   success: (res) => {},
    // });

    // 开启小程序进入前后台时均接收位置消息，需引导用户开启授权。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
    wx.startLocationUpdateBackground({
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    // 使用微信内置地图查看位置
    // wx.openLocation({
    //   latitude: this.data.latitude,
    //   longitude: this.data.longitude,
    // });

    // 实时地理位置变化事件的回调函数
    wx.onLocationChange((result) => {
      console.log('onLocationChange:' + JSON.stringify(result));
      // 关闭实时获取
      wx.offLocationChange((result) => {
        console.log('offLocationChange:' + JSON.stringify(result));
      })
    });

    /**
     * 获取当前的地理位置、速度
     * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
     * */ 
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      }
     })

  },

  choosePoiAction: function(result) {
    wx.chooseLocation({
      latitude: 0,
      success(res){
        console.log('poi info' + JSON.stringify(res));
      },
      fail(err){
        console.log('poi error' + JSON.stringify(err));
      },
      complete(com){
        console.log('poi com' + JSON.stringify(com));
      }
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