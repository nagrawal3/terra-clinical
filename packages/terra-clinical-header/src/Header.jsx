import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Header.scss';

const propTypes = {
  /**
   * Content to be displayed at the start of the header, placed before the title
   **/
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar
   **/
  title: PropTypes.string,

  /**
   * Content to be displayed at the end of the header
   **/
  endContent: PropTypes.element,

  /**
   * A Boolean indicating if the header is a subsection header. Default is false
   **/
  isSubsection: PropTypes.bool,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
  isSubsection: false,
};

const Header = ({ title, startContent, endContent, isSubsection, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const headerClassNames = classNames([
    'terraClinical-Header',
    { 'terraClinical-SubsectionHeader': isSubsection },
    attributes.className,
  ]);

  const titleElement = <h1 className="terraClinical-Header-title">{title}</h1>;
  let headerContent;

  if (startContent || endContent) {
    headerContent = (
      <Arrange
        fitStart={startContent}
        fitEnd={endContent}
        fill={titleElement}
        align="center"
      />
    );
  } else {
    headerContent = titleElement;
  }

  return (
    <header {...attributes} className={headerClassNames}>
      {headerContent}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
