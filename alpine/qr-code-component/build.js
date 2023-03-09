import * as fs from "fs";
import glob from "glob";

fs.copyFileSync("index.html", "../../gh-pages/alpine/qr-code-component/index.html");

glob("assets/*", (err, matches) => {
    matches.forEach((val) => {
        fs.copyFileSync("assets/" + val, "../../gh-pages/alpine/qr-code-component/assets/" + val);
    });
});