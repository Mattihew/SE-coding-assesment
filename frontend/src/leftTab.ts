
type LeftTab = {
    (display: "on", text: string): void,
    (display: "off"): void,
}

declare global {
    interface Window {
        leftTab: LeftTab
    }
}

const leftTab: LeftTab = (display: "on" | "off", text?: string) => {
    const strapElement = document.getElementById("strap");
    if (display === "off") {
        strapElement?.classList?.toggle("hidden", true);
    } else {
        const strapHeader = document.getElementById("strap-header");
        if (strapHeader && text) {
            strapHeader.innerText = text;
        }
        strapElement?.classList?.toggle("hidden", false);
    }
};

window.leftTab = leftTab
