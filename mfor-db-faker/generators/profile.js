/**
 * Generates one instance of profile object
 * @param {number} id Identifier of profile object instance
 * @param {object} faker Fake data generator
 * @returns {Object}
 */
exports.profileData = function(id, faker) {
	let name = faker.name.firstName()
	let surname = faker.name.lastName()
	return {
            "accessToken": "FakeTokenEmpleado" + id,
            "identifier": "empleado" + id,
            "name": name,
            "surname": surname,
            "email": name + "." + surname + "@empresa.fake",
		   }
}