/**
 * 通用静态函数类
 */
export default class {
  /**
     * 扩展对象函数
     * @param {*} obj
     * @param {*} newObj
     */
  static extend (obj, newObj) {
    for (let key in newObj) {
      if (!(key in obj)) {
        obj[key] = newObj[key]
      } else if (obj[key].constructor === newObj[key].constructor) {
        if (obj[key].constructor === Object) {
          let childObj = obj[key]

          let childNewObj = newObj[key]
          for (let k in childNewObj) {
            childObj[k] = childNewObj[k]
          }
          obj[key] = childObj
        } else {
          obj[key] = newObj[key]
        }
      }
    }
    return obj
  }

  /**
     * 内部play函数
     * @param {*} arg
     */
  static play (arg) {
    console.log('play ' + arg)
  }
}
