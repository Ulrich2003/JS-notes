// 首字母大写
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

// 截断字符串（带省略号）
const truncateString = (string, length) => string.length < length ? string : `${string.slice(0, length - 3)}...`;

// 去除字符串中的html
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

