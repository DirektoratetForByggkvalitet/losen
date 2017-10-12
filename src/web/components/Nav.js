import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NavItem from './NavItem';
import NavReset from './NavReset';
import NavResult from './NavResult';

import { P } from '../primitives/Paragraphs';
import Button from '../primitives/ToggleButton';
import StyledNav from '../primitives/grid/Nav';

export default class Nav extends Component {
  static defaultProps = {
    heading: 'Missing page heading',
    page: 0,
  };

  static propTypes = {
    heading: PropTypes.string,
    page: PropTypes.string,
    setPage: PropTypes.func.isRequired,
    tableOfContents: PropTypes.array.isRequired,
  };

  state = { tocExpanded: true };

  toggleToc = () => this.setState({ tocExpanded: !this.state.tocExpanded });

  render() {
    const {
      heading,
      page: currentPage = {},
      setPage,
      tableOfContents,
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
