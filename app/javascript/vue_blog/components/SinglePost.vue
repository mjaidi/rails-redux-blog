<template>
    <router-link :to="{name:'postDetail', params: {id: post.id}}">
      <div class="post-item">
        <h3>{{post.title}}</h3>
        <p>{{post.content}}</p>
      </div>
    </router-link>
</template>

<script>
  export default {
    name: 'SinglePost',
    props: ["post"]
  }
</script>
