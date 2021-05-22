<script>
export default {
  props: ["dark_back", "camp_info", "index", "place"],
  data() {
    return {
      like: false
    };
  },
  computed: {
    glamping() {
      return this.camp_info.glamping ? "g_pic" : "c_pic";
    },
    cate_text() {
      return this.camp_info.glamping ? "豪華露營" : "紮營露營";
    },
    route_text() {
      return this.camp_info.glamping ? "glamping" : "camping";
    },
    route_link() {
      return `/camp/${this.place}/${this.route_text}/${this.camp_info.number}`;
    },
    user_map_list() {
      return this.$store.state.map.user_map_list;
    },
    user_index() {
      return this.user_map_list.findIndex(
        item => item.place_name == this.camp_info.place_name
      );
    }
  },
  watch: {
    like() {
      if (this.like == true) {
        this.addPop(this.place, this.camp_info.place_name);
      } else if(this.user_index !== -1){
        this.clearPop(this.camp_info.place_name);
      }
    },
    user_map_list() {
        if(this.user_index == -1){
            this.like = false;
        }
    }
  },
  methods: {
    addPop(section, place_name) {
      // 判斷是不是已經在列表中
      if (this.user_index == -1) {
        this.$store.commit("map/likePush", [section, place_name]);
        this.$emit("likeModal", true)
      }
    },
    clearPop(place_name) {
      this.$store.commit("map/clearUserLike", this.user_index);
      this.$emit("likeModal", false)
    },
    nameEnter(){
      this.$emit("cusorToggle", true)
    },
    nameLeave(){
      this.$emit("cusorToggle", false)
    }
  },
  mounted() {
    this.like = this.user_index == -1 ? false : true;
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
