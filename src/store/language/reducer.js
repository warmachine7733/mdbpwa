const initialState = {
  pairedLangs: [
    {
      pair: [
        { en: ["Hindi", "Odia"] },
        { na: ["हिंदी", "ଓଡ଼ିଆ"] },
        { key: ["hi", "or"] }
      ]
    },
    {
      pair: [
        { en: ["kannada", "Tamil"] },
        { na: ["ಕನ್ನಡ", "தமிழ்"] },
        { key: ["ka", "ta"] }
      ]
    },
    {
      pair: [
        { en: ["Bengali", "Gujrati"] },
        { na: ["বিংগালী", "ગુજરાતી"] },
        { key: ["be", "gu"] }
      ]
    },
    {
      pair: [
        { en: ["Telegu", "Urdu"] },
        { na: ["తెలుగు", "اردو"] },
        { key: ["te", "ur"] }
      ]
    },
    {
      pair: [
        { en: ["Malayalam", "Marathi"] },
        { na: ["മലയാളം", "मराठी"] },
        { key: ["ml", "mr"] }
      ]
    }
  ],
  defaultColor: {
    hi: "Black",
    or: "Black",
    ka: "Black",
    ta: "Black",
    be: "Black",
    gu: "Black",
    te: "Black",
    ur: "Black",
    ml: "Black",
    mr: "Black"
  },

  langColor: {
    hi: "green",
    or: "Black",
    ka: "Black",
    ta: "Black",
    be: "Black",
    gu: "Black",
    te: "Black",
    ur: "Black",
    ml: "Black",
    mr: "Black"
  }
};
export const language = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_LANGUAGE":
      return {
        ...state,
        langColor: {
          ...state.defaultColor,
          [action.langCode]: "green"
        }
      };
    default:
      return state;
  }
};
