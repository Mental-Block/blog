import React, { useState, useEffect, useCallback} from "react";
import { Line } from "react-chartjs-2";

export default function Chart({labels, data, ...options}){
    const [chartData, setChartData] = useState({});

    const chart = useCallback(() => {
        setChartData({
            labels: labels,
            datasets: data,
            ...options
        })
    }, [labels, data]);

    useEffect(() => {
        chart()
    }, [chart])

    return <Line data={chartData}/>
}

