const normalCallout = {
  id: 1,
  latitude: 31.32106708723145, 
  longitude: 120.71278828233082,
  iconPath: '/image/location.png',
  callout: {
    content: '尚层装饰',
    color: '#EA0000',
    fontSize: 14,
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
}


const allMarkers = [normalCallout]

Page({
  data: {
    latitude: 31.32121, 
    longitude: 120.71277,
    markers: [normalCallout],
    customCalloutMarkerIds: [],
    num: 1
  },

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },

  addMarker() {
    const markers = allMarkers
    this.setData({
      markers,
      customCalloutMarkerIds: [2,3,4],
    })
  },

  markertap(e) {
    console.log('@@@ markertap', e)
  },
  callouttap(e) {
    console.log('@@@ callouttap', e)
  },
  labeltap(e) {
    console.log('@@@ labeltap', e)
  },
})
