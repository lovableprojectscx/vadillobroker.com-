# Vadillo Broker - Sitio Web Corporativo

## Descripción
Sitio web web oficial de **Fabio Vadillo**, Broker de Seguros Independiente con más de 20 años de experiencia (Autorizado SBS N4503). La plataforma está diseñada para ofrecer servicios de asesoría y venta de seguros (Vehicular, SOAT, EPS, Vida, Hogar, Desgravamen Hipotecario) así como gestión inmobiliaria.

## Tecnologías Utilizadas
- **React 18** con **TypeScript**
- **Vite** (Build Tool súper rápido)
- **Tailwind CSS** (Estilización utilitaria moderna)
- **Lucide React** (Iconografía limpia e inconsistente)
- **Shadcn UI & Radix UI** (Componentes de interfaz accesibles y personalizables)
- **Web3Forms** (Backend serverless para la recepción de correos desde el formulario de contacto directo).

## Características Principales
- **Diseño Premium y Responsivo:** Totalmente adaptado para verse perfecto en dispositivos móviles, tablets y computadoras de escritorio.
- **Microinteracciones y Animaciones:** Se utilizan utilidades de Tailwind (`hover`, `transition-all`, `group-hover`) para dar vida a los elementos.
- **Sección de Contacto Dividida:** Rutas claras para usuarios de Seguros (WhatsApp/Llamada) y usuarios de Inmobiliaria, sin confundir los canales.
- **Formulario de Contacto en Vivo:** Integrado con Web3Forms para evitar caídas (como las de FormSubmit) y manejar la captación de leads de manera transparente.
- **SEO Optimizado:** Etiquetas Open Graph, schema.org JSON-LD para negocios locales, meta descripciones y datos estructurados incrustados en el `index.html`.

## Configuración y Ejecución Local

Para trabajar en este proyecto de forma local, sigue estos pasos:

1. **Clonar el repositorio** y acceder a la carpeta:
   ```bash
   git clone [url-del-repositorio]
   cd vadillobroker.com-main
   ```

2. **Instalar dependencias:**
   Se recomienda usar `npm`:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible para visualizar en vivo (usualmente en `http://localhost:8080` o `http://localhost:5173`).

## Compilación para Producción (Deploy)

Cuando el sitio esté listo para ser subido a Vercel, Netlify u otro hosting estático, se debe compilar el código optimizado:

```bash
npm run build
```
Esto generará la carpeta `dist/` con todo el código minificado y listo. En Vercel, este proceso es completamente automático al subir cambios a la rama `main`.

## Integración con Web3Forms

El formulario de contacto al final de la página (en `src/pages/Index.tsx`) se comunica directamente a los correos del cliente a través de **Web3Forms**. Toma en cuenta:
- Se utiliza un `access_key` que enlaza el envío hacia el correo registrado (`fabio@vadillobroker.com`).
- No se utilizan funciones Pro de Web3Forms (como copia cc multiple) para mantener la infraestructura 100% gratuita y sin fricciones. 
- Cualquier actualización de llave (si se pierde acceso) se debe hacer regenerando la API Key en Web3Forms y reemplazando el valor en el input hidden `access_key` del archivo del index.

---
*Desarrollado para la optimización de la presencia digital de Vadillo Broker.*
