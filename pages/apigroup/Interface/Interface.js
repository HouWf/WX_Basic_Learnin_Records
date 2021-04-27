// pages/apigroup/Interface/Interface.js

const tools = require('../../tools/tools.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

    number:0,
    interactive: {
      section_title: '交互',
      actions: [{
          title: 'showToast',
          action: 'showToast'
        },
        {
          title: 'showModal',
          action: 'showModal'
        },
        {
          title: 'showLoading',
          action: 'showLoading'
        },
        {
          title: 'showActionSheet',
          action: 'showActionSheet'
        },
        {
          title: 'enableAlertBeforeUnload',
          action: 'enableAlertBeforeUnload'
        },
        {
          title: 'disableAlertBeforeUnload',
          action: 'disableAlertBeforeUnload'
        },
        {
          title: 'disableAlertBeforeUnload',
          action: 'disableAlertBeforeUnload'
        },
        {
          title: 'disableAlertBeforeUnload',
          action: 'disableAlertBeforeUnload'
        },
        {
          title: 'disableAlertBeforeUnload',
          action: 'disableAlertBeforeUnload'
        },
        {
          title: 'disableAlertBeforeUnload',
          action: 'disableAlertBeforeUnload'
        }
      ]
    }

  },

  showIntrfaceMethod(method) {
    console.log('showIntrfaceMethod ：' + JSON.stringify(method));
    const methodName = method.target.dataset.method;
    console.log('method name :' + methodName);

    if (tools.indexOf(methodName, "showToast")) {
      wx.showToast({
        title: '这个提示内容',
      });
    } else if (methodName.match('showModal')) {
      wx.showModal({
        cancelColor: 'red',
        title: '提示',
        content: '这是一个模态弹窗',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else if (methodName.match('showLoading')) {
      wx.showLoading({
          title: 'loadding',
          mask: true,
          success(res) {
            console.log('loading 成功');
          },
          fail(err) {
            console.log('loading 失败');
          }
        }),
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
    } else if (methodName.match('showActionSheet')) {
      wx.showActionSheet({
        alertText: '这是sheet警示',
        itemList: ['A', 'B', 'C'],
        itemColor: 'red',
        success(res) {

        },
        fail(err) {

        }
      })
    } else {
      console.log(methodName);
    }

  },

  // setData是同步执行，nextTick可以相当于开启子线程，以使用此接口延迟到下一个时间片再执行。
  timeStemp: function(){
    this.setData({ number: 1 }) // 直接在当前同步流程中执行

    wx.nextTick(() => {
      this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
    })

    this.setData({ number: 2 }) // 直接在当前同步流程中执行
  }, 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置下拉刷新的样式 
    wx.setBackgroundTextStyle({
      // dark  light
      textStyle: 'dark',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    wx.setBackgroundColor({
      // 窗口的背景色，必须为十六进制颜色值
      backgroundColor: '#ffffff',
      // 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
      backgroundColorTop: '#333333',
      // 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
      backgroundColorBottom: 'ffe4c4'
    })

    wx.showNavigationBarLoading({
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    setTimeout(() => {
      wx.hideNavigationBarLoading({
        success: (res) => {
          wx.setNavigationBarTitle({
            title: '交互操作',
            success: (res) => {},
            fail: (res) => {},
            complete: (res) => {},
          });
          wx.setNavigationBarColor({
            backgroundColor: '#f3f3f3',
            // 仅支持 #ffffff 和 #000000
            frontColor: '#000000', 
            // animation: {
            //   duration: 2,
            //   timingFunc: 'linear',
            // },
            success: (res) => {
              console.log('颜色更换执行成功');
            },
            fail: (res) => {
              console.log('颜色更换执行失败' + JSON.stringify(res));
            },
            complete: (res) => {
              console.log('颜色更换执行完成');
            },
          });
        },
        fail: (res) => {},
        complete: (res) => {},
      })
    }, 3000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    // wx.startPullDownRefresh({
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // });

    // 滚动到指定位置
    wx.pageScrollTo({
      duration: 0.5,
      scrollTop: 100,
      selector: '.section',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    });

    // 动态设置置顶栏文字内容。只有当前小程序被置顶时能生效
    wx.setTopBarText({
      text: 'top bar text',
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
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
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 4000);
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