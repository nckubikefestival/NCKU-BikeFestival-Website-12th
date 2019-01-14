<template lang="pug">
  div(class="signup_page")
    router-link(tag="button" to="/" class="signup_return_button")
    div(class="signup_layout")
      section(class="signup_graph_north_section")
        p(class="signup_graph_title") 北部
        ve-pie(v-bind:data="regionData.north" v-bind:settings="chartSettings")
      section(class="signup_graph_centeral_section")
        p(class="signup_graph_title") 中部
        ve-pie(v-bind:data="regionData.centeral" v-bind:settings="chartSettings")
      section(class="signup_graph_south_section")
        p(class="signup_graph_title") 南部
        ve-pie(v-bind:data="regionData.south" v-bind:settings="chartSettings")
      section(class="signup_graph_east_section")
        p(class="signup_graph_title") 東部
        ve-pie(v-bind:data="regionData.east" v-bind:settings="chartSettings")
      section(class="signup_graph_other_section")
        p(class="signup_graph_title") 其他
        ve-pie(v-bind:data="regionData.other" v-bind:settings="chartSettings")
      a(href="https://docs.google.com/forms/d/e/1FAIpQLScSuQEPPhXPP4yHoT-qb--A98zw_EBvKfYseK54yYQQfpw7zw/viewform" target="_blank" class="signup_button")
</template>

<script>
import jsonp from 'jsonp'

export default {
  data: function () {
    return {
      chartSettings: {
        label: {
          position: 'inside'
        }
      },
      regionData: {
        north: {
          columns: ['school', 'number'],
          rows: []
        },
        centeral: {
          columns: ['school', 'number'],
          rows: []
        },
        south: {
          columns: ['school', 'number'],
          rows: []
        },
        east: {
          columns: ['school', 'number'],
          rows: []
        },
        other: {
          columns: ['school', 'number'],
          rows: []
        }
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
          const index = self.regionData.north.rows.findIndex(ele => ele.school === target[1])
          switch (target[0]) {
            case '北部':
              if (index !== -1) {
                self.regionData.north.rows[index].number++
              } else {
                self.regionData.north.rows.push({'school': target[1], 'number': 1})
              }
              break
            case '中部':
              if (index !== -1) {
                self.regionData.centeral.rows[index].number++
              } else {
                self.regionData.centeral.rows.push({'school': target[1], 'number': 1})
              }
              break
            case '南部':
              if (index !== -1) {
                self.regionData.south.rows[index].number++
              } else {
                self.regionData.south.rows.push({'school': target[1], 'number': 1})
              }
              break
            case '東部':
              if (index !== -1) {
                self.regionData.east.rows[index].number++
              } else {
                self.regionData.east.rows.push({'school': target[1], 'number': 1})
              }
              break
            case '其他':
              if (index !== -1) {
                self.regionData.other.rows[index].number++
              } else {
                self.regionData.other.rows.push({'school': target[1], 'number': 1})
              }
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
      background: #dad6b2;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .signup_layout {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 3fr 1fr;
      grid-template-areas: "north centeral south east other"
        "button button button button button";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100vw;
      height: 100vh;
      box-sizing: border-box;

      padding: 10vw;
    }

    .signup_graph_north_section {
      grid-area: north;
      justify-self: center;
      align-self: center;

      width: 100%;
    }

    .signup_graph_centeral_section {
      grid-area: centeral;
      justify-self: center;
      align-self: center;

      width: 100%;
    }

    .signup_graph_south_section {
      grid-area: south;
      justify-self: center;
      align-self: center;

      width: 100%;
    }

    .signup_graph_east_section {
      grid-area: east;
      justify-self: center;
      align-self: center;

      width: 100%;
    }

    .signup_graph_other_section {
      grid-area: other;
      justify-self: center;
      align-self: center;

      width: 100%;
    }

    .signup_graph_title {
      font-size: 2vw;
      background-color: #942323;
      color: white;
      transform: skewX(-5deg);

      margin: 2vw;
      padding: 1vw;
    }

    .signup_button {
      grid-area: button;
      justify-self: center;
      align-self: center;

      width: 10vw;
      height: 10vw;

      background-image: url('../assets/signup/button.svg');
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100% 100%;

      border: none;
      outline: none;

      cursor: pointer;

      transition: transform .2s ease-in-out, filter .2s ease-in-out;
      &:hover {
        transform: scale(1.08);
        filter: brightness(120%);
      }
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
  }
</style>
