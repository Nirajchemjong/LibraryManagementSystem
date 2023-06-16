import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { setBookList, setSelectedBook } from "./BookSlice";

const addNewBookAction = (bookObj) => async (dispatch) => {
  //sending book information to firebase
  try {
    const docRefPending = addDoc(collection(db, "books"), bookObj);

    const docRef = await docRefPending;
    toast.promise(docRefPending, {
      pending: "Please Wait ...",
    });

    if (docRef?.id) {
      toast.success("New book has been added successfully ");
      //   console.log(docRef?.id);
      //   dispatch(getBookAction());
      dispatch(getAllBookAction());
    }
  } catch (error) {
    // console.log(error.message);
    toast.message(error.message);
  }
};

//getAllBookAction is to reterive data from firebase and send them to hook. after this
//lets pull them and display them in booktable Components
export const getAllBookAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "books"));
    const querySnapShot = await getDocs(q);
    // console.log(querySnapShot);
    let book = [];
    querySnapShot.forEach((doc) => {
      const { id } = doc;
      const data = doc.data();
      //   console.log(data, id);
      !data.length && book.push({ ...data, id });
    });
    dispatch(setBookList(book)); //sending data making array
  } catch (error) {
    toast.error(error.message);
  }
};

//sending book data to redux (bookInfo ) --> setSelectedBook
export const getBookAction = (id) => async (dispatch) => {
  try {
    const BookSnapShot = await getDoc(doc(db, "books", id));

    // console.log(BookSnapShot);
    // console.log(BookSnapShot.exists());
    if (BookSnapShot.exists()) {
      //   console.log(BookSnapShot.data());
      const BookData = BookSnapShot.data();
      //   console.log(BookData);
      dispatch(setSelectedBook({ ...BookData, id })); //sending data with id to hooks
      //   toast.message("hook works");
    }

    // const q = query(collection(db, "books"));
    // const querySnapShot = await getDoc(q);
    // let book = [];

    // querySnapShot.forEach((doc) => {
    //   const { id } = doc;
    //   const data = doc.data();
    //   console.log(id, data);
    //   book.push({ ...data, id });ß
    // });
    // dispatch(setBook(book));
  } catch (error) {
    // console.log(error.message);
    toast.error(error.message);
  }
};

export const updateBookAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      //add new document in to the database
      //   console.log(id, rest);
      await setDoc(doc(db, "books", id), rest, { merge: true });
      toast.success("The book has been updated successfully ");
      dispatch(getAllBookAction());
    } catch (error) {
      //   console.log(error.message);
      toast.error(error.message);
    }
  };

export default addNewBookAction;
