const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hi there!\n
        1111Someone did something. Here is what they did:
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
        2222Someone did something. Here is what they did:
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
        3333Someone did something. Here is what they did:
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
        4444Someone did something. Here is what they did:
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
        5555Someone did something. Here is what they did:
        Name: ${details.name}\n
         ${details.email}\n
         ${details.message}\n
        Salutation`;
  },
    getMailSub1: content => {
    const details = {
      name: content.name
    };
    return `Hi there!${details.name}`;
  },
  getMailSub2: content => {
    const details = {
      name: content.name
    };
    return `Hi there!${details.name}`;
  },
  getMailSub3: content => {
    const details = {
      name: content.name
    };
    return `Hi there!${details.name}`;
  },
  getMailSub4: content => {
    const details = {
      name: content.name
    };

    return `Hi there!${details.name}`;
  },
  getMailSub5: content => {
    const details = {
      name: content.name
    };

    return `Hi there!${details.name}`;
  }
};

module.exports = mailUtils;
