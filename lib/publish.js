const {push} = require('./git');

/**
 * Push a release commit
 *
 * @param {Object} pluginConfig The plugin configuration.
 * @param {Object} context semantic-release context.
 * @param {Object} context semantic-release context.
 * @param {Object} logger Global logger.
 */
module.exports = async (pluginConfig, context) => {
  const {
    env,
    cwd,
    branch,
    options: {repositoryUrl},
    nextRelease,
    logger,
  } = context;

  await push(repositoryUrl, branch.name, {env, cwd});
  logger.log('Pushed Git release: %s', nextRelease.gitTag);
};
