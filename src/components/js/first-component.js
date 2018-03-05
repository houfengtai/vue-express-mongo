import twoComponent from '@/components/two-component'

export default {
  name: 'first-component',
  components: {twoComponent},
  data () {
    return {
      message: '这是第一个组件！',
      articles: [],
      orderType:4
    }
  },
  computed: {
    _getType: function () {
      if(this.orderType==1){
        return 'java';
      }
      if(this.orderType==2){
        return 'node.js';
      }
      if(this.orderType==3){
        return 'vue';
      }
    }
  },
  watch: {
    'orderType': function(newVal,oldVal){
      console.log("执行了watch方法");
    }
  },
  mounted () {
    let self = this
    this.$http.get('/hf/v2/movie/top250?count=10')
      .then((response) => {
        // 这里是处理正确的回调
        self.articles = response.data.subjects
      })
      .catch((error) => {
        // 这里是处理错误的回调
        self.fetchError = error
      })
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    }

  }

}
