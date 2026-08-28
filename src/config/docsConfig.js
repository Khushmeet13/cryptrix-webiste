import { sidebarData, 
    apiSidebarData, 
    sdkSidebarData, 
    cookbookSidebarData, 
    contractsSidebarData, 
    sdkDownloadSidebarData, 
    supportSidebarData ,
    websocketSidebarData,
    testnetSidebarData
} from "@/data/docs";

export const tocItems = [
  {
    id: "getting-started",
    label: "Getting Started",
    children: [
      { id: "deploy-first-app", label: "Deploy Your First Cryptrix Application" },
    ],
  },
  { id: "try-solana", label: "Try Cryptrix: Play 2048" },
  {
    id: "start-learning",
    label: "Start Learning",
    children: [
      {
        id: "client-dev",
        label: "Client Side Development",
        children: [
          { id: "official-sdks", label: "Official SDKs" },
          { id: "community-sdks", label: "Community SDKs" },
        ],
      },
    ],
  },
  { id: "running-validator", label: "Running a validator" },
  { id: "getting-support", label: "Getting Support" },
];


const getPagesFromSidebar = (data, pages = []) => {
  data.forEach((item) => {
    if (item.title) {
      pages.push({
        id: item.title.toLowerCase().replace(/\s+/g, "-"),
        title: item.title,
      });

      item.children?.forEach((child) => {
        if (typeof child === "object" && child.title) {
          pages.push({
            id: child.title.toLowerCase().replace(/\s+/g, "-"),
            title: child.title,
          });
        }
      });
    }
  });

  return pages;
};

const docsConfig = {
  docs: {
    sidebar: sidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(sidebarData),
    title: "Cryptrix Documentation",
    subtitle: "Cryptrix Documentation",
    contentType: "docs",
  },

  api: {
    sidebar: apiSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(apiSidebarData),
    title: "API Reference",
    subtitle: "Cryptrix API",
    contentType: "api",
  },

  sdk: {
    sidebar: sdkSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(sdkSidebarData),
    title: "SDKs",
    subtitle: "Cryptrix SDKs",
    contentType: "sdk",
  },

  cookbook: {
    sidebar: cookbookSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(cookbookSidebarData),
    title: "Cookbook",
    subtitle: "Cryptrix Cookbook",
    contentType: "cookbook",
  },

  contracts: {
    sidebar: contractsSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(contractsSidebarData),
    title: "Contracts",
    subtitle: "Cryptrix Contracts",
    contentType: "contracts",
  },

  testnet: {
    sidebar: testnetSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(testnetSidebarData),
    title: "Testnet",
    subtitle: "Cryptrix Testnet",
    contentType: "testnet",
  },

  websocket: {
    sidebar: websocketSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(websocketSidebarData),
    title: "Websocket",
    subtitle: "Cryptrix Websocket",
    contentType: "websocket",
  },

  sdk_download: {
    sidebar: sdkDownloadSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(sdkDownloadSidebarData),
    title: "SDK Downloads",
    subtitle: "Cryptrix SDK Downloads",
    contentType: "sdk_download",
  },

  support: {
    sidebar: supportSidebarData, 
    toc: tocItems, 
    pages: getPagesFromSidebar(supportSidebarData),
    title: "Get Support",
    subtitle: "Cryptrix Support",
    contentType: "support",
  },
};

export default docsConfig;
