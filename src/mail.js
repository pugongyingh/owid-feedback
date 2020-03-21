const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `Hello ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我们：www.hr9.top
我们或许能帮您解决这些问题。`;
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
