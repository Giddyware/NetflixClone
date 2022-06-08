import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { db } from "../lib/firebase.prod";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, target)).then(
      (querySnapshot) => {
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        // });
        const allContent = querySnapshot.docs.map((contentObject) => ({
          ...contentObject.data(),
          docId: contentObject.id,
        }));
        // return null;
        setContent(allContent);
      }
    );
  }, []);
  return { [target]: content };
}
