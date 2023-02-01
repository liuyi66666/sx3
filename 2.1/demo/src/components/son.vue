<template>
  <div>
    <p>{{smg}}</p>
    <button @click="brother">兄弟传值</button>
 </div>
</template>

<script>
export default {
  props:['smg'],
  data() {
    return {
      bro:"兄弟传过来的值"
    };
  },
  methods: {
    // 兄弟传值
    brother(){
       this.$bus.$emit('brother',this.bro)
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
