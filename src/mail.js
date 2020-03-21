const mailUtils = {
  getMailBody1: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
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

    return `您好 ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请联系我们：www.hr9.top
请允许我成为贵公司的一员，或许能帮您解决这些问题。`;
  },
  getMailBody3: content => {
    const details = {
      name: content.name,
      message: content.message,
      email: content.email
    };

    return `您好 ${details.email}\n
    贵公司是否有关于网络的事情搞不定，或你有些想法需要网络开发技术支持，亦或你在组建自己的技术团队还是把技术外包而犹豫不决。
如果您有这方面的疑问或需求请移步：www.hr9.top
我们或许能帮您解决这些问题。`;
  },
  getMailBody4: content => {
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
