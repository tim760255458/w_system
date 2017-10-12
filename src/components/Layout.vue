<template>
  <div class="layout">
    <w-header></w-header>
    <w-nav></w-nav>
    <div class="content">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
    </div>
  </div>
</template>

<script>
import WHeader from 'components/w-header'
import WNav from 'components/w-nav'
export default {
  name: 'Layout',
  data () {
    return {}
  },
  components: {
    WHeader,
    WNav
  }
}
</script>

<style scoped>
  .layout{
    width: 100%;
    position: relative;
  }
  .content{
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 250px;
    width: calc(100% - 250px);
    height: calc(100vh - 70px);
    overflow: auto;
  }
</style>