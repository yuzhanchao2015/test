<template>
  <div class="onesix">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>文字效果</span>
        </div>
        <div class="back item">
          <span class='kong'>空心字</span>
          <span><b style='color:#fff;'>color</b><b style='color:#eee;'>: #fff;</b></span>
          <span><b style='color:#fff;'>text-shadow</b><b style='color:#eee;'>: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;</b></span>
        </div>
        <div class="backorigin item">
          <span class='kong'>文字外发光</span>
          <span><b class='key'>color</b><b style='color:#eee;'>: #ffc;</b></span>
          <span><b class='key'>text-shadow</b><b style='color:#eee;'>: 0 0 10px, 0 0 30px;</b></span>
        </div>
        <div class="backhide item">
          <span class='kong'>模糊字体</span>
          <span><b class='key'>color</b><b style='color:#eee;'>: transparent;</b></span>
          <span><b class='key'>text-shadow</b><b style='color:#eee;'>: 0 0 10px #fff, 0 0 30px #fff;</b></span>
        </div>
        <div class="back3d item">
          <span class='kong'>CSS3D</span>
          <span><b class='key'>color</b><b class='value'>: fff;</b></span>
          <span><b class='key'>text-shadow</b><b class='value'>:  0 1px hsl(0,0%,85%),
                        0 2px hsl(0,0%,80%),
                        0 3px hsl(0,0%,75%),
                        0 4px hsl(0,0%,70%),
                        0 5px hsl(0,0%,65%),
                        0 5px 10px black;</b></span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onesix',
  created() {
    document.title = "澳门皇家赌场开业啦。。。";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/oneseven',
        prevRoute: '/onefive',
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
.onesix {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.back {
  background: deeppink;
  .kong {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }
  span {
    display: block;
  }
}
.backorigin {
  background: #203;
  .kong {
    font-size: 30px;
    font-weight: 700;
    color: #ffc;
    text-shadow: 0 0 10px, 0 0 30px;
  }
  span {
    display: block;
  }
}
.backhide {
  background: #000;
  .kong {
    font-size: 30px;
    font-weight: 400;
    color: transparent;
    text-shadow: 0 0 10px #fff, 0 0 30px #fff;
  }
  span {
    display: block;
  }
}
.back3d {
  background: #58a;
  .kong {
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-shadow:  0 1px hsl(0,0%,85%),
                  0 2px hsl(0,0%,80%),
                  0 3px hsl(0,0%,75%),
                  0 4px hsl(0,0%,70%),
                  0 5px hsl(0,0%,65%),
                  0 5px 10px black;
  }
  span {
    display: block;
  }
}
</style>
