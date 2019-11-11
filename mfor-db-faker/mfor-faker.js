// database-faker.js
const faker = require('faker')
const loginGenerator = require('./generators/login.js')
const profileGenerator = require('./generators/profile.js')
const blocksGenerator = require('./generators/blocks.js')
const recommendGenerator = require('./generators/recommend.js')
const coursesInfoGenerator = require('./generators/coursesInfo.js')

/**
 * Generates JSON Data Object
 * @returns {Object} JSON Data Object
 */
exports.data = function () {
    let mock_login = []
	let mock_profile = []
	let mock_blocks = []
	let mock_recommend = []
	let mock_coursesinfo = []
    for (let id = 0; id < 10; id++) {
        mock_login.push(loginGenerator.loginData(id))
        mock_profile.push(profileGenerator.profileData(id, faker))
		mock_blocks.push(blocksGenerator.blocksData(id, faker))
		mock_recommend.push(recommendGenerator.recommendData(id))
		mock_coursesinfo.push(coursesInfoGenerator.coursesInfoData(id))
    }
    return {"mock_login": mock_login,"mock_profile": mock_profile,"mock_blocks": mock_blocks, "mock_recommend": mock_recommend, "mock_coursesinfo": mock_coursesinfo}
}