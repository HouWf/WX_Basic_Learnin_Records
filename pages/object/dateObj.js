// pages/object/dateObj.js
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
    // 初始化
    var today = new Date();
    var d1 = new Date('October 13, 1975 11:20:00');
    // 年， 月， 日， 时，分，秒
    var d2 = new Date(79, 5, 24);
    var d3 = new Date(79, 5, 24, 11, 33, 0);

    console.log('today' + today);
    console.log('today' + d1);
    console.log('today' + d2);
    console.log('today' + d3);

    // getUTC... 根据世界返回日期
    console.log('当前年：' + today.getFullYear());
    console.log('当前月（0~11）：' + (today.getMonth() + 1));
    console.log('当前日：' + today.getDate());
    console.log('当前时：' + today.getHours());
    console.log('当前分：' + today.getMinutes());
    console.log('当前秒：' + today.getSeconds());
    console.log('当前毫秒：' + today.getMilliseconds());
    console.log('当前一周中的某一天（0~6）：' + today.getDay());

    console.log('1970至今毫秒(时间戳)：' + today.getTime());
    console.log('1970年1月1日午夜到指定日期（字符串）的毫秒数:' + Date.parse("March 21, 2021"));

    // today.setDate(1);
    // today.setMonth(11, 30);
    d2.setHours(11, 30, 0, 0);
    d2.setFullYear(1990, 11, 30);
    console.log('修改之后的时间：' + d2);

    // 时间比较
    if (today > d1) {
      console.log('当前时间大约预制时间');
    } else {
      console.log('当前时间小于预制时间');
    }

    // 返回指定格式的时间日期
    console.log('转换时间格式:' + this.resetDateWithFormat(today, "YYYY年MM月dd日 hh:mm:ss:S") + ' ' + '第' + this.resetDateWithFormat(today, 'q') + '季度');

  },

  resetDateWithFormat: function (date, fmt) {
    Date.prototype.format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };

      if (/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp("(" + k + ")", "i").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }

      return fmt;
    }

    return date.format(fmt);
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