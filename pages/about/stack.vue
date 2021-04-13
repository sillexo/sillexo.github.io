<template>
  <div class="flex h-screen antialiased w-full">

    <about-sidebar />

    <main class="flex-1">
      <div
        class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10"
      >
        <div class="bg-white p-10 shadow min-h-full">
          <h3 class="text-2xl">
            Основной стек технологий:
          </h3>
          <ul class="flex flex-wrap">
            <li v-for="(technology, key) in technologies" :key="key" class="flex h-32 items-center justify-center w-32 bg-white m-8">
              <img :src="'/technologies/' + technology.icon" class="h-full" :alt="technology.title" :title="technology.title">
            </li>
          </ul>
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
    return {
      page: 'about',
      technologies: [
        {
          title: 'Laravel',
          icon: 'laravel.svg',
        },
        {
          title: 'Vue.js',
          icon: 'vuejs.svg',
        },
        {
          title: 'Mysql',
          icon: 'mysql.svg',
        },
        {
          title: 'html',
          icon: 'html.svg',
        },
        {
          title: 'Sass',
          icon: 'sass.svg',
        },
        {
          title: 'npm',
          icon: 'npm.svg',
        },
        {
          title: 'webpack',
          icon: 'webpack.svg',
        },
        {
          title: 'git',
          icon: 'git.svg',
        },
      ],
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>

</style>
