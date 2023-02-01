<template>
  <div>
    <button @click="list">点击子传父</button>
 </div>
</template>

<script>
export default {
  data() {
    return {
        aa:'我是子传父'
    };
  },
  methods: {
    // 子传父的
    list(){
        this.$emit('list',this.aa)
    }
  },
  created() {
    // 兄弟传过来的
    this.$bus.$on('brother',(bro)=>{
        console.log(bro);
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
