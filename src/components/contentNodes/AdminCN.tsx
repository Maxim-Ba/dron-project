import { FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";

interface AdminCNProps {
  
}

const AdminCN: FunctionComponent<AdminCNProps> = () => {
  return ( 
<>
<Header buttonName={customButtonsStyleType.admin} />
<div className="admin">Tут будет добавление/удаление/редактирование клиента, прайса, и сырья в БД</div>
</>
  );
};

export default AdminCN;