// pages/object/NumberObj.js
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
    var num = new Number(5.5678);

    // 最大
    var max = Number.MAX_VALUE;
    // 最小
    var min = Number.MIN_VALUE;
    // 无穷负大
    var ne_ifnty = Number.NEGATIVE_INFINITY;
    // 无穷正大
    var po_ifnty = Number.POSITIVE_INFINITY;
    // 非number
    var nan = Number.NaN;
    // 表示1和比最接近1且大于1的最小Number之间的差别
    var x = Number.EPSILON;
    // 最小最安全的integer数
    var min_int = Number.MIN_SAFE_INTEGER;
    // 最大最安全的integer数
    var max_int = Number.MAX_SAFE_INTEGER;

    // 是否是无穷大
    // 如果 number 是 NaN（非数字），或者是正Infinity、负无穷大的数-Infinity，则返回 false。
    var ifFin = Number.isFinite(num);

    // 把对象值改为指数计数法num.toExponential(小数点后取的位数0~20)
    var en = num.toExponential();
    
    // 把数字转换成字符串，指定小数点后位数（四色五入）
    var nStr = num.toFixed(3);
    console.log(nStr);

    // 把数字格式化为指定的长度
    var nnStr = num.toPrecision(3);
    console.log(nnStr);

    // 把数字转换成字符串 num.toString(radix) radix进制，默认10，可选2、8、16等2~36之间的整数
    var str = num.toString();
    console.log(str);

    // 是否是整数
    var ifInt = Number.isInteger(num);
    // 是否是安全整数
    var ifSfInt = Number.isSafeInteger(num);

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