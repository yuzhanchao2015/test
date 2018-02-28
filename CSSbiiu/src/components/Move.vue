<template>
  <div class="move" @touchstart.stop.prevent='iStart($event)' @touchend.stop.prevent='iEnd($event)'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'move',
  props: ['moveFlag'],
  created() {
  },
  mounted() {

  },
  data() {
    return {
      moveStart: 0,
      moveEnd: 0,
    };
  },
  methods: {
    iStart($event) {
      this.$emit('changeTrs', {
        'iBig': true,
        'drc': 'up'
      });
      this.moveStart = $event.changedTouches[0].pageY;
    },
    iEnd($event) {
      this.moveEnd = $event.changedTouches[0].pageY;
      if(this.moveFlag.next) {
        if(this.moveStart - this.moveEnd > 50) {
          this.$emit('changeTrs', {
            'drc': 'down',
          });
          this.$router.push({
            path: this.moveFlag.nextRoute
          })
        }
      }
      if(this.moveFlag.prev) {
        if(this.moveEnd - this.moveStart > 50) {
          this.$emit('changeTrs', {
            'drc': 'up',
          });
          this.$router.push({
            path: this.moveFlag.prevRoute
          })
        }
      }
    },
  },
  components: {

  },

}
</script>
<style scoped>
.move {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}

</style>
