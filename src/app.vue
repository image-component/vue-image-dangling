<template>
  <div
    class="vue-image-dangling"
    :class="className"
    :style="danglingStyle"
    ref="dangling"
    @mousemove="move"
    @mouseleave="leave"
    @mouseover="over">
    <div class="vue-image-dangling-card" ref="dangling-card" :style="cardStyle"/>
    <img :src="src" :alt="alt" :width="width" :style="imgStyle"/>
  </div>
</template>

<script>
export default {
  name: 'ImageDangling',

  props: {
    alt: {
      type: String
    },
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
    radius: {
      type: Number,
      default: 8
    },
    hoverScale: {
      type: Number,
      default: 1.6,
      validator: val => val >= 1 && val <= 5
    },
    hoverSlope: {
      type: Number,
      default: 60,
      validator: val => val >= 10 && val <= 90
    },
    blendMode: {
      type: [Boolean, String],
      default: false,
    },
    shadeColor: {
      type: String,
      default: '#000'
    }
  },

  mounted () {
    this.loadStyle()
  },

  data() {
    return {
      danglingStyle: {},
      cardStyle: {},
      imgStyle: {},
    }
  },

  methods: {
    loadStyle() {
      this.danglingStyle = {
        "width": `${this.width}px`,
        "border-radius": `${this.radius}px`
      }

      this.cardStyle = {
        "border-radius": `${this.radius}px`
      }

      this.imgStyle = {
        "border-radius": `${this.radius}px`
      }
    },

    over() {
      const card = this.$refs['dangling-card']
      card.style.opacity = 1;
    },

    leave() {
      const dangling = this.$refs['dangling'];
      const card = this.$refs['dangling-card'];
      dangling.style.transform = `perspective(500px) scale(1)`;
      card.style.opacity = 0;
    },

    move(event) {
      const dangling = this.$refs['dangling'];
      const card = this.$refs['dangling-card'];

      const relX = (event.offsetX + 1) / dangling.offsetWidth;
      const relY = (event.offsetY + 1) / dangling.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * this.hoverSlope}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -this.hoverSlope}deg)`;
      dangling.style.transform = `perspective(500px) scale(${this.hoverScale}) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      if (this.blendMode) {
        if(typeof(this.blendMode) == 'string') {
          card.style.mixBlendMode = this.blendMode;
        } else {
          card.style.mixBlendMode = 'soft-light';
        }
        card.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${this.shadeColor})`;
      }
    },

    scale(val, inMin, inMax, outMin, outMax) {
      return outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
    },
  },
}
</script>

<style lang="less" scoped>
.vue-image-dangling {
  transition: all 0.1s ease;
  z-index: 1;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  &-card {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 0.1s ease;
    opacity: 0;
    z-index: 2;
  }

  img {
    display: block;
    transition: all 0.3s ease;
  }
}
</style>
