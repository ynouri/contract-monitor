# Latest LTS (long term support) version carbon of node available from the Docker Hub
FROM node:carbon

# Create app directory
WORKDIR /usr/src/web

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . .

# Binds app port
ENV PORT 3000
EXPOSE 3000

# Define environment variable
ENV NAME "Contract monitor web"

# Starts app
CMD [ "npm", "run", "devstart" ]
