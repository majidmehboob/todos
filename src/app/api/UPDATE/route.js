import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 export const dynamic = "force-dynamic";

export async function PUT(request) {
  try {
    const data=await request.json()
    const {editdata,edit}= data
  
    const result =await sql`UPDATE todo 
    SET name=${data.edit.name},status=${data.edit.status}
     WHERE id=${data.editdata.id};
     `
    return NextResponse.json({ data:result,sucess:true}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error,sucess:false }, { status: 500 });
  }
}