import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import dotenv from 'dotenv';
import axios from 'axios';
import url from '../config/url';

import 'react-toastify/dist/ReactToastify.css';

dotenv.config();
toast.configure();

class CardCheckout extends Component {
  handleToken = async (token, address) => {
    // eslint-disable-next-line no-console
    console.log(token, address);

    const response = await axios.post(`${url}/checkout/`, {
      token,
      product: {
        name: 'shirt',
        price: '56',
      },
    });
    // eslint-disable-next-line no-console
    console.log(response);

    if (response.data.status === 'success') {
      toast('Success! Check emails for details', {
        type: 'success',
      });
    } else {
      toast('Oh no! Something went wrong.', {
        type: 'error',
      });
    }
  }

  render() {
    return (
      <div>
        <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={35 * 100} // to convert to cents
          name="The Ends Collection"
          email="martinezcj2@gmail.com"
          description="purchasing goods" // the pop-in header subtitle
          image="https://www.spoonity.com/wp-content/uploads/2017/04/stripe.png"
        // panelLabel="Give Money"
        // ComponentClass="div" //surround custom button in this
        >
          {/* Add customized button here */}
          {/* <button>
            Purchase
          </button> */}
        </StripeCheckout>
      </div>
    );
  }
}

export default CardCheckout;
