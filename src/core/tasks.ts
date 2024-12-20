import { ChildProcess } from 'child_process'
import Os from 'os'
import { resolve } from 'path'
import { TDetail, TFileItem } from '../types'
const cluster = require('cluster')
const cpuNums = Os.cpus().length

export function assignTask(taskList: TFileItem[]) {
	cluster.setupPrimary({
		exec: resolve(__dirname, './process.js'),
	})

	const works: {
		work: ChildProcess
		tasks: TFileItem[]
	}[] = []

	if (taskList.length <= cpuNums) {
		works.push({ work: cluster.fork(), tasks: taskList })
	} else {
		for (let i = 0; i < cpuNums; i++) {
			const work = cluster.fork()
			works.push({ work, tasks: [] })
		}
	}

	// 平均分配任务
	let workNum = 0
	taskList.forEach(task => {
		if (works.length === 1) {
			return
		} else if (workNum >= works.length) {
			works[0].tasks.push(task)
			workNum = 1
		} else {
			works[workNum].tasks.push(task)
			workNum += 1
		}
	})

	// 用于记录进程完成数

	works.forEach(({ work, tasks }) => {
		work.send(tasks)
		work.on('message', (details: TDetail[]) => {
			details.forEach(item => {
				console.log(
					`图片资源-${item.fileName}  -- 压缩前：${item.input}  -- 压缩后：${
						item.output
					}  压缩比率：${item.ratio * 100}%`
				)
			})
			cluster.disconnect()
		})
	})
}
