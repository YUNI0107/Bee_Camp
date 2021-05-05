export const state = () => ({
    cart_list: [
       {
            id: 1,
            num: 2,
       },
       {
            id: 2,
            num: 10,
       },
       {
            id: 3,
            num: 3,
       },
       {
            id: 4,
            num: 1,
       },
       {
            id: 7,
            num: 2,
       },
       {
            id: 8,
            num: 2,
       },
       {
            id: 9,
            num: 2,
       },
       {
            id: 14,
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
