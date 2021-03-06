import React, {useCallback} from "react"
import Chart from "./Chart"

export default function ChartWithData(){
    const DATA = [
        {
            display: true,
            label: 'My preformace',
            borderColor: 'rgb(255,235,0)',
            data: [19.89],
        }, 
        {
            display: true,
            label: 'S&P500',
            borderColor: 'rgb(0,0,0)',
            data: [44.33]
        },
        {
            display: true,
            label: 'S&P/TSX Venture Composite Index',
            borderColor: 'rgb(0,50,250)',
            data: [128]
        }
    ];
    
    const labels = useCallback(() => {
        let currentYear = 2019; // + 1, start at 2020
        const numberOfYears = 20;
        const labels = [];
        for (let i = 0; i <= numberOfYears;  i++) {
            currentYear++
            labels.push(currentYear.toString());
        }
        return labels;
    }, []);
    
    return <Chart labels={labels()} data={DATA} type="line" />
}