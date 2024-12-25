FROM node:20

# Set the working directory inside the container
WORKDIR /newsweb

# Copy application files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
