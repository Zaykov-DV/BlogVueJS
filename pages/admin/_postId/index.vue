<template>
  <newPostForm
    @submit="onSubmit"
    :postEdit="post"
  />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm'
export default {
  components: { newPostForm },
  layout: 'admin',
  asyncData (contex) {
      return axios.get(`https://blog-nuxt-95e46-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`)
        .then(res => {
          return {
            post: { ...res.data, id: contex.params.postId  }
          }
        })
        .catch(e => contex.error(e))
  },
  methods: {
    onSubmit (post) {
      console.log('post edit')
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>
