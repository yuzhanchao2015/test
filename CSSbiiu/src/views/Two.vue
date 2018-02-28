<template>
<div class="two">
  <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
    <div class="wrap">
      <div class="title">
        <span>多重边框</span>
      </div>
      <div class="moreBorderNo item">
        <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
        <span><b class='key'>box-shadow</b><b class='value'>: 0 0 0 10px #655;</b></span>
      </div>
      <div class="text item">
        <span>首先我们可以用box-shadow代替border，这没什么了不起的</span>
      </div>
      <div class="moreBorder item">
        <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
        <span><b class='key'>box-shadow</b><b class='value'>: 0 0 0 10px #655,0 0 0 20px deeppink;</b></span>
      </div>
      <div class="text item">
        <span>但是box-shadow的好处在于，它支持逗号分隔语法，我们可以创建任意数量的投影，不过这种方式创建出来的假边框和border不一致，因为它不会影响布局<b style='color: #e60000'>注意上一段代码与这一段文案的距离</b>，所以我们可以通过内边距或者外边距(取决于投影是内嵌还是外扩)来模拟边框所需要的空间</span>
      </div>
      <div class="moreBorderlast item">
        <span><b class='key'>background</b><b class='value'>: #fff;</b></span>
        <span><b class='key'>box-shadow</b><b class='value'>: 0 0 0 10px #655,0 0 0 20px deeppink;</b></span>
        <span><b class='key'>margin</b><b class='value'>: 10px auto;</b></span>
      </div>
      <div class="text item">
        <span>这样是不是正常了</span>
        <span>当然我们也可以通过border和outline来实现两层边框，但是这样就只限于两层，无法像box-shadow一样创建多层边框</span>
      </div>
    </div>
  </move>
</div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'two',
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/three',
        prevRoute: '/one',
      },
    }
  },
  created() {
    document.title = "代代版本选盖伦";

  },
  mounted() {

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
.two {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #B5CFD8; */
}
.moreBorderNo {
  background: #fff;
  box-shadow: 0 0 0 10px #655;
  span {
    display: block;
  }
}
.moreBorder {
  background: #fff;
  box-shadow: 0 0 0 10px #655,
              0 0 0 20px deeppink;
  width: calc(80vw - 20px);
  span {
    display: block;
  }
}
.moreBorderlast {
  background: #fff;
  box-shadow: 0 0 0 10px #655,
              0 0 0 20px deeppink;
  width: calc(80vw - 20px);
  margin: calc(1vh + 10px) auto;
  span {
    display: block;
  }
}
</style>
