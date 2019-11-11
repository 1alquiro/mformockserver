const jsonServer = require('json-server')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const login = require('./api/login.js')
const profile = require('./api/profile.js')
const blocks = require('./api/blocks.js')
const recommend = require('./api/recommend.js')
const coursesInfo = require('./api/coursesInfo.js')
const sendEmail = require('./api/sendEmail.js')

/**
 * Runs mock Server from input JSON file name relative to MFOR
 * @param {string} snapshotsPath JSON files path
 * @param {string} snapshotFileName JSON file name
 * @param {string} port Server port to listening requests
 * @returns
 */
exports.run = function (snapshotsPath, snapshotFileName, port) {    
	console.log('Input file ' + snapshotFileName + '. Generating MFOR Mock JSON Server from input file.')
	const adapter = new FileSync(snapshotsPath + snapshotFileName)
	const mfordb = low(adapter)
	const server = jsonServer.create()
	const router = jsonServer.router(snapshotsPath + snapshotFileName)
	const middlewares = jsonServer.defaults()

	server.use(middlewares)
	server.use(jsonServer.bodyParser)
	//LOGIN SERVICE
	server.get('/login', function (req, res) {login.loginGet(res)})
	server.post('/login', function (req, res) {login.loginPost(req, res, mfordb)})
	//PROFILE SERVICE
	server.get('/profile', function (req, res) {profile.profileGet(req, res)})
	server.post('/profile', function (req, res) {profile.profilePost(res)})
	//BLOCKS SERVICE
	server.get('/blocks', function (req, res) {blocks.blocksGet(req, res, mfordb)})
	server.post('/blocks', function (req, res) {blocks.blocksPost(res)})
	//RECOMMEND SERVICE
	server.get('/recommend', function (req, res) {recommend.recommendGet(res)})
	server.post('/recommend', function (req, res) {recommend.recommendPost(req, res, mfordb)})
	//COURSESINFO SERVICE
	server.get('/coursesinfo', function (req, res) {coursesInfo.coursesInfoGet(req, res, mfordb)})
	server.post('/coursesinfo', function (req, res) {coursesInfo.coursesInfoPost(res)})
	//SENDEMAIL SERVICE
	server.get('/sendemail', function (req, res) {sendEmail.sendEmailGet(res)})
	server.post('/sendemail', function (req, res) {sendEmail.sendEmailPost(req, res)})
	server.use(router)
	server.listen(port, () => {
	  console.log('MFOR Mock JSON Server is running. For general info about this mock server see http://localhost:' + port)
	  console.log('Available endpoints:')
	  console.log('http://localhost:' + port + '/login')
	  console.log('http://localhost:' + port + '/profile')
	  console.log('http://localhost:' + port + '/blocks')
	  console.log('http://localhost:' + port + '/recommend')
	  console.log('http://localhost:' + port + '/coursesinfo')
	  console.log('http://localhost:' + port + '/sendemail')
	})	
}

