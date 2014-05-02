"use strict";

var plugin = {};

plugin.parse = function(postContent, callback) {
	// this regex could be better
	postContent = postContent
		.replace(/\[smurfy\].*?>http:\/\/mwo.smurfy-net.de\/mechlab#(.*?)\[.*?\]/gm, '<iframe src="http://mwo.smurfy-net.de/tools/mechtooltip?$1" width="100%" height="300" border="0"></iframe>');
		//.replace(/<blockquote>\s*<\/blockquote>/g, '');

	callback(null, postContent);
};

module.exports = plugin;
