import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    run_at: "document_start",
    matches: ["http://okjike.com/*", "https://okjike.com/*", "https://m.okjike.com/*"]
}

const currentPath = window.location.pathname;
let redirectPath: string;
if (currentPath.startsWith("/originalPosts")) {
    redirectPath = currentPath.replace("/originalPosts", "/originalPost")
} else if (currentPath.startsWith("/topics")) {
    redirectPath = currentPath.replace("/topics", "/topic")
} else if (currentPath.startsWith("/users")) {
    redirectPath = currentPath.replace("/users", "/u")
} else if (currentPath === "/") {
    redirectPath = "/"
}

if (redirectPath) {
    window.location.href = window.location.href.replace(`${window.location.origin}${currentPath}`, `https://web.okjike.com${redirectPath}` )
}