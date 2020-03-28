import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { isEqual } from 'lodash';

const { SubMenu } = Menu;

const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

function SidebarMenu({ singleOption, submenuStyle, submenuColor, ...rest }) {
  const match = useRouteMatch();

  const { key, label, leftIcon, children } = singleOption;
  const url = stripTrailingSlash(match.url);

  if (children) {
    return (
      <SubMenu
        key={key}
        title={
          <span className="menuHolder" style={submenuColor}>
            <i className={leftIcon} />
            <span className="nav-text">
              <FormattedMessage id={label} />
            </span>
          </span>
        }
        {...rest}
      >
        {children.map(child => {
          const linkTo = child.withoutDashboard ? `/${child.key}` : `${url}/${child.key}`;
          return (
            <Menu.Item style={submenuStyle} key={child.key}>
              <Link style={submenuColor} to={linkTo}>
                <FormattedMessage id={child.label} />
              </Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  }

  return (
    <Menu.Item key={key} {...rest}>
      <Link to={`${url}/${key}`}>
        <span className="menuHolder" style={submenuColor}>
          <i className={leftIcon} />
          <span className="nav-text">
            <FormattedMessage {...label} />
          </span>
        </span>
      </Link>
    </Menu.Item>
  );
}

SidebarMenu.defaultProps = {
  submenuStyle: {},
  submenuColor: {},
};

SidebarMenu.propTypes = {
  singleOption: PropTypes.shape({
    key: PropTypes.any.isRequired,
    label: PropTypes.any.isRequired,
    leftIcon: PropTypes.any.isRequired,
    children: PropTypes.any,
  }).isRequired,
  submenuStyle: PropTypes.shape({}),
  submenuColor: PropTypes.shape({}),
};

export default React.memo(SidebarMenu, (left, right) => isEqual(left, right));
