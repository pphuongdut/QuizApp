<template>
  <div>
    <h3>KẾT QUẢ : {{ response_code }}</h3>
    <p>Thời gian bắt đầu làm : {{ start_time }}</p>
    <p>Thời gian kết thúc làm : {{ finish_time }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      start_time: (state) => {
        return state.quiz.start_time
      },
      finish_time: (state) => {
        return state.quiz.finish_time
      },
      response_code: (state) => {
        return state.quiz.response_code
      },
    }),
  },
}
</script>

<style></style>
