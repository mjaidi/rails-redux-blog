<template>
  <div id="home">
    <div  v-for="post in posts" :key="post.id">
      <SinglePost v-bind:post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost'

export default {
  name: 'Home',
  components : {
    SinglePost
  },
  computed: {
    posts() {
      return this.$store.getters.POSTS
    }
  },
  mounted() {
    this.$store.dispatch('GET_POSTS')
  }
}

</script>
