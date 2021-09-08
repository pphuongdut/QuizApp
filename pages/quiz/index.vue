<template>
  <div
    class="
      quiz-container
      flex flex-col
      justify-center
      items-center
      h-screen
      w-screen
    "
  >
    <div
      v-if="timer"
      class="count-time flex flex-col justify-center items-center show"
    >
      <b class="text-5xl md:text-7xl">GET READY ! </b>
      <b class="text-7xl md:text-9xl">{{ timer }}</b>
    </div>
    <b class="my-3 md:my-5 text-center">Oh my quiz !</b>
    <div
      v-if="current_question < results.length"
      class="w-11/12 md:w-2/3 lg:w-1/2"
    >
      <span class="text-2xl md:text-5xl">
        <b> Question {{ current_question + 1 }} </b>
        <small>/ {{ results.length }}</small>
      </span>
      <el-progress
        class="my-5"
        :percentage="current_question * 10"
        :color="colors"
      ></el-progress>
      <Question
        :result="results[current_question]"
        @handle-answer="handleAnswer"
      />
      <el-button class="btn-skip" @click="current_question++"> Next </el-button>
    </div>
    <el-button v-else class="btn-result" @click="$router.push('/result')">
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
      timer: 3,
      current_question: 0,
      response_code: 0,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '##èbc5a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#10b28e', percentage: 100 },
      ],
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
  created() {
    let timer = setInterval(() => {
      this.timer--
      if (this.timer == 0) clearInterval(timer)
    }, 1000)
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

<style lang="scss" scoped>
.quiz-container {
  background: #171c33;
  color: white;
  .btn-skip {
    margin: 10% 0;
    font-size: 130%;
    padding: 1% 5%;
    border: 5px solid transparent;
    border-radius: 15px;
    background-color: #8fc0a9;
    color: black;
    float: right;
    &:hover {
      border: 5px solid white;
    }
  }
  .btn-result {
    margin: 10% 0;
    font-size: 130%;
    padding: 1% 5%;
    border: 5px solid transparent;
    border-radius: 15px;
    background-color: #8fc0a9;
    color: black;
  }
  .show {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 10000000;
    background: black;
  }
}
</style>
