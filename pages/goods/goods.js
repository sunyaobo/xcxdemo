
Page({
  data: {
    currentItem:1001,
    goods:[
      {id:1001,name:'电子',content:'电子内容',url:'goods-detail'},
      {id:1002,name:'书籍',content:'书籍内容',url:'goods-detail'},
      {id:1003,name:'服装',content:'服装内容',url:'goods-detail'},
      {id:1004,name:'水果',content:'水果内容',url:'goods-detail'},
  ]
  
  },
  //设置高亮
  setActive(e) {
   // console.log(e)
   this.setData({
     currentItem:e.currentTarget.dataset.id
   })
  },
  goDetail() {
    wx.navigateTo({
      url:'../goods-detail/goods-detail1111?id=1001&name=1507mweba',
      success() {
        console.log('成功跳转')
      },
      fail() {
        console.log('失败..')
      }

    })
  },

  //加入购物车
  addCart() {
    //本地存储逻辑，向后台发送逻辑
    
    /* wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 5000 
    }) */

  /*   wx.showLoading({
      title: '加载中',
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000) */

  /*   wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    }) */

    wx.showActionSheet({
      itemList: ['微信支付', '银行卡支付', '信用卡'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
          title:"商品信息111"
      })

      wx.showNavigationBarLoading()

      setTimeout(()=>{
        wx.hideNavigationBarLoading()
      },2000);
  },
  //相机功能
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
        quality: 'high',
        success(res) {
          alert(res.tempImagePath)
            /* this.setData({
                src: res.tempImagePath
            }) */
        },
    })
},
error(e) {
    console.log(e.detail)
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