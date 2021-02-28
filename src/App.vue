<template>
  <div id="app">
    <div class="mt-3 mb-5 text-center">
      <h1 class="is-size-1">Posts</h1>

      <div class="m-3">
        <p v-if="posts.length < 1">No posts yet!</p>
        <post-form
          v-else
          :post="newPost"
          form-title="Create new post"
          :editing="false"
          @close:modal="isCreating = false"
          @add:post="addPost"
          :class="{ 'is-active': isCreating }"
        ></post-form>
        <button @click="isCreating = true" class="button is-link">Create post</button>
      </div>
    </div>

    <div class="container">
      <posts
        :posts="posts"
        @delete:post="deletePost"></posts>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Posts from "./components/Posts.vue";
import PostForm from './components/PostForm.vue'

export default {
  name: "App",
  components: {
    Posts,
    PostForm
  },
  data() {
    return {
      posts: [],
      newPost: {
        title: "",
        body: "",
      },
      isCreating: false
    };
  },
  methods: {
    deletePost(id) {

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(() => console.log('deleted'))
          .catch(error => console.log(error))

        this.posts = this.posts.filter(post => post.id !== id);
    },

    editPost(editedPost) {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`, editedPost)
          .then(() => console.log('edited'))
          .catch(error => console.log(error))

        this.posts = this.posts.map(post => 
            post.id === editedPost.id ? editedPost : post
        )
    },


    addPost(post) {

      axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => this.posts.unshift(response.data))
        .catch(error => console.log(error))

      this.newPost = {
        title: '',
        body: ''
      }
      this.isCreating = false
    }
  },
  
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        // console.log(response.data);
        // this.posts = response.data;
        this.posts = response.data.slice(0, 10);
    })
    .catch(error => console.log(error));
}
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
