export type ProjectType = 'diving' | 'rope-access'

export type Project = {
  id: string
  type: ProjectType
  titleKey: string
  descriptionKey: string
  detailsKey?: string
}

export const projectTypeLabels: Record<ProjectType, string> = {
  diving: 'pages.projects.types.diving',
  'rope-access': 'pages.projects.types.ropeAccess',
}

export const projectTypeFallbackIcons: Record<ProjectType, string> = {
  diving: '/images/com_diving_mockup.svg',
  'rope-access': '/images/rope_access_mockup.svg',
}

export const projects: Project[] = [
  {
    id: 'nek-hydro-facilities',
    type: 'diving',
    titleKey: 'pages.projects.items.nekHydroFacilities.title',
    descriptionKey: 'pages.projects.items.nekHydroFacilities.description',
    detailsKey: 'pages.projects.items.nekHydroFacilities.details',
  },
  {
    id: 'dpusya-dams-outlets',
    type: 'diving',
    titleKey: 'pages.projects.items.dpusyaDamsOutlets.title',
    descriptionKey: 'pages.projects.items.dpusyaDamsOutlets.description',
    detailsKey: 'pages.projects.items.dpusyaDamsOutlets.details',
  },
  {
    id: 'terem-naval-arsenal',
    type: 'diving',
    titleKey: 'pages.projects.items.teremNavalArsenal.title',
    descriptionKey: 'pages.projects.items.teremNavalArsenal.description',
  },
  {
    id: 'ship-diving-operations',
    type: 'diving',
    titleKey: 'pages.projects.items.shipDivingOperations.title',
    descriptionKey: 'pages.projects.items.shipDivingOperations.description',
  },
  {
    id: 'varna-rail-ferry-complex',
    type: 'diving',
    titleKey: 'pages.projects.items.varnaRailFerryComplex.title',
    descriptionKey: 'pages.projects.items.varnaRailFerryComplex.description',
  },
  {
    id: 'prista-oil-holding',
    type: 'diving',
    titleKey: 'pages.projects.items.pristaOilHolding.title',
    descriptionKey: 'pages.projects.items.pristaOilHolding.description',
  },
  {
    id: 'plaschim-t',
    type: 'rope-access',
    titleKey: 'pages.projects.items.plaschimT.title',
    descriptionKey: 'pages.projects.items.plaschimT.description',
  },
  {
    id: 'institute-of-oceanology-bas',
    type: 'diving',
    titleKey: 'pages.projects.items.instituteOceanologyBas.title',
    descriptionKey: 'pages.projects.items.instituteOceanologyBas.description',
  },
  {
    id: 'sofia-municipality',
    type: 'diving',
    titleKey: 'pages.projects.items.sofiaMunicipality.title',
    descriptionKey: 'pages.projects.items.sofiaMunicipality.description',
  },
  {
    id: 'targovishte-municipality',
    type: 'diving',
    titleKey: 'pages.projects.items.targovishteMunicipality.title',
    descriptionKey: 'pages.projects.items.targovishteMunicipality.description',
  },
]
