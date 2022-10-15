import { useState, useCallback } from 'react'
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, sendEmailVerification, updateEmail, updatePassword, updateProfile, User } from 'firebase/auth';
import { useFirebaseStorage } from './../';
import { FirebaseApp } from 'firebase/app';

export const useFirebaseProfile = (firebaseApp:FirebaseApp) => {
    const tempUser = getAuth(firebaseApp).currentUser; 
    if(  tempUser === null ) 
        throw new Error("No exist an user logged")

    const [user, ] = useState<User>( tempUser );
    const { getUrlFile } = useFirebaseStorage(firebaseApp);

    const updateUserAvatar = useCallback( async (addressAvatar:string, user:User) => {
        const url = await getUrlFile(addressAvatar);
        await updateProfile(user, {photoURL: url});
    }, [getUrlFile])

    const updateUserName = useCallback( async (name:string) => {
        await updateProfile( user, { displayName: name } );
    }, [user]);

    const updateUserEmail = useCallback( async (email:string) => {
        await updateEmail(user, email);
    }, [user]);

    const updateUserPassword = useCallback( async (password:string) => {
        await updatePassword(user, password);
    }, [user]);

    const reauthentication = useCallback( async (password:string) => {
        const credencials = EmailAuthProvider.credential(user.email || '', password);
        return await reauthenticateWithCredential(user, credencials);
    }, [user]);

    const sendEmailForVerification = useCallback( async () => {
        await sendEmailVerification(user);
    }, [user]);

    return {
        updateUserAvatar,
        updateUserName,
        updateUserEmail,
        updateUserPassword,
        reauthentication,
        sendEmailForVerification,
    }
}
