import fs from "fs";
import fsExtra from "fs-extra";

const output: string = `./output/`;
const fsCallBack: (error: any) => void = (error) => {
  if (error) console.log("Error Fs Callback :", error);
};

const buildFileName = (fileName: string) => {
  return output + fileName;
};

fs.writeFile(
  buildFileName("logging.txt"),
  "Message\nMessage\nMessage",
  fsCallBack
);

fsExtra.writeJson(buildFileName("user.json"), { name: "Puck" }, fsCallBack);
