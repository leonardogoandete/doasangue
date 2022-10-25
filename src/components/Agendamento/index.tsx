import styles from './agendamento.css'
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import React from 'react';

export const Agendamento = () => {
           
    const disabledDate: RangePickerProps['disabledDate'] = current => {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    };
    //disabledDate={disabledDate}
    
    function onChange(dateString: any) {
        //console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
      function onOk(value:any) {
        console.log('onOk: ', value);
      }

    return(
        <div className={styles}>
            
            <DatePicker showTime
                format="DD/MM/YYYY"
                placeholder="Select date" 
                onChange={onChange} 
                //onOk={onOk} 
                disabledDate={disabledDate}
             />



            
        </div>
    )
}
/*
<Space direction="vertical" size={12}>
                <DatePicker
                //format="DD/MM/YYYY"
                
                //onChange={onChange} 
                //onOk={onOk}
                />
            </Space>
            
            */