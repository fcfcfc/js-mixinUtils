export default {
    /**
     * 获取一个完整文件名的后缀
     * @param name
     * @returns {string}
     */
    getFileSuffix(name) {
        let fileName = name.lastIndexOf("."); //取到文件名开始到最后一个点的长度
        let fileNameLength = name.length; //取到文件名长度
        return name.substring(fileName + 1, fileNameLength)
    },
    getNumberOfAppearByString(reg, str) {
        let num = 0;
        for(let i = 0, len = str.length; i < len; i++){
            if(str[i] === reg) num++
        }
        return num
    }
}
