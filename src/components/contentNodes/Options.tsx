import { Button, Divider, Radio} from "antd";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { customStyleButton} from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { routesEnum } from "../../types/routes";
import { generateCSSColor } from "../../utils/generateCSSColor";
import ColorSliders from "../ColorSliders";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface OptionsProps {
  
}

const { block, shape, style, type, } = customStyleButton;

const Options: FunctionComponent<OptionsProps> = () => {
  const {
    backBackgroundBack,
    backBackgroundBigBtn,
    backBackgroundFooter,
    backBackgroundHeader,
    backBackgroundNext,
    btnColorBack,
    btnColorBig,
    btnColorNext,
    darkTheme,
    default: defaultT,
    generalBackground,
    generalColor,
    lightTheme
  } = useTypedSelector(state=>state.options);

  const {
    installColorBack,
    installColorBigBtn,
    installColorGeneral,
    installColorNext,
    setBackBackGround,
    setDefault,
    setNextBackGround,
    setFooterBackGround,
    setDarkTheme,
    setLightTheme,
    setBigBtnBackGround,
    setGeneralBackGround,
    setHeaderBackGround,

  } = useActions();

  const setDefaultValueRadioBtn=()=>{
    if (defaultT.isSelected) {
      return 'default';
    }
    if (lightTheme.isSelected) {
      return 'light';
    }
    if (darkTheme.isSelected) {
      return'dark';
    }
  };

  const saveToLocaleStorage = ()=>{
    localStorage.setItem('options', JSON.stringify(
      {
        backBackgroundBack,
        backBackgroundBigBtn,
        backBackgroundFooter,
        backBackgroundHeader,
        backBackgroundNext,
        btnColorBack,
        btnColorBig,
        btnColorNext,
        generalBackground,
        generalColor,
      }
    ));
  };

    return ( 
  <>
        <Header buttonName={customButtonsStyleType.options} />
        <section className="options"
                style={{
                  color: generateCSSColor(generalColor)
                  }}
        >

        <Divider                 style={{
                  color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет фона</Divider>
          <div>
          <ColorSliders 
            red={generalBackground.red} 
            green={generalBackground.green} 
            blue={generalBackground.blue} 
            callback={setGeneralBackGround}  />
          </div>

          <Divider         
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет текста фона</Divider>
          <div>
          <ColorSliders 
            red={generalColor.red} 
            green={generalColor.green} 
            blue={generalColor.blue} 
            callback={installColorGeneral}  />
          </div>
                    
        <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет кнопки назад</Divider>
          <div>
          <ColorSliders 
            red={backBackgroundBack.red} 
            green={backBackgroundBack.green} 
            blue={backBackgroundBack.blue} 
            callback={setBackBackGround}  />

          </div>

          <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет текста кнопки назад</Divider>
          <div>
          <ColorSliders 
            red={btnColorBack.red} 
            green={btnColorBack.green} 
            blue={btnColorBack.blue} 
            callback={installColorBack}  />

          </div>
                    
        <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет кнопки далее</Divider>
          <div>
          <ColorSliders 
            red={backBackgroundNext.red} 
            green={backBackgroundNext.green} 
            blue={backBackgroundNext.blue}  
            callback={setNextBackGround}  />

          </div>

          <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет кнопки далее</Divider>
          <div>
          <ColorSliders 
            red={btnColorNext.red} 
            green={btnColorNext.green} 
            blue={btnColorNext.blue}  
            callback={installColorNext}  />

          </div>
                    
        <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет хедера</Divider>
          <div>
          <ColorSliders 
            red={backBackgroundHeader.red} 
            green={backBackgroundHeader.green} 
            blue={backBackgroundHeader.blue}  
            callback={setHeaderBackGround}  />

          </div>
                    
        <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет футера</Divider>
          <div>
          <ColorSliders 
            red={backBackgroundFooter.red} 
            green={backBackgroundFooter.green} 
            blue={backBackgroundFooter.blue}  
            callback={setFooterBackGround}  />

          </div>

          <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет большой кнопки</Divider>
          <div>
          <ColorSliders 
            red={backBackgroundBigBtn.red} 
            green={backBackgroundBigBtn.green} 
            blue={backBackgroundBigBtn.blue} 
            callback={setBigBtnBackGround}  />
          </div>

          <Divider          
                  style={{
                    color: generateCSSColor(generalColor)
                  }}
                  orientation="left">Цвет текста большой кнопки</Divider>
          <div>
          <ColorSliders 
            red={btnColorBig.red}
            green={btnColorBig.green}
            blue={btnColorBig.blue}
            callback={installColorBigBtn}  />
          </div>

          <Divider
            orientation="left"
            style={{
              color: generateCSSColor(generalColor)
            }}
          >
            Темы по умолчанию
          </Divider>
          
          <Radio.Group 
            defaultValue={setDefaultValueRadioBtn()}
            buttonStyle="solid" 
            className="options__radio-group"
          >
            <Radio.Button 
              value="default"
              onChange={setDefault}
            >
              Default
            </Radio.Button>
            <Radio.Button 
              value="light"
              onChange={setLightTheme}
            >
              Light
            </Radio.Button>
            <Radio.Button 
              value="dark"
              onChange={setDarkTheme}
            >
              Dark
            </Radio.Button>

          </Radio.Group>
        </section>
        
        <Footer >
        <div className="order-creation__button-wrapper">
          <NavLink to={routesEnum.ORDER_MANAGER} className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...style,
                backgroundColor: generateCSSColor(backBackgroundBack), 
                color: generateCSSColor(btnColorBack)
              }}
            >
              {customButtonsStyleType.cancel}
            </Button>
          </NavLink>
          <div className="order-creation__navlink">
            <Button
              block={block}
              type={type}
              shape={shape}
              style={{ ...style,
                backgroundColor: generateCSSColor(backBackgroundNext), 
                color: generateCSSColor(btnColorNext)
              }}        
              disabled={false}
              onClick={saveToLocaleStorage}
            >
              {customButtonsStyleType.save}
            </Button>
          </div>


        </div>
      </Footer>
  </>
  );
};

export default Options;