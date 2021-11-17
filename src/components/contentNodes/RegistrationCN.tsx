import { FunctionComponent } from "react";
import { Form, Input, Button } from 'antd';
import { customStyleButton } from "../../custom-styles-for-antd/styleVariables";
import Header from "../Header/Header";
import usersAPI from "../../backendAPI/usersAPI";
import { customButtonsStyleType } from "../../types/buttonTypes";
import { NavLink } from "react-router-dom";
import { routesEnum } from "../../types/routes";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface RegistrationProps {

}
const {  shape, type, style } = customStyleButton;

const RegistrationCN: FunctionComponent<RegistrationProps> = () => {


  const {setIsFetching} = useActions();
  const {isFetching } = useTypedSelector(state=>state.user);

  const onFinish = async (values: any) => {
    setIsFetching(true);
    await usersAPI.registration(values.email, values.password);
    setIsFetching(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Header buttonName={customButtonsStyleType.login} />
      <section className="admin">

        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        // autoComplete="off"
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
              Зарегистрироваться
            </Button>
          </Form.Item>

        </Form>

        <NavLink
          to={routesEnum.ADMIN}
          className="registration__button"
        >
          <Button shape={shape} type={type} style={style}>
            Назад 
          </Button>
        </NavLink>

      </section>
    </>
  );
};

export default RegistrationCN;