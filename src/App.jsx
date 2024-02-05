import { useEffect, useState } from "react";

import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector/LanguageSelector";

function App() {
  const [, forceUpdate] = useState();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const onLanguageChange = () => {
      // Force rerender when language changes
      forceUpdate({});
    };

    i18n.on("languageChanged", onLanguageChange);

    return () => {
      i18n.off("languageChanged", onLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="flex flex-col justify-center items-center h-screen max-w-[50rem] mx-auto">
      <LanguageSelector />
      <h1 className="font-bold font-serif md:text-2xl h-[50%] min-w-full max-w-[50%] bg-red-700 text-white flex justify-center items-center rounded  shadow-inner shadow-black">
        {t("greeting")}
      </h1>
    </div>
  );
}

export default App;
