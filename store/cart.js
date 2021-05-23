export const state = () => ({
    cart_list: [
       {
            id: 1,
            num: 1,
       },
       {
            id: 4,
            num: 1,
       },
       {
            id: 12,
            num: 2,
       },

    ]
})

export const mutations = {
     addCart(state,playload) {
          let check = state.cart_list.findIndex((element) => element.id == playload.id)
          if(check == -1){
               state.cart_list.push(playload)
          }else{
               state.cart_list.splice(check, 1, playload)
          }
     },
     changeNum(state,playload){
          let check = state.cart_list.findIndex((element) => element.id == playload.id)
          state.cart_list.splice(check, 1, playload)
     },
     deleteProduct(state, playload){
          let check = state.cart_list.findIndex((element) => element.id == playload)
          state.cart_list.splice(check, 1)
     }
}
