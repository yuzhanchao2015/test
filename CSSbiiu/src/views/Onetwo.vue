<template>
  <div class="onetwo">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>切角效果2</span>
        </div>
        <div class="back item">
          <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span><b class='key'>background</b><b class='value'>:
                      radial-gradient(circle at top left, transparent 15px, #fff 0) top left,
                      radial-gradient(circle at top right, transparent 15px, #fff 0) top right,
                      radial-gradient(circle at bottom right, transparent 15px, #fff 0) bottom right,
                      radial-gradient(circle at bottom left, transparent 15px, #fff 0) bottom left;</b></span>
          <span><b class='key'>background-size</b><b class='value'>: 50%;</b></span>
          <span><b class='key'>background-repeat</b><b class='value'>: no-repeat;</b></span>
        </div>
        <div class="text item">
          <span>圆形切角</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span><b class='key'>clip-path</b><b class='value'>: polygon(20px 0, calc(100% - 20px) 0,100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%,20px 100%, 0 calc(100% - 20px), 0 20px);</b></span>
        </div>
        <div class="text item">
          <span>clip-path属性实现切角，这种方式不是在元素的背景上做手脚，是真的切掉了元素上的东西，包括图片的角落，以及元素内的文本</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onetwo',
  created() {
    document.title = "搭桥大师老于";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/onethree',
        prevRoute: '/oneone',
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
.onetwo {
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
  background: radial-gradient(circle at top left, transparent 15px, #fff 0) top left,
              radial-gradient(circle at top right, transparent 15px, #fff 0) top right,
              radial-gradient(circle at bottom right, transparent 15px, #fff 0) bottom right,
              radial-gradient(circle at bottom left, transparent 15px, #fff 0) bottom left;
  background-size: 60%;
  background-repeat: no-repeat;
  span {
    display: block;
  }
}
.backorigin {
  padding: 20px;
  background: #fff;
  clip-path: polygon(20px 0, calc(100% - 20px) 0,100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%,20px 100%, 0 calc(100% - 20px), 0 20px);
  span {
    display: block;
  }
}
</style>
