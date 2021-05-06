<script>
import axios from "axios";
import gsap from "gsap";
import FooterSection from "../../components/FooterSection/FooterSection";
import ProductListBlock from "../../components/ProductListBlock/ProductListBlock";
export default {
  data() {
    return {
      grid_row: 0,
      current_cate: 0,
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
      link_list: [],
      link_info: [],
      all_product_list: [],
      map_list: [],
      green_name: false
    };
  },
  computed: {
    showList() {
      return this.filterList(this.current_cate);
    },
    top_height() {
      if (this.$refs.top) {
        return this.$refs.top.offsetHeight;
      } else {
        return 1000;
      }
    }
  },
  components: {
    FooterSection,
    ProductListBlock
  },
  methods: {
    changeRow_1(e) {
      if (e.matches) {
        this.grid_row = 8;
      } else {
        this.changeRow_2(e);
      }
    },
    changeRow_2(e) {
      if (e.matches) {
        this.grid_row = 4;
      } else {
        this.grid_row = 6;
      }
    },
    createLinkList() {
      if (this.link_list.length < 6) {
        let push_num = Math.floor(Math.random() * (18 - 1) + 1);
        let check = this.link_list.findIndex(element => element == push_num);
        if (check == -1) {
          this.link_list.push(push_num);
          this.createLinkList();
        } else {
          this.createLinkList();
        }
      } else if (this.link_info.length == 0) {
        this.link_list.forEach(item => {
          let product_data = this.all_product_list.filter(
            product => product.id == item
          );
          this.link_info.push({
            name: product_data[0].name,
            price: product_data[0].price
          });
        });
      }
    },
    changeCate(cate_num) {
      this.link_info = [];
      this.link_list = [];
      this.createLinkList();
      this.current_cate = cate_num;
      document.documentElement.scrollTop = this.top_height;
      document.body.scrollTop = this.top_height;
    },
    filterList(cate) {
      if (cate !== 0) {
        let cate_name = this.cate_list[cate - 1].cate;
        this.map_list = this.all_product_list.filter(
          element => element.cate == cate_name
        );
        return this.map_list.map(item => {
          return {
            id: item.id,
            name: item.name,
            price: item.price
          };
        });
      } else {
        return this.all_product_list.map(item => {
          return {
            id: item.id,
            name: item.name,
            price: item.price
          };
        });
      }
    },
    scrollGreen() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > this.top_height - 600) {
        this.green_name = true;
      } else {
        this.green_name = false;
      }
    }
  },
  mounted() {
    // grid網格的變化
    let mounted_w = window.innerWidth;
    if (mounted_w > 1400) {
      this.grid_row = 8;
    } else if (mounted_w > 1200) {
      this.grid_row = 6;
    } else {
      this.grid_row = 4;
    }
    let mql_1 = window.matchMedia("(min-width: 1400px)");
    let mql_2 = window.matchMedia("(max-width: 1200px)");
    mql_1.addEventListener("change", this.changeRow_1);
    mql_2.addEventListener("change", this.changeRow_2);
    this.link_info = [];
    this.link_list = [];
    axios.get("/productInfo.json").then(res => {
      this.all_product_list = res.data;
      this.createLinkList();
    });

    // 網格動畫
    this.$nextTick(() => {
      gsap.from(".right .row_1:nth-child(even), .right .row_3:nth-child(even), .right .row_5:nth-child(even), .right .row_2:nth-child(odd), .right .row_4:nth-child(odd)", {
        opacity: 0,
        duration: .5,
        stagger: 0.05,
      })
      ;
    });

    // 商品Nav的變化
    window.addEventListener("scroll", this.scrollGreen);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollGreen);
  }
};
</script>

<style src="./style.css" scoped></style>
<template src="./template.html"></template>
