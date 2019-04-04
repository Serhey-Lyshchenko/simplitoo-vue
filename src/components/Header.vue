<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.svg">
    </div>
    <div class="menu">
      <img src="../assets/settings.svg">
      <img src="../assets/help.svg">
      <div class="info">
        <img class="domain-icon" src="../assets/domain.svg">
        <div class="user-info">
          <span>{{'Company name'}}</span>
          <span>sarl/eurl</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "../styles.scss";

header {
  display: flex;
  justify-content: space-between;
  height: 90px;
  background-color: $primary-blue;
  color: #fff;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3%;
  }
  .menu {
    display: flex;
    width: 380px;
    justify-content: space-around;
    align-items: center;
    .info {
      cursor: pointer;
      &:hover {
        background-color: darken($primary-blue, 10%);
      }
      display: flex;
      padding: 0 35px 0 30px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 5px;
      font-size: 14px;
      .domain-icon {
        max-height: 33px;
        padding: 10px;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
</style>
