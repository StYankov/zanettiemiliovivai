var rsync = require("rsyncwrapper");

exports.uploadPlugins = (SYNCDATA) => {
	var opts = {
		// 'src' is the remote server that we'll be fetching files from;
		// 'dest' is where they're going to go locally
		src: "../../../plugins/",
		dest:
			SYNCDATA.username + "@" + SYNCDATA.hostname + SYNCDATA.destPathPlugins,

		recursive: true,
		port: SYNCDATA.port,
		ssh: SYNCDATA.ssh,
		compareMode: "checksum",
		exclude: SYNCDATA.exclude,

		// delete: true,

		// specifying --progress will pass data to onStdout,
		// allowing us to log progress to the console
		args: ["--progress -avz"],
		onStdout: function (data) {
			console.log(data.toString("utf8"));
		},
	};
	rsync(opts, function (error, stdout, stderr, cmd) {
		// output the cmd, useful for debugging
		console.log(cmd);

		if (error) {
			// failed
			console.log(stderr);
			console.log(error.message);
			return;
		} else {
			// success
			console.log(colors.bold(colors.magenta("Remote directory synced.")));
			done();
		}
	});
};

exports.downloadPlugins = (SYNCDATA) => {
	var opts = {
		// 'src' is the remote server that we'll be fetching files from;
		// 'dest' is where they're going to go locally
		src: SYNCDATA.username + "@" + SYNCDATA.hostname + SYNCDATA.destPathPlugins,
		dest: "../../plugins/",

		recursive: true,
		port: SYNCDATA.port,
		ssh: SYNCDATA.ssh,
		compareMode: "checksum",
		exclude: SYNCDATA.exclude,

		// delete: true,

		// specifying --progress will pass data to onStdout,
		// allowing us to log progress to the console
		args: ["--progress -avz"],
		onStdout: function (data) {
			console.log(data.toString("utf8"));
		},
	};
	rsync(opts, function (error, stdout, stderr, cmd) {
		// output the cmd, useful for debugging
		console.log(cmd);

		if (error) {
			// failed
			console.log(stderr);
			console.log(error.message);
			return;
		} else {
			// success
			log(colors.bold(colors.magenta("Local directory synced.")));
			done();
		}
	});
};
