// components/chat-edit-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    keyBoardHeight: 0,
    isKeyboardEmoji : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onKeyboardHeightChange(event) {
      var keyBoardHeight = event.detail.height;
      this.setData({
        keyBoardHeight,
      });
      // 键盘高度变化事件
      this.triggerEvent("keyboardheightchange", event.detail, {
        composed: false
      })
    },
    onEmojiBtnClick: function() {
      this.setData({
        isKeyboardEmoji: !this.data.isKeyboardEmoji
      });
      this.triggerEvent("keyboardheightchange", {
        height: 0
      }, {
        composed: false
      })
    }
  }
})