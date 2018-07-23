import bt from 'bt'
import setting from 'setting'
import role_api from 'api/role';
import account_api from 'api/account';
const app = getApp();

let leads_share = function () { };
leads_share.prototype.if = function () {
	let role = app.globalData.userInfo.role

  if (role && role.hasOwnProperty("id") && role.lv < 10) {
    bt.go('../mission/mission');
    return;
  }
	// bt.log(role);
	role_api.get_role(role.id, res => {
		let lv = res.data.lv;
		account_api.get_account_by_openid({ openid: app.globalData.userInfo.openid }, res => {
			// bt.log(lv)
		
			wx.hideToast();
		});
	})
}

module.exports = new leads_share();