// pages/tabbar/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabitems: [{
        title: '地图',
        des: '地图API',
        id: '001',
        pagePath: './map/mapApi',
      },
      {
        title: '图片',
        des: '图片相关API',
        id: '002',
        pagePath: './picture/picture',
      },
      {
        title: '视频',
        des: '视频相关API',
        id: '003',
        pagePath: './vide/videoapi',
      },
      {
        title: '音频',
        des: '音频相关API',
        id: '004',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '背景音频',
        des: '背景音频相关API',
        id: '005',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '实时音视频',
        des: '实时音视频相关API',
        id: '006',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '录音',
        des: '录音相关API',
        id: '007',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '相机',
        des: '相机相关API',
        id: '008',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '富文本',
        des: '富文本相关API',
        id: '009',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '音频合成',
        des: '音频合成相关API',
        id: '010',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '实时语音',
        des: '实时语音相关API',
        id: '011',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '画面录制器',
        des: '画面录制器相关API',
        id: '012',
        pagePath: '../tabbar/share/share',
      },
      {
        title: '视频解码器',
        des: '视频解码器相关API',
        id: '013',
        pagePath: '../tabbar/share/share',
      }
    ]
  },

  didSelectedIndex(item) {
    // console.log('selectedItem' + JSON.stringify(item));
    var pagePath = item.currentTarget.dataset.item.pagePath;
    if (pagePath) {
      wx.navigateTo({
        url: pagePath,
      });
    }
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