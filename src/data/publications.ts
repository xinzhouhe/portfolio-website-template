// src/data/publications.ts

export type Publication = {
    id: string;
    title: string;
    authors: {
        name: string;
        url?: string;
        me?: boolean;
    }[];
    venue?: string;
    year: number;
    links?: {
        pdf?: string;
        arxiv?: string;
        doi?: string;
        code?: string;
        slides?: string;
    };
    note?: string;
    kind: "conference" | "journal" | "workshop" | "preprint" | "techreport" | "thesis" | "poster" | "inprep";
    featured?: boolean;  // show on home page under Selected Publications
};

export const publications: Publication[] = [
    {
        id: "doe2025consensus",
        title: "Consensus Under Partial Synchrony: Revisiting the Latency-Throughput Tradeoff",
        authors: [
            { name: "Alex Doe", me: true },
            { name: "Alice Smith", url: "https://example.com/~asmith" },
            { name: "Bob Johnson" },
        ],
        venue: "Example Conference on Distributed Systems (ECDS)",
        year: 2025,
        links: {
            pdf: "https://example.com/papers/doe2025consensus.pdf",
            arxiv: "https://arxiv.org/abs/2501.00001",
            doi: "https://doi.org/10.1145/example.doi",
            code: "https://github.com/404-does-not-exist/consensus-study",
            slides: "https://example.com/slides/doe2025consensus.pdf",
        },
        note: "Best Paper Award",
        kind: "conference",
        featured: true,
    },
    {
        id: "doe2024traffic",
        title: "Encrypted Traffic Classification via Side-Channel Metadata",
        authors: [
            { name: "Alex Doe", me: true },
            { name: "Carol Williams", url: "https://example.com/~cwilliams" },
        ],
        venue: "Workshop on Network Security (WNS)",
        year: 2024,
        links: {
            pdf: "https://example.com/papers/doe2024traffic.pdf",
            arxiv: "https://arxiv.org/abs/2401.00002",
        },
        kind: "workshop",
        featured: true,
    },
    {
        id: "doe2024raft",
        title: "Raft at Scale: An Empirical Study of Leader Churn in Production Clusters",
        authors: [
            { name: "Alex Doe", me: true },
            { name: "Bob Johnson" },
            { name: "Dave Lee", url: "https://example.com/~dlee" },
        ],
        venue: "arXiv",
        year: 2024,
        links: {
            arxiv: "https://arxiv.org/abs/2410.00003",
        },
        kind: "preprint",
        featured: false,
    },
    {
        id: "doe2022thesis",
        title: "Towards Low-Latency Consensus in Wide-Area Networks",
        authors: [
            { name: "Alex Doe", me: true },
        ],
        venue: "Example University",
        year: 2022,
        links: {
            pdf: "https://example.com/papers/doe2022thesis.pdf",
        },
        note: "Undergraduate Honors Thesis",
        kind: "thesis",
        featured: false,
    },
];