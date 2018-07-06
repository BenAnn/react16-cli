let getQueryString = function(key) {
	let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	let result;
	if(window.location.href.split("?").length == 2) {
		result = window.location.href.split("?")[1] ? window.location.href.split("?")[1].match(reg) : '';
	} else if(window.location.href.split("?").length == 3) {
		result = window.location.href.split("?")[2] ? window.location.href.split("?")[2].match(reg) : '';
	}
    return result ? decodeURIComponent(result[2]) : null;
}

export default getQueryString
