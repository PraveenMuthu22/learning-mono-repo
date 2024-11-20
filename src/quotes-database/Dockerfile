# Use the official MySQL base image
FROM mysql:latest

COPY scripts/init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306

