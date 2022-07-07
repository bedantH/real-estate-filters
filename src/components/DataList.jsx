import React from 'react';
import { useData } from '../DataContext';

const DataList = () => {

    const { filteredData } = useData();

    return (
        <div>
            <p>Data cards</p>
            {
                filteredData.map(value => {
                    return <p>{value.propertyName}</p>
                })
            }

        </div>
    );
}

export default DataList;
