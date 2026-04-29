// Layouts

import Home from "../pages/Home";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";





//Public routes
const publicRoutes = [
    { path: "/", component: Home }, 
   
     { path: "/page1", component: Page1  } , 
     { path: "/page2", component: Page2  } , 
     { path: "/page3", component: Page3  }

   
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
