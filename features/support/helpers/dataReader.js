const dataReader = {

  /**
   * Getting test data by path
   * @param {string} path test data path with "'s" separator
   * @returns {Object} test data value
   */
  getObject(path) {
    const arr = path.split('\'s');
    let obj = this.dataReader;
    for (let i = 0; i < arr.length; i += 1) {
      obj = obj[arr[i].trim()];
    }
    return obj;
  },
  /**
   * Setting test data by path and value
   * @param {string} path test data path with "'s" separator
   * @param {string} value value to set
   */
  setObject(path, value) {
    const arr = path.split('\'s');
    let obj = this.dataReader;
    while (arr.length > 1) {
      const key = arr.shift().trim();
      if (!obj[key]) {
        obj[key] = {
        };
      }
      obj = obj[key];
    }
    obj[arr.shift().trim()] = value;
  },
  /**
   * Set test data source
   */
  setSource() {
    this.dataReader = {
    };
  },

};
module.exports = dataReader;