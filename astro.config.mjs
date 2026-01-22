// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guía de Usuario - Panel Admin',
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
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			sidebar: [
				{
					label: 'Chats',
					items: [
						{ label: 'Panel De Chats', slug: 'guides/chats' },
						{ label: 'Crear Nuevo Chat (Usuarios)', slug: 'guides/chat-usuarios' },
						{ label: 'Crear Nuevo Chat (Grupos)', slug: 'guides/chat-grupos' },
						{ label: 'Datos Adjuntos', slug: 'guides/datos-adjuntos' },
						{ label: 'Grabar Audio', slug: 'guides/grabar-audio' },
						{ label: 'Emojis', slug: 'guides/emojis' },
					],
				},
				{
					label: 'Notificaciones',
					items: [
						{ label: 'Panel De Notificaciones', slug: 'guides/notificaciones' },
						{ label: 'Enviar Notificación (Estudiantes)', slug: 'guides/enviar-notificacion-estudiantes' },
						{ label: 'Enviar Notificación (Grupos)', slug: 'guides/enviar-notificacion-grupos' },
						{ label: 'Ver Mensajes Programados', slug: 'guides/ver-mensajes-programados' },
						{ label: 'Ver Mensajes Enviados', slug: 'guides/ver-mensajes-enviados' },
					],
				},
			],
		}),
	],
});
