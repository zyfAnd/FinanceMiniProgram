// 基础配置类
let _config = {
  host_dldx: 'http://192.168.0.24:8080/',
  // host_dldx: 'https://www.daliandaxue.cn/',

  // 答题倒记时
  time: 10,
  // 答题倒记进度条
  time_percent: 0,
  // 倒记时的全局setInvael变量
  down_time_tag: [],
  // 每道题的默认分值
  score: 20,
  //tap间隔触碰时间变量
  tap_time: 0,
  tap_time_min: 1000,
  // 5题积分多少过关
  score_pass:   70,
  // cache 标记
  cache_tag : 'AC_OPENID'
};
export default {
  app: getApp(),
  // 包装全局配置类
  config: _config,
  // 基础req方法
  request(data, func) {
    let url = data.url;
    console.log("request data url:"+url);
    console.log("request data url:" + data);
    delete data.url;
    console.log("delete data url "+data.url);
    console.log( data);
    var tempUrl ;
    tempUrl = this.config.host_dldx + url;
    console.log("headstorm-"+tempUrl);

    wx.request({
      url: tempUrl,
      data: data,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        func(res);
      }
    });
    return;
  },
  get_api_setting: (url, data) => {
    console.log(" url: " + url);
    console.log(data);
    data.url = url, data;
    console.log(data.url);
  
    return data.url = url, data;
  },
  share(func = null) {
    return {
      title: '跟我一起来学习金融知识',
      imageUrl: 'http://ouk8myx67.bkt.clouddn.com/share_banner_01.png',
      path: '/pages/app/home/home',
      success() {
        // getApp().aldstat.sendEvent('分享成功');
        console.log('分享成功');
        if (func) {
          func();
        }
      }
    }
  }
};