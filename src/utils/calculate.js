class Calculate {



    // 计算表格的宽度
    tableWidth = (arr = []) => {
        let scroll_x = 0;
        let columns_data = arr;
        let ltg = arr.length;

        arr.map((v, i) => {
            scroll_x = scroll_x + v.width;
        })

        if(ltg > 0) {
            delete columns_data[ltg - 1]['width'];
        }

        return {
            scroll_x,
            columns_data
        }
    }

}

export default new Calculate()