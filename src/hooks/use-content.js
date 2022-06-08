import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { db } from "../lib/firebase.prod";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    // const docRef = doc(db, "cities", "SF");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }

    const querySnapshot = getDocs(collection(db, target)).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
        return null;
      }
    );
    //  querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // setContent(allContent);
    // .catch((error)=>{
    //   console.log(error.message);
    // })
    // querySnapshot.map((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  }, []);
  return { [target]: content };
}
