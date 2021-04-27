// pages/media/media.js
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  inputValue: '',
  data: {
    audioUrl:'http://m801.music.126.net/20210401110153/b19c6aadc9158798633c05cdff81e184/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/7374404588/28bd/3d80/8203/cc5376eedd5b7241126523cd59499c83.mp3',
    audioAuthor:'沈以诚',
    audioPoster:'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    audioName:'形容（Gamer）',

    imageArray:[
      {
        mode: 'scaleToFill',
        text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
      }, {
        mode: 'aspectFit',
        text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
      }, {
        mode: 'aspectFill',
        text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      }, {
        mode: 'top',
        text: 'top：不缩放图片，只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom：不缩放图片，只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center：不缩放图片，只显示图片的中间区域'
      }, {
        mode: 'left',
        text: 'left：不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right：不缩放图片，只显示图片的右边边区域'
      }, {
        mode: 'top left',
        text: 'top left：不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right：不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left：不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',

    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],

    cameraSrc:"",
  },

  audioPlay: function(e){
    this.audioCtx.play();
  },

  audioPause: function(e){
    this.audioCtx.pause();
  },

  audio14: function(e){
    this.audioCtx.seek(14);
  },

  audioStart: function(e){
    this.audioCtx.seek(0)
  },

  imageError: function(e){
    console.log('图片加载失败' + JSON.stringify(e));
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    }
  },

  takePhoto: function (e) {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      success:(res) => {
        this.setData({
          cameraSrc: res.tempImagePath
        })
      },
      fail:(error) => {
        console.log('拍照异常' + JSON.stringify(error));
      }

    })
  },
  
  cameraError(e){
    console.log('拍照异常' + JSON.stringify(e));
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
    this.audioCtx = wx.createAudioContext('myAudio');
    this.videoContext = wx.createVideoContext('myVideo')
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