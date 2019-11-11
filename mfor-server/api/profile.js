const apiProfile = 'PROFILE';
const errors = require('./errors/errors.js')

/**
 * Profile GET Request Interceptor - Sends Response Status Code 400, 401 or 200
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @returns
 */
exports.profileGet = function (req, res) {
	if (req.get('X-XSRF-APP') == null || req.get('X-XSRF-APP') === ""){
		res.status(400).send(errors.http400(apiProfile))
	}
	else if (req.get('X-XSRF-TOKEN') == null || req.get('X-XSRF-TOKEN') === "") {
		res.status(401).send(errors.http401(apiProfile))
	} else {
		res.redirect('mock_profile?accessToken=' + req.get('X-XSRF-TOKEN'))
	}
}

/**
 * Profile POST Request Interceptor - Sends Response Status Code 405
 * @param {Object} res Response Object
 * @returns
 */
exports.profilePost = function (res) {
	res.status(405).send(errors.http405(apiProfile))
}