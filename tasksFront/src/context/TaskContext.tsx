import { createContext } from "react";
import TaskList from "../components/TaskList";

const TaskContext = createContext({
        tasks: [],
})

interface Props {
    children: React.ReactNode
}

export const TaskProvider: React.FC<Props> = ({children}) => {
    return(
<TaskContext.Provider value= {{
    tasks,
}}>
    {children}
    </TaskContext.Provider>
    )
}