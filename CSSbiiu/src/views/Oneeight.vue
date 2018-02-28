<template>
  <div class="oneeight">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>最后一哆嗦</span>
        </div>
        <div class="back item">
          <img src="../assets/weibo.jpeg" alt="">
        </div>
        <div class="text item">
          <span>256只青蛙256张嘴，512只眼睛1024条腿​</span><br>
          <span><b @click='weibo' style='color: #fff;text-shadow: 0 0 10px, 0 0 30px;'>于渔欲语鱼</b>    一个没什么营养的微博​</span>
        </div>
        <div class="text item">
          <span>烤扇贝上的粉丝和蒜，超级好吃​</span><br>
          <span><b style='color: #fff;text-shadow: 0 0 10px, 0 0 30px;'>THE_chao</b>    一个没多少好友的微信​</span>
        </div>
        <div class="text item">
          <span>这里介绍的所有CSS技术全部来自《CSS揭秘》​</span><br>
          <span>作者[希]LEA VEROU</span><br>
        </div>
        <div class="text item">
          <span>本文只是摘取书中比较适合移动端的CSS技巧</span>
        </div>
        <div class="text item">
        </div>
        <div class="text item">
        </div>
        <div class="text item">
        </div>
        <div class="text item">
        </div>
        <div class="text item">
        </div>
        <div class="text item">
        </div>

        <div class="text item">
          <span>© 2018-2-28  twgdh btzhy zmkm</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'oneeight',
  created() {
    document.title = "于渔欲语鱼";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: false,
        prev: true,
        nextRoute: '',
        prevRoute: '/oneseven',
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
    weibo() {
      console.log(111);
    }
  },
  components: {
    move
  },

}
</script>
<style lang="scss"  scoped>
.oneeight {
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
  img  {
    width: 30%;
    border-radius: 50%;
  }
  span {
    display: block;
  }
}
.item {
  text-align: center;
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
