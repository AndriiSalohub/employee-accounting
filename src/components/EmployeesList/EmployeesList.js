import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ id, ...itemProps }) => {
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleProp={(e) =>
                            onToggleProp(
                                id,
                                e.currentTarget.getAttribute("data-toggle")
                            )
                        }
                    />
                );
            })}
        </ul>
    );
};
