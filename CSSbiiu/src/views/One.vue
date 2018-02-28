<template>
  <div class="one">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>半透明边框</span>
        </div>
        <div class="harfBorderNo item">
          <span><b class='key'>border</b><b class='value'>: 10px solid hsla(0,0%,100%,.5);</b></span>
          <span><b class='key'>background</b><b class='value'>: white;</b></span>
        </div>
        <div class="text item">
          <span>理论上，上述代码就可以实现我们要的半透明边框，但是根据background的工作原理，北京会延伸到边框所在的区域下层</span>
        </div>
        <div class="harfBorder item">
          <span><b class='key'>border</b><b class='value'>: 10px solid hsla(0,0%,100%,.5);</b></span>
          <span><b class='key'>background</b><b class='value'>: white;</b></span>
          <span><b class='key'>background-clip</b><b class='value'>: padding-box;</b></span>
        </div>
        <div class="text item">
          <span>我们可以通过background-clip属性来调整上述行为，这个属性的初始值是border-box，意味着背景会被元素德尔变宽外沿框裁切掉，当我们把这个属性的值设置为padding-box，浏览器就会用内边距的外沿来把背景裁切掉</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'one',
  created() {
    document.title = "一代版本一代神";
  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/two',
        prevRoute: '/home',
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
<style lang="scss" scoped>
.one {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.harfBorderNo {
  border: 10px solid hsla(0,0%,100%,.5);
  background: white;
  span {
    display: block;
  }
}
.harfBorder {
  border: 10px solid hsla(0,0%,100%,.5);
  background: white;
  background-clip: padding-box;
  span {
    display: block;
  }
}
</style>
