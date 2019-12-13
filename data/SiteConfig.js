const config = {
  siteTitle: 'Marcio José Lisboa',
  siteTitleShort: 'Marcio José Lisboa',
  siteTitleAlt: 'Marcio José Lisboa',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://developedbymarcio.netlify.com',
  pathPrefix: '',
  siteDescription:
    'Marcio José Lisboa é um entusiasta em desenvolvimento web focado no ecossistema Javascript',
  siteRss: '/rss.xml',
  siteFBAppID: '',
  googleAnalyticsID: 'UA-154535775-1',
  disqusShortname: '',
  postDefaultCategoryID: 'Tech',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'DD/MM/YYYY',
  postsPerPage: 4,
  userName: 'Marcio',
  userEmail: 'mjlbnu@gmail.com',
  userTwitter: '',
  userLocation: 'South America, Earth',
  userAvatar: '',
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/mjlbnu',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: '#',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:mjlbnu@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2019. Marcio José Lisboa',
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
