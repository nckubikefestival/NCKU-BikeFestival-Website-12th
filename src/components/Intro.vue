<template lang="pug">
  div(class="intro_page")
    div(class="intro_background")
    p(class="intro_title") 牽起單車 夢想啟程
    div(class="intro_activity_counter")
      section(class="intro_activity_number_section")
        span(id="intro_activity_number_1")
        span(id="intro_activity_number_2")
    div(class="intro_layout")
      section(class="intro_counter_section")
        div(class="intro_countdown_number")
          span(id="intro_number_1")
          span(id="intro_number_2")
        div(class="intro_countdown_dot")
          span(id="intro_dot_1")
          span(id="intro_dot_2")
          span(id="intro_dot_3")
      section(class="intro_wheel_section")
        span(class="intro_wheel_decoration_1")
        router-link(to="/about" tag="span" class="intro_wheel")
        span(class="intro_wheel_decoration_2")
      section(class="intro_logo_section")
      div(class="intro_menu")
        ul
          router-link(tag="li" v-bind:to="'/' + urlText[index]" v-for="(text, index) of menuText" v-bind:key="text" v-bind:style="{'backgroundImage': 'url(' + require(`../assets/intro/menu_${index + 1}.svg`) + ')'}")
            p {{text}}
</template>

<script>
export default {
  name: 'IntroPage',
  data: function () {
    return {
      menuText: ['最新消息', '家長專欄', '活動摘要', 'APP 介紹', '科系介紹', '我要報名', '贊助名單'],
      urlText: ['news', 'parent', 'activity', 'app', 'department', 'sign-up', 'sponsor'],
      numberDom1: null,
      numberDom2: null,
      numberDom3: null,
      numberDom4: null
    }
  },
  mounted: function () {
    setInterval(this.timeCounter, 1000)
    this.numberDom1 = document.querySelector('#intro_number_1')
    this.numberDom2 = document.querySelector('#intro_number_2')
    this.numberDom3 = document.querySelector('#intro_activity_number_1')
    this.numberDom4 = document.querySelector('#intro_activity_number_2')
    this.timeCounter()
  },
  computed: {
  },
  methods: {
    timeCounter: function () {
      const timeStr1 = '2019/1/26 00:00'
      const timeStr2 = '2019/3/2 00:00'
      const startDate = new Date()
      let endDate = new Date(timeStr1)
      let spantime = (endDate - startDate) / 1000
      let day = Math.floor(spantime / (24 * 3600))
      if (spantime > 0) {
        let number = require(`../assets/number_${Math.floor(day / 10)}.svg`)
        this.numberDom1.style.setProperty('background-image', `url(${number})`)
        number = require(`../assets/number_${Math.floor(day % 10)}.svg`)
        this.numberDom2.style.setProperty('background-image', `url(${number})`)
      }
      endDate = new Date(timeStr2)
      spantime = (endDate - startDate) / 1000
      day = Math.floor(spantime / (24 * 3600))
      if (spantime > 0) {
        let number = require(`../assets/number_${Math.floor(day / 10)}.svg`)
        this.numberDom3.style.setProperty('background-image', `url(${number})`)
        number = require(`../assets/number_${Math.floor(day % 10)}.svg`)
        this.numberDom4.style.setProperty('background-image', `url(${number})`)
      }
    },
    checkAvailable: function (index) {
      if (index === 2 || index === 3) {
        alert('敬請期待')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #intro_dot_1 {
    animation: dot-loading 1.2s ease-in-out;
    animation-iteration-count: infinite;
  }
  #intro_dot_2 {
    animation: dot-loading 1.2s ease-in-out;
    animation-delay: 0.4s;
    animation-iteration-count: infinite;
  }
  #intro_dot_3 {
    animation: dot-loading 1.2s ease-in-out;
    animation-delay: 0.8s;
    animation-iteration-count: infinite;
  }

  .list-enter-active, .list-leave-active {
  transition: all 10s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  /*
    mobile layout css
  */
  @media only screen and (max-width: 551px) {
    .intro_page {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      background: white;
      overflow: hidden;
    }

    .intro_background {
      position: absolute;
      top: 0;
      top: -5vh;
      background: #dad6b2;
      height: 61vh;
      width: 100vw;
      transform: skewY(-5deg);
    }
    .intro_title {
      position: absolute;
      z-index: 20;
      left: 8vw;
      top: 5vh;
      display: inline-block;
      background: #942323;
      border-radius: 50px;
      text-align: center;
      color: white;
      padding: 6vw 10vw 6vw 10vw;
      font-size: 5vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 2vw;
      transform: rotateZ(-5deg);
    }

    .intro_activity_counter {
      display: none;
    }

    .intro_layout {
      display: grid;
      grid-template-columns: 100vw;
      grid-template-rows: 10vh 3fr 1.5fr;
      grid-template-areas: "empty"
        "logo"
        "menu";
      grid-gap: 12vw;
      align-items: center;
      justify-items: center;
      width: 100vw;
      height: 100vh;
    }

    .intro_counter_section {
      display: none;
    }
    .intro_wheel_section {
      display: none;
    }
    .intro_logo_section {
      grid-area: logo;
      justify-self: center;
      align-self: center;

      width: 61vw;
      height: 55vw;
      background-image: url("../assets/logo.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 5;
    }

    .intro_menu {
      grid-area: menu;
      align-self: center;

      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      justify-items: center;
      align-items: center;

      z-index: 5;

      padding: 5vw;
      box-sizing: border-box;

      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-content: center;
        align-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;
        li {
          justify-self: center;
          align-self: center;

          display: inline-block;
          width: 20vw;
          height: 20vw;
          margin: 2vw 0;
          box-sizing: border-box;

          background-repeat: no-repeat;
          background-position: 50% 0%;
          background-size: 70% 70%;

          border: 0px solid #942323;
          border-radius: 1vw;
          box-sizing: content-box;

          transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;

          cursor: pointer;
          &:hover {
            border-width: 0.15vw;
            border-radius: 1.7vw;
          }
          &:active {
            filter: brightness(50%);
          }

          p {
            display: inline-block;
            font-size: 4vw;
            line-height: 4vw;
            margin-top: 15vw;
            color: #942323;
          }
        }
      }
    }

  }
  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .intro_page {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
    }
    .intro_background {
      position: absolute;
      z-index: -1;
      top: 0;
      left: -10vw;
      background: #dad6b2;
      height: 100vh;
      width: 60vw;
      transform: skewX(-5deg);
    }
    .intro_title {
      position: absolute;
      z-index: 20;
      left: 8vw;
      top: 12vh;
      display: inline-block;
      background: #942323;
      border-radius: 50px;
      text-align: center;
      color: white;
      padding: 1vw 2vw 1vw 2vw;
      font-size: 1.2vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 1.5vw;
      transform: rotateZ(-5deg);
    }

    .intro_activity_counter {
      position: absolute;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "."
        "."
        "number";
      justify-content: center;
      align-content: center;
      align-items: center;

      z-index: 20;
      right: 2vw;
      margin: auto 0;

      background-image: url('../assets/intro/activity_countdown_back.svg');
      background-repeat: no-repeat;
      background-size: 68% 68%;
      background-position: 5% 0%;

      width: 3.5vw;
      height: 15vw;

      .intro_activity_number_section {
        grid-area: number;

        width: 100%;
        height: 100%;

        span {
          display: inline-block;
          width: 46.75%;
          height: 55%;
          background-image: url("../assets/number_0.svg");
          background-size: 125% 125%;
          background-position: 50% 50%;
        }
      }
    }
    .intro_layout {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1.5fr;
      grid-template-rows: 1fr 2fr 1.5fr;
      grid-template-areas: "empty empty empty"
        "time wheel logo"
        "menu menu menu";
      grid-gap: 5vw;
      align-items: center;
      justify-items: center;
      width: 100vw;
      height: 100vh;
    }

    .intro_counter_section {
      grid-area: time;
      justify-self: flex-end;
      align-self: center;

      display: grid;
      grid-template-columns: 1.2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "number dot";
      background-image: url("../assets/countdown.svg");
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 85% 68%;

      width: 20vw;
      height: 20vw;

      .intro_countdown_number {
        grid-area: number;

        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: flex-end;
        span {
          display: inline-block;
          width: 46.75%;
          height: 85%;
          background-image: url("../assets/number_0.svg");
          background-size: 125% 125%;
          background-position: 50% 50%;
        }
      }

      .intro_countdown_dot {
        grid-area: dot;

        display: flex;
        justify-items: flex-end;
        justify-content: flex-end;
        align-items: flex-end;
        span {
          width: 1vw;
          height: 1vw;
          margin: 0.8vw;
          margin-bottom: 5vw;
          background-image: url("../assets/dot.svg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
    .intro_wheel_section {
      grid-area: wheel;
      align-self: center;

      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;

      .intro_wheel {
        display: inline-block;
        width: 12.5vw;
        height: 12.5vw;
        background-image: url("../assets/intro/wheel.svg");
        background-position: 50% 50%;
        background-size: 100% 100%;
        cursor: pointer;
        transition: transform .3s ease, filter .3s ease;
        animation-duration: 4s;
        animation-name: roll;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        &:hover {
        filter: brightness(90%);
        }
        &:active {
          filter: brightness(20%);
        }
      }

      .intro_wheel_decoration_1 {
        display: inline-block;
        width: 5.5vw;
        height: 6.5vw;
        background-image: url("../assets/decoration_top.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-bottom: 30vh;

      }
      .intro_wheel_decoration_2 {
        display: inline-block;
        width: 5vw;
        height: 5vw;
        background-image: url("../assets/decoration_bottom.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: 30vh;
      }
    }
    .intro_logo_section {
      grid-area: logo;
      justify-self: flex-start;
      align-self: center;

      width: 22.5vw;
      height: 20vw;
      background-image: url("../assets/logo.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .intro_menu {
      grid-area: menu;
      align-self: flex-start;

      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      height: 80%;
      justify-content: center;
      justify-items: center;
      align-items: center;

      z-index: 5;

      ul {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
          display: inline-block;
          width: 10vw;
          height: 10vw;
          margin: 0 1vw;
          box-sizing: border-box;

          background-repeat: no-repeat;
          background-position: 50% 0%;
          background-size: 75% 75%;
          &:last-child {
            background-size: 60% 60%;
            background-position: 50% 15%;
          }

          border: 0px solid #942323;
          border-radius: 0px;
          box-sizing: content-box;

          transition: filter .3s ease, border-width .2s ease, border-radius .2s ease;

          cursor: pointer;
          &:hover {
            border-width: 0.2vw;
            border-radius: 1vw;
          }
          &:active {
            filter: brightness(50%);
          }
          p {
            margin-top: 8vw;
            font-size: 1.2vw;
            color: #942323;
            font-weight: 500;
          }
        }
      }
    }
  }

</style>
