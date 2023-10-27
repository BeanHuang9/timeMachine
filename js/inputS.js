let data = {
  input: {
    type: '全部',
    title: '',
  },
  menu: [
    { type: '扭蛋', title: '迷你大同電鍋模型', link: 'javascript:;' },
    {
      type: '盲盒',
      title: 'Pucky畢奇精靈牛奶寶寶系列',
      link: 'javascript:;',
    },
    {
      type: '扭蛋',
      title: '日本公眾電話',
      link: 'javascript:;',
    },
    { type: '盒玩', title: '微型化妝間場景組', link: 'javascript:;' },
    { type: '盲盒', title: 'Dimoo星座系列', link: 'javascript:;' },
    { type: '樂高', title: '侏羅紀世界', link: 'javascript:;' },
    { type: '盲盒', title: 'MOLLY幻想流浪記系列', link: 'javascript:;' },
    { type: '扭蛋', title: '麵包展示櫃模型', link: 'javascript:;' },
    {
      type: '盲盒',
      title: 'LABUBU水果精靈系列',
      link: 'javascript:;',
    },
    { type: '扭蛋', title: '指尖微型照相機', link: 'javascript:;' },
    {
      type: '扭蛋',
      title: '掌中復古打字機',
      link: 'javascript:;',
    },
    {
      type: '樂高',
      title: '霍格華茲特快車',
      link: 'javascript:;',
    },
    {
      type: '盒玩',
      title: '學校的營養午餐',
      link: 'javascript:;',
    },
    {
      type: '樂高',
      title: '奇諾比奧的尋寶之旅',
      link: 'javascript:;',
    },
    { type: '盲盒', title: 'Zsiga森林漫步系列', link: 'javascript:;' },
  ],
};

new Vue({
  el: '#app',
  data: data,
  computed: {
    typeMenu() {
      if (this.input.type !== '全部') {
        return this.menu.filter((item) => {
          return item.type === this.input.type;
        });
      } else {
        return this.menu;
      }
    },
    titleMenu() {
      if (this.input.title) {
        return this.typeMenu.filter((item) => {
          let content = item.title.toLowerCase();
          let keyword = this.input.title.toLowerCase();
          return content.indexOf(keyword) !== -1;
        });
      } else {
        return this.typeMenu;
      }
    },
  },
  methods: {
    inputHandler() {
      if (this.input.title) {
        let { type, title } = this.input;
        this.menu.push({
          type,
          title,
          link: 'javascript:;',
        });
        this.input.title = '';
      }
    },
  },
});
