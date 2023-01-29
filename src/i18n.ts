import i18next from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    loginPage: {
      greeting: "Welcome Back!",
      button: "login",
      link: "You don`t have account yet? Click here!",
      password: "Password",
    },
    registerPage: {
      greeting: "Join us!",
      button: "REGISTER",
      link: "Already have account? Click here!",
      firstName: "First Name",
      lastName: "Last Name",
      password: "Password",
      confirmPassword: "Confirm Password",
      location: "location",
      job: "job",
    },
    userCard: {
      followsInfo: "follows",
      viewsInfo: "Profile views",
      likesInfo: "Likes under own Posts",
    },
    navbar: {
      themeLight: "Light mode",
      themeDark: "Dark mode",
      settings: "Settings",
      logout: "Logout",
      scroll: "Scroll to top",
      home: "Home board",
      postsColumn: "Posts",
      profileColumn: "Profile",
      followsColumn: "Follows",
      mobileTheme: "Change theme",
      changeLanguage: "Language",
    },
    dropzone: {
      beforeFile: "Drop your image or click to choose",
      afterFile: "Image chosen!",
      files: "Files:",
      deleteImage: "Delete image",
      button: "SEND",
      inputPlaceholder: "Write your post here...",
    },
    posts: {
      buttonLike: "Like post",
      buttonUnlike: "Dislike post",
      buttonFollow: "Follow creator",
      buttonUnfollow: "Unfollow creator",
      comments: "comments",
      likes: "likes",
      comment: "Write your comment here...",
      commentButton: "SEND",
    },
    follows: {
      followList: "Follow list",
      follow: "Follow",
      unfollow: "Unfollow",
    },
    imagesWithText: {
      noMore: "No more posts here!",
      error: "Something went wrong!",
      noPosts: "This user don`t have any posts yet",
    },
  },

  pl: {
    loginPage: {
      greeting: "Miło znów cię widzieć!",
      button: "ZALOGUJ SIĘ",
      link: "Nie masz jeszcze konta? Kliknij tutaj!",
      password: "Hasło",
    },
    registerPage: {
      greeting: "Dołącz do nas!",
      button: "ZAREJESTRUJ SIĘ",
      link: "Masz już konto? Kliknij tutaj!",
      firstName: "Imię",
      lastName: "Nazwisko",
      password: "Hasło",
      confirmPassword: "Potwierdź hasło",
      location: "Lokalizacja",
      job: "Praca",
    },
    userCard: {
      followsInfo: "Obserwowanych",
      viewsInfo: "Wyświetlenia profilu",
      likesInfo: "Ilość polubień pod postami",
    },
    navbar: {
      themeLight: "Tryb dzienny",
      themeDark: "Tryb nocny",
      settings: "Opcje",
      logout: "Wyloguj",
      scroll: "Przewiń do góry",
      home: "Tablica",
      postsColumn: "Posty",
      profileColumn: "Profil",
      followsColumn: "Obserwowani",
      mobileTheme: "Zmień tryb",
      changeLanguage: "Język",
    },
    dropzone: {
      beforeFile: "Przenieś zdjęcie tutaj lub kliknij aby wybrać!",
      afterFile: "Zdjęcie wybrane!",
      files: "Plik:",
      deleteImage: "Usuń zdjęcie",
      button: "WYŚLIJ",
      inputPlaceholder: "Napisz post tutaj...",
    },
    posts: {
      buttonLike: "Polub",
      buttonUnlike: "Usuń polubienie",
      buttonFollow: "Obserwuj twórcę",
      buttonUnfollow: "Usuń obserwację",
      comments: "komentarze",
      likes: "polubień",
      comment: "Napisz swój komentarz tutaj",
      commentButton: "WYŚLIJ",
    },
    follows: {
      followList: "Lista obserwowanych",
      follow: "Obserwuj",
      unfollow: "Usuń obserwację",
    },
    imagesWithText: {
      noMore: "Nie ma tu już więcej postów!",
      error: "Coś poszło nie tak!",
      noPosts: "Ten użytkownik nie ma jeszcze żadnych postów",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
});
