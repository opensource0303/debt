import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { useNavigate } from 'react-router-dom';

const CreditorRightRegistrationPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // 检查用户是否已登录
  React.useEffect(() => {
    if (!isAuthenticated) {
      toast.warning('请先登录后再进行债权登记');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  // 表单状态
  const [formData, setFormData] = useState({
    // 债权人信息
    creditorName: '',
    creditorType: '企业',
    creditorId: '',
    creditorContact: '',
    creditorPhone: '',
    creditorEmail: '',
    
    // 债务人信息
    debtorName: '',
    debtorType: '企业',
    debtorId: '',
    debtorContact: '',
    debtorPhone: '',
    
    // 债权基本信息
    claimAmount: '',
    interestRate: '',
    dueDate: '',
    claimType: '应收账款',
    currency: '人民币',
    
    // 债权详情
    contractNumber: '',
    contractDate: '',
    invoiceNumber: '',
    invoiceDate: '',
    description: '',
    
    // 其他信息
    priorityLevel: '普通债权',
    guaranteeType: '无担保',
    remarks: ''
  });
  
  // 上传文件状态
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 处理表单输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // 处理文件上传
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles(prev => [...prev, ...Array.from(e.target.files)]);
      toast.success(`成功上传 ${e.target.files.length} 个文件`);
    }
  };
  
  // 删除已上传文件
  const handleRemoveFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
    toast.success('文件已删除');
  };
  
  // 提交表单
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 表单验证
    if (!formData.creditorName || !formData.debtorName || !formData.claimAmount || !formData.dueDate) {
      toast.error('请填写必填项');
      setIsSubmitting(false);
      return;
    }
    
    // 模拟提交
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('债权登记申请已提交，请等待审核');
      
      // 重置表单
      setFormData({
        creditorName: '',
        creditorType: '企业',
        creditorId: '',
        creditorContact: '',
        creditorPhone: '',
        creditorEmail: '',
        debtorName: '',
        debtorType: '企业',
        debtorId: '',
        debtorContact: '',
        debtorPhone: '',
        claimAmount: '',
        interestRate: '',
        dueDate: '',
        claimType: '应收账款',
        currency: '人民币',
        contractNumber: '',
        contractDate: '',
        invoiceNumber: '',
        invoiceDate: '',
        description: '',
        priorityLevel: '普通债权',
        guaranteeType: '无担保',
        remarks: ''
      });
      setUploadedFiles([]);
    }, 1500);
  };
  
  // 如果用户未登录，显示空页面
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* 页面标题 */}
        <motion.section 
          className="container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">债权登记</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            登记您的债权信息，获取专业的债务解决方案
          </p>
        </motion.section>
        
        {/* 表单主体 */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit}>
                {/* 步骤指示器 */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                    <span className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">基本信息</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-2">
                    <div className="h-full w-1/3 bg-blue-600"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center font-bold">2</div>
                    <span className="mt-2 text-sm font-medium">债权详情</span>
                  </div>
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center font-bold">3</div>
                    <span className="mt-2 text-sm font-medium">证明材料</span>
                  </div>
                </div>
                
                {/* 第一部分：债权人信息 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-user-check text-blue-600 dark:text-blue-400 mr-3"></i>
                    债权人信息
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="creditorName" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权人名称 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="creditorName"
                        name="creditorName"
                        value={formData.creditorName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入债权人名称"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="creditorType" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权人类型</label>
                      <select
                        id="creditorType"
                        name="creditorType"
                        value={formData.creditorType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="企业">企业</option>
                        <option value="个人">个人</option>
                        <option value="政府机构">政府机构</option>
                        <option value="其他组织">其他组织</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="creditorId" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">统一社会信用代码/身份证号</label>
                      <input
                        type="text"
                        id="creditorId"
                        name="creditorId"
                        value={formData.creditorId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入统一社会信用代码或身份证号"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="creditorContact" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">联系人</label>
                      <input
                        type="text"
                        id="creditorContact"
                        name="creditorContact"
                        value={formData.creditorContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入联系人姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="creditorPhone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">联系电话</label>
                      <input
                        type="tel"
                        id="creditorPhone"
                        name="creditorPhone"
                        value={formData.creditorPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入联系电话"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="creditorEmail" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">电子邮箱</label>
                      <input
                        type="email"
                        id="creditorEmail"
                        name="creditorEmail"
                        value={formData.creditorEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入电子邮箱"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 第二部分：债务人信息 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-user-tag text-blue-600 dark:text-blue-400 mr-3"></i>
                    债务人信息
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="debtorName" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债务人名称 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="debtorName"
                        name="debtorName"
                        value={formData.debtorName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入债务人名称"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="debtorType" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债务人类型</label>
                      <select
                        id="debtorType"
                        name="debtorType"
                        value={formData.debtorType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="企业">企业</option>
                        <option value="个人">个人</option>
                        <option value="政府机构">政府机构</option>
                        <option value="其他组织">其他组织</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="debtorId" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">统一社会信用代码/身份证号</label>
                      <input
                        type="text"
                        id="debtorId"
                        name="debtorId"
                        value={formData.debtorId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入统一社会信用代码或身份证号"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="debtorContact" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">联系人</label>
                      <input
                        type="text"
                        id="debtorContact"
                        name="debtorContact"
                        value={formData.debtorContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入联系人姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="debtorPhone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">联系电话</label>
                      <input
                        type="tel"
                        id="debtorPhone"
                        name="debtorPhone"
                        value={formData.debtorPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入联系电话"
                      />
                    </div>
                  </div>
                </div>
                
                {/* 第三部分：债权基本信息 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-file-invoice-dollar text-blue-600 dark:text-blue-400 mr-3"></i>
                    债权基本信息
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="claimAmount" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权金额（元） <span className="text-red-500">*</span></label>
                      <input
                        type="number"
                        id="claimAmount"
                        name="claimAmount"
                        value={formData.claimAmount}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入债权金额"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="currency" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">货币类型</label>
                      <select
                        id="currency"
                        name="currency"
                        value={formData.currency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="人民币">人民币</option>
                        <option value="美元">美元</option>
                        <option value="欧元">欧元</option>
                        <option value="澳门元">澳门元</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="interestRate" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">利率 (%)</label>
                      <input
                        type="number"
                        id="interestRate"
                        name="interestRate"
                        value={formData.interestRate}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入利率"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dueDate" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">到期日期 <span className="text-red-500">*</span></label>
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="claimType" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权类型</label>
                      <select
                        id="claimType"
                        name="claimType"
                        value={formData.claimType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="应收账款">应收账款</option>
                        <option value="贷款债权">贷款债权</option>
                        <option value="票据债权">票据债权</option>
                        <option value="其他债权">其他债权</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="priorityLevel" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权优先级</label>
                      <select
                        id="priorityLevel"
                        name="priorityLevel"
                        value={formData.priorityLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      >
                        <option value="普通债权">普通债权</option>
                        <option value="优先债权">优先债权</option>
                        <option value="担保债权">担保债权</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* 第四部分：债权详情 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-list-alt text-blue-600 dark:text-blue-400 mr-3"></i>
                    债权详情
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contractNumber" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">合同编号</label>
                      <input
                        type="text"
                        id="contractNumber"
                        name="contractNumber"
                        value={formData.contractNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入合同编号"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contractDate" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">合同签订日期</label>
                      <input
                        type="date"
                        id="contractDate"
                        name="contractDate"
                        value={formData.contractDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="invoiceNumber" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">发票编号</label>
                      <input
                        type="text"
                        id="invoiceNumber"
                        name="invoiceNumber"
                        value={formData.invoiceNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请输入发票编号"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="invoiceDate" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">发票开具日期</label>
                      <input
                        type="date"
                        id="invoiceDate"
                        name="invoiceDate"
                        value={formData.invoiceDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">债权形成原因</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="请详细描述债权形成的原因和背景"
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="remarks" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">备注信息</label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        placeholder="其他需要说明的信息"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                {/* 第五部分：证明材料上传 */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-upload text-blue-600 dark:text-blue-400 mr-3"></i>
                    证明材料上传
                  </h2>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-gray-500 dark:text-gray-400 mb-4">
                        <i className="fas fa-file-alt text-5xl"></i>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">点击或拖拽文件到此处上传</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">支持 PDF、Word、Excel、图片等格式，单个文件不超过20MB</p>
                      <label className="cursor-pointer">
                        <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all inline-block">
                          选择文件
                        </span>
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                  </div>
                  
                  {/* 已上传文件列表 */}
                  {uploadedFiles.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">已上传文件</h3>
                      <div className="space-y-3">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <div className="flex items-center">
                              <div className="text-gray-500 mr-3">
                                <i className="fas fa-file"></i>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-xs">{file.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* 提交按钮 */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </>
                    ) : "提交债权登记申请"}
                  </button>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
                    提交后，我们将在3个工作日内完成审核，请保持联系方式畅通
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreditorRightRegistrationPage;