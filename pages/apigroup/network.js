// pages/apigroup/api.js
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
    // 数据请求
    // this.requestSthMethod();

    // 下载
    // this.requestSthMethod();

    // 上传
    // this.uploadSthMethod();
    
  },

  /**
    * 发起请求
    * data 请求的参数
    * header 设置请求的 header，header 中不能设置 Referer。
            content-type 默认为 application/json
    * timeout 超时时间
    * method 请求方式GET，POST……
    * dateType 返回的数据格式 默认json
    * responseType 响应的数据类型 默认text
    * enableHttp2 是否开启 http2
    * enableQuic  是否开启quic
    * enableCache 是否开启cache
    * success 成功返回
    * fail 失败返回
    * complete 接口调用结束
  * */
  requestSthMethod: function () {
    const req = wx.request({
      url: 'url',
      method: 'PSOT',
      data: {
        'username': 'hwf',
        'pwd': '123456'
      },
      header: {
        'content-type': 'application/json'
      },
      timeout: 300000,
      dateType: 'json',
      responseType: 'text',
      success(e) {

      },
      fail(error) {

      },
      complete(comp) {

      }
    });
    // 取消请求
    req.abort();
  },

  /**
   * 下载
   * url 地址
   * header 请求头
   * timeout 超时时间
   * filePath 下载完成后存储的路径地址
   * success 请求成功
   * fail 请求失败
   * complete 请求完成
   * */
  downloadSthMethod() {
    var dow = wx.downloadFile({
      url: 'url',
      timeout: 30000,
      filePath: '……',
      success(res) {

      },
      fail(err) {

      },
      complete(comp) {

      }
    });
    // 取消
    // dow.abort();
  },

  /**
   * 上传
   * 基本参数与下载相同，增加其他可选参数如下
   * name 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
   * formData HTTP 请求中其他额外的 form data
   * */
  uploadSthMethod() {
    var up = wx.downloadFile({
      url: 'url',
      timeout: 30000,
      filePath: '……',
      name: 'file',
      formData: {
        'user': 'test'
      },
      success(res) {

      },
      fail(err) {

      },
      complete(comp) {

      }
    });
    // 取消
    // up.abort();
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