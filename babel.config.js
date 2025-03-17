module.exports = {
  plugins:
    meta.env.VITE_MODE === 'prod'
      ? [['transform-remove-console', { exclude: ['error', 'warn'] }]]
      : [],
};
