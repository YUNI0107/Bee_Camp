<script>
import Navbar from "../../../../components/Navbar/Navbar";
import FooterSection from "../../../../components/FooterSection/FooterSection";
import MapItem from "../../../../components/MapItem/MapItem";
import MapModal from "../../../../components/MapModal/MapModal";
import PicZoom from "../../../../components/PicZoom/PicZoom";
import CampLeftNav from "../../../../components/CampLeftNav/CampLeftNav";
import axios from "axios";
export default {
  data() {
    return {
      camp_info: null,
      like: false,
      modal: false,
      price_list: [],
      equipment_list: [],
      require_list: [],
      camplittle_img: [],
      current_pic_num: 0,
      piczoom: false,
    };
  },
  computed: {
    place() {
      return this.$route.params.place;
    },
    camptype() {
      return this.$route.params.camptype;
    },
    number() {
      return this.$route.params.id;
    },
    camptype_pic(){
        if(this.$route.params.camptype == "glamping"){
            return "g_pic"
        }else{
            return "c_pic"
        }
    },
    current_pic(){
        if(this.current_pic_num == 0){
            return require(`../../../../assets/${this.camptype_pic}/${this.camp_info.big_img}`)
        }else {
            return require(`../../../../assets/${this.camptype_pic}/${this.camp_info.img[this.current_pic_num - 1]}`)
        }
    }
  },
  components: {
    CampLeftNav,
    Navbar,
    FooterSection,
    MapItem,
    MapModal
  },
  methods: {
    toggleModal(toggle) {
      this.modal = toggle;
    },
    openPic(num){
        this.current_pic_num = num;
        this.picZoom('+')
    },
    picZoom(check){
            check == '+' ? this.piczoom = true : this.piczoom = false;
    },
  },
  mounted() {
    let glamping = this.camptype == "glamping" ? true : false;
    axios.get("/Map_JSON/allCamp.json").then(res => {
      // 取編號Ｆ相同的資料
      let numberList = res.data[this.place].filter(
        element => element.number == this.number
      );
      //   判斷是否為豪華露營，加入data
      this.camp_info = numberList.filter(
        element => element.glamping == glamping
      )[0];

      // 將各筆資料整理後加入data
      this.price_list = this.camp_info.price;
      this.equipment_list = this.camp_info.equipment;
      this.camplittle_img = this.camp_info.img;
      let item_name;
      for (let item in this.camp_info.require) {
          if(this.camp_info.require[item]){
             switch (item){
                  case "night":
                      item_name = "夜景";
                      break;
                  case "car":
                      item_name = "車位";
                      break;
                  case "grass":
                      item_name = "大草皮";
                      break;
                  case "cloud":
                      item_name = "雲海";
                      break;
                  case "rent":
                      item_name = "可租裝備";
                      break;
                  case "river":
                      item_name = "河邊";
                      break;
              }
              this.require_list.push(item_name)
          }
      }
    });
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
