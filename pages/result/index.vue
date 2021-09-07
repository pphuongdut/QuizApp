<template>
  <el-card
    shadow="hover"
    class="flex flex-col justify-center items-center p-5 md:p-10 lg:p-16"
  >
    <h5 class="uppercase my-4 md:my-10">RESULTS</h5>
    <h2
      v-if="response_code > 7"
      class="font-bold text-xl md:text-2xl lg:text-3xl"
    >
      YOU PASSED
    </h2>
    <h2 v-else class="font-bold text-xl md:text-2xl lg:text-3xl">YOU FAILED</h2>
    <div class="text-center rounded bg-indigo p-5 md:p-10">
      <small class="uppercase">FInal score</small>
      <h3 class="text-black text-5xl">{{ response_code }}</h3>
    </div>
    <p>Thời gian bắt đầu làm : {{ start_time }}</p>
    <p>Thời gian kết thúc làm : {{ finish_time }}</p>
    <p>Time : {{ time }}</p>
  </el-card>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  // middleware: [
  //   ({ store, redirect }) => {
  //     const finish_time = store.state.quiz.finish_time
  //     console.log('finish_time : ', finish_time)
  //     if (
  //       finish_time == 0 ||
  //       finish_time == undefined ||
  //       finish_time == '01/01/1970'
  //     ) {
  //        redirect('/home')
  //     }
  //   },
  // ],
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
