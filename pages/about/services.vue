<template>
  <div class="flex h-screen antialiased w-full">

    <about-sidebar />

    <main class="flex-1">
      <div
        class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10"
      >
        <div class="bg-white p-10 shadow min-h-full">
          <h3 class="text-2xl mb-4">
            Предоставляемый сервис:
          </h3>
          <div class="content">
            <ul>
              <li>Верстка современного или переверстка существующего дизайна</li>
              <li>Исправление верстки страниц и существующем исходном коде, внедрение новых технологий</li>
              <li>Адаптивная верстка</li>
              <li>Доработка и поддержка сайтов</li>
              <li>Разработка и сопровождение сайта и интернет-магазина</li>
              <li>Разработка парсеров</li>
            </ul>
            <h4 class="my-4 font-medium">Проекты любой сложности:</h4>
            <ul>
              <li>сайт-визитка</li>
              <li>корпоративный сайт</li>
              <li>интернет-магазин</li>
              <li>landing page (лендинг)</li>
              <li>SPA - single page application (одностраничное приложение)</li>
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
    return {
      page: 'about',
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>

</style>
