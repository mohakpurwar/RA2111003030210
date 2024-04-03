import { user } from '@/util/db.js';
import { NextResponse } from 'next/server';
export function GET(req, res) {
    const data=user;
    return NextResponse.json(data,{status:200});
}