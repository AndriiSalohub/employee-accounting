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
        // this.setState(({ data }) => {
        //     // const index = data.findIndex((elem) => elem.id === id);
        //     // const old = data[index];
        //     // const newItem = {
        //     //     ...old,
        //     //     increase: !old.increase,
        //     // };
        //     // const newArr = [
        //     //     ...data.slice(0, index),
        //     //     newItem,
        //     //     ...data.slice(index + 1),
        //     // ];
        //     // return {
        //     //     data: newArr,
        //     // };
        // });

        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        increase: !item.increase,
                    };
                }
                return item;
            }),
        }));
    };

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise };
                }
                return item;
            }),
        }));
    };

    render() {
        const amountOfWorkers = this.state.data.length;
        const increased = this.state.data.filter(
            (item) => item.increase
        ).length;
        return (
            <div className="app">
                <AppInfo
                    amountOfWorkers={amountOfWorkers}
                    increased={increased}
                />

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
