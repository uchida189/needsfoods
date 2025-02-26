'use client';
import React from 'react';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

// ページネーション
export default function Pagination(props: PaginationProps) {
  const pages = Array.from({ length: props.pageCount }, (_, i) => i + 1);
  return (
    <div className="mx-auto m-2 flex justify-center items-center space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => props.onPageChange(page)}
          className={`w-2 h-2 rounded-full ${
            page === props.currentPage ? ' bg-main-3' : ' border border-sub'
          }`}
        />
      ))}
    </div>
  );
}