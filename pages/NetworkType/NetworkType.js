Page({

   data: {network_type: "",network_available: ""},

     onLoad(query) 
  {
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },

  networkDetails()
  {
      var that = this;
      my.getNetworkType({
        success: (result) => 
        {
          that.setData({network_type: result.networkType, network_available: result.networkAvailable})
        },
        fail: () => 
        {
           my.alert({ title: 'Failed to get network' });
        },
       
      });
  },

});