import React from "react";
import "./AppFilter.css";

export const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", lable: "Все сотрудникик" },
        { name: "rise", lable: "На повышение" },
        { name: "moreThan1000", lable: "З/П больше чем 1000$" },
    ];

    const buttons = buttonsData.map(({ name, lable }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {lable}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};
