import './index.css'
import 'pretendard/dist/web/variable/pretendardvariable.css'
import 'pretendard/dist/web/variable/PretendardVariable-VF.css'
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import 'material-icons/iconfont/material-icons.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './Locale'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
