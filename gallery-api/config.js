const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  db: {
    url: "mongodb://localhost/",
    name: "gallery"
  },
  getDBPath: function() {
    return this.db.url + this.db.name;
  }
};
