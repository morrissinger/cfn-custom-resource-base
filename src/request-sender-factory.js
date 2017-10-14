import request from 'superagent';

const requestSenderFactory = (event, context) => {
  return (result, data) => new Promise((resolve, reject) => {
    const base = {
      StackId: event.StackId,
      RequestId: event.RequestId,
      LogicalResourceId: event.LogicalResourceId,
      PhysicalResourceId: context.PhysicalResourceId
    };

    const body = {
      ...base,
      ...result,
      Data: data
    };

    request.put(event.ResponseURL)
      .set('port', 443)
      .send(body)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
  });
};

export default requestSenderFactory;
