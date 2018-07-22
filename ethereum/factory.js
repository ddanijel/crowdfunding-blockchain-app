import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x19D067490e0cDF721021a03a51c9753276574B86'
    // '0x33968F2b6716879f9c147BE560a2312F7Fb5b443'
    // '0x44366d574f227d92A97073519050B677Ca3cF227'  == old factory
);

export default instance;