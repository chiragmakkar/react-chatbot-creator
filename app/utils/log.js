console.oldLog = console.log;
console.log = function(value) {
  console.oldLog(value);
  return value;
};
