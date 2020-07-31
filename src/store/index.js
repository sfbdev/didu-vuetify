import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    header: [
      {
        text: "Task",
        value: 'text'
      },
      {
        text: "Date",
        value: 'date'
      },
      {
        text: "Category",
        value: 'category'
      },
      {
        text: "Priority",
        value: 'priority'
      },
      {
        text: "Status",
        value: 'done'
      },
    ],
    todos: [
      {
        id: 0,
        text: 'Çocuklar okuldan alınacak.',
        description: '',
        date: "08/16 10:00",
        done: false,
        category: "İş",
        priority: "Low",
      },
      {
        id: 1,
        text: 'Markete gitmek için liste hazırlanacak.',
        description:  '',
        date: "08/03 05:10",
        done: false,
        category: "Okul",
        priority: "Medium",
      },
      {
        id: 2,
        text: 'Toplantı notları çıkartılacak.',
        description: '',
        date: "07/18 15:10",
        done: true,
        category: "Kişisel Gelişim",
        priority: "Low",
      },
      {
        id: 3,
        text: 'Vue için hazırlanan makaleler okunacak.',
        description: '',
        date: "08/09 14:00",
        done: false,
        category: "Hobi",
        priority: "High",
      }
    ]
  },
  mutations: {
    SAVE_TODO(state, payload){
      state.todos.unshift(payload)

    }
  },
  actions: {
    saveTodo({ commit }, payload){
      commit("SAVE_TODO", payload)
    }
  },
  modules: {
  },
});
