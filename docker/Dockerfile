FROM mhart/alpine-node:12
MAINTAINER t150386
LABEL maintainer="t150386"
LABEL description="This image creates and runs MFOR Mock REST Server in port 1000."

WORKDIR /
USER root
RUN addgroup mock && \
	adduser -D -G mock -h /home/mock mock_user
COPY ./dist /home/mock

WORKDIR /home/mock
RUN chown -R mock_user:mock mfor-db-faker && \
	chmod -R 750 /home/mock/mfor-db-faker
RUN chown -R mock_user:mock mfor-server && \
	chmod -R 750 /home/mock/mfor-server
RUN chown mock_user:mock mock-server.js && \
	chmod 750 /home/mock/mock-server.js
RUN chown -R mock_user:mock snapshots && \
	chmod -R 750 /home/mock/snapshots

RUN exit