<script>
import axios from 'axios'
import FooterSection from "../../components/FooterSection/FooterSection"
import MapModal from "../../components/MapModal/MapModal"
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
    };
  },
  computed: {},
  components:{
    FooterSection,
    MapModal,
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
      }else if(this.link_info.length == 0){
          axios.get("/productInfo.json").then(res=>{
            this.link_list.forEach(item=>{
                let product_data = res.data.filter(product=> product.id == item);
                console.log(item);
                console.log(product_data);
                this.link_info.push({
                    name: product_data[0].name,
                    price: product_data[0].price,
                })
            })
    });
      }
    },
    changeCate(cate_num){
        this.link_info = [];
        this.link_list = [];
        this.createLinkList();
        this.current_cate = cate_num;
    },
  },
  mounted() {
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
    this.link_info = []
    this.link_list = []
    this.createLinkList();
  }
};
</script>

<style src="./style.css"></style>
<template scoped src="./template.html"></template>
