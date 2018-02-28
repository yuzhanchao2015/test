<template>
  <div class="onefive">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>折角效果</span>
        </div>
        <div class="back item">
          <span><b class='key'>.zmkm</b><b class='value'> {</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>position</b><b class='value'>: relative;</b>&nbsp;&nbsp;<b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>background</b><b class='value'>: linear-gradient(-150deg, transparent 15px, #fff 0);</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>border-radius</b><b class='value'>: 5px;</b></span>
          <span><b class='value'>}</b></span>
          <span><b class='key'>.zmkm::before</b><b class='value'> {</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>content</b><b class='value'>: '';</b>&nbsp;&nbsp;<b class='key'>position</b><b class='value'>: absolute;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>top</b><b class='value'>: 0;</b>&nbsp;&nbsp;<b class='key'>right</b><b class='value'>: 0;</b>&nbsp;&nbsp;<b class='key'>width</b><b class='value'>: 17.3px;</b>&nbsp;&nbsp;<b class='key'>height</b><b class='value'>: 30px;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>background</b><b class='value'>: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0,rgba(0,0,0,.4)) 100% 0 no-repeat;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>transform</b><b class='value'>: translateY(-13px) rotate(-30deg);</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>transform-origin</b><b class='value'>: bottom right;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>border-bottom-left-radius</b><b class='value'>: inherit;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>box-shadow</b><b class='value'>: -2px 2px 3px -1px rgba(0,0,0,.15)</b></span>
          <span><b class='value'>}</b></span>

        </div>
        <div class="text item">
          <span>涉及内容略多，介绍会占据大量篇幅和图片，详情请搜索 CSS秘密花园:折角效果</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onefive',
  created() {
    document.title = "菜刀没有小鸡鸡";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/onesix',
        prevRoute: '/onefour',
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
.onefive {
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
  background: #fff;
  background: linear-gradient(-150deg, transparent 15px, #fff 0);
  border-radius: 5px;
  span {
    display: block;
  }
}
.back::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 17.3px;
  height: 30px;
  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0,rgba(0,0,0,.4)) 100% 0 no-repeat;
  transform: translateY(-13px) rotate(-30deg);
  transform-origin: bottom right;
  border-bottom-left-radius: inherit;
  box-shadow: -2px 2px 3px -1px rgba(0,0,0,.15)
}

</style>
