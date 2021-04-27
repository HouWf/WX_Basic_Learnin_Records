// pages/tabbar/media/vide/videoapi.js
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
   * 保存视频到相册
   * 视频文件路径，可以是临时文件路径也可以是永久文件路径 (本地路径)
   * */ 
  saveVideoToPhotos: function(filePath) {
    wx.saveVideoToPhotosAlbum({
      filePath: filePath,
      success(res){
        console.log('保存成功');
      },
      fail(err){
        console.log('保存失败：' + JSON.stringify(err));
      }
    })
  },

  /**
   * 打开视频编辑器
   * 视频源的路径，只支持本地路径
   * */ 
  editVideo: function(videoPath){
    wx.openVideoEditor({
      filePath: videoPath,
      success(res){

      },
      fail(err){

      }
    })
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