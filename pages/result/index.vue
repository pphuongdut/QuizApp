<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      p-5
      md:p-10
      lg:p-16
      my-5
      bg-indigo
      text-white
      rounded
      w-11/12
      md:w-2/3
      lg:w-1/2
      mx-auto
    "
  >
    <h5 class="uppercase my-3 md:my-5 text-center">RESULTS</h5>
    <h2
      v-if="response_code > 7"
      class="font-bold text-center text-xl md:text-2xl lg:text-3xl"
    >
      CONGRATS, YOU PASSED
    </h2>
    <h2 v-else class="text-center font-bold text-xl md:text-2xl lg:text-3xl">
      SORRY, YOU FAILED
    </h2>
    <div class="text-center rounded my-3 p-5 md:p-10 text-indigo bg-white">
      <small class="uppercase">FInal score</small>
      <h3 class="text-7xl">{{ response_code }}</h3>
    </div>
    <div class="my-3">
      <p>Start at: {{ start_time }}</p>
      <p>Finish at: {{ finish_time }}</p>
      <p>Time : {{ time }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
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

<style></style>
