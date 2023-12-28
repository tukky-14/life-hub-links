// https://docs.amplify.aws/javascript/build-a-backend/auth/set-up-auth/#determine-your-auth-integration-path
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            //  Amazon Cognito User Pool ID
            userPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_ID || '',
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolClientId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_CLIENT_ID || '',
            // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
            identityPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_IDENTITY_POOL_ID || '',
            // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
            // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
            signUpVerificationMethod: 'code', // 'code' | 'link'
            loginWith: {
                // OPTIONAL - Hosted UI configuration
                oauth: {
                    domain: 'your_cognito_domain',
                    scopes: [
                        'phone',
                        'email',
                        'profile',
                        'openid',
                        'aws.cognito.signin.user.admin',
                    ],
                    redirectSignIn: ['http://localhost:3000/'],
                    redirectSignOut: ['http://localhost:3000/'],
                    responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
                },
            },
        },
    },
});

// You can get the current config object
export const currentConfig = Amplify.getConfig();
