import { validationConfig } from "./constants.js";

// ф-я выключающая кнопку
export const turnOffButtom = (buttonElement) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
}