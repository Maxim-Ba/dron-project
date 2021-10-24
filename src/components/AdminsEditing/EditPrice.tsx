import { FunctionComponent } from "react";
import { customButtonsStyleType } from "../../types/buttonTypes";
import Header from "../Header/Header";

interface EditPriceProps {

}


const EditPrice: FunctionComponent<EditPriceProps> = () => {
    return (
        <>
            <Header buttonName={customButtonsStyleType.admin} />

            <section className="admin">s

            </section>
        </>
    );
};

export default EditPrice;