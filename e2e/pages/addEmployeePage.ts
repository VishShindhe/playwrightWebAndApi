import { Locator, Page } from "@playwright/test";
import { EmployeeDetails } from "../testData/orangeHrmInterfaces";

class AddEmployeePage {
    constructor(private readonly page: Page){
    }

    private readonly firstNameTextBox: Locator = this.page.getByRole("textbox", {name: "First Name"});
    private readonly lastNameTextBox: Locator = this.page.getByRole("textbox", {name: "Last Name"});
    private readonly middleNameTextBox: Locator = this.page.getByRole("textbox", {name: "Middle Name"});

    private readonly idTextBox: Locator = this.page
        .locator("form")
        .getByRole("textbox")
        .nth(4);
    
    private readonly saveButton: Locator = this.page.getByRole("button", {name: "Save"});
    public readonly successMessage: Locator = this.page.getByText(/Successfully Saved/i);

    async addEmployee(employeeDetails: EmployeeDetails) {
        await this.firstNameTextBox.fill(employeeDetails.firstName);
        await this.middleNameTextBox.fill(employeeDetails.middleName);
        await this.lastNameTextBox.fill(employeeDetails.lastName);
        await this.idTextBox.fill(employeeDetails.employeeId);
        await this.saveButton.click();
    }
}

export default AddEmployeePage;