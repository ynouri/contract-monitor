# Use an official Python runtime as a parent image
FROM python:3.6

# Set the working directory to /usr/src/worker
WORKDIR /usr/src/worker

# Copy the current directory contents into the container at /usr/src/worker
ADD . /usr/src/worker

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 5000 available to the world outside this container
ENV PORT 5000
EXPOSE 5000

# Name
ENV NAME "Contract monitor worker"

# MongoDB
ENV MONGO_HOST "mongodb"
ENV MONGO_PORT "27017"

# Run app.py when the container launches
CMD ["python", "-u", "app.py"]
