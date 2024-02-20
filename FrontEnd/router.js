import { Router } from "@vaadin/router";

export function initRouter() {
  const router = new Router(document.querySelector("#outlet"));

  router.setRoutes([
    {
      path: "/",
      component: "first-page",
      action: () => import("./Pages/FirstPage/FirstPage")
    },
    {
      path: "/home",
      component: "home-page", 
      //action: () => import("./Pages/homePage/homePage") 
      action: (context, commands) => {
        const userHasAccess = checkUserAccess(); // replace this with your condition

        // If the user doesn't have access, redirect them to another page
        if (!userHasAccess) {
          return commands.redirect('/'); // or another appropriate path
        }
        // Load the profile page component and pass the context paramete
        return import("./Pages/homePage/homePage").then((module) => {
          const homePageComponent = new module.HomePage();
          return homePageComponent;
        });
      }
    },
    {
      path: "/myEvents",
      component: "my-events", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        const userHasAccess = checkUserAccess(); // replace this with your condition

        // If the user doesn't have access, redirect them to another page
        if (userHasAccess !== "user") {
          return commands.redirect('/'); // or another appropriate path
        }
        // Load the profile page component and pass the context parameter
        return import("./Pages/myEvents/myEvents").then((module) => {
          const eventPageComponent = new module.MyEventsPage();
          return eventPageComponent;
        });
      }
    },
    {
      path: "/enterpriseLoginPage",
      component: "enterprise-page", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        
        // Load the profile page component and pass the context parameter
        return import("./Pages/enterpriseLoginPage/enterprisePage").then((module) => {
          const enterprisePageComponent = new module.EnterprisePage();
          return enterprisePageComponent;
        });
      }
    }, 
    {
      path: "/enterpriseHome",
      component: "enterprise-home", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        const userHasAccess = checkUserAccess(); // replace this with your condition

        // If the user doesn't have access, redirect them to another page
        if (!userHasAccess) {
          return commands.redirect('/'); // or another appropriate path
        }
        // Load the profile page component and pass the context parameter
        return import("./Pages/enterpriseHome/enterpriseHome").then((module) => {
          const enterpriseHomeComponent = new module.enterpriseHome();
          return enterpriseHomeComponent;
        });
      }
    }, 
    {
      path: "/createjobposting",
      component: "createjob-page", 
      //action: () => import("./Pages/myEvents/myEvents") 
      action: (context, commands) => {
        const userHasAccess = checkUserAccess(); // replace this with your condition

        // If the user doesn't have access, redirect them to another page
        if (userHasAccess !== "enterprise") {
          return commands.redirect('/'); // or another appropriate path
        }
        // Load the profile page component and pass the context parameter
        return import("./Pages/createJobPage/create-job").then((module) => {
          const createJobPageComponent = new module.CreateJob();
          return createJobPageComponent;
        });
      }
    },
    {
      path: "/profile", // Use a parameter to identify the user
      component: "profile-page", 
      action: (context, commands) => {
        const userHasAccess = checkUserAccess(); // replace this with your condition

        // If the user doesn't have access, redirect them to another page
        if (!userHasAccess) {
          return commands.redirect('/'); // or another appropriate path
        }
        // Load the profile page component and pass the context parameter
        return import("./Pages/profile/profile").then((module) => {
          const userSelected = sessionStorage.getItem('searchedUser');
          const profileComponent = new module.ProfilePage();
          profileComponent.user = userSelected;
          return profileComponent;
        });
      }
    },
    {
      path: "/about", // Use a parameter to identify the user
      component: "about-page", 
      action: () => import("./Pages/about/aboutPage")
    },
    {
      path: "/privacy", // Use a parameter to identify the user
      component: "privacy-page", 
      action: () => import("./Pages/privacy/privacy")
    },
    {
      path: "/applicantsPage",
      component: "applicants-page",
      action: () => import("./Pages/applicantsPage/applicantsPage")
    }
  ]);
}

function checkUserAccess() {
  const token = sessionStorage.getItem('role'); //maybe change to local storage
  if (!token) {
    return null;
  }
  if (token === "user") {
    return "user"
  } else if (token === "enterprise") {
    return "enterprise"
  } else {
    return null;
  }
}

window.addEventListener("load", () => {
    initRouter();
  });