import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
  ];
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log("Changing language to:", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {languages.map((lang, i) => (
        <button
          title={lang.lang}
          className={`px-2 border-2 shadow-black shadow-inner rounded h-full ${
            lang.code === i18n.language ? "bg-lime-600" : "bg-red-700"
          } text-white md:text-xl md:mx-2`}
          onClick={() => changeLanguage(lang.code)}
          key={i}
        >
          {lang.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
