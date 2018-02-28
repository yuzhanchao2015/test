<template>
<div id="app">
  <div class="home" @touchmove.stop.prevent='iMove($event)'>
    <div class="iphone" ref='iphone' :style='[iStyle,transitionStyle]'  @touchstart.stop='iStart($event)' @touchend.stop='iEnd($event)'>
      <transition name="iphone-fade" mode="out-in">
        <ul v-show='iBigFlag'>
          <li @touchstart.stop="routeTo('/one')">半透明边框</li>
          <li @touchstart.stop="routeTo('/two')">多重边框</li>
          <li @touchstart.stop="routeTo('/three')">灵活的背景定位</li>
          <li @touchstart.stop="routeTo('/five')">边框内圆角</li>
          <li @touchstart.stop="routeTo('/six')">连续的图片边框</li>
          <li @touchstart.stop="routeTo('/eight')">自适应椭圆</li>
          <li @touchstart.stop="routeTo('/nine')">平行四边形</li>
          <li @touchstart.stop="routeTo('/ten')">菱形图片</li>
          <li @touchstart.stop="routeTo('/oneone')">切角效果</li>
          <li @touchstart.stop="routeTo('/onethree')">梯形</li>
          <li @touchstart.stop="routeTo('/onefour')">投影</li>
          <li @touchstart.stop="routeTo('/onefive')">折角效果</li>
          <li @touchstart.stop="routeTo('/onesix')">文字效果</li>
          <li @touchstart.stop="routeTo('/oneseven')">垂直居中</li>
          <!-- <li @touchstart.stop="routeTo('/onesix')">文字效果</li> -->
        </ul>
      </transition>
    </div>
  </div>
  <transition :name="nameClass">
    <router-view @changeTrs='changeTrsStyle'></router-view>
  </transition>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data() {
    return {
      iBigFlag: false,
      nameClass: 'up',
      iphone: null,
      moveFlag: false,
      clickL: 0,
      clickT: 0,
      startL: 0,
      startT: 0,
      endL: 0,
      endT: 0,
      lastT: 300,
      lastL: document.documentElement.clientWidth- 46,
      iStyle: {
        width: '26px',
        height: '26px',
        top: '300px',
        left: document.documentElement.clientWidth- 46 + 'px'
      },
      transitionStyle: {
        transition: ''
      },
    }
  },
  created() {
  },
  methods: {
    routeTo(to) {
      // console.log(to);
      this.$router.push({path: to})

      this.iBigFlag = false;
      setTimeout(() => {
        this.transitionStyle = {
          left: this.lastL + 'px',
          top: this.lastT + 'px',
          transition: 'all .3s ease'
        }
      },10)
    },
    changeTrsStyle(style) {
      console.log(style);
      this.nameClass = style.drc;
      if(this.iBigFlag) {
        this.iBigFlag = false;

        this.transitionStyle = {
          left: this.lastL + 'px',
          top: this.lastT + 'px',
          transition: 'all .3s ease'
        }
      }
    },
    iStart($event) {
      $event.stopPropagation();
      this.moveFlag = true;
      this.nameClass = 'left';
      if(!this.iBigFlag) {
        this.transitionStyle.transition = ''
      }
      this.clickL = $event.changedTouches[0].pageX - parseInt(this.$refs.iphone.style.left);
      this.clickT = $event.changedTouches[0].pageY - parseInt(this.$refs.iphone.style.top);
      this.startL = $event.changedTouches[0].pageX;
      this.startT = $event.changedTouches[0].pageY;
    },
    iMove($event) {
      // $event.stopPropagation();
      if(this.iBigFlag) {
        return ;
      }
      var left = $event.changedTouches[0].pageX - this.clickL
      var top = $event.changedTouches[0].pageY - this.clickT
      var domW = document.documentElement.clientWidth
      var domH = document.documentElement.clientHeight
      if(this.moveFlag) {
        if(left < 0) {
          this.$refs.iphone.style.left = 0 + 'px';
        }else if(left > domW - 46) {
          this.$refs.iphone.style.left = domW - 46 + 'px';
        }else{
          this.$refs.iphone.style.left = left + 'px';
          this.lastL = left
        }
        if(top < 0) {
          this.$refs.iphone.style.top = 0 + 'px';
        }else if(top > domH - 46){
          this.$refs.iphone.style.top = domH - 46 + 'px';
        }else{
          this.$refs.iphone.style.top = top + 'px';
          this.lastT = top
        }
      }
    },
    iEnd($event) {
      // $event.stopPropagation();
      // this.transitionStyle.transition = 'all .3s ease'
      this.moveFlag = false;
      if(this.iBigFlag) {
        return ;
      }
      this.endL = $event.changedTouches[0].pageX;
      this.endT = $event.changedTouches[0].pageY;
      if(Math.abs(this.endL - this.startL) < 10 && Math.abs(this.endT - this.startT) < 10) {
        if(this.iBigFlag) {
          return ;
        }
        this.transitionStyle = {
          width: '60%',
          height: '420px',
          borderRadius: '4px',
          left: '18%',
          top: 'calc(50vh - 210px)',
          backgroundColor: 'rgba(255,255,255,.7)',
          boxShadow: '0 0 8px 8px rgba(0,0,0,.7)',
          transition: 'all .3s ease-out'
        }
        this.iBigFlag = true
        return ;
      }
      this.transitionStyle.transition = 'all .3s ease-out'
      var domW = document.documentElement.clientWidth
      var domH = document.documentElement.clientHeight
      var toTop = $event.changedTouches[0].pageY
      var toRight = $event.changedTouches[0].pageX
      setTimeout(() => {
        if(toTop < 20) {
          this.$refs.iphone.style.top = '0px';
          this.lastT = 0
        }else if(domH - toTop < 100) {
          this.$refs.iphone.style.top = domH - 46 + 'px'
          this.lastT = domH - 46
        }else {
          this.$refs.iphone.style.left = domW - 46 + 'px';
          this.lastL = domW - 46;
        }
      },0)

      // console.log(this.lastL);
      // console.log(this.lastT);
    },
  },
  components: {
  }
}
</script>

<style lang="scss">
html,
body {
  min-height: 100vh;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  color: #2c3e50;
  min-height: 100vh;
  width: 100vw;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

.home {
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: hsla(0,0%,100%,.3);
  .iphone {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.8);
    box-shadow: 0 0 8px 8px rgba(0,0,0,.8);
    margin: 10px;
    z-index: 9999;
    ul {
      overflow: scroll;
      width: 100%;
      z-index: 99999;
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      -webkit-overflow-scrolling: touch;
      li {
        padding: 2px 0;
        height: 26px;
        line-height: 26px;
      }
      li:nth-child(odd) {
        background-color: rgba(255,255,255,0);
        color: rgba(0,0,0,1);
      }
      li:nth-child(even) {
        background-color: rgba(0,0,0,.6);
        color: rgba(255,255,255,1);
      }
    }
  }
}
.home:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: url(../static/img/bg.jpg) no-repeat #ccc;
  background-size: calc(100% - 10px) calc(100% - 10px);
  background-position: center;
  filter: blur(6px);
}
.left-enter {
  /* opacity: 0; */
  transform: translate(-100%,0px);
}

.left-enter-to {
  /* opacity: 1; */
  transform: translate(0px,0px);
}

.left-leave {
  /* opacity: 1; */
  transform: translate(0px,0px);
}

.left-leave-to {
  /* opacity: 0; */
  transform: translate(100%,0);
}

.left-leave-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}

.left-enter-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}
.down-enter {
  transform: translate(0px, 99%);

}

.down-enter-to {
  transform: translate(0px, 0px);

}

.down-leave {
  transform: translate(0px, 0px);

}

.down-leave-to {
  transform: translate(0px, -100%);

}

.down-leave-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}

.down-enter-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}

.up-enter {
  /* opacity: 0; */
  transform: translate(0px,-100%);
}

.up-enter-to {
  /* opacity: 1; */
  transform: translate(0px,0px);
}

.up-leave {
  /* opacity: 1; */
  transform: translate(0px,0px);
}

.up-leave-to {
  /* opacity: 0; */
  transform: translate(0px,100%);
}

.up-leave-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}

.up-enter-active {
  transition: all .3s ease-out;
  position: absolute;
  width: 100%;
}
.component-fade-enter-active {
  transition: opacity .3s  .2s ease;
}
.component-fade-leave-active {
  transition: opacity .1s ease;
}
.component-fade-enter, .component-fade-leave-to
{
  opacity: 0;
}
.iphone-fade-enter-active {
  transition: opacity .3s  .2s ease;
}
.iphone-fade-leave-active {
  transition: opacity 0 ease;
}
.iphone-fade-enter, .iphone-fade-leave-to
{
  opacity: 0;
}
// 内部统一样式
.wrap {
  height: 100vh;
  width: 100vw;
  text-align: center;
  .title {
    text-align: center;
    background-color: hsla(0,100%,0,.3);
    height: 6vh;
    line-height: 6.2vh;
    color: #f7f7f7;
    font-size: 4.26vw;
    font-weight: 700;
    margin-bottom: 3vh;
  }
  .key {
    color: #e60000;
  }
  .value {
    color: #333;
  }
  .item {
    width: 80vw;
    margin: 1vh auto;
    padding: 10px;
    font-size: 3.73vw;
    text-align: left;
  }
  .item-auto {
    display: inline-block;
    margin: 1vh auto;
    padding: 10px;
    font-size: 3.73vw;
  }
  .text {
    margin: 0 auto;
    font-size: 3.73vw;
    text-align: left;
  }
}
</style>
