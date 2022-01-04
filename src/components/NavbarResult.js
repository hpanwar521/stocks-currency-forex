import React,{useEffect,useState} from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import {  useDispatch,useSelector } from 'react-redux';
import LandingCards from './LandingCards';
import { debounce } from 'lodash';
import { getSearchResult } from '../redux/actions/search-action';
import { useNavigate } from 'react-router-dom';
import { getSymbolName } from '../redux/actions/symbol-name';

const NavbarResult = () => {
    // redux
    const SearchResultRedux = useSelector((state) => state.getSearchResult?.payload?.bestMatches)
    console.log('SearchResultRedux',SearchResultRedux);
    const dispatch = useDispatch();
    const [ symbol,setSymbol] = useState('');
    const [ search,setSearch] = useState('');
    const [searchApiData, setSearchApiData] = useState({});
    const [PopularStocks, setPopularStocks] = useState([
        {symbol:'F', company:'Ford Motor Company'},
        {symbol:'AAPL', company:'Apple Inc.'},
        {symbol:'TSLA', company:'Tesla, Inc.'},
        {symbol:'UBER', company:'Uber Technologies, Inc.'},
        {symbol:'SBIN.BSE', company:'State Bank of India'},
        {symbol:'TCS.BSE', company:'Tata Consultancy Services Limited'},
        {symbol:'TITAN.BSE', company:'Titan Company Limited'},
        {symbol:'RELIANCE.BSE', company:'Reliance Industries Limited'},
        {symbol:'HDFC.BSE', company:'Housing Development Finance Corporation Limited'}
    ]);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getSearchResult(search));
        
    }, [search]);
        
        
        const handleSymbol = async (e) =>{
        const debounceFun = debounce(()=>setSearch(e.target.value),1000);
        debounceFun();
        }
        
        console.log(',',symbol,search);

        const sendSymbolName = (symbolName) =>{
            dispatch(getSymbolName(symbolName))
        }

    return (
        <div className='landing' xs={12} md={12} lg={12}>
        <Container fluid>
           
                   
                    <Row className='search-NavbarResult'>
                    <div class="mb-3 mt-5">
                        <input type="text" class="form-control" id="search-bar" placeholder="Search here for stocks , currency, forex " 
                        value={symbol} onChange={(e)=>{setSymbol(e.target.value); handleSymbol(e)}} />
                    </div>
                    </Row>
                    <Row>
                        {SearchResultRedux != undefined && <h3 className="title">Best Matches</h3>}

                        {SearchResultRedux?.map((stock,indx)=>(<>
                            <div className="card1 col-md-12" onClick={()=>{sendSymbolName(SearchResultRedux && stock); navigate(`/${SearchResultRedux && stock['1. symbol']}`)}}>
                            <h5 className="title"><strong>Symbol : </strong>{SearchResultRedux && stock['1. symbol']} </h5>
                                <span><strong> Name : </strong> {SearchResultRedux && stock['2. name']} </span>
                                <span><strong> Type : </strong> {SearchResultRedux && stock['3. type']} </span>
                                <span><strong> Region : </strong> {SearchResultRedux && stock['4. region']} </span>
                                <span><strong> Market Open : </strong> {SearchResultRedux && stock['5. marketOpen']} </span>
                                <span><strong> Market Close : </strong> {SearchResultRedux && stock['6. marketClose']} </span>
                                <span><strong> Currency : </strong> {SearchResultRedux && stock['8. currency']} </span>
                            </div>
                            
                            </>
                        ))}
                    </Row>
                    <Row className='cards-stati'>
                        <LandingCards/>
                    </Row>
                    <Row>
                        <h3 className="title">Popular Stocks</h3>

                        {PopularStocks.map((stock,indx)=>(<>
                           
                            {indx % 3 === 0 &&
                                <Row>
                                <Col>
                                <div className="card col-md-12" onClick={()=>{navigate(`/${PopularStocks[indx].symbol}`)}}>
                                <h5 className="title">{PopularStocks[indx].symbol}</h5>
                                <p>{PopularStocks[indx].company}</p>
                                </div>
                                </Col>
                                <Col>
                                <div className="card col-md-12" onClick={()=>{navigate(`/${PopularStocks[indx+1].symbol}`)}}>
                                <h5 className="title">{PopularStocks[indx+1].symbol}</h5>
                                <p>{PopularStocks[indx+1].company}</p>
                                </div>
                                </Col>
                                <Col>
                                <div className="card col-md-12" onClick={()=>{navigate(`/${PopularStocks[indx+2].symbol}`)}}>
                                <h5 className="title">{PopularStocks[indx+2].symbol}</h5>
                                <p>{PopularStocks[indx+2].company}</p>
                                </div>
                                </Col>
                                </Row>
                           
                            }
                            </>
                        ))}
                    </Row>
                    
                   
                
        </Container>
        </div>
    )
}

export default NavbarResult
