<script>
import Navbar from "../../../../components/Navbar/Navbar";
import FooterSection from "../../../../components/FooterSection/FooterSection";
import MapItem from "../../../../components/MapItem/MapItem";
import MapModal from "../../../../components/MapModal/MapModal";
import PicZoom from "../../../../components/PicZoom/PicZoom";
import InfoModal from "../../../../components/InfoModal/InfoModal";
import CampLeftNav from "../../../../components/CampLeftNav/CampLeftNav";
import CampPicMobile from "../../../../components/CampPicMobile/CampPicMobile";
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
      infomodal: false,
      modaltype: "unlike",
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
    camptype_pic() {
      if (this.$route.params.camptype == "glamping") {
        return "g_pic";
      } else {
        return "c_pic";
      }
    },
    current_pic() {
      if (this.current_pic_num == 0) {
        return require(`../../../../assets/${this.camptype_pic}/${this.camp_info.big_img}`);
      } else {
        return require(`../../../../assets/${this.camptype_pic}/${
          this.camp_info.img[this.current_pic_num - 1]
        }`);
      }
    },
    user_map_list() {
      return this.$store.state.map.user_map_list;
    },
    user_index() {
      if (this.camp_info !== null) {
        return this.user_map_list.findIndex(
          item => item.place_name == this.camp_info.place_name
        );
      }else{
        return 0
      }
    }
  },
  watch: {
    like() {
      if (this.like == true && this.camp_info!== null) {
        this.addPop(this.place, this.camp_info.place_name);
      } else if (this.user_index !== -1 && this.camp_info!== null) {
        this.clearPop(this.camp_info.place_name);
      }
    },
    user_map_list() {
      if (this.user_index == -1) {
        this.like = false;
      }
    }
  },
  components: {
    CampLeftNav,
    Navbar,
    FooterSection,
    MapItem,
    MapModal,
    CampPicMobile,
    InfoModal,
  },
  methods: {
    toggleModal(toggle) {
      this.modal = toggle;
    },
    openPic(num) {
      this.current_pic_num = num;
      this.picZoom("+");
    },
    picZoom(check) {
      check == "+" ? (this.piczoom = true) : (this.piczoom = false);
    },
    addPop(section, place_name) {
      // 判斷是不是已經在列表中
      if (this.user_index == -1) {
        this.$store.commit("map/likePush", [section, place_name]);
        this.infomodal = true;
        this.modaltype = "like";
      }
    },
    clearPop(place_name) {
      this.$store.commit("map/clearUserLike", this.user_index);
      this.infomodal = true;
      this.modaltype = "unlike";
    },
    closeInfoModal(){
      this.infomodal = false;
    }
  },
  mounted() {
    let glamping = this.camptype == "glamping" ? true : false;
    axios.get("/Bee_Camp/Map_JSON/allCamp.json").then(res => {
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
        if (this.camp_info.require[item]) {
          switch (item) {
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
          this.require_list.push(item_name);
        }
      }
      this.like = this.user_index == -1 ? false : true;
    });
  }
};
</script>
<template src="./template.html"></template>
<style src="./style.css" scoped></style>
