import React, { Component } from 'react'
import PropTypes from 'prop-types';

import invariantWizardContext from '../utils'
import Page from './Page';

export default class Wizard extends Component {
    static propTypes = {
        schema: PropTypes.array,
    }

    static defaultProps = {
        schema: '',
    }

    constructor(props, context = {}) {
        super(props, context)
        //invariantWizardContext(context)
    }

    render() {
        const { schema } = this.props;

        return (
            <div>
                {schema.map(item => <Page title="Page" children={item.children} />)}
            </div>
        )
    }
}