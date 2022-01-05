import React,{Fragment,useState} from "react";
import Form from "./components/Form/Form";
import Section from "./components/Section/Section";
import "./App.css";
const App = (props) =>{
	const [showTasks,setshowTasks] = useState(false);
	const [userTasks,SetuserTasks] = useState([]);
	const adduserTasksHandler = (enteruserTasks) =>{
		SetuserTasks((preventUserTasks)=>{
			return [...preventUserTasks, {tasks: enteruserTasks,id: Math.random().toString()}];
		})
	};
	const showCreatTasks = () =>{
		setshowTasks(true);
	};
	const hideCreatTasks = (event) =>{
		setshowTasks(false);
	};
	return (
	<Fragment>
		<header>
        	<h1>All Tasks</h1>
    	</header>
		{showTasks && <Form onAddTasks={adduserTasksHandler} onHide={hideCreatTasks} />}
		<Section users={userTasks} onShow={showCreatTasks}/>
	</Fragment>
	)
};
export default App;