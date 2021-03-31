<template>
<div class="tabs">
  <el-tag 
  :key="tag.name"
  v-for="tag in tags" size="small"
  :closable="tag.name!== 'home'"
  :disable-transitions="false"
  :effect="$route.name === tag.name ? 'dark' : 'plain'"
  @close="handleClose(tag)" @click="changeMenu(tag)">
  {{tag.label}}
 </el-tag>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    methods: {
      ...mapMutations({
        close:'closeTab'
      }),
      handleClose(tag) {
        this.close(tag)
      },
      changeMenu(item){
        this.$router.push({name:item.name})
        this.$store.commit('selectMenu',item)
      }
    },
    computed: {
        ...mapState({
          tags: state =>state.tab.tabsList   
        })
    },
}
</script>

<style lang="scss" scoped>
.tabs{
    padding: 10px;
}
</style>