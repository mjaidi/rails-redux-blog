<template>
  <div id="newPost">
    <form v-on:submit="addPost">
      <div class="form-group">
        <input type="text" v-model="title" name="title" placeholder="Post Title" class="form-control">
      </div>
      <div class="form-group">
        <textarea v-model="content" name="content" placeholder="Write something here"  class="form-control" rows="8"></textarea>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary btn-block">
    </form>
    <div id="nav">
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewPost',
    data() {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      addPost(e) {
        e.preventDefault();
        const newPost = {
          title: this.title,
          content: this.content
        }
        const {title, content} = newPost
        this.$store.dispatch('SAVE_POST', {title, content})
        this.$router.push({name: 'home'})
      }
    }
  }

</script>
