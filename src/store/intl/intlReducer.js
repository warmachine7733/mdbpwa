import * as enMessages from "../../commons/intl/lang_packs/en";
import * as hiMessages from "../../commons/intl/lang_packs/hi";
import * as guMessages from "../../commons/intl/lang_packs/gu";
import * as odMessages from "../../commons/intl/lang_packs/od";
import * as taMessages from "../../commons/intl/lang_packs/ta";
import * as teMessages from "../../commons/intl/lang_packs/te";
import * as beMessages from "../../commons/intl/lang_packs/be";
import * as kaMessages from "../../commons/intl/lang_packs/ka";
import * as urMessages from "../../commons/intl/lang_packs/ur";
import * as mrMessages from "../../commons/intl/lang_packs/mr";

let initialState = {
  lang: "hi",
  languageFullName: "hindi",
  messages: hiMessages.default,
  style: { backgroundColor: "white" }
};

export const intl = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      switch (action.language) {
        case "ta":
          return {
            ...state,
            lang: "ta",
            languageFullName: "tamil",
            messages: taMessages.default,
            style: {  }
          };
        case "or":
          return {
            ...state,
            lang: "or",
            languageFullName: "odia",
            messages: odMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "en":
          return {
            ...state,
            lang: "en",
            languageFullName: "english",
            messages: enMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };

        case "hi":
          return {
            ...state,
            lang: "hi",
            languageFullName: "हिंदी",
            messages: hiMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };

        case "gu":
          return {
            ...state,
            lang: "gu",
            languageFullName: "ગુજરાતી",
            messages: guMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "be":
          return {
            ...state,
            lang: "be",
            languageFullName: "bengali",
            messages: beMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "te":
          return {
            ...state,
            lang: "te",
            languageFullName: "telegu",
            messages: teMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "ka":
          return {
            ...state,
            lang: "ka",
            languageFullName: "kannada",
            messages: kaMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "ur":
          return {
            ...state,
            lang: "ur",
            languageFullName: "urdu",
            messages: urMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        case "mr":
          return {
            ...state,
            lang: "mr",
            languageFullName: "marathi",
            messages: mrMessages.default,
            style: { backgroundColor: "#00cc00", color: "white" }
          };
        default:
          return state;
      }

    default:
      return state;
  }
};
