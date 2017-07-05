import React from 'react'

import Page from './components/Page'

/*export const test = data => (
    <div>
        <Page introduction>
            <div>Noe tekst her...</div>
            ...et par spørsmål
        </Page>
        <Page title='My first page'>
            <Input
                type="text"
                key="foo.bar"
                description="Fjasebengel er en fin type bengel"
                required
            />


        </Page>
    </div>
)*/

export default [
    page({
        title: 'My first page',
        children: [
            page({ title: 'Nested pages ain\'t cool, man...' }),
            conditional({
                predicate: data => data.utilizedArea > 100,
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
        ],
    }),
]