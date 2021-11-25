import { Button } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import priceAPI from "../../../backendAPI/priceAPI";
import { blackText, customStyleButton, redColor, whiteColor } from "../../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../../types/buttonTypes";
import { TypesofMW, TypeMV as TypesMW} from "../../../types/ModalWindowTypes/ModalWindowTypes";
import { routesEnum } from "../../../types/routes";
import Header from "../../Header/Header";
import ModlWindow from "../ModalWindow/ModalWindow";
import WrapperButtons from "../WrapperButtons";
import Footer from "../../Footer/Footer";
import FormAddPrice from "./FormAddPrice";
import FormDeletePrice from "./FormDeletePrice";
import FormChangePrice from "./FormChangePrice";
import PriceTable from "./PriceTable";

interface EditPriceProps {

}
const { block, shape, type, style } = customStyleButton;
const Buttons: FunctionComponent = () => {
    const { selectedPrice } = useTypedSelector(state => state.price);
    const [refreshDisabled, setRefreshDisabled] = useState(false);
    const adapterToButtonDisabled = (): boolean => {
        if (selectedPrice === 0) {
            return !true;
        }
        return !selectedPrice;
    };
    const { getPriceNames } = useActions();

    const handleGetPriceNames = async () => {
        try {
            setRefreshDisabled(true);
            const data = await priceAPI.getPriceNames();
            getPriceNames(data);

        } catch (error) {
            console.log(error);
        }
        finally {
            setRefreshDisabled(false);
        }
    };

    const { setVisibleMW, setType } = useActions();

    return (
        <>

            <Button
                block={block}
                shape={shape}
                type={type}
                style={style}
                className="admin__button"
                onClick={() => {

                    setType(TypesofMW.PRICE_CREATE);
                    setVisibleMW(true);
                }}
            >
                Добавить новый прайс
            </Button>
            <Button
                block={block}
                shape={shape}
                type={type}
                style={{ ...style, ...redColor }}
                className="admin__button"
                disabled={adapterToButtonDisabled()}
                onClick={() => {
                    setType(TypesofMW.PRICE_DELETE);
                    setVisibleMW(true);
                }}
            >
                Удалить прайс
            </Button>
            <Button
                block={block}
                shape={shape}
                type={type}
                style={style}
                className="admin__button"
                disabled={adapterToButtonDisabled()}
                onClick={() => {
                    setType(TypesofMW.PRICE_CHANGE);
                    setVisibleMW(true);
                }}
            >
                Редактировать прайс
            </Button>
            <Button
                block={block}
                shape={shape}
                type={type}
                style={style}
                loading={refreshDisabled}
                className="admin__button"
                onClick={() => handleGetPriceNames()}
            >
                Обновить прайсы
            </Button>
        </>
    );
};


const EditPrice: FunctionComponent<EditPriceProps> = () => {
    const { priceNames } = useTypedSelector(state => state.price);
    const { typeMV } = useTypedSelector(state => state.modalWindow);

    const { getPriceNames, setType } = useActions();


    const handleGetPriceNames = async () => {
        const data = await priceAPI.getPriceNames();
        getPriceNames(data);
    };
    useEffect(() => {
        setType(TypesofMW.PRICE_CREATE);
        handleGetPriceNames();
    }, []);


    const swichPropsMW = (type: TypesMW): { title: string, children: React.ReactNode } => {

        let children, title;

        switch (type) {
            case TypesofMW.PRICE_CREATE:
                title = "Добавить новый прайс";
                children = <FormAddPrice />;
                return { title, children };
            case TypesofMW.PRICE_DELETE:
                title = "Удалить прайс";
                children = <FormDeletePrice />;
                return { title, children };
            case TypesofMW.PRICE_CHANGE:
                title = "Редактировать прайс";
                children = <FormChangePrice />;
                return { title, children };
            default:
                return { title: 'Ошибка', children };
        }
    };

    return (

        <>

            <Header buttonName={customButtonsStyleType.price} />
            <ModlWindow
                children={swichPropsMW(typeMV).children}
                title={swichPropsMW(typeMV).title}
                type={typeMV}
            />
            <div className={'order-creation'}>
                <section className="order-creation__section">
                    <WrapperButtons buttons={<Buttons />} />
                    <PriceTable dataTable={priceNames} />

                </section>
            </div>


            <Footer >
                <div className="order-creation__button-wrapper">
                    <NavLink
                        to={true ? routesEnum.ADMIN : routesEnum.ADMIN}
                        className="order-creation__navlink"
                    >
                        <Button
                            block={block}
                            type={type}
                            shape={shape}
                            style={{ ...blackText, ...whiteColor, ...style }}
                            onClick={undefined}
                        >
                            {true ? customButtonsStyleType.back : customButtonsStyleType.cancel}
                        </Button>
                    </NavLink>

                </div>
            </Footer>
        </>
    );
};

export default EditPrice;