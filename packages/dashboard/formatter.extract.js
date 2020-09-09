/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
exports.format = function(msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = {
      message: msg.defaultMessage,
      description: msg.description,
    };
  }
  return results;
};
