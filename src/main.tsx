import { StrictMode, startTransition } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App";
import "./index.css";

document.documentElement.lang = 'zh';

// 性能优化：使用 startTransition 包裹初始渲染
// 同时优化应用启动性能
startTransition(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <BrowserRouter>
          <App />
          <Toaster 
            // 优化通知组件性能
            position="top-right"
            richColors
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }
            }}
          />
        </BrowserRouter>
      </StrictMode>
    );
  }
});
