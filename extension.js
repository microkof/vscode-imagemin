const minifyImages = require('./commands/minifyImages');

function activate(context) {
  context.subscriptions.push(minifyImages());
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
