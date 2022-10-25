import { DatePicker, Space } from 'antd';
import styles from './agendamento.css'

export const Agendamento = () => {
const { RangePicker } = DatePicker;
console.log(RangePicker)
return(
    <div className={styles}>
        <Space direction="vertical" size={12}>
            <DatePicker showTime />
        </Space>
    </div>
)
}
