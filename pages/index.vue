<script>
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/FooterSection/FooterSection";
import CampHomeBlock from "../components/CampHomeBlock/CampHomeBlock";
import MapItem from "../components/MapItem/MapItem";
import ProductListBlock from "../components/ProductListBlock/ProductListBlock";

import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  data() {
    return {
      place: "",
      cate: [],
      require_list: [],
      rotate_x: 1,
      window_w: 2,
      about: [
        {
          img: require("../assets/homepage/about1.svg"),
          title: "台灣山林露營秘境",
          content1: "在山林間來場的小旅行吧！",
          content2:
            "搜尋台灣特色露營地為露營咖們整理了2020最夯的山林美景，該起身出發挑戰囉!"
        },
        {
          img: require("../assets/homepage/about2.svg"),
          title: "大自然旅行口袋",
          content1: "專屬口袋名單，開始安排即將到來的週末吧!",
          content2: "可以搜尋到符合自己需求的露營地，並且快速連接到訂房資訊"
        },
        {
          img: require("../assets/homepage/about3.svg"),
          title: "露營咖必帶裝備",
          content1: "你是第一次的首露族？清點完裝備清單再出發吧！",
          content2: "各大精選露營品牌，讓您挑選最齊全、最優惠的露營設備商品!"
        }
      ],
      cate_list: [
        {
          cate: "camp",
          cate_text: "帳篷類"
        },
        {
          cate: "kitchen",
          cate_text: "客廳/廚房類"
        },
        {
          cate: "dishes",
          cate_text: "料理類"
        },
        {
          cate: "light",
          cate_text: "照明類"
        },
        {
          cate: "inside",
          cate_text: "帳內"
        },
        {
          cate: "other",
          cate_text: "其他"
        }
      ],
      show_slide: false,
      current_about: 0,
      // 推薦商品
      current_cate: 0,
      recommed_length: 4,
      all_list: [],
      recommend_product_list: [],
      // 露營商品
      camp_list: [],
      glamping_button: true
    };
  },
  components: {
    Navbar,
    FooterSection,
    CampHomeBlock,
    MapItem,
    ProductListBlock
  },
  computed: {
    recommend_show_list() {
      return this.recommend_product_list.slice(0, this.recommed_length);
    },
    camp_info_list() {
      return this.camp_list.filter(
        element => element.glamping == this.glamping_button
      );
    },
    user_map_list() {
      return this.$store.state.map.user_map_list.length;
    },
    light_rotate() {
      let deg = -((this.rotate_x / this.window_w) * 2 - 1) * 90;
      let target = 45;
      if (deg > target) {
        return target;
      } else if (deg < -target) {
        return -target;
      } else {
        return deg;
      }
    }
  },
  methods: {
    slideToggle() {
      this.show_slide = !this.show_slide;
    },
    changeAbout(num) {
      this.current_about = num;
    },
    changeCamp(check) {
      this.glamping_button = check;
    },
    changeRecommend(num) {
      this.current_cate = num;
      this.recommend_product_list = this.all_list.filter(
        element => element.cate == this.cate_list[num].cate
      );
    },
    recommendLength(e) {
      console.log(e.matches);
      if (e.matches) {
        let mql_s = window.matchMedia("(max-width: 768px)");
        if (mql_s.matches) {
          this.recommed_length = 2;
        } else {
          this.current_about = 1;
          this.recommed_length = 3;
        }
      } else {
        this.current_about = 0;
        this.recommed_length = 3;
      }
    },
    lightRotate(e) {
      this.rotate_x = e.pageX;
      this.window_w = window.innerWidth;
    },
    yellowCarAni() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".camp_car_img", {
        scrollTrigger: {
          trigger: "#Camp",
          // markers: true,
          start: "top top",
          end: "center top",
          toggleActions: "play none reverse none",
          scrub: true
        },
        x: -2000,
        duration: 3
      });
    },
    searchCamp() {
      this.$store.commit("search/searchCamp", {
        place: this.place == "" ? "north" : this.place,
        cate: this.cate,
        require_list: this.require_list,
        type: [],
      });
      this.$router.push('camp_category')
    }
  },
  mounted() {
    let mql_l = window.matchMedia("(max-width: 992px)");
    let mql_s = window.matchMedia("(max-width: 768px)");
    mql_l.addEventListener("change", this.recommendLength);
    mql_s.addEventListener("change", this.recommendLength);
    this.recommendLength(mql_l);

    axios.get("/productInfo.json").then(res => {
      this.all_list = res.data;
      this.recommend_product_list = res.data.filter(
        element => element.cate == this.cate_list[this.current_cate].cate
      );
    });

    axios.get("/Map_JSON/allCamp.json").then(res => {
      this.camp_list = res.data.central;
    });

    //  燈燈移動
    this.$refs.banner.addEventListener("mousemove", this.lightRotate);

    // 滑動動態
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function() {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#Banner",
            start: "top top",
            end: "bottom top",
            pin: true,
            // pinSpacing: false,
            scrub: true,
            // markers: true,
            toggleActions: "restart reverse reverse pause"
          }
        });

        tl.to(".bbq_people", {
          marginTop: "-800px",
          ease: "Power3.easeIneaseIn",
          duration: 0.5
        })
          .to(
            ".right_section",
            {
              marginTop: "-800px",
              ease: "Power3.easeIneaseIn",
              duration: 0.5
            },
            "-=.3"
          )
          .to(
            ".middle_people",
            {
              marginTop: "-800px",
              ease: "Power3.easeIneaseIn",
              duration: 0.5
            },
            "-=.3"
          )
          .to(
            ".left_grass",
            {
              y: 50
            },
            "-=.5"
          )
          .to(
            ".right_grass",
            {
              y: 50
            },
            "-=.5"
          )
          .to(".left_grass", {
            x: 120
          })
          .to(
            ".right_grass",
            {
              x: -120
            },
            "-=.5"
          );
      }
    });

    this.yellowCarAni();
  },
  beforeMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
  beforeDestroy() {
    this.$refs.banner.removeEventListener("mousemove", this.lightRotate);
  }
};
</script>
<template src="./homepage.html"></template>
<style src="./style.css" scoped></style>
