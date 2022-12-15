
exports.help = () => {
	console.table([
		{
			param1: "assets",
			param2: ["upload", "download"],
			description: "sftp config: theme.json",
		},
		{
			param1: "plugins",
			param2: ["upload", "download"],
			description: "sftp config: theme.json",
		},
		{
			param1: "help",
			param2: "null",
			description: "null",
		},
	]);
};
