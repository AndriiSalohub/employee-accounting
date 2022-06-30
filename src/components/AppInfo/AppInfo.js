import "./AppInfo.css";

export const AppInfo = ({ amountOfWorkers, increased }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании X</h1>
            <h2>Общее число сотрудников: {amountOfWorkers}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
};
