<template>
  <div class="three">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>灵活的背景定位1</span>
        </div>
        <div class="backNo item">
          <span><b class='key'>background</b><b class='value'>: url(../assets/plant.png) no-repeat bottom right #fff;</b></span>
          <span><b class='key'>background-position</b><b class='value'>: right 10px bottom 10px;</b></span>
        </div>
        <div class="text item">
          <span>大多数开发者只是用过background-position的两个参数，其实他还有另外的两个参数，就像上面代码块写的那样，添加偏移量，之所以在第一行代码中也定义背景图位置是为了实现不兼容浏览器的回退，以防样式混乱</span>
        </div>
        <div class="back item">
          <span><b class='key'>background</b><b class='value'>: url(../assets/plant.png) no-repeat bottom right #fff;</b></span>
          <span><b class='key'>background-position</b><b class='value'>: calc(100% - 10px) calc(100% - 10px);</b></span>
        </div>
        <div class="text item">
          <span>calc()函数同样可以满足我们要的需求，需要注意的是calc函数内的算式，符号两边一定要有空格</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'three',
  created() {
    document.title = "荣耀开车不，我躺赢贼溜";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/four',
        prevRoute: '/two',
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
<style lang="scss" scoped>
.three {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /* background-color: #D4ED9D; */
}
.backNo {
  background: url(../assets/plant.png) no-repeat bottom right #fff;
  background-position: right 10px bottom 10px;
  background-size: 30px;
  span {
    display: block;
  }
}
.back {
  background: url(../assets/plant.png) no-repeat bottom right #fff;
  background-position: calc(100% - 10px) calc(100% - 10px);
  background-size: 30px;
  span {
    display: block;
  }
}
</style>
