<template>
  <div class="seven">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>连续的图片边框2</span>
        </div>
        <div class="text item">
          <span>这个技巧还可以用在渐变图案上，比如老式信封边框</span>
        </div>
        <div class="back item">
          <span><b class='key'>border</b><b class='value'>: 10px solid transparent;</b></span>
          <span><b class='key'>background</b><b class='value'>: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, #fff 0, #fff 25%, #58a 0, #58a 37.5%, #fff 0, #fff 50%) 0 / 70px 70px;</b></span>
        </div>
        <div class="text item">
          <span>有一个比较有意思的就是蚂蚁行军边框，这是一种虚线边框，看起来在不断转动，几乎所有的图像标记软件都会使用这个效果来标识选区</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>@keyframes ants</b><b class='value'> { to { </b><b class='key'> background-position </b><b class='value'> : 100%; } }</b></span>
          <br>
          <span><b class='key'>border</b><b class='value'>: 1px solid transparent;</b></span>
          <span><b class='key'>background</b><b class='value'>: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / 10px 10px;</b></span>
          <span><b class='key'>animation</b><b class='value'>: ants 12s linear infinite;</b></span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'seven',
  created() {
    document.title = "lol玩家看不起荣耀玩家";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/eight',
        prevRoute: '/six',
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
.seven {
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
  border: 10px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, #fff 0, #fff 25%, #58a 0, #58a 37.5%, #fff 0, #fff 50%) 0 / 70px 70px;
  span {
    display: block;
  }
}
@keyframes ants {
    to {
      background-position: 100%;
    }
}
.backorigin {
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / 10px 10px;
  animation: ants 12s linear infinite;
  span {
    display: block;
  }
}
</style>
