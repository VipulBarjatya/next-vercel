import DashboardSkeleton from '@/app/ui/skeletons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
};

export default function Loading() {
  return <DashboardSkeleton />;
}
