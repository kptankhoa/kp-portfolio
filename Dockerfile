# Stage 1: Build the Next.js project
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the project and export static files
RUN npm run build

# Stage 2: Serve the static site with Nginx
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the exported static files from the builder stage
COPY --from=builder /app/out/ ./

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]