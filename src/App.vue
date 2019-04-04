<template>
  <div id="app">
    <Header></Header>
    <div class="content-wrapper">
      <SideMenu></SideMenu>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu";

export default {
  name: "app",
  components: {
    Header,
    SideMenu
  }
};
</script>

<style lang="scss">
@import "./styles.scss";

@font-face {
  font-family: "Noto Sans";
  src: url("./assets/fonts/NotoSans-Regular.ttf");
}

body {
  font-family: "Noto Sans";
  margin: 0;
  padding: 0;
  background-color: #f7fbfd;
  color: #47576e;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  flex: 1;
  .content {
    flex: 1;
  }
}

b {
  color: $primary-blue;
}

.btn-primary {
  height: 60px;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  border: none;
  outline: none;
  box-shadow: 0 2px 6px 0 rgba(71, 87, 110, 0.14);
  border-radius: 5px;
  cursor: pointer;
  &.grey {
    background-color: #9099a8;
    &:hover {
      background-color: darken(#9099a8, 10%);
    }
  }
  &.light-blue {
    background-color: #96cde6;
    &:hover {
      background-color: darken(#96cde6, 10%);
    }
  }
}

.hide-md {
  @media (max-width: 992px) {
    display: none !important;
  }
}
</style>
