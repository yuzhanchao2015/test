<template>
  <div class="onethree">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>梯形</span>
        </div>
        <div class="back item">
          <span><b class='key'>.btzhy</b><b class='value'> {</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>position</b><b class='value'>: relative;</b>&nbsp;&nbsp;<b class='key'>display</b><b class='value'>: inline-block;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>padding</b><b class='value'>: 30px 30px 7px;</b></span>
          <span><b class='value'> }</b></span>
          <span><b class='key'>.btzhy::before</b><b class='value'> {</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>content</b><b class='value'>: '';</b>&nbsp;&nbsp;<b class='key'>position</b><b class='value'>: absolute;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>top</b><b class='value'>: 0; </b><b class='key'>right</b><b class='value'>: 0; </b><b class='key'>bottom</b><b class='value'>: 0; </b><b class='key'>left</b><b class='value'>: 0; </b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>z-index</b><b class='value'>: -1;</b>&nbsp;&nbsp;<b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>transform</b><b class='value'>: scaleY(1.4) perspective(10px) rotateX(1deg);</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>transform-origin</b><b class='value'>: bottom;</b></span>
          <span><b class='value'> }</b></span>
        </div>

        <div class="text item">
          <span>其他方式创建梯形要么缺陷严重，要么需要额外html，这里的实现方案是通过伪元素加上3d景深变换。3d变换实现视觉上的梯形，伪元素解决内容和背景一起发生景深变换，transform-origin设置为bottom是为了让变换以底边为轴，方便页面布局，scaleY()放大是为了解决元素倾斜之后形成的梯形在2d画面上的投影高度变低，放大数值一点点慢慢调试，一般在1.3左右。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onethree',
  created() {
    document.title = "青蛙旅行切时间";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/onefour',
        prevRoute: '/onetwo',
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
<style lang="scss"  scoped>
.onethree {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #E67FA2; */
}
.back {
  position: relative;
  display: inline-block;
  padding: 30px 30px 7px;
  span {
    display: block;
  }
}
.back::before {
  content: '';
  position: absolute;
  top: 0; right: 0px; bottom: 0; left: 0px;
  z-index: -1;
  background: #fff;
  transform: scaleY(1.4) perspective(10px) rotateX(1deg);
  transform-origin: bottom;
}
</style>
