import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './Landing.css';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import axios from 'axios';

//component import
import StatisticalCard from './StatisticalCard';
//action import
import {getStocksTimeSeriesDaily} from '../redux/actions/stocks-action';

//
import 'highcharts/css/stocktools/gui.css';
import 'highcharts/css/annotations/popup.css';
import 'highcharts/highstock.js';
import data from 'highcharts/modules/data.js';
import indicators from 'highcharts/indicators/indicators-all.js';
import annotations from 'highcharts/modules/annotations-advanced.js';
import dragPanes from 'highcharts/modules/drag-panes.js';
import priceIndicator from 'highcharts/modules/price-indicator.js';
import fullScreen from 'highcharts/modules/full-screen.js';
import stockTools from 'highcharts/modules/stock-tools.js';


data(Highcharts);
indicators(Highcharts);
annotations(Highcharts);
dragPanes(Highcharts);
priceIndicator(Highcharts);
fullScreen(Highcharts);
stockTools(Highcharts);



const Test = () => {
    const dispatch = useDispatch()
    const [ symbol,setSymbol] = useState();

    useEffect(() => {
    dispatch(getStocksTimeSeriesDaily('MSFT'));
    }, []) 

    const dailyStocksRedux = useSelector((state) => state.stocksTimeSeries.dailyStocks['Time Series (Daily)'])
    let ohlc = [];
    let volume = [];

    for(let date in dailyStocksRedux){
    ohlc = [[new Date(date).getTime(),parseFloat(dailyStocksRedux[date]['1. open']),
                                        parseFloat(dailyStocksRedux[date]['2. high']),
                                        parseFloat(dailyStocksRedux[date]['3. low']),
                                        parseFloat(dailyStocksRedux[date]['4. close'])],
                                        ...ohlc];


    volume = [[new Date(date).getTime(),parseFloat(dailyStocksRedux[date]['5. volume'])], ...volume];
    }

    
    
    const handleSymbol = async (e) =>{
    setSymbol(e.target.value)
    // try {
    //     const res = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=R87EZ86OZN8QGX9H`);

    //     console.log('res.data',res.data);
     
    // } catch (error) {
    //     console.log('error',error);
    // }
    }
    
    console.log(',',symbol);

    const options = {
        yAxis: [{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],
        tooltip: {
            shape: 'square',
            headerShape: 'callout',
            borderWidth: 0,
            shadow: false,
            positioner: function (width, height, point) {
                var chart = this.chart,
                    position;

                if (point.isHeader) {
                    position = {
                        x: Math.max(
                            // Left side limit
                            chart.plotLeft,
                            Math.min(
                                point.plotX + chart.plotLeft - width / 2,
                                // Right side limit
                                chart.chartWidth - width - chart.marginRight
                            )
                        ),
                        y: point.plotY
                    };
                } else {
                    position = {
                        x: point.series.chart.plotLeft,
                        y: point.series.yAxis.top - chart.plotTop
                    };
                }

                return position;
            }
        },
        series: [{
            type: 'ohlc',
            id: 'aapl-ohlc',
            name: 'AAPL Stock Price',
            data: ohlc
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data: volume,
            yAxis: 1
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800,
                    minHeight: 1000
                },
                chartOptions: {
                    rangeSelector: {
                        inputEnabled: false
                    }
                }
            }]
        }
    }



    return (
        <Container fluid>
            <Row>
                <Col xs={3} md={3} lg={3}>
                    <input type="checkbox" name="" id="side-menu-switch"/>
                    <div className="side-menu">
                        <form action="">
                            <input type="text" placeholder="Search For" value={symbol} onChange={(e)=>{handleSymbol(e)}}/>
                            <button>
                                    <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <nav>
                            <a href="#"><i className="fas fa-gavel"></i>Stocks</a>
                            <a href="#"><i className="fas fa-gavel"></i>Currency</a>
                            <a href="#"><i className="fas fa-gavel"></i>Forex</a>
                            {/* <a href="#"><i className="fas fa-gavel"></i>lorem</a>
                            <a href="#"><i className="fas fa-gavel"></i>lorem</a> */}
                        </nav>
                        <label for="side-menu-switch">
                            <i className="fas fa-angle-left"></i>
                        </label>
                    </div>
                </Col>
                <Col xs={9} md={9} lg={9}>
                    <Row className='cards-stati'><StatisticalCard/></Row>
                    <Row>
                    <div className='chart'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'stockChart'}
                        options={options}
                    />
                    </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Test;
