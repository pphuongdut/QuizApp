<template>
  <div>
    <h3>{{ result.question }}</h3>
    <ul>
      <el-button
        v-for="(item, index) in result.incorrect_answers"
        :key="'item' + index"
        class="w-100"
        @click="selectAnswer(item)"
      >
        {{ index + 1 }} . {{ item }}
      </el-button>
      <el-button class="w-100" @click="selectAnswer(result.correct_answer)">
        {{ result.correct_answer }}
      </el-button>
    </ul>
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
    return {}
  },

  methods: {
    selectAnswer(item) {
      if (this.result.correct_answer == item) {
        console.log('correct:' + this.result.correct_answer)
        this.$emit('handle-answer', true)
      } else {
        this.$emit('handle-answer', false)
      }
    },
    // setRandomAnswers() {
    //   let ans = this.result.incorrect_answers
    //   // ans.push(this.result.correct_answer)
    //   ans[ans.length()] = this.result.correct_answer
    //   ans.sort(function () {
    //     return 0.5 - Math.random()
    //   })
    //   this.answers = ans
    // },
  },
}
</script>

<style></style>
