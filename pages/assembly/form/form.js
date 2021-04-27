// pages/form/form.js

const date = new Date()
const years = []
const months = []
const days = []
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let index = 1; index <= 12; index++) {
  months.push(index);
}

for (let index = 1; index <= 31; index++) {
  days.push(index);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        value: 'BRA',
        name: '巴西'
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      }
    ],

    inputValue: "",

    // picker
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [{
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ],
      [{
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ],
      [{
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
    index: 0,
    multiIndex: [0, 0, 0],
    currentTime: "15:48",
    currentDate: Date(),
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',

    // picker-view
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    isDaytime: true,
    pickerViewValue:[9999, 1, 1],
    dayUrl: null,
    noDayUrl: null,
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0; j < values.lengthJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  },

  formSubmit: function (e) {
    console.log('表单提交' + JSON.stringify(e));
  },

  formReset: function (e) {
    console.log('表单重置' + JSON.stringify(e));
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindReplaceInput: function (e) {
    console.log('当然输入内容是：' + JSON.stringify(e));
    var value = e.detail.value;
    var pos = e.detail.cursor;
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos);
      // 计算光标位置
      pos = left.replace(/11/g, '2').length;
    }
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },

  bindHideKeyboard: function (e) {
    // var value = e.detail.value;
    // if (value.indexOf('123')) {
    //   wx.hideKeyboard({
    //     success: (res) => {},
    //   })
    // }
    if (e.detail.value == '123') {
      wx.hideKeyboard({
        success: (res) => {},
      })
    }
  },

  bindPickerChange: function (e) {
    console.log('picker date' + JSON.stringify(e));
    this.setData({
      index: e.detail.value
    })
  },

  bindMultiPickerChange: function (e) {
    var value = e.detail.value;
    this.setData({
      multiIndex: value
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = ['蛔虫'];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        break;
    }
    console.log(data.multiIndex);
    this.setData(data);
  },

  bindTimeChange: function (e) {
    this.setData({
      currentTime: e.detail.value
    })
  },

  bindDateChange: function (e) {
    this.setData({
      currentDate: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('省市区选择器' + JSON.stringify(e));
    this.setData({
      region: e.detail.value
    })
  },

  pickerViewChange: function(e){
    console.log('picker view change' + e.detail.value);
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month:this.data.months[val[1]],
      day: this.data.days[val[2]],
      isDaytime: !val[3]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myDate = new Date();
    // 可以获取当前日期
    var curDate = myDate.toLocaleDateString();
    // 可以获取当前时间
    myDate.toLocaleTimeString();
    // 时间字符串转时间
    var date = new Date(curDate);

    this.setData({
      dayUrl: "https://developers.weixin.qq.com/xcode/program/mp_picker_view/lib/daytime.png",
      noDayUrl: "https://developers.weixin.qq.com/xcode/program/mp_picker_view/lib/night.png",
      currentDate: curDate
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