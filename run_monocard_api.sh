docker build -t monocard_auth .;
if docker ps -a | grep -q monocard_auth; then
  docker rm -f monocard_auth
fi
docker run -p 4200:4200 --name monocard_auth -d monocard_auth
