import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import url from '../config/url';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class CardCheckout extends Component {

  handleToken = async (token, address) => {
    console.log(token, address);

    const response = await axios.post(`${url}/checkout/`, {
      token,
      product: {
        name: 'shirt',
        price: '56'
      }
    });
    console.log(response);

    if(response.data.status === 'success') {
      toast('Success! Check emails for details', {
        type: 'success'
      });
    }
    else {
      toast('Oh no! Something went wrong.', {
        type: 'error'
      });

    }
  }

  render() {
    return (
      <div>
        <StripeCheckout
          stripeKey="pk_test_YVhkdt3OtSyXAIpMbCHsEOra"
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={35 * 100} // to convert to cents
          name='yerrr'
        />
      </div>
    );
  }
}

export default CardCheckout;
