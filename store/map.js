import axios from 'axios';
export const state = () => ({
  initial_map: {},
  user_map_list: [],
})

export const mutations = {
  //初始加入所有地點資料
  addInitialMap(state, mapInitialData) {
    state.initial_map = mapInitialData;
  },
  //獲得使用者喜歡地點清單
  getUserMap(state) {
    state.user_map_list = JSON.parse(localStorage.getItem('user_map_list'));
  },
  // 推入喜歡清單 playload[0] section playload[1] name
  likePush(state,playload){
    let index = state.initial_map[playload[0]].findIndex(
      item => item.place_name == playload[1]
    );
    let like = state.initial_map[playload[0]][index];
    state.user_map_list.push(like);
  },
  clearUserLike(state,index){
    console.log(index);
    state.user_map_list.splice(index,1);
  }
}

export const actions = {
  async getInitialMap({commit}) {
    let mapInitialData;
    await axios.get('/Map_JSON/allCamp.json').then(res => {
      mapInitialData = res.data;
    })
    commit('addInitialMap', mapInitialData)
  },
  
}
