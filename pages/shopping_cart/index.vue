<script>
import axios from "axios";
import gsap from "gsap";
import Navbar from "../../components/Navbar/Navbar"
import CartListBlock from "../../components/CartListBlock/CartListBlock";
import CartMoblieBottom from "../../components/CartMoblieBottom/CartMoblieBottom";
import FooterSection from "../../components/FooterSection/FooterSection";
import CartCheckInfo from "../../components/CartCheckInfo/CartCheckInfo";
export default {
  data() {
    return {
      step: 1,
      pay: null,
      trans_way: null,
      invoice: null,
      invoice_barcode: "",
      user_name: "",
      user_phone: "",
      user_mail: "",
      user_adress: "",
      price_list: null,
      tweenedNumber: 0,
      check_class: false,
    };
  },
  computed: {
    cart_list() {
      return this.$store.state.cart.cart_list;
    },
    cart_list_length() {
      return this.cart_list.length;
    },
    price_total() {
      let total = 0;
      let price = 0;
      if (this.price_list !== null) {
        for (let i = 0; i < this.cart_list_length; i++) {
          price = this.price_list.filter(
            element => element.id == this.cart_list[i].id
          )[0].price;
          total += price * this.cart_list[i].num;
        }
        return total;
      } else {
        return total;
      }
    },
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
    invoice_barcode_change(){
      if(this.invoice == 'phone' || this.invoice == 'people'){
        return this.invoice_barcode;
      }else{
        return ''
      }
    },
    all_checkinfo() {
      return {
        pay: this.pay,
        trans_way: this.trans_way,
        invoice: this.invoice,
        invoice_barcode: this.invoice_barcode_change,
        user_name: this.user_name,
        user_phone: this.user_phone,
        user_mail: this.user_mail,
        user_adress: this.user_adress
      };
    }
  },
  watch: {
    price_total(newValue) {
      gsap.to(this.$data, { duration: 0.8, tweenedNumber: newValue });
    }
  },
  components: {
    CartListBlock,
    CartMoblieBottom,
    FooterSection,
    CartCheckInfo,
    Navbar,
  },
  methods: {
    stepToogle(control) {
      if (this.cart_list_length !== 0) {
        if (control == "+") {
          if( this.step == 2 ){
            this.mobileCheckInfo()
          }else{
            this.step++;
          }
        } else if ((control = "-")) {
          this.step--;
        } else {
          this.step = control;
        }
      }
    },
    // 電腦版確認表單欄位
    computerCheckInfo() {
        this.check_class = true;
        let check_arr = []
        for (var prop in this.all_checkinfo){
          if( prop !== 'invoice_barcode'){
            check_arr.push(this.all_checkinfo[prop])
          }
        }
        let check = check_arr.findIndex(element => (element == null || element == ''))
        if(check == -1){
          alert("購物車練習：確認付款")
        }
    },
    mobileCheckInfo() {
        this.check_class = true;
        let check_arr = []
        for (var prop in this.all_checkinfo){
          if( prop !== 'invoice_barcode'){
            check_arr.push(this.all_checkinfo[prop])
          }
        }
        let check = check_arr.findIndex(element => (element == null || element == ''))
        if(check == -1){
          this.step++
        }
    },
  },
  mounted() {
    let mql = window.matchMedia("(max-width: 992px)");
    let vue_this = this;
    mql.addEventListener("change", function(event) {
      if (event.matches) {
        vue_this.step = 1;
      } else {
        vue_this.step = 1;
      }
    });
    axios.get("/productprice.json").then(res => {
      this.price_list = res.data;
    });
  },
  destroyed() {}
};
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>
