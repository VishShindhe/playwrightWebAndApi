
import { test, expect } from "../../../fixtures/customFixtures";
import { Env } from "../../../frameworkConfig/env";
import LoginPage from "../../../pages/loginPage";
import HomePage from "../../../pages/homePage";
import AddEmployeePage from "../../../pages/addEmployeePage";
import { getRandomEmployeeDetails } from "../../../testData/random";

test("Add Employee", async ({loginPage, homePage, addEmployeePage }) => {

  await loginPage.visit();
  await loginPage.login(Env.USERNAME, Env.PASSWORD);

  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  await addEmployeePage.addEmployee(getRandomEmployeeDetails());
  await expect(addEmployeePage.successMessage).toBeVisible();
  
});