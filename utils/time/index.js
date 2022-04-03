// created by Devingong at 2022-04-03 17:48 星期天
import moment from 'dayjs'

export const format = timestamp => {
    return moment(timestamp).format('YYYY-MM-DD')
}
