# Base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy main repository files
COPY . .

# Initialize and update submodules
RUN git submodule update --init --recursive

# Install dependencies
RUN pip install -r requirements.txt

# Expose the port your application uses
EXPOSE 8000

# Command to run the application
CMD ["python", "start.py"]
