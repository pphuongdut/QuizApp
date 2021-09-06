import Vue from 'vue'
export const quizMutations = {
  CLEAR: {
    DATA: 'quiz/CLEAR_DATA',
  },
  SET: {
    RESULT: 'quiz/SET_RESULT',
    RESPONSE_CODE: 'quiz/SET_RESPONSE_CODE',
  },
}
export default {
  SET_RESULT(state, payload) {
    Vue.set(state, 'results', payload)
    console.log(state.results[0].question)
  },
  SET_RESPONSE_CODE(state, payload) {
    Vue.set(state, 'response_code', payload)
  },
  CLEAR_DATA(state) {
    state.results = []
  },
}
