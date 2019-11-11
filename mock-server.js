//mfor-mock-server.js - All paths are relative to this script's path
const mforPort = 1000
const mforSnapshotsPath = './snapshots/'
const mforGenerator = require('./mfor-db-faker/data-generator.js')
const mforServer = require('./mfor-server/server.js')

/**
 * Main function - This implementation only creates and runs MFOR Mock Server
 * @returns
 */
function main() {
mforServer.run(mforSnapshotsPath, mforGenerator.generateData(mforSnapshotsPath), mforPort)
}

main()