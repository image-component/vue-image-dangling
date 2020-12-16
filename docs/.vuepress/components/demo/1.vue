<template>
  <div class="demo">
    <image-dangling :src="src1"></image-dangling>
    <image-dangling :src="src2" :radius="20"></image-dangling>
  </div>
</template>

<script>
import ImageDangling from '../app'

export default {
  components: {
    ImageDangling,
  },

  data() {
    return {
      src1: 'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true',
      src2: 'https://github.com/image-component/gallery/blob/main/girl/2.jpg?raw=true',
    }
  },
}
</script>

<style>
  .demo {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>