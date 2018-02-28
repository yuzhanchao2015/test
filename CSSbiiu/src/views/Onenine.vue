<template>
  <div class="onenine">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>灵活的背景定位</span>
        </div>
        <div class="back item">
          <span><b class='key'>padding</b><b class='value'>: 20px;</b></span>
          <span><b class='key'>background</b><b class='value'>: url(../assets/plant.png) no-repeat bottom right #fff;</b></span>
          <span><b class='key'>background-position</b><b class='value'>: right 20px bottom 20px;</b></span>
        </div>
        <div class="text item">
          <span>在绘制背景图片在摸个角落的偏移量时，有一种情况非常常见：偏移量与容器的内边距一致，写法就是上面那种啦，但是当我们需求更改时，我们要同事更改三个地方，维护起来不是很方便</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>padding</b><b class='value'>: 20px;</b></span>

          <span><b class='key'>background</b><b class='value'>: url(../assets/plant.png) no-repeat bottom right #fff;</b></span>
          <span><b class='key'>background-origin</b><b class='value'>: content-box;</b></span>
        </div>
        <div class="text item">
          <span>background-position属性默认是以padding box(内边距外沿框)为准的，这样设置他的top、left、bottom、right才不会遮住背景图片，不过background-origin属性可以修改他的基准，变为content-box(内容区外沿框)，这样我们每次只需要更改padding就可以满足我们的需求</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onenine',
  created() {
    document.title = "person";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/twozero',
        prevRoute: '/oneeight',
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
.onenine {
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
  background: url(../assets/plant.png) no-repeat bottom right #fff;
  background-position: right 20px bottom 20px;
  background-size: 30px;
  span {
    display: block;
  }
}
.backorigin {
  padding: 20px;
  background: url(../assets/plant.png) no-repeat bottom right #fff;
  background-origin: content-box;
  background-size: 30px;
  span {
    display: block;
  }
}
</style>
