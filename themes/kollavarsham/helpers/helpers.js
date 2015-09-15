module.exports = {
  currentYear : function (context, block) {
    return (new Date().getUTCFullYear());
  },
  timeStamp   : function (context, block) {
    return (new Date().toUTCString());
  }
};