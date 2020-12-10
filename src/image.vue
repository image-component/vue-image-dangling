<template>
  <div
    class="vue-image-dangling"
    :class="className"
    :style="danglingStyle"
    ref="dangling"
    @mousemove="move"
    @mouseleave="leace"
    @mouseover="over">
    <div class="vue-image-dangling-card" ref="dangling-card" />
    <img :src="src" :width="width" />
  </div>
</template>

<script>
export default {
  name: 'ImageDangling',

  props: {
    className: {
      type: String
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 300
    },
  },

  created () {

  },

  mounted () {
    this.loadStyle()
  },

  watch: {
    data(newValue, oldValue) {

    }
  },

  destroyed () {
    ;
  },

  data() {
    return {
      danglingStyle: {},
    }
  },

  methods: {
    loadStyle() {
      this.danglingStyle = {
        "width": `${this.width}px`
      }
    },
  },
}
</script>

<style scoped>

</style>

<style>

</style>
