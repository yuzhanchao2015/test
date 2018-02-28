<template>
  <div class="ten">
    <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
      <div class="wrap">
        <div class="title">
          <span>菱形图片</span>
        </div>
        <div class="text item">
          <span>css实现菱形图片的方案有两种方法，其中一种通过transform的rotate将外层一个div旋转45度，overflow设置为hidden，然后div里面的图片反向旋转45度以此抵消外层元素的旋转，这样实际上形成的并不是菱形，而是八边形，因为max-width:100%;这条声明中的100%是被解析成容器的边长，所以要实现菱形，需要将max-width设置成元素对角线的长度，由勾股定理可以知道，正方形对角线约是边长的1.42倍，这样我们只需要将max-width设置成142%即可，通过scale()方式放大元素为原来的1.42倍也可以。因为上述方案需要额外的一层父级元素，所以代码不在赘述，下面介绍一种只需要一个元素就可以实现菱形图片的方案</span>
        </div>
        <div class="back item">
          <img src="../assets/borderimg.png" alt="">
        </div>
        <div class="text item">
          <span><b style='color: #e60000;'>clip-path</b>: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);</span><br>
          <span>一行代码即可,适用于各种形状的图片。</span>
        </div>
      </div>
    </move>
  </div>
</template>

<script>
import move from '@/components/Move'
export default {
  name: 'ten',
  created() {
    document.title = "我就不一样，我扫雷";

  },
  mounted() {

  },
  data() {
    return {
      moveFlag: {
        next: true,
        prev: true,
        nextRoute: '/oneone',
        prevRoute: '/nine',
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
.ten {
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
  text-align: center;
  img {
    width: 50%;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
}
</style>
