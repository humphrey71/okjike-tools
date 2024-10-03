import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["https://web.okjike.com/*"]
}

function toggleCollection(event: MouseEvent) {
    const article = event.target as HTMLElement;
    (article.parentElement as HTMLElement)?.click();
}

function handleUrlChange() {
  const articles = document.querySelectorAll("article svg.text-tint-icon-gray");
  articles.forEach((article) => {
    article.removeEventListener("mouseenter", toggleCollection);
    article.addEventListener("mouseenter", toggleCollection);
  });
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      handleUrlChange();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
