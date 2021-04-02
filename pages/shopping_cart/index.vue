<script>
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
      user_adress: ""
    };
  },
  computed: {
    cart_list() {
      return this.$store.state.cart.cart_list;
    },
    all_checkinfo() {
      return {
        pay: this.pay,
        trans_way: this.trans_way,
        invoice: this.invoice,
        invoice_barcode: this.invoice_barcode,
        user_name: this.user_name,
        user_phone: this.user_phone,
        user_mail: this.user_mail,
        user_adress: this.user_adress
      };
    }
  },
  components: {
    CartListBlock,
    CartMoblieBottom,
    FooterSection,
    CartCheckInfo
  },
  methods: {
    stepToogle(control) {
      if (control == "+") {
        this.step++;
      } else if ((control = "-")) {
        this.step--;
      } else {
        this.step = control;
      }
    }
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
  },
  destroyed() {}
};
</script>

<template src="./template.html"></template>
<style scoped src="./style.css"></style>
