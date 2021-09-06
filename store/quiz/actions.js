// import quizMutations from './mutations'
export const quizActions = {
  GET: {
    RESULTS: 'quiz/getResults',
  },
}
export default {
  async getResults({ commit }) {
    try {
      const number_of_question = 10
      const response = await this.$axios.post(
        'https://opentdb.com/api.php/?amount=' + number_of_question
      )
      commit('SET_RESULT', response.data.results)
      commit('SET_RESPONSE_CODE', response.data.response_code)
      return response.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
