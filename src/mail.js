const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我们：www.hr9.top
或许我们能帮您解决这些问题。`;
  },
  getMailBody2: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我们：https://pensive-brahmagupta-05c0ba.netlify.com/
或许我们能帮您解决这些问题。`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `
    如您有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
请联系我们：https://pensive-brahmagupta-05c0ba.netlify.com`;
  },
  getMailBody4: content => {const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我：www.hr9.top`;
  },
  getMailBody2: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    贵公司是否有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
如果您有这方面的疑问或需求请联系我：www.hr9.top`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    如您有程序开发，网站，微信小程序设计开发需求，或网络推广方面需要一些技术支持。
请联系我：www.hr9.top`;
  },
  getMailBody4: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `${details.name}您好!\n
    你是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。如果您有这方面的疑问或需求请联系我，联系方式和介绍请到：www.hr9.top  我随时为您远程工作。`;
  },
  getMailBody5: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return  `${details.name}您好!\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。如果您有这方面的疑问或需求请联系我，简介：www.hr9.top  我可以随时在线为您工作。`;
  },
    getMailSub1: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub2: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub3: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub4: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  },
  getMailSub5: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  }
};

module.exports = mailUtils;
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我们，联系方式和介绍请到：www.hr9.top
我们或许能帮您解决这些问题。`;
  },
  getMailBody5: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return  `您好 ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我们，详细介绍：www.hr9.top
我们或许能帮您解决这些问题。`;
  },
    getMailSub1: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub2: content => {
    const details = {
      name: content.name
    };
    return `求职`;
  },
  getMailSub3: content => {
    const details = {
      name: content.name
    };
    return `您好`;
  },
  getMailSub4: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  },
  getMailSub5: content => {
    const details = {
      name: content.name
    };

    return `求职`;
  }
};

module.exports = mailUtils;
