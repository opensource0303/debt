import { createContext, useState, useEffect, ReactNode } from "react";

// 定义语言类型
export type Language = 'zh' | 'en';

// 定义上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: (key: string) => key,
});

// 定义翻译类型
interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

// 翻译对象
const translations: Translations = {
  // 通用翻译
  'home': {
    'zh': '首页',
    'en': 'Home'
  },
  'solution': {
    'zh': '解决方案',
    'en': 'Solutions'
  },
  'internationalCases': {
    'zh': '国际案例',
    'en': 'International Cases'
  },
  'platformMode': {
    'zh': '平台模式',
    'en': 'Platform Mode'
  },
  'coreAdvantages': {
    'zh': '核心优势',
    'en': 'Core Advantages'
  },
  'creditorRightRegistration': {
    'zh': '债权登记',
    'en': 'Creditor Right Registration'
  },
  'debtConfirmation': {
    'zh': '债务确认',
    'en': 'Debt Confirmation'
  },
  'contact': {
    'zh': '联系我们',
    'en': 'Contact Us'
  },
  'login': {
    'zh': '登录',
    'en': 'Login'
  },
  'register': {
    'zh': '注册',
    'en': 'Register'
  },
  'logout': {
    'zh': '退出登录',
    'en': 'Logout'
  },
  
  // Hero 组件翻译
  'hero.title': {
    'zh': '链清',
    'en': 'Cred'
  },
  'hero.subtitle': {
    'zh': '基于社交网络与隐私计算的债务清偿互助平台，通过"债务登记确权+社交网络拓扑匹配+隐私计算技术赋能"，精准挖掘债务闭环，实现债务自动冲抵，为企业及个人提供低成本、高效率、强合规的债务清偿解决方案。',
    'en': 'A debt settlement mutual assistance platform based on social networks and privacy computing. Through "debt registration confirmation + social network topology matching + privacy computing technology empowerment", it precisely mines debt closed loops and realizes automatic debt offset, providing enterprises and individuals with low-cost, high-efficiency, and compliant debt settlement solutions.'
  },
  'hero.button.solution': {
    'zh': '解决方案',
    'en': 'Solutions'
  },
  'hero.button.cases': {
    'zh': '产品案例',
    'en': 'Product Cases'
  },
  
  // About 组件翻译
  'about.title': {
    'zh': '产品概述',
    'en': 'Product Overview'
  },
  'about.description': {
    'zh': '"链清"是一款聚焦企业间及个人间"三角债"痛点的数字化互助清偿平台，核心逻辑是通过"债务登记确权+社交网络拓扑匹配+隐私计算技术赋能"，实现债务自动冲抵。',
    'en': '"Cred" is a digital mutual assistance settlement platform focusing on the pain points of "triangular debt" between enterprises and individuals. Its core logic is to achieve automatic debt offset through "debt registration confirmation + social network topology matching + privacy computing technology empowerment".'
  },
  'about.coreConcept': {
    'zh': '核心理念与价值主张',
    'en': 'Core Concept and Value Proposition'
  },
  'about.valueDescription': {
    'zh': '"链清"平台无需新增资金注入，通过优化债务关系流转效率，降低全社会整体负债规模，为企业及个人提供低成本、高效率、强合规的债务清偿解决方案，同时盘活存量债权资产，改善市场信用环境。',
    'en': 'The "Cred" platform does not require new capital injection. It reduces the overall debt scale of the whole society by optimizing the efficiency of debt relationship circulation, providing enterprises and individuals with low-cost, high-efficiency, and compliant debt settlement solutions, while revitalizing existing creditor assets and improving the market credit environment.'
  },
  'about.value.proposition': {
    'zh': '核心价值主张',
    'en': 'Core Value Proposition'
  },
  'about.value.user': {
    'zh': '对用户',
    'en': 'For Users'
  },
  'about.value.userDesc': {
    'zh': '低成本解决债务纠纷，快速盘活沉淀债权，降低坏账风险',
    'en': 'Low-cost solution to debt disputes, quickly revitalize precipitated creditor rights, reduce bad debt risks'
  },
  'about.value.market': {
    'zh': '对市场',
    'en': 'For Market'
  },
  'about.value.marketDesc': {
    'zh': '提升资金流转效率，缓解三角债对经济循环的阻滞，优化供应链信用生态',
    'en': 'Improve capital circulation efficiency, alleviate the blockage of triangular debt to economic cycle, optimize supply chain credit ecology'
  },
  'about.value.regulatory': {
    'zh': '对监管',
    'en': 'For Regulatory'
  },
  'about.value.regulatoryDesc': {
    'zh': '形成标准化债务清偿证据链，助力规范市场信用秩序，提供债务风险监测数据支撑',
    'en': 'Form a standardized debt settlement evidence chain, help standardize market credit order, and provide debt risk monitoring data support'
  },
  
  // Services 组件翻译
  'services.title': {
    'zh': '核心功能',
    'en': 'Core Functions'
  },
  'services.description': {
    'zh': '"链清"平台提供全面的债务清偿服务，通过创新技术和商业模式，解决企业间及个人间的三角债问题',
    'en': 'The "Cred" platform provides comprehensive debt settlement services, solving the triangular debt problem between enterprises and individuals through innovative technologies and business models.'
  },
  'services.seeMore': {
    'zh': '查看完整解决方案',
    'en': 'View Complete Solutions'
  },
  
  // Advantages 组件翻译
  'advantages.title': {
    'zh': '产品优势',
    'en': 'Product Advantages'
  },
  'advantages.description': {
    'zh': '"链清"平台通过创新技术和商业模式，为解决三角债问题提供了全面、高效、安全的解决方案。',
    'en': 'The "Cred" platform provides a comprehensive, efficient, and secure solution to the triangular debt problem through innovative technologies and business models.'
  },
  'advantages.seeMore': {
    'zh': '查看详细优势',
    'en': 'View Detailed Advantages'
  },
  
  // News 组件翻译
  'news.title': {
    'zh': '新闻与动态',
    'en': 'News and Updates'
  },
  'news.description': {
    'zh': '了解"链清"(Cred)平台的最新进展和行业资讯',
    'en': 'Learn about the latest developments and industry information of the "Cred" platform'
  },
  'news.readMore': {
    'zh': '阅读更多',
    'en': 'Read More'
  },
  'news.viewCases': {
    'zh': '查看产品案例',
    'en': 'View Product Cases'
  },
  
  // Contact 组件翻译
  'contact.title': {
    'zh': '联系我们',
    'en': 'Contact Us'
  },
  'contact.description': {
    'zh': '如有任何关于澳门多角债解决平台的问题或合作意向，请随时与我们联系。',
    'en': 'If you have any questions about the Macau Multi-angle Debt Solution Platform or cooperation intentions, please feel free to contact us.'
  },
  'contact.sendMessage': {
    'zh': '发送咨询',
    'en': 'Send Inquiry'
  },
  
  // Footer 组件翻译
  'footer.quickLinks': {
    'zh': '快速链接',
    'en': 'Quick Links'
  },
  'footer.legalInfo': {
    'zh': '法律信息',
    'en': 'Legal Information'
  },
  'footer.privacyPolicy': {
    'zh': '隐私政策',
    'en': 'Privacy Policy'
  },
  'footer.serviceTerms': {
    'zh': '服务条款',
    'en': 'Service Terms'
  },
  'footer.riskNotice': {
    'zh': '风险提示',
    'en': 'Risk Notice'
  },
  'footer.legalStatement': {
    'zh': '法律声明',
    'en': 'Legal Statement'
  },
  'footer.followUs': {
    'zh': '关注我们',
    'en': 'Follow Us'
  },
  'footer.copyright': {
    'zh': '&copy; {year} 澳门债权交易中心. 保留所有权利.',
    'en': '&copy; {year} Macau Creditor Rights Trading Center. All rights reserved.'
  },
  'footer.logo': {
    'zh': '链清 Cred',
    'en': 'Cred'
  },
  'footer.slogan': {
    'zh': '基于社交网络与隐私计算的债务清偿互助平台',
    'en': 'A debt settlement mutual assistance platform based on social networks and privacy computing'
  },
  
  // 平台核心功能区域
  'platform.features': {
    'zh': '平台核心功能',
    'en': 'Platform Core Features'
  },
  'platform.features.desc': {
    'zh': '链清(Cred)平台核心功能，为企业及个人提供全面的债务清偿解决方案',
    'en': 'Core features of the Cred platform, providing comprehensive debt settlement solutions for enterprises and individuals'
  },
  'platform.registerCreditor': {
    'zh': '债权登记',
    'en': 'Creditor Registration'
  },
  'platform.registerCreditor.desc': {
    'zh': '债权人可以通过平台快速登记债权信息，上传相关证明材料，获取专业的债务解决方案。',
    'en': 'Creditors can quickly register creditor information through the platform, upload relevant supporting materials, and obtain professional debt solutions.'
  },
  'platform.registerCreditor.btn': {
    'zh': '立即登记债权',
    'en': 'Register Creditor Right Now'
  },
  'platform.confirmDebt': {
    'zh': '债务确认',
    'en': 'Debt Confirmation'
  },
  'platform.confirmDebt.desc': {
    'zh': '债务人可以通过平台查看待确认债务，核对信息并进行确认、拒绝或提出争议。',
    'en': 'Debtors can view pending debts through the platform, verify information, and confirm, reject or dispute.'
  },
  'platform.confirmDebt.btn': {
    'zh': '查看待确认债务',
    'en': 'View Pending Debts'
  },
  
  // Hero区域亮点翻译
  'hero.highlights': {
    'zh': '平台核心亮点',
    'en': 'Platform Highlights'
  },
  'hero.legalAdvantage': {
    'zh': '法律优势',
    'en': 'Legal Advantage'
  },
  'hero.legalAdvantageDesc': {
    'zh': '澳门《商业法典》与葡萄牙及欧洲大陆法系一脉相承，为引入成熟的欧洲清算规则提供了法理基础。',
    'en': 'Macau\'s Commercial Code is一脉相承 with Portuguese and European continental legal systems, providing a legal basis for introducing mature European clearing rules.'
  },
  'hero.capitalAdvantage': {
    'zh': '资金优势',
    'en': 'Capital Advantage'
  },
  'hero.capitalAdvantageDesc': {
    'zh': '澳门作为自由港，资金成本显著低于内地，且拥有大量沉淀的离岸人民币，为平台提供资金支持。',
    'en': 'As a free port, Macau has significantly lower capital costs than mainland China and has a large amount of offshore RMB deposits, providing financial support for the platform.'
  },
  'hero.dataAdvantage': {
    'zh': '数据特区',
    'en': 'Data Special Zone'
  },
  'hero.dataAdvantageDesc': {
    'zh': '横琴深合区作为"数据海关"，部署"数据可用不可见"的隐私计算节点，解决跨境风控痛点。',
    'en': 'The Hengqin Shenzhen-Hong Kong-Macau Greater Bay Area, as a "data customs," deploys "data usable but not visible" privacy computing nodes to solve cross-border risk control pain points.'
  },
  
  // Advantages组件翻译
  'advantages.learnMore': {
    'zh': '了解更多产品优势',
    'en': 'Learn More About Product Advantages'
  },
  'advantages.footerDesc': {
    'zh': '"链清"平台不仅解决债务问题，更能盘活存量债权资产，改善市场信用环境，为经济运行提供低成本"润滑剂"。',
    'en': 'The "Cred" platform not only solves debt problems but also revitalizes existing creditor assets, improves the market credit environment, and provides a low-cost "lubricant" for economic operation.'
  },
  
  // 优势列表翻译
  'lowCost': {
    'zh': '低成本高效',
    'en': 'Low Cost & High Efficiency'
  },
  'lowCostDesc': {
    'zh': '无需新增资金注入，通过优化债务关系流转效率，降低全社会整体负债规模，为企业提供低成本解决方案。',
    'en': 'No need for new capital injection, by optimizing the efficiency of debt relationship circulation, reduce the overall debt scale of the whole society, and provide low-cost solutions for enterprises.'
  },
  'privacyProtection': {
    'zh': '隐私保护',
    'en': 'Privacy Protection'
  },
  'privacyProtectionDesc': {
    'zh': '采用零知识证明和多方安全计算技术，在严格保护参与方商业秘密与隐私信息的前提下，精准挖掘债务闭环。',
    'en': 'Adopt zero-knowledge proof and multi-party secure computing technology to precisely mine debt closed loops while strictly protecting participants\' trade secrets and privacy information.'
  },
  'legalGuarantee': {
    'zh': '法律保障',
    'en': 'Legal Guarantee'
  },
  'legalGuaranteeDesc': {
    'zh': '区块链存证和电子签章技术确保债务清偿全流程具备法律效力，为后续司法衔接提供标准化证据。',
    'en': 'Blockchain deposit and electronic signature technology ensure that the entire debt settlement process has legal effect, providing standardized evidence for subsequent judicial connection.'
  },
  'socialNetworkMatching': {
    'zh': '社交网络匹配',
    'en': 'Social Network Matching'
  },
  'socialNetworkMatchingDesc': {
    'zh': '基于社交网络分析技术，构建人脉-债务关联拓扑图，挖掘隐性债务路径，提升闭环匹配效率。',
    'en': 'Based on social network analysis technology, construct a topology map of personal network-debt relationship, mine implicit debt paths, and improve closed-loop matching efficiency.'
  },
  'socialNetworkMatchingServiceDesc': {
    'zh': '基于社交网络分析技术，构建人脉-债务关联拓扑图，挖掘隐性债务路径，识别债务聚集节点，提升闭环匹配效率。',
    'en': 'Based on social network analysis technology, construct a topology map of personal network-debt relationship, mine implicit debt paths, identify debt aggregation nodes, and improve closed-loop matching efficiency.'
  },
  'flexibleOffset': {
    'zh': '灵活的拆分冲抵',
    'en': 'Flexible Split Offset'
  },
  'flexibleOffsetDesc': {
    'zh': '针对债务金额不匹配场景，自动拆分债务金额，优先实现最大额度的闭环冲抵，提升资金使用效率。',
    'en': 'For scenarios where debt amounts do not match, automatically split the debt amount, prioritize maximum closed-loop offset, and improve capital usage efficiency.'
  },
  'multiChannelMonetization': {
    'zh': '多渠道变现',
    'en': 'Multi-Channel Monetization'
  },
  'multiChannelMonetizationDesc': {
    'zh': '通过债权转让市场，为无法形成闭环的债务提供变现渠道，帮助债权人盘活存量资产。',
    'en': 'Through the creditor\'s rights transfer market, provide monetization channels for debts that cannot form a closed loop, and help creditors revitalize existing assets.'
  },
  
  // Services组件翻译
  'structuredDebtRegistration': {
    'zh': '结构化债务登记',
    'en': 'Structured Debt Registration'
  },
  'structuredDebtRegistrationDesc': {
    'zh': '支持手动录入和智能批量录入两种方式，通过OCR识别与自然语言处理技术自动提取关键要素，确保债务信息的标准化和完整性。',
    'en': 'Support manual entry and intelligent batch entry, automatically extract key elements through OCR recognition and natural language processing technology to ensure the standardization and completeness of debt information.'
  },
  'privacyComputing': {
    'zh': '隐私计算与安全',
    'en': 'Privacy Computing & Security'
  },
  'privacyComputingDesc': {
    'zh': '采用零知识证明和多方安全计算技术，在加密域内完成债务匹配，保护企业商业秘密和个人隐私，同时确保匹配准确性。',
    'en': 'Adopt zero-knowledge proof and multi-party secure computing technology to complete debt matching in the encryption domain, protect corporate trade secrets and personal privacy, and ensure matching accuracy.'
  },
  'legalEvidence': {
    'zh': '法律认可的清债证据链',
    'en': 'Legally Recognized Debt Settlement Evidence Chain'
  },
  'legalEvidenceDesc': {
    'zh': '将债务登记信息、双向确权记录等关键节点数据实时上链，提供标准化冲抵协议和电子签章服务，形成完整、不可篡改的证据流。',
    'en': 'Real-time chain storage of key node data such as debt registration information and two-way confirmation records, providing standardized offset agreements and electronic signature services to form a complete, tamper-proof evidence flow.'
  },
  'splitOffset': {
    'zh': '拆分冲抵功能',
    'en': 'Split Offset Function'
  },
  'splitOffsetDesc': {
    'zh': '针对债务金额不匹配场景，自动拆分债务金额，优先实现最大额度的闭环冲抵，剩余债务自动更新状态并重新进入待匹配池。',
    'en': 'For scenarios where debt amounts do not match, automatically split the debt amount, prioritize maximum closed-loop offset, and automatically update the status of remaining debts and re-enter the pending matching pool.'
  },
  'creditorTransferMarket': {
    'zh': '债权转让市场',
    'en': 'Creditor\'s Rights Transfer Market'
  },
  'creditorTransferMarketDesc': {
    'zh': '为无法形成闭环的债务提供变现渠道，支持债权挂牌、精准匹配和交易保障，帮助债权人盘活存量资产。',
    'en': 'Provide monetization channels for debts that cannot form a closed loop, support creditor\'s rights listing, precise matching and transaction guarantees, and help creditors revitalize existing assets.'
  },
  
  // Contact组件翻译
  'contact.address': {
    'zh': '办公地址',
    'en': 'Office Address'
  },
  'contact.addressValue': {
    'zh': '珠海市横琴华发商都',
    'en': 'Zhuhai Hengqin Huafa Commercial Center'
  },
  'contact.phone': {
    'zh': '联系电话',
    'en': 'Contact Phone'
  },
  'contact.email': {
    'zh': '电子邮箱',
    'en': 'Email Address'
  },
  'contact.workHours': {
    'zh': '工作时间',
    'en': 'Working Hours'
  },
  'contact.workHoursValue': {
    'zh': '周一至周五: 9:00 - 18:00',
    'en': 'Monday to Friday: 9:00 - 18:00'
  },
  

};

// 语言提供者组件
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 从本地存储获取语言设置，如果没有则默认为中文
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'zh';
  });

  // 当语言改变时，保存到本地存储
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // 翻译函数
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    
    let translatedText = translation[language];
    
    // 处理带变量的翻译，例如版权信息中的年份
    if (translatedText.includes('{year}')) {
      translatedText = translatedText.replace('{year}', new Date().getFullYear().toString());
    }
    
    return translatedText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};