const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  },
  getMailBody2: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  },
  getMailBody4: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  },
  getMailBody5: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  }
};

module.exports = mailUtils;
