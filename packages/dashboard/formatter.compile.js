/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
exports.compile = function(msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = msg.message;
  }
  return results;
};
