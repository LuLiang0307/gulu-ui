<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>UI框架</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/LuLiang0307">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="futures">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$h: 28px;
$border-radius: 4px;
$color: #007974;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.futures{
  svg{
    width: 64px;
    height: 64px;
  } 
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      line-height: $h;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>