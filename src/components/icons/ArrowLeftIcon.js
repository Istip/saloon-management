import React from 'react';

const ArrowLeftIcon = (props) => {
  return (
    <svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8796 15.1746C14.0593 15.3843 14.0351 15.6999 13.8254 15.8796C13.6157 16.0593 13.3001 16.0351 13.1204 15.8254L10.1204 12.3254C9.95988 12.1382 9.95988 11.8619 10.1204 11.6746L13.1204 8.17461C13.3001 7.96494 13.6157 7.94066 13.8254 8.12037C14.0351 8.30008 14.0593 8.61573 13.8796 8.8254L11.1585 12L13.8796 15.1746Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default ArrowLeftIcon;
