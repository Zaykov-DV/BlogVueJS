<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <PostsList :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo";
import contacts from "@/components/Contacts";

export default {
  components: { promo, contacts },
  // asyncData () {
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           {
  //             id: 1,
  //             title: '1 post',
  //             descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //             img: 'https://sun9-19.userapi.com/3XkI1CkKUtMDp51mLSpWRO3Wq3yo3aPCzl_lpg/VlNbCX0zfZQ.jpg'
  //           }
  //         ]
  //       })
  //     }, 1500)
  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch(e => {
  //     context.error(e)
  //   })
  // },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostLoaded
    }
  }
}
</script>
