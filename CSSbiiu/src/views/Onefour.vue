<template>
  <div class="onefour">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>单侧投影双侧投影</span>
        </div>
        <div class="back item">
          <span><b class='key'>box-shadow</b><b class='value'>: 4px 6px 8px rgba(0,0,0,.5);</b></span>
        </div>
        <div class="text item">
          <span>整个渲染可以理解为在元素相同位置画一个和元素相同尺寸的指定颜色的矩形，然后进行偏移和模糊处理（模糊阴影长度约为设置数值的两倍），最后将模糊后的矩形于原始元素的交际部分切除掉（注意，并不是元素在模糊矩形的上层，你可以将元素背景设置成半透明，并不会看到元素下面的投影，这一点和text-shadow不同，text-shadow下方的投影不会被切除）</span>
        </div>
        <div class="backorigin item">
          <span><b class='key'>box-shadow</b><b class='value'>: 0px 10px 8px -8px rgba(0,0,0,.5);</b></span>
        </div>
        <div class="text item">
          <span>这个属性还有另外一个参数，扩张半径，这个参数会根据你指定的值去扩大或缩小投影的尺寸，一个-5px的扩张半径会把头投影的宽度和高度各减少10px，根据这个参数，我们就能实现单侧投影。</span>
        </div>
        <div class="backtwo item">
          <span><b class='key'>box-shadow</b><b class='value'>: 0px 8px 8px -8px rgba(0,0,0,.5),
                      0px -8px 8px -8px rgba(0,0,0,.5);</b></span>
        </div>
        <div class="text item">
          <span>两块投影实现双侧投影，基本上就是单侧投影应用两次。不规则投影也很有意思，使用从svg借鉴过来的filter实现，有兴趣可以去查一查。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'onefour',
  created() {
    document.title = "汽水！我要汽水！！";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/onefive',
        prevRoute: '/onethree',
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
.onefour {
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
  background: #fff;
  box-shadow: 4px 6px 8px rgba(0,0,0,.5);
  span {
    display: block;
  }
}
.backorigin {
  background: #fff;
  box-shadow: 0px 10px 8px -8px rgba(0,0,0,.5);
  span {
    display: block;
  }
}
.backtwo {
  background: #fff;
  box-shadow: 0px 8px 8px -8px rgba(0,0,0,.5),
              0px -8px 8px -8px rgba(0,0,0,.5);
  span {
    display: block;
  }
}
</style>
