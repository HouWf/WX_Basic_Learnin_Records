// index.js
// 获取应用实例

var tools = require('../tools/tools');

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })

    // wx.redirectTo({
    //   url: '../logs/logs',
    // }),

    // wx.navigateBack({
    //   delta: 0,
    // }),

    // wx.switchTab({
    //   url: '../logs/logs',
    // })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    var timt = setTimeout((e, m) => {
      console.log("eeee" + e + m);
    }, 2000, "123", "mmmm");
    
    var i = 0;
    var iner = setInterval((e, m) => {
      console.log("interval" + e + m);
      i ++;
      if (i > 1) {
        clearInterval(iner);
      }
    }, 2000, "inter", "inter2");

    // clearTimeout(timt);
    // clearInterval(iner);



    // const url = 'https://www.easy-mock.com/mock/5b06da4872643c7a5c4edcd1/api/desc#!method=get';
    // var params = {
    //   url: url,
    //   method: 'GET',
    // };
    // tools.request(params).then(res=>{
    //   console.log('request then 1' + JSON.stringify(res));
    // }).then(() => {
    //   console.log('request then 2');
    // });


    
    console.log('123');
  },

  onPageScroll: function(e){
    // wx.pageScrollTo({
    //   duration: 1000,
    //   scrollTop: 100
    // });


  },

  /**
   * 收藏
   * */ 
  onAddToFavorites: function(e){
    console.log('用户点击了收藏按钮');
    return {
      title: '自定义收藏标题',
      imageUrl: 'http://demo.png',
      query: 'name=xxx&age=xxx',
    }
  },

  /**
   * 转发
   * */ 
  onShareAppMessage: function(e){
    console.log('用户点击了分享按钮');
    return {
      title:"转发",
      path:"/pages/tabbar/first",
      imageUrl:"",
    }
  },

  /**
   * 分享到朋友圈
   * */ 
  onShareTimeline: function(e){
    return {
      title:"分享",
      query:"time=123&data=eeee",
      imageUrl:""
    }
  },

  onResize: function(e){
    console.log('屏幕旋转了' + JSON.stringify(e));
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          // userInfo: res.userInfo,
          userInfo: res.userInfo,


          hasUserInfo: true
        })
      }
    })
  },

  
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
