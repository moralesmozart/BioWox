'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  FileText, 
  Download, 
  Clock, 
  CheckCircle, 
  User, 
  LogOut, 
  Settings,
  Eye,
  Lock,
  Calendar,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

// Tipos para os dados
interface ExamResult {
  id: string;
  name: string;
  date: string;
  status: 'ready' | 'in_progress';
  downloadCount: number;
  type: 'pdf' | 'image';
}

interface DownloadAuth {
  isOpen: boolean;
  examId: string | null;
  password: string;
  error: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [downloadAuth, setDownloadAuth] = useState<DownloadAuth>({
    isOpen: false,
    examId: null,
    password: '',
    error: ''
  });

  // Dados mockados para demonstração
  const examResults: ExamResult[] = [
    {
      id: '1',
      name: 'Hemograma Completo - João Silva',
      date: '2024-01-15',
      status: 'ready',
      downloadCount: 3,
      type: 'pdf'
    },
    {
      id: '2',
      name: 'Exame de Urina - João Silva',
      date: '2024-01-14',
      status: 'ready',
      downloadCount: 1,
      type: 'pdf'
    },
    {
      id: '3',
      name: 'Cultura de Secreção - João Silva',
      date: '2024-01-13',
      status: 'in_progress',
      downloadCount: 0,
      type: 'pdf'
    },
    {
      id: '4',
      name: 'Antibiograma - João Silva',
      date: '2024-01-12',
      status: 'ready',
      downloadCount: 2,
      type: 'pdf'
    }
  ];

  const readyExams = examResults.filter(exam => exam.status === 'ready');
  const inProgressExams = examResults.filter(exam => exam.status === 'in_progress');
  const totalDownloads = examResults.reduce((sum, exam) => sum + exam.downloadCount, 0);

  const handleDownload = (examId: string) => {
    setDownloadAuth({
      isOpen: true,
      examId,
      password: '',
      error: ''
    });
  };

  const handleDownloadAuth = () => {
    if (downloadAuth.password === 'demo123') {
      // Simular download
      const exam = examResults.find(e => e.id === downloadAuth.examId);
      if (exam) {
        // Criar link de download para arquivo demo
        const link = document.createElement('a');
        link.href = '/demo-exam-result.pdf';
        link.download = `${exam.name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Fechar modal
        setDownloadAuth({ isOpen: false, examId: null, password: '', error: '' });
      }
    } else {
      setDownloadAuth(prev => ({ ...prev, error: 'Senha incorreta' }));
    }
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-b from-biowox-500 to-green-600 rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Bio<span className="text-biowox-500">Wox</span>
                </span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">Área do Paciente</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>João Silva</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo, João Silva
          </h1>
          <p className="text-gray-600">
            Acesse seus resultados de exames de forma segura e rápida
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Resultados Prontos</p>
                <p className="text-2xl font-bold text-gray-900">{readyExams.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Em Processamento</p>
                <p className="text-2xl font-bold text-gray-900">{inProgressExams.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{totalDownloads}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Resultados dos Exames</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exame
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Downloads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {examResults.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-red-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {exam.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {exam.type.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {new Date(exam.date).toLocaleDateString('pt-BR')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {exam.status === 'ready' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Pronto
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Clock className="w-3 h-3 mr-1" />
                          Processando
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {exam.downloadCount} vez{exam.downloadCount !== 1 ? 'es' : ''}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {exam.status === 'ready' ? (
                        <button
                          onClick={() => handleDownload(exam.id)}
                          className="text-biowox-600 hover:text-biowox-900 flex items-center"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Baixar
                        </button>
                      ) : (
                        <span className="text-gray-400 flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          Aguardando
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Download Authentication Modal */}
      {downloadAuth.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-biowox-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                Confirmação de Download
              </h3>
            </div>
            
            <p className="text-gray-600 mb-4">
              Por segurança, confirme sua senha para baixar o arquivo:
            </p>
            
            <div className="mb-4">
              <input
                type="password"
                value={downloadAuth.password}
                onChange={(e) => setDownloadAuth(prev => ({ ...prev, password: e.target.value, error: '' }))}
                placeholder="Digite sua senha"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biowox-500 focus:border-transparent"
                autoFocus
              />
              {downloadAuth.error && (
                <p className="mt-1 text-sm text-red-600">{downloadAuth.error}</p>
              )}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setDownloadAuth({ isOpen: false, examId: null, password: '', error: '' })}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDownloadAuth}
                className="flex-1 px-4 py-2 bg-biowox-500 text-white rounded-lg hover:bg-biowox-600 transition-colors"
              >
                Confirmar
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              Demo: Use a senha "demo123" para baixar
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
