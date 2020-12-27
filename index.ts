import { generatePath } from "react-router";

const path = generatePath("group/:groupId", { sadad: "1" });
console.log(path);
