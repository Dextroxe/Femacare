import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Routers.tsx'
import { Worker } from '@react-pdf-viewer/core';
import 'flowbite';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Routers />
      </Worker>
    </BrowserRouter>
  </React.StrictMode>,
);