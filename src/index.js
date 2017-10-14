import requestSenderFactory from './request-sender-factory';
import {SUCCESS, ERROR} from './constants';

const handler = (event, context, callback) => {
  // Create a new request sender
  const send = requestSenderFactory(event, context);

  // Actually perform an operation. In this case, there is none,
  // so we just send success with an empty object literal.
  send(SUCCESS, {}) // Add any data gathered from operation into this obj literal
    .then((response) => callback(null, response))
    .catch((err) => callback(err, null));
};

export default handler;
