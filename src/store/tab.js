export default{
  state: {
      menu:[],
      currentMenu: null,
      tabsList:[
        {
            path:'/',
            label:'首页',
            name:'home',
            icon:'s-home'
        }
      ]
  },
  mutations: {
      selectMenu(state,val){
         if(val.name !=='home'){
             state.currentMenu = val
             if(state.tabsList.indexOf(val)===-1)
             state.tabsList.push(val)
         }
         else{
             state.currentMenu = null
         }
      },
      closeTab(state,val){
          let result = state.tabsList.findIndex(item => item.name===val.name)
          state.tabsList.splice(result, 1)
      }
  },
  actions: {}
}