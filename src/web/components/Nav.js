import PropTypes from 'prop-types';
import React, { Component } from 'react';

import NavItem from './NavItem';
import NavReset from './NavReset';
import NavResult from './NavResult';

import Button from '../primitives/ToggleButton';
import Title from '../primitives/Title';
import StyledNav from '../primitives/grid/Nav';

export default class Nav extends Component {
  static propTypes = {
    heading: PropTypes.string,
    page: PropTypes.string,
    setPage: PropTypes.func.isRequired,
    tableOfContents: PropTypes.array.isRequired,
    showIntro: PropTypes.func.isRequired,
  };

  static defaultProps = {
    heading: 'Missing page heading',
    page: 0,
  };

  state = { tocExpanded: true };

  toggleToc = () => this.setState({ tocExpanded: !this.state.tocExpanded });

  render() {
    const { heading, page: currentPage = {}, setPage, tableOfContents, showIntro } = this.props;

    const { tocExpanded } = this.state;

    return (
      <div>
        <Button type="button" onClick={this.toggleToc}>{tocExpanded ? 'Vis' : 'Skjul'} alle steg</Button>

        <StyledNav tocExpanded={tocExpanded}>
          <Title onClick={showIntro}>{heading}</Title>
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
                  key={page.id}
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
