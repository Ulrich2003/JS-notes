// 复制内容到剪切板
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// 清除所有cookie
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

//  获取选中的文本
const getSelectedText = () => window.getSelection().toString();

// 检测是否是黑暗模式
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// 滚动到页面顶部
const goToTop = () => window.scrollTo(0, 0);

// 判断当前是否是苹果设备
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// 判断页面是否已经底部
const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;

// 重定向到一个URL
const redirect = url => location.href = url

