Page({

  
   data: {qrCode: ""},
 
    onLoad(query) {


   
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },

 
scanCode()
{
  var that = this;
  my.scan({
    scanType: ['qr'],
    
    success: (res) => {
       that.setData({qr_code: res.qrCode});
      
    },
    fail: () => {
       my.alert({ title: 'Could not scan code' });
    },
   
  });
}
  
  
});
