import { ButtonShape, ButtonType } from "antd/lib/button";

export enum customButtonsStyleType {
  createOrder = "Создать заказ",
  viewOrder = "Просмотр заказа",
  orderManager = "Заказменеджер",
  orderCreation = "Создание заказа",
  listOrder = "Список заказов",
  cancel = "Отмена",
  next = "Далее",
  back = "Назад",
  refresh = "refresh",
  print = "print",
  show = "Показать",
  create = "Создать",
  admin="Админка",
  options="Настройки",
  graph="Графики"

}
export interface IButtonStyleType {
  styleType:customButtonsStyleType
}
export interface ICustomStyleButton {
  type: ButtonType,
  block: boolean,
  icon?: React.ReactNode
  shape: ButtonShape,
  style: {
    border: string,
    backgroundColor?: string,
    width?: string
    color?: 'black' | 'white'
    margin?: '0 5px'
  },
}