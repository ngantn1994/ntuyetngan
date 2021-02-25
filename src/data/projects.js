const images = require.context('./icons', true, /\.png$/);

const projects = {
  data: [
    {
      title: 'のぶニャがの野望 (Nobunyaga’s Ambition)',
      period: 'OCT 2016 - MAR 2017',
      percent: 14,
      space: 0,
      details: 'Online multiplayer game from Koei Tecmo Games, which ran on Mobage, MyGamecity, Mixi, dGame and Colopl.<br><br>➤ New admin tools and debug tools development.<br>➤ Implementing new campaigns and features.<br>➤ Development of app version (web view) for iOS.',
      icons: [images('./javaIcon.png'), images('./htmlIcon.png'), images('./cssIcon.png'), images('./jqueryIcon.png'), images('./mysqlIcon.png'), images('./apacheIcon.png'), images('./tomcatIcon.png'), images('./centosIcon.png')],
    },
    {
      title: 'モバノブ (Nobunaga’s Ambition for Mobcast)',
      period: 'APR 2017 - DEC 2019',
      percent: 66,
      space: 14,
      details: 'Online multiplayer game from Koei Tecmo Games, which ran on Mobcast, MyGamecity, dGame and GREE.<br><br>➤ Server monitoring and weekly production update.<br>➤ New features and event development, including both front-end and back-end (Java) work.<br>➤ Customer report investigation and bug fixing.<br>➤ From May 2019 to December 2019: one-man handling project’s programmer tasks & server related tasks until service termination (2019/12/04).',
      icons: [images('./javaIcon.png'), images('./hibernateIcon.png'), images('./htmlIcon.png'), images('./cssIcon.png'), images('./jqueryIcon.png'), images('./angularIcon.png'), images('./mysqlIcon.png'), images('./kyotoTycoonLogo.png'), images('./apacheIcon.png'), images('./jbossIcon.png'), images('./centosIcon.png')],
    },
    {
      title: '100万人の三國志 (1 million RTK generals)',
      period: 'JUN 2019 - DEC 2020',
      percent: 38,
      space: 62,
      details: 'Online multiplayer game from Koei Tecmo Games, which ran on GREE, dGame and Colopl.<br><br>➤ Server monitoring, automation planning, and production update.<br>➤ New features and event development, including both front-end and back-end (PHP) work.',
      icons: [images('./phpIcon.png'), images('./htmlIcon.png'), images('./cssIcon.png'), images('./jqueryIcon.png'), images('./mysqlIcon.png'), images('./apacheIcon.png'), images('./memcacheIcon.png'), images('./centosIcon.png'), images('./pythonIcon.png')],
    },
  ],
};

export default projects;
