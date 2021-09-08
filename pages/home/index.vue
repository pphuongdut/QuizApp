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
      <span>0</span>
      <span>H</span>
      <span>M</span>
      <span>Y</span>
      <span>Q</span>
      <span>U</span>
      <span>I</span>
      <span>Z</span>
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
  min-width: 300px;
  min-height: 500px;

  .wrapper {
    width: 100vw;
    text-align: center;
    letter-spacing: 10px;
    span {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #f2aaaa;
      font-size: 7.5vw;
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
      text-shadow: 0 30px #f37121, 0 50px #f2aaaa;
    }
    50% {
      transform: translate(0, 0) rotate(-4deg);
      text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
    }
    66.67% {
      text-shadow: 0 -30px #d54062, 0 -50px #8fc0a9;
    }
  }
  .btn-start {
    font-size: 200%;
    padding: 1% 2%;
    border: 5px solid transparent;
    border-radius: 15px;
    background-color: #8fc0a9;
    position: relative;
    &:hover {
      border: 5px solid white;
    }
    &:before {
      content: '👇';
      font-size: 60px;
      transform: scaleX(-1);
      right: 0px;
      top: -68px;
      animation: up-down 1s infinite;
      position: absolute;
    }
  }

  @keyframes up-down {
    50% {
      margin-top: -20px;
    }
  }
  @media (max-width: 576px) {
    .home-container {
      max-height: 500px;
      .wrapper {
        span {
          font-size: 56px;
        }
      }
    }
  }
}
</style>
