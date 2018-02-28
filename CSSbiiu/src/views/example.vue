<template>
<div class="two">
  <move :moveFlag='moveFlag' @changeTrs='changeTrsStyle'>
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
    document.title = "";

  },
  mounted() {

  },
  methods: {
    changeTrsStyle(style) {
      this.$emit('changeTrs', {
        'drc': style.drc,
      });
    },
  },
  components: {
    move
  },

}
</script>
<style scoped>
.two {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #B5CFD8;
}

</style>
