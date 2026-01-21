import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


// 模拟的债务数据类型定义
interface DebtItem {
  id: string;
  claimId: string;
  creditorName: string;
  claimAmount: number;
  currency: string;
  dueDate: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'disputed';
  contractNumber: string;
  invoiceNumber: string;
  claimType: string;
  createdAt: string;
  description: string;
}

// 生成模拟的待确认债务数据
const generateMockDebts = (): DebtItem[] => {
  const statuses: Array<'pending' | 'confirmed' | 'rejected' | 'disputed'> = ['pending', 'pending', 'pending', 'confirmed', 'rejected', 'disputed'];
  return Array.from({ length: 6 }, (_, i) => ({
    id: `debt-${Date.now()}-${i}`,
    claimId: `claim-${Date.now()}-${i}`,
    creditorName: `供应商${String.fromCharCode(65 + i)}有限公司`,
    claimAmount: 100000 + Math.random() * 900000,
    currency: '人民币',
    dueDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: statuses[i % statuses.length],
    contractNumber: `CT-${2026}-${1000 + i}`,
    invoiceNumber: `INV-${2026}-${1000 + i}`,
    claimType: i % 2 === 0 ? '应收账款' : '其他债权',
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    description: i % 2 === 0 
      ? '建筑材料采购款' 
      : i % 3 === 0 
        ? '设备租赁费用' 
        : '咨询服务费用'
  }));
};

const DebtConfirmationPage = () => {
  const navigate = useNavigate();
  const [debts, setDebts] = useState<DebtItem[]>([]);
  const [selectedDebt, setSelectedDebt] = useState<DebtItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // 加载模拟数据
  useEffect(() => {
    // 模拟API请求延迟
    setTimeout(() => {
      setDebts(generateMockDebts());
    }, 800);
  }, []);
  
  // 处理债务确认
  const handleConfirmDebt = (debtId: string) => {
    setIsProcessing(true);
    
    // 模拟处理延迟
    setTimeout(() => {
      setDebts(prev => prev.map(debt => 
        debt.id === debtId ? { ...debt, status: 'confirmed' } : debt
      ));
      toast.success('债务确认成功');
      setIsProcessing(false);
      setIsModalOpen(false);
    }, 1000);
  };
  
  // 处理债务拒绝
  const handleRejectDebt = (debtId: string) => {
    setIsProcessing(true);
    
    // 模拟处理延迟
    setTimeout(() => {
      setDebts(prev => prev.map(debt => 
        debt.id === debtId ? { ...debt, status: 'rejected' } : debt
      ));
      toast.success('债务已拒绝');
      setIsProcessing(false);
      setIsModalOpen(false);
    }, 1000);
  };
  
  // 处理争议提交
  const handleDisputeDebt = (debtId: string) => {
    setIsProcessing(true);
    
    // 模拟处理延迟
    setTimeout(() => {
      setDebts(prev => prev.map(debt => 
        debt.id === debtId ? { ...debt, status: 'disputed' } : debt
      ));
      toast.success('争议已提交，请等待平台介入处理');
      setIsProcessing(false);
      setIsModalOpen(false);
    }, 1000);
  };
  
  // 查看债务详情
  const handleViewDetails = (debt: DebtItem) => {
    setSelectedDebt(debt);
    setIsModalOpen(true);
  };
  
  // 过滤债务列表
  const filteredDebts = filterStatus === 'all' 
    ? debts 
    : debts.filter(debt => debt.status === filterStatus);
  
  // 获取状态显示文本和样式
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { text: '待确认', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' };
      case 'confirmed':
        return { text: '已确认', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' };
      case 'rejected':
        return { text: '已拒绝', className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' };
      case 'disputed':
        return { text: '有争议', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' };
      default:
        return { text: '未知', className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' };
    }
  };
  
  return (
     <div className="min-h-screen text-white tech-gradient-bg">
      <div className="bg-overlay min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <motion.section 
          className="container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">债务确认</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            查看并确认您作为债务人的债务信息
          </p>
        </motion.section>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">债务列表</h2>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilterStatus('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === 'all' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    全部
                  </button>
                  <button
                    onClick={() => setFilterStatus('pending')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === 'pending' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    待确认
                  </button>
                  <button
                    onClick={() => setFilterStatus('confirmed')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === 'confirmed' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    已确认
                  </button>
                  <button
                    onClick={() => setFilterStatus('rejected')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === 'rejected' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    已拒绝
                  </button>
                  <button
                    onClick={() => setFilterStatus('disputed')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filterStatus === 'disputed' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    有争议
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl mb-2">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">¥{(debts.reduce((sum, debt) => sum + debt.claimAmount, 0)).toLocaleString()}</div>
                  <div className="text-gray-600 dark:text-gray-300">待处理债务总额</div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-yellow-600 dark:text-yellow-400 text-2xl mb-2">
                    <i className="fas fa-hourglass-half"></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{debts.filter(d => d.status === 'pending').length}</div>
                  <div className="text-gray-600 dark:text-gray-300">待确认债务</div>
                </div>
                
                <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-green-600 dark:text-green-400 text-2xl mb-2">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{debts.filter(d => d.status === 'confirmed').length}</div>
                  <div className="text-gray-600 dark:text-gray-300">已确认债务</div>
                </div>
                
                <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl">
                  <div className="text-purple-600 dark:text-purple-400 text-2xl mb-2">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{debts.filter(d => d.status === 'disputed').length}</div>
                  <div className="text-gray-600 dark:text-gray-300">争议债务</div>
                </div>
              </div>
              
              {debts.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="py-4 px-6 text-left text-lg font-semibold">债权人</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">债权金额</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">到期日期</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">债权类型</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">状态</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">登记日期</th>
                        <th className="py-4 px-6 text-left text-lg font-semibold">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredDebts.map((debt) => {
                        const statusInfo = getStatusInfo(debt.status);
                        return (
                          <tr 
                            key={debt.id} 
                            className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <td className="py-4 px-6 font-medium">{debt.creditorName}</td>
                            <td className="py-4 px-6">{debt.currency} {debt.claimAmount.toLocaleString('zh-CN', { maximumFractionDigits: 2 })}</td>
                            <td className="py-4 px-6">{debt.dueDate}</td>
                            <td className="py-4 px-6">{debt.claimType}</td>
                            <td className="py-4 px-6">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.className}`}>
                                {statusInfo.text}
                              </span>
                            </td>
                            <td className="py-4 px-6">{debt.createdAt}</td>
                            <td className="py-4 px-6">
                              <button
                                onClick={() => handleViewDetails(debt)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                              >
                                查看详情
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-6xl mb-4">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">暂无债务信息</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    当前没有需要您确认的债务或相关记录
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      {isModalOpen && selectedDebt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-2xl font-bold">债务详情</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">基本信息</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">债权人</h4>
                      <p className="font-medium">{selectedDebt.creditorName}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">债权金额</h4>
                      <p className="font-medium">{selectedDebt.currency} {selectedDebt.claimAmount.toLocaleString('zh-CN', { maximumFractionDigits: 2 })}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">到期日期</h4>
                      <p>{selectedDebt.dueDate}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">债权类型</h4>
                      <p>{selectedDebt.claimType}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">登记日期</h4>
                      <p>{selectedDebt.createdAt}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">状态</h4>
                      <div>
                        {(() => {
                          const statusInfo = getStatusInfo(selectedDebt.status);
                          return (
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.className}`}>
                              {statusInfo.text}
                            </span>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">详细信息</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">债权编号</h4>
                      <p>{selectedDebt.claimId}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">合同编号</h4>
                      <p>{selectedDebt.contractNumber}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">发票编号</h4>
                      <p>{selectedDebt.invoiceNumber}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-1">债权形成原因</h4>
                      <p>{selectedDebt.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-500 dark:text-gray-400 mb-3">证明材料</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                          <i className="fas fa-file-pdf text-red-500 text-2xl mb-2"></i>
                          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">合同文件.pdf</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                          <i className="fas fa-file-invoice text-blue-500 text-2xl mb-2"></i>
                          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">发票文件.pdf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedDebt.status === 'pending' && (
                <div className="mt-8 flex justify-end gap-4">
                  <button
                    onClick={() => handleDisputeDebt(selectedDebt.id)}
                    disabled={isProcessing}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-exclamation-triangle mr-2"></i>
                        提出争议
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => handleRejectDebt(selectedDebt.id)}
                    disabled={isProcessing}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        处理中...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-times mr-2"></i>
                        拒绝确认
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={() => handleConfirmDebt(selectedDebt.id)}
                    disabled={isProcessing}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        确认中...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-check mr-2"></i>
                        确认债务
                      </>
                    )}
                  </button>
                </div>
              )}
              
              {selectedDebt.status !== 'pending' && (
                <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedDebt.status === 'confirmed' && '该债务已确认，相关信息已同步至平台系统。'}
                    {selectedDebt.status === 'rejected' && '该债务已被您拒绝，如有疑问请联系平台客服。'}
                    {selectedDebt.status === 'disputed' && '该债务存在争议，平台将介入处理，请等待进一步通知。'}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
     </div>
  );
};

export default DebtConfirmationPage;