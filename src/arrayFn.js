export default {
    sliceArrByNum(arr, num) {
        if(num <= 0) return [];
        let result = [];
        for (let i = 0, len = arr.length; i < len; i += num) {
            result.push(arr.slice(i, i + num));
        }
        return result;
    },
    getCountOccurrences(arr, item, index) {
        let beforeIndex = index;
        let afterIndex = index;
        let flagBefore = true;
        let flagAfter = true;

        while (flagBefore) {
            if (arr[beforeIndex - 1] === item) {
                beforeIndex--;
            } else {
                flagBefore = false;
            }
        }
        while (flagAfter) {
            if (arr[afterIndex + 1] === item) {
                afterIndex++;
            } else {
                flagAfter = false;
            }
        }
        return arr.reduce((a, v, currentIndex) => (currentIndex >= beforeIndex && currentIndex <= afterIndex && v === item) ? a + 1 : a + 0, 0)
    },
    arrItemUpGo(arr, index) {
        if (index !== 0) {
            arr[index] = arr.splice(index - 1, 1, arr[index])[0];
        } else {
            arr.push(arr.shift());
        }
    },
    arrItemDownGo(arr, index) {
        if (index !== arr.length - 1) {
            arr[index] = arr.splice(index + 1, 1, arr[index])[0];
        } else {
            arr.unshift(arr.splice(index, 1)[0]);
        }
    },
    arrAverageNum(arr) {
        return arr.reduce((total, num) => total + num) / arr.length;
    },
    arrGroupBy(arr, key) {
        function groupBy(array, f) {
            const groups = {};
            array.forEach(function (o) {
                const group = JSON.stringify(f(o));
                groups[group] = groups[group] || [];
                groups[group].push(o);
            });
            return Object.keys(groups).map(function (group) {
                return groups[group];
            });
        }
        return groupBy(arr, function (item) {
            return [item[key]];
        });
    },
    getStandardDeviation(arr) {
        let length = arr.length;
        let mean = this.arrAverageNum(arr); //平均值
        let deviations = arr.map(x => x - mean);//偏差

        return Math.sqrt(deviations.map(x => x * x).reduce((total, num) => total + num) / (length - 1));
    },
    getArrDifference(arrA, arrB) {
        return arrA.concat(arrB).filter(function(v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    },
    getDifFromToArrByKey(arr1, arr2, keyName) {
        return arr2.filter(f => arr1.every(s => s[keyName] !== f[keyName]))
    },
    objArrayDuplicateByKey(arr, key) {
        return arr.reduce((prev, element) => {
            if(!prev.find(el => el[key] === element[key])) prev.push(element)
            return prev
        },[])
    },
    getConcatFromTwoArrByKey(arr1, arr2, keyName) {
        return this.objArrayDuplicateByKey([].concat(arr1, arr2), keyName)
    },
    objectDeepClone(obj) {
        function deepCopy(obj) {
            let result = Array.isArray(obj) ? [] : {};
            for (let key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (typeof obj[key] === 'object') {
                        result[key] = deepCopy(obj[key]);
                    } else {
                        result[key] = obj[key];
                    }
                }
            }
            return result;
        }

        return deepCopy(obj);
    }
}
