<template>
  <div>
    <!-- vuex传来的 -->
    <p>vuex--{{name}}</p>
    <!-- 本地存储的 -->
    <p>本地存储--{{age}}</p>
    <!-- children传值 -->
    <children v-model="inp"></children> 
    <!--children也是 v-model的 -->
    <button @click="chi">children传值</button>
    <p>{{childs}}</p>
    
 </div>
</template>

<script>
import children from "../components/children.vue"
export default {
  data() {
    return {
      age:'',
      childs:'',
      inp:'123'
    };
  },
  methods: {
    // children传值
    chi(){
      // console.log(this);
     this.childs=this.$children[0].childa
    }
  },
  created() {
    // 本地储存来的
    this.age=sessionStorage.getItem('age')
  },
  mounted() {},
  components: {
    children
  },
  computed: {
    // vuex
    name(){
      return this.$store.state.name
    }
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>

