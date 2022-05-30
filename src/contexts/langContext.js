import React from "react";
import Language from "../lang/language";

const LangContext = React.createContext({
    setLanguage: lang => {},
    languages: Language.en,
  });

export default LangContext;