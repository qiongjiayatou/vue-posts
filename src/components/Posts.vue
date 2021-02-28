<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <post :post="post" @delete:post="$emit('delete:post', post.id)"></post>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "posts",

  components: {
    Post,
  },
  props: {
    posts: { required: true },
  },
};
</script>