import { IUserService, UserService } from "../services/index";

import template from "./user.component.html!text";

class controller {
    public static readonly componentName: string = "user";
    public static readonly $inject: Array<string> = [UserService.serviceName];

    public msg: any;
    id: number = 1;
    constructor(private userService: IUserService) { }

    public $onInit() {
        let self = this;
        // make request to api to get the user
        return this.userService.getUser(this.id)
            .then(response => {
                if (response) {
                    if (document.cookie != undefined) {
                        if (document.cookie.indexOf("sample=") >= 0) {
                            self.msg = "Cookie exists!";
                        }
                        else {
                            // set a new cookie
                            let d = new Date();
                            d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
                            let expires = "expires=" + d.toUTCString();
                            document.cookie = "sample=true;" + expires + ";path=/";
                            self.msg = "Cookie doesn't exist. Created a new cookie!. Redirecting to www.moodys.com";
                            setTimeout(() => {
                            window["location"] = 'https://www.moodys.com';
                            }, 5000);
                        }
                    } else {
                        alert("Your browser doesn't support cookie");
                    }
                }
            });
    }
}

export let UserComponent = { controller, template };