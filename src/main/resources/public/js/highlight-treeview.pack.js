/**
 * Treeview syntax highlighting based on highlight.js
 * Copyright (c) 2014-2015, Asciidocfx Team, (MIT Licensed)
 * https://github.com/asciidocfx/highlight-treeview.js
 */
hljs.registerLanguage('treeview',function(e){return{c:[{cN:'folder-last-branch win',b:/(\\|\└)(\-|\─){3}/,r:0},{cN:'folder-last-branch',b:/(\`|\└)(\-|\─){2}/,r:0},{cN:'folder-branch win',b:/(\-|\─){3}/,r:0},{cN:'folder-branch',b:/(\-|\─){2}/,r:0},{cN:'tvline',b:/\||\¦|\│|\+|\├/,r:0},{cN:'hiddenfile',b:/\..+/,r:0},{cN:'file photo',b:/[^ \n\t  ].+\.(bmp|eps|gif|jpg|jpe(g)?|png|svg|tif(f)?|ico|tga|targa|j2(k|c)|jng)/,r:0},{cN:'file plain',b:/[^ \n\t  ].+\.(cfg|conf(ig)?|sh|bat|csv|ini|log|md|info|txt|asc(iidoc)?|ad(oc)?|tex|pom|properties|lst|project|iml)/,r:0},{cN:'file video',b:/[^ \n\t  ].+\.(cda|avi|flv|mkv|mov|mp4|mpeg|mpg|ogv|webm|divx|wmv)/,r:0},{cN:'file source',b:/[^ \n\t  ].+\.(asp(x)?|c(pp|c|s(s)?|lass)?|h(tm(l)?|(h)?)|jav(a)?|js(on)?|aj|php|rb|xml|yml)/,r:0},{cN:'file audio',b:/[^ \n\t  ].+\.(aac|au|cda|flac|mp(3|2)|oga|ogg|wav|wma|flac|ac3|mac)/,r:0},{cN:'file archive',b:/[^ \n\t  ].+\.(7z|bz(2)?|gz|rar|tar|tgz|zip|repo|jar)/,r:0},{cN:'file pdf',b:/[^ \n\t  ].+\.(pdf)/,r:0},{cN:'file xls',b:/[^ \n\t  ].+\.(xls(x)?)/,r:0},{cN:'file doc',b:/[^ \n\t  ].+\.(doc(m|x)?)/,r:0},{cN:'file ppt',b:/[^ \n\t  ].+\.(pps|ppt(x)?)/,r:0},{cN:'file plain',b:/readme|README|LICENSE|license/,r:0},{cN:'folder',b:/[^ \n\t  ].+(\/)?/,r:0}]}});