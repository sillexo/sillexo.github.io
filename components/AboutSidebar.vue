<template>
  <nav
    aria-label="Main"
    class="sub-nav w-64 px-2 py-4 bg-white overflow-y-hidden hover:overflow-y-auto"
  >
    <div>
      <h1 class="flex justify-center font-medium text-xl mb-6">
        Балуев Роман
      </h1>
      <div class="flex justify-center mb-6">
        <NuxtLink
          to="/"
        >
          <img src="/9e3607b72b33.jpg" alt="" class="h-32 w-32 rounded-full">
        </NuxtLink>
      </div>
      <h2 class="flex justify-center font-medium text-md mb-4 text-gray-700">
        Full-Stack разработчик
      </h2>
    </div>
    <NuxtLink
      to="/"
      class="flex items-center p-2 text-gray-700 transition-colors rounded-md hover:text-blue-500"
      role="button"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <span class="ml-2 text-sm">Обо мне</span>
    </NuxtLink>
    <NuxtLink
      to="/about/skills"
      class="flex items-center p-2 text-gray-700 transition-colors rounded-md hover:text-blue-500"
      role="button"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <span class="ml-2 text-sm">Мои знания</span>
    </NuxtLink>
    <NuxtLink
      to="/about/stack"
      class="flex items-center p-2 text-gray-700 transition-colors rounded-md hover:text-blue-500"
      role="button"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <span class="ml-2 text-sm">Используемый стек</span>
    </NuxtLink>
    <NuxtLink
      to="/about/services"
      class="flex items-center p-2 text-gray-700 transition-colors rounded-md hover:text-blue-500"
      role="button"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <span class="ml-2 text-sm">Предоставляемый сервис</span>
    </NuxtLink>

    <div class="mt-16 space-x-1 space-y-2">
      <div
        v-for="tag in tags"
        :key="tag"
        class="text-xs inline-flex items-center font-bold leading-sm px-2.5 py-1 bg-blue-100 text-blue-500 rounded-full"
      >
        {{ tag }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      tags: [
        'php', 'laravel', 'codeigniter', 'api', 'spa', 'landing', 'html5', 'js', 'ajax', 'vuejs', 'nuxtjs', 'jquery', 'css3', 'sass', 'bootstrap', 'tailwindcss',
      ],
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>
  .sub-nav .nuxt-link-exact-active {
    color: rgba(59, 130, 246, 1);
  }
</style>
