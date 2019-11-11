const apiLogin = "LOGIN"
const apiRecommend = "RECOMMEND"
const apiSendEmail = 'SENDEMAIL';
const _400_desc_message = 'Bad Request'
const _400_loc_desc_message = 'Missing headers or formdata parameters'
const _401_desc_message = 'Authentication failed'
const _401_loc_desc_message_login = 'Invalid user/pass'
const _401_loc_desc_message_others = 'Missing token'
const _405_desc_message = 'Wrong HTTP Method'
const _405_loc_desc_message_post = 'HTTP Method must be POST'
const _405_loc_desc_message_get = 'HTTP Method must be GET'

/**
 * Generates error message for status codes 400, 401, 405 depending on service caracteristics
 * @param {string} service Contextual service name
 * @param {number} statusCode Contextual status code
 * @param {string} desc Error description
 * @param {string} localizedDesc Error localized description
 * @returns {string} Generated error message
 */
function message(service, statusCode, desc, localizedDesc) {
	let error = '{' + '\n'
	error = error + '\t' + '\"Error\":' + '\n'
	error = error + '\t\t' + '{' + '\n'
	error = error + '\t\t\t' + '\"id\": ' + '\"' + statusCode + 'MOCK' + service + '\",' + '\n'
	error = error + '\t\t\t' + '\"description\": \"' + desc + '\",' + '\n'
	error = error + '\t\t\t' + '\"localizedDescription\": \"' + localizedDesc + '"' + '\n'
	error = error + '\t\t' + '{' + '\n'
	error = error + '{' + '\n'
	return error
}

/*
 * Generates error message for status codes 400
 * @param {string} service Contextual service name
 * @returns {string} Generated error message
 */
exports.http400 = function (service) {
	return message(service, 400, _400_desc_message, _400_loc_desc_message)
}

/*
 * Generates error message for status codes 401
 * @param {string} service Contextual service name
 * @returns {string} Generated error message
 */
exports.http401 = function (service) {
	if (service === 'LOGIN'){
		return message(service, 401, _401_desc_message, _401_loc_desc_message_login)
	}
	else {
		return message(service, 401, _401_desc_message, _401_loc_desc_message_others)
	}
}

/*
 * Generates error message for status codes 405
 * @param {string} service Contextual service name
 * @returns {string} Generated error message
 */
exports.http405 = function (service) {
	if (service === apiLogin || service === apiRecommend || service === apiSendEmail){
		return message(service, 405, _405_desc_message, _405_loc_desc_message_post)
	}
	else {
		return message(service, 405, _405_desc_message, _405_loc_desc_message_get)
	}
}