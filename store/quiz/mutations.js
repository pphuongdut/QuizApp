import Vue from 'vue'
export const quizMutations = {
  CLEAR: {
    DATA: 'quiz/CLEAR_DATA',
  },
  SET: {
    RESULT: 'quiz/SET_RESULT',
    RESPONSE_CODE: 'quiz/SET_RESPONSE_CODE',
    START_TIME: 'quiz/SET_START_TIME',
    FINISH_TIME: 'quiz/SET_FINISH_TIME',
  },
}
export default {
  SET_RESULT(state, payload) {
    Vue.set(state, 'results', payload)
  },
  SET_START_TIME(state, payload) {
    Vue.set(state, 'start_time', payload)
  },
  SET_FINISH_TIME(state, payload) {
    Vue.set(state, 'finish_time', payload)
  },
  SET_RESPONSE_CODE(state, payload) {
    Vue.set(state, 'response_code', payload)
  },
  CLEAR_DATA(state) {
    state.results = []
  },
}
