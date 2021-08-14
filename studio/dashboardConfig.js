export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6117545d853bac44155ffc2e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ysu4gfdg',
                  apiId: '4fdcdc60-afcf-4fa9-b3be-141ca00c6261'
                },
                {
                  buildHookId: '6117545d8c682158b559f535',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hfnw6a6q',
                  apiId: '4506b2d5-b116-4781-95b1-269781c01b53'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thetwosents/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hfnw6a6q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
