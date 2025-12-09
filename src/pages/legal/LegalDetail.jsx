import { useParams, useNavigate } from "react-router-dom";
import LegalDocumentPage from "@/components/Legal/LegalDocumentPage";
import { useEffect, useState } from "react";

// Sab content files ko map kar diya
const contentMap = {
  "terms-of-use": () => import("@/data/terms-of-use.jsx"),
  "privacy-policy": () => import("@/data/privacy-policy"),
  "cookie-policy": () => import("@/data/cookie-policy"),
//   "risk-disclosure": () => import("@/data/risk-disclosure"),
//   "village-voucher": () => import("@/data/village-voucher"),
//   "grants": () => import("@/data/grants"),
//   "candidate-privacy": () => import("@/data/candidate-privacy"),
};

export default function LegalDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const importer = contentMap[slug];
      if (!importer) {
        navigate("/legal", { replace: true });
        return;
      }

      try {
        const module = await importer();
        setContent({
          title: module.meta.title,
          lastUpdated: module.meta.lastUpdated,
          sections: module.sections
        });
      } catch (err) {
        navigate("/legal");
        console.log(err);
      }
    };

    loadContent();
  }, [slug, navigate]);

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return <LegalDocumentPage {...content} />;
}