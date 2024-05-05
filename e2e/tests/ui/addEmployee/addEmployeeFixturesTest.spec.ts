import { test, expect } from "../../../fixtures/customFixtures";
import { Env } from "../../../frameworkConfig/env";
import { getRandomEmployeeDetails } from "../../../testData/random";

test("Add Employee", async ({ loginPage, homePage, addEmployeePage }) => {
  await loginPage.visit();
  await loginPage.login(Env.USERNAME, Env.PASSWORD);

  await homePage.getLeftMenuComponent().selectLeftMenuItem("PIM");
  await homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");

  await addEmployeePage.addEmployee(getRandomEmployeeDetails());
  await expect(addEmployeePage.successMessage).toBeVisible();
});
