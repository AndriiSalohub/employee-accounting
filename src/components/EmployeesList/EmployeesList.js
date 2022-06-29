import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="John C." salary={800} />
            <EmployeesListItem name="Alex M." salary={3000} />
            <EmployeesListItem name="Carl W." salary={5000} />
        </ul>
    );
};
