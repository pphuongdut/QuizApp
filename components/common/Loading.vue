<template>
  <div v-if="loading" class="load-wrapp">
    <div class="load w-screen h-screen flex justify-center items-center">
      <div class="square-holder">
        <div class="square"></div>
      </div>
    </div>
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
.load-wrapp {
  .square {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    background-color: #8fc0a9;
  }

  .load .square {
    animation: loading 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  @keyframes loading {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(70px, 0) rotate(360deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
}
</style>
