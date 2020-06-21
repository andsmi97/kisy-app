import CategoryIcon from '@material-ui/icons/Category';
import CardsIcon from '@material-ui/icons/Loyalty';
import AchievmentsIcon from '@material-ui/icons/Star';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

export interface MenuItem {
  name: string;
  to: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Категории',
    to: '/adimn/categories',
    Icon: CategoryIcon,
  },
  {
    name: 'Карточки',
    to: '/admin/cards',
    Icon: CardsIcon,
  },
  {
    name: 'Достижения',
    to: '/admin/achievments',
    Icon: AchievmentsIcon,
  },
];
