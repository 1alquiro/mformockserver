const block_names = ['Competencias digitales', 'Conocimientos Básicos en Tecnología', 'Habilidades y Herramientas del día a día'];
const block_types = ['SKILL', 'KNOWLEDGE', 'INTEREST']
const question_types = ['CHOICE', 'FACES', 'MULTI_CHOICE']
const faces_text = ['No sé nada', 'Me suena un poco', 'Lo tengo claro']
const faces_types = ['FACE_ZERO_KNOWLEDGE', 'FACE_HALF_KNOWLEDGE', 'FACE_FULL_KNOWLEDGE']

/**
 * Generates one instance of blocks object, with 10 questions and their answers
 * @param {number} id Identifier of block object instance
 * @param {object} faker Fake data generator
 * @returns {Object}
 */
exports.blocksData = function(id, faker) {
	let block_id = Math.floor(Math.random() * 3)
	let mock_questions = []
	let question_type_id = 0
	for (let idQuestion = 0; idQuestion < 10; idQuestion++) {
		question_type_id = Math.floor(Math.random() * 3)
		let minAnswers = 1
		let maxAnswers = 1
		let mock_answers = []
		let maxIdAnswers = 3;			
		for (idAnswers = 0; idAnswers <maxIdAnswers; idAnswers++) {
			if (question_types[question_type_id] === 'FACES') {
				mock_answers.push({
				"id": idAnswers + 1,
				"text": faces_text[idAnswers],
				"type": faces_types[idAnswers]
				})
			}
			else {
				mock_answers.push({
				"id": idAnswers + 1,
				"text": faker.random.words(Math.floor(Math.random() * 6) + 3),
				"type": "TEXT"
				})
			}
		}
		mock_questions.push({
		"id": idQuestion + 1,
		"text": "¿" + faker.random.words(Math.floor(Math.random() * 15) + 8) + "?",
		"image": "https://edomus.telefonica.es/pdam/ab2e/estaticos/img/mfor/questions/questions_img_first.png",
		"type": question_types[question_type_id],
		"minAnswers": 1,
		"maxAnswers": 1,
		"answers": mock_answers
		})
	}
	return {
			"id": id + 1,
			"name": block_names[block_id],
			"type": block_types[block_id],
			"questions": mock_questions
		   }
}