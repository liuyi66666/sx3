<template>
  <div>
    <!-- v-model的 -->
    <input type="text" :value="value" @input="input">
 </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      childa: "小儿子"
    };
  },
  methods: {
    input(e){
        this.$emit('input',e.target.value )
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
