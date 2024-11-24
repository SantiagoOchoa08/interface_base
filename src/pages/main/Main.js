import TableMain from "./components/TableMain";
import React from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {

    const params = useParams()
    const [cleanDataDetail, setcleanDataDetail] = useState(10)
    const [respuesta, setRespuesta] = useState()

    const handleRes = async () => {
        console.log(await cleanDataDetail)
    }
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail)
        handleRes()
    }, [setcleanDataDetail])


    return (
        <div>

            <Header />

            <Cards />
            <br></br>
                <p>{cleanDataDetail.rate_float} </p> 
                <p>{cleanDataDetail.code} </p> 
        </div>
    )
}

export default Main;