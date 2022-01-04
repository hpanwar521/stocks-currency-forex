import React,{useEffect,useState} from 'react';
import { useDispatch} from 'react-redux';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col,Row } from 'react-bootstrap';
import { debounce } from 'lodash';
import { getSearchResult } from '../redux/actions/search-action';


const Navbar = () => {
    const dispatch = useDispatch();
    const [ symbol,setSymbol] = useState('');
    const [ search,setSearch] = useState('');
 

    useEffect(() => {
        dispatch(getSearchResult(search));
        
    }, [search]);
        
        
        const handleSymbol = async (e) =>{
        const debounceFun = debounce(()=>setSearch(e.target.value),1000);
        debounceFun();
        }
        
        console.log(',',symbol,search);

    return (
        <Container fluid>
            <Row>
                <Col xs={3} md={3} lg={3}>
                    <input type="checkbox" name="" id="side-menu-switch"/>
                    <div className="side-menu">
                        <h4 className='logo'>Stocks-Forex-Currency</h4>
                        <form action="">
                            <input type="text" placeholder="Search For" value={symbol} onChange={(e)=>{setSymbol(e.target.value); handleSymbol(e)}}/>
                            <button>
                                    <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <nav>
                            <a href="#"><i className="fas fa-gavel"></i>Stocks</a>
                            <a href="#"><i className="fas fa-gavel"></i>Currency</a>
                            <a href="#"><i className="fas fa-gavel"></i>Forex</a>
                        </nav>
                        <label for="side-menu-switch">
                            <i className="fas fa-angle-left"></i>
                        </label>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;
