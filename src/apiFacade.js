import utils from "./utils";
let URL = "http://localhost:5000/tasks";
//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing



function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.
  function getTasks(callback = null) {
    // Change me to do something with data
    utils.fetchAny(URL,callback);
  }

  function editTask(task, callback = null) {
   //Complete me. A smart version will handle both Add and Edit, but focus on Add (POST) only first
    utils.fetchAny(URL + "/" + task.id, callback, "PUT", task);
  }

  function deleteTask(id, callback = () => {}) {
    //Complete me
    utils.fetchAny(URL + "/" + id,callback, "DELETE");
  }

  function addTask(id, callback) {
    //Complete me
  }
  
  return {
    getTasks,
    editTask,
    deleteTask,
    addTask
  };
}
const returnValue = apiFacade();
export default returnValue;
