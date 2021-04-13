<template>
  <div class="flex h-screen antialiased w-full">

    <about-sidebar />

    <main class="flex-1">
      <div
        class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10"
      >
        <div class="bg-white p-10 shadow min-h-full">
          <h3 class="text-2xl mb-4">
            Мои знания и опыт:
          </h3>
          <div class="content">
            <ul>
              <li>опыт работы с HTML5, CSS3, JS (native js, jquery, ajax)</li>
              <li>верстка pixel perfect</li>
              <li>знание vue.js (vue-router, vuex, axios)</li>
              <li>опыт использования препроцессоров (sass, less) и систем сборок (gulp, webpack, Babel)</li>
              <li>знание CSS фреймворков (bootstrap, tailwindcss)</li>
              <li>знание PHP (опыт 8 лет), MySQL</li>
              <li>опыт работы с php фреймворками Laravel, Codeigniter</li>
              <li>опыт использования REST API</li>
              <li>опыт работы с git (github, gitlab)</li>
              <li>умение разбираться в чужом коде</li>
              <li>опыт верстки HTML страниц на основе дизайн-макетов</li>
              <li>опыт привязки UI скриптов, которые обеспечивают визуализацию и анимацию страниц сайта</li>
              <li>постоянно совершенствуюсь и интересуюсь последними тенденциями в веб-разработке.</li>
            </ul>
          </div>
          <NuxtLink
            to="/services"
            class="inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 mt-8 rounded"
          >
            Заказать сайт
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AboutSidebar from '~/components/AboutSidebar.vue'
export default {
  components: { AboutSidebar },
  data () {
    return {}
  },
  mounted () {},
  methods: {},
}
</script>

<style>

</style>
