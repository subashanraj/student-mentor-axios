import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import View from "./components/View";
import StudentTable from "./components/StudentTable";
import TeacherTable from "./components/TeacherTable";
import Create from "./components/Create";
import StudentCreate from "./components/StudentCreate";
import TeacherCreate from "./components/TeacherCreate";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="view" element={<View />}>
                        <Route path="teachertable" element={<TeacherTable />} />
                        <Route path="studenttable" element={<StudentTable />} />
                    </Route>
                    <Route path="create" element={<Create />}>
                        <Route path="create-teacher" element={<TeacherCreate />} />
                        <Route path="create-student" element={<StudentCreate />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;