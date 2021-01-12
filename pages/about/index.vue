<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, similique!</p>
        <Intro title="Lorem ipsum dolor sit amet" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, accusantium blanditiis dolores eius excepturi
          facere facilis illo minus mollitia necessitatibus numquam possimus quae quam quasi repellendus, sapiente
          tempore voluptates.</p>
        <img src="@/assets/img/about.jpg" alt="about"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis deleniti dicta, dolorem eius,
          eligendi facilis hic minus officiis porro quas rem, repellendus sed suscipit voluptatem. Aperiam aspernatur,
          consequatur cum dolorum ipsam nemo odit quae quisquam tempora ut? Cupiditate dolores ducimus ex ipsa
          necessitatibus nostrum pariatur quidem reiciendis repellendus temporibus?</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    let title = 'About My SSR Blog',
      descr = 'About My SSR Blog with Nuxt.JS',
      type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  },
}
</script>

<style>
.about {
  text-align: center;
}
p {
  margin: 10px 0;
}
</style>

