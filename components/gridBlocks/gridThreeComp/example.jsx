import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {CatalogService} from "sk-customer-client-sdk"

export default function Products() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] =  useState(null);

    useEffect(() => {
   
    var pageSize = 5;
    var pageNum = 1;
    var sortOrder = "asc";
    var keyword = "";
    var sortType = "price_low_to_high";
    const searchUrl = "http://192.168.1.210:25710/searchframe/api/110";

    // var actionTag = "filterCatalogItems";

    // const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer c092a08fdcAAC",
    //     apiType: "G",
    //     responseFlag: "on",
    //     dataTag: "PRIMARY",
    //     channel: "web",
    //     actionTag: "filterCatalogItems",
    //   };
    // let header = JSON.parse(JSON.stringify(headers));

    var reqBody = {
        "pathParams": {},
        "data": {
            "categories": ["CA00393"],
            "brands": [],
            "collections": [],
            "filters": {
                "attribute": [],
                "value": []
            },
            "price": {
                "maxPrice": 919.00,
                "minPrice": 339.00
            },
            "type": 1
        }
    }

    

    // const reqUrl = `${searchUrl}/catalogProducts?pageSize=${pageSize}&pageNum=${pageNum}&sortOrder=${sortOrder}&sortType=${sortType}&keyword=${keyword}`;

    // header["actionTag"] = "filterCatalogItems";
    // putRequest(reqUrl, reqBody, header).then(response => console.log(response));

    // async function putRequest(reqUrl, reqBody, header) {
    //     return await axios.put(reqUrl, reqBody, {
    //       headers: header,
    //     });
    //   }

    setLoading(true)
    setTimeout(() => {
        CatalogService.filterProducts(reqBody, keyword, pageSize, pageNum, sortOrder, sortType).then(response=> {
            if(response?.status === 200 && response?.data?.status == 200){
                setData(response.data.data)
                // console.log(response)
            }
        }).catch((error) => setError(error)).finally(() => setLoading(false))
    },2000)

    }, [])
    
    if(loading){
        return <div>loading</div>
    }

    if(error){
        return <div>error</div>
    }
    
    console.log(data)
  return (
    <div>
        {data?.data?.map((item, index) => (
            <div key={index}>{item?.CIN}</div>
        ))}
    </div>
  )
}
