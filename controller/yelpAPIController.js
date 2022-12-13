import api from 'api';

const sdk = api('@yelp-developers/v1.0#2hsur2ylbank95o');
sdk.auth('Bearer yNg5YLB7iLiP63KPBaCv6SZ8M1mAwsCqXDSruWSrVlYz3CCJLQz47mVkHW1HVm6FJHnt788c0LBClbAEOxgM941QTKY8MgSvPtFI7_IEtaq3ETvbdLTZPylMAxyWY3Yx');

// Sample url: `/api/businesses?term=piazza&location=seattle`
const findBusinesses = (req, res) => {
    const location = req.query.location;
    const term = req.query.term;
    sdk.v3_business_search({term: term, location: location})
        .then(({data}) => {console.log(data);res.json(data);})
        .catch(err => console.error(err));
}

// Sample url: `/api/business/6I28wDuMBR5WLMqfKxaoeg`
const findBusinessInfoById = async (req, res) => {
    const business_id = req.params['bid'];
    await sdk.v3_business_info({business_id_or_alias: business_id})
        .then(({ data }) => {console.log(data); res.json(data);})
        .catch(err => console.error(err));
}

const YelpAPIController =  (app) => {
    app.get('/api/businesses', findBusinesses);
    app.get('/api/business/:bid',findBusinessInfoById);
}

export default YelpAPIController;