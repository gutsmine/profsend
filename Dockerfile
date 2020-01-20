FROM ubuntu:18.04
RUN apt-get -y update
RUN apt-get install -y curl
RUN apt-get install git -y
RUN apt-get install -y nodejs npm
RUN git clone --depth 1 --recursive https://github.com/gutsmine/profsend-v2.git
WORKDIR /profsend-v2
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]