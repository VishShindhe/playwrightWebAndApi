import { Page } from "@playwright/test";

class TopMenuComponent {
    constructor(private readonly page: Page) {
    }

    private readonly topMenu = (menuItem: string) => this.page.getByRole("link",{name: menuItem});

    async selectTopMenuItem(menuItem: string) {
        await this.topMenu(menuItem).click();
    }


}

export default TopMenuComponent;