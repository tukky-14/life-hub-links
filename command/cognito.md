-   ユーザ作成

    ```
    aws cognito-idp admin-create-user \
    --user-pool-id ap-northeast-1_RwFelIqPc \
    --username tukky \
    --user-attributes Name=email,Value=bigoonage0104@gmail.com Name=email_verified,Value=True \
    --temporary-password 999999
    ```

    ※Name=email_verified,Value=Trueをつけることでメールを検証済みにしている

<br/>

-   ユーザを確認済みにする

    ```
    aws cognito-idp admin-confirm-sign-up \
    --user-pool-id ap-northeast-1_RwFelIqPc \
    --username tukky
    ```

<br/>

-   ユーザパスワード変更

    ```
    aws cognito-idp admin-set-user-password \
    --user-pool-id ap-northeast-1_RwFelIqPc \
    --username tukky \
    --password 999999 \
    --permanent
    ```

    ※permanentオプションをつけない場合、ステータスは"パスワードを強制的に変更"になる

<br/>

-   ユーザ削除

    ```
    aws cognito-idp admin-delete-user \
    --user-pool-id ap-northeast-1_RwFelIqPc \
    --username tukky
    ```

<br/>

-   ステータス
    | ステータス | 日本語説明 |
    | --- | --- |
    | CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED | 一時的なパスワードで作成されたユーザーは新しいパスワードを設定する必要があります |
    | CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE | サインインはカスタムチャレンジのレスポンスで確認する必要があります |
    | CONFIRM_SIGN_IN_WITH_TOTP_CODE | サインインはユーザーからのTOTPコードで確認する必要があります |
    | CONTINUE_SIGN_IN_WITH_TOTP_SETUP | TOTPセットアッププロセスを続行する必要があります |
    | CONFIRM_SIGN_IN_WITH_SMS_CODE | サインインはユーザーからのSMSコードで確認する必要があります |
    | CONTINUE_SIGN_IN_WITH_MFA_SELECTION | MFA検証のモードを選択する必要があります |
    | RESET_PASSWORD | パスワードをリセットする必要があります |
    | CONFIRM_SIGN_UP | サインアップフローを完全に完了していないユーザーは確認する必要があります |
    | DONE | サインインプロセスは完了しました |
