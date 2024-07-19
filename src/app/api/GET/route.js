import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
 
    const result =  await sql`SELECT* FROM my_app_todo;`
    console.log("RESULT___________________________",result)
    return NextResponse.json({ data:result.rows,sucess:true}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error,sucess:false }, { status: 500 });
  }
}