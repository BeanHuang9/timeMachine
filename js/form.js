let data = {
  company: '僅供學習用無任何商業用途',
  year: '©' + new Date().getFullYear(),
  title: '表單',
  name: '豆子',
  sex: '女',
  age: '20~30 歲間',
  favor: ['看電影', '打掃', '旅遊'], //多選要陣列
  job: true,
};

let vm = new Vue({
  el: '#app',
  data: data,
});
