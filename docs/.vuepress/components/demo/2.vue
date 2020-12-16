<template>
  <div class="demo">
    <image-dangling :src="src1" :hover-scale="2"></image-dangling>
    <image-dangling :src="src2" :hover-slope="20"></image-dangling>
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
      src1: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
      src2: 'https://github.com/image-component/gallery/blob/main/girl/4.jpg?raw=true',
    }
  },
}
</script>
