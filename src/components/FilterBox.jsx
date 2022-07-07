import React, { useState } from 'react';
import { DataContext } from '../DataContext';

const FilterBox = () => {

    const { data, filterData } = React.useContext(DataContext);

    const [dataFilter, setDataFilter] = useState({
        city: null,
        moveInDate: null,
        rent: null,
        propertyType: null,
    });

    React.useEffect(() => {
        console.log(data);
    }, []);


    const handlePropertyTypeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDataFilter((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const filterDataResp = () => {
        filterData(dataFilter);
    }

    return (
        <div className='filter-box'>
            <div className="input">
                <label className='input-label'>Location</label>
                <input type="text" onChange={handlePropertyTypeChange} name="city" className=" filter-box-input" />
                <svg className="location" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.4397L10.5481 18.9611C15.1572 14.9364 17.5 11.4223 17.5 8.33334C17.5 3.9589 14.0858 0.833344 10 0.833344C5.91421 0.833344 2.5 3.9589 2.5 8.33334C2.5 11.4223 4.84276 14.9364 9.45189 18.9611L10 19.4397ZM10 17.2195C6.08884 13.6946 4.16667 10.7077 4.16667 8.33334C4.16667 4.91385 6.80343 2.50001 10 2.50001C13.1966 2.50001 15.8333 4.91385 15.8333 8.33334C15.8333 10.7077 13.9112 13.6946 10 17.2195ZM10 4.16668C12.3012 4.16668 14.1667 6.03216 14.1667 8.33334C14.1667 10.6345 12.3012 12.5 10 12.5C7.69881 12.5 5.83333 10.6345 5.83333 8.33334C5.83333 6.03216 7.69881 4.16668 10 4.16668ZM7.5 8.33334C7.5 6.95263 8.61929 5.83334 10 5.83334C11.3807 5.83334 12.5 6.95263 12.5 8.33334C12.5 9.71406 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71406 7.5 8.33334Z" fill="black" />
                </svg>
            </div>
            <div className="input date">
                <label className='input-label'>When</label>
                <input type="date" onChange={handlePropertyTypeChange} name="moveInDate" className="filter-box-input" />
            </div>
            <div className="input">
                <label className='input-label'>Price</label>
                <select onChange={handlePropertyTypeChange} name="rent" className="filter-box-input">
                    <option value="1000-5000" selected>
                        $1,000 - $5,000
                    </option>
                    <option value="5000-10000">
                        $5,000 - $10,000
                    </option>
                    <option value="10000-15000">
                        $10,000 - 15,000
                    </option>
                    <option value="15000-20000">
                        $15,000 - $20,000
                    </option>
                    <option value="20000-25000">
                        $20,000 - $25,000
                    </option>
                </select>
            </div>
            <div className="input">
                <label className='input-label'>Property Type</label>
                <select onChange={handlePropertyTypeChange} name="propertyType" className="filter-box-input">
                    <option value="House" selected>
                        Houses
                    </option>
                    <option value="Land">
                        Land
                    </option>
                    <option value="OffComplex">
                        Office Complex
                    </option>
                </select>
            </div>
            <button onClick={filterDataResp} className="filter">
                Filter!
            </button>
        </div>
    );
}

export default FilterBox;
