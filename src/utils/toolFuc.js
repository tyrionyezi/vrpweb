class Tool {

    // 获取 数据中某个key的集合
    getKeys = (arr = [], key) => {
        let keys = [];
        arr.map((i) => {
            keys.push(i[key])
        })
        return keys;
    }
}

export default new Tool;