import { useState } from "react";

export const useTab = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
