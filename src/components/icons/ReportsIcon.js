import React from 'react';

const ReportsIcon = (props) => {
  return (
    <svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8V16H3.5C3.22386 16 3 16.2239 3 16.5C3 16.7761 3.22386 17 3.5 17H4V18.5C4 19.8807 5.11929 21 6.5 21H17.5C18.8807 21 20 19.8807 20 18.5V5.5C20 4.11929 18.8807 3 17.5 3H6.5C5.11929 3 4 4.11929 4 5.5V7H3.5C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8H4ZM5.5 16H5V8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H5V5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V17H5.5C5.77614 17 6 16.7761 6 16.5C6 16.2239 5.77614 16 5.5 16ZM8.5 6H15.5C16.3284 6 17 6.67157 17 7.5V9.5C17 10.3284 16.3284 11 15.5 11H8.5C7.67157 11 7 10.3284 7 9.5V7.5C7 6.67157 7.67157 6 8.5 6ZM8 7.5C8 7.22386 8.22386 7 8.5 7H15.5C15.7761 7 16 7.22386 16 7.5V9.5C16 9.77614 15.7761 10 15.5 10H8.5C8.22386 10 8 9.77614 8 9.5V7.5Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default ReportsIcon;
