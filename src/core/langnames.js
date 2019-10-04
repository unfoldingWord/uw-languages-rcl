import langnames from './langnames.json';

export const getLanguage = (languageId) => {
  let language;
  const langname = langnames.filter(object => object.lc === languageId)[0];
  
  //console.log("found:"+langname)
  if (langname) {
    language = {
      id: langname.pk,
      languageName: langname.ang,
      region: langname.lr,
      gateway: langname.gw,
      country: langname.hc,
      localized: langname.ln,
      languageId: langname.lc,
      direction: langname.ld,
      aliases: langname.alt.join(),
      countries: langname.cc.join(),
    };
  }
  return language;
};

export const getLanguageName = ({languageId}) => {
  const language = getLanguage({languageId});
  const languageName = language ? language.ln : null;
  return languageName;
};

export const getLanguages = (format, filter, limit) => {
  //console.log('format:'+format);
  //console.log('filter:/'+filter+'/');
  //console.log('limit:'+limit);
  let langlist = [];
  var x;
  for (x of langnames) {
    var item;
    if (format === "uw") {
      item = x.lc + "-" + x.ang + "-" + x.ln + "(" + x.lr + ")";
    } else if (format === "bcp47") {
      item = x.lc + "-" + x.hc;
    } else {
      // default to uw format
      item = x.lc + "-" + x.ang + "-" + x.ln + "(" + x.lr + ")";    
    }
    if ( filter !== '' ) {
      if (item.search(filter) > -1) {
        //console.log("(filtered)pushing:"+item)
        langlist.push(item);
      }  
    } else {
      //console.log("(unfiltered)pushing:"+item)
      langlist.push(item);
    }
    if ( langlist.length >= limit ) {
      break;
    }
  }
  //console.log("langlist.length="+langlist.length)
  //console.log("langlist array:"+langlist)
  return langlist;
}

/* Code graveyard
  const langname = langnames.filter(object => object.lc === languageId)[0];

  var i;
  for (i=0; i < langnames.length; i++) {
    console.log(langnames[i].lc+'\n')
    if ( i > 20 ) {
      break;
    }
  }
  console.log("input:"+languageId)
  
Finding! This does not work:
  export const getLanguage = ({languageId}) => {
Must be:
  export const getLanguage = (languageId) => {

*/