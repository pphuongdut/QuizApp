<template>
  <div
    class="
      result-container
      flex flex-col
      justify-around
      items-center
      p-5
      md:p-10
      lg:p-16
      w-screen
      h-screen
    "
  >
    <h5 class="uppercase my-3 md:my-5 text-center">Quiz Result</h5>
    <!-- description -->
    <h2
      v-if="response_code > 6"
      class="font-bold text-center text-xl md:text-2xl lg:text-3xl"
    >
      <img src="~/assets/img/winner-brown.gif" alt="" class="m-0" />
      Congratulations! <br />
      <small> You are so good, we are proud of you 👏</small>
    </h2>
    <h2 v-else class="text-center font-bold text-xl md:text-2xl lg:text-3xl">
      Sorry, you fails <br />
      <small> We know you try your best, fighting !</small>
    </h2>
    <!-- score -->
    <div class="text-center">
      <small class="uppercase tracking-widest">Your score</small>
      <h3 class="text-7xl md:text-9xl">{{ response_code }}</h3>
    </div>
    <!-- information -->
    <div class="quiz-info my-3">
      <p>Start at: {{ start_time }}</p>
      <p>Finish at: {{ finish_time }}</p>
      <p>Time : {{ time }}</p>
    </div>
    <!-- play again -->
    <el-button class="btn-again" @click="$router.go('/quiz')"
      >Play again</el-button
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  // if user not yet play this game
  middleware: [
    ({ store, redirect }) => {
      const finish_time = store.state.quiz.finish_time
      console.log('finish_time : ', finish_time)
      if (
        finish_time == 0 ||
        finish_time == undefined ||
        finish_time == '01/01/1970'
      ) {
        redirect('/home')
      }
    },
  ],
  computed: {
    ...mapState({
      start_time: (state) => {
        return moment(state.quiz.start_time).calendar()
      },
      finish_time: (state) => {
        return moment(state.quiz.finish_time).calendar()
      },
      response_code: (state) => {
        return state.quiz.response_code
      },
      time: (state) => {
        var start = moment(state.quiz.start_time)
        var end = moment(state.quiz.finish_time)
        return end.to(start, true)
      },
    }),
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  font-family: 'Titan One', cursive;
}
.result-container {
  background: #1d1e21;
  color: white;
}
.btn-again {
  margin: 10% 0;
  font-size: 130%;
  padding: 1% 5%;
  border: 5px solid transparent;
  border-radius: 15px;
  background-color: #8fc0a9;
  color: black;
}
</style>
