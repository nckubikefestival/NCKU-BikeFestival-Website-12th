<template lang="pug">
  div(class="intro_page")
    div(class="intro_background")
    p(class="intro_title") 牽起單車 夢想啟程
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
        span(class="intro_wheel")
        span(class="intro_wheel_decoration_2")
      section(class="intro_logo_section")
</template>

<script>
export default {
  name: 'IntroPage',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    setInterval(this.timeCounter, 10)
  },
  methods: {
    timeCounter: function () {
      const timeStr = '2019/1/26 00:00'
      const startDate = new Date()
      const endDate = new Date(timeStr)
      const spantime = (endDate - startDate) / 1000
      const day = Math.floor(spantime / (24 * 3600))
      const number1 = document.querySelector('#intro_number_1')
      const number2 = document.querySelector('#intro_number_2')
      if (spantime > 0) {
        let number = require(`../assets/number_${Math.floor(day / 10)}.svg`)
        number1.style.setProperty('background-image', `url(${number})`)
        number = require(`../assets/number_${Math.floor(day % 10)}.svg`)
        number2.style.setProperty('background-image', `url(${number})`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .intro_page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  .intro_background {
      position: absolute;
      z-index: -1;
      top: 0;
      left: -5vw;
      background: #dad6b2;
      height: 100vh;
      width: 55vw;
      transform: skewX(-5deg);
  }
  .intro_title {
    position: absolute;
    z-index: 20;
    left: 8vw;
    top: 17vh;
    display: inline-block;
    background: #942323;
    border-radius: 50px;
    text-align: center;
    color: white;
    padding: 15px 35px 15px 35px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 28px;
    transform: rotateZ(-5deg);
  }
  .intro_layout {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "time wheel logo";
    grid-gap: 5em;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
  }

  .intro_counter_section {
    grid-area: time;
    justify-self: flex-end;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "number dot";
    background-image: url("../assets/intro/countdown.svg");
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
        background-image: url("../assets/intro/dot.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .intro_wheel_section {
    grid-area: wheel;

    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;

    .intro_wheel {
      display: inline-block;
      width: 230px;
      height: 230px;
      background-image: url("../assets/intro/wheel.svg");
    }
    .intro_wheel_decoration_1 {
      display: inline-block;
      width: 101px;
      height: 120px;
      background-image: url("../assets/decoration_top.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 30vh;

    }
    .intro_wheel_decoration_2 {
      display: inline-block;
      width: 96px;
      height: 92px;
      background-image: url("../assets/decoration_bottom.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-top: 30vh;
    }
  }
  .intro_logo_section {
    grid-area: logo;
    justify-self: flex-start;

    width: 22.5vw;
    height: 20vw;
    background-image: url("../assets/logo.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
