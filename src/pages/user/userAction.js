import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firebase-config";
import { setAdmin } from "./userSlice";

export const getUserAction = (uid) => async (dispatch) => {
  try {
    //get user information from user table

    const userSnap = await getDoc(doc(db, "users", uid));
    // console.log(userSnap, uid);
    if (userSnap.exists()) {
      const user = userSnap.data();
      // console.log(user);
      dispatch(setAdmin({ ...user, uid }));
    }

    //add user in the redux store
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
