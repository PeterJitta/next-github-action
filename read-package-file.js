let pjson = require("./package.json");
const core = require("@actions/core");

const getPackageJsonVerion = () => {
  try {
    const packageVersion = pjson.version
    core.setOutput("packageVersion", packageVersion);
    console.info(packageVersion);
  } catch (error) {
    core.setFailed(error.message);
  }
};

getPackageJsonVerion();
