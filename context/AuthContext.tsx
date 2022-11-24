// import React, { createContext, useContext, useEffect, useState } from "react";
// import {
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { isAdmin } from "../utils/db";

// interface UserType {
//   email: string | null;
//   uid: string | null;
//   isAdmin: boolean | null;
// }

// const AuthContext = createContext({});

// export const useAuth = () => useContext<any>(AuthContext);

// export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<UserType>({ email: null, uid: null , isAdmin: false});
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUser({
//           email: user.email,
//           uid: user.uid,
//           isAdmin: await isAdmin(user.uid),
//         });
//       } else {
//         setUser({ email: null, uid: null, isAdmin: false });
//       }
//     });
//     setLoading(false);

//     return () => unsubscribe();
//   }, []);

// //   const signUp = (email: string, password: string) => {
// //     return createUserWithEmailAndPassword(auth, email, password);
// //   };

//   const signin = (email: string, password: string) => {
//     return signInWithEmailAndPassword(auth, `${email}@whiteraven.one`, password);
//   };

//   const logOut = async () => {
//     setUser({ email: null, uid: null, isAdmin: false });
//     await signOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, signin, logOut }}>
//       {loading ? null : children}
//     </AuthContext.Provider>
//   );
// };
export {}