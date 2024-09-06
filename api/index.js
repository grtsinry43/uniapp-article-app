const requireApi = import.meta.glob('./*.js', {eager: true});

let module = {};
// 获取文件路径数组
const fileKeys = Object.keys(requireApi);

fileKeys.forEach((key) => {
    if (key === './index.js') return; // 跳过 index.js
    Object.assign(module, requireApi[key]); // 合并模块
});

export default module;