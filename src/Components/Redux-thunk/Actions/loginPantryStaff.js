import toast from "react-hot-toast";
export const loginPantryStaff = (userdata) => {
  return async (dispatch, getState) => {
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    let a = await fetch(process.env.REACT_APP_BACKEND_URL + "/LoginInnerPantry", option);
    
    let res = await a.json();
    console.log(res);
    if (res.status === "ok") {
      toast.success("New note is save successfully !");
      return true;
    }
    dispatch({ type: "ADD_NOTE", payload: res });
  };
};
