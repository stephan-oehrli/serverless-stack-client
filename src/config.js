const config = {
  STRIPE_KEY:
    'pk_test_51JA97rIUtQVpBbgJvnF41Hondk4jRnz6djAhF6shyV8BUax8BsRM6KXos7kBASmaD8DpuxZ3PXx4oxWv8EI6qgxY00cQtGvpQu',
  MAX_ATTACHMENT_SIZE: 5000000,
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
