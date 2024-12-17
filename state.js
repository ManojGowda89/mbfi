const state = {
  _state: {},


  init(defaultState = {}) {
    this._state = { ...defaultState };
  },

 
  get(key) {
    if (key) {
      return this._state[key];
    }
    return this._state;
  },


  set(key, value) {
    this._state[key] = value;
  },


  delete(key) {
    delete this._state[key];
  },


  reset(defaultState = {}) {
    this._state = { ...defaultState };
  },
};

module.exports = state;
