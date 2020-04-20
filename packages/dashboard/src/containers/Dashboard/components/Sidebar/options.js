import { faUsers, faPoll, faDollyFlatbed } from '@fortawesome/free-solid-svg-icons';
import messages from './messages';

const { label } = messages;

const options = [
  {
    key: 'dashboard',
    label: label.dashboard,
    leftIcon: faPoll,
  },
  {
    key: 'users',
    label: label.users,
    leftIcon: faUsers,
  },
  {
    key: 'products',
    label: label.products,
    leftIcon: faDollyFlatbed,
    children: [
      {
        key: 'category',
        label: label.category,
      },
    ],
  },
];

export default options;
