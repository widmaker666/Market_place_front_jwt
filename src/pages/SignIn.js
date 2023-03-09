import React from 'react';
import FormSignIn from '../components/FormSignIn';

import Navigation from '../components/Navigation';

const SignIn = () => {
    return (
        <div>
            <Navigation/>
           S'inscrire
           <br />
            <FormSignIn/>
        </div>
    );
};

export default SignIn;