import defaultOptions from './defaultoptions' // Import default options.
import common from './common' // Import generic static function classes.

export default class rollupLib {
  /**
   * Initialization constructor
   * @param {*} options
   */
  constructor (options = {}) {
    this.options = common.extend(JSON.parse(JSON.stringify(defaultOptions)), options) // Extended option.
  }

  hello () {
    console.log('hello ' + this.options.content)
  }

  play (arg) {
    common.play(arg) // Call the play function of the generic static class.
  }
}
