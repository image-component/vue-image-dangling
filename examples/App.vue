<template>
  <div class="demo">
    <image-dangling :src="src"></image-dangling>
    <image-dangling :src="src" :hover-scale="4" :slope="10"></image-dangling>
    <image-dangling :src="src" blend-mode="color"></image-dangling>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true'
      }
    }
  }
</script>

<style>
body {
  text-align: center;
  padding: 20em;
}

.demo {
  display: flex;
}
</style>
