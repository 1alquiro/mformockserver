/**
 * Generates one instance of recommend object
 * @param {number} id Identifier of recommend object instance
 * @returns {Object}
 */
exports.recommendData = function(id) {
	return {
            "id": id,
            "name": "Curso " + id,
            "description": "Descripcion de curso " + id,
            "link": "http://www.google.es/search?q=curso" + id,
            "image": "Imagen" + id,
           }
}