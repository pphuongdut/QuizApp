<template>
  <div
    class="
      home-container
      flex flex-col
      justify-around
      items-center
      h-screen
      w-screen
    "
  >
    <div class="wrapper">
      <span>Q</span>
      <span>U</span>
      <span>I</span>
      <span>Z</span>
      <span>G</span>
      <span>A</span>
      <span>M</span>
      <span>E</span>
    </div>
    <el-button class="btn-start" type="primary" @click="$router.push('/quiz')">
      Tap to play</el-button
    >
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  font-family: 'Titan One', cursive;
}
.home-container {
  box-sizing: border-box;
  position: relative;
  background-color: black;
  .wrapper {
    width: 100vw;
    text-align: center;
    span {
      -webkit-text-stroke-width: 1.25px;
      -webkit-text-stroke-color: #000;
      font-size: 8vw;
      font-weight: bold;
      text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
      transform: translate(0, 80%) rotate(4deg);
      animation: jump 2s ease-in-out infinite;
      display: inline-block;
      font-family: 'Titan One', cursive;
      color: #fff;

      @for $i from 1 through 7 {
        &:nth-child(#{$i}) {
          animation-delay: 120ms * $i;
        }
      }
    }
  }
  @keyframes jump {
    33% {
      text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
    }
    50% {
      transform: translate(0, 0) rotate(-4deg);
      text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
    }
    66.67% {
      text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
    }
  }
}
</style>
