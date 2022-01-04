import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './Landing.css';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

//component import
import StatisticalCard from './StatisticalCard';
//action import
import {getStocksTimeSeriesDaily, getStocksTimeSeriesMonthly, getStocksTimeSeriesWeekly} from '../redux/actions/stocks-action';

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



const StocksChart = () => {
    const dispatch = useDispatch();
    const {symbol} = useParams();
    useEffect(() => {
    dispatch(getStocksTimeSeriesDaily(symbol));
    dispatch(getStocksTimeSeriesWeekly(symbol));
    dispatch(getStocksTimeSeriesMonthly(symbol));
    }, []) 
    console.log('symbol',symbol);

  
    const dailyStocksMetaDataRedux = useSelector((state) => state.stocksTimeSeries.dailyStocks['Meta Data'])
    const dailyStocksRedux = useSelector((state) => state.stocksTimeSeries.dailyStocks['Time Series (Daily)'])
    const weeklyStocksRedux = useSelector((state) => state.stocksTimeSeries.weeklyStocks['Weekly Time Series'])
    const monthlyStocksRedux = useSelector((state) => state.stocksTimeSeries.monthlyStocks['Monthly Time Series'])
    const getSymbolNameRedux = useSelector((state) => state.getSymbolName.payload)
    
// for daily chart--------->
    let dailyOHLC = [];
    let dailyVolume = [];

    for(let date in dailyStocksRedux){
    dailyOHLC = [[new Date(date).getTime(),parseFloat(dailyStocksRedux[date]['1. open']),
                                        parseFloat(dailyStocksRedux[date]['2. high']),
                                        parseFloat(dailyStocksRedux[date]['3. low']),
                                        parseFloat(dailyStocksRedux[date]['4. close'])],
                                        ...dailyOHLC];


    dailyVolume = [[new Date(date).getTime(),parseFloat(dailyStocksRedux[date]['5. volume'])], ...dailyVolume];
    }

    const dailyOptions = {
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
            name: '',
            data: dailyOHLC
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: '',
            data: dailyVolume,
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

    // weekly chart ----->

   
    let weeklyOHLC = [];
    let weeklyVolume = [];

    for(let date in weeklyStocksRedux){
    weeklyOHLC = [[new Date(date).getTime(),parseFloat(weeklyStocksRedux[date]['1. open']),
                                        parseFloat(weeklyStocksRedux[date]['2. high']),
                                        parseFloat(weeklyStocksRedux[date]['3. low']),
                                        parseFloat(weeklyStocksRedux[date]['4. close'])],
                                        ...weeklyOHLC];


    weeklyVolume = [[new Date(date).getTime(),parseFloat(weeklyStocksRedux[date]['5. volume'])], ...weeklyVolume];
    }

    const weeklyOptions = {
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
            name: '',
            data: weeklyOHLC
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: '',
            data: weeklyVolume,
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

    // monthly chart ----->

   
    let monthlyOHLC = [];
    let monthlyVolume = [];

    for(let date in monthlyStocksRedux){
    monthlyOHLC = [[new Date(date).getTime(),parseFloat(monthlyStocksRedux[date]['1. open']),
                                        parseFloat(monthlyStocksRedux[date]['2. high']),
                                        parseFloat(monthlyStocksRedux[date]['3. low']),
                                        parseFloat(monthlyStocksRedux[date]['4. close'])],
                                        ...monthlyOHLC];


    monthlyVolume = [[new Date(date).getTime(),parseFloat(monthlyStocksRedux[date]['5. volume'])], ...monthlyVolume];
    }

    const monthlyOptions = {
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
            name: '',
            data: monthlyOHLC
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: '',
            data: monthlyVolume,
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
        <div className='landing' xs={12} md={12} lg={12}>
        <Container fluid>
            <Row>
                <Col >
                <h1>{getSymbolNameRedux && getSymbolNameRedux['2. name']}</h1>
                    <Row className='cards-stati'>
                        <StatisticalCard 
                            symbol={dailyStocksMetaDataRedux && dailyStocksMetaDataRedux['2. Symbol']} 
                            region={dailyStocksMetaDataRedux && dailyStocksMetaDataRedux['5. Time Zone']} 
                            open={dailyOHLC && dailyOHLC[dailyOHLC.length-1] && dailyOHLC[dailyOHLC.length-1][1]}
                            close={dailyOHLC && dailyOHLC[dailyOHLC.length-1] && dailyOHLC[dailyOHLC.length-1][4]}
                        />
                    </Row>
                    <Row>
                        <div>
                        <Col className='chart-type'>
                            Daily chart
                        </Col>
                        </div>
                    </Row>
                    <Row>
                    <div className='chart'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'stockChart'}
                        options={dailyOptions}
                    />
                    </div>
                    </Row>
                    <div>
                        <Col className='chart-type'>
                                Weekly chart
                        </Col>
                    </div>
                    <Row>
                    <div className='chart'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'stockChart'}
                        options={weeklyOptions}
                    />
                    </div>
                    </Row>
                    <div>
                        <Col className='chart-type'>
                                Monthly chart
                        </Col>
                    </div>
                    <Row>
                    <div className='chart'>
                    <HighchartsReact
                        highcharts={Highcharts}
                        constructorType={'stockChart'}
                        options={monthlyOptions}
                    />
                    </div>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default StocksChart;
