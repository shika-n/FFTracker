const Sessions = require("../models/sessions");

export default function (req, res, next) {
	console.log(req.cookies);
	if (req.cookies !== undefined && req.cookies.sessionId !== undefined) {
		Sessions.isLinked(req.db, req.cookies.sessionId, req.ip).then((value) => {
			if (value) {
				res.end("true");
			} else {
				res.end("false");
			}
		}).catch((error) => {
			res.end("false");
		});
	} else {
		res.end("false");
	}
}