const apiLogin = 'LOGIN';
const errors = require('./errors/errors.js')

/**
 * Login GET Request Interceptor - Sends Response Status Code 405
 * @param {Object} res Response Object
 * @returns
 */
exports.loginGet = function (res) {
    res.status(405).send(errors.http405(apiLogin))
}

/**
 * Login POST Request Interceptor - Sends Response Status Code 400, 401 or 200
 * @param {Object} req request Object
 * @param {Object} res response Object
 * @param {Object} dbadapter dbadapter Object
 * @returns
 */ 
exports.loginPost = function (req, res, dbadapter) {
	if (req.get('X-XSRF-APP') == null || req.get('X-XSRF-APP') === "" || req.body['identifier'] == null || req.body['password'] == null){
		res.status(400).send(errors.http400(apiLogin))
	}
	else if (req.body['identifier'] == "" || req.body['password'] == ""){
			res.status(401).send(errors.http401(apiLogin))
		}
		else {
			var users = dbadapter.get('mock_login').value()
			var accessToken = ""
			for(var i = 0; i < users.length; i++) {
				if (users[i].identifier === req.body['identifier'] && users[i].password === req.body['password']){
					accessToken = users[i].accessToken
				}
			}
			if (accessToken != ""){
				let response = '{' + '\n'
				response = response + '\t' + '\"accessToken\": ' + '\"' + accessToken + '\"' + '\n'
				response = response + '}'
				res.send(response)
			}
			else {
				res.status(401).send(errors.http401(apiLogin))
			}
		}
}