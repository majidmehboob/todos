import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const data = await request.json();
     const check=await sql`SELECT * FROM todo WHERE name= ${data.name}`
    //  if(check.fields.length>0){
    //   return NextResponse.json({ data:"This is already Present",sucess:false}, { status: 200 });
    //  }
     const result= await sql`INSERT INTO  todo (name,status) VALUES (${data},${false});`;
    return NextResponse.json({ data:result,sucess:true}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error,sucess:false }, { status: 500 });
  }
}