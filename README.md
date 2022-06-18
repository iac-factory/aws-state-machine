# aws-node-16-lambda-step-function

AWS Step Functions lets you coordinate multiple AWS services into serverless workflows so you can build and update apps quickly. Using Step Functions, you can design and run workflows that stitch together services, such as AWS Lambda, AWS Fargate, and Amazon SageMaker, into feature-rich applications.

The application uses several AWS resources, including Step Functions state machines, Lambda functions and an EventBridge rule trigger. These resources are defined in the `template.yaml` file in this project. You can update the template to add AWS resources through the same deployment process that updates your application code.

* [GoLand](https://docs.aws.amazon.com)
* [WebStorm](https://docs.aws.amazon.com/toolkit-for-jetbrains/latest/userguide/welcome.html)
* [Visual Studio](https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/welcome.html)

## Deployment ##

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda.

To use the SAM CLI, you need the following tools:

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 16](https://nodejs.org/en/), including the NPM package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

```bash
sam build

sam local invoke Queue
sam local invoke Approve
sam local invoke Failure

sam deploy --stack-name "test-step-function" --resolve-s3 --capabilities CAPABILITY_IAM
```

## Local Development ##

Build the Lambda functions with the `sam build --use-container` command.

```bash
sam build
```

The SAM CLI installs dependencies defined in `functions/*/package.json`, creates a deployment package, and saves it in the `.aws-sam/build` folder.

## Debugging ##

```bash
sam logs -n Queue --stack-name [...] --tail
```

- [SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-logging.html).

## Unit Testing ##

Tests are defined in the `functions/*/tests` folder(s). Use NPM to install [Mocha](https://mochajs.org/) and run unit tests.

```bash
cd functions/queue && npm install && npm run test && cd -
cd functions/approve && npm install && npm run test && cd -
cd functions/failure && npm install && npm run test && cd -
```

## Decommissioning ##

```bash
sam delete --stack-name [...]
```

## Resources ##

- [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
