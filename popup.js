window.onload = function() {
    var darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function setThemeColors() {
      var backgroundColor;
      var textColor;
      var linkColor;

      if (darkThemeQuery.matches) {
        backgroundColor = "#2b2a33";
        textColor = "white";
        linkColor = "lightblue";
      } else {
        backgroundColor = "white";
        textColor = "black";
        linkColor = "blue";
      }

      document.body.style.backgroundColor = backgroundColor;
      document.body.style.color = textColor;

      var links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = linkColor;
      }
    }
    setThemeColors();
    var language = navigator.language || navigator.userLanguage;

    var translations = {
      en: {
        title: "Jut.Su Plus",
        GoToJutsu: "Go to jut.su",
        aboutExtension: "About extension",
        otherVersions: "Other versions",
        version: "Version github1.0"
	hi: "Hey random GitHub user that browsing the code"
      },
      ru: {
        title: "Jut.Su Плюс",
        GoToJutsu: "Перейти на jut.su",
        aboutExtension: "О расширении",
        otherVersions: "Другие версии",
        version: "Версия github1.0"
      },
      uk: {
        title: "Jut.Su Плюс",
        GoToJutsu: "Перейти на jut.su",
        aboutExtension: "Про розширення",
        otherVersions: "Інші версії",
        version: "Версія github1.0"
      }
    };
  
    var langCode = language.toLowerCase().split("-")[0];
  
    var translation = translations[langCode] || translations["en"];
    document.getElementById("title").innerHTML = translation.title;
    document.getElementById("GoToJutsu").innerHTML = translation.GoToJutsu;
    document.getElementById("aboutExtension").innerHTML = translation.aboutExtension;
    document.getElementById("otherVersions").innerHTML = translation.otherVersions;
    document.getElementById("version").innerHTML = translation.version;
  };
  
