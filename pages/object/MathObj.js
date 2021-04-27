// pages/object/MathObj.js
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
    /*********  对象属性  ********/ 
    // 算数常亮自然对数的底数，e≈2.718
    var E = Math.E;
    // 2的自然对数，约等于0.693
    var l2 = Math.LN2;
    // 返回10的自然对数，约等于2.302
    var l10 = Math.LN10;
    // 返回以2为第的e的对数，约等于 1.4426950408889634
    var log2e = Math.LOG2E;
    // 返回以10为第的e的对数，约等于 0.434
    var log10e = Math.LOG10E;
    // π
    var pi = Math.PI;
    // 返回2的平方根的倒数，约等于 0.707
    var sqtr1_2 = Math.SQRT1_2;
    // 返回 2 的平方根，约等于 1.414
    var sqtr2 = Math.SQRT2;

    /*********  对象方法  ********/ 
    // 返回绝对值
    var ab = Math.abs(-1);
    // 反余弦值
    var fcos = Math.acos(0.5);
    // 反正弦值
    var fsin = Math.asin(0.5);
    // 反正切值
    var ftan = Math.atan(2);
    // 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间
    var ftan2 = Math.atan2(8,4);
    // 平方根
    var sq = Math.sqrt(4);
    
    // 上舍入 
    var cei = Math.ceil(1.4);  // 2
    // 下舍入
    var floo = Math.floor(1.4); // 1
    // 四舍五入
    var ron = Math.round(1.4);
    // 最大值
    var max = Math.max(1, 2, 3); // 3
    // 最小值
    var min = Math.min(1, 2, 3);
    // 0~1之间的随机数
    var ran = Math.random();
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