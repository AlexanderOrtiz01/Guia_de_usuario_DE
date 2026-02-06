// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guia de Usuario - Jobseeker',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/x-icon',
						href: '/favicon.ico?v=' + Date.now(),
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/force-light-theme.js',
					},
				},
			],
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
				Sidebar: './src/components/CustomSidebar.astro',
			},
			sidebar: [
				{
					label: 'Creación De Cuenta',
					items: [
						{ label: 'Ingreso De Credenciales', slug: 'guides-jobseeker/login-credentials' },
						{ label: 'Codigo De Verificacion', slug: 'guides-jobseeker/verification-code' },
						{ label: 'Paso 1: Información Personal', slug: 'guides-jobseeker/step-1-personal-information' },
						{ label: 'Paso 2: Educación', slug: 'guides-jobseeker/step-2-education' },
						{ label: 'Paso 3: Experiencia Laboral', slug: 'guides-jobseeker/step-3-work-experience' },
						{ label: 'Paso 4: Habilidades', slug: 'guides-jobseeker/step-4-skills' },
						{ label: 'Paso 5: Finalizar', slug: 'guides-jobseeker/step-5-finalize' },
					],
				},
				{
					label: 'Panel De Empleos (Dashboard)',
					items: [
						{ label: '¿Cómo Buscar Empleo?', slug: 'guides-jobseeker/how-to-search-jobs' },
						{ label: '¿Cómo Aplico A Una Oferta Laboral?', slug: 'guides-jobseeker/how-to-apply-job' },
					],
				},
				{
					label: 'Mis Trabajos (My Jobs)',
					items: [
						{ label: '¿Cómo Buscar Un Empleo Al Cual He Aplicado?', slug: 'guides-jobseeker/search-applied-job' },
						{ label: '¿Cómo Utilizo Los Filtros?', slug: 'guides-jobseeker/how-to-use-filters' },
						{ label: 'Obtener Turbo Finder', slug: 'guides-jobseeker/get-turbo-finder' },
						{ label: 'Detalles Del Empleo', slug: 'guides-jobseeker/job-details' },
					],
				},
				{
					label: 'Chat (Chat)',
					items: [
						{ label: 'Conociendo El Chat', slug: 'guides-jobseeker/getting-to-know-chat' },
						{ label: 'Búsqueda, Filtro y Opciones', slug: 'guides-jobseeker/search-filter-options-chat' },
					],
				},
				{
					label: 'Servicios Premium (Premium Features)',
					items: [
						{ label: '¿Cómo Comprar Un Turbo Finder Con Tarjeta?', slug: 'guides-jobseeker/buy-turbo-finder-card' },
						{ label: '¿Cómo Comprar Un Turbo Finder Con Crypto?', slug: 'guides-jobseeker/buy-turbo-finder-crypto' },
					],
				},
				{
					label: 'Reportes (Analytics)',
					items: [
						{ label: 'Conociendo Los Reportes', slug: 'guides-jobseeker/getting-to-know-reports' },
					],
				},
				{
					label: 'Ayuda (Help)',
					items: [
						{ label: 'Centro De Ayuda', slug: 'guides-jobseeker/help-center' },
					],
				},
				{
					label: 'Perfil (Profile)',
					items: [
						{ label: '¿Cómo Edito Mi Información Personal? (Personal Information)', slug: 'guides-jobseeker/edit-personal-information' },
						{ label: '¿Cómo Edito Mis Habilidades? (Skills)', slug: 'guides-jobseeker/edit-skills' },
						{ label: '¿Cómo Edito Mi Educación? (Education)', slug: 'guides-jobseeker/edit-education' },
						{ label: '¿Cómo Edito Mi Información Adicional? (Additional Information)', slug: 'guides-jobseeker/edit-additional-information' },
						{ label: '¿Cómo Edito Mi Experiencia Laboral? (Work Experience)', slug: 'guides-jobseeker/edit-work-experience' },
						{ label: '¿Cómo Edito Mis Preferencias? (Preferences)', slug: 'guides-jobseeker/edit-preferences' },
					],
				},
				{
					label: 'Configuración De Cuenta (Account Settings)',
					items: [
						{ label: 'Seguridad E Inicio De Sesión (Security & Login)', slug: 'guides-jobseeker/security-login' },
						{ label: 'Notificaciones (Notifications)', slug: 'guides-jobseeker/notifications-settings' },
						{ label: 'Privacidad Y Datos (Privacy & Data)', slug: 'guides-jobseeker/privacy-data' },
					],
				},
				{
					label: 'Facturación Y Facturas (Billing and Invoices)',
					items: [
						{ label: 'Conozcamos Facturación Y Facturas', slug: 'guides-jobseeker/getting-to-know-billing' },
					],
				},
				{
					label: 'Billetera (Wallet)',
					items: [
						{ label: 'NFTs Y Activos Transferibles (NFT & Transferable Assets)', slug: 'guides-jobseeker/nft-transferable-assets' },
						{ label: 'Tokens (Tokens)', slug: 'guides-jobseeker/tokens' },
						{ label: 'Actividad (Activity)', slug: 'guides-jobseeker/wallet-activity' },
						{ label: '¿Cómo Activo la Autenticación de Dos Factores (Two-Factor Authentication - 2FA)?', slug: 'guides-jobseeker/enable-2fa' },
						{ label: '¿Cómo Envío Assets (Activos)?', slug: 'guides-jobseeker/send-assets' },
						{ label: '¿Cómo Recibo Assets (Activos)?', slug: 'guides-jobseeker/receive-tokens' },
					],
				},
				{
					label: 'Idioma (Language)',
					items: [
						{ label: '¿Cómo Cambio De Idioma?', slug: 'guides-jobseeker/change-language' },
					],
				},
			],
		}),
	],
});
