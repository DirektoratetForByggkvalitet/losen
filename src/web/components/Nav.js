import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledNav from '../primitives/grid/Nav';
import { P } from '../primitives/Paragraphs';
import Button from '../primitives/ToggleButton';
import NavItem from './NavItem';
import NavResult from './NavResult';
import NavReset from './NavReset';

// @todo Use a more robust id for the page
export default class Nav extends Component {
  static defaultProps = {
    heading: 'Missing page heading',
    page: 0,
  };

  static propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func.isRequired,
    tableOfContents: PropTypes.array.isRequired,
    heading: PropTypes.string,
  };

  state = { tocExpanded: true };

  toggleToc = () => this.setState({ tocExpanded: !this.state.tocExpanded });

  render() {
    const {
      page: currentPage = {},
      setPage,
      tableOfContents,
      heading,
    } = this.props;
    const { tocExpanded } = this.state;

    return (
      <div>
        <Button onClick={this.toggleToc}>
          {tocExpanded ? 'Vis' : 'Skjul'} alle steg
        </Button>

        <StyledNav tocExpanded={tocExpanded}>
          Veiviser:
          <P>{heading}</P>
          {tableOfContents.map(
            (page, index) =>
              page.type === 'Result' ? (
                <NavResult
                  key={page.id}
                  id={page.id}
                  heading={page.heading}
                  setPage={setPage}
                  done={!page.errors}
                  active={page.id === currentPage}
                />
              ) : (
                <NavItem
                  key={page.id} // eslint-disable-line react/no-array-index-key
                  id={page.id}
                  index={index + 1}
                  heading={page.heading}
                  setPage={setPage}
                  done={!page.errors}
                  active={page.id === currentPage}
                />
              ),
          )}
          <NavReset />
        </StyledNav>
      </div>
    );
  }
}
