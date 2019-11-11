@echo off
cls
start documentation build mock-server.js -f html -o doc --shallow^
 && documentation build mfor-server/server.js -f html -o doc/mfor-server --shallow^
 && documentation build mfor-server/api/*.js -f html -o doc/mfor-server/api --shallow^
 && documentation build mfor-server/api/errors/*.js -f html -o doc/mfor-server/api/errors --shallow^
 && documentation build mfor-db-faker/data-generator.js -f html -o doc/mfor-db-faker/data-generator --shallow^
 && documentation build mfor-db-faker/mfor-faker.js -f html -o doc/mfor-db-faker/mfor-faker --shallow^
 && documentation build mfor-db-faker/generators/*.js -f html -o doc/mfor-db-faker/generators --shallow