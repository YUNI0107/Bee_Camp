<script>
import Navbar from "../../components/Navbar/Navbar";
import CampBlock from "../../components/CampBlock/CampBlock";
import MapItem from "../../components/MapItem/MapItem";
import MapModal from "../../components/MapModal/MapModal";
export default {
  data() {
    return {
      place: "n",
      cate: ["glamping"],
      night: false,
      grass: false,
      cloud: false,
      rent: false,
      river: false,
      show_more: false,
      modal: false,
      scrollL: 0,
      cusor_click: false,
    };
  },
  components: {
    Navbar,
    CampBlock,
    MapItem,
    MapModal
  },
  computed:{
      showList(){
          return this.$store.state.map.initial_map.north
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
    }
  },
  mounted(){
      this.$nextTick(()=>{
          this.$refs.hold.addEventListener("scroll", this.scrollTrak)
          this.$refs.hold.addEventListener("mousedown", this.startMouseScroll)
          this.$refs.hold.addEventListener("mousemove", this.cursorMove)
      })
  },
  destroyed(){
  }
};
</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>



