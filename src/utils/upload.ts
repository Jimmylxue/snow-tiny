import { TSnowConfig } from 'src/types'

export function randomNum(min = 0, max = 10) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomHeader(snowTinyConfig: TSnowConfig) {
	const hostname = (snowTinyConfig?.hostname || ['tinyjpg.com', 'tinypng.com'])[
		randomNum(0, snowTinyConfig?.hostname ? snowTinyConfig?.hostname.length : 1)
	]
	const path = snowTinyConfig?.uploadPath || '/backend/opt/shrink' // 这个地址可能会变动 可以参考官网的地址  https://tinyjpg.com/ 查看最新的请求地址

	console.log('snowTinyConfig', snowTinyConfig)

	console.log('hostname', hostname)
	console.log('path', path)

	return {
		headers: {
			'Cache-Control': 'no-cache',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Postman-Token': Date.now(),
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
			'X-Forwarded-For': new Array(4)
				.fill(0)
				.map(() => parseInt(String(Math.random() * 255), 10))
				.join('.'), // 构造ip
		},
		hostname, // 随机请求
		method: 'POST',
		path,
		rejectUnauthorized: false,
	}
}

// 用于标识该文件是否被压缩过
export const tagBuf = Buffer.from('tiny', 'binary')
