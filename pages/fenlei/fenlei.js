// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"分类hahaha-git-我在github上的提交",
    list:[
      {id:1001,name:'alice',address:"北京"},
      {id:1002,name:'alice22',address:"上海"},
      {id:1003,name:'alice333',address:"天津"},
      {id:1004,name:'alice444',address:"深圳"},
    ],
    flag:false,
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      b: 3,
      c: 4
    },
    info:{
      title:"新闻标题1111",
      con:"新闻内容1111",
      pubdate:"2017-11-22"
    }
  },
  toggle(e) {
     //console.log(e.detail.value)
    // this.flag=e.detail.value;
   // console.log(this.data.flag)
   //this.data.flag=e.detail.value
   //微信小程序model层如何同步到view层
    this.setData({
      flag:e.detail.value
    });
  },
  go(e) {
    //console.log(e.target.dataset)
    this.setData({
      msg:e.target.dataset.title
    });
  }

})