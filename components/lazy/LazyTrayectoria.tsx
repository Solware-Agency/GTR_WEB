import dynamic from 'next/dynamic';

const TrayectoriaPage = dynamic(() => import('@/app/trayectoria/page'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trading-gold mx-auto mb-4"></div>
        <p className="text-gray-600">Cargando trayectoria...</p>
      </div>
    </div>
  ),
  ssr: false
});

export default TrayectoriaPage;
