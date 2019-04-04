<template>
  <div
    class="tile"
    :style="{'border-color': tileData.color}"
    :class="tileData.disabled && 'disabled'"
  >
    <div class="corner" :style="{'background-color': tileData.color}">
      <span>{{tileData.cornerText}}</span>
    </div>
    <div class="icon-wrapper">
      <img :src="getImageSrc">
    </div>
    <div class="title">{{tileData.title}}</div>
    <div class="sub-title">{{tileData.subTitle}}</div>
  </div>
</template>

<script>
export default {
  name: "tile",
  props: {
    tileData: Object
  },
  computed: {
    getImageSrc() {
      return require(`../assets/tile-icons/${this.tileData.icon}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles";

.tile {
  border-width: 2px;
  border-style: solid;
  flex-basis: 28%;
  margin-bottom: 2%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 6px 0 rgba(71, 87, 110, 0.34);
  overflow: hidden;
  height: 255px;
  display: flex;
  flex-direction: column;
  .corner {
    transform: rotate(-45deg);
    width: 150px;
    height: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    top: -85px;
    left: -85px;
    color: #fff;
    span {
      max-width: 60%;
      text-align: center;
    }
  }
  .icon-wrapper {
    flex: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 20px;
  }

  .title {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .sub-title {
    flex: 1;
    color: $primary-blue;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 992px) {
    flex-basis: 46%;
    margin-bottom: 5%;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
}
</style>
