export type GalleryImage = {
  id: string
  thumb: string
  full: string
  altKey: string
}

const galleryPath = '/images/gallery'
const imageNames = [
  'IMG_3661',
  'IMG_3684',
  'IMG_3690',
  'IMG_4725',
  'IMG_4772',
  'IMG_4946',
  'IMG_5394',
  'IMG_5482',
  'IMG_5725',
  'IMG_5733',
  'IMG_5850',
  'IMG_6090',
  'IMG_6350',
  'IMG_6351',
  'IMG_6643',
  'IMG_6646',
  'IMG_6653',
  'IMG_6670',
  'IMG_6971',
  'IMG_7121',
  'IMG_7295',
  'IMG_8881',
  'IMG_8882',
  'IMG_8883',
  'IMG_8884',
  'IMG_8885',
  'IMG_8886',
  'IMG_8887',
  'IMG_8888',
  'IMG_9991',
  'IMG_9992',
]

export const galleryImages: GalleryImage[] = imageNames.map((name) => ({
  id: name.toLowerCase().replace('_', '-'),
  thumb: name === 'IMG_9991' ? `${galleryPath}/${name}.webp` : `${galleryPath}/${name}_s.webp`,
  full: `${galleryPath}/${name}.webp`,
  altKey: 'pages.gallery.imageAlt',
}))
