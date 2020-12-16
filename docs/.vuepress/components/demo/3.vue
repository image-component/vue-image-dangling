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
      src1: 'https://github.com/image-component/gallery/blob/main/girl/5.jpg?raw=true',
      src2: 'https://github.com/image-component/gallery/blob/main/girl/6.jpg?raw=true',
    }
  },
}
</script>
