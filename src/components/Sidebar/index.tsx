import React, { useState } from "react";
import View from "./View";

const Sidebar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);
  return <View title="Webgaz" setShowMenu={setShowMenu} showMenu={showMenu} />;
};

export default Sidebar;
