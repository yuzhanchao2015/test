<template>
  <div class="six">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>连续的图片边框1</span>
        </div>
        <div class="text item">
          <span>有时候我们想把一张图片应用为边框，而不是背景，通常我们会使用两个元素，一个图片元素放在下面，上面放上另一个元素，垂直居中即可，此方法也不再赘述，下面是一个元素实现图片边框的方案</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>border</b><b class='value'>: 10px solid transparent;</b></span>
          <span><b class='key'>background</b><b class='value'>: linear-gradient(white, white), url('../assets/borderimg.jpg');</b></span>
          <span><b class='key'>background-size</b><b class='value'>: cover;</b></span>
          <span><b class='key'>background-clip</b><b class='value'>: padding-box, border-box;</b></span>
          <span><b class='key'>background-origin</b><b class='value'>: border-box;</b></span>
        </div>
        <div class="text item">
          <span>透明带宽度border，露出背景图，背景使用白色到白色的渐变模拟出纯白色的背景(其他颜色一样)；background-origin默认值是padding-box,图片的显示被放置在左上角，以平铺的方式展开，为了修正这个问题，只需要把background-origin设置为border-box。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'six',
  created() {
    document.title = "守望先锋白花钱了";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/seven',
        prevRoute: '/five',
      },
    };
  },
  methods: {
    changeTrsStyle(style) {
      this.$emit('changeTrs', {
        'drc': style.drc,
        "iBig": style.iBig

      });
    },
  },
  components: {
    move
  },

}
</script>
<style  lang="scss"  scoped>
.six {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #FFEFA1; */
}
.backorigin {
  border: 10px solid transparent;
  background: linear-gradient(white, white), url('../assets/borderimg.jpg');
  background-size: cover;
  background-clip: padding-box,border-box;
  background-origin: border-box;
  span {
    display: block;
  }
}
</style>
