const isValidUrl = (url: string) => {
  const RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  if (RegExp.test(url)) {
    return true;
  } else {
    return false;
  }
};

export default isValidUrl;
