import React from 'react';
import MainLayout from '@layouts/MainLayout';

export default function SettingsDashboard() {
  const settingsCards = [
    { icon: "fa fa-wrench", color: "text-red-500", title: "Tareas", usage: "140 usados" },
    { icon: "fa fa-building", color: "text-blue-500", title: "Spots", usage: "40 usados" },
    { icon: "fa fa-user-plus", color: "text-blue-400", title: "Usuarios", usage: "4 de 300 usados" },
    { icon: "fa fa-users", color: "text-blue-300", title: "Equipos", usage: "3 usados" },
    { icon: "fa fa-ballot-check", color: "text-emerald-500", title: "Checklists", usage: "1 usados" },
    { icon: "fas fa-calendar", color: "text-cyan-500", title: "Planes de trabajo", usage: "2 usados" },
    { icon: "fa fa-qrcode", color: "text-gray-500", title: "Códigos QR", usage: "0 usados" },
    { icon: "fa fa-handshake", color: "text-orange-500", title: "SLAs", usage: "1 usados" },
    { icon: "far fa-triangle", color: "text-red-500", title: "Prioridades", usage: "4 usados" },
    { icon: "fa fa-tag", color: "text-green-500", title: "Etiquetas", usage: "74 usados" },
    { icon: "fa fa-broom", color: "text-blue-600", title: "Estados de limpieza", usage: "7 usados" },
    { icon: "fa fa-bell", color: "text-red-500", title: "Alertas", usage: "1 usados" }
  ];

  return (
    <MainLayout>
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm mb-8">
        {/* Font Awesome Icons */}
        <i className="fas fa-home text-gray-400 w-4 h-4" aria-hidden="true"></i>
        <span className="text-cyan-500">Inicio</span>
        <i className="fas fa-chevron-right text-gray-400 w-4 h-4" aria-hidden="true"></i>
        <span className="text-gray-600">Ajustes</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Ajustes</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {settingsCards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100"
          >
            <div className="flex flex-col h-full">
              <div className={`${card.color} mb-4`}>
                {/* Font Awesome Icon */}
                <i className={`${card.icon} text-3xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <div className="mt-auto text-sm text-gray-500">
                {card.usage}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
