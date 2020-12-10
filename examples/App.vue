<template>
  <div>
    <image-dangling :src="src"></image-dangling>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src: 'https://github.com/image-component/react-image-shadow/blob/main/image/red.png?raw=true'
      }
    }
  }
</script>

<style>
body {
  text-align: center;
  padding: 10em;
}
</style>
