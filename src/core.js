import defaultOptions from './defaultoptions';   // 导入默认选项
import common from './common';   // 导入通用静态函数类

export default class rollupLib {
    /**
     * 初始化构造函数
     * @param {*} options 
     */
    constructor(options = {}) {
        this.options = common.extend(JSON.parse(JSON.stringify(defaultOptions)), options);    // 扩展选项
    }

    hello() {
        console.log('hello ' + this.options.content);
    }

    play(arg) {
        common.play(arg);    // 调用通用静态类的play函数
    }
}