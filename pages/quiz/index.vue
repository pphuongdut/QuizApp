<template>
  <div class="text-center h-screen w-screen">
    <Question
      :result="results[current_question]"
      @handle-answer="handleAnswer"
    />
    <el-button
      v-if="current_question < results.length"
      @click="current_question++"
    >
      Câu tiếp
    </el-button>
    <el-button v-else @click="finishQuiz">Kết thúc</el-button>
  </div>
</template>

<script>
import { Question } from '~/components/uncommon/Question'
import { mapActions, mapState, mapMutations } from 'vuex'
import { quizMutations } from '~/store/quiz/mutations'
import { quizActions } from '~/store/quiz/actions'
export default {
  components: {
    Question,
  },
  data() {
    return {
      current_question: 0,
      code: 0,
    }
  },
  async fetch() {
    // this.results = await store.dispatch(quizActions.GET.RESULTS)
    await this.getResults()
  },
  computed: {
    ...mapState({
      results: (state) => {
        return state.quiz.results
      },
      response_code: (state) => {
        return state.quiz.response_code
      },
    }),
  },
  mounted() {
    this.code = this.response_code
    this.$store.commit(quizMutations.SET.START_TIME, this.getCurrentTime())
  },
  methods: {
    ...mapMutations({
      clearData: quizMutations.CLEAR.DATA,
    }),
    ...mapActions({
      getResults: quizActions.GET.RESULTS,
    }),
    handleAnswer(isTrue) {
      if (isTrue) {
        this.code++
      }
      this.current_question++
    },
    finishQuiz() {
      this.$store.commit(quizMutations.SET.RESPONSE_CODE, this.code)
      this.$store.commit(quizMutations.SET.FINISH_TIME, this.getCurrentTime())
      this.$router.push('/result')
    },
    getCurrentTime() {
      let today = new Date()
      return (
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      )
    },
  },
}
</script>

<style></style>
