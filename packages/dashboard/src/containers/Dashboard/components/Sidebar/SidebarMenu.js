import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@ute-exchange/components';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const { SubMenu, Item } = Menu;

const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

function SidebarMenu({ singleOption, ...rest }) {
  const match = useRouteMatch();

  const { key, label, leftIcon, children } = singleOption;

  const url = stripTrailingSlash(match.url);

  if (children) {
    return (
      <SubMenu
        key={key}
        title={
          <span className="menuHolder">
            <FontAwesomeIcon icon={leftIcon} />
            <span className="nav-text">
              <FormattedMessage {...label} />
            </span>
          </span>
        }
        {...rest}
      >
        {children.map(child => {
          const linkTo = child.withoutDashboard ? `/${child.key}` : `${url}/${child.key}`;
          return (
            <Item key={child.key}>
              <Link to={linkTo}>
                <FormattedMessage {...child.label} />
              </Link>
            </Item>
          );
        })}
      </SubMenu>
    );
  }

  return (
    <Item key={key} {...rest}>
      <Link to={`${url}/${key}`}>
        <span className="menuHolder">
          <FontAwesomeIcon icon={leftIcon} />
          <span className="nav-text">
            <FormattedMessage {...label} />
          </span>
        </span>
      </Link>
    </Item>
  );
}

SidebarMenu.propTypes = {
  singleOption: PropTypes.shape({
    key: PropTypes.any.isRequired,
    label: PropTypes.any.isRequired,
    leftIcon: PropTypes.any.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default React.memo(SidebarMenu);
