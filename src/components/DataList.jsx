import React, { useEffect } from 'react';
import { useData } from '../DataContext';
import Card from './Card';

const DataList = () => {

    const { filteredData, filterResult } = useData();


    return (
        <div>
            <ul className='lyt_data_wrapper'>
                {filteredData.map(value => {
                    return (
                        <Card element={value} />
                    )
                })
                }
            </ul>
        </div>
    );
}

export default DataList;
