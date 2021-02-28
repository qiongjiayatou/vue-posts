<template>
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{ formTitle }}</p>
      <button v-if="editing" @click="cancelEditing()" class="delete" aria-label="close"></button>
      <button v-else @click="cancel" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <p v-if="error" class="text-danger">Please, fill all the fields!</p>
      <form>
        <div class="form-group">
          <input
            v-model="post.title"
            @focus="error = false"
            type="text"
            class="form-control"
            placeholder="Title"
          />
        </div>
        <div class="form-group">
          <textarea
            v-model="post.body"
            @focus="error = false"
            cols="30"
            rows="5"
            class="form-control"
            placeholder="Post body..."
          ></textarea>
        </div>
        
      </form>
    </section>
    <footer class="modal-card-foot is-justify-content-end">
      <button v-if="editing" @click="saveChanges(post)" class="button is-success">Save Changes</button>
      <button v-else @click="addPost(post)" class="button is-success">Add</button>
      <button v-if="editing" @click="cancelEditing()" class="button">Cancel</button>
      <button v-else @click="cancel" class="button">Cancel</button>

    </footer>
  </div>
</div>

</template>

<script>
export default {
  name: "post-form",
  props: {
    formTitle: {
      required: true,
      type: String
    }, 
    post: {
      required: true, 
      type: Object
    },
    editing: { 
      required: true, 
      type: Boolean
    }
  },
  data() {
    return {
      cachedPost: null,
      error: false
    };
  },
  methods: {
    cancel() {
      this.$emit('close:modal')
    },
    cancelEditing() {
      this.$emit('edit:post', this.cachedPost);
      this.cachedPost = null;
    },
    saveChanges(post) {
      if (post.title === '' || post.body === '') {
        this.error = true
        return
      }

      this.$emit('edit:post', post);
      this.cachedPost = null;
    },
    addPost(post) {
      if (post.title === '' || post.body === '') {
        this.error = true
        return
      }

      this.$emit('add:post', post)
      // this.post = {};
    },
    
  },

  created() {
    this.cachedPost = Object.assign({}, this.post);
  },
};
</script>

<style scoped>

</style>