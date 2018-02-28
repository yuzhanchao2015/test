<template>
  <div class="eight">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>自适应椭圆</span>
        </div>
        <div class="back item-auto">
          <span><b class='key'>border-radius</b><b class='value'>: 50%;</b></span>
        </div>
        <div class="text item">
        </div>
        <div class="backorigin item-auto">
          <span><b class='key'>border-radius</b><b class='value'>: 50% / 100% 100% 0 0;</b></span>
        </div>
        <div class="text item">
        </div>
        <div class="backoriginleft item-auto">
          <span><b class='key'>border-radius</b><b class='value'>: 50% / 100% 100% 0 0;</b></span>
        </div>
        <div class="text item">
        </div>
        <div class="backoriginhalfhalf item-auto">
          <span><b class='key'>border-radius</b><b class='value'>: 100% 0 0 0;</b></span>
        </div>
        <div class="text item">
          <span>Simurai以精湛的手法将border-radius发挥到了极致，其糖果按钮展示了各种奇妙的形状（搜索BonBon糖果按钮即可）</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'eight',
  created() {
    document.title = "dota玩家看不起lol玩家";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/nine',
        prevRoute: '/seven',
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
.eight {
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
  border-radius: 50%;
  padding: 30px;
  background-color: #fff;
  span {
    display: block;
  }
}
.backorigin {
  border-radius: 50% / 100% 100% 0 0;
  padding: 40px 30px 20px 30px;
  background-color: #fff;
  span {
    display: block;
  }
}
.backoriginleft {
  border-radius: 100% 0 0 100% / 50%;
  padding: 30px;
  background-color: #fff;
  span {
    display: block;
  }
}
.backoriginhalfhalf {
  border-radius: 100% 0 0 0;
  padding: 40px 20px 20px 40px;
  background-color: #fff;
  span {
    display: block;
  }
}
</style>
