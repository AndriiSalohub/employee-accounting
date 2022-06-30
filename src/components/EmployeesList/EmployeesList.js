import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = ({ data, onDelete }) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ id, ...itemProps }) => {
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                    />
                );
            })}
        </ul>
    );
};
