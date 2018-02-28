<template>
  <div class="oneseven">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>垂直居中</span>
        </div>
        <div class="text item">
          <span>已经有很多方法可以实现有固定宽高元素的垂直居中，下面介绍几个不定宽高的元素如何实现垂直居中。</span>
        </div>
        <div class="back item">
          <span><b class='key'>position</b><b class='value'>: absolute;</b></span>
          <span><b class='key'>top</b><b class='value'>: 50%;</b>&nbsp;&nbsp;<b class='key'>left</b><b class='value'>: 50%;</b></span>
          <span><b class='key'>transform</b><b class='value'>: translate(-50%, -50%);</b></span>
        </div>
        <div class="text item">
          <span>1、效果不错，但是有时候我们不能使用绝对定位，他对布局的影响太大。</span><br>
          <span>2、可能导致元素的现实有一些模糊，因为元素可能被放置在半个像素上。不过可以通过transform-style: preserve-3d来修复</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>width</b><b class='value'>: 200px;</b></span>
          <span><b class='key'>padding</b><b class='value'>: 10px 15px;</b></span>
          <span><b class='key'>margin</b><b class='value'>: 50vh auto 0;</b></span>
          <span><b class='key'>transform</b><b class='value'>: translateY(-50%);</b></span>
        </div>
        <div class="text item">
          <span>效果也很不错，不过只适用于视口中居中，这里需要强调一下，margin-top设置的是50vh，而不是50%，因为margin的百分比是以父元素的宽度作为解析基准的，而1vh就等于1%的屏幕高度。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'oneseven',
  created() {
    document.title = "若你喜欢怪人";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/oneeight',
        prevRoute: '/onesix',
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
.oneseven {
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
  background: #fff;
  span {
    display: block;
  }
}
.backorigin {
  background: #fff;
  span {
    display: block;
  }
}
</style>
