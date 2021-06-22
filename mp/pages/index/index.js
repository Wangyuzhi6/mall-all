import regeneratorRuntime from '../../lib/regeneratorRuntime/regeneratorRuntime'
const api =require('../../api/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ads:[],
      categoryList:[],
      floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      const adsPromise=api.getPositionAds({
        position:2
      })
      const categoryPromise=api.getArrayCategories()
      const floorPromise=api.getFloors()
      const ads=await adsPromise
      const categoryList=await categoryPromise
      const floorList=await floorPromise
     //console.log(ads);
     this.setData({
       ads,
       categoryList,
       floorList
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