<template>
  <div class="five">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>边框内圆角</span>
        </div>
        <div class="text item">
          <span>实现边框内圆角，通常我们使用两个元素可以采取很多种方式轻松实现效果，两个元素实现的方式这里不再赘述，下面是一个元素实现边框内圆角的方法</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
          <span><b class='key'>border-radius</b><b class='value'>: 10px;</b></span>
          <span><b class='key'>box-shadow</b><b class='value'>: 0 0 0 8px #eee;</b></span>
          <span><b class='key'>outline</b><b class='value'>: 8px solid #eee;</b></span>
        </div>
        <div class="text item">
          <span>这里面我们通过box-shadow和outline重合实现效果，实际上outline不会跟着元素的圆角走，它实现的是一个直角的边框，这样元素圆角的位置就会出现空隙，而box-shadow会跟随元素的圆角进行投影，但是投影外侧也是圆角的，最终两个属性重合之后，就实现了边框内圆角</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'five',
  created() {
    document.title = "草丛趴，喝饮料";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/six',
        prevRoute: '/four',
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
.five {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #E67FA2; */
}

.backorigin {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 0 8px #ddd;
  outline: 8px solid #ddd;
  span {
    display: block;
  }
}
</style>
