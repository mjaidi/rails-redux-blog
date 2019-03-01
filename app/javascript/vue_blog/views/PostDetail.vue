<template>
  <div>
    <div class="post-item">
      <h3>{{post.title}}</h3>
      <p>{{post.content}}</p>
    </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PostDetail',
    props: ['id'],
    computed: {
      post() {
        return this.$store.getters.FIND_POST(this.id)
      }
    },
    // Not even Necesary

    // mounted() {
    //   if (!this.post) {
    //     this.$store.dispatch('GET_POST', this.id)
    //   }
    // }

  }
</script>
