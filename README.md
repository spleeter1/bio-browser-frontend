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

# BIOMODEL BROWSER

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
