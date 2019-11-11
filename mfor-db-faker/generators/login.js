/**
 * Generates one instance of login object
 * @param {number} id Identifier of login object instance
 * @returns {Object}
 */
exports.loginData = function(id) {
	return {
			"identifier": "empleado" + id,
			"password": "empleado" + id + "pass",
			"accessToken": "FakeTokenEmpleado" + id
		   }
}