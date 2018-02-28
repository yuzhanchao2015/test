<template>
  <div class="homewrap">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>CSS揭秘</span>
        </div>
        <div class="text item">
          <span>小小的代码，大大的世界</span>
        </div>
        <div class="mao item">
          <img src="../assets/mao.jpeg" alt="">
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'homewrap',
  created() {
    document.title = "芝麻开门";
  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: false,
        nextRoute: '/one',
        prevRoute: '',
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
.homewrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.text {
  text-align: center;
  font-size: 16px;
}
.mao {
  margin: 80px auto 0;
  text-align: center;
  img {
    width: 80%;
  }
}
</style>
