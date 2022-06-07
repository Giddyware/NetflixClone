import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [context, setContext] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    collection;

    return () => {
      second;
    };
  }, []);
}
