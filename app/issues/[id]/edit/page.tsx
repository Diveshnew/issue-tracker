import React from 'react';
import IssueForm from '../../_components/IssueForm';
import { prisma } from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>; // Note: params is now a Promise
}

const EditIssuePage = async ({ params }: Props) => {
  // Await the dynamic parameters before using them.
  const { id } = await params;

  // Await the database call.
  const issue = await prisma.issue.findUnique({
    where: { id: Number(id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
