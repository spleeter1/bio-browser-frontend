# Sử dụng image Node.js chính thức với phiên bản node 20.11.0 trên Alpine
FROM node:20.11.0-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ project vào container
COPY . .

# Thiết lập biến môi trường để Vite server có thể lắng nghe trên mọi địa chỉ
# ENV HOST=0.0.0.0
# ENV PORT=36000

# Expose cổng 8082 để truy cập từ mạng cục bộ
EXPOSE 36000

# Chạy ứng dụng React Vite, cấu hình để lắng nghe trên 0.0.0.0 và cổng 8082
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "36000"]
