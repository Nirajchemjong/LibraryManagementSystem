import {
  addDoc,
  collection,
  where,
  query,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firebase-config";
import { updateBookAction } from "../book/BookAction";
import { setBurrowHistory } from "./BurrowSlice";

const addNewBurrowAction = (transctionObj) => async (dispatch) => {
  //sending book information to firebase

  try {
    const docRefPending = addDoc(
      collection(db, "burrow_history"),
      transctionObj
    );

    const docRef = await docRefPending;
    toast.promise(docRefPending, {
      pending: "Please Wait ...",
    });

    if (docRef?.id) {
      toast.success("Congratulation! You've burrowed book successfully");
      //   console.log(docRef?.id);

      //   update books available status
      dispatch(
        updateBookAction({
          id: transctionObj.BookID,
          isAvailable: false,
          availableForm: transctionObj.availableForm,
        })
      );
      //   fetch all the burrow book for the user
      dispatch(getAllBurrowHistory(transctionObj.userID));
    }
  } catch (error) {
    // console.log(error.message);
    toast.message(error.message);
  }
};

export const getAllBurrowHistory = (uid) => async (dispatch) => {
  try {
    const q = query(
      collection(db, "burrow_history"),
      where("userID", "==", uid)
    );
    const querySnapShot = await getDocs(q);
    // console.log(querySnapShot);
    let History = [];
    querySnapShot.forEach((doc) => {
      const { id } = doc;
      const data = doc.data();
      //   console.log(data, id);
      History.push({ ...data, id });
    });
    History.length && dispatch(setBurrowHistory(History)); //sending data making array
  } catch (error) {
    toast.error(error.message);
  }
};

//upadating data for burrowHistory

export const updateBurrowHistoryAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      //add new document in to the database
      console.log(id, rest);
      await setDoc(doc(db, "burrow_history", id), rest, { merge: true });
      toast.success("The book has been return successfully ");
      dispatch(getAllBurrowHistory());

      //we also need to updat book table
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

export default addNewBurrowAction;
