import React from 'react';

const ViewAllIcon = (props) => {
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
        d="M17 3H18.5C19.8807 3 21 4.11929 21 5.5V18.5074C21 19.8881 19.8807 21.0074 18.5 21.0074H5.5C4.11929 21.0074 3 19.8881 3 18.5074V5.5C3 4.11929 4.11929 3 5.5 3H7V2.5C7 2.22386 7.22386 2 7.5 2C7.77614 2 8 2.22386 8 2.5V3H16V2.5C16 2.22386 16.2239 2 16.5 2C16.7761 2 17 2.22386 17 2.5V3ZM8 4H16V4.5C16 4.77614 16.2239 5 16.5 5C16.7761 5 17 4.77614 17 4.5V4H18.5C19.3284 4 20 4.67157 20 5.5V8H4V5.5C4 4.67157 4.67157 4 5.5 4H7V4.5C7 4.77614 7.22386 5 7.5 5C7.77614 5 8 4.77614 8 4.5V4ZM17.5 19C18.3284 19 19 18.3284 19 17.5V10.5C19 10.2239 18.7761 10 18.5 10H5.5C5.22386 10 5 10.2239 5 10.5V17.5C5 18.3284 5.67157 19 6.5 19H17.5ZM6 17H18V17.5C18 17.7761 17.7761 18 17.5 18H6.5C6.22386 18 6 17.7761 6 17.5V17ZM18 16V15H6V16H18ZM18 14H6V13H18V14ZM18 12V11H6V12H18ZM4 9H20V18.5074C20 19.3358 19.3284 20.0074 18.5 20.0074H5.5C4.67157 20.0074 4 19.3358 4 18.5074V9Z"
        fill={props.color ?? '#111'}
      />
    </svg>
  );
};

export default ViewAllIcon;