import toast from "react-hot-toast";
export const loginDeliveryPersonnel = (userdata) => {
  return async (dispatch, getState) => {
    // console.log("User data=> ",userdata)
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    let a = await fetch(process.env.REACT_APP_BACKEND_URL + "/LoginDeliveryPersonnel", option);
    
    let res = await a.json();
    console.log(res);
    if (res.status === "ok") {
      toast.success("New note is save successfully !");
      return true;
    }
    dispatch({ type: "ADD_NOTE", payload: res });
  };
};
