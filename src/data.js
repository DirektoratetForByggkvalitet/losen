import React from 'react'

import Page from './components/Page'

export const test = (
    <Page title='My first page'>
        <Page title='Nesten page not allowed' />
        <Page title='Nesten page not allowed' />
    </Page>
)

/*export default [
    page({
        title: 'My first page',
        children: [
            page({ title: 'Nested pages ain\'t cool, man...' }),
            conditional({
                predicate: data => someProperty,
                children: [
                    question({
                        title: 'Liker du katter?',
                        explanation: 'Her er vi interessert i å finne ut om du er et alright menneske...',
                        input: radioButtons({
                            property: 'goodGuy',
                            options: {
                                ...option({ value: true, label: 'Ja' }),
                                ...option({ value: false, label: 'Nei' })
                            }
                        })
                    }),

                ]
            }),
            conditional({
                predicate: ({ goodGuy }) => ,
                children: [

        ]
    })
]*/