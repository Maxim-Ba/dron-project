import { FunctionComponent} from "react";
import { Form, Input, Button } from 'antd';
import Header from "../Header/Header";
import { customButtonsStyleType } from "../../types/buttonTypes";
import usersAPI from "../../backendAPI/usersAPI";
import { NavLink, Redirect } from "react-router-dom";
import { routesEnum } from "../../types/routes";
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface LoginCNProps {

}
const {  shape, type, style } = customStyleButton;


const LoginCN: FunctionComponent<LoginCNProps> = () => {
  const {id} = useTypedSelector(state => state.user);

  const {setUser, setIsFetching} = useActions();
  const {isFetching } = useTypedSelector(state=>state.user);

  const onFinish = async(values: any) => {
    setIsFetching(true);
    const data  = await usersAPI.login(values.email, values.password);
    setUser(data?.id, data?.email, data?.role);
    setIsFetching(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {id && <Redirect to={routesEnum.ORDER_MANAGER} />}

      <Header buttonName={customButtonsStyleType.login} />
      <section className="admin">

        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Введите Email' }]}
          >
            <Input type='email' />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              { required: true, message: 'Введите пароль' },
              { min: 4, message: 'Пароль должен быть более 3 символов' },
              { max: 16, message: 'Пароль должен быть менее 16 символов' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item> */}

          <Form.Item 
            className="registration__button"
          >
            <Button shape={shape} type={type} style={style} disabled={isFetching} htmlType="submit">
              Войти
            </Button>
          </Form.Item>

        </Form>

        <NavLink
          to={routesEnum.REGISTRATION}
          className="registration__button"
        >
          <Button shape={shape} type={type} style={style}>
            Регистрация 
          </Button>
        </NavLink>

      </section>
    </>
  );
};

export default LoginCN;