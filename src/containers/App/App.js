import { AppFilter } from "../../components/AppFilter/AppFilter";
import { AppInfo } from "../../components/AppInfo/AppInfo";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { EmployeesAddForm } from "../../components/EmployeesAddForm/EmployeesAddForm";
import "./App.css";

export const App = () => {
    const data = [
        { id: 1, name: "John C.", salary: 800, increase: true },
        { id: 2, name: "Alex M.", salary: 3000, increase: false },
        { id: 3, name: "Carl W.", salary: 5000, increase: false },
    ];
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />

            <EmployeesAddForm />
        </div>
    );
};
