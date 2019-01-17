<template lang="pug">
  div(class="sponsor_page")
    p(class="sponsor_title") 成大單車節贊助商
    router-link(tag="button" to="/" class="sponsor_exit_button")
    router-link(v-show="mode === 1" tag="button" to="/" class="sponsor_return_button")
    div(class="sponsor_layout_1" v-show="mode === 0")
      section(class="sponsor_list")
        label test
        label(v-for="(iter, index) in sponsor.images" v-bind:key="sponsor.name[index]" v-bind:style="{'background-image': iter}" v-on:click="currentIndex = index")
    div(class="sponsor_layout_2" v-if="mode === 1")
      section(class="sponsor_info")
        p {{sponsor.name[currentIndex]}}
        label(v-bind:style="{'background-image': sponsor.image[currentIndex]}")
      section(class="sponsor_content")
        article {{sponsor.content[currentIndex]}}
        p NCKU BIKE FESTIVAL
</template>

<script>
export default {
  data: function () {
    return {
      currentIndex: -1,
      mode: 0,
      sponsor: {
        name: [],
        images: [],
        content: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  /*
    mobile layout css
  */
  @media only screen and (max-width: 551px) {
    .sponsor_page {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      margin: 0;
      padding: 0;
      background: white;
      overflow-y: auto;
    }

    .sponsor_title {
      position: absolute;
      z-index: 20;
      left: 10vw;
      top: 4vh;
      display: inline-block;
      text-align: center;
      color: #942323;
      font-size: 8vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 8vw;
    }

    .sponsor_exit_button {
      position: absolute;
      right: 7vw;
      top: 7vw;

      width: 7.5vw;
      height: 7.5vw;
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

    .sponsor_return_button {
      position: absolute;
      right: 4.2vw;
      top: 3.7vw;

      width: 7.5vw;
      height: 7.5vw;
      background-color: transparent;
      background-image: url("../assets/return.svg");
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

    .sponsor_layout_1 {
      display: grid;
      grid-template-rows: 13vh 1fr;
      grid-template-areas: "top"
        "bottom";
      justify-content: center;
      align-content: center;
      align-items: center;

      background-color: #dad6b2;
      width: 100%;
    }

    .sponsor_layout_2 {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-areas: "left right";
    }

    .sponsor_list {
      grid-area: bottom;

      display: grid;
      grid-template-rows: 60vw 60vw;
      grid-gap: 10vw;
      justify-content: center;

      width: 100vw;
      min-height: 100vh;

      label {
        width: 60vw;
        height: 60vw;
      }
    }

    .sponsor_info {
      grid-area: left;

      display: grid;
      grid-template-rows: 1fr 2fr;
      grid-template-areas: "title"
        "icon";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      background-color: #dad6b2;

      p {
        grid-area: title;
        color: #942323;
        font-size: 3.6vw;
      }

      label {
        grid-area: icon;

        width: 10vw;
        height: 10vw;
      }
    }

    .sponsor_content {
      grid-area: right;

      display: grid;
      grid-template-rows: 5fr 1fr;
      grid-template-areas: "content"
        "ncku";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      p {
        grid-area: ncku;
        color: #942323;
        font-size: 3.6vw;
      }

      article {
        grid-area: content;

        width: 90%;
        height: 75%;
      }
    }
  }

  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .sponsor_page {
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

    .sponsor_title {
      position: absolute;
      z-index: 20;
      left: 10vw;
      top: 12vh;
      display: inline-block;
      text-align: center;
      color: #942323;
      font-size: 2vw;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 2vw;
    }

    .sponsor_exit_button {
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

    .sponsor_return_button {
      position: absolute;
      right: 4.2vw;
      top: 3.7vw;

      width: 2.5vw;
      height: 2.5vw;
      background-color: transparent;
      background-image: url("../assets/return.svg");
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

    .sponsor_layout_1 {
      display: grid;
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-rows: 1fr 1.8fr 0.8fr;
      grid-template-areas: ". . ."
        ". list ."
        ". . .";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100vw;
      height: 100vh;

      background-color: #dad6b2;
    }

    .sponsor_layout_2 {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      grid-template-areas: "left right";
    }

    .sponsor_list {
      grid-area: list;

      display: grid;
      grid-template-columns: repeat(8, 7vw);
      grid-template-rows: repeat(3, 7vw);
      grid-gap: 3vw;

      width: 100%;

      label {
        width: 7vw;
        height: 7vw;
      }
    }

    .sponsor_info {
      grid-area: left;

      display: grid;
      grid-template-rows: 1fr 2fr;
      grid-template-areas: "title"
        "icon";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      background-color: #dad6b2;

      p {
        grid-area: title;
        color: #942323;
        font-size: 3.6vw;
      }

      label {
        grid-area: icon;

        width: 10vw;
        height: 10vw;
      }
    }

    .sponsor_content {
      grid-area: right;

      display: grid;
      grid-template-rows: 5fr 1fr;
      grid-template-areas: "content"
        "ncku";
      justify-content: center;
      align-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      p {
        grid-area: ncku;
        color: #942323;
        font-size: 3.6vw;
      }

      article {
        grid-area: content;

        width: 90%;
        height: 75%;
      }
    }
  }
</style>
