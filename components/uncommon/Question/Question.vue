<template>
  <div>
    <h3
      class="question text-xl md:text-3xl lg:text-4xl font-bold"
      v-html="result.question"
    ></h3>
    <div class="answers-container flex flex-col">
      <el-button
        v-for="(item, index) in answers"
        :id="'answer' + index"
        :key="'item' + index"
        class="w-100"
        @click="handleAnswer(item, $event)"
        v-html="item"
      >
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => {
        return { question: '', answers: [] }
      },
    },
  },
  data() {
    return {
      answers: [],
    }
  },
  computed: {},
  watch: {
    result: {
      handler() {
        this.mergeAnswers()
      },
      deep: true,
    },
  },
  created() {
    this.mergeAnswers()
  },
  methods: {
    handleAnswer(item) {
      if (this.result.correct_answer == item) {
        this.$message({
          showClose: true,
          message: 'Congrats, correct answer.',
          type: 'success',
        })
        this.$emit('handle-answer', true)
      } else {
        this.$message({
          showClose: true,
          message: 'Oops, this is a wrong answer.',
          type: 'error',
        })
        this.$emit('handle-answer', false)
      }
    },
    mergeAnswers() {
      let answers = [
        ...this.result.incorrect_answers,
        this.result.correct_answer,
      ]
      answers.sort(function () {
        return 0.5 - Math.random()
      })
      this.$set(this, 'answers', answers)
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  font-family: 'Titan One', cursive;
}
.question {
  line-height: 150%;
  margin: 5% 0;
}
::v-deep .el-button {
  font-size: 150%;
  margin: 10px 0;
  padding: 10px;
  background: transparent;
  color: white;
  border-radius: 10px;
  border: 1px solid #ebc217;
}
</style>
