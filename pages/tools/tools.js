
function indexOf(array, value) {
  if (array.indexOf(value)) {
    return false;
  }
  else{
    return true;
  }
}

function request(params){
  return new Promise((resolve, reject) => {
    wx.request({
      url: params.url,
      method: params.method || 'GET',
      data: params.data,
      header: {
        'content-type' : 'application/json'
      },
      success: resolve,
      fail(err){
        console.log('请求出错' + params.url + err.errMsg);
      },
    })
  })
}

module.exports = {
  request: request,
  indexOf: indexOf
}

// module.exports.indexOf = indexOf;