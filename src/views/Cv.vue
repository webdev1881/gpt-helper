<template>
  <div class="cv">

    <div class="header">
      <div class="container">
        <div class="header--content">
          <div class="name">
            <input class="targ" type="text" placeholder="Цель, область" v-model="targ" />
            <input class="qty" type="text" placeholder="рекомендую не более 10" v-model="qty" />
          </div>

          <div class="info">
            <!-- <div class="targ"> {{ "targ" | localize }}</div> -->
            <button :disabled="!targ" class="gen2" @click="open"> Сгенерировать </button>

          </div>

          <div class="lang">
            <!-- <router-link :to="'/'" replace>Рус</router-link> -->
            <input v-model="locate" @click="changeLanguage" type="radio" value="en" id="en"
              :disabled="locate === 'en'" />
            <label class="lang__item" for="en" :class="[locate === 'en' ? 'active' : null]">
              EN
            </label>
            <span class="lang__separator">|</span>

            <!-- <router-link :to="'/ua'" > -->

            <input v-model="locate" @click="changeLanguage" type="radio" value="ua" id="ua"
              :disabled="locate === 'ua'" />
            <label class="lang__item" for="ua" :class="[locate === 'ua' ? 'active' : null]">
              UA
            </label>
            <!-- </router-link> -->

          </div>
        </div>
      </div>
    </div>


    <div v-if="isasp" class="header">
      <div class="container">
        <div class="header--content">
          <div class="name">
            <input class="targ" type="text" placeholder="Ціль, область" v-model="asp" />
          </div>

          <div class="info">
            <!-- <div class="targ"> {{ "targ" | localize }}</div> -->
            <!-- <div :disabled="targ" class="gen" @click="open"> Згенерувати 10 аспектів </div> -->
            <button :disabled="!asp" class="gen2" @click="openAsp"> Згенерувати 10 аспектів </button>
          </div>

        </div>
      </div>
    </div>




    <div class="main">
      <div class="container">
        <div class="wrap">

          <!-- {{ copied | localize }} -->

          <div title="Copy" v-if="isgen" class="ans" ref="text" @click="copyText">
            <div class="grid-cols-1 grid gap-2.5 [&amp;_>_*]:min-w-0">
              <p class="whitespace-pre-wrap break-words">Розкажи мені про найбільш специфічні та вузькі поняття, методи,
                 ноу-хау та підходи в області <b>{{ targ }}</b> . Які
                маловідомі та спеціалізовані аспекти існують в <b>{{ targ }}</b> ?"</p>
              <p class="whitespace-pre-wrap break-words"> Відповідай максимально коротко </p>
              <p class="whitespace-pre-wrap break-words"> Формат видачі відповіді: </p>
              <ul class="-mt-1 [li>&amp;]:mt-2 list-disc space-y-2 pl-8" depth="0">
                <li class="whitespace-normal break-words" index="0">що це</li>
                <li class="whitespace-normal break-words" index="1">застосування</li>
                <li class="whitespace-normal break-words" index="2">реальний кейс використання з реального світу</li>
              </ul>
              <p class="whitespace-pre-wrap break-words"> Кількість пунктів у списку: <b>{{ qty }}</b> </p>
            </div>
          </div>

          {{ browserApi }}



        </div>
      </div>
    </div>


    <div class="container">
      <div class="wrap">


        <table v-if="isMet" class="bg-bg-100 min-w-full border-separate border-spacing-0 text-sm leading-[1.88888]">
          <thead class="border-b-border-100/50 border-b-[0.5px] text-left">
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">
              <!-- <th
                class="text-text-000 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] font-400 px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                №</th> -->
              <th
                class="text-text-000 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] font-400 px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Тип запиту</th>
              <th
                class="text-text-000 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] font-400 px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Шаблон промпту</th>
            </tr>
          </thead>
          <tbody>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Огляд</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Зроби огляд <b> {{ asp }} </b> в контексті <b> {{ targ }} </b>. Які
                приклади успішного застосування та найкращі практики існують?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">
 
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Детальний аналіз</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Створи детальний аналіз <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>. Як цей підхід використовується, які приклади успішного застосування та найкращі практики можна
                застосувати?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">
 
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Звіт</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Склади звіт по <b> {{ asp }} </b> в контексті <b> {{ targ }} </b>.
                Які успішні кейси та найкращі практики існують?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Детальне пояснення</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Підготуй детальне пояснення <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>. Які приклади успішного застосування та найкращі практики можна використовувати?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Рекомендації</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Сформулюй рекомендації щодо застосування <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>. Які успішні приклади та найкращі практики існують?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Принцип роботи</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Поясни, як працює <b> {{ asp }} </b> в контексті <b> {{ targ }} </b>.
                Які приклади успішного застосування та найкращі практики існують?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Детальний опис</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Можеш дати детальний опис <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>? Як його використовують, приклади успішних кейсів та найкращі практики?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Аналіз використання</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Проаналізуй використання <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>. Які приклади успішного застосування та найкращі практики існують?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Приклади застосування</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Наведи приклади успішного застосування <b> {{ asp }} </b> в контексті <b> {{  targ }} </b>. Як цей підхід використовується і які найкращі практики можна застосувати?</td>
            </tr>
            <tr class="[tbody>&amp;]:odd:bg-bg-500/10">

              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Опис застосування</td>
              <td
                class="border-t-border-100/50 [&amp;:not(:first-child)]:-x-[hsla(var(--border-100) / 0.5)] border-t-[0.5px] px-2 [&amp;:not(:first-child)]:border-l-[0.5px]">
                Опиши застосування <b> {{ asp }} </b> в контексті <b> {{ targ }} </b>.
                Які приклади успішного використання та найкращі практики існують?</td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>













  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "cv",
  data: () => ({
    locate: null,
    targ: "",
    qty: 5,
    asp: "",
    copied: 'copied',
    browserApi: null,
    isgen: false,
    isasp: false,
    isMet: false,
  }),
  methods: {

    copyText() {
      // Получаем весь текстовый контент из div, включая вложенные элементы
      const text = this.$el.querySelector('.ans').textContent;

      // Создаем временный элемент textarea
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', ''); // Предотвращаем мобильную клавиатуру
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';

      document.body.appendChild(textarea);

      // Выделяем и копируем текст
      textarea.select();

      console.log(document.execCommand('copy'))
      // document.execCommand('copy');



      // Удаляем временный элемент
      document.body.removeChild(textarea);
      this.$toast.open({
        message: this.$options.filters.localize(this.copied),
        type: "success",
        duration: 1500,
        dismissible: true,
        position: 'top-right'
      })

      this.isasp = true
      // this.isgen = false


    },

    handleCopy() {
      // console.log( this.$refs.text.innerHTML )
      //  this.$refs.text.select();
      //  document.execCommand('copy');
    },

    open() {
      this.isgen = true
      this.isasp = false
    },

    openAsp() {
      // this.isgen = false
      this.isMet = true
    },



    generate() {
      this.copied = !this.copied
    },
    changeLanguage(e) {
      let event = e.target.value;
      this.$store.dispatch("CHANGE_LANGUAGE", event);

      console.log(this.locate)
      if (event === "ua") {
        this.$router.push(`/ua`)
      } else {
        this.$router.push(`/`)
      }
    },
  },

  watch: {
    targ: function (newName) {
      if (newName) { this.targ = newName.charAt(0).toUpperCase() + newName.slice(1) }
    }
  },

  computed: { ...mapGetters(["locale"]) },

  async mounted() {
    if (this.$route.name === "ua") {
      this.locate = "ua"
      this.$store.dispatch("CHANGE_LANGUAGE", "ua");
    }
    this.$store.dispatch("LOAD_LANGUAGE");
    this.locate = this.$store.getters.locale;


    // this.browserApi = navigator
  },
};
</script>



<style lang='scss' scoped>
.ans {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 15px;
  cursor: pointer;
}



.toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  z-index: 2;
  color: #fff;
  background-color: #000;
  font-size: 1.5rem;
  // display: none;
  transition: all .5s ease-in-out;
}

.gen {
  cursor: pointer;
  background-color: black;
  padding: 15px;
  border-radius: 2px;
  font-size: 16px;

  &:hover {
    color: black;
    background-color: #fff;
  }
}

.gen2 {
  cursor: pointer;
  color: black;
  background-color: #fff;
  padding: 15px;
  border-radius: 2px;
  font-size: 16px;

  &:hover {
    color: #fff;
    background-color: black;
  }
}

.targ {
  height: 30px;
  padding: 0 5px;
  margin-bottom: 10px;
}

.qty {
  height: 30px;
  padding: 0 5px;
}





.container {
  width: 100%;
  height: 100%;
  max-width: 85%;
  display: flex;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  //   background-color: rgb(119, 119, 236);
}

.cv {
  // width: 100vw;
  // margin: 0 auto;
  // min-width: 460px;
  position: relative;
  // margin-bottom: 140px;
}

.j_b {
  list-style: none;
  margin-left: 14px;
}

.j_b_m {
  margin-bottom: 7px;
}

.header {
  width: 100%;
  max-width: 960px;
  // min-width: 460px;
  display: flex;
  justify-content: center;
  margin: 15px auto 25px;
  // background-color: var(--prim);
  background: #331239;
  padding: 12px 0;
  // border-radius: 65px 0px 0px 65px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

  position: sticky;
  top: -2px;
  overflow: visible;
  // transform: translate(-50%, 0%);
}

.header--content {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  color: white;

  .name {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin-right: 30px;

    .title {
      font-size: 1.375rem;
      font-weight: 600;
    }

    .posada {
      font-size: 1rem;
      margin-top: 5px;
    }
  }

  .info {
    font-size: 0.813rem;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
  }
}

.main {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.wrap {
  display: flex;
  flex-direction: column;
}

.summary {
  text-align: justify;
  margin-bottom: 5px;
  // text-indent: 12px;
  // font-size: 15px;
  // font-style: italic;
  // font-weight: 600;
}

.block {
  margin-top: 30px;

  .title {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    .name {
      font-size: 21px;
      font-weight: 600;
      margin-right: 15px;
      text-wrap: nowrap;
    }

    .line {
      width: 100%;
      height: 3px;
      background-color: var(--prim);
      margin-left: 10px;
    }
  }
}

.skills {
  display: flex;
  flex-direction: column;
  padding-left: 25px;

  .skil {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;

    // text-wrap: nowrap;
    .nam {
      min-width: 215px;
      margin-right: 25px;
      font-weight: 600;
    }
  }
}

.job-title {
  font-weight: bold;
  margin-top: 15px;
}

.job-details {
  margin-top: 0;
}

.date {
  float: right;
  font-style: italic;
}

.jb {
  padding: 4px;
}

.port {
  // padding-bottom: 90px;
  margin-bottom: 30px;
}

.port_details {
  color: var(--prim);
  width: 100%;
  padding: 4px 0;
  margin-bottom: 5px;
  margin-left: 25px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;

  .blank {
    margin-left: 5px;
    margin-top: 3px;
    width: 15px;
    height: 15px;
    object-fit: cover;
  }
}

.experiance {
  display: flex;
  width: 100%;
  justify-content: space-around;

  .ex_item {
    padding: 5px;
  }
}

#ua,
#en {
  display: none;
}

.active {
  // font-weight: 600 !important;
  color: white !important;
}

.lang {
  // position: absolute;
  top: 20px;
  right: 0;
  display: flex;
  margin-right: 10px;

  .lang__item {
    font-size: 15px;
    font-weight: 400;
    border: none;
    padding: 0 2px;
    background: inherit;
    color: #8387a1;
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
  }
}

.contact {
  display: none;
}

@media screen and (max-width: 768px) {
  .header {
    margin: 0px auto 25px;
  }

  .header--content {
    padding-left: 15px;

    .name {
      width: 100%;
      margin-bottom: 15px;

      .title {
        font-size: 1.15rem;

      }

      .posada {
        font-size: 16px;
        margin-top: 0px;
      }
    }
  }

  .experiance {
    flex-direction: column;
  }

  .contact {
    display: block;
  }

  .contact2 {
    display: none;
  }
}

@media screen and (max-width: 468px) {
  .lang {
    top: auto;
    // right: 50px;
  }

}
</style>