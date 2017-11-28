// pages/goods-detail/goods-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:'hello'
  },
  goback() {
    wx.navigateBack({delta:1});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (arg) {
     console.log(arg.id)
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
     console.log('已经进入前台运行')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('已经进入后台运行')
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
    return {
      title: '商品详情11111',
      path: '/pages/goods-detail/goods-detail'
    }
  }
})