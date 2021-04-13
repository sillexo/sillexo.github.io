<template>
  <div class="flex h-screen antialiased w-full">

    <about-sidebar />

    <!-- Main content -->
    <main class="flex-1">
      <div
        class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10"
      >
        <div class="bg-white p-10 shadow min-h-full">
          <h2>«Если вас нет в Интернете, то вас нет в бизнесе»<small>Билл Гейтс</small></h2>
          <h3 class="text-2xl mb-4">Меня зовут Роман. Я Full-Stack разработчик.</h3>
          <p>Веб программированием занимаюсь с 2012 года. За это время разработал не мало сайтов.</p>
          <p>Обладаю опытом разработки сайта с нуля от верстки (включая адаптивную верстку)<br> до
            современных одностраничных веб-приложений.</p>
          <p class="mb-4">Создаю сайты любой сложности, имею знание и опыт в продвижении, внутренней и внешней оптимизация
            сайтов.</p>
          <p>Я не просто люблю программирование, я не могу жить без него.<br> Я буквально "Живу своей работой!".</p>
          <p>Я никогда не стою на месте, постоянно изучаю новые, современные веб-технологии, <br>чтобы развиваться и
            улучшать свои навыки.</p>
          <NuxtLink
            to="/services"
            class="inline-block border-2 border-blue-500 px-5 py-1.5 text-blue-500 my-8 rounded"
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
      // tags: [
      //   'php', 'laravel', 'codeigniter', 'api', 'spa', 'landing', 'html5', 'js', 'ajax', 'vuejs', 'nuxtjs', 'jquery', 'css3', 'sass', 'bootstrap', 'tailwindcss',
      // ],
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>

</style>
