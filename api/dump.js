export default function (req, res, next) {
	const str = unescape(req.params.data);

	res.end(str);
}