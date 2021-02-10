Page({

  
  data: {latitudeVal: 0, longitudeVal: 0},
 
    onLoad(query) {


   
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  

  getUserLocation()
  {
    var that = this;
    my.getLocation({
  success(res) {
   
    that.setData({latitudeVal: res.latitude,longitudeVal: res.longitude})
   
    
  },
  fail() {
    // if program is unable to retrieve user location
    my.alert({ title: 'Failed to get location' });
  },
})
  },

  
  
});
