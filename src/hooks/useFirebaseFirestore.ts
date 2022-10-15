import { useCallback, useState } from 'react';
import { addDoc, collection, Firestore, getDocs, getFirestore, query, where, WhereFilterOp } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';

export const useFirebaseFirestore = ( firebaseApp:FirebaseApp ) => {
    
    const [db, ] = useState<Firestore>( getFirestore(firebaseApp) );


    const getCollectionList = useCallback(
      async ( addressCollection:string ) => {
        const querySnapshot = await getDocs(collection(db, addressCollection))
        const arr:any = []; 
        querySnapshot.forEach((doc) => {
          arr.push({
            ...doc.data(),
            id: doc.id
          });
        });
        return arr;
      }, [db])

    const getDocsByCondition = useCallback(
      async ( addressCollection:string, field:string, condition:WhereFilterOp, value:any ) => {
        const arr:any[] = [];
        
        const q = query(collection(db, addressCollection), where(field, condition, value))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          arr.push({
            ...doc.data(),
            id: doc.id
          })
        });
        return arr;
      }
    , [db])

    const getDocById = useCallback(
      async ( addressCollection:string, docId:string ) => {
        const docs:any[] = await getCollectionList(addressCollection);

        const doc = docs.find(doc => doc.id === docId);
        return doc;
      }, [getCollectionList])


    const setDocument = useCallback(
      async ( addressCollection:string, data:any ) => {
        await addDoc( collection(db, addressCollection), data);
      }, [db])

    return {
        getCollectionList,
        setDocument,
        getDocsByCondition,
        getDocById
    }
}

