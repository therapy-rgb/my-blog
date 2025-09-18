import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Suburban Dad Mode',

  projectId: '4qp7h589',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: undefined, // Use default navbar
      layout: undefined, // Use default layout
    },
  },

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((template) => template.templateId !== 'settings')
      }
      return prev
    },
  },

  // Custom favicon and meta tags
  head: [
    {
      tag: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/static/favicon.ico'
      }
    },
    {
      tag: 'link', 
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/static/favicon-32x32.png'
      }
    },
    {
      tag: 'link',
      attributes: {
        rel: 'icon', 
        type: 'image/png',
        sizes: '16x16',
        href: '/static/favicon-16x16.png'
      }
    },
    {
      tag: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180', 
        href: '/static/apple-touch-icon.png'
      }
    },
    {
      tag: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/static/android-chrome-192x192.png'
      }
    },
    {
      tag: 'link',
      attributes: {
        rel: 'icon', 
        type: 'image/png',
        sizes: '512x512',
        href: '/static/android-chrome-512x512.png'
      }
    },
    {
      tag: 'link',
      attributes: {
        rel: 'manifest',
        href: '/static/site.webmanifest'
      }
    },
    {
      tag: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#ffffff'
      }
    }
  ],
})
