let pjson = require("./package.json");
const core = require("@actions/core");

const getPackageJsonVerion = () => {
  try {
    core.setOutput(pjson.version);
  } catch (error) {
    core.setFailed(error.message);
  }
};

getPackageJsonVerion();
