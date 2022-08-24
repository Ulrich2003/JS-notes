// 在不考虑数组内部顺序的情况下比较俩个数组
const isEqual = (a, b) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());

// 考虑数组内部顺序的情况下比较俩个数组
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// 将对象数组转化为单个对象
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));
/** Example
   toObject(
        [
            { id: '1', name: 'Alpha', gender: 'Male' },
            { id: '2', name: 'Bravo', gender: 'Male' },
            { id: '3', name: 'Charlie', gender: 'Female' },
        ],
        'id'
   );
    返回结果：
    {
        '1': { id: '1', name: 'Alpha', gender: 'Male' },
        '2': { id: '2', name: 'Bravo', gender: 'Male' },
        '3': { id: '3', name: 'Charlie', gender: 'Female' },
    }
 */
 
 // 将嵌套的数组转化成平铺的数组
 const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
 
 // 获取数组的所有子集
 const getSubsets = (arr) => arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]]);
 
 // 取数组的交集 （无法直接用于对象数组）
 const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
 
 // 取数组的并集 （无法直接用于对象数组）
 const union = (...arr) => [...new Set(arr.flat())];
 
 // 数组去重（无法直接用于对象数组）
 const unique = (arr) => [...new Set(arr)];
 
 // 合并数组并去重
const merge = (a, b) => [...new Set([...a, ...b])];

// 根据数组对象中的值给数组元素做排序
const sortBy = (arr, k) => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));

 // 交换矩阵的行和列
 const transpose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));
