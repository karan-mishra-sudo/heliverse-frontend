const initialState = {
    DeliveryPersonnel:{

    },
    FoodManager:{

    },
    PantryStaff:{

    }
};
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DELETE_USER":
        return state;
      case "FEEDBACK":
        return state;
      case "GET_ONE_NOTE":
        return state;
      case "SET_CURRENT_NOTE":
        return state;
      case "UPDATE_NOTE":
        return state;
      case "DELETE_NOTE":
        return state;
      default:
        return state;
    }
  };
  
  export default dataReducer;