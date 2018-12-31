<template lang="pug">
  div(class="dept_page")
    p(class="dept_title") 成大單車節 45 科系
    svg(class="external_circle" width="100vw" height="100vh" viewBox="0 0 1920 1080")
      g
        ellipse(cx="1280" cy="540" rx="1200" ry="1350" stroke="#8e2224" stroke-width="1px" fill="none")
    div(class="dept_layout")
      section(class="dept_list_section")
        div(class="dept_class")
          ul
            li(v-for="(iter, index) in classes" v-bind:key="`${index}-${iter}`" v-bind:data-key="classKeys[index]" class="dept_class_item" v-on:click="currentIndex = index" v-bind:class="{active: currentIndex === index}" )
              p {{iter}}
      section(class="dept_chain_section")
        div(class="dept_chain_small")
        div(class="dept_chain_large")
        svg(width="52vw" height="26vw" viewBox="-6 30 920 313")
          g(id="internal_circle" transform="translate(-485, -350)")
            path(fill="none" stroke="#305971"  stroke-miterlimit="10" stroke-width="4px" d="M674.22,373.24h0a163.44,163.44,0,0,0-50.36,8.85h0a163.44,163.44,0,0,0-45.16,24h0a163.44,163.44,0,0,0-35.54,36.76h0a163.44,163.44,0,0,0-22.44,45.95h0a163.44,163.44,0,0,0-7.14,50.63h0a163.44,163.44,0,0,0,8.85,50.36h0a163.44,163.44,0,0,0,24,45.16h0a163.44,163.44,0,0,0,36.76,35.54h0a163.44,163.44,0,0,0,45.95,22.44h0a163.44,163.44,0,0,0,50.63,7.14h0a163.44,163.44,0,0,0,50.36-8.85h0a163.44,163.44,0,0,0,45.16-24h0a163.44,163.44,0,0,0,35.54-36.76h0a163.44,163.44,0,0,0,22.44-45.95h0a163.44,163.44,0,0,0,7.14-50.63h0a163.44,163.44,0,0,0-8.85-50.36h0a163.44,163.44,0,0,0-24-45.16h0a163.44,163.44,0,0,0-36.76-35.54h0a163.44,163.44,0,0,0-45.95-22.44h0A163.44,163.44,0,0,0,674.22,373.24Z")
          g(id="chain_path")
            path(d="M854.4800244140624,253.27999999999997 a66.84,66.84 0 0 0 0,-132.24 L218.7800244140625,2.7799999999999727 A187.68,187.68 0 0 0 186.50002441406252,0 c-103,0 -186.5,83.5 -186.5,186.5 s83.5,186.5 186.5,186.5 a187.68,187.68 0 0 0 32.25,-2.7800000000000002 z" fill="none" stroke-linejoin="round"  stroke-linecap="round" stroke-width="8px" stroke="#305971" stroke-dasharray="1, 20" stroke-miterlimit="10")
        div(v-show="currentIndex !== -1" v-for="(iter, index) in classKeys" v-bind:key="`${index}-${iter}-college`" class="dept_college" v-bind:class="deptBinding(index)")
          p(v-for="(name, index) in colleges[iter]" v-bind:ket="`${index}-${name}-college`") {{name}}
</template>

<script>
export default {
  data: function () {
    return {
      classes: ['規劃與設計學院', '社會科學院', '不分學院', '工學院', '理學院', '文學院', '醫學院', '管理學院', '電機資訊學院', '生物科學與科技學院'],
      classKeys: ['design', 'social', 'undeclear', 'engineer', 'science', 'humanity', 'medicine', 'management', 'computer', 'biological'],
      colleges: {
        design: ['建築', '都計', '工設'],
        social: ['政治', '經濟', '法律', '心理'],
        undeclear: ['不分系學程'],
        engineer: ['機械', '化工', '土木', '材料', '水利', '工科', '系統', '航太', '資源', '環工', '醫工', '測量', '能源'],
        science: ['數學', '化學', '物理', '地科', '光電'],
        humanity: ['中文', '外文', '歷史', '臺文'],
        medicine: ['醫學', '藥學', '護理', '物治', '職治', '醫技'],
        management: ['會計', '統計', '企管', '交管', '工資管'],
        computer: ['電機', '資訊'],
        biological: ['生科', '生技']
      },
      currentIndex: -1,
      allClass: []
    }
  },
  mounted: function () {
    this.allClass = Array.from(this.$el.querySelectorAll('.dept_class_item'))
  },
  methods: {
    deptBinding: function (index) {
      const displayName = `rotate-${this.classKeys[index]}`
      const disappearName = `rotate-${this.classKeys[index]}-disappear`
      const result = {}
      result[displayName] = this.currentIndex === index
      result[disappearName] = this.currentIndex !== index
      return result
    }
  }
}
</script>

<style lang="scss" scoped>

/* 2 components rotate */
@keyframes rotate-45 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-45deg) translateX(16vw) rotate(45deg); }
}
@keyframes rotate-135 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(45deg) translateX(16vw) rotate(-45deg); }
}
@keyframes rotate-45-disappear {
  0% { opacity: 1; transform: rotate(-45deg) translateX(16vw) rotate(45deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-135-disappear {
  0% { opacity: 1; transform: rotate(45deg) translateX(16vw) rotate(-45deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

/* 3 components rotate*/
@keyframes rotate-30 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-60deg) translateX(16vw) rotate(60deg); }
}
@keyframes rotate-90 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(0deg) translateX(16vw) rotate(0deg); }
}
@keyframes rotate-150 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(60deg) translateX(16vw) rotate(-60deg); }
}

@keyframes rotate-30-disappear {
  0% { opacity: 1; transform: rotate(-60deg) translateX(16vw) rotate(60deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-90-disappear {
  0% { opacity: 1; transform: rotate(0deg) translateX(16vw) rotate(0deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-150-disappear {
  0% { opacity: 1; transform: rotate(60deg) translateX(16vw) rotate(-60deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

/* 4 components roate*/
@keyframes rotate-23 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-67deg) translateX(16vw) rotate(67deg); }
}
@keyframes rotate-68 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-23deg) translateX(16vw) rotate(23deg); }
}
@keyframes rotate-113 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(23deg) translateX(16vw) rotate(-23deg); }
}
@keyframes rotate-158 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(68deg) translateX(16vw) rotate(-68deg); }
}

@keyframes rotate-23-disappear {
  0% { opacity: 1; transform: rotate(-67deg) translateX(16vw) rotate(67deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-68-disappear {
  0% { opacity: 1; transform: rotate(-23deg) translateX(16vw) rotate(23deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-113-disappear {
  0% { opacity: 1; transform: rotate(23deg) translateX(16vw) rotate(-23deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-158-disappear {
  0% { opacity: 1; transform: rotate(68deg) translateX(16vw) rotate(-68deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

/* 5 components rotate */
@keyframes rotate-18 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-72deg) translateX(16vw) rotate(72deg); }
}
@keyframes rotate-54 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-36deg) translateX(16vw) rotate(36deg); }
}
/*
@keyframes rotate-90 {
  0% { transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { transform: rotate(0deg) translateX(16vw) rotate(0deg); }
}
*/
@keyframes rotate-126 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(36deg) translateX(16vw) rotate(-36deg); }
}
@keyframes rotate-162 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(72deg) translateX(16vw) rotate(-72deg); }
}

@keyframes rotate-18-disappear {
  0% { opacity: 1; transform: rotate(-72deg) translateX(16vw) rotate(72deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-54-disappear {
  0% { opacity: 1; transform: rotate(-36deg) translateX(16vw) rotate(36deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

@keyframes rotate-126-disappear {
  0% { opacity: 1; transform: rotate(36deg) translateX(16vw) rotate(-36deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-162-disappear {
  0% { opacity: 1; transform: rotate(72deg) translateX(16vw) rotate(-72deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

/* 6 components rotate */

@keyframes rotate-15 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-75deg) translateX(16vw) rotate(75deg); }
}
/*
@keyframes rotate-45 {
  0% { transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { transform: rotate(-45deg) translateX(16vw) rotate(45deg); }
}
*/
@keyframes rotate-75 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-15deg) translateX(16vw) rotate(15deg); }
}
@keyframes rotate-105 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(15deg) translateX(16vw) rotate(-15deg); }
}
/*
@keyframes rotate-135 {
  0% { transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { transform: rotate(45deg) translateX(16vw) rotate(-45deg); }
}
*/
@keyframes rotate-165 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(75deg) translateX(16vw) rotate(-75deg); }
}

@keyframes rotate-15-disappear {
  0% { opacity: 1; transform: rotate(-75deg) translateX(16vw) rotate(75deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

@keyframes rotate-75-disappear {
  0% { opacity: 1; transform: rotate(-15deg) translateX(16vw) rotate(15deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-105-disappear {
  0% { opacity: 1; transform: rotate(15deg) translateX(16vw) rotate(-15deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

@keyframes rotate-165-disappear {
  0% { opacity: 1; transform: rotate(75deg) translateX(16vw) rotate(-75deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

/* 13 components rotate */

@keyframes rotate-7 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-83deg) translateX(16vw) rotate(83deg); }
}
@keyframes rotate-21 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { oapcity: 1; transform: rotate(-69deg) translateX(16vw) rotate(69deg); }
}
@keyframes rotate-35 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { oapcity: 1; transform: rotate(-55deg) translateX(16vw) rotate(55deg); }
}
@keyframes rotate-49 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { oapcity: 1; transform: rotate(-41deg) translateX(16vw) rotate(41deg); }
}
@keyframes rotate-63 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { oapcity: 1; transform: rotate(-27deg) translateX(16vw) rotate(27deg); }
}
@keyframes rotate-77 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(-13deg) translateX(16vw) rotate(13deg); }
}
/*
@keyframes rotate-90 {
  0% { transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { transform: rotate(0deg) translateX(16vw) rotate(-0deg); }
}
*/
@keyframes rotate-103 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(13deg) translateX(16vw) rotate(-13deg); }
}
@keyframes rotate-117 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(27deg) translateX(16vw) rotate(-27deg); }
}
@keyframes rotate-131 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(41deg) translateX(16vw) rotate(-41deg); }
}
@keyframes rotate-145 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(55deg) translateX(16vw) rotate(-55deg); }
}
@keyframes rotate-159 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(69deg) translateX(16vw) rotate(-69deg); }
}
@keyframes rotate-173 {
  0% { opacity: 0; transform: rotate(-90deg) translateX(16vw) rotate(90deg); }
  100% { opacity: 1; transform: rotate(83deg) translateX(16vw) rotate(-83deg); }
}

@keyframes rotate-7-disappear {
  0% { opacity: 1; transform: rotate(-83deg) translateX(16vw) rotate(83deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-21-disappear {
  0% { opacity: 1; transform: rotate(-69deg) translateX(16vw) rotate(69deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-35-disappear {
  0% { opacity: 1; transform: rotate(-55deg) translateX(16vw) rotate(55deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-49-disappear {
  0% { opacity: 1; transform: rotate(-41deg) translateX(16vw) rotate(41deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-63-disappear {
  0% { opacity: 1; transform: rotate(-27deg) translateX(16vw) rotate(27deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-77-disappear {
  0% { opacity: 1; transform: rotate(-13deg) translateX(16vw) rotate(13deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

@keyframes rotate-103-disappear {
  0% { opacity: 1; transform: rotate(13deg) translateX(16vw) rotate(-13deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-117-disappear {
  0% { opacity: 1; transform: rotate(27deg) translateX(16vw) rotate(-27deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-131-disappear {
  0% { opacity: 1; transform: rotate(41deg) translateX(16vw) rotate(-41deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-145-disappear {
  0% { opacity: 1; transform: rotate(55deg) translateX(16vw) rotate(-55deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-159-disappear {
  0% { opacity: 1; transform: rotate(69deg) translateX(16vw) rotate(-69deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}
@keyframes rotate-173-disappear {
  0% { opacity: 1; transform: rotate(83deg) translateX(16vw) rotate(-83deg); }
  100% { opacity: 0; transform: rotate(90deg) translateX(16vw) rotate(-90deg); }
}

  /*
    computer layout css
  */
  @media only screen and (min-width: 552px) {
    .dept_page {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100vh;
      width: 100vw;
      background: #dad6b2;
      margin: 0;
      padding: 0;
    }
    .dept_title {
      position: absolute;
      z-index: 20;
      left: 15vw;
      top: 4vh;
      display: inline-block;
      background: #942323;
      border-radius: 50px;
      text-align: center;
      color: white;
      padding: 18px 80px 18px 80px;
      font-size: 28px;
      font-weight: 500;
      letter-spacing: 1px;
      line-height: 28px;
      transform: rotateZ(-3deg);
    }

    .external_circle {
      position: absolute;
      pointer-events: none;
    }

    .dept_layout {
      display: grid;
      grid-template-columns: 22vw 78vw;
      grid-template-areas: "list chain";

      justify-content: center;
      justify-items: center;
      align-items: center;

      width: 100vw;
      height: 100vh;
    }

    .dept_chain_section {
      grid-area: chain;

      display: grid;
      grid-template-columns: 4vw repeat(5, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas: ". . large large large large"
        ". small large large large large "
        ". . large large large large";
      justify-content: center;
      justify-items: center;
      align-items: center;

      width: 100%;
      height: 100%;
      .dept_chain_small {
        grid-area: small;

        width: 15vw;
        height: 15vw;

        background-image: url("../assets/dept/small_chain.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;
      }

      .dept_chain_large {
        grid-area: large;

        width: 45vw;
        height: 45vw;

        background-image: url("../assets/dept/large_chain.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;
      }
      svg {
        position: absolute;

        top: 0;
        bottom: 0;
        margin: auto 0;
        left: 22.4vw;
      }
    }

    .dept_college {
      position: absolute;
      left: 66vw;
      top: 45vh;
      box-sizing: border-box;

      will-change: opacity, transform;

      p {
        position: absolute;
        left: 0;
        top: 0;
        width: 7.5vw;
        height: auto;
        border-radius: 3vw;
        text-align: center;
        vertical-align: bottom;
        background-color: #eeefef;
        color: black;
        padding: 10px;
        font-size: 1.5vw;
        font-weight: 500;
        cursor: pointer;
      }
      p:hover {
        z-index: 999;
      }
      &.rotate-design > p:nth-child(1) {
        animation: rotate-30 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-design > p:nth-child(2) {
        animation: rotate-90 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-design > p:nth-child(3) {
        animation: rotate-150 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-design-disappear > p:nth-child(1) {
        animation: rotate-30-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-design-disappear > p:nth-child(2) {
        animation: rotate-90-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-design-disappear > p:nth-child(3) {
        animation: rotate-150-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-social > p:nth-child(1) {
        animation: rotate-23 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social > p:nth-child(2) {
        animation: rotate-68 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social > p:nth-child(3) {
        animation: rotate-113 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social > p:nth-child(4) {
        animation: rotate-158 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-social-disappear > p:nth-child(1) {
        animation: rotate-23-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social-disappear > p:nth-child(2) {
        animation: rotate-68-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social-disappear > p:nth-child(3) {
        animation: rotate-113-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-social-disappear > p:nth-child(4) {
        animation: rotate-158-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-undeclear > p {
        animation: rotate-90 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-undeclear-disappear > p {
        animation: rotate-90-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-engineer > p:nth-child(1) {
        animation: rotate-7 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(2) {
        animation: rotate-21 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(3) {
        animation: rotate-35 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(4) {
        animation: rotate-49 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(5) {
        animation: rotate-63 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(6) {
        animation: rotate-77 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(7) {
        animation: rotate-90 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(8) {
        animation: rotate-103 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(9) {
        animation: rotate-117 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(10) {
        animation: rotate-131 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(11) {
        animation: rotate-145 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(12) {
        animation: rotate-159 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer > p:nth-child(13) {
        animation: rotate-173 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-engineer-disappear > p:nth-child(1) {
        animation: rotate-7-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(2) {
        animation: rotate-21-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(3) {
        animation: rotate-35-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(4) {
        animation: rotate-49-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(5) {
        animation: rotate-63-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(6) {
        animation: rotate-77-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(7) {
        animation: rotate-90-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(8) {
        animation: rotate-103-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(9) {
        animation: rotate-117-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(10) {
        animation: rotate-131-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(11) {
        animation: rotate-145-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(12) {
        animation: rotate-159-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-engineer-disappear > p:nth-child(13) {
        animation: rotate-173-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-science > p:nth-child(1) {
        animation: rotate-18 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science > p:nth-child(2) {
        animation: rotate-54 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science > p:nth-child(3) {
        animation: rotate-90 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science > p:nth-child(4) {
        animation: rotate-126 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science > p:nth-child(5) {
        animation: rotate-162 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-science-disappear > p:nth-child(1) {
        animation: rotate-18-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science-disappear > p:nth-child(2) {
        animation: rotate-54-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science-disappear > p:nth-child(3) {
        animation: rotate-90-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science-disappear > p:nth-child(4) {
        animation: rotate-126-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-science-disappear > p:nth-child(5) {
        animation: rotate-162-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-humanity > p:nth-child(1) {
        animation: rotate-23 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity > p:nth-child(2) {
        animation: rotate-68 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity > p:nth-child(3) {
        animation: rotate-113 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity > p:nth-child(4) {
        animation: rotate-158 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-humanity-disappear > p:nth-child(1) {
        animation: rotate-23-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity-disappear > p:nth-child(2) {
        animation: rotate-68-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity-disappear > p:nth-child(3) {
        animation: rotate-113-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-humanity-disappear > p:nth-child(4) {
        animation: rotate-158-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-medicine > p:nth-child(1) {
        animation: rotate-15 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine > p:nth-child(2) {
        animation: rotate-45 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine > p:nth-child(3) {
        animation: rotate-75 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine > p:nth-child(4) {
        animation: rotate-105 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine > p:nth-child(5) {
        animation: rotate-135 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine > p:nth-child(6) {
        animation: rotate-165 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-medicine-disappear > p:nth-child(1) {
        animation: rotate-15-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine-disappear > p:nth-child(2) {
        animation: rotate-45-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine-disappear > p:nth-child(3) {
        animation: rotate-75-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine-disappear > p:nth-child(4) {
        animation: rotate-105-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine-disappear > p:nth-child(5) {
        animation: rotate-135-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-medicine-disappear > p:nth-child(6) {
        animation: rotate-165-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-management > p:nth-child(1) {
        animation: rotate-18 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management > p:nth-child(2) {
        animation: rotate-54 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management > p:nth-child(3) {
        animation: rotate-90 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management > p:nth-child(4) {
        animation: rotate-126 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management > p:nth-child(5) {
        animation: rotate-162 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-management-disappear > p:nth-child(1) {
        animation: rotate-18-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management-disappear > p:nth-child(2) {
        animation: rotate-54-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management-disappear > p:nth-child(3) {
        animation: rotate-90-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management-disappear > p:nth-child(4) {
        animation: rotate-126-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-management-disappear > p:nth-child(5) {
        animation: rotate-162-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-computer > p:nth-child(1) {
        animation: rotate-45 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-computer > p:nth-child(2) {
        animation: rotate-135 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-computer-disappear > p:nth-child(1) {
        animation: rotate-45-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-computer-disappear > p:nth-child(2) {
        animation: rotate-135-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-biological > p:nth-child(1) {
        animation: rotate-45 .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-biological > p:nth-child(2) {
        animation: rotate-135 .5s ease-in-out;
        animation-fill-mode: forwards;
      }

      &.rotate-biological-disappear > p:nth-child(1) {
        animation: rotate-45-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }
      &.rotate-biological-disappear > p:nth-child(2) {
        animation: rotate-135-disappear .5s ease-in-out;
        animation-fill-mode: forwards;
      }

    }

    .dept_list_section {
      grid-area: list;
      justify-self: flex-end;

      max-width: 14vw;

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          margin: 0;
          padding: 0;

          transition-property: font-size, text-align, background-color, padding;
          transition-duration: .3s;
          transition-timing-function: ease;
        }

        li[data-key="design"]  {
          transform: translateX(38px) skewX(-5deg);
        }
        li[data-key="social"]  {
          transform: translateX(32px) skewX(-5deg);
        }
        li[data-key="undeclear"]  {
          transform: translateX(28px) skewX(-5deg);
        }
        li[data-key="engineer"]  {
          transform: translateX(24px) skewX(-5deg);
        }
        li[data-key="science"]  {
          transform: translateX(20px) skewX(-5deg);
        }
        li[data-key="humanity"]  {
          transform: translateX(20px) skewX(-5deg);
        }
        li[data-key="medicine"]  {
          transform: translateX(24px) skewX(-5deg);
        }
        li[data-key="management"]  {
          transform: translateX(28px) skewX(-5deg);
        }
        li[data-key="computer"]  {
          transform: translateX(36px) skewX(-5deg);
        }
        li[data-key="biological"]  {
          transform: translateX(38px) skewX(-5deg);
        }
      }

      .dept_class_item {
        margin: 2vh;

        font-size: 2.4vh;

        p {
          width: 100%;

          margin: 0;
          padding: 0;

          text-align: left;

          color: #942323;
          font-weight: 500;
          cursor: pointer;
          transform: skewX(5deg);
        }
        &.active {
            background-color: #eeefef;
            padding: 10px;
            font-size: 2.6vh;
            font-weight: 500;
          }
        &:hover {
          background-color: #eeefef;
          padding: 10px;
          font-size: 2.6vh;
          font-weight: 500;
        }
      }
    }
  }
</style>
