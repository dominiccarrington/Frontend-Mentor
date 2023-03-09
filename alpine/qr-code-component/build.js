const fs = require('fs');
const fsextra = require('fs-extra');

fs.copyFileSync("index.html", "../../gh-pages/alpine/qr-code-component/index.html");
fsextra.copy('assets', "../../gh-pages/alpine/qr-code-component/assets");