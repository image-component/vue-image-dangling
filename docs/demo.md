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
            src1: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
            src2: 'https://github.com/image-component/gallery/blob/main/girl/4.jpg?raw=true',
          }
        },
      }
    </script>
  </highlight-code>
</demo-code>

For comfort. Suggest

- `1 <= hoverScale <= 5`
- `10 <= hoverSlope <= 90`

## BlendMode

Use `blendMode` to achieve different background blending effects.

<demo-code>
  <demo-3></demo-3>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo">
        <image-dangling :src="src1" blend-mode></image-dangling>
        <image-dangling :src="src2" blend-mode="hard-light"></image-dangling>
      </div>
    </template>

    <script>
      export default {
        data() {
          return {
            src1: 'https://github.com/image-component/gallery/blob/main/girl/5.jpg?raw=true',
            src2: 'https://github.com/image-component/gallery/blob/main/girl/6.jpg?raw=true',
          }
        },
      }
    </script>
  </highlight-code>
</demo-code>

When set `true`, the default is `soft-light`. At the same time, you can use `shadeColor` to set the mixed background color, it default is `#000`.

More see [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode). Or refer to the following list:

### `mix-blend-mode`

| Name          | Chinese Name |
| ------------- | ------------ |
| ` normal`     | 正常         |
| `multiply `   | 正片叠底     |
| `screen `     | 滤色         |
| `overlay `    | 叠加         |
| `darken; `    | 变暗         |
| `lighten `    | 变亮         |
| `color-dodge` | 颜色减淡     |
| `color-burn ` | 颜色加深     |
| ` hard-light` | 强光         |
| ` soft-light` | 柔光         |
| ` difference` | 差值         |
| `exclusion`   | 排除         |
| `hue `        | 色相         |
| `saturation`  | 饱和度       |
| `color `      | 颜色         |
| ` luminosity` | 亮度         |
