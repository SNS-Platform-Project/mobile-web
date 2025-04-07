import { useEffect, useState } from "react";

import Header from "@/components/header/Header";
import TabNavBar from "@/components/tabNavBar/TabNavBar";
import FeedList from "./components/feed/FeedList";
import { FeedPost } from "@/types/feed";

import { getFeedLatestAPI, getFeedRecommendedAPI } from "@/api/feed";

import styles from "./home.module.scss";

function Index() {
  const [selectedTab, setSelectedTab] = useState<"최신순" | "인기순">("최신순");
  const [feeds, setFeeds] = useState<FeedPost[]>([]);
  const [lastId, setLastId] = useState<string | null>(null);

  const fetchFeeds = async (
    tab: "최신순" | "인기순",
    lastIdParam: string | null = null
  ) => {
    try {
      const res =
        tab === "인기순"
          ? await getFeedRecommendedAPI(lastIdParam)
          : await getFeedLatestAPI(lastIdParam);

      if (lastIdParam) {
        setFeeds((prev) => [...prev, ...res.data]); // 더보기
      } else {
        setFeeds(res.data); // 새 탭일 경우 초기화
      }
      setLastId(res.lastId);
    } catch (err) {
      console.error("❌ 피드 로딩 실패:", err);
    }
  };

  // 탭 바뀔 때마다 새로 요청
  useEffect(() => {
    fetchFeeds(selectedTab);
  }, [selectedTab]);

  return (
    <div>
      <Header type="home" />

      <TabNavBar
        tabs={["최신순", "인기순"]}
        onTabChange={(tab) => setSelectedTab(tab as "최신순" | "인기순")}
        top={60}
      />

      <div className={styles.container}>
        <FeedList feeds={feeds} />
      </div>

      {lastId && (
        <button
          onClick={() => fetchFeeds(selectedTab, lastId)}
          style={{ margin: "1rem" }}
        >
          더보기
        </button>
      )}
    </div>
  );
}

export default Index;
