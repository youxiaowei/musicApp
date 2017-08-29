<template>
  <div ref="wrapper">
      <slot></slot> 
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    }
  },
  props: {
    // 监听滚动事件
    probeType: {
      type: Number,
      default: 1
    },
    // 是否能点击
    click: {
      type: Boolean,
      default: true
    },
    // 初始化数据
    data: {
      type: Array,
      default: null
    },
    // 监听滚动
    listenScroll: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
    },
     // 代理方法，当this.scroll 有的话，调用this.scroll.enable()方法
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
  // 刷新这个scroll,重新计算高度
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    // 滚动到
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  // 监听数据变化
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
