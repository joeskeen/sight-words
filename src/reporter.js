var EmojiReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  this.onBrowserComplete = function(browser, result) {
    if (result && result.order && result.order.random && result.order.seed) {
      this.write('🌱🎲 Randomized with seed %s\n', browser, result.order.seed);
    } else {
      this.write('🌱 Unable to locate random seed 😭\n');
    }
  };

  this.onSpecComplete = function(_, result) {
    const success = result.success
      ? '👍'
      : result.disabled || result.skipped
      ? '⛔'
      : result.pending
      ? '🚧'
      : '👎';
    const slow = result.time < 250 ? '🐇' : '🐢';
    const message = `${success}${slow} ${result.fullName} (⌚${result.time}ms)\r\n`;
    this.write(message);
  };
};
EmojiReporter.$inject = ['baseReporterDecorator'];

module.exports = {
  'reporter:emoji': ['type', EmojiReporter]
};
