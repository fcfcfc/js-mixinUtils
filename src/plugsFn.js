import Sortable from 'sortablejs'
import {ElLoading, ElMessageBox, ElMessage, ElNotification} from 'element-plus';
export default {
    elementUIAlert(msg = '', callback = () => {}, tip = '提示') {
        ElMessageBox.alert(msg, tip, {
            confirmButtonText: '确定',
            type: 'warning',
            lockScroll: false
        }).then(() => {
            callback()
        }).catch(() => {
            callback()
        });
    },
    elementUIConfirm(msg = '', callback = () => {}, cancelFn = () => {}, confirmButtonText = '确定', cancelButtonText = '取消') {
        ElMessageBox.confirm(msg, '提示', {
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            type: 'warning'
        }).then(() => {
            callback()
        }).catch(() => {
            cancelFn()
        });
    },
    elementUIToast(msg = '') {
        ElNotification({
            title: '成功',
            message: msg,
            type: 'success',
            offset: 100
        });
    },
    elementUIPrompt(title, inputValue = '', callback = () => {}, cancelCallback = () => {}, placeholder = '') {
        ElMessageBox.prompt(title, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue: inputValue,
            inputPlaceholder: placeholder,
            callback: (status, vueObj) => {
                let val = vueObj.$children[0].value;
                if(status === 'confirm') {
                    callback && callback(val)
                } else if(status === 'cancel') {
                    cancelCallback && cancelCallback(val)
                }
            }
        });
    },
    elementUIMessage(msg = '', offset = 20, type = 'success', duration = 3000) {
        return ElMessage({
            message: msg,
            type: type,
            offset: offset,
            duration: duration
        });
    },
    elementUIShowLoadingFn() {
        return ElLoading.service({
            lock: true,
            text: '努力加载中...',
            spinner: 'el-icon-loading',
            fullscreen: false,
            background: 'rgba(#000, 0.3)'
        })
    },
    initMySortable(className, endFn, startFn) {
        return Sortable.create(document.querySelector('.' + className), {
            disabled: false, // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
            animation: 150,
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true,
            onStart() {
                startFn && startFn()
            },
            onEnd({ newIndex, oldIndex }) {
                endFn && endFn(newIndex, oldIndex);
            }
        })
    },
    vueRouterOpenNewWindow(that, pagePath) {
        let routeUrl = that.$router.resolve({
            path: `/${pagePath}`
        });
        window.open(routeUrl.href, '_blank');
    }
}
