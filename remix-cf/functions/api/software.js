export async function onRequest(context) {
    const softwareData = [
        {
            id: "1",
            title: "软件1",
            description: "这是软件1的详细描述...",
            icon: "/icons/software1.svg",
            features: ["特性1", "特性2", "特性3"],
            downloadLink: "https://example.com/download/1"
        },
        {
            id: "2",
            title: "软件2",
            description: "这是软件2的详细描述...",
            icon: "/icons/software2.svg",
            features: ["特性12", "特性22", "特性32"],
            downloadLink: "https://example.com/download/2222"
        },
        {
            id: "3",
            title: "软件33",
            description: "这是软件3的详细描述...",
            icon: "/icons/software1.svg",
            features: ["特性13", "特性23", "特性33"],
            downloadLink: "https://example.com/download/13"
        },
        {
            id: "5",
            title: "软件5",
            description: "这是软件1的详细描述...",
            icon: "/icons/software5.svg",
            features: ["特性15", "特性25", "特性35"],
            downloadLink: "https://example.com/download/15"
        }
        // 添加更多软件...
    ];

    return new Response(JSON.stringify(softwareData), {
        headers: { "Content-Type": "application/json" },
    });
}