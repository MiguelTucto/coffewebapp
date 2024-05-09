'use server';

import {connectToDb} from "@/lib/database";

export async function createChocolateRequest(formData: FormData) {
    console.log('This is the request: ', formData);
    await connectToDb();
}