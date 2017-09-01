import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledAside from '../primitives/grid/Aside';
import { H1 } from '../primitives/Heading';
import AsideItem from './AsideItem';
import AsideResult from './AsideResult';

// @todo Use a more robust id for the page
export default class Aside extends Component {
  static defaultProps = {
    title: 'Missing page title',
    page: 0,
  }

  static propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func.isRequired,
    tableOfContents: PropTypes.array.isRequired,
    title: PropTypes.string,
  }

  state = { tocExpanded: true }

  toggleToc = () => this.setState({ tocExpanded: !this.state.tocExpanded })

  render() {
    const { page: currentPage = {}, setPage, tableOfContents, title } = this.props;
    const { tocExpanded } = this.state;

    return (
      <div>
        <button onClick={this.toggleToc}>{tocExpanded ? 'Skjul' : 'Vis'} innholdsfortegnelse</button>

        <StyledAside tocExpanded={tocExpanded}>
          <H1 small>
            {title}
          </H1>
          {tableOfContents.map(
            (page, index) =>
              page.type === 'Result'
                ? <AsideResult
                  key={page.id}
                  id={page.id}
                  title={page.title}
                  setPage={setPage}
                  done={!page.errors}
                  active={page.id === currentPage}
                />
                : <AsideItem
                  key={page.id} // eslint-disable-line react/no-array-index-key
                  id={page.id}
                  index={index + 1}
                  title={page.title}
                  setPage={setPage}
                  done={!page.errors}
                  active={page.id === currentPage}
                />,
          )}
        </StyledAside>
      </div>
    );
  }
}
