#!/usr/bin/env node
const { uploadAssets, downloadAssets } = require("./assets");
const { uploadPlugins, downloadPlugins } = require("./plugins");

const { help } = require("./help");

const [, , ...args] = process.argv;

//get all the sync settings provided in theme.json
if (args[0]) {
	const SYNCDATA = require("../config.json").settings.syncData;
	switch (args[0]) {
		case "assets":
			if (args[1] === "upload") uploadAssets(SYNCDATA);
			if (args[1] === "download") downloadAssets(SYNCDATA);
			break;
		case "plugins":
			if (args[1] === "upload") uploadPlugins(SYNCDATA);
			if (args[1] === "download") downloadPlugins(SYNCDATA);
			break;
		case "help":
			help();
			break;
		default:
			console.log(`Invalid param: ${args[0]}`);
			help();
			break;
	}
} else {
	//if no params are passed
	console.warn(`\n No params passed, here is a list of the available params:`);
	help();
}
