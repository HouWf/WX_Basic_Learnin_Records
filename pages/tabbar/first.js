// pages/tabbar/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabitems:[{
      title:'数据缓存',
      des:'各种数据缓存API',
      id:'001',
      pagePath: '../tabbar/storage/storage',
    },
    {
      title:'媒体',
      des:'媒体相关API',
      id:'002',
      pagePath:'../tabbar/media/media',
    },
    {
      title:'位置',
      des:'位置相关API',
      id:'003',
      pagePath:'../tabbar/location/location',
    },
    {
      title:'转发',
      des:'转发相关API',
      id:'004',
      pagePath:'../tabbar/share/share',
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
    // 显示tabbar小红点
    wx.showTabBarRedDot({
      index: 0,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    // wx.hideTabBarRedDot({
    //   index: 0,
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    // 显示tabbar
    wx.showTabBar({
      animation: true,
    });
    // wx.hideTabBar({
    //   animation: true,
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // });

    // wx.setTabBarStyle({
    //   backgroundColor: 'backgroundColor',
    //   // 仅支持 black/white
    //   borderStyle: 'borderStyle',
    //   color: 'color',
    //   selectedColor: 'selectedColor',
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    // wx.setTabBarItem({
    //   index: 0,
    //   iconPath: 'iconPath',
    //   selectedIconPath: 'selectedIconPath',
    //   text: 'text',
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    // 设置tabbar文字
    wx.setTabBarBadge({
      index: 1,
      text: '123',
    });

    // wx.removeTabBarBadge({
    //   index: 1,
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })


    // 获取菜单位置信息
    var rect = wx.getMenuButtonBoundingClientRect();
    console.log('当前菜单按钮信息是' + JSON.stringify(rect));

    // 键盘监听
    wx.onKeyboardHeightChange(res => {
      console.log('键盘高度改变 on ' + JSON.stringify(res));
    });

    wx.offKeyboardHeightChange(res => {
      console.log('键盘高度改变 off ' + JSON.stringify(res));
    });

    // 在input、textarea等focus之后，获取输入框的光标位置
    wx.getSelectedTextRange({
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    // 主动调用
    // 主动隐藏键盘
    wx.hideKeyboard({
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });


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