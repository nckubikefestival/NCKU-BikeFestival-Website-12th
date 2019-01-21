<template lang="pug">
  div(class="signup_page")
    router-link(tag="button" to="/" class="signup_return_button")
    div(class="signup_background_1")
    div(class="signup_background_2")
    div(class="signup_layout")
      div(class="external_circle")
      div(class="internal_circle")
      span(class="signup_bike")
      a(href="https://docs.google.com/forms/d/e/1FAIpQLScSuQEPPhXPP4yHoT-qb--A98zw_EBvKfYseK54yYQQfpw7zw/viewform" target="_blank" class="signup_button") 我要報名
      section(class="signup_graph_statis_section")
        ve-pie(v-bind:data="regionData" v-bind:settings="chartSettings" height="600px")
    p(class="signup_title") NCKU BIKE FESTIVAL
</template>

<script>
import jsonp from 'jsonp'

export default {
  data: function () {
    return {
      chartSettings: {
        radius: 200,
        label: {
          fontSize: 24
        },
        labelLine: {
          normal: {
            width: 200,
            length: 100
          },
          emphasis: {
            show: true
          }
        },
        offsetY: 300
      },
      regionData: {
        columns: ['area', 'number'],
        rows: [ {area: '北部', number: 0}, {area: '中部', number: 0}, {area: '南部', number: 0}, {area: '東部', number: 0}, {area: '其他', number: 0} ]
      },
      percentData: {
        columns: ['target', 'percent'],
        rows: [ {target: '人數', percent: 0} ]
      }
    }
  },
  mounted: async function () {
    const url = `https://script.google.com/macros/s/AKfycbyLqzX4qnEJ6SYkTctEUjH_VeNTQNjCa1wiayYbQhcJ/exec`
    const self = this
    try {
      // use jsonp to deal with cors
      jsonp(url, { timeout: 5000 }, (err, data) => {
        if (err) {
          throw err
        }
        data = data.filter(target => target[0].length > 0)
        data.forEach(target => {
          // const index = self.regionData.north.rows.findIndex(ele => ele.school === target[1])
          switch (target[0]) {
            case '北部':
              self.regionData.rows[0].number++
              break
            case '中部':
              self.regionData.rows[1].number++
              break
            case '南部':
              self.regionData.rows[2].number++
              break
            case '東部':
              self.regionData.rows[3].number++
              break
            case '其他':
              self.regionData.rows[4].number++
              break
          }
        })
      })
    } catch (error) {
      console.log(error)
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
      transform: rotate(-360deg);
    }
  }
  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .signup_page {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      justify-items: flex-start;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    .signup_background_1 {
      position: absolute;
      z-index: -1;
      top: 0;
      left: -10vw;
      background: #dad6b2;
      height: 100vh;
      width: 25vw;
      transform: skewX(-5deg);
    }
    .signup_background_2 {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 85vw;
      background: #dad6b2;
      height: 100vh;
      width: 25vw;
      transform: skewX(-5deg);
    }

    .signup_layout {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100vw;
      height: 100vh;
      box-sizing: border-box;

      padding: 8vw;
    }

    .signup_graph_statis_section {
      justify-self: center;
      align-self: center;

      width: 100%;
      height: 100%;
    }

    .signup_button {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 50;

      width: 18vh;
      height: 8vh;
      background-color: #942323;

      color: white;
      border: none;
      outline: none;
      text-decoration: none;
      font-size: 3vh;
      line-height: 8vh;

      cursor: pointer;
      transition: transform .2s ease-in-out, filter .2s ease-in-out;
      &:hover {
        transform: scale(1.08);
        filter: brightness(120%);
      }
    }

    .external_circle {
      position: absolute;
      width: 46vh;
      height: 46vh;

      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      border-radius: 100%;
      border: 3px solid #942323;
    }

    .internal_circle {
      position: absolute;
      width: 41vh;
      height: 41vh;

      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      border-radius: 100%;
      border: 3px solid #942323;
    }

    .signup_bike {
      position: absolute;
      width: 55vh;
      height: 55vh;

      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      background-image: url("../assets/signup/bike.svg");
      background-repeat: no-repeat;
      background-position: 0% 50%;
      background-size: 7.5% 12%;

      animation: roll 4s linear infinite;

    }

    .signup_return_button {
      position: absolute;
      right: 4.2vw;
      top: 3.7vw;

      width: 2.5vw;
      height: 2.5vw;
      background-color: transparent;
      background-image: url("../assets/exit.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;

      outline: none;
      border: none;
      filter: brightness(120%);

      cursor: pointer;

      transition: filter .3s ease;

      &:hover {
        filter: brightness(130%);
      }
      &:active {
        filter: brightness(80%);
      }
    }

    .signup_title {
      position: absolute;
      z-index: 20;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 4vh;
      display: inline-block;
      border-radius: 50px;
      text-align: center;
      color: #942323;
      font-size: 4vh;
      font-weight: 500;
      letter-spacing: 0.5vw;
      line-height: 4vh;
    }
  }
</style>
