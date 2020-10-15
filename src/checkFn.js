export default {
    checkMobile(str = '', ifNotShowAlert = false) {
        const re = /^1[3456789]\d{9}$/;

        if (!re.test(str)) {
            if (!ifNotShowAlert) {
                if(str !== '') {
                    this.myAlert('请输入正确的手机号码');
                }else {
                    this.myAlert('请输入你的手机号');
                }
            }
            return false;
        } else {
            return true;
        }
    },
    checkPassword(str = '', ifNotShowAlert = false) {
        const re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

        if (!re.test(str)) {
            if (!ifNotShowAlert) {
                if(str !== '') {
                    this.myAlert('请输入8位以上密码，密码中必须同时包含数字、字母');
                }else {
                    this.myAlert('请输入你的登录密码');
                }
            }
            return false;
        } else {
            return true;
        }
    }
}
