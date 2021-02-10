Page({
 
 
   data: {srcimage: "Worv"},

  loadImage()
  {
    
    var that = this;
    //console.log(srcimage);
    my.chooseImage({
    success: (res) => {
    
    that.setData({srcimage: res.apFilePaths})
   
    
  },
  
});

  },

  navigateToLocation()
  {
       my.navigateTo({
       url: '../GetLocation/GetLocation'
     });
  },

   navigateToImageChooser()
  {
       my.navigateTo({
       url: '../LoadImage/LoadImage'
     });
  },

  navigateToScan()
  {
       my.navigateTo({
       url: '../ScanCode/ScanCode'
     });
  },

   navigateToNetwork()
  {
       my.navigateTo({
       url: '../NetworkType/NetworkType'
     });
  },

 

   onLoad(query) {
    // Page load
   
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
});
