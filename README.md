### デプロイ

https://next-life-hub-links.vercel.app/

-   S3画像同期コマンド

    ```
    aws s3 rm s3://life-hub-links-images/ --recursive
    aws s3 cp ../_life-hub-links-images/ s3://life-hub-links-images/ --recursive
    ```

-   S3内容確認コマンド

    ```
    aws s3 ls s3://life-hub-links-images/ --recursive --human --sum
    ```

-   S3内の.DS_Storeファイルの一括削除
    ```
    aws s3 rm s3://life-hub-links-images/ --recursive --exclude "*" --include "*.DS_Store"
    ```

<img src="image.png" width="100px">
