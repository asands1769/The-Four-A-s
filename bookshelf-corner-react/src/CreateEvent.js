import React from "react";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

function CreateEvent() {
    const session = useSession(); //user/ when session exist, there is a User
    const supabase = useSupabaseClient(); // talk to supabase
     
    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });
        if(error) {
            alert("Error logging into Google provider with Supabase");
            console.log(error);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    console.log(session);

    return(
        <div className="CreateEvent">
            <div style={{width: "400px", matgin: "30px auto"}}>
                {session ?
                <>
                    <h2>Hello {session.user.email}</h2>
                    <button onClick={() => SignOut()}>Sign Out</button>
                </>
                :
                <>
                    <button onClick={() => googleSignIn()}>Sign In With Google</button>
                </>
                }
            </div>
        </div>
    );

}

export default CreateEvent;