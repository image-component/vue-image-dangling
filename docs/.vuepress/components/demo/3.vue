<template>
  <div class="demo">
    <image-dangling :src="src1" blend-mode></image-dangling>
    <image-dangling :src="src2" blend-mode="hard-light"></image-dangling>
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
      src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true',
      src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
    }
  },
}
</script>
