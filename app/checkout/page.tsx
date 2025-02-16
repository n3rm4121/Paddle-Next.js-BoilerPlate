import React from 'react'
import { Checkout } from '../../components/PaddleCheckout'

function checkout() {
    //     const session = await auth();

    //   if (!session) {
    //     redirect('/login');
    //   }
    //   const user = session?.user;
    interface IUser {
        email: string;
        id: string;
    }
    const user = {
        email: "test@test.com",
        id: '1'
    }
    return (
        <div>
            <div id="paddle-checkout"></div>
            <Checkout user={user as IUser} />
        </div>
    )
}

export default checkout