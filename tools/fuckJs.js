/*
yuzhanchao (coder)
2017 8 9

说明： fuckJs.js文件加载完成会自动创建F对象，我们可以用这样的方式使用F的方法
		F.toast('我是F', 1500, '48vw')
		F.setCookie('F',666,'13d');
		方法的参数介绍看下面
		注意fuckJs文件要在使用F对象的js文件之前加载，就像你的jQ要在其他js之前加载一样
		注意F对象一旦创建就会被freeze，你将无法给通过F.xxx = function(){}的方式为F添加任何属性或者方法，这样做主要是为了避免你添加给F的方法覆盖F原有的方法，如果你想自己定义一些方法并且方便以后使用，可以在下面的源文件中直接添加你要添加的方法

toast: 三个参数，第一个html为字符串，你要toast的内容；第二个参数是你要展示的时间，默认1500ms；第三个参数 toast距离屏幕上方距离 带单位，默认48vw；

keyStrong: 验证密码强度，第一个参数为要验证的密码，第二个参数和第三个参数为要求密码的最小最大长度，默认为  6-16    返回true或者false;

emaiTest: 邮箱校验 返回true或者false；

phoneTest: 手机号校验 返回true或者false；

hostSplit: url拆分，返回一个对象，对象有两个属性host（域名）和urlData（query字段）

tirmSpace: 去掉字符串两端的空格，第一个参数为要处理的字符串，第二个参数有三个选项'left' 'right 'all' 分别代表删除左侧空格、删除右侧空格和删除字符串中的全部空格  当第二个空格为空或者传递的为其他字符串时，将删除要处理的字符串的两端的空格

clientShow: 判断网页所在的平台，返回值为 Android ios PC三种

setCookie: 设置cookie 三个参数 第一个是cookie的key，第二个是cookie的值，第三个是保存时间 '13d'表示13天  '13h'表示13小时  '13s'表示十三秒  三个参数必选并且最后一个参数必须带单位d、h或者s

getCookie: 获取cookie  传入想要获取的cookie的key就行

delCookie: 删除cookie  传入想要 删除的cookie的key就行

setItem和getItem和delItem: 用法和localStorage.setItem(Key, value)、   localStorage.getItem(Key)、localStorage.removeItem(Key)一样.不过这里做了封装，你储存的值可以使num str 或者数组再或者对象，数组和对象做了JSON处理，set数组或者对象  get的也会是数组和对象

uniqueArr: 数组去重  参数为数组

maxArr、minArr: 返回数组最大值或者最小值，参数为数组，注意这里的数组里面的元素必须都为number类型

randomString: 返回随机字符串   参数指定字符串长度

getNowFormatDate： 返回当前日期时间 格式为 0000-00-00 00:00:00

rate: 评级 参数为等级，可选1到5的数字

allBorder: 为页面的所有dom加上border、  没啥子卵用
*/
var F = new Object({
	init:function() {
        console.log('fuckJs is ready');
	},
    toast: function(html,time,top) {
        var time = time || 1500;
        var top = top || '48vw';
        if(!document.getElementById('fuckToast')) {
            var div = document.createElement('div');
            div.setAttribute('id','fuckToast');
            div.setAttribute('class','fuckToast');
            div.innerHTML = html;
            div.setAttribute('style','position: fixed; left: 50%; padding: 2.13vw 5.6vw; background: #000; opacity: .6; border-radius: 3px; font-size: 3.47vw; color: white; display: inline-block;')
            document.body.appendChild(div);
            var halfLeft = -(((div.clientWidth/750)*100));
            div.style.top = top;
            div.style.marginLeft = halfLeft+'vw';
        }else {
            document.getElementById('fuckToast').style.display = 'inline-block';
            var div = document.getElementById('fuckToast')
            div.innerHTML = html;
            var halfLeft = -(((div.clientWidth/750)*100));
            div.style.marginLeft = halfLeft+'vw';
        }
        setTimeout(function remove() {
            document.getElementById('fuckToast').innerHTML = '';
            document.getElementById('fuckToast').style.display = 'none';
        }, time);
    },
    keyStrong: function(pass,head,end) {
        var head = head || 6;
        var end = end || 16;
        var regex = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z]).{'+ head +','+ end +'}$');
        return regex.test(pass);
    },
    emaiTest: function(emai) {
        var regex = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        return regex.test(emai);
    },
    phoneTest: function(phone) {
        var regex = /^1[34578]\d{9}$/;
        return regex.test(phone);
    },
    hostSplit: function(url) {
        var hostObj = {
            host: '',
            urlData: {}
        }
        if(url.indexOf('?')>=0) {
            var urlArr = url.split('?');
            hostObj.host = urlArr[0];
            var arrQuery = urlArr[1].split('&');
            for (var i = 0; i < arrQuery.length; i++) {
                var flag = arrQuery[i].split('=');
                hostObj.urlData[flag[0]] = flag[1];
            }
        }
        return hostObj;
    },
    tirmSpace: function(str, lf) {
		if(lf == 'all') { // 后加的去处全部空格的功能
			return str.replace(/\s+/g,"");
		}
        return lf ? (lf == 'left' ? str.replace(/(^\s*)/g,"") : (lf == 'right' ? str.replace(/(\s*$)/g,"") : str.replace(/(^\s*)|(\s*$)/g, "")) ) : str.replace(/(^\s*)|(\s*$)/g, "");
    },
    clientShow: function() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return 'ios';
        } else if (/(Android)/i.test(navigator.userAgent)) {
            return 'Android'
        } else {
            return 'PC';
        };
    },
    setCookie: function(name,value,time) {
        var strsec = this.getsec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strsec * 1);
        console.log(exp + '  ' + strsec);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    getsec: function(str) {
        var str1 = str.substring(0, str.length-1) * 1;
        var str2 = str.substring(str.length-1, str.length);
        if (str2 == "s") {
            return str1 * 1000;
        } else if (str2 == "h") {
            return str1 * 60 * 60 * 1000;
        } else if (str2 == "d") {
            return str1 * 24 * 60 * 60 * 1000;
        }
    },
    getCookie: function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    delCookie: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
	setItem: function(key, value) {
		if(typeof(value) == 'object') {
			localStorage.setItem(key, JSON.stringify(value));
		}else {
			localStorage.setItem(key, value);
		}
	},
	getItem: function(key) {
		try {
			console.log(111);
			return JSON.parse(localStorage.getItem(key))
		} catch(e) {
			console.log(222);
			return localStorage.getItem(key)
		}
	},
	delItem: function(key) {
		localStorage.removeItem(key);
	},
	uniqueArr: function(arr) {
		var res = [];
		var json = {};
		for(var i = 0; i < arr.length; i++){
			if(!json[arr[i]]){
				res.push(arr[i]);
				json[arr[i]] = 1;
			}
		}
		return res;
	},
	maxArr: function(arr) {
		return Math.max.apply(null, arr);
	},
	minArr: function(arr) {
		return Math.min.apply(null, arr);
	},
	randomString: function(len) {
	　　len = len || 32;
	　　var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (i = 0; i < len; i++) {
	    //0~32的整数
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * (maxPos+1)));
	　　}
	　　return pwd;
	},
	getNowFormatDate: function() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + date.getHours() + seperator2 + date.getMinutes()
	            + seperator2 + date.getSeconds();
	    return currentdate;
	},
	rate: function(rate) {
		return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
	},
	allBorder: function() {
		Array.prototype.forEach.call(document.querySelectorAll('*'),
		dom => dom.style.outline = `1px solid #${parseInt(Math.random() * Math.pow(2,24)).toString(16)}`)
	}
});
Object.freeze(F);
F.init();
