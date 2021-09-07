// import quizMutations from './mutations'
//import qs from 'qs'
export const quizActions = {
  GET: {
    RESULTS: 'quiz/getResults',
  },
}
export default {
  async getResults({ commit }) {
    try {
      // const queryString = qs.stringify(state.query)
      const queryString = 'amount=10'
      const response = await this.$axios.post(
        'https://opentdb.com/api.php?' + queryString
      )
      commit('SET_RESULT', response.data.results)
      console.log(response.data.results)
      commit('SET_RESPONSE_CODE', response.data.response_code)
      return response.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
