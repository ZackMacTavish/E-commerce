import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>
{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H7078AWHXaAYOBace785StdBP51RNGil1q60qlnXIsMGdXz1pTMMcIn6BG28uPIiYIZQKireaNid5pq2CNm8BEB00Q5RPz7jY';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name= 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    )
};

export default StripeCheckoutButton;