// pages/apigroup/base/apibase.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 判断是否可用
    // this.canIUseMethod();

    // timeout
    // var timeout = setTimeout(() => {
    //   this.base64toArrayBufferMethod();
    // }, 2000);
    // clearTimeout(timeout);
    // setTimeout(this.arrayBufferToBase64Method, 2000);

    // var inter = setInterval(() => {
    // }, 2000);
    // clearInterval(inter)




    // 获取系统信息
    // this.getSystemInfoMethod();

    // 更新微信客户端
    this.updateWeChatAppMethod();
  },
  /**
   * wx.canIUse('schema')
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * 使用 ${API}.${method}.${param}.${option} 
   * 或者 ${component}.${attribute}.${option} 方式来调用,component组件，attribute属性
   * 返回Boolen值
   * */
  canIUseMethod() {
    // 对象的属性或者方法
    wx.canIUse('console.log');
    wx.canIUse('CameraContext.onCameraFrame');
    wx.canIUse('CameraFrameListener.start');
    wx.canIUse('Image.src');

    // wx接口参数、回调或者返回值
    wx.canIUse('openBluetoothAdapter');
    wx.canIUse('getSystemInfoSync.return.safeArea.left');
    wx.canIUse('getSystemInfo.success.screenWidth');
    wx.canIUse('showToast.object.image');
    wx.canIUse('onCompassChange.callback.direction');
    wx.canIUse('request.object.method.GET');

    // 组件的属性
    wx.canIUse('live-player');
    wx.canIUse('text.selectable');
    wx.canIUse('button.open-type.contact');
  },

  /**
   * 将base64字符串转化成ArrayBuffer对象
   * */
  base64toArrayBufferMethod: function () {
    const base64 = 'CxYh'
    const arrayBuffer = wx.base64ToArrayBuffer(base64)
    console.log('转化后的bufferArray是' + arrayBuffer);
  },

  arrayBufferToBase64Method: function () {
    const arrayBuffer = new Uint8Array([11, 22, 33]);
    const base64 = wx.arrayBufferToBase64(arrayBuffer);
    console.log('转化后的base64是' + JSON.stringify(base64));
  },

  /**
   * 获取系统信息
   * */
  getSystemInfoMethod() {
    /***** 同步获取  *****/
    // 方式一
    // wx.getSystemInfo({
    //   success: (result) => {
    //     console.log('系统信息是' + JSON.stringify(result))
    //   },
    // })

    // 方式二
    try {
      const res = wx.getSystemInfoSync();
      console.log(res.model)
      return res;
    } catch (error) {
      console.log('获取信息失败');
    }

    /***** 异步获取  *****/
    // if (wx.canIUse('getSystemInfoAsync')) {
    //   console.log('当前版本支持异步');
    //   wx.getSystemInfoAsync({
    //     success(res){
    //       console.log('异步获取的系统信息' + res);
    //     },
    //   })
    // }
    // else{
    //   console.log('当前版本不支持异步');
    // }
  },

  /**
   * 更新
   * */
  updateWeChatAppMethod() {
    const systemInfo = this.getSystemInfoMethod();
    console.log('当前微信版本：' + systemInfo.version);
    const version = systemInfo.version;
    // 更新微信app
    if (wx.updateWeChatApp && version.indexOf('2.12.0')) {
      console.log('跳转微信APP更新');
      // wx.updateWeChatApp({
      //   success(res){
      //   }
      // })
    }

    // 更新小程序
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(
      function (res) {
        // 请求完整版本信息回调
        console.log(res.hasUpdate);
      }
    );

    updateManager.onUpdateReady(() => {
      wx.showModal({
        cancelColor: 'red',
        title: '更新提示',
        content: '新版本已准备好，是否启动应用？',
        success(res) {
          if (res.confirm) {
            // 新版本已下载好，调用方法重启
            updateManager.applyUpdate();
          }
        }
      })
    })


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