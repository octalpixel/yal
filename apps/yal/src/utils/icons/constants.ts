const OTHER_ICONS = [
  'acast',
  'access',
  'adobe',
  'airbnb',
  'amazon',
  'amazon_alexa',
  'amazon_s3',
  'amberframework',
  'andotp',
  'android',
  'angellist',
  'angular',
  'ansible',
  'apereo',
  'apple',
  'apple_music',
  'arch_linux',
  'auth0',
  'authy',
  'backbone',
  'badoo',
  'baidu',
  'bandcamp',
  'behance',
  'bing',
  'bitbucket',
  'bitcoin',
  'bitwarden',
  'blogger',
  'bluetooth',
  'briar',
  'buffer',
  'bugcrowd',
  'calendar',
  'centos',
  'chrome',
  'chromium',
  'clojure',
  'cloudflare',
  'codeberg',
  'codepen',
  'coffeescript',
  'coil',
  'coinpot',
  'colaboratory',
  'cplusplus',
  'crystal',
  'css3',
  'datacamp',
  'debian',
  'deezer',
  'delicious',
  'dev_to',
  'digidentity',
  'digitalocean',
  'discord',
  'disqus',
  'djangoproject',
  'docker',
  'dribbble',
  'drone',
  'dropbox',
  'drupal',
  'duckduckgo',
  'ea',
  'ebay',
  'edge',
  'elastic',
  'element',
  'elementaryos',
  'email',
  'epub',
  'espressif',
  'ethereum',
  'etsy',
  'evernote',
  'facebook',
  'finder',
  'firefox',
  'flattr',
  'flickr',
  'flutter',
  'foobar2000',
  'freebsd',
  'freecodecamp',
  'friendica',
  'fritz',
  'gandi',
  'gatehub',
  'ghost',
  'git',
  'gitea',
  'github',
  'gitlab',
  'glitch',
  'gmail',
  'gmail_old',
  'go',
  'gogcom',
  'gojek',
  'goodreads',
  'google',
  'google_calendar',
  'google_collaborative_content_tools',
  'google_docs_editors',
  'google_drive',
  'google_drive_old',
  'google_maps',
  'google_maps_old',
  'google_meet',
  'google_play',
  'google_plus',
  'google_podcasts',
  'google_scholar',
  'gradle',
  'grafana',
  'hackernews',
  'hackerone',
  'haml',
  'heroku',
  'homekit',
  'hp',
  'html5',
  'humblebundle',
  'ibm',
  'iheartradio',
  'imdb',
  'imgur',
  'instagram',
  'intel',
  'intercom',
  'internet_archive',
  'itch_io',
  'itunes_podcasts',
  'jacobin',
  'java',
  'javascript',
  'jellyfin',
  'json',
  'julia',
  'kaggle',
  'keepassdx',
  'kemal',
  'keskonfai',
  'keybase',
  'kickstarter',
  'ko-fi',
  'kodi',
  'kotlin',
  'laravel',
  'lastpass',
  'liberapay',
  'line',
  'linkedin',
  'linux',
  'linux_mint',
  'lock',
  'luckyframework',
  'macos',
  'mail',
  'mailchimp',
  'malt',
  'markdown',
  'mastodon',
  'mattermost',
  'mdn',
  'medium',
  'meetup',
  'messenger',
  'microformats',
  'microsoft',
  'minecraft',
  'nextcloud',
  'nhs',
  'npm',
  'ok',
  'openbenches',
  'openbugbounty',
  'opencast',
  'opencollective',
  'opencores',
  'opensource',
  'openvpn',
  'opera',
  'orcid',
  'overcast',
  'overleaf',
  'patreon',
  'paypal',
  'pdf',
  'phone',
  'php',
  'pinboard',
  'pinterest',
  'pixelfed',
  'plex',
  'pocket',
  'pocketcasts',
  'preact',
  'print',
  'protonmail',
  'python',
  'qq',
  'raspberry_pi',
  'react',
  'reddit',
  'redhat',
  'researchgate',
  'roundcube',
  'rss',
  'ruby',
  'rubygems',
  'rubyonrails',
  'rust',
  'safari',
  'samsung',
  'samsung_internet',
  'samsung_s',
  'samsung_swoop',
  'sass',
  'semaphoreci',
  'sentry',
  'signal',
  'sketch',
  'skype',
  'slack',
  'slideshare',
  'snapchat',
  'soundcloud',
  'spotify',
  'square_cash',
  'stackexchange',
  'stackoverflow',
  'steam',
  'stitcher',
  'strava',
  'stumbleupon',
  'sublimetext',
  'svelte',
  'svg',
  'symantec',
  'taiga',
  'teamspeak',
  'telegram',
  'thisamericanlife',
  'threema',
  'tiktok',
  'tox',
  'trello',
  'tripadvisor',
  'tumblr',
  'tunein',
  'tutanota',
  'twilio',
  'twitch',
  'twitter',
  'uber',
  'ubiquiti',
  'ubisoft',
  'ubuntu',
  'unicode',
  'untappd',
  'uphold',
  'uplay',
  'upwork',
  'vegetarian',
  'venmo',
  'viber',
  'vimeo',
  'vivino',
  'vk',
  'vlc',
  'vue',
  'w3c',
  'webassembly',
  'wechat',
  'wekan',
  'whatsapp',
  'whatwg',
  'wifi',
  'wikipedia',
  'windows',
  'wire',
  'wireguard',
  'wordpress',
  'workato',
  'xing',
  'xmpp',
  'yahoo',
  'yammer',
  'yarn',
  'yelp',
  'youtube',
  'yubico',
  'zoom',
] as const;
const FILE_ICONS = [
  '3d',
  'abc',
  'actionscript',
  'adonis',
  'advpl_include',
  'advpl_prw',
  'advpl_ptm',
  'advpl_tlpp',
  'android',
  'angular',
  'angular-component',
  'angular-directive',
  'angular-guard',
  'angular-pipe',
  'angular-resolver',
  'angular-service',
  'apiblueprint',
  'apollo',
  'applescript',
  'appveyor',
  'arduino',
  'asciidoc',
  'assembly',
  'astro',
  'audio',
  'aurelia',
  'authors',
  'autohotkey',
  'autoit',
  'azure',
  'azure-pipelines',
  'babel',
  'ballerina',
  'bazel',
  'bicep',
  'bitbucket',
  'bithound',
  'blink',
  'blink_light',
  'bower',
  'brainfuck',
  'browserlist',
  'browserlist_light',
  'buck',
  'bucklescript',
  'buildkite',
  'c',
  'cabal',
  'cake',
  'capacitor',
  'certificate',
  'changelog',
  'chess',
  'chess_light',
  'circleci',
  'circleci_light',
  'clojure',
  'cloudfoundry',
  'cmake',
  'cobol',
  'coconut',
  'code-climate',
  'code-climate_light',
  'codecov',
  'codeowners',
  'coffee',
  'coldfusion',
  'command',
  'commitlint',
  'conduct',
  'console',
  'contributing',
  'cpp',
  'credits',
  'crystal',
  'crystal_light',
  'csharp',
  'css',
  'css-map',
  'cucumber',
  'cuda',
  'd',
  'dart',
  'database',
  'denizenscript',
  'dhall',
  'diff',
  'disc',
  'django',
  'docker',
  'document',
  'dotjs',
  'drawio',
  'drone',
  'drone_light',
  'dune',
  'edge',
  'editorconfig',
  'ejs',
  'elixir',
  'elm',
  'email',
  'ember',
  'erlang',
  'eslint',
  'exe',
  'fastlane',
  'favicon',
  'file',
  'firebase',
  'flash',
  'flow',
  'font',
  'forth',
  'fortran',
  'foxpro',
  'fsharp',
  'fusebox',
  'gatsby',
  'gcp',
  'gemfile',
  'gemini',
  'git',
  'gitlab',
  'gitpod',
  'go',
  'go-mod',
  'go_gopher',
  'godot',
  'godot-assets',
  'gradle',
  'grain',
  'graphcool',
  'graphql',
  'groovy',
  'grunt',
  'gulp',
  'h',
  'hack',
  'haml',
  'handlebars',
  'haskell',
  'haxe',
  'hcl',
  'hcl_light',
  'helm',
  'heroku',
  'hex',
  'horusec',
  'hpp',
  'html',
  'http',
  'husky',
  'i18n',
  'idris',
  'image',
  'imba',
  'ionic',
  'istanbul',
  'jar',
  'java',
  'javaclass',
  'javascript',
  'javascript-map',
  'jenkins',
  'jest',
  'jinja',
  'jinja_light',
  'jsconfig',
  'json',
  'julia',
  'jupyter',
  'karma',
  'key',
  'kivy',
  'kl',
  'kotlin',
  'kusto',
  'laravel',
  'less',
  'lib',
  'lilypond',
  'liquid',
  'lisp',
  'livescript',
  'lock',
  'log',
  'lolcode',
  'lua',
  'makefile',
  'markdown',
  'markojs',
  'mathematica',
  'matlab',
  'mdx',
  'merlin',
  'meson',
  'minecraft',
  'mint',
  'mjml',
  'mocha',
  'modernizr',
  'moonscript',
  'mxml',
  'nest',
  'nest-controller',
  'nest-decorator',
  'nest-filter',
  'nest-gateway',
  'nest-guard',
  'nest-middleware',
  'nest-module',
  'nest-pipe',
  'nest-resolver',
  'nest-service',
  'netlify',
  'nginx',
  'ngrx-actions',
  'ngrx-effects',
  'ngrx-entity',
  'ngrx-reducer',
  'ngrx-selectors',
  'ngrx-state',
  'nim',
  'nix',
  'nodejs',
  'nodejs_alt',
  'nodemon',
  'npm',
  'nrwl',
  'nuget',
  'nunjucks',
  'nuxt',
  'nuxt_light',
  'ocaml',
  'opa',
  'opam',
  'pascal',
  'pawn',
  'pdf',
  'percy',
  'perl',
  'php',
  'php_elephant',
  'php_elephant_pink',
  'pipeline',
  'postcss',
  'posthtml',
  'powerpoint',
  'powershell',
  'prettier',
  'prisma',
  'processing',
  'processing_light',
  'prolog',
  'proto',
  'protractor',
  'pug',
  'puppet',
  'purescript',
  'python',
  'python-misc',
  'qsharp',
  'quasar',
  'r',
  'racket',
  'raml',
  'razor',
  'react',
  'react_ts',
  'readme',
  'reason',
  'red',
  'redux-action',
  'redux-reducer',
  'redux-store',
  'replit',
  'rescript',
  'restql',
  'riot',
  'roadmap',
  'robot',
  'robots',
  'rollup',
  'routing',
  'ruby',
  'rust',
  'salesforce',
  'san',
  'sas',
  'sass',
  'sbt',
  'scala',
  'scheme',
  'search',
  'semantic-release',
  'semantic-release_light',
  'sentry',
  'sequelize',
  'settings',
  'shaderlab',
  'silverstripe',
  'sketch',
  'slim',
  'slug',
  'smarty',
  'sml',
  'snowpack',
  'snowpack_light',
  'snyk',
  'solidity',
  'stencil',
  'stitches',
  'stitches_light',
  'storybook',
  'stryker',
  'stylelint',
  'stylelint_light',
  'stylus',
  'sublime',
  'svelte',
  'svg',
  'svgo',
  'swc',
  'swift',
  'table',
  'tailwindcss',
  'tcl',
  'terraform',
  'test-js',
  'test-jsx',
  'test-ts',
  'tex',
  'textlint',
  'tilt',
  'todo',
  'travis',
  'tsconfig',
  'tune',
  'twig',
  'twine',
  'typescript',
  'typescript-def',
  'uml',
  'uml_light',
  'url',
  'vagrant',
  'vala',
  'velocity',
  'vercel',
  'vercel_light',
  'verilog',
  'vfl',
  'video',
  'vim',
  'virtual',
  'visualstudio',
  'vite',
  'vscode',
  'vue',
  'vue-config',
  'vuex-store',
  'wakatime',
  'wakatime_light',
  'wallaby',
  'watchman',
  'webassembly',
  'webhint',
  'webpack',
  'wepy',
  'windicss',
  'wolframlanguage',
  'word',
  'xaml',
  'xml',
  'yaml',
  'yang',
  'yarn',
  'zig',
  'zip',
] as const;

const FOLDER_ICONS = [
  'folder-admin',
  'folder-admin-open',
  'folder-android',
  'folder-android-open',
  'folder-animation',
  'folder-animation-open',
  'folder-ansible',
  'folder-ansible-open',
  'folder-api',
  'folder-api-open',
  'folder-apollo',
  'folder-apollo-open',
  'folder-app',
  'folder-app-open',
  'folder-archive',
  'folder-archive-open',
  'folder-audio',
  'folder-audio-open',
  'folder-aurelia',
  'folder-aurelia-open',
  'folder-aws',
  'folder-aws-open',
  'folder-azure-pipelines',
  'folder-azure-pipelines-open',
  'folder-base',
  'folder-base-open',
  'folder-batch',
  'folder-batch-open',
  'folder-benchmark',
  'folder-benchmark-open',
  'folder-bower',
  'folder-bower-open',
  'folder-cart',
  'folder-cart-open',
  'folder-ci',
  'folder-ci-open',
  'folder-circleci',
  'folder-circleci-open',
  'folder-class',
  'folder-class-open',
  'folder-client',
  'folder-client-open',
  'folder-cluster',
  'folder-cluster-open',
  'folder-cobol',
  'folder-cobol-open',
  'folder-command',
  'folder-command-open',
  'folder-components',
  'folder-components-open',
  'folder-config',
  'folder-config-open',
  'folder-connection',
  'folder-connection-open',
  'folder-constant',
  'folder-constant-open',
  'folder-container',
  'folder-container-open',
  'folder-content',
  'folder-content-open',
  'folder-contract',
  'folder-contract-open',
  'folder-controller',
  'folder-controller-open',
  'folder-core',
  'folder-core-open',
  'folder-coverage',
  'folder-coverage-open',
  'folder-css',
  'folder-css-open',
  'folder-custom',
  'folder-custom-open',
  'folder-database',
  'folder-database-open',
  'folder-debug',
  'folder-debug-open',
  'folder-delta',
  'folder-delta-open',
  'folder-dist',
  'folder-dist-open',
  'folder-docker',
  'folder-docker-open',
  'folder-docs',
  'folder-docs-open',
  'folder-download',
  'folder-download-open',
  'folder-dump',
  'folder-dump-open',
  'folder-environment',
  'folder-environment-open',
  'folder-error',
  'folder-error-open',
  'folder-event',
  'folder-event-open',
  'folder-examples',
  'folder-examples-open',
  'folder-expo',
  'folder-expo-open',
  'folder-export',
  'folder-export-open',
  'folder-fastlane',
  'folder-fastlane-open',
  'folder-firebase',
  'folder-firebase-open',
  'folder-flow',
  'folder-flow-open',
  'folder-font',
  'folder-font-open',
  'folder-functions',
  'folder-functions-open',
  'folder-generator',
  'folder-generator-open',
  'folder-git',
  'folder-git-open',
  'folder-github',
  'folder-github-open',
  'folder-gitlab',
  'folder-gitlab-open',
  'folder-global',
  'folder-global-open',
  'folder-gradle',
  'folder-gradle-open',
  'folder-graphql',
  'folder-graphql-open',
  'folder-guard',
  'folder-guard-open',
  'folder-gulp',
  'folder-gulp-open',
  'folder-helper',
  'folder-helper-open',
  'folder-home',
  'folder-home-open',
  'folder-hook',
  'folder-hook-open',
  'folder-husky',
  'folder-husky-open',
  'folder-i18n',
  'folder-i18n-open',
  'folder-images',
  'folder-images-open',
  'folder-import',
  'folder-import-open',
  'folder-include',
  'folder-include-open',
  'folder-intellij',
  'folder-intellij-open',
  'folder-intellij-open_light',
  'folder-intellij_light',
  'folder-ios',
  'folder-ios-open',
  'folder-javascript',
  'folder-javascript-open',
  'folder-jinja',
  'folder-jinja-open',
  'folder-jinja-open_light',
  'folder-jinja_light',
  'folder-job',
  'folder-job-open',
  'folder-json',
  'folder-json-open',
  'folder-keys',
  'folder-keys-open',
  'folder-kubernetes',
  'folder-kubernetes-open',
  'folder-layout',
  'folder-layout-open',
  'folder-less',
  'folder-less-open',
  'folder-lib',
  'folder-lib-open',
  'folder-log',
  'folder-log-open',
  'folder-mail',
  'folder-mail-open',
  'folder-mappings',
  'folder-mappings-open',
  'folder-markdown',
  'folder-markdown-open',
  'folder-messages',
  'folder-messages-open',
  'folder-meta',
  'folder-meta-open',
  'folder-middleware',
  'folder-middleware-open',
  'folder-mjml',
  'folder-mjml-open',
  'folder-mobile',
  'folder-mobile-open',
  'folder-mock',
  'folder-mock-open',
  'folder-ngrx-actions',
  'folder-ngrx-actions-open',
  'folder-ngrx-effects',
  'folder-ngrx-effects-open',
  'folder-ngrx-entities',
  'folder-ngrx-entities-open',
  'folder-ngrx-reducer',
  'folder-ngrx-reducer-open',
  'folder-ngrx-selectors',
  'folder-ngrx-selectors-open',
  'folder-ngrx-state',
  'folder-ngrx-state-open',
  'folder-ngrx-store',
  'folder-ngrx-store-open',
  'folder-node',
  'folder-node-open',
  'folder-nuxt',
  'folder-nuxt-open',
  'folder-other',
  'folder-other-open',
  'folder-packages',
  'folder-packages-open',
  'folder-php',
  'folder-php-open',
  'folder-phpmailer',
  'folder-phpmailer-open',
  'folder-pipe',
  'folder-pipe-open',
  'folder-plugin',
  'folder-plugin-open',
  'folder-prisma',
  'folder-prisma-open',
  'folder-private',
  'folder-private-open',
  'folder-project',
  'folder-project-open',
  'folder-public',
  'folder-public-open',
  'folder-python',
  'folder-python-open',
  'folder-quasar',
  'folder-quasar-open',
  'folder-react-components',
  'folder-react-components-open',
  'folder-redux-actions',
  'folder-redux-actions-open',
  'folder-redux-reducer',
  'folder-redux-reducer-open',
  'folder-redux-store',
  'folder-redux-store-open',
  'folder-resource',
  'folder-resource-open',
  'folder-review',
  'folder-review-open',
  'folder-routes',
  'folder-routes-open',
  'folder-rules',
  'folder-rules-open',
  'folder-sass',
  'folder-sass-open',
  'folder-scala',
  'folder-scala-open',
  'folder-scripts',
  'folder-scripts-open',
  'folder-secure',
  'folder-secure-open',
  'folder-server',
  'folder-server-open',
  'folder-serverless',
  'folder-serverless-open',
  'folder-shared',
  'folder-shared-open',
  'folder-src',
  'folder-src-open',
  'folder-stack',
  'folder-stack-open',
  'folder-stencil',
  'folder-stencil-open',
  'folder-storybook',
  'folder-storybook-open',
  'folder-stylus',
  'folder-stylus-open',
  'folder-sublime',
  'folder-sublime-open',
  'folder-svelte',
  'folder-svelte-open',
  'folder-svg',
  'folder-svg-open',
  'folder-syntax',
  'folder-syntax-open',
  'folder-tasks',
  'folder-tasks-open',
  'folder-temp',
  'folder-temp-open',
  'folder-template',
  'folder-template-open',
  'folder-terraform',
  'folder-terraform-open',
  'folder-test',
  'folder-test-open',
  'folder-theme',
  'folder-theme-open',
  'folder-tools',
  'folder-tools-open',
  'folder-typescript',
  'folder-typescript-open',
  'folder-update',
  'folder-update-open',
  'folder-upload',
  'folder-upload-open',
  'folder-utils',
  'folder-utils-open',
  'folder-video',
  'folder-video-open',
  'folder-views',
  'folder-views-open',
  'folder-vm',
  'folder-vm-open',
  'folder-vscode',
  'folder-vscode-open',
  'folder-vue',
  'folder-vue-directives',
  'folder-vue-directives-open',
  'folder-vue-open',
  'folder-vuepress',
  'folder-vuepress-open',
  'folder-vuex-store',
  'folder-vuex-store-open',
  'folder-wakatime',
  'folder-wakatime-open',
  'folder-webpack',
  'folder-webpack-open',
  'folder-wordpress',
  'folder-wordpress-open',
] as const;
export const ALL_ICONS = [...OTHER_ICONS, ...FILE_ICONS, ...FOLDER_ICONS];

export const ICON_MAP = ALL_ICONS.reduce((acc, x) => {
  acc[x] = true;
  return acc;
}, {});

export const icons = ALL_ICONS.map((x) => {
  return {
    name: x,
    description: `Select to copy icon name (${x}) to clipboard`,
    icon: x,
  };
});
