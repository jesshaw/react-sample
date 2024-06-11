import React from 'react';
import ReactDOM from 'react-dom/client';
import {PrimeReactProvider} from 'primereact/api'

// 对无样式模式的较新版本的特殊表单如多选下拉我表支持不友好
import 'bootstrap/dist/css/bootstrap.min.css'
import Bootstrap_PT from './passthrough/bootstrap';

// 自定义的库支持较友好
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
// import 'primereact/resources/themes/tailwind-light/theme.css'
// import 'primereact/resources/themes/viva-light/theme.css'

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{unstyled:true, pt:Bootstrap_PT}}>
    {/* <PrimeReactProvider> */}
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);

