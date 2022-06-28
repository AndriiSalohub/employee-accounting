import { AppInfo } from "../../components/AppInfo/AppInfo";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import "./App.css";

export const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
            </div>
        </div>
    );
};
