// Math.max, Math.min은 큰 수일경우 오류가 날 수 있고 reducer가 성능적으로 더 좋음
const reducerMin = (acc, cur) => (acc < cur ? acc : cur);
const reducerMax = (acc, cur) => (acc > cur ? acc : cur);
