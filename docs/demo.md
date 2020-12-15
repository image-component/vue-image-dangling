# 🎁 Demo

## Base

Basic image settings.

<demo-code>
  <demo-1></demo-1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-dangling :src="src1"></image-dangling>
        <image-dangling :src="src2" :radius="20"></image-dangling>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true',
            src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
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
  </highlight-code>
</demo-code>

## Hover

Use `hoverScale` `hoverSlope` to achieve different hover effects.

<demo-code>
  <demo-2></demo-2>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-dangling :src="src1" :hover-scale="2"></image-dangling>
        <image-dangling :src="src2" :hover-slope="20"></image-dangling>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true',
            src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
          }
        },
      }
    </script>
  </highlight-code>
</demo-code>

## BlendMode

Use `blendMode` to achieve different background blending effects.

When set `true`, the default is `soft-light`. More see [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode).

<demo-code>
  <demo-3></demo-3>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-dangling :src="src1" blend-mode></image-dangling>
        <image-dangling :src="src2" blend-mode="saturation"></image-dangling>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true',
            src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
          }
        },
      }
    </script>
  </highlight-code>
</demo-code>
