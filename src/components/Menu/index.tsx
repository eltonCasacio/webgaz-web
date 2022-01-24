import { NavLink, Outlet } from "react-router-dom";
import * as S from "./styles";

import { Menus } from "../../mocks/Menus";

type MenuItemType = {
  name: string;
  url: string;
  icon: any;
};

export default function Menu({ showMenu = true }) {
  const createMenuItem = (menu: MenuItemType) => {
    return (
      <S.MenuItem showMenu={showMenu}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#ffee04" : "",
              fontWeight: isActive ? "bold" : "",
            };
          }}
          to={`/${menu.url}`}
          key={menu.name}
        >
          {menu.icon} {showMenu && menu.name}
        </NavLink>
        <Outlet />
      </S.MenuItem>
    );
  };

  return (
    <S.Wrapper>
      <ul>{Menus.map((menu) => createMenuItem(menu))}</ul>
    </S.Wrapper>
  );
}
