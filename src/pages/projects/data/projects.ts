export type ProjectType = 'diving' | 'rope-access'

export type ProjectImage = {
  thumb: string
  full: string
  altKey?: string
}

export type Project = {
  id: string
  type: ProjectType
  titleKey: string
  descriptionKey: string
  images: ProjectImage[]
}

export const projectTypeLabels: Record<ProjectType, string> = {
  diving: 'pages.projects.types.diving',
  'rope-access': 'pages.projects.types.ropeAccess',
}

export const projectTypeFallbackIcons: Record<ProjectType, string> = {
  diving: '/images/com_diving_mockup.svg',
  'rope-access': '/images/rope_access_mockup.svg',
}

function projectImage(projectId: string, name: string, extension: 'jpg' | 'webp'): ProjectImage {
  return {
    thumb: `/images/${projectId}/${name}s.${extension}`,
    full: `/images/${projectId}/${name}.${extension}`,
  }
}

export const projects: Project[] = [
  {
    id: 'nek-hydro-facilities',
    type: 'diving',
    titleKey: 'pages.projects.items.nekHydroFacilities.title',
    descriptionKey: 'pages.projects.items.nekHydroFacilities.description',
    images: [
      projectImage('nek-hydro-facilities', '001', 'jpg'),
      projectImage('nek-hydro-facilities', '002', 'jpg'),
      projectImage('nek-hydro-facilities', '003', 'jpg'),
    ],
  },
  {
    id: 'dpusya-dams-outlets',
    type: 'diving',
    titleKey: 'pages.projects.items.dpusyaDamsOutlets.title',
    descriptionKey: 'pages.projects.items.dpusyaDamsOutlets.description',
    images: [
      projectImage('dpusya-dams-outlets', 'dpusya1', 'webp'),
      projectImage('dpusya-dams-outlets', 'dpusya2', 'webp'),
      projectImage('dpusya-dams-outlets', 'dpusya3', 'webp'),
    ],
  },
  {
    id: 'srednogorovo-reservoir',
    type: 'diving',
    titleKey: 'pages.projects.items.srednogorovoReservoir.title',
    descriptionKey: 'pages.projects.items.srednogorovoReservoir.description',
    images: [projectImage('srednogorovo-reservoir', '005', 'jpg')],
  },
  {
    id: 'suhodol-2-reservoir',
    type: 'diving',
    titleKey: 'pages.projects.items.suhodol2Reservoir.title',
    descriptionKey: 'pages.projects.items.suhodol2Reservoir.description',
    images: [],
  },
  {
    id: 'vardun-2-reservoir',
    type: 'diving',
    titleKey: 'pages.projects.items.vardun2Reservoir.title',
    descriptionKey: 'pages.projects.items.vardun2Reservoir.description',
    images: [],
  },
  {
    id: 'ticha-reservoir',
    type: 'diving',
    titleKey: 'pages.projects.items.tichaReservoir.title',
    descriptionKey: 'pages.projects.items.tichaReservoir.description',
    images: [],
  },
  {
    id: 'topolnitsa-reservoir',
    type: 'diving',
    titleKey: 'pages.projects.items.topolnitsaReservoir.title',
    descriptionKey: 'pages.projects.items.topolnitsaReservoir.description',
    images: [],
  },
  {
    id: 'terem-naval-arsenal',
    type: 'diving',
    titleKey: 'pages.projects.items.teremNavalArsenal.title',
    descriptionKey: 'pages.projects.items.teremNavalArsenal.description',
    images: [
      projectImage('terem-naval-arsenal', '011', 'jpg'),
      projectImage('terem-naval-arsenal', '012', 'jpg'),
      projectImage('terem-naval-arsenal', '014', 'jpg'),
    ],
  },
  {
    id: 'ship-diving-operations',
    type: 'diving',
    titleKey: 'pages.projects.items.shipDivingOperations.title',
    descriptionKey: 'pages.projects.items.shipDivingOperations.description',
    images: [projectImage('ship-diving-operations', '013', 'jpg')],
  },
  {
    id: 'lena-koleva',
    type: 'diving',
    titleKey: 'pages.projects.items.lenaKoleva.title',
    descriptionKey: 'pages.projects.items.lenaKoleva.description',
    images: [],
  },
  {
    id: 'silvia',
    type: 'diving',
    titleKey: 'pages.projects.items.silvia.title',
    descriptionKey: 'pages.projects.items.silvia.description',
    images: [projectImage('silvia', '010', 'jpg')],
  },
  {
    id: 'batya',
    type: 'diving',
    titleKey: 'pages.projects.items.batya.title',
    descriptionKey: 'pages.projects.items.batya.description',
    images: [],
  },
  {
    id: 'varna-rail-ferry-complex',
    type: 'diving',
    titleKey: 'pages.projects.items.varnaRailFerryComplex.title',
    descriptionKey: 'pages.projects.items.varnaRailFerryComplex.description',
    images: [],
  },
  {
    id: 'prista-oil-holding',
    type: 'diving',
    titleKey: 'pages.projects.items.pristaOilHolding.title',
    descriptionKey: 'pages.projects.items.pristaOilHolding.description',
    images: [],
  },
  {
    id: 'plaschim-t',
    type: 'rope-access',
    titleKey: 'pages.projects.items.plaschimT.title',
    descriptionKey: 'pages.projects.items.plaschimT.description',
    images: [],
  },
  {
    id: 'institute-of-oceanology-bas',
    type: 'diving',
    titleKey: 'pages.projects.items.instituteOceanologyBas.title',
    descriptionKey: 'pages.projects.items.instituteOceanologyBas.description',
    images: [],
  },
]
