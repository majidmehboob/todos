import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function DELETE(request) {
  try {
    const data=await request.json();
    console.log(data)
    const result =  await sql`DELETE FROM my_app WHERE id = ${data.id};`
    console.log("::::::::::::::::::::::::",result)
    return NextResponse.json({ data:result,sucess:true}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error,sucess:false }, { status: 500 });
  }
}