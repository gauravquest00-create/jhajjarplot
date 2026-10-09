'use client';

import React from 'react';
import EnquiryForm from '@/components/EnquiryForm';

interface LeadFormProps {
  defaultProject?: string;
  sourcePage?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function LeadForm({
  defaultProject,
  sourcePage,
  title,
  subtitle,
  className,
}: LeadFormProps) {
  return (
    <EnquiryForm
      project={defaultProject}
      sourcePage={sourcePage}
      title={title}
      subtitle={subtitle}
      className={className}
    />
  );
}
