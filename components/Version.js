import fs from "fs";

let packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

const getLine = function (line) {
  line = line.replace(/(^\s*\*|\r)/g, "");
  line = line.replace(/\s*`([^`]+`)/g, '<span class="cmd">$1');
  line = line.replace(/`\s*/g, "</span>");
  line = line.replace(/\s*\*\*([^\*]+\*\*)/g, '<span class="strong">$1');
  line = line.replace(/\*\*\s*/g, "</span>");
  line = line.replace(/ⁿᵉʷ/g, '<span class="new"></span>');
  return line;
};

const yunzaiVersion = packageJson.version;
const isMiao = packageJson.name === "miao-yunzai";
const isTrss = Array.isArray(Bot.uin) ? true : false;

let Version = {
  isMiao,
  isTrss,
  get version() {
    return currentVersion;
  },
  get yunzai() {
    return yunzaiVersion;
  },
};

export default Version;
