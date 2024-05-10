'use server';
import {connectToDb} from "@/lib/database";
import {NextResponse} from "next/server";
import RequestChocolate from "@/models/requestchocolate";

export async function createChocolateRequest(formData: FormData) {
    const { fullName, email, location, phone, date, typeOfChocolate, time} = Object.fromEntries(formData);
    try {
        await connectToDb();
        console.log('Probando...');
        const newChocolateRequest = new RequestChocolate({
            fullName,
            email,
            location,
            phone,
            date,
            typeOfChocolate,
            time
        });
        await newChocolateRequest.save();
        console.log('funciono!...');
    } catch (e) {
        return NextResponse.json({ error: "Failed to create a new Show", status: 500 })
    }
}

export async function getChocolates() {
    try {
        await connectToDb();
        return await RequestChocolate.find({});
    } catch (e) {
        return NextResponse.json({ error: "Failed to create a new Show", status: 500 })

    }
}