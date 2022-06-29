import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = ({ data }) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ id, ...itemProps }) => {
                return <EmployeesListItem key={id} {...itemProps} />;
            })}
        </ul>
    );
};
