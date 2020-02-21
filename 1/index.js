new Vue({
  el: "#example",
  data: {
    temp: "",
    userName: ""
  },
  computed: {
    getName() {
      // return this.userName;
    }
  },
  created: function() {
    //
  },
  methods: {
    submitName() {
      this.temp = this.userName;
      this.userName = "";
      return this.temp;
    }
  }
});
