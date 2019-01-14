<template lang="pug">
  div(class="signup_page")
    router-link(tag="button" to="/" class="signup_return_button")
    div(class="signup_layout")
      section(class="signup_graph_north_section")
      section(class="signup_graph_central_section")
      section(class="signup_graph_south_section")
      section(class="signup_graph_east_section")
      section(class="signup_graph_other_section")
      a(href="https://docs.google.com/forms/d/e/1FAIpQLScSuQEPPhXPP4yHoT-qb--A98zw_EBvKfYseK54yYQQfpw7zw/viewform" target="_blank" class="signup_button")
</template>

<script>
import jsonp from 'jsonp'

export default {
  data: function () {
    return {
      region: {
        north: 0,
        centeral: 0,
        east: 0,
        south: 0,
        other: 0
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
        data = data.map(target => target[0])
        data.forEach(target => {
          switch (target) {
            case '北部':
              self.region.north++
              break
            case '中部':
              self.region.centeral++
              break
            case '南部':
              self.region.south++
              break
            case '東部':
              self.region.east++
              break
            case '其他':
              self.region.other++
              break
          }
        })
        console.log(self.region)
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

      padding: 5vw;
    }

    .signup_graph_north_section {
      grid-area: north;
    }

    .signup_graph_centeral_section {
      grid-area: centeral;
    }

    .signup_graph_south_section {
      grid-area: south;
    }

    .signup_graph_east_section {
      grid-area: east;
    }

    .signup_graph_other_section {
      grid-area: other;
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
