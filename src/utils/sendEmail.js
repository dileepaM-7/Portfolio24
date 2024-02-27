const emailjs = require('emailjs-com');

exports.handler = async function (event, context) {
  const { firstname, lastname, email, message } = JSON.parse(event.body);

  const templateParams = {
    to_email: 'dlpmalshan@gmail.com',
    from_name: `${firstname} ${lastname}`,
    from_email: email,
    message: message,
  };

  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', response }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
