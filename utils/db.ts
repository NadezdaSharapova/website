
// import {db, auth} from "./firebase";
// import Firestore, { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy } from "firebase/firestore";
// import { createUser } from "./auth";

// const publics = 'public-posts';
// const privates = 'private-posts';
// const publicPostsRef = collection(db, "public-posts");
// const privatePostsRef = collection(db, "private-posts");

// const posts = 'posts';
// const cats = 'categories';
// const users = 'users';
// const postsRef = collection(db, posts);
// const catsRef = collection(db, cats);
// const usersRef = collection(db, users);

// export async function getAllPosts() {
//     const ref = query(postsRef, orderBy('time', 'desc'));
//     const querySnapshot = await getDocs(ref);
//     return querySnapshot;
// }

// export async function addUser(username:string, password:string){
//     const uid = createUser(`${username}@whiteraven.one`, password);
//     const data = {
//         username: username,
//         uid: uid,
//         admin: false,
//     };
//     const docRef = await addDoc(catsRef, data);
// }

// export async function isAdmin(uid:string){
//     const ref = query(usersRef, where('uid', '==', uid), where('admin', '==', true));
//     const snapshot = await getDocs(ref);
//     if(snapshot.docs.length != 0)
//         return true;
//     return false;
// }

// export async function getAllUsers(){
//     const snapshot = getDocs(usersRef);
//     return (await snapshot);
// }

// export async function getCatsOfUser(uid:string){
//     const ref = query(catsRef, where('users', 'array-contains', uid));
//     const snapshot = getDocs(ref);
//     return (await snapshot);
// }

// export async function getPostsByCat(cat:string){
//     const ref = query(postsRef, where('categories', 'array-contains', cat));
//     const snapshot = getDocs(ref);
//     return (await snapshot);
// }

// export async function getPostByID(id:string, uid:string){
//     const tempRef = doc(db, posts, id);
//     const snapshot = await getDoc(tempRef);
//     const users:string[] = snapshot.get('users');
//     if(users){
//         if(users.includes('public') || users.includes(uid)){
//             return snapshot;
//         }
//     }
    
//     const fuckRef = doc(db, posts, 'FuckOff');
//     const fuckShot = await getDoc(fuckRef);
//     return fuckShot;
// }

// export async function getPostByIDAdmin(id:string){
//     const ref = doc(db, posts, id);
//     const snapshot = getDoc(ref);
//     return (await snapshot);
// }

// export async function getPostsByUser(uid:string){
//     const ref = query(postsRef, where('users', 'array-contains-any', [uid, "public"]), orderBy('time', 'desc'));
//     const snapshot = await getDocs(ref);
//     return snapshot;
// }

// export async function createNewCat(name:string, users:string[]){
//     const data = {
//         name: name,
//         users: users
//     };
//     const docRef = await addDoc(catsRef, data);
// }

// export async function editCollection(id:string, name:string, users:string[]){
//    const docRef = doc(db, cats, id);
//    const data = {
//     name: name, 
//     users: users,
//    };
//    await updateDoc(docRef, data); 
// }

// export async function createNewPost(title:string, text:string, cats:string[], users:string[]){
//     const data = {
//         title: title,
//         text: text,
//         categories: cats,
//         users: users,
//         time: new Date().getTime(),
//     };
//     const docRef = await addDoc(postsRef, data);
// }

// export async function editPost(id:string, cats:string[], title:string, text:string, users:string[]){
//     const docRef = doc(db, posts, id);
//     const data = {
//         title: title,
//         text: text,
//         categories: cats,
//         users: users,
//     };
//     await updateDoc(docRef, data);
// }

// export async function deletePost(id:string){
//     const docRef = doc(db, posts, id);
//     await deleteDoc(docRef);
// }

export {}
