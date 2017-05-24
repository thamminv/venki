import * as ng from "angular";

import * as userCmpt from "./user/components/index";
import * as userSvcs from "./user/index";

let moduleName = "demo";

ng.module(moduleName, [])
 
    .service(userSvcs.UserService.serviceName, userSvcs.UserService)

    .component(userCmpt.UserComponent.controller.componentName, userCmpt.UserComponent)
    

let appRootEl = document.querySelector("#app-container") || document.body;

ng.bootstrap(appRootEl, [moduleName]);