import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    run_at: "document_start",
    matches: ["https://m.okjike.com/*"]
}



const mUrl = "https://m.okjike.com"
const webUrl = "https://web.okjike.com"

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
    console.log("redirect to", `${webUrl}${redirectPath}`)
    window.location.href = window.location.href.replace(`${mUrl}${currentPath}`, `${webUrl}${redirectPath}` )
}