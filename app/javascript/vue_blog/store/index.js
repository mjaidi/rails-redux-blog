import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' // axios is an http library to make http requrests (can use default fetch api instead)

const ROOT_URL = '/api/v1/posts';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      posts: JSON.parse(root.dataset.posts)
  },
  getters : {
    POSTS: state => {
      return state.posts
    },
    FIND_POST : (state) => (id) => {
      return state.posts.find(p=> p['id'] === parseInt(id))
    }
  },
  mutations: {
    ALL_POSTS : (state, payload) => {
      state.posts = payload
    },
    ADD_POST : (state, payload)=> {
      state.posts.push(payload)
    },
    // SHOW POST NOT EVEN NECESSARY
    SHOW_POST : (state, payload) => {
      state.posts = [payload] // only if reloading with empty state
    }
  },
  actions : {
    GET_POSTS :  (context) => {
      axios.get(`${ROOT_URL}`)
      .then(res => context.commit('ALL_POSTS', res.data))
    },
    SAVE_POST :  (context, payload ) => {
      axios.post(`${ROOT_URL}`, payload)
      .then(res => context.commit('ADD_POST', res.data))
      .catch(err => console.log(err))
    },

    // NOT REALLY NECESSARY
    GET_POST :  (context, payload ) => {
      axios.get(`${ROOT_URL}/${payload}`)
      .then(res => context.commit('SHOW_POST', res.data))
      .catch(err => console.log(err))
    }
  }
})
