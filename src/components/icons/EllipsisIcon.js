import React from 'react';

const EllipsisIcon = (props) => {
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
        d="M12.5 4H11.5C10.6716 4 10 4.67157 10 5.5V6.5C10 7.32843 10.6716 8 11.5 8H12.5C13.3284 8 14 7.32843 14 6.5V5.5C14 4.67157 13.3284 4 12.5 4ZM11 5.5C11 5.22386 11.2239 5 11.5 5H12.5C12.7761 5 13 5.22386 13 5.5V6.5C13 6.77614 12.7761 7 12.5 7H11.5C11.2239 7 11 6.77614 11 6.5V5.5ZM11.5 11C11.2239 11 11 11.2239 11 11.5V12.5C11 12.7761 11.2239 13 11.5 13H12.5C12.7761 13 13 12.7761 13 12.5V11.5C13 11.2239 12.7761 11 12.5 11H11.5ZM12.5 10H11.5C10.6716 10 10 10.6716 10 11.5V12.5C10 13.3284 10.6716 14 11.5 14H12.5C13.3284 14 14 13.3284 14 12.5V11.5C14 10.6716 13.3284 10 12.5 10ZM11.5 17C11.2239 17 11 17.2239 11 17.5V18.5C11 18.7761 11.2239 19 11.5 19H12.5C12.7761 19 13 18.7761 13 18.5V17.5C13 17.2239 12.7761 17 12.5 17H11.5ZM12.5 16H11.5C10.6716 16 10 16.6716 10 17.5V18.5C10 19.3284 10.6716 20 11.5 20H12.5C13.3284 20 14 19.3284 14 18.5V17.5C14 16.6716 13.3284 16 12.5 16Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default EllipsisIcon;