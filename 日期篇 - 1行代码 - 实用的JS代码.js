// 计算两个日期之间的差异天数
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

// 计算两个日期之间的差异月数
const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

// 将日期转换为 YYYY-MM-DD 格式
const formatYmd = (date) => date.toISOString().slice(0, 10);

// 将秒转换为 hh：mm：ss 格式
const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

