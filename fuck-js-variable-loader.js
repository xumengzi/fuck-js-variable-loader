const fs = require("fs");
const loaderUtils = require("loader-utils");

const getTarget = function (source) {
	let reg = /let (.+) = ([0-9])/m;
	let target = source.match(reg);
	return target;
};

const output = function (source, target, self) {
	let fuckList = ["w", "l", "o", "i"];
	if (target) {
		let options = loaderUtils.getOptions(self);
		let ranStr = fuckList[Math.floor(Math.random() * fuckList.length)];
		let defaultOptions = {
			basicByte: ranStr,
			isRandom: true,
			repeat: 10,
		};
		let opts = Object.assign({}, defaultOptions, options);
		const { basicByte, isRandom, repeat } = opts;
		let path = self.resourcePath;
		let t = target[1];
		let s = "";
		for (let i = 0; i < repeat; i++) {
			s +=
				isRandom && Math.random() > 0.5 ? basicByte.toUpperCase() : basicByte;
		}
		let r = new RegExp(t, "gm");
		source = source.replace(r, s);
		try {
			fs.writeFileSync(path, source, "utf-8");
		} catch (error) {
			console.warn("unespected error, it happens in " + path);
		}
		return source;
	}
	return source;
};

module.exports = function (source) {
	return output(source, getTarget(source), this);
};
