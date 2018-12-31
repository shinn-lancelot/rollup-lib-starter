/*
 * rollupLib v0.0.0
 * (c) 2018-2018 shinn_lancelot
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.rollupLib = factory());
}(this, (function () { 'use strict';

  var defaultOptions = {
    name: 'shinn_lancelot',
    age: 27,
    content: ''
  };

  /**
   * 通用静态函数类
   */
  var defaultExport = function defaultExport () {};

  defaultExport.extend = function extend (obj, newObj) {
    for (var key in newObj) {
      if (!(key in obj)) {
        obj[key] = newObj[key];
      } else if (obj[key].constructor === newObj[key].constructor) {
        if (obj[key].constructor === Object) {
          var childObj = obj[key];

          var childNewObj = newObj[key];
          for (var k in childNewObj) {
            childObj[k] = childNewObj[k];
          }
          obj[key] = childObj;
        } else {
          obj[key] = newObj[key];
        }
      }
    }
    return obj
  };

  /**
     * 内部play函数
     * @param {*} arg
     */
  defaultExport.play = function play (arg) {
    console.log('play ' + arg);
  };

  var rollupLib = function rollupLib (options) {
    if ( options === void 0 ) options = {};

    this.options = defaultExport.extend(JSON.parse(JSON.stringify(defaultOptions)), options); // 扩展选项
  };

  rollupLib.prototype.hello = function hello () {
    console.log('hello ' + this.options.content);
  };

  rollupLib.prototype.play = function play (arg) {
    defaultExport.play(arg); // 调用通用静态类的play函数
  };

  return rollupLib;

})));
