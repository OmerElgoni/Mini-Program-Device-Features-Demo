Page({
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
 
   data: {srcimage: ""},

  loadImage()
  {
    
    var that = this;

    my.chooseImage({
    success: (res) => {
    
    that.setData({srcimage: res.apFilePaths[0]});
    console.log(res.apFilePaths);
    
  },
  fail() {
    // if program is unable to retrieve user location
    my.alert({ title: 'Could not load image' });
  },
  
});

  },
});
