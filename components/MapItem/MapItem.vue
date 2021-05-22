<script>
// mapbox地圖
// https://api.mapbox.com/styles/v1/amy123chou/ckia7td6o0erk19o0287jp25j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW15MTIzY2hvdSIsImEiOiJja2lhNzZ6a2kwNHllMnhzM3E0MzB3YWRhIn0.-4gXvvpmI9PnreAp2v3E5Q
export default {
  data() {
    return {
      url:
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 8,
      center: [23.97462124512251, 120.98196632771392],
      bounds: null,
      attribution: `
        &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors  <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>
      `,
      markplace: [25.287723, 121.511026],
      staticAnchor: [0, 0],
      iconOptions: {
        popupAnchor: [0, -20],
      },
      // 刪除標記點
      clear_timer: null, 
    };
  },
  computed: {
    initial_map() {
      return this.$store.state.map.initial_map;
    },
    user_map_list() {
      return this.$store.state.map.user_map_list;
    },
    dynamicSize(){
      if(this.zoom < 7){
        return 15;
      }else if(this.zoom < 8){
        return 25;
      }else{
        return 40;
      }
    },
    popupOptions_g(){
      return{
        minWidth: 130,
        className: 'pop_g',
      }
    },
    popupOptions_c(){
      return{
        minWidth: 130,
        className: 'pop_c',
      }
    },
  },
  methods: {
    // 地圖物件
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    mapOnReady() {
      this.map = this.$refs.myMap.mapObject;
    },
    // 更新userlist

    // 打點，新增到用戶喜歡列表
    addPop(section, place_name) {
      // 判斷是不是已經在列表中
      let check_list = this.user_map_list.map(item=>{
        return item.place_name;
      });
      let check = check_list.indexOf(place_name);

      if(check == -1){
        let index = this.initial_map[section].findIndex(
          item => item.place_name == place_name
        );
        this.$store.commit('map/likePush',[section,index])
      }
    },
    toogleLike(place_name,e){
      if(e.target.checked){
        clearTimeout(this.clear_timer);
      }else{
        e.target.checked = false;
        let index = this.user_map_list.findIndex(
          item => item.place_name == place_name
        );
        console.log(index,place_name);
        this.clear_timer = setTimeout(()=>{
          this.$store.commit("map/clearUserLike",index)
        }, 1000);
      }
    },
    // 取得連結
    getRouteLink(place_info){
      let section = [];
      let index;
      for(let key in this.initial_map){
        index = this.initial_map[key].findIndex(element => element.place_name == place_info.place_name);
        if(index !== -1) {
          section.push(key)
        }
      }
      let route_text = place_info.glamping == true ? 'glamping' : "camping"
      return `/camp/${section[0]}/${route_text}/${place_info.number}`;
    },
  },
  mounted() {
    // 初始化地圖
    if (localStorage.getItem("user_map_list")) {
      this.$store.commit("map/getUserMap");
      this.$store.dispatch("map/getInitialMap");
    } else {
      this.$store.dispatch("map/getInitialMap");
    }
  }
};
</script>
<template src="./template.html"></template>
<style scoped src="./style.css"></style>