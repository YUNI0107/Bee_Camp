export const state = () => ({
    place: "",
    cate: [],
    require_list: [],
    type: [],
})

export const mutations = {
  searchCamp(state,playload){
     state.place = playload.place
     state.cate = playload.cate
     state.require_list = playload.require_list
     state.type = playload.type
  },
  clearSearch(state){
    state.place = ""
    state.cate = []
    state.require_list = []
    state.type = []
  }
}