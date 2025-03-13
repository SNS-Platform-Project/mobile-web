import Header from "@/components/header/Header";
import TabNavBar from "@/components/tabNavBar/TabNavBar";

import styles from "./home.module.scss";

function index() {
  return (
    <div>
      <Header type="home" />
      <TabNavBar
        tabs={["추천", "팔로잉"]}
        onTabChange={(tab) => console.log(tab)}
        top={60}
      />
    </div>
  );
}

export default index;
