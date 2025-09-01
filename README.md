# Danny Antonucci - Global Trading Room

Sitio web premium para Danny Antonucci, trader profesional y fundador del Global Trading Room. Una plataforma educativa completa que combina formación en trading, comunidad activa y herramientas avanzadas como AlphaCopilot.

## 🚀 Características Principales

### Diseño y Experiencia
- **Paleta estricta**: Negro, dorado y blanco únicamente
- **Diseño premium**: Estética minimalista con espaciado generoso y esquinas redondeadas
- **Responsive**: Optimizado para todos los dispositivos
- **Micro-interacciones**: Animaciones sutiles con Framer Motion
- **Accesibilidad**: Cumple estándares AA/AAA con contraste adecuado

### Funcionalidades Clave
- **Contador en vivo**: Próxima sesión a las 09:00 UTC-4
- **WhatsApp fijo**: Botón sticky con mensaje pre-rellenado
- **Formulario de contacto**: Validación en español con react-hook-form + zod
- **SEO optimizado**: Meta tags, JSON-LD, sitemap automático
- **Área de cursos**: Showcase completo con placeholders para playlists

### Arquitectura Técnica
- **Next.js 14+** con App Router
- **TypeScript** estricto con path aliases
- **Tailwind CSS** con tokens personalizados
- **shadcn/ui** para componentes base
- **Framer Motion** para animaciones
- **next-seo** para optimización SEO

## 📁 Estructura del Proyecto

```
app/
├── (inicio)/page.tsx              # Página principal
├── sobre-danny/page.tsx           # Biografía extendida
├── trayectoria/page.tsx           # Historia del GTR
├── trading-room/page.tsx          # Información de la sala
├── cursos/                        # Catálogo de cursos
│   ├── page.tsx
│   └── [slug]/page.tsx
├── asesor-experto/page.tsx        # AlphaCopilot EA
├── testimonios/page.tsx           # Casos de éxito
├── contacto/page.tsx              # Formulario de contacto
└── legal/                         # Páginas legales
    ├── aviso-legal/page.tsx
    ├── privacidad/page.tsx
    └── terminos/page.tsx

components/
├── navegacion/                    # Header y footer
├── home/                          # Componentes del inicio
├── contador/                      # Contador de sesión
├── testimonios/                   # Carrusel y grid
├── contacto/                      # Formulario y info
└── common/                        # Componentes compartidos
```

## 🛠️ Configuración del Entorno

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]
cd danny-trading-room

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Variables de Entorno
Crear un archivo `.env.local`:

```env
# SEO y sitemap
SITE_URL=https://dannyantonucci.com
NEXT_PUBLIC_SITE_URL=https://dannyantonucci.com

# Email (opcional - para formulario de contacto)
RESEND_API_KEY=tu_clave_resend
CONTACT_EMAIL=soporte@globaltradingroom.com

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Gestión de Contenido

### Actualizar Información de Danny
Los datos principales están centralizados en los componentes. Para actualizar:

1. **Biografía**: `components/sobre/AcercaDeDanny.tsx`
2. **Timeline**: `components/trayectoria/LineaDeTiempo.tsx`
3. **Metodología**: `components/trayectoria/MetodologiaTradingRoom.tsx`

### Agregar Nuevos Cursos
1. Crear entrada en `app/cursos/page.tsx`
2. Crear página detalle en `app/cursos/[slug]/page.tsx`
3. Agregar placeholder para playlist de YouTube

### Testimonios
Actualizar arrays en:
- `components/testimonios/TestimoniosCarrusel.tsx`
- `components/testimonios/TestimoniosGrid.tsx`

## 🎨 Sistema de Diseño

### Colores (Paleta Estricta)
```css
/* Negro */
--trading-black: #000000
--trading-black-light: #0B0B0B
--trading-black-lighter: #111111

/* Dorado */
--trading-gold: #D4AF37
--trading-gold-light: #C8A951

/* Blanco */
--trading-white: #FFFFFF
```

### Componentes de Botones
```tsx
// Botón principal (dorado)
<button className="btn-primary">Unirse al GTR</button>

// Botón secundario (negro)
<button className="btn-secondary">Más Información</button>

// Botón outline (borde dorado)
<button className="btn-outline">Contactar</button>
```

### Espaciado
Sistema basado en 8px:
- `spacing-2` = 8px
- `spacing-4` = 16px  
- `spacing-6` = 24px
- `spacing-8` = 32px

## 🔗 Enlaces Importantes

### Enlaces del GTR (actualizables)
```typescript
const ENLACES_GTR = {
  whatsapp: "https://wa.me/584242866986",
  registroHFM: "https://register.hfm.com/int/es/new-live-account?refid=30435151",
  formularioValidacion: "https://forms.globaltradingroom.com/",
  tutorialYouTube: "https://youtu.be/nBJ2p6dETgg",
  instagram: "@Dannyantonuccioficial"
};
```

### Mensaje WhatsApp Pre-rellenado
```
¡Hola Danny! Me interesa conocer más sobre el Global Trading Room y cómo puedo unirme a las sesiones diarias de trading. ¿Podrías darme más información sobre el proceso de validación y acceso a AlphaCopilot?
```

## 📊 SEO y Analytics

### Structured Data (JSON-LD)
El sitio incluye marcado estructurado para:
- **Person**: Danny Antonucci como trader profesional
- **Organization**: Global Trading Room
- **Course**: Cursos de trading disponibles
- **Event**: Sesiones diarias de trading

### Sitemap Automático
Configurado con `next-sitemap` para generar:
- `sitemap.xml`
- `robots.txt`
- Prioridades personalizadas por página

## 🧪 Testing

### Tests Unitarios (Vitest)
```bash
npm run test
```

### Tests E2E (Playwright)
```bash
npm run test:e2e
```

### Tests Básicos Incluidos
- Navegación principal
- Formulario de contacto
- CTAs principales
- Contador de sesión
- Responsive design

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
npm start
```

### Optimizaciones Incluidas
- **Images**: Optimización automática con `next/image`
- **Fonts**: Carga optimizada con `display=swap`
- **Bundle**: Code splitting automático
- **SEO**: Meta tags y structured data
- **Performance**: Lazy loading y prefetch

### Métricas Objetivo (Lighthouse)
- **Performance**: ≥ 90
- **Accessibility**: ≥ 90  
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## 📱 Integración de Playlists

Para integrar playlists de YouTube en los cursos:

1. **Obtener ID de playlist** de YouTube
2. **Actualizar componente** en `app/cursos/[slug]/page.tsx`:

```tsx
// Reemplazar placeholder con:
<div className="aspect-video">
  <iframe
    src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
    className="w-full h-full rounded-xl"
    allowFullScreen
  />
</div>
```

## 🔧 Mantenimiento

### Actualizaciones Regulares
- **Testimonios**: Agregar casos nuevos mensualmente
- **Horarios**: Verificar UTC-4 en cambios de horario
- **Enlaces**: Validar links de HFM y formularios
- **Contenido**: Revisar información de cursos

### Monitoreo
- **Analytics**: Revisar métricas de conversión
- **Performance**: Lighthouse mensual
- **SEO**: Posicionamiento de palabras clave
- **Formularios**: Tasa de envío exitoso

## 📞 Soporte

Para consultas técnicas o actualizaciones de contenido:

- **Email**: soporte@globaltradingroom.com
- **WhatsApp**: +58 424 286 6986
- **Documentación**: Este README.md

---

**Desarrollado con ❤️ para la comunidad del Global Trading Room**

*Última actualización: Enero 2025*