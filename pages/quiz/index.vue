<template>
  <div
    v-loading="$fetchState.pending"
    class="flex flex-col justify-center items-center h-screen w-screen"
  >
    <div
      v-if="current_question < results.length"
      class="w-full md:w-2/3 lg:w-1/2"
    >
      <b class="text-green">
        {{ current_question + 1 }} / {{ results.length }}
      </b>
      <Question
        :result="results[current_question]"
        @handle-answer="handleAnswer"
      />
      <el-button type="text" @click="current_question++">
        Skip question
      </el-button>
    </div>
    <el-button v-else type="success" @click="$router.push('/result')">
      You finished. Click to see result
    </el-button>
  </div>
</template>

<script>
import { Question } from '~/components/uncommon/Question'
import { mapActions, mapState, mapMutations } from 'vuex'
import { quizMutations } from '~/store/quiz/mutations'
import { quizActions } from '~/store/quiz/actions'
import moment from 'moment'
export default {
  components: {
    Question,
  },
  data() {
    return {
      current_question: 0,
      response_code: 0,
    }
  },
  async fetch() {
    // this.results = await store.dispatch(quizActions.GET.RESULTS)
    await this.clearData()
    await this.getResults()
  },
  computed: {
    ...mapState({
      results: (state) => {
        return state.quiz.results
      },
    }),
  },
  mounted() {
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
        this.response_code++
      }
      this.current_question++
      if (this.current_question >= this.results.length) {
        this.finishQuiz()
      }
    },
    finishQuiz() {
      this.$store.commit(quizMutations.SET.RESPONSE_CODE, this.response_code)
      this.$store.commit(quizMutations.SET.FINISH_TIME, this.getCurrentTime())
      this.$router.push('/result')
    },
    getCurrentTime() {
      return moment()
    },
  },
}
</script>

<style></style>
