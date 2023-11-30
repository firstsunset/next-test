'use client';
// import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

import styles from './pagination.module.css';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4].map((page: number) => (
        <div className={styles.pageLink} key={page}>{page}</div>
      ))}
    </div>
  )
};

export default Pagination;