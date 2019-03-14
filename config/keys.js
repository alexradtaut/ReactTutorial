if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_pros");
} else {
  module.exports = require("../config_dev/keys_dev");
}
