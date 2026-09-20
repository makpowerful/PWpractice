import {Page} from '@playwright/test';
import {LoginPO} from './LoginPO';
import { HomePO } from './HomePO';
import { EventPO } from './EventPO';

export class POManager
{
    LoginPO: LoginPO;
    HomePO: HomePO;
    EventPO: EventPO;
    page : Page;


constructor(page:Page)
{
    this.page = page;
    this.LoginPO = new LoginPO(this.page);
    this.HomePO = new HomePO(this.page);
    this.EventPO = new EventPO(this.page);

}

getLoginPage()
{
    return this.LoginPO;
}

getHomePage()
{
    return this.HomePO;
}

getEventPage()
{
    return this.EventPO;
}

}
