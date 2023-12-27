import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'リージョン', // 例: 'ap-northeast-1'
        userPoolId: 'ユーザープールID', // 例: 'ap-northeast-1_XXXXX'
        userPoolWebClientId: 'アプリクライアントID', // 例: 'XXXXXXXXXXXXX'
    },
});
