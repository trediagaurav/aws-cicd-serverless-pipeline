
export async function handler(event: string, context: string) {
  console.log('Stage Name is: ' + process.env.stage);
  const envName = process.env.stageName;
  const response = `Hello from a Lambda Function ${envName}`;
  return {
    body: response,
    statusCode: 200,
  };
}