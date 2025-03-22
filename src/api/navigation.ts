export const getNavigation = async () => {
  // TODO: api로 반환
  return {
    navigation: [
      { id: 1, label: "home", path: "/" },
      { id: 2, label: "search", path: "/search" },
      { id: 3, label: "post", path: "/post/create" },
      { id: 4, label: "message", path: "/message" },
      { id: 5, label: "profile", path: "/profile" },
    ],
  };
};
