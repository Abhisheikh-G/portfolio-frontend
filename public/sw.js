if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,i,s)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}})).then(e=>{const a=s(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Zfj9zHsicSCsz7hjpBAJY/_buildManifest.js",revision:"3d0c0416e4229232dc4cce7c2d023a64"},{url:"/_next/static/Zfj9zHsicSCsz7hjpBAJY/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/701e55b9450706e1e000a5c1b3746a90803fda45.64449f28f535d03ec412.js",revision:"5915da827253bf633217ed8e7f916d92"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.af2800e18d6407dcf059.js",revision:"aaeb876fc6c32a0803d223f5f0289ec2"},{url:"/_next/static/chunks/commons.a91e4f58f9897850f771.js",revision:"40df5f19bae2b5e8be70c2e615f8eb3f"},{url:"/_next/static/chunks/framework.f968603983d893a55117.js",revision:"fe4b435dc5217c4f250026fb78c03d5b"},{url:"/_next/static/chunks/main-fbb93dacff0cb4f82765.js",revision:"29380fb4b3f0bbdd054fce2a9e2709cb"},{url:"/_next/static/chunks/pages/_app-d8242eb4f9c338b079f5.js",revision:"9c7e006f93295d8b1b3ccb1acfdb5fd0"},{url:"/_next/static/chunks/pages/_error-5eb0f6ddbbaf7ef74547.js",revision:"45dafde4965f9766bcce4df4c3830dde"},{url:"/_next/static/chunks/pages/about-c14197235bb634380312.js",revision:"531726fcce44cbae224157630dee0f67"},{url:"/_next/static/chunks/pages/index-abedb992c7a7a8e47254.js",revision:"34ce490a18912580c4df41f8238a07f4"},{url:"/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js",revision:"b6d968e5af60e0e204db3d6890e0baca"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/2c7d646864930b25d69e.css",revision:"086823482bf1c7851c7daa7671484974"},{url:"/_next/static/media/roboto-all-400-italic.63782d1445ad031af14dd9291835ed3d.woff",revision:"c762d850e2e8d0e29047608715196736"},{url:"/_next/static/media/roboto-all-400-normal.b5a0a0df312d3423493b163e9675488c.woff",revision:"a91ad097d24828af724d4fee36a063ed"},{url:"/_next/static/media/roboto-cyrillic-400-italic.7270d0dbb41cca30909b7f1b23be78de.woff2",revision:"8266321ab43353bcd147ad67600d165c"},{url:"/_next/static/media/roboto-cyrillic-400-normal.3605d18d8a4ce5bd39c3d32119574854.woff2",revision:"8bb64952764a884d67019b3486296ab9"},{url:"/_next/static/media/roboto-cyrillic-ext-400-italic.c30985e07ee67f55f3e88654eced96ad.woff2",revision:"b3e580d221a4722c959155878ab94210"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.dd55ea0a2e90d5d86e15444a623c385a.woff2",revision:"4743c758a952f2bd4a35d4e42afc002b"},{url:"/_next/static/media/roboto-greek-400-italic.aeaac920d76d2f3697cad159686728df.woff2",revision:"469a78405c3ae073ba769321fa0584f3"},{url:"/_next/static/media/roboto-greek-400-normal.352cc77aaed5208ce13c79cf9c89892f.woff2",revision:"c1e9793c84cb26c44ef2a2cf8b6f49ce"},{url:"/_next/static/media/roboto-greek-ext-400-italic.26c1478a1bb6b2c2c6b09bccb2b5b9c6.woff2",revision:"801b64f75ae26dab9c36f00629ebdad0"},{url:"/_next/static/media/roboto-greek-ext-400-normal.bc7ace6e50c7d9d4d95923b61b1de59c.woff2",revision:"182ee6a4872ca8fa78048951b1561a5c"},{url:"/_next/static/media/roboto-latin-400-italic.d022bc70dc1bf7b3425da9cdaa9841b6.woff2",revision:"51521a2a8da71e50d871ac6fd2187e87"},{url:"/_next/static/media/roboto-latin-400-normal.176f8f5bd5f02b3abfcf894955d7e919.woff2",revision:"479970ffb74f2117317f9d24d9e317fe"},{url:"/_next/static/media/roboto-latin-ext-400-italic.5ed4cf182892091e3b758ae0c7c98c63.woff2",revision:"dc3871f486e189164db4b98968330bc4"},{url:"/_next/static/media/roboto-latin-ext-400-normal.dcc07bcfcd475f34f20b2c1265bd1265.woff2",revision:"455200cb007fe1212c668721d827c691"},{url:"/_next/static/media/roboto-vietnamese-400-italic.d8e5b781ee65ffb7d167fe02faef8679.woff2",revision:"9780bde87bceec579eaf16bddad47615"},{url:"/_next/static/media/roboto-vietnamese-400-normal.52cebac009baf5592e7d0ee53d8e45ed.woff2",revision:"a8be5b46d06bb541b0968196ee5e6bb8"},{url:"/bg.webp",revision:"b7b4cfa5f8f68eded73545de07bcf2ac"},{url:"/bg2.jpg",revision:"843781834b1db2908f08d921c6460c81"},{url:"/bg3.jpg",revision:"e76de24b6d8ab5e920bb4d49241ad15f"},{url:"/favicon-192x192.ico",revision:"b9a76037e5ef91edc7c1d7bff01454a1"},{url:"/favicon-512x512.ico",revision:"5beeef92628132c542b2afaecdc61c1c"},{url:"/favicon.ico",revision:"141d213e0ef1ca560db1f31e540e85bf"},{url:"/gatsby.svg",revision:"569ef6a524d6da10ab5cd0459a64bfd2"},{url:"/git.png",revision:"f7caa3a2bd2e9fda4f1a879a448a3705"},{url:"/homescreen.png",revision:"2440e90361c0474a406bf450eab2a63e"},{url:"/javascript.png",revision:"c7aa5584d914733c75da0661ac294cf7"},{url:"/logo.svg",revision:"2370d143794f8414889045d044b8f351"},{url:"/manifest.json",revision:"42cfd3f0c25a05ede2a059e26f9df2ab"},{url:"/maskable-icon-192x192.png",revision:"31bf2e6249289a84d1682d85f7d8b89e"},{url:"/mongo.png",revision:"5dd7494e2f1e80dda9d8c73dbd081928"},{url:"/next.svg",revision:"e48e27f9d0eab488e665d8513578dfb5"},{url:"/node.svg",revision:"5c376133d6403088a87a04fcc9685674"},{url:"/postgresql.svg",revision:"45e46bc025b8fd350c09492ce01d4549"},{url:"/react.svg",revision:"9a28da9f2a3fa419eb399e49f98cda39"},{url:"/tux.svg",revision:"2e82d079f8bc66df87636c7bb8f8ab7c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
