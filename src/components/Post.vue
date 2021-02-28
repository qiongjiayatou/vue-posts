<template>
  <div class="card p-4 mb-3">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <div class="d-flex justify-content-end">
      <button @click="setEditMode(post)" class="button is-warning mr-3">
        Edit
      </button>
      <button
        @click="$emit('delete:post', post.id)"
        class="button is-danger is-light"
      >
        Delete
      </button>
    </div>

    <post-form
      :post="post"
      form-title="Edit post"
      :editing="editMode !== null"
      @edit:post="editPost"
      :class="{ 'is-active': editMode !== null }"
    ></post-form>
  </div>
</template>

<script>
import PostForm from "./PostForm.vue";

export default {
  name: "post",
  components: {
    PostForm
  },
  props: ["post"],
  data() {
    return {
      editMode: null,
    };
  },
  methods: {
    setEditMode(post) {
      this.editMode = post.id;
    },

    editPost(editedPost) {
      this.$emit('edit:post', editedPost)
      
      this.editMode = null
    },
  },
};
</script>

<style scoped>
</style>