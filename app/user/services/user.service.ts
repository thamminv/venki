//import { User } from "../models/index";

//import { INotificationService, NotificationService } from "../../shared/index";

export interface IUserService {
    getUser(userid: any): ng.IPromise<any>;
}

export class UserService implements IUserService {
    public static readonly serviceName: string = "UserService";

    private userList = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'David' },
        { id: 4, name: 'Gayle' }
    ]
    //public static readonly $inject: Array<string> = ["$timeout", NotificationService.serviceName];

    constructor(
        private $timeout: ng.ITimeoutService,
        //private notificationService: INotificationService
    ) {}

    public getUser(userid: number): ng.IPromise<any> {
        return this.$timeout(() => this.simulateGet(userid), 1000);
    }

    private simulateGet(userid: number): any {
        let respnose:any = false;
        for(let i = 0;i< this.userList.length;i++){
            if(this.userList[i].id == userid){
                respnose = true;
                break;
            }
        }
        return respnose;
    }
}