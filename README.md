# Backend Web Presence
## Background
The San Diego Zoo Wildlife Association (SDZWA) manages a vast network of multimedia sensors within the grounds of their
Safari Park. Researchers at SDZWA deploy various sensor types across large physical distances throughout their enclosures.
Current methods of retrieving data are very hands-on and not scalable. In addition to this scalability problem, there is no
way to determine the health of a given sensor at any time without physical access. In order to more efficiently manage these
nodes, we are creating a web-based user interface to view their sensors’ output, metadata, and sensor health - all managed via
a secure, reliable database capable of collection and storage of sensor information. To implement this solution, our group uses
React and NodeJS with a SQLite database to build a tool that will centralize access to these sensors. This web application will
allow researchers to easily view and manage data across large networks, resulting in more accessible information and higher
potential for meaningful scientific results.

## Organization
In terms of organization, implementation of API functions will be located in the controllers folder, with sensor API function implementations being under the sensor.js file and user login and registration API function implementations being under the users.js file. Routes contains the folders which link these implementations with the correct REST API resource links, allowing for easy modification in case of route changes and a general decluttering of the route code. General server code is located under the server.js file and the database schema is located under the prisma folder in schema.prisma which forms the general structure of our database. 

## Creating Initial Docker Container Running w/ Node Server

Inside of directory that has Dockerfile, run this command to build the Docker image.
```
docker build . -t <your username>/node-web-app
```

Run image with this command
```
docker run -p 49160:5000 -d <your username>/node-web-app
```
Call this command to get port that the Docker app was mapped to to call
```
docker ps
```

Can call upon app with this command. Note that the port end depends on what port the app was mapped upon in as you would see in the 'ps' command.
```
curl -i localhost:49160
```
