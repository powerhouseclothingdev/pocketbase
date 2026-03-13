# Use a small Linux image
FROM alpine:latest

# Install curl and bash if needed
RUN apk add --no-cache curl bash

# Copy the PocketBase binary into the container
COPY pocketbase /usr/local/bin/pocketbase

# Make sure the binary is executable
RUN chmod +x /usr/local/bin/pocketbase

# Create a directory for persistent storage
RUN mkdir -p /data

# Expose the port your app will run on
EXPOSE 10000

# Start PocketBase with persistent storage
CMD ["pocketbase", "serve", "--http", "0.0.0.0:10000", "--dir", "/data"]