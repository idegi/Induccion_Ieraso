# Guía de Despliegue en Vercel (Gratis)

Este proyecto está configurado para desplegarse fácilmente en Vercel. Sigue estos pasos:

## 1. Preparación en GitHub
Asegúrate de que todos los cambios locales estén subidos a tu repositorio de GitHub. 
*Nota: Ya he configurado un archivo `vercel.json` para que las rutas de la aplicación funcionen correctamente.*

## 2. Configuración en Vercel
1. Ve a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New"** > **"Project"**.
3. Selecciona tu repositorio de GitHub de la lista (haz clic en **"Import"**).
4. En la sección **"Framework Preset"**, selecciona **"Vite"** (Vercel lo detectará automáticamente).
5. En **"Build and Output Settings"**, verifica que:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. (Opcional) Si usas una API Key de Gemini:
   - Despliega la sección **"Environment Variables"**.
   - Agrega `VITE_GEMINI_API_KEY` con tu clave de Google AI Studio.
7. Haz clic en **"Deploy"**.

## 3. Post-Despliegue
Vercel te proporcionará una URL pública (ej. `nombre-de-tu-app.vercel.app`). Cada vez que hagas un `git push` a tu rama principal, Vercel actualizará la aplicación automáticamente.

---
**¿Necesitas algo más?** Si encuentras algún error en el build, házmelo saber para corregirlo.
