import { camelCase } from "lodash"; // using lodash as a helper for camelcasing the attrs

export const putAttrsToObj = {
  computed: {
    putAttrsToObj: function() {
      const attrs = this.$attrs;
      let obj = {};
      for (const [key, value] of Object.entries(attrs)) {
        obj[camelCase(key)] = value;
      }
      return obj;
    }
  }
};
