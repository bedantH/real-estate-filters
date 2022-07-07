import React, { useContext, useState, useEffect } from "react";

export const DataContext = React.createContext();

export function DataContextProvider({ children }) {

    const data = [
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Palm Harbour",
            address: "2699 Green Valley, Highland Lake, FL",
            propertyType: "House",
            moveInDate: "2022-07=20",
            city: "Florida",
            rent: "2,700",
            range: "1000-5000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Green Valley Estate",
            address: "1808 Farm Meadow Drive, Phoenix, AZ",
            propertyType: "Land",
            moveInDate: "2022-07-28",
            city: "Arizona",
            rent: "3,200",
            range: "1000-5000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Sanna Green Venue",
            address: "2967 Gordon Street, Pomona, CA",
            propertyType: "House",
            moveInDate: "2022-08-05",
            city: "California",
            rent: "5,000",
            range: "1000-5000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Vision Spire",
            address: "4710 Scenicview Drive, Midland, TX",
            propertyType: "Land",
            moveInDate: "2022-08-05",
            city: "Texas",
            rent: "7,512",
            range: "5000-10000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Bloom Tower",
            address: "762 Stoney Lonesome Road, Pittston, PA",
            propertyType: "OffComplex",
            moveInDate: "2022-08-05",
            city: "Pennsylvania",
            rent: "10,000",
            range: "5000-10000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Deer Hill Tower",
            address: "553 Oxford Court, Memphis, MS",
            propertyType: "OffComplex",
            moveInDate: "2022-08-05",
            city: "Missipi",
            rent: "4,010",
            range: "1000-5000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Paradise Lookout",
            address: "317 Andy Street, Creighton, SD",
            propertyType: "House",
            moveInDate: "2022-08-05",
            city: "South Dakota",
            rent: "5,100",
            range: "5000-10000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Reincarnation Tower",
            address: "2797 Philli Lane, Tahlequah, OK",
            propertyType: "House",
            moveInDate: "2022-08-05",
            city: "Oklahoma",
            rent: "13,450",
            range: "10000-15000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Honor Land Obelisk",
            address: "3793 Heather Sees Way, Tahlequah, OK",
            propertyType: "Land",
            moveInDate: "2022-08-05",
            city: "Oklahoma",
            rent: "1,500",
            range: "1000-5000"
        },
        {
            img: "https://i.ibb.co/1XTnVqz/image.png",
            propertyName: "Gray Sierra Tower",
            address: "1545 Peck Court, Anaheim, CA",
            propertyType: "Land",
            moveInDate: "2022-08-15",
            city: "California",
            rent: "5,751",
            range: "5000-10000"
        },
    ];

    const [filteredData, setFilteredData] = useState(data);
    const [filterProperties, setFilterProperties] = useState({
        city: null,
        moveInDate: null,
        rent: null,
        propertyType: null,
    });


    function filterData(input) {
        var startRange = input.rent && input.rent.toString().split('-')[0];
        var endRange = input.rent && input.rent.toString().split('-')[1];
        var arr = [];

        data.forEach((ele) => {
            if (ele.city.includes(input.city)) {
                arr.push(ele);
            }
        });

        console.log(arr);
    }

    const value = {
        data,
        filterData,
        filteredData
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}