import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Avatar, List } from '@ute-exchange/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faCommentDots, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';
import messages from './messages';

const { label, description } = messages;

const TOPBAR_OPTIONS = [
  {
    label: label.settings,
    icon: faCog,
  },
  {
    label: label.feedback,
    icon: faCommentDots,
  },
  {
    label: label.helpNSupport,
    icon: faQuestionCircle,
  },
];

function TopbarUser() {
  const [visible, setVisibility] = useState(false);

  const { formatMessage: f } = useIntl();

  const handleVisibleChange = () => {
    setVisibility(prevState => !prevState);
  };

  const content = (
    <List
      size="small"
      header={
        <Link to="/profile">
          <List.Item.Meta
            avatar={<Avatar size={48} src="src" />}
            title="Nhat Toan"
            description={f(description.seeProfile)}
          />
        </Link>
      }
      footer={
        <Link className="w-full" to="/#">
          <span>
            <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
            <span className="ml-4">{f(label.signOut)}</span>
          </span>
        </Link>
      }
      dataSource={TOPBAR_OPTIONS}
      renderItem={(option, index) => (
        <List.Item id={index}>
          <Link className="w-full" to="/#">
            <span>
              <FontAwesomeIcon size="lg" icon={option.icon} />
              <span className="ml-4">{f(option.label)}</span>
            </span>
          </Link>
        </List.Item>
      )}
    />
  );

  return (
    <Popover
      content={content}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      arrowPointAtCenter
      placement="bottomLeft"
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </Popover>
  );
}

export default TopbarUser;
