// eventInformation.js
export default {
    name: 'subPage',
    type: 'document',
    title: 'Sub Page',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of sub-page (do not change)'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Describe your event for search engines and social media.'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Tittel',
        description: 'Hva er tittelen på denne undersiden?'
      },
      {
        name: 'body',
        type: 'body',
        title: 'Tekst',
        description: 'Tekst som skal være med på denne undersiden'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Bilde',
        description: 'La være tom hvis det ikke skal bilde på denne undersiden. Velg bilde med høyeste oppløsning, og husk å justere hotspot (fokus)'
      },
    ]
  }