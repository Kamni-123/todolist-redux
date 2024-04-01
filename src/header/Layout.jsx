import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ToDoList from "../components/ToDoList";

export default function Layout(){
    return(
        <div className=" p-4 flex flex-col min-h-screen">
            <Header/>
            <ToDoList />
            <Outlet/>
        </div>
    )
}