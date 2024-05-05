import { Page } from "@playwright/test";

class LeftMenuComponent {
    constructor(private readonly page: Page){
    }

    private readonly menu =(menuItem: string) => this.page.getByRole("link", {name: menuItem});

    async selectLeftMenuItem(menuItem: string){
        await this.menu(menuItem).click();
    }
}

export default LeftMenuComponent;