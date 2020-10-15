export default {
    getScrollTop() {
        let scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop){
            scrollTop = document.documentElement.scrollTop;
        }else if(document.body){
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    },
    downloadBlobObject(data, fileName, onlyUrl) {
        const blob = new Blob([data]);
        if ('download' in document.createElement('a')) { // 非IE下载
            const eLink = document.createElement('a');
            eLink.download = fileName;
            eLink.style.display = 'none';
            if(onlyUrl) {
                eLink.href = data;
            } else {
                eLink.href = URL.createObjectURL(blob);
            }
            document.body.appendChild(eLink);
            eLink.click();
            URL.revokeObjectURL(eLink.href);// 释放URL 对象
            document.body.removeChild(eLink)
        } else if(!onlyUrl) { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
        }
    },
    getBrowserName(){
        let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        let isOpera = userAgent.indexOf("Opera") > -1;
        //判断是否Opera浏览器
        if (isOpera) {
            return "Opera"
        }
        //判断是否Firefox浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "Firefox";
        }
        if (userAgent.indexOf("Chrome") > -1){
            return "Chrome";
        }
        //判断是否Safari浏览器
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        }
        //判断是否IE浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }
    },
    getUrlData(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i ++) {
            let pair = vars[i].split("=");
            if(pair[0] === variable) return pair[1];
        }
        return false;
    }
}
