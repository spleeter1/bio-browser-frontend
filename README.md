# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# BIOMODEL BROWSER FRONTEND

## 1. Introduction

- **Mục tiêu:** xây dựng một nền tảng web dành cho phân tích dữ liệu khoa học.
- **Tải lên dữ liệu:** Người dùng có thể tải lên dữ liệu của mình hoặc sử dụng các dữ liệu công khai có sẵn.
- **Chọn công cụ phân tích:** Chọn các công cụ phân tích phù hợp.
  I

## 2. Feature

⚡ **Fast Development**: Powered by Vite for lightning-fast bundling and HMR.

📐 **Type Safety**: TypeScript ensures robust and error-free development.

🖌️ **Modern UI**: Material-UI components for a consistent and responsive UI.

🌐 **API Integration**: Axios for making HTTP requests and handling asynchronous data.

🚀 **Optimized for Production**: Ready to be deployed on any web server.

## 2. Installation

```bash
git clone https://github.com/vinhdc10998/biomodel-frontent
cd biomodel-frontent
```

### Install dependencies

```
npm install
```

Với các peerDependencies, bạn có thể cần cài đặt react và react-dom đúng phiên bản nếu chưa có:

`npm install react@18.3.10 react-dom@18.3.0`

### Usage:

```
npm run dev
```

## 3. Project Structure

```
.src
├── api.ts
├── App.css
├── App.tsx
├── assets
│   ├── icon-logo-vinbigdata.png
│   ├── loading-logo-vinbigdata.gif
│   ├── logo.png
├── components
│   ├── BtnRunTool.tsx
│   ├── CustomListSubHeader.tsx
│   ├── DropdownSelect.tsx
│   ├── InputUploadUI.tsx
│   ├── LineSeparator.tsx
│   ├── Loading.tsx
│   ├── OutputToDownload.tsx
│   ├── SearchBar.tsx
│   └── StorageButton.tsx
├── data
│   └── listParams.json
├── index.css
├── layout
│   ├── Header.tsx
│   ├── HistoryBar.tsx
│   │   ├── CollapseShowFile.tsx
│   │   ├── HistoryBarHeader.tsx
│   │   ├── HistoryBar.tsx
│   │   ├── HistoryLabel.tsx
│   │   └── ListHistory.tsx
│   ├── MainLayout.tsx
│   └── SideBar
│       ├── LeftPanel.tsx
│       ├── NestedList.tsx
│       ├── PanelControl.tsx
│       └── PanelLeftTop.tsx
├── main.tsx
├── pages
│   ├── GRUD
│   │   ├── ContentGRUD.tsx
│   │   ├── FormGRUD.tsx
│   │   ├── GRUDpage.tsx
│   │   └── GRUDToolParam.tsx
│   ├── Home.tsx
│   ├── login
│   │   └── Login.tsx
│   ├── Plink
│   │   ├── ContentPlink.tsx
│   │   ├── FormPlink.tsx
│   │   ├── PlinkPage.tsx
│   │   └── PlinkToolParam.tsx
│   ├── PRSice2
│   │   ├── FormPRSice2.tsx
│   │   ├── PRSice2Page.tsx
│   │   └── PRSice2ToolParam.tsx
│   ├── register
│   │   └── Register.tsx
│   ├── SkinCancer
│   │   ├── FormSkinCancer.tsx
│   │   ├── SkinCancerPage.tsx
│   │   └── SkinCancerToolParam.tsx
│   ├── SVDeeplearning
│   │   ├── FormSVDeeplearning.tsx
│   │   ├── SVDeeplearningPage.tsx
│   │   └── SVDeeplearningToolParam.tsx
│   └── VGPdiseases
│       ├── FormVGPDiseases.tsx
│       ├── VGPDiseasesPage.tsx
│       └── VGPDiseaseToolParam.tsx
└── vite-env.d.ts
```

`api.ts`: Định nghĩa các hàm gọi API, giúp giao tiếp với backend.

`App.css`: Tệp CSS chính để định dạng giao diện cho ứng dụng.

`App.tsx`: Component chính chứa các thành phần cốt lõi của ứng dng.

`assets/`: Thư mục chứa hình ảnh và các tài nguyên tĩnh khác (biểu tượng logo, GIF).

`components/` : Các component dùng lại được, ví dụ:

`BtnRunTool.tsx` , `SearchBar.tsx` , `Loading.tsx`: Các thành phần giao diện như nút chạy, thanh tìm kiếm, và hiệu ứng tải..

layout/: Các thành phần bố cục chính:

`Header.tsx, MainLayout.tsx` : Xây dựng giao diện tổng thể.
`SideBar/, HistoryBar/`: Các thành phần phụ cho bảng điều khiển bên trái và thanh lịch sử.
``main.tsx`:` Điểm khởi đầu của ứng dụng, render App.tsx vào HTML.

`pages/`: Các trang chính của ứng dụng, mỗi thư mục là một nhóm tính năng:

`GRUD/, Plink/, PRSice2/, SkinCancer/, SVDeeplearning/, VGPdiseases/`: Chứa các component cho từng trang và công cụ phân tích riêng biệt.

Ví dụ:

```
Plink
├── ContentPlink.tsx
├── FormPlink.tsx
├── PlinkPage.tsx
└── PlinkToolParam.tsx
```

`login/, register/`: Chứa các trang liên quan đến đăng nhập và đăng ký.
vite-env.d.ts: Khai báo môi trường cho Vite, đảm bảo TypeScript hiểu được cấu hình Vite trong dự án.

## 4. User Guide

**_Hướng dẫn sử dụng (User Guide)_**

- Hướng dẫn sử dụng chi tiết các tính năng của frontend.

![Mô tả sidebar](./../readme-pictures/sideBar.png)

- Giao diện người dùng (UI/UX) và cách tương tác với ứng dụng.

![Chọn Upload file, upload những file cần thiết và chọn tham số phù hợp](/readme-pictures/GRUD-tool-example.png)

- Chọn Upload file, upload những file cần thiết và chọn tham số phù hợp

- Sau đó chạy chương trình "RUN TOOL"

Sau khi kết quả được xử lý xong:
Ta có 2 tuỳ chọn Tải file về máy hoặc Lưu trữ vào hệ thống
![](/readme-pictures/download-file-btn.png)

Nếu Lưu file vào hệ thống:

- Ta sẽ kiểm tra ở cột History phía bên phải
  có xuất hiện file mới. Nếu không có, ấn vào nút refreshIcon để hiển thị lại.
  ![](/readme-pictures/history-bar.png)

# 5. Deploy

### Cách 1: Deploy trong trên máy mạng nội bộ

1. Tạo Dockerfile
   Dockerfile để định nghĩa cách Docker sẽ xây dựng image cho ứng dụng của bạn.
2. Xây Dựng Docker Image
   Chạy lệnh sau để build Docker image.
   Ví dụ:
   `docker build -t ngdn03/biomodel-frontend-image .`

3. Chạy Docker Container
   Chạy container từ image vừa tạo:

`docker run -itd --network host ngdn03/biomodel-frontend-image`

Lệnh này `--network host` cho phép docker ánh xạ ra cổng host mà trong Dockerfile vừa chỉ định expose.

Hoặc cũng có thể sử dụng `-p host_port:container:port`

4. Kiểm Tra Ứng Dụng

Truy cập ứng dụng qua trình duyệt web bằng cách vào:

`http://<IP-của-máy>:host_port`

### Cách 2: Sử dụng ngrok(không phải deloy). Chia sẻ và kiểm tra ứng dụng

Ngrok sẽ tạo 1 tunnel giúp chuyển tiếp cổng trên localhost lên mạng internet

**Bước 1:** Cài Đặt Ngrok
Nếu bạn chưa cài đặt ngrok, bạn có thể tải và cài đặt ngrok từ trang chủ của nó:

Truy cập trang chủ của ngrok: https://ngrok.com/download

**Bước 2:** Chạy Ứng Dụng
Giả sử bạn có một ứng dụng frontend hoặc backend đang chạy trên một cổng cụ thể trên máy tính của bạn, ví dụ, cổng 5173 cho React hoặc 5000 cho Flask.

Ví dụ:

Với React, bạn có thể sử dụng lệnh:
`npm run dev`

Ứng dụng React khởi động tại http://localhost:5173.

Với Flask, bạn có thể sử dụng lệnh:
`flask --app run main.py --debug`
Ứng dụng Flask khởi động tại http://localhost:5000.

**Bước 3:** Mở Tunnel với Ngrok
Khi ứng dụng của bạn đã chạy, bạn mở một terminal mới và sử dụng ngrok để tạo một tunnel tới cổng mà ứng dụng của bạn đang chạy.

Ví dụ: nếu ứng dụng react đang chạy trên cổng 5173, chạy:
`ngrok http 5173`

**Bước 4:** Chia Sẻ URL
Sau khi bạn chạy lệnh trên, ngrok sẽ cung cấp cho bạn một URL công cộng mà bạn có thể sử dụng để truy cập vào ứng dụng của mình từ bất kỳ đâu, ví dụ:

Forwarding http://abcd1234.ngrok.io -> http://localhost:5173

Đây chính là đường dẫn công cộng bạn có thể chia sẻ với người khác để họ có thể truy cập vào ứng dụng của bạn.
