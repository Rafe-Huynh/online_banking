'use server'

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite"
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        
    } catch (error) {
        console.error('Error', error)
    }
}
export const signUp = async (userData: SignUpParams) => {
    try {
        // create user account
        const {email, password, firstName, lastName} = userData
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`)
        const session = await account.createEmailPasswordSession(email, password)
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error) {
        console.error('Error', error)
    }
}
export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const result = await account.get();
    } catch (error) {
        console.log(error)
        return null;
    }
}