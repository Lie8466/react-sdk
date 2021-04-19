import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dataset: any = {};

/**
 * 从 <script data-></script> 取配置
 * 示例 <script defer src="**.react-sdk.umd.js" data-username="world" data-message="msg" data-open-url="https://www.baidu.com"></script>
 */
if (document.currentScript) {
    dataset = document.currentScript.dataset;
} else {
    // 部分浏览器不支持document.currentScript https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript
    const scripts = document.scripts;
    for (let i = 0; i < scripts.length; i++) {
        if ((scripts[i].getAttribute('src') || '').indexOf('react-sdk.umd.js') !== -1) {
            const scriptI = scripts[i];
            if (scriptI.dataset) {
                dataset = scriptI.dataset;
            } else {
                dataset = {
                    username: scriptI.getAttribute('data-username'),
                    message: scriptI.getAttribute('data-message'),
                    openUrl: scriptI.getAttribute('data-open-url')
                };
            }
            break;
        }
    }
};

/** 取出配置后传给组件 */
const AppEle = React.createElement(App, {
    username: dataset.username || '',
    message:  dataset.message || '',
    openUrl: dataset.openUrl || '',
});

const ele = document.createElement('div');
ele.setAttribute('id', 'react-sdk')
document.body.appendChild(ele);


ReactDOM.render(AppEle, document.getElementById('react-sdk'))