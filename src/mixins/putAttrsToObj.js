export const putAttrsToObj = {
  computed: {
    putAttrsToObj: function() {
      const attrs = this.$attrs;
      let obj = {};
      for (const [key, value] of Object.entries(attrs)) {
        obj[key] = value;
      }
      return obj;
    }
  }
};
