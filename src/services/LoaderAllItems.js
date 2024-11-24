import axios from 'axios';

const LoaderAllItems = async (detail) => {
    try {
        const url = `https://api.coindesk.com/v1/bpi/currentprice.json`
        const res = await axios.get(url)
        detail(res.data.bpi.USD)
        
        
    } catch (error) {
        console.error(error);
        detail('null');
    }
    return detail
}

export default LoaderAllItems