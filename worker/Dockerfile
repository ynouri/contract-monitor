# Use an official Python runtime as a parent image
FROM python:3.6

# Set the working directory to /app
WORKDIR /usr/src/worker

# Copy the current directory contents into the container at /app
ADD . /usr/src/worker

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME "Python app"

# Run app.py when the container launches
CMD ["python", "app.py"]