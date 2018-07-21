import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x44366d574f227d92A97073519050B677Ca3cF227'
);

export default instance;