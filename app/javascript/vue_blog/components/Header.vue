<template>
    <div class="first-row">
      <h3>Vue Blog</h3>
      <router-link v-if="isNotHome()" class="btn btn-primary btn-cta" to="/posts/new">Let's write a post!</router-link>
   </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      isNotHome() {
        return this.$route['path'] === "/"
      }
    }
  }
</script>
