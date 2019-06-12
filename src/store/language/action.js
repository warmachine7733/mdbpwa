import { changeLanguage } from "../intl/intlActions";
export const selectedLanguage = langCode => {
  return async dispatch => {
    dispatch({ type: "SELECTED_LANGUAGE", langCode });
    dispatch(changeLanguage(langCode));
  };
};
