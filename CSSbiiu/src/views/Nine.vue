<template>
  <div class="nine">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>平行四边形</span>
        </div>
        <div class="back item">
          <span><b class='key'>transform</b><b class='value'>: skewX(-15deg);</b></span>
        </div>
        <div class="text item">
          <span>此种方式实现的平行四边形，内容页跟着倾斜了，当然我们可以再里面的内容上在应用一次反向的skew()以此第抵消容器的变形，但是这种方案我们不得不创建一层额外的html包裹内容，另一种方案使用伪元素方案实现</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>.twgdh </b><b class='value'> { </b><b class='key'> position </b><b class='value'> : relative; }</b></span>
          <span><b class='key'>.twgdh::before</b><b class='value'>{</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>content</b><b class='value'>: '';</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>background-color</b><b class='value'>: #fff;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>position</b><b class='value'>: absolute;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>top</b><b class='value'>: 0; </b><b class='key'>right</b><b class='value'>: 0; </b><b class='key'>bottom</b><b class='value'>: 0; </b><b class='key'>left</b><b class='value'>: 0; </b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>z-index</b><b class='value'>: -1;</b></span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;<b class='key'>transform</b><b class='value'>: skew(-15deg);</b></span>
          <span><b class='value'>}</b></span>
        </div>
        <div class="text item">
          <span>对伪元素变形，内容不会受到影响，为了保持为元素良好的灵活性，可以自动继承主元素的尺寸，可以通过设置position属性实现，但是这样伪元素就位于内容之上，所以需要将伪元素的z-index设置为-1。</span>
        </div>
        <div class="text item">
          <span>伪元素技巧不仅仅适用于skew()变形，还适用于其他任何变形样式。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'nine',
  created() {
    document.title = "x-box玩家天下无敌";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/ten',
        prevRoute: '/eight',
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
.nine {
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
  transform: skewX(-15deg);
  background-color: #fff;
  span {
    display: block;
  }
}
.backorigin {
  position: relative;
  padding-left: 20px;
  span {
    display: block;
  }
}
.backorigin::before {
  content: '';
  background-color: #fff;
  position: absolute;
  top: 0; right: 0px; bottom: 0; left: 0px;
  z-index: -1;
  transform: skew(-15deg);
}
</style>
