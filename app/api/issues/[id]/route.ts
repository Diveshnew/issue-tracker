import { issueSchema } from '@/app/validationSchemas';
import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // Note: params is now a Promise
) {
  const resolvedParams = await params; // Await the params before using it

  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(resolvedParams.id) }, // Use resolvedParams.id
  });
  if (!issue)
    return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
