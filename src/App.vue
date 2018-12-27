<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from './components/Intro'

export default {
  name: 'App',
  components: {
    Intro
  },
  mounted: function () {
    document.addEventListener('click', this.clickEffect)
    console.log(document.body.clientHeight)
  },
  methods: {
    clickEffect: function (e) {
      const d = document.createElement('div')
      d.className = 'clickEffect'
      d.style.top = `${e.clientY - 100}px`
      d.style.left = `${e.clientX - 100}px`
      document.body.appendChild(d)
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d)
        d.removeEventListener('animationend', this)
      })
    }
  }
}
</script>

<style>
  @keyframes clickEffect {
    0% {
      opacity: 1;
      transform: scale(0.1);
      border-width: 2.5em;
    }
    100% {
      opacity: 0.2;
      transform: scale(1);
      border-width: 0.03em;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .clickEffect {
    position: fixed;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-style: solid;
    border-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    animation: clickEffect 0.4s ease-in-out;
    transform-origin: center;
    z-index: 99999;
    will-change: opacity, transform, border-width;
    pointer-events: none;
  }
</style>
