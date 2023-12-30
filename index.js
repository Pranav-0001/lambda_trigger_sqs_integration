import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SECRETKEY,
});
var sqs = new AWS.SQS({ region: process.env.AWS_REGION });
var msg = { payload: "sample message" };
var sqsParams = {
  MessageBody: JSON.stringify(msg),
  QueueUrl: process.env.AWS_SQS_URL,
};
sqs.sendMessage(sqsParams, function (err, data) {
  if (err) {
    console.log("ERR", err);
  }
  console.log(data);
});
