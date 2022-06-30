import React from "react";
import "./AppFilter.css";

export class AppFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        };
    }

    onChangeFilter = (e) => {
        this.setState({ filter: e.currentTarget.getAttribute("data-toggle") });
        this.props.onChangeFilter(e.currentTarget.getAttribute("data-toggle"));
    };

    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type="button"
                    data-toggle=""
                    onClick={this.onChangeFilter}
                >
                    Все сотрудники
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-toggle="rise"
                    onClick={this.onChangeFilter}
                >
                    На повышение
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-toggle="moreThan1000"
                    onClick={this.onChangeFilter}
                >
                    Зп больше 1000$
                </button>
            </div>
        );
    }
}
