<template>
  <div>
    <!-- 父传子 -->
    <son :smg="smg"></son>
    <!-- 子传父 -->
    <list @list="list"></list>
    <!-- 接收的子传过来的内容 -->
    <p>{{val}}</p>
    <button @click="add">vuex</button>
    <button @click="loc">本地存储的</button>
 </div>
</template>

<script>
import son from "../components/son.vue"
import list from "../components/list.vue"
export default {
  data() {
    return {
      // 父传子的
      smg:'父传子啦啦啦',
      // 子传父的
      val:'',
      // vuex的
      name:'啦啦啦',
      // 本地存储的
      age:'6666'
    };
  },
  methods: {
    list(a){
      this.val=a
      // console.log(a);
    },
    // vuex
    add(){
      this.$store.commit('add', this.name)
    },
    //本地存储的
    loc(){
      sessionStorage.setItem('age',this.age)
    }
  },
  created() {},
  mounted() {},
  components: {
    son,
    list
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>

