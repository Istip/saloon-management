import { useState, useEffect, useRef } from 'react';
import { projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useAuthContext();

  // Using ref so the side effect won't run into infinite loop
  // ...due the fact that query depencency is a reference type
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFirestore
      .collection(collection)
      .where('uid', '==', user.uid);

    if (query) {
      ref = ref.where(...query);
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // updating state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('Could not fetch the data');
      }
    );

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [collection, query, orderBy]);

  return { documents, error };
};
