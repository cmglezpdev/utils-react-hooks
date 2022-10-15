import { useCallback, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseApp } from 'firebase/app';

export const useFirebaseStorage = (firebaseApp:FirebaseApp) => {
    const [db, ] = useState( getStorage( firebaseApp ) );

    const getUrlFile = useCallback( async ( address:string ) => {
        const urlFile = await getDownloadURL(ref(db, address));
        return urlFile;
    }, [db]);

    const uploadFile = useCallback( async (address:string, file:File, metadata:Object) => {
        const storageRef = ref(db, address);
        return await uploadBytes(storageRef, file, metadata );    
    }, [db])

    return {
        getUrlFile,
        uploadFile,
    }
}
