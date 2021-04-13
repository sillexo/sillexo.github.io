<template>
  <div class="flex h-screen antialiased w-full">
    <nav
      aria-label="Main"
      class="sub-nav w-64 px-2 py-4 bg-white overflow-y-hidden hover:overflow-y-auto"
    >
      <template v-for="(service, key) in services">
        <NuxtLink
          v-if="service.active"
          :key="key"
          :to="`/services/${service.slug}`"
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
          class="flex items-center p-2 text-gray-700 transition-colors rounded-md hover:text-blue-500"
        >
          <span class="ml-2 text-sm">{{ service.title }}</span>
        </NuxtLink>
      </template>

    </nav>
    <main class="flex-1">
      <div class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10">
        <div class="bg-white p-10 shadow min-h-full">
          <h1 class="font-medium text-xl mb-6">
            Услуги
            <div class="mx-auto lg:mx-0 w-1/5 pt-3 border-b-2 border-blue-500" />
          </h1>
          <NuxtChild />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // async asyncData() {
  //   const mountains = await fetch(
  //     'https://api.nuxtjs.dev/mountains'
  //   ).then((res) => res.json())

  //   return { mountains }
  // },
  data () {
    return {
      services: [
        {
          title: 'Поддержка сайта',
          slug: 'podderghka-sajta',
          link: '',
          icon: '',
          price: '500 руб/час',
          active: true,
        },
        {
          title: 'Верстка готового шаблона',
          slug: 'verstka-gotovogo-shablona',
          link: '',
          icon: '',
          price: 5900,
          active: true,
        },
        {
          title: 'Разработка одностраничного сайта',
          slug: 'razrabotka-odnostranichnogo-sajta',
          link: '',
          icon: '',
          price: 15990,
          active: true,
        },
        {
          title: 'Создание сайта на основе готового шаблона',
          slug: 'sozdanie-sajta-na-osnove-gotovogo-shablona',
          link: '',
          icon: '',
          price: null,
          active: true,
        },
        {
          title: 'Разработка сайта визитки',
          slug: 'razrabotka-sajta-vizitki',
          link: '',
          icon: '',
          price: 9990,
          active: true,
        },
        {
          title: 'Разработка сайта портфолио',
          slug: 'razrabotka-sajta-portfolio',
          link: '',
          icon: '',
          price: 15990,
          active: true,
        },
        {
          title: 'Разработка интернет магазина',
          slug: 'razrabotka-internet-magazina',
          link: '',
          icon: '',
          price: 35990,
          active: true,
        },
        {
          title: 'Разработка корпоративного сайта',
          slug: 'razrabotka-korporativnogo-sajta',
          link: '',
          icon: '',
          price: 29990,
          active: true,
        },
        {
          title: 'Разработка веб-приложения',
          slug: 'razrabotka-veb-prilozheniya',
          link: '',
          icon: '',
          price: null,
          active: true,
        },
        {
          title: 'Разработка парсера',
          slug: 'razrabotka-parsera',
          link: '',
          icon: '',
          price: 5900,
          active: true,
        },
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

  .svg-background {
    /* background-color: #efefef;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23efefef' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23eaeaea' href='%23s' y='2'/%3E%3Cuse fill='%23eaeaea' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23e5e5e5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23e5e5e5' href='%23s'/%3E%3Cuse fill='%23e1e1e1' href='%23s' x='2'/%3E%3Cuse fill='%23e1e1e1' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23dcdcdc'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23dcdcdc'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23d7d7d7'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23d2d2d2'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23a7a7a7'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23a7a7a7'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23a7a7a7'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */

    /* background-color: #bfbfbf;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23bfbfbf'/%3E%3Cstop offset='1' stop-color='%23c9c9c9'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */

    /* background-color: #aaaaaa;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(135,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23aaaaaa'/%3E%3Cstop offset='1' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(218,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23eeeeee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eeeeee' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(360,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23eeeeee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eeeeee' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg %3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */

    /* background-color: #aaaaaa;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(161,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23aaaaaa'/%3E%3Cstop offset='1' stop-color='%233b82f6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(218,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23eeeeee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eeeeee' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(360,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23eeeeee' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23eeeeee' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg %3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */

    /* background-color: #999999;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ebebeb'/%3E%3Cstop offset='1' stop-color='%23999999'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */

    /* background-color: #999999;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23a5a5a5' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23b1b1b1' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23bdbdbd' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23c9c9c9' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23d5d5d5' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23e1e1e1' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23EEE' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; */
  }
</style>
