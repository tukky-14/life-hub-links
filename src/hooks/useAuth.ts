import {
    signIn as signInAmplify,
    signOut as signOutAmplify,
    signUp as signUpAmplify,
} from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { currentConfig } from '../config/aws';
import { fetchAuthSession } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';

Amplify.configure(currentConfig);

export function signIn(username: string, password: string) {
    return signInAmplify({ username, password });
}

export function signOut() {
    return signOutAmplify();
}

export async function currentSession() {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        console.log(`The accessToken: ${accessToken}`);
        console.log(`The idToken: ${idToken}`);
    } catch (err) {
        console.log(err);
    }
}

export async function currentAuthenticatedUser() {
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
        console.log(err);
    }
}

export async function signUp(username: string, password: string, email: string) {
    try {
        const result = await signUpAmplify({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                },
            },
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

export function useAuth() {
    // Add your global state management logic here
    // For example, you can use React Context or a state management library like Redux
    // Return the authentication state and the signIn function
    return {
        isAuthenticated: false, // Replace with your authentication state
    };
}
