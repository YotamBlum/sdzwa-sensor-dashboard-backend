# Backend Setup
## Creating Initial Docker Container Running w/ Node Server

Inside of directory that has Dockerfile, run this command to build the Docker image.
```
docker build . -t <your username>/node-web-app
```

Run image with this command
```
docker run -p 49160:8080 -d <your username>/node-web-app
```
Call this command to get port that the Docker app was mapped to to call
```
docker ps
```

Can call upon app with this command. Note that the port end depends on what port the app was mapped upon in as you would see in the 'ps' command.
```
curl -i localhost:49160
```