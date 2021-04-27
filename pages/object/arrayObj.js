// pages/object/arrayObj.js
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
    var arra1 = ['123', '456', '789', '888'];
    var arra2 = ['111', '222', '333'];
    var arra3 = ['444', '555', '666'];
    var arra4 = [32, 33, 16, 40];
    var arra5 = ['hwf', '1990', '11', '30', '30'];
    var arra6 = [2, 4, 6, 8];
    var arra7 = [1, 2, 3, 4, 5];
    var arra8 = ["Banana", "Orange", "Apple", "Mango"];

    // var newArr1 = arra1.valueOf();
    var newArr1 = arra1.slice(0, arra1.length);
    newArr1.push("123");
    console.log('拷贝一个数组并进行操作：newArr:\n' + newArr1);
    console.log('原始数组： arra1：\n' + arra1);

    // 拼接多个数组
    var ctArr = arra3.concat(arra1, arra2);
    console.log('concat 拼接数组: \n' + ctArr);

    // 从数组的指定位置拷贝到数组的另一个指定位置
    // array.copyWithin(target, start, end), target:复制到指定目标索引位置
    var cpArr = arra1.copyWithin(2, 0);
    console.log('copyWithin 指定位置拷贝数组: \n' + cpArr);

    // 检测所有数组元素是否满足条件
    // function checkAdult(age){
    //   return age > 18;
    // }
    var checkReult = arra4.every(this.checkAdult);
    console.log('every 所有元素检测是否满足条件: \n' + checkReult);

    // 输出满足条件元素
    var fiterArr = arra4.filter(this.checkAdult);
    console.log('filter 输出满足条件的元素数组：\n' + fiterArr);

    // 获取满足条件的第一个元素值
    var per = arra4.find(this.checkAdult);
    console.log('find 满足条件的第一个值(同some)：\n' + per);

    // 获取满足条件的第一个数组位置
    var perIndex = arra4.findIndex(this.checkAdult);
    console.log('findIndex 满足条件的第一个值的位置:\n' + perIndex);

    // 检测是否有满足指定条件的元素，检测到满足条件时不再遍历。
    // var ifSome = arra4.some(this.checkAdult);

    // 列出所有数组元素
    console.log('forEach 列出所有数组：\n');
    var ech = arra4.forEach((item, index) => {
      console.log(index + ':' + item);
    });

    // 使用固定值填充数组
    arra4.fill('111');
    console.log('fill 填充数组: \n' + arra4);

    // 判断数组是否包含某个元素
    console.log('includes 判断数组是否包含某个元素：\n' + arra5.includes('hwf'));

    // 检测某个元素的位置
    var name = 'hwf';
    if (arra5.includes(name)) {
      console.log('indexOf 输出数组某个元素位置:\n' + arra5.indexOf(name));
    }

    // 判断是否是数组
    console.log('isArray 判断是否是数组:\n' + Array.isArray(arra5));

    // 输出元素最后一次出现的位置
    console.log('lastIndex 元素最后一次出现的位置:\n' + arra5.lastIndexOf('30'));

    // 数组拼接成字符串
    var arrStr = arra5.join('-');
    console.log('join 数组转字符串，拼接所有数组元素:\n' + arrStr);

    // 通过指定方法处理元素并返回新的数组
    var halfArr = arra6.map(this.halfOfTheElements);
    console.log('map 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值：\n' + halfArr);

    // 删除数组最后一个元素
    console.log('pop 删除最后一个元素 并返回删除的元素：\n' + arra6.pop());

    // 删除数组的第一个元素
    console.log('shift 删除第一个元素，并返回删除的元素:\n' + arra6.shift());

    // 结尾拼接元素
    console.log('push 结尾拼接元素 返回新的数组长度：\n' + arra6.push('结尾拼接'));

    // 开头拼接元素
    console.log('unshift 开头拼接元素 返回新数组长度：\n' + arra6.unshift('开头拼接'));

    // 翻转元素顺序
    console.log('reverse 反转元素顺序：\n' + arra6.reverse());

    // 选取一部分并形成新数组
    console.log('slice 选取一部分 并生成新数组：\n' + arra7.slice(1, 4));

    // 对数组元素进行排序
    var sortArr = arra7.sort(function(a, b){
      return  b - a;
    })
    console.log('sort 数组元素排序:\n' + sortArr);
    console.log('sort 数组元素排序2:\n' + arra8.sort());

    // 数组指定位置添加元素
    // array.splice(位置，位置之后删除多少元素，添加的元素1，添加的元素2)
    var ddd = ['11', '22', '33']
    console.log('splice 指定位置删除并添加元素：\n' + arra8.splice(1, 1, 'hwf', '1990'));
    console.log('splice 之后的数组是：\n' + arra8);

    // 转换成字符串,自动,拼接
    var arStr = arra8.toString();
    console.log('toString 转换成字符串：\n' + arStr);


  },

  checkAdult: function(age){
    return age >= 18;
  },

  halfOfTheElements: function(el){
    return el/2;
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