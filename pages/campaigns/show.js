import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import {Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
    // this is a separate props object than the one that
    // ends up in the actual component's instance
    static async getInitialProps(props) {
        // actuall address of the campaign shown to the user
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestCount,
            approversCount
        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create request to withdraw money',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ];
        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                show page
                {this.renderCards()}
            </Layout>
        )
    }
}

export default CampaignShow;