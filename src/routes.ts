import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('components/layout/SiteLayout.tsx', [
    index('pages/home/HomePage.tsx', { id: 'home-bg' }),
    route('projects', 'pages/projects/ProjectsPage.tsx', { id: 'projects-bg' }),
    route('gallery', 'pages/gallery/GalleryPage.tsx', { id: 'gallery-bg' }),
    route('contact', 'pages/contact/ContactPage.tsx', { id: 'contact-bg' }),
    route('en', 'pages/home/HomePage.tsx', { id: 'home-en' }),
    route('en/projects', 'pages/projects/ProjectsPage.tsx', { id: 'projects-en' }),
    route('en/gallery', 'pages/gallery/GalleryPage.tsx', { id: 'gallery-en' }),
    route('en/contact', 'pages/contact/ContactPage.tsx', { id: 'contact-en' }),
  ]),
] satisfies RouteConfig
