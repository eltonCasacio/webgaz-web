import { NavLink, Outlet } from "react-router-dom";
import * as S from "./styles";

import { Menus } from "../../mocks/Menus";

type MenuItemType = {
  name: string;
  url: string;
  icon: any;
};

const createMenuItem = (menu: MenuItemType) => {
  return (
    <S.MenuItem>
      {menu.icon}{" "}
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
        {menu.name}
      </NavLink>
      <Outlet />
    </S.MenuItem>
  );
};

export default function Menu() {
  return (
    <S.Wrapper>
      <ul>{Menus.map((menu) => createMenuItem(menu))}</ul>
    </S.Wrapper>
  );
}
