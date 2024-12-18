const globalStore = {
    _store: {},
  
    // Function to create and add items to the global store
    globlestore(store) {
      Object.entries(store).forEach(([key, value]) => {
        if (this._store[key]) {
          throw new Error(`Key '${key}' already exists in the global store.`);
        }
        this._store[key] = value;
      });
    },
  
    // Function to access the global store
    ingloble() {
      return { ...this._store }; // Return a copy to avoid direct mutation
    },
  };
  
  module.exports = globalStore;
  