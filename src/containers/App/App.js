import React from "react";

import { AppFilter } from "../../components/AppFilter/AppFilter";
import { AppInfo } from "../../components/AppInfo/AppInfo";
import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { EmployeesAddForm } from "../../components/EmployeesAddForm/EmployeesAddForm";

import "./App.css";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "John C.",
                    salary: 800,
                    increase: true,
                    rise: true,
                },
                {
                    id: 2,
                    name: "Alex M.",
                    salary: 3000,
                    increase: false,
                    rise: false,
                },
                {
                    id: 3,
                    name: "Carl W.",
                    salary: 5000,
                    increase: false,
                    rise: false,
                },
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            id: this.maxId++,
            name,
            salary,
            increase: false,
            rise: false,
        };

        this.setState((prevState) => {
            return {
                data: [...prevState.data, newItem],
            };
        });
    };

    onToggleIncrease = (id) => {
        console.log(id);
    };

    onToggleRise = (id) => {
        console.log(id);
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />

                <EmployeesAddForm addItem={this.addItem} />
            </div>
        );
    }
}
