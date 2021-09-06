<template>
  <div v-if="loading" class="loading">
    <i class="el-icon-loading"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-special);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  i {
    font-size: 500%;
    color: white;
  }
  z-index: 99999;
}
</style>
