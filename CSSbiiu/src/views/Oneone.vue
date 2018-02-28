<template>
  <div class="oneone">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>切角效果1</span>
        </div>
        <div class="back item">
          <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span><b class='key'>background</b><b class='value'>: linear-gradient(-45deg, transparent 15px, #fff 0);</b></span>
        </div>
        <div class="text item">
          <span>css渐变实现切角，第一行不是必须加的，这里是为了防止部分浏览器不支持渐变属性，加上是将其作为回退机制</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span><b class='key'>background</b><b class='value'>: linear-gradient(-45deg, transparent 15px, #fff 0) right, linear-gradient(45deg, transparent 15px, #fff 0) left;</b></span>
          <span><b class='key'>background-size</b><b class='value'>: 50% 100%;</b></span>
          <span><b class='key'>background-repeat</b><b class='value'>: no-repeat;</b></span>
        </div>
        <div class="text item">
          <span>设置background-size横向大小为元素一半和设置背景不重复，都是为了避免生成的两层渐变相互覆盖，生成四个切角也是一样，需要注意的是生成四个切角，需要将background-size横纵向都设置成50%，避免发生覆盖。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'oneone',
  created() {
    document.title = "dota一千场人机你怕不怕";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/onetwo',
        prevRoute: '/ten',
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
.oneone {
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
  padding: 20px;
  background: #fff;
  background: linear-gradient(-45deg, transparent 15px, #fff 0);
  span {
    display: block;
  }
}
.backorigin {
  padding: 20px;
  background: #fff;
  background: linear-gradient(-45deg, transparent 15px, #fff 0) right, linear-gradient(45deg, transparent 15px, #fff 0) left;
  background-size: 60% 100%;
  background-repeat: no-repeat;
  span {
    display: block;
  }
}
</style>
