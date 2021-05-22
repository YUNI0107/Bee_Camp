<script>
import Navbar from "../../components/Navbar/Navbar";
import CampBlock from "../../components/CampBlock/CampBlock";
import MapItem from "../../components/MapItem/MapItem";
import MapModal from "../../components/MapModal/MapModal";
import InfoModal from "../../components/InfoModal/InfoModal";
export default {
  data() {
    return {
      place: "north",
      cate: [],
      type: [],
      require_list: [],
      show_more: false,
      modal: false,
      scrollL: 0,
      cusor_click: false,
      // 篩選
      showList: null,
      no_result: false,
      loading: false,
      cursor_name: false,
      // 訊息提示
      infomodal: false,
      modaltype: "unlike",
    };
  },
  components: {
    Navbar,
    CampBlock,
    MapItem,
    MapModal,
    InfoModal
  },
  computed:{
      nowList(){
        let g_check = this.cate.findIndex( item => item == "glamping")
        let c_check = this.cate.findIndex( item => item == "camping")

        if( (g_check !== -1 && c_check !== -1 )|| (g_check == -1 && c_check == -1) ){
          return this.$store.state.map.initial_map[this.place]
        }else if( g_check !== -1 ){
          return this.$store.state.map.initial_map[this.place].filter(element => element.glamping == true)
        }else{
          return this.$store.state.map.initial_map[this.place].filter(element => element.glamping == false)
        }
      }
  },
  watch:{
    nowList(){
      if(this.showList == null){
        this.showList = this.nowList
      }
    }
  },
  methods: {
    toggleModal(toggle) {
      this.modal = toggle;
    },
    scrollList(dir){
        this.scrollTrak()
        let distance = window.innerWidth * 0.8
        let hold_in_w = this.$refs.hold_in.offsetWidth - 1000;
        if(dir == 'l' && this.scrollL > 0){
            this.$refs.hold.scrollLeft = (this.scrollL -= distance)
        }else if(dir == "r" && this.scrollL < hold_in_w){
            this.$refs.hold.scrollLeft = (this.scrollL += distance)
        }
    },
    scrollTrak(){
        this.scrollL = this.$refs.hold.scrollLeft;
    },
    startMouseScroll(e){
        let v_this = this;
        this.cusor_click = true;
        function move(me){
            v_this.scrollTrak();
            v_this.$refs.hold.scrollLeft = (v_this.scrollL -= (me.movementX * 50))
        }

        this.$refs.hold.addEventListener('mousemove', move)
        this.$refs.hold.addEventListener('mouseup', ()=>{
            this.$refs.hold.removeEventListener('mousemove', move)
            this.cusor_click = false;
        })
    },
    cursorMove(e){
      this.$refs.cursor.style.left = e.pageX + "px"
      this.$refs.cursor.style.top = e.pageY + "px"
    },
    search(){
      this.loading = true;
      this.no_result = false;
      let finalList = this.nowList;
      // 第一階段篩選
      if(this.type.length !== 0){
        for(let i = 0; i < this.type.length; i++){
        finalList = finalList.filter(element => element.type[this.type[i]] == true)
      }
      };
      // 第二階段篩選
      if(this.require_list.length !== 0){
        for(let j = 0; j < this.require_list.length; j++){
        finalList = finalList.filter(element => element.require_list[this.require_list[j]] == true)
      }
      };
      let result = finalList.length == 0 ? true : false;
      if(result){
         setTimeout(()=>{
           this.no_result = true;
         },1000)
      }else{
           this.no_result = false;
      }
      this.showList = finalList;
       setTimeout(()=>{
          this.loading = false;
        },1000)
    },
    cusorToggle(check){
      this.cursor_name = check;
    },
    closeInfoModal(){
      this.infomodal = false;
    },
    likeModal(check){
      this.infomodal = true;
      if(check){
        this.modaltype = "like"
      }else{
        this.modaltype = "unlike"
      }
    }
  },
  mounted(){
      this.$nextTick(()=>{
          this.$refs.hold.addEventListener("scroll", this.scrollTrak)
          this.$refs.hold.addEventListener("mousedown", this.startMouseScroll)
          this.$refs.hold.addEventListener("mousemove", this.cursorMove)
      })

      // 判斷是不是從首頁來的search，state有沒有值
      let home_check = this.$store.state.search.place !== "";
      if(home_check){
        this.place = this.$store.state.search.place;
        this.cate = this.$store.state.search.cate;
        this.type = this.$store.state.search.type;
        this.require_list = this.$store.state.search.require_list;
        this.search();
        this.$store.commit("search/clearSearch")
      }
  },
  destroyed(){
  }
};
</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>



