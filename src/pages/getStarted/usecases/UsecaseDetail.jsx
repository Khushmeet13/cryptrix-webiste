import { useParams } from "react-router-dom";
import { USECASE_MAP } from "../../../data";
import UsecaseSinglePage from "@/components/UseCases/UsecaseSinglePage";

const UsecaseDetail = () => {
  const { slug } = useParams();      
  const data = USECASE_MAP[slug];    

  if (!data) return <div>Use case not found</div>;

  return <UsecaseSinglePage data={data} />;
};

export default UsecaseDetail;
