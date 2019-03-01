import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from './views/BlogHome.vue'
import PostDetail from './views/PostDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome
    },
    {
      path: '/posts/new',
      name: 'newPost',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NewPost.vue')
    },
    {
      path: '/posts/:id',
      name: 'postDetail',
      component: PostDetail,
      props: true
    }
  ]
})
