module.exports = {
  env: process.env.NODE_ENV || 'dev',
  dburl: function() {
    url ="mongodb://localhost/sugana-db";
    return url
  }
};
