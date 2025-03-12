import { useNavigationStore } from "@/store/navigationStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { navigation, fetchNavigation } = useNavigationStore();

  useEffect(() => {
    fetchNavigation();
  }, []);

  return (
    <nav>
      {navigation.map((navItem) => (
        <Link key={navItem.id} to={navItem.path}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
