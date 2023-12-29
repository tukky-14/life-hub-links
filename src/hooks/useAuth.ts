import { signIn as signInAmplify, signOut as signOutAmplify } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { currentConfig } from '../config/aws';
Amplify.configure(currentConfig);

export function signIn(username: string, password: string) {
    return signInAmplify({ username, password });
}

export function signOut() {
    return signOutAmplify();
}

export function useAuth() {
    // Add your global state management logic here
    // For example, you can use React Context or a state management library like Redux
    // Return the authentication state and the signIn function
    return {
        isAuthenticated: false, // Replace with your authentication state
    };
}
