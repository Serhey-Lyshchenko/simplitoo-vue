<template>
  <aside class="hide-md">
    <router-link to="/page_2" class="link-wrapper">
      <div class="icon">
        <img src="../../../simplitoo-angularjs/src/public/assets/img/pencil.svg">
      </div>
      <span>Immatriculation</span>
    </router-link>
    <router-link to="/" class="link-wrapper">
      <div class="icon"></div>
      <span>1. Votre Société</span>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "side-menu"
};
</script>

<style lang="scss" scoped>
@import "../styles";

aside {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  flex: 1;
  min-width: 250px;
  border-right: 1px solid #dadde2;
  .link-wrapper {
    padding: 19px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    position: relative;
    .icon {
      width: 40px;
      height: 20px;
      flex: 1;
      img {
        height: 100%;
        object-fit: contain;
      }
    }
    span {
      flex: 3;
      color: $primary-blue;
      font-weight: bold;
    }
    &.router-link-exact-active {
      &:before {
        content: "";
        width: 10px;
        background-color: $primary-blue;
        height: 100%;
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>
