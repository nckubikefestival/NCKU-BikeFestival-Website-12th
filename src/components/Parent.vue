<template lang="pug">
  div(class="parent_page")
    div(class="parent_background")
    div(class="parent_title")
    div(class="parent_layout")
      section(class="parent_article_section")
        article(id="article")
        div(class="parent_article_scrollbar")
          span
        button(v-show="currentIndex !== -1 && clientWidth < 552" class="parent_return_list_button" v-on:click="returnChoose") 返回列表
      section(class="parent_menu_section")
        div(v-show="type === -1" class="parent_type")
          ul
            li(v-for="(type, index) in typeEText" v-bind:key="type" v-bind:data-text="typeCText[index]" v-on:click="clickType(index)" v-bind:style="{'backgroundImage': 'url(' + require(`../assets/parent/type_${index + 1}.svg`) + ')'}")
        section(v-show="type !== -1" class="parent_articles_list_section")
          div(class="parent_filter")
            button(id="time_re-arrange" v-on:click="arrangeList(0)") 由新到舊
            button(id="hot_re-arrange" v-on:click="arrangeList(1)") 熱門程度
            label
          div(class="parent_articles_list")
            ul
              li(v-for="(iter, index) in rearrangeArticles" v-bind:key="iter.Title" v-on:click="clickArticle(index)" v-bind:class="{activeArticle: index === currentIndex}")
                section
                  p {{iter.Title}}
                  label {{iter.Count}}
          button(v-if="type !== -1 && clientWidth < 552" class="parent_return_type_button" v-on:click="returnChoose") 返回列表
      section(class="parent_back")
        div(v-show="type !== -1" id="type-title" class="parent_type_title")
        button(v-show="type !== -1 && clientWidth > 551" class="parent_return_button" v-on:click="returnChoose")
        router-link(tag="button" to="/" class="parent_exit_button")
</template>

<script>
import axios from 'axios'

export default {
  name: 'ParentPage',
  data: function () {
    return {
      type: -1,
      arrangeType: 0,
      currentIndex: -1,
      typeEText: ['exam', 'institution', 'relationship', 'health', 'future'],
      typeCText: ['考試資訊', '制度變動', '親子關係', '孩子健康', '未來趨勢'],
      allArticles: {
        exam: [],
        institution: [],
        relationship: [],
        health: [],
        future: []
      },
      tempArticles: [],
      loader: null
    }
  },
  computed: {
    rearrangeArticles: function () {
      if (this.arrangeType === 0) {
        return this.tempArticles.slice(0).sort((a, b) => b.Timestamp._seconds - a.Timestamp._seconds)
      }
      return this.tempArticles.slice(0).sort((a, b) => b.Count - a.Count)
    },
    clientWidth: function () {
      return document.body.clientWidth
    }
  },
  mounted: async function () {
    this.loader = this.$loading.show()
    for (let index of [...Array(5).keys()]) {
      try {
        // fetch the articles from database
        const url = `https://us-central1-ncku-bikefestival-12th.cloudfunctions.net/getParentArticles?type=${index}`
        const result = await axios.get(url)
        this.allArticles[this.typeEText[index]] = result.data
      } catch (error) {
        console.log(error)
      }
    }
    this.loader.hide()
  },
  methods: {
    clickType: async function (index) {
      this.type = index
      // display the first articles at left side and replace text at right side
      const target = document.querySelector('#type-title')
      const targetImage = require(`../assets/parent/type_${index + 1}.svg`)
      target.style.setProperty('background-image', `url(${targetImage})`)
      // set tempArticles
      this.tempArticles = this.allArticles[this.typeEText[index]]
    },
    clickArticle: function (index) {
      const oldNode = document.querySelector('#article')
      // clone a new node from old node.
      const newNode = oldNode.cloneNode(false)
      newNode.innerHTML = this.rearrangeArticles[index].Content
      // replace the old node with new node.
      oldNode.parentNode.replaceChild(newNode, oldNode)
      // refresh scrollbar
      this.scrollbarRefresh()
      // update current index
      this.currentIndex = index
      if (document.body.clientWidth < 552) {
        let target = document.querySelector('.parent_articles_list_section')
        target.style.setProperty('display', 'none')
        target = document.querySelector('#article')
        target.style.setProperty('display', 'block')
      }
    },
    returnChoose: function () {
      if (this.currentIndex !== -1 && document.body.clientWidth < 552) {
        let target = document.querySelector('.parent_articles_list_section')
        target.style.setProperty('display', 'block')
        target = document.querySelector('#article')
        target.style.setProperty('display', 'none')
        this.currentIndex = -1
        return
      }
      this.type = -1
      this.tempArticles = []
      // remove article content
      const oldNode = document.querySelector('#article')
      // clone a new node from old node.
      const newNode = oldNode.cloneNode(false)
      newNode.innerHTML = ''
      // replace the old node with new node.
      oldNode.parentNode.replaceChild(newNode, oldNode)
      // hide scrollbar
      const scrollbar = document.querySelector('.parent_article_scrollbar')
      scrollbar.style.setProperty('display', 'none')
    },
    arrangeList: function (value) {
      this.arrangeType = value
      // update currentIndex
      const targetContent = this.$el.querySelector('#article').textContent
      const target = this.rearrangeArticles.find(target => {
        const article = document.createElement('article')
        article.innerHTML = target.Content
        return article.textContent === targetContent
      })
      this.currentIndex = this.rearrangeArticles.indexOf(target)
    },
    scrollbarRefresh: function () {
      if (document.body.clientWidth < 552) {
        return
      }
      const target = document.querySelector('#article')
      const scrollbar = document.querySelector('.parent_article_scrollbar')
      const thumb = document.querySelector('.parent_article_scrollbar span')
      const articleHeight = target.clientHeight
      const viewportRatio = articleHeight / (target.scrollHeight)
      // reset scrollbar thumbs
      thumb.style.setProperty('transform', `translateY(0px) skewX(7.5deg)`)
      target.scrollTop = 0
      if (viewportRatio < 0.9357615262321145) {
        scrollbar.style.setProperty('display', 'block')
        let _prerventEvent = false
        // config scroll event
        target.addEventListener('scroll', function () {
          if (_prerventEvent) {
            return
          }
          const newPercent = Math.min(1, (target.scrollTop / (target.scrollHeight - articleHeight - 40)))
          const currentPosition = Math.floor(articleHeight * newPercent * (articleHeight - 70) / articleHeight)
          thumb.style.setProperty('transform', `translateY(${Math.floor(currentPosition)}px) skewX(7.5deg)`)
          console.log(currentPosition)
        })
        // config scrollbar thumbs drag event
        thumb.addEventListener('mousedown', function (event) {
          event.preventDefault()
          event.stopPropagation()
          _prerventEvent = true
          const previousY = event.pageY
          const percent = (target.scrollTop / (target.scrollHeight - articleHeight - 40))
          const moveMoveEvent = function (event) {
            const dif = event.pageY - previousY
            const newPercent = Math.min(1, Math.max(percent + dif / (articleHeight), 0))
            const currentPosition = Math.floor(1 / Math.sin(82.5 / 180 * Math.PI) * articleHeight * newPercent * (articleHeight - 70) / articleHeight)
            target.scrollTop = newPercent * (target.scrollHeight - articleHeight)
            thumb.style.setProperty('transform', `translateY(${Math.floor(currentPosition)}px) skewX(7.5deg)`)
          }
          document.addEventListener('mousemove', moveMoveEvent)
          const mouseUpEvent = function () {
            _prerventEvent = false
            document.removeEventListener('mousemove', moveMoveEvent)
            document.removeEventListener('mouseup', mouseUpEvent)
          }
          document.addEventListener('mouseup', mouseUpEvent)
        })
      } else {
        scrollbar.style.setProperty('display', 'none')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @-moz-document url-prefix() {
    #article {
      scrollbar-width: none;
    }
  }

  /*
    mobile layout css
  */
  @media only screen and (max-width: 551px) {
    .parent_page {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
    }

    .parent_background {
      position: absolute;
      z-index: -1;
      top: 0vh;
      background: #dad6b2;
      height: 100vh;
      width: 100vw;
    }

    .parent_layout {
      display: grid;
      grid-template-columns: 100vw;
      grid-template-rows: 45vw 1fr;
      grid-template-areas: "select"
        "main";
      align-items: center;
      justify-content: center;
      justify-items: center;

      width: 100vw;
      height: 100vh;

    }

    .parent_title {
      position: absolute;
      z-index: 20;
      left: 18vw;
      top: 6vh;

      width:  64vw;
      height: 30vw;
      background-image: url("../assets/parent/parent_title.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
    }

    .parent_article_section {
      grid-area: main;
      align-self: flex-end;

      display: flex;
      flex-wrap: wrap;
      justify-items: center;
      justify-content: center;
      align-content: space-between;
      align-items: space-between;

      width: 100vw;
      height: 75vh;
      background-image: url("../assets/parent/parent_background.svg");
      background-repeat: no-repeat;
      background-size: 34vw 30vw;
      background-position: 50% 50%;

      overflow: hidden;

      article {
        width: 100%;
        height: 83%;

        margin: 0 5vw;

        font-size: 1.5em;
        text-align: left;
        color: #942323;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        & /deep/ img {
          max-width: 90vw;
          width: 90vw;
          object-fit: cover;
        }
      }

      .parent_article_scrollbar {
        display: none;
      }

      .parent_return_list_button {
        width: 90%;
        height: 12vw;
        background-color: #942323;

        margin: 5vw;

        color: white;
        font-size: 5vw;

        outline: none;
        border: none;
        border-radius: 2vw;

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

    .parent_menu_section {
      grid-area: main;

      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;

      .parent_type {
        display: inline-block;

        width: 66%;
        margin: 0;
        padding: 0;
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;

          li {
            float: left;
            width: 60vw;
            height: 15vw;
            margin: 3vw;
            background-image: none !important;
            background-color: #942323;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 50% 50%;

            color: white;

            cursor: pointer;

            transform: skewX(-5deg);
            transition: filter .3s ease;

            &:after {
              display: block;
              content: attr(data-text);

              font-size: 6vw;
              margin: 4vw;

              transform: skewX(5deg);

            }
            &:hover {
              filter: brightness(150%);
            }
            &:active {
              filter: brightness(70%);
            }

          }
        }
      }

      .parent_articles_list_section {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        .parent_filter {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: "time hot icon";
          grid-gap: 3vw;

          margin: 1.5vw 6vw;
          button {
            width: 100%;
            height: 10vw;

            box-sizing: border-box;

            background-color: #942323;

            outline: none;
            border: none;
            border-radius: 2vw;

            color: white;
            font-size: 4.5vw;

            cursor: pointer;

            transition: filter .3s ease;

            &:hover {
              filter: brightness(150%);
            }
            &:active {
              filter: brightness(70%);
            }

          }

          label {
            grid-area: icon;
            justify-self: flex-end;

            width: 10vw;
            height: 10vw;

            background-image: url("../assets/parent/visit.svg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 50% 50%;
          }
        }

        .parent_articles_list {
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;

          height: 55vh;
          ul {
            width: 10;

            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
              margin: 3vw 8vw;
              padding: 0 2vw;

              font-size: 6vw;
              color: #942323;
              text-align: left;

              cursor: pointer;

              border-left: 0px solid #942323;

              transition: filter .3s ease, border-left-width .2s ease;
              transform-origin: left;

              &:hover {
                filter: brightness(150%);
                border-left-width: 1vw;
              }
              &:active {
                filter: brightness(70%);
              }

              section {
                display: grid;
                grid-template-columns: 4fr 1fr;
                grid-template-areas: "article-title number";
                justify-content: flex-start;
                justify-items: flex-start;
                align-items: center;

                p {
                  display: inline-block;

                  margin: 0;
                  padding: 0;

                  text-align: left;
                }
                label {
                  justify-self: flex-end;
                }
              }
            }
          }
        }

        .parent_return_type_button {
          width: 90%;
          height: 12vw;
          background-color: #942323;

          margin: 5vw;

          color: white;
          font-size: 5vw;

          outline: none;
          border: none;
          border-radius: 2vw;

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

    }

    .parent_back {
      grid-area: select;

      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "type-title exit"
        "type-title type-back ";
      align-items: flex-start;
      justify-items: flex-end;
      justify-content: flex-end;

      width: 100%;
      height: 100%;

      .parent_type_title {
        display: none;
      }

      .parent_exit_button {
        grid-area: exit;

        width: 7vw;
        height: 7vw;
        background-color: transparent;
        background-image: url("../assets/exit.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;
        margin: 7vw 7vw;

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
  }
  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .parent_page {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
    }

    .parent_background {
      position: absolute;
      z-index: -1;
      top: 0;
      left: -10vw;
      background: #dad6b2;
      height: 100vh;
      width: 75vw;
      transform: skewX(-5deg);
    }

    .parent_layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 4fr .5fr;
      grid-template-areas: "title select"
        "article menu"
        "empty empty";
      align-items: center;
      justify-items: center;

      width: 100vw;
      height: 100vh;

    }

    .parent_title {
      position: absolute;
      z-index: 20;
      left: 10vw;
      top: 8vh;

      width: 315px;
      height: 148px;
      background-image: url("../assets/parent/parent_title.svg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
    }

    .parent_article_section {
      grid-area: article;

      width: 45vw;
      height: 66vh;
      background-image: url("../assets/parent/parent_background.svg");
      background-repeat: no-repeat;
      background-size: 34vw 30vw;
      background-position: 50% 57%;

      overflow: hidden;

      article {
        width: 45vw;
        height: 66vh;

        font-size: 1.5em;
        text-align: left;
        color: #942323;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      }

      .parent_article_scrollbar {
        position: fixed;
        display: none;
        background-color: #e3dfc1;
        border-radius: 5px;
        color: #942323;
        font-size: 1.5em;
        line-height: 1.2em;
        top: 26%;
        left: 60%;
        z-index: 510;
        width: 10px;
        height: 66vh;
        margin-left: 20px;
        transform: skewX(-5deg);

        span {
          position: absolute;
          left: -50px;
          width: 70px;
          height: 70px;
          background: url("../assets/scrollbarThumb.svg");
          background-repeat: no-repeat;
          background-position: 50% 40%;
          background-size: 60%;
          transform: skewX(7.5deg);
          cursor: pointer;
          z-index: 510;
        }
      }
    }

    .parent_menu_section {
      grid-area: menu;

      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;

      .parent_type {
        display: inline-block;

        margin: 0;
        padding: 0;
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 85%;
          height: 100%;

          li {
            display: inline-block;
            width: 17vw;
            height: 5vw;
            margin: 1vw;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 50% 50%;

            cursor: pointer;

            transition: filter .3s ease;
            &:hover {
              filter: brightness(150%);
            }
            &:active {
              filter: brightness(70%);
            }
          }
        }
      }

      .parent_articles_list_section {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        .parent_filter {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-areas: "time hot icon";
          grid-gap: 1vw;

          margin: 1.5vw 3vw;
          button {
            width: 100%;
            height: 2.5vw;

            background-color: #942323;

            outline: none;
            border: none;
            border-radius: .8vw;

            color: white;
            font-size: 1.3vw;

            cursor: pointer;

            transition: filter .3s ease;

            &:hover {
              filter: brightness(150%);
            }
            &:active {
              filter: brightness(70%);
            }

          }

          label {
            grid-area: icon;
            justify-self: flex-end;

            width: 2.5vw;
            height: 2.5vw;

            background-image: url("../assets/parent/visit.svg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 50% 50%;
          }
        }

        .parent_articles_list {
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
              margin: 1vw 3vw;
              margin-right: 4vw;
              padding: 0;
              padding-left: 12px;

              font-size: 1.5vw;
              color: #942323;
              text-align: left;

              cursor: pointer;

              border-left: 0px solid #942323;

              transition: filter .3s ease, border-left-width .2s ease;
              transform-origin: left;

              &:hover {
                filter: brightness(150%);
                border-left-width: .5vw;
              }
              &:active {
                filter: brightness(70%);
              }

              section {
                display: grid;
                grid-template-columns: 4fr 1fr;
                grid-template-areas: "article-title number";
                justify-content: flex-start;
                justify-items: flex-start;
                align-items: center;

                p {
                  display: inline-block;

                  margin: 0;
                  padding: 0;

                  text-align: left;
                }
                label {
                  justify-self: flex-end;
                }
              }
            }
          }
        }
      }

    }

    .parent_back {
      grid-area: select;

      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "type-title type-back exit";
      align-items: center;
      justify-items: center;
      justify-content: center;

      width: 90%;
      height: 100%;

      .parent_type_title {
        grid-area: type-title;

        width: 17vw;
        height: 5vw;
        margin: 1vw;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;
      }

      .parent_return_button {
        grid-area: type-back;

        width: 2.5vw;
        height: 2.5vw;
        background-color: transparent;
        background-image: url("../assets/return.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;

        outline: none;
        border: none;

        cursor: pointer;

        transition: filter .3s ease;

        &:hover {
          filter: brightness(110%);
        }
        &:active {
          filter: brightness(80%);
        }
      }

      .parent_exit_button {
        grid-area: exit;

        width: 2.5vw;
        height: 2.5vw;
        background-color: transparent;
        background-image: url("../assets/exit.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;

        outline: none;
        border: none;

        cursor: pointer;

        transition: filter .3s ease;

        &:hover {
          filter: brightness(110%);
        }
        &:active {
          filter: brightness(80%);
        }
      }
    }

    .activeArticle {
      border-left: .5vw solid #942323 !important;
    }
  }

</style>
