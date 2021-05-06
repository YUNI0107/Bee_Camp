export const state = () => ({
  nav_hide: false,
})

export const mutations = {
    toggleNav(state, playload){
        state.nav_hide = playload;
    }
}
