-   Cognitoの作成

    ```
    aws cloudformation create-stack --stack-name next-cognito --template-body file://cloudformation/cognito.yml
    ```

-   API Gateway MOCKの作成

    ```
    aws cloudformation create-stack --stack-name MyMockApiStack --template-body file://cloudformation/apigateway-mock.yml
    ```
