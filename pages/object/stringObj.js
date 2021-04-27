// pages/object/stringObj.js
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

    var str = new String('123');
    
    // 长度
    var le = str.length;

    // 返回指定位置的字符
    var charS = str.charAt(2);

    // 返回指定位置的unicode编码
    var charC = str.charCodeAt(2);

    // 拼接多个字符串，与+相同
    var nStr = str.concat('hello', 'hwf');

    // 将Unicode编码转换为字符串
    // var n = String.fromCharCode(72,69,76,76,79); // HELLO
    var n = String.fromCharCode(charC);

    // 从前向后查找字符串位置
    var index = str.indexOf('1');

    // 从后向前查找字符串位置
    var backIndex = str.lastIndexOf('1');

    // 是否包含某个字符串
    var ifC = str.includes('hello');

    // 匹配查找
    var matStr = "The rain AIN in SPAIN stays mainly in the plain";
    var mat = matStr.match(/ain/gi);
    console.log(mat);

    // 复制字符串
    var newStr = str.repeat(2);

    // 替换
    var rStr = str.replace('2', '5');
    // console.log(rStr);

    // 提取指定位置字符串，与array类似
    // str.slice(start, end);
    var sStr = str.slice(1, 1);

    // 把字符串分割成数组
    var string = "How are you doing today?你今天还好吗"
    var stArr = string.split(" ");
    var arrStr = stArr.join('-');
    console.log("字符串拆分的数组是：" + stArr);
    console.log("数组重新组合的字符串是：" + arrStr);

    // 判断是否以指定字符串开头（区分大小写）
    // string.startsWith(searchvalue, start)
    var start = string.startsWith("how");

    // 提取指定位置字符串
    // str.slice(start, end);
    // str.slice(start, length);
    // str.substring(from, to);
    var nSStr = str.substr(0, 3);
    var nssstr = str.substring(1, 3);

    // 转换成小写 toLocaleLowerCase()
    var lowStr = string.toLowerCase();
    // 转换成大写 toLocaleUpperCase()
    var upStr = string.toUpperCase();

    // 去除字符串两边的空白
    var spStr = " hello word  ";
    var trStr = spStr.trim();

    // 

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