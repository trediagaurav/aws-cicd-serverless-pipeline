# Welcome to your CICD Serverless CDK project! 

This is a blank project for TypeScript development with CDK.

Before starting with the project there is some pre-reqs tat needs to be fulfilled without which this project won't be successfully functional.

1) AWS CDK (verson 2.121.1)
2) NPM
3) A Github repository

1. Run this command 
export CDK_NEW_BOOTSTRAP=1 
npx cdk bootstrap aws://<YOUR_ACCONT_ID>/<YOUR_REGION> --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://<YOUR_ACCONT_ID>/<YOUR_REGION>

2. Create your new github repository

3. Clone your repo onto local - < git clone https://github.com/ ..... >

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
