<template>
  <div>
    <h3
      class="text-xl md:text-2xl lg:text-3xl font-bold my-2 md:my-5 lg:my-10"
      v-html="result.question"
    ></h3>
    <div class="flex flex-col">
      <el-button
        v-for="(item, index) in answers"
        :key="'item' + index"
        class="w-100"
        @click="selectAnswer(item)"
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
    selectAnswer(item) {
      if (this.result.correct_answer == item) {
        this.$emit('handle-answer', true)
      } else {
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
::v-deep .el-button {
  margin: 10px 0;
}
</style>
