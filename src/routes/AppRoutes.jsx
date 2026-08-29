import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/getStarted/Home";
import About from "../pages/About";
import IntroPage from "../pages/getStarted/IntroPage";
import ResourcesPage from "@/pages/ResourcesPage";
import LegalPage from "@/pages/legal/LegalPage";
import LegalDetail from "@/pages/legal/LegalDetail";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Community from "@/pages/Community";
import MediaPage from "@/pages/MediaPage";
import UseCases from "@/pages/getStarted/usecases/UseCases";
import UsecaseDetail from "@/pages/getStarted/usecases/UsecaseDetail";
import FaqPage from "@/pages/getStarted/FaqPage";
import NotFound from "@/components/NotFound";
import StatusPage from "@/pages/ecosystem/StatusPage";
import VotingSystem from "@/pages/governance/VotingSystem";
import Staking from "@/pages/governance/Staking";
import Proposals from "@/pages/governance/Proposals";
import CommunityRules from "@/pages/governance/CommunityRules";
import TokenUtility from "@/pages/token/TokenUtility";
import TokenomicsPage from "@/pages/token/TokenomicsPage";
import TokenStaking from "@/pages/token/TokenStaking";
import TokenVesting from "@/pages/token/TokenVesting";
import DeFi from "@/pages/solutions/DeFi";
import Gaming from "@/pages/solutions/Gaming";
import Enterprises from "@/pages/solutions/Enterprises";
import Payments from "@/pages/solutions/Payments";
import Identity from "@/pages/solutions/Identity";
import SupplyChain from "@/pages/solutions/SupplyChain";
import NFTPlatform from "@/pages/product/NFTPlatform";
import StakingDashboard from "@/pages/product/StakingDashboard";
import Dashboard from "@/pages/product/Dashboard";
import SmartContracts from "@/pages/product/SmartContracts";
import Explorer from "@/pages/product/Explorer";
import Testnet from "@/pages/product/Testnet";
import Wallet from "@/pages/product/wallet/Wallet";
import AllWallets from "@/pages/product/wallet/AllWallets";
import Documentation from "@/pages/Documentation";
import HowToStakePage from "@/pages/getStarted/HowToStakePage";
import WhatCryptrixDoes from "@/pages/getStarted/WhatCryptrixDoes";
import NetworkOverview from "@/pages/ecosystem/NetworkOverview";
import ValidatorsPage from "@/pages/ecosystem/Validators";
import NodesPage from "@/pages/ecosystem/NodesPage";
import PartnersPage from "@/pages/ecosystem/PartnersPage";
import GrantsPage from "@/pages/ecosystem/GrantsPage";
import EcosystemGrowth from "@/pages/ecosystem/EcosystemGrowth";
import BlogPage from "@/pages/blog/BlogPage";
import BlogDetail from "@/pages/blog/BlogDetail";
import DexExchange from "@/pages/product/DexExchange";
import Whitepaper from "@/pages/Whitepaper";
import Roadmap from "@/pages/Roadmap";
import Security from "@/pages/Security";

function TrailingSlashWrapper() {
  const location = useLocation();

  if (location.pathname !== "/" && !location.pathname.endsWith("/")) {
    return <Navigate to={location.pathname + "/"} replace />;
  }

  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<TrailingSlashWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/wallets" element={<Wallet />} />
          <Route path="/dex-exchange" element={<DexExchange />} />




          <Route path="/crx" element={<IntroPage />} />
          <Route
            path="/what-cryptrix-does"
            element={<WhatCryptrixDoes />}
          />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/use-cases/:slug" element={<UsecaseDetail />} />
          <Route path="/faqs" element={<FaqPage />} />

          <Route path="/all-wallets" element={<AllWallets />} />
          <Route path="/how-to-stake" element={<HowToStakePage />} />

          {/* Build */}
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/:slug?" element={<Documentation />} />

          {/* Ecosystem */}
          <Route path="/ecosystem" element={<NetworkOverview />} />
          <Route path="/validators" element={<ValidatorsPage />} />
          <Route path="/nodes" element={<NodesPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/grants" element={<GrantsPage />} />
          <Route path="/ecosystem-growth" element={<EcosystemGrowth />} />

          {/* Governance */}
          <Route path="/voting" element={<VotingSystem />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/rules" element={<CommunityRules />} />

          {/* Token */}
          <Route path="/token/utility" element={<TokenUtility />} />
          <Route path="/token/tokenomics" element={<TokenomicsPage />} />
          <Route path="/token/staking" element={<TokenStaking />} />
          <Route path="/token/vesting" element={<TokenVesting />} />

          {/* Solutions */}
          <Route path="/solutions/defi" element={<DeFi />} />
          <Route path="/solutions/gaming" element={<Gaming />} />
          <Route path="/solutions/enterprises" element={<Enterprises />} />
          <Route path="/solutions/payments" element={<Payments />} />
          <Route path="/solutions/identity" element={<Identity />} />
          <Route path="/solutions/supply-chain" element={<SupplyChain />} />
          <Route path="/nft-platform" element={<NFTPlatform />} />
          <Route path="/staking-dashboard" element={<StakingDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/smart-contracts" element={<SmartContracts />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/testnet" element={<Testnet />} />

          {/* blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* More links */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/legal/:slug" element={<LegalDetail />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/status" element={<StatusPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
