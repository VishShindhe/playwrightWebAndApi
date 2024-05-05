import { test, expect } from "@playwright/test";
import { Env } from "../../../frameworkConfig/env";
import LoginPage from "../../../pages/loginPage";
import HomePage from "../../../pages/homePage";
import AddEmployeePage from "../../../pages/addEmployeePage";
import { getRandomEmployeeDetails } from "../../../testData/random";

test("Add Employee", async ({ page }) => {
  await page.goto(Env.BASE_URL);
  const loginPage: LoginPage = new LoginPage(page);
  const homePage: HomePage = await loginPage.login(Env.USERNAME, Env.PASSWORD);

  //const homePage:HomePage = new HomePage(page);
  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  const addEmployeePage: AddEmployeePage = new AddEmployeePage(page);
  await addEmployeePage.addEmployee(getRandomEmployeeDetails());

  await expect(addEmployeePage.successMessage).toBeVisible();
});
