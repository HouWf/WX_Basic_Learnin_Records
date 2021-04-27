// pages/tabbar/media/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgFilePath: '',
    images: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2151136234,3513236673&fm=26&gp=0.jpg',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201306%2F26%2F20130626161523_zw25t.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620524409&t=3bb280f2a5162a95da10696f6a51b28e',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F004%2F531%2F381%2F4339f96900344574a0c8ca272a7b8f27.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620524409&t=24b26034f3951b95a20878ff0e967d52'
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 保存图片
   * pic 只可以为本地路径
   * */
  savePicture: function (pic) {
    var imgFile = '';
    if (pic.length != 0 && pic.trim() != '') {
      imgFile = pic;
    } else if (this.data.imgFilePath.length != 0) {
      imgFile = this.data.imgFilePath;
    }

    if (imgFile.length != '') {
      wx.saveImageToPhotosAlbum({
        filePath: imgFile,
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
    }
  },

  /**
   * 预览图片
   * mediaArray :[{url:'地址', type:'image或者video', poster:'视频封面'}]
   * */
  previewMediaMethod: function (mediaArray, currentNum) {
    wx.previewMedia({
      sources: mediaArray,
      current: currentNum,
      showmenu: true,
      success(res) {

      },
      fail(res) {

      }
    });

    // wx.previewImage({
    //   urls: mediaArray,
    //   current:currentNum,
    //   showmenu: true,
    // })
  },

  /**
   * 获取图片信息
   * image可以是本地或者网络图片地址
   * 网络图片需先配置download域名才能生效
   * */
  getImageInfoMethod: function (image) {
    wx.getImageInfo({
      src: image,
      success(res) {
        console.log('图片信息是：' + JSON.stringify(res));
      },
      fail(err) {
        console.log('图片信息失败：' + JSON.stringify(err));
      }

    });
  },

  /**
   * 压缩图片
   * src 图片的路径，支持本地路径、代码包路径
   * quality 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。
   * */
  compressImg: function (img) {

    wx.compressImage({
      src: img,
      quality: 80,
      success(res) {
        // tempFilePath	string	压缩后图片的临时文件路径 (本地路径)
        this.setData({
          imgFilePath: res.tempFilePath
        });
        this.saveImageToPhotosAlbum(res.tempFilePath);
      },
      fail(err) {

      }
    })
  },

  /**
   * 从设备选择图片
   * maxCount 最大选择数量
   * type 类型 all/video/image/file
   * extesion 扩展名过滤，type = file时生效
   * */
  chooseMessageFileForDevice: function (maxCount, type, extension) {
    var that = this;
    wx.chooseMessageFile({
      count: maxCount,
      type: type,
      extension: extension,
      success(res) {
        if (res.tempFiles.count != 0) {
          // 不可直接使用this，因为当前this是wx对象
          that.setData({
            imgFilePath : res.tempFiles[0].path
          });
        }
      },
      fail(err) {
        console.log('选择图片失败：' + JSON.stringify(err));
      }
    })
  },

  /**
   * 从相机或者相册选择图片
   * sizeType: original、compressed
   * sourceType: album、camera
   * */ 
  chooseImgFromDeviceOrCamera: function(maxCount, sizeType, sourceType){
    var that = this;
    wx.chooseImage({
      count: maxCount,
      sizeType: sizeType,
      sourceType: sourceType,
      success(res){
        console.log('选择的图片是：' + JSON.stringify(res));
        // res.tempFiles,   // 图片详细信息
        // res.tempFilePaths // 图片路径字符串
        that.setData({
          imgFilePath: res.tempFilePaths[0]
        })
      },
      fail(err){

      }
    })
  },

  // mark - action
  previewImage: function (e) {
    console.log(JSON.stringify(e));
    var index = e.target.dataset.index;
    var imgArr = new Array();
    for (let i = 0; i < this.data.images.length; i++) {
      const imgUrl = this.data.images[i];
      var dic = {
        url: imgUrl,
        type: 'image'
      }
      imgArr.push(dic);
    }
    console.log(imgArr);
    this.previewMediaMethod(imgArr, index);
  },

  chooseImg: function(){
    // this.chooseMessageFileForDevice(2, 'image', ['mp4']);
    this.chooseImgFromDeviceOrCamera(1, 'original', 'aubum');
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