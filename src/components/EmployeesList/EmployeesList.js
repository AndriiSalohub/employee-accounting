import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = ({ data }) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ name, salary }) => (
                <EmployeesListItem name={name} salary={salary} />
            ))}
        </ul>
    );
};
