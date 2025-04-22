const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/q3-site' : '',
  assetPrefix: isGithubPages ? '/q3-site/' : '',
};

module.exports = nextConfig;
