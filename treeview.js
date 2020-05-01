// components/treeview/treeview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    treeListIndex: {// 默认为0，当前循环的第几层，用于tree样式展示
      type: Number,
      value: 0
    },
    treeList: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    collapse: false, // 每个tree组件对应自己的collapse属性；（true:折叠/false:展开;）
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapTreeItem: function (e) { // 点击项
      var item = e.currentTarget.dataset.item;
      //console.log(item);
      this.triggerEvent('treeTap', { item }); 
      if (item.children !== undefined) { // 其下有子节点，可折叠展开操作
        this.setData({ // 折叠展开操作
          collapse: !this.data.collapse,
        })  
      } 
    },
    treenodetap: function (e) { // 递归的最终子节点
      var item = e.detail.item;
      this.triggerEvent('treeTap', { item }); // 将当前的点击项的数据传递给父页面
      
    },
    taplongItem:function(e){
      var item = e.currentTarget.dataset.item;
      this.triggerEvent('treelongTap', { item }); 
      //console.log(item)
    },
    treenodelongtap:function(e){
      var item=e.detail.item;
      this.triggerEvent('treelongTap', { item }); 
      //console.log(item);
    }
  }
})