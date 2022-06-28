import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
};
