import html2Canvas from 'html2canvas'
import http from '@utils/http'
import { message } from 'antd'

let saveAsImg = function(DomId,callback) {

    let target = document.getElementById(DomId)
    let width = target.offsetWidth
    let height = target.offsetHeight
    let imgType = 'image/png'
    html2Canvas(target, {
        useCORS: true,
        background: '#fff',
        width: width,
        height: height,
    }).then(function(canvas) {
        target.style.transform = 'scale(1, 1)'
        let data = canvas.toDataURL(imgType)
        let dlLink = document.createElement('a')
        dlLink.style.display = 'none'
		dlLink.download = '我的分享'
		http.post({
			url: '/upload/uploadFile',
			data: {
				base64: data
            },
		}).then(res => {
			if(res.status == 0) {
				dlLink.href = location.origin + '/' + res.data
				dlLink.dataset.downloadurl = [imgType, dlLink.download, dlLink.href].join(':')
				document.body.appendChild(dlLink)
				dlLink.click()
				document.body.removeChild(dlLink)
				message.success("图片已保存至相册");
				callback()
			} else {
				message.error(res.message)
			}
		})
    })
}

export default saveAsImg
