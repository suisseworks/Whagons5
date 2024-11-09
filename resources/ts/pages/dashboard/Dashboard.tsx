import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-semibold text-slate-800 mb-6">Dashboard</h1>
      <div className="w-full h-full">
        {/* Aquí va el contenido específico del dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Métricas Principales</h2>
            {/* Contenido del widget */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Actividad Reciente</h2>
            {/* Contenido del widget */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Resumen</h2>
            {/* Contenido del widget */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;