import { EmployeesListItem } from "../EmployeesListItem/EmployeesListItem";
import "./EmployeesList.css";

export const EmployeesList = ({
    data,
    onDelete,
    onToggleIncrease,
    onToggleRise,
}) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ id, ...itemProps }) => {
                return (
                    <EmployeesListItem
                        key={id}
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleIncrease={() => onToggleIncrease(id)}
                        onToggleRise={() => onToggleRise(id)}
                    />
                );
            })}
        </ul>
    );
};
