import { Locator, Page } from "@playwright/test";
import HomePage from "./homePage";
import { Env } from "../frameworkConfig/env";

class LoginPage {
  constructor(private readonly page: Page) {}

  private readonly userNameTextBox: Locator =
    this.page.getByPlaceholder("Username");
  private readonly passwordTextBox: Locator =
    this.page.getByPlaceholder("Password");
  private readonly loginButton: Locator = this.page.getByRole("button", {
    name: "Login",
  });

  async visit() {
    await this.page.goto(Env.BASE_URL);
  }

  async login(username: string, password: string): Promise<HomePage> {
    await this.userNameTextBox.fill(username);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
    return new HomePage(this.page);
  }
}

export default LoginPage;
