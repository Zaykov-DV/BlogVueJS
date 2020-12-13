<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <PostsList :posts="posts" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo";
import contacts from "@/components/Contacts";

export default {
  components: { promo, contacts },
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://sun9-19.userapi.com/3XkI1CkKUtMDp51mLSpWRO3Wq3yo3aPCzl_lpg/VlNbCX0zfZQ.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: "https://sun9-71.userapi.com/hV9iAGICGYMU1-A0nlY860HlfmP2VW8kE3--iQ/mQjrJFyrvm8.jpg"
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: 'https://sun9-10.userapi.com/ZCOz5a6vpJZeiffYtuFSEbGMKQeh8PusrZ-m_w/lCxAV6Ccw4k.jpg'
        }
      ]
    }
  }
}
</script>
