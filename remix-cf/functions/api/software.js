export async function onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const softwareData = [
        {
            id: "1",
            title: "软件1",
            description: "这是软件1的详细描述...",
            icon: "/icons/software1.svg",
            features: ["特性11", "特性12", "特性13"],
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

    const software = softwareData.find(s => s.id === id);

    if (software) {
        return new Response(JSON.stringify(software), {
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response(JSON.stringify({ error: "Software not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
}