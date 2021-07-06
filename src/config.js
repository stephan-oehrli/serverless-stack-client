const config = {
  s3: {
    REGION: 'eu-central-1',
    BUCKET: 'stephans-notes-app-bucket'
  },
  apiGateway: {
    REGION: 'eu-central-1',
    URL: 'https://d12f1txjxj.execute-api.eu-central-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'eu-central-1',
    USER_POOL_ID: 'eu-central-1_a9sxavO96',
    APP_CLIENT_ID: '6uomqnqhj06p5b9upo2t0hoapq',
    IDENTITY_POOL_ID: 'eu-central-1:81a80baf-9053-4317-8764-477ce901f95e'
  }
};

export default config;
