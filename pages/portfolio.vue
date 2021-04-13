<template>
  <div class="flex h-screen antialiased w-full">
    <main class="flex-1">
      <div class="h-full min-h-screen overflow-x-hidden overflow-y-auto px-20 py-10">
        <div class="bg-white p-10 shadow min-h-full">
          <h1 class="font-medium text-xl mb-6">
            Мои работы
            <div class="mx-auto lg:mx-0 w-1/5 pt-3 border-b-2 border-blue-500" />
          </h1>
          <p>Здесь хранятся работы, с которыми вы можете ознакомиться, перейти по ссылке и изучить!</p>
          <p class="text-gray-600 text-sm">* Если вы перешли на сайт, а он не работает, значит владельцы сайта перешли на другой домен или закрыли проект. В таких случаях вы можете посмотреть скриншоты.</p>

          <div class="flex flex-wrap">
            <div
              v-for="(item, name) in portfolio"
              :key="name"
              class=" flex-col w-1/2 md:w-2/3 lg:w-1/2 mt-10 p-3"
            >
              <div class="w-full bg-white overflow-hidden relative">
                <div class="block overflow-hidden">
                  <div
                    class="block bg-contain bg-no-repeat bg-center w-full h-60"
                    :alt="name"
                    :style="'background-image: url('+ item.images[0] +');'"
                  />
                </div>
                <CoolLightBox
                  :items="item.images"
                  :index="item.index"
                  :effect="'fade'"
                  @close="item.index = null"
                />
                <div class="p-4">
                  <div class="flex items-center justify-between mb-4">
                    <a :href="item.website" target="_blank" class="font-medium">{{ name }}</a>
                    <ul class="flex">
                      <li v-for="(technology, key) in item.technologies" :key="key">
                        <img
                          :src="'/technologies/'+ technology +'.svg'"
                          :alt="technology"
                          :title="technology"
                          class="ml-4 h-8 w-8"
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="flex justify-between items-start">
                    <div class="w-8/12">
                      <span class="block text-sm text-gray-500">{{ item.description }}</span>
                    </div>
                    <div class="flex justify-end">
                      <a
                        href="javascript:void(0);"
                        class="inline-flex items-center text-grey-darker ml-3"
                        @click="item.index = 0"
                      >
                        <span class="text-sm font-semibold">Смотреть</span>
                      </a>
                      <a
                        v-if="item.website"
                        :href="item.website"
                        target="_blank"
                        class="inline-flex items-center text-grey-darker ml-3"
                      >
                        <span class="text-sm font-semibold">Перейти</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data () {
    return {
      portfolio: {
        'arquitentica.com': {
          website: 'https://arquitentica.com',
          description: 'Корпоративный веб-сайт компании "Arquitentica"',
          technologies: [
            'laravel', 'sass', 'js', 'webpack',
          ],
          images: [
            '/projects/arquitentica.com.jpg',
            '/projects/arquitentica.com1.jpg',
            '/projects/arquitentica.com2.jpg',
            '/projects/arquitentica.com3.jpg',
            '/projects/arquitentica.com4.jpg',
            '/projects/arquitentica.com5.jpg',
          ],
          index: null,
        },
        'naturstein-rubas.de': {
          website: 'https://naturstein-rubas.de/',
          description: 'Корпоративный веб-сайт немецкой компании памятников "Naturstein Rubas"',
          technologies: [
            'laravel', 'sass', 'vuejs', 'webpack',
          ],
          images: [
            '/projects/naturstein-rubas.de.jpg',
          ],
          index: null,
        },
        furnicom: {
          website: 'http://dev.sillexlab.ru/vipbalconies/',
          description: 'Верстка макета "furnicom"',
          technologies: [
            'sass', 'jquery', 'gulp',
          ],
          images: [
            '/projects/furnicom.jpg',
          ],
          index: null,
        },
        'chisto-bistro': {
          website: 'http://dev.sillexlab.ru/chisto-bistro/',
          description: 'Верстка макета чистящего средства "Чисто-Быстро"',
          technologies: [
            'sass', 'jquery', 'gulp',
          ],
          images: [
            '/projects/chisto-bistro.jpg',
          ],
          index: null,
        },
        'photouristic.com': {
          website: 'https://photouristic.com',
          description: 'Photouristic - сервис онлайн бронирования фотографов в различных точках мира',
          technologies: [
            'laravel', 'sass', 'vuejs', 'webpack',
          ],
          images: [
            '/projects/photouristic.com.jpg',
            '/projects/photouristic.com1.jpg',
          ],
          index: null,
        },
        'depro.pro': {
          website: 'https://depro.pro/',
          description: 'Корпоративный веб-сайт компании "Mekmarine"',
          technologies: [
            'laravel', 'sass', 'jquery', 'gulp',
          ],
          images: [
            '/projects/depro.pro.jpg',
            '/projects/full/depro.pro.jpg',
          ],
          index: null,
        },
        'mekmarine.com': {
          website: 'https://mekmarine.com',
          description: 'Корпоративный веб-сайт компании "Mekmarine" Комплексное снабжение судов',
          technologies: [
            'codeigniter', 'css', 'jquery', 'gulp',
          ],
          images: [
            '/projects/mekmarine.com.jpg',
          ],
          index: null,
        },
        'jadejardi.com': {
          website: 'https://jadejardi.com/',
          description: 'Корпоративный веб-сайт испанской компании JadeJardi. Три цветка Нефритовой лозы в логотипе соответствуют трем направлениям деятельности компании JadeJardi: саду, дереву и камню.',
          technologies: [
            'codeigniter', 'sass', 'jquery', 'gulp',
          ],
          images: [
            '/projects/jadejardi.com.jpg',
          ],
          index: null,
        },
        'kovkoff.ru': {
          website: 'http://kovkoff.ru',
          description: 'Лендинг для мастеров художественной ковки',
          technologies: [
            'codeigniter', 'less', 'jquery',
          ],
          images: [
            '/projects/kovkoff.ru.jpg',
          ],
          index: null,
        },
        'bus-perm.ru': {
          website: 'http://bus-perm.ru',
          description: 'Веб-сайт для транспортной компании "Микроавтобус Экспресс"',
          technologies: [
            'codeigniter', 'less', 'jquery',
          ],
          images: [
            '/projects/bus-perm.ru.jpg',
          ],
          index: null,
        },
      },
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>

</style>
