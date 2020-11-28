const Sessions = require("../models/sessions");

export default function (req, res, next) {
	Sessions.isLinked(req.db, req.newSessionId, req.ip).then((value) => {
		if (value) {
			res.end("true");
		} else {
			res.end("false");
		}
	}).catch((error) => {
		res.end("false");
	});
}